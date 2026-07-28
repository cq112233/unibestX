
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-transition/transition&";
let crtProp = defProps["transition"];
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
export {
  propsTransition as p
};
//# sourceMappingURL=props.js.map
