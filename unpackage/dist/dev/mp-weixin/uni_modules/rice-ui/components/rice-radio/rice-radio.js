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
const uni_modules_riceUi_libs_utils_debug = require("../../libs/utils/debug.js");
const uni_modules_riceUi_components_riceForm_index = require("../rice-form/index.js");
const uni_modules_riceUi_components_riceRadioGroup_index = require("../rice-radio-group/index.js");
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
  name: "rice-radio",
  styleIsolation: "app-and-page"
}, { __name: "rice-radio", props: {
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
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}, emits: ["change"], setup(__props, _a) {
  _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("radio");
  common_vendor.useSlots();
  const props = __props;
  const radioGroup = common_vendor.inject(uni_modules_riceUi_components_riceRadioGroup_index.radioGroupInjectKey, null);
  const formDisabled = common_vendor.inject(uni_modules_riceUi_components_riceForm_index.formDisabledInjectKey, null);
  const formReadonly = common_vendor.inject(uni_modules_riceUi_components_riceForm_index.formReadonlyInjectKey, null);
  const isChecked = common_vendor.computed(() => {
    return radioGroup != null ? uni_modules_riceUi_libs_utils_basic.isSameValue(props.value, radioGroup.modelValue.value) : false;
  });
  const isDisabled = common_vendor.computed(() => {
    var _a2, _b;
    return ((_a2 = formDisabled === null || formDisabled === void 0 ? null : formDisabled.value) !== null && _a2 !== void 0 ? _a2 : false) || props.disabled || ((_b = radioGroup === null || radioGroup === void 0 ? null : radioGroup.disabled.value) !== null && _b !== void 0 ? _b : false);
  });
  const isReadonly = common_vendor.computed(() => {
    var _a2, _b;
    return ((_a2 = formReadonly === null || formReadonly === void 0 ? null : formReadonly.value) !== null && _a2 !== void 0 ? _a2 : false) || props.readonly || ((_b = radioGroup === null || radioGroup === void 0 ? null : radioGroup.readonly.value) !== null && _b !== void 0 ? _b : false);
  });
  const _iconPosition = common_vendor.computed(() => {
    var _a2, _b;
    return (_b = (_a2 = props.iconPosition) !== null && _a2 !== void 0 ? _a2 : radioGroup === null || radioGroup === void 0 ? null : radioGroup.iconPosition.value) !== null && _b !== void 0 ? _b : uni_modules_riceUi_components_riceRadioGroup_index.defIconPosition;
  });
  const _iconSize = common_vendor.computed(() => {
    var _a2, _b;
    return (_b = (_a2 = props.iconSize) !== null && _a2 !== void 0 ? _a2 : radioGroup === null || radioGroup === void 0 ? null : radioGroup.iconSize.value) !== null && _b !== void 0 ? _b : "20px";
  });
  const handleClick = (e) => {
    e.stopPropagation();
    const value = props.value;
    if (isReadonly.value || isDisabled.value || radioGroup == null || value == null)
      return null;
    if (!uni_modules_riceUi_libs_utils_basic.isSameValue(value, radioGroup.modelValue.value)) {
      radioGroup.updateValue(value);
    }
  };
  const checkboxRef = common_vendor.shallowRef(null);
  const iconBoxStyle = common_vendor.computed(() => {
    var _a2, _b;
    const css = /* @__PURE__ */ new Map();
    const size = (_a2 = props.iconSize) !== null && _a2 !== void 0 ? _a2 : radioGroup === null || radioGroup === void 0 ? null : radioGroup.iconSize.value;
    if (size != null) {
      const width = uni_modules_riceUi_libs_utils_basic.addUnit(size);
      css.set("height", width);
      css.set("width", width);
    }
    const checkedColor = (_b = props.checkedColor) !== null && _b !== void 0 ? _b : radioGroup === null || radioGroup === void 0 ? null : radioGroup.checkedColor.value;
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
    const labelSize = (_a2 = props.labelSize) !== null && _a2 !== void 0 ? _a2 : radioGroup === null || radioGroup === void 0 ? null : radioGroup.labelSize.value;
    const labelColor = (_b = props.labelColor) !== null && _b !== void 0 ? _b : radioGroup === null || radioGroup === void 0 ? null : radioGroup.labelColor.value;
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(labelSize))
      css.set("font-size", uni_modules_riceUi_libs_utils_basic.addUnit(labelSize));
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(labelColor) && !isDisabled.value)
      css.set("color", labelColor);
    return css;
  });
  const radioClass = common_vendor.computed(() => {
    var _a2;
    const isSpace = (_a2 = props.spaceBetween) !== null && _a2 !== void 0 ? _a2 : radioGroup === null || radioGroup === void 0 ? null : radioGroup.spaceBetween.value;
    return [
      ns.b(""),
      ns.theme(),
      ns.is("row", (radioGroup === null || radioGroup === void 0 ? null : radioGroup.direction.value) == "row"),
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
  const textClass = common_vendor.computed(() => {
    return [
      ns.e("label__text"),
      ns.is("__label__text--disabled", isDisabled.value)
    ];
  });
  if (radioGroup == null) {
    uni_modules_riceUi_libs_utils_debug.debugWarn("Radio", "<Radio> must be used with <RadioGroup>");
  }
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
      g: common_vendor.unref(isChecked)
    }, common_vendor.unref(isChecked) ? {
      h: common_vendor.p({
        name: "checked",
        color: "#fff",
        size: common_vendor.unref(_iconSize),
        ["custom-style"]: {
          transform: "scale(0.6)"
        },
        class: "data-v-030527c2"
      })
    } : {}, {
      i: common_vendor.sei("r0-030527c2", "view", "iconBoxRef"),
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
      s: common_vendor.sei(common_vendor.gei(_ctx, "", "r1-030527c2"), "view", checkboxRef, {
        "k": "checkboxRef"
      }),
      t: common_vendor.n(common_vendor.unref(radioClass)),
      v: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      w: common_vendor.s(_ctx.customStyle),
      x: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      y: common_vendor.o(handleClick, "2b")
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-030527c2"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-radio/rice-radio.js.map
