import { C as CustomTabBarItem } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/tabbar/types&";
const customTabbarList = [
  new CustomTabBarItem({
    text: "tabbar.home",
    pagePath: "src/pages/index/index",
    iconType: "icon",
    icon: "home",
    iconActive: "home-filled",
    badge: null,
    isBulge: false
  }),
  new CustomTabBarItem({
    text: "tabbar.basic",
    pagePath: "src/pages/basic/basic",
    iconType: "icon",
    icon: "tune",
    iconActive: "tune-filled",
    badge: null,
    isBulge: false
  }),
  new CustomTabBarItem({
    text: "tabbar.ai",
    pagePath: "",
    iconType: "icon",
    icon: "chatboxes",
    iconActive: "chatboxes-filled",
    badge: null,
    isBulge: true
  }),
  new CustomTabBarItem({
    text: "tabbar.function",
    pagePath: "src/pages/function/function",
    iconType: "icon",
    icon: "gear",
    iconActive: "gear-filled",
    badge: null,
    isBulge: false
  }),
  new CustomTabBarItem({
    text: "tabbar.me",
    pagePath: "src/pages/me/me",
    iconType: "icon",
    icon: "person",
    iconActive: "person-filled",
    badge: null,
    isBulge: false
  })
];
export {
  customTabbarList as c
};
//# sourceMappingURL=config.js.map
