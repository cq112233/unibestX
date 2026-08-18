"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upCalendar_types = require("./types.js");
const uni_modules_limeDayuts_common_index = require("../../../lime-dayuts/common/index.js");
require("../../../lime-dayuts/common/use.js");
require("../../../lime-dayuts/utssdk/interface.js");
const uni_modules_uviewUltra_libs_i18n_index = require("../../libs/i18n/index.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_function_test = require("../../libs/function/test.js");
if (!Array) {
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  const _easycom_up_popup_1 = common_vendor.resolveComponent("up-popup");
  (_easycom_up_button_1 + _easycom_up_popup_1)();
}
const _easycom_up_button = () => "../up-button/up-button.js";
const _easycom_up_popup = () => "../up-popup/up-popup.js";
if (!Math) {
  (common_vendor.unref(uHeader) + common_vendor.unref(uMonth) + _easycom_up_button + _easycom_up_popup)();
}
const uHeader = () => "./header.js";
const uMonth = () => "./month.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-calendar"
}, { __name: "up-calendar", props: {
  title: {
    type: String,
    default: ""
  },
  showTitle: {
    type: Boolean,
    default: true
  },
  showSubtitle: {
    type: Boolean,
    default: true
  },
  mode: {
    type: String,
    default: "single"
  },
  startText: {
    type: String,
    default: "开始"
  },
  endText: {
    type: String,
    default: "结束"
  },
  customList: {
    type: Array,
    default: () => {
      return [];
    }
  },
  color: {
    type: String,
    default: "#3c9cff"
  },
  minDate: {
    type: [String, Number],
    default: 0
  },
  maxDate: {
    type: [String, Number],
    default: 0
  },
  defaultDate: {
    type: [Array, String, Date],
    default: null
  },
  maxCount: {
    type: [String, Number],
    default: 999
  },
  rowHeight: {
    type: [String, Number],
    default: 56
  },
  formatter: {
    type: Function,
    default: null
  },
  showLunar: {
    type: Boolean,
    default: false
  },
  showMark: {
    type: Boolean,
    default: true
  },
  confirmText: {
    type: String,
    default: "确定"
  },
  confirmDisabledText: {
    type: String,
    default: "确定"
  },
  show: {
    type: Boolean,
    default: false
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  showConfirm: {
    type: Boolean,
    default: true
  },
  maxRange: {
    type: [Number, String],
    default: 365
  },
  rangePrompt: {
    type: String,
    default: ""
  },
  showRangePrompt: {
    type: Boolean,
    default: true
  },
  allowSameDay: {
    type: Boolean,
    default: false
  },
  rangeResultMode: {
    type: String,
    default: "all"
  },
  round: {
    type: [Boolean, String, Number],
    default: 0
  },
  monthNum: {
    type: [Number, String],
    default: 3
  },
  monthSwitch: {
    type: Boolean,
    default: false
  },
  showToday: {
    type: Boolean,
    default: true
  },
  safeAreaInsetBottom: {
    type: Boolean,
    default: true
  }
}, emits: ["confirm", "close"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const inited = common_vendor.ref(false);
  const months = common_vendor.ref([]);
  const monthIndex = common_vendor.ref(0);
  const listHeight = common_vendor.ref(0);
  const listStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      height: uni_modules_uviewUltra_libs_function_index.addUnit(listHeight.value)
    });
  });
  const selected = common_vendor.ref([]);
  const scrollIntoView = common_vendor.ref("");
  const scrollTop = common_vendor.ref(0);
  const innerMaxDate = common_vendor.computed(() => {
    return props.maxDate.toString();
  });
  const innerMinDate = common_vendor.computed(() => {
    return props.minDate.toString();
  });
  const todayDate = common_vendor.computed(() => {
    return uni_modules_limeDayuts_common_index.dayuts().format("YYYY-MM-DD");
  });
  const todayText = common_vendor.computed(() => {
    return uni_modules_uviewUltra_libs_i18n_index.t("up.calendar.today", new common_vendor.UTSJSONObject({}));
  });
  const todayDisabled = common_vendor.computed(() => {
    let today = uni_modules_limeDayuts_common_index.dayuts(todayDate.value);
    let minD = innerMinDate.value;
    let maxD = innerMaxDate.value;
    if (minD != "" && minD != "0" && today.isBefore(uni_modules_limeDayuts_common_index.dayuts(minD), "day")) {
      return true;
    }
    if (maxD != "" && maxD != "0" && today.isAfter(uni_modules_limeDayuts_common_index.dayuts(maxD), "day")) {
      return true;
    }
    return false;
  });
  const elTitle = common_vendor.computed(() => {
    if (props.title != "" && props.title != "日期选择") {
      return props.title;
    }
    return uni_modules_uviewUltra_libs_i18n_index.t("up.calendar.chooseDates", new common_vendor.UTSJSONObject({}));
  });
  const elConfirmText = common_vendor.computed(() => {
    if (props.confirmText != "" && props.confirmText != "确定") {
      return props.confirmText;
    }
    return uni_modules_uviewUltra_libs_i18n_index.t("up.common.confirm", new common_vendor.UTSJSONObject({}));
  });
  const elConfirmDisabledText = common_vendor.computed(() => {
    if (props.confirmDisabledText != "" && props.confirmDisabledText != "确定") {
      return props.confirmDisabledText;
    }
    return uni_modules_uviewUltra_libs_i18n_index.t("up.common.confirm", new common_vendor.UTSJSONObject({}));
  });
  const elStartText = common_vendor.computed(() => {
    if (props.startText != "" && props.startText != "开始") {
      return props.startText;
    }
    return uni_modules_uviewUltra_libs_i18n_index.t("up.common.start", new common_vendor.UTSJSONObject({}));
  });
  const elEndText = common_vendor.computed(() => {
    if (props.endText != "" && props.endText != "结束") {
      return props.endText;
    }
    return uni_modules_uviewUltra_libs_i18n_index.t("up.common.end", new common_vendor.UTSJSONObject({}));
  });
  const subtitle = common_vendor.computed(() => {
    if (months.value.length > 0) {
      const item = months.value[monthIndex.value];
      return uni_modules_uviewUltra_libs_i18n_index.formatMonthTitle(item.year, item.month);
    }
    return "";
  });
  const currentMonths = common_vendor.computed(() => {
    if (props.monthSwitch && months.value.length > 0) {
      return [months.value[monthIndex.value]];
    }
    return months.value;
  });
  const switchPrevDisabled = common_vendor.computed(() => {
    return monthIndex.value <= 0;
  });
  const switchNextDisabled = common_vendor.computed(() => {
    return monthIndex.value >= months.value.length - 1;
  });
  const switchPrevYearDisabled = common_vendor.computed(() => {
    return monthIndex.value - 12 < 0;
  });
  const switchNextYearDisabled = common_vendor.computed(() => {
    return monthIndex.value + 12 > months.value.length - 1;
  });
  const buttonDisabled = common_vendor.computed(() => {
    if (props.mode === "range") {
      return selected.value.length <= 1;
    }
    return false;
  });
  function getConfirmValue(selParam = null) {
    const sel = selParam !== null && selParam !== void 0 ? selParam : selected.value;
    if (props.mode == "range" && props.rangeResultMode == "boundary" && sel.length >= 2) {
      let len = sel.length - 1;
      return [sel[0], sel[len]];
    }
    return sel;
  }
  function monthSelectedM(e, scene) {
    selected.value = e;
    if (!props.showConfirm) {
      if (props.mode === "multiple" || props.mode === "single" || props.mode === "range" && selected.value.length >= 2) {
        if (scene === "tap") {
          emit("confirm", getConfirmValue());
        }
      }
    }
  }
  function getMonths(minD = null, maxD = null) {
    const minYear = uni_modules_limeDayuts_common_index.dayuts(minD).year();
    const minMonth = uni_modules_limeDayuts_common_index.dayuts(minD).month() + 1;
    const maxYear = uni_modules_limeDayuts_common_index.dayuts(maxD).year();
    const maxMonth = uni_modules_limeDayuts_common_index.dayuts(maxD).month() + 1;
    return (maxYear - minYear) * 12 + (maxMonth - minMonth) + 1;
  }
  function getDefaultMonthIndex() {
    let sel = uni_modules_limeDayuts_common_index.dayuts().format("YYYY-MM");
    if (props.defaultDate != null) {
      if (!uni_modules_uviewUltra_libs_function_test.array(props.defaultDate)) {
        sel = uni_modules_limeDayuts_common_index.dayuts(props.defaultDate).format("YYYY-MM");
      } else if (props.defaultDate.length > 0) {
        sel = uni_modules_limeDayuts_common_index.dayuts(props.defaultDate[0]).format("YYYY-MM");
      }
    }
    const idx = months.value.findIndex((_a2) => {
      var year = _a2.year, month = _a2.month;
      month = uni_modules_uviewUltra_libs_function_index.padZero(month);
      return `${year}-${month}` === sel;
    });
    return idx == -1 ? 0 : idx;
  }
  function setMonth() {
    const minD = innerMinDate.value != "" && innerMinDate.value != "0" ? innerMinDate.value : uni_modules_limeDayuts_common_index.dayuts().valueOf();
    const maxD = innerMaxDate.value != "" && innerMaxDate.value != "0" ? innerMaxDate.value : uni_modules_limeDayuts_common_index.dayuts(minD).add(parseInt(props.monthNum.toString()) - 1, "month").valueOf();
    const monthCount = uni_modules_uviewUltra_libs_function_index.range(1, parseInt(props.monthNum.toString()), getMonths(minD, maxD));
    let newMonths = [];
    const minDateStr = uni_modules_limeDayuts_common_index.dayuts(minD).format("YYYY-MM-DD");
    const maxDateStr = uni_modules_limeDayuts_common_index.dayuts(maxD).format("YYYY-MM-DD");
    for (let i = 0; i < monthCount; i++) {
      const monthBase = uni_modules_limeDayuts_common_index.dayuts(minD).add(i, "month");
      const daysInMonth = monthBase.daysInMonth();
      const monthValue = monthBase.month() + 1;
      const yearValue = monthBase.year();
      let cdate = [];
      for (let day = 1; day <= daysInMonth; day++) {
        const dayBase = monthBase.date(day);
        const date = dayBase.format("YYYY-MM-DD");
        const week = dayBase.day();
        let config = new uni_modules_uviewUltra_components_upCalendar_types.UPCalendarMonthsItemDate({
          selected: null,
          day: day.toString(),
          week,
          disabled: date < minDateStr || date > maxDateStr,
          date: new Date(date),
          dateStr: date,
          bottomInfo: "",
          dot: false,
          month: monthValue
        });
        cdate.push(config);
      }
      let md = new uni_modules_uviewUltra_components_upCalendar_types.CalendarMonthItem({
        top: 0,
        date: cdate,
        month: monthValue.toString(),
        year: yearValue.toString()
      });
      newMonths.push(md);
    }
    months.value = newMonths;
    if (props.monthSwitch) {
      monthIndex.value = getDefaultMonthIndex();
    }
  }
  function scrollIntoDefaultMonth(selMonth) {
    const _index = months.value.findIndex((_a2) => {
      var year = _a2.year, month = _a2.month;
      month = uni_modules_uviewUltra_libs_function_index.padZero(month);
      return `${year}-${month}` === selMonth;
    });
    if (_index != -1) {
      common_vendor.nextTick$1(() => {
        scrollIntoView.value = "";
        scrollIntoView.value = `month-${_index}`;
      });
    }
  }
  function jumpToToday() {
    if (todayDisabled.value)
      return null;
    const targetMonth = uni_modules_limeDayuts_common_index.dayuts(todayDate.value).format("YYYY-MM");
    if (props.monthSwitch) {
      const todayMonthIdx = months.value.findIndex((_a2) => {
        var year = _a2.year, month = _a2.month;
        month = uni_modules_uviewUltra_libs_function_index.padZero(month);
        return `${year}-${month}` == targetMonth;
      });
      if (todayMonthIdx != -1) {
        monthIndex.value = todayMonthIdx;
      }
      return null;
    }
    scrollIntoDefaultMonth(targetMonth);
  }
  function updateMonthTopM(topArr) {
    topArr.map((item, index) => {
      if (index < months.value.length) {
        months.value[index].top = item;
      }
    });
    if (props.defaultDate == null) {
      const sel_1 = uni_modules_limeDayuts_common_index.dayuts().format("YYYY-MM");
      scrollIntoDefaultMonth(sel_1);
      return null;
    }
    let sel = uni_modules_limeDayuts_common_index.dayuts().format("YYYY-MM");
    if (!uni_modules_uviewUltra_libs_function_test.array(props.defaultDate)) {
      sel = uni_modules_limeDayuts_common_index.dayuts(props.defaultDate).format("YYYY-MM");
    } else {
      sel = uni_modules_limeDayuts_common_index.dayuts(props.defaultDate[0]).format("YYYY-MM");
    }
    scrollIntoDefaultMonth(sel);
  }
  function onUpdateMonthTopM(topArr) {
    if (props.monthSwitch)
      return null;
    updateMonthTopM(topArr);
  }
  function onScroll(event) {
    const curScrollTop = Math.max(0, event.detail.scrollTop);
    for (let i = 0; i < months.value.length; i++) {
      if (curScrollTop >= (months.value[i].top > 0 ? months.value[i].top : listHeight.value)) {
        monthIndex.value = i;
      }
    }
  }
  function init() {
    listHeight.value = parseInt(props.rowHeight.toString()) * (props.monthSwitch ? 6 : 5) + 30;
    setMonth();
    inited.value = true;
  }
  function close() {
    emit("close");
  }
  function confirm() {
    if (!buttonDisabled.value) {
      emit("confirm", getConfirmValue());
    }
  }
  function prevMonth() {
    if (!switchPrevDisabled.value) {
      monthIndex.value -= 1;
    }
  }
  function nextMonth() {
    if (!switchNextDisabled.value) {
      monthIndex.value += 1;
    }
  }
  function prevYear() {
    if (!switchPrevYearDisabled.value) {
      monthIndex.value -= 12;
    }
  }
  function nextYear() {
    if (!switchNextYearDisabled.value) {
      monthIndex.value += 12;
    }
  }
  common_vendor.watch(() => {
    return props.show;
  }, (nval) => {
    if (nval) {
      init();
    } else {
      scrollIntoView.value = "";
    }
  }, { immediate: true });
  common_vendor.watch(() => {
    return [props.defaultDate, innerMinDate.value, innerMaxDate.value];
  }, () => {
    if (inited.value)
      setMonth();
  });
  common_vendor.onMounted(() => {
    init();
  });
  __expose({
    init,
    setMonth,
    confirm,
    close
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: common_vendor.o(prevMonth, "e7"),
      b: common_vendor.o(nextMonth, "f3"),
      c: common_vendor.o(prevYear, "11"),
      d: common_vendor.o(nextYear, "2d"),
      e: common_vendor.o(jumpToToday, "c0"),
      f: common_vendor.p({
        title: elTitle.value,
        subtitle: subtitle.value,
        showSubtitle: __props.showSubtitle,
        showTitle: __props.showTitle,
        showSwitch: __props.monthSwitch,
        showToday: __props.showToday,
        todayText: todayText.value,
        todayDisabled: todayDisabled.value,
        prevDisabled: switchPrevDisabled.value,
        nextDisabled: switchNextDisabled.value,
        prevYearDisabled: switchPrevYearDisabled.value,
        nextYearDisabled: switchNextYearDisabled.value,
        class: "data-v-cf2b6afc"
      }),
      g: !__props.monthSwitch
    }, !__props.monthSwitch ? {
      h: common_vendor.sr("month", "cf2b6afc-2,cf2b6afc-0"),
      i: common_vendor.o(monthSelectedM, "ff"),
      j: common_vendor.o(onUpdateMonthTopM, "e2"),
      k: common_vendor.p({
        color: __props.color,
        rowHeight: __props.rowHeight,
        showMark: __props.showMark,
        months: months.value,
        mode: __props.mode,
        maxCount: __props.maxCount,
        startText: elStartText.value,
        endText: elEndText.value,
        defaultDate: __props.defaultDate,
        minDate: innerMinDate.value,
        maxDate: innerMaxDate.value,
        maxMonth: __props.monthNum,
        readonly: __props.readonly,
        maxRange: __props.maxRange,
        rangePrompt: __props.rangePrompt,
        showRangePrompt: __props.showRangePrompt,
        allowSameDay: __props.allowSameDay,
        todayDate: todayDate.value,
        class: "r data-v-cf2b6afc"
      }),
      l: common_vendor.s(listStyle.value),
      m: common_vendor.o(onScroll, "c7"),
      n: scrollTop.value,
      o: scrollIntoView.value
    } : {
      p: common_vendor.sr("month", "cf2b6afc-3,cf2b6afc-0"),
      q: common_vendor.o(monthSelectedM, "1a"),
      r: common_vendor.o(onUpdateMonthTopM, "dc"),
      s: common_vendor.p({
        color: __props.color,
        rowHeight: __props.rowHeight,
        showMark: __props.showMark,
        months: currentMonths.value,
        mode: __props.mode,
        maxCount: __props.maxCount,
        startText: elStartText.value,
        endText: elEndText.value,
        defaultDate: __props.defaultDate,
        minDate: innerMinDate.value,
        maxDate: innerMaxDate.value,
        maxMonth: __props.monthNum,
        readonly: __props.readonly,
        maxRange: __props.maxRange,
        rangePrompt: __props.rangePrompt,
        showRangePrompt: __props.showRangePrompt,
        allowSameDay: __props.allowSameDay,
        todayDate: todayDate.value,
        class: "r data-v-cf2b6afc"
      }),
      t: common_vendor.s(listStyle.value)
    }, {
      v: __props.showConfirm
    }, __props.showConfirm ? {
      w: common_vendor.o(confirm, "bf"),
      x: common_vendor.p({
        shape: "circle",
        text: buttonDisabled.value ? elConfirmDisabledText.value : elConfirmText.value,
        color: __props.color == "#3c9cff" ? "" : __props.color,
        type: __props.color == "#3c9cff" ? "primary" : "",
        disabled: buttonDisabled.value,
        customStyle: "min-width:120px;",
        class: "data-v-cf2b6afc"
      })
    } : {}, {
      y: common_vendor.gei(_ctx, ""),
      z: common_vendor.o(close, "a4"),
      A: common_vendor.p({
        show: __props.show,
        mode: "bottom",
        closeable: true,
        round: __props.round,
        closeOnClickOverlay: __props.closeOnClickOverlay,
        safeAreaInsetBottom: __props.safeAreaInsetBottom,
        id: common_vendor.gei(_ctx, ""),
        class: "data-v-cf2b6afc"
      }),
      B: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-cf2b6afc"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-calendar/up-calendar.js.map
