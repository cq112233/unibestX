"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("./popup.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
if (!Array) {
  const _easycom_up_overlay_1 = common_vendor.resolveComponent("up-overlay");
  const _easycom_up_status_bar_1 = common_vendor.resolveComponent("up-status-bar");
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_safe_bottom_1 = common_vendor.resolveComponent("up-safe-bottom");
  const _easycom_up_transition_1 = common_vendor.resolveComponent("up-transition");
  (_easycom_up_overlay_1 + _easycom_up_status_bar_1 + _easycom_up_icon_1 + _easycom_up_safe_bottom_1 + _easycom_up_transition_1)();
}
const _easycom_up_overlay = () => "../up-overlay/up-overlay.js";
const _easycom_up_status_bar = () => "../up-status-bar/up-status-bar.js";
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_safe_bottom = () => "../up-safe-bottom/up-safe-bottom.js";
const _easycom_up_transition = () => "../up-transition/up-transition.js";
if (!Math) {
  (_easycom_up_overlay + _easycom_up_status_bar + _easycom_up_icon + _easycom_up_safe_bottom + _easycom_up_transition)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-popup"
}, { __name: "up-popup", props: {
  show: {
    type: Boolean,
    default: false
  },
  overlay: {
    type: Boolean,
    default: true
  },
  mode: {
    type: String,
    default: "bottom"
  },
  duration: {
    type: [String, Number],
    default: 300
  },
  closeable: {
    type: Boolean,
    default: false
  },
  overlayStyle: {
    type: [Object, String],
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  },
  zIndex: {
    type: [String, Number],
    default: 10075
  },
  safeAreaInsetBottom: {
    type: Boolean,
    default: true
  },
  safeAreaInsetTop: {
    type: Boolean,
    default: false
  },
  closeIconPos: {
    type: String,
    default: "top-right"
  },
  round: {
    type: [Boolean, String, Number],
    default: 0
  },
  zoom: {
    type: Boolean,
    default: true
  },
  bgColor: {
    type: String,
    default: ""
  },
  overlayOpacity: {
    type: [Number, String],
    default: 0.5
  },
  pageInline: {
    type: Boolean,
    default: false
  },
  customClass: {
    type: String,
    default: ""
  },
  customStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  }
}, emits: ["open", "close", "click", "update:show"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const overlayDuration = common_vendor.computed(() => {
    return parseInt(props.duration.toString()) + 50;
  });
  const position = common_vendor.computed(() => {
    if (props.mode === "center") {
      return props.zoom ? "fade-zoom" : "fade";
    }
    if (props.mode === "left") {
      return "slide-left";
    }
    if (props.mode === "right") {
      return "slide-right";
    }
    if (props.mode === "bottom") {
      return "slide-up";
    }
    if (props.mode === "top") {
      return "slide-down";
    }
    return "";
  });
  const transitionStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({
      display: "flex"
    });
    if (!props.pageInline) {
      style["zIndex"] = parseInt(props.zIndex.toString()) + 1;
      style["position"] = "fixed";
    }
    style[props.mode] = 0;
    if (props.mode === "left" || props.mode === "right") {
      return uni_modules_uviewUltra_libs_function_index.deepMerge(style, new common_vendor.UTSJSONObject({
        bottom: 0,
        top: 0
      }));
    } else if (props.mode === "top" || props.mode === "bottom") {
      return uni_modules_uviewUltra_libs_function_index.deepMerge(style, new common_vendor.UTSJSONObject({
        left: 0,
        right: 0
      }));
    } else if (props.mode === "center") {
      return uni_modules_uviewUltra_libs_function_index.deepMerge(style, new common_vendor.UTSJSONObject({
        alignItems: "center",
        "justify-content": "center",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }));
    }
    return style;
  });
  const contentStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (props.mode !== "center") {
      style["flex"] = 1;
    }
    if (props.bgColor != "") {
      style["backgroundColor"] = props.bgColor;
    }
    if (props.round.toString() != "" && props.round != false) {
      const value = uni_modules_uviewUltra_libs_function_index.addUnit(props.round);
      if (props.mode === "top") {
        style["borderBottomLeftRadius"] = value;
        style["borderBottomRightRadius"] = value;
      } else if (props.mode === "bottom") {
        style["borderTopLeftRadius"] = value;
        style["borderTopRightRadius"] = value;
      } else if (props.mode === "center") {
        style["borderRadius"] = value;
      }
    }
    return uni_modules_uviewUltra_libs_function_index.deepMerge(style, uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle));
  });
  function noop() {
  }
  function overlayClick() {
    if (props.closeOnClickOverlay) {
      emit("update:show", false);
      emit("close");
    }
  }
  function close() {
    emit("update:show", false);
    emit("close");
  }
  function afterEnter() {
    emit("open");
  }
  function clickHandler() {
    if (props.mode === "center") {
      overlayClick();
    }
    emit("click");
  }
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.overlay && !__props.pageInline
    }, __props.overlay && !__props.pageInline ? {
      b: common_vendor.o(overlayClick, "95"),
      c: common_vendor.p({
        show: __props.show && !__props.pageInline,
        zIndex: __props.zIndex,
        duration: overlayDuration.value,
        customStyle: __props.overlayStyle,
        opacity: __props.overlayOpacity,
        class: "data-v-86915299"
      })
    } : {}, {
      d: __props.safeAreaInsetTop
    }, __props.safeAreaInsetTop ? {
      e: common_vendor.p({
        class: "data-v-86915299"
      })
    } : {}, {
      f: __props.closeable
    }, __props.closeable ? {
      g: common_vendor.p({
        name: "close",
        color: "#909399",
        size: "18",
        bold: true,
        class: "data-v-86915299"
      }),
      h: common_vendor.o(close, "87"),
      i: common_vendor.n("up-popup__content__close--" + __props.closeIconPos)
    } : {}, {
      j: __props.safeAreaInsetBottom
    }, __props.safeAreaInsetBottom ? {
      k: common_vendor.p({
        class: "data-v-86915299"
      })
    } : {}, {
      l: common_vendor.s(contentStyle.value),
      m: common_vendor.o(noop, "4c"),
      n: common_vendor.o(afterEnter, "39"),
      o: common_vendor.o(clickHandler, "b4"),
      p: common_vendor.p({
        show: __props.pageInline ? true : __props.show,
        customStyle: transitionStyle.value,
        mode: __props.pageInline ? "none" : position.value,
        duration: __props.duration,
        class: "data-v-86915299"
      }),
      q: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      r: common_vendor.n(__props.customClass),
      s: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      t: `${_ctx.u_s_b_h}px`,
      v: `${_ctx.u_s_a_i_b}px`
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-86915299"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-popup/up-popup.js.map
