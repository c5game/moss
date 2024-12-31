use url::Url;
use moss_rust::web_server::chrome_pattern::Pattern;

fn main() {
    let str = r#"https://steamcommunity.com/market/listings/730(%.{2})?/*/"#;
match Pattern::new(str, false) {
    Ok(pattern) => {
        let url = Url::parse("https://steamcommunity.com/market/listings/730/SG%20553%20%7C%20Integrale%20%28Field-Tested%29").unwrap();
        let is_match = pattern.is_match(&url);
        if is_match{
            println!("匹配成功");
        }else {
            println!("匹配失败");
        }
    }
    Err(err) => {
        println!("匹配失败{:?}",err)
    }
}}