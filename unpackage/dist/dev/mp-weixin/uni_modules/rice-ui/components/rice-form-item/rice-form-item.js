"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/use/useCountDown/index.js");
require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
const uni_modules_riceUi_components_riceForm_index = require("../rice-form/index.js");
const uni_modules_riceUi_components_riceFormItem_index = require("./index.js");
const uni_modules_riceUi_components_riceFormItem_type = require("./type.js");
const uni_modules_riceUi_components_riceForm_type = require("../rice-form/type.js");
if (!Array) {
  const _easycom_rice_icon_1 = common_vendor.resolveComponent("rice-icon");
  _easycom_rice_icon_1();
}
const _easycom_rice_icon = () => "../rice-icon/rice-icon.js";
if (!Math) {
  _easycom_rice_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-form-item",
  styleIsolation: "app-and-page"
}, { __name: "rice-form-item", props: {
  name: {},
  label: {},
  labelWidth: {},
  labelPosition: {},
  labelStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } },
  rules: {},
  required: { type: Boolean, default: null },
  showRequired: { type: Boolean, default: null },
  requiredPosition: {},
  showError: { type: Boolean, default: null },
  suffixIcon: {},
  suffixIconStyle: {},
  borderBottom: { type: Boolean, default: null },
  errorBottom: { type: Boolean, default: null },
  contentStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } },
  errorStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } },
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}, emits: ["clickSuffix", "click", "clickContent"], setup(__props, _a) {
  var __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("form-item");
  const emit = __emit;
  const slots = common_vendor.useSlots();
  const props = __props;
  const formItemId = `rice-form-item-${props.name}`;
  const form = common_vendor.inject(uni_modules_riceUi_components_riceForm_index.formInjectKey, null);
  const formData = common_vendor.inject(uni_modules_riceUi_components_riceForm_index.formDataInjectKey, null);
  const formItemContext = common_vendor.inject(uni_modules_riceUi_components_riceFormItem_index.formItemContextInjectKey, null);
  common_vendor.computed(() => {
    var _a2;
    return (_a2 = formItemContext === null || formItemContext === void 0 ? null : formItemContext.formItems.value) !== null && _a2 !== void 0 ? _a2 : [];
  });
  const _showError = common_vendor.computed(() => {
    var _a2, _b;
    return (_b = (_a2 = props.showError) !== null && _a2 !== void 0 ? _a2 : form === null || form === void 0 ? null : form.showError) !== null && _b !== void 0 ? _b : true;
  });
  const state = common_vendor.reactive(new uni_modules_riceUi_components_riceFormItem_type.FormItemState({
    rule: null,
    name: props.name,
    label: props.label,
    status: "unvalidate",
    validateMessage: ""
  }));
  const fieldValue = common_vendor.computed(() => {
    if (!uni_modules_riceUi_libs_utils_basic.hasStrValue(props.name) || formData == null)
      return null;
    return formData.value.getAny(props.name);
  });
  const rulesList = common_vendor.computed(() => {
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
      const list = common_vendor.UTS.mapGet(formRules, name);
      if (list != null && list.length > 0) {
        rules.push(...list);
      }
    }
    const rulesRequired = common_vendor.UTS.arrayFind(rules, (v) => {
      return v.required == true;
    });
    if (props.required == true && rulesRequired == null) {
      rules.unshift(new uni_modules_riceUi_components_riceForm_type.FormRules({
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
  const showRequired = common_vendor.computed(() => {
    var _a2, _b;
    return (_b = (_a2 = props.showRequired) !== null && _a2 !== void 0 ? _a2 : form === null || form === void 0 ? null : form.showRequired) !== null && _b !== void 0 ? _b : rulesList.value.some((v) => {
      return v.required == true;
    });
  });
  const formItemRef = common_vendor.ref(null);
  common_vendor.ref(null);
  const scrollToField = () => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
    });
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
      if (common_vendor.UTS.isInstanceOf(value, common_vendor.UTSJSONObject)) {
        return common_vendor.UTSJSONObject.keys(value).length == 0;
      }
      return common_vendor.UTS.JSON.stringify(value) == "{}";
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
  function validate(trigger) {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
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
            const returnVal = yield rule.validator(fieldValue.value);
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
    });
  }
  const handleBlur = () => {
    validate("blur");
  };
  common_vendor.provide(uni_modules_riceUi_components_riceFormItem_index.formItemBlurInjectKey, handleBlur);
  common_vendor.watch(fieldValue, (newVal = null, oldValue = null) => {
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.name) && !uni_modules_riceUi_libs_utils_basic.isSameValue(newVal, oldValue)) {
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
  const context = new uni_modules_riceUi_components_riceForm_type.FormItemContext(
    {
      name: props.name,
      validate,
      clearValidate,
      scrollToField
    }
    //style
    //@ts-ignore
  );
  const _labelStyle = common_vendor.computed(() => {
    var _a2;
    return common_vendor.UTSJSONObject.assign((_a2 = form === null || form === void 0 ? null : form.labelStyle) !== null && _a2 !== void 0 ? _a2 : new common_vendor.UTSJSONObject({}), props.labelStyle);
  });
  const _errorStyle = common_vendor.computed(() => {
    var _a2;
    return common_vendor.UTSJSONObject.assign((_a2 = form === null || form === void 0 ? null : form.errorStyle) !== null && _a2 !== void 0 ? _a2 : new common_vendor.UTSJSONObject({}), props.errorStyle);
  });
  const _requiredPosition = common_vendor.computed(() => {
    var _a2, _b;
    return (_b = (_a2 = props.requiredPosition) !== null && _a2 !== void 0 ? _a2 : form === null || form === void 0 ? null : form.requiredPosition) !== null && _b !== void 0 ? _b : "left";
  });
  const showBorderBottom = common_vendor.computed(() => {
    var _a2, _b;
    return (_b = (_a2 = props.borderBottom) !== null && _a2 !== void 0 ? _a2 : form === null || form === void 0 ? null : form.borderBottom) !== null && _b !== void 0 ? _b : true;
  });
  const showErrBottom = common_vendor.computed(() => {
    var _a2, _b;
    return ((_b = (_a2 = props.errorBottom) !== null && _a2 !== void 0 ? _a2 : form === null || form === void 0 ? null : form.errorBottom) !== null && _b !== void 0 ? _b : false) && state.status == "failed";
  });
  const _labelPosition = common_vendor.computed(() => {
    var _a2, _b;
    return (_b = (_a2 = props.labelPosition) !== null && _a2 !== void 0 ? _a2 : form === null || form === void 0 ? null : form.labelPosition) !== null && _b !== void 0 ? _b : "left";
  });
  const formItemClass = common_vendor.computed(() => {
    const basic = [ns.b(""), ns.theme()];
    if (showBorderBottom.value) {
      basic.push(ns.m(showErrBottom.value ? "border--error" : "border"));
    }
    return basic;
  });
  const formItemInnerClass = common_vendor.computed(() => {
    const basic = [ns.e("inner")];
    if (_labelPosition.value == "top") {
      basic.push(ns.e("inner--top"));
    }
    return basic;
  });
  const labelClass = common_vendor.computed(() => {
    return [
      ns.e("label"),
      ns.is("__label--top", _labelPosition.value == "top"),
      ns.is("__label--right", _labelPosition.value == "right")
    ];
  });
  const _labelWidth = common_vendor.computed(() => {
    var _a2;
    const width = (_a2 = props.labelWidth) !== null && _a2 !== void 0 ? _a2 : form === null || form === void 0 ? null : form.labelWidth;
    if (width != null)
      return uni_modules_riceUi_libs_utils_basic.addUnit(width);
    return width;
  });
  const labelInnerStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.label != null && _labelWidth.value != null) {
      css.set("width", _labelWidth.value);
    }
    return css;
  });
  const errorStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (_labelWidth.value != null && _labelWidth.value != "auto" && _labelPosition.value != "top") {
      css.set("margin-left", _labelWidth.value);
    }
    return css;
  });
  common_vendor.onMounted(() => {
    formItemContext === null || formItemContext === void 0 ? null : formItemContext.addField(context);
  });
  common_vendor.onUnmounted(() => {
    formItemContext === null || formItemContext === void 0 ? null : formItemContext.removeField(context);
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: _ctx.label != null || common_vendor.unref(slots)["label"] != null
    }, _ctx.label != null || common_vendor.unref(slots)["label"] != null ? common_vendor.e({
      b: common_vendor.unref(_requiredPosition) == "left" && common_vendor.unref(showRequired)
    }, common_vendor.unref(_requiredPosition) == "left" && common_vendor.unref(showRequired) ? {} : {}, {
      c: common_vendor.t(_ctx.label),
      d: common_vendor.s(common_vendor.unref(uni_modules_riceUi_libs_utils_basic.splitCssProperty)(common_vendor.unref(_labelStyle)).textCssProperty),
      e: common_vendor.unref(_requiredPosition) == "right" && common_vendor.unref(showRequired)
    }, common_vendor.unref(_requiredPosition) == "right" && common_vendor.unref(showRequired) ? {} : {}, {
      f: common_vendor.n(common_vendor.unref(labelClass)),
      g: common_vendor.s(common_vendor.unref(labelInnerStyle)),
      h: common_vendor.s(common_vendor.unref(uni_modules_riceUi_libs_utils_basic.splitCssProperty)(common_vendor.unref(_labelStyle)).rectCssProperty)
    }) : {}, {
      i: common_vendor.s(_ctx.contentStyle),
      j: common_vendor.o(clickContent, "e0"),
      k: common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.suffixIcon)
    }, common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.suffixIcon) ? {
      l: common_vendor.o(clickSuffix, "65"),
      m: common_vendor.p({
        name: _ctx.suffixIcon,
        ["custom-style"]: _ctx.suffixIconStyle,
        class: "data-v-2151614f"
      })
    } : {}, {
      n: common_vendor.n(common_vendor.unref(formItemInnerClass)),
      o: common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(common_vendor.unref(state).validateMessage) && common_vendor.unref(_showError)
    }, common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(common_vendor.unref(state).validateMessage) && common_vendor.unref(_showError) ? {
      p: common_vendor.t(common_vendor.unref(state).validateMessage),
      q: common_vendor.s(common_vendor.unref(uni_modules_riceUi_libs_utils_basic.splitCssProperty)(common_vendor.unref(_errorStyle)).textCssProperty),
      r: common_vendor.r("error", {
        message: common_vendor.unref(state).validateMessage
      }),
      s: common_vendor.s(common_vendor.unref(errorStyle)),
      t: common_vendor.s(common_vendor.unref(uni_modules_riceUi_libs_utils_basic.splitCssProperty)(common_vendor.unref(_errorStyle)).rectCssProperty)
    } : {}, {
      v: common_vendor.sei(common_vendor.gei(_ctx, formItemId, "r0-2151614f"), "view", formItemRef, {
        "k": "formItemRef"
      }),
      w: common_vendor.n(common_vendor.unref(formItemClass)),
      x: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      y: common_vendor.s(_ctx.customStyle),
      z: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      A: common_vendor.o(handleClick, "11")
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2151614f"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-form-item/rice-form-item.js.map
