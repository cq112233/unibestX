"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
require("../../libs/use/useCountDown/index.js");
require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
require("../../libs/use/useSafeArea/index.js");
const uni_modules_riceUi_libs_use_useTouch_index = require("../../libs/use/useTouch/index.js");
const uni_modules_riceUi_components_riceForm_index = require("../rice-form/index.js");
const uni_modules_riceUi_components_riceSlider_type = require("./type.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-slider",
  styleIsolation: "app-and-page",
  externalClasses: ["button-class"]
}, { __name: "rice-slider", props: /* @__PURE__ */ common_vendor.mergeModels(new common_vendor.UTSJSONObject({
  min: { default: 0 },
  max: { default: 100 },
  step: { default: 1 },
  range: { type: Boolean, default: false },
  showValue: { type: Boolean, default: false },
  valuePosition: { default: "top" },
  valueColor: {},
  formatValuetip: {},
  disabled: { type: Boolean },
  readonly: { type: Boolean },
  mode: { default: "default" },
  trackHeight: {},
  buttonSize: { default: 25 },
  buttonColor: {},
  buttonBorderColor: {},
  buttonClass: { default: "" },
  activeColor: {},
  inactiveColor: {},
  clickChange: { type: Boolean, default: true },
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}), new common_vendor.UTSJSONObject({
  "modelValue": {
    type: [Array, Number],
    default: 0
  },
  "modelModifiers": {}
})), emits: /* @__PURE__ */ common_vendor.mergeModels(["change", "changing"], ["update:modelValue"]), setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("slider");
  const touch = uni_modules_riceUi_libs_use_useTouch_index.useTouch();
  const emit = __emit;
  const modelValue = common_vendor.useModel(__props, "modelValue");
  const formDisabled = common_vendor.inject(uni_modules_riceUi_components_riceForm_index.formDisabledInjectKey, null);
  const formReadonly = common_vendor.inject(uni_modules_riceUi_components_riceForm_index.formReadonlyInjectKey, null);
  const _disabled = common_vendor.computed(() => {
    var _a2;
    return ((_a2 = formDisabled === null || formDisabled === void 0 ? null : formDisabled.value) !== null && _a2 !== void 0 ? _a2 : false) || props.disabled == true;
  });
  const _readonly = common_vendor.computed(() => {
    var _a2;
    return ((_a2 = formReadonly === null || formReadonly === void 0 ? null : formReadonly.value) !== null && _a2 !== void 0 ? _a2 : false) || props.readonly == true;
  });
  const isRange = common_vendor.computed(() => {
    return props.range && Array.isArray(modelValue.value);
  });
  const _valuePosition = common_vendor.computed(() => {
    return props.showValue ? props.valuePosition : "none";
  });
  const minValue = common_vendor.computed(() => {
    return Math.min(props.min, props.max);
  });
  const maxValue = common_vendor.computed(() => {
    return Math.max(props.min, props.max);
  });
  const stepValue = common_vendor.computed(() => {
    return props.step > 0 ? props.step : 1;
  });
  const precision = common_vendor.computed(() => {
    return uni_modules_riceUi_libs_utils_basic.getPrecision(stepValue.value);
  });
  const capsuleMainInset = common_vendor.computed(() => {
    return props.mode == "capsule" ? 2 : 0;
  });
  const trackRef = common_vendor.shallowRef(null);
  const resizeObserver = common_vendor.ref(null);
  const allowTrackTapUpdate = common_vendor.ref(false);
  const current = common_vendor.reactive(new uni_modules_riceUi_components_riceSlider_type.SliderInitData({
    dragging: "none",
    moveReady: false,
    firstValue: 0,
    secondValue: 0,
    startValue: 0,
    sliderWidth: 0,
    sliderHeight: 0,
    trackLeft: 0,
    trackTop: 0,
    trackWidth: 0,
    trackHeight: 0
  }));
  const formatDisplayValue = (value) => {
    if (typeof props.formatValuetip == "function") {
      return props.formatValuetip(value);
    }
    return value;
  };
  const trackHeightPx = common_vendor.computed(() => {
    if (props.trackHeight != null) {
      return uni_modules_riceUi_libs_utils_basic.getPxNum(props.trackHeight);
    }
    return props.mode == "capsule" ? 18 : 4;
  });
  const buttonSizePx = common_vendor.computed(() => {
    if (props.mode == "capsule") {
      return trackHeightPx.value;
    }
    return uni_modules_riceUi_libs_utils_basic.getPxNum(props.buttonSize);
  });
  const getPercentByValue = (value) => {
    const distance = maxValue.value - minValue.value;
    if (distance <= 0)
      return 0;
    return (value - minValue.value) / distance;
  };
  const getAxisLength = () => {
    const base = current.trackWidth;
    return Math.max(base - capsuleMainInset.value * 2 - buttonSizePx.value, 0);
  };
  const getOffsetByValue = (value) => {
    const axisLength = getAxisLength();
    if (axisLength <= 0)
      return 0;
    return capsuleMainInset.value + axisLength * getPercentByValue(value);
  };
  const getButtonCenterOffset = (value) => {
    return getOffsetByValue(value) + buttonSizePx.value / 2;
  };
  const updateTrackRect = () => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      yield common_vendor.nextTick$1();
      if (trackRef.value == null)
        return Promise.resolve(null);
      const rect = yield trackRef.value.getBoundingClientRectAsync();
      current.trackLeft = rect.left;
      current.trackTop = rect.top;
      current.trackWidth = rect.width;
      current.trackHeight = rect.height;
      current.sliderWidth = rect.width;
      current.sliderHeight = rect.height;
    });
  };
  const initTrackObserver = () => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      if (trackRef.value == null)
        return Promise.resolve(null);
      yield updateTrackRect();
    });
  };
  const trackStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.mode == "capsule") {
      css.set("height", `${trackHeightPx.value + 6}px`);
    } else {
      css.set("height", `${trackHeightPx.value}px`);
    }
    if (props.inactiveColor != null) {
      css.set("background", props.inactiveColor);
    }
    return css;
  });
  const contentStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.mode == "capsule") {
      css.set("height", `${trackHeightPx.value + 6}px`);
    } else {
      css.set("height", `${buttonSizePx.value}px`);
    }
    return css;
  });
  const getTopValueStyle = (type) => {
    const css = /* @__PURE__ */ new Map();
    const value = type == "first" ? current.firstValue : current.secondValue;
    css.set("left", `${getButtonCenterOffset(value)}px`);
    return css;
  };
  const getStartOffset = () => {
    if (isRange.value) {
      return getButtonCenterOffset(current.firstValue);
    }
    return capsuleMainInset.value;
  };
  const getEndOffset = () => {
    const target = props.range ? current.secondValue : current.firstValue;
    return getButtonCenterOffset(target);
  };
  const activeStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    const start = getStartOffset();
    const end = getEndOffset();
    let width = end - start;
    if (!isRange.value && current.firstValue == props.min) {
      width = 0;
    }
    css.set("left", `${start}px`);
    css.set("width", `${Math.max(width, 0)}px`);
    css.set("height", `${trackHeightPx.value}px`);
    if (props.activeColor != null) {
      css.set("background", props.activeColor);
    }
    if (props.mode == "capsule") {
      if (isRange.value) {
        css.set("border-radius", "0px");
      } else {
        css.set("border-top-right-radius", "0px");
        css.set("border-bottom-right-radius", "0px");
      }
    } else {
      css.set("border-radius", "99px");
    }
    return css;
  });
  const textStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.valueColor != null) {
      css.set("color", props.valueColor);
    }
    return css;
  });
  const clampValue = (value) => {
    return uni_modules_riceUi_libs_utils_basic.clamp(value, minValue.value, maxValue.value);
  };
  const formatByPrecision = (value) => {
    const fixed = precision.value;
    if (fixed <= 0)
      return Math.round(value);
    return parseFloat(value.toFixed(fixed));
  };
  const alignToStep = (value) => {
    const safeValue = clampValue(value);
    const step = stepValue.value;
    const distance = safeValue - minValue.value;
    const stepCount = Math.round(distance / step);
    const nextValue = minValue.value + stepCount * step;
    return clampValue(formatByPrecision(nextValue));
  };
  const getValueByClientX = (clientX) => {
    const width = getAxisLength();
    const offset = uni_modules_riceUi_libs_utils_basic.clamp(clientX - current.trackLeft - capsuleMainInset.value - buttonSizePx.value / 2, 0, width);
    const percent = width <= 0 ? 0 : offset / width;
    const rawValue = minValue.value + (maxValue.value - minValue.value) * percent;
    return alignToStep(rawValue);
  };
  const createValueByCurrent = () => {
    if (props.range) {
      return [current.firstValue, current.secondValue];
    }
    return current.firstValue;
  };
  function syncModelValue(force = false) {
    const nextValue = createValueByCurrent();
    if (force || !uni_modules_riceUi_libs_utils_basic.isSameValue(modelValue.value, nextValue)) {
      modelValue.value = nextValue;
    }
  }
  function updateValueByAxis(clientPoint, emitChanging = true) {
    const nextValue = getValueByClientX(clientPoint);
    if (props.range) {
      if (current.dragging == "second") {
        if (nextValue < current.firstValue) {
          const swapValue = current.firstValue;
          current.firstValue = nextValue;
          current.secondValue = swapValue;
          current.dragging = "first";
        } else {
          current.secondValue = nextValue;
        }
      } else {
        if (nextValue > current.secondValue) {
          const swapValue = current.secondValue;
          current.secondValue = nextValue;
          current.firstValue = swapValue;
          current.dragging = "second";
        } else {
          current.firstValue = nextValue;
        }
      }
    } else {
      current.firstValue = nextValue;
      current.secondValue = nextValue;
    }
    syncModelValue();
    if (emitChanging) {
      emit("changing", createValueByCurrent());
    }
  }
  const startDragging = (e, type, updateOnStart, enableTapUpdate) => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      if (_disabled.value || _readonly.value)
        return Promise.resolve(null);
      touch.start(e);
      current.dragging = type;
      current.moveReady = updateOnStart;
      allowTrackTapUpdate.value = enableTapUpdate;
      current.startValue = createValueByCurrent();
      yield updateTrackRect();
      if (updateOnStart) {
        updateValueByAxis(e.touches[0].clientX);
      }
    });
  };
  const pickDraggingThumb = (value) => {
    if (!isRange.value)
      return "first";
    const firstDistance = Math.abs(value - current.firstValue);
    const secondDistance = Math.abs(value - current.secondValue);
    if (firstDistance <= secondDistance) {
      return "first";
    }
    return "second";
  };
  const buttonClick = () => {
  };
  const contentClick = (e) => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      if (!props.clickChange || _disabled.value || _readonly.value)
        return Promise.resolve(null);
      const startValue = createValueByCurrent();
      yield updateTrackRect();
      const nextValue = getValueByClientX(e.clientX);
      current.dragging = pickDraggingThumb(nextValue);
      updateValueByAxis(e.clientX, false);
      const changed = !uni_modules_riceUi_libs_utils_basic.isSameValue(startValue, createValueByCurrent());
      current.dragging = "none";
      current.moveReady = false;
      allowTrackTapUpdate.value = false;
      if (changed) {
        emit("change", createValueByCurrent());
      }
    });
  };
  const onButtonTouchstart = (e, type) => {
    startDragging(e, type, false, false);
  };
  const onTrackTouchmove = (e) => {
    if (_disabled.value || _readonly.value || current.dragging == "none")
      return null;
    touch.move(e);
    if (touch.skipMove.value)
      return null;
    if (!current.moveReady) {
      touch.offsetX.value;
      if (touch.direction.value != "horizontal") {
        return null;
      }
      current.moveReady = true;
    }
    updateValueByAxis(e.touches[0].clientX, true);
    e.preventDefault();
  };
  const onTrackTouchend = () => {
    if (current.dragging == "none")
      return null;
    if (allowTrackTapUpdate.value && !current.moveReady && touch.isTap.value) {
      updateValueByAxis(touch.startX.value, false);
    }
    const nextValue = createValueByCurrent();
    const changed = !uni_modules_riceUi_libs_utils_basic.isSameValue(current.startValue, nextValue);
    current.dragging = "none";
    current.moveReady = false;
    allowTrackTapUpdate.value = false;
    touch.end();
    if (changed) {
      emit("change", nextValue);
    }
  };
  const getButtonWrapStyle = (type) => {
    const css = /* @__PURE__ */ new Map();
    const value = type == "first" ? current.firstValue : current.secondValue;
    css.set("width", `${buttonSizePx.value}px`);
    css.set("height", `${buttonSizePx.value}px`);
    css.set("left", `${getOffsetByValue(value)}px`);
    if (props.buttonBorderColor != null) {
      css.set("border-color", props.buttonBorderColor);
    }
    if (props.buttonColor != null) {
      css.set("background", props.buttonColor);
    }
    return css;
  };
  const normalizeModelValue = (value) => {
    if (props.range) {
      let start = minValue.value;
      let end = minValue.value;
      if (Array.isArray(value)) {
        if (value.length > 0) {
          start = alignToStep(value[0]);
        }
        if (value.length > 1) {
          end = alignToStep(value[1]);
        } else {
          end = start;
        }
      } else if (typeof value == "number") {
        start = alignToStep(value);
        end = start;
      }
      if (start > end) {
        const temp = start;
        start = end;
        end = temp;
      }
      return [start, end];
    }
    if (typeof value == "number") {
      return alignToStep(value);
    }
    if (Array.isArray(value) && value.length > 0) {
      return alignToStep(value[0]);
    }
    return alignToStep(minValue.value);
  };
  const syncCurrentValue = (value) => {
    const normalizedValue = normalizeModelValue(value);
    if (Array.isArray(normalizedValue)) {
      current.firstValue = normalizedValue[0];
      current.secondValue = normalizedValue[1];
    } else {
      current.firstValue = normalizedValue;
      current.secondValue = normalizedValue;
    }
  };
  const rootClass = common_vendor.computed(() => {
    return [
      ns.theme(),
      ns.is("capsule", props.mode == "capsule"),
      ns.is("aside", _valuePosition.value == "right"),
      ns.is("disabled", _disabled.value)
    ];
  });
  const contentClass = common_vendor.computed(() => {
    return [
      ns.is("__content--aside--value", _valuePosition.value == "right"),
      ns.is("__content--capsule", props.mode == "capsule")
    ];
  });
  const trackClass = common_vendor.computed(() => {
    return [
      ns.is("__track--capsule", props.mode == "capsule")
    ];
  });
  const activeClass = common_vendor.computed(() => {
    return [
      ns.is("__active--capsule", props.mode == "capsule")
    ];
  });
  common_vendor.watch(modelValue, (newVal) => {
    if (current.dragging != "none")
      return null;
    const normalizedValue = normalizeModelValue(newVal);
    if (!uni_modules_riceUi_libs_utils_basic.isSameValue(newVal, normalizedValue)) {
      modelValue.value = normalizedValue;
      return null;
    }
    syncCurrentValue(normalizedValue);
  }, {
    immediate: true,
    deep: true
  });
  common_vendor.watch(() => {
    return [props.min, props.max, props.step, props.range];
  }, () => {
    const normalizedValue = normalizeModelValue(modelValue.value);
    if (!uni_modules_riceUi_libs_utils_basic.isSameValue(modelValue.value, normalizedValue)) {
      modelValue.value = normalizedValue;
    }
    syncCurrentValue(normalizedValue);
  });
  common_vendor.onMounted(() => {
    initTrackObserver();
  });
  common_vendor.onUnmounted(() => {
    var _a2;
    if (trackRef.value != null) {
      (_a2 = resizeObserver.value) === null || _a2 === void 0 ? null : _a2.unobserve(trackRef.value);
    }
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: common_vendor.unref(_valuePosition) == "top"
    }, common_vendor.unref(_valuePosition) == "top" ? common_vendor.e({
      b: common_vendor.t(formatDisplayValue(common_vendor.unref(current).firstValue)),
      c: common_vendor.s(getTopValueStyle("first")),
      d: common_vendor.s(common_vendor.unref(textStyle)),
      e: common_vendor.unref(isRange)
    }, common_vendor.unref(isRange) ? {
      f: common_vendor.t(formatDisplayValue(common_vendor.unref(current).secondValue)),
      g: common_vendor.s(getTopValueStyle("second")),
      h: common_vendor.s(common_vendor.unref(textStyle))
    } : {}) : {}, {
      i: common_vendor.unref(_valuePosition) == "right" && common_vendor.unref(isRange)
    }, common_vendor.unref(_valuePosition) == "right" && common_vendor.unref(isRange) ? {
      j: common_vendor.t(formatDisplayValue(common_vendor.unref(current).firstValue)),
      k: common_vendor.s(common_vendor.unref(textStyle))
    } : {}, {
      l: common_vendor.sei("r0-10808707", "view", trackRef, {
        "k": "trackRef"
      }),
      m: common_vendor.n(common_vendor.unref(trackClass)),
      n: common_vendor.s(common_vendor.unref(trackStyle)),
      o: common_vendor.n(common_vendor.unref(activeClass)),
      p: common_vendor.s(common_vendor.unref(activeStyle)),
      q: common_vendor.n(_ctx.buttonClass),
      r: common_vendor.s(getButtonWrapStyle("first")),
      s: common_vendor.o(buttonClick, "17"),
      t: common_vendor.o(($event) => {
        return onButtonTouchstart($event, "first");
      }, "96"),
      v: common_vendor.o(onTrackTouchmove, "ee"),
      w: common_vendor.o(onTrackTouchend, "88"),
      x: common_vendor.o(onTrackTouchend, "e4"),
      y: common_vendor.unref(isRange)
    }, common_vendor.unref(isRange) ? {
      z: common_vendor.n(_ctx.buttonClass),
      A: common_vendor.s(getButtonWrapStyle("second")),
      B: common_vendor.o(buttonClick, "2e"),
      C: common_vendor.o(($event) => {
        return onButtonTouchstart($event, "second");
      }, "4b"),
      D: common_vendor.o(onTrackTouchmove, "2e"),
      E: common_vendor.o(onTrackTouchend, "9b"),
      F: common_vendor.o(onTrackTouchend, "b0")
    } : {}, {
      G: common_vendor.n(common_vendor.unref(contentClass)),
      H: common_vendor.s(common_vendor.unref(contentStyle)),
      I: common_vendor.o(contentClick, "ca"),
      J: common_vendor.unref(_valuePosition) == "right"
    }, common_vendor.unref(_valuePosition) == "right" ? {
      K: common_vendor.t(formatDisplayValue(common_vendor.unref(current).secondValue)),
      L: common_vendor.s(common_vendor.unref(textStyle))
    } : {}, {
      M: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      N: common_vendor.n(common_vendor.unref(rootClass)),
      O: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      P: common_vendor.s(_ctx.customStyle),
      Q: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-10808707"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-slider/rice-slider.js.map
