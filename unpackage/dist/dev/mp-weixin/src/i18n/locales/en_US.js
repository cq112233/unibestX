"use strict";
const common_vendor = require("../../../common/vendor.js");
const enUS = new common_vendor.UTSJSONObject({
  message: new common_vendor.UTSJSONObject({
    hello: "The world says {msg}!",
    welcome: "Welcome to use unibestX!",
    switch_success: "App & Component Library switched to English"
  }),
  tabbar: new common_vendor.UTSJSONObject({
    home: "Home",
    basic: "Basic",
    ai: "AI",
    function: "Function",
    me: "Me"
  }),
  basic: new common_vendor.UTSJSONObject({
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
  }),
  function: new common_vendor.UTSJSONObject({
    sysInfoTitle: "Device System Info",
    brand: "Brand",
    model: "Model",
    system: "OS",
    platform: "Platform",
    getSysInfoBtn: "Get System Info",
    hapticsTitle: "Haptics & Utilities",
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
exports.enUS = enUS;
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/src/i18n/locales/en_US.js.map
