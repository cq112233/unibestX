"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
if (!Array) {
  const _easycom_up_status_bar_1 = common_vendor.resolveComponent("up-status-bar");
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_transition_1 = common_vendor.resolveComponent("up-transition");
  (_easycom_up_status_bar_1 + _easycom_up_icon_1 + _easycom_up_transition_1)();
}
const _easycom_up_status_bar = () => "../up-status-bar/up-status-bar.js";
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_transition = () => "../up-transition/up-transition.js";
if (!Math) {
  (_easycom_up_status_bar + _easycom_up_icon + _easycom_up_transition)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-notify"
}, { __name: "up-notify", props: {
  customStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  }
}, setup(__props, _a) {
  var __expose = _a.expose;
  const props = __props;
  const open = common_vendor.ref(false);
  const timer = common_vendor.ref(null);
  const config = new common_vendor.UTSJSONObject({
    top: 0,
    type: "primary",
    color: "#ffffff",
    bgColor: "",
    message: "",
    duration: 3e3,
    fontSize: 15,
    safeAreaInsetTop: false
  });
  const tmpConfig = common_vendor.ref(new common_vendor.UTSJSONObject({
    top: 0,
    type: "primary",
    color: "#ffffff",
    bgColor: "",
    message: "",
    duration: 3e3,
    fontSize: 15,
    safeAreaInsetTop: false
  }));
  const isIconVisible = common_vendor.computed(() => {
    var _a2, _b;
    const typeStr = (_b = (_a2 = tmpConfig.value["type"]) === null || _a2 === void 0 ? null : _a2.toString()) !== null && _b !== void 0 ? _b : "";
    return typeStr == "success" || typeStr == "warning" || typeStr == "error";
  });
  const iconSize = common_vendor.computed(() => {
    var _a2;
    const fs = (_a2 = tmpConfig.value["fontSize"]) !== null && _a2 !== void 0 ? _a2 : "0";
    return 1.3 * parseFloat(uni_modules_uviewUltra_libs_function_index.getPx(fs).toString());
  });
  const iconCustomStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      marginRight: "4px"
    });
  });
  const containerStyle = common_vendor.computed(() => {
    let top = 0;
    const topValue = tmpConfig.value["top"];
    const isTopZero = topValue != null && parseFloat(topValue.toString()) == 0;
    return new common_vendor.UTSJSONObject({
      top: uni_modules_uviewUltra_libs_function_index.addUnit(isTopZero ? top : topValue),
      position: "fixed",
      left: 0,
      right: 0,
      zIndex: 10076
    });
  });
  const backgroundColor = common_vendor.computed(() => {
    var _a2, _b;
    const style = new common_vendor.UTSJSONObject({});
    const bg = (_b = (_a2 = tmpConfig.value["bgColor"]) === null || _a2 === void 0 ? null : _a2.toString()) !== null && _b !== void 0 ? _b : "";
    if (bg != "") {
      style["backgroundColor"] = bg;
    }
    return style;
  });
  const notifyStyle = common_vendor.computed(() => {
    const custom = uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle);
    const bg = backgroundColor.value;
    return uni_modules_uviewUltra_libs_function_index.deepMerge(bg, custom);
  });
  const notifyTextStyle = common_vendor.computed(() => {
    var _a2, _b;
    return new common_vendor.UTSJSONObject({
      fontSize: uni_modules_uviewUltra_libs_function_index.addUnit((_a2 = tmpConfig.value["fontSize"]) !== null && _a2 !== void 0 ? _a2 : "0"),
      color: (_b = tmpConfig.value["color"]) !== null && _b !== void 0 ? _b : ""
    });
  });
  function clearTimer() {
    open.value = false;
    if (timer.value != null) {
      clearTimeout(timer.value);
      timer.value = null;
    }
  }
  function show(options) {
    var _a2;
    tmpConfig.value = uni_modules_uviewUltra_libs_function_index.deepMerge(config, options);
    clearTimer();
    open.value = true;
    const dur = parseInt(((_a2 = tmpConfig.value["duration"]) !== null && _a2 !== void 0 ? _a2 : 3e3).toString());
    if (dur > 0) {
      timer.value = setTimeout(() => {
        open.value = false;
        clearTimer();
        const complete = tmpConfig.value["complete"];
        if (typeof complete === "function") {
          complete();
        }
      }, dur);
    }
  }
  function close() {
    clearTimer();
  }
  function primary(message) {
    show(new common_vendor.UTSJSONObject({ type: "primary", message }));
  }
  function success(message) {
    show(new common_vendor.UTSJSONObject({ type: "success", message }));
  }
  function error(message) {
    show(new common_vendor.UTSJSONObject({ type: "error", message }));
  }
  function warning(message) {
    show(new common_vendor.UTSJSONObject({ type: "warning", message }));
  }
  common_vendor.onBeforeUnmount(() => {
    clearTimer();
  });
  __expose({
    show,
    close,
    primary,
    success,
    error,
    warning
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: tmpConfig.value["safeAreaInsetTop"]
    }, tmpConfig.value["safeAreaInsetTop"] ? {
      b: common_vendor.p({
        class: "data-v-21e8743e"
      })
    } : {}, {
      c: isIconVisible.value
    }, isIconVisible.value ? {
      d: common_vendor.p({
        name: tmpConfig.value["icon"],
        color: tmpConfig.value["color"],
        size: iconSize.value,
        customStyle: iconCustomStyle.value,
        class: "data-v-21e8743e"
      })
    } : {}, {
      e: common_vendor.t(tmpConfig.value["message"]),
      f: common_vendor.s(notifyTextStyle.value),
      g: common_vendor.n(`up-notify--${tmpConfig.value["type"]}`),
      h: common_vendor.s(notifyStyle.value),
      i: common_vendor.gei(_ctx, ""),
      j: common_vendor.p({
        mode: "slide-down",
        customStyle: containerStyle.value,
        show: open.value,
        id: common_vendor.gei(_ctx, ""),
        class: "data-v-21e8743e"
      }),
      k: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-21e8743e"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-notify/up-notify.js.map
