import "../../uni_modules/x-pinia-s/instans/types.js";
import { P as PiniaStoreBase } from "../../uni_modules/x-pinia-s/instans/storeBase.js";
import { d as defineStore } from "../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../uni_modules/x-pinia-s/instans/persist.js";
import { t as themeColor } from "../tabbar/store.js";
import { i as i18n } from "../i18n/index.js";
import { s as setLocale } from "../../uni_modules/uview-ultra/libs/i18n/index.js";
import { b as getSystemTheme } from "../utils/theme.js";
const { reactive } = globalThis.Vue;
class IAppState extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          theme: { type: String, optional: false },
          locale: { type: String, optional: false },
          themeMode: { type: String, optional: false },
          isDark: { type: Boolean, optional: false }
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
    this.themeMode = this.__props__.themeMode;
    this.isDark = this.__props__.isDark;
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
const defaultAppState = new IAppState({
  theme: "#37c2bc",
  locale: getSystemLocale(),
  themeMode: "auto",
  isDark: false
});
class AppStore extends PiniaStoreBase {
  // 2. constructor
  constructor() {
    super();
    this.state = reactive(new IAppState({
      theme: "#37c2bc",
      locale: getSystemLocale(),
      themeMode: "auto",
      isDark: false
    }));
    this._themeModeInited = false;
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
    this.state.themeMode = defaultAppState.themeMode;
    this.state.isDark = defaultAppState.isDark;
    themeColor.value = defaultAppState.theme;
    i18n.global.locale.value = defaultAppState.locale;
    setLocale(defaultAppState.locale);
    this.initThemeMode();
  }
  _hydrate(_data) {
    if (_data.theme != null) {
      const colorVal = _data.theme;
      this.state.theme = colorVal;
      themeColor.value = colorVal;
    }
    if (_data.locale != null) {
      const localeVal = _data.locale;
      this.state.locale = localeVal;
      i18n.global.locale.value = localeVal;
      setLocale(localeVal);
    }
    if (_data.themeMode != null) {
      const modeVal = _data.themeMode;
      if (modeVal == "auto" || modeVal == "light" || modeVal == "dark") {
        this.state.themeMode = modeVal;
      } else {
        this.state.themeMode = "auto";
      }
    } else if (_data.isDark != null) {
      this.state.themeMode = _data.isDark ? "dark" : "light";
    }
  }
  _serialize() {
    return new UTSJSONObject({
      theme: this.state.theme,
      locale: this.state.locale,
      themeMode: this.state.themeMode
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
   * 初始化外观模式：注册全局主题监听并应用当前模式
   * - App（Android/iOS/鸿蒙）：setAppTheme + onAppThemeChange
   * - H5：matchMedia 监听 prefers-color-scheme
   * - 微信小程序：读取宿主主题 + onHostThemeChange
   * 必须在 onLaunch 中调用（此时持久化已还原，可读取到真实的 themeMode）
   */
  initThemeMode() {
    if (!this._themeModeInited) {
      this._themeModeInited = true;
      uni.onAppThemeChange((res) => {
        if (this.state.themeMode != "auto") {
          this.state.isDark = res.appTheme == "dark";
        }
      });
      uni.onOsThemeChange((res) => {
        if (this.state.themeMode == "auto") {
          this.state.isDark = res.osTheme == "dark";
        }
      });
    }
    uni.setAppTheme({ theme: this.state.themeMode });
    this.refreshIsDark();
  }
  /**
   * 设置外观模式：auto（跟随系统）/ light / dark
   */
  setThemeMode(mode) {
    this.state.themeMode = mode;
    uni.setAppTheme({ theme: mode });
    this.refreshIsDark();
  }
  /**
   * 根据 themeMode 刷新实际生效的 isDark，并同步 H5 根节点 data-theme
   */
  refreshIsDark() {
    const mode = this.state.themeMode;
    if (mode == "light") {
      this.state.isDark = false;
    } else if (mode == "dark") {
      this.state.isDark = true;
    } else {
      this.state.isDark = getSystemTheme() == "dark";
    }
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
