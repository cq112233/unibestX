import { n as number, e as empty } from "./test.js";
import "./digit.js";
import { c as config } from "../config/config.js";
function upGetRect(selector, all = false, comp = null) {
  return new Promise((resolve) => {
    try {
      const query = uni.createSelectorQuery();
      const queryIn = comp != null ? query.in(comp) : query;
      if (all == true) {
        queryIn.selectAll(selector).boundingClientRect((res = null) => {
          if (res != null && Array.isArray(res)) {
            const arr = res;
            resolve(arr.length > 0 ? arr[0] : {});
          } else if (res != null) {
            resolve(res);
          } else {
            resolve({});
          }
        }).exec();
      } else {
        queryIn.select(selector).boundingClientRect((res = null) => {
          if (res != null && Array.isArray(res)) {
            const arr = res;
            resolve(arr.length > 0 ? arr[0] : {});
          } else if (res != null) {
            resolve(res);
          } else {
            resolve({});
          }
        }).exec();
      }
    } catch (_e) {
      resolve({});
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
function getWindowInfo() {
  return uni.getWindowInfo();
}
function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    const gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  }
  return 0;
}
function addStyle(customStyle = null, target = "object") {
  if (empty(customStyle)) {
    return target === "object" ? new UTSJSONObject({}) : "";
  }
  if (typeof customStyle === "object" && target === "object" || target === "string" && typeof customStyle === "string") {
    return customStyle;
  }
  if (target === "object") {
    let customStyleStr = typeof customStyle === "string" ? customStyle : UTS.JSON.stringify(customStyle);
    customStyleStr = customStyleStr.trim();
    if (customStyleStr.startsWith('"') && customStyleStr.endsWith('"')) {
      customStyleStr = customStyleStr.substring(1, customStyleStr.length - 1);
    }
    const styleArray = customStyleStr.split(";");
    const style = new UTSJSONObject({});
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
  if (typeof customStyle === "object" && customStyle != null) {
    UTSJSONObject.keys(customStyle).forEach((key) => {
      key = key.replace(/([A-Z])/g, "-$1").toLowerCase();
      let val = customStyle[key];
      string += `${key}: ${val};`;
    });
  }
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
    uni.__f__("error", "at uni_modules/uview-ultra/libs/function/index.uts:361", `uview-plus提示：${err}`);
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
  addStyle as a,
  addUnit as b,
  bem as c,
  deepMerge as d,
  error as e,
  getParentFunc as f,
  getPx as g,
  getWindowInfo as h,
  type2icon as i,
  deepClone as j,
  toast as k,
  priceFormat as p,
  random as r,
  sleep as s,
  timeFormat as t,
  upGetRect as u
};
//# sourceMappingURL=index.js.map
