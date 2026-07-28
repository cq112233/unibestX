"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../uni_modules/x-pinia-s/instans/types.js");
const uni_modules_xPiniaS_instans_storeBase = require("../../uni_modules/x-pinia-s/instans/storeBase.js");
const uni_modules_xPiniaS_instans_defineStore = require("../../uni_modules/x-pinia-s/instans/defineStore.js");
require("../../uni_modules/x-pinia-s/instans/persist.js");
const src_tabbar_store = require("../tabbar/store.js");
const src_i18n_index = require("../i18n/index.js");
const uni_modules_uviewUltra_libs_i18n_index = require("../../uni_modules/uview-ultra/libs/i18n/index.js");
class IAppState extends common_vendor.UTS.UTSType {
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
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.theme = this.__props__.theme;
    this.locale = this.__props__.locale;
    delete this.__props__;
  }
}
function getSystemLocale() {
  try {
    const sysInfo = common_vendor.index.getSystemInfoSync();
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
class AppStore extends uni_modules_xPiniaS_instans_storeBase.PiniaStoreBase {
  // 2. constructor
  constructor() {
    super();
    this.state = common_vendor.reactive(new IAppState({
      theme: "#37c2bc",
      locale: getSystemLocale()
    }));
    this.bindState(this.state);
    src_tabbar_store.themeColor.value = this.state.theme;
    src_i18n_index.i18n.global.locale.value = this.state.locale;
    uni_modules_uviewUltra_libs_i18n_index.setLocale(this.state.locale);
  }
  // ==========================================
  // 持久化钩子
  // ==========================================
  _doReset() {
    this.state.theme = defaultAppState.theme;
    this.state.locale = defaultAppState.locale;
    src_tabbar_store.themeColor.value = defaultAppState.theme;
    src_i18n_index.i18n.global.locale.value = defaultAppState.locale;
    uni_modules_uviewUltra_libs_i18n_index.setLocale(defaultAppState.locale);
  }
  _hydrate(_data) {
    if (_data["theme"] != null) {
      const colorVal = _data["theme"];
      this.state.theme = colorVal;
      src_tabbar_store.themeColor.value = colorVal;
    }
    if (_data["locale"] != null) {
      const localeVal = _data["locale"];
      this.state.locale = localeVal;
      src_i18n_index.i18n.global.locale.value = localeVal;
      uni_modules_uviewUltra_libs_i18n_index.setLocale(localeVal);
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
    src_tabbar_store.themeColor.value = theme;
  }
  /**
   * 设置语言
   */
  setLocale(locale) {
    this.state.locale = locale;
    src_i18n_index.i18n.global.locale.value = locale;
    uni_modules_uviewUltra_libs_i18n_index.setLocale(locale);
  }
}
const useAppStore = uni_modules_xPiniaS_instans_defineStore.defineStore("app", () => {
  return new AppStore();
});
exports.useAppStore = useAppStore;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/src/store/app.js.map
