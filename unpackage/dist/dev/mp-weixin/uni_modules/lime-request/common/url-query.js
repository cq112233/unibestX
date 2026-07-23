"use strict";
const common_vendor = require("../../../common/vendor.js");
require("../utssdk/interface.js");
class URLSearchParams {
  [Symbol.iterator]() {
    let index = 0;
    const entries = this._params;
    let obj = {
      next: () => {
        return index < entries.length ? { value: entries[index++], done: false } : { value: null, done: true };
      }
    };
    return obj;
  }
  constructor(init = null) {
    this._params = [];
    if (init != null) {
      if (typeof init == "string") {
        this.parseString(init);
      } else if (Array.isArray(init)) {
        init.forEach((item = null) => {
          if (Array.isArray(item) && item.length > 1) {
            this.append(`${item[0]}`, `${item[1]}`);
          }
        });
      } else if (typeof init == "object") {
        Object.entries(init).forEach((_a) => {
          var _b = common_vendor.__read(_a, 2), name = _b[0], value = _b[1];
          this.append(name, value);
        });
      }
    }
  }
  parseString(query) {
    if (query.startsWith("?"))
      query = query.slice(1);
    query.split("&").forEach((pair) => {
      const arr = pair.split("=").map((s) => {
        return this.decode(s);
      });
      if (arr[0] != null && arr[0].length > 0) {
        this.append(arr[0], arr.length > 1 ? arr[1] : "");
      }
    });
  }
  encode(str) {
    var _a;
    return (_a = encodeURIComponent(str)) === null || _a === void 0 ? null : _a.replace(/%20/g, "+").replace(/%21/g, "!").replace(/%27/g, "'").replace(/%28/g, "(").replace(/%29/g, ")").replace(/%2A/g, "*").replace(/%2D/g, "-").replace(/%5F/g, "_").replace(/%2E/g, ".").replace(/%7E/g, "~");
  }
  decode(str) {
    return decodeURIComponent(str.replace(/\+/g, " "));
  }
  append(key, value) {
    this._params.push([`${key}`, `${value}`]);
  }
  delete(key) {
    const k = `${key}`;
    this._params = this._params.filter((pair) => {
      return pair[0] != k;
    });
  }
  get(key) {
    const entry = common_vendor.UTS.arrayFind(this._params, (pair) => {
      return pair[0] == `${key}`;
    });
    return entry != null ? entry[1] : null;
  }
  getAll(key) {
    return this._params.filter((pair) => {
      return pair[0] == `${key}`;
    }).map((pair) => {
      return pair[1];
    });
  }
  has(key) {
    return this._params.some((pair) => {
      return pair[0] == `${key}`;
    });
  }
  set(key, value) {
    this.delete(key);
    this.append(key, value);
  }
  _toString() {
    return this._params.map((pair) => {
      return `${this.encode(pair[0])}=${this.encode(pair[1])}`;
    }).join("&");
  }
  toString() {
    return this._toString();
  }
  get size() {
    return this._params.length;
  }
  forEach(callback, thisArg = null) {
    this._params.forEach((pair) => {
      callback(pair[1], pair[0], this);
    });
  }
  entries() {
    return this._params;
  }
  sort() {
    this._params.sort();
  }
  values() {
    return this._params.map((pair) => {
      return pair[1];
    });
  }
  keys() {
    return this._params.map((pair) => {
      return pair[0];
    });
  }
}
exports.URLSearchParams = URLSearchParams;
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uni_modules/lime-request/common/url-query.js.map
