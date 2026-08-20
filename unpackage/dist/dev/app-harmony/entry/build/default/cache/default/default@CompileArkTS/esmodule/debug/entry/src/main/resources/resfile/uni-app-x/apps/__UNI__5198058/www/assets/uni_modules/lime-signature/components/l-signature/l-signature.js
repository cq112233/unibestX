import { S as Signature } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-signature/components/l-signature/signature&";
import { a as LimeSignatureOptions, b as LimeSignatureToFileSuccess } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-signature/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, ref, onMounted, nextTick, watchEffect, onUnmounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
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
    const drawableStyle = computed(() => {
      let style = "";
      if (props.backgroundColor != "") {
        style += `background-color: ${props.backgroundColor};`;
      }
      if (props.styles != "") {
        style += props.styles;
      }
      return style;
    });
    const signatureRef = ref(null);
    const signatureCanvasRef = ref(null);
    let signatureLandscapeRef = ref(null);
    let landscapeStyle = ref(/* @__PURE__ */ new Map());
    let landscapeImageStyle = ref(/* @__PURE__ */ new Map());
    let isCanvasEmpty = true;
    let signature = null;
    let url = ref("");
    const checkAndEmitEmptyStatus = () => {
      var _a2;
      const isEmpty = (_a2 = signature === null || signature === void 0 ? null : signature.isEmpty) !== null && _a2 !== void 0 ? _a2 : true;
      if (isEmpty != isCanvasEmpty) {
        isCanvasEmpty = isEmpty;
        emit("change", isCanvasEmpty);
      }
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
      (_a2 = options.format) !== null && _a2 !== void 0 ? _a2 : "png";
      const image = signatureCanvasRef.value.toDataURL();
      success === null || success === void 0 ? null : success(new LimeSignatureToFileSuccess({
        tempFilePath: image,
        isEmpty: (_b = signature === null || signature === void 0 ? null : signature.isEmpty) !== null && _b !== void 0 ? _b : false
      }));
    };
    __expose({
      clear,
      redo,
      undo,
      canvasToTempFilePath
    });
    onMounted(() => {
      nextTick(() => {
        setTimeout(() => {
          var _a2, _b;
          const width = (_a2 = signatureRef.value) === null || _a2 === void 0 ? null : _a2.offsetWidth;
          const height = (_b = signatureRef.value) === null || _b === void 0 ? null : _b.offsetHeight;
          landscapeStyle.value.set("width", `${height}px`);
          landscapeStyle.value.set("height", `${width}px`);
          landscapeImageStyle.value.set("width", `${width}px`);
          landscapeImageStyle.value.set("height", `${height}px`);
          landscapeImageStyle.value.set("transform", `rotate(-90deg) translateX(-${width}px)`);
          signature = new Signature(signatureCanvasRef.value);
          watchEffect(() => {
            const options = new LimeSignatureOptions({
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
            });
            signature === null || signature === void 0 ? null : signature.setOption(options);
            signature === null || signature === void 0 ? null : signature.onChange((_isEmpty) => {
              checkAndEmitEmptyStatus();
            });
          });
        }, 300);
      });
    });
    onUnmounted(() => {
    });
    const __returned__ = { emit, props, drawableStyle, signatureRef, signatureCanvasRef, get signatureLandscapeRef() {
      return signatureLandscapeRef;
    }, set signatureLandscapeRef(v) {
      signatureLandscapeRef = v;
    }, get landscapeStyle() {
      return landscapeStyle;
    }, set landscapeStyle(v) {
      landscapeStyle = v;
    }, get landscapeImageStyle() {
      return landscapeImageStyle;
    }, set landscapeImageStyle(v) {
      landscapeImageStyle = v;
    }, get isCanvasEmpty() {
      return isCanvasEmpty;
    }, set isCanvasEmpty(v) {
      isCanvasEmpty = v;
    }, get signature() {
      return signature;
    }, set signature(v = null) {
      signature = v;
    }, get url() {
      return url;
    }, set url(v) {
      url = v;
    }, checkAndEmitEmptyStatus, clear, redo, undo, canvasToTempFilePath };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "l-signature": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "l-signature__canvas": { "": { "width": "100%", "height": "100%" } }, "l-signature-landscape": { "": { "position": "absolute", "pointerEvents": "none", "overflow": "visible", "left": "99.9%" } }, "l-signature-image": { "": { "transformOrigin": "0% 0%" } } };
const { createElementVNode: _createElementVNode, normalizeStyle: _normalizeStyle, openBlock: _openBlock, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: "l-signature",
      ref: "signatureRef",
      style: _normalizeStyle([$setup.drawableStyle])
    },
    [
      _createElementVNode(
        "canvas",
        {
          ref: "signatureCanvasRef",
          class: "l-signature__canvas"
        },
        null,
        512
        /* NEED_PATCH */
      )
    ],
    4
    /* STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/lime-signature/components/l-signature/l-signature.uvue"]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=l-signature.js.map
