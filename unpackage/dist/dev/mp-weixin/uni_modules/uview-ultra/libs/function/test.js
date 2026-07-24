"use strict";
const common_vendor = require("../../../../common/vendor.js");
function url(value) {
  return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(value);
}
function date(value = null) {
  if (value.toString() == "") {
    return false;
  }
  let valueStr = value.toString();
  if (!number(valueStr)) {
    if (valueStr.length == 10 || valueStr.length == 13) {
      const date_1 = new Date(valueStr);
      return !isNaN(date_1.getTime());
    }
    return false;
  }
  if (valueStr.length < 10 || valueStr.length > 19) {
    return false;
  }
  const dateRegex = /^\d{4}[-\/]\d{2}[-\/]\d{2}( \d{1,2}:\d{2}(:\d{2})?)?$/;
  if (!dateRegex.test(valueStr)) {
    return false;
  }
  const dateValue = new Date(valueStr);
  return !isNaN(dateValue.getTime());
}
function number(value = null) {
  let str = value.toString();
  return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(str);
}
function string(value = null) {
  return typeof value === "string";
}
function empty(value = null) {
  switch (typeof value) {
    case "undefined":
      return true;
    case "string":
      return value == "";
    case "boolean":
      return value == false;
    case "number":
      return value == 0;
    case "object":
      if (Array.isArray(value) && value.length == 0) {
        return true;
      }
      return false;
  }
  return false;
}
function array(value = null) {
  if (value == null) {
    return false;
  }
  if ("object" == typeof value) {
    return common_vendor.UTS.isInstanceOf(value, Array);
  } else {
    return false;
  }
}
function object(value = null) {
  if (value == null) {
    return false;
  }
  if ("object" == typeof value) {
    return true;
  } else {
    return false;
  }
}
function func(value = null) {
  return typeof value === "function";
}
function promise(value = null) {
  return common_vendor.UTS.isInstanceOf(
    value,
    Promise
    // return object(value) && func(value.then) && func(value.catch)
  );
}
function image(value) {
  const newValue = value.split("?")[0];
  const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
  return IMAGE_REGEXP.test(newValue);
}
function video(value) {
  const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
  return VIDEO_REGEXP.test(value);
}
new UTSJSONObject({
  // email: email,
  // mobile: mobile,
  // url: url,
  // date: date,
  // dateISO: dateISO,
  // number: number,
  // digits,
  // idCard,
  // carNo,
  // amount,
  // chinese,
  // letter,
  // enOrNum,
  // contains,
  // // range,
  // // rangeLength,
  // empty,
  // isEmpty: empty,
  // // jsonString,
  // landline,
  // object,
  // array: array
  // code,
  // func,
  // promise,
  // video,
  // image,
  // // regExp,
  // string
});
exports.array = array;
exports.date = date;
exports.empty = empty;
exports.func = func;
exports.image = image;
exports.number = number;
exports.object = object;
exports.promise = promise;
exports.string = string;
exports.url = url;
exports.video = video;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/libs/function/test.js.map
