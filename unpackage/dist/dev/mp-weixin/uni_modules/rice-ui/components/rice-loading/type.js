"use strict";
const common_vendor = require("../../../../common/vendor.js");
class LoadingProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          mode: { type: "Unknown", optional: true },
          duration: { type: Number, optional: true },
          color: { type: String, optional: true },
          inactiveColor: { type: String, optional: true },
          size: { type: "Unknown", optional: true },
          text: { type: "Unknown", optional: true },
          textColor: { type: String, optional: true },
          textSize: { type: "Unknown", optional: true },
          textClass: { type: String, optional: true },
          vertical: { type: Boolean, optional: true },
          timingFunction: { type: "Unknown", optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "LoadingProps"
    };
  }
  constructor(options, metadata = LoadingProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.mode = this.__props__.mode;
    this.duration = this.__props__.duration;
    this.color = this.__props__.color;
    this.inactiveColor = this.__props__.inactiveColor;
    this.size = this.__props__.size;
    this.text = this.__props__.text;
    this.textColor = this.__props__.textColor;
    this.textSize = this.__props__.textSize;
    this.textClass = this.__props__.textClass;
    this.vertical = this.__props__.vertical;
    this.timingFunction = this.__props__.timingFunction;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-loading/type.js.map
