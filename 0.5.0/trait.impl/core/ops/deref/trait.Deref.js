(function() {var implementors = {
"aster_frame":[["impl Deref for <a class=\"struct\" href=\"aster_frame/mm/struct.DmaCoherent.html\" title=\"struct aster_frame::mm::DmaCoherent\">DmaCoherent</a>"],["impl&lt;'a&gt; Deref for <a class=\"struct\" href=\"aster_frame/mm/frame/struct.FrameRef.html\" title=\"struct aster_frame::mm::frame::FrameRef\">FrameRef</a>&lt;'a&gt;"],["impl&lt;T: Sync&gt; Deref for <a class=\"struct\" href=\"aster_frame/cpu/struct.CpuLocal.html\" title=\"struct aster_frame::cpu::CpuLocal\">CpuLocal</a>&lt;T&gt;"]],
"bitvec":[["impl&lt;A, O&gt; Deref for <a class=\"struct\" href=\"bitvec/array/struct.BitArray.html\" title=\"struct bitvec::array::BitArray\">BitArray</a>&lt;A, O&gt;<div class=\"where\">where\n    A: <a class=\"trait\" href=\"bitvec/view/trait.BitViewSized.html\" title=\"trait bitvec::view::BitViewSized\">BitViewSized</a>,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,</div>"],["impl&lt;M, T, O&gt; Deref for <a class=\"struct\" href=\"bitvec/ptr/struct.BitRef.html\" title=\"struct bitvec::ptr::BitRef\">BitRef</a>&lt;'_, M, T, O&gt;<div class=\"where\">where\n    M: <a class=\"trait\" href=\"bitvec/ptr/trait.Mutability.html\" title=\"trait bitvec::ptr::Mutability\">Mutability</a>,\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,</div>"],["impl&lt;T, O&gt; Deref for <a class=\"struct\" href=\"bitvec/boxed/struct.BitBox.html\" title=\"struct bitvec::boxed::BitBox\">BitBox</a>&lt;T, O&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,</div>"],["impl&lt;T, O&gt; Deref for <a class=\"struct\" href=\"bitvec/vec/struct.BitVec.html\" title=\"struct bitvec::vec::BitVec\">BitVec</a>&lt;T, O&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,</div>"]],
"buddy_system_allocator":[["impl&lt;const ORDER: usize&gt; Deref for <a class=\"struct\" href=\"buddy_system_allocator/struct.LockedFrameAllocator.html\" title=\"struct buddy_system_allocator::LockedFrameAllocator\">LockedFrameAllocator</a>&lt;ORDER&gt;"],["impl&lt;const ORDER: usize&gt; Deref for <a class=\"struct\" href=\"buddy_system_allocator/struct.LockedHeap.html\" title=\"struct buddy_system_allocator::LockedHeap\">LockedHeap</a>&lt;ORDER&gt;"],["impl&lt;const ORDER: usize&gt; Deref for <a class=\"struct\" href=\"buddy_system_allocator/struct.LockedHeapWithRescue.html\" title=\"struct buddy_system_allocator::LockedHeapWithRescue\">LockedHeapWithRescue</a>&lt;ORDER&gt;"]],
"gimli":[["impl&lt;'input, Endian&gt; Deref for <a class=\"struct\" href=\"gimli/read/struct.EndianSlice.html\" title=\"struct gimli::read::EndianSlice\">EndianSlice</a>&lt;'input, Endian&gt;<div class=\"where\">where\n    Endian: <a class=\"trait\" href=\"gimli/trait.Endianity.html\" title=\"trait gimli::Endianity\">Endianity</a>,</div>"]],
"intrusive_collections":[["impl&lt;T: ?Sized&gt; Deref for <a class=\"struct\" href=\"intrusive_collections/struct.UnsafeRef.html\" title=\"struct intrusive_collections::UnsafeRef\">UnsafeRef</a>&lt;T&gt;"]],
"lock_api":[["impl&lt;'a, R: <a class=\"trait\" href=\"lock_api/trait.RawMutex.html\" title=\"trait lock_api::RawMutex\">RawMutex</a> + 'a, G: <a class=\"trait\" href=\"lock_api/trait.GetThreadId.html\" title=\"trait lock_api::GetThreadId\">GetThreadId</a> + 'a, T: ?Sized + 'a&gt; Deref for <a class=\"struct\" href=\"lock_api/struct.MappedReentrantMutexGuard.html\" title=\"struct lock_api::MappedReentrantMutexGuard\">MappedReentrantMutexGuard</a>&lt;'a, R, G, T&gt;"],["impl&lt;'a, R: <a class=\"trait\" href=\"lock_api/trait.RawMutex.html\" title=\"trait lock_api::RawMutex\">RawMutex</a> + 'a, G: <a class=\"trait\" href=\"lock_api/trait.GetThreadId.html\" title=\"trait lock_api::GetThreadId\">GetThreadId</a> + 'a, T: ?Sized + 'a&gt; Deref for <a class=\"struct\" href=\"lock_api/struct.ReentrantMutexGuard.html\" title=\"struct lock_api::ReentrantMutexGuard\">ReentrantMutexGuard</a>&lt;'a, R, G, T&gt;"],["impl&lt;'a, R: <a class=\"trait\" href=\"lock_api/trait.RawMutex.html\" title=\"trait lock_api::RawMutex\">RawMutex</a> + 'a, T: ?Sized + 'a&gt; Deref for <a class=\"struct\" href=\"lock_api/struct.MappedMutexGuard.html\" title=\"struct lock_api::MappedMutexGuard\">MappedMutexGuard</a>&lt;'a, R, T&gt;"],["impl&lt;'a, R: <a class=\"trait\" href=\"lock_api/trait.RawMutex.html\" title=\"trait lock_api::RawMutex\">RawMutex</a> + 'a, T: ?Sized + 'a&gt; Deref for <a class=\"struct\" href=\"lock_api/struct.MutexGuard.html\" title=\"struct lock_api::MutexGuard\">MutexGuard</a>&lt;'a, R, T&gt;"],["impl&lt;'a, R: <a class=\"trait\" href=\"lock_api/trait.RawRwLock.html\" title=\"trait lock_api::RawRwLock\">RawRwLock</a> + 'a, T: ?Sized + 'a&gt; Deref for <a class=\"struct\" href=\"lock_api/struct.MappedRwLockReadGuard.html\" title=\"struct lock_api::MappedRwLockReadGuard\">MappedRwLockReadGuard</a>&lt;'a, R, T&gt;"],["impl&lt;'a, R: <a class=\"trait\" href=\"lock_api/trait.RawRwLock.html\" title=\"trait lock_api::RawRwLock\">RawRwLock</a> + 'a, T: ?Sized + 'a&gt; Deref for <a class=\"struct\" href=\"lock_api/struct.MappedRwLockWriteGuard.html\" title=\"struct lock_api::MappedRwLockWriteGuard\">MappedRwLockWriteGuard</a>&lt;'a, R, T&gt;"],["impl&lt;'a, R: <a class=\"trait\" href=\"lock_api/trait.RawRwLock.html\" title=\"trait lock_api::RawRwLock\">RawRwLock</a> + 'a, T: ?Sized + 'a&gt; Deref for <a class=\"struct\" href=\"lock_api/struct.RwLockReadGuard.html\" title=\"struct lock_api::RwLockReadGuard\">RwLockReadGuard</a>&lt;'a, R, T&gt;"],["impl&lt;'a, R: <a class=\"trait\" href=\"lock_api/trait.RawRwLock.html\" title=\"trait lock_api::RawRwLock\">RawRwLock</a> + 'a, T: ?Sized + 'a&gt; Deref for <a class=\"struct\" href=\"lock_api/struct.RwLockWriteGuard.html\" title=\"struct lock_api::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'a, R, T&gt;"],["impl&lt;'a, R: <a class=\"trait\" href=\"lock_api/trait.RawRwLockUpgrade.html\" title=\"trait lock_api::RawRwLockUpgrade\">RawRwLockUpgrade</a> + 'a, T: ?Sized + 'a&gt; Deref for <a class=\"struct\" href=\"lock_api/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'a, R, T&gt;"]],
"multiboot2":[["impl&lt;T: ?Sized&gt; Deref for <a class=\"struct\" href=\"multiboot2/builder/struct.BoxedDst.html\" title=\"struct multiboot2::builder::BoxedDst\">BoxedDst</a>&lt;T&gt;"]],
"rsdp":[["impl&lt;H, T&gt; Deref for <a class=\"struct\" href=\"rsdp/handler/struct.PhysicalMapping.html\" title=\"struct rsdp::handler::PhysicalMapping\">PhysicalMapping</a>&lt;H, T&gt;<div class=\"where\">where\n    H: <a class=\"trait\" href=\"rsdp/handler/trait.AcpiHandler.html\" title=\"trait rsdp::handler::AcpiHandler\">AcpiHandler</a>,</div>"]],
"scopeguard":[["impl&lt;T, F, S&gt; Deref for <a class=\"struct\" href=\"scopeguard/struct.ScopeGuard.html\" title=\"struct scopeguard::ScopeGuard\">ScopeGuard</a>&lt;T, F, S&gt;<div class=\"where\">where\n    F: FnOnce(T),\n    S: <a class=\"trait\" href=\"scopeguard/trait.Strategy.html\" title=\"trait scopeguard::Strategy\">Strategy</a>,</div>"]],
"smallvec":[["impl&lt;A: <a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; Deref for <a class=\"struct\" href=\"smallvec/struct.SmallVec.html\" title=\"struct smallvec::SmallVec\">SmallVec</a>&lt;A&gt;"]],
"spin":[["impl&lt;'a, T: ?Sized&gt; Deref for <a class=\"struct\" href=\"spin/mutex/spin/struct.SpinMutexGuard.html\" title=\"struct spin::mutex::spin::SpinMutexGuard\">SpinMutexGuard</a>&lt;'a, T&gt;"],["impl&lt;'a, T: ?Sized&gt; Deref for <a class=\"struct\" href=\"spin/mutex/struct.MutexGuard.html\" title=\"struct spin::mutex::MutexGuard\">MutexGuard</a>&lt;'a, T&gt;"],["impl&lt;'rwlock, T: ?Sized&gt; Deref for <a class=\"struct\" href=\"spin/rwlock/struct.RwLockReadGuard.html\" title=\"struct spin::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'rwlock, T&gt;"],["impl&lt;'rwlock, T: ?Sized, R&gt; Deref for <a class=\"struct\" href=\"spin/rwlock/struct.RwLockUpgradableGuard.html\" title=\"struct spin::rwlock::RwLockUpgradableGuard\">RwLockUpgradableGuard</a>&lt;'rwlock, T, R&gt;"],["impl&lt;'rwlock, T: ?Sized, R&gt; Deref for <a class=\"struct\" href=\"spin/rwlock/struct.RwLockWriteGuard.html\" title=\"struct spin::rwlock::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'rwlock, T, R&gt;"],["impl&lt;T, F: FnOnce() -&gt; T, R: <a class=\"trait\" href=\"spin/relax/trait.RelaxStrategy.html\" title=\"trait spin::relax::RelaxStrategy\">RelaxStrategy</a>&gt; Deref for <a class=\"struct\" href=\"spin/lazy/struct.Lazy.html\" title=\"struct spin::lazy::Lazy\">Lazy</a>&lt;T, F, R&gt;"]],
"wyz":[["impl&lt;T&gt; Deref for <a class=\"struct\" href=\"wyz/fmt/struct.FmtList.html\" title=\"struct wyz::fmt::FmtList\">FmtList</a>&lt;T&gt;<div class=\"where\">where\n    for&lt;'a&gt; &amp;'a T: IntoIterator,</div>"],["impl&lt;T: Binary&gt; Deref for <a class=\"struct\" href=\"wyz/fmt/struct.FmtBinary.html\" title=\"struct wyz::fmt::FmtBinary\">FmtBinary</a>&lt;T&gt;"],["impl&lt;T: Display&gt; Deref for <a class=\"struct\" href=\"wyz/fmt/struct.FmtDisplay.html\" title=\"struct wyz::fmt::FmtDisplay\">FmtDisplay</a>&lt;T&gt;"],["impl&lt;T: LowerExp&gt; Deref for <a class=\"struct\" href=\"wyz/fmt/struct.FmtLowerExp.html\" title=\"struct wyz::fmt::FmtLowerExp\">FmtLowerExp</a>&lt;T&gt;"],["impl&lt;T: LowerHex&gt; Deref for <a class=\"struct\" href=\"wyz/fmt/struct.FmtLowerHex.html\" title=\"struct wyz::fmt::FmtLowerHex\">FmtLowerHex</a>&lt;T&gt;"],["impl&lt;T: Octal&gt; Deref for <a class=\"struct\" href=\"wyz/fmt/struct.FmtOctal.html\" title=\"struct wyz::fmt::FmtOctal\">FmtOctal</a>&lt;T&gt;"],["impl&lt;T: Pointer&gt; Deref for <a class=\"struct\" href=\"wyz/fmt/struct.FmtPointer.html\" title=\"struct wyz::fmt::FmtPointer\">FmtPointer</a>&lt;T&gt;"],["impl&lt;T: UpperExp&gt; Deref for <a class=\"struct\" href=\"wyz/fmt/struct.FmtUpperExp.html\" title=\"struct wyz::fmt::FmtUpperExp\">FmtUpperExp</a>&lt;T&gt;"],["impl&lt;T: UpperHex&gt; Deref for <a class=\"struct\" href=\"wyz/fmt/struct.FmtUpperHex.html\" title=\"struct wyz::fmt::FmtUpperHex\">FmtUpperHex</a>&lt;T&gt;"]],
"x86_64":[["impl Deref for <a class=\"struct\" href=\"x86_64/structures/idt/struct.InterruptStackFrame.html\" title=\"struct x86_64::structures::idt::InterruptStackFrame\">InterruptStackFrame</a>"]],
"xarray":[["impl&lt;'a, T&gt; Deref for <a class=\"struct\" href=\"xarray/struct.ArcRef.html\" title=\"struct xarray::ArcRef\">ArcRef</a>&lt;'a, T&gt;"],["impl&lt;'a, T&gt; Deref for <a class=\"struct\" href=\"xarray/struct.BoxRef.html\" title=\"struct xarray::BoxRef\">BoxRef</a>&lt;'a, T&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()