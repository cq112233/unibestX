"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upQrcode_qrcode = require("./qrcode.js");
if (!Array) {
  const _easycom_up_loading_icon_1 = common_vendor.resolveComponent("up-loading-icon");
  _easycom_up_loading_icon_1();
}
const _easycom_up_loading_icon = () => "../up-loading-icon/up-loading-icon.js";
if (!Math) {
  _easycom_up_loading_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-qrcode"
}, { __name: "up-qrcode", props: {
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
}, emits: ["result", "longpressCallback", "preview", "error"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
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
    const info = common_vendor.index.getSystemInfoSync();
    if (info.pixelRatio > 0) {
      return info.pixelRatio;
    }
    return 1;
  }
  const props = __props;
  const emit = __emit;
  const instance = common_vendor.getCurrentInstance();
  const cells = common_vendor.ref([]);
  const loading = common_vendor.ref(false);
  const result = common_vendor.ref("");
  const error = common_vendor.ref("");
  const canvasId = common_vendor.ref(props.cid != "" ? props.cid : makeId("up-qrcode-canvas-"));
  let canvasContext = null;
  let ctx = null;
  const sizeLocal = common_vendor.computed(() => {
    return parseFloat(props.size.toString());
  });
  const rootStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      width: props.useRootHeightAndWidth ? "100%" : sizeLocal.value.toString() + props.unit,
      height: props.useRootHeightAndWidth ? "100%" : sizeLocal.value.toString() + props.unit
    });
  });
  const matrixStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      width: sizeLocal.value.toString() + props.unit,
      height: sizeLocal.value.toString() + props.unit,
      backgroundColor: props.background
    });
  });
  const iconStyle = common_vendor.computed(() => {
    const iSize = parseFloat(props.iconSize.toString());
    const sz = iSize.toString() + props.unit;
    return new common_vendor.UTSJSONObject({
      width: sz,
      height: sz,
      left: ((sizeLocal.value - iSize) / 2).toString() + props.unit,
      top: ((sizeLocal.value - iSize) / 2).toString() + props.unit
    });
  });
  const canvasStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
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
      common_vendor.index.createCanvasContextAsync({
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
    const count = uni_modules_uviewUltra_components_upQrcode_qrcode.getQrRenderCountWithQuietZone(props.val, parseFloat(props.lv.toString()), parseFloat(props.quietZone.toString()));
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
      emit("error", new common_vendor.UTSJSONObject({ message: error.value }));
      return null;
    }
    try {
      loading.value = true;
      error.value = "";
      cells.value = uni_modules_uviewUltra_components_upQrcode_qrcode.createQrCells(props.val, props.foreground, props.background, props.pdground, parseInt(props.lv.toString()), parseInt(props.quietZone.toString()));
      result.value = props.val;
      loading.value = false;
      common_vendor.nextTick$1(() => {
        renderCanvas();
      });
      emit("result", result.value);
    } catch (err) {
      loading.value = false;
      const errObj = err;
      const message = errObj["message"];
      error.value = message == null ? err.toString() : message.toString();
      cells.value = [];
      emit("error", new common_vendor.UTSJSONObject({ message: error.value }));
    }
  }
  function preview(e) {
    emit("preview", new common_vendor.UTSJSONObject({
      url: result.value
    }), e);
  }
  function emitTempFileSuccess(options, path) {
    const success = options["success"];
    if (success != null) {
      success(new common_vendor.UTSJSONObject({
        tempFilePath: path
      }));
    }
    const complete = options["complete"];
    if (complete != null) {
      complete(new common_vendor.UTSJSONObject({
        tempFilePath: path
      }));
    }
  }
  function emitTempFileFail(options, message) {
    const payload = new common_vendor.UTSJSONObject({
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
    toTempFilePath(new common_vendor.UTSJSONObject({
      success: (res) => {
        emit("longpressCallback", res["tempFilePath"]);
      },
      fail: (_) => {
        emit("longpressCallback", result.value);
      }
    }));
  }
  common_vendor.watch(() => {
    return props.val;
  }, () => {
    if (props.onval) {
      makeCode();
    }
  });
  common_vendor.watch(() => {
    return [props.size, props.background, props.foreground, props.pdground];
  }, () => {
    makeCode();
  });
  common_vendor.onMounted(() => {
    if (props.loadMake) {
      makeCode();
    }
  });
  __expose({
    makeCode,
    toTempFilePath
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: error.value.length > 0
    }, error.value.length > 0 ? {
      b: common_vendor.t(error.value),
      c: common_vendor.s(matrixStyle.value)
    } : common_vendor.e({
      d: common_vendor.sei(canvasId.value, "canvas"),
      e: canvasId.value,
      f: common_vendor.s(canvasStyle.value),
      g: __props.icon.length > 0
    }, __props.icon.length > 0 ? {
      h: __props.icon,
      i: common_vendor.s(iconStyle.value)
    } : {}, {
      j: __props.showLoading && loading.value
    }, __props.showLoading && loading.value ? {
      k: common_vendor.p({
        vertical: true,
        text: __props.loadingText,
        textSize: "14px",
        class: "data-v-d075c714"
      })
    } : {}, {
      l: common_vendor.s(matrixStyle.value)
    }), {
      m: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      n: common_vendor.s(rootStyle.value),
      o: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      p: common_vendor.o(longpress, "99"),
      q: common_vendor.o(preview, "bf"),
      r: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d075c714"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-qrcode/up-qrcode.js.map
