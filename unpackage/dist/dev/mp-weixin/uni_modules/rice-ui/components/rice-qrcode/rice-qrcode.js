"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
require("../../libs/use/useCountDown/index.js");
require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
const uni_modules_riceUi_components_riceQrcode_type = require("./type.js");
const uni_modules_riceUi_components_riceQrcode_utils = require("./utils.js");
const quietZoneModules = 2;
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-qrcode",
  styleIsolation: "app-and-page",
  externalClasses: ["status-class"]
}, { __name: "rice-qrcode", props: {
  value: { default: "" },
  color: { default: "#000" },
  bgColor: { default: "#fff" },
  icon: {},
  iconOption: { default: () => {
    return new common_vendor.UTSJSONObject({
      width: 30,
      height: 30
    });
  } },
  level: {},
  autoExport: { type: Boolean, default: false },
  padding: {},
  eyeShape: { default: "square" },
  dotShape: { default: "square" },
  size: { default: 160 },
  statusClass: { default: "" },
  showStatus: { type: Boolean, default: false }
}, emits: ["complete", "error"], setup(__props, _a) {
  var _b;
  var __expose = _a.expose, __emit = _a.emit;
  const emit = __emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("qrcode");
  const canvasId = "rice-qrcode-" + uni_modules_riceUi_libs_utils_basic.getRandomStr();
  (_b = common_vendor.getCurrentInstance()) === null || _b === void 0 ? null : _b.proxy;
  const props = __props;
  const canvasContextRef = common_vendor.ref(null);
  const renderingContext = common_vendor.ref(null);
  const wrapperRef = common_vendor.ref(null);
  const canvasScaleApplied = common_vendor.ref(false);
  const resolvedModuleCount = common_vendor.ref(21);
  const hasCenterIcon = common_vendor.computed(() => {
    return uni_modules_riceUi_libs_utils_basic.hasStrValue(props.icon);
  });
  const getLevelWeight = (level) => {
    if (level == "L") {
      return 0;
    }
    if (level == "M") {
      return 1;
    }
    if (level == "Q") {
      return 2;
    }
    return 3;
  };
  const getSaferLogoLevel = (level) => {
    return getLevelWeight(level) >= getLevelWeight("Q") ? level : "Q";
  };
  const resolvedLevel = common_vendor.computed(() => {
    if (props.level != null) {
      return hasCenterIcon.value ? getSaferLogoLevel(props.level) : props.level;
    }
    return hasCenterIcon.value ? "Q" : "M";
  });
  const codeSize = common_vendor.computed(() => {
    return props.size > 0 ? props.size : 160;
  });
  const getPixelRatio = () => {
    const pixelRatio = common_vendor.index.getWindowInfo().pixelRatio;
    return pixelRatio > 0 ? pixelRatio : 1;
  };
  const canvasPixelWidth = common_vendor.computed(() => {
    const dpr = getPixelRatio();
    return codeSize.value * dpr;
  });
  const canvasPixelHeight = common_vendor.computed(() => {
    const dpr = getPixelRatio();
    return codeSize.value * dpr;
  });
  const resolvedPadding = common_vendor.computed(() => {
    const customPadding = props.padding;
    if (customPadding != null && customPadding >= 0) {
      return customPadding;
    }
    return codeSize.value * quietZoneModules / resolvedModuleCount.value;
  });
  const wrapperSize = common_vendor.computed(() => {
    return codeSize.value;
  });
  const iconWidth = common_vendor.computed(() => {
    return uni_modules_riceUi_components_riceQrcode_utils.getQRCodeIconMetric(props.iconOption, "width", 30);
  });
  const iconHeight = common_vendor.computed(() => {
    return uni_modules_riceUi_components_riceQrcode_utils.getQRCodeIconMetric(props.iconOption, "height", 30);
  });
  const iconWrapPadding = common_vendor.computed(() => {
    return Math.max(codeSize.value * 0.03, 4);
  });
  const isFinderPatternArea = (row, col, count) => {
    const inTop = row >= 0 && row < 7;
    const inBottom = row >= count - 7 && row < count;
    const inLeft = col >= 0 && col < 7;
    const inRight = col >= count - 7 && col < count;
    return inTop && inLeft || inTop && inRight || inBottom && inLeft;
  };
  const drawRoundedRect = (ctx, x, y, width, height, radius, color) => {
    const safeRadius = Math.min(radius, width / 2, height / 2);
    ctx.beginPath();
    ctx.moveTo(x + safeRadius, y);
    ctx.lineTo(x + width - safeRadius, y);
    ctx.arcTo(x + width, y, x + width, y + safeRadius, safeRadius);
    ctx.lineTo(x + width, y + height - safeRadius);
    ctx.arcTo(x + width, y + height, x + width - safeRadius, y + height, safeRadius);
    ctx.lineTo(x + safeRadius, y + height);
    ctx.arcTo(x, y + height, x, y + height - safeRadius, safeRadius);
    ctx.lineTo(x, y + safeRadius);
    ctx.arcTo(x, y, x + safeRadius, y, safeRadius);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  };
  const drawCircle = (ctx, centerX, centerY, radius, color) => {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  };
  const drawShapeBlock = (ctx, x, y, width, height, color, shape) => {
    if (shape == "circle") {
      drawCircle(ctx, x + width / 2, y + height / 2, Math.min(width, height) / 2, color);
      return null;
    }
    if (shape == "round") {
      drawRoundedRect(ctx, x, y, width, height, Math.min(width, height) * 0.28, color);
      return null;
    }
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  };
  const drawFinderPattern = (ctx, left, top, tileSize) => {
    const outerSize = tileSize * 7;
    const middleSize = tileSize * 5;
    const innerSize = tileSize * 3;
    const middleOffset = tileSize;
    const innerOffset = tileSize * 2;
    drawShapeBlock(ctx, left, top, outerSize, outerSize, props.color, props.eyeShape);
    drawShapeBlock(ctx, left + middleOffset, top + middleOffset, middleSize, middleSize, props.bgColor, props.eyeShape);
    drawShapeBlock(ctx, left + innerOffset, top + innerOffset, innerSize, innerSize, props.color, props.eyeShape);
  };
  const drawDataModule = (ctx, x, y, tileSize) => {
    if (props.dotShape == "dot") {
      drawCircle(ctx, x + tileSize / 2, y + tileSize / 2, tileSize * 0.28, props.color);
      return null;
    }
    ctx.fillStyle = props.color;
    ctx.fillRect(x, y, tileSize, tileSize);
  };
  const syncModuleCount = () => {
    if (!uni_modules_riceUi_libs_utils_basic.hasStrValue(props.value)) {
      resolvedModuleCount.value = 21;
      return null;
    }
    try {
      resolvedModuleCount.value = uni_modules_riceUi_components_riceQrcode_utils.createQRCodeModules(props.value, resolvedLevel.value).length;
    } catch (error) {
      resolvedModuleCount.value = 21;
    }
  };
  const syncCanvasSize = () => {
    const ctx = renderingContext.value;
    if (ctx == null) {
      return [codeSize.value, codeSize.value];
    }
    const canvas = ctx.canvas;
    const dpr = getPixelRatio();
    const displayWidth = codeSize.value;
    const displayHeight = codeSize.value;
    const targetWidth = displayWidth * dpr;
    const targetHeight = displayHeight * dpr;
    if (canvas.width != targetWidth || canvas.height != targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      canvasScaleApplied.value = false;
    }
    if (!canvasScaleApplied.value) {
      ctx.scale(dpr, dpr);
      canvasScaleApplied.value = true;
    }
    return [displayWidth, displayHeight];
  };
  const loadCanvasImage = (src) => {
    return new Promise((resolve) => {
      const canvasContext = canvasContextRef.value;
      if (canvasContext == null) {
        resolve(null);
        return null;
      }
      const image = canvasContext.createImage();
      image.onload = () => {
        resolve(image);
      };
      image.src = src;
    });
  };
  const emitComplete = (tempFilePath = null) => {
    emit("complete", new uni_modules_riceUi_components_riceQrcode_type.QRCodeCompletePayload({
      tempFilePath,
      autoExport: props.autoExport
    }));
  };
  const emitError = (payload) => {
    emit("error", payload);
  };
  const getTempFilePath = () => {
    return new Promise((resolve) => {
      const ctx = renderingContext.value;
      if (ctx == null) {
        resolve("");
        return null;
      }
      const dataUrl = ctx.canvas.toDataURL("image/png");
      resolve(dataUrl);
    });
  };
  const drawCenterIcon = (ctx) => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      if (!hasCenterIcon.value) {
        return Promise.resolve(null);
      }
      const image = yield loadCanvasImage(props.icon);
      if (image == null) {
        return Promise.resolve(null);
      }
      const wrapWidth = iconWidth.value + iconWrapPadding.value * 2;
      const wrapHeight = iconHeight.value + iconWrapPadding.value * 2;
      const wrapLeft = (codeSize.value - wrapWidth) / 2;
      const wrapTop = (codeSize.value - wrapHeight) / 2;
      const iconLeft = (codeSize.value - iconWidth.value) / 2;
      const iconTop = (codeSize.value - iconHeight.value) / 2;
      ctx.fillStyle = props.bgColor;
      ctx.fillRect(wrapLeft, wrapTop, wrapWidth, wrapHeight);
      ctx.drawImage(image, iconLeft, iconTop, iconWidth.value, iconHeight.value);
    });
  };
  const drawQRCode = () => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      try {
        yield common_vendor.nextTick$1();
        if (!uni_modules_riceUi_libs_utils_basic.hasStrValue(props.value)) {
          const ctx_1 = renderingContext.value;
          if (ctx_1 != null) {
            const sizeInfo_1 = syncCanvasSize();
            ctx_1.clearRect(0, 0, sizeInfo_1[0], sizeInfo_1[1]);
            ctx_1.fillStyle = props.bgColor;
            ctx_1.fillRect(0, 0, sizeInfo_1[0], sizeInfo_1[1]);
          }
          emitError(new uni_modules_riceUi_components_riceQrcode_type.QRCodeError({
            code: 1,
            errMsg: "qrcode value is required"
          }));
          return Promise.resolve(null);
        }
        const modules = uni_modules_riceUi_components_riceQrcode_utils.createQRCodeModules(props.value, resolvedLevel.value);
        const ctx = renderingContext.value;
        if (ctx == null) {
          emitError(new uni_modules_riceUi_components_riceQrcode_type.QRCodeError({
            code: 2,
            errMsg: "draw qrcode failedd"
          }));
          return Promise.resolve(null);
        }
        const sizeInfo = syncCanvasSize();
        const drawWidth = sizeInfo[0];
        const drawHeight = sizeInfo[1];
        const count = modules.length;
        const quietZone = resolvedPadding.value;
        const availableWidth = Math.max(drawWidth - quietZone * 2, 0);
        const availableHeight = Math.max(drawHeight - quietZone * 2, 0);
        const tileSize = Math.min(availableWidth, availableHeight) / count;
        const offsetX = (drawWidth - tileSize * count) / 2;
        const offsetY = (drawHeight - tileSize * count) / 2;
        ctx.clearRect(0, 0, drawWidth, drawHeight);
        ctx.fillStyle = props.bgColor;
        ctx.fillRect(0, 0, drawWidth, drawHeight);
        ctx.fillStyle = props.color;
        for (let row = 0; row < count; row++) {
          for (let col = 0; col < count; col++) {
            if (!modules[row][col]) {
              continue;
            }
            if (isFinderPatternArea(row, col, count)) {
              continue;
            }
            const x = offsetX + col * tileSize;
            const y = offsetY + row * tileSize;
            drawDataModule(ctx, x, y, tileSize);
          }
        }
        drawFinderPattern(ctx, offsetX, offsetY, tileSize);
        drawFinderPattern(ctx, offsetX + (count - 7) * tileSize, offsetY, tileSize);
        drawFinderPattern(ctx, offsetX, offsetY + (count - 7) * tileSize, tileSize);
        yield drawCenterIcon(ctx);
        if (props.autoExport) {
          yield common_vendor.nextTick$1();
          const tempFilePath = yield getTempFilePath();
          emitComplete(tempFilePath);
        } else {
          emitComplete(null);
        }
      } catch (error) {
        emitError(new uni_modules_riceUi_components_riceQrcode_type.QRCodeError({
          code: 2,
          errMsg: "draw qrcode failedd"
        }));
      }
    });
  };
  const createCanvasContext = () => {
    var _a2;
    common_vendor.index.createCanvasContextAsync({
      id: canvasId,
      component: (_a2 = common_vendor.getCurrentInstance()) === null || _a2 === void 0 ? null : _a2.proxy,
      success: (context) => {
        canvasContextRef.value = context;
        renderingContext.value = context.getContext("2d");
        drawQRCode();
      },
      fail: (err) => {
        emitError(new uni_modules_riceUi_components_riceQrcode_type.QRCodeError({
          code: 0,
          errMsg: err.errMsg
        }));
      }
    });
  };
  const rootStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    css.set("width", `${wrapperSize.value}px`);
    css.set("height", `${wrapperSize.value}px`);
    css.set("background-color", props.bgColor);
    return css;
  });
  const contentStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    css.set("width", `${codeSize.value}px`);
    css.set("height", `${codeSize.value}px`);
    return css;
  });
  common_vendor.watch([() => {
    return props.size > 0 ? props.size : 0;
  }, () => {
    return props.padding != null ? props.padding : -1;
  }], () => {
    drawQRCode();
  });
  common_vendor.watch([() => {
    return props.value;
  }, () => {
    return props.color;
  }, () => {
    return props.bgColor;
  }, () => {
    return props.level;
  }, () => {
    return props.eyeShape;
  }, () => {
    return props.dotShape;
  }, () => {
    return props.autoExport;
  }, () => {
    return props.icon;
  }, () => {
    return iconWidth.value;
  }, () => {
    return iconHeight.value;
  }], () => {
    syncModuleCount();
    drawQRCode();
  });
  common_vendor.onMounted(() => {
    syncModuleCount();
    createCanvasContext();
  });
  __expose({
    getTempFilePath
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: common_vendor.sei(canvasId, "canvas"),
      b: canvasId,
      c: common_vendor.unref(canvasPixelWidth),
      d: common_vendor.unref(canvasPixelHeight),
      e: common_vendor.s(common_vendor.unref(contentStyle)),
      f: _ctx.$slots["status"] != null && _ctx.showStatus
    }, _ctx.$slots["status"] != null && _ctx.showStatus ? {
      g: common_vendor.n(_ctx.statusClass)
    } : {}, {
      h: common_vendor.sei(common_vendor.gei(_ctx, "", "r0-d1da0318"), "view", wrapperRef, {
        "k": "wrapperRef"
      }),
      i: common_vendor.n(common_vendor.unref(ns).theme()),
      j: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      k: common_vendor.s(common_vendor.unref(rootStyle)),
      l: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d1da0318"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-qrcode/rice-qrcode.js.map
