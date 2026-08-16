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
  name: "rice-search",
  styleIsolation: "app-and-page",
  externalClasses: ["input-class", "wrapper-class"]
}, { __name: "rice-search", props: /* @__PURE__ */ common_vendor.mergeModels(new common_vendor.UTSJSONObject({
  label: {},
  shape: { default: "square" },
  bgColor: {},
  inputColor: {},
  fontSize: {},
  color: {},
  height: {},
  maxlength: { default: -1 },
  holdKeyboard: { type: Boolean, default: false },
  placeholder: { default: "请输入搜索关键字" },
  placeholderStyle: {},
  focus: { type: Boolean, default: false },
  clearable: { type: Boolean, default: true },
  clearIcon: { default: "clear" },
  clearTrigger: { default: "focus" },
  showAction: { type: Boolean, default: false },
  actionText: { default: "搜索" },
  actionSize: {},
  actionColor: {},
  disabled: { type: Boolean, default: false },
  inputAlign: { default: "left" },
  leftIcon: { default: "search" },
  rightIcon: {},
  leftIconSize: { default: "16px" },
  leftIconColor: {},
  rightIconSize: { default: "16px" },
  rightIconColor: {},
  wrapperClass: { default: "" },
  inputClass: { default: "" },
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}), new common_vendor.UTSJSONObject({
  "modelValue": {
    type: String,
    default: ""
  },
  "modelModifiers": {}
})), emits: /* @__PURE__ */ common_vendor.mergeModels(["input", "search", "focus", "blur", "keyboardheightchange", "clickInput", "clickLeftIcon", "clickRightIcon", "clickAction", "clear"], ["update:modelValue"]), setup(__props, _a) {
  var __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("search");
  const emit = __emit;
  const props = __props;
  const modelValue = common_vendor.useModel(__props, "modelValue");
  const isFocus = common_vendor.ref(false);
  const isShowClearable = common_vendor.computed(() => {
    if (props.disabled)
      return false;
    const shouldTrigger = props.clearTrigger == "focus" ? isFocus.value : true;
    return props.clearable && modelValue.value != "" && shouldTrigger;
  });
  const onClear = () => {
    if (props.disabled)
      return null;
    modelValue.value = "";
    emit("clear");
  };
  const handleClick = (e) => {
    emit("clickInput", e);
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
  };
  const onConfirm = (e) => {
    emit("search", e.detail.value);
  };
  const onKeyboardheightchange = (e) => {
    emit("keyboardheightchange", e);
  };
  const clickLeftIcon = () => {
    emit("clickLeftIcon", modelValue.value);
  };
  const clickRightIcon = () => {
    emit("clickRightIcon", modelValue.value);
  };
  const clickAction = () => {
    emit("clickAction", modelValue.value);
  };
  const searchStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.bgColor))
      css.set("background-color", props.bgColor);
    return css;
  });
  const wrapperStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.height != null)
      css.set("height", uni_modules_riceUi_libs_utils_basic.addUnit(props.height));
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.inputColor))
      css.set("background-color", props.inputColor);
    return css;
  });
  const inputStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.fontSize != null)
      css.set("font-size", uni_modules_riceUi_libs_utils_basic.addUnit(props.fontSize));
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.color))
      css.set("color", props.color);
    return css;
  });
  const actionStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.actionSize != null)
      css.set("font-size", uni_modules_riceUi_libs_utils_basic.addUnit(props.actionSize));
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.actionColor))
      css.set("color", props.actionColor);
    return css;
  });
  const customInputClass = common_vendor.computed(() => {
    var _a2;
    return [
      ns.e("wrapper__input"),
      ns.e(`wrapper__input--${props.inputAlign}`),
      (_a2 = props.inputClass) !== null && _a2 !== void 0 ? _a2 : ""
    ];
  });
  const _placeholderStyle = common_vendor.computed(() => {
    var _a2, _b;
    let baseColor = uni_modules_riceUi_libs_store_useConfig.isDark.value ? "#4d4d4d" : "#c8c9cc";
    let css = `color:${baseColor};font-size:${uni_modules_riceUi_libs_utils_basic.addUnit((_a2 = props.fontSize) !== null && _a2 !== void 0 ? _a2 : "15px")};`;
    return css + ((_b = props.placeholderStyle) !== null && _b !== void 0 ? _b : "");
  });
  const clearIconStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      paddingLeft: "6px"
    });
  });
  const searchClass = common_vendor.computed(() => {
    return [
      ns.b(""),
      ns.theme()
    ];
  });
  const customWrapperClass = common_vendor.computed(() => {
    var _a2;
    return [
      ns.e("wrapper"),
      ns.e(`wrapper--${props.shape}`),
      (_a2 = props.wrapperClass) !== null && _a2 !== void 0 ? _a2 : ""
    ];
  });
  common_vendor.onUnmounted(() => {
    if (timer != null)
      clearTimeout(timer);
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: _ctx.$slots["label"] != null || common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.label)
    }, _ctx.$slots["label"] != null || common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.label) ? {
      b: common_vendor.t(_ctx.label)
    } : {}, {
      c: _ctx.$slots["leftIcon"] != null || common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.leftIcon)
    }, _ctx.$slots["leftIcon"] != null || common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.leftIcon) ? {
      d: common_vendor.o(clickLeftIcon, "c3"),
      e: common_vendor.p({
        name: _ctx.leftIcon,
        size: _ctx.leftIconSize,
        color: _ctx.leftIconColor,
        class: "data-v-0bbf74a4"
      })
    } : {}, {
      f: _ctx.maxlength,
      g: _ctx.focus,
      h: _ctx.disabled,
      i: _ctx.holdKeyboard,
      j: _ctx.placeholder,
      k: common_vendor.unref(_placeholderStyle),
      l: common_vendor.n(common_vendor.unref(customInputClass)),
      m: common_vendor.s(common_vendor.unref(inputStyle)),
      n: common_vendor.o([($event) => {
        return modelValue.value = $event.detail.value;
      }, onInput], "26"),
      o: common_vendor.o(onFocus, "64"),
      p: common_vendor.o(onBlur, "00"),
      q: common_vendor.o(onConfirm, "da"),
      r: common_vendor.o(onKeyboardheightchange, "fe"),
      s: common_vendor.o(handleClick, "39"),
      t: modelValue.value,
      v: _ctx.$slots["rightIcon"] != null || common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.rightIcon)
    }, _ctx.$slots["rightIcon"] != null || common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.rightIcon) ? {
      w: common_vendor.o(clickRightIcon, "ec"),
      x: common_vendor.p({
        name: _ctx.rightIcon,
        size: _ctx.rightIconSize,
        color: _ctx.rightIconColor,
        class: "data-v-0bbf74a4"
      })
    } : {}, {
      y: common_vendor.unref(isShowClearable)
    }, common_vendor.unref(isShowClearable) ? {
      z: common_vendor.o(onClear, "ef"),
      A: common_vendor.p({
        name: _ctx.clearIcon,
        size: "17px",
        ["custom-style"]: common_vendor.unref(clearIconStyle),
        class: "data-v-0bbf74a4"
      })
    } : {}, {
      B: common_vendor.n(common_vendor.unref(customWrapperClass)),
      C: common_vendor.s(common_vendor.unref(wrapperStyle)),
      D: _ctx.showAction
    }, _ctx.showAction ? {
      E: common_vendor.t(_ctx.actionText),
      F: common_vendor.s(common_vendor.unref(actionStyle)),
      G: common_vendor.o(clickAction, "4c")
    } : {}, {
      H: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      I: common_vendor.n(common_vendor.unref(searchClass)),
      J: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      K: common_vendor.s(common_vendor.unref(searchStyle)),
      L: common_vendor.s(_ctx.customStyle),
      M: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0bbf74a4"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-search/rice-search.js.map
