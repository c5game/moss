trait Shell{
    fn execute(&self, command: &str) -> Result<String, String>;
}