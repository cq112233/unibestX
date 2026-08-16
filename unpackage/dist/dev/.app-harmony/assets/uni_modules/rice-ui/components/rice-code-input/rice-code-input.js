import { h as hasStrValue, a as addUnit, d as getPxNum } from "../../libs/utils/basic.js";
import "../../libs/use/useCountDown/index.js";
import "../../libs/store/useConfig.js";
import { u as useNamespace } from "../../libs/use/useNamespace/index.js";
import "../../libs/use/usePopup/index.js";
import "../../libs/use/useRelation/useChildren.js";
import "../../libs/use/useRelation/useParent.js";
import "../../libs/use/useSafeArea/index.js";
import "../../libs/use/useTouch/index.js";
import "./type.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, useModel: _useModel, mergeModels: _mergeModels, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, setSharedData: _setSharedData, toDisplayString: _toDisplayString, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataIf: _createSharedDataIf, setSharedDataTemplateRef: _setSharedDataTemplateRef, setSharedDataEvent: _setSharedDataEvent, createSharedDataFor: _createSharedDataFor, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceCodeInputRiceCodeInput";
const { ref, watch, shallowRef, computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-code-input",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "fcca4f90",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-code-input/rice-code-input.uvue",
  __name: "rice-code-input",
  props: /* @__PURE__ */ _mergeModels(new UTSJSONObject({
    maxlength: { default: 4, type: Number },
    dot: { type: Boolean, default: false },
    mode: { default: "box", type: String },
    bgColor: { type: String },
    borderColor: { type: String },
    showCursor: { type: Boolean, default: true },
    cursorColor: { type: String },
    space: { default: "10px", type: [String, Number] },
    justifyContent: { type: String },
    size: { type: [String, Number] },
    fontSize: { type: [String, Number] },
    color: { type: String },
    bold: { type: Boolean },
    focus: { type: Boolean, default: false },
    disabledKeyboard: { type: Boolean, default: false },
    adjustPosition: { type: Boolean, default: true },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  }), new UTSJSONObject({
    "modelValue": {
      type: String
    },
    "modelModifiers": {}
  })),
  emits: /* @__PURE__ */ _mergeModels(["finish", "change", "focus", "blur"], ["update:modelValue"]),
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceCodeInputRiceCodeInputSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("code-input");
    const emit = __emit;
    const props = __props;
    const modelValue = _useModel(__props, "modelValue");
    const displayValue = ref("");
    const isFocus = ref(props.focus);
    const getCodeNum = (index) => {
      return displayValue.value.charAt(index);
    };
    watch(modelValue, (newVal = null) => {
      if (newVal != null) {
        if (newVal != displayValue.value) {
          displayValue.value = newVal.substring(0, props.maxlength);
        }
      } else {
        displayValue.value = "";
      }
    }, {
      immediate: true
    });
    const boxLineRef = shallowRef([]);
    const startAmination = (value) => {
      const len = value.length;
      if (len < boxLineRef.value.length) {
        boxLineRef.value[len].animate([new UTSJSONObject({
          opacity: "0"
        }), new UTSJSONObject({
          opacity: "1"
        }), new UTSJSONObject({
          opacity: "0"
        })], new UTSJSONObject({
          duration: 1e3,
          iterations: Infinity
        }));
      }
    };
    const onInput = (e) => {
      const value = e.detail.value;
      const newVal = value.substring(0, props.maxlength);
      modelValue.value = newVal;
      displayValue.value = newVal;
      emit("change", newVal);
      if (value.length >= props.maxlength) {
        emit("finish", newVal);
      }
      startAmination(newVal);
    };
    const onFocus = (e) => {
      isFocus.value = true;
      startAmination(displayValue.value);
      emit("focus", e);
    };
    const onBlur = (e) => {
      isFocus.value = false;
      emit("blur", e);
    };
    watch(() => {
      return props.focus;
    }, () => {
      isFocus.value = props.focus;
    });
    const boxClick = () => {
      isFocus.value = true;
    };
    const codeInputStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (hasStrValue(props.justifyContent)) {
        css.set("justify-content", props.justifyContent);
      }
      return css;
    });
    const boxStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (hasStrValue(props.bgColor) && props.mode != "line") {
        css.set("background-color", props.bgColor);
      }
      if (hasStrValue(props.borderColor)) {
        css.set("border-color", props.borderColor);
      }
      if (props.size != null) {
        css.set("height", addUnit(props.size));
        css.set("width", addUnit(props.size));
      }
      return css;
    });
    const getBoxStyle = (index) => {
      const css = /* @__PURE__ */ new Map();
      const space = getPxNum(props.space);
      if (index == props.maxlength - 1) {
        css.set("margin-right", "0px");
      } else {
        css.set("margin-right", addUnit(props.space));
      }
      if (space == 0) {
        if (index == 0 && props.mode != "line") {
          css.set("border-top-left-radius", "4px");
          css.set("border-bottom-left-radius", "4px");
        }
        if (index == props.maxlength - 1 && props.mode != "line") {
          css.set("border-top-right-radius", "4px");
          css.set("border-bottom-right-radius", "4px");
        }
        if (index != props.maxlength - 1) {
          css.set("borderRight", "none");
        }
      }
      return css;
    };
    const boxClass = computed(() => {
      const basic = [ns.e("box")];
      if (getPxNum(props.space) != 0) {
        basic.push(ns.e("box--radius"));
      }
      if (props.mode == "line") {
        basic.push(ns.e("box--line"));
      }
      return basic;
    });
    const inputStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.size != null)
        css.set("height", addUnit(props.size));
      return css;
    });
    const textStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.bold == true)
        css.set("font-weight", "bold");
      if (hasStrValue(props.color))
        css.set("color", props.color);
      if (props.fontSize != null)
        css.set("font-size", addUnit(props.fontSize));
      return css;
    });
    const boxLineStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (hasStrValue(props.cursorColor))
        css.set("background-color", props.cursorColor);
      return css;
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_input = _resolveComponent("input");
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 2, ["rice-code-input", _unref(ns).theme()]);
        _setSharedDataStyle(__sharedData, 3, [_unref(codeInputStyle), __props.customStyle]);
      });
      _createSharedDataFor(_setSharedDataScoped(__sharedData, 0, _createSharedDataVFor(__sharedDataScope, () => {
        return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
      })), () => {
        return __props.maxlength;
      }, (__sharedData_VFor0, _for_item0, _for_key0) => {
        _renderSharedDataEffect(() => {
          _setSharedDataStyle(__sharedData_VFor0, 7, [_unref(boxStyle), getBoxStyle(_for_key0.value)]);
          _setSharedDataClass(__sharedData_VFor0, 8, _unref(boxClass));
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData_VFor0, 1, _toSharedDataBoolean(__props.dot && _unref(displayValue).length > _for_key0.value));
        }, () => {
        }, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataStyle(__sharedData_VFor0, 2, _unref(textStyle));
            _setSharedData(__sharedData_VFor0, 3, _toDisplayString(getCodeNum(_for_key0.value)));
          });
        }, 261);
        _renderSharedDataEffect(() => {
          _setSharedData(__sharedData_VFor0, 4, _toSharedDataBoolean(__props.showCursor && _for_key0.value == _unref(displayValue).length && _unref(isFocus)));
        });
        _setSharedDataTemplateRef(__sharedData_VFor0, 5, (n7) => {
          _setTemplateRef(n7, boxLineRef, true, "boxLineRef");
        });
        _setSharedDataEvent(__sharedData_VFor0, 6, boxClick);
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData_VFor0, 9, _unref(boxLineStyle));
        });
        return null;
      }, (__sharedData_VFor0, _, index) => {
        return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
      });
      const n9 = _createSharedDataComponentWithFallback(_component_input, "dc570e24", {
        class: "rice-code-input__input",
        type: "number",
        disabled: () => {
          return __props.disabledKeyboard;
        },
        value: () => {
          return _unref(displayValue);
        },
        style: () => {
          return _unref(inputStyle);
        },
        focus: () => {
          return _unref(isFocus);
        },
        maxlength: () => {
          return __props.maxlength;
        },
        "adjust-position": () => {
          return __props.adjustPosition;
        },
        "cursor-color": "transparent",
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
      _setSharedData(__sharedData, 1, n9?.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=rice-code-input.js.map
