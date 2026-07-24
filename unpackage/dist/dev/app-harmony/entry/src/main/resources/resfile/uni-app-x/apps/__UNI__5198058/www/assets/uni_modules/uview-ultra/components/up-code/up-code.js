const { defineComponent, getCurrentInstance, ref, onMounted, watch, onBeforeUnmount, openBlock, createElementBlock, createCommentVNode } = globalThis.Vue
import { d as defProps } from "./code.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "up-code"
  },
  __name: "up-code",
  props: {
    // 倒计时总秒数
    seconds: {
      type: [String, Number],
      default: defProps.getNumber("code.seconds")
    },
    // 尚未开始时提示
    startText: {
      type: String,
      default: defProps.getString("code.startText")
    },
    // 正在倒计时中的提示
    changeText: {
      type: String,
      default: defProps.getString("code.changeText")
    },
    // 倒计时结束时的提示
    endText: {
      type: String,
      default: defProps.getString("code.endText")
    },
    // 是否在H5刷新或各端返回再进入时继续倒计时
    keepRunning: {
      type: Boolean,
      default: defProps.getBoolean("code.keepRunning")
    },
    // 为了区分多个页面，或者一个页面多个倒计时组件本地存储的继续倒计时变了
    uniqueKey: {
      type: String,
      default: defProps.getString("code.uniqueKey")
    }
  },
  emits: ["change", "start", "end"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const props = __props;
    const emit = __emit;
    const instance = getCurrentInstance().proxy;
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
    const __returned__ = { props, emit, instance, secNum, timer, canGetCodeRef, changeEvent, setTimeToStorage, start, checkKeepRunning, reset, canGetCode };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", { class: "up-code" }, [
    createCommentVNode(" 此组件功能由js完成，无需写html逻辑 ")
  ]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-code/up-code.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-code.js.map
