"use strict";
require("../../../../common/vendor.js");
require("../../libs/plugin/coloruts/constant.js");
require("../../libs/plugin/coloruts/type.js");
const uni_modules_riceUi_libs_plugin_dateuts_index = require("../../libs/plugin/dateuts/index.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
const uni_modules_riceUi_components_riceCalendar_type = require("./type.js");
const uni_modules_riceUi_components_riceCalendar_lunar = require("./lunar.js");
const lunar = new uni_modules_riceUi_components_riceCalendar_lunar.Lunar();
const createCalendarDay = (year, month, date, formatter = null, min = null, max = null) => {
  const lunarInfo = lunar.solar2lunar(year, month, date);
  const day = new Date(year, month - 1, date).getDay();
  const fullDate = `${year}-${uni_modules_riceUi_libs_utils_basic.padZero(month)}-${uni_modules_riceUi_libs_utils_basic.padZero(date)}`;
  const disabled = !uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(fullDate).isBetween(min !== null && min !== void 0 ? min : "1900-01-01", max !== null && max !== void 0 ? max : "2099-12-31", "date", "[]");
  let config = new uni_modules_riceUi_components_riceCalendar_type.CalendarData({
    text: null,
    topInfo: null,
    topInfoColor: null,
    bottomInfo: null,
    bottomInfoColor: null,
    badge: null,
    isCurrentMonth: null,
    fullDate,
    year,
    month,
    date,
    day: day == 0 ? 7 : day,
    lunarInfo,
    disabled,
    isToday: lunarInfo.isToday
  });
  if (typeof formatter == "function") {
    config = formatter(config);
  }
  return config;
};
const formatDate = (date) => {
  const str = date.split("-");
  const year = str.length >= 1 ? str[0] : "";
  const month = str.length >= 2 ? str[1] : "";
  const day = str.length >= 3 ? str[2] : "";
  const formattedMonth = uni_modules_riceUi_libs_utils_basic.padZero(month);
  const formattedDay = uni_modules_riceUi_libs_utils_basic.padZero(day);
  return `${year}-${formattedMonth}-${formattedDay}`;
};
const getDateRange = (date, min = null, max = null) => {
  if (min != null && uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(date).isBefore(min, "date")) {
    return min;
  }
  if (max != null && uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(date).isAfter(max, "date")) {
    return max;
  }
  return date;
};
const getIsSelected = (day, dates, mode) => {
  if (dates.length <= 0)
    return false;
  const start = formatDate(dates[0]);
  if (mode == "range") {
    const end = dates.length >= 2 ? formatDate(dates[1]) : null;
    if (end != null && end == day.fullDate) {
      return true;
    }
  } else if (mode == "multiple") {
    const selectedIndex = dates.findIndex((v) => {
      return formatDate(v) == day.fullDate;
    });
    return selectedIndex != -1;
  }
  return start == day.fullDate;
};
const getIsBetween = (day, dates) => {
  if (dates.length < 2)
    return false;
  const start = dates[0];
  const end = dates[1];
  return uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(day.fullDate).isBetween(start, end, "day");
};
const getCurrentMonthDays = (daysInMonth, dateInfo, formatter = null, min = null, max = null) => {
  const dateList = [];
  const year = dateInfo.year;
  const month = dateInfo.month + 1;
  for (let i = 1; i <= daysInMonth; i++) {
    dateList.push(createCalendarDay(year, month, i, formatter, min, max));
  }
  return dateList;
};
const getFirstWeekDays = (firstDayOfMonth, firstDayOfWeek) => {
  return 7 - (firstDayOfMonth + 7 - firstDayOfWeek) % 7;
};
const getLastMonthDays = (year, month, count, formatter = null, min = null, max = null) => {
  const dateList = [];
  if (count <= 0) {
    return dateList;
  }
  const lastMonthDate = new Date(year, month - 2, 1);
  const lastMonthYear = lastMonthDate.getFullYear();
  const lastMonth = lastMonthDate.getMonth() + 1;
  const lastMonthTotalDays = new Date(year, month - 1, 0).getDate();
  const startDate = lastMonthTotalDays - count + 1;
  for (let i = startDate; i <= lastMonthTotalDays; i++) {
    dateList.push(createCalendarDay(lastMonthYear, lastMonth, i, formatter, min, max));
  }
  return dateList;
};
const getNextMonthDays = (year, month, count, formatter = null, min = null, max = null) => {
  const dateList = [];
  if (count <= 0) {
    return dateList;
  }
  const nextMonthDate = new Date(year, month, 1);
  const nextMonthYear = nextMonthDate.getFullYear();
  const nextMonth = nextMonthDate.getMonth() + 1;
  for (let i = 1; i <= count; i++) {
    dateList.push(createCalendarDay(nextMonthYear, nextMonth, i, formatter, min, max));
  }
  return dateList;
};
const setIsCurrentMonth = (monthDays, currentYear, currentMonth) => {
  for (let i = 0; i < monthDays.length; i++) {
    const week = monthDays[i];
    for (let j = 0; j < week.length; j++) {
      week[j].isCurrentMonth = week[j].year == currentYear && week[j].month == currentMonth;
    }
  }
};
function getMonthDays(dates, firstDayOfWeek, formatter = null, min = null, max = null, showFullDate = false) {
  let date = dates.length > 0 ? dates[0] : "";
  const duts = uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(date);
  const dateInfo = duts.toObject();
  const year = dateInfo.year;
  const month = dateInfo.month + 1;
  const daysInMonth = duts.daysInMonth();
  const currentMonthDays = getCurrentMonthDays(daysInMonth, dateInfo, formatter, min, max);
  let monthDays = [];
  const firstDayOfMonth = currentMonthDays[0].day;
  const firstWeekDays = getFirstWeekDays(firstDayOfMonth, firstDayOfWeek);
  const firstWeek = currentMonthDays.slice(0, firstWeekDays);
  if (showFullDate == true) {
    const lastMonthDays = getLastMonthDays(year, month, 7 - firstWeekDays, formatter, min, max);
    monthDays.push(lastMonthDays.concat(firstWeek));
  } else {
    monthDays.push(firstWeek);
  }
  for (let i = firstWeekDays; i < currentMonthDays.length; i += 7) {
    const item = currentMonthDays.slice(i, i + 7);
    monthDays.push(item);
  }
  const lastWeek = monthDays[monthDays.length - 1];
  if (showFullDate == true && lastWeek.length < 7) {
    monthDays[monthDays.length - 1] = lastWeek.concat(getNextMonthDays(year, month, 7 - lastWeek.length, formatter, min, max));
  }
  setIsCurrentMonth(monthDays, year, month);
  return monthDays;
}
exports.formatDate = formatDate;
exports.getDateRange = getDateRange;
exports.getIsBetween = getIsBetween;
exports.getIsSelected = getIsSelected;
exports.getMonthDays = getMonthDays;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-calendar/utils.js.map
