
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-steps-item/stepsItem&";
let crtProp = defProps["stepsItem"];
const propsStepsItem = {
  props: {
    // 标题
    title: {
      type: [String, Number],
      default: crtProp["title"]
    },
    // 描述文本
    desc: {
      type: [String, Number],
      default: crtProp["desc"]
    },
    // 图标大小
    iconSize: {
      type: [String, Number],
      default: crtProp["iconSize"]
    },
    // 当前步骤是否处于失败状态
    error: {
      type: Boolean,
      default: crtProp["error"]
    },
    // 自定义样式
    itemStyle: {
      type: [UTSJSONObject],
      default: new UTSJSONObject({})
    }
  }
};
export {
  propsStepsItem as p
};
//# sourceMappingURL=props.js.map
