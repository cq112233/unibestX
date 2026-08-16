class ColProps extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          span: { type: Number, optional: true },
          offset: { type: Number, optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "ColProps"
    };
  }
  constructor(options, metadata = ColProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.span = this.__props__.span;
    this.offset = this.__props__.offset;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
//# sourceMappingURL=type.js.map
