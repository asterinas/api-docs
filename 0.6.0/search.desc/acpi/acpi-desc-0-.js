searchState.loadedDescShard("acpi", 0, "A library for parsing ACPI tables. This crate can be used …\nAn implementation of this trait must be provided to allow …\nAll types representing ACPI tables should implement this …\nDescribes a physical mapping created by …\nPhysical address of the start of the AML stream (excluding …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate an <code>AcpiTables</code> if you have the physical address of …\nCreate an <code>AcpiTables</code> if you have the physical address of …\nConstruct an <code>AcpiTables</code> from a custom set of “discovered…\nCreate an <code>AcpiTables</code> if you have a <code>PhysicalMapping</code> of the …\nCreate a mapping to a SDT, given its signature. This …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nLength of the table in bytes.\nLength (in bytes) of the AML stream.\nGiven a physical address and a size, map a region of …\nConstruct a new <code>PhysicalMapping</code>. <code>mapped_length</code> may differ …\nPhysical address of the start of the SDT, including the …\nConvenience method for contructing a <code>PlatformInfo</code>. This is …\nThe revision of ACPI that the system uses, as inferred …\nSearch for the RSDP on a BIOS platform. This accesses …\nUnmap the given physical mapping. This is called when a …\nWhether this SDT has been validated. This is set to <code>true</code> …\nThe BGRT table contains information about a boot graphic …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGets the orientation offset of the image. Degrees are …\nRepresents the Fixed ACPI Description Table (FADT). This …\nIf true, all processors implement the C1 power state.\nIf true, the C2 power state is configured to work on a …\nIf true, the system supports no expansion capabilities and …\nIf true, OSPM <em>must not</em> enable message-signaled interrupts.\nIf true, OSPM <em>must not</em> enable PCIe ASPM control.\nIf true, OSPM <em>must not</em> blindly probe VGA hardware. VGA …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nIf true, the system implements PSCI.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIf true, all LAPICs must be configured using the cluster …\nIf true, legacy user-accessible devices are available on …\nIf true, all LXAPICs must be configured using physical …\nIf true, the motherboard exposes an IO port 60/64 keyboard …\nIf true, the system can achieve equal or better power …\nIf true, the RTC wake status is not supported in fixed …\nIf true, the platform supports OSPM leaving GPE wake …\nIf true, indicates that the PM timer is a 32-bit value. If …\nIf true, the power button is handled as a control method …\nIf true, the contents of the <code>RTC_STS</code> register are valid …\nIf true, the RTC alarm function can wake the system from …\nOn systems with an i8259 PIC, this is the vector the …\nIf true, the sleep button is handled as a control method …\nThe system port address of the SMI Command Port. This port …\nIf true, the system supports docking.\nIf true, an equivalent to the x86 WBINVD instruction is …\nIf set, the platform supports the <code>PCIEXP_WAKE_STS</code> and …\nIf true, the system supports system reset via the …\nIf true, the system cannot detect the monitor or …\nIf true, this system is a hardware-reduced ACPI platform, …\nIf true, OSPM must use HVC instead of SMC as the PSCI …\nIf true, OSPM must use a processor instruction after …\nIf true, OSPM should use the ACPI power management timer …\nIf true, OSPM <em>must not</em> use the RTC via its IO ports, …\nIf true, WBINVD properly flushes all caches and  memory …\nThe worst-case latency to enter and exit the C2 state, in …\nThe worst-case latency to enter and exit the C3 state, in …\nInformation about the High Precision Event Timer (HPET)\nAccess to the rest of the 4KiB, relative to the base …\nAccess to the rest of the 64KiB, relative to the base …\nThe minimum number of clock ticks that can be set without …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThis field will appear for ARM processors that support …\nIf this entry is present, the system has an I/O SAPIC, …\nRepresents the MADT - this contains the MADT header …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nDescribes a set of regions of physical memory used to …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGet the physical address of the start of the configuration …\nA processor in this state is unusable, and you must not …\n<code>PlatformInfo</code> allows the collection of some basic …\nInformation about the ACPI Power Management Timer (ACPI PM …\nA Running processor is currently brought up and running …\nA processor waiting for a SIPI (Startup Inter-processor …\nACPI defines a Generic Address Structure (GAS), which …\nApplication processors should be brought up in the order …\nA generic address to the register block of ACPI PM Timer.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether this processor is the Bootstrap Processor (BSP), …\nThe ID of the local APIC of the processor. Will be less …\nOn <code>x86_64</code> platforms that support the APIC, the processor …\nCorresponds to the <code>_UID</code> object of the processor’s <code>Device</code>…\nThe state of this processor. Check that the processor is …\nThis field is <code>true</code> if the hardware supports 32-bit timer, …\nDescribes a register in the configuration space of a PCI …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nDescribes an interrupt controller based around the …\nDescribes a difference in the mapping of an ISA interrupt …\nDescribes a Global System Interrupt that should be enabled …\nThis model is only chosen when the MADT does not describe …\nThe physical address at which to access this I/O APIC.\nIf this field is set, you must remap and mask all the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe global system interrupt number where this I/O APIC’s …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRepresents a field which may or may not be present within …\nAll SDTs share the same header, and are <code>length</code> bytes long. …\nAccess the field if it’s present for the given revision …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCheck that: a) The signature matches the one given b) The …")