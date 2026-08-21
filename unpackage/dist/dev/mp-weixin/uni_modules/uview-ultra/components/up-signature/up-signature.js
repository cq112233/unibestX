"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_i18n_index = require("../../libs/i18n/index.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_slider_1 = common_vendor.resolveComponent("up-slider");
  (_easycom_up_icon_1 + _easycom_up_slider_1)();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_slider = () => "../up-slider/up-slider.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_slider)();
}
class SignaturePoint extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          x: { type: Number, optional: false },
          y: { type: Number, optional: false },
          type: { type: String, optional: false },
          color: { type: String, optional: false },
          width: { type: Number, optional: false }
        };
      },
      name: "SignaturePoint"
    };
  }
  constructor(options, metadata = SignaturePoint.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.x = this.__props__.x;
    this.y = this.__props__.y;
    this.type = this.__props__.type;
    this.color = this.__props__.color;
    this.width = this.__props__.width;
    delete this.__props__;
  }
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-signature"
}, { __name: "up-signature", props: {
  width: {
    type: [String, Number],
    default: 300
  },
  height: {
    type: [String, Number],
    default: 200
  },
  bgColor: {
    type: String,
    default: "#ffffff"
  },
  color: {
    type: String,
    default: "#000000"
  },
  thickness: {
    type: [String, Number],
    default: 3
  },
  showToolbar: {
    type: Boolean,
    default: true
  }
}, emits: ["confirm", "error", "change", "clear"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  function normalizeNumber(value = null, defaultValue = 0) {
    if (typeof value == "number") {
      return value;
    }
    if (value == null) {
      return defaultValue;
    }
    const parsed = parseFloat(value.toString());
    return isNaN(parsed) ? defaultValue : parsed;
  }
  function createPath() {
    return [];
  }
  function createPathStack() {
    return [];
  }
  function createColors() {
    return [
      "#000000",
      "#ff0000",
      "#00ff00",
      "#0000ff",
      "#ffff00",
      "#00ffff",
      "#ff00ff",
      "#ffffff"
    ];
  }
  function createPoint(x, y, type, color, width) {
    return new SignaturePoint({
      x,
      y,
      type,
      color,
      width
    });
  }
  const props = __props;
  const emit = __emit;
  let canvasCompCount = 0;
  function makeCanvasId(prefix) {
    return prefix + Date.now().toString() + "_" + (++canvasCompCount).toString();
  }
  const instance = common_vendor.getCurrentInstance();
  const canvasId = common_vendor.ref(makeCanvasId("up-signature-"));
  const canvasWidth = common_vendor.ref(normalizeNumber(props.width, 300));
  const canvasHeight = common_vendor.ref(normalizeNumber(props.height, 200));
  const lineColor = common_vendor.ref(props.color);
  const lineWidth = common_vendor.ref(normalizeNumber(props.thickness, 3));
  const isDrawing = common_vendor.ref(false);
  const pathStack = common_vendor.ref(createPathStack());
  const currentPath = common_vendor.ref(createPath());
  const isEmpty = common_vendor.ref(true);
  const presetColors = common_vendor.ref(createColors());
  const showBrushSettings = common_vendor.ref(false);
  const showColorSettings = common_vendor.ref(false);
  let ctx = null;
  let lastDrawX = 0;
  let lastDrawY = 0;
  let canvasContext = null;
  let canvasEl = null;
  const pathCount = common_vendor.computed(() => {
    return pathStack.value.length;
  });
  const colorItems = common_vendor.computed(() => {
    return presetColors.value;
  });
  const canvasWrapStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    style["width"] = canvasWidth.value.toString() + "px";
    style["height"] = canvasHeight.value.toString() + "px";
    style["backgroundColor"] = props.bgColor;
    return style;
  });
  const penSizeLabel = common_vendor.computed(() => {
    return uni_modules_uviewUltra_libs_i18n_index.t("up.signature.penSize");
  });
  const penColorLabel = common_vendor.computed(() => {
    return uni_modules_uviewUltra_libs_i18n_index.t("up.signature.penColor");
  });
  function getColorStyle(col) {
    const style = new common_vendor.UTSJSONObject({});
    style["backgroundColor"] = col;
    return style;
  }
  function getLineColor() {
    return lineColor.value == null ? "#000000" : lineColor.value.toString();
  }
  function getLineWidth() {
    return normalizeNumber(lineWidth.value, 3);
  }
  function getDrawElement() {
    return canvasEl;
  }
  function getTouchPoint(e) {
    let x = 0;
    let y = 0;
    let touch = null;
    if (e.touches.length > 0) {
      touch = e.touches[0];
    } else if (e.changedTouches.length > 0) {
      touch = e.changedTouches[0];
    }
    if (touch != null) {
      const el = getDrawElement();
      if (el != null) {
        const rect = el.getBoundingClientRect();
        x = touch.clientX - rect.left;
        y = touch.clientY - rect.top;
      }
    }
    return createPoint(x, y, "move", "", 0);
  }
  function applyLineStyle(color, width) {
    if (ctx == null)
      return null;
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  }
  function beginPath() {
    if (ctx != null) {
      ctx.beginPath();
    }
  }
  function moveTo(x, y) {
    if (ctx != null) {
      ctx.moveTo(x, y);
    }
  }
  function lineTo(x, y) {
    if (ctx != null) {
      ctx.lineTo(x, y);
    }
  }
  function stroke() {
    if (ctx == null)
      return null;
    ctx.stroke();
  }
  function closePath() {
    if (ctx != null) {
      ctx.closePath();
    }
  }
  function clearDrawing() {
    if (ctx == null)
      return null;
    ctx.clearRect(0, 0, canvasWidth.value, canvasHeight.value);
    ctx.fillStyle = props.bgColor;
    ctx.fillRect(0, 0, canvasWidth.value, canvasHeight.value);
  }
  function startDraw(x, y) {
    isDrawing.value = true;
    isEmpty.value = false;
    currentPath.value = createPath();
    const col = getLineColor();
    const wid = getLineWidth();
    const startPoint = createPoint(normalizeNumber(x, 0), normalizeNumber(y, 0), "start", col, wid);
    currentPath.value.push(startPoint);
    lastDrawX = startPoint.x;
    lastDrawY = startPoint.y;
    emit("change", currentPath.value);
  }
  function moveDraw(x, y) {
    if (!isDrawing.value)
      return null;
    const movePoint = createPoint(normalizeNumber(x, 0), normalizeNumber(y, 0), "move", getLineColor(), getLineWidth());
    currentPath.value.push(movePoint);
    applyLineStyle(movePoint.color, movePoint.width);
    beginPath();
    moveTo(lastDrawX, lastDrawY);
    lineTo(movePoint.x, movePoint.y);
    stroke();
    closePath();
    lastDrawX = movePoint.x;
    lastDrawY = movePoint.y;
    emit("change", currentPath.value);
  }
  function endDraw() {
    if (!isDrawing.value)
      return null;
    isDrawing.value = false;
    if (currentPath.value.length > 0) {
      pathStack.value.push(currentPath.value);
    }
    currentPath.value = createPath();
  }
  function initContext() {
    common_vendor.index.createCanvasContextAsync({
      id: canvasId.value,
      component: instance === null || instance === void 0 ? null : instance.proxy,
      success: (context) => {
        var _a2;
        canvasContext = context;
        const c = context.getContext("2d");
        if (c != null) {
          ctx = c;
          canvasEl = c.canvas;
          const ratio = (_a2 = common_vendor.index.getDeviceInfo().devicePixelRatio) !== null && _a2 !== void 0 ? _a2 : 1;
          if (canvasEl != null) {
            canvasEl.width = canvasEl.offsetWidth * ratio;
            canvasEl.height = canvasEl.offsetHeight * ratio;
            c.scale(ratio, ratio);
          }
          clearDrawing();
        }
      },
      fail: (err) => {
        common_vendor.index.__f__("error", "at uni_modules/uview-ultra/components/up-signature/up-signature.uvue:443", "初始化Canvas失败:", err);
      }
    });
  }
  function touchStart(e) {
    e.stopPropagation();
    e.preventDefault();
    const point = getTouchPoint(e);
    startDraw(point.x, point.y);
  }
  function touchMove(e) {
    if (!isDrawing.value)
      return null;
    e.stopPropagation();
    e.preventDefault();
    const point = getTouchPoint(e);
    moveDraw(point.x, point.y);
  }
  function touchEnd() {
    endDraw();
  }
  function selectColor(col) {
    lineColor.value = col;
  }
  function redraw() {
    clearDrawing();
    const stack = pathStack.value;
    if (stack.length == 0) {
      isEmpty.value = true;
      return null;
    }
    isEmpty.value = false;
    for (let i = 0; i < stack.length; i++) {
      const path = stack[i];
      if (path.length == 0)
        continue;
      beginPath();
      for (let j = 0; j < path.length; j++) {
        const point = path[j];
        if (j == 0 && point.type == "start") {
          applyLineStyle(point.color, point.width);
          moveTo(point.x, point.y);
        } else if (point.type == "move") {
          lineTo(point.x, point.y);
        }
      }
      stroke();
      closePath();
    }
  }
  function undo() {
    if (pathStack.value.length == 0)
      return null;
    common_vendor.UTS.arrayPop(pathStack.value);
    redraw();
  }
  function clearCanvas() {
    clearDrawing();
    pathStack.value = createPathStack();
    currentPath.value = createPath();
    isEmpty.value = true;
    emit("clear");
  }
  function exportSignature() {
    if (isEmpty.value) {
      emit("error", "签名为空");
      return null;
    }
    redraw();
    if (canvasContext == null) {
      emit("error", "无法获取画布实例");
      return null;
    }
    const dataUrl = canvasContext.toDataURL("image/png", 1);
    if (dataUrl == null || dataUrl == "") {
      emit("error", "导出签名图片失败");
      return null;
    }
    emit("confirm", dataUrl);
  }
  function toggleBrushSettings() {
    showBrushSettings.value = !showBrushSettings.value;
    if (showBrushSettings.value) {
      showColorSettings.value = false;
    }
  }
  function toggleColorSettings() {
    showColorSettings.value = !showColorSettings.value;
    if (showColorSettings.value) {
      showBrushSettings.value = false;
    }
  }
  common_vendor.watch(() => {
    return props.width;
  }, (newVal = null) => {
    canvasWidth.value = normalizeNumber(newVal, 300);
  });
  common_vendor.watch(() => {
    return props.height;
  }, (newVal = null) => {
    canvasHeight.value = normalizeNumber(newVal, 200);
  });
  common_vendor.watch(() => {
    return props.color;
  }, (newVal) => {
    lineColor.value = newVal;
  });
  common_vendor.watch(() => {
    return props.thickness;
  }, (newVal = null) => {
    lineWidth.value = normalizeNumber(newVal, 3);
  });
  let initAttempts = 0;
  function scheduleInit(delay) {
    setTimeout(() => {
      initContext();
      if (ctx == null && initAttempts < 2) {
        initAttempts++;
        scheduleInit(200);
      }
    }, delay);
  }
  common_vendor.onMounted(() => {
    common_vendor.nextTick$1(() => {
      initAttempts = 0;
      scheduleInit(100);
    });
  });
  __expose({
    undo,
    clearCanvas,
    redraw,
    exportSignature
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: common_vendor.sei(canvasId.value, "canvas"),
      b: common_vendor.o(touchStart, "4f"),
      c: common_vendor.o(touchMove, "7f"),
      d: common_vendor.o(touchEnd, "49"),
      e: common_vendor.o(touchEnd, "db"),
      f: common_vendor.s(canvasWrapStyle.value),
      g: __props.showToolbar
    }, __props.showToolbar ? common_vendor.e({
      h: common_vendor.p({
        name: "arrow-left",
        size: "22",
        color: pathCount.value == 0 ? "#ccc" : "#999",
        class: "data-v-e9286989"
      }),
      i: common_vendor.o(undo, "3c"),
      j: common_vendor.p({
        name: "trash",
        size: "25",
        color: "#999",
        class: "data-v-e9286989"
      }),
      k: common_vendor.o(clearCanvas, "ca"),
      l: common_vendor.p({
        name: "edit-pen",
        size: "25",
        color: "#999",
        class: "data-v-e9286989"
      }),
      m: common_vendor.o(toggleBrushSettings, "23"),
      n: common_vendor.p({
        name: "grid",
        size: "24",
        color: "#999",
        class: "data-v-e9286989"
      }),
      o: common_vendor.o(toggleColorSettings, "a6"),
      p: common_vendor.p({
        name: "checkmark",
        size: "25",
        color: isEmpty.value ? "#ccc" : "#999",
        class: "data-v-e9286989"
      }),
      q: common_vendor.o(exportSignature, "38"),
      r: showBrushSettings.value
    }, showBrushSettings.value ? {
      s: common_vendor.t(penSizeLabel.value),
      t: common_vendor.o(($event) => {
        return lineWidth.value = $event;
      }, "c0"),
      v: common_vendor.p({
        min: 1,
        max: 20,
        step: 1,
        ["value-show"]: lineWidth.value,
        modelValue: lineWidth.value,
        class: "data-v-e9286989"
      })
    } : {}, {
      w: showColorSettings.value
    }, showColorSettings.value ? {
      x: common_vendor.t(penColorLabel.value),
      y: common_vendor.f(colorItems.value, (color, index, i0) => {
        return {
          a: index,
          b: common_vendor.n(lineColor.value == color ? "up-signature__color-item--active" : ""),
          c: common_vendor.s(getColorStyle(color)),
          d: common_vendor.o(($event) => {
            return selectColor(color);
          }, index)
        };
      })
    } : {}) : {}, {
      z: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      A: `${_ctx.u_s_b_h}px`,
      B: `${_ctx.u_s_a_i_b}px`,
      C: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e9286989"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-signature/up-signature.js.map
