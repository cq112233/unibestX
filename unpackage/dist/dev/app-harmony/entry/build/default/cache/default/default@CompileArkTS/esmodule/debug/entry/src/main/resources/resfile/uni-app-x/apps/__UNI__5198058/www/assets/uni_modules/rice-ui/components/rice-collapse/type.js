class CollapseInjectKey extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          activeNames: { type: "Unknown", optional: false },
          duration: { type: "Unknown", optional: false },
          handleItemClick: { type: "Unknown", optional: false }
        };
      },
      name: "CollapseInjectKey"
    };
  }
  constructor(options, metadata = CollapseInjectKey.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.activeNames = this.__props__.activeNames;
    this.duration = this.__props__.duration;
    this.handleItemClick = this.__props__.handleItemClick;
    delete this.__props__;
  }
}
class CollapseProps extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          accordion: { type: Boolean, optional: true },
          border: { type: Boolean, optional: true },
          duration: { type: Number, optional: true }
        };
      },
      name: "CollapseProps"
    };
  }
  constructor(options, metadata = CollapseProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.accordion = this.__props__.accordion;
    this.border = this.__props__.border;
    this.duration = this.__props__.duration;
    delete this.__props__;
  }
}
export {
  CollapseInjectKey as C
};
//# sourceMappingURL=type.js.map
