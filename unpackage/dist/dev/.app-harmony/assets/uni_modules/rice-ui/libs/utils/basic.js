import { c as config } from "../store/useConfig.js";
const addUnit = (value) => {
  const isNumeric = typeof value == "number" || /^\d+(\.\d+)?$/.test(value);
  return isNumeric ? `${value}${config.unit}` : value.toString();
};
const clamp = (num, min, max) => {
  return Math.min(Math.max(num, min), max);
};
const closeto = (array, num) => {
  return array.reduce((pre, next) => {
    return Math.abs(pre - num) < Math.abs(next - num) ? pre : next;
  });
};
function getPxNum(value, totalWidth = 0) {
  if (typeof value == "number") {
    if (config.unit != "rpx")
      return value;
    value = value + "rpx";
  }
  if (value.endsWith("rpx")) {
    return uni.rpx2px(parseFloat(value));
  }
  if (value.endsWith("%")) {
    return parseFloat(value) * 0.01 * totalWidth;
  }
  return parseFloat(value);
}
function getRandomStr(length = 10) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}
const getParentEl = (el = null, targetEls) => {
  let currentEl = el;
  let els = targetEls.map((v) => {
    return v.toUpperCase();
  });
  while (currentEl != null) {
    const _el = currentEl.tagName.toUpperCase();
    if (els.includes(_el)) {
      return currentEl;
    }
    currentEl = currentEl.parentElement;
  }
  return null;
};
const hasStrValue = (val = null) => {
  if (val == null)
    return false;
  if (typeof val != "string") {
    val = val.toString();
  }
  return val.trim().length > 0;
};
const toNum = (value) => {
  if (typeof value == "string") {
    return parseFloat(value);
  }
  return value;
};
const isGradientColor = (color = null) => {
  if (color == null || color == "")
    return false;
  const gradientRegex = /(linear-gradient|radial-gradient|conic-gradient)\(/i;
  return gradientRegex.test(color);
};
const isThemeColor = (type = null) => {
  if (type == null || type == "")
    return false;
  return ["primary", "success", "warning", "error"].includes(type);
};
const isSameValue = (value1 = null, value2 = null) => {
  if (value1 == null || value2 == null)
    return false;
  if (typeof value1 == "object" && typeof value2 == "object") {
    return UTS.JSON.stringify(value1) == UTS.JSON.stringify(value2);
  }
  return value1 === value2;
};
function padZero(number, len = 2) {
  const num = typeof number == "number" ? number.toString() : number;
  return num.padStart(len, "0");
}
class SplitCssPropertyResult extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          textCssProperty: { type: "Unknown", optional: false },
          rectCssProperty: { type: "Unknown", optional: false }
        };
      },
      name: "SplitCssPropertyResult"
    };
  }
  constructor(options, metadata = SplitCssPropertyResult.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.textCssProperty = this.__props__.textCssProperty;
    this.rectCssProperty = this.__props__.rectCssProperty;
    delete this.__props__;
  }
}
const splitCssProperty = (css = null) => {
  const textCssProperty = new UTSJSONObject({});
  const rectCssProperty = new UTSJSONObject({});
  if (css != null) {
    const textProperties = [
      "color",
      "font-family",
      "fontFamily",
      "font-size",
      "fontSize",
      "font-weight",
      "fontWeight",
      "font-style",
      "fontStyle",
      "text-align",
      "textAlign",
      "text-decoration",
      "textDecoration",
      "line-height",
      "lineHeight",
      "letter-spacing",
      "letterSpacing",
      "text-overflow",
      "textOverflow",
      "white-space",
      "whiteSpace",
      "lines"
    ];
    for (let key in css) {
      if (textProperties.includes(key)) {
        textCssProperty[key] = css[key];
      } else {
        rectCssProperty[key] = css[key];
      }
    }
  }
  return new SplitCssPropertyResult({
    textCssProperty,
    rectCssProperty
  });
};
const isPromise = (val = null) => {
  return val && typeof val == "object" && typeof val["then"] == "function" && typeof val["catch"] == "function";
};
class InterceptorOption extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          done: { type: "Unknown", optional: false },
          args: { type: UTS.UTSType.withGenerics(Array, ["Any"]), optional: true },
          canceled: { type: "Unknown", optional: true },
          error: { type: "Unknown", optional: true },
          undone: { type: "Unknown", optional: true },
          complete: { type: "Unknown", optional: true }
        };
      },
      name: "InterceptorOption"
    };
  }
  constructor(options, metadata = InterceptorOption.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.done = this.__props__.done;
    this.args = this.__props__.args;
    this.canceled = this.__props__.canceled;
    this.error = this.__props__.error;
    this.undone = this.__props__.undone;
    this.complete = this.__props__.complete;
    delete this.__props__;
  }
}
function callInterceptor(interceptor, interceptorOption) {
  const done = interceptorOption.done, canceled = interceptorOption.canceled, error = interceptorOption.error, undone = interceptorOption.undone, complete = interceptorOption.complete;
  const returnVal = interceptor();
  if (isPromise(returnVal)) {
    const promiseVal = returnVal;
    promiseVal.then((result) => {
      if (result == true) {
        done();
        if (complete != null)
          complete();
      } else {
        if (canceled != null)
          canceled();
        if (undone != null)
          undone();
        if (complete != null)
          complete();
      }
    }).catch(() => {
      if (error != null)
        error();
      if (undone != null)
        undone();
      if (complete != null)
        complete();
    });
  } else {
    if (returnVal == true) {
      done();
    } else if (canceled != null) {
      canceled();
      if (undone != null)
        undone();
    }
    if (complete != null)
      complete();
  }
}
const getPrecision = (value = null) => {
  if (value == null)
    return 0;
  if (typeof value == "number") {
    value = value.toString();
  }
  const dotIndex = value.indexOf(".");
  let pre = 0;
  if (dotIndex != -1) {
    pre = value.length - dotIndex - 1;
  }
  return pre;
};
const getUID = () => {
  return Date.now() + "" + Math.floor(Math.random() * 1e7);
};
const isImage = (url = null) => {
  if (url == null)
    return false;
  const imageExtensions = /\.(jpg|jpeg|png|gif|bmp|webp|svg|ico)$/i;
  return imageExtensions.test(url);
};
const isVideo = (url = null) => {
  if (url == null)
    return false;
  const videoExtensions = /\.(mp4|webm|ogg|mov|avi|wmv|flv|mkv)$/i;
  return videoExtensions.test(url);
};
export {
  InterceptorOption as I,
  addUnit as a,
  isGradientColor as b,
  clamp as c,
  getPxNum as d,
  isSameValue as e,
  getRandomStr as f,
  getUID as g,
  hasStrValue as h,
  isThemeColor as i,
  callInterceptor as j,
  closeto as k,
  getParentEl as l,
  getPrecision as m,
  isImage as n,
  isVideo as o,
  padZero as p,
  splitCssProperty as s,
  toNum as t
};
//# sourceMappingURL=basic.js.map
