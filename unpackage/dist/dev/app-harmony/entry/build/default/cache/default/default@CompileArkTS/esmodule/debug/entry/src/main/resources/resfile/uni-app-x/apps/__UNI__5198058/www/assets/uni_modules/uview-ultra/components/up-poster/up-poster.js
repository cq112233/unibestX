import { g as getQrRenderCount, c as createQrCells } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-qrcode/qrcode&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpPosterUpPoster";
const { ref, computed, getCurrentInstance, nextTick } = globalThis.Vue;
class PosterItem extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          type: { type: String, optional: false },
          text: { type: String, optional: false },
          src: { type: String, optional: false },
          css: { type: "Unknown", optional: false }
        };
      },
      name: "PosterItem"
    };
  }
  constructor(options, metadata = PosterItem.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.type = this.__props__.type;
    this.text = this.__props__.text;
    this.src = this.__props__.src;
    this.css = this.__props__.css;
    delete this.__props__;
  }
}
class GradientStop extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          color: { type: String, optional: false },
          offset: { type: Number, optional: false }
        };
      },
      name: "GradientStop"
    };
  }
  constructor(options, metadata = GradientStop.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.color = this.__props__.color;
    this.offset = this.__props__.offset;
    delete this.__props__;
  }
}
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-poster"
  },
  __dynamicSharedData: true,
  __hash: "6763c00a",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-poster/up-poster.uvue",
  __name: "up-poster",
  props: {
    json: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  emits: ["export", "error"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpPosterUpPosterSharedData", sharedDataClassId: 0 })));
    function toObject(value = null) {
      if (value == null) {
        return new UTSJSONObject({});
      }
      return value;
    }
    function stringValue(value = null, fallback = "") {
      return value == null ? fallback : value.toString();
    }
    function numberValue(value = null, fallback = 0) {
      if (typeof value === "number") {
        return value;
      }
      if (value == null) {
        return fallback;
      }
      const text = value.toString();
      if (text.endsWith("rpx")) {
        const parsed_1 = parseFloat(text.substring(0, text.length - 3));
        return isNaN(parsed_1) ? fallback : parsed_1 * uni.getWindowInfo().windowWidth / 750;
      }
      if (text.endsWith("px")) {
        const parsed_2 = parseFloat(text.substring(0, text.length - 2));
        return isNaN(parsed_2) ? fallback : parsed_2;
      }
      const parsed = parseFloat(text);
      return isNaN(parsed) ? fallback : parsed;
    }
    function colorValue(value = null, fallback) {
      const text = stringValue(value, fallback);
      return text.length > 0 ? text : fallback;
    }
    function splitGradientArgs(value) {
      const result = [];
      let depth = 0;
      let start = 0;
      for (let i = 0; i < value.length; i++) {
        const char = value.substring(i, i + 1);
        if (char == "(") {
          depth++;
        } else if (char == ")") {
          depth--;
        } else if (char == "," && depth == 0) {
          result.push(value.substring(start, i).trim());
          start = i + 1;
        }
      }
      const tail = value.substring(start).trim();
      if (tail.length > 0) {
        result.push(tail);
      }
      return result;
    }
    function gradientBody(value) {
      const start = value.indexOf("(");
      const end = value.lastIndexOf(")");
      if (start < 0 || end <= start) {
        return "";
      }
      return value.substring(start + 1, end);
    }
    function isGradientDirection(value) {
      return value.endsWith("deg") || value.startsWith("to ");
    }
    function parseGradientStop(value, index, total) {
      const parts = value.split(" ");
      const color = parts.length > 0 ? parts[0].trim() : "#ffffff";
      let offset = total <= 1 ? 0 : index / (total - 1);
      for (let i = 1; i < parts.length; i++) {
        const part = parts[i].trim();
        if (part.endsWith("%")) {
          const parsed = parseFloat(part.substring(0, part.length - 1));
          if (!isNaN(parsed)) {
            offset = Math.max(0, Math.min(1, parsed / 100));
          }
        }
      }
      return new GradientStop({
        color: color.length > 0 ? color : "#ffffff",
        offset
      });
    }
    function parseGradientStops(background) {
      const args = splitGradientArgs(gradientBody(background));
      const firstColorIndex = args.length > 0 && isGradientDirection(args[0]) ? 1 : 0;
      const total = args.length - firstColorIndex;
      const stops = [];
      for (let i = firstColorIndex; i < args.length; i++) {
        stops.push(parseGradientStop(args[i], i - firstColorIndex, total));
      }
      if (stops.length == 0) {
        stops.push(new GradientStop({ color: "#ffffff", offset: 0 }));
        stops.push(new GradientStop({ color: "#ffffff", offset: 1 }));
      } else if (stops.length == 1) {
        stops.push(new GradientStop({ color: stops[0].color, offset: 1 }));
      }
      return stops;
    }
    function gradientAngle(background) {
      const args = splitGradientArgs(gradientBody(background));
      if (args.length == 0) {
        return 135;
      }
      const direction = args[0];
      if (direction.endsWith("deg")) {
        const parsed = parseFloat(direction.substring(0, direction.length - 3));
        return isNaN(parsed) ? 135 : parsed;
      }
      if (direction == "to right")
        return 90;
      if (direction == "to left")
        return 270;
      if (direction == "to bottom")
        return 180;
      if (direction == "to top")
        return 0;
      if (direction == "to right bottom" || direction == "to bottom right")
        return 135;
      if (direction == "to left bottom" || direction == "to bottom left")
        return 225;
      if (direction == "to right top" || direction == "to top right")
        return 45;
      if (direction == "to left top" || direction == "to top left")
        return 315;
      return 135;
    }
    function createItem(raw = null) {
      const obj = toObject(raw);
      return new PosterItem({
        type: stringValue(obj["type"]),
        text: stringValue(obj["text"]),
        src: stringValue(obj["src"]),
        css: toObject(obj["css"])
      });
    }
    function makeId() {
      return "up-poster-canvas-" + Date.now().toString();
    }
    function getPixelRatio() {
      const info = uni.getSystemInfoSync();
      if (info.pixelRatio > 0) {
        return info.pixelRatio;
      }
      return 1;
    }
    const props = __props;
    const emit = __emit;
    const instance = getCurrentInstance();
    const canvasId = ref(makeId());
    const showCanvas = ref(true);
    const canvasWidth = ref(375);
    const canvasHeight = ref(557);
    let canvasContext = null;
    let ctx = null;
    const canvasStyle = computed(() => {
      return new UTSJSONObject({
        width: canvasWidth.value.toString() + "px",
        height: canvasHeight.value.toString() + "px"
      });
    });
    function getJson() {
      return toObject(props.json);
    }
    function getPosterCss() {
      return toObject(getJson()["css"]);
    }
    function getViews() {
      const views = getJson()["views"];
      if (views == null) {
        return [];
      }
      return views;
    }
    function prepareSize() {
      const css = getPosterCss();
      canvasWidth.value = numberValue(css["width"], 375);
      canvasHeight.value = numberValue(css["height"], 557);
    }
    function initCanvas() {
      return new Promise((resolve, reject) => {
        uni.createCanvasContextAsync({
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
            resolve();
          },
          fail: (err) => {
            reject(err);
          }
        });
      });
    }
    function fillRoundRect(x, y, width, height, radius) {
      const context = ctx;
      if (context == null)
        return null;
      if (radius <= 0) {
        context.fillRect(x, y, width, height);
        return null;
      }
      const r = Math.min(radius, Math.min(width, height) / 2);
      context.beginPath();
      context.moveTo(x + r, y);
      context.lineTo(x + width - r, y);
      context.quadraticCurveTo(x + width, y, x + width, y + r);
      context.lineTo(x + width, y + height - r);
      context.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
      context.lineTo(x + r, y + height);
      context.quadraticCurveTo(x, y + height, x, y + height - r);
      context.lineTo(x, y + r);
      context.quadraticCurveTo(x, y, x + r, y);
      context.closePath();
      context.fill();
    }
    function clipRadiusMask(x, y, width, height, radius) {
      const context = ctx;
      if (context == null)
        return null;
      context.save();
      context.globalCompositeOperation = "destination-in";
      context.fillStyle = "#000000";
      fillRoundRect(x, y, width, height, radius);
      context.restore();
      context.globalCompositeOperation = "source-over";
    }
    function gradientColorAt(stops, progress, fallback) {
      if (stops.length == 0)
        return fallback;
      let current = stops[0];
      for (let i = 1; i < stops.length; i++) {
        if (progress <= stops[i].offset) {
          const next = stops[i];
          const span = next.offset - current.offset;
          const ratio = span <= 0 ? 0 : (progress - current.offset) / span;
          return ratio < 0.5 ? current.color : next.color;
        }
        current = stops[i];
      }
      return current.color;
    }
    function fillSteppedLinearGradient(background, x, y, width, height, radius, fallback) {
      const context = ctx;
      if (context == null)
        return null;
      const stops = parseGradientStops(background);
      const angle = gradientAngle(background) % 360;
      const horizontal = angle == 90 || angle == 270;
      const steps = Math.max(1, Math.floor(horizontal ? width : height));
      for (let i = 0; i < steps; i++) {
        const rawProgress = steps <= 1 ? 0 : i / (steps - 1);
        const progress = angle == 270 || angle == 0 ? 1 - rawProgress : rawProgress;
        context.fillStyle = gradientColorAt(stops, progress, fallback);
        if (horizontal) {
          context.fillRect(x + i, y, 1.5, height);
        } else {
          context.fillRect(x, y + i, width, 1.5);
        }
      }
      if (radius > 0) {
        clipRadiusMask(x, y, width, height, radius);
      }
    }
    function fillSteppedRadialGradient(background, x, y, width, height, radius, fallback) {
      const context = ctx;
      if (context == null)
        return null;
      const stops = parseGradientStops(background);
      const centerX = x + width / 2;
      const centerY = y + height / 2;
      const maxRadius = Math.max(width, height) / 2;
      const steps = Math.max(1, Math.floor(maxRadius));
      for (let i = steps; i >= 0; i--) {
        const progress = steps <= 0 ? 0 : i / steps;
        context.fillStyle = gradientColorAt(stops, progress, fallback);
        context.beginPath();
        context.arc(centerX, centerY, i, 0, Math.PI * 2);
        context.closePath();
        context.fill();
      }
      if (radius > 0) {
        clipRadiusMask(x, y, width, height, radius);
      }
    }
    function fillCanvasGradient(background, x, y, width, height, radius) {
      const context = ctx;
      if (context == null)
        return false;
      const stops = parseGradientStops(background);
      if (background.indexOf("radial-gradient") >= 0) {
        const centerX = x + width / 2;
        const centerY = y + height / 2;
        const maxRadius = Math.max(width, height) / 2;
        const gradient_1 = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
        for (let i = 0; i < stops.length; i++) {
          gradient_1.addColorStop(stops[i].offset, stops[i].color);
        }
        context.fillStyle = gradient_1;
        fillRoundRect(x, y, width, height, radius);
        return true;
      }
      const angle = gradientAngle(background) % 360;
      let startX = x;
      let startY = y;
      let endX = x + width;
      let endY = y + height;
      if (angle == 0) {
        startX = x;
        startY = y + height;
        endX = x;
        endY = y;
      } else if (angle == 90) {
        startX = x;
        startY = y;
        endX = x + width;
        endY = y;
      } else if (angle == 180) {
        startX = x;
        startY = y;
        endX = x;
        endY = y + height;
      } else if (angle == 270) {
        startX = x + width;
        startY = y;
        endX = x;
        endY = y;
      }
      const gradient = context.createLinearGradient(startX, startY, endX, endY);
      for (let i = 0; i < stops.length; i++) {
        gradient.addColorStop(stops[i].offset, stops[i].color);
      }
      context.fillStyle = gradient;
      fillRoundRect(x, y, width, height, radius);
      return true;
    }
    function fillGradient(background, x, y, width, height, radius, fallback) {
      if (fillCanvasGradient(background, x, y, width, height, radius)) {
        return null;
      }
      if (background.indexOf("radial-gradient") >= 0) {
        fillSteppedRadialGradient(background, x, y, width, height, radius, fallback);
        return null;
      }
      fillSteppedLinearGradient(background, x, y, width, height, radius, fallback);
    }
    function fillBackground(value = null, x, y, width, height, radius, fallback) {
      const context = ctx;
      if (context == null)
        return null;
      const background = colorValue(value, fallback);
      if (background.indexOf("gradient") >= 0) {
        fillGradient(background, x, y, width, height, radius, fallback);
        return null;
      }
      context.fillStyle = background;
      fillRoundRect(x, y, width, height, radius);
    }
    function drawView(item) {
      const context = ctx;
      if (context == null)
        return null;
      const css = item.css;
      const x = numberValue(css["left"], 0);
      const y = numberValue(css["top"], 0);
      const width = numberValue(css["width"], 0);
      const height = numberValue(css["height"], 0);
      fillBackground(css["background"], x, y, width, height, numberValue(css["radius"], 0), "#ffffff");
    }
    function wrapText(text, maxWidth, maxLines) {
      const context = ctx;
      const lines = [];
      if (context == null || text.length == 0)
        return lines;
      let current = "";
      for (let i = 0; i < text.length; i++) {
        const next = current + text.substring(i, i + 1);
        if (context.measureText(next).width > maxWidth && current.length > 0) {
          lines.push(current);
          current = text.substring(i, i + 1);
          if (lines.length >= maxLines)
            break;
        } else {
          current = next;
        }
      }
      if (lines.length < maxLines && current.length > 0) {
        lines.push(current);
      }
      if (lines.length == maxLines && text.length > lines.join("").length) {
        let last = lines[maxLines - 1];
        while (last.length > 0 && context.measureText(last + "...").width > maxWidth) {
          last = last.substring(0, last.length - 1);
        }
        lines[maxLines - 1] = last + "...";
      }
      return lines;
    }
    function drawText(item) {
      const context = ctx;
      if (context == null)
        return null;
      const css = item.css;
      const x = numberValue(css["left"], 0);
      const y = numberValue(css["top"], 0);
      const width = numberValue(css["width"], canvasWidth.value - x);
      const fontSize = numberValue(css["fontSize"], 14);
      const lineHeight = numberValue(css["lineHeight"], fontSize + 6);
      const lineClamp = numberValue(css["lineClamp"], 1);
      context.fillStyle = colorValue(css["color"], "#333333");
      context.font = stringValue(css["fontWeight"]) == "bold" ? "bold " + fontSize.toString() + "px sans-serif" : fontSize.toString() + "px sans-serif";
      const lines = wrapText(item.text, width, lineClamp);
      for (let i = 0; i < lines.length; i++) {
        context.fillText(lines[i], x, y + fontSize + i * lineHeight);
      }
    }
    function drawImageFallback(x, y, width, height, radius) {
      const context = ctx;
      if (context == null)
        return null;
      context.fillStyle = "#eef2f7";
      fillRoundRect(x, y, width, height, radius);
    }
    function drawImageBox(item) {
      return new Promise((resolve) => {
        const context = ctx;
        if (context == null) {
          resolve();
          return null;
        }
        const css = item.css;
        const x = numberValue(css["left"], 0);
        const y = numberValue(css["top"], 0);
        const width = numberValue(css["width"], 0);
        const height = numberValue(css["height"], 0);
        uni.getImageInfo({
          src: item.src,
          success: (res) => {
            const canvas = canvasContext;
            if (canvas == null) {
              drawImageFallback(x, y, width, height, numberValue(css["radius"], 0));
              resolve();
              return null;
            }
            const image = canvas.createImage();
            image.onload = () => {
              context.drawImage(image, x, y, width, height);
              resolve();
            };
            image.onerror = () => {
              drawImageFallback(x, y, width, height, numberValue(css["radius"], 0));
              resolve();
            };
            image.src = res.path;
          },
          fail: () => {
            drawImageFallback(x, y, width, height, numberValue(css["radius"], 0));
            resolve();
          }
        });
      });
    }
    function drawQrCode(item) {
      const context = ctx;
      if (context == null)
        return null;
      const css = item.css;
      const x = numberValue(css["left"], 0);
      const y = numberValue(css["top"], 0);
      const width = numberValue(css["width"], 0);
      const height = numberValue(css["height"], width);
      const val = item.text.length > 0 ? item.text : item.src;
      if (val.length == 0 || width <= 0 || height <= 0) {
        drawImageFallback(x, y, width, height, numberValue(css["radius"], 0));
        return null;
      }
      const foreground = colorValue(css["foreground"], "#000000");
      const background = colorValue(css["background"], "#ffffff");
      const pdground = colorValue(css["pdground"], foreground);
      const level = numberValue(css["lv"], 3);
      const count = getQrRenderCount(val, level);
      const cells = createQrCells(val, foreground, background, pdground, level);
      const cellSize = Math.min(width, height) / count;
      context.fillStyle = background;
      context.fillRect(x, y, width, height);
      for (let row = 0; row < count; row++) {
        for (let col = 0; col < count; col++) {
          const index = row * count + col;
          if (index >= cells.length)
            continue;
          const cell = cells[index];
          if (!cell.getBoolean("dark", false))
            continue;
          context.fillStyle = cell.getString("color", foreground);
          context.fillRect(x + col * cellSize, y + row * cellSize, cellSize + 0.5, cellSize + 0.5);
        }
      }
    }
    function drawItem(item) {
      return new Promise((resolve) => {
        if (item.type == "view") {
          drawView(item);
          resolve();
        } else if (item.type == "text") {
          drawText(item);
          resolve();
        } else if (item.type == "image") {
          drawImageBox(item).then(() => {
            resolve();
          });
        } else if (item.type == "qrcode") {
          drawQrCode(item);
          resolve();
        } else {
          resolve();
        }
      });
    }
    function drawItems(views, index) {
      return new Promise((resolve) => {
        if (index >= views.length) {
          resolve();
          return null;
        }
        drawItem(createItem(views[index])).then(() => {
          drawItems(views, index + 1).then(() => {
            resolve();
          });
        });
      });
    }
    function drawPosterSync() {
      return new Promise((resolve) => {
        const context = ctx;
        if (context == null) {
          resolve();
          return null;
        }
        const css = getPosterCss();
        context.clearRect(0, 0, canvasWidth.value, canvasHeight.value);
        fillBackground(css["background"], 0, 0, canvasWidth.value, canvasHeight.value, 0, "#ffffff");
        const views = getViews();
        drawItems(views, 0).then(() => {
          resolve();
        });
      });
    }
    function drawPoster() {
      return new Promise((resolve) => {
        drawPosterSync().then(() => {
          resolve();
        });
      });
    }
    function generatePoster() {
      return new Promise((resolve, reject) => {
        prepareSize();
        showCanvas.value = true;
        nextTick(() => {
          initCanvas().then(() => {
            drawPoster().then(() => {
              if (canvasContext == null) {
                reject(new Error("Canvas is not ready"));
                return null;
              }
              const dataUrl = canvasContext.toDataURL("image/png", 1);
              const base64 = dataUrl.indexOf(",") >= 0 ? dataUrl.substring(dataUrl.indexOf(",") + 1) : dataUrl;
              const fileSystemManager = uni.getFileSystemManager();
              const filePath = `${uni.env.USER_DATA_PATH}/up-poster-${Date.now()}.png`;
              fileSystemManager.writeFile({
                filePath,
                encoding: "base64",
                data: base64,
                success: () => {
                  resolve(filePath);
                },
                fail: (err = null) => {
                  reject(new Error("write poster file failed: " + UTS.JSON.stringify(err)));
                }
              });
            });
          }).catch((err = null) => {
            reject(err);
          });
        });
      });
    }
    function exportImage() {
      return new Promise((resolve, reject) => {
        generatePoster().then((path) => {
          const result = new UTSJSONObject({
            width: canvasWidth.value,
            height: canvasHeight.value,
            path
          });
          emit("export", result);
          resolve(result);
        }).catch((err = null) => {
          emit("error", err);
          reject(err);
        });
      });
    }
    __expose({
      generatePoster,
      exportImage
    });
    return () => {
      "raw js";
      const _component_canvas = _resolveComponent("canvas");
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(showCanvas.value));
      }, () => {
        const n2 = _createSharedDataComponentWithFallback(_component_canvas, "1e70ac78", {
          class: "up-poster__canvas",
          id: () => {
            return canvasId.value;
          },
          "canvas-id": () => {
            return canvasId.value;
          },
          style: () => {
            return canvasStyle.value;
          }
        });
        _setSharedData(__sharedData, 1, n2?.sharedData);
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_3 as _
};
//# sourceMappingURL=up-poster.js.map
