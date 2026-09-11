import { e } from "../pages.js";
var define_process_env_UNI_SECURE_NETWORK_CONFIG_default = [];
function t(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
}
function n(e2, t2, n2) {
  return e2(n2 = { path: t2, exports: {}, require: function(e3, t3) {
    return function() {
      throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
    }(null == t3 && n2.path);
  } }, n2.exports), n2.exports;
}
var s = n(function(e2, t2) {
  var n2;
  e2.exports = (n2 = n2 || function(e3, t3) {
    var n3 = Object.create || /* @__PURE__ */ function() {
      function e4() {
      }
      return function(t4) {
        var n4;
        return e4.prototype = t4, n4 = new e4(), e4.prototype = null, n4;
      };
    }(), s2 = {}, r2 = s2.lib = {}, i2 = r2.Base = { extend: function(e4) {
      var t4 = n3(this);
      return e4 && t4.mixIn(e4), t4.hasOwnProperty("init") && this.init !== t4.init || (t4.init = function() {
        t4.$super.init.apply(this, arguments);
      }), t4.init.prototype = t4, t4.$super = this, t4;
    }, create: function() {
      var e4 = this.extend();
      return e4.init.apply(e4, arguments), e4;
    }, init: function() {
    }, mixIn: function(e4) {
      for (var t4 in e4)
        e4.hasOwnProperty(t4) && (this[t4] = e4[t4]);
      e4.hasOwnProperty("toString") && (this.toString = e4.toString);
    }, clone: function() {
      return this.init.prototype.extend(this);
    } }, o2 = r2.WordArray = i2.extend({ init: function(e4, n4) {
      e4 = this.words = e4 || [], this.sigBytes = n4 != t3 ? n4 : 4 * e4.length;
    }, toString: function(e4) {
      return (e4 || c2).stringify(this);
    }, concat: function(e4) {
      var t4 = this.words, n4 = e4.words, s3 = this.sigBytes, r3 = e4.sigBytes;
      if (this.clamp(), s3 % 4)
        for (var i3 = 0; i3 < r3; i3++) {
          var o3 = n4[i3 >>> 2] >>> 24 - i3 % 4 * 8 & 255;
          t4[s3 + i3 >>> 2] |= o3 << 24 - (s3 + i3) % 4 * 8;
        }
      else
        for (i3 = 0; i3 < r3; i3 += 4)
          t4[s3 + i3 >>> 2] = n4[i3 >>> 2];
      return this.sigBytes += r3, this;
    }, clamp: function() {
      var t4 = this.words, n4 = this.sigBytes;
      t4[n4 >>> 2] &= 4294967295 << 32 - n4 % 4 * 8, t4.length = e3.ceil(n4 / 4);
    }, clone: function() {
      var e4 = i2.clone.call(this);
      return e4.words = this.words.slice(0), e4;
    }, random: function(t4) {
      for (var n4, s3 = [], r3 = function(t5) {
        t5 = t5;
        var n5 = 987654321, s4 = 4294967295;
        return function() {
          var r4 = ((n5 = 36969 * (65535 & n5) + (n5 >> 16) & s4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & s4) & s4;
          return r4 /= 4294967296, (r4 += 0.5) * (e3.random() > 0.5 ? 1 : -1);
        };
      }, i3 = 0; i3 < t4; i3 += 4) {
        var a3 = r3(4294967296 * (n4 || e3.random()));
        n4 = 987654071 * a3(), s3.push(4294967296 * a3() | 0);
      }
      return new o2.init(s3, t4);
    } }), a2 = s2.enc = {}, c2 = a2.Hex = { stringify: function(e4) {
      for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
        var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
        s3.push((i3 >>> 4).toString(16)), s3.push((15 & i3).toString(16));
      }
      return s3.join("");
    }, parse: function(e4) {
      for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3 += 2)
        n4[s3 >>> 3] |= parseInt(e4.substr(s3, 2), 16) << 24 - s3 % 8 * 4;
      return new o2.init(n4, t4 / 2);
    } }, u2 = a2.Latin1 = { stringify: function(e4) {
      for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
        var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
        s3.push(String.fromCharCode(i3));
      }
      return s3.join("");
    }, parse: function(e4) {
      for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3++)
        n4[s3 >>> 2] |= (255 & e4.charCodeAt(s3)) << 24 - s3 % 4 * 8;
      return new o2.init(n4, t4);
    } }, l2 = a2.Utf8 = { stringify: function(e4) {
      try {
        return decodeURIComponent(escape(u2.stringify(e4)));
      } catch (e5) {
        throw new Error("Malformed UTF-8 data");
      }
    }, parse: function(e4) {
      return u2.parse(unescape(encodeURIComponent(e4)));
    } }, d2 = r2.BufferedBlockAlgorithm = i2.extend({ reset: function() {
      this._data = new o2.init(), this._nDataBytes = 0;
    }, _append: function(e4) {
      "string" == typeof e4 && (e4 = l2.parse(e4)), this._data.concat(e4), this._nDataBytes += e4.sigBytes;
    }, _process: function(t4) {
      var n4 = this._data, s3 = n4.words, r3 = n4.sigBytes, i3 = this.blockSize, a3 = r3 / (4 * i3), c3 = (a3 = t4 ? e3.ceil(a3) : e3.max((0 | a3) - this._minBufferSize, 0)) * i3, u3 = e3.min(4 * c3, r3);
      if (c3) {
        for (var l3 = 0; l3 < c3; l3 += i3)
          this._doProcessBlock(s3, l3);
        var d3 = s3.splice(0, c3);
        n4.sigBytes -= u3;
      }
      return new o2.init(d3, u3);
    }, clone: function() {
      var e4 = i2.clone.call(this);
      return e4._data = this._data.clone(), e4;
    }, _minBufferSize: 0 });
    r2.Hasher = d2.extend({ cfg: i2.extend(), init: function(e4) {
      this.cfg = this.cfg.extend(e4), this.reset();
    }, reset: function() {
      d2.reset.call(this), this._doReset();
    }, update: function(e4) {
      return this._append(e4), this._process(), this;
    }, finalize: function(e4) {
      return e4 && this._append(e4), this._doFinalize();
    }, blockSize: 16, _createHelper: function(e4) {
      return function(t4, n4) {
        return new e4.init(n4).finalize(t4);
      };
    }, _createHmacHelper: function(e4) {
      return function(t4, n4) {
        return new h2.HMAC.init(e4, n4).finalize(t4);
      };
    } });
    var h2 = s2.algo = {};
    return s2;
  }(Math), n2);
}), r = s, i = (n(function(e2, t2) {
  var n2;
  e2.exports = (n2 = r, function(e3) {
    var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [];
    !function() {
      for (var t4 = 0; t4 < 64; t4++)
        a2[t4] = 4294967296 * e3.abs(e3.sin(t4 + 1)) | 0;
    }();
    var c2 = o2.MD5 = i2.extend({ _doReset: function() {
      this._hash = new r2.init([1732584193, 4023233417, 2562383102, 271733878]);
    }, _doProcessBlock: function(e4, t4) {
      for (var n3 = 0; n3 < 16; n3++) {
        var s3 = t4 + n3, r3 = e4[s3];
        e4[s3] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8);
      }
      var i3 = this._hash.words, o3 = e4[t4 + 0], c3 = e4[t4 + 1], p2 = e4[t4 + 2], f2 = e4[t4 + 3], g2 = e4[t4 + 4], m2 = e4[t4 + 5], y2 = e4[t4 + 6], _2 = e4[t4 + 7], w2 = e4[t4 + 8], v2 = e4[t4 + 9], I2 = e4[t4 + 10], S2 = e4[t4 + 11], k2 = e4[t4 + 12], A2 = e4[t4 + 13], C2 = e4[t4 + 14], T2 = e4[t4 + 15], b2 = i3[0], P2 = i3[1], x2 = i3[2], O2 = i3[3];
      b2 = u2(b2, P2, x2, O2, o3, 7, a2[0]), O2 = u2(O2, b2, P2, x2, c3, 12, a2[1]), x2 = u2(x2, O2, b2, P2, p2, 17, a2[2]), P2 = u2(P2, x2, O2, b2, f2, 22, a2[3]), b2 = u2(b2, P2, x2, O2, g2, 7, a2[4]), O2 = u2(O2, b2, P2, x2, m2, 12, a2[5]), x2 = u2(x2, O2, b2, P2, y2, 17, a2[6]), P2 = u2(P2, x2, O2, b2, _2, 22, a2[7]), b2 = u2(b2, P2, x2, O2, w2, 7, a2[8]), O2 = u2(O2, b2, P2, x2, v2, 12, a2[9]), x2 = u2(x2, O2, b2, P2, I2, 17, a2[10]), P2 = u2(P2, x2, O2, b2, S2, 22, a2[11]), b2 = u2(b2, P2, x2, O2, k2, 7, a2[12]), O2 = u2(O2, b2, P2, x2, A2, 12, a2[13]), x2 = u2(x2, O2, b2, P2, C2, 17, a2[14]), b2 = l2(b2, P2 = u2(P2, x2, O2, b2, T2, 22, a2[15]), x2, O2, c3, 5, a2[16]), O2 = l2(O2, b2, P2, x2, y2, 9, a2[17]), x2 = l2(x2, O2, b2, P2, S2, 14, a2[18]), P2 = l2(P2, x2, O2, b2, o3, 20, a2[19]), b2 = l2(b2, P2, x2, O2, m2, 5, a2[20]), O2 = l2(O2, b2, P2, x2, I2, 9, a2[21]), x2 = l2(x2, O2, b2, P2, T2, 14, a2[22]), P2 = l2(P2, x2, O2, b2, g2, 20, a2[23]), b2 = l2(b2, P2, x2, O2, v2, 5, a2[24]), O2 = l2(O2, b2, P2, x2, C2, 9, a2[25]), x2 = l2(x2, O2, b2, P2, f2, 14, a2[26]), P2 = l2(P2, x2, O2, b2, w2, 20, a2[27]), b2 = l2(b2, P2, x2, O2, A2, 5, a2[28]), O2 = l2(O2, b2, P2, x2, p2, 9, a2[29]), x2 = l2(x2, O2, b2, P2, _2, 14, a2[30]), b2 = d2(b2, P2 = l2(P2, x2, O2, b2, k2, 20, a2[31]), x2, O2, m2, 4, a2[32]), O2 = d2(O2, b2, P2, x2, w2, 11, a2[33]), x2 = d2(x2, O2, b2, P2, S2, 16, a2[34]), P2 = d2(P2, x2, O2, b2, C2, 23, a2[35]), b2 = d2(b2, P2, x2, O2, c3, 4, a2[36]), O2 = d2(O2, b2, P2, x2, g2, 11, a2[37]), x2 = d2(x2, O2, b2, P2, _2, 16, a2[38]), P2 = d2(P2, x2, O2, b2, I2, 23, a2[39]), b2 = d2(b2, P2, x2, O2, A2, 4, a2[40]), O2 = d2(O2, b2, P2, x2, o3, 11, a2[41]), x2 = d2(x2, O2, b2, P2, f2, 16, a2[42]), P2 = d2(P2, x2, O2, b2, y2, 23, a2[43]), b2 = d2(b2, P2, x2, O2, v2, 4, a2[44]), O2 = d2(O2, b2, P2, x2, k2, 11, a2[45]), x2 = d2(x2, O2, b2, P2, T2, 16, a2[46]), b2 = h2(b2, P2 = d2(P2, x2, O2, b2, p2, 23, a2[47]), x2, O2, o3, 6, a2[48]), O2 = h2(O2, b2, P2, x2, _2, 10, a2[49]), x2 = h2(x2, O2, b2, P2, C2, 15, a2[50]), P2 = h2(P2, x2, O2, b2, m2, 21, a2[51]), b2 = h2(b2, P2, x2, O2, k2, 6, a2[52]), O2 = h2(O2, b2, P2, x2, f2, 10, a2[53]), x2 = h2(x2, O2, b2, P2, I2, 15, a2[54]), P2 = h2(P2, x2, O2, b2, c3, 21, a2[55]), b2 = h2(b2, P2, x2, O2, w2, 6, a2[56]), O2 = h2(O2, b2, P2, x2, T2, 10, a2[57]), x2 = h2(x2, O2, b2, P2, y2, 15, a2[58]), P2 = h2(P2, x2, O2, b2, A2, 21, a2[59]), b2 = h2(b2, P2, x2, O2, g2, 6, a2[60]), O2 = h2(O2, b2, P2, x2, S2, 10, a2[61]), x2 = h2(x2, O2, b2, P2, p2, 15, a2[62]), P2 = h2(P2, x2, O2, b2, v2, 21, a2[63]), i3[0] = i3[0] + b2 | 0, i3[1] = i3[1] + P2 | 0, i3[2] = i3[2] + x2 | 0, i3[3] = i3[3] + O2 | 0;
    }, _doFinalize: function() {
      var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
      n3[r3 >>> 5] |= 128 << 24 - r3 % 32;
      var i3 = e3.floor(s3 / 4294967296), o3 = s3;
      n3[15 + (r3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), n3[14 + (r3 + 64 >>> 9 << 4)] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8), t4.sigBytes = 4 * (n3.length + 1), this._process();
      for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
        var l3 = c3[u3];
        c3[u3] = 16711935 & (l3 << 8 | l3 >>> 24) | 4278255360 & (l3 << 24 | l3 >>> 8);
      }
      return a3;
    }, clone: function() {
      var e4 = i2.clone.call(this);
      return e4._hash = this._hash.clone(), e4;
    } });
    function u2(e4, t4, n3, s3, r3, i3, o3) {
      var a3 = e4 + (t4 & n3 | ~t4 & s3) + r3 + o3;
      return (a3 << i3 | a3 >>> 32 - i3) + t4;
    }
    function l2(e4, t4, n3, s3, r3, i3, o3) {
      var a3 = e4 + (t4 & s3 | n3 & ~s3) + r3 + o3;
      return (a3 << i3 | a3 >>> 32 - i3) + t4;
    }
    function d2(e4, t4, n3, s3, r3, i3, o3) {
      var a3 = e4 + (t4 ^ n3 ^ s3) + r3 + o3;
      return (a3 << i3 | a3 >>> 32 - i3) + t4;
    }
    function h2(e4, t4, n3, s3, r3, i3, o3) {
      var a3 = e4 + (n3 ^ (t4 | ~s3)) + r3 + o3;
      return (a3 << i3 | a3 >>> 32 - i3) + t4;
    }
    t3.MD5 = i2._createHelper(c2), t3.HmacMD5 = i2._createHmacHelper(c2);
  }(Math), n2.MD5);
}), n(function(e2, t2) {
  var n2;
  e2.exports = (n2 = r, void function() {
    var e3 = n2, t3 = e3.lib.Base, s2 = e3.enc.Utf8;
    e3.algo.HMAC = t3.extend({ init: function(e4, t4) {
      e4 = this._hasher = new e4.init(), "string" == typeof t4 && (t4 = s2.parse(t4));
      var n3 = e4.blockSize, r2 = 4 * n3;
      t4.sigBytes > r2 && (t4 = e4.finalize(t4)), t4.clamp();
      for (var i2 = this._oKey = t4.clone(), o2 = this._iKey = t4.clone(), a2 = i2.words, c2 = o2.words, u2 = 0; u2 < n3; u2++)
        a2[u2] ^= 1549556828, c2[u2] ^= 909522486;
      i2.sigBytes = o2.sigBytes = r2, this.reset();
    }, reset: function() {
      var e4 = this._hasher;
      e4.reset(), e4.update(this._iKey);
    }, update: function(e4) {
      return this._hasher.update(e4), this;
    }, finalize: function(e4) {
      var t4 = this._hasher, n3 = t4.finalize(e4);
      return t4.reset(), t4.finalize(this._oKey.clone().concat(n3));
    } });
  }());
}), n(function(e2, t2) {
  e2.exports = r.HmacMD5;
})), o = n(function(e2, t2) {
  e2.exports = r.enc.Utf8;
}), a = n(function(e2, t2) {
  var n2;
  e2.exports = (n2 = r, function() {
    var e3 = n2, t3 = e3.lib.WordArray;
    function s2(e4, n3, s3) {
      for (var r2 = [], i2 = 0, o2 = 0; o2 < n3; o2++)
        if (o2 % 4) {
          var a2 = s3[e4.charCodeAt(o2 - 1)] << o2 % 4 * 2, c2 = s3[e4.charCodeAt(o2)] >>> 6 - o2 % 4 * 2;
          r2[i2 >>> 2] |= (a2 | c2) << 24 - i2 % 4 * 8, i2++;
        }
      return t3.create(r2, i2);
    }
    e3.enc.Base64 = { stringify: function(e4) {
      var t4 = e4.words, n3 = e4.sigBytes, s3 = this._map;
      e4.clamp();
      for (var r2 = [], i2 = 0; i2 < n3; i2 += 3)
        for (var o2 = (t4[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255) << 16 | (t4[i2 + 1 >>> 2] >>> 24 - (i2 + 1) % 4 * 8 & 255) << 8 | t4[i2 + 2 >>> 2] >>> 24 - (i2 + 2) % 4 * 8 & 255, a2 = 0; a2 < 4 && i2 + 0.75 * a2 < n3; a2++)
          r2.push(s3.charAt(o2 >>> 6 * (3 - a2) & 63));
      var c2 = s3.charAt(64);
      if (c2)
        for (; r2.length % 4; )
          r2.push(c2);
      return r2.join("");
    }, parse: function(e4) {
      var t4 = e4.length, n3 = this._map, r2 = this._reverseMap;
      if (!r2) {
        r2 = this._reverseMap = [];
        for (var i2 = 0; i2 < n3.length; i2++)
          r2[n3.charCodeAt(i2)] = i2;
      }
      var o2 = n3.charAt(64);
      if (o2) {
        var a2 = e4.indexOf(o2);
        -1 !== a2 && (t4 = a2);
      }
      return s2(e4, t4, r2);
    }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
  }(), n2.enc.Base64);
}), c = a;
const u = "FUNCTION", l = "OBJECT", d = "CLIENT_DB", h = "pending", p = "fulfilled", f = "rejected";
function g(e2) {
  return Object.prototype.toString.call(e2).slice(8, -1).toLowerCase();
}
function m(e2) {
  return "object" === g(e2);
}
function y(e2) {
  return "function" == typeof e2;
}
function _(e2) {
  return function() {
    try {
      return e2.apply(e2, arguments);
    } catch (e3) {
      console.error(e3);
    }
  };
}
const w = "REJECTED", v = "NOT_PENDING";
class I {
  constructor({ createPromise: e2, retryRule: t2 = w } = {}) {
    this.createPromise = e2, this.status = null, this.promise = null, this.retryRule = t2;
  }
  get needRetry() {
    if (!this.status)
      return true;
    switch (this.retryRule) {
      case w:
        return this.status === f;
      case v:
        return this.status !== h;
    }
  }
  exec() {
    return this.needRetry ? (this.status = h, this.promise = this.createPromise().then((e2) => (this.status = p, Promise.resolve(e2)), (e2) => (this.status = f, Promise.reject(e2))), this.promise) : this.promise;
  }
}
function S(e2) {
  return e2 && "string" == typeof e2 ? JSON.parse(e2) : e2;
}
const k = false, C = S(define_process_env_UNI_SECURE_NETWORK_CONFIG_default), T = "app";
S("");
const P = S('[{"provider":"alipay","spaceName":"unibest-x","spaceId":"env-00jy6p9vat6w","spaceAppId":"2021006189647783","accessKey":"v1hNSO9cKet13BIZ","secretKey":"KCHJ9hiSZqvmd8Yx","endpoint":"https://env-00jy6p9vat6w.api-hz.cloudbasefunction.cn","failoverEndpoint":""}]') || [];
let O = "";
try {
  O = "__UNI__B120614";
} catch (e2) {
}
let E, L = {};
if (L = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {}, "mp-weixin" === T)
  ;
function R(e2, t2 = {}) {
  var n2, s2;
  return n2 = L, s2 = e2, Object.prototype.hasOwnProperty.call(n2, s2) || (L[e2] = t2), L[e2];
}
function U() {
  return E || (E = function() {
    if ("undefined" != typeof globalThis)
      return globalThis;
    if ("undefined" != typeof self)
      return self;
    if ("undefined" != typeof window)
      return window;
    function e2() {
      return this;
    }
    return void 0 !== e2() ? e2() : new Function("return this")();
  }(), E);
}
const N = ["invoke", "success", "fail", "complete"], D = R("_globalUniCloudInterceptor");
function M(e2, t2) {
  D[e2] || (D[e2] = {}), m(t2) && Object.keys(t2).forEach((n2) => {
    N.indexOf(n2) > -1 && function(e3, t3, n3) {
      let s2 = D[e3][t3];
      s2 || (s2 = D[e3][t3] = []), -1 === s2.indexOf(n3) && y(n3) && s2.push(n3);
    }(e2, n2, t2[n2]);
  });
}
function F(e2, t2) {
  D[e2] || (D[e2] = {}), m(t2) ? Object.keys(t2).forEach((n2) => {
    N.indexOf(n2) > -1 && function(e3, t3, n3) {
      const s2 = D[e3][t3];
      if (!s2)
        return;
      const r2 = s2.indexOf(n3);
      r2 > -1 && s2.splice(r2, 1);
    }(e2, n2, t2[n2]);
  }) : delete D[e2];
}
function q(e2, t2) {
  return e2 && 0 !== e2.length ? e2.reduce((e3, n2) => e3.then(() => n2(t2)), Promise.resolve()) : Promise.resolve();
}
function K(e2, t2) {
  return D[e2] && D[e2][t2] || [];
}
function j(e2) {
  M("callObject", e2);
}
const B = R("_globalUniCloudListener"), $ = "response", H = "needLogin", W = "refreshToken", J = "failover", z = "clientdb", V = "cloudfunction", G = "cloudobject";
function Q(e2) {
  return B[e2] || (B[e2] = []), B[e2];
}
function Y(e2, t2) {
  const n2 = Q(e2);
  n2.includes(t2) || n2.push(t2);
}
function X(e2, t2) {
  const n2 = Q(e2), s2 = n2.indexOf(t2);
  -1 !== s2 && n2.splice(s2, 1);
}
function Z(e2, t2) {
  const n2 = Q(e2);
  for (let e3 = 0; e3 < n2.length; e3++) {
    (0, n2[e3])(t2);
  }
}
let ee, te = false;
function ne() {
  return ee || (ee = new Promise((e2) => {
    te && e2(), function t2() {
      if ("function" == typeof getCurrentPages) {
        const t3 = getCurrentPages();
        t3 && t3[0] && (te = true, e2());
      }
      te || setTimeout(() => {
        t2();
      }, 30);
    }();
  }), ee);
}
function se(e2) {
  const t2 = {};
  for (const n2 in e2) {
    const s2 = e2[n2];
    y(s2) && (t2[n2] = _(s2));
  }
  return t2;
}
class re extends Error {
  constructor(e2) {
    const t2 = e2.message || e2.errMsg || "unknown system error";
    super(t2), this.errMsg = t2, this.code = this.errCode = e2.code || e2.errCode || "SYSTEM_ERROR", this.errSubject = this.subject = e2.subject || e2.errSubject, this.cause = e2.cause, this.requestId = e2.requestId;
  }
  toJson(e2 = 0) {
    if (!(e2 >= 10))
      return e2++, { errCode: this.errCode, errMsg: this.errMsg, errSubject: this.errSubject, cause: this.cause && this.cause.toJson ? this.cause.toJson(e2) : this.cause };
  }
}
var ie = { request: (e2) => uni.request(e2), uploadFile: (e2) => uni.uploadFile(e2), setStorageSync: (e2, t2) => uni.setStorageSync(e2, t2), getStorageSync: (e2) => uni.getStorageSync(e2), removeStorageSync: (e2) => uni.removeStorageSync(e2), clearStorageSync: () => uni.clearStorageSync(), connectSocket: (e2) => uni.connectSocket(e2) };
function oe(e2) {
  return e2 && oe(e2.__v_raw) || e2;
}
function ae() {
  return { token: ie.getStorageSync("uni_id_token") || ie.getStorageSync("uniIdToken"), tokenExpired: ie.getStorageSync("uni_id_token_expired") };
}
function ce({ token: e2, tokenExpired: t2 } = {}) {
  e2 && ie.setStorageSync("uni_id_token", e2), t2 && ie.setStorageSync("uni_id_token_expired", t2);
}
let ue, le;
function de() {
  return ue || (ue = uni.getSystemInfoSync()), ue;
}
function he() {
  let e2, t2;
  try {
    if (uni.getLaunchOptionsSync) {
      if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1)
        return;
      const { scene: n2, channel: s2 } = uni.getLaunchOptionsSync();
      e2 = s2, t2 = n2;
    }
  } catch (e3) {
  }
  return { channel: e2, scene: t2 };
}
let pe = {};
function fe() {
  const e2 = uni.getLocale && uni.getLocale() || "en";
  if (le)
    return { ...pe, ...le, locale: e2, LOCALE: e2 };
  const t2 = de(), { deviceId: n2, osName: s2, uniPlatform: r2, appId: i2 } = t2, o2 = ["appId", "appLanguage", "appName", "appVersion", "appVersionCode", "appWgtVersion", "browserName", "browserVersion", "deviceBrand", "deviceId", "deviceModel", "deviceType", "osName", "osVersion", "romName", "romVersion", "ua", "hostName", "hostVersion", "uniPlatform", "uniRuntimeVersion", "uniRuntimeVersionCode", "uniCompilerVersion", "uniCompilerVersionCode"];
  for (const e3 in t2)
    Object.hasOwnProperty.call(t2, e3) && -1 === o2.indexOf(e3) && delete t2[e3];
  return le = { PLATFORM: r2, OS: s2, APPID: i2, DEVICEID: n2, ...he(), ...t2 }, { ...pe, ...le, locale: e2, LOCALE: e2 };
}
var ge = { sign: function(e2, t2) {
  let n2 = "";
  return Object.keys(e2).sort().forEach(function(t3) {
    e2[t3] && (n2 = n2 + "&" + t3 + "=" + e2[t3]);
  }), n2 = n2.slice(1), i(n2, t2).toString();
}, wrappedRequest: function(e2, t2) {
  return new Promise((n2, s2) => {
    t2(Object.assign(e2, { complete(e3) {
      e3 || (e3 = {});
      const t3 = e3.data && e3.data.header && e3.data.header["x-serverless-request-id"] || e3.header && e3.header["request-id"];
      if (!e3.statusCode || e3.statusCode >= 400) {
        const n3 = e3.data && e3.data.error && e3.data.error.code || "SYS_ERR", r3 = e3.data && e3.data.error && e3.data.error.message || e3.errMsg || "request:fail";
        return s2(new re({ code: n3, message: r3, requestId: t3 }));
      }
      const r2 = e3.data;
      if (r2.error)
        return s2(new re({ code: r2.error.code, message: r2.error.message, requestId: t3 }));
      r2.result = r2.data, r2.requestId = t3, delete r2.data, n2(r2);
    } }));
  });
}, toBase64: function(e2) {
  return c.stringify(o.parse(e2));
} };
var me = class {
  constructor(e2) {
    ["spaceId", "clientSecret"].forEach((t2) => {
      if (!Object.prototype.hasOwnProperty.call(e2, t2))
        throw new Error(`${t2} required`);
    }), this.config = Object.assign({}, { endpoint: 0 === e2.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com" }, e2), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = ie, this._getAccessTokenPromiseHub = new I({ createPromise: () => this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e3) => {
      if (!e3.result || !e3.result.accessToken)
        throw new re({ code: "AUTH_FAILED", message: "获取accessToken失败" });
      this.setAccessToken(e3.result.accessToken);
    }), retryRule: v });
  }
  get hasAccessToken() {
    return !!this.accessToken;
  }
  setAccessToken(e2) {
    this.accessToken = e2;
  }
  requestWrapped(e2) {
    return ge.wrappedRequest(e2, this.adapter.request);
  }
  requestAuth(e2) {
    return this.requestWrapped(e2);
  }
  request(e2, t2) {
    return Promise.resolve().then(() => this.hasAccessToken ? t2 ? this.requestWrapped(e2) : this.requestWrapped(e2).catch((t3) => new Promise((e3, n2) => {
      !t3 || "GATEWAY_INVALID_TOKEN" !== t3.code && "InvalidParameter.InvalidToken" !== t3.code ? n2(t3) : e3();
    }).then(() => this.getAccessToken()).then(() => {
      const t4 = this.rebuildRequest(e2);
      return this.request(t4, true);
    })) : this.getAccessToken().then(() => {
      const t3 = this.rebuildRequest(e2);
      return this.request(t3, true);
    }));
  }
  rebuildRequest(e2) {
    const t2 = Object.assign({}, e2);
    return t2.data.token = this.accessToken, t2.header["x-basement-token"] = this.accessToken, t2.header["x-serverless-sign"] = ge.sign(t2.data, this.config.clientSecret), t2;
  }
  setupRequest(e2, t2) {
    const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
    return "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = ge.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
  }
  getAccessToken() {
    return this._getAccessTokenPromiseHub.exec();
  }
  async authorize() {
    await this.getAccessToken();
  }
  callFunction(e2) {
    const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e2.name, functionArgs: e2.data || {} }) };
    return this.request({ ...this.setupRequest(t2), timeout: e2.timeout });
  }
  getOSSUploadOptionsFromPath(e2) {
    const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e2) };
    return this.request(this.setupRequest(t2));
  }
  uploadFileToOSS({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
    return new Promise((o2, a2) => {
      const c2 = this.adapter.uploadFile({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e3) {
        e3 && e3.statusCode < 400 ? o2(e3) : a2(new re({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
      }, fail(e3) {
        a2(new re({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
      } });
      "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
        i2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
      });
    });
  }
  reportOSSUpload(e2) {
    const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e2) };
    return this.request(this.setupRequest(t2));
  }
  async uploadFile({ filePath: e2, cloudPath: t2, fileType: n2 = "image", cloudPathAsRealPath: s2 = false, onUploadProgress: r2, config: i2 }) {
    if ("string" !== g(t2))
      throw new re({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });
    if (!(t2 = t2.trim()))
      throw new re({ code: "INVALID_PARAM", message: "cloudPath不可为空" });
    if (/:\/\//.test(t2))
      throw new re({ code: "INVALID_PARAM", message: "cloudPath不合法" });
    const o2 = i2 && i2.envType || this.config.envType;
    if (s2 && ("/" !== t2[0] && (t2 = "/" + t2), t2.indexOf("\\") > -1))
      throw new re({ code: "INVALID_PARAM", message: "使用cloudPath作为路径时，cloudPath不可包含“\\”" });
    const a2 = (await this.getOSSUploadOptionsFromPath({ env: o2, filename: s2 ? t2.split("/").pop() : t2, fileId: s2 ? t2 : void 0 })).result, c2 = "https://" + a2.cdnDomain + "/" + a2.ossPath, { securityToken: u2, accessKeyId: l2, signature: d2, host: h2, ossPath: p2, id: f2, policy: m2, ossCallbackUrl: y2 } = a2, _2 = { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: l2, Signature: d2, host: h2, id: f2, key: p2, policy: m2, success_action_status: 200 };
    if (u2 && (_2["x-oss-security-token"] = u2), y2) {
      const e3 = JSON.stringify({ callbackUrl: y2, callbackBody: JSON.stringify({ fileId: f2, spaceId: this.config.spaceId }), callbackBodyType: "application/json" });
      _2.callback = ge.toBase64(e3);
    }
    const w2 = { url: "https://" + a2.host, formData: _2, fileName: "file", name: "file", filePath: e2, fileType: n2 };
    if (await this.uploadFileToOSS(Object.assign({}, w2, { onUploadProgress: r2 })), y2)
      return { success: true, filePath: e2, fileID: c2 };
    if ((await this.reportOSSUpload({ id: f2 })).success)
      return { success: true, filePath: e2, fileID: c2 };
    throw new re({ code: "UPLOAD_FAILED", message: "文件上传失败" });
  }
  getTempFileURL({ fileList: e2 } = {}) {
    return new Promise((t2, n2) => {
      Array.isArray(e2) && 0 !== e2.length || n2(new re({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" })), this.getFileInfo({ fileList: e2 }).then((n3) => {
        t2({ fileList: e2.map((e3, t3) => {
          const s2 = n3.fileList[t3];
          return { fileID: e3, tempFileURL: s2 && s2.url || e3 };
        }) });
      });
    });
  }
  async getFileInfo({ fileList: e2 } = {}) {
    if (!Array.isArray(e2) || 0 === e2.length)
      throw new re({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
    const t2 = { method: "serverless.file.resource.info", params: JSON.stringify({ id: e2.map((e3) => e3.split("?")[0]).join(",") }) };
    return { fileList: (await this.request(this.setupRequest(t2))).result };
  }
};
var ye = { init(e2) {
  const t2 = new me(e2), n2 = { signInAnonymously: function() {
    return t2.authorize();
  }, getLoginState: function() {
    return Promise.resolve(false);
  } };
  return t2.auth = function() {
    return n2;
  }, t2.customAuth = t2.auth, t2;
} };
const _e = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
var we;
!function(e2) {
  e2.local = "local", e2.none = "none", e2.session = "session";
}(we || (we = {}));
var ve = function() {
}, Ie = n(function(e2, t2) {
  var n2;
  e2.exports = (n2 = r, function(e3) {
    var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [], c2 = [];
    !function() {
      function t4(t5) {
        for (var n4 = e3.sqrt(t5), s4 = 2; s4 <= n4; s4++)
          if (!(t5 % s4))
            return false;
        return true;
      }
      function n3(e4) {
        return 4294967296 * (e4 - (0 | e4)) | 0;
      }
      for (var s3 = 2, r3 = 0; r3 < 64; )
        t4(s3) && (r3 < 8 && (a2[r3] = n3(e3.pow(s3, 0.5))), c2[r3] = n3(e3.pow(s3, 1 / 3)), r3++), s3++;
    }();
    var u2 = [], l2 = o2.SHA256 = i2.extend({ _doReset: function() {
      this._hash = new r2.init(a2.slice(0));
    }, _doProcessBlock: function(e4, t4) {
      for (var n3 = this._hash.words, s3 = n3[0], r3 = n3[1], i3 = n3[2], o3 = n3[3], a3 = n3[4], l3 = n3[5], d2 = n3[6], h2 = n3[7], p2 = 0; p2 < 64; p2++) {
        if (p2 < 16)
          u2[p2] = 0 | e4[t4 + p2];
        else {
          var f2 = u2[p2 - 15], g2 = (f2 << 25 | f2 >>> 7) ^ (f2 << 14 | f2 >>> 18) ^ f2 >>> 3, m2 = u2[p2 - 2], y2 = (m2 << 15 | m2 >>> 17) ^ (m2 << 13 | m2 >>> 19) ^ m2 >>> 10;
          u2[p2] = g2 + u2[p2 - 7] + y2 + u2[p2 - 16];
        }
        var _2 = s3 & r3 ^ s3 & i3 ^ r3 & i3, w2 = (s3 << 30 | s3 >>> 2) ^ (s3 << 19 | s3 >>> 13) ^ (s3 << 10 | s3 >>> 22), v2 = h2 + ((a3 << 26 | a3 >>> 6) ^ (a3 << 21 | a3 >>> 11) ^ (a3 << 7 | a3 >>> 25)) + (a3 & l3 ^ ~a3 & d2) + c2[p2] + u2[p2];
        h2 = d2, d2 = l3, l3 = a3, a3 = o3 + v2 | 0, o3 = i3, i3 = r3, r3 = s3, s3 = v2 + (w2 + _2) | 0;
      }
      n3[0] = n3[0] + s3 | 0, n3[1] = n3[1] + r3 | 0, n3[2] = n3[2] + i3 | 0, n3[3] = n3[3] + o3 | 0, n3[4] = n3[4] + a3 | 0, n3[5] = n3[5] + l3 | 0, n3[6] = n3[6] + d2 | 0, n3[7] = n3[7] + h2 | 0;
    }, _doFinalize: function() {
      var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
      return n3[r3 >>> 5] |= 128 << 24 - r3 % 32, n3[14 + (r3 + 64 >>> 9 << 4)] = e3.floor(s3 / 4294967296), n3[15 + (r3 + 64 >>> 9 << 4)] = s3, t4.sigBytes = 4 * n3.length, this._process(), this._hash;
    }, clone: function() {
      var e4 = i2.clone.call(this);
      return e4._hash = this._hash.clone(), e4;
    } });
    t3.SHA256 = i2._createHelper(l2), t3.HmacSHA256 = i2._createHmacHelper(l2);
  }(Math), n2.SHA256);
}), Se = Ie, ke = n(function(e2, t2) {
  e2.exports = r.HmacSHA256;
});
const Ae = () => {
  let e2;
  if (!Promise) {
    e2 = () => {
    }, e2.promise = {};
    const t3 = () => {
      throw new re({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' });
    };
    return Object.defineProperty(e2.promise, "then", { get: t3 }), Object.defineProperty(e2.promise, "catch", { get: t3 }), e2;
  }
  const t2 = new Promise((t3, n2) => {
    e2 = (e3, s2) => e3 ? n2(e3) : t3(s2);
  });
  return e2.promise = t2, e2;
};
function Ce(e2) {
  return void 0 === e2;
}
function Te(e2) {
  return "[object Null]" === Object.prototype.toString.call(e2);
}
function be(e2 = "") {
  return e2.replace(/([\s\S]+)\s+(请前往云开发AI小助手查看问题：.*)/, "$1");
}
function Pe(e2 = 32) {
  const t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n2 = t2.length;
  let s2 = "";
  for (let r2 = 0; r2 < e2; r2++)
    s2 += t2.charAt(Math.floor(Math.random() * n2));
  return s2;
}
var xe;
function Oe(e2) {
  const t2 = (n2 = e2, "[object Array]" === Object.prototype.toString.call(n2) ? e2 : [e2]);
  var n2;
  for (const e3 of t2) {
    const { isMatch: t3, genAdapter: n3, runtime: s2 } = e3;
    if (t3())
      return { adapter: n3(), runtime: s2 };
  }
}
!function(e2) {
  e2.WEB = "web", e2.WX_MP = "wx_mp";
}(xe || (xe = {}));
const Ee = { adapter: null, runtime: void 0 }, Le = ["anonymousUuidKey"];
class Re extends ve {
  constructor() {
    super(), Ee.adapter.root.tcbObject || (Ee.adapter.root.tcbObject = {});
  }
  setItem(e2, t2) {
    Ee.adapter.root.tcbObject[e2] = t2;
  }
  getItem(e2) {
    return Ee.adapter.root.tcbObject[e2];
  }
  removeItem(e2) {
    delete Ee.adapter.root.tcbObject[e2];
  }
  clear() {
    delete Ee.adapter.root.tcbObject;
  }
}
function Ue(e2, t2) {
  switch (e2) {
    case "local":
      return t2.localStorage || new Re();
    case "none":
      return new Re();
    default:
      return t2.sessionStorage || new Re();
  }
}
class Ne {
  constructor(e2) {
    if (!this._storage) {
      this._persistence = Ee.adapter.primaryStorage || e2.persistence, this._storage = Ue(this._persistence, Ee.adapter);
      const t2 = `access_token_${e2.env}`, n2 = `access_token_expire_${e2.env}`, s2 = `refresh_token_${e2.env}`, r2 = `anonymous_uuid_${e2.env}`, i2 = `login_type_${e2.env}`, o2 = "device_id", a2 = `token_type_${e2.env}`, c2 = `user_info_${e2.env}`;
      this.keys = { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: r2, loginTypeKey: i2, userInfoKey: c2, deviceIdKey: o2, tokenTypeKey: a2 };
    }
  }
  updatePersistence(e2) {
    if (e2 === this._persistence)
      return;
    const t2 = "local" === this._persistence;
    this._persistence = e2;
    const n2 = Ue(e2, Ee.adapter);
    for (const e3 in this.keys) {
      const s2 = this.keys[e3];
      if (t2 && Le.includes(e3))
        continue;
      const r2 = this._storage.getItem(s2);
      Ce(r2) || Te(r2) || (n2.setItem(s2, r2), this._storage.removeItem(s2));
    }
    this._storage = n2;
  }
  setStore(e2, t2, n2) {
    if (!this._storage)
      return;
    const s2 = { version: n2 || "localCachev1", content: t2 }, r2 = JSON.stringify(s2);
    try {
      this._storage.setItem(e2, r2);
    } catch (e3) {
      throw e3;
    }
  }
  getStore(e2, t2) {
    try {
      if (!this._storage)
        return;
    } catch (e3) {
      return "";
    }
    t2 = t2 || "localCachev1";
    const n2 = this._storage.getItem(e2);
    if (!n2)
      return "";
    if (n2.indexOf(t2) >= 0) {
      return JSON.parse(n2).content;
    }
    return "";
  }
  removeStore(e2) {
    this._storage.removeItem(e2);
  }
}
const De = {}, Me = {};
function Fe(e2) {
  return De[e2];
}
class qe {
  constructor(e2, t2) {
    this.data = t2 || null, this.name = e2;
  }
}
class Ke extends qe {
  constructor(e2, t2) {
    super("error", { error: e2, data: t2 }), this.error = e2;
  }
}
const je = new class {
  constructor() {
    this._listeners = {};
  }
  on(e2, t2) {
    return function(e3, t3, n2) {
      n2[e3] = n2[e3] || [], n2[e3].push(t3);
    }(e2, t2, this._listeners), this;
  }
  off(e2, t2) {
    return function(e3, t3, n2) {
      if (n2 && n2[e3]) {
        const s2 = n2[e3].indexOf(t3);
        -1 !== s2 && n2[e3].splice(s2, 1);
      }
    }(e2, t2, this._listeners), this;
  }
  fire(e2, t2) {
    if (e2 instanceof Ke)
      return console.error(e2.error), this;
    const n2 = "string" == typeof e2 ? new qe(e2, t2 || {}) : e2;
    const s2 = n2.name;
    if (this._listens(s2)) {
      n2.target = this;
      const e3 = this._listeners[s2] ? [...this._listeners[s2]] : [];
      for (const t3 of e3)
        t3.call(this, n2);
    }
    return this;
  }
  _listens(e2) {
    return this._listeners[e2] && this._listeners[e2].length > 0;
  }
}();
function Be(e2, t2) {
  je.on(e2, t2);
}
function $e(e2, t2 = {}) {
  je.fire(e2, t2);
}
function He(e2, t2) {
  je.off(e2, t2);
}
const We = "loginStateChanged", Je = "loginStateExpire", ze = "loginTypeChanged", Ve = "anonymousConverted", Ge = "refreshAccessToken";
var Qe;
!function(e2) {
  e2.ANONYMOUS = "ANONYMOUS", e2.WECHAT = "WECHAT", e2.WECHAT_PUBLIC = "WECHAT-PUBLIC", e2.WECHAT_OPEN = "WECHAT-OPEN", e2.CUSTOM = "CUSTOM", e2.EMAIL = "EMAIL", e2.USERNAME = "USERNAME", e2.NULL = "NULL";
}(Qe || (Qe = {}));
class Ye {
  constructor() {
    this._fnPromiseMap = /* @__PURE__ */ new Map();
  }
  async run(e2, t2) {
    let n2 = this._fnPromiseMap.get(e2);
    return n2 || (n2 = new Promise(async (n3, s2) => {
      try {
        await this._runIdlePromise();
        const s3 = t2();
        n3(await s3);
      } catch (e3) {
        s2(e3);
      } finally {
        this._fnPromiseMap.delete(e2);
      }
    }), this._fnPromiseMap.set(e2, n2)), n2;
  }
  _runIdlePromise() {
    return Promise.resolve();
  }
}
class Xe {
  constructor(e2) {
    this._singlePromise = new Ye(), this._cache = Fe(e2.env), this._baseURL = `https://${e2.env}.ap-shanghai.tcb-api.tencentcloudapi.com`, this._reqClass = new Ee.adapter.reqClass({ timeout: e2.timeout, timeoutMsg: `请求在${e2.timeout / 1e3}s内未完成，已中断`, restrictedMethods: ["post"] });
  }
  _getDeviceId() {
    if (this._deviceID)
      return this._deviceID;
    const { deviceIdKey: e2 } = this._cache.keys;
    let t2 = this._cache.getStore(e2);
    return "string" == typeof t2 && t2.length >= 16 && t2.length <= 48 || (t2 = Pe(), this._cache.setStore(e2, t2)), this._deviceID = t2, t2;
  }
  async _request(e2, t2, n2 = {}) {
    const s2 = { "x-request-id": Pe(), "x-device-id": this._getDeviceId() };
    if (n2.withAccessToken) {
      const { tokenTypeKey: e3 } = this._cache.keys, t3 = await this.getAccessToken(), n3 = this._cache.getStore(e3);
      s2.authorization = `${n3} ${t3}`;
    }
    return this._reqClass["get" === n2.method ? "get" : "post"]({ url: `${this._baseURL}${e2}`, data: t2, headers: s2 });
  }
  async _fetchAccessToken() {
    const { loginTypeKey: e2, accessTokenKey: t2, accessTokenExpireKey: n2, tokenTypeKey: s2 } = this._cache.keys, r2 = this._cache.getStore(e2);
    if (r2 && r2 !== Qe.ANONYMOUS)
      throw new re({ code: "INVALID_OPERATION", message: "非匿名登录不支持刷新 access token" });
    const i2 = await this._singlePromise.run("fetchAccessToken", async () => (await this._request("/auth/v1/signin/anonymously", {}, { method: "post" })).data), { access_token: o2, expires_in: a2, token_type: c2 } = i2;
    return this._cache.setStore(s2, c2), this._cache.setStore(t2, o2), this._cache.setStore(n2, Date.now() + 1e3 * a2), o2;
  }
  isAccessTokenExpired(e2, t2) {
    let n2 = true;
    return e2 && t2 && (n2 = t2 < Date.now()), n2;
  }
  async getAccessToken() {
    const { accessTokenKey: e2, accessTokenExpireKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2), s2 = this._cache.getStore(t2);
    return this.isAccessTokenExpired(n2, s2) ? this._fetchAccessToken() : n2;
  }
  async refreshAccessToken() {
    const { accessTokenKey: e2, accessTokenExpireKey: t2, loginTypeKey: n2 } = this._cache.keys;
    return this._cache.removeStore(e2), this._cache.removeStore(t2), this._cache.setStore(n2, Qe.ANONYMOUS), this.getAccessToken();
  }
  async getUserInfo() {
    return this._singlePromise.run("getUserInfo", async () => (await this._request("/auth/v1/user/me", {}, { withAccessToken: true, method: "get" })).data);
  }
}
const Ze = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"], et = { "X-SDK-Version": "1.3.5" };
function tt(e2, t2, n2) {
  const s2 = e2[t2];
  e2[t2] = function(t3) {
    const r2 = {}, i2 = {};
    n2.forEach((n3) => {
      const { data: s3, headers: o3 } = n3.call(e2, t3);
      Object.assign(r2, s3), Object.assign(i2, o3);
    });
    const o2 = t3.data;
    return o2 && (() => {
      var e3;
      if (e3 = o2, "[object FormData]" !== Object.prototype.toString.call(e3))
        t3.data = { ...o2, ...r2 };
      else
        for (const e4 in r2)
          o2.append(e4, r2[e4]);
    })(), t3.headers = { ...t3.headers || {}, ...i2 }, s2.call(e2, t3);
  };
}
function nt() {
  const e2 = Math.random().toString(16).slice(2);
  return { data: { seqId: e2 }, headers: { ...et, "x-seqid": e2 } };
}
class st {
  constructor(e2 = {}) {
    var t2;
    this.config = e2, this._reqClass = new Ee.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `请求在${this.config.timeout / 1e3}s内未完成，已中断`, restrictedMethods: ["post"] }), this._cache = Fe(this.config.env), this._localCache = (t2 = this.config.env, Me[t2]), this.oauth = new Xe(this.config), tt(this._reqClass, "post", [nt]), tt(this._reqClass, "upload", [nt]), tt(this._reqClass, "download", [nt]);
  }
  async post(e2) {
    return await this._reqClass.post(e2);
  }
  async upload(e2) {
    return await this._reqClass.upload(e2);
  }
  async download(e2) {
    return await this._reqClass.download(e2);
  }
  async refreshAccessToken() {
    let e2, t2;
    this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
    try {
      e2 = await this._refreshAccessTokenPromise;
    } catch (e3) {
      t2 = e3;
    }
    if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t2)
      throw t2;
    return e2;
  }
  async _refreshAccessToken() {
    const { accessTokenKey: e2, accessTokenExpireKey: t2, refreshTokenKey: n2, loginTypeKey: s2, anonymousUuidKey: r2 } = this._cache.keys;
    this._cache.removeStore(e2), this._cache.removeStore(t2);
    let i2 = this._cache.getStore(n2);
    if (!i2)
      throw new re({ message: "未登录CloudBase" });
    const o2 = { refresh_token: i2 }, a2 = await this.request("auth.fetchAccessTokenWithRefreshToken", o2);
    if (a2.data.code) {
      const { code: e3 } = a2.data;
      if ("SIGN_PARAM_INVALID" === e3 || "REFRESH_TOKEN_EXPIRED" === e3 || "INVALID_REFRESH_TOKEN" === e3) {
        if (this._cache.getStore(s2) === Qe.ANONYMOUS && "INVALID_REFRESH_TOKEN" === e3) {
          const e4 = this._cache.getStore(r2), t3 = this._cache.getStore(n2), s3 = await this.send("auth.signInAnonymously", { anonymous_uuid: e4, refresh_token: t3 });
          return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
        }
        $e(Je), this._cache.removeStore(n2);
      }
      throw new re({ code: a2.data.code, message: `刷新access token失败：${a2.data.code}` });
    }
    if (a2.data.access_token)
      return $e(Ge), this._cache.setStore(e2, a2.data.access_token), this._cache.setStore(t2, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
    a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), this._refreshAccessToken());
  }
  async getAccessToken() {
    const { accessTokenKey: e2, accessTokenExpireKey: t2, refreshTokenKey: n2 } = this._cache.keys;
    if (!this._cache.getStore(n2))
      throw new re({ message: "refresh token不存在，登录状态异常" });
    let s2 = this._cache.getStore(e2), r2 = this._cache.getStore(t2), i2 = true;
    return this._shouldRefreshAccessTokenHook && !await this._shouldRefreshAccessTokenHook(s2, r2) && (i2 = false), (!s2 || !r2 || r2 < Date.now()) && i2 ? this.refreshAccessToken() : { accessToken: s2, accessTokenExpire: r2 };
  }
  async request(e2, t2, n2) {
    const s2 = `x-tcb-trace_${this.config.env}`;
    let r2 = "application/x-www-form-urlencoded";
    const i2 = { action: e2, env: this.config.env, dataVersion: "2019-08-16", ...t2 };
    let o2;
    if (-1 === Ze.indexOf(e2) && (this._cache.keys, i2.access_token = await this.oauth.getAccessToken()), "storage.uploadFile" === e2) {
      o2 = new FormData();
      for (let e3 in o2)
        o2.hasOwnProperty(e3) && void 0 !== o2[e3] && o2.append(e3, i2[e3]);
      r2 = "multipart/form-data";
    } else {
      r2 = "application/json", o2 = {};
      for (let e3 in i2)
        void 0 !== i2[e3] && (o2[e3] = i2[e3]);
    }
    let a2 = { headers: { "content-type": r2 } };
    n2 && n2.timeout && (a2.timeout = n2.timeout), n2 && n2.onUploadProgress && (a2.onUploadProgress = n2.onUploadProgress);
    const c2 = this._localCache.getStore(s2);
    c2 && (a2.headers["X-TCB-Trace"] = c2);
    const { parse: u2, inQuery: l2, search: d2 } = t2;
    let h2 = { env: this.config.env };
    u2 && (h2.parse = true), l2 && (h2 = { ...l2, ...h2 });
    let p2 = function(e3, t3, n3 = {}) {
      const s3 = /\?/.test(t3);
      let r3 = "";
      for (let e4 in n3)
        "" === r3 ? !s3 && (t3 += "?") : r3 += "&", r3 += `${e4}=${encodeURIComponent(n3[e4])}`;
      return /^http(s)?\:\/\//.test(t3 += r3) ? t3 : `${e3}${t3}`;
    }(_e, "//tcb-api.tencentcloudapi.com/web", h2);
    d2 && (p2 += d2);
    const f2 = await this.post({ url: p2, data: o2, ...a2 }), g2 = f2.header && f2.header["x-tcb-trace"];
    if (g2 && this._localCache.setStore(s2, g2), 200 !== Number(f2.status) && 200 !== Number(f2.statusCode) || !f2.data)
      throw new re({ code: "NETWORK_ERROR", message: "network request error" });
    return f2;
  }
  async send(e2, t2 = {}, n2 = {}) {
    const s2 = await this.request(e2, t2, { ...n2, onUploadProgress: t2.onUploadProgress });
    if (("ACCESS_TOKEN_DISABLED" === s2.data.code || "ACCESS_TOKEN_EXPIRED" === s2.data.code) && -1 === Ze.indexOf(e2)) {
      await this.oauth.refreshAccessToken();
      const s3 = await this.request(e2, t2, { ...n2, onUploadProgress: t2.onUploadProgress });
      if (s3.data.code)
        throw new re({ code: s3.data.code, message: be(s3.data.message) });
      return s3.data;
    }
    if (s2.data.code)
      throw new re({ code: s2.data.code, message: be(s2.data.message) });
    return s2.data;
  }
  setRefreshToken(e2) {
    const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
    this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
  }
}
const rt = {};
function it(e2) {
  return rt[e2];
}
class ot {
  constructor(e2) {
    this.config = e2, this._cache = Fe(e2.env), this._request = it(e2.env);
  }
  setRefreshToken(e2) {
    const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
    this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
  }
  setAccessToken(e2, t2) {
    const { accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys;
    this._cache.setStore(n2, e2), this._cache.setStore(s2, t2);
  }
  async refreshUserInfo() {
    const { data: e2 } = await this._request.send("auth.getUserInfo", {});
    return this.setLocalUserInfo(e2), e2;
  }
  setLocalUserInfo(e2) {
    const { userInfoKey: t2 } = this._cache.keys;
    this._cache.setStore(t2, e2);
  }
}
class at {
  constructor(e2) {
    if (!e2)
      throw new re({ code: "PARAM_ERROR", message: "envId is not defined" });
    this._envId = e2, this._cache = Fe(this._envId), this._request = it(this._envId), this.setUserInfo();
  }
  linkWithTicket(e2) {
    if ("string" != typeof e2)
      throw new re({ code: "PARAM_ERROR", message: "ticket must be string" });
    return this._request.send("auth.linkWithTicket", { ticket: e2 });
  }
  linkWithRedirect(e2) {
    e2.signInWithRedirect();
  }
  updatePassword(e2, t2) {
    return this._request.send("auth.updatePassword", { oldPassword: t2, newPassword: e2 });
  }
  updateEmail(e2) {
    return this._request.send("auth.updateEmail", { newEmail: e2 });
  }
  updateUsername(e2) {
    if ("string" != typeof e2)
      throw new re({ code: "PARAM_ERROR", message: "username must be a string" });
    return this._request.send("auth.updateUsername", { username: e2 });
  }
  async getLinkedUidList() {
    const { data: e2 } = await this._request.send("auth.getLinkedUidList", {});
    let t2 = false;
    const { users: n2 } = e2;
    return n2.forEach((e3) => {
      e3.wxOpenId && e3.wxPublicId && (t2 = true);
    }), { users: n2, hasPrimaryUid: t2 };
  }
  setPrimaryUid(e2) {
    return this._request.send("auth.setPrimaryUid", { uid: e2 });
  }
  unlink(e2) {
    return this._request.send("auth.unlink", { platform: e2 });
  }
  async update(e2) {
    const { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 } = e2, { data: a2 } = await this._request.send("auth.updateUserInfo", { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 });
    this.setLocalUserInfo(a2);
  }
  async refresh() {
    const e2 = await this._request.oauth.getUserInfo();
    return this.setLocalUserInfo(e2), e2;
  }
  setUserInfo() {
    const { userInfoKey: e2 } = this._cache.keys, t2 = this._cache.getStore(e2);
    ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((e3) => {
      this[e3] = t2[e3];
    }), this.location = { country: t2.country, province: t2.province, city: t2.city };
  }
  setLocalUserInfo(e2) {
    const { userInfoKey: t2 } = this._cache.keys;
    this._cache.setStore(t2, e2), this.setUserInfo();
  }
}
class ct {
  constructor(e2) {
    if (!e2)
      throw new re({ code: "PARAM_ERROR", message: "envId is not defined" });
    this._cache = Fe(e2);
    const { refreshTokenKey: t2, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, r2 = this._cache.getStore(t2), i2 = this._cache.getStore(n2), o2 = this._cache.getStore(s2);
    this.credential = { refreshToken: r2, accessToken: i2, accessTokenExpire: o2 }, this.user = new at(e2);
  }
  get isAnonymousAuth() {
    return this.loginType === Qe.ANONYMOUS;
  }
  get isCustomAuth() {
    return this.loginType === Qe.CUSTOM;
  }
  get isWeixinAuth() {
    return this.loginType === Qe.WECHAT || this.loginType === Qe.WECHAT_OPEN || this.loginType === Qe.WECHAT_PUBLIC;
  }
  get loginType() {
    return this._cache.getStore(this._cache.keys.loginTypeKey);
  }
}
class ut extends ot {
  async signIn() {
    this._cache.updatePersistence("local"), await this._request.oauth.getAccessToken(), $e(We), $e(ze, { env: this.config.env, loginType: Qe.ANONYMOUS, persistence: "local" });
    const e2 = new ct(this.config.env);
    return await e2.user.refresh(), e2;
  }
  async linkAndRetrieveDataWithTicket(e2) {
    const { anonymousUuidKey: t2, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t2), r2 = this._cache.getStore(n2), i2 = await this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: r2, ticket: e2 });
    if (i2.refresh_token)
      return this._clearAnonymousUUID(), this.setRefreshToken(i2.refresh_token), await this._request.refreshAccessToken(), $e(Ve, { env: this.config.env }), $e(ze, { loginType: Qe.CUSTOM, persistence: "local" }), { credential: { refreshToken: i2.refresh_token } };
    throw new re({ message: "匿名转化失败" });
  }
  _setAnonymousUUID(e2) {
    const { anonymousUuidKey: t2, loginTypeKey: n2 } = this._cache.keys;
    this._cache.removeStore(t2), this._cache.setStore(t2, e2), this._cache.setStore(n2, Qe.ANONYMOUS);
  }
  _clearAnonymousUUID() {
    this._cache.removeStore(this._cache.keys.anonymousUuidKey);
  }
}
class lt extends ot {
  async signIn(e2) {
    if ("string" != typeof e2)
      throw new re({ code: "PARAM_ERROR", message: "ticket must be a string" });
    const { refreshTokenKey: t2 } = this._cache.keys, n2 = await this._request.send("auth.signInWithTicket", { ticket: e2, refresh_token: this._cache.getStore(t2) || "" });
    if (n2.refresh_token)
      return this.setRefreshToken(n2.refresh_token), await this._request.refreshAccessToken(), $e(We), $e(ze, { env: this.config.env, loginType: Qe.CUSTOM, persistence: this.config.persistence }), await this.refreshUserInfo(), new ct(this.config.env);
    throw new re({ message: "自定义登录失败" });
  }
}
class dt extends ot {
  async signIn(e2, t2) {
    if ("string" != typeof e2)
      throw new re({ code: "PARAM_ERROR", message: "email must be a string" });
    const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: "EMAIL", email: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token: i2, access_token_expire: o2 } = s2;
    if (r2)
      return this.setRefreshToken(r2), i2 && o2 ? this.setAccessToken(i2, o2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), $e(We), $e(ze, { env: this.config.env, loginType: Qe.EMAIL, persistence: this.config.persistence }), new ct(this.config.env);
    throw s2.code ? new re({ code: s2.code, message: `邮箱登录失败: ${s2.message}` }) : new re({ message: "邮箱登录失败" });
  }
  async activate(e2) {
    return this._request.send("auth.activateEndUserMail", { token: e2 });
  }
  async resetPasswordWithToken(e2, t2) {
    return this._request.send("auth.resetPasswordWithToken", { token: e2, newPassword: t2 });
  }
}
class ht extends ot {
  async signIn(e2, t2) {
    if ("string" != typeof e2)
      throw new re({ code: "PARAM_ERROR", message: "username must be a string" });
    "string" != typeof t2 && (t2 = "", console.warn("password is empty"));
    const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: Qe.USERNAME, username: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token_expire: i2, access_token: o2 } = s2;
    if (r2)
      return this.setRefreshToken(r2), o2 && i2 ? this.setAccessToken(o2, i2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), $e(We), $e(ze, { env: this.config.env, loginType: Qe.USERNAME, persistence: this.config.persistence }), new ct(this.config.env);
    throw s2.code ? new re({ code: s2.code, message: `用户名密码登录失败: ${s2.message}` }) : new re({ message: "用户名密码登录失败" });
  }
}
class pt {
  constructor(e2) {
    this.config = e2, this._cache = Fe(e2.env), this._request = it(e2.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), Be(ze, this._onLoginTypeChanged);
  }
  get currentUser() {
    const e2 = this.hasLoginState();
    return e2 && e2.user || null;
  }
  get loginType() {
    return this._cache.getStore(this._cache.keys.loginTypeKey);
  }
  anonymousAuthProvider() {
    return new ut(this.config);
  }
  customAuthProvider() {
    return new lt(this.config);
  }
  emailAuthProvider() {
    return new dt(this.config);
  }
  usernameAuthProvider() {
    return new ht(this.config);
  }
  async signInAnonymously() {
    return new ut(this.config).signIn();
  }
  async signInWithEmailAndPassword(e2, t2) {
    return new dt(this.config).signIn(e2, t2);
  }
  signInWithUsernameAndPassword(e2, t2) {
    return new ht(this.config).signIn(e2, t2);
  }
  async linkAndRetrieveDataWithTicket(e2) {
    this._anonymousAuthProvider || (this._anonymousAuthProvider = new ut(this.config)), Be(Ve, this._onAnonymousConverted);
    return await this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e2);
  }
  async signOut() {
    if (this.loginType === Qe.ANONYMOUS)
      throw new re({ message: "匿名用户不支持登出操作" });
    const { refreshTokenKey: e2, accessTokenKey: t2, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e2);
    if (!s2)
      return;
    const r2 = await this._request.send("auth.logout", { refresh_token: s2 });
    return this._cache.removeStore(e2), this._cache.removeStore(t2), this._cache.removeStore(n2), $e(We), $e(ze, { env: this.config.env, loginType: Qe.NULL, persistence: this.config.persistence }), r2;
  }
  async signUpWithEmailAndPassword(e2, t2) {
    return this._request.send("auth.signUpWithEmailAndPassword", { email: e2, password: t2 });
  }
  async sendPasswordResetEmail(e2) {
    return this._request.send("auth.sendPasswordResetEmail", { email: e2 });
  }
  onLoginStateChanged(e2) {
    Be(We, () => {
      const t3 = this.hasLoginState();
      e2.call(this, t3);
    });
    const t2 = this.hasLoginState();
    e2.call(this, t2);
  }
  onLoginStateExpired(e2) {
    Be(Je, e2.bind(this));
  }
  onAccessTokenRefreshed(e2) {
    Be(Ge, e2.bind(this));
  }
  onAnonymousConverted(e2) {
    Be(Ve, e2.bind(this));
  }
  onLoginTypeChanged(e2) {
    Be(ze, () => {
      const t2 = this.hasLoginState();
      e2.call(this, t2);
    });
  }
  async getAccessToken() {
    return { accessToken: (await this._request.getAccessToken()).accessToken, env: this.config.env };
  }
  hasLoginState() {
    const { accessTokenKey: e2, accessTokenExpireKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2), s2 = this._cache.getStore(t2);
    return this._request.oauth.isAccessTokenExpired(n2, s2) ? null : new ct(this.config.env);
  }
  async isUsernameRegistered(e2) {
    if ("string" != typeof e2)
      throw new re({ code: "PARAM_ERROR", message: "username must be a string" });
    const { data: t2 } = await this._request.send("auth.isUsernameRegistered", { username: e2 });
    return t2 && t2.isRegistered;
  }
  getLoginState() {
    return Promise.resolve(this.hasLoginState());
  }
  async signInWithTicket(e2) {
    return new lt(this.config).signIn(e2);
  }
  shouldRefreshAccessToken(e2) {
    this._request._shouldRefreshAccessTokenHook = e2.bind(this);
  }
  getUserInfo() {
    return this._request.send("auth.getUserInfo", {}).then((e2) => e2.code ? e2 : { ...e2.data, requestId: e2.seqId });
  }
  getAuthHeader() {
    const { refreshTokenKey: e2, accessTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2);
    return { "x-cloudbase-credentials": this._cache.getStore(t2) + "/@@/" + n2 };
  }
  _onAnonymousConverted(e2) {
    const { env: t2 } = e2.data;
    t2 === this.config.env && this._cache.updatePersistence(this.config.persistence);
  }
  _onLoginTypeChanged(e2) {
    const { loginType: t2, persistence: n2, env: s2 } = e2.data;
    s2 === this.config.env && (this._cache.updatePersistence(n2), this._cache.setStore(this._cache.keys.loginTypeKey, t2));
  }
}
const ft = function(e2, t2) {
  t2 = t2 || Ae();
  const n2 = it(this.config.env), { cloudPath: s2, filePath: r2, onUploadProgress: i2, fileType: o2 = "image" } = e2;
  return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
    const { data: { url: a2, authorization: c2, token: u2, fileId: l2, cosFileId: d2 }, requestId: h2 } = e3, p2 = { key: s2, signature: c2, "x-cos-meta-fileid": d2, success_action_status: "201", "x-cos-security-token": u2 };
    n2.upload({ url: a2, data: p2, file: r2, name: s2, fileType: o2, onUploadProgress: i2 }).then((e4) => {
      201 === e4.statusCode ? t2(null, { fileID: l2, requestId: h2 }) : t2(new re({ code: "STORAGE_REQUEST_FAIL", message: `STORAGE_REQUEST_FAIL: ${e4.data}` }));
    }).catch((e4) => {
      t2(e4);
    });
  }).catch((e3) => {
    t2(e3);
  }), t2.promise;
}, gt = function(e2, t2) {
  t2 = t2 || Ae();
  const n2 = it(this.config.env), { cloudPath: s2 } = e2;
  return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
    t2(null, e3);
  }).catch((e3) => {
    t2(e3);
  }), t2.promise;
}, mt = function({ fileList: e2 }, t2) {
  if (t2 = t2 || Ae(), !e2 || !Array.isArray(e2))
    return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };
  for (let t3 of e2)
    if (!t3 || "string" != typeof t3)
      return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };
  const n2 = { fileid_list: e2 };
  return it(this.config.env).send("storage.batchDeleteFile", n2).then((e3) => {
    e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.delete_list, requestId: e3.requestId });
  }).catch((e3) => {
    t2(e3);
  }), t2.promise;
}, yt = function({ fileList: e2 }, t2) {
  t2 = t2 || Ae(), e2 && Array.isArray(e2) || t2(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });
  let n2 = [];
  for (let s3 of e2)
    "object" == typeof s3 ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : "string" == typeof s3 ? n2.push({ fileid: s3 }) : t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });
  const s2 = { file_list: n2 };
  return it(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e3) => {
    e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.download_list, requestId: e3.requestId });
  }).catch((e3) => {
    t2(e3);
  }), t2.promise;
}, _t = async function({ fileID: e2 }, t2) {
  const n2 = (await yt.call(this, { fileList: [{ fileID: e2, maxAge: 600 }] })).fileList[0];
  if ("SUCCESS" !== n2.code)
    return t2 ? t2(n2) : new Promise((e3) => {
      e3(n2);
    });
  const s2 = it(this.config.env);
  let r2 = n2.download_url;
  if (r2 = encodeURI(r2), !t2)
    return s2.download({ url: r2 });
  t2(await s2.download({ url: r2 }));
}, wt = function({ name: e2, data: t2, query: n2, parse: s2, search: r2, timeout: i2 }, o2) {
  const a2 = o2 || Ae();
  let c2;
  try {
    c2 = t2 ? JSON.stringify(t2) : "";
  } catch (e3) {
    return Promise.reject(e3);
  }
  if (!e2)
    return Promise.reject(new re({ code: "PARAM_ERROR", message: "函数名不能为空" }));
  const u2 = { inQuery: n2, parse: s2, search: r2, function_name: e2, request_data: c2 };
  return it(this.config.env).send("functions.invokeFunction", u2, { timeout: i2 }).then((e3) => {
    if (e3.code)
      a2(null, e3);
    else {
      let t3 = e3.data.response_data;
      if (s2)
        a2(null, { result: t3, requestId: e3.requestId });
      else
        try {
          t3 = JSON.parse(e3.data.response_data), a2(null, { result: t3, requestId: e3.requestId });
        } catch (e4) {
          a2(new re({ message: "response data must be json" }));
        }
    }
    return a2.promise;
  }).catch((e3) => {
    a2(e3);
  }), a2.promise;
}, vt = { timeout: 15e3, persistence: "session" }, It = {};
class St {
  constructor(e2) {
    this.config = e2 || this.config, this.authObj = void 0;
  }
  init(e2) {
    switch (Ee.adapter || (this.requestClient = new Ee.adapter.reqClass({ timeout: e2.timeout || 5e3, timeoutMsg: `请求在${(e2.timeout || 5e3) / 1e3}s内未完成，已中断` })), this.config = { ...vt, ...e2 }, true) {
      case this.config.timeout > 6e5:
        console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
        break;
      case this.config.timeout < 100:
        console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
    }
    return new St(this.config);
  }
  auth({ persistence: e2 } = {}) {
    if (this.authObj)
      return this.authObj;
    const t2 = e2 || Ee.adapter.primaryStorage || vt.persistence;
    var n2;
    return t2 !== this.config.persistence && (this.config.persistence = t2), function(e3) {
      const { env: t3 } = e3;
      De[t3] = new Ne(e3), Me[t3] = new Ne({ ...e3, persistence: "local" });
    }(this.config), n2 = this.config, rt[n2.env] = new st(n2), this.authObj = new pt(this.config), this.authObj;
  }
  on(e2, t2) {
    return Be.apply(this, [e2, t2]);
  }
  off(e2, t2) {
    return He.apply(this, [e2, t2]);
  }
  callFunction(e2, t2) {
    return wt.apply(this, [e2, t2]);
  }
  deleteFile(e2, t2) {
    return mt.apply(this, [e2, t2]);
  }
  getTempFileURL(e2, t2) {
    return yt.apply(this, [e2, t2]);
  }
  downloadFile(e2, t2) {
    return _t.apply(this, [e2, t2]);
  }
  uploadFile(e2, t2) {
    return ft.apply(this, [e2, t2]);
  }
  getUploadMetadata(e2, t2) {
    return gt.apply(this, [e2, t2]);
  }
  registerExtension(e2) {
    It[e2.name] = e2;
  }
  async invokeExtension(e2, t2) {
    const n2 = It[e2];
    if (!n2)
      throw new re({ message: `扩展${e2} 必须先注册` });
    return await n2.invoke(t2, this);
  }
  useAdapters(e2) {
    const { adapter: t2, runtime: n2 } = Oe(e2) || {};
    t2 && (Ee.adapter = t2), n2 && (Ee.runtime = n2);
  }
}
var kt = new St();
function At(e2, t2, n2) {
  void 0 === n2 && (n2 = {});
  var s2 = /\?/.test(t2), r2 = "";
  for (var i2 in n2)
    "" === r2 ? !s2 && (t2 += "?") : r2 += "&", r2 += i2 + "=" + encodeURIComponent(n2[i2]);
  return /^http(s)?:\/\//.test(t2 += r2) ? t2 : "" + e2 + t2;
}
class Ct {
  get(e2) {
    const { url: t2, data: n2, headers: s2, timeout: r2 } = e2;
    return new Promise((e3, i2) => {
      ie.request({ url: At("https:", t2), data: n2, method: "GET", header: s2, timeout: r2, success(t3) {
        e3(t3);
      }, fail(e4) {
        i2(e4);
      } });
    });
  }
  post(e2) {
    const { url: t2, data: n2, headers: s2, timeout: r2 } = e2;
    return new Promise((e3, i2) => {
      ie.request({ url: At("https:", t2), data: n2, method: "POST", header: s2, timeout: r2, success(t3) {
        e3(t3);
      }, fail(e4) {
        i2(e4);
      } });
    });
  }
  upload(e2) {
    return new Promise((t2, n2) => {
      const { url: s2, file: r2, data: i2, headers: o2, fileType: a2 } = e2, c2 = ie.uploadFile({ url: At("https:", s2), name: "file", formData: Object.assign({}, i2), filePath: r2, fileType: a2, header: o2, success(e3) {
        const n3 = { statusCode: e3.statusCode, data: e3.data || {} };
        200 === e3.statusCode && i2.success_action_status && (n3.statusCode = parseInt(i2.success_action_status, 10)), t2(n3);
      }, fail(e3) {
        n2(new Error(e3.errMsg || "uploadFile:fail"));
      } });
      "function" == typeof e2.onUploadProgress && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((t3) => {
        e2.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
      });
    });
  }
}
const Tt = { setItem(e2, t2) {
  ie.setStorageSync(e2, t2);
}, getItem: (e2) => ie.getStorageSync(e2), removeItem(e2) {
  ie.removeStorageSync(e2);
}, clear() {
  ie.clearStorageSync();
} };
var bt = { genAdapter: function() {
  return { root: {}, reqClass: Ct, localStorage: Tt, primaryStorage: "local" };
}, isMatch: function() {
  return true;
}, runtime: "uni_app" };
kt.useAdapters(bt);
const Pt = kt, xt = Pt.init;
Pt.init = function(e2) {
  e2.env = e2.spaceId;
  const t2 = xt.call(this, e2);
  t2.config.provider = "tencent", t2.config.spaceId = e2.spaceId;
  const n2 = t2.auth;
  return t2.auth = function(e3) {
    const t3 = n2.call(this, e3);
    return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e4) => {
      var n3;
      t3[e4] = (n3 = t3[e4], function(e5) {
        e5 = e5 || {};
        const { success: t4, fail: s2, complete: r2 } = se(e5);
        if (!(t4 || s2 || r2))
          return n3.call(this, e5);
        n3.call(this, e5).then((e6) => {
          t4 && t4(e6), r2 && r2(e6);
        }, (e6) => {
          s2 && s2(e6), r2 && r2(e6);
        });
      }).bind(t3);
    }), t3;
  }, t2.customAuth = t2.auth, t2;
};
var Ot = Pt;
async function Et(e2, t2) {
  const n2 = `http://${e2}:${t2}/system/ping`;
  try {
    const e3 = await (s2 = { url: n2, timeout: 500 }, new Promise((e4, t3) => {
      ie.request({ ...s2, success(t4) {
        e4(t4);
      }, fail(e5) {
        t3(e5);
      } });
    }));
    return !(!e3.data || 0 !== e3.data.code);
  } catch (e3) {
    return false;
  }
  var s2;
}
async function Lt(e2, t2) {
  let n2;
  for (let s2 = 0; s2 < e2.length; s2++) {
    const r2 = e2[s2];
    if (await Et(r2, t2)) {
      n2 = r2;
      break;
    }
  }
  return { address: n2, port: t2 };
}
const Rt = { "serverless.file.resource.generateProximalSign": "storage/generate-proximal-sign", "serverless.file.resource.report": "storage/report", "serverless.file.resource.delete": "storage/delete", "serverless.file.resource.getTempFileURL": "storage/get-temp-file-url", "system/check-storage": "system/check-storage" };
var Ut = class {
  constructor(e2) {
    if (["spaceId", "clientSecret"].forEach((t2) => {
      if (!Object.prototype.hasOwnProperty.call(e2, t2))
        throw new Error(`${t2} required`);
    }), !e2.endpoint)
      throw new Error("集群空间未配置ApiEndpoint，配置后需要重新关联服务空间后生效");
    this.config = Object.assign({}, e2), this.config.provider = "dcloud", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.adapter = ie;
  }
  async request(e2, t2 = true) {
    return Promise.resolve().then(() => ge.wrappedRequest(this.setupRequest(e2), this.adapter.request));
  }
  async requestLocal(e2) {
    const t2 = await this.setupLocalRequest({ method: "system/check-storage", platform: T, provider: this.config.provider, spaceId: this.config.spaceId });
    return new Promise((e3) => {
      this.adapter.request(Object.assign({}, t2, { success: (t3) => {
        e3(t3);
      }, fail: () => {
        e3({ data: { code: "NETWORK_ERROR", message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。" } });
      } }));
    }).then(({ data: e3 } = {}) => {
      const { code: t3, message: n2 } = e3 || {};
      return { code: 0 === t3 ? 0 : t3 || "SYS_ERR", message: n2 || "SYS_ERR" };
    }).then(({ code: t3, message: n2 }) => 0 !== t3 ? (console.error(t3, n2), ge.wrappedRequest(this.setupRequest(e2), this.adapter.request)) : new Promise((t4, n3) => {
      this.setupLocalRequest(e2).then((e3) => {
        this.adapter.request(Object.assign(e3, { complete(e4) {
          if (e4 || (e4 = {}), !e4.statusCode || e4.statusCode >= 400) {
            const t5 = e4.data && e4.data.code || "SYS_ERR", s3 = e4.data && e4.data.message || "request:fail";
            return n3(new re({ code: t5, message: s3 }));
          }
          const s2 = e4.data;
          if (s2.error)
            return n3(new re({ code: s2.error.code, message: s2.error.message }));
          t4({ success: true, result: s2 });
        } }));
      });
    }));
  }
  setupRequest(e2) {
    const t2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), n2 = { "Content-Type": "application/json" };
    n2["x-serverless-sign"] = ge.sign(t2, this.config.clientSecret);
    const s2 = fe();
    n2["x-client-info"] = encodeURIComponent(JSON.stringify(s2));
    const { token: r2 } = ae();
    return n2["x-client-token"] = r2, { url: this.config.requestUrl, method: "POST", data: t2, dataType: "json", header: JSON.parse(JSON.stringify(n2)) };
  }
  async setupLocalRequest(e2) {
    const t2 = fe(), { token: n2 } = ae(), s2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now(), clientInfo: t2, token: n2 }), { address: r2, servePort: i2 } = this.__dev__ && this.__dev__.debugInfo || {}, { address: o2 } = await Lt(r2, i2);
    return { url: `http://${o2}:${i2}/${Rt[e2.method]}`, method: "POST", data: s2, dataType: "json", header: JSON.parse(JSON.stringify({ "Content-Type": "application/json" })) };
  }
  callFunction(e2) {
    const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e2.name, functionArgs: e2.data || {} }) };
    return this.request(t2, false);
  }
  getUploadFileOptions(e2) {
    const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e2) };
    return this.request(t2);
  }
  reportUploadFile(e2) {
    const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e2) };
    return this.request(t2);
  }
  uploadFile({ filePath: e2, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2 }) {
    if (!t2)
      throw new re({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });
    let r2;
    return this.getUploadFileOptions({ cloudPath: t2 }).then((t3) => {
      const { url: i2, formData: o2, name: a2 } = t3.result;
      return r2 = t3.result.fileUrl, new Promise((t4, r3) => {
        const c2 = this.adapter.uploadFile({ url: i2, formData: o2, name: a2, filePath: e2, fileType: n2, success(e3) {
          e3 && e3.statusCode < 400 ? t4(e3) : r3(new re({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          r3(new re({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof s2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
          s2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }).then(() => this.reportUploadFile({ cloudPath: t2 })).then((t3) => new Promise((n3, s3) => {
      t3.success ? n3({ success: true, filePath: e2, fileID: r2 }) : s3(new re({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
    }));
  }
  deleteFile({ fileList: e2 }) {
    const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e2 }) };
    return this.request(t2).then((e3) => {
      if (e3.success)
        return e3.result;
      throw new re({ code: "DELETE_FILE_FAILED", message: "删除文件失败" });
    });
  }
  getTempFileURL({ fileList: e2, maxAge: t2 } = {}) {
    if (!Array.isArray(e2) || 0 === e2.length)
      throw new re({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
    const n2 = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e2, maxAge: t2 }) };
    return this.request(n2).then((e3) => {
      if (e3.success)
        return { fileList: e3.result.fileList.map((e4) => ({ fileID: e4.fileID, tempFileURL: e4.tempFileURL })) };
      throw new re({ code: "GET_TEMP_FILE_URL_FAILED", message: "获取临时文件链接失败" });
    });
  }
};
var Nt = { init(e2) {
  const t2 = new Ut(e2), n2 = { signInAnonymously: function() {
    return Promise.resolve();
  }, getLoginState: function() {
    return Promise.resolve(false);
  } };
  return t2.auth = function() {
    return n2;
  }, t2.customAuth = t2.auth, t2;
} }, Dt = n(function(e2, t2) {
  e2.exports = r.enc.Hex;
});
function Mt() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e2) {
    var t2 = 16 * Math.random() | 0;
    return ("x" === e2 ? t2 : 3 & t2 | 8).toString(16);
  });
}
function Ft(e2) {
  return `${e2}.api-hz.cloudbasefunction.cn`;
}
function qt(e2 = "", t2 = {}) {
  const { data: n2, functionName: s2, method: r2, headers: i2, signHeaderKeys: o2 = [], endpoint: a2, config: c2 } = t2, u2 = String(Date.now()), l2 = Mt(), d2 = Object.assign({}, i2, { "x-from-app-id": c2.spaceAppId, "x-from-env-id": c2.spaceId, "x-to-env-id": c2.spaceId, "x-from-instance-id": u2, "x-from-function-name": s2, "x-client-timestamp": u2, "x-alipay-source": "client", "x-request-id": l2, "x-alipay-callid": l2, "x-trace-id": l2 }), h2 = ["x-from-app-id", "x-from-env-id", "x-to-env-id", "x-from-instance-id", "x-from-function-name", "x-client-timestamp"].concat(o2), [p2 = "", f2 = ""] = e2.split("?") || [], g2 = function(e3) {
    const t3 = e3.signedHeaders.join(";"), n3 = e3.signedHeaders.map((t4) => `${t4.toLowerCase()}:${e3.headers[t4]}
`).join(""), s3 = Se(e3.body).toString(Dt), r3 = `${e3.method.toUpperCase()}
${e3.path}
${e3.query}
${n3}
${t3}
${s3}
`, i3 = Se(r3).toString(Dt), o3 = `HMAC-SHA256
${e3.timestamp}
${i3}
`, a3 = ke(o3, e3.secretKey).toString(Dt);
    return `HMAC-SHA256 Credential=${e3.secretId}, SignedHeaders=${t3}, Signature=${a3}`;
  }({ path: p2, query: f2, method: r2, headers: d2, timestamp: u2, body: JSON.stringify(n2), secretId: c2.accessKey, secretKey: c2.secretKey, signedHeaders: h2.sort() });
  return { url: `${a2 || c2.endpoint}${e2}`, headers: Object.assign({}, d2, { Authorization: g2 }) };
}
function Kt({ url: e2, data: t2, method: n2 = "POST", headers: s2 = {}, timeout: r2 }) {
  return new Promise((i2, o2) => {
    ie.request({ url: e2, method: n2, data: "object" == typeof t2 ? JSON.stringify(t2) : t2, header: s2, dataType: "json", timeout: r2, complete: (e3 = {}) => {
      const t3 = s2["x-trace-id"] || "";
      if (!e3.statusCode || e3.statusCode >= 400) {
        const { message: n3, errMsg: s3, trace_id: r3 } = e3.data || {};
        return o2(new re({ code: "SYS_ERR", message: n3 || s3 || "request:fail", requestId: r3 || t3 }));
      }
      i2({ status: e3.statusCode, data: e3.data, headers: e3.header, requestId: t3 });
    } });
  });
}
function jt(e2, t2) {
  const { path: n2, data: s2, method: r2 = "GET" } = e2, { url: i2, headers: o2 } = qt(n2, { functionName: "", data: s2, method: r2, headers: { "x-alipay-cloud-mode": "oss", "x-data-api-type": "oss", "x-expire-timestamp": String(Date.now() + 6e4) }, signHeaderKeys: ["x-data-api-type", "x-expire-timestamp"], config: t2, endpoint: `https://${Ft(t2.spaceId)}` });
  return Kt({ url: i2, data: s2, method: r2, headers: o2 }).then((e3) => {
    const t3 = e3.data || {};
    if (!t3.success)
      throw new re({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
    return t3.data || {};
  }).catch((e3) => {
    throw new re({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
  });
}
function Bt(e2 = "") {
  const t2 = e2.trim().replace(/^cloud:\/\//, ""), n2 = t2.indexOf("/");
  if (n2 <= 0)
    throw new re({ code: "INVALID_PARAM", message: "fileID不合法" });
  const s2 = t2.substring(0, n2), r2 = t2.substring(n2 + 1);
  return s2 !== this.config.spaceId && console.warn("file ".concat(e2, " does not belong to env ").concat(this.config.spaceId)), r2;
}
function $t(e2 = "") {
  return "cloud://".concat(this.config.spaceId, "/").concat(e2.replace(/^\/+/, ""));
}
class Ht {
  constructor(e2) {
    this.config = e2;
  }
  signedURL(e2, t2 = {}) {
    const n2 = `/ws/function/${e2}`, s2 = this.config.wsEndpoint.replace(/^ws(s)?:\/\//, ""), r2 = Object.assign({}, t2, { accessKeyId: this.config.accessKey, signatureNonce: Mt(), timestamp: "" + Date.now() }), i2 = [n2, ["accessKeyId", "authorization", "signatureNonce", "timestamp"].sort().map(function(e3) {
      return r2[e3] ? "".concat(e3, "=").concat(r2[e3]) : null;
    }).filter(Boolean).join("&"), `host:${s2}`].join("\n"), o2 = ["HMAC-SHA256", Se(i2).toString(Dt)].join("\n"), a2 = ke(o2, this.config.secretKey).toString(Dt), c2 = Object.keys(r2).map((e3) => `${e3}=${encodeURIComponent(r2[e3])}`).join("&");
    return `${this.config.wsEndpoint}${n2}?${c2}&signature=${a2}`;
  }
}
class Wt {
  constructor(e2) {
    this.config = e2;
  }
  signedURL(e2, t2 = {}) {
    const n2 = `/ws/sse/function/${e2}`, s2 = this.config.endpoint.replace(/^http(s)?:\/\//, ""), r2 = Object.assign({}, t2, { accessKeyId: this.config.accessKey, signatureNonce: Mt(), timestamp: "" + Date.now() }), i2 = ["accessKeyId", "authorization", "signatureNonce", "timestamp"].sort().map(function(e3) {
      return r2[e3] ? "".concat(e3, "=").concat(r2[e3]) : null;
    }).filter(Boolean).join("&"), o2 = [n2.replace("/ws", ""), i2, `host:${s2}`].join("\n"), a2 = ["HMAC-SHA256", Se(o2).toString(Dt)].join("\n"), c2 = ke(a2, this.config.secretKey).toString(Dt), u2 = Object.keys(r2).map((e3) => `${e3}=${encodeURIComponent(r2[e3])}`).join("&");
    return `${this.config.endpoint}${n2}?${u2}&signature=${c2}`;
  }
}
var Jt = class {
  constructor(e2) {
    if (["spaceId", "spaceAppId", "accessKey", "secretKey"].forEach((t2) => {
      if (!Object.prototype.hasOwnProperty.call(e2, t2))
        throw new Error(`${t2} required`);
    }), e2.endpoint) {
      if ("string" != typeof e2.endpoint)
        throw new Error("endpoint must be string");
      if (!/^https:\/\//.test(e2.endpoint))
        throw new Error("endpoint must start with https://");
      e2.endpoint = e2.endpoint.replace(/\/$/, "");
    }
    this.config = Object.assign({}, e2, { endpoint: e2.endpoint || `https://${Ft(e2.spaceId)}`, wsEndpoint: e2.wsEndpoint || `wss://${Ft(e2.spaceId)}` }), this._websocket = new Ht(this.config), this._sse = new Wt(this.config);
  }
  callFunction(e2) {
    return function(e3, t2) {
      const { name: n2, data: s2, async: r2 = false, timeout: i2 } = e3, o2 = "POST", a2 = { "x-to-function-name": n2 };
      r2 && (a2["x-function-invoke-type"] = "async");
      const { url: c2, headers: u2 } = qt("/functions/invokeFunction", { functionName: n2, data: s2, method: o2, headers: a2, signHeaderKeys: ["x-to-function-name"], config: t2 });
      return Kt({ url: c2, data: s2, method: o2, headers: u2, timeout: i2 }).then((e4) => {
        let t3 = 0;
        if (r2) {
          const n3 = e4.data || {};
          t3 = "200" === n3.errCode ? 0 : n3.errCode, e4.data = n3.data || {}, e4.errMsg = n3.errMsg;
        }
        if (0 !== t3)
          throw new re({ code: t3, message: e4.errMsg, requestId: e4.requestId });
        return { errCode: t3, success: 0 === t3, requestId: e4.requestId, result: e4.data };
      }).catch((e4) => {
        throw new re({ code: e4.errCode, message: e4.errMsg, requestId: e4.requestId });
      });
    }(e2, this.config);
  }
  uploadFileToOSS({ url: e2, filePath: t2, fileType: n2, formData: s2, onUploadProgress: r2 }) {
    return new Promise((i2, o2) => {
      const a2 = ie.uploadFile({ url: e2, filePath: t2, fileType: n2, formData: s2, name: "file", success(e3) {
        e3 && e3.statusCode < 400 ? i2(e3) : o2(new re({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
      }, fail(e3) {
        o2(new re({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
      } });
      "function" == typeof r2 && a2 && "function" == typeof a2.onProgressUpdate && a2.onProgressUpdate((e3) => {
        r2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
      });
    });
  }
  async uploadFile({ filePath: e2, cloudPath: t2 = "", fileType: n2 = "image", onUploadProgress: s2 }) {
    if ("string" !== g(t2))
      throw new re({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });
    if (!(t2 = t2.trim()))
      throw new re({ code: "INVALID_PARAM", message: "cloudPath不可为空" });
    if (/:\/\//.test(t2))
      throw new re({ code: "INVALID_PARAM", message: "cloudPath不合法" });
    const r2 = await jt({ path: "/".concat(t2.replace(/^\//, ""), "?post_url") }, this.config), { file_id: i2, upload_url: o2, form_data: a2 } = r2, c2 = a2 && a2.reduce((e3, t3) => (e3[t3.key] = t3.value, e3), {});
    return this.uploadFileToOSS({ url: o2, filePath: e2, fileType: n2, formData: c2, onUploadProgress: s2 }).then(() => ({ fileID: i2 }));
  }
  async getTempFileURL({ fileList: e2 }) {
    return new Promise((t2, n2) => {
      (!e2 || e2.length < 0) && t2({ code: "INVALID_PARAM", message: "fileList不能为空数组" }), e2.length > 50 && t2({ code: "INVALID_PARAM", message: "fileList数组长度不能超过50" });
      const s2 = [];
      for (const n3 of e2) {
        let e3;
        "string" !== g(n3) && t2({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
        try {
          e3 = Bt.call(this, n3);
        } catch (t3) {
          console.warn(t3.errCode, t3.errMsg), e3 = n3;
        }
        s2.push({ file_id: e3, expire: 600 });
      }
      jt({ path: "/?download_url", data: { file_list: s2 }, method: "POST" }, this.config).then((e3) => {
        const { file_list: n3 = [] } = e3;
        t2({ fileList: n3.map((e4) => ({ fileID: $t.call(this, e4.file_id), tempFileURL: e4.download_url })) });
      }).catch((e3) => n2(e3));
    });
  }
  async connectWebSocket(e2) {
    const { name: t2, query: n2 } = e2;
    return ie.connectSocket({ url: this._websocket.signedURL(t2, n2), complete: () => {
    } });
  }
  requestSSE(e2) {
    const { name: t2, data: n2 } = e2;
    return ie.request({ method: "POST", url: this._sse.signedURL(t2), data: n2, header: { "content-type": "application/json" }, dataType: "json" });
  }
};
var zt = { init: (e2) => {
  e2.provider = "alipay";
  const t2 = new Jt(e2);
  return t2.auth = function() {
    return { signInAnonymously: function() {
      return Promise.resolve();
    }, getLoginState: function() {
      return Promise.resolve(true);
    } };
  }, t2;
} };
function Vt({ data: e2 }) {
  let t2;
  t2 = fe();
  const n2 = JSON.parse(JSON.stringify(e2 || {}));
  if (Object.assign(n2, { clientInfo: t2 }), !n2.uniIdToken) {
    const { token: e3 } = ae();
    e3 && (n2.uniIdToken = e3);
  }
  return n2;
}
const Gt = { enable: false, interval: 0, space: {} };
let Qt = null, Yt = 0, Xt = false;
function Zt() {
  return Array.isArray(P) && P.length ? P[0] : {};
}
function en(e2) {
  return `${e2}_${Zt().spaceId || "default"}`;
}
function tn() {
  if (Qt)
    return Qt;
  try {
    const e2 = ie.getStorageSync(en("UNICLOUD_FAILOVER_CONFIG"));
    if (m(e2))
      return Qt = e2, e2;
  } catch (e2) {
  }
  return null;
}
function nn(e2) {
  Yt = e2;
  try {
    ie.setStorageSync(en("UNICLOUD_FAILOVER_LAST_REQUEST"), e2);
  } catch (e3) {
  }
}
function sn(e2) {
  if (null === e2 || e2 < 0)
    return false;
  if (0 === e2)
    return true;
  const t2 = function() {
    if (Yt)
      return Yt;
    try {
      const e3 = ie.getStorageSync(en("UNICLOUD_FAILOVER_LAST_REQUEST"));
      if (e3 && "number" == typeof e3)
        return Yt = e3, e3;
    } catch (e3) {
    }
    return 0;
  }();
  if (!t2)
    return true;
  return Date.now() - t2 >= e2;
}
async function rn() {
  const e2 = Zt(), { failoverEndpoint: t2 } = e2;
  if (!t2)
    return null;
  if (Xt)
    return tn();
  Xt = true;
  try {
    const e3 = `${t2}/.unicloud/failover-cfg.json`, n2 = await ie.request({ url: e3, method: "GET", dataType: "json", timeout: 5e3 });
    if (nn(Date.now()), 200 !== n2.statusCode || !m(n2.data))
      return null;
    const s2 = { ...Gt, ...n2.data }, { enable: r2 = false, interval: i2 = 0, space: o2 = {} } = s2, a2 = tn(), c2 = a2 && a2.enable, u2 = function(e4, t3) {
      if (!e4)
        return t3.enable;
      if (e4.enable !== t3.enable)
        return true;
      if (e4.interval !== t3.interval)
        return true;
      if (t3._lastModifiedAt && e4._lastModifiedAt !== t3._lastModifiedAt)
        return true;
      if (JSON.stringify(e4.space) !== JSON.stringify(t3.space))
        return true;
      return false;
    }(a2, s2);
    return function(e4) {
      try {
        Qt = e4, e4 && e4.enable ? ie.setStorageSync(en("UNICLOUD_FAILOVER_CONFIG"), e4) : (ie.removeStorageSync(en("UNICLOUD_FAILOVER_CONFIG")), ie.removeStorageSync(en("UNICLOUD_FAILOVER_LAST_REQUEST")));
      } catch (e5) {
      }
    }({ enable: r2, interval: i2, space: o2, _lastModifiedAt: n2.data._lastModifiedAt || Date.now() }), u2 && Z(J, { isEnabled: r2, hasStatusChanged: c2 !== r2, failoverSpace: o2 }), s2;
  } catch (e3) {
    return tn();
  } finally {
    Xt = false;
  }
}
const an = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间", mode: "append" }];
var cn = /[\\^$.*+?()[\]{}|]/g, un = RegExp(cn.source);
function ln(e2, t2, n2) {
  return e2.replace(new RegExp((s2 = t2) && un.test(s2) ? s2.replace(cn, "\\$&") : s2, "g"), n2);
  var s2;
}
const dn = "none", hn = "request", pn = "response", fn = "both", gn = { code: 2e4, message: "System error" }, mn = { code: 20101, message: "Invalid client" }, _n = { 10001: "Secure network is not supported on current playground or unimpsdk", 10003: "Config missing in current app. If the problem pesist, please contact DCloud.", 10009: "Encrypt payload failed", 10010: "Decrypt response failed" };
function wn(e2) {
  return new re({ subject: e2.errSubject || "uni-secure-network", code: e2.errCode || e2.code || gn.code, message: e2.errMsg || e2.message || gn.message });
}
function vn(e2) {
  const { errSubject: t2, subject: n2, errCode: s2, errMsg: r2, code: i2, message: o2, cause: a2 } = e2 || {};
  return new re({ subject: t2 || n2 || "uni-secure-network", code: s2 || i2 || gn.code, message: r2 || o2, cause: a2 });
}
class In {
  constructor({ secretType: e2, uniCloudIns: t2 } = {}) {
    this.clientType = "", this.secretType = e2 || dn, this.uniCloudIns = t2;
    const { provider: n2, spaceId: s2 } = this.uniCloudIns.config;
    var r2;
    this.provider = n2, this.spaceId = s2, this.scopedGlobalCache = (r2 = this.uniCloudIns, R("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", r2.config.spaceId)));
  }
  getSystemInfo() {
    return this._systemInfo || (this._systemInfo = de()), this._systemInfo;
  }
  get appId() {
    return this.getSystemInfo().appId;
  }
  get deviceId() {
    return this.getSystemInfo().deviceId;
  }
  async encryptData(e2) {
    return this.secretType === dn ? e2 : this.platformEncryptData(e2);
  }
  async decryptResult(e2) {
    if (this.secretType === dn)
      return e2;
    const { errCode: t2, errMsg: n2, content: s2 } = e2 || {};
    if (t2 || !s2) {
      if (t2)
        throw wn({ errCode: t2, errMsg: n2 });
      if (!s2)
        throw wn();
      return e2;
    }
    return this.secretType === hn ? s2 : this.platformDecryptResult(e2);
  }
  wrapVerifyClientCallFunction(e2) {
    const t2 = this;
    return async function({ name: n2, data: s2 = {} } = {}) {
      await t2.prepare(), (s2 = JSON.parse(JSON.stringify(s2)))._uniCloudOptions = await t2.platformGetSignOption();
      let r2 = await e2({ name: n2, data: s2 });
      return t2.isClientKeyNotFound(r2) && (await t2.prepare({ forceUpdate: true }), s2._uniCloudOptions = await t2.platformGetSignOption(), r2 = await e2({ name: n2, data: s2 })), r2;
    };
  }
  wrapEncryptDataCallFunction(e2) {
    const t2 = this;
    return async function({ name: n2, data: s2 = {} } = {}) {
      await t2.prepare();
      const r2 = await t2.encryptData(s2);
      let i2 = await e2({ name: n2, data: r2 });
      if (t2.isClientKeyNotFound(i2)) {
        await t2.prepare({ forceUpdate: true });
        const r3 = await t2.encryptData(s2);
        i2 = await e2({ name: n2, data: r3 });
      }
      return i2.result = await t2.decryptResult(i2.result), i2;
    };
  }
}
n(function(e2, t2) {
  var n2, s2, i2, o2, a2, c2, u2, l2;
  e2.exports = (s2 = (n2 = l2 = r).lib, i2 = s2.WordArray, o2 = s2.Hasher, a2 = n2.algo, c2 = [], u2 = a2.SHA1 = o2.extend({ _doReset: function() {
    this._hash = new i2.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
  }, _doProcessBlock: function(e3, t3) {
    for (var n3 = this._hash.words, s3 = n3[0], r2 = n3[1], i3 = n3[2], o3 = n3[3], a3 = n3[4], u3 = 0; u3 < 80; u3++) {
      if (u3 < 16)
        c2[u3] = 0 | e3[t3 + u3];
      else {
        var l3 = c2[u3 - 3] ^ c2[u3 - 8] ^ c2[u3 - 14] ^ c2[u3 - 16];
        c2[u3] = l3 << 1 | l3 >>> 31;
      }
      var d2 = (s3 << 5 | s3 >>> 27) + a3 + c2[u3];
      d2 += u3 < 20 ? 1518500249 + (r2 & i3 | ~r2 & o3) : u3 < 40 ? 1859775393 + (r2 ^ i3 ^ o3) : u3 < 60 ? (r2 & i3 | r2 & o3 | i3 & o3) - 1894007588 : (r2 ^ i3 ^ o3) - 899497514, a3 = o3, o3 = i3, i3 = r2 << 30 | r2 >>> 2, r2 = s3, s3 = d2;
    }
    n3[0] = n3[0] + s3 | 0, n3[1] = n3[1] + r2 | 0, n3[2] = n3[2] + i3 | 0, n3[3] = n3[3] + o3 | 0, n3[4] = n3[4] + a3 | 0;
  }, _doFinalize: function() {
    var e3 = this._data, t3 = e3.words, n3 = 8 * this._nDataBytes, s3 = 8 * e3.sigBytes;
    return t3[s3 >>> 5] |= 128 << 24 - s3 % 32, t3[14 + (s3 + 64 >>> 9 << 4)] = Math.floor(n3 / 4294967296), t3[15 + (s3 + 64 >>> 9 << 4)] = n3, e3.sigBytes = 4 * t3.length, this._process(), this._hash;
  }, clone: function() {
    var e3 = o2.clone.call(this);
    return e3._hash = this._hash.clone(), e3;
  } }), n2.SHA1 = o2._createHelper(u2), n2.HmacSHA1 = o2._createHmacHelper(u2), l2.SHA1);
}), n(function(e2, t2) {
  var n2;
  e2.exports = (n2 = r, function() {
    var e3 = n2, t3 = e3.lib, s2 = t3.Base, r2 = t3.WordArray, i2 = e3.algo, o2 = i2.MD5, a2 = i2.EvpKDF = s2.extend({ cfg: s2.extend({ keySize: 4, hasher: o2, iterations: 1 }), init: function(e4) {
      this.cfg = this.cfg.extend(e4);
    }, compute: function(e4, t4) {
      for (var n3 = this.cfg, s3 = n3.hasher.create(), i3 = r2.create(), o3 = i3.words, a3 = n3.keySize, c2 = n3.iterations; o3.length < a3; ) {
        u2 && s3.update(u2);
        var u2 = s3.update(e4).finalize(t4);
        s3.reset();
        for (var l2 = 1; l2 < c2; l2++)
          u2 = s3.finalize(u2), s3.reset();
        i3.concat(u2);
      }
      return i3.sigBytes = 4 * a3, i3;
    } });
    e3.EvpKDF = function(e4, t4, n3) {
      return a2.create(n3).compute(e4, t4);
    };
  }(), n2.EvpKDF);
}), n(function(e2, t2) {
  var n2;
  e2.exports = void ((n2 = r).lib.Cipher || function(e3) {
    var t3 = n2, s2 = t3.lib, r2 = s2.Base, i2 = s2.WordArray, o2 = s2.BufferedBlockAlgorithm, a2 = t3.enc;
    a2.Utf8;
    var c2 = a2.Base64, u2 = t3.algo.EvpKDF, l2 = s2.Cipher = o2.extend({ cfg: r2.extend(), createEncryptor: function(e4, t4) {
      return this.create(this._ENC_XFORM_MODE, e4, t4);
    }, createDecryptor: function(e4, t4) {
      return this.create(this._DEC_XFORM_MODE, e4, t4);
    }, init: function(e4, t4, n3) {
      this.cfg = this.cfg.extend(n3), this._xformMode = e4, this._key = t4, this.reset();
    }, reset: function() {
      o2.reset.call(this), this._doReset();
    }, process: function(e4) {
      return this._append(e4), this._process();
    }, finalize: function(e4) {
      return e4 && this._append(e4), this._doFinalize();
    }, keySize: 4, ivSize: 4, _ENC_XFORM_MODE: 1, _DEC_XFORM_MODE: 2, _createHelper: /* @__PURE__ */ function() {
      function e4(e5) {
        return "string" == typeof e5 ? w2 : y2;
      }
      return function(t4) {
        return { encrypt: function(n3, s3, r3) {
          return e4(s3).encrypt(t4, n3, s3, r3);
        }, decrypt: function(n3, s3, r3) {
          return e4(s3).decrypt(t4, n3, s3, r3);
        } };
      };
    }() });
    s2.StreamCipher = l2.extend({ _doFinalize: function() {
      return this._process(true);
    }, blockSize: 1 });
    var d2 = t3.mode = {}, h2 = s2.BlockCipherMode = r2.extend({ createEncryptor: function(e4, t4) {
      return this.Encryptor.create(e4, t4);
    }, createDecryptor: function(e4, t4) {
      return this.Decryptor.create(e4, t4);
    }, init: function(e4, t4) {
      this._cipher = e4, this._iv = t4;
    } }), p2 = d2.CBC = function() {
      var t4 = h2.extend();
      function n3(t5, n4, s3) {
        var r3 = this._iv;
        if (r3) {
          var i3 = r3;
          this._iv = e3;
        } else
          i3 = this._prevBlock;
        for (var o3 = 0; o3 < s3; o3++)
          t5[n4 + o3] ^= i3[o3];
      }
      return t4.Encryptor = t4.extend({ processBlock: function(e4, t5) {
        var s3 = this._cipher, r3 = s3.blockSize;
        n3.call(this, e4, t5, r3), s3.encryptBlock(e4, t5), this._prevBlock = e4.slice(t5, t5 + r3);
      } }), t4.Decryptor = t4.extend({ processBlock: function(e4, t5) {
        var s3 = this._cipher, r3 = s3.blockSize, i3 = e4.slice(t5, t5 + r3);
        s3.decryptBlock(e4, t5), n3.call(this, e4, t5, r3), this._prevBlock = i3;
      } }), t4;
    }(), f2 = (t3.pad = {}).Pkcs7 = { pad: function(e4, t4) {
      for (var n3 = 4 * t4, s3 = n3 - e4.sigBytes % n3, r3 = s3 << 24 | s3 << 16 | s3 << 8 | s3, o3 = [], a3 = 0; a3 < s3; a3 += 4)
        o3.push(r3);
      var c3 = i2.create(o3, s3);
      e4.concat(c3);
    }, unpad: function(e4) {
      var t4 = 255 & e4.words[e4.sigBytes - 1 >>> 2];
      e4.sigBytes -= t4;
    } };
    s2.BlockCipher = l2.extend({ cfg: l2.cfg.extend({ mode: p2, padding: f2 }), reset: function() {
      l2.reset.call(this);
      var e4 = this.cfg, t4 = e4.iv, n3 = e4.mode;
      if (this._xformMode == this._ENC_XFORM_MODE)
        var s3 = n3.createEncryptor;
      else
        s3 = n3.createDecryptor, this._minBufferSize = 1;
      this._mode && this._mode.__creator == s3 ? this._mode.init(this, t4 && t4.words) : (this._mode = s3.call(n3, this, t4 && t4.words), this._mode.__creator = s3);
    }, _doProcessBlock: function(e4, t4) {
      this._mode.processBlock(e4, t4);
    }, _doFinalize: function() {
      var e4 = this.cfg.padding;
      if (this._xformMode == this._ENC_XFORM_MODE) {
        e4.pad(this._data, this.blockSize);
        var t4 = this._process(true);
      } else
        t4 = this._process(true), e4.unpad(t4);
      return t4;
    }, blockSize: 4 });
    var g2 = s2.CipherParams = r2.extend({ init: function(e4) {
      this.mixIn(e4);
    }, toString: function(e4) {
      return (e4 || this.formatter).stringify(this);
    } }), m2 = (t3.format = {}).OpenSSL = { stringify: function(e4) {
      var t4 = e4.ciphertext, n3 = e4.salt;
      if (n3)
        var s3 = i2.create([1398893684, 1701076831]).concat(n3).concat(t4);
      else
        s3 = t4;
      return s3.toString(c2);
    }, parse: function(e4) {
      var t4 = c2.parse(e4), n3 = t4.words;
      if (1398893684 == n3[0] && 1701076831 == n3[1]) {
        var s3 = i2.create(n3.slice(2, 4));
        n3.splice(0, 4), t4.sigBytes -= 16;
      }
      return g2.create({ ciphertext: t4, salt: s3 });
    } }, y2 = s2.SerializableCipher = r2.extend({ cfg: r2.extend({ format: m2 }), encrypt: function(e4, t4, n3, s3) {
      s3 = this.cfg.extend(s3);
      var r3 = e4.createEncryptor(n3, s3), i3 = r3.finalize(t4), o3 = r3.cfg;
      return g2.create({ ciphertext: i3, key: n3, iv: o3.iv, algorithm: e4, mode: o3.mode, padding: o3.padding, blockSize: e4.blockSize, formatter: s3.format });
    }, decrypt: function(e4, t4, n3, s3) {
      return s3 = this.cfg.extend(s3), t4 = this._parse(t4, s3.format), e4.createDecryptor(n3, s3).finalize(t4.ciphertext);
    }, _parse: function(e4, t4) {
      return "string" == typeof e4 ? t4.parse(e4, this) : e4;
    } }), _2 = (t3.kdf = {}).OpenSSL = { execute: function(e4, t4, n3, s3) {
      s3 || (s3 = i2.random(8));
      var r3 = u2.create({ keySize: t4 + n3 }).compute(e4, s3), o3 = i2.create(r3.words.slice(t4), 4 * n3);
      return r3.sigBytes = 4 * t4, g2.create({ key: r3, iv: o3, salt: s3 });
    } }, w2 = s2.PasswordBasedCipher = y2.extend({ cfg: y2.cfg.extend({ kdf: _2 }), encrypt: function(e4, t4, n3, s3) {
      var r3 = (s3 = this.cfg.extend(s3)).kdf.execute(n3, e4.keySize, e4.ivSize);
      s3.iv = r3.iv;
      var i3 = y2.encrypt.call(this, e4, t4, r3.key, s3);
      return i3.mixIn(r3), i3;
    }, decrypt: function(e4, t4, n3, s3) {
      s3 = this.cfg.extend(s3), t4 = this._parse(t4, s3.format);
      var r3 = s3.kdf.execute(n3, e4.keySize, e4.ivSize, t4.salt);
      return s3.iv = r3.iv, y2.decrypt.call(this, e4, t4, r3.key, s3);
    } });
  }());
});
n(function(e2, t2) {
  var n2;
  e2.exports = (n2 = r, function() {
    var e3 = n2, t3 = e3.lib.BlockCipher, s2 = e3.algo, r2 = [], i2 = [], o2 = [], a2 = [], c2 = [], u2 = [], l2 = [], d2 = [], h2 = [], p2 = [];
    !function() {
      for (var e4 = [], t4 = 0; t4 < 256; t4++)
        e4[t4] = t4 < 128 ? t4 << 1 : t4 << 1 ^ 283;
      var n3 = 0, s3 = 0;
      for (t4 = 0; t4 < 256; t4++) {
        var f3 = s3 ^ s3 << 1 ^ s3 << 2 ^ s3 << 3 ^ s3 << 4;
        f3 = f3 >>> 8 ^ 255 & f3 ^ 99, r2[n3] = f3, i2[f3] = n3;
        var g3 = e4[n3], m2 = e4[g3], y2 = e4[m2], _2 = 257 * e4[f3] ^ 16843008 * f3;
        o2[n3] = _2 << 24 | _2 >>> 8, a2[n3] = _2 << 16 | _2 >>> 16, c2[n3] = _2 << 8 | _2 >>> 24, u2[n3] = _2, _2 = 16843009 * y2 ^ 65537 * m2 ^ 257 * g3 ^ 16843008 * n3, l2[f3] = _2 << 24 | _2 >>> 8, d2[f3] = _2 << 16 | _2 >>> 16, h2[f3] = _2 << 8 | _2 >>> 24, p2[f3] = _2, n3 ? (n3 = g3 ^ e4[e4[e4[y2 ^ g3]]], s3 ^= e4[e4[s3]]) : n3 = s3 = 1;
      }
    }();
    var f2 = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], g2 = s2.AES = t3.extend({ _doReset: function() {
      if (!this._nRounds || this._keyPriorReset !== this._key) {
        for (var e4 = this._keyPriorReset = this._key, t4 = e4.words, n3 = e4.sigBytes / 4, s3 = 4 * ((this._nRounds = n3 + 6) + 1), i3 = this._keySchedule = [], o3 = 0; o3 < s3; o3++)
          if (o3 < n3)
            i3[o3] = t4[o3];
          else {
            var a3 = i3[o3 - 1];
            o3 % n3 ? n3 > 6 && o3 % n3 == 4 && (a3 = r2[a3 >>> 24] << 24 | r2[a3 >>> 16 & 255] << 16 | r2[a3 >>> 8 & 255] << 8 | r2[255 & a3]) : (a3 = r2[(a3 = a3 << 8 | a3 >>> 24) >>> 24] << 24 | r2[a3 >>> 16 & 255] << 16 | r2[a3 >>> 8 & 255] << 8 | r2[255 & a3], a3 ^= f2[o3 / n3 | 0] << 24), i3[o3] = i3[o3 - n3] ^ a3;
          }
        for (var c3 = this._invKeySchedule = [], u3 = 0; u3 < s3; u3++)
          o3 = s3 - u3, a3 = u3 % 4 ? i3[o3] : i3[o3 - 4], c3[u3] = u3 < 4 || o3 <= 4 ? a3 : l2[r2[a3 >>> 24]] ^ d2[r2[a3 >>> 16 & 255]] ^ h2[r2[a3 >>> 8 & 255]] ^ p2[r2[255 & a3]];
      }
    }, encryptBlock: function(e4, t4) {
      this._doCryptBlock(e4, t4, this._keySchedule, o2, a2, c2, u2, r2);
    }, decryptBlock: function(e4, t4) {
      var n3 = e4[t4 + 1];
      e4[t4 + 1] = e4[t4 + 3], e4[t4 + 3] = n3, this._doCryptBlock(e4, t4, this._invKeySchedule, l2, d2, h2, p2, i2), n3 = e4[t4 + 1], e4[t4 + 1] = e4[t4 + 3], e4[t4 + 3] = n3;
    }, _doCryptBlock: function(e4, t4, n3, s3, r3, i3, o3, a3) {
      for (var c3 = this._nRounds, u3 = e4[t4] ^ n3[0], l3 = e4[t4 + 1] ^ n3[1], d3 = e4[t4 + 2] ^ n3[2], h3 = e4[t4 + 3] ^ n3[3], p3 = 4, f3 = 1; f3 < c3; f3++) {
        var g3 = s3[u3 >>> 24] ^ r3[l3 >>> 16 & 255] ^ i3[d3 >>> 8 & 255] ^ o3[255 & h3] ^ n3[p3++], m2 = s3[l3 >>> 24] ^ r3[d3 >>> 16 & 255] ^ i3[h3 >>> 8 & 255] ^ o3[255 & u3] ^ n3[p3++], y2 = s3[d3 >>> 24] ^ r3[h3 >>> 16 & 255] ^ i3[u3 >>> 8 & 255] ^ o3[255 & l3] ^ n3[p3++], _2 = s3[h3 >>> 24] ^ r3[u3 >>> 16 & 255] ^ i3[l3 >>> 8 & 255] ^ o3[255 & d3] ^ n3[p3++];
        u3 = g3, l3 = m2, d3 = y2, h3 = _2;
      }
      g3 = (a3[u3 >>> 24] << 24 | a3[l3 >>> 16 & 255] << 16 | a3[d3 >>> 8 & 255] << 8 | a3[255 & h3]) ^ n3[p3++], m2 = (a3[l3 >>> 24] << 24 | a3[d3 >>> 16 & 255] << 16 | a3[h3 >>> 8 & 255] << 8 | a3[255 & u3]) ^ n3[p3++], y2 = (a3[d3 >>> 24] << 24 | a3[h3 >>> 16 & 255] << 16 | a3[u3 >>> 8 & 255] << 8 | a3[255 & l3]) ^ n3[p3++], _2 = (a3[h3 >>> 24] << 24 | a3[u3 >>> 16 & 255] << 16 | a3[l3 >>> 8 & 255] << 8 | a3[255 & d3]) ^ n3[p3++], e4[t4] = g3, e4[t4 + 1] = m2, e4[t4 + 2] = y2, e4[t4 + 3] = _2;
    }, keySize: 8 });
    e3.AES = t3._createHelper(g2);
  }(), n2.AES);
});
n(function(e2, t2) {
  var n2;
  e2.exports = ((n2 = r).pad.NoPadding = { pad: function() {
  }, unpad: function() {
  } }, n2.pad.NoPadding);
});
let xn, On;
function Rn(e2) {
  const t2 = ["hasClientKey", "encryptGetClientKeyPayload", "setClientKey", "encrypt", "decrypt"], n2 = {};
  for (let s2 = 0; s2 < t2.length; s2++) {
    const r2 = t2[s2];
    n2[r2] = function(...t3) {
      return new Promise((n3, s3) => {
        "function" == typeof e2[r2] ? e2[r2]({ ...t3[0], success(e3) {
          n3(e3);
        }, fail(e3) {
          s3(vn({ errCode: e3.errCode, errMsg: _n[e3.errCode] || e3.errMsg || e3.message }));
        } }) : s3(vn({ message: "请检查manifest.json内是否开启安全网络模块，另外注意标准基座不支持安全网络模块" }));
      });
    };
  }
  return n2;
}
class Un extends In {
  constructor(e2) {
    super(e2), this.clientType = "app", this.appUtils = { ...Rn(uni.__getSecureNetworkManager()) }, this.systemInfo = xn || (xn = de());
  }
  async hasClientKey() {
    return this._hasClientKey = await this.appUtils.hasClientKey({ provider: this.provider, spaceId: this.spaceId }), this._hasClientKey;
  }
  async getAppClientKey() {
    const { data: e2, key: t2 } = await this.appUtils.encryptGetClientKeyPayload({ data: {} }), n2 = (await this.uniCloudIns.callFunction({ name: "DCloud-clientDB", data: { redirectTo: "encryption", action: "getAppClientKey", data: e2, key: t2 } })).result || {};
    if (0 !== n2.errCode)
      throw wn(n2);
    const { clientKey: s2, key: r2 } = n2;
    await this.appUtils.setClientKey({ provider: this.provider, spaceId: this.spaceId, clientKey: s2, key: r2 });
  }
  async ensureClientKey({ forceUpdate: e2 = false } = {}) {
    if (true !== await this.hasClientKey() || e2)
      return e2 && this.scopedGlobalCache.initPromise && this.scopedGlobalCache.initStatus === h || !e2 && this.scopedGlobalCache.initPromise && this.scopedGlobalCache.initStatus !== f || (this.scopedGlobalCache.initPromise = this.getAppClientKey(), this.scopedGlobalCache.initPromise.then((e3) => {
        this.scopedGlobalCache.initStatus = p;
      }).catch((e3) => {
        throw this.scopedGlobalCache.initStatus = f, e3;
      }), this.scopedGlobalCache.initStatus = h), this.scopedGlobalCache.initPromise;
  }
  async prepare({ forceUpdate: e2 = false } = {}) {
    await this.ensureClientKey({ forceUpdate: e2 });
  }
  async platformGetSignOption() {
    const { data: e2, key: t2 } = await this.appUtils.encrypt({ provider: this.provider, spaceId: this.spaceId, data: JSON.stringify({}) });
    return { verifyClientSign: e2, encryptKeyId: t2 };
  }
  async platformEncryptData(e2) {
    const { data: t2, key: n2 } = await this.appUtils.encrypt({ provider: this.provider, spaceId: this.spaceId, data: JSON.stringify(e2) }), s2 = { secretType: this.secretType, encryptKeyId: n2 };
    return this.secretType === pn ? { content: e2, _uniCloudOptions: s2 } : { content: t2, _uniCloudOptions: s2 };
  }
  async platformDecryptResult(e2) {
    const { content: t2, _uniCloudOptions: n2 = {} } = e2, s2 = n2.encryptKeyId, r2 = await this.appUtils.decrypt({ provider: this.provider, spaceId: this.spaceId, data: t2, key: s2 });
    return JSON.parse(r2.data);
  }
  isClientKeyNotFound(e2 = {}) {
    const t2 = e2.result || {};
    return 70009 === t2.errCode && "uni-secure-network" === t2.errSubject;
  }
}
function Nn({ secretType: e2 } = {}) {
  return e2 === hn || e2 === pn || e2 === fn;
}
function Dn({ name: e2, data: t2 = {} } = {}) {
  return "DCloud-clientDB" === e2 && "encryption" === t2.redirectTo && "getAppClientKey" === t2.action;
}
function Mn({ provider: e2, spaceId: t2, functionName: n2 } = {}) {
  const { appId: s2, uniPlatform: r2, osName: i2 } = de();
  let o2 = r2;
  "app" === r2 && (o2 = i2);
  const a2 = function({ provider: e3, spaceId: t3 } = {}) {
    const n3 = C;
    if (!n3)
      return {};
    e3 = /* @__PURE__ */ function(e4) {
      return "tencent" === e4 ? "tcb" : e4;
    }(e3);
    const s3 = n3.find((n4) => n4.provider === e3 && n4.spaceId === t3);
    return s3 && s3.config;
  }({ provider: e2, spaceId: t2 });
  if (!a2 || !a2.accessControl || !a2.accessControl.enable)
    return false;
  const c2 = a2.accessControl.function || {}, u2 = Object.keys(c2);
  if (0 === u2.length)
    return true;
  const l2 = function(e3, t3) {
    let n3, s3, r3;
    for (let i3 = 0; i3 < e3.length; i3++) {
      const o3 = e3[i3];
      o3 !== t3 ? "*" !== o3 ? o3.split(",").map((e4) => e4.trim()).indexOf(t3) > -1 && (s3 = o3) : r3 = o3 : n3 = o3;
    }
    return n3 || s3 || r3;
  }(u2, n2);
  if (!l2)
    return false;
  if ((c2[l2] || []).find((e3 = {}) => e3.appId === s2 && (e3.platform || "").toLowerCase() === o2.toLowerCase()))
    return true;
  throw console.error(`此应用[appId: ${s2}, platform: ${o2}]不在云端配置的允许访问的应用列表内，参考：https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client`), vn(mn);
}
function Fn({ functionName: e2, result: t2, logPvd: n2 }) {
}
function qn(e2) {
  const t2 = e2.callFunction, n2 = function(n3) {
    const s2 = n3.name;
    n3.data = Vt.call(e2, { data: n3.data });
    const r2 = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb", alipay: "alipay", dcloud: "dcloud" }[this.config.provider], i2 = Nn(n3), o2 = Dn(n3), a2 = i2 || o2;
    return t2.call(this, n3).then((e3) => (e3.errCode = 0, !a2 && Fn.call(this, { functionName: s2, result: e3, logPvd: r2 }), Promise.resolve(e3)), (e3) => (!a2 && Fn.call(this, { functionName: s2, result: e3, logPvd: r2 }), e3 && e3.message && (e3.message = function({ message: e4 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
      for (let s3 = 0; s3 < n4.length; s3++) {
        const { rule: r3, content: i3, mode: o3 } = n4[s3], a3 = e4.match(r3);
        if (!a3)
          continue;
        let c2 = i3;
        for (let e5 = 1; e5 < a3.length; e5++)
          c2 = ln(c2, `{$${e5}}`, a3[e5]);
        for (const e5 in t3)
          c2 = ln(c2, `{${e5}}`, t3[e5]);
        return "replace" === o3 ? c2 : e4 + c2;
      }
      return e4;
    }({ message: `[${n3.name}]: ${e3.message}`, formatter: an, extraInfo: { functionName: s2 } })), Promise.reject(e3)));
  };
  e2.callFunction = function(t3) {
    const { provider: s2, spaceId: r2 } = e2.config, i2 = t3.name;
    let o2, a2;
    if (t3.data = t3.data || {}, o2 = n2, o2 = o2.bind(e2), Dn(t3))
      a2 = n2.call(e2, t3);
    else if (Nn(t3)) {
      a2 = new On({ secretType: t3.secretType, uniCloudIns: e2 }).wrapEncryptDataCallFunction(n2.bind(e2))(t3);
    } else if (Mn({ provider: s2, spaceId: r2, functionName: i2 })) {
      a2 = new On({ secretType: t3.secretType, uniCloudIns: e2 }).wrapVerifyClientCallFunction(n2.bind(e2))(t3);
    } else
      a2 = o2(t3);
    return Object.defineProperty(a2, "result", { get: () => (console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), a2.then((e3) => (e3.result = UTS.JSON.parse(JSON.stringify(e3.result)), e3));
  };
}
On = Un;
const Kn = Symbol("CLIENT_DB_INTERNAL");
function jn(e2, t2) {
  return e2.then = "DoNotReturnProxyWithAFunctionNamedThen", e2._internalType = Kn, e2.inspect = null, e2.__v_raw = void 0, new Proxy(e2, { get(e3, n2, s2) {
    if ("_uniClient" === n2)
      return null;
    if ("symbol" == typeof n2)
      return e3[n2];
    if (n2 in e3 || "string" != typeof n2) {
      const t3 = e3[n2];
      return "function" == typeof t3 ? t3.bind(e3) : t3;
    }
    return t2.get(e3, n2, s2);
  } });
}
function Bn(e2) {
  return { on: (t2, n2) => {
    e2[t2] = e2[t2] || [], e2[t2].indexOf(n2) > -1 || e2[t2].push(n2);
  }, off: (t2, n2) => {
    e2[t2] = e2[t2] || [];
    const s2 = e2[t2].indexOf(n2);
    -1 !== s2 && e2[t2].splice(s2, 1);
  } };
}
const $n = ["db.Geo", "db.command", "command.aggregate"];
function Hn(e2, t2) {
  return $n.indexOf(`${e2}.${t2}`) > -1;
}
function Wn(e2) {
  switch (g(e2 = oe(e2))) {
    case "array":
      return e2.map((e3) => Wn(e3));
    case "object":
      return e2._internalType === Kn || Object.keys(e2).forEach((t2) => {
        e2[t2] = Wn(e2[t2]);
      }), e2;
    case "regexp":
      return { $regexp: { source: e2.source, flags: e2.flags } };
    case "date":
      return { $date: e2.toISOString() };
    default:
      return e2;
  }
}
function Jn(e2) {
  return e2 && e2.content && e2.content.$method;
}
class zn {
  constructor(e2, t2, n2) {
    this.content = e2, this.prevStage = t2 || null, this.udb = null, this._database = n2;
  }
  toJSON() {
    let e2 = this;
    const t2 = [e2.content];
    for (; e2.prevStage; )
      e2 = e2.prevStage, t2.push(e2.content);
    return { $db: t2.reverse().map((e3) => ({ $method: e3.$method, $param: Wn(e3.$param) })) };
  }
  toString() {
    return JSON.stringify(this.toJSON());
  }
  getAction() {
    const e2 = this.toJSON().$db.find((e3) => "action" === e3.$method);
    return e2 && e2.$param && e2.$param[0];
  }
  getCommand() {
    return { $db: this.toJSON().$db.filter((e2) => "action" !== e2.$method) };
  }
  get isAggregate() {
    let e2 = this;
    for (; e2; ) {
      const t2 = Jn(e2), n2 = Jn(e2.prevStage);
      if ("aggregate" === t2 && "collection" === n2 || "pipeline" === t2)
        return true;
      e2 = e2.prevStage;
    }
    return false;
  }
  get isCommand() {
    let e2 = this;
    for (; e2; ) {
      if ("command" === Jn(e2))
        return true;
      e2 = e2.prevStage;
    }
    return false;
  }
  get isAggregateCommand() {
    let e2 = this;
    for (; e2; ) {
      const t2 = Jn(e2), n2 = Jn(e2.prevStage);
      if ("aggregate" === t2 && "command" === n2)
        return true;
      e2 = e2.prevStage;
    }
    return false;
  }
  getNextStageFn(e2) {
    const t2 = this;
    return function() {
      return Vn({ $method: e2, $param: Wn(Array.from(arguments)) }, t2, t2._database);
    };
  }
  get count() {
    return this.isAggregate ? this.getNextStageFn("count") : function() {
      return this._send("count", Array.from(arguments));
    };
  }
  get remove() {
    return this.isCommand ? this.getNextStageFn("remove") : function() {
      return this._send("remove", Array.from(arguments));
    };
  }
  get() {
    return this._send("get", Array.from(arguments));
  }
  get add() {
    return this.isCommand ? this.getNextStageFn("add") : function() {
      return this._send("add", Array.from(arguments));
    };
  }
  update() {
    return this._send("update", Array.from(arguments));
  }
  end() {
    return this._send("end", Array.from(arguments));
  }
  get set() {
    return this.isCommand ? this.getNextStageFn("set") : function() {
      throw new Error("JQL禁止使用set方法");
    };
  }
  _send(e2, t2) {
    const n2 = this.getAction(), s2 = this.getCommand();
    if (s2.$db.push({ $method: e2, $param: Wn(t2) }), k)
      ;
    return this._database._callCloudFunction({ action: n2, command: s2 });
  }
}
function Vn(e2, t2, n2) {
  return jn(new zn(e2, t2, n2), { get(e3, t3) {
    let s2 = "db";
    return e3 && e3.content && (s2 = e3.content.$method), Hn(s2, t3) ? Vn({ $method: t3 }, e3, n2) : function() {
      return Vn({ $method: t3, $param: Wn(Array.from(arguments)) }, e3, n2);
    };
  } });
}
function Gn({ path: e2, method: t2 }) {
  return class {
    constructor() {
      this.param = Array.from(arguments);
    }
    toJSON() {
      return { $newDb: [...e2.map((e3) => ({ $method: e3 })), { $method: t2, $param: this.param }] };
    }
    toString() {
      return JSON.stringify(this.toJSON());
    }
  };
}
function Qn(e2, t2 = {}) {
  return jn(new e2(t2), { get: (e3, t3) => Hn("db", t3) ? Vn({ $method: t3 }, null, e3) : function() {
    return Vn({ $method: t3, $param: Wn(Array.from(arguments)) }, null, e3);
  } });
}
class Yn extends class {
  constructor({ uniClient: e2 = {}, isJQL: t2 = false } = {}) {
    this._uniClient = e2, this._authCallBacks = {}, this._dbCallBacks = {}, e2._isDefault && (this._dbCallBacks = R("_globalUniCloudDatabaseCallback")), t2 || (this.auth = Bn(this._authCallBacks)), this._isJQL = t2, Object.assign(this, Bn(this._dbCallBacks)), this.env = jn({}, { get: (e3, t3) => ({ $env: t3 }) }), this.Geo = jn({}, { get: (e3, t3) => Gn({ path: ["Geo"], method: t3 }) }), this.serverDate = Gn({ path: [], method: "serverDate" }), this.RegExp = Gn({ path: [], method: "RegExp" });
  }
  getCloudEnv(e2) {
    if ("string" != typeof e2 || !e2.trim())
      throw new Error("getCloudEnv参数错误");
    return { $env: e2.replace("$cloudEnv_", "") };
  }
  _callback(e2, t2) {
    const n2 = this._dbCallBacks;
    n2[e2] && n2[e2].forEach((e3) => {
      e3(...t2);
    });
  }
  _callbackAuth(e2, t2) {
    const n2 = this._authCallBacks;
    n2[e2] && n2[e2].forEach((e3) => {
      e3(...t2);
    });
  }
  multiSend() {
    const e2 = Array.from(arguments), t2 = e2.map((e3) => {
      const t3 = e3.getAction(), n2 = e3.getCommand();
      if ("getTemp" !== n2.$db[n2.$db.length - 1].$method)
        throw new Error("multiSend只支持子命令内使用getTemp");
      return { action: t3, command: n2 };
    });
    return this._callCloudFunction({ multiCommand: t2, queryList: e2 });
  }
  startTransaction() {
    throw new Error("JQL 事务仅支持在云端使用");
  }
  commit() {
    throw new Error("JQL 事务仅支持在云端使用");
  }
  rollback() {
    throw new Error("JQL 事务仅支持在云端使用");
  }
} {
  _parseResult(e2) {
    return this._isJQL ? e2.result : e2;
  }
  _callCloudFunction({ action: e2, command: t2, multiCommand: n2, queryList: s2 }) {
    function r2(e3, t3) {
      if (n2 && s2)
        for (let n3 = 0; n3 < s2.length; n3++) {
          const r3 = s2[n3];
          r3.udb && "function" == typeof r3.udb.setResult && (t3 ? r3.udb.setResult(t3) : r3.udb.setResult(e3.result.dataList[n3]));
        }
    }
    const i2 = this, o2 = this._isJQL ? "databaseForJQL" : "database";
    function a2(e3) {
      return i2._callback("error", [e3]), q(K(o2, "fail"), e3).then(() => q(K(o2, "complete"), e3)).then(() => (r2(null, e3), Z($, { type: z, content: e3 }), Promise.reject(e3)));
    }
    const c2 = q(K(o2, "invoke")), u2 = this._uniClient;
    return c2.then(() => u2.callFunction({ name: "DCloud-clientDB", type: d, data: { action: e2, command: t2, multiCommand: n2 } })).then((e3) => {
      const { code: t3, message: n3, token: s3, tokenExpired: c3, systemInfo: u3 = [] } = e3.result;
      if (u3)
        for (let e4 = 0; e4 < u3.length; e4++) {
          const { level: t4, message: n4, detail: s4 } = u3[e4], r3 = console["warn" === t4 ? "error" : t4] || console.log;
          let i3 = "[System Info]" + n4;
          s4 && (i3 = `${i3}
详细信息：${s4}`), r3(i3);
        }
      if (t3) {
        return a2(new re({ code: t3, message: n3, requestId: e3.requestId }));
      }
      e3.result.errCode = e3.result.errCode || e3.result.code, e3.result.errMsg = e3.result.errMsg || e3.result.message, s3 && c3 && (ce({ token: s3, tokenExpired: c3 }), this._callbackAuth("refreshToken", [{ token: s3, tokenExpired: c3 }]), this._callback("refreshToken", [{ token: s3, tokenExpired: c3 }]), Z(W, { token: s3, tokenExpired: c3 }));
      const l2 = [{ prop: "affectedDocs", tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代" }, { prop: "code", tips: "code不再推荐使用，请使用errCode替代" }, { prop: "message", tips: "message不再推荐使用，请使用errMsg替代" }];
      for (let t4 = 0; t4 < l2.length; t4++) {
        const { prop: n4, tips: s4 } = l2[t4];
        if (n4 in e3.result) {
          const t5 = e3.result[n4];
          Object.defineProperty(e3.result, n4, { get: () => (console.warn(s4), t5) });
        }
      }
      return function(e4) {
        return q(K(o2, "success"), e4).then(() => q(K(o2, "complete"), e4)).then(() => {
          r2(e4, null);
          const t4 = i2._parseResult(e4);
          return Z($, { type: z, content: t4 }), Promise.resolve(t4);
        });
      }(e3);
    }, (e3) => {
      /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e3.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");
      return a2(new re({ code: e3.code || "SYSTEM_ERROR", message: e3.message, requestId: e3.requestId }));
    });
  }
}
const Xn = "token无效，跳转登录页面", Zn = "token过期，跳转登录页面", es = { TOKEN_INVALID_TOKEN_EXPIRED: Zn, TOKEN_INVALID_INVALID_CLIENTID: Xn, TOKEN_INVALID: Xn, TOKEN_INVALID_WRONG_TOKEN: Xn, TOKEN_INVALID_ANONYMOUS_USER: Xn }, ts = { "uni-id-token-expired": Zn, "uni-id-check-token-failed": Xn, "uni-id-token-not-exist": Xn, "uni-id-check-device-feature-failed": Xn }, ns = { ...es, ...ts, default: "用户未登录或登录状态过期，自动跳转登录页面" };
function ss(e2, t2) {
  let n2 = "";
  return n2 = e2 ? `${e2}/${t2}` : t2, n2.replace(/^\//, "");
}
function rs(e2 = [], t2 = "") {
  const n2 = [], s2 = [];
  return e2.forEach((e3) => {
    true === e3.needLogin ? n2.push(ss(t2, e3.path)) : false === e3.needLogin && s2.push(ss(t2, e3.path));
  }), { needLoginPage: n2, notNeedLoginPage: s2 };
}
function is(e2) {
  return e2.split("?")[0].replace(/^\//, "");
}
function os() {
  return function(e2) {
    let t2 = e2 && e2.route;
    return t2 ? ("/" !== t2.charAt(0) && (t2 = "/" + t2), t2) : "";
  }(function() {
    const e2 = getCurrentPages();
    return e2[e2.length - 1];
  }());
}
function as() {
  return is(os());
}
function cs(e2 = "", t2 = {}) {
  if (!e2)
    return false;
  if (!(t2 && t2.list && t2.list.length))
    return false;
  const n2 = t2.list, s2 = is(e2);
  return n2.some((e3) => e3.pagePath === s2);
}
const us = !!e.uniIdRouter;
const { loginPage: ls, routerNeedLogin: ds, resToLogin: hs, needLoginPage: ps, notNeedLoginPage: fs, loginPageInTabBar: gs } = function({ pages: t2 = [], subPackages: n2 = [], uniIdRouter: s2 = {}, tabBar: r2 = {} } = e) {
  const { loginPage: i2, needLogin: o2 = [], resToLogin: a2 = true } = s2, { needLoginPage: c2, notNeedLoginPage: u2 } = rs(t2), { needLoginPage: l2, notNeedLoginPage: d2 } = function(e2 = []) {
    const t3 = [], n3 = [];
    return e2.forEach((e3) => {
      const { root: s3, pages: r3 = [] } = e3, { needLoginPage: i3, notNeedLoginPage: o3 } = rs(r3, s3);
      t3.push(...i3), n3.push(...o3);
    }), { needLoginPage: t3, notNeedLoginPage: n3 };
  }(n2);
  return { loginPage: i2, routerNeedLogin: o2, resToLogin: a2, needLoginPage: [...c2, ...l2], notNeedLoginPage: [...u2, ...d2], loginPageInTabBar: cs(i2, r2) };
}();
if (ps.indexOf(ls) > -1)
  throw new Error(`Login page [${ls}] should not be "needLogin", please check your pages.json`);
function ms(e2) {
  const t2 = as();
  if ("/" === e2.charAt(0))
    return e2;
  const [n2, s2] = e2.split("?"), r2 = n2.replace(/^\//, "").split("/"), i2 = t2.split("/");
  i2.pop();
  for (let e3 = 0; e3 < r2.length; e3++) {
    const t3 = r2[e3];
    ".." === t3 ? i2.pop() : "." !== t3 && i2.push(t3);
  }
  return "" === i2[0] && i2.shift(), "/" + i2.join("/") + (s2 ? "?" + s2 : "");
}
function ys(e2, t2) {
  return new RegExp(t2).test(e2);
}
function _s({ redirect: e2 }) {
  const t2 = is(e2), n2 = is(ls);
  return as() !== n2 && t2 !== n2;
}
function ws({ api: e2, redirect: t2 } = {}) {
  if (!t2 || !_s({ redirect: t2 }))
    return;
  const n2 = function(e3, t3) {
    return "/" !== e3.charAt(0) && (e3 = "/" + e3), t3 ? e3.indexOf("?") > -1 ? e3 + `&uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3 + `?uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3;
  }(ls, t2);
  gs ? "navigateTo" !== e2 && "redirectTo" !== e2 || (e2 = "switchTab") : "switchTab" === e2 && (e2 = "navigateTo");
  const s2 = { navigateTo: uni.navigateTo, redirectTo: uni.redirectTo, switchTab: uni.switchTab, reLaunch: uni.reLaunch };
  setTimeout(() => {
    s2[e2]({ url: n2 });
  }, 0);
}
function vs({ url: e2 } = {}) {
  const t2 = { abortLoginPageJump: false, autoToLoginPage: false }, n2 = function() {
    const { token: e3, tokenExpired: t3 } = ae();
    let n3;
    if (e3) {
      if (t3 < Date.now()) {
        const e4 = "uni-id-token-expired";
        n3 = { errCode: e4, errMsg: ns[e4] };
      }
    } else {
      const e4 = "uni-id-check-token-failed";
      n3 = { errCode: e4, errMsg: ns[e4] };
    }
    return n3;
  }();
  if (function(e3) {
    const t3 = is(ms(e3));
    return !(fs.indexOf(t3) > -1) && (ps.indexOf(t3) > -1 || ds.some((n3) => ys(t3, n3) || ys(e3, n3)));
  }(e2) && n2) {
    n2.uniIdRedirectUrl = e2;
    if (Q(H).length > 0)
      return setTimeout(() => {
        Z(H, n2);
      }, 0), t2.abortLoginPageJump = true, t2;
    t2.autoToLoginPage = true;
  }
  return t2;
}
function Is() {
  const e2 = os(), { abortLoginPageJump: t2, autoToLoginPage: n2 } = vs({ url: e2 });
  t2 || n2 && ws({ api: "redirectTo", redirect: e2 });
}
function Ss() {
  Is();
  const e2 = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
  for (let t2 = 0; t2 < e2.length; t2++) {
    const n2 = e2[t2];
    uni.addInterceptor(n2, { invoke(e3) {
      const { abortLoginPageJump: t3, autoToLoginPage: s2 } = vs({ url: e3.url });
      return t3 ? e3 : s2 ? (ws({ api: n2, redirect: ms(e3.url) }), false) : e3;
    } });
  }
}
function ks() {
  this.onResponse((e2) => {
    const { type: t2, content: n2 } = e2;
    let s2 = false;
    switch (t2) {
      case "cloudobject":
        s2 = function(e3) {
          if ("object" != typeof e3)
            return false;
          const { errCode: t3 } = e3 || {};
          return t3 in ns;
        }(n2);
        break;
      case "clientdb":
        s2 = function(e3) {
          if ("object" != typeof e3)
            return false;
          const { errCode: t3 } = e3 || {};
          return t3 in es;
        }(n2);
    }
    s2 && function(e3 = {}) {
      const t3 = Q(H);
      ne().then(() => {
        const n3 = os();
        if (n3 && _s({ redirect: n3 }))
          return t3.length > 0 ? Z(H, Object.assign({ uniIdRedirectUrl: n3 }, e3)) : void (ls && ws({ api: "navigateTo", redirect: n3 }));
      });
    }(n2);
  });
}
function As(e2) {
  e2.onNeedLogin = function(e3) {
    Y(H, e3);
  }, e2.offNeedLogin = function(e3) {
    X(H, e3);
  }, us && (R("_globalUniCloudStatus").needLoginInit || (R("_globalUniCloudStatus").needLoginInit = true, ne().then(() => {
    Ss.call(e2);
  }), hs && ks.call(e2)));
}
function Cs(e2) {
  e2.onFailover = function(e3) {
    Y(J, e3);
  }, e2.offFailover = function(e3) {
    X(J, e3);
  }, e2.refreshFailoverConfig = function() {
    return e2.config, nn(0), rn();
  }, e2.clearFailoverConfig = function() {
    !function() {
      Qt = null, Yt = 0;
      try {
        ie.removeStorageSync(en("UNICLOUD_FAILOVER_CONFIG")), ie.removeStorageSync(en("UNICLOUD_FAILOVER_LAST_REQUEST"));
      } catch (e3) {
      }
    }();
  };
}
function Ts(e2) {
  !function(e3) {
    e3.onResponse = function(e4) {
      Y($, e4);
    }, e3.offResponse = function(e4) {
      X($, e4);
    };
  }(e2), As(e2), function(e3) {
    e3.onRefreshToken = function(e4) {
      Y(W, e4);
    }, e3.offRefreshToken = function(e4) {
      X(W, e4);
    };
  }(e2), Cs(e2);
}
const bs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", Ps = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
function xs(e2) {
  return decodeURIComponent(function(e3) {
    if (e3 = String(e3).replace(/[\t\n\f\r ]+/g, ""), !Ps.test(e3))
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t2;
    e3 += "==".slice(2 - (3 & e3.length));
    for (var n2, s2, r2 = "", i2 = 0; i2 < e3.length; )
      t2 = bs.indexOf(e3.charAt(i2++)) << 18 | bs.indexOf(e3.charAt(i2++)) << 12 | (n2 = bs.indexOf(e3.charAt(i2++))) << 6 | (s2 = bs.indexOf(e3.charAt(i2++))), r2 += 64 === n2 ? String.fromCharCode(t2 >> 16 & 255) : 64 === s2 ? String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255) : String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2);
    return r2;
  }(e2).split("").map(function(e3) {
    return "%" + ("00" + e3.charCodeAt(0).toString(16)).slice(-2);
  }).join(""));
}
function Os() {
  const e2 = ae().token || "", t2 = e2.split(".");
  if (!e2 || 3 !== t2.length)
    return { uid: null, role: [], permission: [], tokenExpired: 0 };
  let n2;
  try {
    n2 = JSON.parse(xs(t2[1]));
  } catch (e3) {
    throw new Error("获取当前用户信息出错，详细错误信息为：" + e3.message);
  }
  return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
}
var Es = n(function(e2, t2) {
  Object.defineProperty(t2, "__esModule", { value: true });
  const n2 = "chooseAndUploadFile:ok", s2 = "chooseAndUploadFile:fail";
  function r2(e3, t3) {
    return e3.tempFiles.forEach((e4, n3) => {
      e4.name || (e4.name = e4.path.substring(e4.path.lastIndexOf("/") + 1)), t3 && (e4.fileType = t3), e4.cloudPath = Date.now() + "_" + n3 + e4.name.substring(e4.name.lastIndexOf("."));
    }), e3.tempFilePaths || (e3.tempFilePaths = e3.tempFiles.map((e4) => e4.path)), e3;
  }
  function i2(e3, t3, { onChooseFile: s3, onUploadProgress: r3 }) {
    return t3.then((e4) => {
      if (s3) {
        const t4 = s3(e4);
        if (void 0 !== t4)
          return Promise.resolve(t4).then((t5) => void 0 === t5 ? e4 : t5);
      }
      return e4;
    }).then((t4) => false === t4 ? { errMsg: n2, tempFilePaths: [], tempFiles: [] } : function(e4, t5, s4 = 5, r4) {
      (t5 = Object.assign({}, t5)).errMsg = n2;
      const i3 = t5.tempFiles, o2 = i3.length;
      let a2 = 0;
      return new Promise((n3) => {
        for (; a2 < s4; )
          c2();
        function c2() {
          const s5 = a2++;
          if (s5 >= o2)
            return void (!i3.find((e5) => !e5.url && !e5.errMsg) && n3(t5));
          const u2 = i3[s5];
          e4.uploadFile({ provider: u2.provider, filePath: u2.path, cloudPath: u2.cloudPath, fileType: u2.fileType, cloudPathAsRealPath: u2.cloudPathAsRealPath, onUploadProgress(e5) {
            e5.index = s5, e5.tempFile = u2, e5.tempFilePath = u2.path, r4 && r4(e5);
          } }).then((e5) => {
            u2.url = e5.fileID, s5 < o2 && c2();
          }).catch((e5) => {
            u2.errMsg = e5.errMsg || e5.message, s5 < o2 && c2();
          });
        }
      });
    }(e3, t4, 5, r3));
  }
  t2.initChooseAndUploadFile = function(e3) {
    return function(t3 = { type: "all" }) {
      return "image" === t3.type ? i2(e3, function(e4) {
        const { count: t4, sizeType: n3, sourceType: i3 = ["album", "camera"], extension: o2 } = e4;
        return new Promise((e5, a2) => {
          uni.chooseImage({ count: t4, sizeType: n3, sourceType: i3, extension: o2, success(t5) {
            e5(r2(t5, "image"));
          }, fail(e6) {
            a2({ errMsg: e6.errMsg.replace("chooseImage:fail", s2) });
          } });
        });
      }(t3), t3) : "video" === t3.type ? i2(e3, function(e4) {
        const { camera: t4, compressed: n3, maxDuration: i3, sourceType: o2 = ["album", "camera"], extension: a2 } = e4;
        return new Promise((e5, c2) => {
          uni.chooseVideo({ camera: t4, compressed: n3, maxDuration: i3, sourceType: o2, extension: a2, success(t5) {
            const { tempFilePath: n4, duration: s3, size: i4, height: o3, width: a3 } = t5;
            e5(r2({ errMsg: "chooseVideo:ok", tempFilePaths: [n4], tempFiles: [{ name: t5.tempFile && t5.tempFile.name || "", path: n4, size: i4, type: t5.tempFile && t5.tempFile.type || "", width: a3, height: o3, duration: s3, fileType: "video", cloudPath: "" }] }, "video"));
          }, fail(e6) {
            c2({ errMsg: e6.errMsg.replace("chooseVideo:fail", s2) });
          } });
        });
      }(t3), t3) : i2(e3, function(e4) {
        const { count: t4, extension: n3 } = e4;
        return new Promise((e5, i3) => {
          let o2 = uni.chooseFile;
          if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o2 = wx.chooseMessageFile), "function" != typeof o2)
            return i3({ errMsg: s2 + " 请指定 type 类型，该平台仅支持选择 image 或 video。" });
          o2({ type: "all", count: t4, extension: n3, success(t5) {
            e5(r2(t5));
          }, fail(e6) {
            i3({ errMsg: e6.errMsg.replace("chooseFile:fail", s2) });
          } });
        });
      }(t3), t3);
    };
  };
}), Ls = t(Es);
const Rs = "manual";
function Us(e2) {
  return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {}, mixinDatacomError: null }), created() {
    this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
      var e3 = [];
      return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t2) => {
        e3.push(this[t2]);
      }), e3;
    }, (e3, t2) => {
      if (this.loadtime === Rs)
        return;
      let n2 = false;
      const s2 = [];
      for (let r2 = 2; r2 < e3.length; r2++)
        e3[r2] !== t2[r2] && (s2.push(e3[r2]), n2 = true);
      e3[0] !== t2[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n2, s2);
    });
  }, methods: { onMixinDatacomPropsChange(e3, t2) {
  }, mixinDatacomEasyGet({ getone: e3 = false, success: t2, fail: n2 } = {}) {
    this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomError = null, this.mixinDatacomGet().then((n3) => {
      this.mixinDatacomLoading = false;
      const { data: s2, count: r2 } = n3.result;
      this.getcount && (this.mixinDatacomPage.count = r2), this.mixinDatacomHasMore = s2.length < this.pageSize;
      const i2 = e3 ? s2.length ? s2[0] : void 0 : s2;
      this.mixinDatacomResData = i2, t2 && t2(i2);
    }).catch((e4) => {
      this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e4, this.mixinDatacomError = e4, n2 && n2(e4);
    }));
  }, mixinDatacomGet(t2 = {}) {
    let n2;
    t2 = t2 || {}, n2 = "undefined" != typeof __uniX && __uniX ? e2.databaseForJQL(this.spaceInfo) : e2.database(this.spaceInfo);
    const s2 = t2.action || this.action;
    s2 && (n2 = n2.action(s2));
    const r2 = t2.collection || this.collection;
    n2 = Array.isArray(r2) ? n2.collection(...r2) : n2.collection(r2);
    const i2 = t2.where || this.where;
    i2 && Object.keys(i2).length && (n2 = n2.where(i2));
    const o2 = t2.field || this.field;
    o2 && (n2 = n2.field(o2));
    const a2 = t2.foreignKey || this.foreignKey;
    a2 && (n2 = n2.foreignKey(a2));
    const c2 = t2.groupby || this.groupby;
    c2 && (n2 = n2.groupBy(c2));
    const u2 = t2.groupField || this.groupField;
    u2 && (n2 = n2.groupField(u2));
    true === (void 0 !== t2.distinct ? t2.distinct : this.distinct) && (n2 = n2.distinct());
    const l2 = t2.orderby || this.orderby;
    l2 && (n2 = n2.orderBy(l2));
    const d2 = void 0 !== t2.pageCurrent ? t2.pageCurrent : this.mixinDatacomPage.current, h2 = void 0 !== t2.pageSize ? t2.pageSize : this.mixinDatacomPage.size, p2 = void 0 !== t2.getcount ? t2.getcount : this.getcount, f2 = void 0 !== t2.gettree ? t2.gettree : this.gettree, g2 = void 0 !== t2.gettreepath ? t2.gettreepath : this.gettreepath, m2 = { getCount: p2 }, y2 = { limitLevel: void 0 !== t2.limitlevel ? t2.limitlevel : this.limitlevel, startWith: void 0 !== t2.startwith ? t2.startwith : this.startwith };
    return f2 && (m2.getTree = y2), g2 && (m2.getTreePath = y2), n2 = n2.skip(h2 * (d2 - 1)).limit(h2).get(m2), n2;
  } } };
}
function Ns(e2) {
  return function(t2, n2 = {}) {
    n2 = function(e3, t3 = {}) {
      return e3.customUI = t3.customUI || e3.customUI, e3.parseSystemError = t3.parseSystemError || e3.parseSystemError, Object.assign(e3.loadingOptions, t3.loadingOptions), Object.assign(e3.errorOptions, t3.errorOptions), "object" == typeof t3.secretMethods && (e3.secretMethods = t3.secretMethods), e3;
    }({ customUI: false, loadingOptions: { title: "加载中...", mask: true }, errorOptions: { type: "modal", retry: false } }, n2);
    const { customUI: s2, loadingOptions: r2, errorOptions: i2, parseSystemError: o2 } = n2, a2 = !s2;
    return new Proxy({}, { get(s3, c2) {
      switch (c2) {
        case "toString":
          return "[object UniCloudObject]";
        case "toJSON":
          return {};
      }
      return function({ fn: e3, interceptorName: t3, getCallbackArgs: n3 } = {}) {
        return async function(...s4) {
          const r3 = n3 ? n3({ params: s4 }) : {};
          let i3, o3;
          try {
            return await q(K(t3, "invoke"), { ...r3 }), i3 = await e3(...s4), await q(K(t3, "success"), { ...r3, result: i3 }), i3;
          } catch (e4) {
            throw o3 = e4, await q(K(t3, "fail"), { ...r3, error: o3 }), o3;
          } finally {
            await q(K(t3, "complete"), o3 ? { ...r3, error: o3 } : { ...r3, result: i3 });
          }
        };
      }({ fn: async function s4(...u2) {
        let d2;
        a2 && uni.showLoading({ title: r2.title, mask: r2.mask });
        const h2 = { name: t2, type: l, data: { method: c2, params: u2 } };
        "object" == typeof n2.secretMethods && function(e3, t3) {
          const n3 = t3.data.method, s5 = e3.secretMethods || {}, r3 = s5[n3] || s5["*"];
          r3 && (t3.secretType = r3);
        }(n2, h2);
        let p2 = false;
        try {
          d2 = await e2.callFunction(h2);
        } catch (e3) {
          p2 = true, d2 = { result: new re(e3) };
        }
        const { errSubject: f2, errCode: g2, errMsg: m2, newToken: y2 } = d2.result || {};
        if (a2 && uni.hideLoading(), y2 && y2.token && y2.tokenExpired && (ce(y2), Z(W, { ...y2 })), g2) {
          let e3 = m2;
          if (p2 && o2) {
            e3 = (await o2({ objectName: t2, methodName: c2, params: u2, errSubject: f2, errCode: g2, errMsg: m2 })).errMsg || m2;
          }
          if (a2)
            if ("toast" === i2.type)
              uni.showToast({ title: e3, icon: "none" });
            else {
              if ("modal" !== i2.type)
                throw new Error(`Invalid errorOptions.type: ${i2.type}`);
              {
                const { confirm: t3 } = await async function({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3 } = {}) {
                  return new Promise((i3, o3) => {
                    uni.showModal({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3, success(e5) {
                      i3(e5);
                    }, fail() {
                      i3({ confirm: false, cancel: true });
                    } });
                  });
                }({ title: "提示", content: e3, showCancel: i2.retry, cancelText: "取消", confirmText: i2.retry ? "重试" : "确定" });
                if (i2.retry && t3)
                  return s4(...u2);
              }
            }
          const n3 = new re({ subject: f2, code: g2, message: m2, requestId: d2.requestId });
          throw n3.detail = d2.result, Z($, { type: G, content: n3 }), n3;
        }
        return Z($, { type: G, content: d2.result }), d2.result;
      }, interceptorName: "callObject", getCallbackArgs: function({ params: e3 } = {}) {
        return { objectName: t2, methodName: c2, params: e3 };
      } });
    } });
  };
}
function Ds(e2) {
  return R("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e2.config.spaceId));
}
async function Ms({ openid: e2, callLoginByWeixin: t2 = false } = {}) {
  Ds(this);
  throw new Error(`[SecureNetwork] API \`initSecureNetworkByWeixin\` is not supported on platform \`${T}\``);
}
async function Fs(e2) {
  const t2 = Ds(this);
  return t2.initPromise || (t2.initPromise = Ms.call(this, e2).then((e3) => e3).catch((e3) => {
    throw delete t2.initPromise, e3;
  })), t2.initPromise;
}
function qs(e2) {
  return function({ openid: t2, callLoginByWeixin: n2 = false } = {}) {
    return Fs.call(e2, { openid: t2, callLoginByWeixin: n2 });
  };
}
function Ks(e2) {
  !function(e3) {
    pe = e3;
  }(e2);
}
function js(e2) {
  const n2 = { getAppBaseInfo: uni.getSystemInfo, getPushClientId: uni.getPushClientId };
  return function(s2) {
    return new Promise((r2, i2) => {
      n2[e2]({ ...s2, success(e3) {
        r2(e3);
      }, fail(e3) {
        i2(e3);
      } });
    });
  };
}
class Bs extends class {
  constructor() {
    this._callback = {};
  }
  addListener(e2, t2) {
    this._callback[e2] || (this._callback[e2] = []), this._callback[e2].push(t2);
  }
  on(e2, t2) {
    return this.addListener(e2, t2);
  }
  removeListener(e2, t2) {
    if (!t2)
      throw new Error('The "listener" argument must be of type function. Received undefined');
    const n2 = this._callback[e2];
    if (!n2)
      return;
    const s2 = function(e3, t3) {
      for (let n3 = e3.length - 1; n3 >= 0; n3--)
        if (e3[n3] === t3)
          return n3;
      return -1;
    }(n2, t2);
    n2.splice(s2, 1);
  }
  off(e2, t2) {
    return this.removeListener(e2, t2);
  }
  removeAllListener(e2) {
    delete this._callback[e2];
  }
  emit(e2, ...t2) {
    const n2 = this._callback[e2];
    if (n2)
      for (let e3 = 0; e3 < n2.length; e3++)
        n2[e3](...t2);
  }
} {
  constructor() {
    super(), this._uniPushMessageCallback = this._receivePushMessage.bind(this), this._currentMessageId = -1, this._payloadQueue = [];
  }
  init() {
    return Promise.all([js("getAppBaseInfo")(), js("getPushClientId")()]).then(([{ appId: e2 } = {}, { cid: t2 } = {}] = []) => {
      if (!e2)
        throw new Error("Invalid appId, please check the manifest.json file");
      if (!t2)
        throw new Error("Invalid push client id");
      this._appId = e2, this._pushClientId = t2, this._seqId = Date.now() + "-" + Math.floor(9e5 * Math.random() + 1e5), this.emit("open"), this._initMessageListener();
    }, (e2) => {
      throw this.emit("error", e2), this.close(), e2;
    });
  }
  async open() {
    return this.init();
  }
  _isUniCloudSSE(e2) {
    if ("receive" !== e2.type)
      return false;
    const t2 = e2 && e2.data && e2.data.payload;
    return !(!t2 || "UNI_CLOUD_SSE" !== t2.channel || t2.seqId !== this._seqId);
  }
  _receivePushMessage(e2) {
    if (!this._isUniCloudSSE(e2))
      return;
    const t2 = e2 && e2.data && e2.data.payload, { action: n2, messageId: s2, message: r2 } = t2;
    this._payloadQueue.push({ action: n2, messageId: s2, message: r2 }), this._consumMessage();
  }
  _consumMessage() {
    for (; ; ) {
      const e2 = this._payloadQueue.find((e3) => e3.messageId === this._currentMessageId + 1);
      if (!e2)
        break;
      this._currentMessageId++, this._parseMessagePayload(e2);
    }
  }
  _parseMessagePayload(e2) {
    const { action: t2, messageId: n2, message: s2 } = e2;
    "end" === t2 ? this._end({ messageId: n2, message: s2 }) : "message" === t2 && this._appendMessage({ messageId: n2, message: s2 });
  }
  _appendMessage({ messageId: e2, message: t2 } = {}) {
    this.emit("message", t2);
  }
  _end({ messageId: e2, message: t2 } = {}) {
    this.emit("end", t2), this.close();
  }
  _initMessageListener() {
    uni.onPushMessage(this._uniPushMessageCallback);
  }
  _destroy() {
    uni.offPushMessage(this._uniPushMessageCallback);
  }
  toJSON() {
    return { appId: this._appId, pushClientId: this._pushClientId, seqId: this._seqId };
  }
  close() {
    this._destroy(), this.emit("close");
  }
}
function Hs(e2) {
  e2._initPromiseHub || (e2._initPromiseHub = new I({ createPromise: function() {
    let t2 = Promise.resolve();
    var n2;
    n2 = 1, t2 = new Promise((e3) => {
      setTimeout(() => {
        e3();
      }, n2);
    });
    const s2 = e2.auth();
    return t2.then(() => s2.getLoginState()).then((e3) => e3 ? Promise.resolve() : s2.signInAnonymously());
  } }));
}
const Ws = { tcb: Ot, tencent: Ot, aliyun: ye, private: Nt, dcloud: Nt, alipay: zt };
let Js = new class {
  init(e2) {
    let t2 = {};
    const n2 = Ws[e2.provider];
    if (!n2)
      throw new Error("未提供正确的provider参数");
    t2 = n2.init(e2), Hs(t2), qn(t2), function(e3) {
      const t3 = e3.uploadFile;
      e3.uploadFile = function(e4) {
        return t3.call(this, e4);
      };
    }(t2), function(e3) {
      e3.database = function(t3) {
        if (t3 && Object.keys(t3).length > 0)
          return e3.init(t3).database();
        if (this._database)
          return this._database;
        const n3 = Qn(Yn, { uniClient: e3 });
        return this._database = n3, n3;
      }, e3.databaseForJQL = function(t3) {
        if (t3 && Object.keys(t3).length > 0)
          return e3.init(t3).databaseForJQL();
        if (this._databaseForJQL)
          return this._databaseForJQL;
        const n3 = Qn(Yn, { uniClient: e3, isJQL: true });
        return this._databaseForJQL = n3, n3;
      };
    }(t2), function(e3) {
      e3.getCurrentUserInfo = Os, e3.chooseAndUploadFile = Ls.initChooseAndUploadFile(e3), Object.assign(e3, { get mixinDatacom() {
        return Us(e3);
      } }), e3.SSEChannel = Bs, e3.initSecureNetworkByWeixin = qs(e3), e3.setCustomClientInfo = Ks, e3.importObject = Ns(e3);
    }(t2);
    return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e3) => {
      if (!t2[e3])
        return;
      const n3 = t2[e3];
      t2[e3] = function() {
        return n3.apply(t2, Array.from(arguments));
      }, t2[e3] = (/* @__PURE__ */ function(e4, t3) {
        return function(n4) {
          let s2 = false;
          if ("callFunction" === t3) {
            const e5 = n4 && n4.type || u;
            s2 = e5 !== u;
          }
          const r2 = "callFunction" === t3 && !s2, i2 = this._initPromiseHub.exec();
          n4 = n4 || {};
          const { success: o2, fail: a2, complete: c2 } = se(n4), l2 = i2.then(() => s2 ? Promise.resolve() : q(K(t3, "invoke"), n4)).then(() => e4.call(this, n4)).then((e5) => s2 ? Promise.resolve(e5) : q(K(t3, "success"), e5).then(() => q(K(t3, "complete"), e5)).then(() => (r2 && Z($, { type: V, content: e5 }), Promise.resolve(e5))), (e5) => s2 ? Promise.reject(e5) : q(K(t3, "fail"), e5).then(() => q(K(t3, "complete"), e5)).then(() => (Z($, { type: V, content: e5 }), Promise.reject(e5))));
          if (!(o2 || a2 || c2))
            return l2;
          l2.then((e5) => {
            o2 && o2(e5), c2 && c2(e5), r2 && Z($, { type: V, content: e5 });
          }, (e5) => {
            a2 && a2(e5), c2 && c2(e5), r2 && Z($, { type: V, content: e5 });
          });
        };
      }(t2[e3], e3)).bind(t2);
    }), t2.init = this.init, t2;
  }
}();
(() => {
  const e2 = Array.isArray(P) ? P.length : 0, t2 = function() {
    const e3 = Zt(), t3 = tn();
    return t3 && t3.enable && m(t3.space) ? t3.space : e3;
  }();
  if (1 === e2)
    Js = Js.init(t2), Js._isDefault = true;
  else {
    const t3 = ["database", "getCurrentUserInfo", "importObject"];
    let n2;
    n2 = e2 > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在uniCloud目录右键关联服务空间", [...["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile"], ...t3].forEach((e3) => {
      Js[e3] = function() {
        if (console.error(n2), -1 === t3.indexOf(e3))
          return Promise.reject(new re({ code: "SYS_ERR", message: n2 }));
        console.error(n2);
      };
    });
  }
  if (Object.assign(Js, { get mixinDatacom() {
    return Us(Js);
  } }), Ts(Js), Js.addInterceptor = M, Js.removeInterceptor = F, Js.interceptObject = j, uni.__uniCloud = Js, "app" === T) {
    const e3 = U();
    e3.uniCloud = Js, e3.UniCloudError = re;
  }
  !function() {
    const { failoverEndpoint: e3 } = Zt();
    if (!e3)
      return;
    rn().catch((e4) => {
      console.error("请求故障切换配置失败：", e4);
    });
    const t3 = { fail() {
      const e4 = tn();
      sn(e4 && e4.interval || 0) && rn().catch((e5) => {
        console.error("请求故障切换配置失败：", e5);
      });
    } };
    M("callFunction", t3), M("database", t3), M("uploadFile", t3);
  }();
})();
export {
  Js as J
};
