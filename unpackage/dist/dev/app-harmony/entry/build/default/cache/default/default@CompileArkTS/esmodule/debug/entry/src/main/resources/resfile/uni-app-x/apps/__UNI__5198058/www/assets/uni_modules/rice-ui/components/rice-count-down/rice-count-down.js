import { u as useCountDown, U as UseCountDownOptions } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useCountDown/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/store/useConfig&";
import { u as useNamespace } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useNamespace/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/usePopup/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useChildren&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useParent&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useSafeArea/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useTouch/index&";
import { a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/utils/basic&";
import { f as formatTime } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-count-down/utils&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-count-down/type&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceCountDownRiceCountDown";
const { computed, watch } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-count-down",
    styleIsolation: "app-and-page",
    externalClasses: ["text-class"]
  },
  __dynamicSharedData: true,
  __hash: "1b9e341a",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-count-down/rice-count-down.uvue",
  __name: "rice-count-down",
  props: {
    time: { default: 0, type: Number },
    format: { default: "HH:mm:ss", type: String },
    autoStart: { type: Boolean, default: true },
    millisecond: { type: Boolean, default: false },
    fontSize: { type: [String, Number] },
    color: { type: String },
    textClass: { default: "", type: String },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  },
  emits: ["change", "finish"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceCountDownRiceCountDownSharedData", sharedDataClassId: 0 })));
    const emit = __emit;
    const ns = useNamespace("count-down");
    const props = __props;
    const _b = useCountDown(new UseCountDownOptions({
      time: props.time,
      millisecond: props.millisecond,
      onChange: (current2) => {
        return emit("change", current2);
      },
      onFinish: () => {
        return emit("finish");
      }
    })), current = _b.current, start = _b.start, pause = _b.pause, reset = _b.reset;
    const timeValue = computed(() => {
      return formatTime(props.format, current.value);
    });
    const resetTime = () => {
      reset(props.time);
      if (props.autoStart) {
        start();
      }
    };
    watch(() => {
      return props.time;
    }, () => {
      resetTime();
    }, {
      immediate: true
    });
    const textStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.fontSize != null)
        css.set("font-size", addUnit(props.fontSize));
      if (props.color != null)
        css.set("color", props.color);
      return css;
    });
    __expose({
      //兼容 Android的写法
      start: () => {
        return start();
      },
      pause: () => {
        return pause();
      },
      reset: resetTime
    });
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 4, ["rice-count-down", _unref(ns).theme()]);
        _setSharedDataStyle(__sharedData, 5, __props.customStyle);
      });
      _createSharedDataSlot("default", { current: () => {
        return _unref(current);
      } }, (data) => {
        return _setSharedData(__sharedData, 0, data);
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 1, ["rice-count-down__text", __props.textClass]);
          _setSharedDataStyle(__sharedData, 2, _unref(textStyle));
          _setSharedData(__sharedData, 3, _toDisplayString(_unref(timeValue)));
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
//# sourceMappingURL=rice-count-down.js.map
