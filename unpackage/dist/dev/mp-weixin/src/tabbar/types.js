"use strict";
const common_vendor = require("../../common/vendor.js");
class CustomTabBarItem extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          text: { type: String, optional: false },
          pagePath: { type: String, optional: false },
          iconType: { type: String, optional: false },
          icon: { type: String, optional: false },
          iconActive: { type: String, optional: false },
          badge: { type: "Unknown", optional: true },
          isBulge: { type: Boolean, optional: false }
        };
      },
      name: "CustomTabBarItem"
    };
  }
  constructor(options, metadata = CustomTabBarItem.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.text = this.__props__.text;
    this.pagePath = this.__props__.pagePath;
    this.iconType = this.__props__.iconType;
    this.icon = this.__props__.icon;
    this.iconActive = this.__props__.iconActive;
    this.badge = this.__props__.badge;
    this.isBulge = this.__props__.isBulge;
    delete this.__props__;
  }
}
exports.CustomTabBarItem = CustomTabBarItem;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/src/tabbar/types.js.map
