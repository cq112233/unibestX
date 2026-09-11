import { i as i18n } from "../i18n/index.js";
import "../tabbar/helper/index.js";
import { a as tabbarList } from "../tabbar/helper/store.js";
function t(key, named = null) {
  let res = "";
  if (named != null) {
    res = i18n.global.t(key, named);
  } else {
    res = i18n.global.t(key);
  }
  return res != null && res.length > 0 ? res : key;
}
function $t(key, named = null) {
  return t(key, named);
}
function getI18nText(key) {
  let cleanKey = key;
  if (cleanKey.startsWith("%") && cleanKey.endsWith("%") && cleanKey.length > 2) {
    cleanKey = cleanKey.substring(1, cleanKey.length - 1);
  }
  const res = i18n.global.t(cleanKey);
  return res != null && res.length > 0 ? res : cleanKey;
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
