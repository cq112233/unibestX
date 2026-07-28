import { _ as __easycom_1$1 } from "../up-loading-icon/up-loading-icon.js";
const { defineComponent, resolveDynamicComponent, openBlock, createElementBlock, normalizeStyle, createElementVNode, toDisplayString, createCommentVNode, createVNode } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { g as getQrRenderCountWithQuietZone, c as createQrCells } from "./qrcode.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
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
  const info = uni.getSystemInfoSync();
  if (info.pixelRatio > 0) {
    return info.pixelRatio;
  }
  return 1;
}
const _sfc_main = defineComponent({
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
      return this.sizeLocal / getQrRenderCountWithQuietZone(this.val, parseFloat(this.lv.toString()), parseFloat(this.quietZone.toString()));
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
        this.cells = createQrCells(this.val, this.foreground, this.background, this.pdground, parseInt(this.lv.toString()), parseInt(this.quietZone.toString()));
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
        uni.createCanvasContextAsync({
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
      const count = getQrRenderCountWithQuietZone(this.val, parseFloat(this.lv.toString()), parseFloat(this.quietZone.toString()));
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
const _style_0 = { "up-qrcode": { "": { "display": "flex", "position": "relative" } }, "up-qrcode__matrix": { "": { "position": "relative", "overflow": "hidden" } }, "up-qrcode__canvas": { "": { "position": "absolute", "left": 0, "top": 0 } }, "up-qrcode__icon": { "": { "position": "absolute", "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4, "backgroundColor": "#ffffff" } }, "up-qrcode__loading": { "": { "position": "absolute", "left": 0, "right": 0, "top": 0, "bottom": 0, "display": "flex", "alignItems": "center", "justifyContent": "center", "backgroundColor": "rgba(255,255,255,0.8)" } }, "up-qrcode__error": { "": { "display": "flex", "alignItems": "center", "justifyContent": "center", "backgroundColor": "#f8f8f8" } }, "up-qrcode__error-text": { "": { "color": "#fa3534", "fontSize": 14 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_loading_icon = resolveEasycom(resolveDynamicComponent("up-loading-icon"), __easycom_1$1);
  return openBlock(), createElementBlock(
    "view",
    {
      class: "up-qrcode",
      style: normalizeStyle($options.rootStyle),
      onLongpress: _cache[0] || (_cache[0] = (...args) => $options.longpress && $options.longpress(...args)),
      onClick: _cache[1] || (_cache[1] = (...args) => $options.preview && $options.preview(...args))
    },
    [
      $data.error.length > 0 ? (openBlock(), createElementBlock(
        "view",
        {
          key: 0,
          class: "up-qrcode__error",
          style: normalizeStyle($options.matrixStyle)
        },
        [
          createElementVNode(
            "text",
            { class: "up-qrcode__error-text" },
            toDisplayString($data.error),
            1
            /* TEXT */
          )
        ],
        4
        /* STYLE */
      )) : (openBlock(), createElementBlock(
        "view",
        {
          key: 1,
          class: "up-qrcode__matrix",
          style: normalizeStyle($options.matrixStyle)
        },
        [
          createElementVNode("canvas", {
            class: "up-qrcode__canvas",
            id: $data.canvasId,
            "canvas-id": $data.canvasId,
            style: normalizeStyle($options.canvasStyle)
          }, null, 12, ["id", "canvas-id"]),
          $props.icon.length > 0 ? (openBlock(), createElementBlock("image", {
            key: 0,
            class: "up-qrcode__icon",
            src: $props.icon,
            mode: "aspectFill",
            style: normalizeStyle($options.iconStyle)
          }, null, 12, ["src"])) : createCommentVNode("v-if", true),
          $props.showLoading && $data.loading ? (openBlock(), createElementBlock("view", {
            key: 1,
            class: "up-qrcode__loading"
          }, [
            createVNode(_component_up_loading_icon, {
              vertical: "",
              text: $props.loadingText,
              textSize: "14px"
            }, null, 8, ["text"])
          ])) : createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      ))
    ],
    36
    /* STYLE, NEED_HYDRATION */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-qrcode/up-qrcode.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-qrcode.js.map
