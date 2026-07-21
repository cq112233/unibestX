"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upFormItem_formItem = require("./formItem.js");
const uni_modules_uviewUltra_components_upLine_line = require("../up-line/line.js");
const uni_modules_uviewUltra_libs_config_color = require("../../libs/config/color.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_composable_useUltraUI = require("../../libs/composable/useUltraUI.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_line_1 = common_vendor.resolveComponent("up-line");
  (_easycom_up_icon_1 + _easycom_up_line_1)();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_line = () => "../up-line/up-line.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_line)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-form-item"
}, { __name: "up-form-item", props: {
  // input的label提示语
  label: {
    type: String,
    default: uni_modules_uviewUltra_components_upFormItem_formItem.defProps.getString("formItem.label")
  },
  // 绑定的值
  prop: {
    type: String,
    default: uni_modules_uviewUltra_components_upFormItem_formItem.defProps.getString("formItem.prop")
  },
  // 绑定的规则
  rules: {
    type: [UTSJSONObject, Array],
    default: uni_modules_uviewUltra_components_upFormItem_formItem.defProps.getAny("formItem.rules")
  },
  // 是否显示表单域的下划线边框
  borderBottom: {
    type: [String, Boolean],
    default: uni_modules_uviewUltra_components_upFormItem_formItem.defProps.getString("formItem.borderBottom")
  },
  // label的位置，left-左边，top-上边
  labelPosition: {
    type: String,
    default: uni_modules_uviewUltra_components_upFormItem_formItem.defProps.getString("formItem.labelPosition")
  },
  // label的宽度，单位px
  labelWidth: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upFormItem_formItem.defProps.getString("formItem.labelWidth")
  },
  // 右侧图标
  rightIcon: {
    type: String,
    default: uni_modules_uviewUltra_components_upFormItem_formItem.defProps.getString("formItem.rightIcon")
  },
  // 左侧图标
  leftIcon: {
    type: String,
    default: uni_modules_uviewUltra_components_upFormItem_formItem.defProps.getString("formItem.leftIcon")
  },
  // 是否显示左边的必填星号，只作显示用，具体校验必填的逻辑，请在rules中配置
  required: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upFormItem_formItem.defProps.getBoolean("formItem.required")
  },
  leftIconStyle: {
    type: [String, UTSJSONObject],
    default: uni_modules_uviewUltra_components_upFormItem_formItem.defProps.getString("formItem.leftIconStyle")
  }
}, emits: ["click"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const _b = uni_modules_uviewUltra_libs_composable_useUltraUI.useUltraUI(new UTSJSONObject({
    // 提示文本的位置
    labelPosition: "left",
    // 提示文本对齐方式
    labelAlign: "left",
    // 提示文本的样式
    labelStyle: new UTSJSONObject({}),
    // 提示文本的宽度
    labelWidth: 45,
    // 错误提示方式
    errorType: "message",
    originalModel: new UTSJSONObject({})
  })), parent = _b.parent, parentData = _b.parentData, getParentData = _b.getParentData;
  const instance = common_vendor.getCurrentInstance().proxy;
  const props = __props;
  const emit = __emit;
  const message = common_vendor.ref("");
  const itemRules = common_vendor.ref(new UTSJSONObject({}));
  const updateParentData = () => {
    getParentData("up-form", instance, false);
  };
  const init = () => {
    updateParentData();
    if (parent.value == null) {
      uni_modules_uviewUltra_libs_function_index.error("up-form-item需要结合up-form组件使用");
    }
  };
  const setRules = (rules) => {
    if (Array.isArray(rules)) {
      if (rules.length == 0) {
        itemRules.value = new UTSJSONObject({});
        return null;
      }
    } else {
      if (UTSJSONObject.keys(rules).length == 0) {
        itemRules.value = new UTSJSONObject({});
        return null;
      }
    }
    itemRules.value = rules;
  };
  const clickHandler = () => {
    emit("click");
  };
  common_vendor.watch(() => {
    return props.rules;
  }, (newVal = null) => {
    setRules(newVal);
  }, { immediate: true });
  common_vendor.onMounted(() => {
    init();
  });
  const getProps = function() {
    return new UTSJSONObject({
      prop: props.prop,
      rules: itemRules.value,
      label: props.label,
      borderBottom: props.borderBottom,
      labelPosition: props.labelPosition,
      labelWidth: props.labelWidth,
      rightIcon: props.rightIcon,
      leftIcon: props.leftIcon,
      required: props.required,
      leftIconStyle: props.leftIconStyle
    });
  };
  const getRefs = function() {
    return new UTSJSONObject({
      message: message.value,
      itemRules: itemRules.value
    });
  };
  const setMessage = function(msg) {
    message.value = msg;
  };
  __expose({
    getProps,
    getRefs,
    setMessage
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.required || __props.leftIcon != "" || __props.label != ""
    }, __props.required || __props.leftIcon != "" || __props.label != "" ? common_vendor.e({
      b: __props.required
    }, __props.required ? {} : {}, {
      c: __props.leftIcon != ""
    }, __props.leftIcon != "" ? {
      d: common_vendor.p({
        name: __props.leftIcon,
        ["custom-style"]: __props.leftIconStyle,
        class: "data-v-dec42e4c"
      })
    } : {}, {
      e: common_vendor.t(__props.label),
      f: common_vendor.s(common_vendor.unref(parentData)["labelStyle"] ?? {}),
      g: common_vendor.unref(parentData)["labelAlign"] == "left" ? "flex-start" : common_vendor.unref(parentData)["labelAlign"] == "center" ? "center" : "flex-end",
      h: _ctx.$up.addUnit(__props.labelWidth != "" ? __props.labelWidth : common_vendor.unref(parentData)["labelWidth"]),
      i: (__props.labelPosition != "" ? __props.labelPosition : common_vendor.unref(parentData)["labelPosition"]) == "left" ? 0 : "5px"
    }) : {}, {
      j: _ctx.$slots["right"] != null
    }, _ctx.$slots["right"] != null ? {} : {}, {
      k: common_vendor.o(clickHandler, "0e"),
      l: common_vendor.s(_ctx.$up.addStyle(_ctx.customStyle)),
      m: common_vendor.s({
        flexDirection: (__props.labelPosition != "" ? __props.labelPosition : common_vendor.unref(parentData)["labelPosition"]) == "left" ? "row" : "column"
      }),
      n: message.value != "" && common_vendor.unref(parentData)["errorType"] == "message"
    }, message.value != "" && common_vendor.unref(parentData)["errorType"] == "message" ? {
      o: common_vendor.t(message.value),
      p: _ctx.$up.addUnit((__props.labelPosition ?? common_vendor.unref(parentData)["labelPosition"]) == "top" ? 0 : __props.labelWidth != null ? __props.labelWidth : common_vendor.unref(parentData)["labelWidth"])
    } : {}, {
      q: __props.borderBottom
    }, __props.borderBottom ? {
      r: common_vendor.p({
        color: message.value != "" && common_vendor.unref(parentData)["errorType"] == "border-bottom" ? common_vendor.unref(uni_modules_uviewUltra_libs_config_color.color)["error"] : common_vendor.unref(uni_modules_uviewUltra_components_upLine_line.propsLine)["color"],
        customStyle: `margin-top: ${message.value != "" && common_vendor.unref(parentData)["errorType"] == "message" ? "5px" : 0}`,
        class: "data-v-dec42e4c"
      })
    } : {}, {
      s: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      t: message.value != "" && common_vendor.unref(parentData)["errorType"] == "message" ? 1 : "",
      v: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      w: `${_ctx.u_s_b_h}px`,
      x: `${_ctx.u_s_a_i_b}px`
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-dec42e4c"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-form-item/up-form-item.js.map
