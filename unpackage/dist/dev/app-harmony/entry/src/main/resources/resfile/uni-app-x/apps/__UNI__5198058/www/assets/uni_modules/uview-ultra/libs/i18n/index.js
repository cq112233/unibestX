import { z as zhHans } from "./locales/zh-Hans.js";
import { z as zhHant } from "./locales/zh-Hant.js";
import { e as en } from "./locales/en.js";
import { e as es } from "./locales/es.js";
import { f as fr } from "./locales/fr.js";
import { d as de } from "./locales/de.js";
import { k as ko } from "./locales/ko.js";
import { j as ja } from "./locales/ja.js";
import { r as ru } from "./locales/ru.js";
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
