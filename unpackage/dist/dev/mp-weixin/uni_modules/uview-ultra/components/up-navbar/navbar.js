"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_config_color = require("../../libs/config/color.js");
const defProps = new common_vendor.UTSJSONObject({
  // navbar 组件
  navbar: new common_vendor.UTSJSONObject({
    safeAreaInsetTop: true,
    placeholder: false,
    fixed: true,
    border: false,
    leftIcon: "arrow-left",
    leftText: "",
    rightText: "",
    rightIcon: "",
    title: "",
    bgColor: "#ffffff",
    titleWidth: "400rpx",
    height: "44px",
    leftIconSize: 20,
    leftIconColor: uni_modules_uviewUltra_libs_config_color.color["mainColor"],
    autoBack: false,
    titleStyle: new common_vendor.UTSJSONObject({})
  })
});
exports.defProps = defProps;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-navbar/navbar.js.map
