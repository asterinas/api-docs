(function() {var implementors = {
"acpi":[["impl Ord for <a class=\"enum\" href=\"acpi/bgrt/enum.ImageType.html\" title=\"enum acpi::bgrt::ImageType\">ImageType</a>"],["impl Ord for <a class=\"struct\" href=\"acpi/sdt/struct.Signature.html\" title=\"struct acpi::sdt::Signature\">Signature</a>"]],
"aml":[["impl Ord for <a class=\"struct\" href=\"aml/struct.AmlHandle.html\" title=\"struct aml::AmlHandle\">AmlHandle</a>"],["impl Ord for <a class=\"enum\" href=\"aml/enum.DebugVerbosity.html\" title=\"enum aml::DebugVerbosity\">DebugVerbosity</a>"],["impl Ord for <a class=\"enum\" href=\"aml/enum.NameComponent.html\" title=\"enum aml::NameComponent\">NameComponent</a>"],["impl Ord for <a class=\"struct\" href=\"aml/struct.AmlName.html\" title=\"struct aml::AmlName\">AmlName</a>"]],
"aster_frame":[["impl Ord for <a class=\"struct\" href=\"aster_frame/bus/pci/struct.PciDeviceLocation.html\" title=\"struct aster_frame::bus::pci::PciDeviceLocation\">PciDeviceLocation</a>"],["impl Ord for <a class=\"struct\" href=\"aster_frame/cpu/struct.PageFaultErrorCode.html\" title=\"struct aster_frame::cpu::PageFaultErrorCode\">PageFaultErrorCode</a>"],["impl Ord for <a class=\"struct\" href=\"aster_frame/bus/pci/cfg_space/struct.Command.html\" title=\"struct aster_frame::bus::pci::cfg_space::Command\">Command</a>"],["impl Ord for <a class=\"enum\" href=\"aster_frame/task/enum.TaskStatus.html\" title=\"enum aster_frame::task::TaskStatus\">TaskStatus</a>"],["impl Ord for <a class=\"struct\" href=\"aster_frame/boot/memory_region/struct.MemoryRegion.html\" title=\"struct aster_frame::boot::memory_region::MemoryRegion\">MemoryRegion</a>"],["impl Ord for <a class=\"enum\" href=\"aster_frame/bus/enum.BusProbeError.html\" title=\"enum aster_frame::bus::BusProbeError\">BusProbeError</a>"],["impl Ord for <a class=\"struct\" href=\"aster_frame/mm/struct.PageFlags.html\" title=\"struct aster_frame::mm::PageFlags\">PageFlags</a>"],["impl Ord for <a class=\"enum\" href=\"aster_frame/bus/mmio/device/enum.VirtioMmioVersion.html\" title=\"enum aster_frame::bus::mmio::device::VirtioMmioVersion\">VirtioMmioVersion</a>"],["impl Ord for <a class=\"struct\" href=\"aster_frame/bus/pci/cfg_space/struct.Status.html\" title=\"struct aster_frame::bus::pci::cfg_space::Status\">Status</a>"],["impl Ord for <a class=\"enum\" href=\"aster_frame/boot/memory_region/enum.MemoryRegionType.html\" title=\"enum aster_frame::boot::memory_region::MemoryRegionType\">MemoryRegionType</a>"],["impl Ord for <a class=\"enum\" href=\"aster_frame/user/enum.ReturnReason.html\" title=\"enum aster_frame::user::ReturnReason\">ReturnReason</a>"]],
"bitvec":[["impl&lt;T, O&gt; Ord for <a class=\"struct\" href=\"bitvec/vec/struct.BitVec.html\" title=\"struct bitvec::vec::BitVec\">BitVec</a>&lt;T, O&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,</div>"],["impl&lt;R&gt; Ord for <a class=\"struct\" href=\"bitvec/index/struct.BitIdx.html\" title=\"struct bitvec::index::BitIdx\">BitIdx</a>&lt;R&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"bitvec/mem/trait.BitRegister.html\" title=\"trait bitvec::mem::BitRegister\">BitRegister</a> + Ord,</div>"],["impl Ord for <a class=\"struct\" href=\"bitvec/order/struct.Msb0.html\" title=\"struct bitvec::order::Msb0\">Msb0</a>"],["impl&lt;T&gt; Ord for <a class=\"enum\" href=\"bitvec/ptr/enum.BitPtrError.html\" title=\"enum bitvec::ptr::BitPtrError\">BitPtrError</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a> + Ord,</div>"],["impl&lt;R&gt; Ord for <a class=\"struct\" href=\"bitvec/index/struct.BitEnd.html\" title=\"struct bitvec::index::BitEnd\">BitEnd</a>&lt;R&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"bitvec/mem/trait.BitRegister.html\" title=\"trait bitvec::mem::BitRegister\">BitRegister</a> + Ord,</div>"],["impl&lt;M, T, O&gt; Ord for <a class=\"struct\" href=\"bitvec/ptr/struct.BitRef.html\" title=\"struct bitvec::ptr::BitRef\">BitRef</a>&lt;'_, M, T, O&gt;<div class=\"where\">where\n    M: <a class=\"trait\" href=\"bitvec/ptr/trait.Mutability.html\" title=\"trait bitvec::ptr::Mutability\">Mutability</a>,\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,</div>"],["impl Ord for <a class=\"struct\" href=\"bitvec/order/struct.Lsb0.html\" title=\"struct bitvec::order::Lsb0\">Lsb0</a>"],["impl&lt;'a, T, O&gt; Ord for <a class=\"struct\" href=\"bitvec/slice/struct.IterZeros.html\" title=\"struct bitvec::slice::IterZeros\">IterZeros</a>&lt;'a, T, O&gt;<div class=\"where\">where\n    T: 'a + <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a> + Ord,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a> + Ord,</div>"],["impl&lt;R&gt; Ord for <a class=\"struct\" href=\"bitvec/index/struct.BitMask.html\" title=\"struct bitvec::index::BitMask\">BitMask</a>&lt;R&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"bitvec/mem/trait.BitRegister.html\" title=\"trait bitvec::mem::BitRegister\">BitRegister</a> + Ord,</div>"],["impl&lt;'a, T, O&gt; Ord for <a class=\"struct\" href=\"bitvec/slice/struct.IterOnes.html\" title=\"struct bitvec::slice::IterOnes\">IterOnes</a>&lt;'a, T, O&gt;<div class=\"where\">where\n    T: 'a + <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a> + Ord,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a> + Ord,</div>"],["impl&lt;T, O&gt; Ord for <a class=\"struct\" href=\"bitvec/boxed/struct.BitBox.html\" title=\"struct bitvec::boxed::BitBox\">BitBox</a>&lt;T, O&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,</div>"],["impl&lt;T, O&gt; Ord for <a class=\"struct\" href=\"bitvec/slice/struct.BitSlice.html\" title=\"struct bitvec::slice::BitSlice\">BitSlice</a>&lt;T, O&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,</div>"],["impl&lt;R&gt; Ord for <a class=\"struct\" href=\"bitvec/index/struct.BitSel.html\" title=\"struct bitvec::index::BitSel\">BitSel</a>&lt;R&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"bitvec/mem/trait.BitRegister.html\" title=\"trait bitvec::mem::BitRegister\">BitRegister</a> + Ord,</div>"],["impl&lt;T: Ord&gt; Ord for <a class=\"struct\" href=\"bitvec/ptr/struct.MisalignError.html\" title=\"struct bitvec::ptr::MisalignError\">MisalignError</a>&lt;T&gt;"],["impl&lt;R&gt; Ord for <a class=\"struct\" href=\"bitvec/index/struct.BitIdxError.html\" title=\"struct bitvec::index::BitIdxError\">BitIdxError</a>&lt;R&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"bitvec/mem/trait.BitRegister.html\" title=\"trait bitvec::mem::BitRegister\">BitRegister</a> + Ord,</div>"],["impl&lt;R&gt; Ord for <a class=\"struct\" href=\"bitvec/index/struct.BitPos.html\" title=\"struct bitvec::index::BitPos\">BitPos</a>&lt;R&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"bitvec/mem/trait.BitRegister.html\" title=\"trait bitvec::mem::BitRegister\">BitRegister</a> + Ord,</div>"],["impl&lt;T&gt; Ord for <a class=\"enum\" href=\"bitvec/ptr/enum.BitSpanError.html\" title=\"enum bitvec::ptr::BitSpanError\">BitSpanError</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a> + Ord,</div>"],["impl&lt;M, T, O&gt; Ord for <a class=\"struct\" href=\"bitvec/ptr/struct.BitPtr.html\" title=\"struct bitvec::ptr::BitPtr\">BitPtr</a>&lt;M, T, O&gt;<div class=\"where\">where\n    M: <a class=\"trait\" href=\"bitvec/ptr/trait.Mutability.html\" title=\"trait bitvec::ptr::Mutability\">Mutability</a>,\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,</div>"],["impl&lt;A, O&gt; Ord for <a class=\"struct\" href=\"bitvec/array/struct.BitArray.html\" title=\"struct bitvec::array::BitArray\">BitArray</a>&lt;A, O&gt;<div class=\"where\">where\n    A: <a class=\"trait\" href=\"bitvec/view/trait.BitViewSized.html\" title=\"trait bitvec::view::BitViewSized\">BitViewSized</a>,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,</div>"]],
"byteorder":[["impl Ord for <a class=\"enum\" href=\"byteorder/enum.LittleEndian.html\" title=\"enum byteorder::LittleEndian\">LittleEndian</a>"],["impl Ord for <a class=\"enum\" href=\"byteorder/enum.BigEndian.html\" title=\"enum byteorder::BigEndian\">BigEndian</a>"]],
"gimli":[["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwVis.html\" title=\"struct gimli::constants::DwVis\">DwVis</a>"],["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwIdx.html\" title=\"struct gimli::constants::DwIdx\">DwIdx</a>"],["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwAddr.html\" title=\"struct gimli::constants::DwAddr\">DwAddr</a>"],["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwRle.html\" title=\"struct gimli::constants::DwRle\">DwRle</a>"],["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwVirtuality.html\" title=\"struct gimli::constants::DwVirtuality\">DwVirtuality</a>"],["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwEnd.html\" title=\"struct gimli::constants::DwEnd\">DwEnd</a>"],["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwId.html\" title=\"struct gimli::constants::DwId\">DwId</a>"],["impl&lt;T: Ord&gt; Ord for <a class=\"struct\" href=\"gimli/struct.DebugTypesOffset.html\" title=\"struct gimli::DebugTypesOffset\">DebugTypesOffset</a>&lt;T&gt;"],["impl Ord for <a class=\"struct\" href=\"gimli/read/struct.ArangeEntry.html\" title=\"struct gimli::read::ArangeEntry\">ArangeEntry</a>"],["impl&lt;T: Ord&gt; Ord for <a class=\"enum\" href=\"gimli/enum.UnitSectionOffset.html\" title=\"enum gimli::UnitSectionOffset\">UnitSectionOffset</a>&lt;T&gt;"],["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwLang.html\" title=\"struct gimli::constants::DwLang\">DwLang</a>"],["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwTag.html\" title=\"struct gimli::constants::DwTag\">DwTag</a>"],["impl&lt;T: Ord&gt; Ord for <a class=\"struct\" href=\"gimli/struct.DebugInfoOffset.html\" title=\"struct gimli::DebugInfoOffset\">DebugInfoOffset</a>&lt;T&gt;"],["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwOp.html\" title=\"struct gimli::constants::DwOp\">DwOp</a>"],["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwLne.html\" title=\"struct gimli::constants::DwLne\">DwLne</a>"],["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwAt.html\" title=\"struct gimli::constants::DwAt\">DwAt</a>"],["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwAccess.html\" title=\"struct gimli::constants::DwAccess\">DwAccess</a>"],["impl Ord for <a class=\"struct\" href=\"gimli/struct.Register.html\" title=\"struct gimli::Register\">Register</a>"],["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwSectV2.html\" title=\"struct gimli::constants::DwSectV2\">DwSectV2</a>"],["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwChildren.html\" title=\"struct gimli::constants::DwChildren\">DwChildren</a>"],["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwCc.html\" title=\"struct gimli::constants::DwCc\">DwCc</a>"],["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwDsc.html\" title=\"struct gimli::constants::DwDsc\">DwDsc</a>"],["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwCfa.html\" title=\"struct gimli::constants::DwCfa\">DwCfa</a>"],["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwLns.html\" title=\"struct gimli::constants::DwLns\">DwLns</a>"],["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwUt.html\" title=\"struct gimli::constants::DwUt\">DwUt</a>"],["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwMacro.html\" title=\"struct gimli::constants::DwMacro\">DwMacro</a>"],["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwOrd.html\" title=\"struct gimli::constants::DwOrd\">DwOrd</a>"],["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwDs.html\" title=\"struct gimli::constants::DwDs\">DwDs</a>"],["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwAte.html\" title=\"struct gimli::constants::DwAte\">DwAte</a>"],["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwEhPe.html\" title=\"struct gimli::constants::DwEhPe\">DwEhPe</a>"],["impl Ord for <a class=\"enum\" href=\"gimli/enum.SectionId.html\" title=\"enum gimli::SectionId\">SectionId</a>"],["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwLnct.html\" title=\"struct gimli::constants::DwLnct\">DwLnct</a>"],["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwDefaulted.html\" title=\"struct gimli::constants::DwDefaulted\">DwDefaulted</a>"],["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwSect.html\" title=\"struct gimli::constants::DwSect\">DwSect</a>"],["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwInl.html\" title=\"struct gimli::constants::DwInl\">DwInl</a>"],["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwForm.html\" title=\"struct gimli::constants::DwForm\">DwForm</a>"],["impl&lt;T: Ord&gt; Ord for <a class=\"struct\" href=\"gimli/read/struct.UnitOffset.html\" title=\"struct gimli::read::UnitOffset\">UnitOffset</a>&lt;T&gt;"],["impl Ord for <a class=\"struct\" href=\"gimli/constants/struct.DwLle.html\" title=\"struct gimli::constants::DwLle\">DwLle</a>"]],
"log":[["impl&lt;'a&gt; Ord for <a class=\"struct\" href=\"log/struct.Metadata.html\" title=\"struct log::Metadata\">Metadata</a>&lt;'a&gt;"],["impl&lt;'a&gt; Ord for <a class=\"struct\" href=\"log/struct.MetadataBuilder.html\" title=\"struct log::MetadataBuilder\">MetadataBuilder</a>&lt;'a&gt;"],["impl Ord for <a class=\"enum\" href=\"log/enum.Level.html\" title=\"enum log::Level\">Level</a>"],["impl Ord for <a class=\"enum\" href=\"log/enum.LevelFilter.html\" title=\"enum log::LevelFilter\">LevelFilter</a>"]],
"multiboot2":[["impl Ord for <a class=\"struct\" href=\"multiboot2/struct.RsdpV2Tag.html\" title=\"struct multiboot2::RsdpV2Tag\">RsdpV2Tag</a>"],["impl Ord for <a class=\"struct\" href=\"multiboot2/struct.BasicMemoryInfoTag.html\" title=\"struct multiboot2::BasicMemoryInfoTag\">BasicMemoryInfoTag</a>"],["impl Ord for <a class=\"struct\" href=\"multiboot2/struct.VBECapabilities.html\" title=\"struct multiboot2::VBECapabilities\">VBECapabilities</a>"],["impl Ord for <a class=\"struct\" href=\"multiboot2/struct.TagTypeId.html\" title=\"struct multiboot2::TagTypeId\">TagTypeId</a>"],["impl Ord for <a class=\"struct\" href=\"multiboot2/struct.SmbiosTag.html\" title=\"struct multiboot2::SmbiosTag\">SmbiosTag</a>"],["impl Ord for <a class=\"struct\" href=\"multiboot2/struct.EFIBootServicesNotExitedTag.html\" title=\"struct multiboot2::EFIBootServicesNotExitedTag\">EFIBootServicesNotExitedTag</a>"],["impl Ord for <a class=\"struct\" href=\"multiboot2/struct.ElfSectionFlags.html\" title=\"struct multiboot2::ElfSectionFlags\">ElfSectionFlags</a>"],["impl Ord for <a class=\"struct\" href=\"multiboot2/struct.EFIImageHandle32Tag.html\" title=\"struct multiboot2::EFIImageHandle32Tag\">EFIImageHandle32Tag</a>"],["impl Ord for <a class=\"struct\" href=\"multiboot2/struct.ModuleTag.html\" title=\"struct multiboot2::ModuleTag\">ModuleTag</a>"],["impl Ord for <a class=\"enum\" href=\"multiboot2/enum.ElfSectionType.html\" title=\"enum multiboot2::ElfSectionType\">ElfSectionType</a>"],["impl Ord for <a class=\"struct\" href=\"multiboot2/struct.VBEDirectColorAttributes.html\" title=\"struct multiboot2::VBEDirectColorAttributes\">VBEDirectColorAttributes</a>"],["impl Ord for <a class=\"struct\" href=\"multiboot2/struct.ElfSection.html\" title=\"struct multiboot2::ElfSection\">ElfSection</a>"],["impl Ord for <a class=\"struct\" href=\"multiboot2/struct.CommandLineTag.html\" title=\"struct multiboot2::CommandLineTag\">CommandLineTag</a>"],["impl Ord for <a class=\"struct\" href=\"multiboot2/struct.FramebufferField.html\" title=\"struct multiboot2::FramebufferField\">FramebufferField</a>"],["impl Ord for <a class=\"struct\" href=\"multiboot2/struct.VBEControlInfo.html\" title=\"struct multiboot2::VBEControlInfo\">VBEControlInfo</a>"],["impl Ord for <a class=\"struct\" href=\"multiboot2/struct.VBEInfoTag.html\" title=\"struct multiboot2::VBEInfoTag\">VBEInfoTag</a>"],["impl Ord for <a class=\"struct\" href=\"multiboot2/struct.EFISdt64Tag.html\" title=\"struct multiboot2::EFISdt64Tag\">EFISdt64Tag</a>"],["impl Ord for <a class=\"struct\" href=\"multiboot2/struct.EFIImageHandle64Tag.html\" title=\"struct multiboot2::EFIImageHandle64Tag\">EFIImageHandle64Tag</a>"],["impl Ord for <a class=\"enum\" href=\"multiboot2/enum.MbiLoadError.html\" title=\"enum multiboot2::MbiLoadError\">MbiLoadError</a>"],["impl Ord for <a class=\"struct\" href=\"multiboot2/struct.MemoryArea.html\" title=\"struct multiboot2::MemoryArea\">MemoryArea</a>"],["impl Ord for <a class=\"struct\" href=\"multiboot2/struct.VBEWindowAttributes.html\" title=\"struct multiboot2::VBEWindowAttributes\">VBEWindowAttributes</a>"],["impl Ord for <a class=\"struct\" href=\"multiboot2/struct.BootLoaderNameTag.html\" title=\"struct multiboot2::BootLoaderNameTag\">BootLoaderNameTag</a>"],["impl Ord for <a class=\"struct\" href=\"multiboot2/struct.FramebufferColor.html\" title=\"struct multiboot2::FramebufferColor\">FramebufferColor</a>"],["impl Ord for <a class=\"struct\" href=\"multiboot2/struct.VBEField.html\" title=\"struct multiboot2::VBEField\">VBEField</a>"],["impl&lt;'a&gt; Ord for <a class=\"enum\" href=\"multiboot2/enum.FramebufferType.html\" title=\"enum multiboot2::FramebufferType\">FramebufferType</a>&lt;'a&gt;"],["impl Ord for <a class=\"enum\" href=\"multiboot2/enum.VBEMemoryModel.html\" title=\"enum multiboot2::VBEMemoryModel\">VBEMemoryModel</a>"],["impl Ord for <a class=\"struct\" href=\"multiboot2/struct.VBEModeInfo.html\" title=\"struct multiboot2::VBEModeInfo\">VBEModeInfo</a>"],["impl Ord for <a class=\"struct\" href=\"multiboot2/struct.RsdpV1Tag.html\" title=\"struct multiboot2::RsdpV1Tag\">RsdpV1Tag</a>"],["impl Ord for <a class=\"enum\" href=\"multiboot2/enum.MemoryAreaType.html\" title=\"enum multiboot2::MemoryAreaType\">MemoryAreaType</a>"],["impl Ord for <a class=\"struct\" href=\"multiboot2/struct.VBEModeAttributes.html\" title=\"struct multiboot2::VBEModeAttributes\">VBEModeAttributes</a>"],["impl Ord for <a class=\"struct\" href=\"multiboot2/struct.EFIMemoryMapTag.html\" title=\"struct multiboot2::EFIMemoryMapTag\">EFIMemoryMapTag</a>"],["impl Ord for <a class=\"struct\" href=\"multiboot2/struct.EFISdt32Tag.html\" title=\"struct multiboot2::EFISdt32Tag\">EFISdt32Tag</a>"],["impl Ord for <a class=\"enum\" href=\"multiboot2/enum.TagType.html\" title=\"enum multiboot2::TagType\">TagType</a>"],["impl Ord for <a class=\"struct\" href=\"multiboot2/struct.ImageLoadPhysAddrTag.html\" title=\"struct multiboot2::ImageLoadPhysAddrTag\">ImageLoadPhysAddrTag</a>"],["impl Ord for <a class=\"struct\" href=\"multiboot2/struct.BootInformationHeader.html\" title=\"struct multiboot2::BootInformationHeader\">BootInformationHeader</a>"]],
"ptr_meta":[["impl&lt;Dyn: ?Sized&gt; Ord for <a class=\"struct\" href=\"ptr_meta/struct.DynMetadata.html\" title=\"struct ptr_meta::DynMetadata\">DynMetadata</a>&lt;Dyn&gt;"]],
"smallvec":[["impl&lt;A: <a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; Ord for <a class=\"struct\" href=\"smallvec/struct.SmallVec.html\" title=\"struct smallvec::SmallVec\">SmallVec</a>&lt;A&gt;<div class=\"where\">where\n    A::<a class=\"associatedtype\" href=\"smallvec/trait.Array.html#associatedtype.Item\" title=\"type smallvec::Array::Item\">Item</a>: Ord,</div>"]],
"uefi_raw":[["impl Ord for <a class=\"struct\" href=\"uefi_raw/table/runtime/struct.TimeCapabilities.html\" title=\"struct uefi_raw::table::runtime::TimeCapabilities\">TimeCapabilities</a>"],["impl Ord for <a class=\"struct\" href=\"uefi_raw/time/struct.Daylight.html\" title=\"struct uefi_raw::time::Daylight\">Daylight</a>"],["impl Ord for <a class=\"struct\" href=\"uefi_raw/table/boot/struct.MemoryDescriptor.html\" title=\"struct uefi_raw::table::boot::MemoryDescriptor\">MemoryDescriptor</a>"],["impl Ord for <a class=\"struct\" href=\"uefi_raw/table/boot/struct.MemoryType.html\" title=\"struct uefi_raw::table::boot::MemoryType\">MemoryType</a>"],["impl Ord for <a class=\"struct\" href=\"uefi_raw/capsule/struct.CapsuleBlockDescriptor.html\" title=\"struct uefi_raw::capsule::CapsuleBlockDescriptor\">CapsuleBlockDescriptor</a>"],["impl Ord for <a class=\"struct\" href=\"uefi_raw/table/struct.Header.html\" title=\"struct uefi_raw::table::Header\">Header</a>"],["impl Ord for <a class=\"struct\" href=\"uefi_raw/table/runtime/struct.VariableAttributes.html\" title=\"struct uefi_raw::table::runtime::VariableAttributes\">VariableAttributes</a>"],["impl Ord for <a class=\"struct\" href=\"uefi_raw/table/boot/struct.MemoryAttribute.html\" title=\"struct uefi_raw::table::boot::MemoryAttribute\">MemoryAttribute</a>"],["impl Ord for <a class=\"struct\" href=\"uefi_raw/table/struct.Revision.html\" title=\"struct uefi_raw::table::Revision\">Revision</a>"],["impl Ord for <a class=\"struct\" href=\"uefi_raw/capsule/struct.CapsuleHeader.html\" title=\"struct uefi_raw::capsule::CapsuleHeader\">CapsuleHeader</a>"],["impl Ord for <a class=\"struct\" href=\"uefi_raw/table/boot/struct.EventType.html\" title=\"struct uefi_raw::table::boot::EventType\">EventType</a>"],["impl Ord for <a class=\"struct\" href=\"uefi_raw/capsule/struct.CapsuleFlags.html\" title=\"struct uefi_raw::capsule::CapsuleFlags\">CapsuleFlags</a>"]],
"uguid":[["impl Ord for <a class=\"struct\" href=\"uguid/struct.Guid.html\" title=\"struct uguid::Guid\">Guid</a>"],["impl Ord for <a class=\"enum\" href=\"uguid/enum.GuidFromStrError.html\" title=\"enum uguid::GuidFromStrError\">GuidFromStrError</a>"]],
"wyz":[["impl&lt;M, T&gt; Ord for <a class=\"struct\" href=\"wyz/comu/struct.Address.html\" title=\"struct wyz::comu::Address\">Address</a>&lt;M, T&gt;<div class=\"where\">where\n    M: <a class=\"trait\" href=\"wyz/comu/trait.Mutability.html\" title=\"trait wyz::comu::Mutability\">Mutability</a>,</div>"],["impl Ord for <a class=\"struct\" href=\"wyz/comu/struct.Mut.html\" title=\"struct wyz::comu::Mut\">Mut</a>"],["impl Ord for <a class=\"struct\" href=\"wyz/comu/struct.NullPtrError.html\" title=\"struct wyz::comu::NullPtrError\">NullPtrError</a>"],["impl&lt;Inner&gt; Ord for <a class=\"struct\" href=\"wyz/comu/struct.Frozen.html\" title=\"struct wyz::comu::Frozen\">Frozen</a>&lt;Inner&gt;<div class=\"where\">where\n    Inner: <a class=\"trait\" href=\"wyz/comu/trait.Mutability.html\" title=\"trait wyz::comu::Mutability\">Mutability</a> + Ord,</div>"],["impl Ord for <a class=\"struct\" href=\"wyz/comu/struct.Const.html\" title=\"struct wyz::comu::Const\">Const</a>"]],
"x86":[["impl Ord for <a class=\"struct\" href=\"x86/debugregs/struct.Dr6.html\" title=\"struct x86::debugregs::Dr6\">Dr6</a>"],["impl Ord for <a class=\"struct\" href=\"x86/irq/struct.PageFaultError.html\" title=\"struct x86::irq::PageFaultError\">PageFaultError</a>"],["impl Ord for <a class=\"struct\" href=\"x86/vmx/vmcs/control/struct.EntryControls.html\" title=\"struct x86::vmx::vmcs::control::EntryControls\">EntryControls</a>"],["impl Ord for <a class=\"struct\" href=\"x86/vmx/vmcs/control/struct.SecondaryControls.html\" title=\"struct x86::vmx::vmcs::control::SecondaryControls\">SecondaryControls</a>"],["impl Ord for <a class=\"struct\" href=\"x86/bits32/paging/struct.PDFlags.html\" title=\"struct x86::bits32::paging::PDFlags\">PDFlags</a>"],["impl Ord for <a class=\"struct\" href=\"x86/bits64/paging/struct.PTFlags.html\" title=\"struct x86::bits64::paging::PTFlags\">PTFlags</a>"],["impl Ord for <a class=\"struct\" href=\"x86/bits32/paging/struct.PAddr.html\" title=\"struct x86::bits32::paging::PAddr\">PAddr</a>"],["impl Ord for <a class=\"struct\" href=\"x86/vmx/vmcs/control/struct.PinbasedControls.html\" title=\"struct x86::vmx::vmcs::control::PinbasedControls\">PinbasedControls</a>"],["impl Ord for <a class=\"struct\" href=\"x86/bits64/paging/struct.PDPTFlags.html\" title=\"struct x86::bits64::paging::PDPTFlags\">PDPTFlags</a>"],["impl Ord for <a class=\"struct\" href=\"x86/vmx/vmcs/control/struct.PrimaryControls.html\" title=\"struct x86::vmx::vmcs::control::PrimaryControls\">PrimaryControls</a>"],["impl Ord for <a class=\"struct\" href=\"x86/bits64/paging/struct.PML5Flags.html\" title=\"struct x86::bits64::paging::PML5Flags\">PML5Flags</a>"],["impl Ord for <a class=\"struct\" href=\"x86/bits64/paging/struct.PDFlags.html\" title=\"struct x86::bits64::paging::PDFlags\">PDFlags</a>"],["impl Ord for <a class=\"struct\" href=\"x86/bits32/paging/struct.PTFlags.html\" title=\"struct x86::bits32::paging::PTFlags\">PTFlags</a>"],["impl Ord for <a class=\"struct\" href=\"x86/bits32/paging/struct.VAddr.html\" title=\"struct x86::bits32::paging::VAddr\">VAddr</a>"],["impl Ord for <a class=\"struct\" href=\"x86/vmx/vmcs/control/struct.ExitControls.html\" title=\"struct x86::vmx::vmcs::control::ExitControls\">ExitControls</a>"],["impl Ord for <a class=\"struct\" href=\"x86/bits64/paging/struct.PAddr.html\" title=\"struct x86::bits64::paging::PAddr\">PAddr</a>"],["impl Ord for <a class=\"struct\" href=\"x86/bits64/paging/struct.PML4Flags.html\" title=\"struct x86::bits64::paging::PML4Flags\">PML4Flags</a>"],["impl Ord for <a class=\"struct\" href=\"x86/controlregs/struct.Xcr0.html\" title=\"struct x86::controlregs::Xcr0\">Xcr0</a>"],["impl Ord for <a class=\"struct\" href=\"x86/bits64/paging/struct.IOAddr.html\" title=\"struct x86::bits64::paging::IOAddr\">IOAddr</a>"],["impl Ord for <a class=\"struct\" href=\"x86/controlregs/struct.Cr4.html\" title=\"struct x86::controlregs::Cr4\">Cr4</a>"],["impl Ord for <a class=\"struct\" href=\"x86/bits32/eflags/struct.EFlags.html\" title=\"struct x86::bits32::eflags::EFlags\">EFlags</a>"],["impl Ord for <a class=\"struct\" href=\"x86/bits64/rflags/struct.RFlags.html\" title=\"struct x86::bits64::rflags::RFlags\">RFlags</a>"],["impl Ord for <a class=\"struct\" href=\"x86/bits64/paging/struct.VAddr.html\" title=\"struct x86::bits64::paging::VAddr\">VAddr</a>"],["impl Ord for <a class=\"struct\" href=\"x86/controlregs/struct.Cr0.html\" title=\"struct x86::controlregs::Cr0\">Cr0</a>"],["impl Ord for <a class=\"struct\" href=\"x86/segmentation/struct.SegmentSelector.html\" title=\"struct x86::segmentation::SegmentSelector\">SegmentSelector</a>"],["impl Ord for <a class=\"struct\" href=\"x86/bits32/paging/struct.IOAddr.html\" title=\"struct x86::bits32::paging::IOAddr\">IOAddr</a>"]],
"x86_64":[["impl Ord for <a class=\"struct\" href=\"x86_64/registers/xcontrol/struct.XCr0Flags.html\" title=\"struct x86_64::registers::xcontrol::XCr0Flags\">XCr0Flags</a>"],["impl&lt;S: Ord + <a class=\"trait\" href=\"x86_64/structures/paging/page/trait.PageSize.html\" title=\"trait x86_64::structures::paging::page::PageSize\">PageSize</a>&gt; Ord for <a class=\"struct\" href=\"x86_64/structures/paging/frame/struct.PhysFrame.html\" title=\"struct x86_64::structures::paging::frame::PhysFrame\">PhysFrame</a>&lt;S&gt;"],["impl Ord for <a class=\"struct\" href=\"x86_64/registers/debug/struct.Dr6Flags.html\" title=\"struct x86_64::registers::debug::Dr6Flags\">Dr6Flags</a>"],["impl Ord for <a class=\"struct\" href=\"x86_64/structures/paging/page_table/struct.PageTableIndex.html\" title=\"struct x86_64::structures::paging::page_table::PageTableIndex\">PageTableIndex</a>"],["impl Ord for <a class=\"struct\" href=\"x86_64/addr/struct.PhysAddr.html\" title=\"struct x86_64::addr::PhysAddr\">PhysAddr</a>"],["impl Ord for <a class=\"struct\" href=\"x86_64/registers/debug/struct.Dr7Flags.html\" title=\"struct x86_64::registers::debug::Dr7Flags\">Dr7Flags</a>"],["impl Ord for <a class=\"enum\" href=\"x86_64/structures/paging/page_table/enum.PageTableLevel.html\" title=\"enum x86_64::structures::paging::page_table::PageTableLevel\">PageTableLevel</a>"],["impl Ord for <a class=\"struct\" href=\"x86_64/structures/gdt/struct.DescriptorFlags.html\" title=\"struct x86_64::structures::gdt::DescriptorFlags\">DescriptorFlags</a>"],["impl Ord for <a class=\"enum\" href=\"x86_64/structures/paging/page/enum.Size1GiB.html\" title=\"enum x86_64::structures::paging::page::Size1GiB\">Size1GiB</a>"],["impl Ord for <a class=\"struct\" href=\"x86_64/addr/struct.VirtAddr.html\" title=\"struct x86_64::addr::VirtAddr\">VirtAddr</a>"],["impl Ord for <a class=\"struct\" href=\"x86_64/registers/control/struct.Cr3Flags.html\" title=\"struct x86_64::registers::control::Cr3Flags\">Cr3Flags</a>"],["impl Ord for <a class=\"struct\" href=\"x86_64/registers/mxcsr/struct.MxCsr.html\" title=\"struct x86_64::registers::mxcsr::MxCsr\">MxCsr</a>"],["impl Ord for <a class=\"struct\" href=\"x86_64/registers/control/struct.Cr0Flags.html\" title=\"struct x86_64::registers::control::Cr0Flags\">Cr0Flags</a>"],["impl Ord for <a class=\"struct\" href=\"x86_64/registers/model_specific/struct.EferFlags.html\" title=\"struct x86_64::registers::model_specific::EferFlags\">EferFlags</a>"],["impl Ord for <a class=\"struct\" href=\"x86_64/instructions/tlb/struct.Pcid.html\" title=\"struct x86_64::instructions::tlb::Pcid\">Pcid</a>"],["impl Ord for <a class=\"enum\" href=\"x86_64/structures/paging/page/enum.Size4KiB.html\" title=\"enum x86_64::structures::paging::page::Size4KiB\">Size4KiB</a>"],["impl Ord for <a class=\"struct\" href=\"x86_64/registers/model_specific/struct.CetFlags.html\" title=\"struct x86_64::registers::model_specific::CetFlags\">CetFlags</a>"],["impl Ord for <a class=\"struct\" href=\"x86_64/structures/paging/page_table/struct.PageTableFlags.html\" title=\"struct x86_64::structures::paging::page_table::PageTableFlags\">PageTableFlags</a>"],["impl Ord for <a class=\"struct\" href=\"x86_64/registers/rflags/struct.RFlags.html\" title=\"struct x86_64::registers::rflags::RFlags\">RFlags</a>"],["impl Ord for <a class=\"struct\" href=\"x86_64/registers/control/struct.Cr4Flags.html\" title=\"struct x86_64::registers::control::Cr4Flags\">Cr4Flags</a>"],["impl Ord for <a class=\"struct\" href=\"x86_64/registers/segmentation/struct.SegmentSelector.html\" title=\"struct x86_64::registers::segmentation::SegmentSelector\">SegmentSelector</a>"],["impl Ord for <a class=\"struct\" href=\"x86_64/structures/paging/page_table/struct.PageOffset.html\" title=\"struct x86_64::structures::paging::page_table::PageOffset\">PageOffset</a>"],["impl Ord for <a class=\"enum\" href=\"x86_64/structures/paging/page/enum.Size2MiB.html\" title=\"enum x86_64::structures::paging::page::Size2MiB\">Size2MiB</a>"],["impl&lt;S: Ord + <a class=\"trait\" href=\"x86_64/structures/paging/page/trait.PageSize.html\" title=\"trait x86_64::structures::paging::page::PageSize\">PageSize</a>&gt; Ord for <a class=\"struct\" href=\"x86_64/structures/paging/page/struct.Page.html\" title=\"struct x86_64::structures::paging::page::Page\">Page</a>&lt;S&gt;"],["impl Ord for <a class=\"struct\" href=\"x86_64/structures/idt/struct.PageFaultErrorCode.html\" title=\"struct x86_64::structures::idt::PageFaultErrorCode\">PageFaultErrorCode</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()