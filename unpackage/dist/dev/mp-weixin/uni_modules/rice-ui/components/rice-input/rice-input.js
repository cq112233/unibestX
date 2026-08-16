"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/use/useCountDown/index.js");
const uni_modules_riceUi_libs_store_useConfig = require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
const uni_modules_riceUi_components_riceForm_index = require("../rice-form/index.js");
const uni_modules_riceUi_components_riceFormItem_index = require("../rice-form-item/index.js");
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
  name: "rice-input",
  styleIsolation: "app-and-page"
}, { __name: "rice-input", props: /* @__PURE__ */ common_vendor.mergeModels(new common_vendor.UTSJSONObject({
  type: { default: "text" },
  disabled: { type: Boolean },
  readonly: { type: Boolean },
  placeholder: {},
  placeholderStyle: {},
  maxlength: { default: -1 },
  cursorSpacing: { default: 0 },
  cursorColor: {},
  autoFocus: { type: Boolean, default: false },
  focus: { type: Boolean, default: false },
  confirmType: { default: "done" },
  confirmHold: { type: Boolean, default: false },
  cursor: { default: 0 },
  selectionStart: { default: -1 },
  selectionEnd: { default: -1 },
  adjustPosition: { type: Boolean, default: true },
  inputmode: {},
  holdKeyboard: { type: Boolean, default: false },
  color: {},
  fontSize: {},
  border: { default: "surround" },
  focusBorder: { type: Boolean, default: false },
  bgColor: {},
  shape: { default: "square" },
  height: {},
  clearable: { type: Boolean, default: false },
  clearTrigger: { default: "focus" },
  clearIcon: { default: "clear" },
  showPassword: { type: Boolean, default: true },
  showPasswordTrigger: { default: "focus" },
  prefixIcon: {},
  suffixIcon: {},
  iconSize: { default: "16px" },
  iconColor: {},
  inputAlign: {},
  iputStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } },
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}), new common_vendor.UTSJSONObject({
  "modelValue": {
    type: String,
    default: ""
  },
  "modelModifiers": {}
})), emits: /* @__PURE__ */ common_vendor.mergeModels(["input", "focus", "blur", "keyboardheightchange", "change", "confirm", "nicknamereview", "clickLeftIcon", "clickRightIcon"], ["update:modelValue"]), setup(__props, _a) {
  var __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("input");
  common_vendor.useSlots();
  const emit = __emit;
  const props = __props;
  const modelValue = common_vendor.useModel(__props, "modelValue");
  const inputType = common_vendor.computed(() => {
    const type = props.type;
    if (type == "password")
      return "text";
    return type;
  });
  const formDisabled = common_vendor.inject(uni_modules_riceUi_components_riceForm_index.formDisabledInjectKey, null);
  const formReadonly = common_vendor.inject(uni_modules_riceUi_components_riceForm_index.formReadonlyInjectKey, null);
  const formItemBlur = common_vendor.inject(uni_modules_riceUi_components_riceFormItem_index.formItemBlurInjectKey, null);
  const isFocus = common_vendor.ref(false);
  const showPasswordValue = common_vendor.ref(false);
  const isPassword = common_vendor.computed(() => {
    return props.type == "password" && !showPasswordValue.value;
  });
  const isDisabled = common_vendor.computed(() => {
    var _a2, _b;
    return ((_a2 = formDisabled === null || formDisabled === void 0 ? null : formDisabled.value) !== null && _a2 !== void 0 ? _a2 : false) || ((_b = props.disabled) !== null && _b !== void 0 ? _b : false);
  });
  const isReadonly = common_vendor.computed(() => {
    var _a2, _b;
    return ((_a2 = formReadonly === null || formReadonly === void 0 ? null : formReadonly.value) !== null && _a2 !== void 0 ? _a2 : false) || ((_b = props.readonly) !== null && _b !== void 0 ? _b : false);
  });
  const isShowClearable = common_vendor.computed(() => {
    if (isDisabled.value)
      return false;
    const shouldTrigger = props.clearTrigger == "focus" ? isFocus.value : true;
    return props.clearable && modelValue.value != "" && shouldTrigger;
  });
  const isShowPassword = common_vendor.computed(() => {
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
  const iconStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      paddingLeft: "6px",
      opacity: isDisabled.value ? 0.4 : 1
    });
  });
  const rootStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.bgColor)) {
      css.set("background-color", props.bgColor);
    }
    if (props.height != null)
      css.set("height", uni_modules_riceUi_libs_utils_basic.addUnit(props.height));
    return css;
  });
  const customInputStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.color))
      css.set("color", props.color);
    if (props.fontSize != null)
      css.set("font-size", uni_modules_riceUi_libs_utils_basic.addUnit(props.fontSize));
    return css;
  });
  const inputClass = common_vendor.computed(() => {
    return [
      ns.b(""),
      ns.theme(),
      ns.is("disabled", isDisabled.value),
      ns.m(props.border),
      ns.m(props.shape),
      ns.is("border--focus", isFocus.value && props.border != "none" && props.focusBorder)
    ];
  });
  const inputInnerClass = common_vendor.computed(() => {
    var _a2;
    return [
      ns.e("input"),
      ns.is("__input--disabled", isDisabled.value),
      ns.e(`input--${(_a2 = props.inputAlign) !== null && _a2 !== void 0 ? _a2 : "left"}`)
    ];
  });
  const _placeholderStyle = common_vendor.computed(() => {
    var _a2, _b;
    let baseColor = uni_modules_riceUi_libs_store_useConfig.isDark.value ? "#4d4d4d" : "#c8c9cc";
    let css = `color:${baseColor};font-size:${uni_modules_riceUi_libs_utils_basic.addUnit((_a2 = props.fontSize) !== null && _a2 !== void 0 ? _a2 : "15px")};`;
    return css + ((_b = props.placeholderStyle) !== null && _b !== void 0 ? _b : "");
  });
  common_vendor.onUnmounted(() => {
    if (timer != null)
      clearTimeout(timer);
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: _ctx.$slots["prefix"] != null || _ctx.prefixIcon != null
    }, _ctx.$slots["prefix"] != null || _ctx.prefixIcon != null ? {
      b: common_vendor.o(clickLeftIcon, "66"),
      c: common_vendor.p({
        name: _ctx.prefixIcon,
        size: _ctx.iconSize,
        color: _ctx.iconColor,
        class: "data-v-d0cbc2d2"
      })
    } : {}, {
      d: common_vendor.unref(inputType),
      e: _ctx.inputmode,
      f: _ctx.placeholder,
      g: common_vendor.unref(isPassword),
      h: common_vendor.unref(isDisabled) || common_vendor.unref(isReadonly),
      i: _ctx.maxlength,
      j: common_vendor.unref(_placeholderStyle),
      k: _ctx.cursorSpacing,
      l: _ctx.cursorColor,
      m: _ctx.autoFocus,
      n: _ctx.focus,
      o: _ctx.confirmType,
      p: _ctx.confirmHold,
      q: _ctx.cursor,
      r: _ctx.selectionStart,
      s: _ctx.selectionEnd,
      t: _ctx.adjustPosition,
      v: _ctx.holdKeyboard,
      w: common_vendor.n(common_vendor.unref(inputInnerClass)),
      x: common_vendor.s(common_vendor.unref(customInputStyle)),
      y: common_vendor.s(_ctx.iputStyle),
      z: common_vendor.o([($event) => {
        return modelValue.value = $event.detail.value;
      }, onInput], "26"),
      A: common_vendor.o(onFocus, "75"),
      B: common_vendor.o(onBlur, "81"),
      C: common_vendor.o(onKeyboardheightchange, "57"),
      D: common_vendor.o(onChange, "3d"),
      E: common_vendor.o(onConfirm, "25"),
      F: common_vendor.o(onNicknamereview, "38"),
      G: modelValue.value,
      H: common_vendor.unref(isShowPassword)
    }, common_vendor.unref(isShowPassword) ? {
      I: common_vendor.o(changeShowPassword, "e0"),
      J: common_vendor.p({
        name: common_vendor.unref(showPasswordValue) ? "eyes" : "eyes-close",
        size: "17px",
        ["custom-style"]: common_vendor.unref(iconStyle),
        class: "data-v-d0cbc2d2"
      })
    } : {}, {
      K: common_vendor.unref(isShowClearable)
    }, common_vendor.unref(isShowClearable) ? {
      L: common_vendor.o(onClear, "52"),
      M: common_vendor.p({
        name: _ctx.clearIcon,
        size: "17px",
        ["custom-style"]: common_vendor.unref(iconStyle),
        class: "data-v-d0cbc2d2"
      })
    } : {}, {
      N: _ctx.$slots["suffix"] != null || _ctx.suffixIcon != null
    }, _ctx.$slots["suffix"] != null || _ctx.suffixIcon != null ? {
      O: common_vendor.o(clickRightIcon, "c7"),
      P: common_vendor.p({
        name: _ctx.suffixIcon,
        size: _ctx.iconSize,
        color: _ctx.iconColor,
        class: "data-v-d0cbc2d2"
      })
    } : {}, {
      Q: common_vendor.unref(isDisabled) || common_vendor.unref(isReadonly)
    }, common_vendor.unref(isDisabled) || common_vendor.unref(isReadonly) ? {} : {}, {
      R: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      S: common_vendor.n(common_vendor.unref(inputClass)),
      T: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      U: common_vendor.s(common_vendor.unref(rootStyle)),
      V: common_vendor.s(_ctx.customStyle),
      W: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d0cbc2d2"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-input/rice-input.js.map
