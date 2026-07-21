"use strict";
const common_vendor = require("../../common/vendor.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("./libs/mixin/mixin.js");
require("./libs/config/config.js");
require("./libs/config/color.js");
const uni_modules_uviewUltra_libs_function_index = require("./libs/function/index.js");
function loadFont() {
  common_vendor.index.loadFontFace({
    global: true,
    family: "iconfont",
    source: "url('/static/iconfont/iconfont.ttf')",
    success() {
      common_vendor.index.__f__("log", "at uni_modules/uview-ultra/index.uts:32", "global loadFontFace uni.ttf success");
    },
    fail(error) {
      common_vendor.index.__f__("warn", "at uni_modules/uview-ultra/index.uts:35", "global loadFontFace uni.ttf fail", error.errMsg);
    }
  });
}
class UPUtils {
  addUnit(val = null, unit = "") {
    return uni_modules_uviewUltra_libs_function_index.addUnit(val, unit);
  }
  addStyle(customStyle = null, target = "object") {
    return uni_modules_uviewUltra_libs_function_index.addStyle(customStyle, target);
  }
  getPx(val = null, unit = false) {
    return uni_modules_uviewUltra_libs_function_index.getPx(val, unit);
  }
  timeFormat(dateTime = 0, formatStr = "yyyy-mm-dd") {
    return uni_modules_uviewUltra_libs_function_index.timeFormat(dateTime, formatStr);
  }
  toast(title, duration = 2e3) {
    uni_modules_uviewUltra_libs_function_index.toast(title, duration);
  }
}
const uputils = new UPUtils();
const install = (app = null) => {
  app.config.globalProperties.$u = uputils;
  app.config.globalProperties.$up = uputils;
  app.mixin(uni_modules_uviewUltra_libs_mixin_mixin.mixin);
};
const ultraUI = new common_vendor.UTSJSONObject({
  install
});
exports.loadFont = loadFont;
exports.ultraUI = ultraUI;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/index.js.map
