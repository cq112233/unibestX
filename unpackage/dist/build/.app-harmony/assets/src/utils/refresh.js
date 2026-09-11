import "./pageScroll.js";
const { onMounted, onUnmounted } = globalThis.Vue;
const EVENT_PULL_DOWN_REFRESH = "onPagePullDownRefresh";
const EVENT_STOP_PULL_DOWN_REFRESH = "stopPagePullDownRefresh";
function onNavbarPullDownRefresh(callback) {
  onMounted(() => {
    uni.$on(EVENT_PULL_DOWN_REFRESH, callback);
  });
  onUnmounted(() => {
    uni.$off(EVENT_PULL_DOWN_REFRESH, callback);
  });
}
function stopNavbarPullDownRefresh() {
  uni.$emit(EVENT_STOP_PULL_DOWN_REFRESH);
  uni.stopPullDownRefresh();
}
export {
  onNavbarPullDownRefresh as o,
  stopNavbarPullDownRefresh as s
};
