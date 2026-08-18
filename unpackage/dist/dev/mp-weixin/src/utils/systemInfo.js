"use strict";
const common_vendor = require("../../common/vendor.js");
const systemInfo = common_vendor.ref(null);
const safeAreaInsets = common_vendor.ref(null);
function updateSystemInfo() {
  const windowInfo = common_vendor.index.getWindowInfo();
  systemInfo.value = {
    screenWidth: windowInfo.screenWidth,
    screenHeight: windowInfo.screenHeight,
    windowWidth: windowInfo.windowWidth,
    windowHeight: windowInfo.windowHeight,
    statusBarHeight: windowInfo.statusBarHeight,
    pixelRatio: windowInfo.pixelRatio
  };
  const safeArea = windowInfo.safeArea;
  if (safeArea != null) {
    safeAreaInsets.value = {
      top: safeArea.top,
      right: windowInfo.windowWidth - safeArea.right,
      bottom: windowInfo.windowHeight - safeArea.bottom,
      left: safeArea.left
    };
  }
}
updateSystemInfo();
exports.safeAreaInsets = safeAreaInsets;
exports.systemInfo = systemInfo;
exports.updateSystemInfo = updateSystemInfo;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/src/utils/systemInfo.js.map
