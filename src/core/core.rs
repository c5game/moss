use std::sync::Arc;
use log::info;
use crate::{
    certificate::certificate_manager::MOSSCertificateManager,
    web_server::{moss_mitm_service::MOSSMITMService, moss_web_service::MOSSWebService},
};

#[derive(Clone)]
pub struct MOSSCore {
    pub web_server: Arc<MOSSWebService>,

    pub certificate_manager: Arc<MOSSCertificateManager>,

    pub mitm_server: Arc<MOSSMITMService>,
}

impl MOSSCore {
    pub fn new() -> Self {
        init_log();
        let web_server = Arc::new(MOSSWebService::new());
        let certificate_manager = Arc::new(MOSSCertificateManager::new());
        let mitm_server = Arc::new(MOSSMITMService::new());
        Self {
            web_server,
            certificate_manager,
            mitm_server,
        }
    }
}

fn init_log() {
    env_logger::try_init_from_env(env_logger::Env::default().default_filter_or("info")).unwrap_or_else(|e| {
        eprintln!("Error initializing logger: {}", e);
    });

}
impl Drop for MOSSCore {
    fn drop(&mut self) {
        info!("MOSSCore drop");
        // Release the resources held by the Arc references
        drop(self.web_server.clone());
        drop(self.certificate_manager.clone());
        drop(self.mitm_server.clone());
    }
}
