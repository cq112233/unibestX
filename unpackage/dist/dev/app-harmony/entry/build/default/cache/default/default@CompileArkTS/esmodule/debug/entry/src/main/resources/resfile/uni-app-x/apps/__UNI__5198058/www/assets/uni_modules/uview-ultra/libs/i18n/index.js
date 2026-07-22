import { z as zhHans } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/i18n/locales/zh-Hans&";
import { z as zhHant } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/i18n/locales/zh-Hant&";
import { e as en } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/i18n/locales/en&";
import { e as es } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/i18n/locales/es&";
import { f as fr } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/i18n/locales/fr&";
import { d as de } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/i18n/locales/de&";
import { k as ko } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/i18n/locales/ko&";
import { j as ja } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/i18n/locales/ja&";
import { r as ru } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/i18n/locales/ru&";
let settings = new UTSJSONObject({
  // lang: uni.getLocale(),
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
export {
  t
};
//# sourceMappingURL=index.js.map
