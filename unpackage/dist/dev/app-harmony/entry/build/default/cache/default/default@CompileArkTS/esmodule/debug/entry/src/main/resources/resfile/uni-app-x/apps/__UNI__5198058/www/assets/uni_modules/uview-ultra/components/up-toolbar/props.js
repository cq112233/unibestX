
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-toolbar/toolbar&";
let crtProp = defProps["toolbar"];
const propsToolbar = {
  props: {
    // 是否展示工具条
    show: {
      type: Boolean,
      default: crtProp["show"]
    },
    // 取消按钮的文字
    cancelText: {
      type: String,
      default: crtProp["cancelText"]
    },
    // 确认按钮的文字
    confirmText: {
      type: String,
      default: crtProp["confirmText"]
    },
    // 取消按钮的颜色
    cancelColor: {
      type: String,
      default: crtProp["cancelColor"]
    },
    // 确认按钮的颜色
    confirmColor: {
      type: String,
      default: crtProp["confirmColor"]
    },
    // 标题文字
    title: {
      type: String,
      default: crtProp["title"]
    },
    // 开启右侧插槽
    rightSlot: {
      type: Boolean,
      default: false
    }
  }
};
export {
  propsToolbar as p
};
//# sourceMappingURL=props.js.map
