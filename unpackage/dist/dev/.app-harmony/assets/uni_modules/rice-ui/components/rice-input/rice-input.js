import { _ as __easycom_0 } from "../rice-icon/rice-icon.js";
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
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataSlot: _createSharedDataSlot, createSharedDataIf: _createSharedDataIf } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceInputRiceInput";
const { useSlots, computed, inject, ref, onUnmounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-input",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "66f6d13a",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-input/rice-input.uvue",
  __name: "rice-input",
  props: /* @__PURE__ */ _mergeModels(new UTSJSONObject({
    type: { default: "text", type: String },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    placeholder: { type: String },
    placeholderStyle: { type: String },
    maxlength: { default: -1, type: Number },
    cursorSpacing: { default: 0, type: Number },
    cursorColor: { type: String },
    autoFocus: { type: Boolean, default: false },
    focus: { type: Boolean, default: false },
    confirmType: { default: "done", type: String },
    confirmHold: { type: Boolean, default: false },
    cursor: { default: 0, type: Number },
    selectionStart: { default: -1, type: Number },
    selectionEnd: { default: -1, type: Number },
    adjustPosition: { type: Boolean, default: true },
    inputmode: { type: String },
    holdKeyboard: { type: Boolean, default: false },
    color: { type: String },
    fontSize: { type: [String, Number] },
    border: { default: "surround", type: String },
    focusBorder: { type: Boolean, default: false },
    bgColor: { type: String },
    shape: { default: "square", type: String },
    height: { type: [String, Number] },
    clearable: { type: Boolean, default: false },
    clearTrigger: { default: "focus", type: String },
    clearIcon: { default: "clear", type: String },
    showPassword: { type: Boolean, default: true },
    showPasswordTrigger: { default: "focus", type: String },
    prefixIcon: { type: String },
    suffixIcon: { type: String },
    iconSize: { default: "16px", type: [String, Number] },
    iconColor: { type: String },
    inputAlign: { type: String },
    iputStyle: { default: () => {
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
  emits: /* @__PURE__ */ _mergeModels(["input", "focus", "blur", "keyboardheightchange", "change", "confirm", "nicknamereview", "clickLeftIcon", "clickRightIcon"], ["update:modelValue"]),
  setup(__props, _a) {
    var __emit = _a.emit, $slots = _a.slots;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceInputRiceInputSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("input");
    useSlots();
    const emit = __emit;
    const props = __props;
    const modelValue = _useModel(__props, "modelValue");
    const inputType = computed(() => {
      const type = props.type;
      if (type == "password")
        return "text";
      return type;
    });
    const formDisabled = inject(formDisabledInjectKey, null);
    const formReadonly = inject(formReadonlyInjectKey, null);
    const formItemBlur = inject(formItemBlurInjectKey, null);
    const isFocus = ref(false);
    const showPasswordValue = ref(false);
    const isPassword = computed(() => {
      return props.type == "password" && !showPasswordValue.value ? true : null;
    });
    const isDisabled = computed(() => {
      var _a2, _b;
      return ((_a2 = formDisabled === null || formDisabled === void 0 ? null : formDisabled.value) !== null && _a2 !== void 0 ? _a2 : false) || ((_b = props.disabled) !== null && _b !== void 0 ? _b : false);
    });
    const isReadonly = computed(() => {
      var _a2, _b;
      return ((_a2 = formReadonly === null || formReadonly === void 0 ? null : formReadonly.value) !== null && _a2 !== void 0 ? _a2 : false) || ((_b = props.readonly) !== null && _b !== void 0 ? _b : false);
    });
    const isShowClearable = computed(() => {
      if (isDisabled.value)
        return false;
      const shouldTrigger = props.clearTrigger == "focus" ? isFocus.value : true;
      return props.clearable && modelValue.value != "" && shouldTrigger;
    });
    const isShowPassword = computed(() => {
      if (props.showPassword == false)
        return false;
      const isPasswordType = props.type == "password";
      const shouldTrigger = props.showPasswordTrigger == "focus" ? isFocus.value : true;
      return isPasswordType && modelValue.value != "" && shouldTrigger;
    });
    const changeShowPassword = () => {
      if (isDisabled.value || isReadonly.value)
        return null;
      showPasswordValue.value = !showPasswordValue.value;
    };
    const onClear = () => {
      if (isDisabled.value || isReadonly.value)
        return null;
      modelValue.value = "";
    };
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
    const onConfirm = (e) => {
      emit("confirm", e.detail.value);
    };
    const onNicknamereview = (e = null) => {
      emit("nicknamereview", e);
    };
    const clickLeftIcon = () => {
      emit("clickLeftIcon");
    };
    const clickRightIcon = () => {
      emit("clickRightIcon");
    };
    const iconStyle = computed(() => {
      return new UTSJSONObject({
        paddingLeft: "6px",
        opacity: isDisabled.value ? 0.4 : 1
      });
    });
    const rootStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (hasStrValue(props.bgColor)) {
        css.set("background-color", props.bgColor);
      }
      if (props.height != null)
        css.set("height", addUnit(props.height));
      return css;
    });
    const customInputStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (hasStrValue(props.color))
        css.set("color", props.color);
      if (props.fontSize != null)
        css.set("font-size", addUnit(props.fontSize));
      return css;
    });
    const inputClass = computed(() => {
      return [
        ns.b(""),
        ns.theme(),
        ns.is("disabled", isDisabled.value),
        ns.m(props.border),
        ns.m(props.shape),
        ns.is("border--focus", isFocus.value && props.border != "none" && props.focusBorder)
      ];
    });
    const inputInnerClass = computed(() => {
      var _a2;
      return [
        ns.e("input"),
        ns.is("__input--disabled", isDisabled.value),
        ns.e(`input--${(_a2 = props.inputAlign) !== null && _a2 !== void 0 ? _a2 : "left"}`),
        ns.is("__input--dark", isDark.value),
        ns.is("__input--disabled--dark", isDisabled.value && isDark.value)
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
      const _component_rice_icon = __easycom_0;
      const _component_input = _resolveComponent("input");
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 9, _unref(inputClass));
        _setSharedDataStyle(__sharedData, 10, [_unref(rootStyle), __props.customStyle]);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean($slots["prefix"] != null || __props.prefixIcon != null));
      }, () => {
        _createSharedDataSlot("prefix", null, null, () => {
          const n4 = _createSharedDataComponentWithFallback(_component_rice_icon, "8a8f72fa", {
            name: () => {
              return __props.prefixIcon;
            },
            size: () => {
              return __props.iconSize;
            },
            color: () => {
              return __props.iconColor;
            },
            onClick: () => {
              return clickLeftIcon;
            }
          });
          _setSharedData(__sharedData, 1, n4?.sharedData);
        });
      });
      const n6 = _createSharedDataComponentWithFallback(_component_input, "8a8f6b2a", {
        value: () => {
          return modelValue.value;
        },
        "onUpdate:value": () => {
          return (_value) => {
            return modelValue.value = _value;
          };
        },
        type: () => {
          return _unref(inputType);
        },
        inputmode: () => {
          return __props.inputmode;
        },
        placeholder: () => {
          return __props.placeholder;
        },
        password: () => {
          return _unref(isPassword);
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
        class: () => {
          return _unref(inputInnerClass);
        },
        style: () => {
          return [_unref(customInputStyle), __props.iputStyle];
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
        onConfirm: () => {
          return onConfirm;
        },
        onNicknamereview: () => {
          return onNicknamereview;
        }
      });
      _setSharedData(__sharedData, 2, n6?.sharedData);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 3, _toSharedDataBoolean(_unref(isShowPassword)));
      }, () => {
        const n9 = _createSharedDataComponentWithFallback(_component_rice_icon, "c75f2602", {
          name: () => {
            return _unref(showPasswordValue) ? "eyes" : "eyes-close";
          },
          size: "17px",
          "custom-style": () => {
            return _unref(iconStyle);
          },
          onClick: () => {
            return changeShowPassword;
          }
        });
        _setSharedData(__sharedData, 4, n9?.sharedData);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 5, _toSharedDataBoolean(_unref(isShowClearable)));
      }, () => {
        const n12 = _createSharedDataComponentWithFallback(_component_rice_icon, "c75f182a", {
          name: () => {
            return __props.clearIcon;
          },
          size: "17px",
          "custom-style": () => {
            return _unref(iconStyle);
          },
          onClick: () => {
            return onClear;
          }
        });
        _setSharedData(__sharedData, 6, n12?.sharedData);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 7, _toSharedDataBoolean($slots["suffix"] != null || __props.suffixIcon != null));
      }, () => {
        _createSharedDataSlot("suffix", null, null, () => {
          const n17 = _createSharedDataComponentWithFallback(_component_rice_icon, "c75f0876", {
            name: () => {
              return __props.suffixIcon;
            },
            size: () => {
              return __props.iconSize;
            },
            color: () => {
              return __props.iconColor;
            },
            onClick: () => {
              return clickRightIcon;
            }
          });
          _setSharedData(__sharedData, 8, n17?.sharedData);
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
//# sourceMappingURL=rice-input.js.map
