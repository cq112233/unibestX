import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/x-pinia-s/instans/types&";
import { P as PiniaStoreBase } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/x-pinia-s/instans/storeBase&";
const { reactive } = globalThis.Vue
import { d as defineStore } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/x-pinia-s/instans/defineStore&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/x-pinia-s/instans/persist&";
import { t as themeColor } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/tabbar/store&";
import { i as i18n } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/i18n/index&";
import { s as setLocale } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/i18n/index&";
class IAppState extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          theme: { type: String, optional: false },
          locale: { type: String, optional: false }
        };
      },
      name: "IAppState"
    };
  }
  constructor(options, metadata = IAppState.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.theme = this.__props__.theme;
    this.locale = this.__props__.locale;
    delete this.__props__;
  }
}
function getSystemLocale() {
  try {
    const sysInfo = uni.getSystemInfoSync();
    const appLang = sysInfo.appLanguage;
    if (appLang != null && appLang.toLowerCase().includes("zh")) {
      return "zh-CN";
    }
    if (appLang != null && appLang.toLowerCase().includes("en")) {
      return "en-US";
    }
  } catch (e) {
  }
  return "zh-CN";
}
const defaultAppState = new IAppState(
  {
    theme: "#37c2bc",
    locale: getSystemLocale()
  }
  // ==========================================
  // Store 实现
  // ==========================================
);
class AppStore extends PiniaStoreBase {
  // 2. constructor
  constructor() {
    super();
    this.state = reactive(new IAppState({
      theme: "#37c2bc",
      locale: getSystemLocale()
    }));
    this.bindState(this.state);
    themeColor.value = this.state.theme;
    i18n.global.locale.value = this.state.locale;
    setLocale(this.state.locale);
  }
  // ==========================================
  // 持久化钩子
  // ==========================================
  _doReset() {
    this.state.theme = defaultAppState.theme;
    this.state.locale = defaultAppState.locale;
    themeColor.value = defaultAppState.theme;
    i18n.global.locale.value = defaultAppState.locale;
    setLocale(defaultAppState.locale);
  }
  _hydrate(_data) {
    if (_data["theme"] != null) {
      const colorVal = _data["theme"];
      this.state.theme = colorVal;
      themeColor.value = colorVal;
    }
    if (_data["locale"] != null) {
      const localeVal = _data["locale"];
      this.state.locale = localeVal;
      i18n.global.locale.value = localeVal;
      setLocale(localeVal);
    }
  }
  _serialize() {
    return new UTSJSONObject({
      theme: this.state.theme,
      locale: this.state.locale
    });
  }
  // ==========================================
  // Actions
  // ==========================================
  /**
   * 设置主题色
   */
  setTheme(theme) {
    this.state.theme = theme;
    themeColor.value = theme;
  }
  /**
   * 设置语言
   */
  setLocale(locale) {
    this.state.locale = locale;
    i18n.global.locale.value = locale;
    setLocale(locale);
  }
}
const useAppStore = defineStore("app", () => {
  return new AppStore();
});
export {
  useAppStore as u
};
//# sourceMappingURL=app.js.map
