import { n as number, e as empty } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/test&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/digit&";
import { c as config } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/config/config&";
function upGetRect(selector, all = false, comp = null) {
  return new Promise((resolve) => {
    if (all == true) {
      uni.createSelectorQuery().in(comp).select(selector).boundingClientRect((res = null) => {
        const nodeInfoArray = res;
        const nodeInfoArrayItem = nodeInfoArray != null && nodeInfoArray.length > 0 ? nodeInfoArray[0] : {};
        resolve(nodeInfoArrayItem);
      }).exec();
    } else {
      uni.createSelectorQuery().in(comp).selectAll(selector).boundingClientRect((res = null) => {
        const nodeInfoArray = res;
        const nodeInfoArrayItem = nodeInfoArray != null && nodeInfoArray.length > 0 ? nodeInfoArray[0] : {};
        resolve(nodeInfoArrayItem);
      }).exec();
    }
  });
}
function bem(name, fixed, change) {
  const prefix = `up-${name}--`;
  const classes = new UTSJSONObject({});
  if (fixed.length > 0) {
    fixed.map((item) => {
      classes[prefix + item] = true;
    });
  }
  if (change.length > 0) {
    change.map((item) => {
      if (item[1]) {
        classes[prefix + item[0]] = item[1];
      }
    });
  }
  return UTSJSONObject.keys(classes).join(" ");
}
function range(min = 0, max = 0, value = 0) {
  return Math.max(min, Math.min(max, value));
}
function getPx(valueOri = null, unit = false) {
  if (valueOri == null) {
    return unit ? "0px" : "0";
  }
  let value = valueOri.toString();
  if (number(value)) {
    return unit ? `${value}px` : value;
  }
  return unit ? `${value}px` : value;
}
function sleep(value = 30) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(new UTSJSONObject({}));
    }, value);
  });
}
function os() {
  return uni.getSystemInfoSync().osName;
}
function sys() {
  return uni.getSystemInfoSync();
}
function getWindowInfo() {
  return uni.getWindowInfo();
}
function getDeviceInfo() {
  return uni.getDeviceInfo();
}
function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    const gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  }
  return 0;
}
function guid(len = 32, firstU = true, radix = 0) {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  let uuid = [];
  for (let i = 0; i < len; i++) {
    uuid.push("");
  }
  radix = radix > 0 ? radix : chars.length;
  if (len > 0) {
    for (let i = 0; i < len; i++) {
      const index = Math.floor(Math.random() * radix);
      uuid[i] = chars[index % chars.length];
    }
  } else {
    let r;
    uuid[23] = "-";
    uuid[8] = "-";
    uuid[13] = "-";
    uuid[18] = "-";
    uuid[14] = "4";
    for (let i = 0; i < 36; i++) {
      r = 0 | Math.random() * 16;
      uuid[i] = chars[i == 19 ? r & 3 | 8 : r];
    }
  }
  if (firstU) {
    UTS.arrayShift(uuid);
    return `u${uuid.join("")}`;
  }
  return uuid.join("");
}
function addStyle(customStyle = null, target = "object") {
  if (empty(customStyle) || typeof customStyle === "object" && target === "object" || target === "string" && typeof customStyle === "string") {
    return customStyle;
  }
  if (target === "object") {
    let customStyleStr = UTS.JSON.stringify(customStyle);
    customStyleStr = customStyleStr.trim();
    const styleArray = customStyleStr.split(";");
    const style = new UTSJSONObject(
      {}
      // 历遍数组，拼接成对象
    );
    for (let i = 0; i < styleArray.length; i++) {
      if (styleArray[i] != "") {
        const item = styleArray[i].split(":");
        if (item.length > 1) {
          style[item[0].trim()] = item[1].trim();
        }
      }
    }
    return style;
  }
  let string = "";
  UTSJSONObject.keys(customStyle).forEach((key) => {
    key = key.replace(/([A-Z])/g, "-$1").toLowerCase();
    let val = customStyle[key];
    string += `${key}: ${val};`;
  });
  return string.trim();
}
function addUnit(pvalue = null, punit = "") {
  let value = pvalue;
  if (value == null) {
    value = "";
  } else if (typeof value == "string" && value == "") {
    value = "";
  }
  let unit = punit;
  if (unit == "" || unit == null) {
    unit = config["unit"];
  }
  let valueStr = value.toString();
  return number(valueStr) ? `${valueStr}${unit}` : valueStr;
}
function deepClone(obj) {
  return UTS.JSON.parse(UTS.JSON.stringify(obj));
}
function deepMerge(targetOrigin = new UTSJSONObject({}), source = new UTSJSONObject({})) {
  let targetJson = UTS.JSON.parse(UTS.JSON.stringify(targetOrigin));
  let sourceJson = UTS.JSON.parse(UTS.JSON.stringify(source));
  let target = new UTSJSONObject({});
  target = UTSJSONObject.assign(targetJson, sourceJson);
  return target;
}
function error(err) {
  {
    uni.__f__("error", "at uni_modules/uview-ultra/libs/function/index.uts:321", `uview-plus提示：${err}`);
  }
}
function timeFormat(dateTime = 0, formatStr = "yyyy-mm-dd") {
  let date = null;
  if (dateTime == 0 || dateTime == null) {
    date = /* @__PURE__ */ new Date();
  } else if (/^\d{10}$/.test(dateTime.toString().trim())) {
    date = new Date(parseInt(dateTime.toString()) * 1e3);
  } else if (typeof dateTime === "string" && /^\d+$/.test(dateTime.toString().trim())) {
    date = new Date(parseInt(dateTime.toString()));
  } else {
    date = new Date(typeof dateTime === "string" ? dateTime.toString().replace(/-/g, "/") : dateTime.toString());
  }
  const timeSource = new UTSJSONObject({
    // 'y': date.getFullYear().toString(), // 年
    // 'm': (date.getMonth() as number + 1).toString().padStart(2, '0'), // 月
    // 'd': date.getDate().toString().padStart(2, '0'), // 日
    // 'h': date.getHours().toString().padStart(2, '0'), // 时
    // 's': date.getSeconds().toString().padStart(2, '0') // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  });
  timeSource["y"] = date.getFullYear().toString();
  timeSource["m"] = (date.getMonth() + 1).toString().padStart(2, "0").toString();
  timeSource["d"] = date.getDate().toString().padStart(2, "0").toString();
  timeSource["M"] = date.getMinutes().toString().padStart(2, "0").toString();
  timeSource["h"] = date.getHours().toString().padStart(2, "0").toString();
  timeSource["s"] = date.getSeconds().toString().padStart(2, "0").toString();
  let timeSourceReturn = formatStr;
  for (const key in timeSource) {
    const ret = new RegExp(`${key}+`).exec(formatStr);
    if (ret != null && ret[0] != null) {
      const beginIndex = key === "y" && ret.length == 2 ? 2 : 0;
      if (timeSource[key] != null && key != "") {
        let replaceVal = "";
        let timeSourceKey = timeSource.getString(key);
        if (timeSourceKey != null) {
          replaceVal = timeSourceKey.slice(beginIndex);
        }
        timeSourceReturn = timeSourceReturn.replace(ret[0].toString(), replaceVal);
      }
    }
  }
  return timeSourceReturn;
}
function toast(title = null, duration = 2e3) {
  if (null == title)
    return null;
  uni.showToast({
    title,
    icon: "none",
    duration
  });
}
function type2icon(type = "success", fill = false) {
  if (["primary", "info", "error", "warning", "success"].indexOf(type) == -1) {
    type = "success";
  }
  let iconName = "";
  switch (type) {
    case "primary":
      iconName = "info-circle";
      break;
    case "info":
      iconName = "info-circle";
      break;
    case "error":
      iconName = "close-circle";
      break;
    case "warning":
      iconName = "error-circle";
      break;
    case "success":
      iconName = "checkmark-circle";
      break;
    default:
      iconName = "checkmark-circle";
  }
  if (fill)
    iconName = iconName + "-fill";
  return iconName;
}
function priceFormat(numberOri = null, decimals = 0, decimalPoint = ".", thousandsSeparator = ",") {
  let numberStr = numberOri.toString();
  let numberNo = parseFloat(`${numberStr}`.replace(/[^0-9+-Ee.]/g, ""));
  const n = !isFinite(numberNo) ? 0 : numberNo;
  const prec = !isFinite(decimals) ? 0 : Math.abs(decimals);
  const sep = typeof thousandsSeparator === "undefined" ? "," : thousandsSeparator;
  const dec = typeof decimalPoint === "undefined" ? "." : decimalPoint;
  let s = [];
  if (prec > 0) {
    s = n.toString().split(".");
    s[1] = s[1].slice(0, prec);
  } else {
    s = `${Math.round(n)}`.split(".");
  }
  const re = /(-?\d+)(\d{3})/;
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, `$1${sep}$2`);
  }
  if (s.length > 1) {
    if (s[1].length < prec) {
      s[1] = s[1];
      s[1] += new Array(prec - s[1].length + 1).join("0");
    }
  }
  return s.join(dec);
}
function padZero(value = null) {
  let str = value.toString();
  return `00${str}`.slice(-2);
}
function getProperty(obj = null, key) {
  var _a, _b;
  if (null == obj) {
    return "";
  }
  if (key === "") {
    return "";
  }
  if (key.indexOf(".") != -1) {
    const keys = key.split(".");
    let currentObj = obj;
    for (let i = 0; i < keys.length; i++) {
      const value = (_a = currentObj[keys[i]]) !== null && _a !== void 0 ? _a : "";
      if (i == keys.length - 1) {
        return value;
      }
      if (typeof value != "object") {
        return "";
      }
      currentObj = value;
    }
    return "";
  }
  return (_b = obj[key]) !== null && _b !== void 0 ? _b : new UTSJSONObject({});
}
function setNestedValue(obj = null, keys, index, value = null) {
  if (obj == null) {
    return null;
  }
  const k = keys[index];
  if (index === keys.length - 1) {
    if (UTS.isInstanceOf(obj, Map)) {
      obj.set(k, value);
    } else {
      obj[k] = value;
    }
    return null;
  }
  let nextObj = null;
  if (UTS.isInstanceOf(obj, Map)) {
    nextObj = UTS.mapGet(obj, k);
  } else {
    nextObj = obj[k];
  }
  if (nextObj == null || typeof nextObj !== "object") {
    nextObj = new UTSJSONObject({});
    if (UTS.isInstanceOf(obj, Map)) {
      obj.set(k, nextObj);
    } else {
      obj[k] = nextObj;
    }
  }
  setNestedValue(nextObj, keys, index + 1, value);
}
function setProperty(obj = null, key, value = null) {
  if (obj == null || typeof obj !== "object") {
    return null;
  }
  if (typeof key !== "string" || key === "") {
    return null;
  }
  if (key.indexOf(".") != -1) {
    setNestedValue(obj, key.split("."), 0, value);
  } else {
    if (UTS.isInstanceOf(obj, Map)) {
      obj.set(key, value);
    } else {
      obj[key] = value;
    }
  }
}
function getParentFunc(name = "", instance) {
  let parentTmp = instance.$parent;
  while (parentTmp != null) {
    let pname = null;
    if ((parentTmp === null || parentTmp === void 0 ? null : parentTmp.$options) != null && (parentTmp === null || parentTmp === void 0 ? null : parentTmp.$options.name) != null) {
      pname = parentTmp === null || parentTmp === void 0 ? null : parentTmp.$options.name;
    }
    if (pname == name) {
      break;
    } else {
      parentTmp = parentTmp === null || parentTmp === void 0 ? null : parentTmp.$parent;
    }
  }
  return parentTmp;
}
export {
  addUnit as a,
  addStyle as b,
  bem as c,
  deepMerge as d,
  getWindowInfo as e,
  error as f,
  getPx as g,
  range as h,
  guid as i,
  getProperty as j,
  setProperty as k,
  deepClone as l,
  getParentFunc as m,
  getDeviceInfo as n,
  os as o,
  padZero as p,
  priceFormat as q,
  random as r,
  sleep as s,
  toast as t,
  upGetRect as u,
  timeFormat as v,
  type2icon as w,
  sys as x
};
//# sourceMappingURL=index.js.map
