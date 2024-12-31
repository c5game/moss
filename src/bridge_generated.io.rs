use super::*;
// Section: wire functions

#[no_mangle]
pub extern "C" fn wire_create_log_stream(port_: i64) {
    wire_create_log_stream_impl(port_)
}

#[no_mangle]
pub extern "C" fn wire_init_sdk(port_: i64) {
    wire_init_sdk_impl(port_)
}

#[no_mangle]
pub extern "C" fn wire_generate_ca_file(
    port_: i64,
    ca_path: *mut wire_uint_8_list,
    ca_key_path: *mut wire_uint_8_list,
) {
    wire_generate_ca_file_impl(port_, ca_path, ca_key_path)
}

#[no_mangle]
pub extern "C" fn wire_generate_server_file(
    port_: i64,
    path: *mut wire_uint_8_list,
    cert_key: *mut wire_uint_8_list,
    dns: *mut wire_StringList,
    ca_path: *mut wire_uint_8_list,
    ca_key_path: *mut wire_uint_8_list,
) {
    wire_generate_server_file_impl(port_, path, cert_key, dns, ca_path, ca_key_path)
}

#[no_mangle]
pub extern "C" fn wire_run_server(
    port_: i64,
    config: *mut wire_list_proxy_domain_info,
    server_cert_path: *mut wire_uint_8_list,
    server_key_path: *mut wire_uint_8_list,
    is_dynamic: bool,
    mitm_port_path: *mut wire_uint_8_list,
    scripts: *mut wire_list_script_entity,
) {
    wire_run_server_impl(
        port_,
        config,
        server_cert_path,
        server_key_path,
        is_dynamic,
        mitm_port_path,
        scripts,
    )
}

#[no_mangle]
pub extern "C" fn wire_stop_server(port_: i64) {
    wire_stop_server_impl(port_)
}

#[no_mangle]
pub extern "C" fn wire_run_mitm_server(
    port_: i64,
    server_host: *mut wire_uint_8_list,
    config: *mut wire_list_proxy_domain_info,
    ca_path: *mut wire_uint_8_list,
    ca_key_path: *mut wire_uint_8_list,
    mitm_port_path: *mut wire_uint_8_list,
) {
    wire_run_mitm_server_impl(
        port_,
        server_host,
        config,
        ca_path,
        ca_key_path,
        mitm_port_path,
    )
}

#[no_mangle]
pub extern "C" fn wire_stop_mitm_server(port_: i64) {
    wire_stop_mitm_server_impl(port_)
}

// Section: allocate functions

#[no_mangle]
pub extern "C" fn new_StringList_0(len: i32) -> *mut wire_StringList {
    let wrap = wire_StringList {
        ptr: support::new_leak_vec_ptr(<*mut wire_uint_8_list>::new_with_null_ptr(), len),
        len,
    };
    support::new_leak_box_ptr(wrap)
}

#[no_mangle]
pub extern "C" fn new_list_proxy_domain_info_0(len: i32) -> *mut wire_list_proxy_domain_info {
    let wrap = wire_list_proxy_domain_info {
        ptr: support::new_leak_vec_ptr(<wire_ProxyDomainInfo>::new_with_null_ptr(), len),
        len,
    };
    support::new_leak_box_ptr(wrap)
}

#[no_mangle]
pub extern "C" fn new_list_script_entity_0(len: i32) -> *mut wire_list_script_entity {
    let wrap = wire_list_script_entity {
        ptr: support::new_leak_vec_ptr(<wire_ScriptEntity>::new_with_null_ptr(), len),
        len,
    };
    support::new_leak_box_ptr(wrap)
}

#[no_mangle]
pub extern "C" fn new_uint_8_list_0(len: i32) -> *mut wire_uint_8_list {
    let ans = wire_uint_8_list {
        ptr: support::new_leak_vec_ptr(Default::default(), len),
        len,
    };
    support::new_leak_box_ptr(ans)
}

// Section: related functions

// Section: impl Wire2Api

