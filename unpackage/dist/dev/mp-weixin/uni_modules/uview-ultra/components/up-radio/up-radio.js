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
  name: "up-radio"
}, { __name: "up-radio", props: {
  name: {
    type: [String, Number, Boolean],
    default: ""
  },
  shape: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: false
  },
  labelDisabled: {
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
  labelSize: {
    type: [String, Number],
    default: ""
  },
  label: {
    type: [String, Number],
    default: ""
  },
  size: {
    type: [String, Number],
    default: ""
  },
  iconColor: {
    type: String,
    default: ""
  },
  labelColor: {
    type: String,
    default: ""
  },
  customStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  }
}, emits: ["change"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const instance = common_vendor.getCurrentInstance();
  const parentGroup = common_vendor.inject("upRadioGroup", null);
  const checked = common_vendor.computed(() => {
    if (parentGroup != null && parentGroup.props != null) {
      const groupVal = parentGroup.props.modelValue;
      if (groupVal != null && props.name != null) {
        return groupVal.toString() == props.name.toString();
      }
    }
    return false;
  });
  const elDisabled = common_vendor.computed(() => {
    var _a2;
    if (props.disabled)
      return true;
    if (parentGroup != null && parentGroup.props != null) {
      return (_a2 = parentGroup.props.disabled) !== null && _a2 !== void 0 ? _a2 : false;
    }
    return false;
  });
  const elLabelDisabled = common_vendor.computed(() => {
    var _a2;
    if (props.labelDisabled)
      return true;
    if (parentGroup != null && parentGroup.props != null) {
      return (_a2 = parentGroup.props.labelDisabled) !== null && _a2 !== void 0 ? _a2 : false;
    }
    return false;
  });
  const elSize = common_vendor.computed(() => {
    if (props.size != "")
      return uni_modules_uviewUltra_libs_function_index.addUnit(props.size);
    if (parentGroup != null && parentGroup.props != null && parentGroup.props.size != "") {
      return uni_modules_uviewUltra_libs_function_index.addUnit(parentGroup.props.size);
    }
    return "21px";
  });
  const elIconSize = common_vendor.computed(() => {
    if (props.iconSize != "")
      return uni_modules_uviewUltra_libs_function_index.addUnit(props.iconSize);
    if (parentGroup != null && parentGroup.props != null && parentGroup.props.iconSize != "") {
      return uni_modules_uviewUltra_libs_function_index.addUnit(parentGroup.props.iconSize);
    }
    return "12px";
  });
  const elActiveColor = common_vendor.computed(() => {
    if (props.activeColor != "")
      return props.activeColor;
    if (parentGroup != null && parentGroup.props != null && parentGroup.props.activeColor != "") {
      return parentGroup.props.activeColor;
    }
    return "";
  });
  const elInactiveColor = common_vendor.computed(() => {
    if (props.inactiveColor != "")
      return props.inactiveColor;
    if (parentGroup != null && parentGroup.props != null && parentGroup.props.inactiveColor != "") {
      return parentGroup.props.inactiveColor;
    }
    return "#c8c9cc";
  });
  const elLabelColor = common_vendor.computed(() => {
    if (props.labelColor != "")
      return props.labelColor;
    if (parentGroup != null && parentGroup.props != null && parentGroup.props.labelColor != "") {
      return parentGroup.props.labelColor;
    }
    return "#606266";
  });
  const elShape = common_vendor.computed(() => {
    if (props.shape != "")
      return props.shape;
    if (parentGroup != null && parentGroup.props != null && parentGroup.props.shape != "") {
      return parentGroup.props.shape;
    }
    return "circle";
  });
  const elLabelSize = common_vendor.computed(() => {
    if (props.labelSize != "")
      return uni_modules_uviewUltra_libs_function_index.addUnit(props.labelSize);
    if (parentGroup != null && parentGroup.props != null && parentGroup.props.labelSize != "") {
      return uni_modules_uviewUltra_libs_function_index.addUnit(parentGroup.props.labelSize);
    }
    return "15px";
  });
  const elIconColor = common_vendor.computed(() => {
    let iconColorStr = "#ffffff";
    if (props.iconColor != "") {
      iconColorStr = props.iconColor;
    } else if (parentGroup != null && parentGroup.props != null && parentGroup.props.iconColor != "") {
      iconColorStr = parentGroup.props.iconColor;
    }
    if (elDisabled.value) {
      return checked.value ? elInactiveColor.value : "transparent";
    }
    return checked.value ? iconColorStr : "transparent";
  });
  const elIconPlacement = common_vendor.computed(() => {
    if (parentGroup != null && parentGroup.props != null && parentGroup.props.iconPlacement != "") {
      return parentGroup.props.iconPlacement;
    }
    return "left";
  });
  const elBorderBottom = common_vendor.computed(() => {
    var _a2;
    if (parentGroup != null && parentGroup.props != null) {
      return (_a2 = parentGroup.props.borderBottom) !== null && _a2 !== void 0 ? _a2 : false;
    }
    return false;
  });
  const elPlacement = common_vendor.computed(() => {
    var _a2;
    if (parentGroup != null && parentGroup.props != null) {
      return (_a2 = parentGroup.props.placement) !== null && _a2 !== void 0 ? _a2 : "row";
    }
    return "row";
  });
  const iconClasses = common_vendor.computed(() => {
    let classes = ["up-radio__icon-wrap--" + elShape.value];
    if (elDisabled.value) {
      classes.push("up-radio__icon-wrap--disabled");
    }
    if (checked.value && elDisabled.value) {
      classes.push("up-radio__icon-wrap--disabled--checked");
    }
    if (checked.value && !elDisabled.value) {
      classes.push("up-radio__icon-wrap--checked");
    }
    return classes.join(" ");
  });
  const iconWrapStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (checked.value && !elDisabled.value) {
      if (elActiveColor.value != "") {
        style["backgroundColor"] = elActiveColor.value;
        style["borderColor"] = elActiveColor.value;
      }
    } else if (checked.value && elDisabled.value) {
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
  const radioStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (elBorderBottom.value && elPlacement.value == "column") {
      style["paddingBottom"] = uni_modules_uviewUltra_libs_function_index.os() == "ios" ? "12px" : "8px";
    }
    return uni_modules_uviewUltra_libs_function_index.deepMerge(style, uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle));
  });
  function setRadioCheckedStatus() {
    if (parentGroup != null) {
      parentGroup.onRadioSelected(props.name);
    }
    emit("change", props.name);
    common_vendor.nextTick$1(() => {
      uni_modules_uviewUltra_libs_function_index.formValidate(instance === null || instance === void 0 ? null : instance.proxy, "change");
    });
  }
  function iconClickHandler(e) {
    if (!elDisabled.value) {
      setRadioCheckedStatus();
    }
  }
  function wrapperClickHandler(e) {
    if (!elLabelDisabled.value && !elDisabled.value) {
      setRadioCheckedStatus();
    }
  }
  function labelClickHandler(e) {
    if (!elLabelDisabled.value && !elDisabled.value) {
      setRadioCheckedStatus();
    }
  }
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.p({
        name: "checkbox-mark",
        size: elIconSize.value,
        color: elIconColor.value,
        class: "up-radio__icon-wrap__icon data-v-45813f6f"
      }),
      b: common_vendor.o(iconClickHandler, "6d"),
      c: common_vendor.n(iconClasses.value),
      d: common_vendor.s(iconWrapStyle.value),
      e: common_vendor.t(__props.label),
      f: common_vendor.n(elDisabled.value ? "up-radio__label--disabled" : ""),
      g: common_vendor.o(labelClickHandler, "31"),
      h: elDisabled.value ? elInactiveColor.value : elLabelColor.value,
      i: elLabelSize.value,
      j: elLabelSize.value,
      k: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      l: common_vendor.o(wrapperClickHandler, "dc"),
      m: common_vendor.s(radioStyle.value),
      n: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      o: common_vendor.n("up-radio-label--" + elIconPlacement.value),
      p: common_vendor.n(elBorderBottom.value && elPlacement.value == "column" ? "up-border-bottom" : ""),
      q: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-45813f6f"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-radio/up-radio.js.map
