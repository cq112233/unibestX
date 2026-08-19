import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/config/props&";
import { p as parseTimeData, a as parseFormat, i as isSameSecond } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-count-down/utils&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpCountDownUpCountDown";
const { ref, onMounted, onBeforeUnmount, watch } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "76d41845",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-count-down/up-count-down.uvue",
  __name: "up-count-down",
  props: {
    // 倒计时时长，单位ms
    time: {
      type: [String, Number],
      default: 0
    },
    // 时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒
    format: {
      type: String,
      default: "HH:mm:ss"
    },
    // 是否自动开始倒计时
    autoStart: {
      type: Boolean,
      default: true
    },
    // 是否展示毫秒倒计时
    millisecond: {
      type: Boolean,
      default: false
    }
  },
  emits: ["finish", "change", "start", "pause", "reset"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpCountDownUpCountDownSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const timer = ref(-1);
    const timeData = ref(parseTimeData(0));
    const formattedTime = ref("0");
    const running = ref(false);
    const endTime = ref(0);
    const remainTime = ref(0);
    const clearTimeoutFn = () => {
      if (timer.value != -1) {
        clearTimeout(timer.value);
      }
      timer.value = -1;
    };
    const getRemainTime = () => {
      return Math.max(endTime.value - Date.now(), 0);
    };
    const pause = () => {
      running.value = false;
      clearTimeoutFn();
      emit("pause");
    };
    const setRemainTime = (remain) => {
      remainTime.value = remain;
      const timeDataValue = parseTimeData(remain);
      timeData.value = timeDataValue;
      emit("change", timeDataValue);
      formattedTime.value = parseFormat(props.format, timeDataValue);
      if (remain <= 0) {
        pause();
        emit("finish");
      }
    };
    function macroTick() {
      clearTimeoutFn();
      timer.value = setTimeout(() => {
        const remain = getRemainTime();
        if (!isSameSecond(remain, remainTime.value) || remain == 0) {
          setRemainTime(remain);
        }
        if (remainTime.value != 0) {
          macroTick();
        }
      }, 30);
    }
    function microTick() {
      clearTimeoutFn();
      timer.value = setTimeout(() => {
        setRemainTime(getRemainTime());
        if (remainTime.value != 0) {
          microTick();
        }
      }, 50);
    }
    const toTick = () => {
      if (props.millisecond) {
        microTick();
      } else {
        macroTick();
      }
    };
    const start = () => {
      if (running.value)
        return null;
      running.value = true;
      endTime.value = Date.now() + remainTime.value;
      toTick();
      emit("start");
    };
    const reset = () => {
      pause();
      remainTime.value = props.time;
      setRemainTime(remainTime.value);
      if (props.autoStart) {
        start();
      }
      emit("reset");
    };
    const init = () => {
      reset();
    };
    onMounted(() => {
      init();
    });
    watch(() => {
      return props.time;
    }, (newVal) => {
      reset();
    });
    onBeforeUnmount(() => {
      clearTimeoutFn();
    });
    __expose({
      start,
      pause,
      reset
    });
    return () => {
      "raw js";
      _createSharedDataSlot("default", null, null, () => {
        _renderSharedDataEffect(() => {
          return _setSharedData(__sharedData, 0, _toDisplayString(formattedTime.value));
        });
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
//# sourceMappingURL=up-count-down.js.map
