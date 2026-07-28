
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-overlay/overlay&";
let crtProp = defProps["overlay"];
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
export {
  propsOverlay as p
};
//# sourceMappingURL=props.js.map
