import { a as addUnit, d as deepMerge, b as addStyle, x as formValidate } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, toDisplayString: _toDisplayString, createSharedDataIf: _createSharedDataIf } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpTextareaUpTextarea";
const { computed, ref, watch, nextTick, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-textarea"
  },
  __dynamicSharedData: true,
  __hash: "0d4862e0",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-textarea/up-textarea.uvue",
  __name: "up-textarea",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    placeholderClass: {
      type: String,
      default: "textarea-placeholder"
    },
    placeholderStyle: {
      type: [String, Object],
      default: "color: #c0c4cc"
    },
    height: {
      type: [String, Number],
      default: 70
    },
    confirmType: {
      type: String,
      default: "done"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    count: {
      type: Boolean,
      default: false
    },
    focus: {
      type: Boolean,
      default: false
    },
    autoHeight: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    cursorSpacing: {
      type: Number,
      default: 0
    },
    cursor: {
      type: [String, Number],
      default: -1
    },
    showConfirmBar: {
      type: Boolean,
      default: true
    },
    selectionStart: {
      type: Number,
      default: -1
    },
    selectionEnd: {
      type: Number,
      default: -1
    },
    adjustPosition: {
      type: Boolean,
      default: true
    },
    disableDefaultPadding: {
      type: Boolean,
      default: false
    },
    holdKeyboard: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: [String, Number],
      default: 140
    },
    border: {
      type: String,
      default: "surround"
    },
    ignoreCompositionEvent: {
      type: Boolean,
      default: true
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  emits: ["update:modelValue", "linechange", "focus", "blur", "change", "confirm", "keyboardheightchange"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpTextareaUpTextareaSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const instance = getCurrentInstance();
    const innerValue = ref("");
    const changeFromInner = ref(false);
    watch(() => {
      return props.modelValue;
    }, (newVal) => {
      innerValue.value = newVal;
      changeFromInner.value = false;
    }, { immediate: true });
    const placeholderStyleStr = computed(() => {
      if (typeof props.placeholderStyle == "string") {
        return props.placeholderStyle;
      }
      return "";
    });
    const textareaClass = computed(() => {
      let classes = ["up-textarea"];
      if (props.border == "surround") {
        classes.push("up-border");
        classes.push("up-textarea--radius");
      } else if (props.border == "bottom") {
        classes.push("up-border-bottom");
        classes.push("up-textarea--no-radius");
      }
      if (props.disabled) {
        classes.push("up-textarea--disabled");
      }
      return classes.join(" ");
    });
    const fieldStyle = computed(() => {
      return new UTSJSONObject({
        height: addUnit(props.height)
      });
    });
    const textareaStyle = computed(() => {
      const style = new UTSJSONObject({});
      return deepMerge(style, addStyle(props.customStyle));
    });
    function onFocus(e) {
      emit("focus", e);
    }
    function onBlur(e) {
      emit("blur", e);
      if ((instance === null || instance === void 0 ? null : instance.proxy) != null) {
        formValidate(instance.proxy, "blur");
      }
    }
    function onLinechange(e) {
      emit("linechange", e);
    }
    function valueChange() {
      const value = innerValue.value;
      nextTick(() => {
        emit("update:modelValue", value);
        changeFromInner.value = true;
        emit("change", value);
        if ((instance === null || instance === void 0 ? null : instance.proxy) != null) {
          formValidate(instance.proxy, "change");
        }
      });
    }
    function onInput(e) {
      let value = e.detail.value;
      innerValue.value = value;
      nextTick(() => {
        valueChange();
      });
    }
    function onConfirm(e) {
      emit("confirm", e);
    }
    function onKeyboardheightchange(e) {
      emit("keyboardheightchange", e);
    }
    return () => {
      "raw js";
      const _component_textarea = _resolveComponent("textarea");
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 5, ["up-textarea", textareaClass.value]);
        _setSharedDataStyle(__sharedData, 6, textareaStyle.value);
      });
      const n0 = _createSharedDataComponentWithFallback(_component_textarea, "53749956", {
        class: "up-textarea__field",
        value: () => {
          return innerValue.value;
        },
        style: () => {
          return fieldStyle.value;
        },
        placeholder: () => {
          return __props.placeholder;
        },
        "placeholder-style": () => {
          return placeholderStyleStr.value;
        },
        "placeholder-class": () => {
          return __props.placeholderClass;
        },
        disabled: () => {
          return __props.disabled;
        },
        focus: () => {
          return __props.focus;
        },
        autoHeight: () => {
          return __props.autoHeight;
        },
        fixed: () => {
          return __props.fixed;
        },
        cursorSpacing: () => {
          return __props.cursorSpacing;
        },
        cursor: () => {
          return __props.cursor;
        },
        showConfirmBar: () => {
          return __props.showConfirmBar;
        },
        selectionStart: () => {
          return __props.selectionStart;
        },
        selectionEnd: () => {
          return __props.selectionEnd;
        },
        adjustPosition: () => {
          return __props.adjustPosition;
        },
        disableDefaultPadding: () => {
          return __props.disableDefaultPadding;
        },
        holdKeyboard: () => {
          return __props.holdKeyboard;
        },
        maxlength: () => {
          return __props.maxlength;
        },
        "confirm-type": () => {
          return __props.confirmType;
        },
        ignoreCompositionEvent: () => {
          return __props.ignoreCompositionEvent;
        },
        onFocus: () => {
          return onFocus;
        },
        onBlur: () => {
          return onBlur;
        },
        onLinechange: () => {
          return onLinechange;
        },
        onInput: () => {
          return onInput;
        },
        onConfirm: () => {
          return onConfirm;
        },
        onKeyboardheightchange: () => {
          return onKeyboardheightchange;
        }
      });
      _setSharedData(__sharedData, 0, n0?.sharedData);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 1, _toSharedDataBoolean(__props.count));
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataStyle(__sharedData, 2, {
            "background-color": __props.disabled ? "transparent" : "#fff"
          });
          _setSharedData(__sharedData, 3, _toDisplayString(innerValue.value.length));
          _setSharedData(__sharedData, 4, _toDisplayString(__props.maxlength));
        });
      });
      return __sharedData;
    };
  }
});
const _style_0 = {"up-border":{"":{"borderWidth":0.5,"borderColor":"#dadbde","borderStyle":"solid"}},"up-border-bottom":{"":{"borderBottomWidth":0.5,"borderColor":"#dadbde","borderBottomStyle":"solid"}}};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-textarea.js.map
