let firstBackTime = 0;
function handleBackPressExit() {
  const now = Date.now();
  if (firstBackTime == 0 || now - firstBackTime > 2e3) {
    firstBackTime = now;
    uni.showToast({
      title: "再按一次退出应用",
      position: "bottom"
    });
    setTimeout(() => {
      if (firstBackTime == now) {
        firstBackTime = 0;
      }
    }, 2e3);
    return true;
  }
  uni.exit();
  return false;
}
export {
  handleBackPressExit as h
};
//# sourceMappingURL=backPress.js.map
