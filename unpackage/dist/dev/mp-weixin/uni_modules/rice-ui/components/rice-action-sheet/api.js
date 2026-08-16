"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("./type.js");
require("../../libs/utils/basic.js");
class ActionSheetBusEvent extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          type: { type: "Unknown", optional: false },
          action: { type: "Unknown", optional: true },
          index: { type: Number, optional: true },
          errMsg: { type: String, optional: true },
          pageIns: { type: "Unknown", optional: true }
        };
      },
      name: "ActionSheetBusEvent"
    };
  }
  constructor(options, metadata = ActionSheetBusEvent.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.type = this.__props__.type;
    this.action = this.__props__.action;
    this.index = this.__props__.index;
    this.errMsg = this.__props__.errMsg;
    this.pageIns = this.__props__.pageIns;
    delete this.__props__;
  }
}
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-action-sheet/api.js.map
