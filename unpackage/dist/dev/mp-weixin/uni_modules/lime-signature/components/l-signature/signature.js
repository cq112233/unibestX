"use strict";
function t(t2, e2) {
  var i2 = Object.keys(t2);
  if (Object.getOwnPropertySymbols) {
    var n2 = Object.getOwnPropertySymbols(t2);
    e2 && (n2 = n2.filter(function(e3) {
      return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
    })), i2.push.apply(i2, n2);
  }
  return i2;
}
function e(e2) {
  for (var i2 = 1; arguments.length > i2; i2++) {
    var n2 = null != arguments[i2] ? arguments[i2] : {};
    i2 % 2 ? t(Object(n2), true).forEach(function(t2) {
      r(e2, t2, n2[t2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : t(Object(n2)).forEach(function(t2) {
      Object.defineProperty(e2, t2, Object.getOwnPropertyDescriptor(n2, t2));
    });
  }
  return e2;
}
function i(t2) {
  return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
    return typeof t3;
  } : function(t3) {
    return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
  }, i(t2);
}
function n(t2, e2) {
  if (!(t2 instanceof e2))
    throw new TypeError("Cannot call a class as a function");
}
function o(t2, e2) {
  for (var i2 = 0; e2.length > i2; i2++) {
    var n2 = e2[i2];
    n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t2, n2.key, n2);
  }
}
function a(t2, e2, i2) {
  return e2 && o(t2.prototype, e2), i2 && o(t2, i2), Object.defineProperty(t2, "prototype", { writable: false }), t2;
}
function r(t2, e2, i2) {
  return e2 in t2 ? Object.defineProperty(t2, e2, { value: i2, enumerable: true, configurable: true, writable: true }) : t2[e2] = i2, t2;
}
function s(t2, e2) {
  if ("function" != typeof e2 && null !== e2)
    throw new TypeError("Super expression must either be null or a function");
  t2.prototype = Object.create(e2 && e2.prototype, { constructor: { value: t2, writable: true, configurable: true } }), Object.defineProperty(t2, "prototype", { writable: false }), e2 && u(t2, e2);
}
function h(t2) {
  return h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t3) {
    return t3.__proto__ || Object.getPrototypeOf(t3);
  }, h(t2);
}
function u(t2, e2) {
  return u = Object.setPrototypeOf || function(t3, e3) {
    return t3.__proto__ = e3, t3;
  }, u(t2, e2);
}
function c(t2, e2) {
  if (e2 && ("object" == typeof e2 || "function" == typeof e2))
    return e2;
  if (void 0 !== e2)
    throw new TypeError("Derived constructors may only return object or undefined");
  return function(t3) {
    if (void 0 === t3)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t3;
  }(t2);
}
function l(t2) {
  var e2 = function() {
    if ("undefined" == typeof Reflect || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if ("function" == typeof Proxy)
      return true;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch (t3) {
      return false;
    }
  }();
  return function() {
    var i2, n2 = h(t2);
    if (e2) {
      var o2 = h(this).constructor;
      i2 = Reflect.construct(n2, arguments, o2);
    } else
      i2 = n2.apply(this, arguments);
    return c(this, i2);
  };
}
var v = function(t2) {
  var e2 = i(t2);
  return null !== t2 && "object" === e2 || "function" === e2;
}, f = {}.toString, d = function(t2, e2) {
  return f.call(t2) === "[object " + e2 + "]";
}, p = function(t2) {
  return d(t2, "String");
}, y = function(t2) {
  return d(t2, "Number");
}, g = function(t2) {
  return d(t2, "Function");
}, m = function() {
  function t2() {
    n(this, t2), this.__events = void 0, this.__events = {};
  }
  return a(t2, [{ key: "on", value: function(t3, e2) {
    if (t3 && e2) {
      var i2 = this.__events[t3] || [];
      i2.push(e2), this.__events[t3] = i2;
    }
  } }, { key: "emit", value: function(t3, e2) {
    var i2 = this;
    if (v(t3) && (t3 = (e2 = t3) && e2.type), t3) {
      var n2 = this.__events[t3];
      n2 && n2.length && n2.forEach(function(t4) {
        t4.call(i2, e2);
      });
    }
  } }, { key: "off", value: function(t3, e2) {
    var i2 = this.__events, n2 = i2[t3];
    if (n2 && n2.length)
      if (e2)
        for (var o2 = 0, a2 = n2.length; a2 > o2; o2++)
          n2[o2] === e2 && (n2.splice(o2, 1), o2--);
      else
        delete i2[t3];
  } }, { key: "getEvents", value: function() {
    return this.__events;
  } }]), t2;
}(), x = function(t2) {
  s(i2, m);
  var e2 = l(i2);
  function i2(t3, o2) {
    var a2;
    return n(this, i2), (a2 = e2.call(this)).context = void 0, a2.canvas = void 0, a2.attrs = void 0, a2.isCanvasElement = void 0, a2.context = t3, a2.canvas = o2.canvas || t3.canvas || { width: o2.width || 0, height: o2.height || 0 }, a2.attrs = o2 || {}, a2.isCanvasElement = true, a2;
  }
  return a(i2, [{ key: "width", get: function() {
    return this.canvas.width;
  }, set: function(t3) {
    this.canvas.width = t3;
  } }, { key: "height", get: function() {
    return this.canvas.height;
  }, set: function(t3) {
    this.canvas.height = t3;
  } }, { key: "getContext", value: function() {
    return this.context;
  } }, { key: "getBoundingClientRect", value: function() {
    var t3 = this.attrs || {}, e3 = t3.top, i3 = t3.right, n2 = t3.width, o2 = t3.height, a2 = t3.left, r2 = t3.bottom;
    return { top: void 0 === e3 ? 0 : e3, width: void 0 === n2 ? 0 : n2, right: void 0 === i3 ? 0 : i3, height: void 0 === o2 ? 0 : o2, bottom: void 0 === r2 ? 0 : r2, left: void 0 === a2 ? 0 : a2 };
  } }, { key: "setAttribute", value: function(t3, e3) {
    this.attrs[t3] = e3;
  } }, { key: "addEventListener", value: function(t3, e3) {
    this.on(t3, e3);
  } }, { key: "removeEventListener", value: function(t3, e3) {
    this.off(t3, e3);
  } }, { key: "dispatchEvent", value: function(t3, e3) {
    this.emit(t3, e3);
  } }]), i2;
}();
var w = function(t2, e2) {
  return t2 ? function(t3) {
    if (!t3)
      return false;
    if (1 !== t3.nodeType || !t3.nodeName || "canvas" !== t3.nodeName.toLowerCase())
      return false;
    var e3 = false;
    try {
      t3.addEventListener("eventTest", function() {
        e3 = true;
      }), t3.dispatchEvent(new Event("eventTest"));
    } catch (t4) {
      e3 = false;
    }
    return e3;
  }(t2.canvas) ? t2.canvas : new x(t2, e2) : null;
};
function b(t2, e2) {
  try {
    return t2.currentStyle ? t2.currentStyle[e2] : document.defaultView && document.defaultView.getComputedStyle(t2, null).getPropertyValue(e2);
  } catch (t3) {
    return { width: 300, height: 150 }[e2];
  }
}
function k(t2, e2) {
  var i2 = e2.get("el");
  if (!i2)
    return t2;
  var n2 = i2.getBoundingClientRect(), o2 = n2.top, a2 = void 0 === o2 ? 0 : o2, r2 = n2.left, s2 = void 0 === r2 ? 0 : r2, h2 = parseFloat(b(i2, "padding-left")) || 0, u2 = parseFloat(b(i2, "padding-top")) || 0;
  return { x: t2.x - s2 - h2, y: t2.y - a2 - u2 };
}
function _(t2, e2) {
  var i2 = e2.get("landscape");
  if (!i2)
    return t2;
  if (g(i2))
    return i2(t2, e2);
  var n2 = e2.get("height");
  return { x: t2.y, y: n2 - t2.x };
}
var E = function(t2, e2) {
  var i2 = t2.touches;
  if (!i2 || !i2.length)
    return [_(k({ x: t2.clientX, y: t2.clientY }, e2), e2)];
  i2.length || (i2 = t2.changedTouches || []);
  for (var n2 = [], o2 = 0, a2 = i2.length; a2 > o2; o2++) {
    var r2 = i2[o2], s2 = r2.x, h2 = r2.y, u2 = r2.clientX, c2 = r2.clientY, l2 = void 0;
    l2 = y(s2) || y(h2) ? { x: s2, y: h2 } : k({ x: u2, y: c2 }, e2), n2.push(_(l2, e2));
  }
  return n2;
}, L = function(t2, e2) {
  var i2 = e2.x - t2.x, n2 = e2.y - t2.y;
  return Math.abs(i2) > Math.abs(n2) ? i2 > 0 ? "right" : "left" : n2 > 0 ? "down" : "up";
}, M = function(t2, e2) {
  var i2 = Math.abs(e2.x - t2.x), n2 = Math.abs(e2.y - t2.y);
  return Math.sqrt(i2 * i2 + n2 * n2);
}, P = function() {
  function t2(e2) {
    var i2 = this, o2 = e2.canvas, a2 = e2.el;
    n(this, t2), this.processEvent = void 0, this.canvas = void 0, this.startTime = 0, this.endTime = 0, this.startPoints = null, this.startDistance = 0, this.center = null, this.pressTimeout = void 0, this.eventType = null, this.direction = null, this.lastMoveTime = 0, this.prevMovePoints = null, this.prevMoveTime = 0, this.lastMovePoints = null, this.pinch = false, this._click = function(t3) {
      var e3 = E(t3, i2.canvas);
      t3.points = e3, i2.emitEvent("click", t3);
    }, this._start = function(t3) {
      var e3, n2, o3 = E(t3, i2.canvas);
      o3 && (t3.points = o3, i2.emitEvent("touchstart", t3), i2.reset(), i2.startTime = Date.now(), i2.startPoints = o3, o3.length > 1 ? (i2.startDistance = M(o3[0], o3[1]), i2.center = { x: (e3 = o3[0]).x + ((n2 = o3[1]).x - e3.x) / 2, y: e3.y + (n2.y - e3.y) / 2 }) : i2.pressTimeout = setTimeout(function() {
        var e4 = "press", n3 = "none";
        t3.direction = n3, i2.emitStart(e4, t3), i2.emitEvent(e4, t3), i2.eventType = e4, i2.direction = n3;
      }, 250));
    }, this._move = function(t3) {
      var e3 = E(t3, i2.canvas);
      if (e3) {
        t3.points = e3, i2.emitEvent("touchmove", t3);
        var n2 = i2.startPoints;
        if (n2)
          if (e3.length > 1) {
            var o3 = i2.startDistance, a3 = M(e3[0], e3[1]);
            t3.zoom = a3 / o3, t3.center = i2.center, i2.emitStart("pinch", t3), i2.emitEvent("pinch", t3);
          } else {
            var r2 = e3[0].x - n2[0].x, s2 = e3[0].y - n2[0].y, h2 = i2.direction || L(n2[0], e3[0]);
            i2.direction = h2;
            var u2 = i2.getEventType(e3);
            t3.direction = h2, t3.deltaX = r2, t3.deltaY = s2, i2.emitStart(u2, t3), i2.emitEvent(u2, t3);
            var c2 = i2.lastMoveTime, l2 = Date.now();
            l2 - c2 > 0 && (i2.prevMoveTime = c2, i2.prevMovePoints = i2.lastMovePoints, i2.lastMoveTime = l2, i2.lastMovePoints = e3);
          }
      }
    }, this._end = function(t3) {
      var e3 = E(t3, i2.canvas);
      t3.points = e3, i2.emitEnd(t3), i2.emitEvent("touchend", t3);
      var n2 = i2.lastMoveTime;
      if (100 > Date.now() - n2) {
        var o3 = n2 - (i2.prevMoveTime || i2.startTime);
        if (o3 > 0) {
          var a3 = i2.prevMovePoints || i2.startPoints, r2 = i2.lastMovePoints;
          if (!a3 || !r2)
            return;
          var s2 = M(a3[0], r2[0]) / o3;
          s2 > 0.3 && (t3.velocity = s2, t3.direction = L(a3[0], r2[0]), i2.emitEvent("swipe", t3));
        }
      }
      i2.reset();
      var h2 = t3.touches;
      h2 && h2.length > 0 && i2._start(t3);
    }, this._cancel = function(t3) {
      i2.emitEvent("touchcancel", t3), i2.reset();
    }, this.canvas = o2, this.delegateEvent(a2), this.processEvent = {};
  }
  return a(t2, [{ key: "delegateEvent", value: function(t3) {
    t3.addEventListener("click", this._click), t3.addEventListener("touchstart", this._start), t3.addEventListener("touchmove", this._move), t3.addEventListener("touchend", this._end), t3.addEventListener("touchcancel", this._cancel);
  } }, { key: "emitEvent", value: function(t3, e2) {
    this.canvas.emit(t3, e2);
  } }, { key: "getEventType", value: function(t3) {
    var e2, i2 = this.eventType, n2 = this.startTime, o2 = this.startPoints;
    if (i2)
      return i2;
    var a2 = this.canvas.__events.pan;
    if (a2 && a2.length) {
      var r2 = Date.now();
      if (!o2)
        return;
      e2 = r2 - n2 > 250 && 10 > M(o2[0], t3[0]) ? "press" : "pan";
    } else
      e2 = "press";
    return this.eventType = e2, e2;
  } }, { key: "enable", value: function(t3) {
    this.processEvent[t3] = true;
  } }, { key: "isProcess", value: function(t3) {
    return this.processEvent[t3];
  } }, { key: "emitStart", value: function(t3, e2) {
    this.isProcess(t3) || (this.enable(t3), this.emitEvent("".concat(t3, "start"), e2));
  } }, { key: "emitEnd", value: function(t3) {
  } }, { key: "clearPressTimeout", value: function() {
    this.pressTimeout && (clearTimeout(this.pressTimeout), this.pressTimeout = null);
  } }, { key: "reset", value: function() {
    this.clearPressTimeout(), this.startTime = 0, this.startPoints = null, this.startDistance = 0, this.direction = null, this.eventType = null, this.pinch = false, this.prevMoveTime = 0, this.prevMovePoints = null, this.lastMoveTime = 0, this.lastMovePoints = null;
  } }]), t2;
}(), T = function(t2) {
  s(o2, m);
  var e2 = l(o2);
  function o2(t3) {
    var i2;
    n(this, o2), (i2 = e2.call(this))._attrs = {}, i2._isWindow = void 0, i2._attrs = Object.assign({}, t3), i2._isWindow = "undefined" != typeof window, i2._initPixelRatio(), i2._initCanvas();
    return ["createImage", "toDataURL", "requestAnimationFrame"].forEach(function(e3) {
      i2._initAttrs(e3, t3.canvas || i2.get("el"));
    }), i2;
  }
  return a(o2, [{ key: "get", value: function(t3) {
    return this._attrs[t3];
  } }, { key: "set", value: function(t3, e3) {
    this._attrs[t3] = e3;
  } }, { key: "_initAttrs", value: function(t3, e3) {
    var i2 = this;
    if (!this.get(t3)) {
      this.set(t3, function() {
        return e3[t3] ? e3[t3].apply(e3, arguments) : i2._isWindow ? window[t3] ? (n2 = window)[t3].apply(n2, arguments) : "createImage" == t3 ? new Image() : null : void 0;
        var n2;
      });
    }
  } }, { key: "_initCanvas", value: function() {
    var t3, e3, i2 = this.get("el"), n2 = this.get("context");
    if (!i2 && !n2)
      throw Error("请指定 id、el 或 context!");
    t3 = i2 ? p(i2) ? (e3 = i2) ? document.getElementById(e3) : null : i2 : w(n2, this._attrs), n2 && t3 && !t3.getContext && (t3.getContext = function() {
      return n2;
    });
    var o3 = this.get("width") || function(t4) {
      var e4 = b(t4, "width");
      return "auto" === e4 && (e4 = t4.offsetWidth), parseFloat(e4);
    }(t3) || t3.width, a2 = this.get("height") || function(t4) {
      var e4 = b(t4, "height");
      return "auto" === e4 && (e4 = t4.offsetHeight), parseFloat(e4);
    }(t3) || t3.height;
    this.set("canvas", this), this.set("el", t3), this.set("context", n2 || t3.getContext("2d")), this.changeSize(o3, a2);
    var r2 = new P({ canvas: this, el: t3, parent: this.get("parent") });
    this.set("eventController", r2);
  } }, { key: "_initPixelRatio", value: function() {
    this.get("pixelRatio") || this.set("pixelRatio", window && window.devicePixelRatio || 1);
  } }, { key: "changeSize", value: function(t3, e3) {
    var n2, o3 = this.get("pixelRatio"), a2 = this.get("el");
    (a2.style && (a2.style.width = t3 + "px", a2.style.height = e3 + "px"), (n2 = a2) && "object" === i(n2) && (1 === n2.nodeType && n2.nodeName || n2.isCanvasElement)) && (a2.width = t3 * o3, a2.height = e3 * o3, 1 !== o3 && this.get("context").scale(o3, o3));
    this.set("width", t3), this.set("height", e3);
  } }, { key: "destroy", value: function() {
    if (!this.get("destroyed")) {
      var t3 = this.get("el");
      t3.width = 0, t3.height = 0, this.clear(), this._attrs = {}, this.set("destroyed", true);
    }
  } }, { key: "clear", value: function() {
  } }, { key: "isDestroyed", value: function() {
    return this.get("destroyed");
  } }]), o2;
}();
var S = { penColor: "black", backgroundColor: "", openSmooth: true, penSize: 2, minLineWidth: 2, maxLineWidth: 6, minSpeed: 1.5, maxWidthDiffRate: 20, maxHistoryLength: 20 }, D = null, O = function() {
  function t2(e2) {
    var i2 = this;
    n(this, t2), this.canAddHistory = true, this.points = [], this.historyList = [], this.undoneList = [], this.canvas = void 0, this._isEmpty = true, this.active = false, this.getLineWidth = function(t3) {
      var e3 = i2.get("options"), n2 = e3.minSpeed, o2 = e3.minLineWidth, a2 = i2.getMaxLineWidth();
      return Math.min(Math.max(a2 - (a2 - o2) * t3 / Math.max(Math.min(n2, 10), 1), o2), a2);
    }, this.drawTrapezoid = function(t3, e3, n2, o2) {
      var a2 = i2.get("context");
      a2.beginPath(), a2.moveTo(Number(t3.x.toFixed(1)), Number(t3.y.toFixed(1))), a2.lineTo(Number(e3.x.toFixed(1)), Number(e3.y.toFixed(1))), a2.lineTo(Number(n2.x.toFixed(1)), Number(n2.y.toFixed(1))), a2.lineTo(Number(o2.x.toFixed(1)), Number(o2.y.toFixed(1))), a2.fillStyle = i2.get("options").penColor, a2.fill(), a2.draw && a2.draw(true);
    }, this.drawNoSmoothLine = function(t3, e3) {
      e3.lastX = t3.x + 0.5 * (e3.x - t3.x), e3.lastY = t3.y + 0.5 * (e3.y - t3.y), "number" == typeof t3.lastX && i2.drawCurveLine(t3.lastX, t3.lastY, t3.x, t3.y, e3.lastX, e3.lastY, i2.getMaxLineWidth());
    }, this.drawCurveLine = function(t3, e3, n2, o2, a2, r2, s2) {
      s2 = Number(s2.toFixed(1));
      var h2 = i2.get("context");
      h2.lineWidth = s2, h2.beginPath(), h2.moveTo(Number(t3.toFixed(1)), Number(e3.toFixed(1))), h2.quadraticCurveTo(Number(n2.toFixed(1)), Number(o2.toFixed(1)), Number(a2.toFixed(1)), Number(r2.toFixed(1))), h2.stroke(), h2.draw && h2.draw(true);
    }, this.getRadianData = function(t3, e3, i3, n2) {
      var o2 = i3 - t3, a2 = n2 - e3;
      if (0 === o2)
        return { val: 0, pos: -1 };
      if (0 === a2)
        return { val: 0, pos: 1 };
      var r2 = Math.abs(Math.atan(a2 / o2));
      return i3 > t3 && e3 > n2 || t3 > i3 && n2 > e3 ? { val: r2, pos: 1 } : { val: r2, pos: -1 };
    }, this.getRadianPoints = function(t3, e3, i3, n2) {
      if (0 === t3.val)
        return 1 === t3.pos ? [{ x: e3, y: i3 + n2 }, { x: e3, y: i3 - n2 }] : [{ y: i3, x: e3 + n2 }, { y: i3, x: e3 - n2 }];
      var o2 = Math.sin(t3.val) * n2, a2 = Math.cos(t3.val) * n2;
      return 1 === t3.pos ? [{ x: e3 + o2, y: i3 + a2 }, { x: e3 - o2, y: i3 - a2 }] : [{ x: e3 + o2, y: i3 - a2 }, { x: e3 - o2, y: i3 + a2 }];
    }, this.drawSmoothLine = function(t3, e3) {
      var n2 = e3.x - t3.x, o2 = e3.y - t3.y;
      if (Math.abs(n2) + Math.abs(o2) > 2 ? (e3.lastX1 = t3.x + 0.3 * n2, e3.lastY1 = t3.y + 0.3 * o2, e3.lastX2 = t3.x + 0.7 * n2, e3.lastY2 = t3.y + 0.7 * o2) : (e3.lastX1 = e3.lastX2 = t3.x + 0.5 * n2, e3.lastY1 = e3.lastY2 = t3.y + 0.5 * o2), e3.perLineWidth = (t3.lineWidth + e3.lineWidth) / 2, "number" == typeof t3.lastX1) {
        if (i2.drawCurveLine(t3.lastX2, t3.lastY2, t3.x, t3.y, e3.lastX1, e3.lastY1, e3.perLineWidth), t3.isFirstPoint)
          return;
        if (t3.lastX1 === t3.lastX2 && t3.lastY1 === t3.lastY2)
          return;
        var a2 = i2.getRadianData(t3.lastX1, t3.lastY1, t3.lastX2, t3.lastY2), r2 = i2.getRadianPoints(a2, t3.lastX1, t3.lastY1, t3.perLineWidth / 2), s2 = i2.getRadianPoints(a2, t3.lastX2, t3.lastY2, e3.perLineWidth / 2);
        i2.drawTrapezoid(r2[0], s2[0], s2[1], r2[1]);
      } else
        e3.isFirstPoint = true;
    }, this.addHistory = function() {
      var t3 = i2.get("options").maxHistoryLength;
      if (t3 && i2.canAddHistory)
        if (i2.canAddHistory = false, i2.get("createImage")) {
          var e3 = null;
          e3 = i2.get("createImage")();
          var n2 = i2.get("toDataURL") && i2.get("toDataURL")();
          p(n2) ? e3.src = n2 : n2.then(function(t4) {
            e3.src = t4;
          }), e3.onload = function() {
            var n3 = D;
            D = e3, i2.historyList.push(n3), i2.historyList = i2.historyList.slice(-t3);
          };
        } else
          i2.historyList.length++;
    }, this.drawByImage = function(t3) {
      var e3 = i2.get("context"), n2 = i2.get("width"), o2 = i2.get("height");
      e3.clearRect(0, 0, n2, o2);
      try {
        t3 && e3.drawImage(t3, 0, 0, n2, o2), e3.draw && e3.draw(true);
      } catch (t4) {
        i2.historyList.length = 0;
      }
    }, this.isEmpty = function() {
      return i2.get("options").maxHistoryLength > 0 ? 0 === i2.historyList.length : i2._isEmpty;
    }, this.clear = function() {
      if (!i2.get("options").disabled) {
        var t3 = i2.get("context");
        t3.clearRect(0, 0, i2.get("width"), i2.get("height")), t3.draw && t3.draw(), i2._isEmpty = true, D = null, i2.historyList.length = 0;
      }
    }, this.undo = function() {
      if (!i2.get("options").disabled && (0 === i2.get("options").maxHistoryLength && i2.clear(), i2.get("createImage") && i2.historyList.length)) {
        var t3 = i2.historyList.pop();
        i2.drawByImage(t3), i2.undoneList.push(D), D = t3, i2.historyList.length || i2.undoneList.length || i2.clear();
      }
    }, this.redo = function() {
      if (i2.undoneList.length && !i2.get("options").disabled) {
        var t3 = i2.undoneList.pop();
        i2.historyList.push(D), i2.drawByImage(t3), D = t3, i2._isEmpty = false;
      }
    }, this.canvas = e2, this.canvas.set("pen", S), this.init();
  }
  return a(t2, [{ key: "getOption", value: function() {
  } }, { key: "setOption", value: function() {
    var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i2 = e({}, t3), n2 = i2.maxLineWidth;
    if (n2 && t3.penSize && n2 == S.maxLineWidth) {
      var o2 = Math.max(n2, t3.penSize);
      i2.maxLineWidth = o2;
    }
    this.canvas.set("pen", Object.assign({}, S, i2));
  } }, { key: "get", value: function(t3) {
    return this.canvas.get("options" == t3 ? "pen" : t3);
  } }, { key: "init", value: function() {
    var t3 = this;
    this.get("context").lineCap = "round", this.canvas.on("touchstart", function(e2) {
      return t3.onDrawStart(e2);
    }), this.canvas.on("touchmove", function(e2) {
      return t3.onDrawMove(e2);
    }), this.canvas.on("touchend", function(e2) {
      return t3.onDrawEnd(e2);
    });
  } }, { key: "drawBackground", value: function() {
    var t3 = this.get("context"), e2 = this.get("width"), i2 = this.get("height"), n2 = this.get("options"), o2 = n2.backgroundColor, a2 = n2.backgroundImage;
    o2 && (t3.fillStyle = o2, t3.fillRect(0, 0, e2, i2), t3.draw && t3.draw(true)), a2 && this.drawByImage(a2);
  } }, { key: "getImageData", value: function(t3) {
    if (t3) {
      var e2 = this.get("width"), i2 = this.get("height"), n2 = this.get("el"), o2 = "CANVAS" === n2.nodeName, a2 = o2 ? e2 : n2.width, r2 = o2 ? i2 : n2.height;
      if (o2) {
        var s2 = document.createElement("canvas");
        s2.width = e2, s2.height = i2;
        var h2 = s2.getContext("2d");
        h2.drawImage(n2, 0, 0, e2, i2);
        var u2 = h2.getImageData(0, 0, e2, i2).data;
        return t3(u2);
      }
      var c2, l2 = this.get("context").getImageData(0, 0, a2, r2);
      return v(c2 = l2) && g(c2.then) && g(c2.catch) ? (l2.then(function(e3) {
        return t3(e3.data);
      }), null) : t3(l2.data);
    }
  } }, { key: "getMaskedImageData", value: function(t3) {
    if (t3)
      return this.getImageData(function(e2) {
        for (var i2 = 0; e2.length > i2; i2 += 4) {
          0 === e2[i2 + 3] ? (e2[i2] = 0, e2[i2 + 1] = 0, e2[i2 + 2] = 0) : (e2[i2] = 255, e2[i2 + 1] = 255, e2[i2 + 2] = 255);
        }
        return t3(e2);
      });
  } }, { key: "getContentBoundingBox", value: function(t3) {
    var e2 = this.get("pixelRatio"), i2 = this.get("width"), n2 = this.get("height"), o2 = this.get("el"), a2 = "CANVAS" === o2.nodeName, r2 = a2 ? i2 : o2.width, s2 = a2 ? n2 : o2.height;
    e2 = a2 ? 1 : e2;
    return this.getImageData(function(i3) {
      for (var n3 = Math.floor(r2), o3 = n3, a3 = Math.floor(s2), h2 = 0, u2 = 0, c2 = 0; i3.length > c2; c2 += 4) {
        if (i3[c2 + 3] > 0) {
          var l2 = c2 / 4 % n3, v2 = Math.floor(c2 / 4 / n3);
          o3 = Math.min(o3, l2), a3 = Math.min(a3, v2), h2 = Math.max(h2, l2), u2 = Math.max(u2, v2);
        }
      }
      var f2 = { width: (h2 - o3 + 1) / e2, height: (u2 - a3 + 1) / e2, startX: o3 / e2, startY: a3 / e2 };
      return t3 && t3(f2), f2;
    });
  } }, { key: "remove", value: function() {
    var t3 = this;
    this.canvas.off("touchstart", function(e2) {
      return t3.onDrawStart(e2);
    }), this.canvas.off("touchmove", function(e2) {
      return t3.onDrawMove(e2);
    }), this.canvas.off("touchend", function(e2) {
      return t3.onDrawEnd(e2);
    });
  } }, { key: "disableScroll", value: function(t3) {
    t3.preventDefault && this.get("options").disableScroll && t3.preventDefault();
  } }, { key: "onDrawStart", value: function(t3) {
    if (!this.get("options").disabled) {
      this.disableScroll(t3), this.undoneList.length = 0;
      var e2 = t3.points;
      if (this.active) {
        this.canAddHistory = true, this.get("context").strokeStyle = this.get("options").penColor;
        var i2 = e2[0];
        this.initPoint(i2.x, i2.y);
      }
    }
  } }, { key: "onDrawMove", value: function(t3) {
    if (!this.get("options").disabled && (this.disableScroll(t3), this.active)) {
      var e2 = t3.points[0];
      this.initPoint(e2.x, e2.y), this.onDraw();
    }
  } }, { key: "onDrawEnd", value: function(t3) {
    this.active && !this.get("options").disabled && (this.addHistory(), this.canAddHistory = true, this.points = []);
  } }, { key: "onDraw", value: function() {
    var t3 = this, e2 = this.get("context");
    if (this.points.length >= 2) {
      e2.lineWidth = this.get("options").penSize || 2;
      var i2 = this.points.slice(-1)[0], n2 = this.points.slice(-2, -1)[0], o2 = function() {
        t3._isEmpty = false, t3.get("options").openSmooth ? t3.drawSmoothLine(n2, i2) : t3.drawNoSmoothLine(n2, i2);
      };
      o2();
    }
  } }, { key: "getMaxLineWidth", value: function() {
    var t3 = this.get("options");
    return Math.min(t3.penSize, t3.maxLineWidth);
  } }, { key: "initPoint", value: function(t3, e2) {
    var i2 = { x: t3, y: e2, t: Date.now() }, n2 = this.points.slice(-1)[0];
    if (!n2 || n2.t !== i2.t && (n2.x !== t3 || n2.y !== e2)) {
      if (this.get("options").openSmooth && n2) {
        var o2 = this.points.slice(-2, -1)[0];
        if (i2.distance = Math.sqrt(Math.pow(i2.x - n2.x, 2) + Math.pow(i2.y - n2.y, 2)), i2.speed = i2.distance / (i2.t - n2.t || 0.1), i2.lineWidth = this.getLineWidth(i2.speed), o2 && o2.lineWidth && n2.lineWidth) {
          var a2 = (i2.lineWidth - n2.lineWidth) / n2.lineWidth, r2 = this.get("options").maxWidthDiffRate / 100;
          if (r2 = r2 > 1 ? 1 : 0.01 > r2 ? 0.01 : r2, Math.abs(a2) > r2)
            i2.lineWidth = n2.lineWidth * (1 + (a2 > 0 ? r2 : -r2));
        }
      }
      this.points.push(i2), this.points = this.points.slice(-3);
    }
  } }]), t2;
}(), W = function() {
  function t2(e2) {
    n(this, t2), this.canvas = void 0, this._ee = void 0, this.pen = void 0;
    var i2 = new T(e2);
    i2.set("parent", this), this.canvas = i2, this._ee = new m(), this.pen = new O(i2), this.init();
  }
  return a(t2, [{ key: "init", value: function() {
    this.pen.active = true;
  } }, { key: "destroy", value: function() {
    this.canvas.destroy();
  } }, { key: "clear", value: function() {
    this.pen.clear();
  } }, { key: "undo", value: function() {
    this.pen.undo();
  } }, { key: "redo", value: function() {
    this.pen.redo();
  } }, { key: "save", value: function() {
  } }, { key: "getContentBoundingBox", value: function(t3) {
    return this.pen.getContentBoundingBox(t3);
  } }, { key: "getMaskedImageData", value: function(t3) {
    return this.pen.getMaskedImageData(t3);
  } }, { key: "isEmpty", value: function() {
    return this.pen.isEmpty();
  } }, { key: "on", value: function(t3, e2) {
    this._ee.on(t3, e2);
  } }, { key: "emit", value: function(t3, e2) {
    this._ee.emit(t3, e2);
  } }, { key: "off", value: function(t3, e2) {
    this._ee.off(t3, e2);
  } }]), t2;
}();
exports.W = W;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/lime-signature/components/l-signature/signature.js.map
