"use strict";
require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_config_config = require("../../libs/config/config.js");
const defProps = new UTSJSONObject({
  // link超链接组件props参数
  link: new UTSJSONObject({
    color: uni_modules_uviewUltra_libs_config_config.config.getString("color.up-primary"),
    fontSize: "15px",
    underLine: false,
    href: "",
    mpTips: "链接已复制，请在浏览器打开",
    lineColor: "",
    text: ""
  })
});
exports.defProps = defProps;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-link/link.js.map
