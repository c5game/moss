use chrono::{Datelike, Duration, Local};

use rcgen::{date_time_ymd, Certificate, CertificateParams, KeyPair};

use std::fs;
use x509_parser::pem::{ Pem};

use super::cert_generator::CertGenerator;
pub struct MOSSCertificateManager();

impl MOSSCertificateManager {
    pub fn new() -> Self {
        Self {}
    }
    fn generate_ca() -> (String, String) {
        let now = Local::now().date_naive();
        let end = now + Duration::days(300);
        let (ca, key) = CertGenerator::generate_certificate(
            date_time_ymd(end.year(), end.month() as u8, end.day() as u8),
            date_time_ymd(now.year(), now.month() as u8, now.day() as u8),
            true,
            vec!["MOSS Booster Certificate".to_string()],
            None,
        );
        (ca, key)
    }

    fn generate_server(dns: Vec<String>, ca_pem_path: &str, ca_key_path: &str) -> (String, String) {
        let ca_pem = fs::read_to_string(ca_pem_path).unwrap();
        let ca_key = fs::read_to_string(ca_key_path).unwrap();
        let key_pair = KeyPair::from_pem(&ca_key).unwrap();

        let ca = Certificate::from_params(
            CertificateParams::from_ca_cert_pem(&ca_pem, key_pair).unwrap(),
        )
        .unwrap();
        let now = Local::now().date_naive();
        let end = now + Duration::days(300);
        let mut  not_after = date_time_ymd(end.year(), end.month() as u8, end.day() as u8);
        let mut not_before =date_time_ymd(now.year(), now.month() as u8, now.day() as u8);
        let ca_file = std::io::BufReader::new(std::fs::File::open(&ca_pem_path).unwrap());

        let validity = Pem::read(ca_file)
            .unwrap()
            .0
            .parse_x509()
            .unwrap()
            .tbs_certificate.validity;
        let issuer_not_before = validity.not_before.to_datetime();
        let issuer_not_after = validity.not_after.to_datetime();

        if not_before < issuer_not_before {
            not_before = issuer_not_before;
        }
        if not_after > issuer_not_after {
            not_after = issuer_not_after;
        }
        let (cert, key) = CertGenerator::generate_certificate(
            not_after ,
            not_before,
            false,
            dns,
            Some(&ca),
        );
        (cert, key)
    }

    pub fn generate_ca_file(ca_path: &str, ca_key_path: &str) -> Result<String, std::io::Error> {
        let (ca, key) = Self::generate_ca();
        fs::write(ca_path, &ca.as_bytes())?;
        fs::write(ca_key_path, &key.as_bytes())?;
        Ok("success".to_string())
    }
    pub fn generate_server_file(
        path: &str,
        cert_key: &str,
        dns: Vec<String>,
        ca_path: &str,
        ca_key_path: &str,
    ) -> Result<String, std::io::Error> {

        let (cert, key) = Self::generate_server(dns, &ca_path, &ca_key_path);
        fs::write(path, &cert.as_bytes())?;
        fs::write(cert_key, &key.as_bytes())?;
        Ok("success".to_string())
    }
}
