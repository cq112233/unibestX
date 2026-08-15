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
  const showActionBtn = common_vendor.computed(() => {
    return !props.animation && props.showAction;
  });
  const isShowClear = common_vendor.computed(() => {
    if (!props.clearabled) {
      return false;
    }
    if (props.onlyClearableOnFocused) {
      return !!focused.value && keyword.value !== "";
    } else {
      return keyword.value !== "";
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
      a: _ctx.$slots["label"] != null || __props.label !== ""
    }, _ctx.$slots["label"] != null || __props.label !== "" ? {
      b: common_vendor.t(__props.label)
    } : {}, {
      c: common_vendor.o(clickIcon, "20"),
      d: common_vendor.p({
        size: __props.searchIconSize,
        name: __props.searchIcon,
        color: __props.searchIconColor != "" ? __props.searchIconColor : __props.color,
        class: "data-v-86b11a81"
      }),
      e: common_vendor.o(blurFunc, "ea"),
      f: keyword.value,
      g: common_vendor.o(search, "b8"),
      h: common_vendor.o(inputChange, "7a"),
      i: __props.disabled,
      j: common_vendor.o(getFocus, "cd"),
      k: __props.focus,
      l: __props.maxlength,
      m: __props.adjustPosition,
      n: __props.autoBlur,
      o: __props.placeholder,
      p: `color: ${__props.placeholderColor}`,
      q: common_vendor.s({
        pointerEvents: __props.disabled ? "none" : "auto",
        textAlign: __props.inputAlign,
        color: __props.color,
        backgroundColor: __props.bgColor,
        height: common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(__props.height)
      }),
      r: common_vendor.s(__props.inputStyle),
      s: isShowClear.value
    }, isShowClear.value ? {
      t: common_vendor.p({
        name: "close",
        size: "11",
        color: "#ffffff",
        customStyle: "line-height: 12px",
        class: "data-v-86b11a81"
      }),
      v: common_vendor.o(clear, "fc")
    } : {}, {
      w: __props.bgColor,
      x: __props.shape == "round" ? "100px" : "4px",
      y: __props.borderColor,
      z: common_vendor.t(__props.actionText),
      A: common_vendor.s(__props.actionStyle),
      B: common_vendor.n(showActionBtn.value || show.value ? "up-search__action--active" : ""),
      C: common_vendor.o(custom, "f2"),
      D: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      E: common_vendor.n(__props.iconPosition === "right" ? "up-search__reverse" : ""),
      F: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      G: common_vendor.o(clickHandler, "c7"),
      H: common_vendor.s({
        margin: __props.margin
      }),
      I: common_vendor.s(common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addStyle)(__props.customStyle)),
      J: common_vendor.s({
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
