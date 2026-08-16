import { _ as __easycom_0 } from "../rice-icon/rice-icon.js";
import { m as getPrecision, e as isSameValue, a as addUnit, s as splitCssProperty, h as hasStrValue, t as toNum, j as callInterceptor, I as InterceptorOption, c as clamp } from "../../libs/utils/basic.js";
import { i as isDark } from "../../libs/store/useConfig.js";
import { d as debugWarn } from "../../libs/utils/debug.js";
import "../../libs/use/useCountDown/index.js";
import { u as useNamespace } from "../../libs/use/useNamespace/index.js";
import "../../libs/use/usePopup/index.js";
import "../../libs/use/useRelation/useChildren.js";
import "../../libs/use/useRelation/useParent.js";
import "../../libs/use/useSafeArea/index.js";
import "../../libs/use/useTouch/index.js";
import { f as formDisabledInjectKey, a as formReadonlyInjectKey } from "../rice-form/index.js";
import "./type.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, useModel: _useModel, mergeModels: _mergeModels, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedDataEvent: _setSharedDataEvent, createSharedDataIf: _createSharedDataIf } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceStepperRiceStepper";
const { inject, computed, reactive, nextTick, watch } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-stepper",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "c270af3c",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-stepper/rice-stepper.uvue",
  __name: "rice-stepper",
  props: /* @__PURE__ */ _mergeModels(new UTSJSONObject({
    mode: { default: "square", type: String },
    step: { default: 1, type: Number },
    stepStrictly: { type: Boolean },
    min: { default: -Infinity, type: Number },
    max: { default: Infinity, type: Number },
    autoFixed: { type: Boolean, default: true },
    integer: { type: Boolean, default: false },
    decimalLength: { default: 0, type: Number },
    inputWidth: { type: [Number, String] },
    buttonSize: { type: [Number, String] },
    fontSize: { default: "14px", type: [Number, String] },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    disablePlus: { type: Boolean, default: false },
    disableMinus: { type: Boolean, default: false },
    disableInput: { type: Boolean, default: false },
    showPlus: { type: Boolean, default: true },
    showMinus: { type: Boolean, default: true },
    showInput: { type: Boolean, default: true },
    beforeChange: { type: null },
    plusBtnStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null },
    minusBtnStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null },
    inputStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  }), new UTSJSONObject({
    "modelValue": {
      type: Number
    },
    "modelModifiers": {}
  })),
  emits: /* @__PURE__ */ _mergeModels(["change", "blur", "focus", "input"], ["update:modelValue"]),
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceStepperRiceStepperSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("stepper");
    const emit = __emit;
    const props = __props;
    const modelValue = _useModel(__props, "modelValue");
    const formDisabled = inject(formDisabledInjectKey, null);
    const formReadonly = inject(formReadonlyInjectKey, null);
    const _readonly = computed(() => {
      var _a2;
      return ((_a2 = formReadonly === null || formReadonly === void 0 ? null : formReadonly.value) !== null && _a2 !== void 0 ? _a2 : false) || props.readonly;
    });
    const overMax = computed(() => {
      return modelValue.value != null ? modelValue.value >= props.max : false;
    });
    const overMin = computed(() => {
      return modelValue.value != null ? modelValue.value <= props.min : false;
    });
    const _disabledInput = computed(() => {
      var _a2;
      return props.disableInput || _readonly.value || props.disabled || ((_a2 = formDisabled === null || formDisabled === void 0 ? null : formDisabled.value) !== null && _a2 !== void 0 ? _a2 : false);
    });
    const _disabledPlus = computed(() => {
      var _a2;
      return props.disablePlus || props.disabled || overMax.value || ((_a2 = formDisabled === null || formDisabled === void 0 ? null : formDisabled.value) !== null && _a2 !== void 0 ? _a2 : false);
    });
    const _disabledMinus = computed(() => {
      var _a2;
      return props.disableMinus || props.disabled || overMin.value || ((_a2 = formDisabled === null || formDisabled === void 0 ? null : formDisabled.value) !== null && _a2 !== void 0 ? _a2 : false);
    });
    const _beforeChange = computed(() => {
      return props.beforeChange != null && typeof props.beforeChange == "function";
    });
    const inputType = computed(() => {
      return "text";
    });
    const current = reactive(new UTSJSONObject({
      inputValue: null,
      currentValue: modelValue.value
    }));
    const displayValue = computed(() => {
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
    const numPrecision = computed(() => {
      const stepDecimal = getPrecision(props.step);
      if (props.decimalLength > 0) {
        if (stepDecimal > props.decimalLength) {
          debugWarn("Stepper", "The decimalLength cannot be less than the number of decimal places of step!");
        }
        return props.decimalLength;
      }
      return Math.max(getPrecision(modelValue.value), stepDecimal);
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
        debugWarn("Steeper", "min should not be greater than max.");
      }
      const val = hasStrValue(value) ? value : autoFixed ? getMin() : null;
      if (val == null || isNaN(toNum(val)))
        return null;
      let newVal = toNum(val);
      if (decimalLength != 0) {
        newVal = format(newVal, decimalLength);
      }
      if (integer) {
        newVal = Math.round(newVal);
      }
      if (autoFixed) {
        newVal = clamp(newVal, min, max);
      }
      if (!isSameValue(newVal, value) && update) {
        updateModelValue(newVal);
      }
      return newVal;
    }
    const handleChange = (newVal) => {
      const oldVal = current.currentValue;
      updateModelValue(newVal);
      if (!isSameValue(newVal, oldVal)) {
        emit("change", newVal, oldVal == null ? oldVal : toNum(oldVal));
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
      if (isSameValue(newVal, oldVal))
        return null;
      if (!_beforeChange.value) {
        current.inputValue = null;
        handleChange(newVal);
        return null;
      }
      callInterceptor(props.beforeChange, new InterceptorOption({
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
      if (!isSameValue(modelValue.value, current.currentValue)) {
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
      nextTick(() => {
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
      const newVal = hasStrValue(value) ? parseFloat(value) : "";
      if (typeof newVal == "number" && !isNaN(newVal) || isEmptyStr(newVal)) {
        setCurrentValue(newVal, "blur");
      }
      setCurrentByModelValue();
      nextTick(() => {
        return emit("blur", e);
      });
    };
    watch(modelValue, (newVal = null, oldVal = null) => {
      const value = verifyValue(newVal, true);
      if (current.inputValue == null && !isSameValue(value, oldVal)) {
        current.currentValue = value;
      }
    }, {
      immediate: true
    });
    watch([
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
      const textStyle = splitCssProperty(type == "plus" ? props.plusBtnStyle : props.minusBtnStyle).textCssProperty;
      if (typeof textStyle["color"] == "string") {
        return textStyle["color"];
      }
      if (props.mode == "round") {
        return type == "minus" ? "var(--rice-primary-color)" : "var(--rice-text-color-white)";
      }
      return "var(--rice-text-color)";
    };
    const btnStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.buttonSize != null) {
        const size = addUnit(props.buttonSize);
        css.set("height", size);
        css.set("width", size);
      }
      return css;
    });
    const inputBoxStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.buttonSize != null) {
        css.set("height", addUnit(props.buttonSize));
      }
      if (props.inputWidth != null) {
        css.set("width", addUnit(props.inputWidth));
      }
      css.set("font-size", addUnit(props.fontSize));
      return css;
    });
    const stepperClass = computed(() => {
      return [
        ns.b(""),
        ns.theme(),
        ns.is("disabled", props.disabled),
        ns.m(props.mode)
      ];
    });
    const minusClass = computed(() => {
      return [
        ns.e("minus"),
        ns.is("__minus--disabled", _disabledMinus.value && !props.disabled),
        ns.e(`minus--${props.mode}`)
      ];
    });
    const plusClass = computed(() => {
      return [
        ns.e("plus"),
        ns.is("__plus--disabled", _disabledPlus.value && !props.disabled),
        ns.e(`plus--${props.mode}`)
      ];
    });
    const inputClass = computed(() => {
      const basic = [ns.e("input"), ns.e(`input--${props.mode}`)];
      if (isDark.value) {
        basic.push("rice-stepper__input--dark");
      }
      return basic;
    });
    return () => {
      "raw js";
      const _component_rice_icon = __easycom_0;
      const _component_input = _resolveComponent("input");
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 12, _unref(stepperClass));
        _setSharedDataStyle(__sharedData, 13, __props.customStyle);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.showMinus));
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 3, _unref(minusClass));
          _setSharedDataStyle(__sharedData, 4, [_unref(btnStyle), _unref(splitCssProperty)(__props.minusBtnStyle).rectCssProperty]);
        });
        const n2 = _createSharedDataComponentWithFallback(_component_rice_icon, "2dc7028b", {
          name: "minus",
          size: () => {
            return __props.fontSize;
          },
          color: () => {
            return getIconColor("minus");
          }
        });
        _setSharedData(__sharedData, 1, n2?.sharedData);
        _setSharedDataEvent(__sharedData, 2, decrease);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 5, _toSharedDataBoolean(__props.showInput));
      }, () => {
        const n6 = _createSharedDataComponentWithFallback(_component_input, "2dc7062c", {
          type: () => {
            return _unref(inputType);
          },
          class: () => {
            return _unref(inputClass);
          },
          value: () => {
            return _unref(displayValue);
          },
          style: () => {
            return [_unref(inputBoxStyle), __props.inputStyle];
          },
          disabled: () => {
            return _unref(_disabledInput);
          },
          onInput: () => {
            return onInput;
          },
          onFocus: () => {
            return onFocus;
          },
          onBlur: () => {
            return onBlur;
          }
        });
        _setSharedData(__sharedData, 6, n6?.sharedData);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 7, _toSharedDataBoolean(__props.showPlus));
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 10, _unref(plusClass));
          _setSharedDataStyle(__sharedData, 11, [_unref(btnStyle), _unref(splitCssProperty)(__props.plusBtnStyle).rectCssProperty]);
        });
        const n9 = _createSharedDataComponentWithFallback(_component_rice_icon, "2dc71491", {
          name: "plus",
          size: () => {
            return __props.fontSize;
          },
          color: () => {
            return getIconColor("plus");
          }
        });
        _setSharedData(__sharedData, 8, n9?.sharedData);
        _setSharedDataEvent(__sharedData, 9, increase);
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=rice-stepper.js.map
