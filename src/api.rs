use crate::{
    certificate::certificate_manager::MOSSCertificateManager,
    core::{core::MOSSCore, event::EventEntry},
    web_server::{proxy_entity::ProxyDomainInfo},
};
use anyhow::{Ok, Result};
use flutter_rust_bridge::{StreamSink};
use lazy_static::lazy_static;
use log::info;
use parking_lot::RwLock;
use crate::core::utils::Utils;
use crate::web_server::script_entity::ScriptEntity;


lazy_static! {
    static ref MOSS_CORE: RwLock<Option<MOSSCore>> = RwLock::new(None);
    pub static ref EVENT_STREAM: RwLock<Option<StreamSink<EventEntry>>> = RwLock::new(None);
}

pub fn create_log_stream(s: StreamSink<EventEntry>) {
    *EVENT_STREAM.write() = Some(s);
}

pub fn init_sdk() {
    // 判断是否已经初始化
    if MOSS_CORE.read().is_none() {
        info!("Initializing MOSS Core");
        *MOSS_CORE.write() = Some(MOSSCore::new());
    } else {
        info!("MOSS Core already initialized, reinitializing!!!！");
        // 关闭之前的 web_server
        MOSS_CORE.read().as_ref().unwrap().web_server.stop_server();
        // 关闭之前的 mitm_server
        MOSS_CORE.read().as_ref().unwrap().mitm_server.stop_server();
        drop(MOSS_CORE.read());
        info!("MOSS Core reinitialized");
        *MOSS_CORE.write() = Some(MOSSCore::new());
    }
}


pub fn generate_ca_file(ca_path: String, ca_key_path: String) -> Result<()> {
    MOSSCertificateManager::generate_ca_file(&ca_path, &ca_key_path)?;
    Ok(())
}

pub fn generate_server_file(
    path: String,
    cert_key: String,
    dns: Vec<String>,
    ca_path: String,
    ca_key_path: String,
) -> Result<()> {
    MOSSCertificateManager::generate_server_file(&path, &cert_key, dns, &ca_path, &ca_key_path)?;
    Ok(())
}

pub fn run_server(
    config: Vec<ProxyDomainInfo>,
    server_cert_path: String,
    server_key_path: String,
    is_dynamic: bool,
    mitm_port_path: String,
    scripts: Vec<ScriptEntity>,
) -> anyhow::Result<()> {
    println!("run_server");
    Utils::send_msg_to_dart(88, "run server".to_string());
    match MOSS_CORE.read().as_ref() {
        Some(core) => {
            core.web_server.run_server(
                config,
                server_cert_path,
                server_key_path,
                is_dynamic,
                mitm_port_path,
                scripts,
            )?;
            Ok(())
        }
        None => {
            println!("MOSS Core not initialized");
            Err(anyhow::anyhow!("MOSS Core not initialized"))
        }
    }
}

pub fn stop_server() {
    MOSS_CORE.read().as_ref().unwrap().web_server.stop_server();
}

pub fn run_mitm_server(server_host: String, config: Vec<ProxyDomainInfo>, ca_path: String, ca_key_path: String, mitm_port_path: String) {
    Utils::send_msg_to_dart(88, format!("run mitm server: {},ca path:{},key:{}", server_host, ca_path.clone(), ca_key_path.clone()));
    MOSS_CORE
        .read()
        .as_ref()
        .unwrap()
        .mitm_server
        .run_mitm_server(server_host, config, ca_path, ca_key_path, mitm_port_path);
}

pub fn stop_mitm_server() {
    MOSS_CORE.read().as_ref().unwrap().mitm_server.stop_server();
}
