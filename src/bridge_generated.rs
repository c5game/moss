#![allow(
    non_camel_case_types,
    unused,
    clippy::redundant_closure,
    clippy::useless_conversion,
    clippy::unit_arg,
    clippy::double_parens,
    non_snake_case,
    clippy::too_many_arguments
)]
// AUTO GENERATED FILE, DO NOT EDIT.
// Generated by `flutter_rust_bridge`@ 1.72.0.

use crate::api::*;
use core::panic::UnwindSafe;
use flutter_rust_bridge::*;
use std::ffi::c_void;
use std::sync::Arc;

// Section: imports

use crate::core::event::EventEntry;
use crate::web_server::proxy_entity::ProxyDomainInfo;
use crate::web_server::script_entity::ScriptEntity;

// Section: wire functions

fn wire_create_log_stream_impl(port_: MessagePort) {
    FLUTTER_RUST_BRIDGE_HANDLER.wrap(
        WrapInfo {
            debug_name: "create_log_stream",
            port: Some(port_),
            mode: FfiCallMode::Stream,
        },
        move || move |task_callback| Ok(create_log_stream(task_callback.stream_sink())),
    )
}
fn wire_init_sdk_impl(port_: MessagePort) {
    FLUTTER_RUST_BRIDGE_HANDLER.wrap(
        WrapInfo {
            debug_name: "init_sdk",
            port: Some(port_),
            mode: FfiCallMode::Normal,
        },
        move || move |task_callback| Ok(init_sdk()),
    )
}
fn wire_generate_ca_file_impl(
    port_: MessagePort,
    ca_path: impl Wire2Api<String> + UnwindSafe,
    ca_key_path: impl Wire2Api<String> + UnwindSafe,
) {
    FLUTTER_RUST_BRIDGE_HANDLER.wrap(
        WrapInfo {
            debug_name: "generate_ca_file",
            port: Some(port_),
            mode: FfiCallMode::Normal,
        },
        move || {
            let api_ca_path = ca_path.wire2api();
            let api_ca_key_path = ca_key_path.wire2api();
            move |task_callback| generate_ca_file(api_ca_path, api_ca_key_path)
        },
    )
}
fn wire_generate_server_file_impl(
    port_: MessagePort,
    path: impl Wire2Api<String> + UnwindSafe,
    cert_key: impl Wire2Api<String> + UnwindSafe,
    dns: impl Wire2Api<Vec<String>> + UnwindSafe,
    ca_path: impl Wire2Api<String> + UnwindSafe,
    ca_key_path: impl Wire2Api<String> + UnwindSafe,
) {
    FLUTTER_RUST_BRIDGE_HANDLER.wrap(
        WrapInfo {
            debug_name: "generate_server_file",
            port: Some(port_),
            mode: FfiCallMode::Normal,
        },
        move || {
            let api_path = path.wire2api();
            let api_cert_key = cert_key.wire2api();
            let api_dns = dns.wire2api();
            let api_ca_path = ca_path.wire2api();
            let api_ca_key_path = ca_key_path.wire2api();
            move |task_callback| {
                generate_server_file(
                    api_path,
                    api_cert_key,
                    api_dns,
                    api_ca_path,
                    api_ca_key_path,
                )
            }
        },
    )
}
fn wire_run_server_impl(
    port_: MessagePort,
    config: impl Wire2Api<Vec<ProxyDomainInfo>> + UnwindSafe,
    server_cert_path: impl Wire2Api<String> + UnwindSafe,
    server_key_path: impl Wire2Api<String> + UnwindSafe,
    is_dynamic: impl Wire2Api<bool> + UnwindSafe,
    mitm_port_path: impl Wire2Api<String> + UnwindSafe,
    scripts: impl Wire2Api<Vec<ScriptEntity>> + UnwindSafe,
) {
    FLUTTER_RUST_BRIDGE_HANDLER.wrap(
        WrapInfo {
            debug_name: "run_server",
            port: Some(port_),
            mode: FfiCallMode::Normal,
        },
        move || {
            let api_config = config.wire2api();
            let api_server_cert_path = server_cert_path.wire2api();
            let api_server_key_path = server_key_path.wire2api();
            let api_is_dynamic = is_dynamic.wire2api();
            let api_mitm_port_path = mitm_port_path.wire2api();
            let api_scripts = scripts.wire2api();
            move |task_callback| {
                run_server(
                    api_config,
                    api_server_cert_path,
                    api_server_key_path,
                    api_is_dynamic,
                    api_mitm_port_path,
                    api_scripts,
                )
            }
        },
    )
}
fn wire_stop_server_impl(port_: MessagePort) {
    FLUTTER_RUST_BRIDGE_HANDLER.wrap(
        WrapInfo {
            debug_name: "stop_server",
            port: Some(port_),
            mode: FfiCallMode::Normal,
        },
        move || move |task_callback| Ok(stop_server()),
    )
}
fn wire_run_mitm_server_impl(
    port_: MessagePort,
    server_host: impl Wire2Api<String> + UnwindSafe,
    config: impl Wire2Api<Vec<ProxyDomainInfo>> + UnwindSafe,
    ca_path: impl Wire2Api<String> + UnwindSafe,
    ca_key_path: impl Wire2Api<String> + UnwindSafe,
    mitm_port_path: impl Wire2Api<String> + UnwindSafe,
) {
    FLUTTER_RUST_BRIDGE_HANDLER.wrap(
        WrapInfo {
            debug_name: "run_mitm_server",
            port: Some(port_),
            mode: FfiCallMode::Normal,
        },
        move || {
            let api_server_host = server_host.wire2api();
            let api_config = config.wire2api();
            let api_ca_path = ca_path.wire2api();
            let api_ca_key_path = ca_key_path.wire2api();
            let api_mitm_port_path = mitm_port_path.wire2api();
            move |task_callback| {
                Ok(run_mitm_server(
                    api_server_host,
                    api_config,
                    api_ca_path,
                    api_ca_key_path,
                    api_mitm_port_path,
                ))
            }
        },
    )
}
fn wire_stop_mitm_server_impl(port_: MessagePort) {
    FLUTTER_RUST_BRIDGE_HANDLER.wrap(
        WrapInfo {
            debug_name: "stop_mitm_server",
            port: Some(port_),
            mode: FfiCallMode::Normal,
        },
        move || move |task_callback| Ok(stop_mitm_server()),
    )
}
// Section: wrapper structs

