"use strict";
const uni_modules_uviewUltra_components_upPicker_picker = require("./picker.js");
let crtProp = uni_modules_uviewUltra_components_upPicker_picker.defProps["picker"];
const propsPicker = {
  props: {
    modelValue: {
      type: Array,
      default: []
    },
    hasInput: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    // 是否展示picker弹窗
    show: {
      type: Boolean,
      default: crtProp["show"]
    },
    // 弹出的方向，可选值为 top bottom right left center
    popupMode: {
      type: String,
      default: crtProp["popupMode"]
    },
    // 是否展示顶部的操作栏
    showToolbar: {
      type: Boolean,
      default: crtProp["showToolbar"]
    },
    // 顶部标题
    title: {
      type: String,
      default: crtProp["title"]
    },
    // 对象数组，设置每一列的数据
    columns: {
      type: Array,
      default: crtProp["columns"]
    },
    // 是否显示加载中状态
    loading: {
      type: Boolean,
      default: crtProp["loading"]
    },
    // 各列中，单个选项的高度
    itemHeight: {
      type: [String, Number],
      default: crtProp["itemHeight"]
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
    // 每列中可见选项的数量
    visibleItemCount: {
      type: [String, Number],
      default: crtProp["visibleItemCount"]
    },
    // 选项对象中，需要展示的属性键名
    keyName: {
      type: String,
      default: crtProp["keyName"]
    },
    // 是否允许点击遮罩关闭选择器
    closeOnClickOverlay: {
      type: Boolean,
      default: crtProp["closeOnClickOverlay"]
    },
    // 各列的默认索引
    defaultIndex: {
      type: Array,
      default: crtProp["defaultIndex"]
    },
    // 是否在手指松开时立即触发 change 事件。若不开启则会在滚动动画结束后触发 change 事件，只在微信2.21.1及以上有效
    immediateChange: {
      type: Boolean,
      default: crtProp["immediateChange"]
    },
    // 工具栏右侧插槽是否开启
    toolbarRightSlot: {
      type: Boolean,
      default: false
    },
    // 是否内联在页面中（不使用弹窗形式）
    pageInline: {
      type: Boolean,
      default: crtProp["pageInline"]
    }
  }
};
exports.propsPicker = propsPicker;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-picker/props.js.map
