#[derive(Debug, Clone)]
pub struct ProxyDomainInfo{
    pub forward_domain_name: String,
    pub host: String,
    pub port: u16,
}
impl ProxyDomainInfo {
    pub fn new(forward_domain_name: String, host: String, port: u16) -> Self {
        Self {
            forward_domain_name,
            host,
            port,
        }
    }

}
