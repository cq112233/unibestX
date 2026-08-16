"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_config_config = require("../../libs/config/config.js");
new common_vendor.UTSJSONObject({
  // link超链接组件props参数
  link: new common_vendor.UTSJSONObject({
    color: uni_modules_uviewUltra_libs_config_config.config.getString("color.up-primary"),
    fontSize: "15px",
    underLine: false,
    href: "",
    mpTips: "链接已复制，请在浏览器打开",
    lineColor: "",
    text: ""
  })
});
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-link/link.js.map
