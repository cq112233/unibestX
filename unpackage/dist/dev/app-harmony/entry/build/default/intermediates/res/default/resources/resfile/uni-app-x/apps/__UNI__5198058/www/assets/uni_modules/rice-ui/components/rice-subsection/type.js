class SubsectionItemRect extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          height: { type: Number, optional: false },
          width: { type: Number, optional: false }
        };
      },
      name: "SubsectionItemRect"
    };
  }
  constructor(options, metadata = SubsectionItemRect.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.height = this.__props__.height;
    this.width = this.__props__.width;
    delete this.__props__;
  }
}
class SubsectionProps extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          list: { type: UTS.UTSType.withGenerics(Array, [String]), optional: false },
          shape: { type: "Unknown", optional: true },
          initAnimate: { type: Boolean, optional: true },
          duration: { type: Number, optional: true },
          beforeChange: { type: "Unknown", optional: true },
          barClass: { type: String, optional: true },
          itemClass: { type: String, optional: true },
          textClass: { type: String, optional: true },
          activeTextClass: { type: String, optional: true },
          inactiveTextClass: { type: String, optional: true }
        };
      },
      name: "SubsectionProps"
    };
  }
  constructor(options, metadata = SubsectionProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.list = this.__props__.list;
    this.shape = this.__props__.shape;
    this.initAnimate = this.__props__.initAnimate;
    this.duration = this.__props__.duration;
    this.beforeChange = this.__props__.beforeChange;
    this.barClass = this.__props__.barClass;
    this.itemClass = this.__props__.itemClass;
    this.textClass = this.__props__.textClass;
    this.activeTextClass = this.__props__.activeTextClass;
    this.inactiveTextClass = this.__props__.inactiveTextClass;
    delete this.__props__;
  }
}
export {
  SubsectionItemRect as S
};
//# sourceMappingURL=type.js.map
