import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-icon/rice-icon&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useCountDown/index&";
import { i as isDark } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/store/useConfig&";
import { u as useNamespace } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useNamespace/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/usePopup/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useChildren&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useParent&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useSafeArea/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useTouch/index&";
import { h as hasStrValue, a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/utils/basic&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-search/type&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, useModel: _useModel, mergeModels: _mergeModels, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, toDisplayString: _toDisplayString, createSharedDataIf: _createSharedDataIf, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceSearchRiceSearch";
const { ref, computed, onUnmounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-search",
    styleIsolation: "app-and-page",
    externalClasses: ["input-class", "wrapper-class"]
  },
  __dynamicSharedData: true,
  __hash: "740e379c",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-search/rice-search.uvue",
  __name: "rice-search",
  props: /* @__PURE__ */ _mergeModels(new UTSJSONObject({
    label: { type: String },
    shape: { default: "square", type: String },
    bgColor: { type: String },
    inputColor: { type: String },
    fontSize: { type: [String, Number] },
    color: { type: String },
    height: { type: [String, Number] },
    maxlength: { default: -1, type: Number },
    holdKeyboard: { type: Boolean, default: false },
    placeholder: { default: "请输入搜索关键字", type: String },
    placeholderStyle: { type: String },
    focus: { type: Boolean, default: false },
    clearable: { type: Boolean, default: true },
    clearIcon: { default: "clear", type: String },
    clearTrigger: { default: "focus", type: String },
    showAction: { type: Boolean, default: false },
    actionText: { default: "搜索", type: String },
    actionSize: { type: [String, Number] },
    actionColor: { type: String },
    disabled: { type: Boolean, default: false },
    inputAlign: { default: "left", type: String },
    leftIcon: { default: "search", type: String },
    rightIcon: { type: String },
    leftIconSize: { default: "16px", type: [String, Number] },
    leftIconColor: { type: String },
    rightIconSize: { default: "16px", type: [String, Number] },
    rightIconColor: { type: String },
    wrapperClass: { default: "", type: String },
    inputClass: { default: "", type: String },
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
  emits: /* @__PURE__ */ _mergeModels(["input", "search", "focus", "blur", "keyboardheightchange", "clickInput", "clickLeftIcon", "clickRightIcon", "clickAction", "clear"], ["update:modelValue"]),
  setup(__props, _a) {
    var __emit = _a.emit, $slots = _a.slots;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceSearchRiceSearchSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("search");
    const emit = __emit;
    const props = __props;
    const modelValue = _useModel(__props, "modelValue");
    const isFocus = ref(false);
    const isShowClearable = computed(() => {
      if (props.disabled)
        return false;
      const shouldTrigger = props.clearTrigger == "focus" ? isFocus.value : true;
      return props.clearable && modelValue.value != "" && shouldTrigger;
    });
    const onClear = () => {
      if (props.disabled)
        return null;
      modelValue.value = "";
      emit("clear");
    };
    const handleClick = (e) => {
      emit("clickInput", e);
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
    };
    const onConfirm = (e) => {
      emit("search", e.detail.value);
    };
    const onKeyboardheightchange = (e) => {
      emit("keyboardheightchange", e);
    };
    const clickLeftIcon = () => {
      emit("clickLeftIcon", modelValue.value);
    };
    const clickRightIcon = () => {
      emit("clickRightIcon", modelValue.value);
    };
    const clickAction = () => {
      emit("clickAction", modelValue.value);
    };
    const searchStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (hasStrValue(props.bgColor))
        css.set("background-color", props.bgColor);
      return css;
    });
    const wrapperStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.height != null)
        css.set("height", addUnit(props.height));
      if (hasStrValue(props.inputColor))
        css.set("background-color", props.inputColor);
      return css;
    });
    const inputStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.fontSize != null)
        css.set("font-size", addUnit(props.fontSize));
      if (hasStrValue(props.color))
        css.set("color", props.color);
      return css;
    });
    const actionStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.actionSize != null)
        css.set("font-size", addUnit(props.actionSize));
      if (hasStrValue(props.actionColor))
        css.set("color", props.actionColor);
      return css;
    });
    const customInputClass = computed(() => {
      var _a2;
      return [
        ns.e("wrapper__input"),
        ns.e(`wrapper__input--${props.inputAlign}`),
        (_a2 = props.inputClass) !== null && _a2 !== void 0 ? _a2 : "",
        ns.is("__wrapper__input--dark", isDark.value)
      ];
    });
    const _placeholderStyle = computed(() => {
      var _a2, _b;
      let baseColor = isDark.value ? "#4d4d4d" : "#c8c9cc";
      let css = `color:${baseColor};font-size:${addUnit((_a2 = props.fontSize) !== null && _a2 !== void 0 ? _a2 : "15px")};`;
      return css + ((_b = props.placeholderStyle) !== null && _b !== void 0 ? _b : "");
    });
    const clearIconStyle = computed(() => {
      return new UTSJSONObject({
        paddingLeft: "6px"
      });
    });
    const searchClass = computed(() => {
      return [
        ns.b(""),
        ns.theme()
      ];
    });
    const customWrapperClass = computed(() => {
      var _a2;
      return [
        ns.e("wrapper"),
        ns.e(`wrapper--${props.shape}`),
        (_a2 = props.wrapperClass) !== null && _a2 !== void 0 ? _a2 : ""
      ];
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
        _setSharedDataClass(__sharedData, 13, _unref(searchClass));
        _setSharedDataStyle(__sharedData, 14, [_unref(searchStyle), __props.customStyle]);
      });
      _createSharedDataSlot("left", null, null);
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 15, _unref(customWrapperClass));
        _setSharedDataStyle(__sharedData, 16, _unref(wrapperStyle));
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 4, _toSharedDataBoolean($slots["label"] != null || _unref(hasStrValue)(__props.label)));
      }, () => {
        _createSharedDataSlot("label", null, null, () => {
          _renderSharedDataEffect(() => {
            return _setSharedData(__sharedData, 5, _toDisplayString(__props.label));
          });
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 6, _toSharedDataBoolean($slots["leftIcon"] != null || _unref(hasStrValue)(__props.leftIcon)));
      }, () => {
        _createSharedDataSlot("leftIcon", null, null, () => {
          const n10 = _createSharedDataComponentWithFallback(_component_rice_icon, "2b6787a9", {
            name: () => {
              return __props.leftIcon;
            },
            size: () => {
              return __props.leftIconSize;
            },
            color: () => {
              return __props.leftIconColor;
            },
            onClick: () => {
              return clickLeftIcon;
            }
          });
          _setSharedData(__sharedData, 7, n10?.sharedData);
        });
      });
      const n11 = _createSharedDataComponentWithFallback(_component_input, "2b678b8d", {
        value: () => {
          return modelValue.value;
        },
        "onUpdate:value": () => {
          return (_value) => {
            return modelValue.value = _value;
          };
        },
        type: "search",
        inputmode: "search",
        maxlength: () => {
          return __props.maxlength;
        },
        "confirm-type": "search",
        focus: () => {
          return __props.focus;
        },
        disabled: () => {
          return __props.disabled;
        },
        holdKeyboard: () => {
          return __props.holdKeyboard;
        },
        placeholder: () => {
          return __props.placeholder;
        },
        "placeholder-style": () => {
          return _unref(_placeholderStyle);
        },
        class: () => {
          return _unref(customInputClass);
        },
        style: () => {
          return _unref(inputStyle);
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
        onConfirm: () => {
          return onConfirm;
        },
        onKeyboardheightchange: () => {
          return onKeyboardheightchange;
        },
        onClick: () => {
          return handleClick;
        }
      });
      _setSharedData(__sharedData, 8, n11?.sharedData);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 9, _toSharedDataBoolean($slots["rightIcon"] != null || _unref(hasStrValue)(__props.rightIcon)));
      }, () => {
        _createSharedDataSlot("rightIcon", null, null, () => {
          const n16 = _createSharedDataComponentWithFallback(_component_rice_icon, "41886700", {
            name: () => {
              return __props.rightIcon;
            },
            size: () => {
              return __props.rightIconSize;
            },
            color: () => {
              return __props.rightIconColor;
            },
            onClick: () => {
              return clickRightIcon;
            }
          });
          _setSharedData(__sharedData, 10, n16?.sharedData);
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 11, _toSharedDataBoolean(_unref(isShowClearable)));
      }, () => {
        const n19 = _createSharedDataComponentWithFallback(_component_rice_icon, "41886ae8", {
          name: () => {
            return __props.clearIcon;
          },
          size: "17px",
          "custom-style": () => {
            return _unref(clearIconStyle);
          },
          onClick: () => {
            return onClear;
          }
        });
        _setSharedData(__sharedData, 12, n19?.sharedData);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.showAction));
      }, () => {
        _createSharedDataSlot("action", null, null, () => {
          _setSharedDataEvent(__sharedData, 1, clickAction);
          _renderSharedDataEffect(() => {
            _setSharedDataStyle(__sharedData, 2, _unref(actionStyle));
            _setSharedData(__sharedData, 3, _toDisplayString(__props.actionText));
          });
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
//# sourceMappingURL=rice-search.js.map
