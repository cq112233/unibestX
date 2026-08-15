"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_limeSignature_components_lSignature_signature = require("./signature.js");
const uni_modules_limeSignature_components_lSignature_utils = require("./utils.js");
const uni_modules_limeSignature_index = require("../../index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "l-signature",
  props: {
    styles: {
      type: String,
      default: ""
    },
    penColor: {
      type: String,
      default: "black"
    },
    penSize: {
      type: Number,
      default: 2
    },
    backgroundColor: {
      type: String,
      default: ""
    },
    openSmooth: {
      type: Boolean,
      default: false
    },
    minLineWidth: {
      type: Number,
      default: 2
    },
    maxLineWidth: {
      type: Number,
      default: 6
    },
    minSpeed: {
      type: Number,
      default: 1.5
    },
    maxWidthDiffRate: {
      type: Number,
      default: 20
    },
    maxHistoryLength: {
      type: Number,
      default: 20
    },
    disableScroll: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    landscape: {
      type: Boolean,
      default: false
    }
  },
  emits: ["change"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const emit = __emit;
    const props = __props;
    const drawableStyle = common_vendor.computed(() => {
      let style = "";
      if (props.backgroundColor != "") {
        style += `background-color: ${props.backgroundColor};`;
      }
      if (props.styles != "") {
        style += props.styles;
      }
      return style;
    });
    const signatureRef = common_vendor.ref(null);
    common_vendor.ref(null);
    common_vendor.ref(null);
    common_vendor.ref(/* @__PURE__ */ new Map());
    common_vendor.ref(/* @__PURE__ */ new Map());
    let isCanvasEmpty = true;
    let signature = null;
    common_vendor.ref("");
    const checkAndEmitEmptyStatus = () => {
      var _a2;
      const isEmpty = (_a2 = signature === null || signature === void 0 ? null : signature.isEmpty()) !== null && _a2 !== void 0 ? _a2 : true;
      if (isEmpty != isCanvasEmpty) {
        isCanvasEmpty = isEmpty;
        emit("change", isCanvasEmpty);
      }
    };
    let canvas = null;
    let rect = null;
    const getTouch = (event) => {
      var _a2, _b;
      const touch = event.touches.length ? event.touches[0] : event.changedTouches[0];
      return new common_vendor.UTSJSONObject({
        points: [
          new common_vendor.UTSJSONObject({
            // @ts-ignore
            x: (_a2 = touch.clientX - (rect === null || rect === void 0 ? null : rect.left)) !== null && _a2 !== void 0 ? _a2 : 0,
            // @ts-ignore
            y: (_b = touch.clientY - (rect === null || rect === void 0 ? null : rect.top)) !== null && _b !== void 0 ? _b : 0
          })
        ]
      });
    };
    let touchstart = (e) => {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        rect = yield uni_modules_limeSignature_components_lSignature_utils.getRect(".l-signature", new common_vendor.UTSJSONObject({ context: instance }));
        signature.canvas.emit("touchstart", getTouch(e));
      });
    };
    let touchmove = (e) => {
      signature.canvas.emit("touchmove", getTouch(e));
    };
    let touchend = (e) => {
      signature.canvas.emit("touchend", getTouch(e));
      setTimeout(() => {
        checkAndEmitEmptyStatus();
      }, 0);
    };
    const clear = () => {
      signature === null || signature === void 0 ? null : signature.clear();
      checkAndEmitEmptyStatus();
    };
    const redo = () => {
      signature === null || signature === void 0 ? null : signature.redo();
      checkAndEmitEmptyStatus();
    };
    const undo = () => {
      signature === null || signature === void 0 ? null : signature.undo();
      checkAndEmitEmptyStatus();
    };
    const canvasToTempFilePath = (options) => {
      var _a2, _b;
      const success = options.success;
      options.fail;
      options.complete;
      const format = (_a2 = options.format) !== null && _a2 !== void 0 ? _a2 : "png";
      const backgroundColor = props.backgroundColor, backgroundImage = props.backgroundImage, landscape = props.landscape, boundingBox = props.boundingBox;
      const _c = options.quality, quality = _c == void 0 ? 1 : _c;
      const flag = landscape || backgroundColor || boundingBox;
      const type = `image/${format}`.replace(/jpg/, "jpeg");
      const image = canvas === null || canvas === void 0 ? null : canvas.toDataURL(!flag && type, !flag && quality);
      if (flag) {
        const offCanvas = common_vendor.index.createOffscreenCanvas(new common_vendor.UTSJSONObject({ type: "2d" }));
        const pixelRatio = signature === null || signature === void 0 ? null : signature.canvas.get("pixelRatio");
        let width = signature === null || signature === void 0 ? null : signature.canvas.get("width");
        let height = signature === null || signature === void 0 ? null : signature.canvas.get("height");
        let x = 0;
        let y = 0;
        const next = () => {
          const size = [width, height];
          if (landscape) {
            size.reverse();
          }
          offCanvas.width = size[0] * pixelRatio;
          offCanvas.height = size[1] * pixelRatio;
          const param = [x, y, width, height, 0, 0, width, height].map((item = null) => {
            return item * pixelRatio;
          });
          const context = offCanvas.getContext("2d");
          if (landscape) {
            context.translate(0, width * pixelRatio);
            context.rotate(-Math.PI / 2);
          }
          if (backgroundColor) {
            context.fillStyle = backgroundColor;
            context.fillRect(0, 0, width * pixelRatio, height * pixelRatio);
          }
          const drawImage = () => {
            const img = offCanvas.createImage();
            img.onload = () => {
              var _a3;
              context.drawImage(img, ...param);
              success === null || success === void 0 ? null : success(new uni_modules_limeSignature_index.LimeSignatureToFileSuccess({
                tempFilePath: offCanvas.toDataURL(type, quality),
                // @ts-ignore
                isEmpty: (_a3 = signature === null || signature === void 0 ? null : signature.isEmpty()) !== null && _a3 !== void 0 ? _a3 : false
              }));
            };
            img.onerror = () => {
              var _a3;
              success === null || success === void 0 ? null : success(new uni_modules_limeSignature_index.LimeSignatureToFileSuccess({
                tempFilePath: image,
                // @ts-ignore
                isEmpty: (_a3 = signature === null || signature === void 0 ? null : signature.isEmpty()) !== null && _a3 !== void 0 ? _a3 : false
              }));
            };
            img.src = image;
          };
          if (backgroundImage) {
            const img = new Image();
            img.onload = () => {
              context.drawImage(img, ...param);
              drawImage();
            };
            img.src = backgroundImage;
          }
          if (!backgroundImage) {
            drawImage();
          }
        };
        if (boundingBox) {
          const res = signature === null || signature === void 0 ? null : signature.getContentBoundingBox();
          width = res.width;
          height = res.height;
          x = res.startX;
          y = res.startY;
          next();
        } else {
          next();
        }
      } else {
        success === null || success === void 0 ? null : success(new uni_modules_limeSignature_index.LimeSignatureToFileSuccess({
          tempFilePath: image,
          // @ts-ignore
          isEmpty: (_b = signature === null || signature === void 0 ? null : signature.isEmpty()) !== null && _b !== void 0 ? _b : false
        }));
      }
    };
    __expose({
      clear,
      redo,
      undo,
      canvasToTempFilePath
    });
    const instance = common_vendor.getCurrentInstance().proxy;
    common_vendor.index.createCanvasContextAsync({
      id: "l-signature",
      component: instance,
      success: (context) => {
        var _a2;
        const canvasContext = context.getContext("2d");
        canvas = canvasContext.canvas;
        const dpr = (_a2 = common_vendor.index.getDeviceInfo().devicePixelRatio) !== null && _a2 !== void 0 ? _a2 : 1;
        canvas.width = canvas.offsetWidth * dpr;
        canvas.height = canvas.offsetHeight * dpr;
        canvasContext.scale(dpr, dpr);
        signature = new uni_modules_limeSignature_components_lSignature_signature.W(new common_vendor.UTSJSONObject({
          // @ts-ignore
          context: canvasContext,
          width: canvas.offsetWidth,
          height: canvas.offsetHeight,
          canvas: context,
          pixelRatio: 1
        }));
        common_vendor.watchEffect(() => {
          const options = new uni_modules_limeSignature_index.LimeSignatureOptions(
            {
              penColor: props.penColor,
              openSmooth: props.openSmooth,
              disableScroll: props.disableScroll,
              disabled: props.disabled,
              penSize: props.penSize,
              minLineWidth: props.minLineWidth,
              maxLineWidth: props.maxLineWidth,
              minSpeed: props.minSpeed,
              maxWidthDiffRate: props.maxWidthDiffRate,
              maxHistoryLength: props.maxHistoryLength
            }
            // @ts-ignore
          );
          signature === null || signature === void 0 ? null : signature.pen.setOption(options);
        });
      }
    });
    common_vendor.onMounted(() => {
      common_vendor.nextTick$1(() => {
        setTimeout(() => {
          var _a2, _b;
          (_a2 = signatureRef.value) === null || _a2 === void 0 ? null : _a2.offsetWidth;
          (_b = signatureRef.value) === null || _b === void 0 ? null : _b.offsetHeight;
        }, 300);
      });
    });
    common_vendor.onUnmounted(() => {
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.sei("l-signature", "canvas"),
        b: common_vendor.o((...args) => {
          return common_vendor.unref(touchstart) && common_vendor.unref(touchstart)(...args);
        }, "f0"),
        c: common_vendor.o((...args) => {
          return common_vendor.unref(touchmove) && common_vendor.unref(touchmove)(...args);
        }, "35"),
        d: common_vendor.o((...args) => {
          return common_vendor.unref(touchend) && common_vendor.unref(touchend)(...args);
        }, "52"),
        e: common_vendor.sei(common_vendor.gei(_ctx, "", "r0-55056e42"), "view", signatureRef, {
          "k": "signatureRef"
        }),
        f: common_vendor.s(common_vendor.unref(drawableStyle)),
        g: common_vendor.s({
          "--status-bar-height": `${_ctx.u_s_b_h}px`,
          "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
        }),
        h: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/lime-signature/components/l-signature/l-signature.js.map
