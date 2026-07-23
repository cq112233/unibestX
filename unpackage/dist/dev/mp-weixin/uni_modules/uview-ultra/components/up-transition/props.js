"use strict";
const uni_modules_uviewUltra_components_upTransition_transition = require("./transition.js");
let crtProp = uni_modules_uviewUltra_components_upTransition_transition.defProps["transition"];
const propsTransition = {
  props: {
    // 是否展示组件
    show: {
      type: Boolean,
      default: crtProp["show"]
    },
    // 使用的动画模式
    mode: {
      type: String,
      default: crtProp["mode"]
    },
    // 动画的执行时间，单位ms
    duration: {
      type: [Number, String],
      default: crtProp["duration"]
    },
    // 使用的动画过渡函数
    timingFunction: {
      type: String,
      default: crtProp["timingFunction"]
    }
  }
};
exports.propsTransition = propsTransition;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-transition/props.js.map
