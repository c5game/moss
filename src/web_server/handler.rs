use std::str::FromStr;
use http::{Method, Request, Response, Uri};
use hudsucker::{HttpContext, HttpHandler, RequestOrResponse, WebSocketContext, WebSocketHandler};
use crate::web_server::proxy_entity::ProxyDomainInfo;
use hudsucker::
async_trait::async_trait;
use hudsucker::hyper::Body;
use hudsucker::tokio_tungstenite::tungstenite::Message;
use log::info;
use url::Url;

#[derive(Clone)]
pub struct ForwardHandler {
    server_host:String,
    config: Vec<ProxyDomainInfo>,
}

impl ForwardHandler {
    pub fn new(server_host:String,config: Vec<ProxyDomainInfo>) -> Self {
        Self { server_host,config }
    }
}

#[async_trait]
impl HttpHandler for ForwardHandler {
    async fn handle_request(
        &mut self,
        _ctx: &HttpContext,
        req: Request<Body>,
    ) -> RequestOrResponse {
        for i in self.config.iter() {
            if req.uri().host().unwrap() == i.host {
                if req.method() == Method::CONNECT {
                    return req.into();
                }
                println!("lllgm proxy:{}", i.host);

                let path_and_query = match req.uri().path_and_query().map(|pq| pq.clone()) {
                    Some(pq) => pq,
                    None => {
                        let pq = http::uri::PathAndQuery::from_str("/").unwrap();
                        pq
                    }
                };
                let url = Url::parse(i.forward_domain_name.as_str()).unwrap();
                let host = url.host().unwrap();
                info!("lllgm host:{}", host);
                info!("lllgm self.server_host:{}", self.server_host);
                let target_uri = Uri::builder()
                    .scheme("http")
                    .authority(self.server_host.as_str())
                    .path_and_query(path_and_query)
                    .build()
                    .unwrap();
                info!("lllgm target_uri:{}", target_uri);
                let mut new_req_builder = Request::builder()
                    .method(req.method().clone())
                    .uri(target_uri);

                for (header_name, header_value) in req.headers() {
                    new_req_builder =
                        new_req_builder.header(header_name.clone(), header_value.clone());
                }
                new_req_builder
                    .headers_mut()
                    .unwrap()
                    .insert("system_proxy_host", i.host.parse().unwrap());

                return new_req_builder.body(req.into_body()).unwrap().into();
            }
        }

        req.into()
    }

    async fn handle_response(&mut self, _ctx: &HttpContext, res: Response<Body>) -> Response<Body> {
        res
    }
}

#[async_trait]
impl WebSocketHandler for ForwardHandler {
    async fn handle_message(&mut self, _ctx: &WebSocketContext, msg: Message) -> Option<Message> {
        println!("WebSocketHandler handle_message {:?}", msg);
        Some(msg)
    }
}
