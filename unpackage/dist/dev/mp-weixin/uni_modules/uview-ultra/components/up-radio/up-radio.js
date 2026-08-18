"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upRadio_radio = require("./radio.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon_1();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
if (!Math) {
  _easycom_up_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-radio"
}, { __name: "up-radio", props: {
  // radio的名称
  name: {
    type: [String, Number, Boolean],
    default: uni_modules_uviewUltra_components_upRadio_radio.defProps.getString("radio.name")
  },
  // 形状，square为方形，circle为圆型
  shape: {
    type: String,
    default: uni_modules_uviewUltra_components_upRadio_radio.defProps.getString("radio.shape")
  },
  // 是否禁用
  disabled: {
    type: [String, Boolean],
    default: uni_modules_uviewUltra_components_upRadio_radio.defProps.getString("radio.disabled")
  },
  // 是否禁止点击提示语选中单选框
  labelDisabled: {
    type: [String, Boolean],
    default: uni_modules_uviewUltra_components_upRadio_radio.defProps.getString("radio.labelDisabled")
  },
  // 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值
  activeColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upRadio_radio.defProps.getString("radio.activeColor")
  },
  // 未选中的颜色
  inactiveColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upRadio_radio.defProps.getString("radio.inactiveColor")
  },
  // 图标的大小，单位px
  iconSize: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upRadio_radio.defProps.getString("radio.iconSize")
  },
  // label的字体大小，px单位
  labelSize: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upRadio_radio.defProps.getString("radio.labelSize")
  },
  // label提示文字，因为nvue下，直接slot进来的文字，由于特殊的结构，无法修改样式
  label: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upRadio_radio.defProps.getString("radio.label")
  },
  // 整体的大小
  size: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upRadio_radio.defProps.getString("radio.size")
  },
  // 图标颜色
  iconColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upRadio_radio.defProps.getString("radio.iconColor")
  },
  // label的颜色
  labelColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upRadio_radio.defProps.getString("radio.labelColor")
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
  (_b = common_vendor.getCurrentInstance()) === null || _b === void 0 ? null : _b.proxy;
  const props = __props;
  const emit = __emit;
  const parentProps = common_vendor.inject("upRadioGroupProps", null);
  const parentChange = common_vendor.inject("upRadioGroupChange", null);
  const selfChecked = common_vendor.ref(false);
  const isChecked = common_vendor.computed(() => {
    if (!props.usedAlone && parentProps != null && parentProps.value != null) {
      const parentVal = parentProps.value["modelValue"];
      if (parentVal != null && props.name != null) {
        return parentVal.toString() == props.name.toString();
      }
      return false;
    }
    return selfChecked.value;
  });
  const elDisabled = common_vendor.computed(() => {
    const disabledVal = props.disabled;
    if (disabledVal != null && disabledVal.toString() != "") {
      return disabledVal.toString() == "true";
    }
    if (!props.usedAlone && parentProps != null && parentProps.value != null) {
      const parentDisabled = parentProps.value["disabled"];
      if (parentDisabled != null) {
        return parentDisabled;
      }
    }
    return false;
  });
  const elLabelDisabled = common_vendor.computed(() => {
    const labelDisabledVal = props.labelDisabled;
    if (labelDisabledVal != null && labelDisabledVal.toString() != "") {
      return labelDisabledVal.toString() == "true";
    }
    if (!props.usedAlone && parentProps != null && parentProps.value != null) {
      const parentLabelDisabled = parentProps.value["labelDisabled"];
      if (parentLabelDisabled != null) {
        return parentLabelDisabled;
      }
    }
    return false;
  });
  const elSize = common_vendor.computed(() => {
    const sizeVal = props.size;
    if (sizeVal != null && sizeVal.toString() != "") {
      return sizeVal.toString();
    }
    if (!props.usedAlone && parentProps != null && parentProps.value != null) {
      const parentSize = parentProps.value["size"];
      if (parentSize != null && parentSize.toString() != "") {
        return parentSize.toString();
      }
    }
    return "21";
  });
  const elIconSize = common_vendor.computed(() => {
    const iconSizeVal = props.iconSize;
    if (iconSizeVal != null && iconSizeVal.toString() != "") {
      return iconSizeVal.toString();
    }
    if (!props.usedAlone && parentProps != null && parentProps.value != null) {
      const parentIconSize = parentProps.value["iconSize"];
      if (parentIconSize != null && parentIconSize.toString() != "") {
        return parentIconSize.toString();
      }
    }
    return "12";
  });
  const elActiveColor = common_vendor.computed(() => {
    const activeColorVal = props.activeColor;
    if (activeColorVal != null && activeColorVal.toString() != "") {
      return activeColorVal.toString();
    }
    if (!props.usedAlone && parentProps != null && parentProps.value != null) {
      const parentActiveColor = parentProps.value["activeColor"];
      if (parentActiveColor != null && parentActiveColor.toString() != "") {
        return parentActiveColor.toString();
      }
    }
    return "#2979ff";
  });
  const elInactiveColor = common_vendor.computed(() => {
    const inactiveColorVal = props.inactiveColor;
    if (inactiveColorVal != null && inactiveColorVal.toString() != "") {
      return inactiveColorVal.toString();
    }
    if (!props.usedAlone && parentProps != null && parentProps.value != null) {
      const parentInactiveColor = parentProps.value["inactiveColor"];
      if (parentInactiveColor != null && parentInactiveColor.toString() != "") {
        return parentInactiveColor.toString();
      }
    }
    return "#c8c9cc";
  });
  const elLabelColor = common_vendor.computed(() => {
    const labelColorVal = props.labelColor;
    if (labelColorVal != null && labelColorVal.toString() != "") {
      return labelColorVal.toString();
    }
    if (!props.usedAlone && parentProps != null && parentProps.value != null) {
      const parentLabelColor = parentProps.value["labelColor"];
      if (parentLabelColor != null && parentLabelColor.toString() != "") {
        return parentLabelColor.toString();
      }
    }
    return "#606266";
  });
  const elShape = common_vendor.computed(() => {
    const shapeVal = props.shape;
    if (shapeVal != null && shapeVal.toString() != "") {
      return shapeVal.toString();
    }
    if (!props.usedAlone && parentProps != null && parentProps.value != null) {
      const parentShape = parentProps.value["shape"];
      if (parentShape != null && parentShape.toString() != "") {
        return parentShape.toString();
      }
    }
    return "circle";
  });
  const elLabelSize = common_vendor.computed(() => {
    const labelSizeVal = props.labelSize;
    if (labelSizeVal != null && labelSizeVal.toString() != "") {
      return uni_modules_uviewUltra_libs_function_index.addUnit(labelSizeVal);
    }
    if (!props.usedAlone && parentProps != null && parentProps.value != null) {
      const parentLabelSize = parentProps.value["labelSize"];
      if (parentLabelSize != null && parentLabelSize.toString() != "") {
        return uni_modules_uviewUltra_libs_function_index.addUnit(parentLabelSize);
      }
    }
    return uni_modules_uviewUltra_libs_function_index.addUnit("15");
  });
  const elIconColor = common_vendor.computed(() => {
    let iconColorStr = "#ffffff";
    const iconColorVal = props.iconColor;
    if (iconColorVal != null && iconColorVal.toString() != "") {
      iconColorStr = iconColorVal.toString();
    } else if (!props.usedAlone && parentProps != null && parentProps.value != null) {
      const parentIconColor = parentProps.value["iconColor"];
      if (parentIconColor != null && parentIconColor.toString() != "") {
        iconColorStr = parentIconColor.toString();
      }
    }
    if (elDisabled.value) {
      return isChecked.value ? elInactiveColor.value : "transparent";
    } else {
      return isChecked.value ? iconColorStr : "transparent";
    }
  });
  const iconClasses = common_vendor.computed(() => {
    let classes = [];
    classes.push("up-radio__icon-wrap--" + elShape.value);
    if (elDisabled.value) {
      classes.push("up-radio__icon-wrap--disabled");
    }
    if (isChecked.value && elDisabled.value) {
      classes.push("up-radio__icon-wrap--disabled--checked");
    }
    if (isChecked.value && !elDisabled.value && elActiveColor.value == "#2979ff") {
      classes.push("up-radio__icon-wrap--active");
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
    if (!props.usedAlone && parentProps != null && parentProps.value != null) {
      const parentPlacement = parentProps.value["iconPlacement"];
      if (parentPlacement != null && parentPlacement.toString() == "right") {
        style["marginRight"] = 0;
      }
    }
    return style;
  });
  const radioStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (!props.usedAlone && parentProps != null && parentProps.value != null) {
      const borderBottom = parentProps.value["borderBottom"];
      const placement = parentProps.value["placement"];
      if (borderBottom != null && borderBottom.toString() == "true" && placement != null && placement.toString() == "row") {
        uni_modules_uviewUltra_libs_function_index.error("检测到您将borderBottom设置为true，需要同时将up-radio-group的placement设置为column才有效");
      }
      if (borderBottom != null && borderBottom.toString() == "true" && placement != null && placement.toString() == "column") {
        style["paddingBottom"] = uni_modules_uviewUltra_libs_function_index.os() == "ios" ? "12px" : "8px";
      }
    }
    return uni_modules_uviewUltra_libs_function_index.deepMerge(style, uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle));
  });
  const iconPlacementClass = common_vendor.computed(() => {
    if (!props.usedAlone && parentProps != null && parentProps.value != null) {
      const p = parentProps.value["iconPlacement"];
      if (p != null && p.toString() != "") {
        return "up-radio-label--" + p.toString();
      }
    }
    return "up-radio-label--left";
  });
  const borderBottomClass = common_vendor.computed(() => {
    if (!props.usedAlone && parentProps != null && parentProps.value != null) {
      const borderBottom = parentProps.value["borderBottom"];
      const placement = parentProps.value["placement"];
      if (borderBottom != null && borderBottom.toString() == "true" && placement != null && placement.toString() == "column") {
        return "up-border-bottom";
      }
    }
    return "";
  });
  function emitEvent() {
    if (!isChecked.value) {
      emit("change", props.name);
      if (props.usedAlone) {
        emit("update:checked", true);
      }
      setTimeout(() => {
      }, 10);
    }
  }
  function setRadioCheckedStatus() {
    emitEvent();
    if (!props.usedAlone && parentChange != null) {
      parentChange(props.name);
    } else {
      selfChecked.value = true;
    }
  }
  function iconClickHandler(e) {
    e.stopPropagation();
    if (!elDisabled.value) {
      setRadioCheckedStatus();
    }
  }
  function wrapperClickHandler(e) {
    if (!props.usedAlone && parentProps != null && parentProps.value != null) {
      const p = parentProps.value["iconPlacement"];
      if (p != null && p.toString() == "right") {
        iconClickHandler(e);
        return null;
      }
    }
  }
  function labelClickHandler(e) {
    e.stopPropagation();
    if (!elLabelDisabled.value && !elDisabled.value) {
      setRadioCheckedStatus();
    }
  }
  const init = function() {
  };
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
        class: "up-radio__icon-wrap__icon data-v-45813f6f"
      }),
      b: common_vendor.o(iconClickHandler, "d2"),
      c: common_vendor.n(iconClasses.value),
      d: common_vendor.s(iconWrapStyle.value),
      e: common_vendor.t(__props.label),
      f: common_vendor.n(elDisabled.value ? "up-radio__label--disabled" : ""),
      g: common_vendor.o(labelClickHandler, "c2"),
      h: elDisabled.value ? elInactiveColor.value : elLabelColor.value,
      i: elLabelSize.value,
      j: elLabelSize.value,
      k: common_vendor.r("label", {
        label: __props.label,
        elDisabled: elDisabled.value
      }),
      l: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      m: common_vendor.o(wrapperClickHandler, "dc"),
      n: common_vendor.s(radioStyle.value),
      o: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      p: common_vendor.n(iconPlacementClass.value),
      q: common_vendor.n(borderBottomClass.value),
      r: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-45813f6f"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-radio/up-radio.js.map
