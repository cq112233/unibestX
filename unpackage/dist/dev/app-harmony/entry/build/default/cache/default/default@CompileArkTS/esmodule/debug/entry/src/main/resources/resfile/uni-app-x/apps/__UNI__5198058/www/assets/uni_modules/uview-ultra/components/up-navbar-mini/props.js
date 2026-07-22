
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-navbar-mini/navbarMini&";
let crtProp = defProps["navbarMini"];
const propsNavbarMini = {
  props: {
    // 是否开启顶部安全区适配
    safeAreaInsetTop: {
      type: Boolean,
      default: crtProp["safeAreaInsetTop"]
    },
    // 是否固定在顶部
    fixed: {
      type: Boolean,
      default: crtProp["fixed"]
    },
    // 左边的图标
    leftIcon: {
      type: String,
      default: crtProp["leftIcon"]
    },
    // 背景颜色
    bgColor: {
      type: String,
      default: crtProp["bgColor"]
    },
    // 导航栏高度
    height: {
      type: [String, Number],
      default: crtProp["height"]
    },
    // 图标的大小
    iconSize: {
      type: [String, Number],
      default: crtProp["iconSize"]
    },
    // 图标的颜色
    iconColor: {
      type: String,
      default: crtProp["iconColor"]
    },
    // 点击左侧区域(返回图标)，是否自动返回上一页
    autoBack: {
      type: Boolean,
      default: crtProp["autoBack"]
    },
    // 首页路径
    homeUrl: {
      type: String,
      default: crtProp["homeUrl"]
    }
  }
};
export {
  propsNavbarMini as p
};
//# sourceMappingURL=props.js.map
