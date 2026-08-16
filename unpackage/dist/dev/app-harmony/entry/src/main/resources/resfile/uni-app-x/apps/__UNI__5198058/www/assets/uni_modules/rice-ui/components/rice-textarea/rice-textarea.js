import "../../libs/use/useCountDown/index.js";
import { i as isDark } from "../../libs/store/useConfig.js";
import { u as useNamespace } from "../../libs/use/useNamespace/index.js";
import "../../libs/use/usePopup/index.js";
import "../../libs/use/useRelation/useChildren.js";
import "../../libs/use/useRelation/useParent.js";
import "../../libs/use/useSafeArea/index.js";
import "../../libs/use/useTouch/index.js";
import { h as hasStrValue, a as addUnit } from "../../libs/utils/basic.js";
import { f as formDisabledInjectKey, a as formReadonlyInjectKey } from "../rice-form/index.js";
import { a as formItemBlurInjectKey } from "../rice-form-item/index.js";
import "./type.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, useModel: _useModel, mergeModels: _mergeModels, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, toDisplayString: _toDisplayString, createSharedDataIf: _createSharedDataIf } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceTextareaRiceTextarea";
const { ref, inject, computed, onUnmounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-textarea",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "23f7bd60",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-textarea/rice-textarea.uvue",
  __name: "rice-textarea",
  props: /* @__PURE__ */ _mergeModels(new UTSJSONObject({
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    placeholder: { type: String },
    placeholderStyle: { type: String },
    maxlength: { default: -1, type: Number },
    cursorSpacing: { default: 0, type: Number },
    cursorColor: { type: String },
    autoFocus: { type: Boolean, default: false },
    focus: { type: Boolean, default: false },
    confirmType: { default: "return", type: String },
    confirmHold: { type: Boolean, default: false },
    autoHeight: { type: Boolean, default: false },
    cursor: { default: 0, type: Number },
    selectionStart: { default: -1, type: Number },
    selectionEnd: { default: -1, type: Number },
    adjustPosition: { type: Boolean, default: true },
    inputmode: { type: String },
    holdKeyboard: { type: Boolean, default: false },
    fixed: { type: Boolean },
    showConfirmBar: { type: Boolean },
    disableDefaultPadding: { type: Boolean },
    height: { default: "90px", type: [String, Number] },
    minHeight: { type: [String, Number] },
    maxHeight: { type: [String, Number] },
    color: { type: String },
    fontSize: { type: [String, Number] },
    showWordLimit: { type: Boolean, default: false },
    border: { default: "surround", type: String },
    bgColor: { type: String },
    textareaAlign: { type: String },
    textareaStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  }), new UTSJSONObject({
    "modelValue": {
      type: String,
      default: ""
    },
    "modelModifiers": {}
  })),
  emits: /* @__PURE__ */ _mergeModels(["input", "focus", "blur", "keyboardheightchange", "change", "linechange"], ["update:modelValue"]),
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceTextareaRiceTextareaSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("textarea");
    const emit = __emit;
    const props = __props;
    const modelValue = _useModel(__props, "modelValue");
    const isFocus = ref(false);
    ref(false);
    const formDisabled = inject(formDisabledInjectKey, null);
    const formReadonly = inject(formReadonlyInjectKey, null);
    const formItemBlur = inject(formItemBlurInjectKey, null);
    const isDisabled = computed(() => {
      var _a2, _b;
      return ((_a2 = formDisabled === null || formDisabled === void 0 ? null : formDisabled.value) !== null && _a2 !== void 0 ? _a2 : false) || ((_b = props.disabled) !== null && _b !== void 0 ? _b : false);
    });
    const isReadonly = computed(() => {
      var _a2, _b;
      return ((_a2 = formReadonly === null || formReadonly === void 0 ? null : formReadonly.value) !== null && _a2 !== void 0 ? _a2 : false) || ((_b = props.readonly) !== null && _b !== void 0 ? _b : false);
    });
    const onInput = (e) => {
      emit("input", e.detail.value);
    };
    const onFocus = (e) => {
      isFocus.value = true;
      emit("focus", e);
    };
    let timer = null;
    const onBlur = (e) => {
      timer = setTimeout(() => {
        isFocus.value = false;
        emit("blur", e);
      }, 100);
      formItemBlur === null || formItemBlur === void 0 ? null : formItemBlur();
    };
    const onKeyboardheightchange = (e) => {
      emit("keyboardheightchange", e);
    };
    const onChange = (e) => {
      emit("change", e.detail.value);
    };
    const onLinechange = (e) => {
      emit("linechange", e);
    };
    const bgcolorStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (hasStrValue(props.bgColor)) {
        css.set("background-color", props.bgColor);
      }
      return css;
    });
    const customTextareaStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (hasStrValue(props.color)) {
        css.set("color", props.color);
      }
      if (hasStrValue(props.fontSize)) {
        css.set("font-size", addUnit(props.fontSize));
      }
      css.set("height", addUnit(props.height));
      if (props.maxHeight != null) {
        css.set("max-height", addUnit(props.maxHeight));
      }
      if (props.minHeight != null) {
        css.set("min-height", addUnit(props.minHeight));
      }
      return css;
    });
    const textareaClass = computed(() => {
      return [
        ns.b(""),
        ns.theme(),
        ns.is("disabled", isDisabled.value),
        ns.m(props.border)
      ];
    });
    const textareaInnerClass = computed(() => {
      var _a2;
      return [
        ns.e("textarea"),
        ns.is("__textarea--disabled", isDisabled.value),
        ns.e(`textarea--${(_a2 = props.textareaAlign) !== null && _a2 !== void 0 ? _a2 : "left"}`),
        ns.is("__textarea--dark", isDark.value),
        ns.is("__textarea--disabled--dark", isDisabled.value && isDark.value)
      ];
    });
    const countClass = computed(() => {
      return [
        ns.e("count"),
        ns.is("__count--disabled", isDisabled.value)
      ];
    });
    const _placeholderStyle = computed(() => {
      var _a2, _b;
      let baseColor = isDark.value ? "#4d4d4d" : "#c8c9cc";
      let css = `color:${baseColor};font-size:${addUnit((_a2 = props.fontSize) !== null && _a2 !== void 0 ? _a2 : "15px")};`;
      return css + ((_b = props.placeholderStyle) !== null && _b !== void 0 ? _b : "");
    });
    onUnmounted(() => {
      if (timer != null)
        clearTimeout(timer);
    });
    return () => {
      "raw js";
      const _component_textarea = _resolveComponent("textarea");
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 6, _unref(textareaClass));
        _setSharedDataStyle(__sharedData, 7, [_unref(bgcolorStyle), __props.customStyle]);
      });
      const n0 = _createSharedDataComponentWithFallback(_component_textarea, "488f763b", {
        value: () => {
          return modelValue.value;
        },
        "onUpdate:value": () => {
          return (_value) => {
            return modelValue.value = _value;
          };
        },
        inputmode: () => {
          return __props.inputmode;
        },
        placeholder: () => {
          return __props.placeholder;
        },
        disabled: () => {
          return _unref(isDisabled) || _unref(isReadonly);
        },
        maxlength: () => {
          return __props.maxlength;
        },
        "placeholder-style": () => {
          return _unref(_placeholderStyle);
        },
        "cursor-spacing": () => {
          return __props.cursorSpacing;
        },
        "cursor-color": () => {
          return __props.cursorColor;
        },
        "auto-focus": () => {
          return __props.autoFocus;
        },
        focus: () => {
          return __props.focus;
        },
        "confirm-type": () => {
          return __props.confirmType;
        },
        "confirm-hold": () => {
          return __props.confirmHold;
        },
        cursor: () => {
          return __props.cursor;
        },
        "selection-start": () => {
          return __props.selectionStart;
        },
        "selection-end": () => {
          return __props.selectionEnd;
        },
        "adjust-position": () => {
          return __props.adjustPosition;
        },
        "hold-keyboard": () => {
          return __props.holdKeyboard;
        },
        fixed: () => {
          return __props.fixed;
        },
        "show-confirm-bar": () => {
          return __props.showConfirmBar;
        },
        "disable-default-padding": () => {
          return __props.disableDefaultPadding;
        },
        "auto-height": () => {
          return __props.autoHeight;
        },
        class: () => {
          return _unref(textareaInnerClass);
        },
        style: () => {
          return [_unref(customTextareaStyle), __props.textareaStyle];
        },
        onInput: () => {
          return onInput;
        },
        onFocus: () => {
          return onFocus;
        },
        onBlur: () => {
          return onBlur;
        },
        onKeyboardheightchange: () => {
          return onKeyboardheightchange;
        },
        onChange: () => {
          return onChange;
        },
        onLinechange: () => {
          return onLinechange;
        }
      });
      _setSharedData(__sharedData, 0, n0?.sharedData);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 1, _toSharedDataBoolean(__props.showWordLimit && __props.maxlength >= 0));
      }, () => {
        _renderSharedDataEffect(() => {
          const _modelValue = modelValue.value;
          _setSharedDataClass(__sharedData, 2, _unref(countClass));
          _setSharedDataStyle(__sharedData, 3, _unref(bgcolorStyle));
          _setSharedData(__sharedData, 4, _toDisplayString(_modelValue.length));
          _setSharedData(__sharedData, 5, _toDisplayString(__props.maxlength));
        });
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
//# sourceMappingURL=rice-textarea.js.map
