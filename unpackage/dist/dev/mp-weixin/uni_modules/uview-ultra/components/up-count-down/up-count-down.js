"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_config_props = require("../../libs/config/props.js");
const uni_modules_uviewUltra_components_upCountDown_utils = require("./utils.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "up-count-down",
  props: {
    // 倒计时时长，单位ms
    time: {
      type: [String, Number],
      default: uni_modules_uviewUltra_libs_config_props.obj.getNumber("countDown.time")
    },
    // 时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒
    format: {
      type: String,
      default: uni_modules_uviewUltra_libs_config_props.obj.getString("countDown.format")
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
    const props = __props;
    const emit = __emit;
    const timer = common_vendor.ref(-1);
    const timeData = common_vendor.ref(uni_modules_uviewUltra_components_upCountDown_utils.parseTimeData(0));
    const formattedTime = common_vendor.ref("0");
    const running = common_vendor.ref(false);
    const endTime = common_vendor.ref(0);
    const remainTime = common_vendor.ref(0);
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
      const timeDataValue = uni_modules_uviewUltra_components_upCountDown_utils.parseTimeData(remain);
      timeData.value = timeDataValue;
      emit("change", timeDataValue);
      formattedTime.value = uni_modules_uviewUltra_components_upCountDown_utils.parseFormat(props.format, timeDataValue);
      if (remain <= 0) {
        pause();
        emit("finish");
      }
    };
    function macroTick() {
      clearTimeoutFn();
      timer.value = setTimeout(() => {
        const remain = getRemainTime();
        if (!uni_modules_uviewUltra_components_upCountDown_utils.isSameSecond(remain, remainTime.value) || remain == 0) {
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
    common_vendor.onMounted(() => {
      init();
    });
    common_vendor.watch(() => {
      return props.time;
    }, (newVal) => {
      reset();
    });
    common_vendor.onBeforeUnmount(() => {
      clearTimeoutFn();
    });
    __expose({
      start,
      pause,
      reset
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.t(formattedTime.value),
        b: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        c: `${_ctx.u_s_b_h}px`,
        d: `${_ctx.u_s_a_i_b}px`,
        e: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4d77b302"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-count-down/up-count-down.js.map
