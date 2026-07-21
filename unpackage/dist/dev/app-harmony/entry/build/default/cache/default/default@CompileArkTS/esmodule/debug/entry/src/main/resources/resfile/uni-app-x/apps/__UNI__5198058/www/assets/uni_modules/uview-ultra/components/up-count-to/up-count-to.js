const { defineComponent, ref, openBlock, createElementBlock, normalizeStyle, toDisplayString } = globalThis.Vue
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/test&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/digit&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/config/config&";
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-count-to/countTo&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "up-count-to",
  props: {
    startVal: {
      type: [String, Number],
      default: defProps.getNumber("countTo.startVal")
    },
    endVal: {
      type: [String, Number],
      default: defProps.getNumber("countTo.endVal")
    },
    duration: {
      type: [String, Number],
      default: defProps.getNumber("countTo.duration")
    },
    autoplay: {
      type: Boolean,
      default: defProps.getBoolean("countTo.autoplay")
    },
    decimals: {
      type: [String, Number],
      default: defProps.getNumber("countTo.decimals")
    },
    useEasing: {
      type: Boolean,
      default: defProps.getBoolean("countTo.useEasing")
    },
    decimal: {
      type: String,
      default: defProps.getString("countTo.decimal")
    },
    color: {
      type: String,
      default: defProps.getString("countTo.color")
    },
    fontSize: {
      type: [String, Number],
      default: defProps.getNumber("countTo.fontSize")
    },
    bold: {
      type: Boolean,
      default: defProps.getBoolean("countTo.bold")
    },
    separator: {
      type: String,
      default: defProps.getString("countTo.separator")
    }
  },
  emits: ["end"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const props = __props;
    const emit = __emit;
    let localStartVal = ref(0);
    let displayValue = ref("");
    let printVal = ref(null);
    let paused = ref(false);
    let localDuration = ref(0);
    let startTime = ref(null);
    let timestamp = ref(null);
    let remaining = ref(null);
    let rAF = ref(0);
    let lastTime = ref(0);
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
    function animateCount(timestamp2) {
      if (startTime.value == null)
        startTime.value = timestamp2;
      timestamp2 = timestamp2;
      const progress = timestamp2 - startTime.value;
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
    function cancelAnimationFrame(id) {
      clearTimeout(id);
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
    function reStart() {
      if (paused.value) {
        resume();
        paused.value = false;
      } else {
        stop();
        paused.value = true;
      }
    }
    function reset() {
      startTime.value = null;
      if (rAF.value != null) {
        cancelAnimationFrame(rAF.value);
      }
      displayValue.value = formatNumber(props.startVal.toString());
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
    function destroyed() {
      if (rAF.value != null) {
        clearTimeout(rAF.value);
      }
    }
    __expose({
      start,
      stop,
      resume
    });
    const __returned__ = { props, emit, get localStartVal() {
      return localStartVal;
    }, set localStartVal(v) {
      localStartVal = v;
    }, get displayValue() {
      return displayValue;
    }, set displayValue(v) {
      displayValue = v;
    }, get printVal() {
      return printVal;
    }, set printVal(v) {
      printVal = v;
    }, get paused() {
      return paused;
    }, set paused(v) {
      paused = v;
    }, get localDuration() {
      return localDuration;
    }, set localDuration(v) {
      localDuration = v;
    }, get startTime() {
      return startTime;
    }, set startTime(v) {
      startTime = v;
    }, get timestamp() {
      return timestamp;
    }, set timestamp(v) {
      timestamp = v;
    }, get remaining() {
      return remaining;
    }, set remaining(v) {
      remaining = v;
    }, get rAF() {
      return rAF;
    }, set rAF(v) {
      rAF = v;
    }, get lastTime() {
      return lastTime;
    }, set lastTime(v) {
      lastTime = v;
    }, countDown, easingFn, formatNumber, animateCount, cancelAnimationFrame, start, stop, resume, reStart, reset, isNumber, destroyed };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-count-num": { "": { "display": "flex", "textAlign": "center" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "text",
    {
      class: "up-count-num",
      style: normalizeStyle({
        fontSize: _ctx.$up.addUnit($props.fontSize),
        fontWeight: $props.bold ? "bold" : "normal",
        color: $props.color
      })
    },
    toDisplayString($setup.displayValue),
    5
    /* TEXT, STYLE */
  );
}
const __easycom_44 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-count-to/up-count-to.uvue"]]);
export {
  __easycom_44 as _
};
//# sourceMappingURL=up-count-to.js.map
