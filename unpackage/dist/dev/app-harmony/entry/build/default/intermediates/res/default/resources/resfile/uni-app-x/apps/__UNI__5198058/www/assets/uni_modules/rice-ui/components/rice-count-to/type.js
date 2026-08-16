class CountToProps extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          startVal: { type: "Unknown", optional: true },
          endVal: { type: "Unknown", optional: true },
          duration: { type: Number, optional: true },
          autoplay: { type: Boolean, optional: true },
          restart: { type: Boolean, optional: true },
          decimals: { type: Number, optional: true },
          color: { type: String, optional: true },
          fontSize: { type: "Unknown", optional: true },
          bold: { type: Boolean, optional: true },
          separator: { type: String, optional: true },
          textClass: { type: String, optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "CountToProps"
    };
  }
  constructor(options, metadata = CountToProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.startVal = this.__props__.startVal;
    this.endVal = this.__props__.endVal;
    this.duration = this.__props__.duration;
    this.autoplay = this.__props__.autoplay;
    this.restart = this.__props__.restart;
    this.decimals = this.__props__.decimals;
    this.color = this.__props__.color;
    this.fontSize = this.__props__.fontSize;
    this.bold = this.__props__.bold;
    this.separator = this.__props__.separator;
    this.textClass = this.__props__.textClass;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
//# sourceMappingURL=type.js.map
