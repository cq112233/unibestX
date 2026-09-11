import { C as CustomTabBarItem } from "../types.js";
import { c as customTabbarConfig } from "../config.js";
const { reactive, ref } = globalThis.Vue;
function buildFullTabbarList(config) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j;
  const result = [];
  const list = config.list;
  const mid = config.midButton;
  if (mid != null) {
    const midItem = new CustomTabBarItem({
      text: (_a = mid.text) !== null && _a !== void 0 ? _a : "AI",
      pagePath: (_b = mid.pagePath) !== null && _b !== void 0 ? _b : "",
      iconType: (_c = mid.iconType) !== null && _c !== void 0 ? _c : "icon",
      icon: (_d = mid.icon) !== null && _d !== void 0 ? _d : "chatboxes",
      iconActive: (_e = mid.iconActive) !== null && _e !== void 0 ? _e : "chatboxes-filled",
      iconPath: (_f = mid.iconPath) !== null && _f !== void 0 ? _f : "",
      selectedIconPath: (_g = mid.selectedIconPath) !== null && _g !== void 0 ? _g : "",
      badge: (_h = mid.badge) !== null && _h !== void 0 ? _h : null,
      isBulge: (_j = mid.isBulge) !== null && _j !== void 0 ? _j : true
    });
    const half = Math.floor(list.length / 2);
    for (let i = 0; i < list.length; i++) {
      if (i == half) {
        result.push(midItem);
      }
      result.push(list[i]);
    }
    if (half >= list.length) {
      result.push(midItem);
    }
  } else {
    for (let i = 0; i < list.length; i++) {
      result.push(list[i]);
    }
  }
  return result;
}
const customTabbarList = buildFullTabbarList(customTabbarConfig);
function normalizeList() {
  const result = [];
  for (let i = 0; i < customTabbarList.length; i++) {
    const item = customTabbarList[i];
    result.push(new CustomTabBarItem({
      iconPath: null,
      selectedIconPath: null,
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
const tabbarList = reactive(normalizeList());
const curIdx = ref(0);
const themeColor = ref("#37c2bc");
function setCurIdx(idx) {
  curIdx.value = idx;
  uni.setStorageSync("app-tabbar-index", idx);
}
function setCurIdxByPath(path) {
  let cleanPath = path.startsWith("/") ? path : `/${path}`;
  const parts = cleanPath.split("?");
  cleanPath = parts[0];
  for (let i = 0; i < tabbarList.length; i++) {
    const tabPath = tabbarList[i].pagePath.startsWith("/") ? tabbarList[i].pagePath : `/${tabbarList[i].pagePath}`;
    if (tabPath == cleanPath || tabPath.endsWith(cleanPath)) {
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
    if (tabPath == cleanPath || tabPath.endsWith(cleanPath)) {
      return true;
    }
  }
  return false;
}
export {
  tabbarList as a,
  setCurIdxByPath as b,
  curIdx as c,
  setCurIdx as d,
  isPageTabbar as i,
  syncCurIdxByCurrentPage as s,
  themeColor as t
};
