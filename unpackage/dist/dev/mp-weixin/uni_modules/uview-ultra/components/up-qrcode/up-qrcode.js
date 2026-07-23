"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upQrcode_qrcode = require("./qrcode.js");
function makeId(prefix) {
  return prefix + Date.now().toString();
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
const _sfc_main = common_vendor.defineComponent({
  name: "up-qrcode",
  props: {
    cid: {
      type: String,
      default() {
        return makeId("up-qrcode-");
      }
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
  data() {
    return {
      rootId: makeId("rootId-"),
      cells: [],
      loading: false,
      result: "",
      error: "",
      canvasId: makeId("up-qrcode-canvas-"),
      canvasContext: null,
      ctx: null
    };
  },
  computed: {
    sizeLocal() {
      return parseFloat(this.size.toString());
    },
    rootStyle() {
      return new UTSJSONObject({
        width: this.useRootHeightAndWidth ? "100%" : this.sizeLocal.toString() + this.unit,
        height: this.useRootHeightAndWidth ? "100%" : this.sizeLocal.toString() + this.unit
      });
    },
    matrixStyle() {
      return new UTSJSONObject({
        width: this.sizeLocal.toString() + this.unit,
        height: this.sizeLocal.toString() + this.unit,
        backgroundColor: this.background
      });
    },
    iconStyle() {
      const iSize = parseFloat(this.iconSize.toString());
      const size = iSize.toString() + this.unit;
      return new UTSJSONObject({
        width: size,
        height: size,
        left: ((this.sizeLocal - iSize) / 2).toString() + this.unit,
        top: ((this.sizeLocal - iSize) / 2).toString() + this.unit
      });
    },
    cellSize() {
      return this.sizeLocal / uni_modules_uviewUltra_components_upQrcode_qrcode.getQrRenderCountWithQuietZone(this.val, parseFloat(this.lv.toString()), parseFloat(this.quietZone.toString()));
    },
    canvasStyle() {
      return new UTSJSONObject({
        width: this.sizeLocal.toString() + this.unit,
        height: this.sizeLocal.toString() + this.unit
      });
    }
  },
  watch: {
    val() {
      if (this.onval) {
        this.makeCode();
      }
    },
    size(n = null) {
      this.makeCode();
    },
    background(n = null) {
      this.makeCode();
    },
    foreground(n = null) {
      this.makeCode();
    },
    pdground(n = null) {
      this.makeCode();
    }
  },
  mounted() {
    if (this.loadMake) {
      this.makeCode();
    }
  },
  methods: {
    makeCode() {
      if (isEmpty(this.val)) {
        this.error = "二维码内容不能为空";
        this.cells = [];
        this.$emit("error", new UTSJSONObject({ message: this.error }));
        return null;
      }
      try {
        this.loading = true;
        this.error = "";
        this.cells = uni_modules_uviewUltra_components_upQrcode_qrcode.createQrCells(this.val, this.foreground, this.background, this.pdground, parseInt(this.lv.toString()), parseInt(this.quietZone.toString()));
        this.result = this.val;
        this.loading = false;
        this.$nextTick(() => {
          this.renderCanvas();
        });
        this.$emit("result", this.result);
      } catch (error) {
        this.loading = false;
        const err = error;
        const message = err["message"];
        this.error = message == null ? error.toString() : message.toString();
        this.cells = [];
        this.$emit("error", new UTSJSONObject({ message: this.error }));
      }
    },
    _makeCode() {
      this.makeCode();
    },
    _clearCode() {
      this.cells = [];
      this.result = "";
    },
    preview(e) {
      this.$emit("preview", new UTSJSONObject({
        url: this.result
      }), e);
    },
    longpress() {
      this.toTempFilePath(new UTSJSONObject({
        success: (res) => {
          this.$emit("longpressCallback", res["tempFilePath"]);
        },
        fail: (_) => {
          this.$emit("longpressCallback", this.result);
        }
      }));
    },
    toTempFilePath(options) {
      if (this.error.length > 0 || this.cells.length == 0) {
        this.emitTempFileFail(options, "up-qrcode content is not ready");
        return null;
      }
      this.exportImage(options);
    },
    emitTempFileSuccess(options, path) {
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
    },
    emitTempFileFail(options, message) {
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
    },
    exportImage(options) {
      this.renderCanvas().then(() => {
        const canvas = this.canvasContext;
        if (canvas == null) {
          this.emitTempFileFail(options, "Canvas is not ready");
          return null;
        }
        const path = canvas.toDataURL("image/png", 1);
        this.emitTempFileSuccess(options, path);
      }).catch((error = null) => {
        const message = error == null ? "Canvas init failed" : error.toString();
        this.emitTempFileFail(options, message);
      });
    },
    renderCanvas() {
      if (this.error.length > 0 || this.cells.length == 0) {
        return Promise.resolve();
      }
      return this.initCanvas().then(() => {
        this.drawQrToCanvas();
      });
    },
    initCanvas() {
      return new Promise((resolve, reject) => {
        if (this.canvasContext != null && this.ctx != null) {
          resolve();
          return null;
        }
        common_vendor.index.createCanvasContextAsync({
          id: this.canvasId.toString(),
          component: this,
          success: (context) => {
            this.canvasContext = context;
            const ctx = context.getContext("2d");
            if (ctx == null) {
              reject(new Error("Canvas context is not ready"));
              return null;
            }
            const canvas = ctx.canvas;
            const pixelRatio = getPixelRatio();
            canvas.width = this.sizeLocal * pixelRatio;
            canvas.height = this.sizeLocal * pixelRatio;
            ctx.scale(pixelRatio, pixelRatio);
            this.ctx = ctx;
            resolve();
          },
          fail: (error) => {
            reject(error);
          }
        });
      });
    },
    drawQrToCanvas() {
      const context = this.ctx;
      if (context == null) {
        return null;
      }
      const drawSize = this.sizeLocal;
      context.clearRect(0, 0, drawSize, drawSize);
      context.fillStyle = this.background;
      context.fillRect(0, 0, drawSize, drawSize);
      const count = uni_modules_uviewUltra_components_upQrcode_qrcode.getQrRenderCountWithQuietZone(this.val, parseFloat(this.lv.toString()), parseFloat(this.quietZone.toString()));
      for (let i = 0; i < this.cells.length; i++) {
        const cell = this.cells[i];
        if (!cell.getBoolean("dark", false)) {
          continue;
        }
        const color = cell.getString("color", this.foreground);
        const row = Math.floor(i / count);
        const col = i % count;
        const left = Math.floor(col * drawSize / count);
        const top_1 = Math.floor(row * drawSize / count);
        const right = Math.ceil((col + 1) * drawSize / count);
        const bottom = Math.ceil((row + 1) * drawSize / count);
        context.fillStyle = color;
        context.fillRect(left, top_1, right - left, bottom - top_1);
      }
      context.draw();
    }
  }
});
if (!Array) {
  const _easycom_up_loading_icon2 = common_vendor.resolveComponent("up-loading-icon");
  _easycom_up_loading_icon2();
}
const _easycom_up_loading_icon = () => "../up-loading-icon/up-loading-icon.js";
if (!Math) {
  _easycom_up_loading_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: $data.error.length > 0
  }, $data.error.length > 0 ? {
    b: common_vendor.t($data.error),
    c: common_vendor.s($options.matrixStyle)
  } : common_vendor.e({
    d: common_vendor.sei($data.canvasId, "canvas"),
    e: $data.canvasId,
    f: common_vendor.s($options.canvasStyle),
    g: $props.icon.length > 0
  }, $props.icon.length > 0 ? {
    h: $props.icon,
    i: common_vendor.s($options.iconStyle)
  } : {}, {
    j: $props.showLoading && $data.loading
  }, $props.showLoading && $data.loading ? {
    k: common_vendor.p({
      vertical: true,
      text: $props.loadingText,
      textSize: "14px",
      class: "data-v-d075c714"
    })
  } : {}, {
    l: common_vendor.s($options.matrixStyle)
  }), {
    m: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    n: common_vendor.s($options.rootStyle),
    o: common_vendor.s({
      "--status-bar-height": `${_ctx.u_s_b_h}px`,
      "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
    }),
    p: common_vendor.o((...args) => $options.longpress && $options.longpress(...args), "74"),
    q: common_vendor.o((...args) => $options.preview && $options.preview(...args), "1c"),
    r: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d075c714"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-qrcode/up-qrcode.js.map
