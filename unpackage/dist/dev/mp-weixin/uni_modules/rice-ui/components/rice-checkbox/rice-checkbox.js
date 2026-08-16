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
const uni_modules_riceUi_components_riceCheckboxGroup_index = require("../rice-checkbox-group/index.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
const uni_modules_riceUi_components_riceForm_index = require("../rice-form/index.js");
require("./type.js");
if (!Array) {
  const _easycom_rice_icon_1 = common_vendor.resolveComponent("rice-icon");
  _easycom_rice_icon_1();
}
const _easycom_rice_icon = () => "../rice-icon/rice-icon.js";
if (!Math) {
  _easycom_rice_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-checkbox",
  styleIsolation: "app-and-page"
}, { __name: "rice-checkbox", props: /* @__PURE__ */ common_vendor.mergeModels(new common_vendor.UTSJSONObject({
  label: {},
  value: { type: [String, Number, Boolean] },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  checkedColor: {},
  iconSize: {},
  labelSize: {},
  labelColor: {},
  shape: {},
  iconPosition: {},
  spaceBetween: { type: Boolean, default: null },
  checkedValue: { type: [String, Number, Boolean], default: true },
  incheckedValue: { type: [String, Number, Boolean], default: false },
  indeterminate: { type: Boolean, default: false },
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } },
  customClass: {}
}), new common_vendor.UTSJSONObject({
  "modelValue": {
    type: [String, Boolean, Number],
    default: false
  },
  "modelModifiers": {}
})), emits: /* @__PURE__ */ common_vendor.mergeModels(["change"], ["update:modelValue"]), setup(__props, _a) {
  var __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("checkbox");
  const emit = __emit;
  common_vendor.useSlots();
  const props = __props;
  const modelValue = common_vendor.useModel(__props, "modelValue");
  const checkboxGroup = common_vendor.inject(uni_modules_riceUi_components_riceCheckboxGroup_index.checkboxGroupInjectKey, null);
  const formDisabled = common_vendor.inject(uni_modules_riceUi_components_riceForm_index.formDisabledInjectKey, null);
  const formReadonly = common_vendor.inject(uni_modules_riceUi_components_riceForm_index.formReadonlyInjectKey, null);
  const isChecked = common_vendor.computed(() => {
    if (checkboxGroup != null) {
      return props.value != null ? checkboxGroup.modelValue.value.includes(props.value) : false;
    }
    const value = modelValue.value;
    if (typeof value == "boolean")
      return value;
    return uni_modules_riceUi_libs_utils_basic.isSameValue(value, props.checkedValue);
  });
  const isDisabled = common_vendor.computed(() => {
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
  const isReadonly = common_vendor.computed(() => {
    var _a2, _b;
    return props.readonly || ((_a2 = checkboxGroup === null || checkboxGroup === void 0 ? null : checkboxGroup.readonly.value) !== null && _a2 !== void 0 ? _a2 : false) || ((_b = formReadonly === null || formReadonly === void 0 ? null : formReadonly.value) !== null && _b !== void 0 ? _b : false);
  });
  const _iconPosition = common_vendor.computed(() => {
    var _a2, _b;
    return (_b = (_a2 = props.iconPosition) !== null && _a2 !== void 0 ? _a2 : checkboxGroup === null || checkboxGroup === void 0 ? null : checkboxGroup.iconPosition.value) !== null && _b !== void 0 ? _b : uni_modules_riceUi_components_riceCheckboxGroup_index.defCheckboxIconPosition;
  });
  const _iconSize = common_vendor.computed(() => {
    var _a2, _b;
    return (_b = (_a2 = props.iconSize) !== null && _a2 !== void 0 ? _a2 : checkboxGroup === null || checkboxGroup === void 0 ? null : checkboxGroup.iconSize.value) !== null && _b !== void 0 ? _b : "20px";
  });
  const showIcon = common_vendor.computed(() => {
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
          return uni_modules_riceUi_libs_utils_basic.isSameValue(props.value, v);
        });
        index == -1 ? values.push(props.value) : values.splice(index, 1);
        checkboxGroup.updateValue(values);
      }
    }
    const newVal = isChecked.value ? props.incheckedValue : props.checkedValue;
    modelValue.value = newVal;
    emit("change", newVal);
  };
  const checkboxRef = common_vendor.shallowRef(null);
  const iconBoxStyle = common_vendor.computed(() => {
    var _a2, _b;
    const css = /* @__PURE__ */ new Map();
    const size = (_a2 = props.iconSize) !== null && _a2 !== void 0 ? _a2 : checkboxGroup === null || checkboxGroup === void 0 ? null : checkboxGroup.iconSize.value;
    if (size != null) {
      const width = uni_modules_riceUi_libs_utils_basic.addUnit(size);
      css.set("height", width);
      css.set("width", width);
    }
    const checkedColor = (_b = props.checkedColor) !== null && _b !== void 0 ? _b : checkboxGroup === null || checkboxGroup === void 0 ? null : checkboxGroup.checkedColor.value;
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(checkedColor)) {
      if (isChecked.value) {
        css.set("background-color", checkedColor);
        css.set("border", `1px solid ${checkedColor}`);
      }
    }
    return css;
  });
  const textStyle = common_vendor.computed(() => {
    var _a2, _b;
    const css = /* @__PURE__ */ new Map();
    const labelSize = (_a2 = props.labelSize) !== null && _a2 !== void 0 ? _a2 : checkboxGroup === null || checkboxGroup === void 0 ? null : checkboxGroup.labelSize.value;
    const labelColor = (_b = props.labelColor) !== null && _b !== void 0 ? _b : checkboxGroup === null || checkboxGroup === void 0 ? null : checkboxGroup.labelColor.value;
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(labelSize))
      css.set("font-size", uni_modules_riceUi_libs_utils_basic.addUnit(labelSize));
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(labelColor) && !isDisabled.value)
      css.set("color", labelColor);
    return css;
  });
  const checkboxClass = common_vendor.computed(() => {
    var _a2;
    const isSpace = (_a2 = props.spaceBetween) !== null && _a2 !== void 0 ? _a2 : checkboxGroup === null || checkboxGroup === void 0 ? null : checkboxGroup.spaceBetween.value;
    return [
      ns.b(""),
      ns.theme(),
      ns.is("row", (checkboxGroup === null || checkboxGroup === void 0 ? null : checkboxGroup.direction.value) == "row"),
      ns.is("space-between", isSpace == true)
    ];
  });
  const labelClass = common_vendor.computed(() => {
    return [
      ns.e("label"),
      ns.e(`label--${_iconPosition.value}`)
    ];
  });
  const iconClass = common_vendor.computed(() => {
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
  const textClass = common_vendor.computed(() => {
    return [
      ns.e("label__text"),
      ns.is("__label__text--disabled", isDisabled.value)
    ];
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: common_vendor.unref(_iconPosition) == "right"
    }, common_vendor.unref(_iconPosition) == "right" ? {
      b: common_vendor.t(_ctx.label),
      c: common_vendor.n(common_vendor.unref(textClass)),
      d: common_vendor.s(common_vendor.unref(textStyle)),
      e: common_vendor.r("d", {
        checked: common_vendor.unref(isChecked),
        disabled: common_vendor.unref(isDisabled)
      }),
      f: common_vendor.n(common_vendor.unref(labelClass))
    } : {}, {
      g: common_vendor.unref(showIcon)
    }, common_vendor.unref(showIcon) ? {
      h: common_vendor.p({
        name: _ctx.indeterminate ? "minus" : "checked",
        color: "#fff",
        size: common_vendor.unref(_iconSize),
        ["custom-style"]: {
          transform: "scale(0.6)"
        },
        class: "data-v-9546c883"
      })
    } : {}, {
      i: common_vendor.sei("r0-9546c883", "view", "iconBoxRef"),
      j: common_vendor.n(common_vendor.unref(iconClass)),
      k: common_vendor.s(common_vendor.unref(iconBoxStyle)),
      l: common_vendor.r("icon", {
        checked: common_vendor.unref(isChecked),
        disabled: common_vendor.unref(isDisabled)
      }),
      m: common_vendor.unref(_iconPosition) == "left"
    }, common_vendor.unref(_iconPosition) == "left" ? {
      n: common_vendor.t(_ctx.label),
      o: common_vendor.n(common_vendor.unref(textClass)),
      p: common_vendor.s(common_vendor.unref(textStyle)),
      q: common_vendor.r("d", {
        checked: common_vendor.unref(isChecked),
        disabled: common_vendor.unref(isDisabled)
      }),
      r: common_vendor.n(common_vendor.unref(labelClass))
    } : {}, {
      s: common_vendor.sei(common_vendor.gei(_ctx, "", "r1-9546c883"), "view", checkboxRef, {
        "k": "checkboxRef"
      }),
      t: common_vendor.n(common_vendor.unref(checkboxClass)),
      v: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      w: common_vendor.s(_ctx.customStyle),
      x: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      y: common_vendor.o(handleClick, "cf")
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9546c883"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-checkbox/rice-checkbox.js.map
