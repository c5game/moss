struct MacOSShell {
   
}

impl MacOSShell {
    fn new() -> MacOSShell {
        MacOSShell {}
    }
}
impl Shell for MacOSShell{
    fn execute(&self, command: &str) -> Result<String, String> {
        let output = std::process::Command::new("sh")
            .arg("-c")
            .arg(command)
            .output()
            .expect("failed to execute process");
        if output.status.success() {
            Ok(String::from_utf8(output.stdout).unwrap())
        } else {
            Err(String::from_utf8(output.stderr).unwrap())
        }
    }
}
