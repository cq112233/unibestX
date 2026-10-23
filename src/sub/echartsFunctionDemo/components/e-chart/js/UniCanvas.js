/**
 * 对WxCanvas做uni适配, 兼容echarts在非H5平台使用canvas
 * 引用: https://github.com/ecomfe/echarts-for-weixin/blob/master/ec-canvas/wx-canvas.js
 */
export default class UniCanvas {
  constructor(ctx, canvasId, isNew, canvasNode) {
    this.ctx = ctx;
    this.canvasId = canvasId;
    this.chart = null;
    this.isNew = isNew;
    if (isNew) {
      this.canvasNode = canvasNode;
    } else {
      this.canvasNode = {}; // 1.缓存宽高; 2.使背景生效
      this._initStyle(ctx);
    }

    this._initEvent();
  }

  getContext(contextType) {
    if (contextType === '2d') {
      return this.ctx;
    }
  }

  setChart(chart) {
    this.chart = chart;
  }

  addEventListener() {
    // noop
  }

  attachEvent() {
    // noop
  }

  detachEvent() {
    // noop
  }

  _initStyle(ctx) {
    // 适配createRadialGradient
    ctx.createRadialGradient = () => {
      return ctx.createCircularGradient(arguments);
    };

    // 适配drawImage (使APP端正常显示图表中的图片)
    ctx.uniDrawImage = ctx.drawImage;
    ctx.drawImage = (...arg) => {
      arg[0] = arg[0].src
      ctx.uniDrawImage(...arg)
    }
  }

  _initEvent() {
    this.event = {};
    const eventNames = [
      {
        wxName: 'touchStart',
        ecName: 'mousedown',
      },
      {
        wxName: 'touchMove',
        ecName: 'mousemove',
      },
      {
        wxName: 'touchEnd',
        ecName: 'mouseup',
      },
      {
        wxName: 'touchEnd',
        ecName: 'click',
      },
    ];

    eventNames.forEach((name) => {
      this.event[name.wxName] = (e) => {
        const touch = e.touches[0];

        this.chart.getZr().handler.dispatch(name.ecName, {
          zrX: name.wxName === 'tap' ? touch.clientX : touch.x,
          zrY: name.wxName === 'tap' ? touch.clientY : touch.y,
          preventDefault: () => {},
          stopImmediatePropagation: () => {},
          stopPropagation: () => {},
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
