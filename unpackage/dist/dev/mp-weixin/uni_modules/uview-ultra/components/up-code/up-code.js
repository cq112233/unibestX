"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upCode_code = require("./code.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-code"
}, { __name: "up-code", props: {
  // 倒计时总秒数
  seconds: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upCode_code.defProps.getNumber("code.seconds")
  },
  // 尚未开始时提示
  startText: {
    type: String,
    default: uni_modules_uviewUltra_components_upCode_code.defProps.getString("code.startText")
  },
  // 正在倒计时中的提示
  changeText: {
    type: String,
    default: uni_modules_uviewUltra_components_upCode_code.defProps.getString("code.changeText")
  },
  // 倒计时结束时的提示
  endText: {
    type: String,
    default: uni_modules_uviewUltra_components_upCode_code.defProps.getString("code.endText")
  },
  // 是否在H5刷新或各端返回再进入时继续倒计时
  keepRunning: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upCode_code.defProps.getBoolean("code.keepRunning")
  },
  // 为了区分多个页面，或者一个页面多个倒计时组件本地存储的继续倒计时变了
  uniqueKey: {
    type: String,
    default: uni_modules_uviewUltra_components_upCode_code.defProps.getString("code.uniqueKey")
  }
}, emits: ["change", "start", "end"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  common_vendor.getCurrentInstance().proxy;
  const secNum = common_vendor.ref(0);
  const timer = common_vendor.ref(0);
  const canGetCodeRef = common_vendor.ref(true);
  const changeEvent = (text) => {
    emit("change", text);
  };
  const setTimeToStorage = () => {
    if (!props.keepRunning || timer.value == 0)
      return null;
    if (secNum.value > 0 && secNum.value < parseInt(props.seconds.toString())) {
      let nowTimestamp = Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3);
      common_vendor.index.setStorage({
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
    let lastTimestamp = parseInt(common_vendor.index.getStorageSync(props.uniqueKey + "_$upCountDownTimestamp").toString());
    let nowTimestamp = Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3);
    if (props.keepRunning && lastTimestamp > 0 && lastTimestamp > nowTimestamp) {
      secNum.value = lastTimestamp - nowTimestamp;
      common_vendor.index.removeStorageSync(props.uniqueKey + "_$upCountDownTimestamp");
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
  common_vendor.onMounted(() => {
    checkKeepRunning();
  });
  common_vendor.watch(() => {
    return props.seconds;
  }, (newVal = null) => {
    secNum.value = parseInt(newVal.toString());
  }, { immediate: true });
  common_vendor.onBeforeUnmount(() => {
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
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      b: `${_ctx.u_s_b_h}px`,
      c: `${_ctx.u_s_a_i_b}px`,
      d: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0adba377"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-code/up-code.js.map
