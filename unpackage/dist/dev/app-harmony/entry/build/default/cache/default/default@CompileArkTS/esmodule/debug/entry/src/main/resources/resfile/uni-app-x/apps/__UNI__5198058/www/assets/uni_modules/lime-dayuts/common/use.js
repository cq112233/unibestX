import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-dayuts/utssdk/interface&";
import { e as en } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-dayuts/common/locale/en/index&";
import { l as locale } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-dayuts/common/locale/zh-cn/index&";
const { reactive } = globalThis.Vue
const localesMap = /* @__PURE__ */ new Map();
let localeState = reactive({
  lang: "en",
  locales: localesMap
});
localeState.locales.set("en", en);
localeState.locales.set("zh-cn", locale);
class DayutsIntl {
  constructor() {
  }
  use(locale2) {
    localeState.locales.set(locale2.name, locale2);
    return this;
  }
  set locale(locale2) {
    if (localeState.locales.has(locale2)) {
      localeState.lang = locale2;
    } else {
      let list = [];
      localeState.locales.forEach(function(_, key) {
        list.push(key);
      });
      uni.__f__("warn", "at uni_modules/lime-dayuts/common/use.ts:46", `未知语言: "${locale2}". 请使用以下已知语言之一:${list.join(", ")}`);
    }
  }
  get locale() {
    return localeState.lang;
  }
  set(name, locale2) {
    localeState.locales.set(name, locale2);
  }
  has(name) {
    return localeState.locales.has(name);
  }
}
const dayutsIntl = new DayutsIntl();
export {
  dayutsIntl as d,
  localeState as l
};
//# sourceMappingURL=use.js.map
