import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import { a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-count-to/countTo&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataStyle: _setSharedDataStyle, setSharedData: _setSharedData, toDisplayString: _toDisplayString, unref: _unref, renderSharedDataEffect: _renderSharedDataEffect } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpCountToUpCountTo";
const { ref, computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "1e9399a0",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-count-to/up-count-to.uvue",
  __name: "up-count-to",
  props: {
    startVal: {
      type: [String, Number],
      default: 0
    },
    endVal: {
      type: [String, Number],
      default: 0
    },
    duration: {
      type: [String, Number],
      default: 2e3
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    decimals: {
      type: [String, Number],
      default: 0
    },
    useEasing: {
      type: Boolean,
      default: true
    },
    decimal: {
      type: String,
      default: "."
    },
    color: {
      type: String,
      default: "#606266"
    },
    fontSize: {
      type: [String, Number],
      default: 22
    },
    bold: {
      type: Boolean,
      default: false
    },
    separator: {
      type: String,
      default: ""
    }
  },
  emits: ["end"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpCountToUpCountToSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const countStyle = computed(() => {
      return new UTSJSONObject({
        fontSize: addUnit(props.fontSize),
        fontWeight: props.bold ? "bold" : "normal",
        color: props.color
      });
    });
    let localStartVal = ref(0);
    let displayValue = ref("");
    let printVal = ref(null);
    let paused = ref(false);
    let localDuration = ref(0);
    let startTime = ref(null);
    ref(null);
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
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        _setSharedDataStyle(__sharedData, 0, countStyle.value);
        _setSharedData(__sharedData, 1, _toDisplayString(_unref(displayValue)));
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-count-to.js.map
