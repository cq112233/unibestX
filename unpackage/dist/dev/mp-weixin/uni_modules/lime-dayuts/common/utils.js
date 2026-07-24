"use strict";
require("../utssdk/interface.js");
const uni_modules_limeDayuts_common_constant = require("./constant.js");
require("./use.js");
function padStart(string, length, pad) {
  const str = string;
  if (str.length >= length)
    return str;
  return str.padStart(length, pad);
}
function padZoneStr(instance) {
  const negMinutes = -instance.utcOffset();
  const minutes = Math.abs(negMinutes);
  const hourOffset = Math.floor(minutes / 60);
  const minuteOffset = minutes % 60;
  return `${negMinutes <= 0 ? "+" : "-"}${padStart(hourOffset.toString(), 2, "0")}:${padStart(minuteOffset.toString(), 2, "0")}`;
}
function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}
function prettyUnit(u) {
  var _a;
  const special = /* @__PURE__ */ new Map([
    ["M", uni_modules_limeDayuts_common_constant.M],
    ["y", uni_modules_limeDayuts_common_constant.Y],
    ["w", uni_modules_limeDayuts_common_constant.W],
    ["d", uni_modules_limeDayuts_common_constant.D],
    ["D", uni_modules_limeDayuts_common_constant.DATE],
    ["h", uni_modules_limeDayuts_common_constant.H],
    ["m", uni_modules_limeDayuts_common_constant.MIN],
    ["s", uni_modules_limeDayuts_common_constant.S],
    ["ms", uni_modules_limeDayuts_common_constant.MS],
    ["Q", uni_modules_limeDayuts_common_constant.Q]
  ]);
  return (_a = special.get(u)) !== null && _a !== void 0 ? _a : `${u}`.toLowerCase().replace(/s$/, "");
}
function monthDiff(a, b) {
  if (a.date() < b.date())
    return -monthDiff(b, a);
  const wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month());
  const anchor = a.clone().add(wholeMonthDiff, uni_modules_limeDayuts_common_constant.M).valueOf();
  const c = b.valueOf() - anchor < 0;
  const anchor2 = a.clone().add(wholeMonthDiff + (c ? -1 : 1), uni_modules_limeDayuts_common_constant.M).valueOf();
  const decimalMonthDiff = (b.valueOf() - anchor) / (c ? anchor - anchor2 : anchor2 - anchor);
  const result = wholeMonthDiff + decimalMonthDiff;
  const negatedResult = -result;
  const absResult = +negatedResult;
  const finalResult = !isNaN(absResult) ? absResult : 0;
  return finalResult;
}
function absFloor(n) {
  return n < 0 ? Math.max(Math.ceil(n), 0) : Math.floor(n);
}
exports.absFloor = absFloor;
exports.isNumber = isNumber;
exports.monthDiff = monthDiff;
exports.padStart = padStart;
exports.padZoneStr = padZoneStr;
exports.prettyUnit = prettyUnit;
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uni_modules/lime-dayuts/common/utils.js.map
