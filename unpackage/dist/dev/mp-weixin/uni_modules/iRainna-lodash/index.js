"use strict";
const common_vendor = require("../../common/vendor.js");
function uniq(array) {
  let index = -1;
  const length = array.length;
  const result = [];
  while (++index < length) {
    const value = array[index];
    if (result.indexOf(value) < 0) {
      result.push(value);
    }
  }
  return result;
}
function chunk(array, size) {
  const length = array ? array.length : 0;
  if (length == 0 || size < 1) {
    return [];
  }
  let index = 0;
  const step = size > 0 ? size : 1;
  const result = [];
  while (index < length) {
    const nextIndex = index + step;
    result.push(array.slice(index, nextIndex));
    index = nextIndex;
  }
  return result;
}
function shuffle(array) {
  const length = array ? array.length : 0;
  if (length == 0) {
    return [];
  }
  let index = -1;
  const lastIndex = length - 1;
  const result = array.slice();
  while (++index < length) {
    const rand = Math.floor(index + Math.random() * (lastIndex - index + 1));
    const value = result[rand];
    result[rand] = result[index];
    result[index] = value;
  }
  return result;
}
function get(object = null, path, defaultValue = null) {
  if (object == null) {
    return defaultValue;
  }
  const pathKeys = path.split(".");
  let index = 0;
  const length = pathKeys.length;
  let curr = object;
  while (curr != null && index < length) {
    const key = pathKeys[index++];
    if (typeof curr == "object") {
      const jsonObj = curr;
      curr = jsonObj[key];
    } else {
      curr = null;
    }
  }
  return index == length && curr != null ? curr : defaultValue;
}
function cloneDeep(value = null) {
  if (value == null || typeof value != "object") {
    return value;
  }
  if (Array.isArray(value)) {
    const arr = value;
    const copy = [];
    for (let i = 0; i < arr.length; i++) {
      const item = cloneDeep(arr[i]);
      if (item != null) {
        copy.push(item);
      }
    }
    return copy;
  }
  const obj = value;
  const res = new common_vendor.UTSJSONObject({});
  const keys = common_vendor.UTSJSONObject.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    res[k] = cloneDeep(obj[k]);
  }
  return res;
}
function camelCase(string) {
  if (string == "")
    return "";
  const words = string.replace(/[-_]+/g, " ").trim().split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length > 0) {
      if (result.length == 0) {
        result += word.toLowerCase();
      } else {
        result += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    }
  }
  return result;
}
function kebabCase(string) {
  if (string == "")
    return "";
  const words = string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/[-_\s]+/g, "-").split("-");
  const result = [];
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    if (w.length > 0) {
      result.push(w.toLowerCase());
    }
  }
  return result.join("-");
}
function capitalize(string) {
  if (string == "")
    return "";
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
function debounce(func = null, wait) {
  let timerId = 0;
  function timerExpired() {
    timerId = 0;
    const fn = func;
    fn();
  }
  return function() {
    if (timerId != 0) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      timerExpired();
    }, wait);
  };
}
function random(lower = 0, upper = 1) {
  const min = Math.min(lower, upper);
  const max = Math.max(lower, upper);
  return Math.floor(min + Math.random() * (max - min + 1));
}
exports.camelCase = camelCase;
exports.capitalize = capitalize;
exports.chunk = chunk;
exports.cloneDeep = cloneDeep;
exports.debounce = debounce;
exports.get = get;
exports.kebabCase = kebabCase;
exports.random = random;
exports.shuffle = shuffle;
exports.uniq = uniq;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/uni_modules/iRainna-lodash/index.js.map
