import { m as mixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";

import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/config/config&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/config/color&";
import { a as addUnit, b as addStyle, f as getPx, q as timeFormat, t as toast } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
function loadFont() {
  uni.loadFontFace({
    global: true,
    family: "iconfont",
    source: "url('/static/iconfont/iconfont.ttf')",
    success() {
      uni.__f__("log", "at uni_modules/uview-ultra/index.uts:32", "global loadFontFace uni.ttf success");
    },
    fail(error) {
      uni.__f__("warn", "at uni_modules/uview-ultra/index.uts:35", "global loadFontFace uni.ttf fail", error.errMsg);
    }
  });
}
class UPUtils {
  addUnit(val = null, unit = "") {
    return addUnit(val, unit);
  }
  addStyle(customStyle = null, target = "object") {
    return addStyle(customStyle, target);
  }
  getPx(val = null, unit = false) {
    return getPx(val, unit);
  }
  timeFormat(dateTime = 0, formatStr = "yyyy-mm-dd") {
    return timeFormat(dateTime, formatStr);
  }
  toast(title, duration = 2e3) {
    toast(title, duration);
  }
}
const uputils = new UPUtils();
const install = (app = null) => {
  app.config.globalProperties.$u = uputils;
  app.config.globalProperties.$up = uputils;
  app.mixin(mixin);
};
const ultraUI = new UTSJSONObject({
  install
});
export {
  loadFont as l,
  ultraUI as u
};
//# sourceMappingURL=index.js.map
