"use strict";
const common_vendor = require("../../../../common/vendor.js");
class CropTouch extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          x: { type: Number, optional: false },
          y: { type: Number, optional: false }
        };
      },
      name: "CropTouch"
    };
  }
  constructor(options, metadata = CropTouch.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.x = this.__props__.x;
    this.y = this.__props__.y;
    delete this.__props__;
  }
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-cropper"
}, { __name: "up-cropper", props: {
  minScale: {
    type: [String, Number],
    default: 0.3
  },
  maxScale: {
    type: [String, Number],
    default: 4
  },
  canScale: {
    type: Boolean,
    default: true
  },
  canRotate: {
    type: Boolean,
    default: true
  },
  lockWidth: {
    type: [String, Number],
    default: ""
  },
  lockHeight: {
    type: [String, Number],
    default: ""
  },
  stretch: {
    type: String,
    default: ""
  },
  lock: {
    type: String,
    default: ""
  },
  noTab: {
    type: Boolean,
    default: true
  },
  inner: {
    type: Boolean,
    default: false
  },
  quality: {
    type: [String, Number],
    default: 1
  },
  canChangeSize: {
    type: Boolean,
    default: false
  },
  areaWidth: {
    type: String,
    default: "300rpx"
  },
  areaHeight: {
    type: String,
    default: "300rpx"
  },
  exportWidth: {
    type: String,
    default: "260rpx"
  },
  exportHeight: {
    type: String,
    default: "260rpx"
  },
  fillColor: {
    type: String,
    default: "transparent"
  },
  index: {
    type: [String, Number],
    default: 0
  }
}, emits: ["avtinit", "confirm", "cancel", "error"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  function makeId(prefix) {
    return prefix + Date.now().toString();
  }
  function getPixelRatio() {
    const info = common_vendor.index.getSystemInfoSync();
    if (info.pixelRatio > 0) {
      return info.pixelRatio;
    }
    return 1;
  }
  function toObject(value = null) {
    return value == null ? new common_vendor.UTSJSONObject({}) : value;
  }
  function normalizeString(value = null, fallback = "") {
    return value == null ? fallback : value.toString();
  }
  function rpxToPx(value = null, fallback) {
    if (typeof value === "number") {
      return value;
    }
    if (value == null) {
      return fallback;
    }
    const text = value.toString();
    if (text.endsWith("rpx")) {
      const parsed_1 = parseFloat(text.substring(0, text.length - 3));
      return isNaN(parsed_1) ? fallback : parsed_1 * common_vendor.index.getWindowInfo().windowWidth / 750;
    }
    if (text.endsWith("px")) {
      const parsed_2 = parseFloat(text.substring(0, text.length - 2));
      return isNaN(parsed_2) ? fallback : parsed_2;
    }
    const parsed = parseFloat(text);
    return isNaN(parsed) ? fallback : parsed;
  }
  function numberValue(value = null, fallback = 0) {
    if (typeof value === "number") {
      return value;
    }
    if (value == null) {
      return fallback;
    }
    const parsed = parseFloat(value.toString());
    return isNaN(parsed) ? fallback : parsed;
  }
  function touchPoint(e) {
    let x = 0;
    let y = 0;
    if (e.touches.length > 0) {
      x = e.touches[0].pageX;
      y = e.touches[0].pageY;
    } else if (e.changedTouches.length > 0) {
      x = e.changedTouches[0].pageX;
      y = e.changedTouches[0].pageY;
    }
    return new CropTouch({ x, y });
  }
  function touchAt(e, index) {
    if (e.touches.length > index) {
      return new CropTouch({
        x: e.touches[index].pageX,
        y: e.touches[index].pageY
      });
    }
    return null;
  }
  function distanceBetween(a, b) {
    const x = a.x - b.x;
    const y = a.y - b.y;
    return Math.sqrt(x * x + y * y);
  }
  function clamp(value, min, max) {
    if (value < min)
      return min;
    if (value > max)
      return max;
    return value;
  }
  const props = __props;
  const emit = __emit;
  const instance = common_vendor.getCurrentInstance();
  function resolveFillColor() {
    if (props.fillColor == "transparent") {
      return "rgba(0,0,0,0)";
    }
    return props.fillColor;
  }
  const canvasId = common_vendor.ref(makeId("up-cropper-"));
  const exportCanvasId = common_vendor.ref(makeId("up-cropper-export-"));
  let canvasContext = null;
  let exportCanvasContext = null;
  let ctx = null;
  let exportCtx = null;
  let imageElement = null;
  const imagePath = common_vendor.ref("");
  const imageWidth = common_vendor.ref(0);
  const imageHeight = common_vendor.ref(0);
  const visible = common_vendor.ref(false);
  const canvasWidth = common_vendor.ref(common_vendor.index.getWindowInfo().windowWidth);
  const canvasHeight = common_vendor.ref(common_vendor.index.getWindowInfo().windowHeight - 70);
  const cropWidth = common_vendor.ref(rpxToPx(props.areaWidth, 300));
  const cropHeight = common_vendor.ref(rpxToPx(props.areaHeight, 300));
  const outputWidth = common_vendor.ref(rpxToPx(props.exportWidth, 260));
  const outputHeight = common_vendor.ref(rpxToPx(props.exportHeight, 260));
  const imageX = common_vendor.ref(0);
  const imageY = common_vendor.ref(0);
  const baseDisplayWidth = common_vendor.ref(0);
  const baseDisplayHeight = common_vendor.ref(0);
  const displayWidth = common_vendor.ref(0);
  const displayHeight = common_vendor.ref(0);
  const scaleValue = common_vendor.ref(1);
  const minScaleValue = common_vendor.ref(numberValue(props.minScale, 0.3));
  const maxScaleValue = common_vendor.ref(numberValue(props.maxScale, 4));
  const rotateDeg = common_vendor.ref(0);
  const canScaleLocal = common_vendor.ref(props.canScale);
  const canRotateLocal = common_vendor.ref(props.canRotate && !props.inner);
  const canChangeSizeLocal = common_vendor.ref(props.canChangeSize);
  const lockMode = common_vendor.ref(normalizeString(props.lock));
  const stretchMode = common_vendor.ref(normalizeString(props.stretch));
  const innerMode = common_vendor.ref(props.inner);
  let returnData = null;
  let lastOptions = new common_vendor.UTSJSONObject({});
  let activeTouch = null;
  let startPinchDistance = 0;
  let startScaleValue = 1;
  let resizeHandle = "";
  const previewing = common_vendor.ref(false);
  const currentIndex = common_vendor.ref(0);
  const canvasStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      width: canvasWidth.value.toString() + "px",
      height: canvasHeight.value.toString() + "px"
    });
  });
  const exportCanvasStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      width: outputWidth.value.toString() + "px",
      height: outputHeight.value.toString() + "px"
    });
  });
  const cropLeft = common_vendor.computed(() => {
    return (numberValue(canvasWidth.value, 0) - numberValue(cropWidth.value, 0)) / 2;
  });
  const cropTop = common_vendor.computed(() => {
    return (numberValue(canvasHeight.value, 0) - numberValue(cropHeight.value, 0)) / 2;
  });
  const showRotateButton = common_vendor.computed(() => {
    return canRotateLocal.value;
  });
  function initCanvas() {
    return new Promise((resolve, reject) => {
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
          const pixelRatio = getPixelRatio();
          const canvas = c2d.canvas;
          canvas.width = canvasWidth.value * pixelRatio;
          canvas.height = canvasHeight.value * pixelRatio;
          c2d.scale(pixelRatio, pixelRatio);
          ctx = c2d;
          common_vendor.index.createCanvasContextAsync({
            id: exportCanvasId.value,
            component: instance === null || instance === void 0 ? null : instance.proxy,
            success: (exportContext) => {
              exportCanvasContext = exportContext;
              const export2d = exportContext.getContext("2d");
              if (export2d == null) {
                reject(new Error("Export canvas context is not ready"));
                return null;
              }
              const exportCanvas = export2d.canvas;
              exportCanvas.width = outputWidth.value * pixelRatio;
              exportCanvas.height = outputHeight.value * pixelRatio;
              export2d.scale(pixelRatio, pixelRatio);
              exportCtx = export2d;
              resolve();
            },
            fail: (err) => {
              reject(err);
            }
          });
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  }
  function keepImageInCrop() {
    const cropL = cropLeft.value;
    const cropT = cropTop.value;
    const cropW = numberValue(cropWidth.value, 0);
    const cropH = numberValue(cropHeight.value, 0);
    const displayW = numberValue(displayWidth.value, 0);
    const displayH = numberValue(displayHeight.value, 0);
    if (displayW <= cropW) {
      imageX.value = cropL + (cropW - displayW) / 2;
    } else {
      if (numberValue(imageX.value, 0) > cropL) {
        imageX.value = cropL;
      }
      if (numberValue(imageX.value, 0) + displayW < cropL + cropW) {
        imageX.value = cropL + cropW - displayW;
      }
    }
    if (displayH <= cropH) {
      imageY.value = cropT + (cropH - displayH) / 2;
    } else {
      if (numberValue(imageY.value, 0) > cropT) {
        imageY.value = cropT;
      }
      if (numberValue(imageY.value, 0) + displayH < cropT + cropH) {
        imageY.value = cropT + cropH - displayH;
      }
    }
  }
  function fitImage() {
    const cropW = numberValue(cropWidth.value, 300);
    const cropH = numberValue(cropHeight.value, 300);
    const imgW = Math.max(1, numberValue(imageWidth.value, 1));
    const imgH = Math.max(1, numberValue(imageHeight.value, 1));
    let scale = Math.max(cropW / imgW, cropH / imgH);
    const imageRadio = imgW / imgH;
    const mode = stretchMode.value;
    if (mode == "x") {
      scale = cropW / imgW;
    } else if (mode == "y") {
      scale = cropH / imgH;
    } else if (mode == "long") {
      scale = imageRadio > 1 ? cropW / imgW : cropH / imgH;
    } else if (mode == "short") {
      scale = imageRadio > 1 ? cropH / imgH : cropW / imgW;
    }
    let displayW = imgW * scale;
    let displayH = imgH * scale;
    if (innerMode.value) {
      if (displayW < cropW) {
        displayW = cropW;
        displayH = displayW / imageRadio;
      }
      if (displayH < cropH) {
        displayH = cropH;
        displayW = displayH * imageRadio;
      }
    }
    baseDisplayWidth.value = displayW;
    baseDisplayHeight.value = displayH;
    displayWidth.value = displayW;
    displayHeight.value = displayH;
    scaleValue.value = 1;
    rotateDeg.value = 0;
    imageX.value = cropLeft.value + (cropW - displayW) / 2;
    imageY.value = cropTop.value + (cropH - displayH) / 2;
    keepImageInCrop();
    emit("avtinit");
  }
  function drawHandle(context, x, y, size) {
    context.fillRect(x - size / 2, y - size / 2, size, size);
    context.strokeRect(x - size / 2, y - size / 2, size, size);
  }
  function drawResizeHandles(context, left, top, width, height) {
    const size = 12;
    context.fillStyle = "#ffffff";
    context.strokeStyle = "#d14343";
    context.lineWidth = 1;
    drawHandle(context, left, top, size);
    drawHandle(context, left + width, top, size);
    drawHandle(context, left, top + height, size);
    drawHandle(context, left + width, top + height, size);
  }
  function draw() {
    const context = ctx;
    const image = imageElement;
    if (context == null || image == null)
      return null;
    const canvasW = numberValue(canvasWidth.value, 0);
    const canvasH = numberValue(canvasHeight.value, 0);
    const cropL = cropLeft.value;
    const cropT = cropTop.value;
    const cropW = numberValue(cropWidth.value, 0);
    const cropH = numberValue(cropHeight.value, 0);
    const imgX = numberValue(imageX.value, 0);
    const imgY = numberValue(imageY.value, 0);
    const displayW = numberValue(displayWidth.value, 0);
    const displayH = numberValue(displayHeight.value, 0);
    context.clearRect(0, 0, canvasW, canvasH);
    context.fillStyle = "rgba(0,0,0,0.72)";
    context.fillRect(0, 0, canvasW, canvasH);
    context.save();
    context.beginPath();
    context.rect(cropL, cropT, cropW, cropH);
    context.clip();
    context.fillStyle = resolveFillColor();
    context.fillRect(cropL, cropT, cropW, cropH);
    context.translate(imgX + displayW / 2, imgY + displayH / 2);
    context.rotate(rotateDeg.value * Math.PI / 180);
    context.drawImage(image, -displayW / 2, -displayH / 2, displayW, displayH);
    context.restore();
    context.strokeStyle = "#ffffff";
    context.lineWidth = 2;
    context.strokeRect(cropL, cropT, cropW, cropH);
    if (canChangeSizeLocal.value) {
      drawResizeHandles(context, cropL, cropT, cropW, cropH);
    }
  }
  function createCanvasImage(path) {
    const canvas = canvasContext;
    if (canvas == null) {
      emit("error", new Error("Canvas is not ready"));
      return null;
    }
    const image = canvas.createImage();
    image.onload = () => {
      imageElement = image;
      fitImage();
      draw();
    };
    image.onerror = () => {
      emit("error", new Error("Image load failed"));
    };
    image.src = path;
  }
  function loadImage(path) {
    common_vendor.index.getImageInfo({
      src: path,
      success: (info) => {
        imagePath.value = path;
        imageWidth.value = info.width;
        imageHeight.value = info.height;
        visible.value = true;
        common_vendor.nextTick$1(() => {
          initCanvas().then(() => {
            createCanvasImage(info.path);
          }).catch((err = null) => {
            emit("error", err);
          });
        });
      },
      fail: () => {
        emit("error", "读取图片失败");
      }
    });
  }
  function chooseImage(index = 0, params = new common_vendor.UTSJSONObject({}), data = null) {
    const options = toObject(params);
    lastOptions = options;
    currentIndex.value = typeof index === "number" ? index : 0;
    cropWidth.value = rpxToPx(options["areaWidth"], rpxToPx(props.areaWidth, 300));
    cropHeight.value = rpxToPx(options["areaHeight"], rpxToPx(props.areaHeight, 300));
    outputWidth.value = rpxToPx(options["exportWidth"], rpxToPx(props.exportWidth, 260));
    outputHeight.value = rpxToPx(options["exportHeight"], rpxToPx(props.exportHeight, 260));
    minScaleValue.value = numberValue(options["minScale"], numberValue(props.minScale, 0.3));
    maxScaleValue.value = numberValue(options["maxScale"], numberValue(props.maxScale, 4));
    canScaleLocal.value = options["canScale"] == null ? props.canScale : options["canScale"];
    canRotateLocal.value = (options["canRotate"] == null ? props.canRotate : options["canRotate"]) && !(options["inner"] == null ? props.inner : options["inner"]);
    canChangeSizeLocal.value = options["canChangeSize"] == null ? props.canChangeSize : options["canChangeSize"];
    innerMode.value = options["inner"] == null ? props.inner : options["inner"];
    lockMode.value = normalizeString(options["lock"], normalizeString(props.lock));
    stretchMode.value = normalizeString(options["stretch"], normalizeString(props.stretch));
    returnData = data;
    previewing.value = false;
    common_vendor.index.chooseImage(new common_vendor.UTSJSONObject({
      count: 1,
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
      success: (res) => {
        if (res.tempFilePaths.length == 0)
          return null;
        loadImage(res.tempFilePaths[0]);
      },
      fail: () => {
        emit("cancel");
      }
    }));
  }
  function openDefault() {
    chooseImage(0, new common_vendor.UTSJSONObject({}));
  }
  function select() {
    chooseImage(currentIndex.value, lastOptions, returnData);
  }
  function getResizeHandle(point) {
    const tolerance = 28;
    const left = cropLeft.value;
    const top = cropTop.value;
    const width = numberValue(cropWidth.value, 0);
    const height = numberValue(cropHeight.value, 0);
    if (Math.abs(point.x - left) <= tolerance && Math.abs(point.y - top) <= tolerance)
      return "top-left";
    if (Math.abs(point.x - left - width) <= tolerance && Math.abs(point.y - top) <= tolerance)
      return "top-right";
    if (Math.abs(point.x - left) <= tolerance && Math.abs(point.y - top - height) <= tolerance)
      return "bottom-left";
    if (Math.abs(point.x - left - width) <= tolerance && Math.abs(point.y - top - height) <= tolerance)
      return "bottom-right";
    return "";
  }
  function resizeCrop(point) {
    const minSize = 50;
    const oldW = numberValue(cropWidth.value, 0);
    const oldH = numberValue(cropHeight.value, 0);
    const centerX = cropLeft.value + oldW / 2;
    const centerY = cropTop.value + oldH / 2;
    let nextW = Math.abs(point.x - centerX) * 2;
    let nextH = Math.abs(point.y - centerY) * 2;
    const maxW = numberValue(canvasWidth.value, 0) - 24;
    const maxH = numberValue(canvasHeight.value, 0) - 24;
    nextW = clamp(nextW, minSize, maxW);
    nextH = clamp(nextH, minSize, maxH);
    const lockedWidth = rpxToPx(props.lockWidth, 0);
    const lockedHeight = rpxToPx(props.lockHeight, 0);
    if (lockedWidth > 0)
      nextW = lockedWidth;
    if (lockedHeight > 0)
      nextH = lockedHeight;
    cropWidth.value = nextW;
    cropHeight.value = nextH;
  }
  function applyScale(nextScale) {
    const centerX = imageX.value + displayWidth.value / 2;
    const centerY = imageY.value + displayHeight.value / 2;
    scaleValue.value = nextScale;
    displayWidth.value = baseDisplayWidth.value * nextScale;
    displayHeight.value = baseDisplayHeight.value * nextScale;
    imageX.value = centerX - displayWidth.value / 2;
    imageY.value = centerY - displayHeight.value / 2;
  }
  function handlePinch(first, second) {
    const currentDistance = distanceBetween(first, second);
    if (startPinchDistance > 0 && canScaleLocal.value) {
      const minScale = numberValue(minScaleValue.value, 0.3);
      const maxScale = numberValue(maxScaleValue.value, 4);
      const nextScale = clamp(startScaleValue * currentDistance / startPinchDistance, minScale, maxScale);
      applyScale(nextScale);
    }
    keepImageInCrop();
    draw();
  }
  function isMoveLockedX() {
    return lockMode.value == "x" || lockMode.value == "longSel" || lockMode.value == "long";
  }
  function isMoveLockedY() {
    return lockMode.value == "y" || lockMode.value == "shortSel" || lockMode.value == "short";
  }
  function touchStart(e) {
    if (previewing.value)
      return null;
    const first = touchAt(e, 0);
    const second = touchAt(e, 1);
    if (first != null && second != null) {
      activeTouch = first;
      startPinchDistance = distanceBetween(first, second);
      startScaleValue = scaleValue.value;
      resizeHandle = "";
      return null;
    }
    const point = touchPoint(e);
    activeTouch = point;
    resizeHandle = canChangeSizeLocal.value ? getResizeHandle(point) : "";
  }
  function touchMove(e) {
    if (previewing.value)
      return null;
    const first = touchAt(e, 0);
    const second = touchAt(e, 1);
    if (first != null && second != null) {
      handlePinch(first, second);
      return null;
    }
    const last = activeTouch;
    if (last == null)
      return null;
    const point = touchPoint(e);
    if (resizeHandle.length > 0) {
      resizeCrop(point);
    } else {
      if (!isMoveLockedX()) {
        imageX.value += point.x - last.x;
      }
      if (!isMoveLockedY()) {
        imageY.value += point.y - last.y;
      }
    }
    activeTouch = point;
    keepImageInCrop();
    draw();
  }
  function touchEnd() {
    activeTouch = null;
    resizeHandle = "";
  }
  function rotate() {
    if (!canRotateLocal.value || previewing.value)
      return null;
    rotateDeg.value = (rotateDeg.value + 90) % 360;
    draw();
  }
  function drawPreview() {
    const context = ctx;
    const image = imageElement;
    if (context == null || image == null)
      return null;
    const canvasW = numberValue(canvasWidth.value, 0);
    const canvasH = numberValue(canvasHeight.value, 0);
    const cropW = numberValue(cropWidth.value, 0);
    const cropH = numberValue(cropHeight.value, 0);
    const previewW = Math.min(canvasW - 40, cropW);
    const previewH = cropH * previewW / Math.max(1, cropW);
    const x = (canvasW - previewW) / 2;
    const y = Math.max(20, (canvasH - previewH) / 2);
    context.clearRect(0, 0, canvasW, canvasH);
    context.fillStyle = "#000000";
    context.fillRect(0, 0, canvasW, canvasH);
    context.save();
    context.beginPath();
    context.rect(x, y, previewW, previewH);
    context.clip();
    context.fillStyle = resolveFillColor();
    context.fillRect(x, y, previewW, previewH);
    const scaleX = previewW / cropW;
    const scaleY = previewH / cropH;
    const cropL = cropLeft.value;
    const cropT = cropTop.value;
    const displayW = numberValue(displayWidth.value, 0);
    const displayH = numberValue(displayHeight.value, 0);
    context.translate(x + (imageX.value + displayW / 2 - cropL) * scaleX, y + (imageY.value + displayH / 2 - cropT) * scaleY);
    context.rotate(rotateDeg.value * Math.PI / 180);
    context.drawImage(image, -displayW * scaleX / 2, -displayH * scaleY / 2, displayW * scaleX, displayH * scaleY);
    context.restore();
    context.strokeStyle = "#ffffff";
    context.lineWidth = 1;
    context.strokeRect(x, y, previewW, previewH);
  }
  function preview() {
    previewing.value = true;
    drawPreview();
  }
  function exitPreview() {
    previewing.value = false;
    draw();
  }
  function confirm() {
    const context = exportCtx;
    const canvas = exportCanvasContext;
    const image = imageElement;
    if (context == null || canvas == null || image == null) {
      emit("error", new Error("Canvas is not ready"));
      return null;
    }
    const outputW = numberValue(outputWidth.value, 0);
    const outputH = numberValue(outputHeight.value, 0);
    const displayW = Math.max(1, numberValue(displayWidth.value, 1));
    const displayH = Math.max(1, numberValue(displayHeight.value, 1));
    const cropW = numberValue(cropWidth.value, 0);
    const cropH = numberValue(cropHeight.value, 0);
    const cropL = cropLeft.value;
    const cropT = cropTop.value;
    const imgX = numberValue(imageX.value, 0);
    const imgY = numberValue(imageY.value, 0);
    context.clearRect(0, 0, outputW, outputH);
    context.fillStyle = resolveFillColor();
    context.fillRect(0, 0, outputW, outputH);
    context.save();
    const scaleX = outputW / Math.max(1, cropW);
    const scaleY = outputH / Math.max(1, cropH);
    context.scale(scaleX, scaleY);
    context.translate(imgX + displayW / 2 - cropL, imgY + displayH / 2 - cropT);
    context.rotate(rotateDeg.value * Math.PI / 180);
    context.drawImage(image, -displayW / 2, -displayH / 2, displayW, displayH);
    context.restore();
    const quality = clamp(numberValue(props.quality, 1), 0, 1);
    const path = canvas.toDataURL("image/png", quality);
    visible.value = false;
    previewing.value = false;
    emit("confirm", new common_vendor.UTSJSONObject({
      path,
      avatar: path,
      index: currentIndex.value,
      data: returnData
    }));
  }
  function close() {
    visible.value = false;
    emit("cancel");
  }
  __expose({
    chooseImage,
    select,
    loadImage,
    rotate,
    preview,
    exitPreview,
    confirm,
    close
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: visible.value
    }, visible.value ? common_vendor.e({
      b: common_vendor.sei(canvasId.value, "canvas"),
      c: canvasId.value,
      d: common_vendor.s(canvasStyle.value),
      e: common_vendor.o(touchStart, "a1"),
      f: common_vendor.o(touchMove, "ac"),
      g: common_vendor.o(touchEnd, "78"),
      h: common_vendor.o(touchEnd, "96"),
      i: common_vendor.sei(exportCanvasId.value, "canvas"),
      j: exportCanvasId.value,
      k: common_vendor.s(exportCanvasStyle.value),
      l: !previewing.value
    }, !previewing.value ? common_vendor.e({
      m: common_vendor.o(select, "5f"),
      n: common_vendor.o(close, "8c"),
      o: showRotateButton.value
    }, showRotateButton.value ? {
      p: common_vendor.o(rotate, "aa")
    } : {}, {
      q: common_vendor.o(preview, "b7"),
      r: common_vendor.o(confirm, "0b")
    }) : {
      s: common_vendor.o(exitPreview, "b2"),
      t: common_vendor.o(confirm, "fe")
    }) : {
      v: common_vendor.o(openDefault, "b3")
    }, {
      w: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      x: `${_ctx.u_s_b_h}px`,
      y: `${_ctx.u_s_a_i_b}px`,
      z: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-199ff6a2"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-cropper/up-cropper.js.map
