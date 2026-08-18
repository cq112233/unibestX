const { ref } = globalThis.Vue;
const systemInfo = ref(null);
const safeAreaInsets = ref(null);
function updateSystemInfo() {
  const sysInfo = uni.getSystemInfoSync();
  systemInfo.value = {
    screenWidth: sysInfo.screenWidth,
    screenHeight: sysInfo.screenHeight,
    windowWidth: sysInfo.windowWidth,
    windowHeight: sysInfo.windowHeight,
    statusBarHeight: sysInfo.statusBarHeight,
    pixelRatio: sysInfo.pixelRatio
  };
  const safeArea = sysInfo.safeAreaInsets;
  if (safeArea != null) {
    safeAreaInsets.value = {
      top: safeArea.top,
      right: safeArea.right,
      bottom: safeArea.bottom,
      left: safeArea.left
    };
  }
}
updateSystemInfo();
export {
  systemInfo as a,
  safeAreaInsets as s,
  updateSystemInfo as u
};
//# sourceMappingURL=systemInfo.js.map
