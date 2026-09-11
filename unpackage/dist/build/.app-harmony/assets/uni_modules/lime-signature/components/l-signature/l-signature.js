import { S as Signature } from "./signature.js";
import { a as LimeSignatureOptions, b as LimeSignatureToFileSuccess } from "../../index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedDataStyle: _setSharedDataStyle, unref: _unref, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, setSharedDataTemplateRef: _setSharedDataTemplateRef } = globalThis.Vue;
const __className = "GenUniModulesLimeSignatureComponentsLSignatureLSignature";
const { computed, ref, onMounted, nextTick, watchEffect, onUnmounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "uni_modules/lime-signature/components/l-signature/l-signature.uvue",
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
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesLimeSignatureComponentsLSignatureLSignatureSharedData", sharedDataClassId: 0 })));
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
    ref(null);
    let landscapeStyle = ref(/* @__PURE__ */ new Map());
    let landscapeImageStyle = ref(/* @__PURE__ */ new Map());
    const getNativeElement = () => {
      if (signatureRef.value != null) {
        return signatureRef.value;
      }
      try {
        const el = uni.getElementById("l-signature-native");
        if (el != null) {
          return el;
        }
      } catch (_e) {
      }
      return null;
    };
    let isCanvasEmpty = true;
    let signature = null;
    ref("");
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
          const targetEl = getNativeElement();
          const rect = targetEl === null || targetEl === void 0 ? null : targetEl.getBoundingClientRect();
          const width = (_a2 = rect === null || rect === void 0 ? null : rect.width) !== null && _a2 !== void 0 ? _a2 : 0;
          const height = (_b = rect === null || rect === void 0 ? null : rect.height) !== null && _b !== void 0 ? _b : 0;
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
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_canvas = _resolveComponent("canvas");
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 3, _unref(drawableStyle));
      });
      const n0 = _createSharedDataComponentWithFallback(_component_canvas, "06234d8a", { class: "l-signature__canvas" });
      _setSharedData(__sharedData, 0, n0?.sharedData);
      _setSharedDataTemplateRef(__sharedData, 1, (n02) => {
        _setTemplateRef(n02, signatureCanvasRef, null, "signatureCanvasRef");
      });
      _setSharedDataTemplateRef(__sharedData, 2, (n1) => {
        _setTemplateRef(n1, signatureRef, null, "signatureRef");
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  __easycom_0 as _
};
