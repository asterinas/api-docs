searchState.loadedDescShard("aml", 0, "<code>aml</code> is a pure-Rust AML (ACPI Machine Language) parser, …\nAML has a <code>RevisionOp</code> operator that returns the “AML …\nPrint heads and tails of all objects, and extra debug …\nPrint heads and tails when entering and leaving scopes of …\nUsed when an <code>AmlContext</code> encounters an error.\nA handle is used to refer to an AML value without actually …\nA <code>DefBreak</code> operation was performed outside of a <code>DefWhile</code> …\nA <code>DefContinue</code> operation was performed outside of a <code>DefWhile</code>…\nDescribes how much debug information the parser should …\nReturned when a <code>DefFatal</code> op is encountered. This is …\nTrait type used by <code>AmlContext</code> to handle reading and …\nProduced when a method accesses an argument it does not …\nProduced when a method accesses a local that it has not …\nProduced when trying to normalize a path that does not …\nProduced when a sub-level or value is added to a level …\nProduced when a <code>DefBuffer</code> contains more bytes that its …\nProduced when a <code>DefPackage</code> contains a different number of …\nProduced when the stream evaluates to something other than …\nA level of this type is created at the same path as the …\nProduced when two values with the same name are added to …\nPrint no debug information\nProduced when AML tries to do something only possible in a …\nA <code>PowerResource</code> object’s sub-objects are stored in a …\nA legacy <code>Processor</code> object’s sub-objects are stored in a …\nProduced when the PRT doesn’t contain an entry for the …\nPrint heads and tails when entering and leaving scopes of …\nA <code>ThermalZone</code> object’s sub-objects are stored in a level …\nTried to invoke a method with too many arguments.\nProduced when the <code>Mid</code> operator is applied to a value of a …\nUnimplemented functionality - return error rather than …\nEmitted by a parser when it’s clear that the stream doesn…\nAdd an alias for an existing name. The alias will refer to …\nAdd a new level to the namespace. A “level” is named …\nAdd a value to the namespace at the given path, which must …\nHelper method for adding a value to the namespace at a …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert a string representation of an AML name into an …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAn AML path is normal if it does not contain any prefix …\nCreates a new <code>AmlContext</code> - the central type in managing …\nNormalize an AML path, resolving prefix chars. Returns …\nGet the parent of this <code>AmlName</code>. For example, the parent of …\nResolve this path against a given scope, making it …\nSearch for an object at the given path of the namespace, …\nSpecial rules apply when searching for certain paths …\nTraverse the namespace, calling <code>f</code> on each namespace level. …\nThe interrupt is hard-coded to a specific GSI\nThe interrupt is linked to a link object. This object will …\nA <code>PciRoutingTable</code> is used to interpret the data in a <code>_PRT</code> …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstruct a <code>PciRoutingTable</code> from a path to a <code>_PRT</code> object. …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGet the interrupt input that a given PCI interrupt pin is …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nParse a <code>ResourceDescriptor</code> into a list of resources. …\nA control method can take up to 7 arguments, each of which …\nHandle to a definition block handle. Returned by the <code>Load</code> …\nDescribes a field unit within an operation region.\nDescribes an operation region. Some regions require other …\nRepresentation of the return value of a <code>_STA</code> method, which …\nConverts an <code>AmlValue</code> to the representation that should be …\nTurns an <code>AmlValue</code> returned from a <code>_STA</code> method into a …\nConvert this value to a value of the same data, but with …\nOnly applicable for Control Method Battery Devices (<code>PNP0C0A</code>…\nLogically compare two <code>AmlValue</code>s, according to the rules …\nWhether the device is enabled. Both <code>present</code> and <code>enabled</code> …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether the device is physically present. If this is <code>false</code>…\nReads from a field of an opregion, returning either a …\nIn bits.\nIn bits.")