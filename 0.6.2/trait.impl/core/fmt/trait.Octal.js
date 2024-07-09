(function() {var implementors = {
"bitvec":[["impl&lt;'a, T, O&gt; Octal for <a class=\"enum\" href=\"bitvec/domain/enum.Domain.html\" title=\"enum bitvec::domain::Domain\">Domain</a>&lt;'a, <a class=\"struct\" href=\"bitvec/ptr/struct.Const.html\" title=\"struct bitvec::ptr::Const\">Const</a>, T, O&gt;<div class=\"where\">where\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,</div>"],["impl&lt;A, O&gt; Octal for <a class=\"struct\" href=\"bitvec/array/struct.BitArray.html\" title=\"struct bitvec::array::BitArray\">BitArray</a>&lt;A, O&gt;<div class=\"where\">where\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,\n    A: <a class=\"trait\" href=\"bitvec/view/trait.BitViewSized.html\" title=\"trait bitvec::view::BitViewSized\">BitViewSized</a>,</div>"],["impl&lt;T, O&gt; Octal for <a class=\"struct\" href=\"bitvec/boxed/struct.BitBox.html\" title=\"struct bitvec::boxed::BitBox\">BitBox</a>&lt;T, O&gt;<div class=\"where\">where\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,</div>"],["impl&lt;T, O&gt; Octal for <a class=\"struct\" href=\"bitvec/slice/struct.BitSlice.html\" title=\"struct bitvec::slice::BitSlice\">BitSlice</a>&lt;T, O&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,</div>"],["impl&lt;T, O&gt; Octal for <a class=\"struct\" href=\"bitvec/vec/struct.BitVec.html\" title=\"struct bitvec::vec::BitVec\">BitVec</a>&lt;T, O&gt;<div class=\"where\">where\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,</div>"]],
"multiboot2":[["impl Octal for <a class=\"struct\" href=\"multiboot2/struct.ElfSectionFlags.html\" title=\"struct multiboot2::ElfSectionFlags\">ElfSectionFlags</a>"],["impl Octal for <a class=\"struct\" href=\"multiboot2/struct.VBECapabilities.html\" title=\"struct multiboot2::VBECapabilities\">VBECapabilities</a>"],["impl Octal for <a class=\"struct\" href=\"multiboot2/struct.VBEDirectColorAttributes.html\" title=\"struct multiboot2::VBEDirectColorAttributes\">VBEDirectColorAttributes</a>"],["impl Octal for <a class=\"struct\" href=\"multiboot2/struct.VBEModeAttributes.html\" title=\"struct multiboot2::VBEModeAttributes\">VBEModeAttributes</a>"],["impl Octal for <a class=\"struct\" href=\"multiboot2/struct.VBEWindowAttributes.html\" title=\"struct multiboot2::VBEWindowAttributes\">VBEWindowAttributes</a>"]],
"num_complex":[["impl&lt;T&gt; Octal for <a class=\"struct\" href=\"num_complex/struct.Complex.html\" title=\"struct num_complex::Complex\">Complex</a>&lt;T&gt;<div class=\"where\">where\n    T: Octal + <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> + PartialOrd + Clone,</div>"]],
"num_rational":[["impl&lt;T: Octal + Clone + <a class=\"trait\" href=\"num_integer/trait.Integer.html\" title=\"trait num_integer::Integer\">Integer</a>&gt; Octal for <a class=\"struct\" href=\"num_rational/struct.Ratio.html\" title=\"struct num_rational::Ratio\">Ratio</a>&lt;T&gt;"]],
"ostd":[["impl Octal for <a class=\"struct\" href=\"ostd/bus/pci/cfg_space/struct.Command.html\" title=\"struct ostd::bus::pci::cfg_space::Command\">Command</a>"],["impl Octal for <a class=\"struct\" href=\"ostd/bus/pci/cfg_space/struct.Status.html\" title=\"struct ostd::bus::pci::cfg_space::Status\">Status</a>"],["impl Octal for <a class=\"struct\" href=\"ostd/cpu/struct.PageFaultErrorCode.html\" title=\"struct ostd::cpu::PageFaultErrorCode\">PageFaultErrorCode</a>"],["impl Octal for <a class=\"struct\" href=\"ostd/mm/struct.PageFlags.html\" title=\"struct ostd::mm::PageFlags\">PageFlags</a>"]],
"owo_colors":[["impl&lt;'a, Color: <a class=\"trait\" href=\"owo_colors/trait.Color.html\" title=\"trait owo_colors::Color\">Color</a>, T: Octal&gt; Octal for <a class=\"struct\" href=\"owo_colors/struct.BgColorDisplay.html\" title=\"struct owo_colors::BgColorDisplay\">BgColorDisplay</a>&lt;'a, Color, T&gt;"],["impl&lt;'a, Color: <a class=\"trait\" href=\"owo_colors/trait.Color.html\" title=\"trait owo_colors::Color\">Color</a>, T: Octal&gt; Octal for <a class=\"struct\" href=\"owo_colors/struct.FgColorDisplay.html\" title=\"struct owo_colors::FgColorDisplay\">FgColorDisplay</a>&lt;'a, Color, T&gt;"],["impl&lt;'a, Color: <a class=\"trait\" href=\"owo_colors/trait.DynColor.html\" title=\"trait owo_colors::DynColor\">DynColor</a>, T: Octal&gt; Octal for <a class=\"struct\" href=\"owo_colors/struct.BgDynColorDisplay.html\" title=\"struct owo_colors::BgDynColorDisplay\">BgDynColorDisplay</a>&lt;'a, Color, T&gt;"],["impl&lt;'a, Color: <a class=\"trait\" href=\"owo_colors/trait.DynColor.html\" title=\"trait owo_colors::DynColor\">DynColor</a>, T: Octal&gt; Octal for <a class=\"struct\" href=\"owo_colors/struct.FgDynColorDisplay.html\" title=\"struct owo_colors::FgDynColorDisplay\">FgDynColorDisplay</a>&lt;'a, Color, T&gt;"],["impl&lt;'a, Fg: <a class=\"trait\" href=\"owo_colors/trait.Color.html\" title=\"trait owo_colors::Color\">Color</a>, Bg: <a class=\"trait\" href=\"owo_colors/trait.Color.html\" title=\"trait owo_colors::Color\">Color</a>, T: Octal&gt; Octal for <a class=\"struct\" href=\"owo_colors/struct.ComboColorDisplay.html\" title=\"struct owo_colors::ComboColorDisplay\">ComboColorDisplay</a>&lt;'a, Fg, Bg, T&gt;"],["impl&lt;'a, T: Octal&gt; Octal for <a class=\"struct\" href=\"owo_colors/styles/struct.BlinkDisplay.html\" title=\"struct owo_colors::styles::BlinkDisplay\">BlinkDisplay</a>&lt;'a, T&gt;"],["impl&lt;'a, T: Octal&gt; Octal for <a class=\"struct\" href=\"owo_colors/styles/struct.BlinkFastDisplay.html\" title=\"struct owo_colors::styles::BlinkFastDisplay\">BlinkFastDisplay</a>&lt;'a, T&gt;"],["impl&lt;'a, T: Octal&gt; Octal for <a class=\"struct\" href=\"owo_colors/styles/struct.BoldDisplay.html\" title=\"struct owo_colors::styles::BoldDisplay\">BoldDisplay</a>&lt;'a, T&gt;"],["impl&lt;'a, T: Octal&gt; Octal for <a class=\"struct\" href=\"owo_colors/styles/struct.DimDisplay.html\" title=\"struct owo_colors::styles::DimDisplay\">DimDisplay</a>&lt;'a, T&gt;"],["impl&lt;'a, T: Octal&gt; Octal for <a class=\"struct\" href=\"owo_colors/styles/struct.HiddenDisplay.html\" title=\"struct owo_colors::styles::HiddenDisplay\">HiddenDisplay</a>&lt;'a, T&gt;"],["impl&lt;'a, T: Octal&gt; Octal for <a class=\"struct\" href=\"owo_colors/styles/struct.ItalicDisplay.html\" title=\"struct owo_colors::styles::ItalicDisplay\">ItalicDisplay</a>&lt;'a, T&gt;"],["impl&lt;'a, T: Octal&gt; Octal for <a class=\"struct\" href=\"owo_colors/styles/struct.ReversedDisplay.html\" title=\"struct owo_colors::styles::ReversedDisplay\">ReversedDisplay</a>&lt;'a, T&gt;"],["impl&lt;'a, T: Octal&gt; Octal for <a class=\"struct\" href=\"owo_colors/styles/struct.StrikeThroughDisplay.html\" title=\"struct owo_colors::styles::StrikeThroughDisplay\">StrikeThroughDisplay</a>&lt;'a, T&gt;"],["impl&lt;'a, T: Octal&gt; Octal for <a class=\"struct\" href=\"owo_colors/styles/struct.UnderlineDisplay.html\" title=\"struct owo_colors::styles::UnderlineDisplay\">UnderlineDisplay</a>&lt;'a, T&gt;"],["impl&lt;T: Octal&gt; Octal for <a class=\"struct\" href=\"owo_colors/struct.Styled.html\" title=\"struct owo_colors::Styled\">Styled</a>&lt;T&gt;"]],
"uefi_raw":[["impl Octal for <a class=\"struct\" href=\"uefi_raw/capsule/struct.CapsuleFlags.html\" title=\"struct uefi_raw::capsule::CapsuleFlags\">CapsuleFlags</a>"],["impl Octal for <a class=\"struct\" href=\"uefi_raw/protocol/console/serial/struct.ControlBits.html\" title=\"struct uefi_raw::protocol::console::serial::ControlBits\">ControlBits</a>"],["impl Octal for <a class=\"struct\" href=\"uefi_raw/protocol/console/struct.AbsolutePointerModeAttributes.html\" title=\"struct uefi_raw::protocol::console::AbsolutePointerModeAttributes\">AbsolutePointerModeAttributes</a>"],["impl Octal for <a class=\"struct\" href=\"uefi_raw/protocol/file_system/struct.FileAttribute.html\" title=\"struct uefi_raw::protocol::file_system::FileAttribute\">FileAttribute</a>"],["impl Octal for <a class=\"struct\" href=\"uefi_raw/protocol/file_system/struct.FileMode.html\" title=\"struct uefi_raw::protocol::file_system::FileMode\">FileMode</a>"],["impl Octal for <a class=\"struct\" href=\"uefi_raw/table/boot/struct.EventType.html\" title=\"struct uefi_raw::table::boot::EventType\">EventType</a>"],["impl Octal for <a class=\"struct\" href=\"uefi_raw/table/boot/struct.MemoryAttribute.html\" title=\"struct uefi_raw::table::boot::MemoryAttribute\">MemoryAttribute</a>"],["impl Octal for <a class=\"struct\" href=\"uefi_raw/table/runtime/struct.VariableAttributes.html\" title=\"struct uefi_raw::table::runtime::VariableAttributes\">VariableAttributes</a>"],["impl Octal for <a class=\"struct\" href=\"uefi_raw/time/struct.Daylight.html\" title=\"struct uefi_raw::time::Daylight\">Daylight</a>"]],
"wyz":[["impl&lt;T&gt; Octal for <a class=\"struct\" href=\"wyz/fmt/struct.FmtList.html\" title=\"struct wyz::fmt::FmtList\">FmtList</a>&lt;T&gt;<div class=\"where\">where\n    for&lt;'a&gt; &amp;'a T: IntoIterator,\n    for&lt;'a&gt; &lt;&amp;'a T as IntoIterator&gt;::Item: Octal,</div>"],["impl&lt;T: Binary + Octal&gt; Octal for <a class=\"struct\" href=\"wyz/fmt/struct.FmtBinary.html\" title=\"struct wyz::fmt::FmtBinary\">FmtBinary</a>&lt;T&gt;"],["impl&lt;T: Display + Octal&gt; Octal for <a class=\"struct\" href=\"wyz/fmt/struct.FmtDisplay.html\" title=\"struct wyz::fmt::FmtDisplay\">FmtDisplay</a>&lt;T&gt;"],["impl&lt;T: LowerExp + Octal&gt; Octal for <a class=\"struct\" href=\"wyz/fmt/struct.FmtLowerExp.html\" title=\"struct wyz::fmt::FmtLowerExp\">FmtLowerExp</a>&lt;T&gt;"],["impl&lt;T: LowerHex + Octal&gt; Octal for <a class=\"struct\" href=\"wyz/fmt/struct.FmtLowerHex.html\" title=\"struct wyz::fmt::FmtLowerHex\">FmtLowerHex</a>&lt;T&gt;"],["impl&lt;T: Octal&gt; Octal for <a class=\"struct\" href=\"wyz/fmt/struct.FmtOctal.html\" title=\"struct wyz::fmt::FmtOctal\">FmtOctal</a>&lt;T&gt;"],["impl&lt;T: Pointer + Octal&gt; Octal for <a class=\"struct\" href=\"wyz/fmt/struct.FmtPointer.html\" title=\"struct wyz::fmt::FmtPointer\">FmtPointer</a>&lt;T&gt;"],["impl&lt;T: UpperExp + Octal&gt; Octal for <a class=\"struct\" href=\"wyz/fmt/struct.FmtUpperExp.html\" title=\"struct wyz::fmt::FmtUpperExp\">FmtUpperExp</a>&lt;T&gt;"],["impl&lt;T: UpperHex + Octal&gt; Octal for <a class=\"struct\" href=\"wyz/fmt/struct.FmtUpperHex.html\" title=\"struct wyz::fmt::FmtUpperHex\">FmtUpperHex</a>&lt;T&gt;"]],
"x86":[["impl Octal for <a class=\"struct\" href=\"x86/bits32/eflags/struct.EFlags.html\" title=\"struct x86::bits32::eflags::EFlags\">EFlags</a>"],["impl Octal for <a class=\"struct\" href=\"x86/bits32/paging/struct.IOAddr.html\" title=\"struct x86::bits32::paging::IOAddr\">IOAddr</a>"],["impl Octal for <a class=\"struct\" href=\"x86/bits32/paging/struct.PAddr.html\" title=\"struct x86::bits32::paging::PAddr\">PAddr</a>"],["impl Octal for <a class=\"struct\" href=\"x86/bits32/paging/struct.PDFlags.html\" title=\"struct x86::bits32::paging::PDFlags\">PDFlags</a>"],["impl Octal for <a class=\"struct\" href=\"x86/bits32/paging/struct.PTFlags.html\" title=\"struct x86::bits32::paging::PTFlags\">PTFlags</a>"],["impl Octal for <a class=\"struct\" href=\"x86/bits32/paging/struct.VAddr.html\" title=\"struct x86::bits32::paging::VAddr\">VAddr</a>"],["impl Octal for <a class=\"struct\" href=\"x86/bits64/paging/struct.IOAddr.html\" title=\"struct x86::bits64::paging::IOAddr\">IOAddr</a>"],["impl Octal for <a class=\"struct\" href=\"x86/bits64/paging/struct.PAddr.html\" title=\"struct x86::bits64::paging::PAddr\">PAddr</a>"],["impl Octal for <a class=\"struct\" href=\"x86/bits64/paging/struct.PDFlags.html\" title=\"struct x86::bits64::paging::PDFlags\">PDFlags</a>"],["impl Octal for <a class=\"struct\" href=\"x86/bits64/paging/struct.PDPTFlags.html\" title=\"struct x86::bits64::paging::PDPTFlags\">PDPTFlags</a>"],["impl Octal for <a class=\"struct\" href=\"x86/bits64/paging/struct.PML4Flags.html\" title=\"struct x86::bits64::paging::PML4Flags\">PML4Flags</a>"],["impl Octal for <a class=\"struct\" href=\"x86/bits64/paging/struct.PML5Flags.html\" title=\"struct x86::bits64::paging::PML5Flags\">PML5Flags</a>"],["impl Octal for <a class=\"struct\" href=\"x86/bits64/paging/struct.PTFlags.html\" title=\"struct x86::bits64::paging::PTFlags\">PTFlags</a>"],["impl Octal for <a class=\"struct\" href=\"x86/bits64/paging/struct.VAddr.html\" title=\"struct x86::bits64::paging::VAddr\">VAddr</a>"],["impl Octal for <a class=\"struct\" href=\"x86/bits64/rflags/struct.RFlags.html\" title=\"struct x86::bits64::rflags::RFlags\">RFlags</a>"],["impl Octal for <a class=\"struct\" href=\"x86/controlregs/struct.Cr0.html\" title=\"struct x86::controlregs::Cr0\">Cr0</a>"],["impl Octal for <a class=\"struct\" href=\"x86/controlregs/struct.Cr4.html\" title=\"struct x86::controlregs::Cr4\">Cr4</a>"],["impl Octal for <a class=\"struct\" href=\"x86/controlregs/struct.Xcr0.html\" title=\"struct x86::controlregs::Xcr0\">Xcr0</a>"],["impl Octal for <a class=\"struct\" href=\"x86/debugregs/struct.Dr6.html\" title=\"struct x86::debugregs::Dr6\">Dr6</a>"],["impl Octal for <a class=\"struct\" href=\"x86/irq/struct.PageFaultError.html\" title=\"struct x86::irq::PageFaultError\">PageFaultError</a>"],["impl Octal for <a class=\"struct\" href=\"x86/segmentation/struct.SegmentSelector.html\" title=\"struct x86::segmentation::SegmentSelector\">SegmentSelector</a>"],["impl Octal for <a class=\"struct\" href=\"x86/vmx/vmcs/control/struct.EntryControls.html\" title=\"struct x86::vmx::vmcs::control::EntryControls\">EntryControls</a>"],["impl Octal for <a class=\"struct\" href=\"x86/vmx/vmcs/control/struct.ExitControls.html\" title=\"struct x86::vmx::vmcs::control::ExitControls\">ExitControls</a>"],["impl Octal for <a class=\"struct\" href=\"x86/vmx/vmcs/control/struct.PinbasedControls.html\" title=\"struct x86::vmx::vmcs::control::PinbasedControls\">PinbasedControls</a>"],["impl Octal for <a class=\"struct\" href=\"x86/vmx/vmcs/control/struct.PrimaryControls.html\" title=\"struct x86::vmx::vmcs::control::PrimaryControls\">PrimaryControls</a>"],["impl Octal for <a class=\"struct\" href=\"x86/vmx/vmcs/control/struct.SecondaryControls.html\" title=\"struct x86::vmx::vmcs::control::SecondaryControls\">SecondaryControls</a>"]],
"x86_64":[["impl Octal for <a class=\"struct\" href=\"x86_64/addr/struct.PhysAddr.html\" title=\"struct x86_64::addr::PhysAddr\">PhysAddr</a>"],["impl Octal for <a class=\"struct\" href=\"x86_64/addr/struct.VirtAddr.html\" title=\"struct x86_64::addr::VirtAddr\">VirtAddr</a>"],["impl Octal for <a class=\"struct\" href=\"x86_64/registers/control/struct.Cr0Flags.html\" title=\"struct x86_64::registers::control::Cr0Flags\">Cr0Flags</a>"],["impl Octal for <a class=\"struct\" href=\"x86_64/registers/control/struct.Cr3Flags.html\" title=\"struct x86_64::registers::control::Cr3Flags\">Cr3Flags</a>"],["impl Octal for <a class=\"struct\" href=\"x86_64/registers/control/struct.Cr4Flags.html\" title=\"struct x86_64::registers::control::Cr4Flags\">Cr4Flags</a>"],["impl Octal for <a class=\"struct\" href=\"x86_64/registers/debug/struct.Dr6Flags.html\" title=\"struct x86_64::registers::debug::Dr6Flags\">Dr6Flags</a>"],["impl Octal for <a class=\"struct\" href=\"x86_64/registers/debug/struct.Dr7Flags.html\" title=\"struct x86_64::registers::debug::Dr7Flags\">Dr7Flags</a>"],["impl Octal for <a class=\"struct\" href=\"x86_64/registers/model_specific/struct.CetFlags.html\" title=\"struct x86_64::registers::model_specific::CetFlags\">CetFlags</a>"],["impl Octal for <a class=\"struct\" href=\"x86_64/registers/model_specific/struct.EferFlags.html\" title=\"struct x86_64::registers::model_specific::EferFlags\">EferFlags</a>"],["impl Octal for <a class=\"struct\" href=\"x86_64/registers/mxcsr/struct.MxCsr.html\" title=\"struct x86_64::registers::mxcsr::MxCsr\">MxCsr</a>"],["impl Octal for <a class=\"struct\" href=\"x86_64/registers/rflags/struct.RFlags.html\" title=\"struct x86_64::registers::rflags::RFlags\">RFlags</a>"],["impl Octal for <a class=\"struct\" href=\"x86_64/registers/xcontrol/struct.XCr0Flags.html\" title=\"struct x86_64::registers::xcontrol::XCr0Flags\">XCr0Flags</a>"],["impl Octal for <a class=\"struct\" href=\"x86_64/structures/gdt/struct.DescriptorFlags.html\" title=\"struct x86_64::structures::gdt::DescriptorFlags\">DescriptorFlags</a>"],["impl Octal for <a class=\"struct\" href=\"x86_64/structures/idt/struct.PageFaultErrorCode.html\" title=\"struct x86_64::structures::idt::PageFaultErrorCode\">PageFaultErrorCode</a>"],["impl Octal for <a class=\"struct\" href=\"x86_64/structures/paging/page_table/struct.PageTableFlags.html\" title=\"struct x86_64::structures::paging::page_table::PageTableFlags\">PageTableFlags</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()