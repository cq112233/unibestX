"use strict";
const common_vendor = require("../../../../common/vendor.js");
class NavbarProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          title: { type: String, optional: true },
          titleSize: { type: "Unknown", optional: true },
          titleColor: { type: String, optional: true },
          titleWidth: { type: "Unknown", optional: true },
          fixed: { type: Boolean, optional: true },
          placeholder: { type: Boolean, optional: true },
          border: { type: Boolean, optional: true },
          leftArrow: { type: Boolean, optional: true },
          leftIcon: { type: String, optional: true },
          leftIconSize: { type: "Unknown", optional: true },
          leftIconColor: { type: String, optional: true },
          leftText: { type: String, optional: true },
          leftTextColor: { type: String, optional: true },
          rightText: { type: String, optional: true },
          rightTextColor: { type: String, optional: true },
          zIndex: { type: Number, optional: true },
          bgColor: { type: String, optional: true },
          safeAreaInsetTop: { type: Boolean, optional: true },
          height: { type: "Unknown", optional: true },
          autoBack: { type: Boolean, optional: true },
          titleTextClass: { type: String, optional: true },
          navbarClass: { type: String, optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "NavbarProps"
    };
  }
  constructor(options, metadata = NavbarProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.title = this.__props__.title;
    this.titleSize = this.__props__.titleSize;
    this.titleColor = this.__props__.titleColor;
    this.titleWidth = this.__props__.titleWidth;
    this.fixed = this.__props__.fixed;
    this.placeholder = this.__props__.placeholder;
    this.border = this.__props__.border;
    this.leftArrow = this.__props__.leftArrow;
    this.leftIcon = this.__props__.leftIcon;
    this.leftIconSize = this.__props__.leftIconSize;
    this.leftIconColor = this.__props__.leftIconColor;
    this.leftText = this.__props__.leftText;
    this.leftTextColor = this.__props__.leftTextColor;
    this.rightText = this.__props__.rightText;
    this.rightTextColor = this.__props__.rightTextColor;
    this.zIndex = this.__props__.zIndex;
    this.bgColor = this.__props__.bgColor;
    this.safeAreaInsetTop = this.__props__.safeAreaInsetTop;
    this.height = this.__props__.height;
    this.autoBack = this.__props__.autoBack;
    this.titleTextClass = this.__props__.titleTextClass;
    this.navbarClass = this.__props__.navbarClass;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-navbar/type.js.map