impl Wire2Api<String> for *mut wire_uint_8_list {
    fn wire2api(self) -> String {
        let vec: Vec<u8> = self.wire2api();
        String::from_utf8_lossy(&vec).into_owned()
    }
}
impl Wire2Api<Vec<String>> for *mut wire_StringList {
    fn wire2api(self) -> Vec<String> {
        let vec = unsafe {
            let wrap = support::box_from_leak_ptr(self);
            support::vec_from_leak_ptr(wrap.ptr, wrap.len)
        };
        vec.into_iter().map(Wire2Api::wire2api).collect()
    }
}

impl Wire2Api<Vec<ProxyDomainInfo>> for *mut wire_list_proxy_domain_info {
    fn wire2api(self) -> Vec<ProxyDomainInfo> {
        let vec = unsafe {
            let wrap = support::box_from_leak_ptr(self);
            support::vec_from_leak_ptr(wrap.ptr, wrap.len)
        };
        vec.into_iter().map(Wire2Api::wire2api).collect()
    }
}
impl Wire2Api<Vec<ScriptEntity>> for *mut wire_list_script_entity {
    fn wire2api(self) -> Vec<ScriptEntity> {
        let vec = unsafe {
            let wrap = support::box_from_leak_ptr(self);
            support::vec_from_leak_ptr(wrap.ptr, wrap.len)
        };
        vec.into_iter().map(Wire2Api::wire2api).collect()
    }
}
impl Wire2Api<ProxyDomainInfo> for wire_ProxyDomainInfo {
    fn wire2api(self) -> ProxyDomainInfo {
        ProxyDomainInfo {
            forward_domain_name: self.forward_domain_name.wire2api(),
            host: self.host.wire2api(),
            port: self.port.wire2api(),
        }
    }
}
impl Wire2Api<ScriptEntity> for wire_ScriptEntity {
    fn wire2api(self) -> ScriptEntity {
        ScriptEntity {
            script_path: self.script_path.wire2api(),
        }
    }
}

impl Wire2Api<Vec<u8>> for *mut wire_uint_8_list {
    fn wire2api(self) -> Vec<u8> {
        unsafe {
            let wrap = support::box_from_leak_ptr(self);
            support::vec_from_leak_ptr(wrap.ptr, wrap.len)
        }
    }
}
// Section: wire structs

#[repr(C)]
#[derive(Clone)]
pub struct wire_StringList {
    ptr: *mut *mut wire_uint_8_list,
    len: i32,
}

#[repr(C)]
#[derive(Clone)]
pub struct wire_list_proxy_domain_info {
    ptr: *mut wire_ProxyDomainInfo,
    len: i32,
}

#[repr(C)]
#[derive(Clone)]
pub struct wire_list_script_entity {
    ptr: *mut wire_ScriptEntity,
    len: i32,
}

#[repr(C)]
#[derive(Clone)]
pub struct wire_ProxyDomainInfo {
    forward_domain_name: *mut wire_uint_8_list,
    host: *mut wire_uint_8_list,
    port: u16,
}

#[repr(C)]
#[derive(Clone)]
pub struct wire_ScriptEntity {
    script_path: *mut wire_uint_8_list,
}

#[repr(C)]
#[derive(Clone)]
pub struct wire_uint_8_list {
    ptr: *mut u8,
    len: i32,
}

// Section: impl NewWithNullPtr

pub trait NewWithNullPtr {
    fn new_with_null_ptr() -> Self;
}

impl<T> NewWithNullPtr for *mut T {
    fn new_with_null_ptr() -> Self {
        std::ptr::null_mut()
    }
}

impl NewWithNullPtr for wire_ProxyDomainInfo {
    fn new_with_null_ptr() -> Self {
        Self {
            forward_domain_name: core::ptr::null_mut(),
            host: core::ptr::null_mut(),
            port: Default::default(),
        }
    }
}

impl Default for wire_ProxyDomainInfo {
    fn default() -> Self {
        Self::new_with_null_ptr()
    }
}

impl NewWithNullPtr for wire_ScriptEntity {
    fn new_with_null_ptr() -> Self {
        Self {
            script_path: core::ptr::null_mut(),
        }
    }
}

impl Default for wire_ScriptEntity {
    fn default() -> Self {
        Self::new_with_null_ptr()
    }
}

// Section: sync execution mode utility

#[no_mangle]
pub extern "C" fn free_WireSyncReturn(ptr: support::WireSyncReturn) {
    unsafe {
        let _ = support::box_from_leak_ptr(ptr);
    };
}
