"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_riceUi_libs_use_usePopup_index = require("../../libs/use/usePopup/index.js");
require("../../libs/use/useCountDown/index.js");
require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
const uni_modules_riceUi_libs_use_useSafeArea_index = require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
require("../../libs/plugin/coloruts/constant.js");
require("../../libs/plugin/coloruts/type.js");
const uni_modules_riceUi_libs_plugin_dateuts_index = require("../../libs/plugin/dateuts/index.js");
const uni_modules_riceUi_components_riceCalendar_type = require("./type.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
const uni_modules_riceUi_components_riceCalendar_utils = require("./utils.js");
if (!Array) {
  const _easycom_rice_overlay_1 = common_vendor.resolveComponent("rice-overlay");
  const _easycom_rice_icon_1 = common_vendor.resolveComponent("rice-icon");
  const _easycom_rice_button_1 = common_vendor.resolveComponent("rice-button");
  (_easycom_rice_overlay_1 + _easycom_rice_icon_1 + _easycom_rice_button_1)();
}
const _easycom_rice_overlay = () => "../rice-overlay/rice-overlay.js";
const _easycom_rice_icon = () => "../rice-icon/rice-icon.js";
const _easycom_rice_button = () => "../rice-button/rice-button.js";
if (!Math) {
  (_easycom_rice_overlay + _easycom_rice_icon + _easycom_rice_button)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-calendar",
  styleIsolation: "app-and-page"
}, { __name: "rice-calendar", props: /* @__PURE__ */ common_vendor.mergeModels(new common_vendor.UTSJSONObject({
  mode: { default: "single" },
  date: {},
  switchMode: { default: "year-month" },
  minDate: {},
  maxDate: {},
  lunar: { type: Boolean, default: false },
  title: { default: "请选择日期" },
  showTitle: { type: Boolean, default: true },
  color: {},
  formatter: {},
  showSubtitle: { type: Boolean, default: true },
  showConfirmBtn: { type: Boolean, default: true },
  confirmText: { default: "确认" },
  confirmDisabledText: {},
  maxRange: {},
  rangePrompt: {},
  showRangePrompt: { type: Boolean, default: true },
  allowSameDay: { type: Boolean, default: false },
  rowHeight: { default: "60px" },
  readonly: { type: Boolean },
  firstDayOfWeek: { default: 1 },
  closeable: { type: Boolean, default: true },
  closeIcon: { default: "cross" },
  usePopup: { type: Boolean, default: true },
  closeOnClickClose: { type: Boolean, default: true },
  closeOnClickOverlay: { type: Boolean, default: true },
  safeAreaInsetBottom: { type: Boolean, default: null },
  zIndex: { default: 999 },
  weeklyCalendar: { type: Boolean, default: false },
  showWeeklyText: { type: Boolean, default: true },
  showFullDate: { type: Boolean, default: null },
  showMonthMark: { type: Boolean, default: false },
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}), new common_vendor.UTSJSONObject({
  "show": {
    type: Boolean,
    default: false
  },
  "showModifiers": {}
})), emits: /* @__PURE__ */ common_vendor.mergeModels(["select", "confirm", "unselect", "panelChange", "clickDisabledDate", "clickClose", "open", "close", "opened", "closed", "overRange"], ["update:show"]), setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("calendar");
  uni_modules_riceUi_libs_use_useSafeArea_index.useSafeArea();
  const emit = __emit;
  const props = __props;
  const show = common_vendor.useModel(__props, "show");
  const calendarRef = common_vendor.shallowRef(null);
  const realShow = uni_modules_riceUi_libs_use_usePopup_index.usePopup(calendarRef, new uni_modules_riceUi_libs_use_usePopup_index.UsePopupOptions({
    zoom: null,
    zoomScale: null,
    beforeClose: null,
    show,
    duration: 300,
    position: "bottom",
    opacity: false
  })).realShow;
  const isShow = common_vendor.computed(() => {
    return props.usePopup ? realShow.value : true;
  });
  const _showFullDate = common_vendor.computed(() => {
    var _a2;
    return (_a2 = props.showFullDate) !== null && _a2 !== void 0 ? _a2 : props.weeklyCalendar;
  });
  const getDayIsDisabled = (day) => {
    if (props.weeklyCalendar && day.disabled == false)
      return false;
    return day.disabled == true || day.isCurrentMonth == false;
  };
  const getInitDate = () => {
    const mode = props.mode;
    let defaultDate = props.date;
    if (defaultDate == "") {
      return [];
    }
    const today = uni_modules_riceUi_libs_plugin_dateuts_index.dateuts().format("YYYY-MM-DD");
    let dates = [];
    if (typeof defaultDate == "string") {
      dates = [defaultDate];
    } else if (Array.isArray(defaultDate)) {
      dates = defaultDate.slice();
    }
    if (dates.length == 0) {
      dates.push(today);
    }
    if (mode == "range" && dates.length >= 2) {
      const start = uni_modules_riceUi_components_riceCalendar_utils.getDateRange(dates[0], props.minDate, props.maxDate);
      const end = uni_modules_riceUi_components_riceCalendar_utils.getDateRange(dates[1], props.minDate, props.maxDate);
      if (uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(start).isAfter(end)) {
        return [end, start];
      }
      return [start, end];
    }
    return dates.map((v) => {
      return uni_modules_riceUi_components_riceCalendar_utils.getDateRange(v, props.minDate, props.maxDate);
    });
  };
  const currentDate = common_vendor.ref(getInitDate());
  const getInitPanelDate = () => {
    const date = currentDate.value;
    if (date.length > 0)
      return date[0];
    return uni_modules_riceUi_components_riceCalendar_utils.getDateRange(uni_modules_riceUi_libs_plugin_dateuts_index.dateuts().format("YYYY-MM-DD"), props.minDate, props.maxDate);
  };
  const firstDayOfWeek = common_vendor.computed(() => {
    return uni_modules_riceUi_libs_utils_basic.clamp(props.firstDayOfWeek, 1, 7);
  });
  const currentPanelDate = common_vendor.ref(getInitPanelDate());
  const monthDays = common_vendor.ref([]);
  monthDays.value = uni_modules_riceUi_components_riceCalendar_utils.getMonthDays([currentPanelDate.value], firstDayOfWeek.value, props.formatter, props.minDate, props.maxDate, _showFullDate.value);
  const currentMonth = common_vendor.computed(() => {
    return uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(currentPanelDate.value).format("M");
  });
  const currentWeekIndex = common_vendor.computed(() => {
    if (props.weeklyCalendar == false)
      return 0;
    const panelDate = uni_modules_riceUi_components_riceCalendar_utils.formatDate(currentPanelDate.value);
    for (let week = 0; week < monthDays.value.length; week++) {
      const weekItem = monthDays.value[week];
      const dayIndex = weekItem.findIndex((day) => {
        return day.fullDate == panelDate;
      });
      if (dayIndex != -1) {
        return week;
      }
    }
    return 0;
  });
  const displayMonthDays = common_vendor.computed(() => {
    if (props.weeklyCalendar == false) {
      return monthDays.value;
    }
    if (monthDays.value.length == 0) {
      return [];
    }
    return [monthDays.value[currentWeekIndex.value]];
  });
  common_vendor.computed(() => {
    return "1";
  });
  const getWeekRowKey = (weekItem, index) => {
    return `${index}`;
  };
  const getRealWeekIndex = (index) => {
    if (props.weeklyCalendar == false)
      return index;
    return currentWeekIndex.value + index;
  };
  const formatPanelDate = common_vendor.computed(() => {
    if (props.weeklyCalendar && props.showWeeklyText) {
      return `${uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(currentPanelDate.value).format("YYYY年M月")} 第${currentWeekIndex.value + 1}周`;
    }
    return uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(currentPanelDate.value).format("YYYY年M月");
  });
  const weeks = ["一", "二", "三", "四", "五", "六", "日"];
  const weekList = common_vendor.computed(() => {
    if (firstDayOfWeek.value == 1)
      return weeks;
    const firstDay = firstDayOfWeek.value;
    return [...weeks.slice(firstDay - 1, 7), ...weeks.slice(0, firstDay - 1)];
  });
  const getBottomInfo = (day) => {
    var _a2;
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(day.bottomInfo))
      return day.bottomInfo;
    if (props.mode == "range") {
      const dates = currentDate.value;
      if (props.allowSameDay == true && dates.length >= 2 && uni_modules_riceUi_components_riceCalendar_utils.getIsSelected(day, currentDate.value, props.mode) && uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(dates[0]).isSame(dates[1])) {
        return "开始/结束";
      }
      if (uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(day.fullDate).isSame(dates[0]))
        return "开始";
      if (dates.length >= 2 && uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(day.fullDate).isSame(dates[1]))
        return "结束";
    }
    return props.lunar ? (_a2 = day.lunarInfo) === null || _a2 === void 0 ? null : _a2.IDayCn : null;
  };
  const getPanelYearMonth = () => {
    return uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(currentPanelDate.value).format("YYYY-MM");
  };
  const getPanelYearMonthByDate = (panelDate) => {
    return uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(panelDate).format("YYYY-MM");
  };
  const getPanelWeekByDate = (panelDate) => {
    if (props.weeklyCalendar == false) {
      return 1;
    }
    const normalizedDate = uni_modules_riceUi_components_riceCalendar_utils.formatDate(panelDate);
    const panelMonthDays = uni_modules_riceUi_components_riceCalendar_utils.getMonthDays([normalizedDate], firstDayOfWeek.value, props.formatter, props.minDate, props.maxDate, _showFullDate.value);
    for (let week = 0; week < panelMonthDays.length; week++) {
      const weekItem = panelMonthDays[week];
      const dayIndex = weekItem.findIndex((day) => {
        return day.fullDate == normalizedDate;
      });
      if (dayIndex != -1) {
        return week + 1;
      }
    }
    return 1;
  };
  const getPanelRowsByDate = (panelDate) => {
    const normalizedDate = props.weeklyCalendar ? uni_modules_riceUi_components_riceCalendar_utils.formatDate(panelDate) : panelDate;
    const panelMonthDays = uni_modules_riceUi_components_riceCalendar_utils.getMonthDays([normalizedDate], firstDayOfWeek.value, props.formatter, props.minDate, props.maxDate, _showFullDate.value);
    if (props.weeklyCalendar == false) {
      return panelMonthDays;
    }
    for (let week = 0; week < panelMonthDays.length; week++) {
      const weekItem = panelMonthDays[week];
      const dayIndex = weekItem.findIndex((day) => {
        return day.fullDate == normalizedDate;
      });
      if (dayIndex != -1) {
        return [weekItem];
      }
    }
    return panelMonthDays.length > 0 ? [panelMonthDays[0]] : [];
  };
  const getPanelChangeResultByDate = (panelDate) => {
    const panelRows = getPanelRowsByDate(panelDate);
    const panelYearMonth = getPanelYearMonthByDate(panelDate);
    let firstDate = uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(panelDate).startOf("month").format("YYYY-MM-DD");
    let lastDate = uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(panelDate).endOf("month").format("YYYY-MM-DD");
    let prevMonthFirstDate = "";
    let nextMonthLastDate = "";
    if (props.weeklyCalendar && panelRows.length > 0) {
      firstDate = "";
      lastDate = "";
    }
    for (let rowIndex = 0; rowIndex < panelRows.length; rowIndex++) {
      const row = panelRows[rowIndex];
      for (let dayIndex = 0; dayIndex < row.length; dayIndex++) {
        const day = row[dayIndex];
        const dayYearMonth = uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(day.fullDate).format("YYYY-MM");
        if (props.weeklyCalendar && dayYearMonth == panelYearMonth) {
          if (firstDate == "") {
            firstDate = day.fullDate;
          }
          lastDate = day.fullDate;
        }
        if (dayYearMonth < panelYearMonth && prevMonthFirstDate == "") {
          prevMonthFirstDate = day.fullDate;
        }
        if (dayYearMonth > panelYearMonth) {
          nextMonthLastDate = day.fullDate;
        }
      }
    }
    if (props.weeklyCalendar && firstDate == "") {
      firstDate = uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(panelDate).format("YYYY-MM-DD");
      lastDate = firstDate;
    }
    return new uni_modules_riceUi_components_riceCalendar_type.CalendarPanelChangeResult({
      firstDate,
      lastDate,
      panelDate: panelYearMonth,
      prevMonthFirstDate,
      nextMonthLastDate,
      week: getPanelWeekByDate(panelDate)
    });
  };
  const emitPanelChangeByDate = (panelDate) => {
    emit("panelChange", getPanelChangeResultByDate(panelDate));
  };
  const getPanelDate = () => {
    return getPanelYearMonth();
  };
  const setPanelDate = (panelDate) => {
    currentPanelDate.value = panelDate;
    emitPanelChangeByDate(panelDate);
  };
  const shiftPanelDate = (step, unit, format) => {
    const panelDate = uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(currentPanelDate.value).add(step, unit).format(format);
    setPanelDate(panelDate);
  };
  const getLastMonth = () => {
    if (props.weeklyCalendar) {
      shiftPanelDate(-7, "day", "YYYY-MM-DD");
    } else {
      shiftPanelDate(-1, "month", "YYYY-MM");
    }
  };
  const getNextMonth = () => {
    if (props.weeklyCalendar) {
      shiftPanelDate(7, "day", "YYYY-MM-DD");
    } else {
      shiftPanelDate(1, "month", "YYYY-MM");
    }
  };
  const getLastYear = () => {
    if (props.weeklyCalendar) {
      shiftPanelDate(-1, "month", "YYYY-MM-DD");
    } else {
      shiftPanelDate(-1, "year", "YYYY-MM");
    }
  };
  const getNextYear = () => {
    if (props.weeklyCalendar) {
      shiftPanelDate(1, "month", "YYYY-MM-DD");
    } else {
      shiftPanelDate(1, "year", "YYYY-MM");
    }
  };
  const getLastWeek = () => {
    if (props.weeklyCalendar == false)
      return null;
    shiftPanelDate(-7, "day", "YYYY-MM-DD");
  };
  const getNextWeek = () => {
    if (props.weeklyCalendar == false)
      return null;
    shiftPanelDate(7, "day", "YYYY-MM-DD");
  };
  const switchPanelMonth = (step) => {
    const format = props.weeklyCalendar ? "YYYY-MM-DD" : "YYYY-MM";
    shiftPanelDate(step, "month", format);
  };
  const switchPanelYear = (step) => {
    const format = props.weeklyCalendar ? "YYYY-MM-DD" : "YYYY-MM";
    shiftPanelDate(step, "year", format);
  };
  const switchPanel = (type) => {
    if (type == "prev-week") {
      getLastWeek();
    } else if (type == "next-week") {
      getNextWeek();
    } else if (type == "prev-month") {
      switchPanelMonth(-1);
    } else if (type == "next-month") {
      switchPanelMonth(1);
    } else if (type == "next-year") {
      switchPanelYear(1);
    } else if (type == "prev-year") {
      switchPanelYear(-1);
    }
  };
  const handleOverRange = () => {
    var _a2;
    emit("overRange");
    if (props.showRangePrompt == false)
      return null;
    const rangePrompt = (_a2 = props.rangePrompt) !== null && _a2 !== void 0 ? _a2 : `最多选择${props.maxRange}天`;
    common_vendor.index.showToast({
      title: rangePrompt,
      icon: "none"
    });
  };
  const confirmDisabled = common_vendor.computed(() => {
    const len = currentDate.value.length;
    return len <= 0 || props.mode === "range" && len < 2;
  });
  const confirmText = common_vendor.computed(() => {
    if (confirmDisabled.value && uni_modules_riceUi_libs_utils_basic.hasStrValue(props.confirmDisabledText)) {
      return props.confirmDisabledText;
    }
    return props.confirmText;
  });
  const onConfirm = () => {
    if (confirmDisabled.value) {
      return null;
    }
    emit("confirm", props.mode == "single" ? currentDate.value[0] : currentDate.value.slice());
    show.value = false;
  };
  const handleSelect = (date) => {
    if (props.mode == "range" && date.length >= 2 && props.maxRange != null) {
      const diff = uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(date[1]).diff(date[0], "day") + 1;
      if (diff > props.maxRange) {
        handleOverRange();
        return null;
      }
    }
    currentDate.value = date;
    emit("select", props.mode == "single" ? date[0] : date.slice());
    if (props.showConfirmBtn == false) {
      onConfirm();
    }
  };
  const handleClick = (day) => {
    const fullDate = day.fullDate;
    if (props.readonly == true || day.isCurrentMonth == false && !props.weeklyCalendar)
      return null;
    if (day.disabled == true) {
      emit("clickDisabledDate", fullDate);
      return null;
    }
    if (props.mode == "range") {
      if (currentDate.value.length == 0) {
        handleSelect([fullDate]);
        return null;
      }
      const start = currentDate.value[0];
      const end = currentDate.value.length >= 2 ? currentDate.value[1] : null;
      if (end == null) {
        const isAfter = uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(fullDate).isAfter(start);
        if (isAfter) {
          handleSelect([start, fullDate]);
        } else if (uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(fullDate).isBefore(start)) {
          handleSelect([fullDate]);
        } else if (props.allowSameDay) {
          handleSelect([fullDate, fullDate]);
        }
      } else {
        handleSelect([fullDate]);
      }
    } else if (props.mode == "multiple") {
      const selectedIndex = currentDate.value.findIndex((v) => {
        return uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(v).isSame(fullDate);
      });
      if (selectedIndex != -1) {
        let unselect = currentDate.value.splice(selectedIndex, 1);
        emit("unselect", unselect[0]);
      } else if (props.maxRange != null && currentDate.value.length >= props.maxRange) {
        handleOverRange();
      } else {
        handleSelect([...currentDate.value, fullDate]);
      }
    } else {
      handleSelect([fullDate]);
    }
  };
  const bodyRef = common_vendor.shallowRef(null);
  const onClick = (e) => {
  };
  const clickClose = () => {
    if (props.usePopup && props.closeOnClickClose) {
      show.value = false;
    }
    emit("clickClose");
  };
  const getDayClass = (day, index) => {
    const css = [];
    const pre = "rice-calendar__day";
    const isSelect = uni_modules_riceUi_components_riceCalendar_utils.getIsSelected(day, currentDate.value, props.mode);
    if (getDayIsDisabled(day)) {
      css.push(`${pre}--disabled`);
    }
    if (isSelect) {
      css.push(`${pre}--selected`);
    }
    if (uni_modules_riceUi_components_riceCalendar_utils.getIsBetween(day, currentDate.value) && props.mode == "range") {
      css.push(`${pre}--middle`);
    }
    if (props.mode == "range") {
      if (currentDate.value[0] != null && uni_modules_riceUi_components_riceCalendar_utils.formatDate(currentDate.value[0]) == day.fullDate) {
        css.push(`${pre}--range--start`);
      }
      if (currentDate.value[1] != null && uni_modules_riceUi_components_riceCalendar_utils.formatDate(currentDate.value[1]) == day.fullDate) {
        css.push(`${pre}--range--end`);
      }
      if (uni_modules_riceUi_components_riceCalendar_utils.getIsBetween(day, currentDate.value)) {
        css.push(`${pre}--middle`);
      }
    }
    return css;
  };
  const getDayTextClass = (day, index, type) => {
    const css = [];
    const pre = "rice-calendar__day";
    const isSelect = uni_modules_riceUi_components_riceCalendar_utils.getIsSelected(day, currentDate.value, props.mode);
    if (getDayIsDisabled(day)) {
      css.push(`${pre}--disabled__text`);
    }
    if (isSelect) {
      css.push(`${pre}--selected__text`);
    }
    if (type == "inner" && uni_modules_riceUi_components_riceCalendar_utils.getIsBetween(day, currentDate.value) && props.mode == "range") {
      css.push(`${pre}--middle__text`);
    }
    return css;
  };
  const getDayStyle = (day, index) => {
    const css = /* @__PURE__ */ new Map();
    if (getRealWeekIndex(index) == 0 && day.date == 1 && !_showFullDate.value) {
      const realDay = (day.day + 7 - firstDayOfWeek.value) % 7;
      css.set("margin-left", `${100 * realDay / 7}%`);
    }
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.rowHeight)) {
      css.set("height", uni_modules_riceUi_libs_utils_basic.addUnit(props.rowHeight));
    }
    const color = props.color;
    if (color != null) {
      const isSelect = uni_modules_riceUi_components_riceCalendar_utils.getIsSelected(day, currentDate.value, props.mode);
      if (isSelect) {
        css.set("background-color", color);
      }
      if (uni_modules_riceUi_components_riceCalendar_utils.getIsBetween(day, currentDate.value) && props.mode == "range") {
        css.set("color", props.color);
      }
    }
    return css;
  };
  const getDayTextStyle = (day, index) => {
    const css = /* @__PURE__ */ new Map();
    if (props.color != null) {
      if (uni_modules_riceUi_components_riceCalendar_utils.getIsBetween(day, currentDate.value) && props.mode == "range")
        css.set("color", props.color);
    }
    return css;
  };
  const rootClass = common_vendor.computed(() => {
    return [
      ns.theme(),
      ns.is("popup", props.usePopup == true)
    ];
  });
  const rootStyle = common_vendor.computed(() => {
    var _a2;
    const css = /* @__PURE__ */ new Map();
    if (props.usePopup) {
      css.set("z-index", props.zIndex);
    }
    const isSafeAreaInsetBottom = (_a2 = props.safeAreaInsetBottom) !== null && _a2 !== void 0 ? _a2 : props.usePopup;
    if (isSafeAreaInsetBottom) {
      css.set("padding-bottom", uni_modules_riceUi_libs_use_useSafeArea_index.safeAreaInsets.value.bottom + "px");
    }
    return css;
  });
  const getBottomTextStyle = (day) => {
    const css = new common_vendor.UTSJSONObject({});
    if (day.bottomInfoColor != null)
      css.color = day.bottomInfoColor;
    return css;
  };
  const getTopTextStyle = (day) => {
    const css = new common_vendor.UTSJSONObject({});
    if (day.topInfoColor != null)
      css.color = day.topInfoColor;
    return css;
  };
  const closeStyle = common_vendor.ref(new common_vendor.UTSJSONObject({
    position: "absolute",
    right: "16px",
    top: "12px",
    zIndex: 9
  }));
  const switchArrowStyle = common_vendor.ref(new common_vendor.UTSJSONObject({
    padding: "10px 4px"
  }));
  common_vendor.watch(() => {
    return props.date;
  }, () => {
    const previousPanelDate = currentPanelDate.value;
    currentDate.value = getInitDate();
    let nextPanelDate = previousPanelDate;
    if (typeof props.date == "string") {
      nextPanelDate = props.date;
    } else if (Array.isArray(props.date)) {
      const d = props.date;
      if (d.length > 0) {
        nextPanelDate = d[0];
      }
    }
    currentPanelDate.value = nextPanelDate;
    const previousYearMonth = getPanelYearMonthByDate(previousPanelDate);
    const nextYearMonth = getPanelYearMonthByDate(nextPanelDate);
    const previousWeek = getPanelWeekByDate(previousPanelDate);
    const nextWeek = getPanelWeekByDate(nextPanelDate);
    if (previousYearMonth != nextYearMonth || previousWeek != nextWeek) {
      emit("panelChange", getPanelChangeResultByDate(nextPanelDate));
    }
  });
  common_vendor.watch([
    () => {
      return props.minDate;
    },
    () => {
      return props.maxDate;
    }
  ], () => {
    currentDate.value = getInitDate();
    monthDays.value = uni_modules_riceUi_components_riceCalendar_utils.getMonthDays([currentPanelDate.value], firstDayOfWeek.value, props.formatter, props.minDate, props.maxDate, _showFullDate.value);
  });
  common_vendor.watch(() => {
    return props.weeklyCalendar;
  }, (newVal) => {
    const normalizedDate = uni_modules_riceUi_components_riceCalendar_utils.formatDate(currentPanelDate.value);
    const nextPanelDate = newVal ? normalizedDate : uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(normalizedDate).format("YYYY-MM");
    if (nextPanelDate != currentPanelDate.value) {
      currentPanelDate.value = nextPanelDate;
      return null;
    }
    monthDays.value = uni_modules_riceUi_components_riceCalendar_utils.getMonthDays([nextPanelDate], firstDayOfWeek.value, props.formatter, props.minDate, props.maxDate, _showFullDate.value);
  });
  common_vendor.watch([currentPanelDate, _showFullDate], () => {
    monthDays.value = uni_modules_riceUi_components_riceCalendar_utils.getMonthDays([currentPanelDate.value], firstDayOfWeek.value, props.formatter, props.minDate, props.maxDate, _showFullDate.value);
  });
  common_vendor.onMounted(() => {
  });
  __expose({
    switchPanel,
    getPanelDate
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: _ctx.usePopup
    }, _ctx.usePopup ? {
      b: common_vendor.o(($event) => {
        return show.value = $event;
      }, "34"),
      c: common_vendor.p({
        ["z-index"]: _ctx.zIndex - 1,
        ["close-on-click-overlay"]: _ctx.closeOnClickOverlay,
        duration: 300,
        show: show.value,
        class: "data-v-9a99c562"
      })
    } : {}, {
      d: common_vendor.unref(isShow)
    }, common_vendor.unref(isShow) ? common_vendor.e({
      e: _ctx.showTitle || _ctx.closeable
    }, _ctx.showTitle || _ctx.closeable ? common_vendor.e({
      f: _ctx.showTitle
    }, _ctx.showTitle ? {
      g: common_vendor.t(_ctx.title)
    } : {}, {
      h: _ctx.closeable
    }, _ctx.closeable ? {
      i: common_vendor.o(clickClose, "47"),
      j: common_vendor.p({
        name: _ctx.closeIcon,
        ["custom-style"]: common_vendor.unref(closeStyle),
        size: "20px",
        class: "data-v-9a99c562"
      })
    } : {}) : {}, {
      k: _ctx.switchMode != "none" || _ctx.showSubtitle
    }, _ctx.switchMode != "none" || _ctx.showSubtitle ? common_vendor.e({
      l: _ctx.switchMode != "none"
    }, _ctx.switchMode != "none" ? common_vendor.e({
      m: _ctx.switchMode != "month"
    }, _ctx.switchMode != "month" ? {
      n: common_vendor.o(getLastYear, "8c"),
      o: common_vendor.p({
        name: "double-left",
        ["custom-style"]: common_vendor.unref(switchArrowStyle),
        class: "data-v-9a99c562"
      })
    } : {}, {
      p: common_vendor.o(getLastMonth, "4f"),
      q: common_vendor.p({
        name: "arrow-left",
        ["custom-style"]: common_vendor.unref(switchArrowStyle),
        class: "data-v-9a99c562"
      })
    }) : {}, {
      r: _ctx.showSubtitle
    }, _ctx.showSubtitle ? {
      s: common_vendor.t(common_vendor.unref(formatPanelDate))
    } : {}, {
      t: _ctx.switchMode != "none"
    }, _ctx.switchMode != "none" ? common_vendor.e({
      v: common_vendor.o(getNextMonth, "9c"),
      w: common_vendor.p({
        name: "arrow-right",
        ["custom-style"]: common_vendor.unref(switchArrowStyle),
        class: "data-v-9a99c562"
      }),
      x: _ctx.switchMode != "month"
    }, _ctx.switchMode != "month" ? {
      y: common_vendor.o(getNextYear, "79"),
      z: common_vendor.p({
        name: "double-right",
        ["custom-style"]: common_vendor.unref(switchArrowStyle),
        class: "data-v-9a99c562"
      })
    } : {}) : {}) : {}, {
      A: common_vendor.r("header", {
        panelDate: getPanelYearMonth(),
        currentWeek: common_vendor.unref(currentWeekIndex) + 1
      }),
      B: common_vendor.f(common_vendor.unref(weekList), (item, k0, i0) => {
        return {
          a: common_vendor.t(item),
          b: item
        };
      }),
      C: _ctx.showMonthMark
    }, _ctx.showMonthMark ? {
      D: common_vendor.t(common_vendor.unref(currentMonth))
    } : {}, {
      E: common_vendor.f(common_vendor.unref(displayMonthDays), (item, index, i0) => {
        return {
          a: common_vendor.f(item, (day, k1, i1) => {
            return common_vendor.e({
              a: common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(day.topInfo)
            }, common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(day.topInfo) ? {
              b: common_vendor.t(day.topInfo),
              c: common_vendor.n(getDayTextClass(day, index, "top")),
              d: common_vendor.s(getTopTextStyle(day))
            } : {}, {
              e: common_vendor.t(common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(day.text) ? day.text : day.date),
              f: common_vendor.n(getDayTextClass(day, index, "inner")),
              g: common_vendor.s(getDayTextStyle(day)),
              h: _ctx.lunar || getBottomInfo(day) != null
            }, _ctx.lunar || getBottomInfo(day) != null ? {
              i: common_vendor.t(getBottomInfo(day)),
              j: common_vendor.n(getDayTextClass(day, index, "bottom")),
              k: common_vendor.s(getBottomTextStyle(day))
            } : {}, {
              l: day.fullDate,
              m: common_vendor.n(getDayClass(day)),
              n: common_vendor.s(getDayStyle(day, index)),
              o: common_vendor.o(($event) => {
                return handleClick(day);
              }, day.fullDate)
            });
          }),
          b: getWeekRowKey(item, index)
        };
      }),
      F: common_vendor.sei("r0-9a99c562", "view", bodyRef, {
        "k": "bodyRef"
      }),
      G: _ctx.weeklyCalendar ? 1 : "",
      H: common_vendor.o(onClick, "03"),
      I: _ctx.showConfirmBtn
    }, _ctx.showConfirmBtn ? {
      J: common_vendor.o(onConfirm, "08"),
      K: common_vendor.p({
        color: _ctx.color,
        type: "primary",
        disabled: common_vendor.unref(confirmDisabled),
        text: common_vendor.unref(confirmText),
        shape: "round",
        class: "data-v-9a99c562"
      })
    } : {}, {
      L: common_vendor.sei("r1-9a99c562", "view", calendarRef, {
        "k": "calendarRef"
      }),
      M: common_vendor.n(common_vendor.unref(rootClass)),
      N: common_vendor.s(common_vendor.unref(rootStyle)),
      O: common_vendor.s(_ctx.customStyle),
      P: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    }) : {});
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9a99c562"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-calendar/rice-calendar.js.map
