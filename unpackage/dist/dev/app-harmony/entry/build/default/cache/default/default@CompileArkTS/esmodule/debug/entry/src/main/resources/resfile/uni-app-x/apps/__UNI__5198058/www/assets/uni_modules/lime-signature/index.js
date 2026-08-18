class LimeSignatureToFileSuccess extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          tempFilePath: { type: String, optional: false },
          isEmpty: { type: Boolean, optional: false }
        };
      },
      name: "LimeSignatureToFileSuccess"
    };
  }
  constructor(options, metadata = LimeSignatureToFileSuccess.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.tempFilePath = this.__props__.tempFilePath;
    this.isEmpty = this.__props__.isEmpty;
    delete this.__props__;
  }
}
class LimeSignatureToTempFilePathOptions extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          success: { type: "Unknown", optional: true },
          fail: { type: "Unknown", optional: true },
          complete: { type: "Unknown", optional: true },
          format: { type: String, optional: true }
        };
      },
      name: "LimeSignatureToTempFilePathOptions"
    };
  }
  constructor(options, metadata = LimeSignatureToTempFilePathOptions.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.success = this.__props__.success;
    this.fail = this.__props__.fail;
    this.complete = this.__props__.complete;
    this.format = this.__props__.format;
    delete this.__props__;
  }
}
class LimeSignatureOptions extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          penColor: { type: String, optional: false },
          openSmooth: { type: Boolean, optional: false },
          disableScroll: { type: Boolean, optional: false },
          disabled: { type: Boolean, optional: false },
          penSize: { type: Number, optional: false },
          minLineWidth: { type: Number, optional: false },
          maxLineWidth: { type: Number, optional: false },
          minSpeed: { type: Number, optional: false },
          maxWidthDiffRate: { type: Number, optional: false },
          maxHistoryLength: { type: Number, optional: false }
        };
      },
      name: "LimeSignatureOptions"
    };
  }
  constructor(options, metadata = LimeSignatureOptions.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.penColor = this.__props__.penColor;
    this.openSmooth = this.__props__.openSmooth;
    this.disableScroll = this.__props__.disableScroll;
    this.disabled = this.__props__.disabled;
    this.penSize = this.__props__.penSize;
    this.minLineWidth = this.__props__.minLineWidth;
    this.maxLineWidth = this.__props__.maxLineWidth;
    this.minSpeed = this.__props__.minSpeed;
    this.maxWidthDiffRate = this.__props__.maxWidthDiffRate;
    this.maxHistoryLength = this.__props__.maxHistoryLength;
    delete this.__props__;
  }
}
class LimeSignaturePoint extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          x: { type: Number, optional: false },
          y: { type: Number, optional: false },
          c: { type: String, optional: true },
          w: { type: Number, optional: true }
        };
      },
      name: "LimeSignaturePoint"
    };
  }
  constructor(options, metadata = LimeSignaturePoint.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.x = this.__props__.x;
    this.y = this.__props__.y;
    this.c = this.__props__.c;
    this.w = this.__props__.w;
    delete this.__props__;
  }
}
export {
  LimeSignatureToTempFilePathOptions as L,
  LimeSignatureOptions as a,
  LimeSignatureToFileSuccess as b,
  LimeSignaturePoint as c
};
//# sourceMappingURL=index.js.map
