"use strict";
const common_vendor = require("../../common/vendor.js");
const src_i18n_index = require("../i18n/index.js");
const src_tabbar_store = require("../tabbar/store.js");
function t(key, named = null) {
  if (named != null) {
    return src_i18n_index.i18n.global.t(key, named);
  }
  return src_i18n_index.i18n.global.t(key);
}
function $t(key, named = null) {
  return t(key, named);
}
function getI18nText(key) {
  let cleanKey = key;
  if (cleanKey.startsWith("%") && cleanKey.endsWith("%") && cleanKey.length > 2) {
    cleanKey = cleanKey.substring(1, cleanKey.length - 1);
  }
  return t(cleanKey, null);
}
function setTabbarItem() {
  for (let i = 0; i < src_tabbar_store.tabbarList.length; i++) {
    const item = src_tabbar_store.tabbarList[i];
    const text = getI18nText(item.text);
    common_vendor.index.setTabBarItem({
      index: i,
      text
    });
  }
}
exports.$t = $t;
exports.setTabbarItem = setTabbarItem;
exports.t = t;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/src/utils/i18n.js.map
