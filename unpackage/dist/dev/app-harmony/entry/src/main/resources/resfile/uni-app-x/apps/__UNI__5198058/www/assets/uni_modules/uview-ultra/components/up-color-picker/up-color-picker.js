import { _ as __easycom_3 } from "../up-button/up-button.js";
import { _ as __easycom_4 } from "../up-popup/up-popup.js";
import { u as upGetRect } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, setSharedDataClass: _setSharedDataClass, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, toDisplayString: _toDisplayString, createSharedDataFor: _createSharedDataFor, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpColorPickerUpColorPicker";
const { ref, computed, watch, onMounted, getCurrentInstance, nextTick } = globalThis.Vue;
class Point extends UTS.UTSType {
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
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.x = this.__props__.x;
    this.y = this.__props__.y;
    delete this.__props__;
  }
}
class GradientColor extends UTS.UTSType {
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
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.color = this.__props__.color;
    this.percent = this.__props__.percent;
    delete this.__props__;
  }
}
class PickerRect extends UTS.UTSType {
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
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.left = this.__props__.left;
    this.top = this.__props__.top;
    this.width = this.__props__.width;
    this.height = this.__props__.height;
    delete this.__props__;
  }
}
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-color-picker"
  },
  __dynamicSharedData: true,
  __hash: "0b5d194d",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-color-picker/up-color-picker.uvue",
  __name: "up-color-picker",
  props: {
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
  },
  emits: ["update:modelValue", "confirm", "close"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpColorPickerUpColorPickerSharedData", sharedDataClassId: 0 })));
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
      return new UTSJSONObject({
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
      return new UTSJSONObject({
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
    const instance = getCurrentInstance();
    const show = ref(false);
    const colorTypeIndex = ref(0);
    const hue = ref(0);
    const saturation = ref(100);
    const lightness = ref(50);
    const alpha = ref(1);
    const saturationPosition = ref(new Point({ x: 150, y: 0 }));
    const huePosition = ref(0);
    const alphaPosition = ref(300);
    const gradientColors = ref([
      createGradientColor("#ff0000", 0),
      createGradientColor("#0000ff", 1)
    ]);
    const currentDirectionValue = ref("to right");
    const currentColor = ref("#ff0000");
    const draggingPointerIndex = ref(-1);
    const directionPointer = ref(new Point({ x: 40, y: 20 }));
    const editingGradientIndex = ref(-1);
    const previewType = ref("solid");
    const gradientTrackRect = ref(new PickerRect({ left: 0, top: 0, width: 0, height: 0 }));
    const saturationRect = ref(new PickerRect({ left: 0, top: 0, width: 0, height: 0 }));
    const hueRect = ref(new PickerRect({ left: 0, top: 0, width: 0, height: 0 }));
    const alphaRect = ref(new PickerRect({ left: 0, top: 0, width: 0, height: 0 }));
    const directionCircleRect = ref(new PickerRect({ left: 0, top: 0, width: 0, height: 0 }));
    const normalizedCommonColors = computed(() => {
      const colors = props.commonColors;
      if (colors.length > 0) {
        return colors;
      }
      return defaultColors();
    });
    const triggerStyle = computed(() => {
      return new UTSJSONObject({
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
    const displayColor = computed(() => {
      if (previewType.value == "gradient") {
        return gradientStyleText();
      }
      if (previewType.value == "gradient-point" && editingGradientIndex.value >= 0 && editingGradientIndex.value < gradientColors.value.length) {
        return gradientColors.value[editingGradientIndex.value].color;
      }
      return currentColor.value;
    });
    const previewStyle = computed(() => {
      return new UTSJSONObject({
        background: displayColor.value,
        backgroundColor: displayColor.value
      });
    });
    const saturationStyle = computed(() => {
      return new UTSJSONObject({
        backgroundColor: hslToRgba(hue.value, 100, 50, 1)
      });
    });
    const saturationPointerStyle = computed(() => {
      return new UTSJSONObject({
        left: saturationPosition.value.x.toString() + "px",
        top: saturationPosition.value.y.toString() + "px"
      });
    });
    const huePointerStyle = computed(() => {
      return new UTSJSONObject({
        left: huePosition.value.toString() + "px"
      });
    });
    const alphaPointerStyle = computed(() => {
      return new UTSJSONObject({
        left: alphaPosition.value.toString() + "px"
      });
    });
    const gradientTrackStyle = computed(() => {
      return new UTSJSONObject({
        background: gradientStyleText()
      });
    });
    const directionPointerStyle = computed(() => {
      return new UTSJSONObject({
        left: directionPointer.value.x.toString() + "px",
        top: directionPointer.value.y.toString() + "px"
      });
    });
    function getGradientPointerStyle(item) {
      return new UTSJSONObject({
        left: (item.percent * 300).toString() + "px"
      });
    }
    function getGradientPointerInnerStyle(item) {
      return new UTSJSONObject({
        backgroundColor: item.color
      });
    }
    function getColorStyle(color) {
      return new UTSJSONObject({
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
      upGetRect(".up-color-picker__gradient-track", false, instance === null || instance === void 0 ? null : instance.proxy).then((res) => {
        gradientTrackRect.value = toPickerRect(res);
      });
      upGetRect(".up-color-picker__saturation", false, instance === null || instance === void 0 ? null : instance.proxy).then((res) => {
        saturationRect.value = toPickerRect(res);
      });
      upGetRect(".up-color-picker__hue", false, instance === null || instance === void 0 ? null : instance.proxy).then((res) => {
        hueRect.value = toPickerRect(res);
      });
      upGetRect(".up-color-picker__alpha", false, instance === null || instance === void 0 ? null : instance.proxy).then((res) => {
        alphaRect.value = toPickerRect(res);
      });
      upGetRect(".up-color-picker__direction-circle", false, instance === null || instance === void 0 ? null : instance.proxy).then((res) => {
        directionCircleRect.value = toPickerRect(res);
      });
    }
    function refreshRect(target, selector, done = null) {
      upGetRect(selector, false, instance === null || instance === void 0 ? null : instance.proxy).then((res) => {
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
      nextTick(() => {
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
      nextTick(() => {
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
    watch(() => {
      return props.modelValue;
    }, (newVal) => {
      if (!show.value) {
        initColor(newVal);
      }
    });
    onMounted(() => {
      initColor(props.modelValue);
    });
    __expose({
      open,
      close,
      confirm
    });
    return () => {
      "raw js";
      const _component_up_button = __easycom_3;
      const _component_up_popup = __easycom_4;
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 35, triggerStyle.value);
      });
      _createSharedDataSlot("default", null, null);
      _setSharedDataEvent(__sharedData, 34, open);
      const n65 = _createSharedDataComponentWithFallback(_component_up_popup, "4fd8ff0c", {
        show: () => {
          return show.value;
        },
        mode: "bottom",
        round: "10",
        onClose: () => {
          return close;
        },
        onOpen: () => {
          return onPopupOpen;
        },
        closeOnClickOverlay: true
      }, {
        "default": _withSharedDataVaporCtx(() => {
          _setSharedDataEvent(__sharedData, 19, () => {
            return changeColorType(0);
          });
          _setSharedDataEvent(__sharedData, 20, () => {
            return changeColorType(1);
          });
          _renderSharedDataEffect(() => {
            const _colorTypeIndex = colorTypeIndex.value;
            _setSharedDataClass(__sharedData, 27, ["up-color-picker__switch-item", { "up-color-picker__switch-item--active": _colorTypeIndex == 0 }]);
            _setSharedDataClass(__sharedData, 28, ["up-color-picker__switch-item", { "up-color-picker__switch-item--active": _colorTypeIndex == 1 }]);
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 1, _toSharedDataBoolean(colorTypeIndex.value == 1));
          }, () => {
            _renderSharedDataEffect(() => {
              return _setSharedDataStyle(__sharedData, 8, gradientTrackStyle.value);
            });
            _createSharedDataFor(_setSharedDataScoped(__sharedData, 2, _createSharedDataVFor(__sharedDataScope, () => {
              return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
            })), () => {
              return gradientColors.value;
            }, (__sharedData_VFor0, _for_item0, _for_key0) => {
              _setSharedDataEvent(__sharedData_VFor0, 1, () => {
                return onPointerTouchStart(_for_key0.value);
              });
              _setSharedDataEvent(__sharedData_VFor0, 2, onPointerTouchMove);
              _setSharedDataEvent(__sharedData_VFor0, 3, onPointerTouchEnd);
              _setSharedDataEvent(__sharedData_VFor0, 4, () => {
                return openColorPickerForGradient(_for_key0.value);
              });
              _renderSharedDataEffect(() => {
                const _item = _for_item0.value;
                _setSharedDataStyle(__sharedData_VFor0, 5, getGradientPointerStyle(_item));
                _setSharedDataStyle(__sharedData_VFor0, 6, getGradientPointerInnerStyle(_item));
              });
              return null;
            }, (__sharedData_VFor0, item, index) => {
              return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
            }, 1);
            const n17 = _createSharedDataComponentWithFallback(_component_up_button, "a9722a3c", {
              type: "primary",
              size: "mini",
              plain: "",
              class: "up-color-picker__add-btn",
              onClick: () => {
                return addGradientColor;
              }
            }, {
              "default": _withSharedDataVaporCtx(() => {
              }, "string")
            });
            _setSharedData(__sharedData, 3, n17?.sharedData);
            const n19 = _createSharedDataComponentWithFallback(_component_up_button, "a9722232", {
              type: "info",
              size: "mini",
              plain: "",
              class: "up-color-picker__add-btn",
              onClick: () => {
                return removeEditingGradientColor;
              }
            }, {
              "default": _withSharedDataVaporCtx(() => {
              }, "string")
            });
            _setSharedData(__sharedData, 4, n19?.sharedData);
            _setSharedDataEvent(__sharedData, 5, onDirectionTouchStart);
            _setSharedDataEvent(__sharedData, 6, onDirectionTouchMove);
            _setSharedDataEvent(__sharedData, 7, onDirectionTouchEnd);
            _renderSharedDataEffect(() => {
              return _setSharedDataStyle(__sharedData, 9, directionPointerStyle.value);
            });
          });
          _setSharedDataEvent(__sharedData, 21, onSaturationTouchStart);
          _setSharedDataEvent(__sharedData, 22, onSaturationTouchMove);
          _setSharedDataEvent(__sharedData, 23, onSaturationTouchEnd);
          _setSharedDataEvent(__sharedData, 24, onHueTouchStart);
          _setSharedDataEvent(__sharedData, 25, onHueTouchMove);
          _setSharedDataEvent(__sharedData, 26, onHueTouchEnd);
          _renderSharedDataEffect(() => {
            _setSharedDataStyle(__sharedData, 29, saturationStyle.value);
            _setSharedDataStyle(__sharedData, 30, saturationPointerStyle.value);
            _setSharedDataStyle(__sharedData, 31, huePointerStyle.value);
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 12, _toSharedDataBoolean(colorTypeIndex.value == 0));
          }, () => {
            _setSharedDataEvent(__sharedData, 13, onAlphaTouchStart);
            _setSharedDataEvent(__sharedData, 14, onAlphaTouchMove);
            _setSharedDataEvent(__sharedData, 15, onAlphaTouchEnd);
            _renderSharedDataEffect(() => {
              return _setSharedDataStyle(__sharedData, 16, alphaPointerStyle.value);
            });
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 10, _toSharedDataBoolean(normalizedCommonColors.value.length > 0));
          }, () => {
            _createSharedDataFor(_setSharedDataScoped(__sharedData, 11, _createSharedDataVFor(__sharedDataScope, () => {
              return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 2 });
            })), () => {
              return normalizedCommonColors.value;
            }, (__sharedData_VFor1, _for_item1, _for_key1) => {
              _setSharedDataEvent(__sharedData_VFor1, 1, () => {
                return selectCommonColor(_for_item1.value);
              });
              _renderSharedDataEffect(() => {
                return _setSharedDataStyle(__sharedData_VFor1, 2, getColorStyle(_for_item1.value));
              });
              return null;
            }, (__sharedData_VFor1, color, index) => {
              return _setSharedData(__sharedData_VFor1, 0, _toDisplayString(index));
            }, 1);
          });
          _renderSharedDataEffect(() => {
            _setSharedDataStyle(__sharedData, 32, previewStyle.value);
            _setSharedData(__sharedData, 33, _toDisplayString(displayColor.value));
          });
          const n57 = _createSharedDataComponentWithFallback(_component_up_button, "a96f6234", {
            type: "primary",
            size: "small",
            class: "up-color-picker__btn",
            onClick: () => {
              return confirm;
            }
          }, {
            "default": _withSharedDataVaporCtx(() => {
            }, "string")
          });
          _setSharedData(__sharedData, 17, n57?.sharedData);
          const n59 = _createSharedDataComponentWithFallback(_component_up_button, "a96f5aa6", {
            type: "info",
            size: "small",
            class: "up-color-picker__btn",
            onClick: () => {
              return close;
            }
          }, {
            "default": _withSharedDataVaporCtx(() => {
            }, "string")
          });
          _setSharedData(__sharedData, 18, n59?.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n65?.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-color-picker.js.map
