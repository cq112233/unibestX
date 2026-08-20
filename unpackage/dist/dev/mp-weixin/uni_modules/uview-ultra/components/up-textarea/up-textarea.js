"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-textarea"
}, { __name: "up-textarea", props: {
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
      return new common_vendor.UTSJSONObject({});
    }
  }
}, emits: ["update:modelValue", "linechange", "focus", "blur", "change", "confirm", "keyboardheightchange"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const instance = common_vendor.getCurrentInstance();
  const innerValue = common_vendor.ref("");
  const changeFromInner = common_vendor.ref(false);
  common_vendor.watch(() => {
    return props.modelValue;
  }, (newVal) => {
    innerValue.value = newVal;
    changeFromInner.value = false;
  }, { immediate: true });
  const placeholderStyleStr = common_vendor.computed(() => {
    if (typeof props.placeholderStyle == "string") {
      return props.placeholderStyle;
    }
    return "";
  });
  const textareaClass = common_vendor.computed(() => {
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
  const fieldStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      height: uni_modules_uviewUltra_libs_function_index.addUnit(props.height)
    });
  });
  const textareaStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    return uni_modules_uviewUltra_libs_function_index.deepMerge(style, uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle));
  });
  function onFocus(e) {
    emit("focus", e);
  }
  function onBlur(e) {
    emit("blur", e);
    if ((instance === null || instance === void 0 ? null : instance.proxy) != null) {
      uni_modules_uviewUltra_libs_function_index.formValidate(instance.proxy, "blur");
    }
  }
  function onLinechange(e) {
    emit("linechange", e);
  }
  function valueChange() {
    const value = innerValue.value;
    common_vendor.nextTick$1(() => {
      emit("update:modelValue", value);
      changeFromInner.value = true;
      emit("change", value);
      if ((instance === null || instance === void 0 ? null : instance.proxy) != null) {
        uni_modules_uviewUltra_libs_function_index.formValidate(instance.proxy, "change");
      }
    });
  }
  function onInput(e) {
    let value = e.detail.value;
    innerValue.value = value;
    common_vendor.nextTick$1(() => {
      valueChange();
    });
  }
  function onConfirm(e) {
    emit("confirm", e);
  }
  function onKeyboardheightchange(e) {
    emit("keyboardheightchange", e);
  }
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: innerValue.value,
      b: common_vendor.s(fieldStyle.value),
      c: __props.placeholder,
      d: placeholderStyleStr.value,
      e: __props.placeholderClass,
      f: __props.disabled,
      g: __props.focus,
      h: __props.autoHeight,
      i: __props.fixed,
      j: __props.cursorSpacing,
      k: __props.cursor,
      l: __props.showConfirmBar,
      m: __props.selectionStart,
      n: __props.selectionEnd,
      o: __props.adjustPosition,
      p: __props.disableDefaultPadding,
      q: __props.holdKeyboard,
      r: __props.maxlength,
      s: __props.confirmType,
      t: __props.ignoreCompositionEvent,
      v: common_vendor.o(onFocus, "25"),
      w: common_vendor.o(onBlur, "9d"),
      x: common_vendor.o(onLinechange, "37"),
      y: common_vendor.o(onInput, "90"),
      z: common_vendor.o(onConfirm, "e5"),
      A: common_vendor.o(onKeyboardheightchange, "3b"),
      B: __props.count
    }, __props.count ? {
      C: common_vendor.t(innerValue.value.length),
      D: common_vendor.t(__props.maxlength),
      E: __props.disabled ? "transparent" : "#fff"
    } : {}, {
      F: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      G: common_vendor.n(textareaClass.value),
      H: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      I: common_vendor.s(textareaStyle.value),
      J: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d6d71d4f"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-textarea/up-textarea.js.map
