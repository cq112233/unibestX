"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_riceUi_libs_use_useCountDown_index = require("../../libs/use/useCountDown/index.js");
require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
const uni_modules_riceUi_components_riceCountDown_utils = require("./utils.js");
require("./type.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-count-down",
  styleIsolation: "app-and-page",
  externalClasses: ["text-class"]
}, { __name: "rice-count-down", props: {
  time: { default: 0 },
  format: { default: "HH:mm:ss" },
  autoStart: { type: Boolean, default: true },
  millisecond: { type: Boolean, default: false },
  fontSize: {},
  color: {},
  textClass: { default: "" },
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}, emits: ["change", "finish"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const emit = __emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("count-down");
  const props = __props;
  const _b = uni_modules_riceUi_libs_use_useCountDown_index.useCountDown(new uni_modules_riceUi_libs_use_useCountDown_index.UseCountDownOptions({
    time: props.time,
    millisecond: props.millisecond,
    onChange: (current2) => {
      return emit("change", current2);
    },
    onFinish: () => {
      return emit("finish");
    }
  })), current = _b.current, start = _b.start, pause = _b.pause, reset = _b.reset;
  const timeValue = common_vendor.computed(() => {
    return uni_modules_riceUi_components_riceCountDown_utils.formatTime(props.format, current.value);
  });
  const resetTime = () => {
    reset(props.time);
    if (props.autoStart) {
      start();
    }
  };
  common_vendor.watch(() => {
    return props.time;
  }, () => {
    resetTime();
  }, {
    immediate: true
  });
  const textStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.fontSize != null)
      css.set("font-size", uni_modules_riceUi_libs_utils_basic.addUnit(props.fontSize));
    if (props.color != null)
      css.set("color", props.color);
    return css;
  });
  __expose({
    //兼容 Android的写法
    start: () => {
      return start();
    },
    pause: () => {
      return pause();
    },
    reset: resetTime
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.t(common_vendor.unref(timeValue)),
      b: common_vendor.n(_ctx.textClass),
      c: common_vendor.s(common_vendor.unref(textStyle)),
      d: common_vendor.r("d", {
        current: common_vendor.unref(current)
      }),
      e: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      f: common_vendor.n(common_vendor.unref(ns).theme()),
      g: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      h: common_vendor.s(_ctx.customStyle),
      i: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-da2c5505"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-count-down/rice-count-down.js.map
