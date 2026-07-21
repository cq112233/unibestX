"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/function/test.js");
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
      return new UTSJSONObject({});
    }
  },
  // 是否独立使用
  usedAlone: {
    type: Boolean,
    default: false
  }
}, emits: ["change", "update:checked"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const _b = uni_modules_uviewUltra_libs_composable_useUltraUI.useUltraUI(), parent = _b.parent, parentData = _b.parentData, getParentData = _b.getParentData;
  const instance = common_vendor.getCurrentInstance().proxy;
  const props = __props;
  const emit = __emit;
  const isChecked = common_vendor.ref(false);
  const elDisabled = common_vendor.computed(() => {
    let disabledStr = props.disabled;
    if (disabledStr != "") {
      if (disabledStr == "true") {
        return true;
      } else {
        return false;
      }
    } else {
      return parentData.value["disabled"] != null ? parentData.value["disabled"] : false;
    }
  });
  const elLabelDisabled = common_vendor.computed(() => {
    let labelDisabledStr = props.labelDisabled;
    if (labelDisabledStr != "") {
      if (labelDisabledStr == "true") {
        return true;
      } else {
        return false;
      }
    } else {
      return parentData.value["labelDisabled"] != null ? parentData.value["labelDisabled"] : false;
    }
  });
  const elSize = common_vendor.computed(() => {
    return props.size.toString() != "" ? props.size.toString() : parentData.value["size"] != null ? parentData.value["size"].toString() : "21";
  });
  const elIconSize = common_vendor.computed(() => {
    return props.iconSize.toString() != "" ? props.iconSize.toString() : parentData.value["iconSize"] != null ? parentData.value["iconSize"].toString() : "12";
  });
  const elActiveColor = common_vendor.computed(() => {
    const activeColorProp = props.activeColor;
    if (activeColorProp != null && activeColorProp.toString() != "") {
      return activeColorProp.toString();
    }
    const parentActiveColor = parentData.value["activeColor"];
    if (parentActiveColor != null && parentActiveColor.toString() != "") {
      return parentActiveColor.toString();
    }
    return "#2979ff";
  });
  const elInactiveColor = common_vendor.computed(() => {
    const inactiveColorProp = props.inactiveColor;
    if (inactiveColorProp != null && inactiveColorProp.toString() != "") {
      return inactiveColorProp.toString();
    }
    const parentInactiveColor = parentData.value["inactiveColor"];
    if (parentInactiveColor != null && parentInactiveColor.toString() != "") {
      return parentInactiveColor.toString();
    }
    return "#c8c9cc";
  });
  const elLabelColor = common_vendor.computed(() => {
    return props.labelColor != null ? props.labelColor.toString() : parentData.value["labelColor"] != null ? parentData.value["labelColor"].toString() : "#606266";
  });
  const elShape = common_vendor.computed(() => {
    return props.shape != null ? props.shape.toString() : parentData.value["shape"] != null ? parentData.value["shape"].toString() : "circle";
  });
  const elLabelSize = common_vendor.computed(() => {
    return uni_modules_uviewUltra_libs_function_index.addUnit(props.labelSize != null ? props.labelSize.toString() : parentData.value["labelSize"] != null ? parentData.value["labelSize"].toString() : "15");
  });
  const elIconColor = common_vendor.computed(() => {
    const iconColor = props.iconColor.toString() != "" ? props.iconColor.toString() : parentData.value["iconColor"] != null ? parentData.value["iconColor"].toString() : "#ffffff";
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
    let classStr = "";
    classStr = classes.join(" ");
    return classStr;
  });
  const iconWrapStyle = common_vendor.computed(() => {
    const style = new UTSJSONObject({});
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
    if (!props.usedAlone && parentData.value != null && parentData.value["iconPlacement"] != null) {
      if (parentData.value["iconPlacement"].toString() == "right") {
        style["marginRight"] = 0;
      }
    }
    return style;
  });
  const checkboxStyle = common_vendor.computed(() => {
    const style = new UTSJSONObject({});
    if (!props.usedAlone && parentData.value != null && parentData.value["borderBottom"] != null) {
      if (parentData.value["borderBottom"].toString() == "true" && parentData.value["placement"] == "row") {
        uni_modules_uviewUltra_libs_function_index.error("检测到您将borderBottom设置为true，需要同时将up-checkbox-group的placement设置为column才有效");
      }
      if (parentData.value["borderBottom"].toString() == "true" && parentData.value["placement"] == "column") {
        style["paddingBottom"] = "8px";
      }
    }
    return uni_modules_uviewUltra_libs_function_index.deepMerge(style, uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle));
  });
  const init = function() {
    if (!props.usedAlone) {
      parentData.value = new UTSJSONObject({
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
      getParentData("up-checkbox-group", instance, false);
      if (parent.value == null) {
        uni_modules_uviewUltra_libs_function_index.error("up-checkbox必须搭配up-checkbox-group组件使用");
      }
      const value = parentData.value["modelValue"];
      if (props.checked) {
        isChecked.value = true;
      } else if (value != null) {
        const valueTmp = value;
        if (valueTmp != null) {
          const even = (element = null) => {
            return element.toString() == props.name.toString();
          };
          isChecked.value = valueTmp.some(even);
        }
      }
    } else {
      if (props.checked) {
        isChecked.value = true;
      }
    }
  };
  function emitEvent() {
    emit("change", isChecked.value);
    if (props.usedAlone) {
      emit("update:checked", isChecked.value);
    }
    setTimeout(() => {
    }, 10);
  }
  function setRadioCheckedStatus() {
    isChecked.value = !isChecked.value;
    emitEvent();
    if (!props.usedAlone && parent.value != null) {
      parent.value.$callMethod("unCheckedOther", instance);
    }
  }
  function iconClickHandler(e) {
    e.stopPropagation();
    if (!elDisabled.value) {
      setRadioCheckedStatus();
    }
  }
  function wrapperClickHandler(e) {
    if (!props.usedAlone && parentData.value != null && parentData.value["iconPlacement"] != null) {
      if (parentData.value["iconPlacement"].toString() == "right") {
        iconClickHandler(e);
      } else {
        iconClickHandler(e);
      }
    } else {
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
    if (newVal != isChecked.value) {
      isChecked.value = newVal;
    }
  });
  common_vendor.onMounted(() => {
    init();
  });
  const getInternalState = () => {
    return new UTSJSONObject({
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
      b: common_vendor.o(iconClickHandler, "87"),
      c: common_vendor.n(iconClasses.value),
      d: common_vendor.s(iconWrapStyle.value),
      e: common_vendor.t(__props.label),
      f: common_vendor.o(labelClickHandler, "aa"),
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
      o: common_vendor.n(`up-checkbox-label--` + (common_vendor.unref(parentData)["iconPlacement"] != null ? common_vendor.unref(parentData)["iconPlacement"].toString() : "")),
      p: common_vendor.n(common_vendor.unref(parentData)["borderBottom"] != false && common_vendor.unref(parentData)["placement"] != null && common_vendor.unref(parentData)["placement"].toString() == "column" ? "up-border-bottom" : ""),
      q: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-819863e8"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-checkbox/up-checkbox.js.map
