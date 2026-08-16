class CellGroupProps extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          title: { type: "Unknown", optional: true },
          border: { type: Boolean, optional: true },
          radius: { type: "Unknown", optional: true },
          titleStyle: { type: "Unknown", optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "CellGroupProps"
    };
  }
  constructor(options, metadata = CellGroupProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.title = this.__props__.title;
    this.border = this.__props__.border;
    this.radius = this.__props__.radius;
    this.titleStyle = this.__props__.titleStyle;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
//# sourceMappingURL=type.js.map
