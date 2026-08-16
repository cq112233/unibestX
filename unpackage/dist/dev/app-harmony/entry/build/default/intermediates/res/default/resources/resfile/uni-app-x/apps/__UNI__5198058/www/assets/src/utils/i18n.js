import { i as i18n } from "../i18n/index.js";
import { b as tabbarList } from "../tabbar/store.js";
function t(key, named = null) {
  if (named != null) {
    return i18n.global.t(key, named);
  }
  return i18n.global.t(key);
}
function getI18nText(key) {
  let cleanKey = key;
  if (cleanKey.startsWith("%") && cleanKey.endsWith("%") && cleanKey.length > 2) {
    cleanKey = cleanKey.substring(1, cleanKey.length - 1);
  }
  return t(cleanKey, null);
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
  setTabbarItem as s,
  t
};
//# sourceMappingURL=i18n.js.map
