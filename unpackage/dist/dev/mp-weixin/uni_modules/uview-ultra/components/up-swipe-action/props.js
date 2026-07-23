"use strict";
const uni_modules_uviewUltra_components_upSwipeAction_swipeAction = require("./swipeAction.js");
uni_modules_uviewUltra_components_upSwipeAction_swipeAction.defProps["swipeAction"];
const propsSwipeAction = {
  props: {
    // 是否自动关闭其他swipe按钮组
    autoClose: {
      type: Boolean,
      default: uni_modules_uviewUltra_components_upSwipeAction_swipeAction.defProps["autoClose"]
    },
    // 是否存在打开的按钮组
    opendItem: {
      type: Boolean,
      default: false
    }
  }
};
exports.propsSwipeAction = propsSwipeAction;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-swipe-action/props.js.map
