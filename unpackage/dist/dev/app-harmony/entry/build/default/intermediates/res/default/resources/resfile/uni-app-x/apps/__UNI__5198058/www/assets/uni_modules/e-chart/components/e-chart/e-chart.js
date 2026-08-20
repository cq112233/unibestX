import { W as WebviewEchart } from "./uts/WebviewEchart.js";
import { g as getRandomId, a as addUnitRpx } from "./uts/util.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, ref, watch, onMounted, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "e-chart"
  },
  __name: "e-chart",
  props: {
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
  },
  emits: ["ready"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const emit = __emit;
    const props = __props;
    const instance = getCurrentInstance();
    const echartObj = ref(null);
    const canvasId = getRandomId();
    const canvasStyle = computed(() => {
      return `width:${addUnitRpx(props.width)};height:${addUnitRpx(props.height)}`;
    });
    function onCanvasReady() {
      emit("ready");
    }
    function initAPP(option) {
      var _a2;
      let elem = null;
      let ctx = null;
      try {
        const el = uni.getElementById(canvasId);
        if (el != null) {
          elem = el;
        }
      } catch (_e) {
      }
      if (elem == null) {
        try {
          ctx = uni.createWebviewContext(canvasId);
        } catch (_e) {
        }
      }
      echartObj.value = new WebviewEchart(canvasId, ctx, elem);
      echartObj.value.init(props.theme);
      (_a2 = echartObj.value) === null || _a2 === void 0 ? null : _a2.setOption(option);
      setTimeout(() => {
        var _a3, _b;
        (_a3 = echartObj.value) === null || _a3 === void 0 ? null : _a3.init(props.theme);
        (_b = echartObj.value) === null || _b === void 0 ? null : _b.setOption(option);
      }, 120);
      return new UTSJSONObject({ echartObj: echartObj.value });
    }
    async function init(option) {
      return initAPP(option);
    }
    function getEchartObj() {
      return echartObj.value;
    }
    function setOption(option) {
      var _a2;
      (_a2 = echartObj.value) === null || _a2 === void 0 ? null : _a2.setOption(option);
    }
    function getOption() {
      return new Promise((resolve) => {
        echartObj.value.getOption(resolve);
      });
    }
    function getWidth() {
      return new Promise((resolve) => {
        echartObj.value.getWidth((e) => {
          resolve(e["width"]);
        });
      });
    }
    function getHeight() {
      return new Promise((resolve) => {
        echartObj.value.getHeight((e) => {
          resolve(e["height"]);
        });
      });
    }
    function resize() {
      var _a2;
      (_a2 = echartObj.value) === null || _a2 === void 0 ? null : _a2.resize();
    }
    function canvasToTempFilePath() {
      return new Promise((resolve, reject) => {
        var _a2;
        const fail = (e) => {
          uni.showModal(new UTSJSONObject({ title: "保存失败", content: UTS.JSON.stringify(e), showCancel: false }));
          reject(e);
        };
        (_a2 = echartObj.value) === null || _a2 === void 0 ? null : _a2.canvasToTempFilePath(new UTSJSONObject({
          success: (e) => {
            const base64 = e["base64"];
            const fileSystemManager = uni.getFileSystemManager();
            const filePath = `${uni.env.USER_DATA_PATH}/${Date.now()}.png`;
            fileSystemManager.writeFile({
              filePath,
              encoding: "base64",
              data: base64.replace("data:image/png;base64,", ""),
              success: (_res) => {
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
    }
    function showLoading(option) {
      var _a2;
      (_a2 = echartObj.value) === null || _a2 === void 0 ? null : _a2.showLoading(option);
    }
    function hideLoading() {
      var _a2;
      (_a2 = echartObj.value) === null || _a2 === void 0 ? null : _a2.hideLoading();
    }
    function onWebviewMsg(e) {
      var _a2;
      (_a2 = echartObj.value) === null || _a2 === void 0 ? null : _a2.onWebviewMsg(e);
    }
    function onWebviewError(e) {
      uni.__f__("error", "at uni_modules/e-chart/components/e-chart/e-chart.uvue:434", "onWebviewError:", e);
    }
    watch(() => {
      return props.width;
    }, () => {
      resize();
    });
    watch(() => {
      return props.height;
    }, () => {
      resize();
    });
    onMounted(() => {
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
    const __returned__ = { emit, props, instance, echartObj, canvasId, canvasStyle, onCanvasReady, initAPP, init, getEchartObj, setOption, getOption, getWidth, getHeight, resize, canvasToTempFilePath, showLoading, hideLoading, onWebviewMsg, onWebviewError };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const { normalizeStyle: _normalizeStyle, openBlock: _openBlock, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("web-view", {
    id: $setup.canvasId,
    style: _normalizeStyle($setup.canvasStyle),
    bounces: false,
    horizontalScrollBarAccess: false,
    verticalScrollBarAccess: false,
    "webview-styles": { progress: false },
    src: "/uni_modules/e-chart/static/app/webview.html",
    onLoad: $setup.onCanvasReady,
    onError: $setup.onWebviewError,
    onMessage: $setup.onWebviewMsg
  }, null, 44, ["id"]);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/e-chart/components/e-chart/e-chart.uvue"]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=e-chart.js.map
