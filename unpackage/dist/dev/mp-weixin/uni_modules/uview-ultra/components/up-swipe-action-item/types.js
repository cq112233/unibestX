"use strict";
const common_vendor = require("../../../../common/vendor.js");
class UPCommonStyle extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          color: { type: String, optional: true },
          fontSize: { type: String, optional: true },
          backgroundColor: { type: String, optional: true },
          borderRadius: { type: String, optional: true },
          width: { type: String, optional: true },
          height: { type: String, optional: true },
          margin: { type: String, optional: true },
          padding: { type: String, optional: true },
          transform: { type: String, optional: true },
          borderColor: { type: String, optional: true }
        };
      },
      name: "UPCommonStyle"
    };
  }
  constructor(options, metadata = UPCommonStyle.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.color = this.__props__.color;
    this.fontSize = this.__props__.fontSize;
    this.backgroundColor = this.__props__.backgroundColor;
    this.borderRadius = this.__props__.borderRadius;
    this.width = this.__props__.width;
    this.height = this.__props__.height;
    this.margin = this.__props__.margin;
    this.padding = this.__props__.padding;
    this.transform = this.__props__.transform;
    this.borderColor = this.__props__.borderColor;
    delete this.__props__;
  }
}
class UPSwipeActionItemOption extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          text: { type: String, optional: true },
          icon: { type: String, optional: true },
          iconSize: { type: String, optional: true },
          disabled: { type: Boolean, optional: true },
          style: { type: UPCommonStyle, optional: true }
        };
      },
      name: "UPSwipeActionItemOption"
    };
  }
  constructor(options, metadata = UPSwipeActionItemOption.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.text = this.__props__.text;
    this.icon = this.__props__.icon;
    this.iconSize = this.__props__.iconSize;
    this.disabled = this.__props__.disabled;
    this.style = this.__props__.style;
    delete this.__props__;
  }
}
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-swipe-action-item/types.js.map
