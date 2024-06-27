(function() {var implementors = {
"bitvec":[["impl&lt;M, T, O&gt; Pointer for <a class=\"struct\" href=\"bitvec/ptr/struct.BitPtr.html\" title=\"struct bitvec::ptr::BitPtr\">BitPtr</a>&lt;M, T, O&gt;<div class=\"where\">where\n    M: <a class=\"trait\" href=\"bitvec/ptr/trait.Mutability.html\" title=\"trait bitvec::ptr::Mutability\">Mutability</a>,\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,</div>"],["impl&lt;M, T, O&gt; Pointer for <a class=\"struct\" href=\"bitvec/ptr/struct.BitRef.html\" title=\"struct bitvec::ptr::BitRef\">BitRef</a>&lt;'_, M, T, O&gt;<div class=\"where\">where\n    M: <a class=\"trait\" href=\"bitvec/ptr/trait.Mutability.html\" title=\"trait bitvec::ptr::Mutability\">Mutability</a>,\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,</div>"],["impl&lt;T, O&gt; Pointer for <a class=\"struct\" href=\"bitvec/boxed/struct.BitBox.html\" title=\"struct bitvec::boxed::BitBox\">BitBox</a>&lt;T, O&gt;<div class=\"where\">where\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,</div>"],["impl&lt;T, O&gt; Pointer for <a class=\"struct\" href=\"bitvec/slice/struct.BitSlice.html\" title=\"struct bitvec::slice::BitSlice\">BitSlice</a>&lt;T, O&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,</div>"],["impl&lt;T, O&gt; Pointer for <a class=\"struct\" href=\"bitvec/vec/struct.BitVec.html\" title=\"struct bitvec::vec::BitVec\">BitVec</a>&lt;T, O&gt;<div class=\"where\">where\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,</div>"]],
"owo_colors":[["impl&lt;'a, Color: <a class=\"trait\" href=\"owo_colors/trait.Color.html\" title=\"trait owo_colors::Color\">Color</a>, T: Pointer&gt; Pointer for <a class=\"struct\" href=\"owo_colors/struct.BgColorDisplay.html\" title=\"struct owo_colors::BgColorDisplay\">BgColorDisplay</a>&lt;'a, Color, T&gt;"],["impl&lt;'a, Color: <a class=\"trait\" href=\"owo_colors/trait.Color.html\" title=\"trait owo_colors::Color\">Color</a>, T: Pointer&gt; Pointer for <a class=\"struct\" href=\"owo_colors/struct.FgColorDisplay.html\" title=\"struct owo_colors::FgColorDisplay\">FgColorDisplay</a>&lt;'a, Color, T&gt;"],["impl&lt;'a, Color: <a class=\"trait\" href=\"owo_colors/trait.DynColor.html\" title=\"trait owo_colors::DynColor\">DynColor</a>, T: Pointer&gt; Pointer for <a class=\"struct\" href=\"owo_colors/struct.BgDynColorDisplay.html\" title=\"struct owo_colors::BgDynColorDisplay\">BgDynColorDisplay</a>&lt;'a, Color, T&gt;"],["impl&lt;'a, Color: <a class=\"trait\" href=\"owo_colors/trait.DynColor.html\" title=\"trait owo_colors::DynColor\">DynColor</a>, T: Pointer&gt; Pointer for <a class=\"struct\" href=\"owo_colors/struct.FgDynColorDisplay.html\" title=\"struct owo_colors::FgDynColorDisplay\">FgDynColorDisplay</a>&lt;'a, Color, T&gt;"],["impl&lt;'a, Fg: <a class=\"trait\" href=\"owo_colors/trait.Color.html\" title=\"trait owo_colors::Color\">Color</a>, Bg: <a class=\"trait\" href=\"owo_colors/trait.Color.html\" title=\"trait owo_colors::Color\">Color</a>, T: Pointer&gt; Pointer for <a class=\"struct\" href=\"owo_colors/struct.ComboColorDisplay.html\" title=\"struct owo_colors::ComboColorDisplay\">ComboColorDisplay</a>&lt;'a, Fg, Bg, T&gt;"],["impl&lt;'a, T: Pointer&gt; Pointer for <a class=\"struct\" href=\"owo_colors/styles/struct.BlinkDisplay.html\" title=\"struct owo_colors::styles::BlinkDisplay\">BlinkDisplay</a>&lt;'a, T&gt;"],["impl&lt;'a, T: Pointer&gt; Pointer for <a class=\"struct\" href=\"owo_colors/styles/struct.BlinkFastDisplay.html\" title=\"struct owo_colors::styles::BlinkFastDisplay\">BlinkFastDisplay</a>&lt;'a, T&gt;"],["impl&lt;'a, T: Pointer&gt; Pointer for <a class=\"struct\" href=\"owo_colors/styles/struct.BoldDisplay.html\" title=\"struct owo_colors::styles::BoldDisplay\">BoldDisplay</a>&lt;'a, T&gt;"],["impl&lt;'a, T: Pointer&gt; Pointer for <a class=\"struct\" href=\"owo_colors/styles/struct.DimDisplay.html\" title=\"struct owo_colors::styles::DimDisplay\">DimDisplay</a>&lt;'a, T&gt;"],["impl&lt;'a, T: Pointer&gt; Pointer for <a class=\"struct\" href=\"owo_colors/styles/struct.HiddenDisplay.html\" title=\"struct owo_colors::styles::HiddenDisplay\">HiddenDisplay</a>&lt;'a, T&gt;"],["impl&lt;'a, T: Pointer&gt; Pointer for <a class=\"struct\" href=\"owo_colors/styles/struct.ItalicDisplay.html\" title=\"struct owo_colors::styles::ItalicDisplay\">ItalicDisplay</a>&lt;'a, T&gt;"],["impl&lt;'a, T: Pointer&gt; Pointer for <a class=\"struct\" href=\"owo_colors/styles/struct.ReversedDisplay.html\" title=\"struct owo_colors::styles::ReversedDisplay\">ReversedDisplay</a>&lt;'a, T&gt;"],["impl&lt;'a, T: Pointer&gt; Pointer for <a class=\"struct\" href=\"owo_colors/styles/struct.StrikeThroughDisplay.html\" title=\"struct owo_colors::styles::StrikeThroughDisplay\">StrikeThroughDisplay</a>&lt;'a, T&gt;"],["impl&lt;'a, T: Pointer&gt; Pointer for <a class=\"struct\" href=\"owo_colors/styles/struct.UnderlineDisplay.html\" title=\"struct owo_colors::styles::UnderlineDisplay\">UnderlineDisplay</a>&lt;'a, T&gt;"],["impl&lt;T: Pointer&gt; Pointer for <a class=\"struct\" href=\"owo_colors/struct.Styled.html\" title=\"struct owo_colors::Styled\">Styled</a>&lt;T&gt;"]],
"wyz":[["impl&lt;M, T&gt; Pointer for <a class=\"struct\" href=\"wyz/comu/struct.Address.html\" title=\"struct wyz::comu::Address\">Address</a>&lt;M, T&gt;<div class=\"where\">where\n    M: <a class=\"trait\" href=\"wyz/comu/trait.Mutability.html\" title=\"trait wyz::comu::Mutability\">Mutability</a>,\n    T: ?Sized,</div>"],["impl&lt;T: Binary + Pointer&gt; Pointer for <a class=\"struct\" href=\"wyz/fmt/struct.FmtBinary.html\" title=\"struct wyz::fmt::FmtBinary\">FmtBinary</a>&lt;T&gt;"],["impl&lt;T: Display + Pointer&gt; Pointer for <a class=\"struct\" href=\"wyz/fmt/struct.FmtDisplay.html\" title=\"struct wyz::fmt::FmtDisplay\">FmtDisplay</a>&lt;T&gt;"],["impl&lt;T: LowerExp + Pointer&gt; Pointer for <a class=\"struct\" href=\"wyz/fmt/struct.FmtLowerExp.html\" title=\"struct wyz::fmt::FmtLowerExp\">FmtLowerExp</a>&lt;T&gt;"],["impl&lt;T: LowerHex + Pointer&gt; Pointer for <a class=\"struct\" href=\"wyz/fmt/struct.FmtLowerHex.html\" title=\"struct wyz::fmt::FmtLowerHex\">FmtLowerHex</a>&lt;T&gt;"],["impl&lt;T: Octal + Pointer&gt; Pointer for <a class=\"struct\" href=\"wyz/fmt/struct.FmtOctal.html\" title=\"struct wyz::fmt::FmtOctal\">FmtOctal</a>&lt;T&gt;"],["impl&lt;T: Pointer&gt; Pointer for <a class=\"struct\" href=\"wyz/fmt/struct.FmtPointer.html\" title=\"struct wyz::fmt::FmtPointer\">FmtPointer</a>&lt;T&gt;"],["impl&lt;T: UpperExp + Pointer&gt; Pointer for <a class=\"struct\" href=\"wyz/fmt/struct.FmtUpperExp.html\" title=\"struct wyz::fmt::FmtUpperExp\">FmtUpperExp</a>&lt;T&gt;"],["impl&lt;T: UpperHex + Pointer&gt; Pointer for <a class=\"struct\" href=\"wyz/fmt/struct.FmtUpperHex.html\" title=\"struct wyz::fmt::FmtUpperHex\">FmtUpperHex</a>&lt;T&gt;"]],
"x86":[["impl Pointer for <a class=\"struct\" href=\"x86/bits32/paging/struct.IOAddr.html\" title=\"struct x86::bits32::paging::IOAddr\">IOAddr</a>"],["impl Pointer for <a class=\"struct\" href=\"x86/bits32/paging/struct.PAddr.html\" title=\"struct x86::bits32::paging::PAddr\">PAddr</a>"],["impl Pointer for <a class=\"struct\" href=\"x86/bits32/paging/struct.VAddr.html\" title=\"struct x86::bits32::paging::VAddr\">VAddr</a>"],["impl Pointer for <a class=\"struct\" href=\"x86/bits64/paging/struct.IOAddr.html\" title=\"struct x86::bits64::paging::IOAddr\">IOAddr</a>"],["impl Pointer for <a class=\"struct\" href=\"x86/bits64/paging/struct.PAddr.html\" title=\"struct x86::bits64::paging::PAddr\">PAddr</a>"],["impl Pointer for <a class=\"struct\" href=\"x86/bits64/paging/struct.VAddr.html\" title=\"struct x86::bits64::paging::VAddr\">VAddr</a>"]],
"x86_64":[["impl Pointer for <a class=\"struct\" href=\"x86_64/addr/struct.PhysAddr.html\" title=\"struct x86_64::addr::PhysAddr\">PhysAddr</a>"],["impl Pointer for <a class=\"struct\" href=\"x86_64/addr/struct.VirtAddr.html\" title=\"struct x86_64::addr::VirtAddr\">VirtAddr</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()