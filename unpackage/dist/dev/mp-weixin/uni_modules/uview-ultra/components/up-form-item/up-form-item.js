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
  customStyle: {
    type: [Object, String],
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  },
  customClass: {
    type: String,
    default: ""
  },
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
    type: [common_vendor.UTSJSONObject, Array],
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
    type: [String, common_vendor.UTSJSONObject],
    default: uni_modules_uviewUltra_components_upFormItem_formItem.defProps.getString("formItem.leftIconStyle")
  }
}, emits: ["click"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const _b = uni_modules_uviewUltra_libs_composable_useUltraUI.useUltraUI(new common_vendor.UTSJSONObject({
    // 提示文本的位置
    labelPosition: "left",
    // 提示文本对齐方式
    labelAlign: "left",
    // 提示文本的样式
    labelStyle: new common_vendor.UTSJSONObject({}),
    // 提示文本的宽度
    labelWidth: 45,
    // 错误提示方式
    errorType: "message",
    originalModel: new common_vendor.UTSJSONObject({})
  })), parent = _b.parent, parentData = _b.parentData, getParentData = _b.getParentData;
  const instance = common_vendor.getCurrentInstance().proxy;
  const props = __props;
  const emit = __emit;
  const message = common_vendor.ref("");
  const itemRules = common_vendor.ref(new common_vendor.UTSJSONObject({}));
  const bodyStyle = common_vendor.computed(() => {
    const custom = uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle);
    const parentPos = parentData.value != null ? parentData.value["labelPosition"] : null;
    const pos = props.labelPosition != "" ? props.labelPosition : parentPos !== null && parentPos !== void 0 ? parentPos : "left";
    const base = new common_vendor.UTSJSONObject({
      flexDirection: pos == "left" ? "row" : "column"
    });
    return uni_modules_uviewUltra_libs_function_index.deepMerge(base, custom);
  });
  const labelWrapperStyle = common_vendor.computed(() => {
    var _a2;
    const parentPos = parentData.value != null ? parentData.value["labelPosition"] : null;
    const pos = props.labelPosition != "" ? props.labelPosition : parentPos !== null && parentPos !== void 0 ? parentPos : "left";
    const parentWidth = parentData.value != null ? (_a2 = parentData.value["labelWidth"]) !== null && _a2 !== void 0 ? _a2 : 45 : 45;
    const widthVal = props.labelWidth != null && props.labelWidth != "" ? props.labelWidth : parentWidth;
    return new common_vendor.UTSJSONObject({
      width: uni_modules_uviewUltra_libs_function_index.addUnit(widthVal),
      marginBottom: pos == "left" ? "0px" : "5px"
    });
  });
  const labelAlignStyle = common_vendor.computed(() => {
    const align = parentData.value != null ? parentData.value["labelAlign"] : null;
    return new common_vendor.UTSJSONObject({
      justifyContent: align == "left" ? "flex-start" : align == "center" ? "center" : "flex-end"
    });
  });
  const labelCustomStyle = common_vendor.computed(() => {
    if (parentData.value != null && parentData.value["labelStyle"] != null) {
      return parentData.value["labelStyle"];
    }
    return new common_vendor.UTSJSONObject({});
  });
  const messageStyle = common_vendor.computed(() => {
    var _a2;
    const parentPos = parentData.value != null ? parentData.value["labelPosition"] : null;
    const pos = props.labelPosition != "" ? props.labelPosition : parentPos !== null && parentPos !== void 0 ? parentPos : "left";
    const parentWidth = parentData.value != null ? (_a2 = parentData.value["labelWidth"]) !== null && _a2 !== void 0 ? _a2 : 45 : 45;
    const widthVal = props.labelWidth != null && props.labelWidth != "" ? props.labelWidth : parentWidth;
    const left = pos == "top" ? "0px" : uni_modules_uviewUltra_libs_function_index.addUnit(widthVal);
    return new common_vendor.UTSJSONObject({
      marginLeft: left
    });
  });
  const isErrorMessage = common_vendor.computed(() => {
    const errorType = parentData.value != null ? parentData.value["errorType"] : null;
    return message.value != "" && errorType == "message";
  });
  const lineColor = common_vendor.computed(() => {
    var _a2;
    const errorType = parentData.value != null ? parentData.value["errorType"] : null;
    return message.value != "" && errorType == "border-bottom" ? uni_modules_uviewUltra_libs_config_color.color["error"] : (_a2 = uni_modules_uviewUltra_components_upLine_line.propsLine["color"]) !== null && _a2 !== void 0 ? _a2 : "#d6d7d9";
  });
  const lineStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      marginTop: isErrorMessage.value ? "5px" : "0px"
    });
  });
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
        itemRules.value = new common_vendor.UTSJSONObject({});
        return null;
      }
    } else {
      if (common_vendor.UTSJSONObject.keys(rules).length == 0) {
        itemRules.value = new common_vendor.UTSJSONObject({});
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
    return new common_vendor.UTSJSONObject({
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
    return new common_vendor.UTSJSONObject({
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
      f: common_vendor.s(labelCustomStyle.value),
      g: common_vendor.s(labelAlignStyle.value),
      h: common_vendor.s(labelWrapperStyle.value)
    }) : {}, {
      i: _ctx.$slots["right"] != null
    }, _ctx.$slots["right"] != null ? {} : {}, {
      j: common_vendor.o(clickHandler, "db"),
      k: common_vendor.s(bodyStyle.value),
      l: isErrorMessage.value
    }, isErrorMessage.value ? {
      m: common_vendor.t(message.value),
      n: common_vendor.s(messageStyle.value)
    } : {}, {
      o: __props.borderBottom
    }, __props.borderBottom ? {
      p: common_vendor.p({
        color: lineColor.value,
        customStyle: lineStyle.value,
        class: "data-v-dec42e4c"
      })
    } : {}, {
      q: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      r: isErrorMessage.value ? 1 : "",
      s: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      t: `${_ctx.u_s_b_h}px`,
      v: `${_ctx.u_s_a_i_b}px`
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-dec42e4c"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-form-item/up-form-item.js.map
