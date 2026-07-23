"use strict";
require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_i18n_locales_zhHans = require("./locales/zh-Hans.js");
const uni_modules_uviewUltra_libs_i18n_locales_zhHant = require("./locales/zh-Hant.js");
const uni_modules_uviewUltra_libs_i18n_locales_en = require("./locales/en.js");
const uni_modules_uviewUltra_libs_i18n_locales_es = require("./locales/es.js");
const uni_modules_uviewUltra_libs_i18n_locales_fr = require("./locales/fr.js");
const uni_modules_uviewUltra_libs_i18n_locales_de = require("./locales/de.js");
const uni_modules_uviewUltra_libs_i18n_locales_ko = require("./locales/ko.js");
const uni_modules_uviewUltra_libs_i18n_locales_ja = require("./locales/ja.js");
const uni_modules_uviewUltra_libs_i18n_locales_ru = require("./locales/ru.js");
let settings = new UTSJSONObject({
  // lang: uni.getLocale(),
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
});
function t(value, params = new UTSJSONObject({})) {
  if (value != "") {
    value = value.replaceAll(".", "_");
    let lang = settings["lang"];
    let locales = settings["locales"];
    lang = "zh-Hans";
    let result = "";
    if (locales[lang] != null) {
      result = locales[lang][value].toString();
    } else {
      result = value;
    }
    let resultStr = result.toString();
    return resultStr;
  } else {
    return value;
  }
}
new UTSJSONObject({
  settings
});
exports.t = t;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/libs/i18n/index.js.map
