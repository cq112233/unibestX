"use strict";
require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upStepsItem_stepsItem = require("./stepsItem.js");
let crtProp = uni_modules_uviewUltra_components_upStepsItem_stepsItem.defProps["stepsItem"];
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
exports.propsStepsItem = propsStepsItem;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-steps-item/props.js.map
