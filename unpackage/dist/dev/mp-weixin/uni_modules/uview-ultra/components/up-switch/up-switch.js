"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
if (!Array) {
  const _easycom_up_loading_icon_1 = common_vendor.resolveComponent("up-loading-icon");
  _easycom_up_loading_icon_1();
}
const _easycom_up_loading_icon = () => "../up-loading-icon/up-loading-icon.js";
if (!Math) {
  _easycom_up_loading_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-switch"
}, { __name: "up-switch", props: {
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: [String, Number],
    default: 25
  },
  activeColor: {
    type: String,
    default: "#2979ff"
  },
  inactiveColor: {
    type: String,
    default: "#ffffff"
  },
  modelValue: {
    type: [Boolean, String, Number],
    default: false
  },
  activeValue: {
    type: [Boolean, String, Number],
    default: true
  },
  inactiveValue: {
    type: [Boolean, String, Number],
    default: false
  },
  asyncChange: {
    type: Boolean,
    default: false
  },
  space: {
    type: [String, Number],
    default: 0
  },
  customStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  }
}, emits: ["update:modelValue", "change"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const isActive = common_vendor.computed(() => {
    return props.modelValue == props.activeValue;
  });
  const customInactiveColor = common_vendor.computed(() => {
    return props.inactiveColor !== "#fff" && props.inactiveColor !== "#ffffff";
  });
  const switchClass = common_vendor.computed(() => {
    let classes = ["up-switch", "cursor-pointer"];
    if (props.disabled) {
      classes.push("up-switch--disabled");
    }
    if (isActive.value) {
      classes.push("up-switch--on");
    } else {
      classes.push("up-switch--off");
    }
    return classes.join(" ");
  });
  const switchStyle = common_vendor.computed(() => {
    let style = new common_vendor.UTSJSONObject({});
    if (props.size.toString() != "25") {
      style["width"] = uni_modules_uviewUltra_libs_function_index.addUnit(parseInt(props.size.toString()) * 2 + 2);
      style["height"] = uni_modules_uviewUltra_libs_function_index.addUnit(parseInt(props.size.toString()) + 2);
    }
    if (isActive.value) {
      style["borderColor"] = "rgba(0, 0, 0, 0)";
    } else {
      if (customInactiveColor.value) {
        style["borderColor"] = "rgba(0, 0, 0, 0)";
      } else {
        style["borderColor"] = "rgba(0, 0, 0, 0.12)";
      }
    }
    return style;
  });
  const bgActiveStyle = common_vendor.computed(() => {
    let style = new common_vendor.UTSJSONObject({});
    style["width"] = uni_modules_uviewUltra_libs_function_index.addUnit(parseInt(props.size.toString()) * 2 + 2);
    style["height"] = uni_modules_uviewUltra_libs_function_index.addUnit(parseInt(props.size.toString()) + 2);
    if (props.activeColor != "#2979ff") {
      style["backgroundColor"] = props.activeColor;
    }
    return style;
  });
  const nodeStyle = common_vendor.computed(() => {
    let style = new common_vendor.UTSJSONObject({});
    const sizeVal = parseInt(props.size.toString());
    const spaceVal = parseInt(props.space.toString());
    style["width"] = uni_modules_uviewUltra_libs_function_index.addUnit(sizeVal - spaceVal);
    style["height"] = uni_modules_uviewUltra_libs_function_index.addUnit(sizeVal - spaceVal);
    const translateX = isActive.value ? uni_modules_uviewUltra_libs_function_index.addUnit(props.space) : uni_modules_uviewUltra_libs_function_index.addUnit(props.size);
    style["transform"] = `translateX(-${translateX})`;
    return style;
  });
  const bgStyle = common_vendor.computed(() => {
    let style = new common_vendor.UTSJSONObject({});
    style["width"] = uni_modules_uviewUltra_libs_function_index.addUnit(parseInt(props.size.toString()) * 2);
    style["height"] = uni_modules_uviewUltra_libs_function_index.addUnit(parseInt(props.size.toString()));
    style["backgroundColor"] = props.inactiveColor;
    style["transform"] = `scale(${isActive.value ? 0 : 1})`;
    return style;
  });
  function clickHandler() {
    if (!props.disabled && !props.loading) {
      const oldValue = isActive.value ? props.inactiveValue : props.activeValue;
      if (!props.asyncChange) {
        emit("update:modelValue", oldValue);
      }
      common_vendor.nextTick$1(() => {
        emit("change", oldValue);
      });
    }
  }
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: isActive.value
    }, isActive.value ? {
      b: common_vendor.s(bgActiveStyle.value)
    } : {}, {
      c: !isActive.value
    }, !isActive.value ? {
      d: common_vendor.s(bgStyle.value)
    } : {}, {
      e: common_vendor.p({
        show: __props.loading,
        mode: "circle",
        timingFunction: "linear",
        color: __props.modelValue == __props.activeValue ? __props.activeColor : "#AAABAD",
        size: parseInt(common_vendor.unref(uni_modules_uviewUltra_libs_function_index.getPx)(__props.size)) * 0.6,
        class: "data-v-83df4f71"
      }),
      f: common_vendor.n(__props.modelValue == __props.activeValue ? "up-switch__node--on" : ""),
      g: common_vendor.s(nodeStyle.value),
      h: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      i: common_vendor.n(switchClass.value),
      j: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      k: common_vendor.s(switchStyle.value),
      l: common_vendor.s(common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addStyle)(__props.customStyle)),
      m: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      n: common_vendor.o(clickHandler, "c2")
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-83df4f71"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-switch/up-switch.js.map
