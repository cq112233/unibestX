class RateStatus extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          status: { type: "Unknown", optional: false },
          value: { type: Number, optional: false }
        };
      },
      name: "RateStatus"
    };
  }
  constructor(options, metadata = RateStatus.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.status = this.__props__.status;
    this.value = this.__props__.value;
    delete this.__props__;
  }
}
class RateProps extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          count: { type: Number, optional: true },
          icon: { type: String, optional: true },
          voidIcon: { type: String, optional: true },
          size: { type: "Unknown", optional: true },
          gutter: { type: "Unknown", optional: true },
          color: { type: String, optional: true },
          voidColor: { type: String, optional: true },
          allowHalf: { type: Boolean, optional: true },
          clearable: { type: Boolean, optional: true },
          readonly: { type: Boolean, optional: true },
          disabled: { type: Boolean, optional: true },
          touchable: { type: Boolean, optional: true },
          customStyle: { type: "Unknown", optional: false }
        };
      },
      name: "RateProps"
    };
  }
  constructor(options, metadata = RateProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.count = this.__props__.count;
    this.icon = this.__props__.icon;
    this.voidIcon = this.__props__.voidIcon;
    this.size = this.__props__.size;
    this.gutter = this.__props__.gutter;
    this.color = this.__props__.color;
    this.voidColor = this.__props__.voidColor;
    this.allowHalf = this.__props__.allowHalf;
    this.clearable = this.__props__.clearable;
    this.readonly = this.__props__.readonly;
    this.disabled = this.__props__.disabled;
    this.touchable = this.__props__.touchable;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
export {
  RateStatus as R
};
//# sourceMappingURL=type.js.map
