const { defineComponent, ref, onMounted, watch, onBeforeUnmount, openBlock, createElementBlock, renderSlot, createElementVNode, toDisplayString } = globalThis.Vue
import { o as obj } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/config/props&";
import { p as parseTimeData, a as parseFormat, i as isSameSecond } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-count-down/utils&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "up-count-down",
  props: {
    // 倒计时时长，单位ms
    time: {
      type: [String, Number],
      default: obj.getNumber("countDown.time")
    },
    // 时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒
    format: {
      type: String,
      default: obj.getString("countDown.format")
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
    const __returned__ = { props, emit, timer, timeData, formattedTime, running, endTime, remainTime, clearTimeoutFn, getRemainTime, pause, setRemainTime, macroTick, microTick, toTick, start, reset, init };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-count-down__text": { "": { "color": "#606266", "fontSize": 15, "lineHeight": "22px" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", { class: "up-count-down" }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createElementVNode(
        "text",
        { class: "up-count-down__text" },
        toDisplayString($setup.formattedTime),
        1
        /* TEXT */
      )
    ])
  ]);
}
const __easycom_43 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-count-down/up-count-down.uvue"]]);
export {
  __easycom_43 as _
};
//# sourceMappingURL=up-count-down.js.map
