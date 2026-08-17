import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { g as getPx, a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpNumberBoxUpNumberBox";
const { computed, ref, watch, onMounted, nextTick } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-number-box"
  },
  __dynamicSharedData: true,
  __hash: "5854f6d8",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-number-box/up-number-box.uvue",
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
    var __emit = _a.emit, $slots = _a.slots;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpNumberBoxUpNumberBoxSharedData", sharedDataClassId: 0 })));
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
    return () => {
      "raw js";
      const _component_up_icon = __easycom_0;
      const _component_input = _resolveComponent("input");
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.showMinus && !hideMinus.value && $slots["minus"] != null));
      }, () => {
        _createSharedDataSlot("minus", null, null);
        _setSharedDataEvent(__sharedData, 1, () => {
          return clickHandler("minus");
        });
        _setSharedDataEvent(__sharedData, 2, () => {
          return onTouchStart("minus");
        });
        _setSharedDataEvent(__sharedData, 3, clearTimeoutHandler);
      }, () => {
        return _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 4, _toSharedDataBoolean(__props.showMinus && !hideMinus.value));
        }, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataClass(__sharedData, 9, ["up-number-box__minus cursor-pointer", { "up-number-box__minus--disabled": isDisabled("minus") }]);
            _setSharedDataStyle(__sharedData, 10, buttonStyle("minus"));
          });
          const n5 = _createSharedDataComponentWithFallback(_component_up_icon, "74daa3d5", {
            name: "minus",
            color: () => {
              return isDisabled("minus") ? "#c8c9cc" : "#323233";
            },
            size: "15",
            bold: "",
            customStyle: () => {
              return __props.iconStyle;
            }
          });
          _setSharedData(__sharedData, 5, n5?.sharedData);
          _setSharedDataEvent(__sharedData, 6, () => {
            return clickHandler("minus");
          });
          _setSharedDataEvent(__sharedData, 7, () => {
            return onTouchStart("minus");
          });
          _setSharedDataEvent(__sharedData, 8, clearTimeoutHandler);
        });
      }, 261);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 11, _toSharedDataBoolean(!hideMinus.value));
      }, () => {
        _createSharedDataSlot("input", null, null, () => {
          const n11 = _createSharedDataComponentWithFallback(_component_input, "74daabd9", {
            disabled: () => {
              return __props.disabledInput || __props.disabled;
            },
            "cursor-spacing": () => {
              return getCursorSpacing.value;
            },
            class: () => {
              return [{ "up-number-box__input--disabled": __props.disabled || __props.disabledInput }, "up-number-box__input"];
            },
            value: () => {
              return currentValue.value;
            },
            "onUpdate:value": () => {
              return (_value) => {
                return currentValue.value = _value;
              };
            },
            onBlur: () => {
              return onBlur;
            },
            onFocus: () => {
              return onFocus;
            },
            onInput: () => {
              return onInput;
            },
            type: "number",
            style: () => {
              return inputStyle.value;
            }
          });
          _setSharedData(__sharedData, 12, n11?.sharedData);
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 13, _toSharedDataBoolean(__props.showPlus && $slots["plus"] != null));
      }, () => {
        _createSharedDataSlot("plus", null, null);
        _setSharedDataEvent(__sharedData, 14, () => {
          return clickHandler("plus");
        });
        _setSharedDataEvent(__sharedData, 15, () => {
          return onTouchStart("plus");
        });
        _setSharedDataEvent(__sharedData, 16, clearTimeoutHandler);
      }, () => {
        return _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 17, _toSharedDataBoolean(__props.showPlus));
        }, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataClass(__sharedData, 22, ["up-number-box__plus cursor-pointer", { "up-number-box__minus--disabled": isDisabled("plus") }]);
            _setSharedDataStyle(__sharedData, 23, buttonStyle("plus"));
          });
          const n17 = _createSharedDataComponentWithFallback(_component_up_icon, "267785bf", {
            name: "plus",
            color: () => {
              return isDisabled("plus") ? "#c8c9cc" : "#323233";
            },
            size: "15",
            bold: "",
            customStyle: () => {
              return __props.iconStyle;
            }
          });
          _setSharedData(__sharedData, 18, n17?.sharedData);
          _setSharedDataEvent(__sharedData, 19, () => {
            return clickHandler("plus");
          });
          _setSharedDataEvent(__sharedData, 20, () => {
            return onTouchStart("plus");
          });
          _setSharedDataEvent(__sharedData, 21, clearTimeoutHandler);
        });
      }, 1029);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-number-box.js.map
