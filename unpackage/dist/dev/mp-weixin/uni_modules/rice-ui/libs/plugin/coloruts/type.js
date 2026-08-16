"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("./constant.js");
class GenerateOptions extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          theme: { type: String, optional: true },
          backgroundColor: { type: String, optional: true }
        };
      },
      name: "GenerateOptions"
    };
  }
  constructor(options, metadata = GenerateOptions.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.theme = this.__props__.theme;
    this.backgroundColor = this.__props__.backgroundColor;
    delete this.__props__;
  }
}
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/libs/plugin/coloruts/type.js.map
