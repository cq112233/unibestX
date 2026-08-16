"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/use/useCountDown/index.js");
const uni_modules_riceUi_libs_store_useConfig = require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
const uni_modules_riceUi_components_riceProgressCircle_type = require("./type.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-progress-circle",
  styleIsolation: "app-and-page"
}, { __name: "rice-progress-circle", props: {
  percentage: { default: 0 },
  type: { default: "circle" },
  size: { default: 100 },
  duration: { default: 350 },
  strokeWidth: { default: 8 },
  showText: { type: Boolean, default: true },
  textColor: {},
  textSize: {},
  format: {},
  color: {},
  inactiveColor: {},
  gapAngle: { default: 60 },
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}, setup(__props) {
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("progress-circle");
  const canvasId = "rice-progress-circle-" + uni_modules_riceUi_libs_utils_basic.getRandomStr();
  const props = __props;
  const percent = common_vendor.computed(() => {
    return uni_modules_riceUi_libs_utils_basic.toNum(props.percentage);
  });
  const formatText = common_vendor.computed(() => {
    if (typeof props.format == "function") {
      return props.format(percent.value);
    }
    return `${percent.value}%`;
  });
  const currentProgress = common_vendor.ref(0);
  const drawCtx = common_vendor.ref(null);
  const activeColor = common_vendor.computed(() => {
    var _a;
    return (_a = props.color) !== null && _a !== void 0 ? _a : "#1989fa";
  });
  const inActiveColor = common_vendor.computed(() => {
    if (props.inactiveColor != null)
      props.inactiveColor;
    return uni_modules_riceUi_libs_store_useConfig.isDark.value ? "#363637" : "#ebedf0";
  });
  const drawParams = common_vendor.computed(() => {
    const size = uni_modules_riceUi_libs_utils_basic.getPxNum(props.size);
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
    return new uni_modules_riceUi_components_riceProgressCircle_type.ProgressCircleDrawParams({
      radius,
      centerX,
      centerY,
      startAngle,
      endAngle,
      progressAngle
    });
  });
  const drawProgress = () => {
    const _a = drawParams.value, radius = _a.radius, centerX = _a.centerX, centerY = _a.centerY, startAngle = _a.startAngle, endAngle = _a.endAngle, progressAngle = _a.progressAngle;
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
    const end = uni_modules_riceUi_libs_utils_basic.clamp(uni_modules_riceUi_libs_utils_basic.toNum(props.percentage), 0, 100);
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
  const createCanvasContext = () => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      var _a;
      common_vendor.index.createCanvasContextAsync({
        id: canvasId,
        component: (_a = common_vendor.getCurrentInstance()) === null || _a === void 0 ? null : _a.proxy,
        success: (context) => {
          var _a2;
          const canvasContext = context.getContext("2d");
          const canvas = canvasContext.canvas;
          const dpr = (_a2 = common_vendor.index.getWindowInfo().pixelRatio) !== null && _a2 !== void 0 ? _a2 : 1;
          canvas.width = canvas.offsetWidth * dpr;
          canvas.height = canvas.offsetHeight * dpr;
          canvasContext.scale(dpr, dpr);
          drawCtx.value = canvasContext;
          updateProgress();
        }
      });
    });
  };
  const progressCircleSize = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    css.set("height", uni_modules_riceUi_libs_utils_basic.addUnit(props.size));
    css.set("width", uni_modules_riceUi_libs_utils_basic.addUnit(props.size));
    return css;
  });
  const contentStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    css.set("padding-left", props.strokeWidth + "px");
    css.set("padding-right", props.strokeWidth + "px");
    return css;
  });
  const textStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.textSize != null)
      css.set("font-size", uni_modules_riceUi_libs_utils_basic.addUnit(props.textSize));
    if (props.textColor != null)
      css.set("color", props.textColor);
    return css;
  });
  common_vendor.watch(() => {
    return props.percentage;
  }, () => {
    updateProgress();
  });
  common_vendor.watch(uni_modules_riceUi_libs_store_useConfig.isDark, () => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      yield common_vendor.nextTick$1();
      updateProgress();
    });
  });
  common_vendor.onMounted(() => {
    createCanvasContext();
  });
  common_vendor.onUnmounted(() => {
    if (animationTimer != null) {
      clearTimeout(animationTimer);
    }
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: common_vendor.sei(canvasId, "canvas"),
      b: common_vendor.s(common_vendor.unref(progressCircleSize)),
      c: _ctx.showText || _ctx.$slots["default"] != null
    }, _ctx.showText || _ctx.$slots["default"] != null ? {
      d: common_vendor.t(common_vendor.unref(formatText)),
      e: common_vendor.s(common_vendor.unref(textStyle)),
      f: common_vendor.s(common_vendor.unref(contentStyle))
    } : {}, {
      g: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      h: common_vendor.n(common_vendor.unref(ns).theme()),
      i: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      j: common_vendor.s(common_vendor.unref(progressCircleSize)),
      k: common_vendor.s(_ctx.customStyle),
      l: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fe6eb020"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-progress-circle/rice-progress-circle.js.map
