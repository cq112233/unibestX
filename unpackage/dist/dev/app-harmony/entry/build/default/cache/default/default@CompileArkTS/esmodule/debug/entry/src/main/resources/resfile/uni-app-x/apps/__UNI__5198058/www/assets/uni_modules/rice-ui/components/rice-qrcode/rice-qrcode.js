import { h as hasStrValue, f as getRandomStr } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/utils/basic&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useCountDown/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/store/useConfig&";
import { u as useNamespace } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useNamespace/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/usePopup/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useChildren&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useParent&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useSafeArea/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useTouch/index&";
import { Q as QRCodeError, a as QRCodeCompletePayload } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-qrcode/type&";
import { g as getQRCodeIconMetric, c as createQRCodeModules } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-qrcode/utils&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataSlot: _createSharedDataSlot, createSharedDataIf: _createSharedDataIf, setSharedDataTemplateRef: _setSharedDataTemplateRef } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceQrcodeRiceQrcode";
const { getCurrentInstance, ref, computed, nextTick, watch, onMounted } = globalThis.Vue;
const quietZoneModules = 2;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-qrcode",
    styleIsolation: "app-and-page",
    externalClasses: ["status-class"]
  },
  __dynamicSharedData: true,
  __hash: "77b4081c",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-qrcode/rice-qrcode.uvue",
  __name: "rice-qrcode",
  props: {
    value: { default: "", type: String },
    color: { default: "#000", type: String },
    bgColor: { default: "#fff", type: String },
    icon: { type: String },
    iconOption: { default: () => {
      return new UTSJSONObject({
        width: 30,
        height: 30
      });
    }, type: null },
    level: { type: String },
    autoExport: { type: Boolean, default: false },
    padding: { type: Number },
    eyeShape: { default: "square", type: String },
    dotShape: { default: "square", type: String },
    size: { default: 160, type: Number },
    statusClass: { default: "", type: String },
    showStatus: { type: Boolean, default: false }
  },
  emits: ["complete", "error"],
  setup(__props, _a) {
    var _b;
    var __expose = _a.expose, __emit = _a.emit, $slots = _a.slots;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceQrcodeRiceQrcodeSharedData", sharedDataClassId: 0 })));
    const emit = __emit;
    const ns = useNamespace("qrcode");
    const canvasId = "rice-qrcode-" + getRandomStr();
    (_b = getCurrentInstance()) === null || _b === void 0 ? null : _b.proxy;
    const props = __props;
    const canvasContextRef = ref(null);
    const renderingContext = ref(null);
    const wrapperRef = ref(null);
    const canvasScaleApplied = ref(false);
    const resolvedModuleCount = ref(21);
    const hasCenterIcon = computed(() => {
      return hasStrValue(props.icon);
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
    const resolvedLevel = computed(() => {
      if (props.level != null) {
        return hasCenterIcon.value ? getSaferLogoLevel(props.level) : props.level;
      }
      return hasCenterIcon.value ? "Q" : "M";
    });
    const codeSize = computed(() => {
      return props.size > 0 ? props.size : 160;
    });
    const getPixelRatio = () => {
      const pixelRatio = uni.getWindowInfo().pixelRatio;
      return pixelRatio > 0 ? pixelRatio : 1;
    };
    const canvasPixelWidth = computed(() => {
      const dpr = getPixelRatio();
      return codeSize.value * dpr;
    });
    const canvasPixelHeight = computed(() => {
      const dpr = getPixelRatio();
      return codeSize.value * dpr;
    });
    const resolvedPadding = computed(() => {
      const customPadding = props.padding;
      if (customPadding != null && customPadding >= 0) {
        return customPadding;
      }
      return codeSize.value * quietZoneModules / resolvedModuleCount.value;
    });
    const wrapperSize = computed(() => {
      return codeSize.value;
    });
    const iconWidth = computed(() => {
      return getQRCodeIconMetric(props.iconOption, "width", 30);
    });
    const iconHeight = computed(() => {
      return getQRCodeIconMetric(props.iconOption, "height", 30);
    });
    const iconWrapPadding = computed(() => {
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
      if (!hasStrValue(props.value)) {
        resolvedModuleCount.value = 21;
        return null;
      }
      try {
        resolvedModuleCount.value = createQRCodeModules(props.value, resolvedLevel.value).length;
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
      emit("complete", new QRCodeCompletePayload({
        tempFilePath,
        autoExport: props.autoExport
      }));
    };
    const emitError = (payload) => {
      emit("error", payload);
    };
    const getTempFilePath = () => {
      return new Promise((resolve) => {
        const target = wrapperRef.value;
        if (target == null) {
          resolve("");
          return null;
        }
        target.takeSnapshot(new UTSJSONObject({
          type: "file",
          format: "png",
          success: (res) => {
            resolve(res.tempFilePath);
          },
          fail: () => {
            resolve("");
          }
        }));
        return null;
      });
    };
    const drawCenterIcon = async (ctx) => {
      if (!hasCenterIcon.value) {
        return Promise.resolve(null);
      }
      const image = await loadCanvasImage(props.icon);
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
    };
    const drawQRCode = async () => {
      try {
        await nextTick();
        if (!hasStrValue(props.value)) {
          const ctx_1 = renderingContext.value;
          if (ctx_1 != null) {
            const sizeInfo_1 = syncCanvasSize();
            ctx_1.clearRect(0, 0, sizeInfo_1[0], sizeInfo_1[1]);
            ctx_1.fillStyle = props.bgColor;
            ctx_1.fillRect(0, 0, sizeInfo_1[0], sizeInfo_1[1]);
          }
          emitError(new QRCodeError({
            code: 1,
            errMsg: "qrcode value is required"
          }));
          return Promise.resolve(null);
        }
        const modules = createQRCodeModules(props.value, resolvedLevel.value);
        const ctx = renderingContext.value;
        if (ctx == null) {
          emitError(new QRCodeError({
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
        await drawCenterIcon(ctx);
        if (props.autoExport) {
          await nextTick();
          const tempFilePath = await getTempFilePath();
          emitComplete(tempFilePath);
        } else {
          emitComplete(null);
        }
      } catch (error) {
        emitError(new QRCodeError({
          code: 2,
          errMsg: "draw qrcode failedd"
        }));
      }
    };
    const createCanvasContext = () => {
      var _a2;
      uni.createCanvasContextAsync({
        id: canvasId,
        component: (_a2 = getCurrentInstance()) === null || _a2 === void 0 ? null : _a2.proxy,
        success: (context) => {
          canvasContextRef.value = context;
          renderingContext.value = context.getContext("2d");
          drawQRCode();
        },
        fail: (err) => {
          emitError(new QRCodeError({
            code: 0,
            errMsg: err.errMsg
          }));
        }
      });
    };
    const rootStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      css.set("width", `${wrapperSize.value}px`);
      css.set("height", `${wrapperSize.value}px`);
      css.set("background-color", props.bgColor);
      return css;
    });
    const contentStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      css.set("width", `${codeSize.value}px`);
      css.set("height", `${codeSize.value}px`);
      return css;
    });
    watch([() => {
      return props.size > 0 ? props.size : 0;
    }, () => {
      return props.padding != null ? props.padding : -1;
    }], () => {
      drawQRCode();
    });
    watch([() => {
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
    onMounted(() => {
      syncModuleCount();
      createCanvasContext();
    });
    __expose({
      getTempFilePath
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_canvas = _resolveComponent("canvas");
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 4, ["rice-qrcode", _unref(ns).theme()]);
        _setSharedDataStyle(__sharedData, 5, _unref(rootStyle));
      });
      const n0 = _createSharedDataComponentWithFallback(_component_canvas, "73f32679", {
        class: "rice-qrcode__canvas",
        id: () => {
          return canvasId;
        },
        "canvas-id": () => {
          return canvasId;
        },
        width: () => {
          return _unref(canvasPixelWidth);
        },
        height: () => {
          return _unref(canvasPixelHeight);
        },
        style: () => {
          return _unref(contentStyle);
        },
        type: "2d"
      });
      _setSharedData(__sharedData, 0, n0?.sharedData);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 1, _toSharedDataBoolean($slots["status"] != null && __props.showStatus));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataClass(__sharedData, 2, ["rice-qrcode__status", __props.statusClass]);
        });
        _createSharedDataSlot("status", null, null);
      });
      _setSharedDataTemplateRef(__sharedData, 3, (n5) => {
        _setTemplateRef(n5, wrapperRef, null, "wrapperRef");
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
//# sourceMappingURL=rice-qrcode.js.map
