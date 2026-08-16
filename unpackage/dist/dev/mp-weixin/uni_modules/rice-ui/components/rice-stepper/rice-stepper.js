"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_utils_debug = require("../../libs/utils/debug.js");
require("../../libs/use/useCountDown/index.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
const uni_modules_riceUi_components_riceForm_index = require("../rice-form/index.js");
require("./type.js");
if (!Array) {
  const _easycom_rice_icon_1 = common_vendor.resolveComponent("rice-icon");
  _easycom_rice_icon_1();
}
const _easycom_rice_icon = () => "../rice-icon/rice-icon.js";
if (!Math) {
  _easycom_rice_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-stepper",
  styleIsolation: "app-and-page"
}, { __name: "rice-stepper", props: /* @__PURE__ */ common_vendor.mergeModels(new common_vendor.UTSJSONObject({
  mode: { default: "square" },
  step: { default: 1 },
  stepStrictly: { type: Boolean },
  min: { default: -Infinity },
  max: { default: Infinity },
  autoFixed: { type: Boolean, default: true },
  integer: { type: Boolean, default: false },
  decimalLength: { default: 0 },
  inputWidth: {},
  buttonSize: {},
  fontSize: { default: "14px" },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  disablePlus: { type: Boolean, default: false },
  disableMinus: { type: Boolean, default: false },
  disableInput: { type: Boolean, default: false },
  showPlus: { type: Boolean, default: true },
  showMinus: { type: Boolean, default: true },
  showInput: { type: Boolean, default: true },
  beforeChange: {},
  plusBtnStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } },
  minusBtnStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } },
  inputStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } },
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}), new common_vendor.UTSJSONObject({
  "modelValue": {
    type: Number
  },
  "modelModifiers": {}
})), emits: /* @__PURE__ */ common_vendor.mergeModels(["change", "blur", "focus", "input"], ["update:modelValue"]), setup(__props, _a) {
  var __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("stepper");
  const emit = __emit;
  const props = __props;
  const modelValue = common_vendor.useModel(__props, "modelValue");
  const formDisabled = common_vendor.inject(uni_modules_riceUi_components_riceForm_index.formDisabledInjectKey, null);
  const formReadonly = common_vendor.inject(uni_modules_riceUi_components_riceForm_index.formReadonlyInjectKey, null);
  const _readonly = common_vendor.computed(() => {
    var _a2;
    return ((_a2 = formReadonly === null || formReadonly === void 0 ? null : formReadonly.value) !== null && _a2 !== void 0 ? _a2 : false) || props.readonly;
  });
  const overMax = common_vendor.computed(() => {
    return modelValue.value != null ? modelValue.value >= props.max : false;
  });
  const overMin = common_vendor.computed(() => {
    return modelValue.value != null ? modelValue.value <= props.min : false;
  });
  const _disabledInput = common_vendor.computed(() => {
    var _a2;
    return props.disableInput || _readonly.value || props.disabled || ((_a2 = formDisabled === null || formDisabled === void 0 ? null : formDisabled.value) !== null && _a2 !== void 0 ? _a2 : false);
  });
  const _disabledPlus = common_vendor.computed(() => {
    var _a2;
    return props.disablePlus || props.disabled || overMax.value || ((_a2 = formDisabled === null || formDisabled === void 0 ? null : formDisabled.value) !== null && _a2 !== void 0 ? _a2 : false);
  });
  const _disabledMinus = common_vendor.computed(() => {
    var _a2;
    return props.disableMinus || props.disabled || overMin.value || ((_a2 = formDisabled === null || formDisabled === void 0 ? null : formDisabled.value) !== null && _a2 !== void 0 ? _a2 : false);
  });
  const _beforeChange = common_vendor.computed(() => {
    return props.beforeChange != null && typeof props.beforeChange == "function";
  });
  const inputType = common_vendor.computed(() => {
    return props.integer ? "number" : "digit";
  });
  const current = common_vendor.reactive(new common_vendor.UTSJSONObject({
    inputValue: null,
    currentValue: modelValue.value
  }));
  const displayValue = common_vendor.computed(() => {
    if (current.inputValue != null) {
      return current.inputValue;
    }
    let currentVal = current.currentValue;
    if (currentVal == null)
      return "";
    if (typeof currentVal == "number") {
      if (isNaN(currentVal))
        return "";
      if (props.decimalLength > 0) {
        currentVal = currentVal.toFixed(props.decimalLength);
      } else {
        currentVal = currentVal.toString();
      }
    }
    return currentVal;
  });
  const numPrecision = common_vendor.computed(() => {
    const stepDecimal = uni_modules_riceUi_libs_utils_basic.getPrecision(props.step);
    if (props.decimalLength > 0) {
      if (stepDecimal > props.decimalLength) {
        uni_modules_riceUi_libs_utils_debug.debugWarn("Stepper", "The decimalLength cannot be less than the number of decimal places of step!");
      }
      return props.decimalLength;
    }
    return Math.max(uni_modules_riceUi_libs_utils_basic.getPrecision(modelValue.value), stepDecimal);
  });
  function format(value, decimal = null) {
    if (decimal == null)
      decimal = numPrecision.value;
    if (decimal == 0)
      return Math.round(value);
    let snum = value.toString();
    const pointPos = snum.indexOf(".");
    if (pointPos == -1)
      return value;
    const nums = snum.replace(".", "").split("");
    const index = pointPos + decimal;
    if (index >= nums.length) {
      return value;
    }
    const length = snum.length;
    if (snum.charAt(length - 1) == "5") {
      snum = `${snum.slice(0, Math.max(0, length - 1))}6`;
    }
    return parseFloat(parseFloat(snum).toFixed(decimal));
  }
  const updateModelValue = (newVal) => {
    modelValue.value = newVal;
  };
  const getMin = () => {
    return props.min == -Infinity ? 0 : props.min;
  };
  function verifyValue(value = null, update = false) {
    const max = props.max, min = props.min, decimalLength = props.decimalLength, integer = props.integer, autoFixed = props.autoFixed;
    if (max < min) {
      uni_modules_riceUi_libs_utils_debug.debugWarn("Steeper", "min should not be greater than max.");
    }
    const val = uni_modules_riceUi_libs_utils_basic.hasStrValue(value) ? value : autoFixed ? getMin() : null;
    if (val == null || isNaN(uni_modules_riceUi_libs_utils_basic.toNum(val)))
      return null;
    let newVal = uni_modules_riceUi_libs_utils_basic.toNum(val);
    if (decimalLength != 0) {
      newVal = format(newVal, decimalLength);
    }
    if (integer) {
      newVal = Math.round(newVal);
    }
    if (autoFixed) {
      newVal = uni_modules_riceUi_libs_utils_basic.clamp(newVal, min, max);
    }
    if (!uni_modules_riceUi_libs_utils_basic.isSameValue(newVal, value) && update) {
      updateModelValue(newVal);
    }
    return newVal;
  }
  const handleChange = (newVal) => {
    const oldVal = current.currentValue;
    updateModelValue(newVal);
    if (!uni_modules_riceUi_libs_utils_basic.isSameValue(newVal, oldVal)) {
      emit("change", newVal, oldVal == null ? oldVal : uni_modules_riceUi_libs_utils_basic.toNum(oldVal));
    }
    current.currentValue = newVal;
  };
  function setCurrentValue(value = null, source = "btn") {
    const oldVal = current.currentValue;
    const newVal = verifyValue(value);
    if (newVal == null)
      return null;
    if (source == "input") {
      if (!_beforeChange.value) {
        updateModelValue(newVal);
      }
      return null;
    }
    if (uni_modules_riceUi_libs_utils_basic.isSameValue(newVal, oldVal))
      return null;
    if (!_beforeChange.value) {
      current.inputValue = null;
      handleChange(newVal);
      return null;
    }
    uni_modules_riceUi_libs_utils_basic.callInterceptor(props.beforeChange, new uni_modules_riceUi_libs_utils_basic.InterceptorOption({
      args: null,
      canceled: null,
      error: null,
      undone: null,
      done() {
        handleChange(newVal);
      },
      complete() {
        current.inputValue = null;
      }
    }));
  }
  const setCurrentByModelValue = () => {
    if (!uni_modules_riceUi_libs_utils_basic.isSameValue(modelValue.value, current.currentValue)) {
      current.currentValue = modelValue.value;
    }
  };
  const increase = (e) => {
    e.stopPropagation();
    if (_disabledPlus.value || _readonly.value)
      return null;
    const n = parseFloat(displayValue.value);
    const value = isNaN(n) ? getMin() : n;
    const newVal = format(value + props.step, null);
    setCurrentValue(newVal);
    setCurrentByModelValue();
  };
  const decrease = (e) => {
    e.stopPropagation();
    if (_disabledMinus.value || _readonly.value)
      return null;
    const n = parseFloat(displayValue.value);
    const value = isNaN(n) ? getMin() : n;
    const newVal = format(value + props.step * -1, null);
    setCurrentValue(newVal);
    setCurrentByModelValue();
  };
  const onInput = (e) => {
    const value = e.detail.value;
    current.inputValue = value;
    setCurrentValue(value, "input");
    emit("input", value);
  };
  const onFocus = (e) => {
    common_vendor.nextTick$1(() => {
      return emit("focus", e);
    });
  };
  const isEmptyStr = (val = null) => {
    return val === "";
  };
  const onBlur = (e) => {
    if (!_beforeChange.value) {
      current.inputValue = null;
    }
    const value = e.detail.value;
    const newVal = uni_modules_riceUi_libs_utils_basic.hasStrValue(value) ? parseFloat(value) : "";
    if (typeof newVal == "number" && !isNaN(newVal) || isEmptyStr(newVal)) {
      setCurrentValue(newVal, "blur");
    }
    setCurrentByModelValue();
    common_vendor.nextTick$1(() => {
      return emit("blur", e);
    });
  };
  common_vendor.watch(modelValue, (newVal = null, oldVal = null) => {
    const value = verifyValue(newVal, true);
    if (current.inputValue == null && !uni_modules_riceUi_libs_utils_basic.isSameValue(value, oldVal)) {
      current.currentValue = value;
    }
  }, {
    immediate: true
  });
  common_vendor.watch([
    () => {
      return props.integer;
    },
    () => {
      return props.decimalLength;
    },
    () => {
      return props.min;
    },
    () => {
      return props.max;
    }
  ], () => {
    setCurrentValue(modelValue.value, "watch");
  });
  const getIconColor = (type) => {
    const textStyle = uni_modules_riceUi_libs_utils_basic.splitCssProperty(type == "plus" ? props.plusBtnStyle : props.minusBtnStyle).textCssProperty;
    if (typeof textStyle["color"] == "string") {
      return textStyle["color"];
    }
    if (props.mode == "round") {
      return type == "minus" ? "var(--rice-primary-color)" : "var(--rice-text-color-white)";
    }
    return "var(--rice-text-color)";
  };
  const btnStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.buttonSize != null) {
      const size = uni_modules_riceUi_libs_utils_basic.addUnit(props.buttonSize);
      css.set("height", size);
      css.set("width", size);
    }
    return css;
  });
  const inputBoxStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.buttonSize != null) {
      css.set("height", uni_modules_riceUi_libs_utils_basic.addUnit(props.buttonSize));
    }
    if (props.inputWidth != null) {
      css.set("width", uni_modules_riceUi_libs_utils_basic.addUnit(props.inputWidth));
    }
    css.set("font-size", uni_modules_riceUi_libs_utils_basic.addUnit(props.fontSize));
    return css;
  });
  const stepperClass = common_vendor.computed(() => {
    return [
      ns.b(""),
      ns.theme(),
      ns.is("disabled", props.disabled),
      ns.m(props.mode)
    ];
  });
  const minusClass = common_vendor.computed(() => {
    return [
      ns.e("minus"),
      ns.is("__minus--disabled", _disabledMinus.value && !props.disabled),
      ns.e(`minus--${props.mode}`)
    ];
  });
  const plusClass = common_vendor.computed(() => {
    return [
      ns.e("plus"),
      ns.is("__plus--disabled", _disabledPlus.value && !props.disabled),
      ns.e(`plus--${props.mode}`)
    ];
  });
  const inputClass = common_vendor.computed(() => {
    const basic = [ns.e("input"), ns.e(`input--${props.mode}`)];
    return basic;
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: _ctx.showMinus
    }, _ctx.showMinus ? {
      b: common_vendor.p({
        name: "minus",
        size: _ctx.fontSize,
        color: getIconColor("minus"),
        class: "data-v-9c9cdab4"
      }),
      c: common_vendor.n(common_vendor.unref(minusClass)),
      d: common_vendor.s(common_vendor.unref(btnStyle)),
      e: common_vendor.s(common_vendor.unref(uni_modules_riceUi_libs_utils_basic.splitCssProperty)(_ctx.minusBtnStyle).rectCssProperty),
      f: common_vendor.o(decrease, "20")
    } : {}, {
      g: _ctx.showInput
    }, _ctx.showInput ? {
      h: common_vendor.unref(inputType),
      i: common_vendor.n(common_vendor.unref(inputClass)),
      j: common_vendor.unref(displayValue),
      k: common_vendor.s(common_vendor.unref(inputBoxStyle)),
      l: common_vendor.s(_ctx.inputStyle),
      m: common_vendor.unref(_disabledInput),
      n: common_vendor.o(onInput, "b4"),
      o: common_vendor.o(onFocus, "de"),
      p: common_vendor.o(onBlur, "2f")
    } : {}, {
      q: _ctx.showPlus
    }, _ctx.showPlus ? {
      r: common_vendor.p({
        name: "plus",
        size: _ctx.fontSize,
        color: getIconColor("plus"),
        class: "data-v-9c9cdab4"
      }),
      s: common_vendor.n(common_vendor.unref(plusClass)),
      t: common_vendor.s(common_vendor.unref(btnStyle)),
      v: common_vendor.s(common_vendor.unref(uni_modules_riceUi_libs_utils_basic.splitCssProperty)(_ctx.plusBtnStyle).rectCssProperty),
      w: common_vendor.o(increase, "da")
    } : {}, {
      x: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      y: common_vendor.n(common_vendor.unref(stepperClass)),
      z: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      A: common_vendor.s(_ctx.customStyle),
      B: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9c9cdab4"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-stepper/rice-stepper.js.map
