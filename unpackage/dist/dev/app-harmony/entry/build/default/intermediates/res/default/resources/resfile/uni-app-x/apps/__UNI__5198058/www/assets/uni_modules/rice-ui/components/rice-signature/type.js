class SignaturePoint extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          x: { type: Number, optional: false },
          y: { type: Number, optional: false }
        };
      },
      name: "SignaturePoint"
    };
  }
  constructor(options, metadata = SignaturePoint.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.x = this.__props__.x;
    this.y = this.__props__.y;
    delete this.__props__;
  }
}
class SignatureCanvasSize extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          width: { type: Number, optional: false },
          height: { type: Number, optional: false }
        };
      },
      name: "SignatureCanvasSize"
    };
  }
  constructor(options, metadata = SignatureCanvasSize.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.width = this.__props__.width;
    this.height = this.__props__.height;
    delete this.__props__;
  }
}
class SignatureProps extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          type: { type: "Unknown", optional: true },
          width: { type: "Unknown", optional: true },
          height: { type: "Unknown", optional: true },
          disabled: { type: Boolean, optional: true },
          tips: { type: String, optional: true },
          tipsSize: { type: "Unknown", optional: true },
          tipsColor: { type: String, optional: true },
          lineColor: { type: String, optional: true },
          lineWidth: { type: Number, optional: true },
          bgColor: { type: String, optional: true },
          contentBgColor: { type: String, optional: true },
          clearButtonText: { type: String, optional: true },
          confirmButtonText: { type: String, optional: true },
          revokeButtonText: { type: String, optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "SignatureProps"
    };
  }
  constructor(options, metadata = SignatureProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.type = this.__props__.type;
    this.width = this.__props__.width;
    this.height = this.__props__.height;
    this.disabled = this.__props__.disabled;
    this.tips = this.__props__.tips;
    this.tipsSize = this.__props__.tipsSize;
    this.tipsColor = this.__props__.tipsColor;
    this.lineColor = this.__props__.lineColor;
    this.lineWidth = this.__props__.lineWidth;
    this.bgColor = this.__props__.bgColor;
    this.contentBgColor = this.__props__.contentBgColor;
    this.clearButtonText = this.__props__.clearButtonText;
    this.confirmButtonText = this.__props__.confirmButtonText;
    this.revokeButtonText = this.__props__.revokeButtonText;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
export {
  SignaturePoint as S,
  SignatureCanvasSize as a
};
//# sourceMappingURL=type.js.map
