"use strict";
const common_vendor = require("../../common/vendor.js");
const uni_modules_limeI18n_common_index = require("../../uni_modules/lime-i18n/common/index.js");
const message$1 = new common_vendor.UTSJSONObject({
  hello: "{msg}，世界！",
  welcome: "欢迎使用 unibestX！",
  switch_success: "应用与组件库已切换为简体中文"
});
const tabbar$1 = new common_vendor.UTSJSONObject({
  home: "首页",
  basic: "基础",
  ai: "AI",
  "function": "功能",
  me: "我的"
});
const basic$1 = new common_vendor.UTSJSONObject({
  iconDemoTitle: "字体图标示例",
  svgAuthWarning: "SVG模式需授权收费",
  langTitle: "语言设置",
  langPreview: "多语言文本预览",
  uviewPreview: "组件库 (uView-Ultra) 文本预览",
  themeTitle: "主题设置",
  themePreview: "主题色效果预览",
  themeButton: "主题按钮",
  themeSuccess: "应用与组件库主题色切换成功",
  echartTitle: "ECharts 图表示例",
  echartLine: "折线图",
  echartBar: "柱状图",
  echartPie: "饼图"
});
const zhCN = new common_vendor.UTSJSONObject({
  message: message$1,
  tabbar: tabbar$1,
  basic: basic$1,
  "function": new common_vendor.UTSJSONObject({
    sysInfoTitle: "设备系统信息",
    brand: "手机品牌",
    model: "手机型号",
    system: "操作系统",
    platform: "运行平台",
    getSysInfoBtn: "获取系统信息",
    hapticsTitle: "触感与工具",
    vibrateBtn: "短震动反馈",
    vibrateSuccess: "已触发短震动",
    copyBtn: "复制测试文本",
    copySuccess: "复制成功",
    mediaTitle: "相机与多媒体",
    choosePhotoBtn: "拍摄/选择照片",
    scanCodeBtn: "扫码测试",
    scanResult: "扫码结果",
    noData: "暂无数据"
  })
});
const message = new common_vendor.UTSJSONObject({
  hello: "The world says {msg}!",
  welcome: "Welcome to use unibestX!",
  switch_success: "App & Component Library switched to English"
});
const tabbar = new common_vendor.UTSJSONObject({
  home: "Home",
  basic: "Basic",
  ai: "AI",
  "function": "Function",
  me: "Me"
});
const basic = new common_vendor.UTSJSONObject({
  iconDemoTitle: "Font Icon Demo",
  svgAuthWarning: "SVG mode requires authorization & fee",
  langTitle: "Language Settings",
  langPreview: "Multi-language Preview",
  uviewPreview: "UI Library (uView-Ultra) Preview",
  themeTitle: "Theme Settings",
  themePreview: "Theme Color Preview",
  themeButton: "Theme Button",
  themeSuccess: "App & Component Library theme color updated successfully",
  echartTitle: "ECharts Chart Demo",
  echartLine: "Line Chart",
  echartBar: "Bar Chart",
  echartPie: "Pie Chart"
});
const enUS = new common_vendor.UTSJSONObject({
  message,
  tabbar,
  basic,
  "function": new common_vendor.UTSJSONObject({
    sysInfoTitle: "Device System Info",
    brand: "Brand",
    model: "Model",
    system: "OS",
    platform: "Platform",
    getSysInfoBtn: "Get System Info",
    hapticsTitle: "Short Vibration Feedback",
    vibrateBtn: "Short Vibration Feedback",
    vibrateSuccess: "Vibration triggered",
    copyBtn: "Copy Test Text",
    copySuccess: "Copied successfully",
    mediaTitle: "Camera & Media",
    choosePhotoBtn: "Take Photo/Choose Image",
    scanCodeBtn: "Scan Code Test",
    scanResult: "Scan Result",
    noData: "No data"
  })
});
const i18n = uni_modules_limeI18n_common_index.createI18n(new common_vendor.UTSJSONObject({
  // 使用uni.getStorageSync('uVueI18nLocale') 能获取上次退出应用后保存的语言
  locale: "zh-CN",
  fallbackLocale: "en-US",
  messages: new common_vendor.UTSJSONObject({
    "zh-CN": zhCN,
    "en-US": enUS
  })
}));
exports.i18n = i18n;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/src/i18n/index.js.map
