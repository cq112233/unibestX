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
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-textarea",
  styleIsolation: "app-and-page"
}, { __name: "rice-textarea", props: /* @__PURE__ */ common_vendor.mergeModels(new common_vendor.UTSJSONObject({
  disabled: { type: Boolean },
  readonly: { type: Boolean },
  placeholder: {},
  placeholderStyle: {},
  maxlength: { default: -1 },
  cursorSpacing: { default: 0 },
  cursorColor: {},
  autoFocus: { type: Boolean, default: false },
  focus: { type: Boolean, default: false },
  confirmType: { default: "return" },
  confirmHold: { type: Boolean, default: false },
  autoHeight: { type: Boolean, default: false },
  cursor: { default: 0 },
  selectionStart: { default: -1 },
  selectionEnd: { default: -1 },
  adjustPosition: { type: Boolean, default: true },
  inputmode: {},
  holdKeyboard: { type: Boolean, default: false },
  fixed: { type: Boolean },
  showConfirmBar: { type: Boolean },
  disableDefaultPadding: { type: Boolean },
  height: { default: "90px" },
  minHeight: {},
  maxHeight: {},
  color: {},
  fontSize: {},
  showWordLimit: { type: Boolean, default: false },
  border: { default: "surround" },
  bgColor: {},
  textareaAlign: {},
  textareaStyle: { default: () => {
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
})), emits: /* @__PURE__ */ common_vendor.mergeModels(["input", "focus", "blur", "keyboardheightchange", "change", "linechange"], ["update:modelValue"]), setup(__props, _a) {
  var __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("textarea");
  const emit = __emit;
  const props = __props;
  const modelValue = common_vendor.useModel(__props, "modelValue");
  const isFocus = common_vendor.ref(false);
  common_vendor.ref(false);
  const formDisabled = common_vendor.inject(uni_modules_riceUi_components_riceForm_index.formDisabledInjectKey, null);
  const formReadonly = common_vendor.inject(uni_modules_riceUi_components_riceForm_index.formReadonlyInjectKey, null);
  const formItemBlur = common_vendor.inject(uni_modules_riceUi_components_riceFormItem_index.formItemBlurInjectKey, null);
  const isDisabled = common_vendor.computed(() => {
    var _a2, _b;
    return ((_a2 = formDisabled === null || formDisabled === void 0 ? null : formDisabled.value) !== null && _a2 !== void 0 ? _a2 : false) || ((_b = props.disabled) !== null && _b !== void 0 ? _b : false);
  });
  const isReadonly = common_vendor.computed(() => {
    var _a2, _b;
    return ((_a2 = formReadonly === null || formReadonly === void 0 ? null : formReadonly.value) !== null && _a2 !== void 0 ? _a2 : false) || ((_b = props.readonly) !== null && _b !== void 0 ? _b : false);
  });
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
  const onLinechange = (e) => {
    emit("linechange", e);
  };
  const bgcolorStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.bgColor)) {
      css.set("background-color", props.bgColor);
    }
    return css;
  });
  const customTextareaStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.color)) {
      css.set("color", props.color);
    }
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.fontSize)) {
      css.set("font-size", uni_modules_riceUi_libs_utils_basic.addUnit(props.fontSize));
    }
    css.set("height", uni_modules_riceUi_libs_utils_basic.addUnit(props.height));
    if (props.maxHeight != null) {
      css.set("max-height", uni_modules_riceUi_libs_utils_basic.addUnit(props.maxHeight));
    }
    if (props.minHeight != null) {
      css.set("min-height", uni_modules_riceUi_libs_utils_basic.addUnit(props.minHeight));
    }
    return css;
  });
  const textareaClass = common_vendor.computed(() => {
    return [
      ns.b(""),
      ns.theme(),
      ns.is("disabled", isDisabled.value),
      ns.m(props.border)
    ];
  });
  const textareaInnerClass = common_vendor.computed(() => {
    var _a2;
    return [
      ns.e("textarea"),
      ns.is("__textarea--disabled", isDisabled.value),
      ns.e(`textarea--${(_a2 = props.textareaAlign) !== null && _a2 !== void 0 ? _a2 : "left"}`)
    ];
  });
  const countClass = common_vendor.computed(() => {
    return [
      ns.e("count"),
      ns.is("__count--disabled", isDisabled.value)
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
      a: _ctx.inputmode,
      b: _ctx.placeholder,
      c: common_vendor.unref(isDisabled) || common_vendor.unref(isReadonly),
      d: _ctx.maxlength,
      e: common_vendor.unref(_placeholderStyle),
      f: _ctx.cursorSpacing,
      g: _ctx.cursorColor,
      h: _ctx.autoFocus,
      i: _ctx.focus,
      j: _ctx.confirmType,
      k: _ctx.confirmHold,
      l: _ctx.cursor,
      m: _ctx.selectionStart,
      n: _ctx.selectionEnd,
      o: _ctx.adjustPosition,
      p: _ctx.holdKeyboard,
      q: _ctx.fixed,
      r: _ctx.showConfirmBar,
      s: _ctx.disableDefaultPadding,
      t: _ctx.autoHeight,
      v: common_vendor.n(common_vendor.unref(textareaInnerClass)),
      w: common_vendor.s(common_vendor.unref(customTextareaStyle)),
      x: common_vendor.s(_ctx.textareaStyle),
      y: common_vendor.o([($event) => {
        return modelValue.value = $event.detail.value;
      }, onInput], "26"),
      z: common_vendor.o(onFocus, "9e"),
      A: common_vendor.o(onBlur, "88"),
      B: common_vendor.o(onKeyboardheightchange, "ef"),
      C: common_vendor.o(onChange, "72"),
      D: common_vendor.o(onLinechange, "6a"),
      E: modelValue.value,
      F: _ctx.showWordLimit && _ctx.maxlength >= 0
    }, _ctx.showWordLimit && _ctx.maxlength >= 0 ? {
      G: common_vendor.t(modelValue.value.length),
      H: common_vendor.t(_ctx.maxlength),
      I: common_vendor.n(common_vendor.unref(countClass)),
      J: common_vendor.s(common_vendor.unref(bgcolorStyle))
    } : {}, {
      K: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      L: common_vendor.n(common_vendor.unref(textareaClass)),
      M: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      N: common_vendor.s(common_vendor.unref(bgcolorStyle)),
      O: common_vendor.s(_ctx.customStyle),
      P: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f05776ee"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-textarea/rice-textarea.js.map
