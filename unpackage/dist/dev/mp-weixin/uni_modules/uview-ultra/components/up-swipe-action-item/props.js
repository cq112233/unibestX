"use strict";
const uni_modules_uviewUltra_components_upSwipeActionItem_swipeActionItem = require("./swipeActionItem.js");
require("./types.js");
let crtProp = uni_modules_uviewUltra_components_upSwipeActionItem_swipeActionItem.defProps["swipeActionItem"];
const propsSwipeActionItem = {
  props: {
    // 控制打开或者关闭
    show: {
      type: Boolean,
      default: crtProp["show"]
    },
    closeOnClick: {
      type: Boolean,
      default: crtProp["closeOnClick"]
    },
    // 标识符，如果是v-for，可用index索引值
    name: {
      type: [String, Number],
      default: crtProp["name"]
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: crtProp["disabled"]
    },
    // 是否自动关闭其他swipe按钮组
    autoClose: {
      type: Boolean,
      default: crtProp["autoClose"]
    },
    // 滑动距离阈值，只有大于此值，才被认为是要打开菜单
    threshold: {
      type: Number,
      default: crtProp["threshold"]
    },
    // 右侧按钮内容
    options: {
      type: Array,
      default: crtProp["options"]
    },
    // 动画过渡时间，单位ms
    duration: {
      type: [String, Number],
      default: crtProp["duration"]
    }
  }
};
exports.propsSwipeActionItem = propsSwipeActionItem;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-swipe-action-item/props.js.map
