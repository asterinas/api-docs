(function() {
    var type_impls = Object.fromEntries([["uefi_raw",[]],["unwinding",[]],["x86_64",[]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[15,17,14]}