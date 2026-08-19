import { _ as __easycom_0 } from "../up-icon/up-icon.js";
import { r as resolveEasycom } from "../../../../App.ku.js";
import { g as getPx, a as addUnit } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, ref, watch, onMounted, nextTick } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-number-box"
  },
  __name: "up-number-box",
  props: {
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
        return new UTSJSONObject({});
      }
    },
    miniMode: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "focus", "blur", "overlimit", "change", "plus", "minus"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const type = ref("");
    const currentValue = ref("");
    const longPressTimer = ref(null);
    const hideMinus = computed(() => {
      return currentValue.value.toString() == "0" && props.miniMode == true;
    });
    const getCursorSpacing = computed(() => {
      return getPx(props.cursorSpacing);
    });
    const inputStyle = computed(() => {
      const style = new UTSJSONObject({
        color: props.color,
        backgroundColor: props.inputBgColor != "" ? props.inputBgColor : props.bgColor,
        height: addUnit(props.buttonSize),
        width: addUnit(props.inputWidth)
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
      const style = new UTSJSONObject({
        backgroundColor: props.bgColor,
        width: addUnit(props.buttonWidth),
        height: addUnit(props.buttonSize),
        borderRadius: props.buttonRadius
      });
      if (isDisabled(btnType)) {
        style["backgroundColor"] = props.disabledBgColor;
      }
      return style;
    }
    function emitChange(value, changeType = "") {
      if (!props.asyncChange) {
        nextTick(() => {
          emit("update:modelValue", value);
          currentValue.value = value;
        });
      }
      emit("change", new UTSJSONObject({
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
      if (crtType == "plus") {
        emit("plus");
      } else if (crtType == "minus") {
        emit("minus");
      }
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
      emit("focus", new UTSJSONObject({
        ...event.detail,
        name: props.name
      }));
    }
    function onBlur(event) {
      const value = format(event.detail.value);
      emitChange(value);
      emit("blur", new UTSJSONObject({
        ...event.detail,
        name: props.name
      }));
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
    watch(() => {
      return props.modelValue;
    }, (newV) => {
      if (newV !== currentValue.value) {
        currentValue.value = format(newV.toString());
      }
    });
    watch(() => {
      return [props.integer, props.decimalLength, props.min, props.max];
    }, () => {
      check();
    });
    onMounted(() => {
      init();
    });
    const __returned__ = { props, emit, type, currentValue, longPressTimer, hideMinus, getCursorSpacing, inputStyle, filter, format, isDisabled, buttonStyle, emitChange, check, add, onChange, clearTimeoutHandler, longPressStep, onTouchStart, clickHandler, onFocus, onBlur, onInput, init };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "up-number-box": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center" } }, "up-number-box__plus": { "": { "width": 35, "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "borderTopRightRadius": 4, "borderBottomRightRadius": 4 } }, "up-number-box__minus": { "": { "width": 35, "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "borderTopLeftRadius": 4, "borderBottomLeftRadius": 4 } }, "up-number-box__plus--hover": { "": { "!backgroundColor": "#E6E6E6" } }, "up-number-box__minus--hover": { "": { "!backgroundColor": "#E6E6E6" } }, "up-number-box__plus--disabled": { "": { "backgroundColor": "#f7f8fa" } }, "up-number-box__minus--disabled": { "": { "backgroundColor": "#f7f8fa" } }, "up-number-box__input": { "": { "textAlign": "center", "fontSize": 15, "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0, "marginTop": 0, "marginRight": 2, "marginBottom": 0, "marginLeft": 2 } }, "up-number-box__input--disabled": { "": { "color": "#c8c9cc", "backgroundColor": "#f2f3f5" } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { renderSlot: _renderSlot, withModifiers: _withModifiers, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, normalizeClass: _normalizeClass, normalizeStyle: _normalizeStyle, vModelText: _vModelText, createElementVNode: _createElementVNode, withDirectives: _withDirectives } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0);
  return _openBlock(), _createElementBlock("view", { class: "up-number-box" }, [
    $props.showMinus && !$setup.hideMinus && _ctx.$slots["minus"] != null ? (_openBlock(), _createElementBlock(
      "view",
      {
        key: 0,
        class: "up-number-box__slot cursor-pointer",
        onClick: _cache[0] || (_cache[0] = _withModifiers(($event) => $setup.clickHandler("minus"), ["stop"])),
        onTouchstart: _cache[1] || (_cache[1] = ($event) => $setup.onTouchStart("minus")),
        onTouchend: _withModifiers($setup.clearTimeoutHandler, ["stop"])
      },
      [
        _renderSlot(_ctx.$slots, "minus")
      ],
      32
      /* NEED_HYDRATION */
    )) : $props.showMinus && !$setup.hideMinus ? (_openBlock(), _createElementBlock(
      "view",
      {
        key: 1,
        class: _normalizeClass(["up-number-box__minus cursor-pointer", { "up-number-box__minus--disabled": $setup.isDisabled("minus") }]),
        onClick: _cache[2] || (_cache[2] = _withModifiers(($event) => $setup.clickHandler("minus"), ["stop"])),
        onTouchstart: _cache[3] || (_cache[3] = ($event) => $setup.onTouchStart("minus")),
        onTouchend: _withModifiers($setup.clearTimeoutHandler, ["stop"]),
        "hover-class": "up-number-box__minus--hover",
        "hover-stay-time": "150",
        style: _normalizeStyle($setup.buttonStyle("minus"))
      },
      [
        _createVNode(_component_up_icon, {
          name: "minus",
          color: $setup.isDisabled("minus") ? "#c8c9cc" : "#323233",
          size: "15",
          bold: "",
          customStyle: $props.iconStyle
        }, null, 8, ["color", "customStyle"])
      ],
      38
      /* CLASS, STYLE, NEED_HYDRATION */
    )) : _createCommentVNode("v-if", true),
    !$setup.hideMinus ? _renderSlot(_ctx.$slots, "input", { key: 2 }, () => [
      _withDirectives(_createElementVNode("input", {
        disabled: $props.disabledInput || $props.disabled,
        "cursor-spacing": $setup.getCursorSpacing,
        class: _normalizeClass([{ "up-number-box__input--disabled": $props.disabled || $props.disabledInput }, "up-number-box__input"]),
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.currentValue = $event),
        onBlur: $setup.onBlur,
        onFocus: $setup.onFocus,
        onInput: $setup.onInput,
        type: "number",
        style: _normalizeStyle($setup.inputStyle)
      }, null, 46, ["disabled", "cursor-spacing"]), [
        [_vModelText, $setup.currentValue]
      ])
    ]) : _createCommentVNode("v-if", true),
    $props.showPlus && _ctx.$slots["plus"] != null ? (_openBlock(), _createElementBlock(
      "view",
      {
        key: 3,
        class: "up-number-box__slot cursor-pointer",
        onClick: _cache[5] || (_cache[5] = _withModifiers(($event) => $setup.clickHandler("plus"), ["stop"])),
        onTouchstart: _cache[6] || (_cache[6] = ($event) => $setup.onTouchStart("plus")),
        onTouchend: _withModifiers($setup.clearTimeoutHandler, ["stop"])
      },
      [
        _renderSlot(_ctx.$slots, "plus")
      ],
      32
      /* NEED_HYDRATION */
    )) : $props.showPlus ? (_openBlock(), _createElementBlock(
      "view",
      {
        key: 4,
        class: _normalizeClass(["up-number-box__plus cursor-pointer", { "up-number-box__minus--disabled": $setup.isDisabled("plus") }]),
        onClick: _cache[7] || (_cache[7] = _withModifiers(($event) => $setup.clickHandler("plus"), ["stop"])),
        onTouchstart: _cache[8] || (_cache[8] = ($event) => $setup.onTouchStart("plus")),
        onTouchend: _withModifiers($setup.clearTimeoutHandler, ["stop"]),
        "hover-class": "up-number-box__plus--hover",
        "hover-stay-time": "150",
        style: _normalizeStyle($setup.buttonStyle("plus"))
      },
      [
        _createVNode(_component_up_icon, {
          name: "plus",
          color: $setup.isDisabled("plus") ? "#c8c9cc" : "#323233",
          size: "15",
          bold: "",
          customStyle: $props.iconStyle
        }, null, 8, ["color", "customStyle"])
      ],
      38
      /* CLASS, STYLE, NEED_HYDRATION */
    )) : _createCommentVNode("v-if", true)
  ]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-number-box/up-number-box.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-number-box.js.map
