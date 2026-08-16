import { _ as __easycom_0 } from "../rice-icon/rice-icon.js";
import "../../libs/use/useCountDown/index.js";
import "../../libs/store/useConfig.js";
import { u as useNamespace } from "../../libs/use/useNamespace/index.js";
import "../../libs/use/usePopup/index.js";
import "../../libs/use/useRelation/useChildren.js";
import "../../libs/use/useRelation/useParent.js";
import "../../libs/use/useSafeArea/index.js";
import "../../libs/use/useTouch/index.js";
import { c as checkboxGroupInjectKey, b as defCheckboxIconPosition } from "../rice-checkbox-group/index.js";
import { e as isSameValue, a as addUnit, h as hasStrValue } from "../../libs/utils/basic.js";
import { f as formDisabledInjectKey, a as formReadonlyInjectKey } from "../rice-form/index.js";
import "./type.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, useSlots: _useSlots, useModel: _useModel, mergeModels: _mergeModels, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot, createSharedDataIf: _createSharedDataIf, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedDataTemplateRef: _setSharedDataTemplateRef, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceCheckboxRiceCheckbox";
const { inject, computed, shallowRef } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-checkbox",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "00a282b4",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-checkbox/rice-checkbox.uvue",
  __name: "rice-checkbox",
  props: /* @__PURE__ */ _mergeModels(new UTSJSONObject({
    label: { type: String },
    value: { type: [String, Number, Boolean] },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    checkedColor: { type: String },
    iconSize: { type: [String, Number] },
    labelSize: { type: [String, Number] },
    labelColor: { type: String },
    shape: { type: String },
    iconPosition: { type: String },
    spaceBetween: { type: Boolean, default: null },
    checkedValue: { type: [String, Number, Boolean], default: true },
    incheckedValue: { type: [String, Number, Boolean], default: false },
    indeterminate: { type: Boolean, default: false },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null },
    customClass: { type: String }
  }), new UTSJSONObject({
    "modelValue": {
      type: [String, Boolean, Number],
      default: false
    },
    "modelModifiers": {}
  })),
  emits: /* @__PURE__ */ _mergeModels(["change"], ["update:modelValue"]),
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceCheckboxRiceCheckboxSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("checkbox");
    const emit = __emit;
    _useSlots();
    const props = __props;
    const modelValue = _useModel(__props, "modelValue");
    const checkboxGroup = inject(checkboxGroupInjectKey, null);
    const formDisabled = inject(formDisabledInjectKey, null);
    const formReadonly = inject(formReadonlyInjectKey, null);
    const isChecked = computed(() => {
      if (checkboxGroup != null) {
        return props.value != null ? checkboxGroup.modelValue.value.includes(props.value) : false;
      }
      const value = modelValue.value;
      if (typeof value == "boolean")
        return value;
      return isSameValue(value, props.checkedValue);
    });
    const isDisabled = computed(() => {
      var _a2, _b;
      const disabled = props.disabled || ((_a2 = checkboxGroup === null || checkboxGroup === void 0 ? null : checkboxGroup.disabled.value) !== null && _a2 !== void 0 ? _a2 : false) || ((_b = formDisabled === null || formDisabled === void 0 ? null : formDisabled.value) !== null && _b !== void 0 ? _b : false);
      if (checkboxGroup != null) {
        const max = checkboxGroup.max.value;
        const values = checkboxGroup.modelValue.value;
        const overlimit = max != null && max != 0 && values.length >= max;
        return disabled || overlimit && !isChecked.value;
      }
      return disabled;
    });
    const isReadonly = computed(() => {
      var _a2, _b;
      return props.readonly || ((_a2 = checkboxGroup === null || checkboxGroup === void 0 ? null : checkboxGroup.readonly.value) !== null && _a2 !== void 0 ? _a2 : false) || ((_b = formReadonly === null || formReadonly === void 0 ? null : formReadonly.value) !== null && _b !== void 0 ? _b : false);
    });
    const _iconPosition = computed(() => {
      var _a2, _b;
      return (_b = (_a2 = props.iconPosition) !== null && _a2 !== void 0 ? _a2 : checkboxGroup === null || checkboxGroup === void 0 ? null : checkboxGroup.iconPosition.value) !== null && _b !== void 0 ? _b : defCheckboxIconPosition;
    });
    const _iconSize = computed(() => {
      var _a2, _b;
      return (_b = (_a2 = props.iconSize) !== null && _a2 !== void 0 ? _a2 : checkboxGroup === null || checkboxGroup === void 0 ? null : checkboxGroup.iconSize.value) !== null && _b !== void 0 ? _b : "20px";
    });
    const showIcon = computed(() => {
      return isChecked.value || props.indeterminate;
    });
    const handleClick = (e) => {
      e.stopPropagation();
      if (isReadonly.value || isDisabled.value)
        return null;
      if (checkboxGroup != null) {
        const values = checkboxGroup.modelValue.value.slice(0);
        if (props.value != null) {
          const index = values.findIndex((v) => {
            return isSameValue(props.value, v);
          });
          index == -1 ? values.push(props.value) : values.splice(index, 1);
          checkboxGroup.updateValue(values);
        }
      }
      const newVal = isChecked.value ? props.incheckedValue : props.checkedValue;
      modelValue.value = newVal;
      emit("change", newVal);
    };
    const checkboxRef = shallowRef(null);
    const iconBoxStyle = computed(() => {
      var _a2, _b;
      const css = /* @__PURE__ */ new Map();
      const size = (_a2 = props.iconSize) !== null && _a2 !== void 0 ? _a2 : checkboxGroup === null || checkboxGroup === void 0 ? null : checkboxGroup.iconSize.value;
      if (size != null) {
        const width = addUnit(size);
        css.set("height", width);
        css.set("width", width);
      }
      const checkedColor = (_b = props.checkedColor) !== null && _b !== void 0 ? _b : checkboxGroup === null || checkboxGroup === void 0 ? null : checkboxGroup.checkedColor.value;
      if (hasStrValue(checkedColor)) {
        if (isChecked.value) {
          css.set("background-color", checkedColor);
          css.set("border", `1px solid ${checkedColor}`);
        } else {
          css.set("border", `1px solid ${isDisabled.value ? "var(--rice-checkbox-disabled-border-color)" : "var(--rice-checkbox-border-color)"}`);
        }
      }
      return css;
    });
    const textStyle = computed(() => {
      var _a2, _b;
      const css = /* @__PURE__ */ new Map();
      const labelSize = (_a2 = props.labelSize) !== null && _a2 !== void 0 ? _a2 : checkboxGroup === null || checkboxGroup === void 0 ? null : checkboxGroup.labelSize.value;
      const labelColor = (_b = props.labelColor) !== null && _b !== void 0 ? _b : checkboxGroup === null || checkboxGroup === void 0 ? null : checkboxGroup.labelColor.value;
      if (hasStrValue(labelSize))
        css.set("font-size", addUnit(labelSize));
      if (hasStrValue(labelColor) && !isDisabled.value)
        css.set("color", labelColor);
      return css;
    });
    const checkboxClass = computed(() => {
      var _a2;
      const isSpace = (_a2 = props.spaceBetween) !== null && _a2 !== void 0 ? _a2 : checkboxGroup === null || checkboxGroup === void 0 ? null : checkboxGroup.spaceBetween.value;
      return [
        ns.b(""),
        ns.theme(),
        ns.is("row", (checkboxGroup === null || checkboxGroup === void 0 ? null : checkboxGroup.direction.value) == "row"),
        ns.is("space-between", isSpace == true)
      ];
    });
    const labelClass = computed(() => {
      return [
        ns.e("label"),
        ns.e(`label--${_iconPosition.value}`)
      ];
    });
    const iconClass = computed(() => {
      var _a2;
      const shape = (_a2 = props.shape) !== null && _a2 !== void 0 ? _a2 : checkboxGroup === null || checkboxGroup === void 0 ? null : checkboxGroup.shape.value;
      return [
        ns.e("icon"),
        ns.is("__icon--round", shape == "round"),
        ns.is("__icon--checked", showIcon.value),
        ns.is("__icon--disabled", isDisabled.value && !isChecked.value),
        ns.is("__icon--checked--disabled", isDisabled.value && isChecked.value)
      ];
    });
    const textClass = computed(() => {
      return [
        ns.e("label__text"),
        ns.is("__label__text--disabled", isDisabled.value)
      ];
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_rice_icon = __easycom_0;
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 20, _unref(checkboxClass));
        _setSharedDataStyle(__sharedData, 21, __props.customStyle);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(_unref(_iconPosition) == "right"));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataClass(__sharedData, 5, _unref(labelClass));
        });
        _createSharedDataSlot("default", {
          checked: () => {
            return _unref(isChecked);
          },
          disabled: () => {
            return _unref(isDisabled);
          }
        }, (data) => {
          return _setSharedData(__sharedData, 1, data);
        }, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataClass(__sharedData, 2, _unref(textClass));
            _setSharedDataStyle(__sharedData, 3, _unref(textStyle));
            _setSharedData(__sharedData, 4, _toDisplayString(__props.label));
          });
        });
      });
      _createSharedDataSlot("icon", {
        checked: () => {
          return _unref(isChecked);
        },
        disabled: () => {
          return _unref(isDisabled);
        }
      }, (data) => {
        return _setSharedData(__sharedData, 6, data);
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 10, _unref(iconClass));
          _setSharedDataStyle(__sharedData, 11, _unref(iconBoxStyle));
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 7, _toSharedDataBoolean(_unref(showIcon)));
        }, () => {
          const n10 = _createSharedDataComponentWithFallback(_component_rice_icon, "4d0670e4", {
            name: () => {
              return __props.indeterminate ? "minus" : "checked";
            },
            color: "#fff",
            size: () => {
              return _unref(_iconSize);
            },
            "custom-style": { transform: "scale(0.6)" }
          });
          _setSharedData(__sharedData, 8, n10?.sharedData);
        });
        _setSharedDataTemplateRef(__sharedData, 9, (n11) => {
          _setTemplateRef(n11, "iconBoxRef");
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 12, _toSharedDataBoolean(_unref(_iconPosition) == "left"));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataClass(__sharedData, 17, _unref(labelClass));
        });
        _createSharedDataSlot("default", {
          checked: () => {
            return _unref(isChecked);
          },
          disabled: () => {
            return _unref(isDisabled);
          }
        }, (data) => {
          return _setSharedData(__sharedData, 13, data);
        }, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataClass(__sharedData, 14, _unref(textClass));
            _setSharedDataStyle(__sharedData, 15, _unref(textStyle));
            _setSharedData(__sharedData, 16, _toDisplayString(__props.label));
          });
        });
      });
      _setSharedDataEvent(__sharedData, 18, handleClick);
      _setSharedDataTemplateRef(__sharedData, 19, (n18) => {
        _setTemplateRef(n18, checkboxRef, null, "checkboxRef");
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
//# sourceMappingURL=rice-checkbox.js.map
