"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_i18n_locales_zhHans = require("./locales/zh-Hans.js");
const uni_modules_uviewUltra_libs_i18n_locales_zhHant = require("./locales/zh-Hant.js");
const uni_modules_uviewUltra_libs_i18n_locales_en = require("./locales/en.js");
const uni_modules_uviewUltra_libs_i18n_locales_es = require("./locales/es.js");
const uni_modules_uviewUltra_libs_i18n_locales_fr = require("./locales/fr.js");
const uni_modules_uviewUltra_libs_i18n_locales_de = require("./locales/de.js");
const uni_modules_uviewUltra_libs_i18n_locales_ko = require("./locales/ko.js");
const uni_modules_uviewUltra_libs_i18n_locales_ja = require("./locales/ja.js");
const uni_modules_uviewUltra_libs_i18n_locales_ru = require("./locales/ru.js");
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
let settings = common_vendor.reactive(new UTSJSONObject({
  lang: "zh-Hans",
  locales: new UTSJSONObject({
    en: uni_modules_uviewUltra_libs_i18n_locales_en.en,
    es: uni_modules_uviewUltra_libs_i18n_locales_es.es,
    fr: uni_modules_uviewUltra_libs_i18n_locales_fr.fr,
    de: uni_modules_uviewUltra_libs_i18n_locales_de.de,
    ko: uni_modules_uviewUltra_libs_i18n_locales_ko.ko,
    ja: uni_modules_uviewUltra_libs_i18n_locales_ja.ja,
    ru: uni_modules_uviewUltra_libs_i18n_locales_ru.ru,
    "zh-Hant": uni_modules_uviewUltra_libs_i18n_locales_zhHant.zhHant,
    "zh-Hans": uni_modules_uviewUltra_libs_i18n_locales_zhHans.zhHans
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
exports.formatMonthTitle = formatMonthTitle;
exports.setLocale = setLocale;
exports.t = t;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/libs/i18n/index.js.map
