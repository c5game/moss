use std::fs;
use regex::Regex;

fn main() {
    let script =fs::read_to_string("your file").unwrap();
    let regex =   Regex::new(r#"function\s*\(\s*\)\s*[{|.*\n\s\{]"#).unwrap();
    let result = regex.find(&script).unwrap();
    println!("{:?}",result);
    result.start();
}