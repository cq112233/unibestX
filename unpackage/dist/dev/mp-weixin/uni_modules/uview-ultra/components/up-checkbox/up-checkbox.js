"use strict";
const common_vendor = require("../../../../common/vendor.js");
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
  name: "up-checkbox"
}, { __name: "up-checkbox", props: {
  name: {
    type: [String, Number, Boolean],
    default: ""
  },
  shape: {
    type: String,
    default: ""
  },
  size: {
    type: [String, Number],
    default: ""
  },
  checked: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  activeColor: {
    type: String,
    default: ""
  },
  inactiveColor: {
    type: String,
    default: ""
  },
  iconSize: {
    type: [String, Number],
    default: ""
  },
  iconColor: {
    type: String,
    default: ""
  },
  label: {
    type: [String, Number],
    default: ""
  },
  labelColor: {
    type: String,
    default: ""
  },
  labelSize: {
    type: [String, Number],
    default: ""
  },
  labelDisabled: {
    type: Boolean,
    default: false
  },
  customStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  },
  usedAlone: {
    type: Boolean,
    default: false
  }
}, emits: ["change", "update:checked"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const instance = common_vendor.getCurrentInstance();
  const parentGroup = common_vendor.inject("upCheckboxGroup", null);
  const localChecked = common_vendor.ref(props.checked);
  common_vendor.watch(() => {
    return props.checked;
  }, (val) => {
    localChecked.value = val;
  });
  const isChecked = common_vendor.computed(() => {
    if (props.usedAlone || parentGroup == null || parentGroup.props == null) {
      return localChecked.value;
    }
    const groupVal = parentGroup.props.modelValue;
    if (groupVal != null && props.name != null) {
      return groupVal.some((element = null) => {
        return element.toString() == props.name.toString();
      });
    }
    return false;
  });
  const elDisabled = common_vendor.computed(() => {
    var _a2;
    if (props.disabled)
      return true;
    if (!props.usedAlone && parentGroup != null && parentGroup.props != null) {
      return (_a2 = parentGroup.props.disabled) !== null && _a2 !== void 0 ? _a2 : false;
    }
    return false;
  });
  const elLabelDisabled = common_vendor.computed(() => {
    var _a2;
    if (props.labelDisabled)
      return true;
    if (!props.usedAlone && parentGroup != null && parentGroup.props != null) {
      return (_a2 = parentGroup.props.labelDisabled) !== null && _a2 !== void 0 ? _a2 : false;
    }
    return false;
  });
  const elSize = common_vendor.computed(() => {
    if (props.size != "")
      return uni_modules_uviewUltra_libs_function_index.addUnit(props.size);
    if (!props.usedAlone && parentGroup != null && parentGroup.props != null && parentGroup.props.size != "") {
      return uni_modules_uviewUltra_libs_function_index.addUnit(parentGroup.props.size);
    }
    return "21px";
  });
  const elIconSize = common_vendor.computed(() => {
    if (props.iconSize != "")
      return uni_modules_uviewUltra_libs_function_index.addUnit(props.iconSize);
    if (!props.usedAlone && parentGroup != null && parentGroup.props != null && parentGroup.props.iconSize != "") {
      return uni_modules_uviewUltra_libs_function_index.addUnit(parentGroup.props.iconSize);
    }
    return "12px";
  });
  const elActiveColor = common_vendor.computed(() => {
    if (props.activeColor != "")
      return props.activeColor;
    if (!props.usedAlone && parentGroup != null && parentGroup.props != null && parentGroup.props.activeColor != "") {
      return parentGroup.props.activeColor;
    }
    return "";
  });
  const elInactiveColor = common_vendor.computed(() => {
    if (props.inactiveColor != "")
      return props.inactiveColor;
    if (!props.usedAlone && parentGroup != null && parentGroup.props != null && parentGroup.props.inactiveColor != "") {
      return parentGroup.props.inactiveColor;
    }
    return "#c8c9cc";
  });
  const elLabelColor = common_vendor.computed(() => {
    if (props.labelColor != "")
      return props.labelColor;
    if (!props.usedAlone && parentGroup != null && parentGroup.props != null && parentGroup.props.labelColor != "") {
      return parentGroup.props.labelColor;
    }
    return "#606266";
  });
  const elShape = common_vendor.computed(() => {
    if (props.shape != "")
      return props.shape;
    if (!props.usedAlone && parentGroup != null && parentGroup.props != null && parentGroup.props.shape != "") {
      return parentGroup.props.shape;
    }
    return "circle";
  });
  const elLabelSize = common_vendor.computed(() => {
    if (props.labelSize != "")
      return uni_modules_uviewUltra_libs_function_index.addUnit(props.labelSize);
    if (!props.usedAlone && parentGroup != null && parentGroup.props != null && parentGroup.props.labelSize != "") {
      return uni_modules_uviewUltra_libs_function_index.addUnit(parentGroup.props.labelSize);
    }
    return "15px";
  });
  const elIconColor = common_vendor.computed(() => {
    const iconColor = props.iconColor != "" ? props.iconColor : !props.usedAlone && parentGroup != null && parentGroup.props != null && parentGroup.props.iconColor != "" ? parentGroup.props.iconColor : "#ffffff";
    if (elDisabled.value) {
      return isChecked.value ? elInactiveColor.value : "transparent";
    }
    return isChecked.value ? iconColor : "transparent";
  });
  const elIconPlacement = common_vendor.computed(() => {
    if (!props.usedAlone && parentGroup != null && parentGroup.props != null && parentGroup.props.iconPlacement != "") {
      return parentGroup.props.iconPlacement;
    }
    return "left";
  });
  const elBorderBottom = common_vendor.computed(() => {
    var _a2;
    if (!props.usedAlone && parentGroup != null && parentGroup.props != null) {
      return (_a2 = parentGroup.props.borderBottom) !== null && _a2 !== void 0 ? _a2 : false;
    }
    return false;
  });
  const elPlacement = common_vendor.computed(() => {
    var _a2;
    if (!props.usedAlone && parentGroup != null && parentGroup.props != null) {
      return (_a2 = parentGroup.props.placement) !== null && _a2 !== void 0 ? _a2 : "row";
    }
    return "row";
  });
  const iconClasses = common_vendor.computed(() => {
    let classes = ["up-checkbox__icon-wrap--" + elShape.value];
    if (elDisabled.value) {
      classes.push("up-checkbox__icon-wrap--disabled");
    }
    if (isChecked.value && elDisabled.value) {
      classes.push("up-checkbox__icon-wrap--disabled--checked");
    }
    if (isChecked.value && !elDisabled.value) {
      classes.push("up-checkbox__icon-wrap--checked");
    }
    return classes.join(" ");
  });
  const iconWrapStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (isChecked.value && !elDisabled.value) {
      if (elActiveColor.value != "") {
        style["backgroundColor"] = elActiveColor.value;
        style["borderColor"] = elActiveColor.value;
      }
    } else if (isChecked.value && elDisabled.value) {
      style["backgroundColor"] = "#ebedf0";
      style["borderColor"] = "#c8c9cc";
    } else {
      style["backgroundColor"] = "#ffffff";
      style["borderColor"] = elInactiveColor.value;
    }
    style["width"] = elSize.value;
    style["height"] = elSize.value;
    if (elIconPlacement.value == "right") {
      style["marginRight"] = 0;
    }
    return style;
  });
  const checkboxStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (elBorderBottom.value && elPlacement.value == "column") {
      style["paddingBottom"] = "8px";
    }
    return uni_modules_uviewUltra_libs_function_index.deepMerge(style, uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle));
  });
  function setCheckboxCheckedStatus() {
    if (props.usedAlone || parentGroup == null) {
      localChecked.value = !localChecked.value;
      emit("change", localChecked.value);
      emit("update:checked", localChecked.value);
    } else {
      parentGroup.onCheckboxToggle(props.name);
      emit("change", !isChecked.value);
    }
    common_vendor.nextTick$1(() => {
      uni_modules_uviewUltra_libs_function_index.formValidate(instance === null || instance === void 0 ? null : instance.proxy, "change");
    });
  }
  function iconClickHandler(e) {
    if (!elDisabled.value) {
      setCheckboxCheckedStatus();
    }
  }
  function wrapperClickHandler(e) {
    iconClickHandler();
  }
  function labelClickHandler(e) {
    if (!elLabelDisabled.value && !elDisabled.value) {
      setCheckboxCheckedStatus();
    }
  }
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.p({
        name: "checkbox-mark",
        size: elIconSize.value,
        color: elIconColor.value,
        class: "up-checkbox__icon-wrap__icon data-v-819863e8"
      }),
      b: common_vendor.o(iconClickHandler, "61"),
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
      o: common_vendor.n(`up-checkbox-label--` + elIconPlacement.value),
      p: common_vendor.n(elBorderBottom.value && elPlacement.value == "column" ? "up-border-bottom" : ""),
      q: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-819863e8"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-checkbox/up-checkbox.js.map
