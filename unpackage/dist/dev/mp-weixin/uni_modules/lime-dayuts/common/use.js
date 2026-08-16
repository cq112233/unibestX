"use strict";
const common_vendor = require("../../../common/vendor.js");
require("../utssdk/interface.js");
const uni_modules_limeDayuts_common_locale_en_index = require("./locale/en/index.js");
const uni_modules_limeDayuts_common_locale_zhCn_index = require("./locale/zh-cn/index.js");
const localesMap = /* @__PURE__ */ new Map();
let localeState = common_vendor.reactive({
  lang: "en",
  locales: localesMap
});
localeState.locales.set("en", uni_modules_limeDayuts_common_locale_en_index.en);
localeState.locales.set("zh-cn", uni_modules_limeDayuts_common_locale_zhCn_index.locale);
class DayutsIntl {
  constructor() {
  }
  use(locale) {
    localeState.locales.set(locale.name, locale);
    return this;
  }
  set locale(locale) {
    if (localeState.locales.has(locale)) {
      localeState.lang = locale;
    } else {
      let list = [];
      localeState.locales.forEach(function(_, key) {
        list.push(key);
      });
      common_vendor.index.__f__("warn", "at uni_modules/lime-dayuts/common/use.ts:46", `未知语言: "${locale}". 请使用以下已知语言之一:${list.join(", ")}`);
    }
  }
  get locale() {
    return localeState.lang;
  }
  set(name, locale) {
    localeState.locales.set(name, locale);
  }
  has(name) {
    return localeState.locales.has(name);
  }
}
const dayutsIntl = new DayutsIntl();
exports.dayutsIntl = dayutsIntl;
exports.localeState = localeState;
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uni_modules/lime-dayuts/common/use.js.map
