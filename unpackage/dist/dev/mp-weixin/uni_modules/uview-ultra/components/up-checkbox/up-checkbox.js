"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_components_upCheckbox_checkbox = require("./checkbox.js");
const uni_modules_uviewUltra_libs_composable_useUltraUI = require("../../libs/composable/useUltraUI.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon_1();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
if (!Math) {
  _easycom_up_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-checkbox"
}, { __name: "up-checkbox", props: {
  // checkbox组件的标示符
  name: {
    type: [String, Number, Boolean],
    default: uni_modules_uviewUltra_components_upCheckbox_checkbox.defProps.getAny("checkbox.name")
  },
  // 形状，square为方形，circle为圆型
  shape: {
    type: String,
    default: uni_modules_uviewUltra_components_upCheckbox_checkbox.defProps.getString("checkbox.shape")
  },
  // 整体的大小
  size: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upCheckbox_checkbox.defProps.getAny("checkbox.size")
  },
  // 是否默认选中
  checked: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upCheckbox_checkbox.defProps.getBoolean("checkbox.checked")
  },
  // 是否禁用
  disabled: {
    type: [String, Boolean],
    default: uni_modules_uviewUltra_components_upCheckbox_checkbox.defProps.getAny("checkbox.disabled")
  },
  // 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值
  activeColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upCheckbox_checkbox.defProps.getString("checkbox.activeColor")
  },
  // 未选中的颜色
  inactiveColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upCheckbox_checkbox.defProps.getString("checkbox.inactiveColor")
  },
  // 图标的大小，单位px
  iconSize: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upCheckbox_checkbox.defProps.getAny("checkbox.iconSize")
  },
  // 图标颜色
  iconColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upCheckbox_checkbox.defProps.getString("checkbox.iconColor")
  },
  // label提示文字，因为nvue下，直接slot进来的文字，由于特殊的结构，无法修改样式
  label: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upCheckbox_checkbox.defProps.getAny("checkbox.label")
  },
  // label的颜色
  labelColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upCheckbox_checkbox.defProps.getString("checkbox.labelColor")
  },
  // label的字体大小，px单位
  labelSize: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upCheckbox_checkbox.defProps.getAny("checkbox.labelSize")
  },
  // 是否禁止点击提示语选中复选框
  labelDisabled: {
    type: [String, Boolean],
    default: uni_modules_uviewUltra_components_upCheckbox_checkbox.defProps.getAny("checkbox.labelDisabled")
  },
  // 定义需要用到的外部样式
  customStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  },
  // 是否独立使用
  usedAlone: {
    type: Boolean,
    default: false
  }
}, emits: ["change", "update:checked"], setup(__props, _a) {
  var _b;
  var __expose = _a.expose, __emit = _a.emit;
  const _c = uni_modules_uviewUltra_libs_composable_useUltraUI.useUltraUI(), parent = _c.parent, parentData = _c.parentData, getParentData = _c.getParentData;
  const instance = (_b = common_vendor.getCurrentInstance()) === null || _b === void 0 ? null : _b.proxy;
  const props = __props;
  const emit = __emit;
  const injectedParentProps = common_vendor.inject("upCheckboxGroupProps", null);
  const injectedParentToggle = common_vendor.inject("upCheckboxGroupToggle", null);
  function getParentVal(key) {
    if (!props.usedAlone) {
      if (injectedParentProps != null && injectedParentProps.value != null) {
        const obj = injectedParentProps.value;
        if (obj != null && obj[key] != null) {
          return obj[key];
        }
      }
      if (parentData.value != null && parentData.value[key] != null) {
        return parentData.value[key];
      }
    }
    return null;
  }
  const selfChecked = common_vendor.ref(props.checked);
  const isChecked = common_vendor.computed(() => {
    if (!props.usedAlone) {
      const val = getParentVal("modelValue");
      if (val != null) {
        const arr = val;
        if (props.name != null) {
          for (let i = 0; i < arr.length; i++) {
            if (arr[i] != null && arr[i].toString() == props.name.toString()) {
              return true;
            }
          }
        }
        return false;
      }
    }
    return selfChecked.value;
  });
  const elDisabled = common_vendor.computed(() => {
    let disabledVal = props.disabled;
    if (disabledVal != null && disabledVal.toString() != "") {
      return disabledVal.toString() == "true";
    }
    const p = getParentVal("disabled");
    if (p != null) {
      return p;
    }
    return false;
  });
  const elLabelDisabled = common_vendor.computed(() => {
    let labelDisabledVal = props.labelDisabled;
    if (labelDisabledVal != null && labelDisabledVal.toString() != "") {
      return labelDisabledVal.toString() == "true";
    }
    const p = getParentVal("labelDisabled");
    if (p != null) {
      return p;
    }
    return false;
  });
  const elSize = common_vendor.computed(() => {
    if (props.size != null && props.size.toString() != "") {
      return props.size.toString();
    }
    const p = getParentVal("size");
    if (p != null && p.toString() != "") {
      return p.toString();
    }
    return "21";
  });
  const elIconSize = common_vendor.computed(() => {
    if (props.iconSize != null && props.iconSize.toString() != "") {
      return props.iconSize.toString();
    }
    const p = getParentVal("iconSize");
    if (p != null && p.toString() != "") {
      return p.toString();
    }
    return "12";
  });
  const elActiveColor = common_vendor.computed(() => {
    const activeColorProp = props.activeColor;
    if (activeColorProp != null && activeColorProp.toString() != "") {
      return activeColorProp.toString();
    }
    const p = getParentVal("activeColor");
    if (p != null && p.toString() != "") {
      return p.toString();
    }
    return "#2979ff";
  });
  const elInactiveColor = common_vendor.computed(() => {
    const inactiveColorProp = props.inactiveColor;
    if (inactiveColorProp != null && inactiveColorProp.toString() != "") {
      return inactiveColorProp.toString();
    }
    const p = getParentVal("inactiveColor");
    if (p != null && p.toString() != "") {
      return p.toString();
    }
    return "#c8c9cc";
  });
  const elLabelColor = common_vendor.computed(() => {
    if (props.labelColor != null && props.labelColor.toString() != "") {
      return props.labelColor.toString();
    }
    const p = getParentVal("labelColor");
    if (p != null && p.toString() != "") {
      return p.toString();
    }
    return "#606266";
  });
  const elShape = common_vendor.computed(() => {
    if (props.shape != null && props.shape.toString() != "") {
      return props.shape.toString();
    }
    const p = getParentVal("shape");
    if (p != null && p.toString() != "") {
      return p.toString();
    }
    return "circle";
  });
  const elLabelSize = common_vendor.computed(() => {
    if (props.labelSize != null && props.labelSize.toString() != "") {
      return uni_modules_uviewUltra_libs_function_index.addUnit(props.labelSize.toString());
    }
    const p = getParentVal("labelSize");
    if (p != null && p.toString() != "") {
      return uni_modules_uviewUltra_libs_function_index.addUnit(p.toString());
    }
    return uni_modules_uviewUltra_libs_function_index.addUnit("15");
  });
  const elIconColor = common_vendor.computed(() => {
    let iconColor = "#ffffff";
    if (props.iconColor.toString() != "") {
      iconColor = props.iconColor.toString();
    } else {
      const p = getParentVal("iconColor");
      if (p != null && p.toString() != "") {
        iconColor = p.toString();
      }
    }
    if (elDisabled.value) {
      return isChecked.value ? elInactiveColor.value : "transparent";
    } else {
      return isChecked.value ? iconColor : "transparent";
    }
  });
  const iconClasses = common_vendor.computed(() => {
    let classes = [];
    classes.push("up-checkbox__icon-wrap--" + elShape.value.toString());
    if (elDisabled.value) {
      classes.push("up-checkbox__icon-wrap--disabled");
    }
    if (isChecked.value && elDisabled.value) {
      classes.push("up-checkbox__icon-wrap--disabled--checked");
    }
    if (isChecked.value && !elDisabled.value && elActiveColor.value == "#2979ff") {
      classes.push("up-checkbox__icon-wrap--active");
    }
    return classes.join(" ");
  });
  const iconWrapStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (isChecked.value && !elDisabled.value) {
      if (elActiveColor.value != "#2979ff") {
        style["backgroundColor"] = elActiveColor.value;
        style["borderColor"] = elActiveColor.value;
      }
    } else {
      style["backgroundColor"] = "#ffffff";
      style["borderColor"] = elInactiveColor.value;
    }
    style["width"] = uni_modules_uviewUltra_libs_function_index.addUnit(elSize.value);
    style["height"] = uni_modules_uviewUltra_libs_function_index.addUnit(elSize.value);
    const iconPlacement = getParentVal("iconPlacement");
    if (iconPlacement != null && iconPlacement.toString() == "right") {
      style["marginRight"] = 0;
    }
    return style;
  });
  const checkboxStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    const borderBottom = getParentVal("borderBottom");
    const placement = getParentVal("placement");
    if (borderBottom != null && borderBottom.toString() == "true" && placement != null && placement.toString() == "row") {
      uni_modules_uviewUltra_libs_function_index.error("检测到您将borderBottom设置为true，需要同时将up-checkbox-group的placement设置为column才有效");
    }
    if (borderBottom != null && borderBottom.toString() == "true" && placement != null && placement.toString() == "column") {
      style["paddingBottom"] = "8px";
    }
    return uni_modules_uviewUltra_libs_function_index.deepMerge(style, uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle));
  });
  const iconPlacementClass = common_vendor.computed(() => {
    const p = getParentVal("iconPlacement");
    if (p != null && p.toString() != "") {
      return "up-checkbox-label--" + p.toString();
    }
    return "up-checkbox-label--left";
  });
  const borderBottomClass = common_vendor.computed(() => {
    const borderBottom = getParentVal("borderBottom");
    const placement = getParentVal("placement");
    if (borderBottom != null && borderBottom.toString() == "true" && placement != null && placement.toString() == "column") {
      return "up-border-bottom";
    }
    return "";
  });
  const init = function() {
    if (!props.usedAlone && injectedParentProps == null) {
      parentData.value = new common_vendor.UTSJSONObject({
        iconSize: 12,
        labelDisabled: null,
        disabled: null,
        shape: "square",
        activeColor: null,
        inactiveColor: null,
        size: 18,
        modelValue: null,
        iconColor: null,
        placement: "row",
        borderBottom: false,
        iconPlacement: "left"
      });
      if (instance != null) {
        getParentData("up-checkbox-group", instance, false);
      }
    }
    if (props.checked) {
      selfChecked.value = true;
    }
  };
  function setRadioCheckedStatus() {
    var _a2;
    const targetChecked = !isChecked.value;
    if (!props.usedAlone && injectedParentToggle != null) {
      injectedParentToggle(props.name != null ? props.name.toString() : "", targetChecked);
    } else {
      selfChecked.value = targetChecked;
      if (!props.usedAlone && parent.value != null && instance != null) {
        (_a2 = parent.value) === null || _a2 === void 0 ? null : _a2.$callMethod("unCheckedOther", instance);
      }
    }
    emit("change", targetChecked);
    if (props.usedAlone) {
      emit("update:checked", targetChecked);
    }
    setTimeout(() => {
    }, 10);
  }
  function iconClickHandler(e) {
    e.stopPropagation();
    if (!elDisabled.value) {
      setRadioCheckedStatus();
    }
  }
  function wrapperClickHandler(e) {
    const iconPlacement = getParentVal("iconPlacement");
    if (iconPlacement != null && iconPlacement.toString() == "right") {
      iconClickHandler(e);
    }
  }
  function labelClickHandler(e) {
    e.stopPropagation();
    if (!elLabelDisabled.value && !elDisabled.value) {
      setRadioCheckedStatus();
    }
  }
  common_vendor.watch(() => {
    return props.checked;
  }, (newVal) => {
    if (newVal != selfChecked.value) {
      selfChecked.value = newVal;
    }
  });
  common_vendor.onMounted(() => {
    init();
  });
  const getInternalState = () => {
    return new common_vendor.UTSJSONObject({
      name: props.name,
      isChecked: isChecked.value
    });
  };
  __expose({
    init,
    getInternalState
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.p({
        name: "checkbox-mark",
        size: elIconSize.value,
        color: elIconColor.value,
        class: "up-checkbox__icon-wrap__icon data-v-819863e8"
      }),
      b: common_vendor.o(iconClickHandler, "93"),
      c: common_vendor.n(iconClasses.value),
      d: common_vendor.s(iconWrapStyle.value),
      e: common_vendor.t(__props.label),
      f: common_vendor.o(labelClickHandler, "23"),
      g: elDisabled.value ? elInactiveColor.value : elLabelColor.value,
      h: elLabelSize.value,
      i: elLabelSize.value,
      j: common_vendor.r("label", {
        label: __props.label,
        elDisabled: elDisabled.value
      }),
      k: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      l: common_vendor.s(checkboxStyle.value),
      m: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      n: common_vendor.o(wrapperClickHandler, "78"),
      o: common_vendor.n(iconPlacementClass.value),
      p: common_vendor.n(borderBottomClass.value),
      q: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-819863e8"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-checkbox/up-checkbox.js.map
