"use strict";
const common_vendor = require("../../../../common/vendor.js");
class DividerProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          dashed: { type: Boolean, optional: true },
          hairline: { type: Boolean, optional: true },
          width: { type: "Unknown", optional: true },
          lineColor: { type: String, optional: true },
          text: { type: "Unknown", optional: true },
          textPosition: { type: "Unknown", optional: true },
          textColor: { type: String, optional: true },
          textSize: { type: "Unknown", optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "DividerProps"
    };
  }
  constructor(options, metadata = DividerProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.dashed = this.__props__.dashed;
    this.hairline = this.__props__.hairline;
    this.width = this.__props__.width;
    this.lineColor = this.__props__.lineColor;
    this.text = this.__props__.text;
    this.textPosition = this.__props__.textPosition;
    this.textColor = this.__props__.textColor;
    this.textSize = this.__props__.textSize;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-divider/type.js.map
