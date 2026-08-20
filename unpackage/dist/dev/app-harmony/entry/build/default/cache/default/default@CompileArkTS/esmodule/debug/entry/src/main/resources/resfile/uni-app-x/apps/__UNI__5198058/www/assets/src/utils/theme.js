import { t as themeJson } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/theme&";
function getSystemTheme() {
  var _a;
  let theme = "light";
  try {
    theme = (_a = uni.getDeviceInfo().osTheme) !== null && _a !== void 0 ? _a : "light";
  } catch (e) {
  }
  return theme;
}
class ThemeTokens extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          navBg: { type: String, optional: false },
          navText: { type: String, optional: false },
          tabBg: { type: String, optional: false },
          tabColor: { type: String, optional: false },
          tabSelected: { type: String, optional: false },
          tabBorder: { type: String, optional: false },
          bgContent: { type: String, optional: false }
        };
      },
      name: "ThemeTokens"
    };
  }
  constructor(options, metadata = ThemeTokens.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.navBg = this.__props__.navBg;
    this.navText = this.__props__.navText;
    this.tabBg = this.__props__.tabBg;
    this.tabColor = this.__props__.tabColor;
    this.tabSelected = this.__props__.tabSelected;
    this.tabBorder = this.__props__.tabBorder;
    this.bgContent = this.__props__.bgContent;
    delete this.__props__;
  }
}
function getThemeTokens(isDark) {
  const themeData = themeJson;
  const scheme = isDark ? themeData.dark : themeData.light;
  return new ThemeTokens({
    navBg: scheme.navigationBarBackgroundColor,
    navText: mapNavTextStyle(scheme.navigationBarTextStyle),
    tabBg: scheme.tabBarBackgroundColor,
    tabColor: scheme.tabBarColor,
    tabSelected: scheme.tabBarSelectedColor,
    tabBorder: mapTabBorderStyle(scheme.tabBarBorderStyle, isDark),
    bgContent: scheme.backgroundColorContent
  });
}
function mapNavTextStyle(value) {
  if (value == "black") {
    return "#000000";
  }
  if (value == "white") {
    return "#ffffff";
  }
  return value;
}
function mapTabBorderStyle(value, isDark) {
  if (value == "black") {
    return isDark ? "#334155" : "#e2e8f0";
  }
  if (value == "white") {
    return "#ffffff";
  }
  return value;
}
function applyNavbarTheme(isDark) {
  getThemeTokens(isDark);
}
export {
  applyNavbarTheme as a,
  getSystemTheme as b,
  getThemeTokens as g
};
//# sourceMappingURL=theme.js.map
