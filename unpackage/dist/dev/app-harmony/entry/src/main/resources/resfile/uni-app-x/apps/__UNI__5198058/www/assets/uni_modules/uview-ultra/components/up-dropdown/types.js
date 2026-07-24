class UPDropdownMenu extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          title: { type: String, optional: false },
          disabled: { type: Boolean, optional: false }
        };
      },
      name: "UPDropdownMenu"
    };
  }
  constructor(options, metadata = UPDropdownMenu.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.title = this.__props__.title;
    this.disabled = this.__props__.disabled;
    delete this.__props__;
  }
}
export {
  UPDropdownMenu as U
};
//# sourceMappingURL=types.js.map
