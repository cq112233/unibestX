"use strict";
const uni_modules_uviewUltra_components_upOverlay_overlay = require("./overlay.js");
let crtProp = uni_modules_uviewUltra_components_upOverlay_overlay.defProps["overlay"];
const propsOverlay = {
  props: {
    // 是否显示遮罩
    show: {
      type: Boolean,
      default: crtProp["show"]
    },
    // 层级z-index
    zIndex: {
      type: [String, Number],
      default: crtProp["zIndex"]
    },
    // 遮罩的过渡时间，单位为ms
    duration: {
      type: [String, Number],
      default: crtProp["duration"]
    },
    // 不透明度值，当做rgba的第四个参数
    opacity: {
      type: [String, Number],
      default: crtProp["opacity"]
    }
  }
};
exports.propsOverlay = propsOverlay;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-overlay/props.js.map
