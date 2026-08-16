"use strict";
const uni_modules_uviewUltra_components_upSwitch_switch = require("./switch.js");
let switchProp = uni_modules_uviewUltra_components_upSwitch_switch.defProps["switch"];
const propsSwitch = {
  props: {
    // 开关尺寸，单位px
    size: {
      type: [String, Number],
      default: switchProp["size"]
    },
    // 是否为加载中状态
    loading: {
      type: Boolean,
      default: switchProp["loading"]
    },
    // 是否为禁用状态
    disabled: {
      type: Boolean,
      default: switchProp["disabled"]
    },
    // 打开时的背景颜色
    activeColor: {
      type: String,
      default: switchProp["activeColor"]
    },
    // 关闭时的背景颜色
    inactiveColor: {
      type: String,
      default: switchProp["inactiveColor"]
    },
    // 通过value设置开关的初始状态
    value: {
      type: [Boolean, String, Number],
      default: switchProp["value"]
    },
    // v-model绑定值
    modelValue: {
      type: [Boolean, String, Number],
      default: switchProp["modelValue"]
    },
    // 打开状态时的值
    activeValue: {
      type: [Boolean, String, Number],
      default: switchProp["activeValue"]
    },
    // 关闭状态时的值
    inactiveValue: {
      type: [Boolean, String, Number],
      default: switchProp["inactiveValue"]
    },
    // 是否开启异步变更
    asyncChange: {
      type: Boolean,
      default: switchProp["asyncChange"]
    },
    // 圆点与外边框的距离
    space: {
      type: [String, Number],
      default: switchProp["space"]
    },
    // 图标大小
    iconSize: {
      type: [String, Number],
      default: switchProp["iconSize"]
    },
    // 切换前执行的回调函数
    beforeChange: {
      // @ts-ignore
      type: Function,
      default: switchProp["beforeChange"]
    }
  }
};
exports.propsSwitch = propsSwitch;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-switch/props.js.map
