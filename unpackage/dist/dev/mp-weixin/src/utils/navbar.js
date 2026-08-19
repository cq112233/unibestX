"use strict";
const common_vendor = require("../../common/vendor.js");
require("../store/index.js");
const src_utils_theme = require("./theme.js");
const src_store_app = require("../store/app.js");
function applyNavbarTheme() {
  const tokens = src_utils_theme.getThemeTokens(src_store_app.useAppStore().state.isDark);
  try {
    common_vendor.index.setNavigationBarColor({
      frontColor: tokens.navText,
      backgroundColor: tokens.navBg
    });
  } catch (e) {
  }
}
exports.applyNavbarTheme = applyNavbarTheme;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/src/utils/navbar.js.map
