use rand::rngs::OsRng;
use rcgen::{
    BasicConstraints, Certificate, CertificateParams, DnType, ExtendedKeyUsagePurpose, IsCa,
    KeyPair, KeyUsagePurpose, SanType,
};
use rsa::{pkcs8::EncodePrivateKey, RsaPrivateKey};
use time::OffsetDateTime;

pub struct CertGenerator;

impl CertGenerator {
    pub fn generate_certificate(
        not_after: OffsetDateTime,
        not_before: OffsetDateTime,
        is_ca: bool,
        dns: Vec<String>,
        ca: Option<&Certificate>,
    ) -> (String, String) {
        let mut params: CertificateParams = Default::default();

        params.not_after = not_after;
        params.not_before = not_before;
        params.distinguished_name.push(DnType::CountryName, "CN");
        params
            .distinguished_name
            .push(DnType::OrganizationName, "MOSS Booster");
        params
            .distinguished_name
            .push(DnType::OrganizationalUnitName, "MOSS Booster");
        if is_ca {
            params
                .distinguished_name
                .push(DnType::CommonName, "MOSS Booster Certificate");
        }else{
            params
                .distinguished_name
                .push(DnType::CommonName, "MOSS Booster Certificate Server");
        }

        if is_ca {
            params.is_ca = IsCa::Ca(BasicConstraints::Constrained(1));
        } else {
            params.is_ca = IsCa::NoCa;
        };
        if is_ca{
            //keyusage
            params.key_usages = vec![
                KeyUsagePurpose::DigitalSignature,
                KeyUsagePurpose::CrlSign,
                KeyUsagePurpose::KeyCertSign,
            ];
        }

        params.extended_key_usages = vec![
            ExtendedKeyUsagePurpose::ServerAuth,
            ExtendedKeyUsagePurpose::ClientAuth,
        ];
        if !is_ca {
            params.use_authority_key_identifier_extension = true;
            params.alg = &rcgen::PKCS_RSA_SHA256;
            let mut rng = OsRng;
            let bits = 2048;
            let private_key = RsaPrivateKey::new(&mut rng, bits).unwrap();
            let private_key_der = private_key.to_pkcs8_der().unwrap();
            let key_pair = KeyPair::try_from(private_key_der.as_bytes()).unwrap();
            params.key_pair = Some(key_pair);
        } else {
            params.alg = &rcgen::PKCS_RSA_SHA256;
            let mut rng = OsRng;
            let bits = 2048;
            let private_key = RsaPrivateKey::new(&mut rng, bits).unwrap();
            let private_key_der = private_key.to_pkcs8_der().unwrap();
            let key_pair = KeyPair::try_from(private_key_der.as_bytes()).unwrap();
            params.key_pair = Some(key_pair);
        }
        let mut subject_alt_names = vec![SanType::DnsName("MOSS Booster Certificate".to_string())];
        if !is_ca && dns.len() > 0 {
            subject_alt_names.extend(dns.iter().map(|x| SanType::DnsName(x.to_string())));
        }
        params.subject_alt_names = subject_alt_names;

        if is_ca {
            let ca_cert = Certificate::from_params(params).unwrap();
            (
                ca_cert.serialize_pem().unwrap(),
                ca_cert.serialize_private_key_pem(),
            )
        } else {
            let cert = Certificate::from_params(params).unwrap();
            (
                cert.serialize_pem_with_signer(ca.unwrap()).unwrap(),
                cert.serialize_private_key_pem(),
            )
        }
    }
}
