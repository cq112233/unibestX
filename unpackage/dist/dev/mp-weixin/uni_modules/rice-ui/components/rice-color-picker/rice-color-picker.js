"use strict";
const common_vendor = require("../../../../common/vendor.js");
const common_assets = require("../../../../common/assets.js");
require("../../libs/use/useCountDown/index.js");
require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
const uni_modules_riceUi_components_riceColorPicker_type = require("./type.js");
const uni_modules_riceUi_components_riceColorPicker_utils = require("./utils.js");
if (!Array) {
  const _easycom_rice_slider_1 = common_vendor.resolveComponent("rice-slider");
  const _easycom_rice_icon_1 = common_vendor.resolveComponent("rice-icon");
  (_easycom_rice_slider_1 + _easycom_rice_icon_1)();
}
const _easycom_rice_slider = () => "../rice-slider/rice-slider.js";
const _easycom_rice_icon = () => "../rice-icon/rice-icon.js";
if (!Math) {
  (_easycom_rice_slider + _easycom_rice_icon)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-color-picker",
  styleIsolation: "app-and-page",
  externalClasses: ["preview-class", "panel-class"]
}, { __name: "rice-color-picker", props: /* @__PURE__ */ common_vendor.mergeModels(new common_vendor.UTSJSONObject({
  presetColors: { default: () => {
    return [];
  } },
  showAlpha: { type: Boolean, default: true },
  disabledInput: { type: Boolean, default: false },
  disabledSwitch: { type: Boolean, default: false },
  panelClass: { default: "" },
  previewClass: { default: "" }
}), new common_vendor.UTSJSONObject({
  "modelValue": {
    type: String,
    default: ""
  },
  "modelModifiers": {}
})), emits: /* @__PURE__ */ common_vendor.mergeModels(["changing", "change"], ["update:modelValue"]), setup(__props, _a) {
  var __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("color-picker");
  const props = __props;
  const emit = __emit;
  const color = common_vendor.useModel(__props, "modelValue");
  const panelWidth = common_vendor.ref(0);
  const panelHeight = common_vendor.ref(0);
  const panelLeft = common_vendor.ref(0);
  const panelTop = common_vendor.ref(0);
  const hueSliderValue = common_vendor.ref(0);
  const alphaSliderValue = common_vendor.ref(0);
  const hexInput = common_vendor.ref(uni_modules_riceUi_components_riceColorPicker_utils.defaultColor);
  const redInput = common_vendor.ref("");
  const greenInput = common_vendor.ref("");
  const blueInput = common_vendor.ref("");
  const alphaInput = common_vendor.ref("");
  const panelRef = common_vendor.shallowRef(null);
  const cursorRef = common_vendor.shallowRef(null);
  const panelDragging = common_vendor.ref(false);
  const syncingModelValue = common_vendor.ref(false);
  const current = common_vendor.reactive(new uni_modules_riceUi_components_riceColorPicker_type.ColorPickerColorState({
    r: 25,
    g: 137,
    b: 250,
    a: 1,
    h: 30,
    s: 88,
    v: 98
  }));
  const hexInputVal = common_vendor.computed(() => {
    return hexInput.value.startsWith("#") ? hexInput.value.slice(1) : hexInput.value;
  });
  const hexInputMaxLength = common_vendor.computed(() => {
    return current.a < 1 ? 8 : 6;
  });
  const currentFormat = common_vendor.ref("HEX");
  const setCurrentFormat = (value = null) => {
    if (value == null)
      return null;
    currentFormat.value = value.startsWith("#") ? "HEX" : "RGB";
  };
  const changeFormat = () => {
    if (props.disabledSwitch)
      return null;
    currentFormat.value = currentFormat.value == "HEX" ? "RGB" : "HEX";
  };
  const slideInactiveColor = common_vendor.ref("linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)");
  const syncFields = () => {
    hexInput.value = uni_modules_riceUi_components_riceColorPicker_utils.rgbaToHex(current.r, current.g, current.b, current.a);
    redInput.value = `${current.r}`;
    greenInput.value = `${current.g}`;
    blueInput.value = `${current.b}`;
    alphaInput.value = `${Math.round(current.a * 100)}`;
  };
  const syncAlphaSliderValues = () => {
    if (panelDragging.value)
      return null;
    alphaSliderValue.value = Math.round(current.a * 100);
  };
  const syncHueSliderValues = () => {
    if (panelDragging.value)
      return null;
    hueSliderValue.value = Math.round(current.h);
  };
  const updateCursor = () => {
    var _a2, _b;
    (_a2 = cursorRef.value) === null || _a2 === void 0 ? null : _a2.style.setProperty("left", `${current.s}%`);
    (_b = cursorRef.value) === null || _b === void 0 ? null : _b.style.setProperty("top", `${100 - current.v}%`);
  };
  const updateStateFromRgb = (r, g, b, a) => {
    current.r = uni_modules_riceUi_components_riceColorPicker_utils.clampInt(r, 0, 255);
    current.g = uni_modules_riceUi_components_riceColorPicker_utils.clampInt(g, 0, 255);
    current.b = uni_modules_riceUi_components_riceColorPicker_utils.clampInt(b, 0, 255);
    current.a = uni_modules_riceUi_components_riceColorPicker_utils.clampAlpha(a);
    const hsv = uni_modules_riceUi_components_riceColorPicker_utils.rgbToHsv(current.r, current.g, current.b);
    current.h = hsv.h;
    current.s = hsv.s;
    current.v = hsv.v;
    syncFields();
    syncAlphaSliderValues();
    syncHueSliderValues();
    updateCursor();
  };
  const updateStateFromHsv = (h, s, v, a) => {
    current.h = uni_modules_riceUi_libs_utils_basic.clamp(h, 0, 360);
    current.s = uni_modules_riceUi_libs_utils_basic.clamp(s, 0, 100);
    current.v = uni_modules_riceUi_libs_utils_basic.clamp(v, 0, 100);
    current.a = uni_modules_riceUi_components_riceColorPicker_utils.clampAlpha(a);
    const rgb = uni_modules_riceUi_components_riceColorPicker_utils.hsvToRgb(current.h, current.s, current.v);
    current.r = rgb.r;
    current.g = rgb.g;
    current.b = rgb.b;
    syncFields();
    updateCursor();
  };
  const getColorValue = () => {
    if (currentFormat.value == "HEX") {
      return uni_modules_riceUi_components_riceColorPicker_utils.rgbaToHex(current.r, current.g, current.b, current.a);
    }
    const alpha = uni_modules_riceUi_components_riceColorPicker_utils.formatAlpha(current.a);
    return alpha == "1" ? `rgb(${current.r}, ${current.g}, ${current.b})` : `rgba(${current.r}, ${current.g}, ${current.b}, ${alpha})`;
  };
  const emitChangingValue = () => {
    emit("changing", getColorValue());
  };
  const updateModelValue = () => {
    const nextColor = getColorValue();
    if (color.value == nextColor)
      return null;
    syncingModelValue.value = true;
    color.value = nextColor;
    emit("change", nextColor);
    common_vendor.nextTick$1(() => {
      syncingModelValue.value = false;
    });
  };
  const setColorFromString = (value) => {
    const parsed = uni_modules_riceUi_components_riceColorPicker_utils.parseColor(value);
    updateStateFromRgb(parsed.r, parsed.g, parsed.b, parsed.a);
    setCurrentFormat(value);
  };
  function updatePanelRect() {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      yield common_vendor.nextTick$1();
      if (panelRef.value == null)
        return Promise.resolve(null);
      const rect = yield panelRef.value.getBoundingClientRectAsync();
      panelWidth.value = rect.width;
      panelHeight.value = rect.height;
      panelLeft.value = rect.left;
      panelTop.value = rect.top;
    });
  }
  const updateByPanelPosition = (clientX, clientY, shouldCommit) => {
    if (panelWidth.value <= 0 || panelHeight.value <= 0)
      return null;
    const x = uni_modules_riceUi_libs_utils_basic.clamp(clientX - panelLeft.value, 0, panelWidth.value);
    const y = uni_modules_riceUi_libs_utils_basic.clamp(clientY - panelTop.value, 0, panelHeight.value);
    const saturation = panelWidth.value == 0 ? 0 : x / panelWidth.value * 100;
    const brightness = panelHeight.value == 0 ? 0 : (1 - y / panelHeight.value) * 100;
    updateStateFromHsv(current.h, saturation, brightness, current.a);
    if (shouldCommit) {
      updateModelValue();
    } else {
      emitChangingValue();
    }
  };
  const onPanelTouchstart = (e) => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      panelDragging.value = true;
      yield updatePanelRect();
      updateByPanelPosition(e.touches[0].clientX, e.touches[0].clientY, false);
    });
  };
  const onPanelTouchmove = (e) => {
    if (!panelDragging.value)
      return null;
    updateByPanelPosition(e.touches[0].clientX, e.touches[0].clientY, false);
    e.preventDefault();
  };
  const onPanelTouchend = () => {
    panelDragging.value = false;
    syncFields();
    updateModelValue();
  };
  const selectPreset = (value) => {
    setColorFromString(value);
    updateModelValue();
  };
  const updateHueBySlider = (value, shouldCommit) => {
    updateStateFromHsv(value, current.s, current.v, current.a);
    if (shouldCommit) {
      updateModelValue();
    } else {
      emitChangingValue();
    }
  };
  const onHueSliderChanging = (value) => {
    updateHueBySlider(value, false);
  };
  const onHueSliderChange = (value) => {
    updateHueBySlider(value, true);
  };
  const updateAlphaBySlider = (value, shouldCommit) => {
    current.a = value / 100;
    syncFields();
    if (shouldCommit) {
      updateModelValue();
    } else {
      emitChangingValue();
    }
  };
  const onAlphaSliderChanging = (value) => {
    updateAlphaBySlider(value, false);
  };
  const onAlphaSliderChange = (value) => {
    updateAlphaBySlider(value, true);
  };
  const onHexInput = (e) => {
    hexInput.value = e.detail.value;
  };
  const onHexBlur = () => {
    const raw = hexInput.value.trim().replace("#", "");
    if (raw.length == 3) {
      hexInput.value = `#${raw[0]}${raw[0]}${raw[1]}${raw[1]}${raw[2]}${raw[2]}`;
    } else if (raw.length >= 8) {
      hexInput.value = `#${raw.slice(0, 8)}`;
    } else if (raw.length >= 6) {
      hexInput.value = `#${raw.slice(0, 6)}`;
    }
    const parsed = uni_modules_riceUi_components_riceColorPicker_utils.parseHexColor(hexInput.value);
    if (parsed == null) {
      hexInput.value = color.value;
      return null;
    }
    updateStateFromRgb(parsed.r, parsed.g, parsed.b, parsed.a);
    updateModelValue();
  };
  const onRgbBlur = () => {
    const nextR = uni_modules_riceUi_components_riceColorPicker_utils.clampInt(uni_modules_riceUi_components_riceColorPicker_utils.parseNumber(redInput.value, current.r), 0, 255);
    const nextG = uni_modules_riceUi_components_riceColorPicker_utils.clampInt(uni_modules_riceUi_components_riceColorPicker_utils.parseNumber(greenInput.value, current.g), 0, 255);
    const nextB = uni_modules_riceUi_components_riceColorPicker_utils.clampInt(uni_modules_riceUi_components_riceColorPicker_utils.parseNumber(blueInput.value, current.b), 0, 255);
    const nextA = uni_modules_riceUi_components_riceColorPicker_utils.percentToAlpha(uni_modules_riceUi_components_riceColorPicker_utils.clampInt(uni_modules_riceUi_components_riceColorPicker_utils.parseNumber(alphaInput.value, current.a * 100), 0, 100));
    updateStateFromRgb(nextR, nextG, nextB, nextA);
    updateModelValue();
  };
  const sliderInactiveColor = common_vendor.computed(() => {
    return `linear-gradient(to right, rgba(0, 0, 0,0), rgb(${current.r}, ${current.g}, ${current.b}))`;
  });
  const panelStyle = common_vendor.computed(() => {
    const hueRgb = uni_modules_riceUi_components_riceColorPicker_utils.hsvToRgb(current.h, 100, 100);
    return new common_vendor.UTSJSONObject({
      background: `rgb(${hueRgb.r}, ${hueRgb.g}, ${hueRgb.b})`
    });
  });
  const panelCursorStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      backgroundColor: `rgba(${current.r}, ${current.g}, ${current.b}, ${current.a})`
    });
  });
  const previewStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    css.set("background", `rgba(${current.r}, ${current.g}, ${current.b}, ${current.a})`);
    return css;
  });
  const sliderButtonColor = common_vendor.computed(() => {
    return `rgb(${current.r}, ${current.g}, ${current.b})`;
  });
  const inputClass = common_vendor.computed(() => {
    return "rice-color-picker__result__input";
  });
  common_vendor.watch(color, (newValue) => {
    if (newValue.trim() == "" || syncingModelValue.value) {
      return null;
    }
    setColorFromString(newValue);
  });
  common_vendor.onMounted(() => {
    const initColor = color.value != null && color.value != "" ? color.value : uni_modules_riceUi_components_riceColorPicker_utils.defaultColor;
    setColorFromString(initColor);
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: common_vendor.s(common_vendor.unref(panelStyle)),
      b: common_vendor.sei("r0-7188e107", "view", cursorRef, {
        "k": "cursorRef"
      }),
      c: common_vendor.s(common_vendor.unref(panelCursorStyle)),
      d: common_vendor.sei("r1-7188e107", "view", panelRef, {
        "k": "panelRef"
      }),
      e: common_vendor.n(_ctx.panelClass),
      f: common_vendor.o(onPanelTouchstart, "5b"),
      g: common_vendor.o(onPanelTouchmove, "62"),
      h: common_vendor.o(onPanelTouchend, "07"),
      i: common_vendor.o(onPanelTouchend, "ce"),
      j: common_vendor.n(_ctx.previewClass),
      k: common_vendor.s(common_vendor.unref(previewStyle)),
      l: common_vendor.o(onHueSliderChanging, "87"),
      m: common_vendor.o(onHueSliderChange, "5d"),
      n: common_vendor.p({
        ["model-value"]: common_vendor.unref(hueSliderValue),
        min: 0,
        max: 360,
        ["active-color"]: "transparent",
        ["button-color"]: common_vendor.unref(sliderButtonColor),
        ["inactive-color"]: common_vendor.unref(slideInactiveColor),
        ["track-height"]: "8px",
        ["button-size"]: "24px",
        class: "rice-color-picker--slider data-v-7188e107"
      }),
      o: _ctx.showAlpha
    }, _ctx.showAlpha ? {
      p: common_vendor.o(onAlphaSliderChanging, "80"),
      q: common_vendor.o(onAlphaSliderChange, "36"),
      r: common_vendor.p({
        ["model-value"]: common_vendor.unref(alphaSliderValue),
        min: 0,
        max: 100,
        ["button-color"]: common_vendor.unref(sliderButtonColor),
        ["track-height"]: "8px",
        ["button-size"]: "24px",
        ["inactive-color"]: common_vendor.unref(sliderInactiveColor),
        ["active-color"]: "transparent",
        class: "rice-color-picker--slider data-v-7188e107"
      }),
      s: common_assets._imports_0$2,
      t: common_assets._imports_0$2
    } : {}, {
      v: !_ctx.disabledSwitch
    }, !_ctx.disabledSwitch ? {
      w: common_vendor.p({
        name: "arrow-left",
        size: "14px",
        class: "data-v-7188e107"
      })
    } : {}, {
      x: common_vendor.t(common_vendor.unref(currentFormat)),
      y: !_ctx.disabledSwitch
    }, !_ctx.disabledSwitch ? {
      z: common_vendor.p({
        name: "arrow-right",
        size: "14px",
        class: "data-v-7188e107"
      })
    } : {}, {
      A: common_vendor.o(changeFormat, "b6"),
      B: common_vendor.unref(currentFormat) == "HEX"
    }, common_vendor.unref(currentFormat) == "HEX" ? {
      C: common_vendor.unref(hexInputVal),
      D: common_vendor.n(common_vendor.unref(inputClass)),
      E: _ctx.disabledInput,
      F: common_vendor.unref(hexInputMaxLength),
      G: common_vendor.o(onHexInput, "cb"),
      H: common_vendor.o(onHexBlur, "0f"),
      I: common_vendor.o(onHexBlur, "ca"),
      J: common_vendor.t(common_vendor.unref(alphaInput))
    } : {
      K: common_vendor.n(common_vendor.unref(inputClass)),
      L: _ctx.disabledInput,
      M: common_vendor.o(onRgbBlur, "15"),
      N: common_vendor.o(onRgbBlur, "61"),
      O: common_vendor.unref(redInput),
      P: common_vendor.o(($event) => {
        return common_vendor.isRef(redInput) ? redInput.value = $event.detail.value : null;
      }, "b4"),
      Q: common_vendor.n(common_vendor.unref(inputClass)),
      R: _ctx.disabledInput,
      S: common_vendor.o(onRgbBlur, "53"),
      T: common_vendor.o(onRgbBlur, "83"),
      U: common_vendor.unref(greenInput),
      V: common_vendor.o(($event) => {
        return common_vendor.isRef(greenInput) ? greenInput.value = $event.detail.value : null;
      }, "49"),
      W: common_vendor.n(common_vendor.unref(inputClass)),
      X: _ctx.disabledInput,
      Y: common_vendor.o(onRgbBlur, "8f"),
      Z: common_vendor.o(onRgbBlur, "30"),
      aa: common_vendor.unref(blueInput),
      ab: common_vendor.o(($event) => {
        return common_vendor.isRef(blueInput) ? blueInput.value = $event.detail.value : null;
      }, "61"),
      ac: _ctx.disabledInput,
      ad: common_vendor.o(onRgbBlur, "6a"),
      ae: common_vendor.o(onRgbBlur, "b6"),
      af: common_vendor.unref(alphaInput),
      ag: common_vendor.o(($event) => {
        return common_vendor.isRef(alphaInput) ? alphaInput.value = $event.detail.value : null;
      }, "c2")
    }, {
      ah: _ctx.presetColors.length > 0
    }, _ctx.presetColors.length > 0 ? {
      ai: common_vendor.f(_ctx.presetColors, (item, index, i0) => {
        return {
          a: item,
          b: index,
          c: common_vendor.o(($event) => {
            return selectPreset(item);
          }, index)
        };
      })
    } : {}, {
      aj: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      ak: common_vendor.n(common_vendor.unref(ns).theme()),
      al: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      am: `${_ctx.u_s_b_h}px`,
      an: `${_ctx.u_s_a_i_b}px`
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7188e107"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-color-picker/rice-color-picker.js.map
