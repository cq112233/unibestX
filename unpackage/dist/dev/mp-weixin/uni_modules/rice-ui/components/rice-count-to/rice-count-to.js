"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/use/useCountDown/index.js");
require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
require("./type.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-count-to",
  styleIsolation: "app-and-page"
}, { __name: "rice-count-to", props: {
  startVal: { default: 0 },
  endVal: { default: 0 },
  duration: { default: 1e3 },
  autoplay: { type: Boolean, default: true },
  restart: { type: Boolean, default: false },
  decimals: {},
  color: {},
  fontSize: {},
  bold: { type: Boolean },
  separator: {},
  textClass: {},
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}, emits: ["end"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("count-to");
  const emit = __emit;
  const props = __props;
  const formatNum = (value = null) => {
    var _a2;
    value = value == null ? 0 : uni_modules_riceUi_libs_utils_basic.toNum(value);
    const num = value.toFixed((_a2 = props.decimals) !== null && _a2 !== void 0 ? _a2 : 0);
    const x = num.split(".");
    let x1 = x[0];
    let x2 = x.length > 1 ? `.${x[1]}` : "";
    const reg = /(\d+)(\d{3})/;
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.separator)) {
      while (reg.test(x1)) {
        x1 = x1.replace(reg, "$1" + props.separator + "$2");
      }
    }
    return x1 + x2;
  };
  const displayValue = common_vendor.ref(formatNum(props.startVal));
  let paused = false;
  let startTime = 0;
  let localStartVal = 0;
  let lastTime = 0;
  let remainTime = 0;
  let currentVal = 0;
  let duration = props.duration;
  let timer = 0;
  let lastEndVal = uni_modules_riceUi_libs_utils_basic.toNum(props.endVal);
  const startVal = common_vendor.computed(() => {
    return uni_modules_riceUi_libs_utils_basic.toNum(props.startVal);
  });
  const isCountDown = common_vendor.computed(() => {
    return startVal.value > uni_modules_riceUi_libs_utils_basic.toNum(props.endVal);
  });
  const clearTimer = () => {
    if (timer != null)
      clearTimeout(timer);
  };
  const startAnimation = (callback) => {
    const currentTime = (/* @__PURE__ */ new Date()).getTime();
    const time = Math.max(0, 16 - (currentTime - lastTime));
    clearTimer();
    timer = setTimeout(() => {
      callback(currentTime + time);
    }, time);
    lastTime = currentTime + time;
  };
  let startCount = null;
  startCount = (timestamp) => {
    const endVal = uni_modules_riceUi_libs_utils_basic.toNum(props.endVal);
    if (startTime == 0)
      startTime = timestamp;
    const progress = timestamp - startTime;
    remainTime = duration - progress;
    currentVal = localStartVal + (endVal - localStartVal) * (progress / duration);
    currentVal = isCountDown.value ? localStartVal - (localStartVal - endVal) * (progress / duration) : localStartVal + (endVal - localStartVal) * (progress / duration);
    if (localStartVal < endVal) {
      currentVal = Math.min(currentVal, endVal);
    } else {
      currentVal = Math.max(currentVal, endVal);
    }
    displayValue.value = formatNum(currentVal);
    if (progress < duration) {
      startAnimation(startCount);
    } else {
      emit("end");
      lastEndVal = endVal;
    }
  };
  function handleStart(value) {
    localStartVal = value;
    duration = props.duration;
    startTime = 0;
    paused = false;
    startAnimation(startCount);
  }
  function start() {
    handleStart(startVal.value);
  }
  function pause() {
    clearTimer();
    paused = true;
  }
  function resume() {
    if (!paused || remainTime == 0)
      return null;
    startTime = 0;
    duration = remainTime;
    localStartVal = currentVal;
    startAnimation(startCount);
    paused = false;
  }
  function reset() {
    clearTimer();
    startTime = 0;
    displayValue.value = formatNum(props.startVal);
    lastEndVal = uni_modules_riceUi_libs_utils_basic.toNum(props.endVal);
  }
  function handleRestart() {
    if (props.autoplay) {
      start();
    }
  }
  common_vendor.watch(() => {
    return props.startVal;
  }, () => {
    handleRestart();
  });
  common_vendor.watch(() => {
    return props.endVal;
  }, (newVal) => {
    if (props.restart) {
      handleRestart();
    } else {
      const newNum = uni_modules_riceUi_libs_utils_basic.toNum(newVal);
      if (newNum != lastEndVal) {
        if (props.autoplay) {
          handleStart(currentVal);
        }
        lastEndVal = newNum;
      }
    }
  });
  const countToStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.color != null)
      css.set("color", props.color);
    if (props.fontSize != null)
      css.set("font-size", uni_modules_riceUi_libs_utils_basic.addUnit(props.fontSize));
    if (props.bold == true)
      css.set("font-weight", "bold");
    return css;
  });
  common_vendor.onMounted(() => {
    if (props.autoplay) {
      start();
    }
  });
  common_vendor.onUnmounted(() => {
    clearTimer();
  });
  __expose({
    start,
    pause,
    resume,
    reset
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.t(common_vendor.unref(displayValue)),
      b: common_vendor.sei(common_vendor.gei(_ctx, ""), "text"),
      c: common_vendor.n(common_vendor.unref(ns).theme()),
      d: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      e: common_vendor.s(common_vendor.unref(countToStyle)),
      f: common_vendor.s(_ctx.customStyle),
      g: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1f6c19f4"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-count-to/rice-count-to.js.map
