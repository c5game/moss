use std::sync::{Arc, RwLock};

use moss_rust::{api, web_server::proxy_entity::ProxyDomainInfo};
use moss_rust::web_server::script_entity::ScriptEntity;

fn main() {
    let config = vec![
        ProxyDomainInfo::new(
            // steamcommunity.rmbgame.net
            "https://steamcommunity.rmbgame.net/".to_string(),
            "steamcommunity.com".to_string(),
            443,
        ),
        ProxyDomainInfo::new(
            "https://steamcommunity.rmbgame.net/".to_string(),
            "store.steampowered.com".to_string(),
            443,
        ),
        ProxyDomainInfo::new(
            "http://127.0.0.1/".to_string(),
            "local.mossbooster.com".to_string(),
            443,
        ),
    ];

    api::init_sdk();

    let ca_key = Arc::new(RwLock::new("your path".to_string()));
    let ca = Arc::new(RwLock::new("your path".to_string()));
    // let ca_key = Arc::new(RwLock::new("ca111.key".to_string()));
    // let ca = Arc::new(RwLock::new("ca111.pem".to_string()));

    //
    let ca_key_clone = Arc::clone(&ca_key);
    let ca_clone = Arc::clone(&ca);
    //
    // let handle1= std::thread::spawn(move || {
    //      api::run_mitm_server(config_clone, ca_clone.read().unwrap().clone(), ca_key_clone.read().unwrap().clone());
    //  });
    //  let ca_key_clone = Arc::clone(&ca_key);
    //  let ca_clone = Arc::clone(&ca);
    //  let handle2= std::thread::spawn(move || {
    //      api::run_server(config.clone(), ca_clone.read().unwrap().clone(), ca_key_clone.read().unwrap().clone()).unwrap();
    //  });
    //
    //  handle1.join().unwrap();
    //  handle2.join().unwrap();


// api::run_mitm_server(config_clone, ca_clone.read().unwrap().clone(), ca_key_clone.read().unwrap().clone());
    let script = vec![
        ScriptEntity::new(
            "./script/base.js".to_string()),
            ScriptEntity::new("./script/pureSteam.js".to_string()),
         // ScriptEntity::new("./script/historyLowest.js".to_string()),

        ScriptEntity::new("./script/topSellerFilter.js".to_string()),

    ];
    api::run_server(config.clone(), ca_clone.read().unwrap().clone(), ca_key_clone.read().unwrap().clone(), false, "mitm_port".to_string(),script).unwrap();
}
