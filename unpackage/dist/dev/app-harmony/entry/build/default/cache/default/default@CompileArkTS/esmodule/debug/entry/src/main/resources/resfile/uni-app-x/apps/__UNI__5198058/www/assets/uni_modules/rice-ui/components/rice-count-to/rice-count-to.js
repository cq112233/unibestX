import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useCountDown/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/store/useConfig&";
import { u as useNamespace } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useNamespace/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/usePopup/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useChildren&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useParent&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useSafeArea/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useTouch/index&";
import { t as toNum, a as addUnit, h as hasStrValue } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/utils/basic&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-count-to/type&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceCountToRiceCountTo";
const { ref, computed, watch, onMounted, onUnmounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-count-to",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "2da1ea7a",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-count-to/rice-count-to.uvue",
  __name: "rice-count-to",
  props: {
    startVal: { default: 0, type: [String, Number] },
    endVal: { default: 0, type: [String, Number] },
    duration: { default: 1e3, type: Number },
    autoplay: { type: Boolean, default: true },
    restart: { type: Boolean, default: false },
    decimals: { type: Number },
    color: { type: String },
    fontSize: { type: [String, Number] },
    bold: { type: Boolean },
    separator: { type: String },
    textClass: { type: String },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  },
  emits: ["end"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceCountToRiceCountToSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("count-to");
    const emit = __emit;
    const props = __props;
    const formatNum = (value = null) => {
      var _a2;
      value = value == null ? 0 : toNum(value);
      const num = value.toFixed((_a2 = props.decimals) !== null && _a2 !== void 0 ? _a2 : 0);
      const x = num.split(".");
      let x1 = x[0];
      let x2 = x.length > 1 ? `.${x[1]}` : "";
      const reg = /(\d+)(\d{3})/;
      if (hasStrValue(props.separator)) {
        while (reg.test(x1)) {
          x1 = x1.replace(reg, "$1" + props.separator + "$2");
        }
      }
      return x1 + x2;
    };
    const displayValue = ref(formatNum(props.startVal));
    let paused = false;
    let startTime = 0;
    let localStartVal = 0;
    let lastTime = 0;
    let remainTime = 0;
    let currentVal = 0;
    let duration = props.duration;
    let timer = 0;
    let lastEndVal = toNum(props.endVal);
    const startVal = computed(() => {
      return toNum(props.startVal);
    });
    const isCountDown = computed(() => {
      return startVal.value > toNum(props.endVal);
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
      const endVal = toNum(props.endVal);
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
      lastEndVal = toNum(props.endVal);
    }
    function handleRestart() {
      if (props.autoplay) {
        start();
      }
    }
    watch(() => {
      return props.startVal;
    }, () => {
      handleRestart();
    });
    watch(() => {
      return props.endVal;
    }, (newVal) => {
      if (props.restart) {
        handleRestart();
      } else {
        const newNum = toNum(newVal);
        if (newNum != lastEndVal) {
          if (props.autoplay) {
            handleStart(currentVal);
          }
          lastEndVal = newNum;
        }
      }
    });
    const countToStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.color != null)
        css.set("color", props.color);
      if (props.fontSize != null)
        css.set("font-size", addUnit(props.fontSize));
      if (props.bold == true)
        css.set("font-weight", "bold");
      return css;
    });
    onMounted(() => {
      if (props.autoplay) {
        start();
      }
    });
    onUnmounted(() => {
      clearTimer();
    });
    __expose({
      start,
      pause,
      resume,
      reset
    });
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 0, ["rice-count-to", _unref(ns).theme()]);
        _setSharedDataStyle(__sharedData, 1, [_unref(countToStyle), __props.customStyle]);
        _setSharedData(__sharedData, 2, _toDisplayString(_unref(displayValue)));
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
//# sourceMappingURL=rice-count-to.js.map