// Section: static checks

// Section: allocate functions

// Section: related functions

// Section: impl Wire2Api

pub trait Wire2Api<T> {
    fn wire2api(self) -> T;
}

impl<T, S> Wire2Api<Option<T>> for *mut S
where
    *mut S: Wire2Api<T>,
{
    fn wire2api(self) -> Option<T> {
        (!self.is_null()).then(|| self.wire2api())
    }
}

impl Wire2Api<bool> for bool {
    fn wire2api(self) -> bool {
        self
    }
}

impl Wire2Api<u16> for u16 {
    fn wire2api(self) -> u16 {
        self
    }
}
impl Wire2Api<u8> for u8 {
    fn wire2api(self) -> u8 {
        self
    }
}

// Section: impl IntoDart

impl support::IntoDart for EventEntry {
    fn into_dart(self) -> support::DartAbi {
        vec![self.msg_type.into_dart(), self.msg.into_dart()].into_dart()
    }
}
impl support::IntoDartExceptPrimitive for EventEntry {}

// Section: executor

support::lazy_static! {
    pub static ref FLUTTER_RUST_BRIDGE_HANDLER: support::DefaultHandler = Default::default();
}

#[cfg(not(target_family = "wasm"))]
#[path = "bridge_generated.io.rs"]
mod io;
#[cfg(not(target_family = "wasm"))]
pub use io::*;