"use strict";
const common_vendor = require("../../../../common/vendor.js");
class UPDropdownMenu extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          title: { type: String, optional: false },
          disabled: { type: Boolean, optional: false }
        };
      },
      name: "UPDropdownMenu"
    };
  }
  constructor(options, metadata = UPDropdownMenu.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.title = this.__props__.title;
    this.disabled = this.__props__.disabled;
    delete this.__props__;
  }
}
exports.UPDropdownMenu = UPDropdownMenu;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-dropdown/types.js.map
