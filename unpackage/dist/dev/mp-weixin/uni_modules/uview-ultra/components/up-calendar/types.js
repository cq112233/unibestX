"use strict";
const common_vendor = require("../../../../common/vendor.js");
class UPCalendarMonthsItemDate extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          date: { type: "Unknown", optional: false },
          dateStr: { type: String, optional: true },
          selected: { type: Boolean, optional: true },
          disabled: { type: Boolean, optional: true },
          dot: { type: Boolean, optional: true },
          day: { type: String, optional: true },
          week: { type: Number, optional: false },
          month: { type: Number, optional: true },
          bottomInfo: { type: String, optional: true }
        };
      },
      name: "UPCalendarMonthsItemDate"
    };
  }
  constructor(options, metadata = UPCalendarMonthsItemDate.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.date = this.__props__.date;
    this.dateStr = this.__props__.dateStr;
    this.selected = this.__props__.selected;
    this.disabled = this.__props__.disabled;
    this.dot = this.__props__.dot;
    this.day = this.__props__.day;
    this.week = this.__props__.week;
    this.month = this.__props__.month;
    this.bottomInfo = this.__props__.bottomInfo;
    delete this.__props__;
  }
}
class CalendarMonthItem extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          top: { type: Number, optional: false },
          year: { type: String, optional: false },
          month: { type: String, optional: false },
          date: { type: "Unknown", optional: false }
        };
      },
      name: "CalendarMonthItem"
    };
  }
  constructor(options, metadata = CalendarMonthItem.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.top = this.__props__.top;
    this.year = this.__props__.year;
    this.month = this.__props__.month;
    this.date = this.__props__.date;
    delete this.__props__;
  }
}
exports.CalendarMonthItem = CalendarMonthItem;
exports.UPCalendarMonthsItemDate = UPCalendarMonthsItemDate;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-calendar/types.js.map
