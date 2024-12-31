use std::sync::{Arc, RwLock};

use moss_rust::{api, web_server::proxy_entity::ProxyDomainInfo};

fn main() {
    let config = vec![
        ProxyDomainInfo::new(
            "https://a1697.b.akamai.net".to_string(),
            "steamcommunity.com".to_string(),
            443,
        ),
        ProxyDomainInfo::new(
            "https://a1697.b.akamai.net".to_string(),
            "store.steampowered.com".to_string(),
            443,
        ),
    ];

    api::init_sdk();

    let ca_key = Arc::new(RwLock::new("your path".to_string()));
    let ca = Arc::new(RwLock::new("your path".to_string()));
    let config_clone = config.clone();


    let ca_key_clone = Arc::clone(&ca_key);
    let ca_clone = Arc::clone(&ca);

//    let handle1= std::thread::spawn(move || {
//         api::run_mitm_server(config_clone, ca_clone.read().unwrap().clone(), ca_key_clone.read().unwrap().clone());
//     });
//     let ca_key_clone = Arc::clone(&ca_key);
//     let ca_clone = Arc::clone(&ca);
//     let handle2= std::thread::spawn(move || {
//         api::run_server(config.clone(), ca_clone.read().unwrap().clone(), ca_key_clone.read().unwrap().clone()).unwrap();
//     });

//     handle1.join().unwrap();
//     handle2.join().unwrap();

    let server_hosts = String::from("127.0.0.1");

    api::run_mitm_server(server_hosts, config_clone, ca_clone.read().unwrap().clone(), ca_key_clone.read().unwrap().clone(),"mitm_port".to_string());
}
