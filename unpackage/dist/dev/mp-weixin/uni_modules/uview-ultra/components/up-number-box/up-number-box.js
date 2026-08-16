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
  name: "up-number-box"
}, { __name: "up-number-box", props: {
  name: {
    type: [String, Number],
    default: ""
  },
  modelValue: {
    type: [String, Number],
    default: 0
  },
  min: {
    type: [String, Number],
    default: 1
  },
  max: {
    type: [String, Number],
    default: 999999999
  },
  step: {
    type: [String, Number],
    default: 1
  },
  integer: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  disabledInput: {
    type: Boolean,
    default: false
  },
  asyncChange: {
    type: Boolean,
    default: false
  },
  inputWidth: {
    type: [String, Number],
    default: 35
  },
  showMinus: {
    type: Boolean,
    default: true
  },
  showPlus: {
    type: Boolean,
    default: true
  },
  decimalLength: {
    type: [String, Number],
    default: 0
  },
  longPress: {
    type: Boolean,
    default: true
  },
  color: {
    type: String,
    default: "#323233"
  },
  buttonWidth: {
    type: [String, Number],
    default: 35
  },
  buttonSize: {
    type: [String, Number],
    default: 30
  },
  buttonRadius: {
    type: String,
    default: "4px"
  },
  bgColor: {
    type: String,
    default: "#EBECEE"
  },
  disabledBgColor: {
    type: String,
    default: "#f7f8fa"
  },
  inputBgColor: {
    type: String,
    default: ""
  },
  cursorSpacing: {
    type: [String, Number],
    default: 100
  },
  disablePlus: {
    type: Boolean,
    default: false
  },
  disableMinus: {
    type: Boolean,
    default: false
  },
  iconStyle: {
    type: [Object, String],
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  },
  miniMode: {
    type: Boolean,
    default: false
  }
}, emits: ["update:modelValue", "focus", "blur", "overlimit", "change", "plus", "minus"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const type = common_vendor.ref("");
  const currentValue = common_vendor.ref("");
  const longPressTimer = common_vendor.ref(null);
  const hideMinus = common_vendor.computed(() => {
    return currentValue.value.toString() == "0" && props.miniMode == true;
  });
  const getCursorSpacing = common_vendor.computed(() => {
    return uni_modules_uviewUltra_libs_function_index.getPx(props.cursorSpacing);
  });
  const inputStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({
      color: props.color,
      backgroundColor: props.inputBgColor != "" ? props.inputBgColor : props.bgColor,
      height: uni_modules_uviewUltra_libs_function_index.addUnit(props.buttonSize),
      width: uni_modules_uviewUltra_libs_function_index.addUnit(props.inputWidth)
    });
    return style;
  });
  function filter(value) {
    let val = value.toString();
    val = val.replace(/[^0-9.-]/g, "");
    if (props.integer && val.indexOf(".") != -1) {
      val = val.split(".")[0];
    }
    return val;
  }
  function format(value) {
    const filtered = filter(value);
    let valueNum = filtered == "" ? 0 : parseFloat(filtered);
    const minVal = parseFloat(props.min.toString());
    const maxVal = parseFloat(props.max.toString());
    valueNum = Math.max(Math.min(maxVal, valueNum), minVal);
    const decimalLen = parseInt(props.decimalLength.toString());
    if (decimalLen != 0 && valueNum != 0) {
      valueNum = parseFloat(valueNum.toFixed(decimalLen));
    }
    return valueNum;
  }
  function isDisabled(btnType) {
    if (btnType === "plus") {
      return props.disabled || props.disablePlus;
    }
    return props.disabled || props.disableMinus || parseFloat(currentValue.value.toString()) <= parseFloat(props.min.toString());
  }
  function buttonStyle(btnType) {
    const style = new common_vendor.UTSJSONObject({
      backgroundColor: props.bgColor,
      width: uni_modules_uviewUltra_libs_function_index.addUnit(props.buttonWidth),
      height: uni_modules_uviewUltra_libs_function_index.addUnit(props.buttonSize),
      borderRadius: props.buttonRadius
    });
    if (isDisabled(btnType)) {
      style["backgroundColor"] = props.disabledBgColor;
    }
    return style;
  }
  function emitChange(value, changeType = "") {
    if (!props.asyncChange) {
      common_vendor.nextTick$1(() => {
        emit("update:modelValue", value);
        currentValue.value = value;
      });
    }
    emit("change", new common_vendor.UTSJSONObject({
      value: parseFloat(value.toString()),
      name: props.name,
      type: changeType
    }));
  }
  function check() {
    const val = format(currentValue.value.toString());
    if (val !== currentValue.value) {
      currentValue.value = val;
      emitChange(val);
    }
  }
  function add(num1, num2) {
    const cardinal = Math.pow(10, 10);
    return Math.round((num1 + num2) * cardinal) / cardinal;
  }
  function onChange() {
    const crtType = type.value;
    if (isDisabled(crtType)) {
      emit("overlimit", crtType);
      return null;
    }
    const stepVal = parseFloat(props.step.toString());
    const diff = crtType === "minus" ? -stepVal : stepVal;
    const value = format(add(parseFloat(currentValue.value.toString()), diff).toString());
    emitChange(value, crtType);
    emit(crtType);
  }
  function clearTimeoutHandler() {
    if (longPressTimer.value != null) {
      clearTimeout(longPressTimer.value);
      longPressTimer.value = null;
    }
  }
  function longPressStep() {
    clearTimeoutHandler();
    longPressTimer.value = setTimeout(() => {
      onChange();
      longPressStep();
    }, 250);
  }
  function onTouchStart(btnType) {
    if (!props.longPress)
      return null;
    clearTimeoutHandler();
    type.value = btnType;
    longPressTimer.value = setTimeout(() => {
      onChange();
      longPressStep();
    }, 600);
  }
  function clickHandler(btnType) {
    type.value = btnType;
    onChange();
  }
  function onFocus(event) {
    emit("focus", new common_vendor.UTSJSONObject(Object.assign(Object.assign({}, event.detail), { name: props.name })));
  }
  function onBlur(event) {
    const value = format(event.detail.value);
    emitChange(value);
    emit("blur", new common_vendor.UTSJSONObject(Object.assign(Object.assign({}, event.detail), { name: props.name })));
  }
  function onInput(e) {
    const value = e.detail.value;
    if (value === "") {
      currentValue.value = "";
      return null;
    }
    let formatted = filter(value.toString());
    emitChange(value);
    const decimalLen = parseInt(props.decimalLength.toString());
    if (formatted.indexOf(".") != -1 && decimalLen > 0) {
      const pair = formatted.split(".");
      formatted = `${pair[0]}.${pair[1].slice(0, decimalLen)}`;
    }
    const formatted2 = format(formatted);
    emitChange(formatted2);
  }
  function init() {
    currentValue.value = format(props.modelValue != null ? props.modelValue.toString() : "0");
  }
  common_vendor.watch(() => {
    return props.modelValue;
  }, (newV) => {
    if (newV !== currentValue.value) {
      currentValue.value = format(newV.toString());
    }
  });
  common_vendor.watch(() => {
    return [props.integer, props.decimalLength, props.min, props.max];
  }, () => {
    check();
  });
  common_vendor.onMounted(() => {
    init();
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.showMinus && !hideMinus.value && _ctx.$slots["minus"] != null
    }, __props.showMinus && !hideMinus.value && _ctx.$slots["minus"] != null ? {
      b: common_vendor.o(($event) => {
        return clickHandler("minus");
      }, "49"),
      c: common_vendor.o(($event) => {
        return onTouchStart("minus");
      }, "b1"),
      d: common_vendor.o((...args) => {
        return _ctx.clearTimeout && _ctx.clearTimeout(...args);
      }, "19")
    } : __props.showMinus && !hideMinus.value ? {
      f: common_vendor.p({
        name: "minus",
        color: isDisabled("minus") ? "#c8c9cc" : "#323233",
        size: "15",
        bold: true,
        customStyle: __props.iconStyle,
        class: "data-v-ea035928"
      }),
      g: common_vendor.o(($event) => {
        return clickHandler("minus");
      }, "9c"),
      h: common_vendor.o(($event) => {
        return onTouchStart("minus");
      }, "23"),
      i: common_vendor.o((...args) => {
        return _ctx.clearTimeout && _ctx.clearTimeout(...args);
      }, "e0"),
      j: isDisabled("minus") ? 1 : "",
      k: common_vendor.s(buttonStyle("minus"))
    } : {}, {
      e: __props.showMinus && !hideMinus.value,
      l: !hideMinus.value
    }, !hideMinus.value ? {
      m: __props.disabledInput || __props.disabled,
      n: getCursorSpacing.value,
      o: __props.disabled || __props.disabledInput ? 1 : "",
      p: currentValue.value,
      q: common_vendor.o(onBlur, "ee"),
      r: common_vendor.o(onFocus, "f3"),
      s: common_vendor.o(onInput, "7a"),
      t: common_vendor.s(inputStyle.value)
    } : {}, {
      v: __props.showPlus && _ctx.$slots["plus"] != null
    }, __props.showPlus && _ctx.$slots["plus"] != null ? {
      w: common_vendor.o(($event) => {
        return clickHandler("plus");
      }, "19"),
      x: common_vendor.o(($event) => {
        return onTouchStart("plus");
      }, "1d"),
      y: common_vendor.o((...args) => {
        return _ctx.clearTimeout && _ctx.clearTimeout(...args);
      }, "7e")
    } : __props.showPlus ? {
      A: common_vendor.p({
        name: "plus",
        color: isDisabled("plus") ? "#c8c9cc" : "#323233",
        size: "15",
        bold: true,
        customStyle: __props.iconStyle,
        class: "data-v-ea035928"
      }),
      B: common_vendor.o(($event) => {
        return clickHandler("plus");
      }, "aa"),
      C: common_vendor.o(($event) => {
        return onTouchStart("plus");
      }, "6f"),
      D: common_vendor.o((...args) => {
        return _ctx.clearTimeout && _ctx.clearTimeout(...args);
      }, "04"),
      E: isDisabled("plus") ? 1 : "",
      F: common_vendor.s(buttonStyle("plus"))
    } : {}, {
      z: __props.showPlus,
      G: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      H: `${_ctx.u_s_b_h}px`,
      I: `${_ctx.u_s_a_i_b}px`,
      J: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ea035928"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-number-box/up-number-box.js.map
