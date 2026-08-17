import { a as LimeSignatureOptions, c as LimeSignaturePoint } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-signature/index&";
let points = [];
let undoStack = [];
let redoStack = [];
let lastX = 0;
let lastY = 0;
class Signature {
  constructor(el) {
    var _a;
    this.options = new LimeSignatureOptions({
      penColor: "black",
      openSmooth: true,
      disableScroll: true,
      disabled: false,
      penSize: 2,
      minLineWidth: 2,
      maxLineWidth: 6,
      minSpeed: 1.5,
      maxWidthDiffRate: 20,
      maxHistoryLength: 20
    });
    this.isEmpty = true;
    this.isDrawing = false;
    this.touchstartCallbackWrapper = null;
    this.touchmoveCallbackWrapper = null;
    this.touchendCallbackWrapper = null;
    this.change = null;
    this.onTouchStart = (event) => {
      if (this.options.disabled) {
        return null;
      }
      this.disableScroll(event);
      const _a2 = this.getTouchLimeSignaturePoint(event), x = _a2.x, y = _a2.y;
      this.isDrawing = true;
      this.isEmpty = false;
      lastX = x;
      lastY = y;
      points.push(new LimeSignaturePoint({
        c: null,
        w: null,
        x,
        y
      }));
    };
    this.onTouchMove = (event) => {
      if (this.options.disabled || !this.isDrawing) {
        return null;
      }
      this.disableScroll(event);
      const _a2 = this.getTouchLimeSignaturePoint(event), x = _a2.x, y = _a2.y;
      const lineWidth = this.options.penSize;
      const strokeStyle = this.options.penColor;
      const point = new LimeSignaturePoint({
        c: null,
        w: null,
        x,
        y
      });
      const last = new LimeSignaturePoint({
        c: null,
        w: null,
        x: lastX,
        y: lastY
      });
      this.drawLine(point, last, lineWidth, strokeStyle);
      lastX = x;
      lastY = y;
      points.push(new LimeSignaturePoint({ x, y, c: strokeStyle, w: lineWidth }));
    };
    this.onTouchEnd = (event) => {
      var _a2;
      this.disableScroll(event);
      this.isDrawing = false;
      undoStack.push(points);
      redoStack = [];
      points = [];
      (_a2 = this.change) === null || _a2 === void 0 ? null : _a2.call(this, this.isEmpty);
    };
    this.el = el;
    const dpr = (_a = uni.getDeviceInfo().devicePixelRatio) !== null && _a !== void 0 ? _a : 1;
    el.width = el.offsetWidth * dpr;
    el.height = el.offsetHeight * dpr;
    this.ctx = el.getContext("2d");
    this.ctx.scale(dpr, dpr);
    this.init();
  }
  onChange(cb) {
    this.change = cb;
  }
  init() {
    this.touchstartCallbackWrapper = this.el.addEventListener("touchstart", this.onTouchStart);
    this.touchmoveCallbackWrapper = this.el.addEventListener("touchmove", this.onTouchMove);
    this.touchendCallbackWrapper = this.el.addEventListener("touchend", this.onTouchEnd);
  }
  remove() {
    if (this.touchstartCallbackWrapper == null)
      return null;
    this.el.removeEventListener("touchstart", this.touchstartCallbackWrapper);
    this.el.removeEventListener("touchmove", this.touchmoveCallbackWrapper);
    this.el.removeEventListener("touchend", this.touchendCallbackWrapper);
  }
  setOption(options) {
    this.options = options;
  }
  disableScroll(event) {
    event.stopPropagation();
    if (this.options.disableScroll) {
      {
        event.preventDefault();
      }
    }
  }
  getTouchLimeSignaturePoint(event) {
    const rect = this.el.getBoundingClientRect();
    const touche = event.touches[0];
    const x = touche.clientX;
    const y = touche.clientY;
    return new LimeSignaturePoint({
      c: null,
      w: null,
      x: x - rect.left,
      y: y - rect.top
    });
  }
  drawLine(point, last, lineWidth, strokeStyle) {
    const ctx = this.ctx;
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeStyle;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(last.x, last.y);
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
    ctx.closePath();
    this._draw();
  }
  _clear() {
    this.ctx.clearRect(0, 0, 1e5, 1e5);
  }
  _draw() {
  }
  // addHistory() { }
  clear() {
    this._clear();
    this._draw();
    this.isEmpty = true;
    undoStack = [];
    redoStack = [];
    points = [];
  }
  undo() {
    if (redoStack.length == this.options.maxHistoryLength && this.options.maxHistoryLength != 0) {
      return null;
    }
    this._clear();
    if (undoStack.length > 0) {
      const lastPath = UTS.arrayPop(undoStack);
      redoStack.push(lastPath);
      if (undoStack.length == 0) {
        this.isEmpty = true;
        this._draw();
        return null;
      }
      for (let l = 0; l < undoStack.length; l++) {
        for (let i = 1; i < undoStack[l].length; i++) {
          const last = undoStack[l][i - 1];
          const point = undoStack[l][i];
          this.drawLine(point, last, point.w, point.c);
        }
      }
    } else {
      this._draw();
    }
  }
  redo() {
    if (redoStack.length < 1)
      return null;
    const lastPath = UTS.arrayPop(redoStack);
    undoStack.push(lastPath);
    this.isEmpty = false;
    for (let l = 0; l < undoStack.length; l++) {
      for (let i = 1; i < undoStack[l].length; i++) {
        const last = undoStack[l][i - 1];
        const point = undoStack[l][i];
        this.drawLine(point, last, point.w, point.c);
      }
    }
  }
}
export {
  Signature as S
};
//# sourceMappingURL=signature.js.map
