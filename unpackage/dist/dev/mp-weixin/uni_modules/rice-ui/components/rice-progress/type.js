"use strict";
const common_vendor = require("../../../../common/vendor.js");
class ProgressColors extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          color: { type: String, optional: false },
          percentage: { type: Number, optional: false }
        };
      },
      name: "ProgressColors"
    };
  }
  constructor(options, metadata = ProgressColors.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.color = this.__props__.color;
    this.percentage = this.__props__.percentage;
    delete this.__props__;
  }
}
class ProgressProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          percentage: { type: "Unknown", optional: false },
          strokeWidth: { type: "Unknown", optional: true },
          showText: { type: Boolean, optional: true },
          textColor: { type: String, optional: true },
          textSize: { type: "Unknown", optional: true },
          textPosition: { type: "Unknown", optional: true },
          format: { type: "Unknown", optional: true },
          color: { type: String, optional: true },
          inactiveColor: { type: String, optional: true },
          radius: { type: "Unknown", optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "ProgressProps"
    };
  }
  constructor(options, metadata = ProgressProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.percentage = this.__props__.percentage;
    this.strokeWidth = this.__props__.strokeWidth;
    this.showText = this.__props__.showText;
    this.textColor = this.__props__.textColor;
    this.textSize = this.__props__.textSize;
    this.textPosition = this.__props__.textPosition;
    this.format = this.__props__.format;
    this.color = this.__props__.color;
    this.inactiveColor = this.__props__.inactiveColor;
    this.radius = this.__props__.radius;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-progress/type.js.map
