import { i as i18n } from "../i18n/index.js";
import { b as tabbarList } from "../tabbar/store.js";
function t(key, named = null) {
  if (named != null) {
    return i18n.global.t(key, named);
  }
  return i18n.global.t(key);
}
function $t(key, named = null) {
  return t(key, named);
}
function getI18nText(key) {
  let cleanKey = key;
  if (cleanKey.startsWith("%") && cleanKey.endsWith("%") && cleanKey.length > 2) {
    cleanKey = cleanKey.substring(1, cleanKey.length - 1);
  }
  return i18n.global.t(cleanKey);
}
function setTabbarItem() {
  for (let i = 0; i < tabbarList.length; i++) {
    const item = tabbarList[i];
    const text = getI18nText(item.text);
    uni.setTabBarItem({
      index: i,
      text
    });
  }
}
export {
  $t as $,
  setTabbarItem as s
};
//# sourceMappingURL=i18n.js.map
