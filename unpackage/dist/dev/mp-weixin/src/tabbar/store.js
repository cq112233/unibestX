"use strict";
const common_vendor = require("../../common/vendor.js");
const src_tabbar_types = require("./types.js");
const src_tabbar_config = require("./config.js");
function normalizeList() {
  const result = [];
  for (let i = 0; i < src_tabbar_config.customTabbarList.length; i++) {
    const item = src_tabbar_config.customTabbarList[i];
    result.push(new src_tabbar_types.CustomTabBarItem({
      text: item.text,
      pagePath: item.pagePath.startsWith("/") ? item.pagePath : `/${item.pagePath}`,
      iconType: item.iconType,
      icon: item.icon,
      iconActive: item.iconActive,
      badge: item.badge,
      isBulge: item.isBulge
    }));
  }
  return result;
}
const tabbarList = common_vendor.reactive(normalizeList());
const curIdx = common_vendor.ref(0);
const themeColor = common_vendor.ref("#37c2bc");
function setCurIdx(idx) {
  curIdx.value = idx;
  common_vendor.index.setStorageSync("app-tabbar-index", idx);
}
function setCurIdxByPath(path) {
  let cleanPath = path.startsWith("/") ? path : `/${path}`;
  const parts = cleanPath.split("?");
  cleanPath = parts[0];
  for (let i = 0; i < tabbarList.length; i++) {
    const tabPath = tabbarList[i].pagePath.startsWith("/") ? tabbarList[i].pagePath : `/${tabbarList[i].pagePath}`;
    if (tabPath === cleanPath || tabPath.endsWith(cleanPath)) {
      setCurIdx(i);
      break;
    }
  }
}
function syncCurIdxByCurrentPage() {
  const pages = getCurrentPages();
  if (pages.length == 0)
    return null;
  const currentPage = pages[pages.length - 1];
  const route = currentPage.route;
  if (route == null || route.length == 0)
    return null;
  setCurIdxByPath(route);
}
function isPageTabbar(path) {
  let cleanPath = path.startsWith("/") ? path : `/${path}`;
  const parts = cleanPath.split("?");
  cleanPath = parts[0];
  for (let i = 0; i < tabbarList.length; i++) {
    const tabPath = tabbarList[i].pagePath.startsWith("/") ? tabbarList[i].pagePath : `/${tabbarList[i].pagePath}`;
    if (tabPath === cleanPath || tabPath.endsWith(cleanPath)) {
      return true;
    }
  }
  return false;
}
exports.curIdx = curIdx;
exports.isPageTabbar = isPageTabbar;
exports.setCurIdx = setCurIdx;
exports.setCurIdxByPath = setCurIdxByPath;
exports.syncCurIdxByCurrentPage = syncCurIdxByCurrentPage;
exports.tabbarList = tabbarList;
exports.themeColor = themeColor;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/src/tabbar/store.js.map
