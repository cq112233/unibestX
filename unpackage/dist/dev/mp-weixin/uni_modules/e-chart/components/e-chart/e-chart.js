"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_eChart_components_eChart_js_echarts_esm_min = require("./js/echarts.esm.min.js");
const uni_modules_eChart_components_eChart_js_UniCanvas = require("./js/UniCanvas.js");
const uni_modules_eChart_components_eChart_js_UniImg = require("./js/UniImg.js");
const uni_modules_eChart_components_eChart_js_util = require("./js/util.js");
const _sfc_main = common_vendor.defineComponent({
  name: "e-chart",
  emits: ["ready"],
  props: {
    width: {
      type: [Number, String],
      default: "100%"
    },
    height: {
      type: [Number, String],
      default: 600
    },
    disableScroll: Boolean,
    theme: String
  },
  data() {
    return {
      canvasId: uni_modules_eChart_components_eChart_js_util.getRandomId()
    };
  },
  computed: {
    canvasStyle() {
      return `width:${uni_modules_eChart_components_eChart_js_util.addUnitRpx(this.width)};height:${uni_modules_eChart_components_eChart_js_util.addUnitRpx(this.height)}`;
    }
  },
  watch: {
    width() {
      this.resize();
    },
    height() {
      this.resize();
    }
  },
  mounted() {
    this.onCanvasReady();
  },
  methods: {
    // 通知外部可初始化echarts实例 (vue3抖音小程序在页面的onMounted中echartRef.value没值, 而在ready回调中则有值)
    onCanvasReady() {
      this.$emit("ready");
    },
    // 外部通过ref初始化, 因为uni-app不支持props传递function属性
    init(option) {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        return yield this.initMP(option);
      });
    },
    initMP(option) {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        const _a = yield this.getMpCanvas(), node = _a.node, ctx = _a.ctx, width = _a.width, height = _a.height, devicePixelRatio = _a.devicePixelRatio;
        const canvas = node ? new uni_modules_eChart_components_eChart_js_UniCanvas.UniCanvas(ctx, this.canvasId, true, node) : new uni_modules_eChart_components_eChart_js_UniCanvas.UniCanvas(ctx, this.canvasId, false);
        uni_modules_eChart_components_eChart_js_echarts_esm_min.Cm((option2 = null) => {
          if (option2 && option2.series) {
            if (option2.series.length > 0) {
              option2.series.forEach((series = null) => {
                series.progressive = 0;
              });
            } else if (typeof option2.series === "object") {
              option2.series.progressive = 0;
            }
          }
        });
        if (uni_modules_eChart_components_eChart_js_echarts_esm_min.h) {
          uni_modules_eChart_components_eChart_js_echarts_esm_min.h(new UTSJSONObject({
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
        this.echartObj = uni_modules_eChart_components_eChart_js_echarts_esm_min.xm(canvas, this.theme, new UTSJSONObject({
          devicePixelRatio,
          width,
          height
        }));
        canvas.setChart(this.echartObj);
        this.setOption(option);
        this.echartCanvas = node;
        return new UTSJSONObject({ echartCanvas: node, echartObj: this.echartObj, canvasId: this.canvasId, width, height });
      });
    },
    // 获取echart实例
    getEchartObj() {
      return this.echartObj;
    },
    // 设置配置
    setOption(option) {
      var _a;
      (_a = this.echartObj) === null || _a === void 0 ? null : _a.setOption(option);
    },
    // 获取配置
    getOption() {
      return new Promise((resolve) => {
        resolve(this.echartObj.getOption());
      });
    },
    // 获取宽度
    getWidth() {
      return new Promise((resolve) => {
        resolve(this.echartObj.getWidth());
      });
    },
    // 获取宽度
    getHeight() {
      return new Promise((resolve) => {
        resolve(this.echartObj.getHeight());
      });
    },
    // 宽高变化需重绘 (使用setTimeout,避免$nextTick在某些机型不触发的问题)
    resize() {
      this._resizeTimer && clearTimeout(this._resizeTimer);
      this._resizeTimer = setTimeout(() => {
        this.getCanvasQuery().boundingClientRect().exec((res) => {
          const _a = res[0], width = _a.width, height = _a.height;
          this.echartObj.resize(new UTSJSONObject({ width, height }));
        });
      }, 30);
    },
    // 获取canvas查询对象
    getCanvasQuery() {
      let query = common_vendor.index.createSelectorQuery();
      query = query.in(this);
      return query.select(`#${this.canvasId}`);
    },
    // 获取Canvas上下文
    getMpCanvas() {
      return new Promise((resolve) => {
        this.getCanvasQuery().fields(new UTSJSONObject({ node: true, size: true })).exec((res) => {
          const _a = res[0], width = _a.width, height = _a.height, node = _a.node;
          let devicePixelRatio = 1;
          if (node && node.getContext) {
            const ctxV2 = node.getContext("2d");
            devicePixelRatio = uni_modules_eChart_components_eChart_js_util.getWindowInfo().pixelRatio;
            resolve({ ctx: ctxV2, width, height, node, devicePixelRatio });
          } else {
            const ctxV1 = common_vendor.index.createCanvasContext(this.canvasId, this);
            resolve({ ctx: ctxV1, width, height, devicePixelRatio });
          }
        });
      });
    },
    // 触摸事件开始 - 将touch事件转为底层的mouse事件, 使点击或滑动相关事件生效 (解决移动端tooltip失效的问题)
    onTouchstart(e) {
      const event = this.wrapTouch(e);
      const zrxy = this.getZrXy(event.touches);
      const handler = this.echartObj.getZr().handler;
      handler.dispatch("mousedown", zrxy);
      handler.dispatch("mousemove", zrxy);
      handler.processGesture(event, "start");
    },
    // 触摸事件滑动
    onTouchmove(e) {
      const event = this.wrapTouch(e);
      const zrxy = this.getZrXy(event.touches);
      const handler = this.echartObj.getZr().handler;
      handler.dispatch("mousemove", zrxy);
      handler.processGesture(event, "change");
    },
    // 触摸事件结束
    onTouchend(e) {
      const event = this.wrapTouch(e);
      const zrxy = this.getZrXy(event.changedTouches);
      const handler = this.echartObj.getZr().handler;
      handler.dispatch("mouseup", zrxy);
      handler.dispatch("click", zrxy);
      handler.processGesture(event, "end");
    },
    // touches补充offsetX和offsetY
    wrapTouch(e) {
      this.wrapTouches(e.changedTouches);
      this.wrapTouches(e.touches);
      return e;
    },
    wrapTouches(touches = []) {
      var e_1, _a;
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
          if (touches_1_1 && !touches_1_1.done && (_a = touches_1.return))
            _a.call(touches_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    },
    // 转换触摸事件的坐标 (touchend和touchcancel使用changedTouches, 而touchstart和touchmove使用touches)
    getZrXy(touches = []) {
      const touch = touches[0] || new UTSJSONObject({});
      return new UTSJSONObject({
        zrX: touch.x,
        zrY: touch.y,
        preventDefault: () => {
        },
        stopImmediatePropagation: () => {
        },
        stopPropagation: () => {
        }
      });
    },
    // canvas转为文件路径
    canvasToTempFilePath() {
      return new Promise((resolve, reject) => {
        const fail = (e) => {
          common_vendor.index.showModal(new UTSJSONObject({ title: "保存失败", content: common_vendor.UTS.JSON.stringify(e), showCancel: false }));
          reject(e);
        };
        const option = this.echartCanvas ? new UTSJSONObject({ canvas: this.echartCanvas }) : new UTSJSONObject({ canvasId: this.canvasId });
        common_vendor.index.canvasToTempFilePath(Object.assign(Object.assign({}, option), {
          success(res) {
            resolve(res.tempFilePath);
          },
          fail
        }));
      });
    },
    // 显示进度条
    showLoading(option) {
      var _a;
      (_a = this.echartObj) === null || _a === void 0 ? null : _a.showLoading(option);
    },
    // 隐藏进度条
    hideLoading() {
      var _a;
      (_a = this.echartObj) === null || _a === void 0 ? null : _a.hideLoading();
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: $data.canvasId
  }, $data.canvasId ? {
    b: common_vendor.sei(common_vendor.gei(_ctx, $data.canvasId), "canvas"),
    c: common_vendor.s($options.canvasStyle),
    d: common_vendor.s({
      "--status-bar-height": `${_ctx.u_s_b_h}px`,
      "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
    }),
    e: $data.canvasId,
    f: $props.disableScroll,
    g: common_vendor.o((...args) => $options.onTouchstart && $options.onTouchstart(...args), "05"),
    h: common_vendor.o((...args) => $options.onTouchmove && $options.onTouchmove(...args), "d1"),
    i: common_vendor.o((...args) => $options.onTouchend && $options.onTouchend(...args), "51"),
    j: common_vendor.o((...args) => $options.onTouchend && $options.onTouchend(...args), "bf"),
    k: common_vendor.o((...args) => $options.onCanvasReady && $options.onCanvasReady(...args), "83"),
    l: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/e-chart/components/e-chart/e-chart.js.map
