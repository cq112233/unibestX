import { _ as __easycom_0 } from "../up-loading-icon/up-loading-icon.js";
import { c as createQrCells, g as getQrRenderCountWithQuietZone } from "./qrcode.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, toDisplayString: _toDisplayString, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, createSharedDataIf: _createSharedDataIf, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpQrcodeUpQrcode";
const { ref, computed, watch, onMounted, getCurrentInstance, nextTick } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-qrcode"
  },
  __dynamicSharedData: true,
  __hash: "a5a1bcca",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-qrcode/up-qrcode.uvue",
  __name: "up-qrcode",
  props: {
    cid: {
      type: String,
      default: ""
    },
    size: {
      type: [Number, String],
      default: 200
    },
    unit: {
      type: String,
      default: "px"
    },
    show: {
      type: Boolean,
      default: true
    },
    val: {
      type: String,
      default: ""
    },
    background: {
      type: String,
      default: "#ffffff"
    },
    foreground: {
      type: String,
      default: "#000000"
    },
    pdground: {
      type: String,
      default: "#000000"
    },
    icon: {
      type: String,
      default: ""
    },
    iconSize: {
      type: [Number, String],
      default: 40
    },
    lv: {
      type: [Number, String],
      default: 3
    },
    quietZone: {
      type: [Number, String],
      default: 0
    },
    onval: {
      type: Boolean,
      default: true
    },
    loadMake: {
      type: Boolean,
      default: true
    },
    usingComponents: {
      type: Boolean,
      default: true
    },
    showLoading: {
      type: Boolean,
      default: true
    },
    loadingText: {
      type: String,
      default: "生成中"
    },
    allowPreview: {
      type: Boolean,
      default: false
    },
    useRootHeightAndWidth: {
      type: Boolean,
      default: false
    }
  },
  emits: ["result", "longpressCallback", "preview", "error"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpQrcodeUpQrcodeSharedData", sharedDataClassId: 0 })));
    let qrcodeCounter = 0;
    function makeId(prefix) {
      return prefix + Date.now().toString() + "_" + (++qrcodeCounter).toString();
    }
    function isEmpty(value = null) {
      if (value == null) {
        return true;
      }
      const text = value.toString();
      return text.length == 0 || text == "undefined" || text == "null" || text == "{}" || text == "[]";
    }
    function getPixelRatio() {
      const info = uni.getSystemInfoSync();
      if (info.pixelRatio > 0) {
        return info.pixelRatio;
      }
      return 1;
    }
    const props = __props;
    const emit = __emit;
    const instance = getCurrentInstance();
    const cells = ref([]);
    const loading = ref(false);
    const result = ref("");
    const error = ref("");
    const canvasId = ref(props.cid != "" ? props.cid : makeId("up-qrcode-canvas-"));
    let canvasContext = null;
    let ctx = null;
    const sizeLocal = computed(() => {
      return parseFloat(props.size.toString());
    });
    const rootStyle = computed(() => {
      return new UTSJSONObject({
        width: props.useRootHeightAndWidth ? "100%" : sizeLocal.value.toString() + props.unit,
        height: props.useRootHeightAndWidth ? "100%" : sizeLocal.value.toString() + props.unit
      });
    });
    const matrixStyle = computed(() => {
      return new UTSJSONObject({
        width: sizeLocal.value.toString() + props.unit,
        height: sizeLocal.value.toString() + props.unit,
        backgroundColor: props.background
      });
    });
    const iconStyle = computed(() => {
      const iSize = parseFloat(props.iconSize.toString());
      const sz = iSize.toString() + props.unit;
      return new UTSJSONObject({
        width: sz,
        height: sz,
        left: ((sizeLocal.value - iSize) / 2).toString() + props.unit,
        top: ((sizeLocal.value - iSize) / 2).toString() + props.unit
      });
    });
    const canvasStyle = computed(() => {
      return new UTSJSONObject({
        width: sizeLocal.value.toString() + props.unit,
        height: sizeLocal.value.toString() + props.unit
      });
    });
    function initCanvas() {
      return new Promise((resolve, reject) => {
        if (canvasContext != null && ctx != null) {
          resolve();
          return null;
        }
        uni.createCanvasContextAsync({
          id: canvasId.value,
          component: instance === null || instance === void 0 ? null : instance.proxy,
          success: (context) => {
            canvasContext = context;
            const c2d = context.getContext("2d");
            if (c2d == null) {
              reject(new Error("Canvas context is not ready"));
              return null;
            }
            const canvas = c2d.canvas;
            const pixelRatio = getPixelRatio();
            canvas.width = sizeLocal.value * pixelRatio;
            canvas.height = sizeLocal.value * pixelRatio;
            c2d.scale(pixelRatio, pixelRatio);
            ctx = c2d;
            resolve();
          },
          fail: (err) => {
            reject(err);
          }
        });
      });
    }
    function drawQrToCanvas() {
      if (ctx == null)
        return null;
      const drawSize = sizeLocal.value;
      ctx.clearRect(0, 0, drawSize, drawSize);
      ctx.fillStyle = props.background;
      ctx.fillRect(0, 0, drawSize, drawSize);
      const count = getQrRenderCountWithQuietZone(props.val, parseFloat(props.lv.toString()), parseFloat(props.quietZone.toString()));
      for (let i = 0; i < cells.value.length; i++) {
        const cell = cells.value[i];
        if (!cell.getBoolean("dark", false)) {
          continue;
        }
        const color = cell.getString("color", props.foreground);
        const row = Math.floor(i / count);
        const col = i % count;
        const left = Math.floor(col * drawSize / count);
        const top_1 = Math.floor(row * drawSize / count);
        const right = Math.ceil((col + 1) * drawSize / count);
        const bottom = Math.ceil((row + 1) * drawSize / count);
        ctx.fillStyle = color;
        ctx.fillRect(left, top_1, right - left, bottom - top_1);
      }
      ctx.draw();
    }
    function renderCanvas() {
      if (error.value.length > 0 || cells.value.length == 0) {
        return Promise.resolve();
      }
      return initCanvas().then(() => {
        drawQrToCanvas();
      });
    }
    function makeCode() {
      if (isEmpty(props.val)) {
        error.value = "二维码内容不能为空";
        cells.value = [];
        emit("error", new UTSJSONObject({ message: error.value }));
        return null;
      }
      try {
        loading.value = true;
        error.value = "";
        cells.value = createQrCells(props.val, props.foreground, props.background, props.pdground, parseInt(props.lv.toString()), parseInt(props.quietZone.toString()));
        result.value = props.val;
        loading.value = false;
        nextTick(() => {
          renderCanvas();
        });
        emit("result", result.value);
      } catch (err) {
        loading.value = false;
        let msg = "";
        if (err != null && typeof err == "object") {
          const errObj = err;
          if (errObj["message"] != null) {
            msg = errObj["message"].toString();
          }
        }
        if (msg == "") {
          msg = `${err}`;
        }
        error.value = msg;
        cells.value = [];
        emit("error", new UTSJSONObject({ message: error.value }));
      }
    }
    function preview(e) {
      emit("preview", new UTSJSONObject({
        url: result.value
      }), e);
    }
    function emitTempFileSuccess(options, path) {
      const success = options["success"];
      if (success != null) {
        success(new UTSJSONObject({
          tempFilePath: path
        }));
      }
      const complete = options["complete"];
      if (complete != null) {
        complete(new UTSJSONObject({
          tempFilePath: path
        }));
      }
    }
    function emitTempFileFail(options, message) {
      const payload = new UTSJSONObject({
        errMsg: message
      });
      const fail = options["fail"];
      if (fail != null) {
        fail(payload);
      }
      const complete = options["complete"];
      if (complete != null) {
        complete(payload);
      }
    }
    function exportImage(options) {
      renderCanvas().then(() => {
        if (canvasContext == null) {
          emitTempFileFail(options, "Canvas is not ready");
          return null;
        }
        const path = canvasContext.toDataURL("image/png", 1);
        emitTempFileSuccess(options, path);
      }).catch((err = null) => {
        const message = err == null ? "Canvas init failed" : err.toString();
        emitTempFileFail(options, message);
      });
    }
    function toTempFilePath(options) {
      if (error.value.length > 0 || cells.value.length == 0) {
        emitTempFileFail(options, "up-qrcode content is not ready");
        return null;
      }
      exportImage(options);
    }
    function longpress() {
      toTempFilePath(new UTSJSONObject({
        success: (res) => {
          emit("longpressCallback", res["tempFilePath"]);
        },
        fail: (_) => {
          emit("longpressCallback", result.value);
        }
      }));
    }
    watch(() => {
      return props.val;
    }, () => {
      if (props.onval) {
        makeCode();
      }
    });
    watch(() => {
      return [props.size, props.background, props.foreground, props.pdground];
    }, () => {
      makeCode();
    });
    onMounted(() => {
      if (props.loadMake) {
        makeCode();
      }
    });
    __expose({
      makeCode,
      toTempFilePath
    });
    return () => {
      "raw js";
      const _component_canvas = _resolveComponent("canvas");
      const _component_up_loading_icon = __easycom_0;
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 12, rootStyle.value);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(error.value.length > 0));
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataStyle(__sharedData, 1, matrixStyle.value);
          _setSharedData(__sharedData, 2, _toDisplayString(error.value));
        });
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData, 9, matrixStyle.value);
        });
        const n5 = _createSharedDataComponentWithFallback(_component_canvas, "953ddf6e", {
          class: "up-qrcode__canvas",
          id: () => {
            return canvasId.value;
          },
          "canvas-id": () => {
            return canvasId.value;
          },
          style: () => {
            return canvasStyle.value;
          }
        });
        _setSharedData(__sharedData, 3, n5?.sharedData);
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 4, _toSharedDataBoolean(__props.icon.length > 0));
        }, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataAttr(__sharedData, 5, _toSharedDataString(__props.icon));
            _setSharedDataStyle(__sharedData, 6, iconStyle.value);
          });
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 7, _toSharedDataBoolean(__props.showLoading && loading.value));
        }, () => {
          const n11 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "953dba26", {
            vertical: "",
            text: () => {
              return __props.loadingText;
            },
            textSize: "14px"
          });
          _setSharedData(__sharedData, 8, n11?.sharedData);
        });
      }, 261);
      _setSharedDataEvent(__sharedData, 10, longpress);
      _setSharedDataEvent(__sharedData, 11, preview);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-qrcode.js.map
