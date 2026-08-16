import { _ as __easycom_1$1 } from "../rice-button/rice-button.js";
import "../../libs/use/useCountDown/index.js";
import "../../libs/store/useConfig.js";
import { u as useNamespace } from "../../libs/use/useNamespace/index.js";
import "../../libs/use/usePopup/index.js";
import "../../libs/use/useRelation/useChildren.js";
import "../../libs/use/useRelation/useParent.js";
import "../../libs/use/useSafeArea/index.js";
import "../../libs/use/useTouch/index.js";
import { h as hasStrValue, a as addUnit, f as getRandomStr } from "../../libs/utils/basic.js";
import { S as SignaturePoint, a as SignatureCanvasSize } from "./type.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, useSlots: _useSlots, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot, createSharedDataIf: _createSharedDataIf, setSharedDataTemplateRef: _setSharedDataTemplateRef } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceSignatureRiceSignature";
const { computed, reactive, ref, nextTick, onUnmounted, onMounted } = globalThis.Vue;
class SignatureStroke extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          lineColor: { type: String, optional: false },
          lineWidth: { type: Number, optional: false },
          points: { type: UTS.UTSType.withGenerics(Array, ["Unknown"]), optional: false }
        };
      },
      name: "SignatureStroke"
    };
  }
  constructor(options, metadata = SignatureStroke.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.lineColor = this.__props__.lineColor;
    this.lineWidth = this.__props__.lineWidth;
    this.points = this.__props__.points;
    delete this.__props__;
  }
}
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-signature",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "7dc9c01f",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-signature/rice-signature.uvue",
  __name: "rice-signature",
  props: {
    type: { default: "png", type: String },
    width: { type: [Number, String] },
    height: { type: [Number, String] },
    disabled: { type: Boolean, default: false },
    tips: { type: String },
    tipsSize: { type: [String, Number] },
    tipsColor: { type: String },
    lineColor: { default: "#000", type: String },
    lineWidth: { default: 3, type: Number },
    bgColor: { type: String },
    contentBgColor: { type: String },
    clearButtonText: { default: "清空", type: String },
    confirmButtonText: { default: "确定", type: String },
    revokeButtonText: { default: "", type: String },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  },
  emits: ["start", "signing", "end", "submit"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceSignatureRiceSignatureSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("signature");
    const emit = __emit;
    const slots = _useSlots();
    const canvasId = "rice-signature-" + getRandomStr();
    const props = __props;
    const hasTips = computed(() => {
      return slots["tips"] != null || hasStrValue(props.tips);
    });
    const hasConfirm = computed(() => {
      return hasStrValue(props.confirmButtonText);
    });
    const hasClear = computed(() => {
      return hasStrValue(props.clearButtonText);
    });
    const hasRevoke = computed(() => {
      return hasStrValue(props.revokeButtonText);
    });
    const offset = reactive(new SignaturePoint({
      x: 0,
      y: 0
    }));
    const lastPoint = reactive(new SignaturePoint({
      x: 0,
      y: 0
    }));
    const renderingContext = ref(null);
    const hasDraw = ref(false);
    const strokes = ref([]);
    const currentStroke = ref(null);
    const getCanvasSize = () => {
      const width = renderingContext.value.canvas.width;
      const height = renderingContext.value.canvas.height;
      return new SignatureCanvasSize({
        width,
        height
      });
    };
    const setCanvasBgColor = () => {
      if (renderingContext.value != null && hasStrValue(props.bgColor)) {
        const ctx = renderingContext.value;
        ctx.fillStyle = props.bgColor;
        const size = getCanvasSize();
        ctx.fillRect(0, 0, size.width, size.height);
      }
    };
    const clearCanvas = () => {
      const ctx = renderingContext.value;
      if (ctx == null)
        return null;
      const size = getCanvasSize();
      ctx.clearRect(0, 0, size.width, size.height);
      setCanvasBgColor();
    };
    const drawStroke = (stroke) => {
      const ctx = renderingContext.value;
      if (ctx == null || stroke.points.length < 2)
        return null;
      ctx.beginPath();
      ctx.lineWidth = stroke.lineWidth;
      ctx.strokeStyle = stroke.lineColor;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      const firstPoint = stroke.points[0];
      ctx.moveTo(firstPoint.x, firstPoint.y);
      for (let i = 1; i < stroke.points.length; i++) {
        const point = stroke.points[i];
        ctx.lineTo(point.x, point.y);
      }
      ctx.stroke();
    };
    const redrawStrokes = () => {
      clearCanvas();
      for (let i = 0; i < strokes.value.length; i++) {
        drawStroke(strokes.value[i]);
      }
    };
    const initSize = async () => {
      const canvas = renderingContext.value.canvas;
      const dpr = uni.getWindowInfo().pixelRatio;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      renderingContext.value.scale(dpr, dpr);
      await nextTick();
      setCanvasBgColor();
    };
    const createCanvasContext = () => {
      const context = uni.getElementById(canvasId);
      renderingContext.value = context.getContext("2d");
      initSize();
    };
    const getPosition = (e) => {
      const touch = e.touches[0];
      return new SignaturePoint({
        x: touch.clientX - offset.x,
        y: touch.clientY - offset.y
      });
    };
    const onTouchstart = (e) => {
      if (renderingContext.value == null || props.disabled)
        return null;
      const ctx = renderingContext.value;
      const canvas = ctx.canvas;
      const rect = canvas.getBoundingClientRect();
      offset.x = rect.left;
      offset.y = rect.top;
      const point = getPosition(e);
      lastPoint.x = point.x;
      lastPoint.y = point.y;
      currentStroke.value = {
        lineColor: props.lineColor,
        lineWidth: props.lineWidth,
        points: [new SignaturePoint({
          x: point.x,
          y: point.y
        })]
      };
      ctx.beginPath();
      ctx.lineWidth = props.lineWidth;
      ctx.strokeStyle = props.lineColor;
      emit("start");
    };
    const onTouchmove = (e) => {
      var _a2;
      if (props.disabled)
        return null;
      e.preventDefault();
      if (renderingContext.value == null)
        return null;
      hasDraw.value = true;
      const point = getPosition(e);
      const x = point.x;
      const y = point.y;
      const ctx = renderingContext.value;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.moveTo(lastPoint.x, lastPoint.y);
      ctx.lineTo(x, y);
      ctx.stroke();
      (_a2 = currentStroke.value) === null || _a2 === void 0 ? null : _a2.points.push(new SignaturePoint({
        x,
        y
      }));
      lastPoint.x = x;
      lastPoint.y = y;
      emit("signing");
    };
    const onTouchend = () => {
      if (props.disabled)
        return null;
      if (currentStroke.value != null && currentStroke.value.points.length > 1) {
        strokes.value.push(currentStroke.value);
        hasDraw.value = true;
      }
      currentStroke.value = null;
      emit("end");
    };
    const clear = () => {
      if (renderingContext.value == null)
        return null;
      strokes.value = [];
      currentStroke.value = null;
      hasDraw.value = false;
      clearCanvas();
    };
    const revoke = () => {
      if (renderingContext.value == null || strokes.value.length == 0)
        return null;
      UTS.arrayPop(strokes.value);
      currentStroke.value = null;
      hasDraw.value = strokes.value.length > 0;
      redrawStrokes();
    };
    const done = () => {
      if (!hasDraw.value)
        return "";
      const ctx = renderingContext.value;
      if (ctx == null)
        return "";
      const canvas = ctx.canvas;
      if (props.type == "jpeg") {
        return canvas.toDataURL(`image/jpeg`, 0.8);
      }
      return canvas.toDataURL(`image/png`);
    };
    const submit = () => {
      const img = done();
      emit("submit", img);
    };
    const resize = async () => {
      const ctx = renderingContext.value;
      if (ctx == null)
        return Promise.resolve(null);
      await initSize();
      if (strokes.value.length > 0) {
        redrawStrokes();
      }
    };
    const signatureStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.width != null)
        css.set("width", addUnit(props.width));
      return css;
    });
    const wrapperStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (hasStrValue(props.contentBgColor) && !hasStrValue(props.bgColor))
        css.set("background-color", props.contentBgColor);
      if (props.height != null)
        css.set("height", addUnit(props.height));
      return css;
    });
    const tipsStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.tipsSize != null)
        css.set("font-size", addUnit(props.tipsSize));
      if (hasStrValue(props.tipsColor))
        css.set("color", props.tipsColor);
      return css;
    });
    const wrapperRef = ref(null);
    const resizeObserver = ref(null);
    const initResizeObserver = async () => {
      resizeObserver.value = new UniResizeObserver((entries) => {
        if (entries.length > 0 && entries[0].target == wrapperRef.value) {
          resize();
        }
      });
      await nextTick();
      if (wrapperRef.value != null) {
        resizeObserver.value.observe(wrapperRef.value);
      }
    };
    onUnmounted(() => {
      var _a2;
      (_a2 = resizeObserver.value) === null || _a2 === void 0 ? null : _a2.disconnect();
    });
    onMounted(() => {
      createCanvasContext();
      initResizeObserver();
    });
    __expose({
      revoke,
      clear,
      done,
      resize
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_canvas = _resolveComponent("canvas");
      const _component_rice_button = __easycom_1$1;
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 12, ["rice-signature", _unref(ns).theme()]);
        _setSharedDataStyle(__sharedData, 13, [_unref(signatureStyle), __props.customStyle]);
        _setSharedDataStyle(__sharedData, 14, _unref(wrapperStyle));
      });
      const n0 = _createSharedDataComponentWithFallback(_component_canvas, "0e5035aa", {
        class: "rice-signature__canvas",
        id: () => {
          return canvasId;
        },
        type: "2d",
        "disable-scroll": () => {
          return !__props.disabled;
        },
        onTouchstart: () => {
          return onTouchstart;
        },
        onTouchmove: () => {
          return onTouchmove;
        },
        onTouchend: () => {
          return onTouchend;
        },
        onTouchcancel: () => {
          return onTouchend;
        }
      });
      _setSharedData(__sharedData, 7, n0?.sharedData);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 8, _toSharedDataBoolean(_unref(hasTips)));
      }, () => {
        _createSharedDataSlot("tips", null, null, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataStyle(__sharedData, 9, _unref(tipsStyle));
            _setSharedData(__sharedData, 10, _toDisplayString(__props.tips));
          });
        });
      });
      _setSharedDataTemplateRef(__sharedData, 11, (n7) => {
        _setTemplateRef(n7, wrapperRef, null, "wrapperRef");
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(_unref(hasConfirm) || _unref(hasClear) || _unref(hasRevoke)));
      }, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 1, _toSharedDataBoolean(_unref(hasClear)));
        }, () => {
          const n12 = _createSharedDataComponentWithFallback(_component_rice_button, "0e50484f", {
            text: () => {
              return __props.clearButtonText;
            },
            size: "small",
            class: "rice-signature__footer__btn",
            onClick: () => {
              return clear;
            }
          });
          _setSharedData(__sharedData, 2, n12?.sharedData);
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 3, _toSharedDataBoolean(_unref(hasRevoke)));
        }, () => {
          const n15 = _createSharedDataComponentWithFallback(_component_rice_button, "0e504c6c", {
            type: "warning",
            text: () => {
              return __props.revokeButtonText;
            },
            size: "small",
            class: "rice-signature__footer__btn",
            onClick: () => {
              return revoke;
            }
          });
          _setSharedData(__sharedData, 4, n15?.sharedData);
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 5, _toSharedDataBoolean(_unref(hasConfirm)));
        }, () => {
          const n18 = _createSharedDataComponentWithFallback(_component_rice_button, "0e505350", {
            type: "primary",
            text: () => {
              return __props.confirmButtonText;
            },
            size: "small",
            class: "rice-signature__footer__btn",
            onClick: () => {
              return submit;
            }
          });
          _setSharedData(__sharedData, 6, n18?.sharedData);
        });
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=rice-signature.js.map
