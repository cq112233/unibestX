"use strict";
const en = {
  name: "en",
  /**
   * 星期名称数组。
   */
  weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  /**
   * 月份名称数组。
   */
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
  },
  /**
   * 序数函数，用于将数字转换为带有序数后缀的字符串。
   *
   * @param {number} n - 要转换的数字。
   * @returns {string} 带有序数后缀的字符串。
   */
  ordinal: (n, _) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    const i = (v - 20) % 10;
    const k = i < s.length ? i : v < s.length ? v : 0;
    return `[${n}${s[k]}]`;
  }
};
exports.en = en;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/lime-dayuts/common/locale/en/index.js.map
