"use strict";
const common_vendor = require("../../common/vendor.js");
const light = new common_vendor.UTSJSONObject({
  navigationBarTextStyle: "black",
  navigationBarBackgroundColor: "#ffffff",
  backgroundColor: "#f8fafc",
  backgroundColorContent: "#f8fafc",
  backgroundTextStyle: "dark",
  tabBarColor: "#94a3b8",
  tabBarSelectedColor: "#1890ff",
  tabBarBackgroundColor: "#ffffff",
  tabBarBorderStyle: "black"
});
const dark = new common_vendor.UTSJSONObject({
  navigationBarTextStyle: "white",
  navigationBarBackgroundColor: "#0f172a",
  backgroundColor: "#0f172a",
  backgroundColorContent: "#0f172a",
  backgroundTextStyle: "light",
  tabBarColor: "#94a3b8",
  tabBarSelectedColor: "#1890ff",
  tabBarBackgroundColor: "#0f172a",
  tabBarBorderStyle: "black"
});
const themeJson = new common_vendor.UTSJSONObject({
  light,
  dark
});
function getSystemTheme() {
  let theme = "light";
  try {
    theme = common_vendor.index.getAppBaseInfo().hostTheme;
  } catch (e) {
  }
  return theme;
}
class ThemeTokens extends common_vendor.UTS.UTSType {
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
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
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
exports.getSystemTheme = getSystemTheme;
exports.getThemeTokens = getThemeTokens;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/src/utils/theme.js.map
