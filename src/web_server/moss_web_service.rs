use std::{fs, fs::File, io::BufReader};
use std::collections::{HashMap};
use std::io::{Read};
use std::net::{TcpListener, ToSocketAddrs};
use std::path::Path;
use actix_cors::Cors;
use std::string::String;
use std::sync::Arc;
use crate::{
    core::{consts::WEB_SERVER_EVENT, utils::Utils},
    web_server::proxy_entity::ProxyDomainInfo,
};

use actix_web::{
    dev::ServerHandle, error, http::Method, middleware, web, App, Error, HttpRequest, HttpResponse,
    HttpServer,
};
use flate2::read::GzDecoder;
use http::header::{CONTENT_ENCODING, CONTENT_LENGTH, CONTENT_SECURITY_POLICY, CONTENT_TYPE};
use http::StatusCode;
use log::{info};
use parking_lot::Mutex;
use tokio::sync::Mutex as Mutex2;
use regex::Regex;
use reqwest::{Client, ClientBuilder};
use rustls::{Certificate, PrivateKey, ServerConfig};
use rustls_pemfile::{certs, pkcs8_private_keys};
use tokio::sync::mpsc;
use tokio_stream::{wrappers::UnboundedReceiverStream, StreamExt};
use url::Url;
use crate::core::consts::RESPONSE_BYTES_EVENT;
use crate::web_server::chrome_pattern::Pattern;
use crate::web_server::script_entity::ScriptEntity;
use crate::web_server::script_parse::{RunAt, ScriptParse};

pub struct MOSSWebService {
    stop_handle: StopHandle,
}

impl MOSSWebService {
    pub fn new() -> Self {
        let stop_handle = StopHandle::default();
        Self { stop_handle }
    }

    #[actix_web::main]
    pub async fn run_server(
        &self,
        config: Vec<ProxyDomainInfo>,
        server_cert_path: String,
        server_key_path: String,
        is_dynamic_port: bool,
        mitm_port_path: String,
        scripts: Vec<ScriptEntity>,
    ) -> std::io::Result<()> {
        println!("run_server");
        info!("Starting web engine");
        let parsed_scripts = scripts.iter().filter_map(|i| {
            ScriptParse::parser(i.clone())
        }).collect::<Vec<ScriptParse>>();
        let rustls_config = match load_rustls_config(server_cert_path, server_key_path) {
            Ok(config) => config,
            Err(e) => {
                Self::send2dart(format!("Server error: {:?}", e));
                return Err(std::io::Error::new(std::io::ErrorKind::Other, "Error"));
            }
        };
        //forward client
        let reqwest_client = ClientBuilder::new()
            .danger_accept_invalid_certs(true)
            .redirect(reqwest::redirect::Policy::none())
            .build()
            .unwrap();

        let scripts_clone = scripts.clone();
        //创建cache
        let scripts_cache = web::Data::new(ScriptCache {
            data: Arc::new(Mutex2::new(HashMap::new())),
        });
        let srv = HttpServer::new(move || {
            App::new()
                .app_data(web::Data::new(reqwest_client.clone()))
                .app_data(web::Data::new(config.clone()))
                .app_data(web::Data::new(mitm_port_path.clone()))
                .app_data(web::Data::new(scripts_clone.clone()))
                .app_data(web::Data::new(parsed_scripts.clone()))
                .app_data(scripts_cache.clone())
                .wrap(middleware::Logger::default())
                .wrap(Cors::default().allow_any_origin().allow_any_method().allow_any_header().max_age(3600))
                .service(web::resource("/pac").route(web::get().to(Self::pac)))
                .service(web::resource("/script/{file_name}").route(web::get().to(Self::script)))
                .service(web::resource("/proxy").route(web::get().to(Self::proxy)))
                .default_service(web::to(Self::forward_reqwest))
        });
        let mut https_port: u16 = 443;
        if is_dynamic_port {
            https_port = find_available_port();
        };
        let srv = match srv.bind_rustls(("0.0.0.0", https_port), rustls_config) {
            Ok(srv) => srv,
            Err(e) => {
                Self::send2dart(format!("Server error: {},{:?}", https_port, e));
                return Err(std::io::Error::new(std::io::ErrorKind::Other, "Error"));
            }
        };
        let mut http_port = 80;
        if is_dynamic_port {
            http_port = find_available_port();
        };
        let srv = match srv.bind(("0.0.0.0", http_port)) {
            Ok(srv) => srv,
            Err(e) => {
                Self::send2dart(format!("Server error: {},{:?}", http_port, e));
                return Err(std::io::Error::new(std::io::ErrorKind::Other, "Error"));
            }
        };

        let srv = srv.run();
        Self::send2dart(format!("Server started:{},{}", http_port, https_port));
        self.stop_handle.register(srv.handle());
        srv.await
    }


