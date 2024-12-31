use hudsucker::{
    certificate_authority::OpensslAuthority,
    openssl::{hash::MessageDigest, pkey::PKey, x509::X509},
    Proxy,
};
use rand::Rng;

use std::{
    fs,
    net::{SocketAddr, TcpListener},
    sync::{Arc, Mutex},
    time::Duration,
};
use log::info;
use tokio::{runtime::Runtime, sync::mpsc};

use crate::core::{consts::MITM_SERVER_EVENT, utils::Utils};
use crate::web_server::handler::ForwardHandler;

use super::proxy_entity::ProxyDomainInfo;

pub struct MOSSMITMService {
    tx: mpsc::Sender<()>,
    rx: Arc<Mutex<mpsc::Receiver<()>>>,
}

impl MOSSMITMService {
    pub fn new() -> Self {
        let (tx, rx): (mpsc::Sender<()>, mpsc::Receiver<()>) = mpsc::channel(1);
        Self {
            tx,
            rx: Arc::new(Mutex::new(rx)),
        }
    }
    #[tokio::main]
    pub async fn run_mitm_server(
        &self,
        server_host: String,
        config: Vec<ProxyDomainInfo>,
        ca_path: String,
        ca_key_path: String,
        mitm_port_path: String,

    ) {
        info!("run_mitm_server:{}\n ca_path:{}",server_host,ca_path);

        let private_key_bytes = match fs::read(ca_key_path) {
            Ok(bytes) => bytes,
            Err(e) => {
                Utils::send_msg_to_dart(MITM_SERVER_EVENT, format!("Server error: {:?}", e));
                return;
            }
        };

        let ca_cert_bytes = match fs::read(ca_path) {
            Ok(bytes) => bytes,
            Err(e) => {
                Utils::send_msg_to_dart(MITM_SERVER_EVENT, format!("Server error: {:?}", e));
                return;
            }
        };
        let private_key =
            match PKey::private_key_from_pem(&private_key_bytes) {
                Ok(bytes) => bytes,
                Err(e) => {
                    Utils::send_msg_to_dart(MITM_SERVER_EVENT, format!("Server error: {:?}", e));
                    return;
                }
            };
        let ca_cert = match X509::from_pem(&ca_cert_bytes) {
            Ok(bytes) => bytes,
            Err(e) => {
                Utils::send_msg_to_dart(MITM_SERVER_EVENT, format!("Server error: {:?}", e));
                return;
            }
        };

        let ca = OpensslAuthority::new(private_key, ca_cert, MessageDigest::sha256(), 1_000);

        //随机一个端口
        let mut rng = rand::thread_rng();
        let mut port: u16;
        let listener: TcpListener;
        loop {
            // 生成随机的端口号
            port = rng.gen_range(26500..=65535);
            info!("lllgm:port:{}", port);
            // Utils::send_msg_to_dart(88, format!("lllgm:port:{}", port));
            // 检查该端口是否可用
            if let Ok(l) = TcpListener::bind(SocketAddr::from(([127, 0, 0, 1], port))) {
                listener = l;
                break;
            }
        }
        let proxy = Proxy::builder()
            .with_listener(listener)
            .with_rustls_client()
            .with_ca(ca)
            .with_http_handler(ForwardHandler::new(server_host, config.clone()))
            .build();
        if let Err(e) = fs::write(mitm_port_path, port.to_string()) {
            Utils::send_msg_to_dart(MITM_SERVER_EVENT, format!("Server error: {:?}", e));
            return;
        }
        Utils::send_msg_to_dart(MITM_SERVER_EVENT, format!("Server started:{}", port));
        match proxy.start(shutdown_signal(self.rx.clone())).await {
            Ok(_) => {}
            Err(e) => {
                Utils::send_msg_to_dart(MITM_SERVER_EVENT, format!("Server error:{:?}", e));
            }
        }
    }

    pub fn stop_server(&self) {
        let tx = self.tx.clone();
        let rt = Runtime::new().expect("Failed to create tokio runtime");
        let handle = rt.spawn(async move {
            let _ = tx.send(()).await;
        });
        rt.block_on(handle).expect("Failed to block on tokio handle");
        rt.shutdown_timeout(Duration::from_secs(5));
    }
}

async fn shutdown_signal(rx: Arc<Mutex<mpsc::Receiver<()>>>) {
    rx.lock().unwrap().recv().await;
    Utils::send_msg_to_dart(MITM_SERVER_EVENT, format!("Server stop"));
    println!("Received shutdown signal");
}
