import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-icon/rice-icon&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useCountDown/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/store/useConfig&";
import { u as useNamespace } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useNamespace/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/usePopup/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useChildren&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useParent&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useSafeArea/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useTouch/index&";
import { e as isSameValue, a as addUnit, h as hasStrValue } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/utils/basic&";
import { d as debugWarn } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/utils/debug&";
import { f as formDisabledInjectKey, a as formReadonlyInjectKey } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-form/index&";
import { r as radioGroupInjectKey, b as defIconPosition } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-radio-group/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-radio/type&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, useSlots: _useSlots, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot, createSharedDataIf: _createSharedDataIf, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedDataTemplateRef: _setSharedDataTemplateRef, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceRadioRiceRadio";
const { inject, computed, shallowRef } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-radio",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "28399816",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-radio/rice-radio.uvue",
  __name: "rice-radio",
  props: {
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
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  },
  emits: ["change"],
  setup(__props, _a) {
    _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceRadioRiceRadioSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("radio");
    _useSlots();
    const props = __props;
    const radioGroup = inject(radioGroupInjectKey, null);
    const formDisabled = inject(formDisabledInjectKey, null);
    const formReadonly = inject(formReadonlyInjectKey, null);
    const isChecked = computed(() => {
      return radioGroup != null ? isSameValue(props.value, radioGroup.modelValue.value) : false;
    });
    const isDisabled = computed(() => {
      var _a2, _b;
      return ((_a2 = formDisabled === null || formDisabled === void 0 ? null : formDisabled.value) !== null && _a2 !== void 0 ? _a2 : false) || props.disabled || ((_b = radioGroup === null || radioGroup === void 0 ? null : radioGroup.disabled.value) !== null && _b !== void 0 ? _b : false);
    });
    const isReadonly = computed(() => {
      var _a2, _b;
      return ((_a2 = formReadonly === null || formReadonly === void 0 ? null : formReadonly.value) !== null && _a2 !== void 0 ? _a2 : false) || props.readonly || ((_b = radioGroup === null || radioGroup === void 0 ? null : radioGroup.readonly.value) !== null && _b !== void 0 ? _b : false);
    });
    const _iconPosition = computed(() => {
      var _a2, _b;
      return (_b = (_a2 = props.iconPosition) !== null && _a2 !== void 0 ? _a2 : radioGroup === null || radioGroup === void 0 ? null : radioGroup.iconPosition.value) !== null && _b !== void 0 ? _b : defIconPosition;
    });
    const _iconSize = computed(() => {
      var _a2, _b;
      return (_b = (_a2 = props.iconSize) !== null && _a2 !== void 0 ? _a2 : radioGroup === null || radioGroup === void 0 ? null : radioGroup.iconSize.value) !== null && _b !== void 0 ? _b : "20px";
    });
    const handleClick = (e) => {
      e.stopPropagation();
      const value = props.value;
      if (isReadonly.value || isDisabled.value || radioGroup == null || value == null)
        return null;
      if (!isSameValue(value, radioGroup.modelValue.value)) {
        radioGroup.updateValue(value);
      }
    };
    const checkboxRef = shallowRef(null);
    const iconBoxStyle = computed(() => {
      var _a2, _b;
      const css = /* @__PURE__ */ new Map();
      const size = (_a2 = props.iconSize) !== null && _a2 !== void 0 ? _a2 : radioGroup === null || radioGroup === void 0 ? null : radioGroup.iconSize.value;
      if (size != null) {
        const width = addUnit(size);
        css.set("height", width);
        css.set("width", width);
      }
      const checkedColor = (_b = props.checkedColor) !== null && _b !== void 0 ? _b : radioGroup === null || radioGroup === void 0 ? null : radioGroup.checkedColor.value;
      if (hasStrValue(checkedColor)) {
        if (isChecked.value) {
          css.set("background-color", checkedColor);
          css.set("border", `1px solid ${checkedColor}`);
        } else {
          css.set("border", `1px solid ${isDisabled.value ? "var(--rice-radio-disabled-border-color)" : "var(--rice-radio-border-color)"}`);
        }
      }
      return css;
    });
    const textStyle = computed(() => {
      var _a2, _b;
      const css = /* @__PURE__ */ new Map();
      const labelSize = (_a2 = props.labelSize) !== null && _a2 !== void 0 ? _a2 : radioGroup === null || radioGroup === void 0 ? null : radioGroup.labelSize.value;
      const labelColor = (_b = props.labelColor) !== null && _b !== void 0 ? _b : radioGroup === null || radioGroup === void 0 ? null : radioGroup.labelColor.value;
      if (hasStrValue(labelSize))
        css.set("font-size", addUnit(labelSize));
      if (hasStrValue(labelColor) && !isDisabled.value)
        css.set("color", labelColor);
      return css;
    });
    const radioClass = computed(() => {
      var _a2;
      const isSpace = (_a2 = props.spaceBetween) !== null && _a2 !== void 0 ? _a2 : radioGroup === null || radioGroup === void 0 ? null : radioGroup.spaceBetween.value;
      return [
        ns.b(""),
        ns.theme(),
        ns.is("row", (radioGroup === null || radioGroup === void 0 ? null : radioGroup.direction.value) == "row"),
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
      var _a2, _b;
      const shape = (_b = (_a2 = props.shape) !== null && _a2 !== void 0 ? _a2 : radioGroup === null || radioGroup === void 0 ? null : radioGroup.shape.value) !== null && _b !== void 0 ? _b : "round";
      return [
        ns.e("icon"),
        ns.is("__icon--round", shape == "round"),
        ns.is("__icon--checked", isChecked.value),
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
    if (radioGroup == null) {
      debugWarn("Radio", "<Radio> must be used with <RadioGroup>");
    }
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_rice_icon = __easycom_0;
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 20, _unref(radioClass));
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
          return _setSharedData(__sharedData, 7, _toSharedDataBoolean(_unref(isChecked)));
        }, () => {
          const n10 = _createSharedDataComponentWithFallback(_component_rice_icon, "8d9c2f58", {
            name: "checked",
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
//# sourceMappingURL=rice-radio.js.map
