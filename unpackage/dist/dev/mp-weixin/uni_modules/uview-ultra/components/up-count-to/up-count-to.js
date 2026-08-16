"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/mixin/mixin.js");
require("../../libs/function/test.js");
require("../../libs/function/digit.js");
require("../../libs/config/config.js");
const uni_modules_uviewUltra_components_upCountTo_countTo = require("./countTo.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "up-count-to",
  props: {
    startVal: {
      type: [String, Number],
      default: uni_modules_uviewUltra_components_upCountTo_countTo.defProps.getNumber("countTo.startVal")
    },
    endVal: {
      type: [String, Number],
      default: uni_modules_uviewUltra_components_upCountTo_countTo.defProps.getNumber("countTo.endVal")
    },
    duration: {
      type: [String, Number],
      default: uni_modules_uviewUltra_components_upCountTo_countTo.defProps.getNumber("countTo.duration")
    },
    autoplay: {
      type: Boolean,
      default: uni_modules_uviewUltra_components_upCountTo_countTo.defProps.getBoolean("countTo.autoplay")
    },
    decimals: {
      type: [String, Number],
      default: uni_modules_uviewUltra_components_upCountTo_countTo.defProps.getNumber("countTo.decimals")
    },
    useEasing: {
      type: Boolean,
      default: uni_modules_uviewUltra_components_upCountTo_countTo.defProps.getBoolean("countTo.useEasing")
    },
    decimal: {
      type: String,
      default: uni_modules_uviewUltra_components_upCountTo_countTo.defProps.getString("countTo.decimal")
    },
    color: {
      type: String,
      default: uni_modules_uviewUltra_components_upCountTo_countTo.defProps.getString("countTo.color")
    },
    fontSize: {
      type: [String, Number],
      default: uni_modules_uviewUltra_components_upCountTo_countTo.defProps.getNumber("countTo.fontSize")
    },
    bold: {
      type: Boolean,
      default: uni_modules_uviewUltra_components_upCountTo_countTo.defProps.getBoolean("countTo.bold")
    },
    separator: {
      type: String,
      default: uni_modules_uviewUltra_components_upCountTo_countTo.defProps.getString("countTo.separator")
    }
  },
  emits: ["end"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const props = __props;
    const emit = __emit;
    let localStartVal = common_vendor.ref(0);
    let displayValue = common_vendor.ref("");
    let printVal = common_vendor.ref(null);
    let paused = common_vendor.ref(false);
    let localDuration = common_vendor.ref(0);
    let startTime = common_vendor.ref(null);
    common_vendor.ref(null);
    let remaining = common_vendor.ref(null);
    let rAF = common_vendor.ref(0);
    let lastTime = common_vendor.ref(0);
    const countDown = parseInt(props.startVal.toString()) > parseInt(props.endVal.toString());
    function easingFn(t, b, c, d) {
      return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
    }
    function formatNumber(num = null) {
      num = parseFloat(num.toString());
      let numStr = num.toFixed(parseFloat(props.decimals.toString())).toString();
      const x = numStr.split(".");
      let x1 = x[0];
      const x2 = x.length > 1 ? props.decimals.toString() + x[1] : "";
      const rgx = /(\d+)(\d{3})/;
      if (props.separator != "" && !isNumber(props.separator)) {
        while (rgx.test(x1)) {
          x1 = x1.replace(rgx, "$1" + props.separator + "$2");
        }
      }
      return x1 + x2;
    }
    function animateCount(timestamp) {
      if (startTime.value == null)
        startTime.value = timestamp;
      timestamp = timestamp;
      const progress = timestamp - startTime.value;
      remaining.value = localDuration.value - progress;
      if (props.useEasing) {
        if (countDown) {
          printVal.value = localStartVal.value - easingFn(progress, 0, localStartVal.value - parseInt(props.endVal.toString()), localDuration.value);
        } else {
          printVal.value = localStartVal.value + (parseInt(props.endVal.toString()) - localStartVal.value) * (progress / localDuration.value);
        }
      } else {
        if (countDown) {
          printVal.value = localStartVal.value - (localStartVal.value - parseInt(props.endVal.toString())) * (progress / localDuration.value);
        } else {
          printVal.value = localStartVal.value + (parseInt(props.endVal.toString()) - localStartVal.value) * (progress / localDuration.value);
        }
      }
      if (countDown) {
        printVal.value = printVal.value < parseInt(props.endVal.toString()) ? parseInt(props.endVal.toString()) : printVal.value;
      } else {
        printVal.value = printVal.value > parseInt(props.endVal.toString()) ? parseInt(props.endVal.toString()) : printVal.value;
      }
      displayValue.value = formatNumber(printVal.value);
      if (progress < localDuration.value) {
        const currTime = (/* @__PURE__ */ new Date()).getTime();
        const timeToCall = Math.max(0, 16 - (currTime - lastTime.value));
        rAF.value = setTimeout(() => {
          animateCount(currTime + timeToCall);
        }, timeToCall);
        lastTime.value = currTime + timeToCall;
      } else {
        displayValue.value = formatNumber(parseInt(props.endVal.toString()));
        emit("end");
      }
    }
    function start() {
      localStartVal.value = parseInt(props.startVal.toString());
      startTime.value = null;
      localDuration.value = parseInt(props.duration.toString());
      paused.value = false;
      const currTime = (/* @__PURE__ */ new Date()).getTime();
      lastTime.value = currTime;
      rAF.value = setTimeout(() => {
        animateCount(currTime);
      }, 0);
    }
    function stop() {
      animateCount(rAF.value);
    }
    function resume() {
      if (remaining.value == null)
        return null;
      startTime.value = 0;
      localDuration.value = remaining.value;
      localStartVal.value = printVal.value;
      const currTime = (/* @__PURE__ */ new Date()).getTime();
      rAF.value = setTimeout(() => {
        animateCount(currTime);
      }, 0);
    }
    function isNumber(val) {
      return !isNaN(parseFloat(val));
    }
    localStartVal.value = parseInt(props.startVal.toString());
    displayValue.value = formatNumber(props.startVal.toString());
    localDuration.value = parseInt(props.duration.toString());
    if (props.autoplay) {
      start();
    }
    __expose({
      start,
      stop,
      resume
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.t(common_vendor.unref(displayValue)),
        b: common_vendor.sei(common_vendor.gei(_ctx, ""), "text"),
        c: common_vendor.s({
          fontSize: _ctx.$up.addUnit(__props.fontSize),
          fontWeight: __props.bold ? "bold" : "normal",
          color: __props.color
        }),
        d: common_vendor.s({
          "--status-bar-height": `${_ctx.u_s_b_h}px`,
          "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
        }),
        e: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5f104332"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-count-to/up-count-to.js.map
