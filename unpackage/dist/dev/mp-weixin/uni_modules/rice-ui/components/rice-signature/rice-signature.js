"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/use/useCountDown/index.js");
require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
const uni_modules_riceUi_libs_utils_debug = require("../../libs/utils/debug.js");
const uni_modules_riceUi_components_riceSignature_type = require("./type.js");
if (!Array) {
  const _easycom_rice_button_1 = common_vendor.resolveComponent("rice-button");
  _easycom_rice_button_1();
}
const _easycom_rice_button = () => "../rice-button/rice-button.js";
if (!Math) {
  _easycom_rice_button();
}
class SignatureSnapshot extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          imageData: { type: "Unknown", optional: false },
          width: { type: Number, optional: false },
          height: { type: Number, optional: false },
          hasDraw: { type: Boolean, optional: false }
        };
      },
      name: "SignatureSnapshot"
    };
  }
  constructor(options, metadata = SignatureSnapshot.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.imageData = this.__props__.imageData;
    this.width = this.__props__.width;
    this.height = this.__props__.height;
    this.hasDraw = this.__props__.hasDraw;
    delete this.__props__;
  }
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-signature",
  styleIsolation: "app-and-page"
}, { __name: "rice-signature", props: {
  type: { default: "png" },
  width: {},
  height: {},
  disabled: { type: Boolean, default: false },
  tips: {},
  tipsSize: {},
  tipsColor: {},
  lineColor: { default: "#000" },
  lineWidth: { default: 3 },
  bgColor: {},
  contentBgColor: {},
  clearButtonText: { default: "清空" },
  confirmButtonText: { default: "确定" },
  revokeButtonText: { default: "" },
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}, emits: ["start", "signing", "end", "submit"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("signature");
  const emit = __emit;
  const slots = common_vendor.useSlots();
  const canvasId = "rice-signature-" + uni_modules_riceUi_libs_utils_basic.getRandomStr();
  const props = __props;
  const hasTips = common_vendor.computed(() => {
    return slots["tips"] != null || uni_modules_riceUi_libs_utils_basic.hasStrValue(props.tips);
  });
  const hasConfirm = common_vendor.computed(() => {
    return uni_modules_riceUi_libs_utils_basic.hasStrValue(props.confirmButtonText);
  });
  const hasClear = common_vendor.computed(() => {
    return uni_modules_riceUi_libs_utils_basic.hasStrValue(props.clearButtonText);
  });
  const hasRevoke = common_vendor.computed(() => {
    return uni_modules_riceUi_libs_utils_basic.hasStrValue(props.revokeButtonText);
  });
  const lastPoint = common_vendor.reactive(new uni_modules_riceUi_components_riceSignature_type.SignaturePoint({
    x: 0,
    y: 0
  }));
  const renderingContext = common_vendor.ref(null);
  const hasDraw = common_vendor.ref(false);
  const history = common_vendor.ref([]);
  const getCanvasSize = () => {
    const width = renderingContext.value.canvas.width;
    const height = renderingContext.value.canvas.height;
    return new uni_modules_riceUi_components_riceSignature_type.SignatureCanvasSize({
      width,
      height
    });
  };
  const setCanvasBgColor = () => {
    if (renderingContext.value != null && uni_modules_riceUi_libs_utils_basic.hasStrValue(props.bgColor)) {
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
  const saveSnapshot = () => {
    const ctx = renderingContext.value;
    if (ctx == null)
      return false;
    const size = getCanvasSize();
    if (size.width <= 0 || size.height <= 0)
      return false;
    const snapshot = new SignatureSnapshot({
      imageData: ctx.getImageData(0, 0, size.width, size.height),
      width: size.width,
      height: size.height,
      hasDraw: hasDraw.value
    });
    history.value.push(snapshot);
    if (history.value.length > 50) {
      common_vendor.UTS.arrayShift(history.value);
    }
    return true;
  };
  const initSize = () => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      const canvas = renderingContext.value.canvas;
      const dpr = common_vendor.index.getWindowInfo().pixelRatio;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      renderingContext.value.scale(dpr, dpr);
      yield common_vendor.nextTick$1();
      setCanvasBgColor();
    });
  };
  const createCanvasContext = () => {
    var _a2;
    common_vendor.index.createCanvasContextAsync({
      id: canvasId,
      component: (_a2 = common_vendor.getCurrentInstance()) === null || _a2 === void 0 ? null : _a2.proxy,
      success: (context) => {
        renderingContext.value = context.getContext("2d");
        initSize();
      },
      fail: (err) => {
        uni_modules_riceUi_libs_utils_debug.debugWarn("Signature", err.errMsg);
      }
    });
  };
  const getPosition = (e) => {
    const touch = e.touches[0];
    return new uni_modules_riceUi_components_riceSignature_type.SignaturePoint({
      x: touch.x,
      y: touch.y
    });
  };
  const onTouchstart = (e) => {
    if (renderingContext.value == null || props.disabled)
      return null;
    const ctx = renderingContext.value;
    ctx.canvas;
    const point = getPosition(e);
    lastPoint.x = point.x;
    lastPoint.y = point.y;
    saveSnapshot();
    ctx.beginPath();
    ctx.lineWidth = props.lineWidth;
    ctx.strokeStyle = props.lineColor;
    emit("start");
  };
  const onTouchmove = (e) => {
    if (props.disabled)
      return null;
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
    lastPoint.x = x;
    lastPoint.y = y;
    emit("signing");
  };
  const onTouchend = () => {
    if (props.disabled)
      return null;
    emit("end");
  };
  const clear = () => {
    if (renderingContext.value == null)
      return null;
    saveSnapshot();
    hasDraw.value = false;
    clearCanvas();
  };
  const revoke = () => {
    const ctx = renderingContext.value;
    if (ctx == null || history.value.length == 0)
      return null;
    const snapshot = common_vendor.UTS.arrayPop(history.value);
    if (snapshot == null)
      return null;
    const size = getCanvasSize();
    ctx.clearRect(0, 0, size.width, size.height);
    if (snapshot.width == size.width && snapshot.height == size.height) {
      ctx.putImageData(snapshot.imageData, 0, 0);
    } else {
      setCanvasBgColor();
    }
    const sameSize = snapshot.width == size.width && snapshot.height == size.height;
    hasDraw.value = snapshot.hasDraw && sameSize;
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
  const resize = () => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      const ctx = renderingContext.value;
      if (ctx == null)
        return Promise.resolve(null);
      if (!hasDraw.value)
        return Promise.resolve(null);
      history.value = [];
      ctx.save();
      const size = getCanvasSize();
      ctx.clearRect(0, 0, size.width, size.height);
      yield initSize();
    });
  };
  const signatureStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.width != null)
      css.set("width", uni_modules_riceUi_libs_utils_basic.addUnit(props.width));
    return css;
  });
  const wrapperStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.contentBgColor) && !uni_modules_riceUi_libs_utils_basic.hasStrValue(props.bgColor))
      css.set("background-color", props.contentBgColor);
    if (props.height != null)
      css.set("height", uni_modules_riceUi_libs_utils_basic.addUnit(props.height));
    return css;
  });
  const tipsStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.tipsSize != null)
      css.set("font-size", uni_modules_riceUi_libs_utils_basic.addUnit(props.tipsSize));
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.tipsColor))
      css.set("color", props.tipsColor);
    return css;
  });
  common_vendor.watch([() => {
    return props.width;
  }, () => {
    return props.height;
  }], resize);
  common_vendor.onMounted(() => {
    createCanvasContext();
  });
  __expose({
    revoke,
    clear,
    done,
    resize
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: common_vendor.sei(canvasId, "canvas"),
      b: !_ctx.disabled,
      c: common_vendor.o(onTouchstart, "e6"),
      d: common_vendor.o(onTouchmove, "b2"),
      e: common_vendor.o(onTouchend, "b2"),
      f: common_vendor.o(onTouchend, "34"),
      g: common_vendor.unref(hasTips)
    }, common_vendor.unref(hasTips) ? {
      h: common_vendor.t(_ctx.tips),
      i: common_vendor.s(common_vendor.unref(tipsStyle))
    } : {}, {
      j: common_vendor.sei("r0-295a4f22", "view", "wrapperRef"),
      k: common_vendor.s(common_vendor.unref(wrapperStyle)),
      l: common_vendor.unref(hasConfirm) || common_vendor.unref(hasClear) || common_vendor.unref(hasRevoke)
    }, common_vendor.unref(hasConfirm) || common_vendor.unref(hasClear) || common_vendor.unref(hasRevoke) ? common_vendor.e({
      m: common_vendor.unref(hasClear)
    }, common_vendor.unref(hasClear) ? {
      n: common_vendor.o(clear, "89"),
      o: common_vendor.p({
        text: _ctx.clearButtonText,
        size: "small",
        class: "rice-signature__footer__btn data-v-295a4f22"
      })
    } : {}, {
      p: common_vendor.unref(hasRevoke)
    }, common_vendor.unref(hasRevoke) ? {
      q: common_vendor.o(revoke, "2f"),
      r: common_vendor.p({
        type: "warning",
        text: _ctx.revokeButtonText,
        size: "small",
        class: "rice-signature__footer__btn data-v-295a4f22"
      })
    } : {}, {
      s: common_vendor.unref(hasConfirm)
    }, common_vendor.unref(hasConfirm) ? {
      t: common_vendor.o(submit, "1c"),
      v: common_vendor.p({
        type: "primary",
        text: _ctx.confirmButtonText,
        size: "small",
        class: "rice-signature__footer__btn data-v-295a4f22"
      })
    } : {}) : {}, {
      w: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      x: common_vendor.n(common_vendor.unref(ns).theme()),
      y: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      z: common_vendor.s(common_vendor.unref(signatureStyle)),
      A: common_vendor.s(_ctx.customStyle),
      B: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-295a4f22"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-signature/rice-signature.js.map
