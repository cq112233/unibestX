import { i as REGEX_ENDWIRHZ, j as REGEX_PARSE, M } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/plugin/dateuts/constant&";
import { D as Dateuts } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/plugin/dateuts/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/plugin/dateuts/type&";
const transform2Num = (val = null) => {
  if (val == null || val == "")
    return 0;
  return parseInt(val);
};
const parseDate = (params = null) => {
  let date = params === null || params === void 0 ? null : params.date;
  if (date == "" || date == null || UTS.isInstanceOf(date, Dateuts))
    return /* @__PURE__ */ new Date();
  if (UTS.isInstanceOf(date, Date))
    return new Date(date.toString());
  if (typeof date == "string" && !REGEX_ENDWIRHZ.test(date)) {
    const d = date.match(REGEX_PARSE);
    if (d != null) {
      const year = transform2Num(d[1]);
      const month = Math.max(transform2Num(d[2]) - 1, 0);
      const day = Math.max(transform2Num(d[3]), 1);
      const hour = transform2Num(d[4]);
      const minutes = transform2Num(d[5]);
      const seconds = transform2Num(d[6]);
      const ms = parseInt(transform2Num(d[7]).toString().substring(0, 3));
      return new Date(year, month, day, hour, minutes, seconds, ms);
    }
  }
  if (typeof date == "number") {
    return new Date(date);
  }
  if (Array.isArray(date)) {
    const newd = date.slice();
    while (newd.length < 7) {
      newd.push(0);
    }
    return new Date(newd[0], newd[1], Math.max(newd[2], 1), newd[3], newd[4], newd[5], newd[6]);
  }
  return new Date(date);
};
const padStart = (str, len, pad) => {
  let s;
  if (typeof str == "number") {
    s = str.toString();
  } else {
    s = str;
  }
  if (s.length >= len)
    return s;
  return s.padStart(len, pad);
};
const getShort = (arr, index) => {
  return arr[index];
};
const getH = (hour, len) => {
  let h = hour % 12;
  h = h == 0 ? 12 : h;
  return padStart(h, len, "0");
};
function monthDiff(a, b) {
  if (a.date() < b.date())
    return -monthDiff(b, a);
  const ayear = a.year();
  const amonth = a.month();
  const byear = b.year();
  const bmonth = b.month();
  const wholeMonthDiff = (byear - ayear) * 12 + (bmonth - amonth);
  const anchor = a.clone().add(wholeMonthDiff, M).valueOf();
  const bvalue = b.valueOf();
  const c = bvalue - anchor < 0;
  const anchor2 = a.clone().add(wholeMonthDiff + (c ? -1 : 1), M).valueOf();
  const diff = (bvalue - anchor) / (c ? anchor - anchor2 : anchor2 - anchor);
  const result = wholeMonthDiff + diff;
  const result2 = -result;
  const absResult = +result2;
  const finalResult = !isNaN(absResult) ? absResult : 0;
  return finalResult;
}
const absFloor = (n) => {
  return n < 0 ? Math.ceil(n) : Math.floor(n);
};
export {
  absFloor as a,
  padStart as b,
  getShort as c,
  getH as g,
  monthDiff as m,
  parseDate as p
};
//# sourceMappingURL=utils.js.map