    pub fn stop_server(&self) {
        Self::send2dart("Server stop".to_string());
        self.stop_handle.stop(true);
    }

    fn send2dart(msg: String) {
        Utils::send_msg_to_dart(WEB_SERVER_EVENT, msg);
    }

    async fn proxy(req: HttpRequest,
                   config: web::Data<Vec<ProxyDomainInfo>>,
    ) -> HttpResponse {
        if let Some(query) = req.uri().query() {
            let mut params = HashMap::new();
            query.split("&").for_each(|item| {
                let mut item = item.split("=");
                let key = item.next().unwrap();
                let value = item.next().unwrap();
                params.insert(key.to_string(), value.to_string());
            });
            let url = params.get("url").unwrap();
            //url解码
            let url = urlencoding::decode(&url).unwrap().to_string();
            let url = Url::parse(url.as_str()).unwrap();
            if let Some(domain) = url.domain() {
                //如果是代理域名，重定向到forward_reqwest
                for i in config.iter() {
                    if i.host == domain {
                        return HttpResponse::Found().append_header((http::header::LOCATION, url.as_str())).finish();
                    }
                }
            }
            let reqwest_client = reqwest::Client::new();
            let request_builder = reqwest_client.get(url);
            //请求
            let response = request_builder.send().await.unwrap();
            let mut response_builder = HttpResponse::build(response.status());
            //设置header
            for (key, value) in response.headers().iter() {
                response_builder.insert_header((key.clone(), value.clone()));
            }
            let body = response.text().await.unwrap();
            // info!("proxy body = {:?}", body);
            return response_builder.body(body);
        }
        HttpResponse::Ok()
            .content_type("text/html;charset=utf-8")
            .body("welcome!")
    }
    async fn script(info: web::Path<(String, )>, scripts_cache: web::Data<ScriptCache>, parsed_scripts: web::Data<Vec<ScriptParse>>) -> HttpResponse {
        let file_name = info.0.to_string();
        if scripts_cache.data.lock().await.contains_key(&file_name) {
            info!("命中缓存 = {}",file_name);
            let script = scripts_cache.data.lock().await;
            let script = script.get(&file_name).unwrap();
            return HttpResponse::Ok()
                .content_type("application/javascript;charset=utf-8")
                .body(script.clone());
        }
        for parsed_script in parsed_scripts.iter() {
            let path = Path::new(parsed_script.script_entity.script_path.as_str());
            if let Some(script_filename) = path.file_name() {
                if let Some(script_filename) = script_filename.to_str() {
                    if script_filename == file_name {
                        if let Ok(script) = fs::read_to_string(path) {
                            if script_filename == "base.js" {
                                return HttpResponse::Ok()
                                    .content_type("application/javascript;charset=utf-8")
                                    .body(script);
                            }

                            // 创建多个线程来下载依赖文件
                            let mut requires_scripts = String::new();

                            let mut handles = Vec::new();
                            for require in parsed_script.requires.clone() {
                                let cache = Arc::clone(&scripts_cache.data);
                                let handle = tokio::spawn(async move {
                                    let mut lock = cache.lock().await;
                                    if let Some(script) = lock.get(&require) {
                                        info!("命中依赖缓存 {}",require);
                                        return (require, script.clone());
                                    }
                                    let reqwest_client = reqwest::Client::new();
                                    let request_builder = reqwest_client.get(require.as_str());
                                    //请求
                                    if let Ok(response) = request_builder.send().await {
                                        return if let Ok(body) = response.text().await {
                                            lock.insert(require.clone(), body.clone());
                                            (require, body)
                                        } else {
                                            (require, String::new())
                                        };
                                    } else {
                                        (require, String::new())
                                    }
                                });
                                handles.push(handle);
                            }
                            for handle in handles {
                                if let Ok(script) = handle.await {
                                    requires_scripts.push('\n');
                                    requires_scripts.push_str(script.1.as_str());
                                } else {
                                    info!("线程下载script error");
                                }
                            }
                            let regex = Regex::new(r#"function\s*\(\s*\)\s*[{|.*\n\s\{]"#).unwrap();
                            return if let Some(r#match) = regex.find(&script) {
                                let inject_point = r#match.end();
                                let mut script = script.clone();
                                script.insert_str(inject_point, requires_scripts.as_str());
                                scripts_cache.data.lock().await.insert(script_filename.to_string(), script.clone());
                                HttpResponse::Ok()
                                    .content_type("application/javascript;charset=utf-8")
                                    .body(script)
                            } else {
                                info!("无法找到匹配的位置");
                                HttpResponse::Ok()
                                    .content_type("application/javascript;charset=utf-8")
                                    .body(script)
                            };
                        }
                    }
                }
            }
        }

        HttpResponse::Ok()
            .content_type("text/html;charset=utf-8")
            .body("welcome!")
    }
    async fn pac(
        config: web::Data<Vec<ProxyDomainInfo>>,
        mitm_port_path: web::Data<String>,
    ) -> HttpResponse {
        let mut domain_patterns = Vec::new();
        for domain in config.iter() {
            domain_patterns.push(domain.host.as_str());
        }
        let path = mitm_port_path.clone().to_string();
        //读取本地pac文件
        let port = match fs::read_to_string(path) {
            Ok(port) => port,
            Err(e) => {
                Utils::send_msg_to_dart(WEB_SERVER_EVENT, format!("Server error: {}", e));
                "8080".to_string()
            }
        };

        let proxy_pac = create_proxy_pac(format!("127.0.0.1:{}", port).as_str(), domain_patterns);
        HttpResponse::Ok()
            .content_type("application/x-ns-proxy-autoconfig")
            .append_header(("Content-Disposition", "attachment;filename=proxy.pac"))
            .body(proxy_pac)
    }
    async fn forward_reqwest(
        req: HttpRequest,
        mut payload: web::Payload,
        method: Method,
        client: web::Data<reqwest::Client>,
        config: web::Data<Vec<ProxyDomainInfo>>,
        scripts: web::Data<Vec<ScriptEntity>>,
        parsed_scripts: web::Data<Vec<ScriptParse>>,
    ) -> Result<HttpResponse, Error> {
        // info!("request header: {:?}", req.headers());
        // info!("request: {:?}", req.uri().authority());
        // info!("request method: {:?}", req.method());

        let origin_host = match req.uri().host() {
            Some(host) => host.to_string(),
            None => match req.headers().get("system_proxy_host") {
                Some(header) => header.to_str().unwrap_or("").to_string(),
                None => match req.headers().get("host") {
                    Some(header) => header.to_str().unwrap_or("").to_string(),
                    None => "".to_string(),
                },
            },
        };

        info!("request: {:?}", origin_host);
        if origin_host == "local.mossbooster.com" {
            let mut res = HttpResponse::Ok();
            res.append_header(("Access-Control-Allow-Origin", "*"));
            return Ok(res.body("welcome to mossbooster! but noting in here!"));
        }
        let path = req.uri().path();
        let query = req.uri().query();

        //遍历config 找到host相同的ProxyDomainInfoEntity
        let target_config = config.iter().find(|&x| x.host == origin_host).unwrap();

        //拼接上path
        let mut target_url = Url::parse(&target_config.forward_domain_name).unwrap();
        target_url.set_path(path);
        target_url.set_query(query);
        info!("target_url: {:?}", target_url);

        let (tx, rx) = mpsc::unbounded_channel();

        actix_web::rt::spawn(async move {
            while let Some(chunk) = payload.next().await {
                tx.send(chunk).unwrap();
            }
        });
        let mut headers = reqwest::header::HeaderMap::new();

        req.headers().iter().for_each(|(k, v)| {
            headers.insert(k, v.clone());
        });
        headers.insert("host", target_config.host.parse().unwrap());
        info!("target_url: {:?}", target_url);
        let forwarded_req = client
            .request(method, target_url)
            .headers(headers)
            .body(reqwest::Body::wrap_stream(UnboundedReceiverStream::new(rx)))
            .fetch_mode_no_cors();

        let mut res = forwarded_req
            .send()
            .await
            .map_err(error::ErrorInternalServerError)?;

        info!("response: {:?}", res.status());
        let mut client_resp = HttpResponse::build(res.status());
        //如果header的content-encoding是gzip
        let content_encoding = res.headers().get(CONTENT_ENCODING);
        let is_gzip = match content_encoding {
            Some(header_value) => {
                info!("content_encoding: {:?}", header_value);
                if let Ok(s) = header_value.to_str() {
                    s.starts_with("gzip")
                } else {
                    false
                }
            }
            None => {
                info!("content_encoding: None");
                false
            }
        };

        //判断content-type 如果是html 就注入js
        let content_type = res.headers().get(CONTENT_TYPE);

        let enable_script = scripts.iter().len() != 0;
        let mut inject_scripts: Vec<&ScriptParse> = Vec::new();

        if enable_script {
            info!("开始寻找匹配的插件: {:?}", parsed_scripts);
            for parsed_script in parsed_scripts.iter() {
                info!("当前插件: {:?}", parsed_script);
                'domain: for y in parsed_script.match_urls.iter() {
                    let y = y.replace(r#"\"#, "");
                    if let Ok(pattern) = Pattern::new(y.as_str(), false) {
                        let url = Url::parse(format!("https://{}{}", origin_host, req.uri().path()).as_str()).unwrap();
                        let is_match = pattern.is_match(&url);
                        info!("script match:parsed_script{},  {} url:{},  is_match:{}",parsed_script.script_entity.script_path,y,url,is_match);
                        if is_match {
                            inject_scripts.push(&parsed_script);
                            break 'domain;
                        }
                    } else {
                        info!("匹配规则错误:{}",y);
                    }
                }
            }
        }
        info!("inject_scripts: {:?}", inject_scripts);
        //是否需要注入js,如果不需要 无需做额外的处理
        let need_inject_script = inject_scripts.len() != 0;
        if need_inject_script {
            let is_html = match content_type {
                Some(header_value) => {
                    info!("content_type: {:?}", header_value);
                    if let Ok(s) = header_value.to_str() {
                        s.starts_with("text/html")
                    } else {
                        false
                    }
                }
                None => {
                    info!("content_type: None");
                    false
                }
            };
            if is_html && is_gzip {
                res.headers_mut().remove(CONTENT_ENCODING);
                res.headers_mut().remove(CONTENT_LENGTH);
            }
            //remove content-security-policy,cuz it will block js
            res.headers_mut().remove(CONTENT_SECURITY_POLICY);
            // Remove `Connection` as per
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Connection#Directives
            for (header_name, header_value) in res.headers().iter().filter(|(h, _)| *h != "connection")
            {
                client_resp.insert_header((header_name.clone(), header_value.clone()));
            }
            let is_ok = res.status() == StatusCode::OK;
            let body_bytes = res.bytes().await.map_err(error::ErrorInternalServerError)?;
            Utils::send_msg_to_dart(RESPONSE_BYTES_EVENT, format!("Response bytes:{}", body_bytes.len()));
            if is_html && is_ok {
                let mut body_str = String::new();
                if is_gzip {
                    let mut decoder = GzDecoder::new(&body_bytes[..]);
                    decoder.read_to_string(&mut body_str).unwrap();
                } else {
                    return Ok(client_resp.body(body_bytes));
                }

                let re = Regex::new(r#"(?s)<body(.*?)>(.*?)</body>"#).unwrap();
                let mut script_content = String::new();
                script_content.push_str("let onDomLoadListeners=[];\n");
                script_content.push_str("let onLoadListeners=[];\n");
                script_content.push_str("let onIdleListeners=[];\n");

                script_content.push_str("function SteamBooster_addEventListeners() {\n");
                script_content.push_str("window.addEventListener('DOMContentLoaded', function (e) {\n");
                script_content.push_str("for (let index =0;index<onDomLoadListeners.length;index++){\n");
                script_content.push_str("console.log('dom end');\n");
                script_content.push_str("onDomLoadListeners[index]();\n");
                script_content.push_str("}\n");
                script_content.push_str("},false);\n");

                script_content.push_str("window.addEventListener('load', function () {\n");
                script_content.push_str("for (let index =0;index<onLoadListeners.length;index++){\n");
                // script_content.push_str("console.log('start');\n");
                script_content.push_str("onLoadListeners[index]();\n");
                script_content.push_str("}\n");
                script_content.push_str("});\n");

                script_content.push_str("window.requestIdleCallback(function () {\n");
                script_content.push_str("for (let index =0;index<onIdleListeners.length;index++){\n");
                // script_content.push_str("console.log('onIdle');\n");
                script_content.push_str("onIdleListeners[index]();\n");
                script_content.push_str("}\n");
                script_content.push_str("});\n");
                script_content.push_str("}\n");
                let client = Client::new();

                //前缀
                let mut suffix = 0;
                for entity in inject_scripts.iter() {
                    let path = &entity.script_entity.script_path;
                    let path = Path::new(path.as_str());
                    if let Some(filename) = path.file_name() {
                        let filename = filename.to_str().unwrap();
                        let request_builder = client.get(format!("https://local.mossbooster.com/script/{}", filename).as_str());
                        if let Ok(response) = request_builder.send().await {
                            if let Ok(content) = response.text().await {
                                script_content.push_str(format!("var wrap{} =function(){{{}}}", suffix, content).as_str());
                                script_content.push_str("\n");
                                match entity.run_at {
                                    RunAt::DocumentEnd => {
                                        script_content.push_str(format!("onDomLoadListeners.push(wrap{});\n", suffix).as_str());
                                    }
                                    RunAt::DocumentIdle => {
                                        script_content.push_str(format!("onIdleListeners.push(wrap{});\n", suffix).as_str());
                                    }
                                    RunAt::DocumentStart => {
                                        script_content.push_str(format!("onLoadListeners.push(wrap{});\n", suffix).as_str());
                                    }
                                }
                                suffix = suffix + 1;
                                script_content.push_str("\n");
                            }
                        }
                    }
                }
                script_content.push_str("SteamBooster_addEventListeners();");

                let new_body_str = re.replace(&body_str, |caps: &regex::Captures| {
                    let body_attrs = caps.get(1).unwrap().as_str();
                    let body_content = caps.get(2).unwrap().as_str();
                    let mut script_tag = String::new();
                    script_tag.push_str(r#"<script src="https://local.mossbooster.com/script/base.js"></script>"#);
                    script_tag.push_str(format!(r#"<script>{}</script>"#, script_content).as_str());
                    format!(r#"<body{}>{}</body>{} "#, body_attrs, body_content, script_tag, )
                }).to_string();
                Ok(client_resp.body(new_body_str))
            } else {
                Ok(client_resp.body(body_bytes))
            }
        } else {
            // Remove `Connection` as per
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Connection#Directives
            for (header_name, header_value) in res.headers().iter().filter(|(h, _)| *h != "connection")
            {
                client_resp.insert_header((header_name.clone(), header_value.clone()));
            }
            let body_bytes = res.bytes().await.map_err(error::ErrorInternalServerError)?;
            Utils::send_msg_to_dart(RESPONSE_BYTES_EVENT, format!("Response bytes:{}", body_bytes.len()));
            Ok(client_resp.body(body_bytes))
        }
    }
}

fn create_proxy_pac(proxy_host: &str, domain_patterns: Vec<&str>) -> String {
    let mut builder = String::new();
    builder.push_str("function FindProxyForURL(url, host){\n");
    builder.push_str(&format!("    var pac = 'PROXY {}';\n", proxy_host));

    for domain_pattern in domain_patterns {
        for domain in domain_pattern.split(|c| c == '*' || c == '|') {
            if !domain.is_empty() {
                builder.push_str(&format!("    if (shExpMatch(host, '{}')) return pac;\n", domain));
            }
        }
    }

    builder.push_str("    return 'DIRECT';\n");
    builder.push_str("}");
    builder
}

fn find_available_port() -> u16 {
    let listener = TcpListener::bind("0.0.0.0:0").unwrap();
    let port = listener.local_addr().unwrap().port();
    drop(listener); // 关闭listener
    port
}

pub fn load_rustls_config(
    server_cert_path: String,
    server_key_path: String,
) -> Result<ServerConfig, Error> {
    let config = ServerConfig::builder()
        .with_safe_defaults()
        .with_no_client_auth();

    let cert_file = &mut BufReader::new(File::open(server_cert_path).unwrap());
    let cert_chain = certs(cert_file)
        .unwrap()
        .into_iter()
        .map(Certificate)
        .collect();

    let key_file = &mut BufReader::new(File::open(server_key_path).unwrap());
    let mut keys: Vec<PrivateKey> = pkcs8_private_keys(key_file)
        .unwrap()
        .into_iter()
        .map(PrivateKey)
        .collect();

    if keys.is_empty() {
        eprintln!("Could not locate PKCS 8 private keys.");
        std::process::exit(1);
    }

    match config.with_single_cert(cert_chain, keys.remove(0)) {
        Ok(config) => Ok(config),
        Err(e) => Err(
            std::io::Error::new(std::io::ErrorKind::Other, format!("Error: {:?}", e)).into(),
        )
    }
}

#[derive(Default)]
struct StopHandle {
    inner: Mutex<Option<ServerHandle>>,
}

impl StopHandle {
    /// Sets the server handle to stop.
    pub(crate) fn register(&self, handle: ServerHandle) {
        *self.inner.lock() = Some(handle);
    }


    pub(crate) fn stop(&self, graceful: bool) {
        #[allow(clippy::let_underscore_future)]
        if let Some(inner) = self.inner.lock().as_ref() {
            let _ = inner.stop(graceful);
        } else {
            println!("inner is none");
            // handle the case when self.inner.lock() returns None
            // for example, by logging an error or returning an error value
        }
    }
}

struct ScriptCache {
    data: Arc<Mutex2<HashMap<String, String>>>,
}

