import { c as createComposer } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-i18n/common/composer-class&";
import { g as getAllKeys } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-i18n/common/util&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-i18n/common/errors&";
const { effectScope } = globalThis.Vue
let lime_i18n = null;
class UvueI18n {
  constructor(options = new UTSJSONObject({}), root = null) {
    this.__scope = effectScope();
    this.__global = this.__scope.run(() => {
      return createComposer(UTSJSONObject.assign(new UTSJSONObject({}), options), root);
    });
  }
  get mode() {
    return "composition";
  }
  get global() {
    return this.__global;
  }
  get availableLocales() {
    return getAllKeys(this.global.messages.value).sort();
  }
  dispose() {
    this.__scope.stop();
  }
  $t(key, values = null, locale = null) {
    const isLocale = typeof values == "string";
    const _values = isLocale ? null : values;
    const _locale = isLocale ? values : locale;
    return this.global.t(key, _values, _locale);
  }
  $tc(key, choice = null, values = null, locale = null) {
    const isLocale = typeof values == "string";
    const _values = isLocale ? null : values;
    const _locale = isLocale ? values : locale;
    return this.global.tc(key, choice, _values, _locale);
  }
  $d(date = null, key = null, locale = null, options = null) {
    return this.global.d(date, key, locale, options);
  }
  $n(number, key = null, locale = null, options = null) {
    const _locale = typeof locale == "string" ? locale : null;
    const _options = typeof locale == "object" && locale != null ? locale : options;
    return this.global.n(number, key, _locale, _options);
  }
  get install() {
    const _install = (app = null) => {
      app.config.globalProperties.$i18n = lime_i18n;
      app.config.globalProperties.$t = function(key, values = null, locale = null) {
        const isLocale = typeof values == "string";
        const _values = isLocale ? null : values;
        const _locale = isLocale ? values : locale;
        return lime_i18n.global.t(key, _values, _locale);
      };
      app.config.globalProperties.$tc = function(key, choice = null, values = null, locale = null) {
        const isLocale = typeof values == "string";
        const _values = isLocale ? null : values;
        const _locale = isLocale ? values : locale;
        return lime_i18n.global.tc(key, choice, _values, _locale);
      };
      app.config.globalProperties.$d = function(date = null, key = null, locale = null, options = null) {
        return lime_i18n.global.d(date, key, locale, options);
      };
      app.config.globalProperties.$n = function(number, key = null, locale = null, options = null) {
        const _locale = typeof locale == "string" ? locale : null;
        const _options = typeof locale == "object" && locale != null ? locale : options;
        return lime_i18n.global.n(number, key, _locale, _options);
      };
      app.config.globalProperties.$locale = lime_i18n.global.locale;
    };
    return _install;
  }
}
function createI18n(options = new UTSJSONObject({})) {
  lime_i18n = new UvueI18n(options);
  return lime_i18n;
}
export {
  createI18n as c
};
//# sourceMappingURL=index.js.map
