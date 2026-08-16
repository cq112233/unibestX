function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
class WebviewEchart {
  constructor(ctx) {
    this.onEventMap = /* @__PURE__ */ new Map();
    this.onceEventMap = /* @__PURE__ */ new Map();
    this.ctx = ctx;
  }
  init(theme = null, opts = new UTSJSONObject({})) {
    this.ctx.evalJS(`init(${UTS.JSON.stringify(new UTSJSONObject({ theme, opts }))})`);
  }
  onWebviewMsg(e) {
    var e_1, _a;
    uni.__f__("log", "at uni_modules/e-chart/components/e-chart/uts/WebviewEchart.uts:20", "onWebviewMsg", e.detail.data);
    try {
      for (var _b = __values(e.detail.data), _c = _b.next(); !_c.done; _c = _b.next()) {
        var msg = _c.value;
        const msgType = msg["type"];
        const data = msg["data"];
        const onEventMap = UTS.mapGet(this.onEventMap, msgType);
        if (onEventMap != null) {
          onEventMap(data);
        }
        const onceEvent = UTS.mapGet(this.onceEventMap, msgType);
        if (onceEvent != null) {
          onceEvent(data);
          this.onceEventMap.delete(msgType);
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return))
          _a.call(_b);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
  }
  setOption(option, notMerge = false, lazyUpdate = false) {
    this.ctx.evalJS(`setOption(${UTS.JSON.stringify(option)}, ${notMerge}, ${lazyUpdate})`);
  }
  getOption(success) {
    this.onceEventMap.set("getOption", success);
    this.ctx.evalJS(`getOption()`);
  }
  getWidth(success) {
    this.onceEventMap.set("getWidth", success);
    this.ctx.evalJS(`getWidth()`);
  }
  getHeight(success) {
    this.onceEventMap.set("getHeight", success);
    this.ctx.evalJS(`getHeight()`);
  }
  resize(option = new UTSJSONObject({})) {
    this.ctx.evalJS(`resize(${UTS.JSON.stringify(option)})`);
  }
  on(name, handler) {
    this.onEventMap.set(name, handler);
    this.ctx.evalJS(`on(${UTS.JSON.stringify(new UTSJSONObject({ name }))})`);
  }
  on(name, query, handler) {
    this.onEventMap.set(name, handler);
    this.ctx.evalJS(`on(${UTS.JSON.stringify(new UTSJSONObject({ name, query }))})`);
  }
  off(name) {
    this.ctx.evalJS(`off(${UTS.JSON.stringify(new UTSJSONObject({ name }))})`);
  }
  dispatchAction(option) {
    this.ctx.evalJS(`dispatchAction(${UTS.JSON.stringify(option)})`);
  }
  showLoading(option) {
    this.ctx.evalJS(`showLoading(${UTS.JSON.stringify(option)})`);
  }
  hideLoading() {
    this.ctx.evalJS(`hideLoading()`);
  }
  appendData(option) {
    this.ctx.evalJS(`appendData(${UTS.JSON.stringify(option)})`);
  }
  canvasToTempFilePath(option) {
    const success = option["success"];
    this.onceEventMap.set("canvasToTempFilePath", success);
    this.ctx.evalJS(`canvasToTempFilePath()`);
  }
  clear() {
    this.ctx.evalJS(`clear()`);
  }
  dispose() {
    this.ctx.evalJS(`dispose()`);
  }
}
export {
  WebviewEchart as W,
  __read as _,
  __values as a
};
//# sourceMappingURL=WebviewEchart.js.map
