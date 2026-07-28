import { C as CustomTabBarItem } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/tabbar/types&";
import { c as customTabbarList } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/tabbar/config&";
const { reactive, ref } = globalThis.Vue
function normalizeList() {
  const result = [];
  for (let i = 0; i < customTabbarList.length; i++) {
    const item = customTabbarList[i];
    result.push(new CustomTabBarItem({
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
export {
  setCurIdxByPath as a,
  tabbarList as b,
  curIdx as c,
  setCurIdx as d,
  isPageTabbar as i,
  syncCurIdxByCurrentPage as s,
  themeColor as t
};
//# sourceMappingURL=store.js.map
