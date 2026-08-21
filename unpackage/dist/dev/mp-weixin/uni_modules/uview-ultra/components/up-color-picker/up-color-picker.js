"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
if (!Array) {
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  const _easycom_up_popup_1 = common_vendor.resolveComponent("up-popup");
  (_easycom_up_button_1 + _easycom_up_popup_1)();
}
const _easycom_up_button = () => "../up-button/up-button.js";
const _easycom_up_popup = () => "../up-popup/up-popup.js";
if (!Math) {
  (_easycom_up_button + _easycom_up_popup)();
}
class Point extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          x: { type: Number, optional: false },
          y: { type: Number, optional: false }
        };
      },
      name: "Point"
    };
  }
  constructor(options, metadata = Point.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.x = this.__props__.x;
    this.y = this.__props__.y;
    delete this.__props__;
  }
}
class GradientColor extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          color: { type: String, optional: false },
          percent: { type: Number, optional: false }
        };
      },
      name: "GradientColor"
    };
  }
  constructor(options, metadata = GradientColor.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.color = this.__props__.color;
    this.percent = this.__props__.percent;
    delete this.__props__;
  }
}
class PickerRect extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          left: { type: Number, optional: false },
          top: { type: Number, optional: false },
          width: { type: Number, optional: false },
          height: { type: Number, optional: false }
        };
      },
      name: "PickerRect"
    };
  }
  constructor(options, metadata = PickerRect.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.left = this.__props__.left;
    this.top = this.__props__.top;
    this.width = this.__props__.width;
    this.height = this.__props__.height;
    delete this.__props__;
  }
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-color-picker"
}, { __name: "up-color-picker", props: {
  modelValue: {
    type: String,
    default: "#ff0000"
  },
  commonColors: {
    type: Array,
    default: () => {
      return [];
    }
  }
}, emits: ["update:modelValue", "confirm", "close"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  function defaultColors() {
    return [
      "#ff0000",
      "#ff9900",
      "#ffff00",
      "#00ff00",
      "#00ffff",
      "#0000ff",
      "#9900ff",
      "#ffffff",
      "#000000"
    ];
  }
  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }
  function touchPoint(e) {
    if (e.touches.length > 0)
      return e.touches[0];
    if (e.changedTouches.length > 0)
      return e.changedTouches[0];
    return null;
  }
  function round255(value) {
    return Math.round(value * 255);
  }
  function parseHexPair(value, index) {
    return parseInt(value.substring(index, index + 2), 16);
  }
  function rgbToHsl(r, g, b) {
    const rn = r / 255;
    const gn = g / 255;
    const bn = b / 255;
    const max = Math.max(rn, Math.max(gn, bn));
    const min = Math.min(rn, Math.min(gn, bn));
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;
    if (max != min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      if (max == rn) {
        h = (gn - bn) / d + (gn < bn ? 6 : 0);
      } else if (max == gn) {
        h = (bn - rn) / d + 2;
      } else {
        h = (rn - gn) / d + 4;
      }
      h = h / 6;
    }
    return new common_vendor.UTSJSONObject({
      h: Math.round(h * 360),
      s: s * 100,
      l: l * 100
    });
  }
  function hueToRgb(p, q, t) {
    let value = t;
    if (value < 0)
      value += 1;
    if (value > 1)
      value -= 1;
    if (value < 1 / 6)
      return p + (q - p) * 6 * value;
    if (value < 1 / 2)
      return q;
    if (value < 2 / 3)
      return p + (q - p) * (2 / 3 - value) * 6;
    return p;
  }
  function hslToRgba(hue2, saturation2, lightness2, alpha2) {
    let h = hue2 / 360;
    let s = saturation2 / 100;
    let l = lightness2 / 100;
    let r = l;
    let g = l;
    let b = l;
    if (s != 0) {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hueToRgb(p, q, h + 1 / 3);
      g = hueToRgb(p, q, h);
      b = hueToRgb(p, q, h - 1 / 3);
    }
    return "rgba(" + round255(r).toString() + ", " + round255(g).toString() + ", " + round255(b).toString() + ", " + alpha2.toFixed(2) + ")";
  }
  function parseSolidColorToState(color) {
    if (color.startsWith("#") && (color.length == 7 || color.length == 4)) {
      let r = 0;
      let g = 0;
      let b = 0;
      if (color.length == 7) {
        r = parseHexPair(color, 1);
        g = parseHexPair(color, 3);
        b = parseHexPair(color, 5);
      } else {
        r = parseInt(color.substring(1, 2) + color.substring(1, 2), 16);
        g = parseInt(color.substring(2, 3) + color.substring(2, 3), 16);
        b = parseInt(color.substring(3, 4) + color.substring(3, 4), 16);
      }
      return rgbToHsl(r, g, b);
    }
    return new common_vendor.UTSJSONObject({
      h: 0,
      s: 100,
      l: 50
    });
  }
  function createGradientColor(color, percent) {
    return new GradientColor({
      color,
      percent
    });
  }
  const props = __props;
  const emit = __emit;
  const instance = common_vendor.getCurrentInstance();
  const show = common_vendor.ref(false);
  const colorTypeIndex = common_vendor.ref(0);
  const hue = common_vendor.ref(0);
  const saturation = common_vendor.ref(100);
  const lightness = common_vendor.ref(50);
  const alpha = common_vendor.ref(1);
  const saturationPosition = common_vendor.ref(new Point({ x: 150, y: 0 }));
  const huePosition = common_vendor.ref(0);
  const alphaPosition = common_vendor.ref(300);
  const gradientColors = common_vendor.ref([
    createGradientColor("#ff0000", 0),
    createGradientColor("#0000ff", 1)
  ]);
  const currentDirectionValue = common_vendor.ref("to right");
  const currentColor = common_vendor.ref("#ff0000");
  const draggingPointerIndex = common_vendor.ref(-1);
  const directionPointer = common_vendor.ref(new Point({ x: 40, y: 20 }));
  const editingGradientIndex = common_vendor.ref(-1);
  const previewType = common_vendor.ref("solid");
  const gradientTrackRect = common_vendor.ref(new PickerRect({ left: 0, top: 0, width: 0, height: 0 }));
  const saturationRect = common_vendor.ref(new PickerRect({ left: 0, top: 0, width: 0, height: 0 }));
  const hueRect = common_vendor.ref(new PickerRect({ left: 0, top: 0, width: 0, height: 0 }));
  const alphaRect = common_vendor.ref(new PickerRect({ left: 0, top: 0, width: 0, height: 0 }));
  const directionCircleRect = common_vendor.ref(new PickerRect({ left: 0, top: 0, width: 0, height: 0 }));
  const normalizedCommonColors = common_vendor.computed(() => {
    const colors = props.commonColors;
    if (colors.length > 0) {
      return colors;
    }
    return defaultColors();
  });
  const triggerStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      background: props.modelValue,
      backgroundColor: props.modelValue
    });
  });
  function gradientStyleText() {
    let colors = "";
    const gColors = gradientColors.value;
    for (let i = 0; i < gColors.length; i++) {
      if (i > 0)
        colors += ", ";
      colors += gColors[i].color;
    }
    return "linear-gradient(" + currentDirectionValue.value + ", " + colors + ")";
  }
  const displayColor = common_vendor.computed(() => {
    if (previewType.value == "gradient") {
      return gradientStyleText();
    }
    if (previewType.value == "gradient-point" && editingGradientIndex.value >= 0 && editingGradientIndex.value < gradientColors.value.length) {
      return gradientColors.value[editingGradientIndex.value].color;
    }
    return currentColor.value;
  });
  const previewStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      background: displayColor.value,
      backgroundColor: displayColor.value
    });
  });
  const saturationStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      backgroundColor: hslToRgba(hue.value, 100, 50, 1)
    });
  });
  const saturationPointerStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      left: saturationPosition.value.x.toString() + "px",
      top: saturationPosition.value.y.toString() + "px"
    });
  });
  const huePointerStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      left: huePosition.value.toString() + "px"
    });
  });
  const alphaPointerStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      left: alphaPosition.value.toString() + "px"
    });
  });
  const gradientTrackStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      background: gradientStyleText()
    });
  });
  const directionPointerStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      left: directionPointer.value.x.toString() + "px",
      top: directionPointer.value.y.toString() + "px"
    });
  });
  function getGradientPointerStyle(item) {
    return new common_vendor.UTSJSONObject({
      left: (item.percent * 300).toString() + "px"
    });
  }
  function getGradientPointerInnerStyle(item) {
    return new common_vendor.UTSJSONObject({
      backgroundColor: item.color
    });
  }
  function getColorStyle(color) {
    return new common_vendor.UTSJSONObject({
      backgroundColor: color
    });
  }
  function parseSolidColor(color) {
    const state = parseSolidColorToState(color);
    hue.value = state["h"];
    saturation.value = state["s"];
    lightness.value = state["l"];
    alpha.value = 1;
    huePosition.value = hue.value / 360 * 300;
    saturationPosition.value = new Point({
      x: saturation.value / 100 * 300,
      y: (100 - lightness.value) / 100 * 150
    });
    alphaPosition.value = 300;
    currentColor.value = color;
  }
  function parseGradientColor(gradient) {
    const colors = [];
    const firstHash = gradient.indexOf("#");
    if (firstHash >= 0 && gradient.length >= firstHash + 7) {
      const firstColor = gradient.substring(firstHash, firstHash + 7);
      currentColor.value = firstColor;
      colors.push(createGradientColor(firstColor, 0));
    }
    const secondHash = gradient.indexOf("#", firstHash + 1);
    if (secondHash >= 0 && gradient.length >= secondHash + 7) {
      colors.push(createGradientColor(gradient.substring(secondHash, secondHash + 7), 1));
    }
    if (colors.length >= 2) {
      gradientColors.value = colors;
    }
  }
  function getDirectionAngle(direction) {
    if (direction == "to bottom")
      return 90;
    if (direction == "to left")
      return 180;
    if (direction == "to top")
      return 270;
    if (direction == "to bottom right")
      return 45;
    if (direction == "to bottom left")
      return 135;
    if (direction == "to top left")
      return 225;
    if (direction == "to top right")
      return 315;
    return 0;
  }
  function setDirectionPointerByAngle(angle) {
    const radius = 20;
    const radian = angle * Math.PI / 180;
    directionPointer.value = new Point({
      x: radius * Math.cos(radian) + 20,
      y: radius * Math.sin(radian) + 20
    });
  }
  function initColor(color) {
    if (color.includes("linear-gradient")) {
      colorTypeIndex.value = 1;
      parseGradientColor(color);
      previewType.value = "gradient";
    } else {
      colorTypeIndex.value = 0;
      parseSolidColor(color);
      previewType.value = "solid";
    }
    setDirectionPointerByAngle(getDirectionAngle(currentDirectionValue.value));
  }
  function toPickerRect(res) {
    var _a2, _b, _c, _d;
    return new PickerRect({
      left: (_a2 = res.left) !== null && _a2 !== void 0 ? _a2 : 0,
      top: (_b = res.top) !== null && _b !== void 0 ? _b : 0,
      width: (_c = res.width) !== null && _c !== void 0 ? _c : 0,
      height: (_d = res.height) !== null && _d !== void 0 ? _d : 0
    });
  }
  function loadRects() {
    uni_modules_uviewUltra_libs_function_index.upGetRect(".up-color-picker__gradient-track", false, instance === null || instance === void 0 ? null : instance.proxy).then((res) => {
      gradientTrackRect.value = toPickerRect(res);
    });
    uni_modules_uviewUltra_libs_function_index.upGetRect(".up-color-picker__saturation", false, instance === null || instance === void 0 ? null : instance.proxy).then((res) => {
      saturationRect.value = toPickerRect(res);
    });
    uni_modules_uviewUltra_libs_function_index.upGetRect(".up-color-picker__hue", false, instance === null || instance === void 0 ? null : instance.proxy).then((res) => {
      hueRect.value = toPickerRect(res);
    });
    uni_modules_uviewUltra_libs_function_index.upGetRect(".up-color-picker__alpha", false, instance === null || instance === void 0 ? null : instance.proxy).then((res) => {
      alphaRect.value = toPickerRect(res);
    });
    uni_modules_uviewUltra_libs_function_index.upGetRect(".up-color-picker__direction-circle", false, instance === null || instance === void 0 ? null : instance.proxy).then((res) => {
      directionCircleRect.value = toPickerRect(res);
    });
  }
  function refreshRect(target, selector, done = null) {
    uni_modules_uviewUltra_libs_function_index.upGetRect(selector, false, instance === null || instance === void 0 ? null : instance.proxy).then((res) => {
      const rect = toPickerRect(res);
      target.value = rect;
      if (done != null) {
        done(rect);
      }
    });
  }
  function onPopupOpen() {
    loadRects();
  }
  function open() {
    initColor(props.modelValue);
    show.value = true;
    common_vendor.nextTick$1(() => {
      loadRects();
    });
    setTimeout(() => {
      loadRects();
    }, 400);
  }
  function close() {
    show.value = false;
    emit("close");
  }
  function confirm() {
    const color = colorTypeIndex.value == 1 ? gradientStyleText() : currentColor.value;
    emit("update:modelValue", color);
    emit("confirm", color);
    show.value = false;
    editingGradientIndex.value = -1;
    previewType.value = colorTypeIndex.value == 0 ? "solid" : "gradient";
    emit("close");
  }
  function changeColorType(index) {
    colorTypeIndex.value = index;
    previewType.value = index == 0 ? "solid" : "gradient";
    if (index == 0 && currentColor.value.includes("linear-gradient")) {
      currentColor.value = gradientColors.value[0].color;
      parseSolidColor(currentColor.value);
    }
    common_vendor.nextTick$1(() => {
      loadRects();
    });
  }
  function selectCommonColor(color) {
    if (colorTypeIndex.value == 1 && editingGradientIndex.value >= 0 && editingGradientIndex.value < gradientColors.value.length) {
      gradientColors.value[editingGradientIndex.value].color = color;
      currentColor.value = color;
      previewType.value = "gradient-point";
    } else {
      parseSolidColor(color);
      previewType.value = "solid";
    }
  }
  function openColorPickerForGradient(index) {
    if (index < 0 || index >= gradientColors.value.length)
      return null;
    editingGradientIndex.value = index;
    currentColor.value = gradientColors.value[index].color;
    parseSolidColor(currentColor.value);
    colorTypeIndex.value = 1;
    previewType.value = "gradient-point";
  }
  function sortGradientColors() {
    const gColors = gradientColors.value;
    for (let i = 0; i < gColors.length - 1; i++) {
      for (let j = i + 1; j < gColors.length; j++) {
        if (gColors[i].percent > gColors[j].percent) {
          const temp = gColors[i];
          gColors[i] = gColors[j];
          gColors[j] = temp;
        }
      }
    }
  }
  function addGradientColor() {
    if (gradientColors.value.length >= 5)
      return null;
    gradientColors.value.push(createGradientColor(currentColor.value, 1));
    sortGradientColors();
  }
  function removeEditingGradientColor() {
    if (gradientColors.value.length <= 2)
      return null;
    if (editingGradientIndex.value < 0 || editingGradientIndex.value >= gradientColors.value.length)
      return null;
    gradientColors.value.splice(editingGradientIndex.value, 1);
    editingGradientIndex.value = -1;
    previewType.value = "gradient";
  }
  function applyTrackPercent(clientX, rect) {
    if (rect.width <= 0)
      return null;
    const index = draggingPointerIndex.value;
    if (index < 0 || index >= gradientColors.value.length)
      return null;
    const percent = clamp((clientX - rect.left) / rect.width, 0, 1);
    gradientColors.value[index].percent = percent;
    sortGradientColors();
    for (let i = 0; i < gradientColors.value.length; i++) {
      if (Math.abs(gradientColors.value[i].percent - percent) < 1e-4) {
        draggingPointerIndex.value = i;
        editingGradientIndex.value = i;
        break;
      }
    }
  }
  function onPointerTouchStart(index) {
    draggingPointerIndex.value = index;
    editingGradientIndex.value = index;
    currentColor.value = gradientColors.value[index].color;
    previewType.value = "gradient-point";
    refreshRect(gradientTrackRect, ".up-color-picker__gradient-track", null);
  }
  function onPointerTouchMove(e) {
    if (draggingPointerIndex.value < 0 || draggingPointerIndex.value >= gradientColors.value.length)
      return null;
    const touch = touchPoint(e);
    if (touch == null)
      return null;
    applyTrackPercent(touch.clientX, gradientTrackRect.value);
  }
  function onPointerTouchEnd() {
    draggingPointerIndex.value = -1;
  }
  function updateSolidColor() {
    const color = hslToRgba(hue.value, saturation.value, lightness.value, alpha.value);
    if (colorTypeIndex.value == 1 && editingGradientIndex.value >= 0 && editingGradientIndex.value < gradientColors.value.length) {
      gradientColors.value[editingGradientIndex.value].color = color;
      currentColor.value = color;
      previewType.value = "gradient-point";
    } else {
      currentColor.value = color;
      previewType.value = "solid";
    }
  }
  function applySaturationPosition(clientX, clientY, rect) {
    if (rect.width <= 0 || rect.height <= 0)
      return null;
    const x = clamp(clientX - rect.left, 0, rect.width);
    const y = clamp(clientY - rect.top, 0, rect.height);
    saturationPosition.value = new Point({ x, y });
    saturation.value = x / rect.width * 100;
    lightness.value = 100 - y / rect.height * 100;
    updateSolidColor();
  }
  function onSaturationTouchStart(e) {
    const touch = touchPoint(e);
    if (touch == null)
      return null;
    const clientX = touch.clientX;
    const clientY = touch.clientY;
    refreshRect(saturationRect, ".up-color-picker__saturation", (rect) => {
      applySaturationPosition(clientX, clientY, rect);
    });
  }
  function onSaturationTouchMove(e) {
    const touch = touchPoint(e);
    if (touch == null)
      return null;
    applySaturationPosition(touch.clientX, touch.clientY, saturationRect.value);
  }
  function onSaturationTouchEnd(e) {
    const touch = touchPoint(e);
    if (touch == null)
      return null;
    applySaturationPosition(touch.clientX, touch.clientY, saturationRect.value);
  }
  function applyHuePosition(clientX, rect) {
    if (rect.width <= 0)
      return null;
    const x = clamp(clientX - rect.left, 0, rect.width);
    huePosition.value = x;
    hue.value = Math.round(x / rect.width * 360);
    updateSolidColor();
  }
  function onHueTouchStart(e) {
    const touch = touchPoint(e);
    if (touch == null)
      return null;
    const clientX = touch.clientX;
    refreshRect(hueRect, ".up-color-picker__hue", (rect) => {
      applyHuePosition(clientX, rect);
    });
  }
  function onHueTouchMove(e) {
    const touch = touchPoint(e);
    if (touch == null)
      return null;
    applyHuePosition(touch.clientX, hueRect.value);
  }
  function onHueTouchEnd(e) {
    const touch = touchPoint(e);
    if (touch == null)
      return null;
    applyHuePosition(touch.clientX, hueRect.value);
  }
  function applyAlphaPosition(clientX, rect) {
    if (rect.width <= 0)
      return null;
    const x = clamp(clientX - rect.left, 0, rect.width);
    alphaPosition.value = x;
    alpha.value = x / rect.width;
    updateSolidColor();
  }
  function onAlphaTouchStart(e) {
    const touch = touchPoint(e);
    if (touch == null)
      return null;
    const clientX = touch.clientX;
    refreshRect(alphaRect, ".up-color-picker__alpha", (rect) => {
      applyAlphaPosition(clientX, rect);
    });
  }
  function onAlphaTouchMove(e) {
    const touch = touchPoint(e);
    if (touch == null)
      return null;
    applyAlphaPosition(touch.clientX, alphaRect.value);
  }
  function onAlphaTouchEnd(e) {
    const touch = touchPoint(e);
    if (touch == null)
      return null;
    applyAlphaPosition(touch.clientX, alphaRect.value);
  }
  function updateGradientDirection(angle) {
    if (angle >= 315 || angle < 45) {
      currentDirectionValue.value = "to right";
    } else if (angle >= 45 && angle < 135) {
      currentDirectionValue.value = "to bottom";
    } else if (angle >= 135 && angle < 225) {
      currentDirectionValue.value = "to left";
    } else {
      currentDirectionValue.value = "to top";
    }
  }
  function applyDirectionPosition(clientX, clientY, rect) {
    if (rect.width <= 0 || rect.height <= 0)
      return null;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = clientX - centerX;
    const y = clientY - centerY;
    const distance = Math.sqrt(x * x + y * y);
    const radius = rect.width / 2;
    const ratio = distance > radius ? radius / distance : 1;
    directionPointer.value = new Point({
      x: x * ratio + rect.width / 2,
      y: y * ratio + rect.height / 2
    });
    let angle = Math.atan2(y, x) * 180 / Math.PI;
    if (angle < 0)
      angle += 360;
    updateGradientDirection(angle);
  }
  function onDirectionTouchStart(e) {
    const touch = touchPoint(e);
    if (touch == null)
      return null;
    const clientX = touch.clientX;
    const clientY = touch.clientY;
    refreshRect(directionCircleRect, ".up-color-picker__direction-circle", (rect) => {
      applyDirectionPosition(clientX, clientY, rect);
    });
  }
  function onDirectionTouchMove(e) {
    const touch = touchPoint(e);
    if (touch == null)
      return null;
    applyDirectionPosition(touch.clientX, touch.clientY, directionCircleRect.value);
  }
  function onDirectionTouchEnd(e) {
    const touch = touchPoint(e);
    if (touch == null)
      return null;
    applyDirectionPosition(touch.clientX, touch.clientY, directionCircleRect.value);
  }
  common_vendor.watch(() => {
    return props.modelValue;
  }, (newVal) => {
    if (!show.value) {
      initColor(newVal);
    }
  });
  common_vendor.onMounted(() => {
    initColor(props.modelValue);
  });
  __expose({
    open,
    close,
    confirm
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: common_vendor.s(triggerStyle.value),
      b: common_vendor.o(open, "fa"),
      c: colorTypeIndex.value == 0 ? 1 : "",
      d: common_vendor.o(($event) => {
        return changeColorType(0);
      }, "c7"),
      e: colorTypeIndex.value == 1 ? 1 : "",
      f: common_vendor.o(($event) => {
        return changeColorType(1);
      }, "de"),
      g: colorTypeIndex.value == 1
    }, colorTypeIndex.value == 1 ? {
      h: common_vendor.f(gradientColors.value, (item, index, i0) => {
        return {
          a: common_vendor.s(getGradientPointerInnerStyle(item)),
          b: index,
          c: common_vendor.s(getGradientPointerStyle(item)),
          d: common_vendor.o(($event) => {
            return onPointerTouchStart(index);
          }, index),
          e: common_vendor.o(onPointerTouchMove, index),
          f: common_vendor.o(onPointerTouchEnd, index),
          g: common_vendor.o(($event) => {
            return openColorPickerForGradient(index);
          }, index)
        };
      }),
      i: common_vendor.s(gradientTrackStyle.value),
      j: common_vendor.o(addGradientColor, "e3"),
      k: common_vendor.p({
        type: "primary",
        size: "mini",
        plain: true,
        class: "up-color-picker__add-btn data-v-505c4be2"
      }),
      l: common_vendor.o(removeEditingGradientColor, "7e"),
      m: common_vendor.p({
        type: "info",
        size: "mini",
        plain: true,
        class: "up-color-picker__add-btn data-v-505c4be2"
      }),
      n: common_vendor.s(directionPointerStyle.value),
      o: common_vendor.o(onDirectionTouchStart, "31"),
      p: common_vendor.o(onDirectionTouchMove, "fc"),
      q: common_vendor.o(onDirectionTouchEnd, "e7")
    } : {}, {
      r: common_vendor.s(saturationPointerStyle.value),
      s: common_vendor.s(saturationStyle.value),
      t: common_vendor.o(onSaturationTouchStart, "e8"),
      v: common_vendor.o(onSaturationTouchMove, "7f"),
      w: common_vendor.o(onSaturationTouchEnd, "1d"),
      x: common_vendor.s(huePointerStyle.value),
      y: common_vendor.o(onHueTouchStart, "82"),
      z: common_vendor.o(onHueTouchMove, "14"),
      A: common_vendor.o(onHueTouchEnd, "8f"),
      B: colorTypeIndex.value == 0
    }, colorTypeIndex.value == 0 ? {
      C: common_vendor.s(alphaPointerStyle.value),
      D: common_vendor.o(onAlphaTouchStart, "e9"),
      E: common_vendor.o(onAlphaTouchMove, "4e"),
      F: common_vendor.o(onAlphaTouchEnd, "a8")
    } : {}, {
      G: normalizedCommonColors.value.length > 0
    }, normalizedCommonColors.value.length > 0 ? {
      H: common_vendor.f(normalizedCommonColors.value, (color, index, i0) => {
        return {
          a: index,
          b: common_vendor.s(getColorStyle(color)),
          c: common_vendor.o(($event) => {
            return selectCommonColor(color);
          }, index)
        };
      })
    } : {}, {
      I: common_vendor.s(previewStyle.value),
      J: common_vendor.t(displayColor.value),
      K: common_vendor.o(confirm, "7b"),
      L: common_vendor.p({
        type: "primary",
        size: "small",
        class: "up-color-picker__btn data-v-505c4be2"
      }),
      M: common_vendor.o(close, "c1"),
      N: common_vendor.p({
        type: "info",
        size: "small",
        class: "up-color-picker__btn data-v-505c4be2"
      }),
      O: common_vendor.o(close, "fd"),
      P: common_vendor.o(onPopupOpen, "ef"),
      Q: common_vendor.p({
        show: show.value,
        mode: "bottom",
        round: "10",
        closeOnClickOverlay: true,
        class: "data-v-505c4be2"
      }),
      R: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      S: `${_ctx.u_s_b_h}px`,
      T: `${_ctx.u_s_a_i_b}px`,
      U: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-505c4be2"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-color-picker/up-color-picker.js.map
