"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon_1();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
if (!Math) {
  _easycom_up_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-search"
}, { __name: "up-search", props: {
  shape: {
    type: String,
    default: "round"
  },
  bgColor: {
    type: String,
    default: "#f2f2f2"
  },
  placeholder: {
    type: String,
    default: "请输入关键字"
  },
  clearabled: {
    type: Boolean,
    default: true
  },
  focus: {
    type: Boolean,
    default: false
  },
  showAction: {
    type: Boolean,
    default: true
  },
  actionStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  },
  actionText: {
    type: String,
    default: "搜索"
  },
  inputAlign: {
    type: String,
    default: "left"
  },
  inputStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  },
  disabled: {
    type: Boolean,
    default: false
  },
  borderColor: {
    type: String,
    default: "transparent"
  },
  searchIconColor: {
    type: String,
    default: "#909399"
  },
  searchIconSize: {
    type: [Number, String],
    default: 22
  },
  color: {
    type: String,
    default: "#606266"
  },
  placeholderColor: {
    type: String,
    default: "#909399"
  },
  searchIcon: {
    type: String,
    default: "search"
  },
  iconPosition: {
    type: String,
    default: "left"
  },
  margin: {
    type: String,
    default: "0"
  },
  animation: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: [String, Number],
    default: ""
  },
  maxlength: {
    type: [String, Number],
    default: -1
  },
  height: {
    type: [String, Number],
    default: 34
  },
  label: {
    type: String,
    default: ""
  },
  adjustPosition: {
    type: Boolean,
    default: true
  },
  autoBlur: {
    type: Boolean,
    default: false
  },
  onlyClearableOnFocused: {
    type: Boolean,
    default: true
  },
  customStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  }
}, emits: ["clear", "search", "custom", "focus", "blur", "click", "clickIcon", "update:modelValue", "change"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const keyword = common_vendor.ref(props.modelValue.toString());
  const show = common_vendor.ref(false);
  const focused = common_vendor.ref(false);
  common_vendor.watch(() => {
    return props.modelValue;
  }, (nVal = null) => {
    keyword.value = nVal != null ? nVal.toString() : "";
  });
  const searchStyle = common_vendor.computed(() => {
    const base = new common_vendor.UTSJSONObject({
      margin: props.margin
    });
    const custom2 = uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle);
    return uni_modules_uviewUltra_libs_function_index.deepMerge(base, custom2);
  });
  const contentStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      backgroundColor: props.bgColor,
      borderRadius: props.shape == "round" ? "100px" : "4px",
      borderColor: props.borderColor
    });
  });
  const inputMergedStyle = common_vendor.computed(() => {
    var _a2;
    const base = new common_vendor.UTSJSONObject({
      pointerEvents: props.disabled ? "none" : "auto",
      textAlign: props.inputAlign,
      color: props.color,
      backgroundColor: props.bgColor,
      height: uni_modules_uviewUltra_libs_function_index.addUnit(props.height)
    });
    const custom2 = (_a2 = props.inputStyle) !== null && _a2 !== void 0 ? _a2 : new common_vendor.UTSJSONObject({});
    return uni_modules_uviewUltra_libs_function_index.deepMerge(base, custom2);
  });
  const actionCustomStyle = common_vendor.computed(() => {
    var _a2;
    return (_a2 = props.actionStyle) !== null && _a2 !== void 0 ? _a2 : new common_vendor.UTSJSONObject({});
  });
  const showActionBtn = common_vendor.computed(() => {
    return !props.animation && props.showAction;
  });
  const isShowClear = common_vendor.computed(() => {
    if (!props.clearabled) {
      return false;
    }
    if (props.onlyClearableOnFocused) {
      return !!focused.value && keyword.value != "";
    } else {
      return keyword.value != "";
    }
  });
  common_vendor.onMounted(() => {
    focused.value = props.focus;
  });
  function inputChange(e) {
    keyword.value = e.detail.value;
    emit("update:modelValue", keyword.value);
    emit("change", keyword.value);
  }
  function clear() {
    keyword.value = "";
    emit("update:modelValue", "");
    emit("change", "");
    common_vendor.nextTick$1(() => {
      emit("clear");
    });
  }
  function search(e) {
    emit("search", e.detail.value);
    try {
      common_vendor.index.hideKeyboard();
    } catch (err) {
    }
  }
  function custom() {
    emit("custom", keyword.value);
    try {
      common_vendor.index.hideKeyboard();
    } catch (err) {
    }
  }
  function getFocus() {
    focused.value = true;
    if (props.animation && props.showAction)
      show.value = true;
    emit("focus", keyword.value);
  }
  function blurFunc() {
    setTimeout(() => {
      focused.value = false;
    }, 100);
    show.value = false;
    emit("blur", keyword.value);
  }
  function clickHandler() {
    if (props.disabled)
      emit("click");
  }
  function clickIcon(e) {
    emit("clickIcon", keyword.value);
    try {
      common_vendor.index.hideKeyboard();
    } catch (err) {
    }
  }
  __expose({
    clear
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: _ctx.$slots["label"] != null || __props.label != ""
    }, _ctx.$slots["label"] != null || __props.label != "" ? {
      b: common_vendor.t(__props.label)
    } : {}, {
      c: common_vendor.o(clickIcon, "b5"),
      d: common_vendor.p({
        size: __props.searchIconSize,
        name: __props.searchIcon,
        color: __props.searchIconColor != "" ? __props.searchIconColor : __props.color,
        class: "data-v-86b11a81"
      }),
      e: common_vendor.o(blurFunc, "56"),
      f: keyword.value,
      g: common_vendor.o(search, "8d"),
      h: common_vendor.o(inputChange, "b0"),
      i: __props.disabled,
      j: common_vendor.o(getFocus, "cf"),
      k: __props.focus,
      l: __props.maxlength,
      m: __props.adjustPosition,
      n: __props.autoBlur,
      o: __props.placeholder,
      p: `color: ${__props.placeholderColor}`,
      q: common_vendor.s(inputMergedStyle.value),
      r: isShowClear.value
    }, isShowClear.value ? {
      s: common_vendor.p({
        name: "close",
        size: "11",
        color: "#ffffff",
        customStyle: "line-height: 12px",
        class: "data-v-86b11a81"
      }),
      t: common_vendor.o(clear, "a5")
    } : {}, {
      v: common_vendor.s(contentStyle.value),
      w: common_vendor.t(__props.actionText),
      x: common_vendor.s(actionCustomStyle.value),
      y: common_vendor.n(showActionBtn.value || show.value ? "up-search__action--active" : ""),
      z: common_vendor.o(custom, "29"),
      A: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      B: common_vendor.n(__props.iconPosition == "right" ? "up-search__reverse" : ""),
      C: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      D: common_vendor.o(clickHandler, "de"),
      E: common_vendor.s(searchStyle.value),
      F: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-86b11a81"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-search/up-search.js.map
