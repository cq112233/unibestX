"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("./type.js");
require("../../libs/utils/basic.js");
require("../../libs/store/useConfig.js");
class DialogBusEvent extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          type: { type: "Unknown", optional: false },
          errMsg: { type: String, optional: true },
          pageIns: { type: "Unknown", optional: true }
        };
      },
      name: "DialogBusEvent"
    };
  }
  constructor(options, metadata = DialogBusEvent.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.type = this.__props__.type;
    this.errMsg = this.__props__.errMsg;
    this.pageIns = this.__props__.pageIns;
    delete this.__props__;
  }
}
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-dialog/api.js.map
