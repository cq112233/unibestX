"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_config_config = require("../../libs/config/config.js");
new common_vendor.UTSJSONObject({
  // loading-icon加载中图标组件
  loadingIcon: new common_vendor.UTSJSONObject({
    show: true,
    color: uni_modules_uviewUltra_libs_config_config.config.getString("color.up-tips-color"),
    textColor: uni_modules_uviewUltra_libs_config_config.config.getString("color.up-tips-color"),
    vertical: false,
    mode: "spinner",
    size: "24",
    textSize: "15",
    text: "",
    timingFunction: "ease-in-out",
    duration: 1200,
    inactiveColor: ""
  })
});
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js.map
