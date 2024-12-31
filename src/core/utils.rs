use crate::api::EVENT_STREAM;

use super::event::EventEntry;

pub struct Utils {}

impl Utils {
    pub fn send_msg_to_dart(msg_type: i32, content: String) {
        println!("want to send msg to dart: {},{}", msg_type, content);
        match EVENT_STREAM.read().as_ref() {
            Some(s) => {
                s.add(EventEntry {
                    msg_type,
                    msg: content,
                });
            }
            None => {
                println!("Event stream not initialized");
                ()
            }
        }
    }
}
