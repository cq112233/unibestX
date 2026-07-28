const { reactive } = globalThis.Vue
import { z as zhHans } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/i18n/locales/zh-Hans&";
import { z as zhHant } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/i18n/locales/zh-Hant&";
import { e as en } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/i18n/locales/en&";
import { e as es } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/i18n/locales/es&";
import { f as fr } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/i18n/locales/fr&";
import { d as de } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/i18n/locales/de&";
import { k as ko } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/i18n/locales/ko&";
import { j as ja } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/i18n/locales/ja&";
import { r as ru } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/i18n/locales/ru&";
function normalizeLocale(locale) {
  if (locale == "" || locale == null)
    return "zh-Hans";
  let l = locale.toLowerCase();
  if (l.includes("zh-tw") || l.includes("zh-hk") || l.includes("zh-hant")) {
    return "zh-Hant";
  }
  if (l.includes("zh")) {
    return "zh-Hans";
  }
  if (l.includes("en")) {
    return "en";
  }
  if (l.includes("es"))
    return "es";
  if (l.includes("fr"))
    return "fr";
  if (l.includes("de"))
    return "de";
  if (l.includes("ko"))
    return "ko";
  if (l.includes("ja"))
    return "ja";
  if (l.includes("ru"))
    return "ru";
  return "zh-Hans";
}
let settings = reactive(new UTSJSONObject({
  lang: "zh-Hans",
  locales: new UTSJSONObject({
    en,
    es,
    fr,
    de,
    ko,
    ja,
    ru,
    "zh-Hant": zhHant,
    "zh-Hans": zhHans
  })
}));
function setLocale(locale) {
  settings["lang"] = normalizeLocale(locale);
}
function getLocale() {
  return settings["lang"];
}
function t(value, params = new UTSJSONObject({})) {
  if (value != "") {
    let key = value.replaceAll(".", "_");
    let lang = normalizeLocale(settings["lang"]);
    let locales = settings["locales"];
    let currentDict = locales[lang];
    if (currentDict == null) {
      currentDict = locales["zh-Hans"];
    }
    let result = "";
    if (currentDict != null && currentDict[key] != null) {
      result = currentDict[key].toString();
    } else if (currentDict != null && currentDict[value] != null) {
      result = currentDict[value].toString();
    } else {
      result = value;
    }
    let resultStr = result.toString();
    if (params != null) {
      const keys = UTSJSONObject.keys(params);
      for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        const val = params[k];
        if (val != null) {
          resultStr = resultStr.replaceAll(`{${k}}`, val.toString());
        }
      }
    }
    return resultStr;
  } else {
    return value;
  }
}
function formatMonthTitle(year = null, month = null) {
  const y = year != null ? year.toString() : "";
  const m = month != null ? parseInt(month.toString()) : 0;
  const lang = normalizeLocale(getLocale());
  if (lang.startsWith("zh") || lang == "ja") {
    return `${y}年${m}月`;
  } else if (lang == "ko") {
    return `${y}년 ${m}월`;
  } else {
    const enMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = m >= 1 && m <= 12 ? enMonths[m - 1] : m.toString();
    return `${monthName} ${y}`;
  }
}
new UTSJSONObject({
  settings,
  setLocale,
  getLocale,
  formatMonthTitle,
  t
});
export {
  formatMonthTitle as f,
  setLocale as s,
  t
};
//# sourceMappingURL=index.js.map
