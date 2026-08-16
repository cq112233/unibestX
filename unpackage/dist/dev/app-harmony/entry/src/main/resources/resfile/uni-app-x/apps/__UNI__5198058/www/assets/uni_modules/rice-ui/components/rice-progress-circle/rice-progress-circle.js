import "../../libs/use/useCountDown/index.js";
import { i as isDark } from "../../libs/store/useConfig.js";
import { u as useNamespace } from "../../libs/use/useNamespace/index.js";
import "../../libs/use/usePopup/index.js";
import "../../libs/use/useRelation/useChildren.js";
import "../../libs/use/useRelation/useParent.js";
import "../../libs/use/useSafeArea/index.js";
import "../../libs/use/useTouch/index.js";
import { t as toNum, d as getPxNum, a as addUnit, f as getRandomStr, c as clamp } from "../../libs/utils/basic.js";
import { P as ProgressCircleDrawParams } from "./type.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot, createSharedDataIf: _createSharedDataIf } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceProgressCircleRiceProgressCircle";
const { computed, ref, nextTick, getCurrentInstance, watch, onMounted, onUnmounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-progress-circle",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "1069777c",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-progress-circle/rice-progress-circle.uvue",
  __name: "rice-progress-circle",
  props: {
    percentage: { default: 0, type: [String, Number] },
    type: { default: "circle", type: String },
    size: { default: 100, type: [String, Number] },
    duration: { default: 350, type: Number },
    strokeWidth: { default: 8, type: Number },
    showText: { type: Boolean, default: true },
    textColor: { type: String },
    textSize: { type: [String, Number] },
    format: { type: Function },
    color: { type: String },
    inactiveColor: { type: String },
    gapAngle: { default: 60, type: Number },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  },
  setup(__props, _a) {
    var $slots = _a.slots;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceProgressCircleRiceProgressCircleSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("progress-circle");
    const canvasId = "rice-progress-circle-" + getRandomStr();
    const props = __props;
    const percent = computed(() => {
      return toNum(props.percentage);
    });
    const formatText = computed(() => {
      if (typeof props.format == "function") {
        return props.format(percent.value);
      }
      return `${percent.value}%`;
    });
    const currentProgress = ref(0);
    const drawCtx = ref(null);
    const activeColor = computed(() => {
      var _a2;
      return (_a2 = props.color) !== null && _a2 !== void 0 ? _a2 : "#1989fa";
    });
    const inActiveColor = computed(() => {
      if (props.inactiveColor != null)
        props.inactiveColor;
      return isDark.value ? "#363637" : "#ebedf0";
    });
    const drawParams = computed(() => {
      const size = getPxNum(props.size);
      const strokeWidth = props.strokeWidth;
      const radius = (size - strokeWidth) / 2;
      const centerX = size / 2;
      const centerY = size / 2;
      let startAngle = 0;
      let endAngle = 0;
      let totalAngle = 0;
      if (props.type == "circle") {
        startAngle = -Math.PI / 2;
        totalAngle = Math.PI * 2;
        endAngle = startAngle + totalAngle;
      } else {
        const gapRadian = props.gapAngle * Math.PI / 180;
        totalAngle = 2 * Math.PI - gapRadian;
        startAngle = -Math.PI / 2 - totalAngle / 2;
        endAngle = -Math.PI / 2 + totalAngle / 2;
      }
      const progressAngle = startAngle + currentProgress.value / 100 * totalAngle;
      return new ProgressCircleDrawParams({
        radius,
        centerX,
        centerY,
        startAngle,
        endAngle,
        progressAngle
      });
    });
    const drawProgress = () => {
      const _a2 = drawParams.value, radius = _a2.radius, centerX = _a2.centerX, centerY = _a2.centerY, startAngle = _a2.startAngle, endAngle = _a2.endAngle, progressAngle = _a2.progressAngle;
      const ctx = drawCtx.value;
      if (ctx == null)
        return null;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);
      ctx.strokeStyle = inActiveColor.value;
      ctx.lineWidth = props.strokeWidth;
      ctx.lineCap = "round";
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, progressAngle, false);
      ctx.strokeStyle = activeColor.value;
      ctx.lineWidth = props.strokeWidth;
      ctx.lineCap = "round";
      ctx.stroke();
    };
    let animationTimer = null;
    let animateFrame = null;
    const updateProgress = () => {
      if (animationTimer != null) {
        clearTimeout(animationTimer);
      }
      const start = currentProgress.value;
      const end = clamp(toNum(props.percentage), 0, 100);
      const frameRate = 60;
      const totalFrames = Math.floor(props.duration / 1e3 * frameRate);
      const frameDuration = props.duration / totalFrames;
      const progressStep = (end - start) / totalFrames;
      let currentFrame = 0;
      animateFrame = () => {
        currentFrame++;
        currentProgress.value = start + progressStep * currentFrame;
        if (end > start) {
          currentProgress.value = Math.min(currentProgress.value, end);
        } else {
          currentProgress.value = Math.max(currentProgress.value, end);
        }
        drawProgress();
        if (currentFrame < totalFrames) {
          animationTimer = setTimeout(animateFrame, frameDuration);
        }
      };
      animationTimer = setTimeout(animateFrame, frameDuration);
    };
    const createCanvasContext = async () => {
      var _a2;
      await nextTick();
      uni.createCanvasContextAsync({
        id: canvasId,
        component: (_a2 = getCurrentInstance()) === null || _a2 === void 0 ? null : _a2.proxy,
        success: (context) => {
          var _a3;
          const canvasContext = context.getContext("2d");
          const canvas = canvasContext.canvas;
          const dpr = (_a3 = uni.getWindowInfo().pixelRatio) !== null && _a3 !== void 0 ? _a3 : 1;
          canvas.width = canvas.offsetWidth * dpr;
          canvas.height = canvas.offsetHeight * dpr;
          canvasContext.scale(dpr, dpr);
          drawCtx.value = canvasContext;
          updateProgress();
        }
      });
    };
    const progressCircleSize = computed(() => {
      const css = /* @__PURE__ */ new Map();
      css.set("height", addUnit(props.size));
      css.set("width", addUnit(props.size));
      return css;
    });
    const contentStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      css.set("padding-left", props.strokeWidth + "px");
      css.set("padding-right", props.strokeWidth + "px");
      return css;
    });
    const textStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.textSize != null)
        css.set("font-size", addUnit(props.textSize));
      if (props.textColor != null)
        css.set("color", props.textColor);
      return css;
    });
    watch(() => {
      return props.percentage;
    }, () => {
      updateProgress();
    });
    watch(isDark, async () => {
      await nextTick();
      updateProgress();
    });
    onMounted(() => {
      createCanvasContext();
    });
    onUnmounted(() => {
      if (animationTimer != null) {
        clearTimeout(animationTimer);
      }
    });
    return () => {
      "raw js";
      const _component_canvas = _resolveComponent("canvas");
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 5, ["rice-progress-circle", _unref(ns).theme()]);
        _setSharedDataStyle(__sharedData, 6, [_unref(progressCircleSize), __props.customStyle]);
      });
      const n0 = _createSharedDataComponentWithFallback(_component_canvas, "7ad26942", {
        class: "rice-progress-circle__canvas",
        style: () => {
          return _unref(progressCircleSize);
        },
        id: () => {
          return canvasId;
        },
        type: "2d"
      });
      _setSharedData(__sharedData, 0, n0?.sharedData);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 1, _toSharedDataBoolean(__props.showText || $slots["default"] != null));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData, 4, _unref(contentStyle));
        });
        _createSharedDataSlot("default", null, null, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataStyle(__sharedData, 2, _unref(textStyle));
            _setSharedData(__sharedData, 3, _toDisplayString(_unref(formatText)));
          });
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
//# sourceMappingURL=rice-progress-circle.js.map
