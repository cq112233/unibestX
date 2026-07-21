"use strict";
require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_config_config = require("../../libs/config/config.js");
const defProps = new UTSJSONObject({
  // dropdown组件
  dropdown: new UTSJSONObject({
    activeColor: uni_modules_uviewUltra_libs_config_config.config.getString("color.up-primary"),
    inactiveColor: "#606266",
    closeOnClickMask: true,
    closeOnClickSelf: true,
    duration: 300,
    height: 40,
    borderBottom: false,
    titleSize: 14,
    borderRadius: 0,
    menuIcon: "arrow-down",
    menuIconSize: 14
  })
});
exports.defProps = defProps;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-dropdown/dropdown.js.map
