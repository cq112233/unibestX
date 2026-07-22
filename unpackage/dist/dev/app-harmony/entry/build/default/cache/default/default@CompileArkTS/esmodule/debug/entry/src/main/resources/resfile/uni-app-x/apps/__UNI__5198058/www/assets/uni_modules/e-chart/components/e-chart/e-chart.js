const { defineComponent, openBlock, createElementBlock, normalizeStyle } = globalThis.Vue
import { W as WebviewEchart } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/e-chart/components/e-chart/uts/WebviewEchart&";
import { g as getRandomId, a as addUnitRpx } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/e-chart/components/e-chart/uts/util&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = defineComponent({
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
      echartObj: null,
      canvasId: getRandomId()
    };
  },
  computed: {
    canvasStyle() {
      return `width:${addUnitRpx(this.width)};height:${addUnitRpx(this.height)}`;
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
    async init(option) {
      return this.initAPP(option);
    },
    initAPP(option) {
      const id = this.canvasId;
      const ctx = uni.createWebviewContext(id, this);
      if (ctx == null) {
        uni.__f__("error", "at uni_modules/e-chart/components/e-chart/e-chart.uvue:172", "初始化echart的webview失败");
        return null;
      }
      this.echartObj = new WebviewEchart(ctx);
      this.echartObj.init(this.theme);
      this.setOption(option);
      return new UTSJSONObject({ echartObj: this.echartObj });
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
        this.echartObj.getOption(resolve);
      });
    },
    // 获取宽度
    getWidth() {
      return new Promise((resolve) => {
        this.echartObj.getWidth((e) => {
          resolve(e["width"]);
        });
      });
    },
    // 获取宽度
    getHeight() {
      return new Promise((resolve) => {
        this.echartObj.getHeight((e) => {
          resolve(e["height"]);
        });
      });
    },
    // 宽高变化需重绘 (使用setTimeout,避免$nextTick在某些机型不触发的问题)
    resize() {
      var _a;
      (_a = this.echartObj) === null || _a === void 0 ? null : _a.resize();
    },
    // canvas转为文件路径
    canvasToTempFilePath() {
      return new Promise((resolve, reject) => {
        var _a;
        const fail = (e) => {
          uni.showModal(new UTSJSONObject({ title: "保存失败", content: UTS.JSON.stringify(e), showCancel: false }));
          reject(e);
        };
        (_a = this.echartObj) === null || _a === void 0 ? null : _a.canvasToTempFilePath(new UTSJSONObject({
          success: (e) => {
            const base64 = e["base64"];
            const fileSystemManager = uni.getFileSystemManager();
            const filePath = `${uni.env.USER_DATA_PATH}/${Date.now()}.png`;
            fileSystemManager.writeFile({
              filePath,
              encoding: "base64",
              data: base64.replace("data:image/png;base64,", ""),
              success: (res) => {
                resolve(filePath);
              },
              fail: (err) => {
                fail(err);
              }
            });
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
    },
    // webview消息
    onWebviewMsg(e) {
      var _a;
      (_a = this.echartObj) === null || _a === void 0 ? null : _a.onWebviewMsg(e);
    },
    // webview加载失败的回调
    onWebviewError(e) {
      uni.__f__("error", "at uni_modules/e-chart/components/e-chart/e-chart.uvue:453", "onWebviewError:", e);
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("web-view", {
    id: $data.canvasId,
    style: normalizeStyle($options.canvasStyle),
    bounces: false,
    horizontalScrollBarAccess: false,
    verticalScrollBarAccess: false,
    "webview-styles": { progress: false },
    src: "/uni_modules/e-chart/static/app/webview.html",
    onLoad: _cache[0] || (_cache[0] = (...args) => $options.onCanvasReady && $options.onCanvasReady(...args)),
    onError: _cache[1] || (_cache[1] = (...args) => $options.onWebviewError && $options.onWebviewError(...args)),
    onMessage: _cache[2] || (_cache[2] = (...args) => $options.onWebviewMsg && $options.onWebviewMsg(...args))
  }, null, 44, ["id"]);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/e-chart/components/e-chart/e-chart.uvue"]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=e-chart.js.map
