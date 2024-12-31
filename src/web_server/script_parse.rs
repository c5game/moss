use std::fs;
use crate::web_server::script_entity::ScriptEntity;

#[derive(Debug, Clone)]
pub struct ScriptParse {
  pub   script_entity: ScriptEntity,
    pub match_urls: Vec<String>,
    pub run_at: RunAt,
    pub requires: Vec<String>,
}

impl ScriptParse {
    pub fn parser(script_entity: ScriptEntity) -> Option<Self> {
        if let Ok(file_content) = fs::read_to_string(&script_entity.script_path) {
            let mut match_urls: Vec<String> = Vec::new();
            let mut run_at = RunAt::DocumentEnd;
            let mut requires: Vec<String> = Vec::new();
            for line in file_content.lines() {
                if line.contains("@match") {
                    if let Some(include) = line.split("@match").last() {
                        match_urls.push(include.trim().to_string());
                    }
                }
                if line.contains("@include") {
                    if let Some(include) = line.split("@include").last() {
                        match_urls.push(include.trim().to_string());
                    }
                }
                if line.contains("@run-at") {
                    if let Some(runat) = line.split("@run-at").last() {
                        let runat = runat.trim();
                        if runat.eq("document-start") {
                            run_at = RunAt::DocumentStart;
                        } else if runat.eq("document-end") {
                            run_at = RunAt::DocumentEnd;
                        } else if runat.eq("document-idle") {
                            run_at = RunAt::DocumentIdle;
                        }
                    }
                }
                if line.contains("@require") {
                    if let Some(require) = line.split("@require").last() {
                        requires.push(require.trim().to_string());
                    }
                }
            }
            return Some(Self {
                script_entity,
                match_urls,
                run_at,
                requires,
            });
        }
        None
    }
}

#[derive(Debug, Clone)]
pub enum RunAt {
    DocumentStart,
    DocumentEnd,
    DocumentIdle,
}
