"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upCheckboxGroup_checkboxGroup = require("./checkboxGroup.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_composable_useUltraUI = require("../../libs/composable/useUltraUI.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-checkbox-group"
}, { __name: "up-checkbox-group", props: {
  // 标识符 
  name: {
    type: String,
    default: uni_modules_uviewUltra_components_upCheckboxGroup_checkboxGroup.defProps.getString("checkboxGroup.name")
  },
  // 绑定的值
  modelValue: {
    type: Array,
    default: () => {
      return uni_modules_uviewUltra_components_upCheckboxGroup_checkboxGroup.defProps.getArray("checkboxGroup.value");
    }
  },
  // 形状，circle-圆形，square-方形
  shape: {
    type: String,
    default: uni_modules_uviewUltra_components_upCheckboxGroup_checkboxGroup.defProps.getString("checkboxGroup.shape")
  },
  // 是否禁用全部checkbox
  disabled: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upCheckboxGroup_checkboxGroup.defProps.getBoolean("checkboxGroup.disabled")
  },
  // 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值
  activeColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upCheckboxGroup_checkboxGroup.defProps.getString("checkboxGroup.activeColor")
  },
  // 未选中的颜色
  inactiveColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upCheckboxGroup_checkboxGroup.defProps.getString("checkboxGroup.inactiveColor")
  },
  // 整个组件的尺寸 单位px
  size: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upCheckboxGroup_checkboxGroup.defProps.getNumber("checkboxGroup.size")
  },
  // 布局方式，row-横向，column-纵向
  placement: {
    type: String,
    default: uni_modules_uviewUltra_components_upCheckboxGroup_checkboxGroup.defProps.getString("checkboxGroup.placement")
  },
  // label的字体大小，px单位
  labelSize: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upCheckboxGroup_checkboxGroup.defProps.getNumber("checkboxGroup.labelSize")
  },
  // label的字体颜色
  labelColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upCheckboxGroup_checkboxGroup.defProps.getString("checkboxGroup.labelColor")
  },
  // 是否禁止点击文本操作
  labelDisabled: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upCheckboxGroup_checkboxGroup.defProps.getBoolean("checkboxGroup.labelDisabled")
  },
  // 图标颜色
  iconColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upCheckboxGroup_checkboxGroup.defProps.getString("checkboxGroup.iconColor")
  },
  // 图标的大小，单位px
  iconSize: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upCheckboxGroup_checkboxGroup.defProps.getNumber("checkboxGroup.iconSize")
  },
  // 勾选图标的对齐方式，left-左边，right-右边
  iconPlacement: {
    type: String,
    default: uni_modules_uviewUltra_components_upCheckboxGroup_checkboxGroup.defProps.getString("checkboxGroup.iconPlacement")
  },
  // placement为row时，是否显示下边框
  borderBottom: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upCheckboxGroup_checkboxGroup.defProps.getBoolean("checkboxGroup.borderBottom")
  }
}, emits: ["update:modelValue", "change"], setup(__props, _a) {
  var _b;
  var __expose = _a.expose, __emit = _a.emit;
  const _c = uni_modules_uviewUltra_libs_composable_useUltraUI.useUltraUI(), children = _c.children, getChildren = _c.getChildren, addChild = _c.addChild;
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
    return uni_modules_uviewUltra_libs_function_index.bem("checkbox-group", [props.placement], []);
  });
  function toggleCheckbox(childName, childChecked) {
    let currentValues = [];
    if (props.modelValue != null) {
      const rawArr = props.modelValue;
      currentValues = rawArr.slice();
    }
    let foundIndex = -1;
    for (let i = 0; i < currentValues.length; i++) {
      if (currentValues[i] != null && currentValues[i].toString() == childName.toString()) {
        foundIndex = i;
        break;
      }
    }
    if (childChecked) {
      if (foundIndex == -1) {
        currentValues.push(childName);
      }
    } else {
      if (foundIndex != -1) {
        currentValues.splice(foundIndex, 1);
      }
    }
    emit("update:modelValue", currentValues);
    emit("change", currentValues);
  }
  common_vendor.provide("upCheckboxGroupProps", parentDataSelf);
  common_vendor.provide("upCheckboxGroupToggle", toggleCheckbox);
  function unCheckedOther(childInstance) {
    var _a2;
    const values = [];
    (_a2 = children.value) === null || _a2 === void 0 ? null : _a2.map((child) => {
      let istats = child.$callMethod("getInternalState");
      if (istats["name"] != null && istats["isChecked"] != null && istats["isChecked"].toString() == "true") {
        values.push(istats["name"].toString());
      }
    });
    emit("change", values);
    emit("update:modelValue", values);
  }
  common_vendor.watch(parentDataSelf, () => {
    var _a2;
    (_a2 = children.value) === null || _a2 === void 0 ? null : _a2.map((child) => {
      child === null || child === void 0 ? null : child.$callMethod("init");
    });
  }, { deep: true });
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
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-60ba2806"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-checkbox-group/up-checkbox-group.js.map
