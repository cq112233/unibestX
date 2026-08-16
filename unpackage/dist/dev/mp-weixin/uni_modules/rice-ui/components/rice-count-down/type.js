"use strict";
const common_vendor = require("../../../../common/vendor.js");
class CountDownProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          time: { type: Number, optional: true },
          format: { type: String, optional: true },
          autoStart: { type: Boolean, optional: true },
          millisecond: { type: Boolean, optional: true },
          fontSize: { type: "Unknown", optional: true },
          color: { type: String, optional: true },
          textClass: { type: String, optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "CountDownProps"
    };
  }
  constructor(options, metadata = CountDownProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.time = this.__props__.time;
    this.format = this.__props__.format;
    this.autoStart = this.__props__.autoStart;
    this.millisecond = this.__props__.millisecond;
    this.fontSize = this.__props__.fontSize;
    this.color = this.__props__.color;
    this.textClass = this.__props__.textClass;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-count-down/type.js.map
