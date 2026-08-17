"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
class barStyleType extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          width: { type: String, optional: false },
          transition: { type: String, optional: true }
        };
      },
      name: "barStyleType"
    };
  }
  constructor(options, metadata = barStyleType.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.width = this.__props__.width;
    this.transition = this.__props__.transition;
    delete this.__props__;
  }
}
class sliderRectType extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          left: { type: Number, optional: false },
          width: { type: Number, optional: false }
        };
      },
      name: "sliderRectType"
    };
  }
  constructor(options, metadata = sliderRectType.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.left = this.__props__.left;
    this.width = this.__props__.width;
    delete this.__props__;
  }
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-slider"
}, { __name: "up-slider", props: {
  min: {
    type: [Number, String],
    default: 0
  },
  max: {
    type: [Number, String],
    default: 100
  },
  step: {
    type: [Number, String],
    default: 1
  },
  modelValue: {
    type: [Number],
    default: 0
  },
  isRange: {
    type: Boolean,
    default: false
  },
  rangeValue: {
    type: Array,
    default: () => {
      return [0, 0];
    }
  },
  activeColor: {
    type: String,
    default: "#2979ff"
  },
  inactiveColor: {
    type: String,
    default: "#c0c4cc"
  },
  blockSize: {
    type: [Number, String],
    default: 30
  },
  blockColor: {
    type: String,
    default: "#ffffff"
  },
  blockStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  },
  disabled: {
    type: Boolean,
    default: false
  },
  height: {
    type: [Number, String],
    default: "6rpx"
  },
  showValue: {
    type: Boolean,
    default: false
  },
  useNative: {
    type: Boolean,
    default: false
  },
  innerStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  },
  customStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  }
}, emits: ["start", "changing", "change", "update:modelValue"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const instance = common_vendor.getCurrentInstance();
  const startX = common_vendor.ref(0);
  const status = common_vendor.ref("end");
  const newValue = common_vendor.ref(0);
  const distanceX = common_vendor.ref(0);
  const startValue0 = common_vendor.ref(0);
  const startValue = common_vendor.ref(0);
  const barStyle0 = common_vendor.ref(new barStyleType({
    transition: null,
    width: "0px"
  }));
  const barStyle = common_vendor.ref(new barStyleType({
    width: "0px",
    transition: ""
  }));
  const sliderRect = common_vendor.ref(new sliderRectType({
    left: 0,
    width: 0
  }));
  const innerStyleCpu = common_vendor.computed(() => {
    var _a2;
    const style = (_a2 = props.innerStyle) !== null && _a2 !== void 0 ? _a2 : new common_vendor.UTSJSONObject({});
    style["height"] = props.isRange && props.showValue ? (parseFloat(uni_modules_uviewUltra_libs_function_index.getPx(props.blockSize)) + 24).toString() + "px" : uni_modules_uviewUltra_libs_function_index.getPx(props.blockSize) + "px";
    return style;
  });
  const sliderCustomStyle = common_vendor.computed(() => {
    return uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle);
  });
  const computedBlockSize = common_vendor.computed(() => {
    return parseFloat(uni_modules_uviewUltra_libs_function_index.getPx(props.blockSize));
  });
  const baseStyleCpu = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      height: props.height,
      backgroundColor: props.inactiveColor
    });
  });
  const rangeGap0StyleCpu = common_vendor.computed(() => {
    var _a2;
    return new common_vendor.UTSJSONObject({
      width: barStyle0.value.width,
      transition: (_a2 = barStyle0.value.transition) !== null && _a2 !== void 0 ? _a2 : "",
      height: props.height,
      marginTop: "-" + props.height,
      backgroundColor: props.inactiveColor
    });
  });
  const blockStyleCpu = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (props.blockStyle != null) {
      common_vendor.UTSJSONObject.assign(style, props.blockStyle);
    }
    style["height"] = uni_modules_uviewUltra_libs_function_index.getPx(props.blockSize, true);
    style["width"] = uni_modules_uviewUltra_libs_function_index.getPx(props.blockSize, true);
    style["backgroundColor"] = props.blockColor;
    return style;
  });
  const gapStyleCpu = common_vendor.computed(() => {
    var _a2;
    const style = new common_vendor.UTSJSONObject({});
    style["width"] = barStyle.value.width;
    style["transition"] = (_a2 = barStyle.value.transition) !== null && _a2 !== void 0 ? _a2 : "";
    style["height"] = props.height;
    style["marginTop"] = "-" + props.height;
    if (props.activeColor != "#2979ff") {
      style["backgroundColor"] = props.activeColor;
    }
    return style;
  });
  const btnWrapStyle0 = common_vendor.computed(() => {
    const leftVal = (parseFloat(uni_modules_uviewUltra_libs_function_index.getPx(barStyle0.value.width)) + parseFloat(uni_modules_uviewUltra_libs_function_index.getPx(props.blockSize)) / 2).toString() + "px";
    return new common_vendor.UTSJSONObject({
      left: leftVal
    });
  });
  const btnWrapStyle1 = common_vendor.computed(() => {
    const leftVal = (parseFloat(uni_modules_uviewUltra_libs_function_index.getPx(barStyle.value.width)) + parseFloat(uni_modules_uviewUltra_libs_function_index.getPx(props.blockSize)) / 2).toString() + "px";
    return new common_vendor.UTSJSONObject({
      left: leftVal
    });
  });
  function format(value, index = 1) {
    const minVal = parseFloat(props.min.toString());
    const maxVal = parseFloat(props.max.toString());
    const stepVal = parseFloat(props.step.toString());
    if (props.isRange) {
      switch (index) {
        case 0:
          return Math.round(Math.max(minVal, Math.min(value, parseFloat(props.rangeValue[1].toString()) - stepVal, maxVal)) / stepVal) * stepVal;
        case 1:
          return Math.round(Math.max(minVal, parseFloat(props.rangeValue[0].toString()) + stepVal, Math.min(value, maxVal)) / stepVal) * stepVal;
      }
    } else {
      return Math.round(Math.max(minVal, Math.min(value, maxVal)) / stepVal) * stepVal;
    }
    return 0;
  }
  function updateValue(value, drag, index = 1) {
    let valueFormat = format(value, index);
    const maxVal = parseFloat(props.max.toString());
    const minVal = parseFloat(props.min.toString());
    if (valueFormat > maxVal) {
      valueFormat = maxVal;
    }
    const width = Math.min((valueFormat - minVal) / (maxVal - minVal) * sliderRect.value.width, sliderRect.value.width);
    const bStyle = new barStyleType({
      width: width.toString() + "px",
      transition: drag ? "none" : ""
    });
    if (props.isRange) {
      props.rangeValue[index] = valueFormat;
      emit("update:modelValue", props.rangeValue);
    } else {
      emit("update:modelValue", valueFormat);
    }
    switch (index) {
      case 0:
        barStyle0.value.width = bStyle.width;
        break;
      case 1:
        barStyle.value.width = bStyle.width;
        break;
    }
    return props.isRange ? props.rangeValue : valueFormat;
  }
  function init() {
    if (props.isRange) {
      updateValue(parseFloat(props.rangeValue[0].toString()), false, 0);
      updateValue(parseFloat(props.rangeValue[1].toString()), false, 1);
    } else {
      updateValue(props.modelValue, false, 1);
    }
  }
  function changingHandler(e) {
    const value = e.detail.value;
    emit("update:modelValue", value);
    emit("changing", value);
  }
  function changeHandler(e) {
    const value = e.detail.value;
    emit("update:modelValue", value);
    emit("change", value);
  }
  function onTouchStart(e = null, index = 1) {
    const event = e;
    if (props.disabled)
      return null;
    startX.value = 0;
    const touches = event.touches[0];
    startX.value = touches.clientX;
    if (props.isRange) {
      startValue0.value = format(parseFloat(props.rangeValue[0].toString()), 0);
      startValue.value = format(parseFloat(props.rangeValue[1].toString()), 1);
    } else {
      startValue.value = format(props.modelValue);
    }
    status.value = "start";
    let clientX = touches.clientX;
    distanceX.value = clientX - sliderRect.value.left;
    const minVal = parseFloat(props.min.toString());
    const maxVal = parseFloat(props.max.toString());
    newValue.value = distanceX.value / sliderRect.value.width * (maxVal - minVal) + minVal;
    status.value = "moving";
    const crtFmt = updateValue(newValue.value, true, index);
    emit("changing", crtFmt);
  }
  function onTouchMove(e = null, index = 1) {
    const event = e;
    if (props.disabled)
      return null;
    if (status.value == "start")
      emit("start");
    const touches = event.touches[0];
    let clientX = touches.clientX;
    distanceX.value = clientX - sliderRect.value.left;
    const minVal = parseFloat(props.min.toString());
    const maxVal = parseFloat(props.max.toString());
    newValue.value = distanceX.value / sliderRect.value.width * (maxVal - minVal) + minVal;
    status.value = "moving";
    const crtFmt = updateValue(newValue.value, true, index);
    emit("changing", crtFmt);
  }
  function onTouchEnd(e = null, index = 1) {
    if (props.disabled)
      return null;
    if (status.value === "moving") {
      const crtFmt = updateValue(newValue.value, false, index);
      emit("change", crtFmt);
    }
    status.value = "end";
  }
  function onTouchStart2(e = null, index = 1) {
  }
  function onTouchMove2(e = null, index = 1) {
  }
  function onTouchEnd2(e = null, index = 1) {
  }
  function onClick(event) {
    if (props.disabled)
      return null;
    const clientX = event.x - sliderRect.value.left;
    const minVal = parseFloat(props.min.toString());
    const maxVal = parseFloat(props.max.toString());
    newValue.value = clientX / sliderRect.value.width * (maxVal - minVal) + minVal;
    updateValue(newValue.value, false, 1);
  }
  common_vendor.watch(() => {
    return props.modelValue;
  }, (n) => {
    if (status.value == "end") {
      const crtFmt = updateValue(props.modelValue, false, 1);
      emit("change", crtFmt);
    }
  });
  common_vendor.watch(() => {
    return props.rangeValue;
  }, (n) => {
    if (status.value == "end") {
      updateValue(n[0], false, 0);
      updateValue(n[1], false, 1);
      emit("change", n);
    }
  }, { deep: true });
  common_vendor.onMounted(() => {
    if (!props.useNative) {
      uni_modules_uviewUltra_libs_function_index.upGetRect(".up-slider__base", false, instance === null || instance === void 0 ? null : instance.proxy).then((rect) => {
        var _a2, _b;
        sliderRect.value.width = (_a2 = rect.width) !== null && _a2 !== void 0 ? _a2 : 0;
        sliderRect.value.left = (_b = rect.left) !== null && _b !== void 0 ? _b : 0;
        init();
      });
    }
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: !__props.useNative || __props.isRange
    }, !__props.useNative || __props.isRange ? common_vendor.e({
      b: common_vendor.s(baseStyleCpu.value),
      c: common_vendor.o(onClick, "07"),
      d: common_vendor.s(gapStyleCpu.value),
      e: __props.isRange
    }, __props.isRange ? {
      f: common_vendor.s(rangeGap0StyleCpu.value)
    } : {}, {
      g: __props.isRange && __props.showValue
    }, __props.isRange && __props.showValue ? {
      h: common_vendor.t(__props.rangeValue[0] ?? ""),
      i: common_vendor.s(btnWrapStyle0.value)
    } : {}, {
      j: __props.isRange && __props.showValue
    }, __props.isRange && __props.showValue ? {
      k: common_vendor.t(__props.rangeValue[1] ?? ""),
      l: common_vendor.s(btnWrapStyle1.value)
    } : {}, {
      m: __props.isRange
    }, __props.isRange ? common_vendor.e({
      n: _ctx.$slots["min"] != null
    }, _ctx.$slots["min"] != null ? {} : {
      o: common_vendor.s(blockStyleCpu.value)
    }, {
      p: common_vendor.o(($event) => {
        return onTouchStart($event, 0);
      }, "6b"),
      q: common_vendor.o(($event) => {
        return onTouchMove($event, 0);
      }, "59"),
      r: common_vendor.o(($event) => {
        return onTouchEnd($event, 0);
      }, "58"),
      s: common_vendor.o(($event) => {
        return onTouchEnd($event, 0);
      }, "3b"),
      t: common_vendor.s(btnWrapStyle0.value)
    }) : {}, {
      v: __props.isRange && _ctx.$slots["max"] != null
    }, __props.isRange && _ctx.$slots["max"] != null ? {} : _ctx.$slots["default"] != null ? {} : {
      x: common_vendor.s(blockStyleCpu.value)
    }, {
      w: _ctx.$slots["default"] != null,
      y: common_vendor.o(($event) => {
        return onTouchStart($event, 1);
      }, "ef"),
      z: common_vendor.o(($event) => {
        return onTouchMove($event, 1);
      }, "06"),
      A: common_vendor.o(($event) => {
        return onTouchEnd($event, 1);
      }, "0b"),
      B: common_vendor.o(($event) => {
        return onTouchEnd($event, 1);
      }, "38"),
      C: common_vendor.s(btnWrapStyle1.value),
      D: common_vendor.sei("r0-66aa6fc7", "view", "upSliderInnerRef"),
      E: common_vendor.o(onClick, "95"),
      F: common_vendor.o(($event) => {
        return onTouchStart2($event, 1);
      }, "7b"),
      G: common_vendor.o(($event) => {
        return onTouchMove2($event, 1);
      }, "3a"),
      H: common_vendor.o(($event) => {
        return onTouchEnd2($event, 1);
      }, "02"),
      I: common_vendor.o(($event) => {
        return onTouchEnd2($event, 1);
      }, "d6"),
      J: common_vendor.n(__props.disabled ? "up-slider--disabled" : ""),
      K: common_vendor.s(innerStyleCpu.value),
      L: __props.showValue && !__props.isRange
    }, __props.showValue && !__props.isRange ? {
      M: common_vendor.t(__props.modelValue)
    } : {}) : {
      N: parseFloat(__props.min.toString()),
      O: parseFloat(__props.max.toString()),
      P: parseFloat(__props.step.toString()),
      Q: parseFloat(__props.modelValue.toString()),
      R: __props.activeColor,
      S: __props.inactiveColor,
      T: computedBlockSize.value,
      U: __props.blockColor,
      V: __props.showValue,
      W: __props.disabled,
      X: common_vendor.o(changingHandler, "b0"),
      Y: common_vendor.o(changeHandler, "1c")
    }, {
      Z: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      aa: common_vendor.s(sliderCustomStyle.value),
      ab: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      ac: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-66aa6fc7"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-slider/up-slider.js.map
