import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-dayuts/utssdk/interface&";
import { M, Y, W, D, a as DATE, H, b as MIN, S, c as MS, Q } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-dayuts/common/constant&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-dayuts/common/use&";
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
  const special = /* @__PURE__ */ new Map([
    ["M", M],
    ["y", Y],
    ["w", W],
    ["d", D],
    ["D", DATE],
    ["h", H],
    ["m", MIN],
    ["s", S],
    ["ms", MS],
    ["Q", Q]
  ]);
  return special.get(u) ?? `${u}`.toLowerCase().replace(/s$/, "");
}
function monthDiff(a, b) {
  if (a.date() < b.date())
    return -monthDiff(b, a);
  const wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month());
  const anchor = a.clone().add(wholeMonthDiff, M).valueOf();
  const c = b.valueOf() - anchor < 0;
  const anchor2 = a.clone().add(wholeMonthDiff + (c ? -1 : 1), M).valueOf();
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
export {
  padZoneStr as a,
  absFloor as b,
  padStart as c,
  isNumber as i,
  monthDiff as m,
  prettyUnit as p
};
//# sourceMappingURL=utils.js.map
