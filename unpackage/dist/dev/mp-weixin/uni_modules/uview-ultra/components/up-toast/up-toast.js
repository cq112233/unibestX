"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
require("../../libs/config/color.js");
require("../../libs/function/colorGradient.js");
if (!Array) {
  const _easycom_up_loading_icon_1 = common_vendor.resolveComponent("up-loading-icon");
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_gap_1 = common_vendor.resolveComponent("up-gap");
  const _easycom_up_overlay_1 = common_vendor.resolveComponent("up-overlay");
  (_easycom_up_loading_icon_1 + _easycom_up_icon_1 + _easycom_up_gap_1 + _easycom_up_overlay_1)();
}
const _easycom_up_loading_icon = () => "../up-loading-icon/up-loading-icon.js";
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_gap = () => "../up-gap/up-gap.js";
const _easycom_up_overlay = () => "../up-overlay/up-overlay.js";
if (!Math) {
  (_easycom_up_loading_icon + _easycom_up_icon + _easycom_up_gap + _easycom_up_overlay)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-toast"
}, { __name: "up-toast", setup(__props, _a) {
  var __expose = _a.expose;
  const isShow = common_vendor.ref(false);
  const timer = common_vendor.ref(null);
  const config = new common_vendor.UTSJSONObject({
    message: "",
    type: "",
    zIndex: 10090,
    duration: 2e3,
    icon: true,
    position: "center",
    complete: null,
    overlay: true,
    loading: false
  });
  const tmpConfig = common_vendor.ref(new common_vendor.UTSJSONObject({
    message: "",
    type: "",
    zIndex: 10090,
    duration: 2e3,
    icon: true,
    position: "center",
    complete: null,
    overlay: true,
    loading: false
  }));
  const iconName = common_vendor.computed(() => {
    var _a2;
    const icon = tmpConfig.value["icon"];
    const type = (_a2 = tmpConfig.value["type"]) !== null && _a2 !== void 0 ? _a2 : "";
    if (icon == "" || icon == "none") {
      return "";
    }
    if (icon == true) {
      if (["error", "warning", "success", "primary"].includes(type)) {
        return uni_modules_uviewUltra_libs_function_index.type2icon(type);
      } else {
        return "";
      }
    } else {
      return icon != null ? icon.toString() : "";
    }
  });
  const overlayStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      backgroundColor: "rgba(0, 0, 0, 0)"
    });
    if (!tmpConfig.value["overlay"]) {
      style["pointerEvents"] = "none";
    }
    return style;
  });
  const iconStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({
      marginRight: "4px"
    });
    return style;
  });
  const contentStyle = common_vendor.computed(() => {
    var _a2, _b;
    const windowHeight = uni_modules_uviewUltra_libs_function_index.getWindowInfo().windowHeight;
    const style = new common_vendor.UTSJSONObject({});
    let value = 0;
    const position = (_b = (_a2 = tmpConfig.value["position"]) === null || _a2 === void 0 ? null : _a2.toString()) !== null && _b !== void 0 ? _b : "";
    if (position === "top") {
      value = -windowHeight * 0.25;
    } else if (position === "bottom") {
      value = windowHeight * 0.25;
    }
    style["transform"] = `translateY(${value}px)`;
    return style;
  });
  function clearTimer() {
    isShow.value = false;
    if (timer.value != null) {
      clearTimeout(timer.value);
      timer.value = null;
    }
  }
  function show(options) {
    tmpConfig.value = uni_modules_uviewUltra_libs_function_index.deepMerge(config, options);
    clearTimer();
    isShow.value = true;
    const duration = tmpConfig.value["duration"];
    if (duration != -1) {
      timer.value = setTimeout(() => {
        clearTimer();
        const complete = tmpConfig.value["complete"];
        if (typeof complete === "function") {
          complete();
        }
      }, duration);
    }
  }
  function hide() {
    clearTimer();
  }
  function primary(message) {
    show(new common_vendor.UTSJSONObject({
      type: "primary",
      message
    }));
  }
  function success(message) {
    show(new common_vendor.UTSJSONObject({
      type: "success",
      message
    }));
  }
  function error(message) {
    show(new common_vendor.UTSJSONObject({
      type: "error",
      message
    }));
  }
  function warning(message) {
    show(new common_vendor.UTSJSONObject({
      type: "warning",
      message
    }));
  }
  common_vendor.onBeforeUnmount(() => {
    clearTimer();
  });
  __expose({
    show,
    hide,
    primary,
    success,
    error,
    warning
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: tmpConfig.value["type"] === "loading"
    }, tmpConfig.value["type"] === "loading" ? {
      b: common_vendor.p({
        mode: "circle",
        color: "rgb(255, 255, 255)",
        inactiveColor: "rgb(120, 120, 120)",
        size: "25",
        class: "data-v-d6b2c878"
      })
    } : tmpConfig.value["type"] !== "defalut" && iconName.value != "" ? {
      d: common_vendor.p({
        name: iconName.value,
        size: "17",
        color: tmpConfig.value["type"],
        customStyle: iconStyle.value,
        class: "data-v-d6b2c878"
      })
    } : {}, {
      c: tmpConfig.value["type"] !== "defalut" && iconName.value != "",
      e: tmpConfig.value["type"] === "loading" || tmpConfig.value["loading"]
    }, tmpConfig.value["type"] === "loading" || tmpConfig.value["loading"] ? {
      f: common_vendor.p({
        height: "12",
        bgColor: "transparent",
        class: "data-v-d6b2c878"
      })
    } : {}, {
      g: common_vendor.t(tmpConfig.value["message"]),
      h: common_vendor.n("up-toast__content__text--" + tmpConfig.value["type"]),
      i: common_vendor.s(contentStyle.value),
      j: common_vendor.n("up-type-" + tmpConfig.value["type"]),
      k: common_vendor.n(tmpConfig.value["type"] === "loading" || tmpConfig.value["loading"] ? "up-toast__content--loading" : ""),
      l: common_vendor.p({
        show: isShow.value,
        zIndex: tmpConfig.value["zIndex"],
        ["custom-style"]: overlayStyle.value,
        class: "data-v-d6b2c878"
      }),
      m: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      n: `${_ctx.u_s_b_h}px`,
      o: `${_ctx.u_s_a_i_b}px`,
      p: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d6b2c878"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-toast/up-toast.js.map
