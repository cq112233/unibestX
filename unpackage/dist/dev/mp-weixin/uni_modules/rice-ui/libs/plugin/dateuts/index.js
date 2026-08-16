"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_riceUi_libs_plugin_dateuts_utils = require("./utils.js");
const uni_modules_riceUi_libs_plugin_dateuts_locale = require("./locale.js");
const uni_modules_riceUi_libs_plugin_dateuts_constant = require("./constant.js");
const uni_modules_riceUi_libs_plugin_dateuts_type = require("./type.js");
const wrapper = (d) => {
  return dateuts(d);
};
const isDateuts = (d = null) => {
  return common_vendor.UTS.isInstanceOf(d, Dateuts);
};
class Dateuts {
  constructor(params) {
    this.$y = 0;
    this.$M = 0;
    this.$D = 0;
    this.$W = 0;
    this.$H = 0;
    this.$m = 0;
    this.$s = 0;
    this.$ms = 0;
    this.$d = uni_modules_riceUi_libs_plugin_dateuts_utils.parseDate(params);
    this.init();
  }
  init() {
    this.$y = this.$d.getFullYear();
    this.$M = this.$d.getMonth();
    this.$D = this.$d.getDate();
    this.$W = this.$d.getDay();
    this.$H = this.$d.getHours();
    this.$m = this.$d.getMinutes();
    this.$s = this.$d.getSeconds();
    this.$ms = this.$d.getMilliseconds();
  }
  valueOf() {
    return this.$d.getTime();
  }
  unix() {
    return Math.floor(this.valueOf() / 1e3);
  }
  toDate() {
    return new Date(this.valueOf());
  }
  clone() {
    return wrapper(this.$d);
  }
  startOf(unit, flag = true) {
    const isStartOf = flag;
    const instanceFactory = (d, m) => {
      const ins = dateuts(new Date(this.$y, m, d));
      return isStartOf ? ins : ins.endOf(uni_modules_riceUi_libs_plugin_dateuts_constant.D);
    };
    const instanceFactorySet = (method, slice) => {
      const argumentStart = [0, 0, 0, 0];
      const argumentEnd = [23, 59, 59, 999];
      const arg = (isStartOf ? argumentStart : argumentEnd).slice(slice);
      const date = this.toDate();
      if (method == "setHours") {
        date.setHours(arg[0]);
        date.setMinutes(arg[1]);
        date.setSeconds(arg[2]);
        date.setMilliseconds(arg[3]);
      } else if (method == "setMinutes") {
        date.setMinutes(arg[0]);
        date.setSeconds(arg[1]);
        date.setMilliseconds(arg[2]);
      } else if (method == "setSeconds") {
        date.setSeconds(arg[0]);
        date.setMilliseconds(arg[1]);
      } else if (method == "setMilliseconds") {
        date.setMilliseconds(arg[0]);
      }
      return dateuts(date);
    };
    if (unit == uni_modules_riceUi_libs_plugin_dateuts_constant.Y) {
      return isStartOf ? instanceFactory(1, 0) : instanceFactory(31, 11);
    } else if (unit == uni_modules_riceUi_libs_plugin_dateuts_constant.M) {
      return isStartOf ? instanceFactory(1, this.$M) : instanceFactory(0, this.$M + 1);
    } else if (unit == uni_modules_riceUi_libs_plugin_dateuts_constant.Q) {
      const quarter = this.quarter() - 1;
      return isStartOf ? this.month(quarter * 3).startOf(uni_modules_riceUi_libs_plugin_dateuts_constant.M).startOf(uni_modules_riceUi_libs_plugin_dateuts_constant.D) : this.month(quarter * 3 + 2).endOf(uni_modules_riceUi_libs_plugin_dateuts_constant.M).endOf(uni_modules_riceUi_libs_plugin_dateuts_constant.D);
    } else if (unit == uni_modules_riceUi_libs_plugin_dateuts_constant.W) {
      const weekStart = uni_modules_riceUi_libs_plugin_dateuts_locale.local.weekStart;
      const gap = (this.$W < weekStart ? this.$W + 7 : this.$W) - weekStart;
      return instanceFactory(isStartOf ? this.$D - gap : this.$D + (6 - gap), this.$M);
    } else if (unit == uni_modules_riceUi_libs_plugin_dateuts_constant.D || unit == uni_modules_riceUi_libs_plugin_dateuts_constant.DATE) {
      return instanceFactorySet("setHours", 0);
    } else if (unit == uni_modules_riceUi_libs_plugin_dateuts_constant.H) {
      return instanceFactorySet("setMinutes", 1);
    } else if (unit == uni_modules_riceUi_libs_plugin_dateuts_constant.MIN) {
      return instanceFactorySet("setSeconds", 2);
    } else if (unit == uni_modules_riceUi_libs_plugin_dateuts_constant.S) {
      return instanceFactorySet("setMilliseconds", 3);
    }
    return this.clone();
  }
  endOf(unit) {
    return this.startOf(unit, false);
  }
  daysInMonth() {
    return this.endOf(uni_modules_riceUi_libs_plugin_dateuts_constant.M).$D;
  }
  isValid() {
    return !(this.$d.toString() == uni_modules_riceUi_libs_plugin_dateuts_constant.INVALID_DATE_STRING);
  }
  format(formatStr) {
    const matches = (match) => {
      switch (match) {
        case "YY":
          return this.$y.toString().slice(-2);
        case "YYYY":
          return this.$y.toString();
        case "M":
          return (this.$M + 1).toString();
        case "MM":
          return uni_modules_riceUi_libs_plugin_dateuts_utils.padStart(this.$M + 1, 2, "0");
        case "MMM":
          return uni_modules_riceUi_libs_plugin_dateuts_utils.getShort(uni_modules_riceUi_libs_plugin_dateuts_locale.local.monthsShort, this.$M);
        case "MMMM":
          return uni_modules_riceUi_libs_plugin_dateuts_utils.getShort(uni_modules_riceUi_libs_plugin_dateuts_locale.local.months, this.$M);
        case "D":
          return this.$D.toString();
        case "DD":
          return uni_modules_riceUi_libs_plugin_dateuts_utils.padStart(this.$D, 2, "0");
        case "d":
          return this.$W.toString();
        case "dd":
          return uni_modules_riceUi_libs_plugin_dateuts_utils.getShort(uni_modules_riceUi_libs_plugin_dateuts_locale.local.weekdaysMin, this.$W);
        case "ddd":
          return uni_modules_riceUi_libs_plugin_dateuts_utils.getShort(uni_modules_riceUi_libs_plugin_dateuts_locale.local.weekdaysShort, this.$W);
        case "dddd":
          return uni_modules_riceUi_libs_plugin_dateuts_utils.getShort(uni_modules_riceUi_libs_plugin_dateuts_locale.local.weekdays, this.$W);
        case "H":
          return this.$H.toString();
        case "HH":
          return uni_modules_riceUi_libs_plugin_dateuts_utils.padStart(this.$H, 2, "0");
        case "h":
          return uni_modules_riceUi_libs_plugin_dateuts_utils.getH(this.$H, 1);
        case "hh":
          return uni_modules_riceUi_libs_plugin_dateuts_utils.getH(this.$H, 2);
        case "m":
          return this.$m.toString();
        case "mm":
          return uni_modules_riceUi_libs_plugin_dateuts_utils.padStart(this.$m, 2, "0");
        case "s":
          return this.$s.toString();
        case "ss":
          return uni_modules_riceUi_libs_plugin_dateuts_utils.padStart(this.$s, 2, "0");
        case "SSS":
          return uni_modules_riceUi_libs_plugin_dateuts_utils.padStart(this.$ms, 3, "0");
      }
      return "";
    };
    return formatStr.replace(uni_modules_riceUi_libs_plugin_dateuts_constant.REGEX_FORMAT, (match, p1 = null, offset, str) => {
      if (p1 == null) {
        return matches(match);
      }
      return p1;
    });
  }
  utcOffset() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }
  $set(unit, num) {
    const arg = unit == uni_modules_riceUi_libs_plugin_dateuts_constant.D ? this.$D + (num - this.$W) : num;
    const setDate = (date, unit2, val) => {
      if (unit2 == uni_modules_riceUi_libs_plugin_dateuts_constant.D || unit2 == uni_modules_riceUi_libs_plugin_dateuts_constant.DATE) {
        date.$d.setDate(val);
      } else if (unit2 == uni_modules_riceUi_libs_plugin_dateuts_constant.Y) {
        date.$d.setFullYear(val);
      } else if (unit2 == uni_modules_riceUi_libs_plugin_dateuts_constant.M) {
        date.$d.setMonth(val);
      } else if (unit2 == uni_modules_riceUi_libs_plugin_dateuts_constant.H) {
        date.$d.setHours(val);
      } else if (unit2 == uni_modules_riceUi_libs_plugin_dateuts_constant.MIN) {
        date.$d.setMinutes(val);
      } else if (unit2 == uni_modules_riceUi_libs_plugin_dateuts_constant.S) {
        date.$d.setSeconds(val);
      } else if (unit2 == uni_modules_riceUi_libs_plugin_dateuts_constant.MS) {
        date.$d.setMilliseconds(val);
      }
    };
    if (unit == uni_modules_riceUi_libs_plugin_dateuts_constant.M || unit == uni_modules_riceUi_libs_plugin_dateuts_constant.Y) {
      const date = this.clone().set(uni_modules_riceUi_libs_plugin_dateuts_constant.DATE, 1);
      setDate(date, unit, arg);
      date.init();
      this.$d = date.set(uni_modules_riceUi_libs_plugin_dateuts_constant.DATE, Math.min(this.$D, date.daysInMonth())).$d;
    } else {
      setDate(this, unit, arg);
    }
    this.init();
    return this;
  }
  set(str, value) {
    return this.clone().$set(str, value);
  }
  get(unit) {
    if (unit == uni_modules_riceUi_libs_plugin_dateuts_constant.Y) {
      return this.year();
    }
    if (unit == uni_modules_riceUi_libs_plugin_dateuts_constant.M) {
      return this.month();
    }
    if (unit == uni_modules_riceUi_libs_plugin_dateuts_constant.Q) {
      return this.quarter();
    }
    if (unit == uni_modules_riceUi_libs_plugin_dateuts_constant.D || unit == uni_modules_riceUi_libs_plugin_dateuts_constant.W) {
      return this.day();
    }
    if (unit == uni_modules_riceUi_libs_plugin_dateuts_constant.DATE) {
      return this.date();
    }
    if (unit == uni_modules_riceUi_libs_plugin_dateuts_constant.H) {
      return this.hour();
    }
    if (unit == uni_modules_riceUi_libs_plugin_dateuts_constant.MIN) {
      return this.minute();
    }
    if (unit == uni_modules_riceUi_libs_plugin_dateuts_constant.S) {
      return this.second();
    }
    if (unit == uni_modules_riceUi_libs_plugin_dateuts_constant.MS) {
      return this.millisecond();
    }
    return 0;
  }
  year(input = null) {
    if (input == null)
      return this.$y;
    return this.set(uni_modules_riceUi_libs_plugin_dateuts_constant.Y, input);
  }
  month(input = null) {
    if (input == null)
      return this.$M;
    return this.set(uni_modules_riceUi_libs_plugin_dateuts_constant.M, input);
  }
  quarter(input = null) {
    const m = this.month();
    if (input == null)
      return Math.ceil((m + 1) / 3);
    const arg = m % 3 + (input - 1) * 3;
    return this.month(arg);
  }
  day(input = null) {
    if (input == null)
      return this.$W;
    return this.set(uni_modules_riceUi_libs_plugin_dateuts_constant.D, input);
  }
  date(input = null) {
    if (input == null)
      return this.$D;
    return this.set(uni_modules_riceUi_libs_plugin_dateuts_constant.DATE, input);
  }
  hour(input = null) {
    if (input == null)
      return this.$H;
    return this.set(uni_modules_riceUi_libs_plugin_dateuts_constant.H, input);
  }
  minute(input = null) {
    if (input == null)
      return this.$m;
    return this.set(uni_modules_riceUi_libs_plugin_dateuts_constant.MIN, input);
  }
  second(input = null) {
    if (input == null)
      return this.$s;
    return this.set(uni_modules_riceUi_libs_plugin_dateuts_constant.S, input);
  }
  millisecond(input = null) {
    if (input == null)
      return this.$ms;
    return this.set(uni_modules_riceUi_libs_plugin_dateuts_constant.MS, input);
  }
  add(num, unit) {
    var _a;
    const instanceFactorySet = (n) => {
      const d = dateuts(this);
      const ddate = d.date();
      return wrapper(d.date(ddate + Math.round(n * num)));
    };
    if (unit == uni_modules_riceUi_libs_plugin_dateuts_constant.Y) {
      return this.set(uni_modules_riceUi_libs_plugin_dateuts_constant.Y, this.$y + num);
    }
    if (unit == uni_modules_riceUi_libs_plugin_dateuts_constant.M) {
      return this.set(uni_modules_riceUi_libs_plugin_dateuts_constant.M, this.$M + num);
    }
    if (unit == uni_modules_riceUi_libs_plugin_dateuts_constant.Q) {
      return this.add(num * 3, uni_modules_riceUi_libs_plugin_dateuts_constant.M);
    }
    if (unit == uni_modules_riceUi_libs_plugin_dateuts_constant.D) {
      return instanceFactorySet(1);
    }
    if (unit == uni_modules_riceUi_libs_plugin_dateuts_constant.W) {
      return instanceFactorySet(7);
    }
    const stepMap = /* @__PURE__ */ new Map([
      [uni_modules_riceUi_libs_plugin_dateuts_constant.MIN, uni_modules_riceUi_libs_plugin_dateuts_constant.MILLISECONDS_A_MINUTE],
      [uni_modules_riceUi_libs_plugin_dateuts_constant.H, uni_modules_riceUi_libs_plugin_dateuts_constant.MILLISECONDS_A_HOUR],
      [uni_modules_riceUi_libs_plugin_dateuts_constant.S, uni_modules_riceUi_libs_plugin_dateuts_constant.MILLISECONDS_A_SECOND]
    ]);
    const step = (_a = common_vendor.UTS.mapGet(stepMap, unit)) !== null && _a !== void 0 ? _a : 1;
    const nextTimeStamp = this.$d.getTime() + num * step;
    return wrapper(nextTimeStamp);
  }
  subtract(num, unit) {
    return this.add(num * -1, unit);
  }
  diff(input, unit = "millisecond", float = false) {
    const that = dateuts(input);
    const zoneDelta = (that.utcOffset() - this.utcOffset()) * uni_modules_riceUi_libs_plugin_dateuts_constant.MILLISECONDS_A_MINUTE;
    const diff = this.valueOf() - that.valueOf();
    const getMonth = () => {
      return uni_modules_riceUi_libs_plugin_dateuts_utils.monthDiff(this, that);
    };
    let result;
    switch (unit) {
      case uni_modules_riceUi_libs_plugin_dateuts_constant.Y:
        result = getMonth() / 12;
        break;
      case uni_modules_riceUi_libs_plugin_dateuts_constant.M:
        result = getMonth();
        break;
      case uni_modules_riceUi_libs_plugin_dateuts_constant.Q:
        result = getMonth() / 3;
        break;
      case uni_modules_riceUi_libs_plugin_dateuts_constant.W:
        result = (diff - zoneDelta) / uni_modules_riceUi_libs_plugin_dateuts_constant.MILLISECONDS_A_WEEK;
        break;
      case uni_modules_riceUi_libs_plugin_dateuts_constant.D:
        result = (diff - zoneDelta) / uni_modules_riceUi_libs_plugin_dateuts_constant.MILLISECONDS_A_DAY;
        break;
      case uni_modules_riceUi_libs_plugin_dateuts_constant.H:
        result = diff / uni_modules_riceUi_libs_plugin_dateuts_constant.MILLISECONDS_A_HOUR;
        break;
      case uni_modules_riceUi_libs_plugin_dateuts_constant.MIN:
        result = diff / uni_modules_riceUi_libs_plugin_dateuts_constant.MILLISECONDS_A_MINUTE;
        break;
      case uni_modules_riceUi_libs_plugin_dateuts_constant.S:
        result = diff / uni_modules_riceUi_libs_plugin_dateuts_constant.MILLISECONDS_A_SECOND;
        break;
      default:
        result = diff;
        break;
    }
    return float ? result : uni_modules_riceUi_libs_plugin_dateuts_utils.absFloor(result);
  }
  toArray() {
    return [
      this.$y,
      this.$M,
      this.$D,
      this.$H,
      this.$m,
      this.$s,
      this.$ms
    ];
  }
  toObject() {
    return new uni_modules_riceUi_libs_plugin_dateuts_type.DateObject({
      year: this.$y,
      month: this.$M,
      date: this.$D,
      hours: this.$H,
      minutes: this.$m,
      seconds: this.$s,
      milliseconds: this.$ms
    });
  }
  isBefore(date = "", unit = "millisecond") {
    return this.endOf(unit).valueOf() < dateuts(date).valueOf();
  }
  isSame(date = "", unit = "millisecond") {
    const other = dateuts(date).valueOf();
    return this.startOf(unit).valueOf() <= other && other <= this.endOf(unit).valueOf();
  }
  isAfter(date = "", unit = "millisecond") {
    return dateuts(date).valueOf() < this.startOf(unit).valueOf();
  }
  isSameOrBefore(date = "", unit = "millisecond") {
    return this.isSame(date, unit) || this.isBefore(date, unit);
  }
  isSameOrAfter(date = "", unit = "millisecond") {
    return this.isSame(date, unit) || this.isAfter(date, unit);
  }
  isBetween(date1 = "", date2 = "", unit = "millisecond", i = "()") {
    const dA = dateuts(date1);
    const dB = dateuts(date2);
    let str = i.length == 2 ? i : "()";
    const dAi = str.startsWith("(");
    const dBi = str.endsWith(")");
    return (dAi ? this.isAfter(dA, unit) : !this.isBefore(dA, unit)) && // @ts-ignore
    (dBi ? this.isBefore(dB, unit) : !this.isAfter(dB, unit)) || (dAi ? this.isBefore(dA, unit) : !this.isAfter(dA, unit)) && // @ts-ignore
    (dBi ? this.isAfter(dB, unit) : !this.isBefore(dB, unit));
  }
  isLeapYear() {
    return this.$y % 4 == 0 && this.$y % 100 != 0 || this.$y % 400 == 0;
  }
}
function dateuts(date = "", customFormat = "") {
  if (isDateuts(date)) {
    return date.clone();
  }
  const params = new uni_modules_riceUi_libs_plugin_dateuts_type.DateParams({
    date,
    customFormat
  });
  return new Dateuts(params);
}
exports.Dateuts = Dateuts;
exports.dateuts = dateuts;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/libs/plugin/dateuts/index.js.map
