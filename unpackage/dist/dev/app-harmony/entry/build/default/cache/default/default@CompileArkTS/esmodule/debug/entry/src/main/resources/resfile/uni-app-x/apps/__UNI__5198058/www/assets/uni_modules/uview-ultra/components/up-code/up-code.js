import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-code/code&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpCodeUpCode";
const { ref, getCurrentInstance } = globalThis.Vue;
const { onMounted, watch, onBeforeUnmount } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-code"
  },
  __dynamicSharedData: true,
  __hash: "770fbee8",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-code/up-code.uvue",
  __name: "up-code",
  props: {
    // 倒计时总秒数
    seconds: {
      type: [String, Number],
      default: 60
    },
    // 尚未开始时提示
    startText: {
      type: String,
      default: "获取验证码"
    },
    // 正在倒计时中的提示
    changeText: {
      type: String,
      default: "X秒重新获取"
    },
    // 倒计时结束时的提示
    endText: {
      type: String,
      default: "重新获取"
    },
    // 是否在H5刷新或各端返回再进入时继续倒计时
    keepRunning: {
      type: Boolean,
      default: false
    },
    // 为了区分多个页面，或者一个页面多个倒计时组件本地存储的继续倒计时变了
    uniqueKey: {
      type: String,
      default: ""
    }
  },
  emits: ["change", "start", "end"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpCodeUpCodeSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    getCurrentInstance().proxy;
    const secNum = ref(0);
    const timer = ref(0);
    const canGetCodeRef = ref(true);
    const changeEvent = (text) => {
      emit("change", text);
    };
    const setTimeToStorage = () => {
      if (!props.keepRunning || timer.value == 0)
        return null;
      if (secNum.value > 0 && secNum.value < parseInt(props.seconds.toString())) {
        let nowTimestamp = Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3);
        uni.setStorage({
          key: props.uniqueKey + "_$upCountDownTimestamp",
          data: (nowTimestamp + secNum.value).toString()
        });
      }
    };
    const start = () => {
      if (timer.value != 0) {
        clearInterval(timer.value);
        timer.value = 0;
      }
      secNum.value = parseInt(props.seconds.toString());
      emit("start");
      canGetCodeRef.value = false;
      changeEvent(props.changeText.replace(/x|X/, secNum.value.toString()));
      timer.value = setInterval(() => {
        if (secNum.value - 1 > 0) {
          secNum.value--;
          changeEvent(props.changeText.replace(/x|X/, secNum.value.toString()));
        } else {
          secNum.value--;
          changeEvent(props.endText.toString());
          clearInterval(timer.value);
          timer.value = 0;
          emit("end");
          canGetCodeRef.value = true;
        }
      }, 1e3);
      setTimeToStorage();
    };
    const checkKeepRunning = () => {
      let lastTimestamp = parseInt(uni.getStorageSync(props.uniqueKey + "_$upCountDownTimestamp").toString());
      let nowTimestamp = Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3);
      if (props.keepRunning && lastTimestamp > 0 && lastTimestamp > nowTimestamp) {
        secNum.value = lastTimestamp - nowTimestamp;
        uni.removeStorageSync(props.uniqueKey + "_$upCountDownTimestamp");
        start();
      } else {
        changeEvent(props.startText.toString());
      }
    };
    const reset = () => {
      canGetCodeRef.value = true;
      clearInterval(timer.value);
      secNum.value = parseInt(props.seconds.toString());
      changeEvent(props.endText.toString());
    };
    onMounted(() => {
      checkKeepRunning();
    });
    watch(() => {
      return props.seconds;
    }, (newVal = null) => {
      secNum.value = parseInt(newVal.toString());
    }, { immediate: true });
    onBeforeUnmount(() => {
      setTimeToStorage();
      clearInterval(timer.value);
      timer.value = 0;
    });
    const canGetCode = function() {
      return canGetCodeRef.value;
    };
    __expose({
      canGetCode,
      start,
      reset
    });
    return () => {
      "raw js";
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-code.js.map
