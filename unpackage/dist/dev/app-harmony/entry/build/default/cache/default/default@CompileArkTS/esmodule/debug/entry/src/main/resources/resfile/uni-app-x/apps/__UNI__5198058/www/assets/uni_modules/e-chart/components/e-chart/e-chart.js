import { W as WebviewEchart } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/e-chart/components/e-chart/uts/WebviewEchart&";
import { g as getRandomId, a as addUnitRpx } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/e-chart/components/e-chart/uts/util&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, unref: _unref, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData } = globalThis.Vue;
const __className = "GenUniModulesEChartComponentsEChartEChart";
const { computed, ref, watch, onMounted, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "e-chart"
  },
  __dynamicSharedData: true,
  __hash: "6604b9e4",
  __className,
  __filename: "uni_modules/e-chart/components/e-chart/e-chart.uvue",
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
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesEChartComponentsEChartEChartSharedData", sharedDataClassId: 0 })));
    const emit = __emit;
    const props = __props;
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
      const ctx = uni.createWebviewContext(canvasId);
      if (ctx == null) {
        uni.__f__("error", "at uni_modules/e-chart/components/e-chart/e-chart.uvue:177", "初始化echart的webview失败");
        return null;
      }
      echartObj.value = new WebviewEchart(ctx);
      echartObj.value.init(props.theme);
      (_a2 = echartObj.value) === null || _a2 === void 0 ? null : _a2.setOption(option);
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
      uni.__f__("error", "at uni_modules/e-chart/components/e-chart/e-chart.uvue:416", "onWebviewError:", e);
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
    return () => {
      "raw js";
      const _component_web_view = _resolveComponent("web-view");
      const n0 = _createSharedDataComponentWithFallback(
        _component_web_view,
        "8080c770",
        {
          id: () => {
            return _unref(canvasId);
          },
          style: () => {
            return canvasStyle.value;
          },
          bounces: false,
          horizontalScrollBarAccess: false,
          verticalScrollBarAccess: false,
          "webview-styles": { progress: false },
          src: "/uni_modules/e-chart/static/app/webview.html",
          onLoad: () => {
            return onCanvasReady;
          },
          onError: () => {
            return onWebviewError;
          },
          onMessage: () => {
            return onWebviewMsg;
          }
        },
        null,
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n0?.sharedData);
      return __sharedData;
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=e-chart.js.map
