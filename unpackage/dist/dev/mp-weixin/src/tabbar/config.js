"use strict";
const src_tabbar_types = require("./types.js");
const customTabbarList = [
  new src_tabbar_types.CustomTabBarItem({
    text: "tabbar.home",
    pagePath: "src/pages/index/index",
    iconType: "icon",
    icon: "home",
    iconActive: "home-filled",
    badge: null,
    isBulge: false
  }),
  new src_tabbar_types.CustomTabBarItem({
    text: "tabbar.basic",
    pagePath: "src/pages/basic/basic",
    iconType: "icon",
    icon: "tune",
    iconActive: "tune-filled",
    badge: null,
    isBulge: false
  }),
  new src_tabbar_types.CustomTabBarItem({
    text: "tabbar.ai",
    pagePath: "",
    iconType: "icon",
    icon: "chatboxes",
    iconActive: "chatboxes-filled",
    badge: null,
    isBulge: true
  }),
  new src_tabbar_types.CustomTabBarItem({
    text: "tabbar.function",
    pagePath: "src/pages/function/function",
    iconType: "icon",
    icon: "gear",
    iconActive: "gear-filled",
    badge: null,
    isBulge: false
  }),
  new src_tabbar_types.CustomTabBarItem({
    text: "tabbar.me",
    pagePath: "src/pages/me/me",
    iconType: "icon",
    icon: "person",
    iconActive: "person-filled",
    badge: null,
    isBulge: false
  })
];
exports.customTabbarList = customTabbarList;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/src/tabbar/config.js.map
