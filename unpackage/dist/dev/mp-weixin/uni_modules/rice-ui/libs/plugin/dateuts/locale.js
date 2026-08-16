"use strict";
const common_vendor = require("../../../../../common/vendor.js");
class Locale extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          weekdays: { type: common_vendor.UTS.UTSType.withGenerics(Array, [String]), optional: false },
          weekdaysShort: { type: common_vendor.UTS.UTSType.withGenerics(Array, [String]), optional: false },
          weekdaysMin: { type: common_vendor.UTS.UTSType.withGenerics(Array, [String]), optional: false },
          months: { type: common_vendor.UTS.UTSType.withGenerics(Array, [String]), optional: false },
          monthsShort: { type: common_vendor.UTS.UTSType.withGenerics(Array, [String]), optional: false },
          ordinal: { type: "Unknown", optional: false },
          weekStart: { type: Number, optional: false },
          yearStart: { type: Number, optional: false },
          meridiem: { type: "Unknown", optional: false }
        };
      },
      name: "Locale"
    };
  }
  constructor(options, metadata = Locale.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.weekdays = this.__props__.weekdays;
    this.weekdaysShort = this.__props__.weekdaysShort;
    this.weekdaysMin = this.__props__.weekdaysMin;
    this.months = this.__props__.months;
    this.monthsShort = this.__props__.monthsShort;
    this.ordinal = this.__props__.ordinal;
    this.weekStart = this.__props__.weekStart;
    this.yearStart = this.__props__.yearStart;
    this.meridiem = this.__props__.meridiem;
    delete this.__props__;
  }
}
const local = new Locale({
  weekdays: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
  weekdaysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  weekdaysMin: ["日", "一", "二", "三", "四", "五", "六"],
  months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
  monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
  ordinal: (number, period) => {
    switch (period) {
      case "W":
        return `${number}周`;
      default:
        return `${number}日`;
    }
  },
  weekStart: 1,
  yearStart: 4,
  meridiem: (hour, minute) => {
    const hm = hour * 100 + minute;
    if (hm < 600) {
      return "凌晨";
    } else if (hm < 900) {
      return "早上";
    } else if (hm < 1100) {
      return "上午";
    } else if (hm < 1300) {
      return "中午";
    } else if (hm < 1800) {
      return "下午";
    }
    return "晚上";
  }
});
exports.local = local;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/libs/plugin/dateuts/locale.js.map
