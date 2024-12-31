#[derive(Debug, Clone)]
pub struct  ScriptEntity{
    pub script_path:String,
}

impl ScriptEntity {
    pub fn new(script_path: String) -> Self {
        Self {
            script_path,
        }
    }

}