use moss_rust::api::{self, generate_ca_file, generate_server_file};

fn main() {
    api::init_sdk();
    // generate_ca_file("ca111.pem".to_string(), "ca111.key".to_string()).unwrap();
    generate_server_file(
        "ca/server_crt.crt".to_string(),
        "ca/server.key".to_string(),
        vec![
            "steamcommunity.com".to_string(),
            "store.steampowered.com".to_string(),
            "local.mossbooster.com".to_string(),
            "origin-a.akamaihd.net".to_string()
        ],
        "ca/root_crt.crt".to_string(),
        "ca/root.key".to_string(),
    )
    .unwrap();

  

}

