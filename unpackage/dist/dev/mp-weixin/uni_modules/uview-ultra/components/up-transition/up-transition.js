"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("./transition.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-transition"
}, { __name: "up-transition", props: {
  show: {
    type: Boolean,
    default: false
  },
  mode: {
    type: String,
    default: "fade"
  },
  duration: {
    type: [Number, String],
    default: "300"
  },
  timingFunction: {
    type: String,
    default: "ease-out"
  },
  customStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  }
}, emits: ["click", "beforeEnter", "enter", "afterEnter", "beforeLeave", "leave", "afterLeave"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const inited = common_vendor.ref(false);
  const viewStyle = common_vendor.ref(new common_vendor.UTSJSONObject({}));
  const status = common_vendor.ref("");
  const transitionEnded = common_vendor.ref(false);
  const display = common_vendor.ref(false);
  const classes = common_vendor.ref("");
  const getClassNames = function(name) {
    return new common_vendor.UTSJSONObject({
      "enter": `up-${name}-enter up-${name}-enter-active`,
      "enter-to": `up-${name}-enter-to up-${name}-enter-active`,
      "leave": `up-${name}-leave up-${name}-leave-active`,
      "leave-to": `up-${name}-leave-to up-${name}-leave-active`
    });
  };
  const getModeStyle = function(mode, state) {
    const style = new common_vendor.UTSJSONObject({});
    if (state == "enter" || state == "leave-to") {
      if (mode == "fade") {
        style["opacity"] = 0;
      } else if (mode == "zoom") {
        style["transform"] = "scale(0.95)";
      } else if (mode == "fade-zoom") {
        style["transform"] = "scale(0.95)";
        style["opacity"] = 0;
      } else if (mode == "fade-up") {
        style["transform"] = "translateY(100%)";
        style["opacity"] = 0;
      } else if (mode == "fade-down") {
        style["transform"] = "translateY(-100%)";
        style["opacity"] = 0;
      } else if (mode == "fade-left") {
        style["transform"] = "translateX(-100%)";
        style["opacity"] = 0;
      } else if (mode == "fade-right") {
        style["transform"] = "translateX(100%)";
        style["opacity"] = 0;
      } else if (mode == "slide-up") {
        style["transform"] = "translateY(100%)";
      } else if (mode == "slide-down") {
        style["transform"] = "translateY(-100%)";
      } else if (mode == "slide-left") {
        style["transform"] = "translateX(-100%)";
      } else if (mode == "slide-right") {
        style["transform"] = "translateX(100%)";
      }
    } else if (state == "enter-to" || state == "leave") {
      if (mode == "fade") {
        style["opacity"] = 1;
      } else if (mode == "zoom") {
        style["transform"] = "scale(1)";
      } else if (mode == "fade-zoom") {
        style["transform"] = "scale(1)";
        style["opacity"] = 1;
      } else if (mode == "fade-up" || mode == "fade-down" || mode == "fade-left" || mode == "fade-right" || mode == "slide-up" || mode == "slide-down" || mode == "slide-left" || mode == "slide-right") {
        style["transform"] = "translate(0, 0)";
        if (mode.startsWith("fade")) {
          style["opacity"] = 1;
        }
      }
    }
    return style;
  };
  const mergeStyle = common_vendor.computed(() => {
    const modeVal = props.mode != "" ? props.mode : "fade";
    const durationVal = props.duration;
    const duration = durationVal != null ? durationVal.toString() : "0";
    let transitionProp = "all";
    if (modeVal == "fade") {
      transitionProp = "opacity";
    } else if (modeVal.startsWith("slide")) {
      transitionProp = "transform";
    } else if (modeVal.startsWith("fade-zoom") || modeVal == "zoom" || modeVal.startsWith("fade-up") || modeVal.startsWith("fade-down") || modeVal.startsWith("fade-left") || modeVal.startsWith("fade-right")) {
      transitionProp = "transform, opacity";
    }
    return new common_vendor.UTSJSONObject(Object.assign(Object.assign({ transitionProperty: transitionProp, transitionDuration: `${duration}ms`, transitionTimingFunction: props.timingFunction }, uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle)), viewStyle.value));
  });
  function clickHandler() {
    emit("click");
  }
  function onTransitionEnd() {
    if (transitionEnded.value)
      return null;
    transitionEnded.value = true;
    emit(status.value == "leave" ? "afterLeave" : "afterEnter");
    if (!props.show && display.value) {
      display.value = false;
      inited.value = false;
    }
  }
  function vueEnter() {
    var _a2, _b, _c, _d;
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      const classNames = getClassNames(props.mode);
      status.value = "enter";
      emit("beforeEnter");
      inited.value = true;
      display.value = true;
      classes.value = (_b = (_a2 = classNames["enter"]) === null || _a2 === void 0 ? null : _a2.toString()) !== null && _b !== void 0 ? _b : "";
      viewStyle.value = getModeStyle(props.mode, "enter");
      yield common_vendor.nextTick$1();
      yield uni_modules_uviewUltra_libs_function_index.sleep(20);
      emit("enter");
      transitionEnded.value = false;
      emit("afterEnter");
      classes.value = (_d = (_c = classNames["enter-to"]) === null || _c === void 0 ? null : _c.toString()) !== null && _d !== void 0 ? _d : "";
      viewStyle.value = getModeStyle(props.mode, "enter-to");
    });
  }
  function vueLeave() {
    var _a2, _b, _c, _d;
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      if (!display.value)
        return Promise.resolve(null);
      const classNames = getClassNames(props.mode);
      status.value = "leave";
      emit("beforeLeave");
      classes.value = (_b = (_a2 = classNames["leave"]) === null || _a2 === void 0 ? null : _a2.toString()) !== null && _b !== void 0 ? _b : "";
      viewStyle.value = getModeStyle(props.mode, "leave");
      yield common_vendor.nextTick$1();
      transitionEnded.value = false;
      emit("leave");
      setTimeout(onTransitionEnd, parseInt(props.duration != null ? props.duration.toString() : "0"));
      classes.value = (_d = (_c = classNames["leave-to"]) === null || _c === void 0 ? null : _c.toString()) !== null && _d !== void 0 ? _d : "";
      viewStyle.value = getModeStyle(props.mode, "leave-to");
    });
  }
  common_vendor.watch(() => {
    return props.show;
  }, (newVal) => {
    if (newVal) {
      vueEnter();
    } else {
      vueLeave();
    }
  }, { immediate: true });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: inited.value
    }, inited.value ? {
      b: common_vendor.sei(common_vendor.gei(_ctx, "", "r0-52d65444"), "view", "up-transition"),
      c: common_vendor.o(clickHandler, "c6"),
      d: common_vendor.n(classes.value),
      e: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      f: common_vendor.s(mergeStyle.value),
      g: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    } : {});
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-52d65444"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-transition/up-transition.js.map
