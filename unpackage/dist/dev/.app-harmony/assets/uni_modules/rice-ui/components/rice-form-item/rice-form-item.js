import { _ as __easycom_0 } from "../rice-icon/rice-icon.js";
import "../../libs/use/useCountDown/index.js";
import "../../libs/store/useConfig.js";
import { u as useNamespace } from "../../libs/use/useNamespace/index.js";
import "../../libs/use/usePopup/index.js";
import "../../libs/use/useRelation/useChildren.js";
import "../../libs/use/useRelation/useParent.js";
import "../../libs/use/useSafeArea/index.js";
import "../../libs/use/useTouch/index.js";
import { h as hasStrValue, e as isSameValue, a as addUnit, l as getParentEl, s as splitCssProperty } from "../../libs/utils/basic.js";
import { b as formInjectKey, c as formDataInjectKey } from "../rice-form/index.js";
import { f as formItemContextInjectKey, a as formItemBlurInjectKey } from "./index.js";
import { F as FormItemState } from "./type.js";
import { F as FormRules, a as FormItemContext } from "../rice-form/type.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, useSlots: _useSlots, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataIf: _createSharedDataIf, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedDataTemplateRef: _setSharedDataTemplateRef } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceFormItemRiceFormItem";
const { inject, computed, reactive, ref, nextTick, provide, watch, onMounted, onUnmounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-form-item",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "1bf2f071",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-form-item/rice-form-item.uvue",
  __name: "rice-form-item",
  props: {
    name: { type: String },
    label: { type: String },
    labelWidth: { type: [String, Number] },
    labelPosition: { type: null },
    labelStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null },
    rules: { type: Array },
    required: { type: Boolean, default: null },
    showRequired: { type: Boolean, default: null },
    requiredPosition: { type: null },
    showError: { type: Boolean, default: null },
    suffixIcon: { type: String },
    suffixIconStyle: { type: null },
    borderBottom: { type: Boolean, default: null },
    errorBottom: { type: Boolean, default: null },
    contentStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null },
    errorStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  },
  emits: ["clickSuffix", "click", "clickContent"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceFormItemRiceFormItemSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("form-item");
    const emit = __emit;
    const slots = _useSlots();
    const props = __props;
    const formItemId = `rice-form-item-${props.name}`;
    const form = inject(formInjectKey, null);
    const formData = inject(formDataInjectKey, null);
    const formItemContext = inject(formItemContextInjectKey, null);
    computed(() => {
      var _a2;
      return (_a2 = formItemContext === null || formItemContext === void 0 ? null : formItemContext.formItems.value) !== null && _a2 !== void 0 ? _a2 : [];
    });
    const _showError = computed(() => {
      var _a2, _b;
      return (_b = (_a2 = props.showError) !== null && _a2 !== void 0 ? _a2 : form === null || form === void 0 ? null : form.showError) !== null && _b !== void 0 ? _b : true;
    });
    const state = reactive(new FormItemState({
      rule: null,
      name: props.name,
      label: props.label,
      status: "unvalidate",
      validateMessage: ""
    }));
    const fieldValue = computed(() => {
      if (!hasStrValue(props.name) || formData == null)
        return null;
      return formData.value.getAny(props.name);
    });
    const rulesList = computed(() => {
      var _a2;
      const rules = [];
      const name = (_a2 = props.name) !== null && _a2 !== void 0 ? _a2 : "";
      if (name == "")
        return [];
      if (props.rules != null && props.rules.length > 0) {
        rules.push(...props.rules);
      }
      const formRules = form === null || form === void 0 ? null : form.rules;
      if (formRules != null) {
        const list = UTS.mapGet(formRules, name);
        if (list != null && list.length > 0) {
          rules.push(...list);
        }
      }
      const rulesRequired = UTS.arrayFind(rules, (v) => {
        return v.required == true;
      });
      if (props.required == true && rulesRequired == null) {
        rules.unshift(new FormRules({
          trigger: null,
          min: null,
          max: null,
          pattern: null,
          validator: null,
          required: true,
          message: "必填项"
        }));
      }
      return rules;
    });
    const showRequired = computed(() => {
      var _a2, _b;
      return (_b = (_a2 = props.showRequired) !== null && _a2 !== void 0 ? _a2 : form === null || form === void 0 ? null : form.showRequired) !== null && _b !== void 0 ? _b : rulesList.value.some((v) => {
        return v.required == true;
      });
    });
    const formItemRef = ref(null);
    const scrollRef = ref(null);
    const scrollToField = async () => {
      if (scrollRef.value == null)
        return Promise.resolve(null);
      scrollRef.value.removeAttribute("scroll-into-view");
      await nextTick();
      scrollRef.value.setAnyAttribute("scroll-into-view", formItemId);
    };
    function getRuleMessage(rule, value = null) {
      var _a2;
      if (typeof value == "string")
        return value;
      return (_a2 = rule.message) !== null && _a2 !== void 0 ? _a2 : "";
    }
    const isEmptyValue = (value = null) => {
      if (value === void 0)
        return true;
      if (value == null)
        return true;
      if (typeof value == "string")
        return value.trim().length == 0;
      if (Array.isArray(value))
        return value.length == 0;
      if (typeof value == "object") {
        if (UTS.isInstanceOf(value, UTSJSONObject)) {
          return UTSJSONObject.keys(value).length == 0;
        }
        return UTS.JSON.stringify(value) == "{}";
      }
      return false;
    };
    const runSyncRule = (rule, value = null) => {
      if (rule.required == true && isEmptyValue(value)) {
        return false;
      }
      if (rule.pattern != null) {
        const newVal = typeof value == "number" ? value.toString(value) : value;
        if (typeof newVal == "string") {
          return rule.pattern.test(newVal);
        }
      }
      let len = null;
      if (typeof value == "number") {
        len = value;
      } else if (typeof value == "string") {
        len = value.trim().length;
      } else if (Array.isArray(value)) {
        len = value.length;
      }
      if (rule.min != null && len != null) {
        if (len < rule.min)
          return false;
      }
      if (rule.max != null && len != null) {
        if (len > rule.max)
          return false;
      }
      return true;
    };
    async function validate(trigger) {
      state.name = props.name;
      state.label = props.label;
      const list = trigger == "all" ? rulesList.value : rulesList.value.filter((v) => {
        var _a2;
        if (v.trigger == "all")
          return true;
        return ((_a2 = v.trigger) !== null && _a2 !== void 0 ? _a2 : "change") == trigger;
      });
      if (list.length == 0 && trigger != "all")
        return state;
      for (let i = 0; i < list.length; i++) {
        const rule = list[i];
        state.rule = rule;
        const syncResult = runSyncRule(rule, fieldValue.value);
        if (!syncResult) {
          state.status = "failed";
          state.validateMessage = getRuleMessage(rule, null);
          return state;
        }
        if (typeof rule.validator == "function") {
          try {
            const returnVal = await rule.validator(fieldValue.value);
            if (returnVal != true) {
              state.status = "failed";
              state.validateMessage = getRuleMessage(rule, returnVal);
              return state;
            }
          } catch (error) {
            state.status = "failed";
            state.validateMessage = getRuleMessage(rule, error);
            return state;
          }
        }
      }
      state.status = "passed";
      state.validateMessage = "";
      return state;
    }
    const handleBlur = () => {
      validate("blur");
    };
    provide(formItemBlurInjectKey, handleBlur);
    watch(fieldValue, (newVal = null, oldValue = null) => {
      if (hasStrValue(props.name) && !isSameValue(newVal, oldValue)) {
        validate("change");
      }
    }, {
      deep: true
    });
    const clearValidate = () => {
      state.status = "unvalidate";
      state.validateMessage = "";
    };
    const clickSuffix = () => {
      if ((form === null || form === void 0 ? null : form.disabled) == true || (form === null || form === void 0 ? null : form.readonly) == true)
        return null;
      emit("clickSuffix");
    };
    const handleClick = () => {
      if ((form === null || form === void 0 ? null : form.disabled) == true || (form === null || form === void 0 ? null : form.readonly) == true)
        return null;
      emit("click");
    };
    const clickContent = () => {
      if ((form === null || form === void 0 ? null : form.disabled) == true || (form === null || form === void 0 ? null : form.readonly) == true)
        return null;
      emit("clickContent");
    };
    const context = new FormItemContext(
      {
        name: props.name,
        validate,
        clearValidate,
        scrollToField
      }
      //style
      //@ts-ignore
    );
    const _labelStyle = computed(() => {
      var _a2;
      return UTSJSONObject.assign((_a2 = form === null || form === void 0 ? null : form.labelStyle) !== null && _a2 !== void 0 ? _a2 : new UTSJSONObject({}), props.labelStyle);
    });
    const _errorStyle = computed(() => {
      var _a2;
      return UTSJSONObject.assign((_a2 = form === null || form === void 0 ? null : form.errorStyle) !== null && _a2 !== void 0 ? _a2 : new UTSJSONObject({}), props.errorStyle);
    });
    const _requiredPosition = computed(() => {
      var _a2, _b;
      return (_b = (_a2 = props.requiredPosition) !== null && _a2 !== void 0 ? _a2 : form === null || form === void 0 ? null : form.requiredPosition) !== null && _b !== void 0 ? _b : "left";
    });
    const showBorderBottom = computed(() => {
      var _a2, _b;
      return (_b = (_a2 = props.borderBottom) !== null && _a2 !== void 0 ? _a2 : form === null || form === void 0 ? null : form.borderBottom) !== null && _b !== void 0 ? _b : true;
    });
    const showErrBottom = computed(() => {
      var _a2, _b;
      return ((_b = (_a2 = props.errorBottom) !== null && _a2 !== void 0 ? _a2 : form === null || form === void 0 ? null : form.errorBottom) !== null && _b !== void 0 ? _b : false) && state.status == "failed";
    });
    const _labelPosition = computed(() => {
      var _a2, _b;
      return (_b = (_a2 = props.labelPosition) !== null && _a2 !== void 0 ? _a2 : form === null || form === void 0 ? null : form.labelPosition) !== null && _b !== void 0 ? _b : "left";
    });
    const formItemClass = computed(() => {
      const basic = [ns.b(""), ns.theme()];
      if (showBorderBottom.value) {
        basic.push(ns.m(showErrBottom.value ? "border--error" : "border"));
      }
      return basic;
    });
    const formItemInnerClass = computed(() => {
      const basic = [ns.e("inner")];
      if (_labelPosition.value == "top") {
        basic.push(ns.e("inner--top"));
      }
      return basic;
    });
    const labelClass = computed(() => {
      return [
        ns.e("label"),
        ns.is("__label--top", _labelPosition.value == "top"),
        ns.is("__label--right", _labelPosition.value == "right")
      ];
    });
    const _labelWidth = computed(() => {
      var _a2;
      const width = (_a2 = props.labelWidth) !== null && _a2 !== void 0 ? _a2 : form === null || form === void 0 ? null : form.labelWidth;
      if (width != null)
        return addUnit(width);
      return width;
    });
    const labelInnerStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.label != null && _labelWidth.value != null) {
        css.set("width", _labelWidth.value);
      }
      return css;
    });
    const errorStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (_labelWidth.value != null && _labelWidth.value != "auto" && _labelPosition.value != "top") {
        css.set("margin-left", _labelWidth.value);
      }
      return css;
    });
    onMounted(() => {
      formItemContext === null || formItemContext === void 0 ? null : formItemContext.addField(context);
      scrollRef.value = getParentEl(formItemRef.value, ["scroll-view", "list-view"]);
    });
    onUnmounted(() => {
      formItemContext === null || formItemContext === void 0 ? null : formItemContext.removeField(context);
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_rice_icon = __easycom_0;
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 17, _unref(formItemClass));
        _setSharedDataStyle(__sharedData, 18, __props.customStyle);
        _setSharedDataAttr(__sharedData, 19, _toSharedDataString(formItemId));
        _setSharedDataClass(__sharedData, 20, _unref(formItemInnerClass));
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 5, _toSharedDataBoolean(__props.label != null || slots["label"] != null));
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 10, _unref(labelClass));
          _setSharedDataStyle(__sharedData, 11, [_unref(labelInnerStyle), _unref(splitCssProperty)(_unref(_labelStyle)).rectCssProperty]);
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 6, _toSharedDataBoolean(_unref(_requiredPosition) == "left" && _unref(showRequired)));
        }, () => {
        });
        _createSharedDataSlot("label", null, null, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataStyle(__sharedData, 7, _unref(splitCssProperty)(_unref(_labelStyle)).textCssProperty);
            _setSharedData(__sharedData, 8, _toDisplayString(__props.label));
          });
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 9, _toSharedDataBoolean(_unref(_requiredPosition) == "right" && _unref(showRequired)));
        }, () => {
        });
      });
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 21, __props.contentStyle);
      });
      _createSharedDataSlot("default", null, null);
      _setSharedDataEvent(__sharedData, 14, clickContent);
      _createSharedDataSlot("suffix", null, null, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 12, _toSharedDataBoolean(_unref(hasStrValue)(__props.suffixIcon)));
        }, () => {
          const n18 = _createSharedDataComponentWithFallback(_component_rice_icon, "5f011dd4", {
            name: () => {
              return __props.suffixIcon;
            },
            "custom-style": () => {
              return __props.suffixIconStyle;
            },
            onClick: () => {
              return clickSuffix;
            }
          });
          _setSharedData(__sharedData, 13, n18?.sharedData);
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(_unref(hasStrValue)(_unref(state).validateMessage) && _unref(_showError)));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData, 4, [_unref(errorStyle), _unref(splitCssProperty)(_unref(_errorStyle)).rectCssProperty]);
        });
        _createSharedDataSlot("error", { message: () => {
          return _unref(state).validateMessage;
        } }, (data) => {
          return _setSharedData(__sharedData, 1, data);
        }, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataStyle(__sharedData, 2, _unref(splitCssProperty)(_unref(_errorStyle)).textCssProperty);
            _setSharedData(__sharedData, 3, _toDisplayString(_unref(state).validateMessage));
          });
        });
      });
      _setSharedDataEvent(__sharedData, 15, handleClick);
      _setSharedDataTemplateRef(__sharedData, 16, (n27) => {
        _setTemplateRef(n27, formItemRef, null, "formItemRef");
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=rice-form-item.js.map
