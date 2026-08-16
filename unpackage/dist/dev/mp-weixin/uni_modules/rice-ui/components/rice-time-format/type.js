"use strict";
const common_vendor = require("../../../../common/vendor.js");
class TimeFormatProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          timestamp: { type: Number, optional: false },
          format: { type: String, optional: true },
          futureRelative: { type: Boolean, optional: true }
        };
      },
      name: "TimeFormatProps"
    };
  }
  constructor(options, metadata = TimeFormatProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.timestamp = this.__props__.timestamp;
    this.format = this.__props__.format;
    this.futureRelative = this.__props__.futureRelative;
    delete this.__props__;
  }
}
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-time-format/type.js.map
