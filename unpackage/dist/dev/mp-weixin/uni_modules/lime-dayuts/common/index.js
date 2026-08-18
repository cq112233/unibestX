"use strict";
require("../utssdk/interface.js");
const uni_modules_limeDayuts_common_constant = require("./constant.js");
const uni_modules_limeDayuts_common_utils = require("./utils.js");
const uni_modules_limeDayuts_common_use = require("./use.js");
function parseLocale(preset, object = null, isLocal = false) {
  let l = null;
  if (preset == null)
    return uni_modules_limeDayuts_common_use.dayutsIntl.locale;
  if (typeof preset == "string") {
    const presetLower = preset.toLowerCase();
    if (uni_modules_limeDayuts_common_use.dayutsIntl.has(presetLower)) {
      l = presetLower;
    }
    if (object != null) {
      uni_modules_limeDayuts_common_use.dayutsIntl.set(presetLower, object);
      l = presetLower;
    }
    const presetSplit = preset.split("-");
    if (l == null && presetSplit.length > 1) {
      return parseLocale(presetSplit[0]);
    }
  } else if (preset instanceof DayutsLocale) {
    uni_modules_limeDayuts_common_use.dayutsIntl.set(preset.name, preset);
    l = preset.name;
  }
  if (!isLocal && l != null) {
    uni_modules_limeDayuts_common_use.dayutsIntl.locale = l;
  }
  return l !== null && l !== void 0 ? l : uni_modules_limeDayuts_common_use.dayutsIntl.locale;
}
function tryParseNumberAtIndex(digits, index) {
  if (index >= 0 && index < digits.length) {
    if (digits[index] == null)
      return null;
    const parsedNumber = uni_modules_limeDayuts_common_utils.isNumber(digits[index]) ? digits[index] : parseInt(`${digits[index]}`, 10);
    if (!isNaN(parsedNumber)) {
      return parsedNumber;
    }
  }
  return null;
}
function createDateFromArray(d, offset = 0) {
  var _a, _b, _c, _e, _f, _g, _h;
  const year = (_a = tryParseNumberAtIndex(d, 1 - offset)) !== null && _a !== void 0 ? _a : (/* @__PURE__ */ new Date()).getFullYear();
  const month = ((_b = tryParseNumberAtIndex(d, 2 - offset)) !== null && _b !== void 0 ? _b : 1) - 1;
  const day = (_c = tryParseNumberAtIndex(d, 3 - offset)) !== null && _c !== void 0 ? _c : 1;
  const hour = (_e = tryParseNumberAtIndex(d, 4 - offset)) !== null && _e !== void 0 ? _e : 0;
  const minute = (_f = tryParseNumberAtIndex(d, 5 - offset)) !== null && _f !== void 0 ? _f : 0;
  const second = (_g = tryParseNumberAtIndex(d, 6 - offset)) !== null && _g !== void 0 ? _g : 0;
  const millisecond = ((_h = tryParseNumberAtIndex(d, 7 - offset)) !== null && _h !== void 0 ? _h : 0).toString().substring(0, 3);
  return new Date(year, month, day, hour, minute, second, parseInt(millisecond));
}
function parseDate(cfg) {
  const date = cfg.date;
  if (date == null)
    return /* @__PURE__ */ new Date();
  if (date instanceof Date)
    return date;
  try {
    if (typeof date == "string" && !/Z$/i.test(date)) {
      const d = date.match(uni_modules_limeDayuts_common_constant.REGEX_PARSE);
      const isNull = d == null;
      if (!isNull) {
        return createDateFromArray(d);
      }
    }
    if (typeof date == "string")
      return new Date(date);
    if (Array.isArray(date)) {
      return createDateFromArray(date, 1);
    }
    if (uni_modules_limeDayuts_common_utils.isNumber(date))
      return new Date(date);
    return null;
  } catch (err) {
    return null;
  }
}
function wrapper(date, instance) {
  return dayuts(date, instance.$L);
}
class Dayuts {
  constructor(cfg) {
    var _a;
    this.valid = true;
    this.$d = /* @__PURE__ */ new Date();
    this.$y = 0;
    this.$M = 0;
    this.$D = 0;
    this.$W = 0;
    this.$H = 0;
    this.$m = 0;
    this.$s = 0;
    this.$ms = 0;
    this.$u = false;
    this.$L = (_a = parseLocale(cfg.locale)) !== null && _a !== void 0 ? _a : uni_modules_limeDayuts_common_use.dayutsIntl.locale;
    this.parse(cfg);
  }
  parse(cfg) {
    const _d = parseDate(cfg);
    if (_d != null) {
      this.$d = parseDate(cfg);
      this.init();
    } else {
      this.valid = false;
    }
  }
  init() {
    const $d = this.$d;
    this.$y = $d.getFullYear();
    this.$M = $d.getMonth();
    this.$D = $d.getDate();
    this.$W = $d.getDay();
    this.$H = $d.getHours();
    this.$m = $d.getMinutes();
    this.$s = $d.getSeconds();
    this.$ms = $d.getMilliseconds();
  }
  /**
   * 检查日期对象是否有效。
   *
   * @returns {boolean} 如果日期对象有效，则返回true；否则返回false。
   */
  isValid() {
    return this.valid;
  }
  isSame(input, units = "millisecond") {
    const other = input instanceof Dayuts ? input : dayuts(input);
    const date1 = this.startOf(units).valueOf();
    const date2 = other.valueOf();
    const date3 = this.endOf(units).valueOf();
    return date1 <= date2 && date2 <= date3;
  }
  isAfter(input, units = "millisecond") {
    const other = input instanceof Dayuts ? input : dayuts(input);
    const date1 = other.valueOf();
    const date2 = this.startOf(units).valueOf();
    return date1 < date2;
  }
  isBefore(input, units = "millisecond") {
    const other = input instanceof Dayuts ? input : dayuts(input);
    const date1 = other.valueOf();
    const date2 = this.endOf(units).valueOf();
    return date2 < date1;
  }
  isSameOrBefore(input, units = "millisecond") {
    return this.isSame(input, units) || this.isBefore(input, units);
  }
  isSameOrAfter(input, units = "millisecond") {
    return this.isSame(input, units) || this.isAfter(input, units);
  }
  /**
   * 判断当前Dayuts对象是否在给定的两个时间之间
   * @param {any} input - 第一个时间输入
   * @param {any} input2 - 第二个时间输入
   * @param {DayutsUnit} units - 指定的时间单位
   * @param {string} interval - 区间符号，表示区间的开闭性，默认为'()'，表示开区间
   * @returns {boolean} - 如果当前Dayuts对象在给定的两个时间之间，则返回true，否则返回false
   */
  isBetween(input, input2, units = "millisecond", interval = "()") {
    const dA = dayuts(input);
    const dB = dayuts(input2);
    const dAi = interval.startsWith("(");
    const dBi = interval.endsWith(")");
    return (dAi ? this.isAfter(dA, units) : !this.isBefore(dA, units)) && (dBi ? this.isBefore(dB, units) : !this.isAfter(dB, units)) || (dAi ? this.isBefore(dA, units) : !this.isAfter(dA, units)) && (dBi ? this.isAfter(dB, units) : !this.isBefore(dB, units));
  }
  /**
   * 判断当前Dayuts对象所在的年份是否为闰年
   * @returns {boolean} - 如果当前Dayuts对象所在的年份是闰年，则返回true，否则返回false
   */
  isLeapYear() {
    return this.$y % 4 == 0 && this.$y % 100 != 0 || this.$y % 400 == 0;
  }
  isToday() {
    const comparisonTemplate = "YYYY-MM-DD";
    const now = dayuts();
    return this.format(comparisonTemplate) == now.format(comparisonTemplate);
  }
  /**
   * 获取当前 `dayuts` 对象的 Unix 时间戳（以秒为单位）。
   *
   * @returns {number} 返回当前 `dayuts` 对象的 Unix 时间戳（以秒为单位）。
   */
  unix() {
    return Math.floor(this.valueOf() / 1e3);
  }
  /**
   * 将当前日期设置为指定时间单位的开始或结束。
   *
   * @param {string} units - 时间单位，例如'year'、'month'、'day'等。
   * @param {boolean} startOf - 如果为true，则设置为开始；如果为false，则设置为结束。
   * @returns {Dayuts} 返回一个新的Dayuts对象，表示调整后的日期。
   */
  startOf(units, startOf = true) {
    var _a;
    const isStartOf = startOf;
    const unit = uni_modules_limeDayuts_common_utils.prettyUnit(units);
    const instanceFactory = (d, m) => {
      const ins = dayuts(new Date(this.$y, m, d));
      return isStartOf ? ins : ins.endOf(uni_modules_limeDayuts_common_constant.D);
    };
    const instanceFactorySet = (method, slice) => {
      const argumentStart = [0, 0, 0, 0];
      const argumentEnd = [23, 59, 59, 999];
      const args = (isStartOf ? argumentStart : argumentEnd).slice(slice);
      const date = this.toDate();
      if (method == "setHours") {
        date.setHours(args[0]);
        date.setMinutes(args[1]);
        date.setSeconds(args[2]);
        date.setMilliseconds(args[3]);
      } else if (method == "setMinutes") {
        date.setMinutes(args[0]);
        date.setSeconds(args[1]);
        date.setMilliseconds(args[2]);
      } else if (method == "setSeconds") {
        date.setSeconds(args[0]);
        date.setMilliseconds(args[1]);
      } else if (method == "setMilliseconds") {
        date.setMilliseconds(args[0]);
      }
      return dayuts(date);
    };
    const _b = this, $W = _b.$W, $M = _b.$M, $D = _b.$D;
    const utcPad = `set${this.$u ? "UTC" : ""}`;
    if (unit == uni_modules_limeDayuts_common_constant.Y) {
      return isStartOf ? instanceFactory(1, 0) : instanceFactory(31, 11);
    } else if (unit == uni_modules_limeDayuts_common_constant.M) {
      return isStartOf ? instanceFactory(1, $M) : instanceFactory(0, $M + 1);
    } else if (unit == uni_modules_limeDayuts_common_constant.W) {
      const weekStart = (_a = this.$locale().weekStart) !== null && _a !== void 0 ? _a : 0;
      const gap = ($W < weekStart ? $W + 7 : $W) - weekStart;
      return instanceFactory(isStartOf ? $D - gap : $D + (6 - gap), $M);
    } else if (unit == uni_modules_limeDayuts_common_constant.D || unit == uni_modules_limeDayuts_common_constant.DATE) {
      return instanceFactorySet(`${utcPad}Hours`, 0);
    } else if (unit == uni_modules_limeDayuts_common_constant.H) {
      return instanceFactorySet(`${utcPad}Minutes`, 1);
    } else if (unit == uni_modules_limeDayuts_common_constant.MIN) {
      return instanceFactorySet(`${utcPad}Seconds`, 2);
    } else if (unit == uni_modules_limeDayuts_common_constant.S) {
      return instanceFactorySet(`${utcPad}Milliseconds`, 3);
    } else {
      return this.clone();
    }
  }
  /**
   * 将当前日期设置为指定时间单位的结束。
   *
   * @param {string} arg - 时间单位，例如'year'、'month'、'day'等。
   * @returns {Dayuts} 返回一个新的Dayuts对象，表示调整后的日期。
   */
  endOf(units) {
    return this.startOf(units, false);
  }
  /**
   * 设置指定的时间单位的值。
   *
   * @param {string} units - 要设置的时间单位（如 "year"、"month"、"day" 等）。
   * @param {number} int - 要设置的值。
   * @returns {Dayuts} 返回当前对象。
   */
  $set(units, int) {
    const unit = uni_modules_limeDayuts_common_utils.prettyUnit(units);
    const arg = unit == uni_modules_limeDayuts_common_constant.D ? this.$D + (int - this.$W) : int;
    const setDateUnit = (date, unit2, arg2) => {
      if (unit2 == uni_modules_limeDayuts_common_constant.D || unit2 == uni_modules_limeDayuts_common_constant.DATE) {
        date.$d.setDate(arg2);
      } else if (unit2 == uni_modules_limeDayuts_common_constant.M) {
        date.$d.setMonth(arg2);
      } else if (unit2 == uni_modules_limeDayuts_common_constant.Y) {
        date.$d.setFullYear(arg2);
      } else if (unit2 == uni_modules_limeDayuts_common_constant.H) {
        date.$d.setHours(arg2);
      } else if (unit2 == uni_modules_limeDayuts_common_constant.MIN) {
        date.$d.setMinutes(arg2);
      } else if (unit2 == uni_modules_limeDayuts_common_constant.S) {
        date.$d.setSeconds(arg2);
      } else if (unit2 == uni_modules_limeDayuts_common_constant.MS) {
        date.$d.setMilliseconds(arg2);
      }
    };
    if (unit == uni_modules_limeDayuts_common_constant.M || unit == uni_modules_limeDayuts_common_constant.Y) {
      const date = this.clone().set(uni_modules_limeDayuts_common_constant.DATE, 1);
      setDateUnit(date, unit, arg);
      date.init();
      this.$d = date.set(uni_modules_limeDayuts_common_constant.DATE, Math.min(this.$D, date.daysInMonth())).$d;
    } else {
      setDateUnit(this, unit, arg);
    }
    this.init();
    return this;
  }
  /**
   * 创建一个当前对象的副本，并设置指定的时间单位的值。
   *
   * @param {string} string - 要设置的时间单位（如 "year"、"month"、"day" 等）。
   * @param {number} int - 要设置的值。
   * @returns {Dayuts} 返回一个新的 `dayuts` 对象，其值为当前对象的副本，并设置了指定的时间单位的值。
   */
  set(string, int) {
    return this.clone().$set(string, int);
  }
  /**
   * 获取当前 `dayuts` 对象的指定时间单位的值。
   *
   * @param {string} units - 要获取的时间单位（如 "year"、"month"、"day" 等）。
   * @returns {number} 返回当前 `dayuts` 对象的指定时间单位的值。
   */
  get(units) {
    const unit = uni_modules_limeDayuts_common_utils.prettyUnit(units);
    if (unit == uni_modules_limeDayuts_common_constant.D) {
      return this.day();
    } else if (unit == uni_modules_limeDayuts_common_constant.DATE) {
      return this.date();
    } else if (unit == uni_modules_limeDayuts_common_constant.M) {
      return this.month();
    } else if (unit == uni_modules_limeDayuts_common_constant.Y) {
      return this.year();
    } else if (unit == uni_modules_limeDayuts_common_constant.H) {
      return this.hour();
    } else if (unit == uni_modules_limeDayuts_common_constant.MIN) {
      return this.minute();
    } else if (unit == uni_modules_limeDayuts_common_constant.S) {
      return this.second();
    } else if (unit == uni_modules_limeDayuts_common_constant.MS) {
      return this.millisecond();
    }
    return 0;
  }
  year(input = null) {
    if (input == null)
      return this.$y;
    return this.set(uni_modules_limeDayuts_common_constant.Y, input);
  }
  month(input = null) {
    if (input == null)
      return this.$M;
    return this.set(uni_modules_limeDayuts_common_constant.M, input);
  }
  day(input = null) {
    if (input == null)
      return this.$W;
    return this.set(uni_modules_limeDayuts_common_constant.D, input);
  }
  date(input = null) {
    if (input == null)
      return this.$D;
    return this.set(uni_modules_limeDayuts_common_constant.DATE, input);
  }
  hour(input = null) {
    if (input == null)
      return this.$H;
    return this.set(uni_modules_limeDayuts_common_constant.H, input);
  }
  minute(input = null) {
    if (input == null)
      return this.$m;
    return this.set(uni_modules_limeDayuts_common_constant.MIN, input);
  }
  second(input = null) {
    if (input == null)
      return this.$s;
    return this.set(uni_modules_limeDayuts_common_constant.S, input);
  }
  millisecond(input = null) {
    if (input == null)
      return this.$ms;
    return this.set(uni_modules_limeDayuts_common_constant.MS, input);
  }
  /**
   * 在当前 Dayuts 实例上添加指定的时间长度。
   * @param {number} number - 要添加的时间长度。
   * @param {string} units - 要添加的时间单位（例如，“years”，“months”，“days”等）。
   * @returns {Dayuts} 更新的 Dayuts 实例。
   */
  add(number, units) {
    var _a;
    const unit = uni_modules_limeDayuts_common_utils.prettyUnit(units);
    const instanceFactorySet = (n) => {
      const d = dayuts(this);
      return d.date(d.date() + Math.round(n * number));
    };
    if (unit == uni_modules_limeDayuts_common_constant.M) {
      return this.set(uni_modules_limeDayuts_common_constant.M, this.$M + number);
    }
    if (unit == uni_modules_limeDayuts_common_constant.Y) {
      return this.set(uni_modules_limeDayuts_common_constant.Y, this.$y + number);
    }
    if (unit == uni_modules_limeDayuts_common_constant.D) {
      return instanceFactorySet(1);
    }
    if (unit == uni_modules_limeDayuts_common_constant.W) {
      return instanceFactorySet(7);
    }
    const steps = /* @__PURE__ */ new Map([
      [uni_modules_limeDayuts_common_constant.MIN, uni_modules_limeDayuts_common_constant.MILLISECONDS_A_MINUTE],
      [uni_modules_limeDayuts_common_constant.H, uni_modules_limeDayuts_common_constant.MILLISECONDS_A_HOUR],
      [uni_modules_limeDayuts_common_constant.S, uni_modules_limeDayuts_common_constant.MILLISECONDS_A_SECOND]
    ]);
    const step = (_a = steps.get(unit)) !== null && _a !== void 0 ? _a : 1;
    const nextTimeStamp = this.$d.getTime() + number * step;
    return wrapper(nextTimeStamp, this);
  }
  /**
   * 从当前 Dayuts 实例中减去指定的时间。
   * @param {number} number - 要减去的时间。
   * @param {string} units - 要减去的时间单位（例如，“years”，“months”，“days”等）。
   * @returns {Dayuts} 更新的 Dayuts 实例。
   */
  subtract(number, units) {
    return this.add(number * -1, units);
  }
  /**
   * 日期格式化
   * @param {string} formatStr - 格式化字符串，包含各种格式化占位符（例如，“YYYY-MM-DD”，“HH:mm:ss”等）。
   * @returns {string} 格式化后的日期字符串。
   */
  format(formatStr = null) {
    const locale = this.$locale();
    if (!this.isValid())
      return uni_modules_limeDayuts_common_constant.INVALID_DATE_STRING;
    const str = formatStr !== null && formatStr !== void 0 ? formatStr : uni_modules_limeDayuts_common_constant.FORMAT_DEFAULT;
    const zoneStr = uni_modules_limeDayuts_common_utils.padZoneStr(this);
    const _a = this, $H = _a.$H, $m = _a.$m, $M = _a.$M;
    const weekdays = locale.weekdays, months = locale.months, meridiem = locale.meridiem;
    function getShort(arr, index, full = [], length = 0) {
      if (arr != null && arr.length >= index) {
        return arr[index];
      } else if (full.length >= index) {
        return full[index].slice(0, length);
      }
      return "";
    }
    const get$H = (num) => {
      return uni_modules_limeDayuts_common_utils.padStart(($H % 12 == 0 ? 12 : $H % 12).toString(), num, "0");
    };
    const meridiemFunc = meridiem !== null && meridiem !== void 0 ? meridiem : (hour, _, isLowercase) => {
      const m = hour < 12 ? "AM" : "PM";
      return isLowercase ? m.toLowerCase() : m;
    };
    const matches = (match) => {
      if (match == "YY") {
        return this.$y.toString().slice(-2);
      } else if (match == "YYYY") {
        return uni_modules_limeDayuts_common_utils.padStart(this.$y.toString(), 4, "0");
      } else if (match == "M") {
        return ($M + 1).toString();
      } else if (match == "MM") {
        return uni_modules_limeDayuts_common_utils.padStart(($M + 1).toString(), 2, "0");
      } else if (match == "MMM") {
        return getShort(locale.monthsShort, $M, months, 3);
      } else if (match == "MMMM") {
        return getShort(months, $M);
      } else if (match == "D") {
        return this.$D.toString();
      } else if (match == "DD") {
        return uni_modules_limeDayuts_common_utils.padStart(this.$D.toString(), 2, "0");
      } else if (match == "d") {
        return this.$W.toString();
      } else if (match == "dd") {
        return getShort(locale.weekdaysMin, this.$W, weekdays, 2);
      } else if (match == "ddd") {
        return getShort(locale.weekdaysShort, this.$W, weekdays, 3);
      } else if (match == "dddd") {
        return weekdays[this.$W];
      } else if (match == "H") {
        return $H.toString();
      } else if (match == "HH") {
        return uni_modules_limeDayuts_common_utils.padStart($H.toString(), 2, "0");
      } else if (match == "h") {
        return get$H(1);
      } else if (match == "hh") {
        return get$H(2);
      } else if (match == "a") {
        return meridiemFunc($H, $m, true);
      } else if (match == "A") {
        return meridiemFunc($H, $m, false);
      } else if (match == "m") {
        return $m.toString();
      } else if (match == "mm") {
        return uni_modules_limeDayuts_common_utils.padStart($m.toString(), 2, "0");
      } else if (match == "s") {
        return this.$s.toString();
      } else if (match == "ss") {
        return uni_modules_limeDayuts_common_utils.padStart(this.$s.toString(), 2, "0");
      } else if (match == "SSS") {
        return uni_modules_limeDayuts_common_utils.padStart(this.$ms.toString(), 3, "0");
      } else if (match == "Z") {
        return zoneStr;
      }
      return null;
    };
    return str.replace(uni_modules_limeDayuts_common_constant.REGEX_FORMAT, (match, $1, offset, string) => {
      var _a2;
      return (_a2 = $1 !== null && $1 !== void 0 ? $1 : matches(match)) !== null && _a2 !== void 0 ? _a2 : zoneStr.replace(":", "");
    });
  }
  /**
   * 获取 Dayuts 实例的 UTC 偏移量（以分钟为单位）。
   * @returns {number} UTC 偏移量（以分钟为单位）。
   */
  utcOffset() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }
  diff(input, units = "millisecond", float = false) {
    const unit = uni_modules_limeDayuts_common_utils.prettyUnit(units);
    const that = dayuts(input);
    const zoneDelta = (that.utcOffset() - this.utcOffset()) * uni_modules_limeDayuts_common_constant.MILLISECONDS_A_MINUTE;
    const diff = this.valueOf() - that.valueOf();
    const getMonth = () => {
      return uni_modules_limeDayuts_common_utils.monthDiff(this, that);
    };
    let result;
    switch (unit) {
      case uni_modules_limeDayuts_common_constant.Y:
        result = getMonth() / 12;
        break;
      case uni_modules_limeDayuts_common_constant.M:
        result = getMonth();
        break;
      case uni_modules_limeDayuts_common_constant.Q:
        result = getMonth() / 3;
        break;
      case uni_modules_limeDayuts_common_constant.W:
        result = (diff - zoneDelta) / uni_modules_limeDayuts_common_constant.MILLISECONDS_A_WEEK;
        break;
      case uni_modules_limeDayuts_common_constant.D:
        result = (diff - zoneDelta) / uni_modules_limeDayuts_common_constant.MILLISECONDS_A_DAY;
        break;
      case uni_modules_limeDayuts_common_constant.H:
        result = diff / uni_modules_limeDayuts_common_constant.MILLISECONDS_A_HOUR;
        break;
      case uni_modules_limeDayuts_common_constant.MIN:
        result = diff / uni_modules_limeDayuts_common_constant.MILLISECONDS_A_MINUTE;
        break;
      case uni_modules_limeDayuts_common_constant.S:
        result = diff / uni_modules_limeDayuts_common_constant.MILLISECONDS_A_SECOND;
        break;
      default:
        result = diff;
        break;
    }
    return float ? result : uni_modules_limeDayuts_common_utils.absFloor(result);
  }
  /**
   * 将当前 Dayuts 对象转换为原生 Date 对象。
   *
   * @returns {Date} 返回一个表示当前日期的原生 Date 对象。
   */
  toDate() {
    return new Date(this.valueOf());
  }
  /**
   * 将 Moment 对象转换为 JSON 字符串
   * @returns {string | null} 如果 Moment 对象有效，则返回 ISO 8601 格式的字符串，否则返回 null
   */
  toJSON() {
    return this.isValid() ? this.toISOString() : null;
  }
  /**
   * 将 Moment 对象转换为 ISO 8601 格式的字符串
   * @returns {string} 返回 ISO 8601 格式的字符串
   */
  toISOString() {
    return this.$d.toISOString();
  }
  toObject() {
    return {
      years: this.$y,
      months: this.$M,
      date: this.$D,
      hours: this.$H,
      minutes: this.$m,
      seconds: this.$s,
      milliseconds: this.$ms
    };
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
  /**
   * 获取当前日期的毫秒数。
   *
   * @returns {number} 返回一个表示当前日期的毫秒数。
   */
  valueOf() {
    return this.$d.getTime();
  }
  /**
   * 获取当前 `dayuts` 对象所在月份的天数。
   *
   * @returns {number} 返回当前 `dayuts` 对象所在月份的天数。
   */
  daysInMonth() {
    return this.endOf(uni_modules_limeDayuts_common_constant.M).$D;
  }
  /**
   * 获取当前日期的区域设置对象。
   *
   * @returns {Object} 区域设置对象。
   */
  $locale() {
    return uni_modules_limeDayuts_common_use.localeState.locales.get(this.$L);
  }
  locale(preset, object = null) {
    const that = this.clone();
    const nextLocaleName = parseLocale(preset, object, true);
    if (nextLocaleName != null)
      that.$L = nextLocaleName;
    return that;
  }
  clone() {
    return wrapper(this.$d.getTime(), this);
  }
  /**
   * 返回当前 dayuts 对象的 UTC 字符串表示。
   *
   * @returns {string} 当前 dayuts 对象的 UTC 字符串表示。
   */
  toString() {
    return this.$d.toString();
  }
  dayOfYear(input = null) {
    const dayOfYear = Math.round((this.startOf("day").valueOf() - this.startOf("year").valueOf()) / 864e5) + 1;
    return input == null ? dayOfYear : this.add(input - dayOfYear, "day");
  }
  fromToBase(input, withoutSuffix, instance, isFrom) {
    var _a, _b;
    const relObj = (_a = uni_modules_limeDayuts_common_use.localeState.locales.get("en")) === null || _a === void 0 ? void 0 : _a.relativeTime;
    const loc = (_b = instance.$locale().relativeTime) !== null && _b !== void 0 ? _b : relObj;
    if (loc == null)
      return "";
    const T = [
      { l: "s", r: 44, d: uni_modules_limeDayuts_common_constant.S },
      { l: "m", r: 89 },
      { l: "mm", r: 44, d: uni_modules_limeDayuts_common_constant.MIN },
      { l: "h", r: 89 },
      { l: "hh", r: 21, d: uni_modules_limeDayuts_common_constant.H },
      { l: "d", r: 35 },
      { l: "dd", r: 25, d: uni_modules_limeDayuts_common_constant.D },
      { l: "M", r: 45 },
      { l: "MM", r: 10, d: uni_modules_limeDayuts_common_constant.M },
      { l: "y", r: 17 },
      { l: "yy", d: uni_modules_limeDayuts_common_constant.Y }
    ];
    const Tl = T.length;
    let result = 0;
    let out = "";
    let isFuture = false;
    for (let i = 0; i < Tl; i += 1) {
      let t = T[i];
      if (t.d != null) {
        result = isFrom ? dayuts(input).diff(instance, t.d, true) : instance.diff(input, t.d, true);
      }
      let abs = Math.round(Math.abs(result));
      isFuture = result > 0;
      if (t.r == null || t.r != null && abs <= t.r) {
        if (abs <= 1 && i > 0)
          t = T[i - 1];
        const format = loc[t.l];
        if (typeof format == "string") {
          out = format.replace("%d", abs.toString());
        }
        break;
      }
    }
    if (withoutSuffix)
      return out;
    const pastOrFuture = isFuture ? loc.future : loc.past;
    return pastOrFuture.replace("%s", out);
  }
  to(input, withoutSuffix = false) {
    return this.fromToBase(input, withoutSuffix, this, true);
  }
  from(input, withoutSuffix = false) {
    return this.fromToBase(input, withoutSuffix, this, false);
  }
  toNow(withoutSuffix = false) {
    return this.to(dayuts(), withoutSuffix);
  }
  fromNow(withoutSuffix = false) {
    return this.from(dayuts(), withoutSuffix);
  }
}
function dayuts(date = null, format = null, locale = null) {
  if (date != null && date instanceof Dayuts)
    return date.clone();
  return new Dayuts({
    date,
    format,
    locale
  });
}
exports.dayuts = dayuts;
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uni_modules/lime-dayuts/common/index.js.map
