"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_eChart_components_eChart_js_echarts_esm_min = require("./js/echarts.esm.min.js");
const uni_modules_eChart_components_eChart_js_UniCanvas = require("./js/UniCanvas.js");
const uni_modules_eChart_components_eChart_js_UniImg = require("./js/UniImg.js");
const uni_modules_eChart_components_eChart_js_util = require("./js/util.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "e-chart"
}, { __name: "e-chart", props: {
  width: {
    type: [Number, String],
    default: "100%"
  },
  height: {
    type: [Number, String],
    default: 600
  },
  disableScroll: {
    type: Boolean,
    default: false
  },
  theme: {
    type: String,
    default: ""
  }
}, emits: ["ready"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const emit = __emit;
  const props = __props;
  let echartObj = null;
  let echartCanvas = null;
  let _resizeTimer = null;
  const canvasId = uni_modules_eChart_components_eChart_js_util.getRandomId();
  const canvasStyle = common_vendor.computed(() => {
    return `width:${uni_modules_eChart_components_eChart_js_util.addUnitRpx(props.width)};height:${uni_modules_eChart_components_eChart_js_util.addUnitRpx(props.height)}`;
  });
  function onCanvasReady() {
    emit("ready");
  }
  function initMP(option) {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      const _a2 = yield getMpCanvas(), node = _a2.node, ctx = _a2.ctx, width = _a2.width, height = _a2.height, devicePixelRatio = _a2.devicePixelRatio;
      const canvas = node ? new uni_modules_eChart_components_eChart_js_UniCanvas.UniCanvas(ctx, canvasId, true, node) : new uni_modules_eChart_components_eChart_js_UniCanvas.UniCanvas(ctx, canvasId, false);
      uni_modules_eChart_components_eChart_js_echarts_esm_min.Cm((opt = null) => {
        if (opt && opt.series) {
          if (opt.series.length > 0) {
            opt.series.forEach((series = null) => {
              series.progressive = 0;
            });
          } else if (typeof opt.series === "object") {
            opt.series.progressive = 0;
          }
        }
      });
      if (uni_modules_eChart_components_eChart_js_echarts_esm_min.h) {
        uni_modules_eChart_components_eChart_js_echarts_esm_min.h(new common_vendor.UTSJSONObject({
          createCanvas: () => {
            return canvas;
          },
          loadImage: (src = null, onload = null, onerror = null) => {
            const image = node ? node.createImage() : new uni_modules_eChart_components_eChart_js_UniImg.UniImg();
            image.onload = onload;
            image.onerror = onerror;
            image.src = src;
            return image;
          }
        }));
      } else {
        uni_modules_eChart_components_eChart_js_echarts_esm_min.Fm(() => {
          return canvas;
        });
      }
      echartObj = uni_modules_eChart_components_eChart_js_echarts_esm_min.xm(canvas, props.theme, new common_vendor.UTSJSONObject({
        devicePixelRatio,
        width,
        height
      }));
      canvas.setChart(echartObj);
      setOption(option);
      echartCanvas = node;
      return new common_vendor.UTSJSONObject({ echartCanvas: node, echartObj, canvasId, width, height });
    });
  }
  function getCanvasQuery() {
    let query = common_vendor.index.createSelectorQuery();
    query = query.in(this);
    return query.select(`#${canvasId}`);
  }
  function getMpCanvas() {
    return new Promise((resolve) => {
      getCanvasQuery().fields(new common_vendor.UTSJSONObject({ node: true, size: true })).exec((res) => {
        const _a2 = res[0], width = _a2.width, height = _a2.height, node = _a2.node;
        let devicePixelRatio = 1;
        if (node && node.getContext) {
          const ctxV2 = node.getContext("2d");
          devicePixelRatio = uni_modules_eChart_components_eChart_js_util.getWindowInfo().pixelRatio;
          resolve(new common_vendor.UTSJSONObject({ ctx: ctxV2, width, height, node, devicePixelRatio }));
        } else {
          const ctxV1 = common_vendor.index.createCanvasContext(canvasId);
          resolve(new common_vendor.UTSJSONObject({ ctx: ctxV1, width, height, devicePixelRatio }));
        }
      });
    });
  }
  function init(option) {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      return yield initMP(option);
    });
  }
  function getEchartObj() {
    return echartObj;
  }
  function setOption(option) {
    echartObj === null || echartObj === void 0 ? null : echartObj.setOption(option);
  }
  function getOption() {
    return new Promise((resolve) => {
      resolve(echartObj.getOption());
    });
  }
  function getWidth() {
    return new Promise((resolve) => {
      resolve(echartObj.getWidth());
    });
  }
  function getHeight() {
    return new Promise((resolve) => {
      resolve(echartObj.getHeight());
    });
  }
  function resize() {
    _resizeTimer && clearTimeout(_resizeTimer);
    _resizeTimer = setTimeout(() => {
      getCanvasQuery().boundingClientRect().exec((res) => {
        const _a2 = res[0], width = _a2.width, height = _a2.height;
        echartObj.resize(new common_vendor.UTSJSONObject({ width, height }));
      });
    }, 30);
  }
  function onTouchstart(e) {
    const event = wrapTouch(e);
    const zrxy = getZrXy(event.touches);
    const handler = echartObj.getZr().handler;
    handler.dispatch("mousedown", zrxy);
    handler.dispatch("mousemove", zrxy);
    handler.processGesture(event, "start");
  }
  function onTouchmove(e) {
    const event = wrapTouch(e);
    const zrxy = getZrXy(event.touches);
    const handler = echartObj.getZr().handler;
    handler.dispatch("mousemove", zrxy);
    handler.processGesture(event, "change");
  }
  function onTouchend(e) {
    const event = wrapTouch(e);
    const zrxy = getZrXy(event.changedTouches);
    const handler = echartObj.getZr().handler;
    handler.dispatch("mouseup", zrxy);
    handler.dispatch("click", zrxy);
    handler.processGesture(event, "end");
  }
  function wrapTouch(e) {
    wrapTouches(e.changedTouches);
    wrapTouches(e.touches);
    return e;
  }
  function wrapTouches(touches = []) {
    var e_1, _a2;
    try {
      for (var touches_1 = common_vendor.__values(touches), touches_1_1 = touches_1.next(); !touches_1_1.done; touches_1_1 = touches_1.next()) {
        var touch = touches_1_1.value;
        touch.offsetX = touch.x;
        touch.offsetY = touch.y;
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (touches_1_1 && !touches_1_1.done && (_a2 = touches_1.return))
          _a2.call(touches_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
  }
  function getZrXy(touches = []) {
    const touch = touches[0] || new common_vendor.UTSJSONObject({});
    return new common_vendor.UTSJSONObject({
      zrX: touch.x,
      zrY: touch.y,
      preventDefault: () => {
      },
      stopImmediatePropagation: () => {
      },
      stopPropagation: () => {
      }
    });
  }
  function canvasToTempFilePath() {
    return new Promise((resolve, reject) => {
      const fail = (e) => {
        common_vendor.index.showModal(new common_vendor.UTSJSONObject({ title: "保存失败", content: common_vendor.UTS.JSON.stringify(e), showCancel: false }));
        reject(e);
      };
      const option = echartCanvas ? new common_vendor.UTSJSONObject({ canvas: echartCanvas }) : new common_vendor.UTSJSONObject({ canvasId });
      common_vendor.index.canvasToTempFilePath(Object.assign(Object.assign({}, option), {
        success(res) {
          resolve(res.tempFilePath);
        },
        fail
      }));
    });
  }
  function showLoading(option) {
    echartObj === null || echartObj === void 0 ? null : echartObj.showLoading(option);
  }
  function hideLoading() {
    echartObj === null || echartObj === void 0 ? null : echartObj.hideLoading();
  }
  common_vendor.watch(() => {
    return props.width;
  }, () => {
    resize();
  });
  common_vendor.watch(() => {
    return props.height;
  }, () => {
    resize();
  });
  common_vendor.onMounted(() => {
    onCanvasReady();
  });
  __expose({
    init,
    setOption,
    getOption,
    getWidth,
    getHeight,
    resize,
    getEchartObj,
    canvasToTempFilePath,
    showLoading,
    hideLoading,
    onCanvasReady
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: common_vendor.unref(canvasId)
    }, common_vendor.unref(canvasId) ? {
      b: common_vendor.sei(common_vendor.gei(_ctx, common_vendor.unref(canvasId)), "canvas"),
      c: common_vendor.s(canvasStyle.value),
      d: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      e: common_vendor.unref(canvasId),
      f: __props.disableScroll,
      g: common_vendor.o(onTouchstart, "c1"),
      h: common_vendor.o(onTouchmove, "c6"),
      i: common_vendor.o(onTouchend, "15"),
      j: common_vendor.o(onTouchend, "f3"),
      k: common_vendor.o(onCanvasReady, "2a"),
      l: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    } : {});
    return __returned__;
  };
} }));
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/e-chart/components/e-chart/e-chart.js.map
