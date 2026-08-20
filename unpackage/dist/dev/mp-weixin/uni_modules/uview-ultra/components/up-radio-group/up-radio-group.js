"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upRadioGroup_radioGroup = require("./radioGroup.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_composable_useUltraUI = require("../../libs/composable/useUltraUI.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-radio-group"
}, { __name: "up-radio-group", props: {
  // 标识符 
  name: {
    type: String,
    default: uni_modules_uviewUltra_components_upRadioGroup_radioGroup.defProps.getString("radioGroup.name")
  },
  // 绑定的值
  modelValue: {
    type: [String, Number, Boolean],
    default: uni_modules_uviewUltra_components_upRadioGroup_radioGroup.defProps.getString("radioGroup.value")
  },
  // 形状，circle-圆形，square-方形
  shape: {
    type: String,
    default: uni_modules_uviewUltra_components_upRadioGroup_radioGroup.defProps.getString("radioGroup.shape")
  },
  // 是否禁用全部radio
  disabled: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upRadioGroup_radioGroup.defProps.getBoolean("radioGroup.disabled")
  },
  // 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值
  activeColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upRadioGroup_radioGroup.defProps.getString("radioGroup.activeColor")
  },
  // 未选中的颜色
  inactiveColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upRadioGroup_radioGroup.defProps.getString("radioGroup.inactiveColor")
  },
  // 整个组件的尺寸 单位px
  size: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upRadioGroup_radioGroup.defProps.getNumber("radioGroup.size")
  },
  // 布局方式，row-横向，column-纵向
  placement: {
    type: String,
    default: uni_modules_uviewUltra_components_upRadioGroup_radioGroup.defProps.getString("radioGroup.placement")
  },
  // label的字体大小，px单位
  labelSize: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upRadioGroup_radioGroup.defProps.getNumber("radioGroup.labelSize")
  },
  // label的字体颜色
  labelColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upRadioGroup_radioGroup.defProps.getString("radioGroup.labelColor")
  },
  // 是否禁止点击文本操作
  labelDisabled: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upRadioGroup_radioGroup.defProps.getBoolean("radioGroup.labelDisabled")
  },
  // 图标颜色
  iconColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upRadioGroup_radioGroup.defProps.getString("radioGroup.iconColor")
  },
  // 图标的大小，单位px
  iconSize: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upRadioGroup_radioGroup.defProps.getNumber("radioGroup.iconSize")
  },
  // 勾选图标的对齐方式，left-左边，right-右边
  iconPlacement: {
    type: String,
    default: uni_modules_uviewUltra_components_upRadioGroup_radioGroup.defProps.getString("radioGroup.iconPlacement")
  },
  // placement为column时，是否显示下边框
  borderBottom: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upRadioGroup_radioGroup.defProps.getBoolean("radioGroup.borderBottom")
  }
}, emits: ["update:modelValue", "change"], setup(__props, _a) {
  var _b;
  var __expose = _a.expose, __emit = _a.emit;
  const _c = uni_modules_uviewUltra_libs_composable_useUltraUI.useUltraUI(), getChildren = _c.getChildren, addChild = _c.addChild;
  (_b = common_vendor.getCurrentInstance()) === null || _b === void 0 ? null : _b.proxy;
  const props = __props;
  const emit = __emit;
  const parentDataSelf = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      modelValue: props.modelValue,
      disabled: props.disabled,
      inactiveColor: props.inactiveColor,
      activeColor: props.activeColor,
      size: props.size,
      labelColor: props.labelColor,
      labelDisabled: props.labelDisabled,
      labelSize: props.labelSize,
      shape: props.shape,
      iconColor: props.iconColor,
      iconSize: props.iconSize,
      iconPlacement: props.iconPlacement,
      borderBottom: props.borderBottom,
      placement: props.placement
    });
  });
  const bemClass = common_vendor.computed(() => {
    return uni_modules_uviewUltra_libs_function_index.bem("radio-group", [props.placement], []);
  });
  function onRadioChange(name = null) {
    if (name != null) {
      emit("update:modelValue", name);
      emit("change", name);
    } else {
      emit("update:modelValue", "");
      emit("change", "");
    }
  }
  common_vendor.provide("upRadioGroupProps", parentDataSelf);
  common_vendor.provide("upRadioGroupChange", onRadioChange);
  function unCheckedOther(childInstance) {
    const name = childInstance.$props["name"];
    onRadioChange(name);
  }
  const getProps = function() {
    return parentDataSelf.value;
  };
  const getRefs = function() {
    return new common_vendor.UTSJSONObject({});
  };
  __expose({
    unCheckedOther,
    getChildren,
    addChild,
    getProps,
    getRefs
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      b: common_vendor.n(bemClass.value),
      c: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      d: `${_ctx.u_s_b_h}px`,
      e: `${_ctx.u_s_a_i_b}px`
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4a896d15"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-radio-group/up-radio-group.js.map
