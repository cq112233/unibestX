"use strict";
const common_vendor = require("../../../../common/vendor.js");
class QRCodeCompletePayload extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          tempFilePath: { type: String, optional: true },
          autoExport: { type: Boolean, optional: false }
        };
      },
      name: "QRCodeCompletePayload"
    };
  }
  constructor(options, metadata = QRCodeCompletePayload.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.tempFilePath = this.__props__.tempFilePath;
    this.autoExport = this.__props__.autoExport;
    delete this.__props__;
  }
}
class QRCodeError extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          code: { type: Number, optional: false },
          errMsg: { type: String, optional: false }
        };
      },
      name: "QRCodeError"
    };
  }
  constructor(options, metadata = QRCodeError.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.code = this.__props__.code;
    this.errMsg = this.__props__.errMsg;
    delete this.__props__;
  }
}
class QRRSBlock extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          totalCount: { type: Number, optional: false },
          dataCount: { type: Number, optional: false }
        };
      },
      name: "QRRSBlock"
    };
  }
  constructor(options, metadata = QRRSBlock.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.totalCount = this.__props__.totalCount;
    this.dataCount = this.__props__.dataCount;
    delete this.__props__;
  }
}
class QRPolynomial extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          num: { type: common_vendor.UTS.UTSType.withGenerics(Array, [Number]), optional: false }
        };
      },
      name: "QRPolynomial"
    };
  }
  constructor(options, metadata = QRPolynomial.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.num = this.__props__.num;
    delete this.__props__;
  }
}
class QRBitBuffer extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          buffer: { type: common_vendor.UTS.UTSType.withGenerics(Array, [Number]), optional: false },
          length: { type: Number, optional: false }
        };
      },
      name: "QRBitBuffer"
    };
  }
  constructor(options, metadata = QRBitBuffer.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.buffer = this.__props__.buffer;
    this.length = this.__props__.length;
    delete this.__props__;
  }
}
class QRCodeProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          value: { type: String, optional: false },
          color: { type: String, optional: true },
          bgColor: { type: String, optional: true },
          icon: { type: String, optional: true },
          iconOption: { type: "Unknown", optional: true },
          level: { type: "Unknown", optional: true },
          autoExport: { type: Boolean, optional: true },
          padding: { type: Number, optional: true },
          eyeShape: { type: "Unknown", optional: true },
          dotShape: { type: "Unknown", optional: true },
          size: { type: Number, optional: true },
          statusClass: { type: String, optional: true },
          showStatus: { type: Boolean, optional: true }
        };
      },
      name: "QRCodeProps"
    };
  }
  constructor(options, metadata = QRCodeProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.value = this.__props__.value;
    this.color = this.__props__.color;
    this.bgColor = this.__props__.bgColor;
    this.icon = this.__props__.icon;
    this.iconOption = this.__props__.iconOption;
    this.level = this.__props__.level;
    this.autoExport = this.__props__.autoExport;
    this.padding = this.__props__.padding;
    this.eyeShape = this.__props__.eyeShape;
    this.dotShape = this.__props__.dotShape;
    this.size = this.__props__.size;
    this.statusClass = this.__props__.statusClass;
    this.showStatus = this.__props__.showStatus;
    delete this.__props__;
  }
}
exports.QRBitBuffer = QRBitBuffer;
exports.QRCodeCompletePayload = QRCodeCompletePayload;
exports.QRCodeError = QRCodeError;
exports.QRPolynomial = QRPolynomial;
exports.QRRSBlock = QRRSBlock;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-qrcode/type.js.map
