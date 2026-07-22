"use strict";
class UniCanvas {
  constructor(ctx, canvasId, isNew, canvasNode) {
    this.ctx = ctx;
    this.canvasId = canvasId;
    this.chart = null;
    this.isNew = isNew;
    if (isNew) {
      this.canvasNode = canvasNode;
    } else {
      this.canvasNode = {};
      this._initStyle(ctx);
    }
    this._initEvent();
  }
  getContext(contextType) {
    if (contextType === "2d") {
      return this.ctx;
    }
  }
  setChart(chart) {
    this.chart = chart;
  }
  addEventListener() {
  }
  attachEvent() {
  }
  detachEvent() {
  }
  _initStyle(ctx) {
    ctx.createRadialGradient = () => {
      return ctx.createCircularGradient(arguments);
    };
    ctx.uniDrawImage = ctx.drawImage;
    ctx.drawImage = (...arg) => {
      arg[0] = arg[0].src;
      ctx.uniDrawImage(...arg);
    };
  }
  _initEvent() {
    this.event = {};
    const eventNames = [
      {
        wxName: "touchStart",
        ecName: "mousedown"
      },
      {
        wxName: "touchMove",
        ecName: "mousemove"
      },
      {
        wxName: "touchEnd",
        ecName: "mouseup"
      },
      {
        wxName: "touchEnd",
        ecName: "click"
      }
    ];
    eventNames.forEach((name) => {
      this.event[name.wxName] = (e) => {
        const touch = e.touches[0];
        this.chart.getZr().handler.dispatch(name.ecName, {
          zrX: name.wxName === "tap" ? touch.clientX : touch.x,
          zrY: name.wxName === "tap" ? touch.clientY : touch.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        });
      };
    });
  }
  get width() {
    return this.canvasNode.width || 0;
  }
  set width(w) {
    this.canvasNode.width = w;
  }
  get height() {
    return this.canvasNode.height || 0;
  }
  set height(h) {
    this.canvasNode.height = h;
  }
}
exports.UniCanvas = UniCanvas;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/e-chart/components/e-chart/js/UniCanvas.js.map
