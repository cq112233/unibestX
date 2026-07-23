"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upCalendar_types = require("./types.js");
require("./props.js");
require("./util.js");
const uni_modules_limeDayuts_common_index = require("../../../lime-dayuts/common/index.js");
require("../../../lime-dayuts/common/use.js");
require("../../../lime-dayuts/utssdk/interface.js");
const uni_modules_uviewUltra_libs_i18n_index = require("../../libs/i18n/index.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_function_test = require("../../libs/function/test.js");
const uni_modules_uviewUltra_components_upCalendar_calendar = require("./calendar.js");
const uHeader = () => "./header.js";
const uMonth = () => "./month.js";
let calendarProp = uni_modules_uviewUltra_components_upCalendar_calendar.defProps["calendar"];
const _sfc_main = common_vendor.defineComponent({
  name: "up-calendar",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin],
  // mixins: [mpMixin, mixin, propsCalendar],
  components: {
    uHeader,
    uMonth
  },
  props: {
    // 日历顶部标题
    title: {
      type: String,
      default: calendarProp["title"]
    },
    // 是否显示标题
    showTitle: {
      type: Boolean,
      default: calendarProp["showTitle"]
    },
    // 是否显示副标题
    showSubtitle: {
      type: Boolean,
      default: calendarProp["showSubtitle"]
    },
    // 日期类型选择，single-选择单个日期，multiple-可以选择多个日期，range-选择日期范围
    mode: {
      type: String,
      default: calendarProp["mode"]
    },
    // mode=range时，第一个日期底部的提示文字
    startText: {
      type: String,
      default: calendarProp["startText"]
    },
    // mode=range时，最后一个日期底部的提示文字
    endText: {
      type: String,
      default: calendarProp["endText"]
    },
    // 自定义列表
    customList: {
      type: Array,
      default: calendarProp["customList"]
    },
    // 主题色，对底部按钮和选中日期有效
    color: {
      type: String,
      default: calendarProp["color"]
    },
    // 最小的可选日期
    minDate: {
      type: [String, Number],
      default: calendarProp["minDate"]
    },
    // 最大可选日期
    maxDate: {
      type: [String, Number],
      default: calendarProp["maxDate"]
    },
    // 默认选中的日期，mode为multiple或range是必须为数组格式
    // @ts-ignore
    defaultDate: {
      type: [Array, String, Date, null],
      default: calendarProp["defaultDate"]
    },
    // mode=multiple时，最多可选多少个日期
    maxCount: {
      type: [String, Number],
      default: calendarProp["maxCount"]
    },
    // 日期行高
    rowHeight: {
      type: [String, Number],
      default: calendarProp["rowHeight"]
    },
    // 日期格式化函数
    // @ts-ignore
    formatter: {
      type: [Function, null],
      default: calendarProp["formatter"]
    },
    // 是否显示农历
    showLunar: {
      type: Boolean,
      default: calendarProp["showLunar"]
    },
    // 是否显示月份背景色
    showMark: {
      type: Boolean,
      default: calendarProp["showMark"]
    },
    // 确定按钮的文字
    confirmText: {
      type: String,
      default: calendarProp["confirmText"]
    },
    // 确认按钮处于禁用状态时的文字
    confirmDisabledText: {
      type: String,
      default: calendarProp["confirmDisabledText"]
    },
    // 是否显示日历弹窗
    show: {
      type: Boolean,
      default: calendarProp["show"]
    },
    // 是否允许点击遮罩关闭日历
    closeOnClickOverlay: {
      type: Boolean,
      default: calendarProp["closeOnClickOverlay"]
    },
    // 是否为只读状态，只读状态下禁止选择日期
    readonly: {
      type: Boolean,
      default: calendarProp["readonly"]
    },
    // 	是否展示确认按钮
    showConfirm: {
      type: Boolean,
      default: calendarProp["showConfirm"]
    },
    // 日期区间最多可选天数，默认无限制，mode = range时有效
    maxRange: {
      type: [Number, String],
      default: calendarProp["maxRange"]
    },
    // 范围选择超过最多可选天数时的提示文案，mode = range时有效
    rangePrompt: {
      type: String,
      default: calendarProp["rangePrompt"]
    },
    // 范围选择超过最多可选天数时，是否展示提示文案，mode = range时有效
    showRangePrompt: {
      type: Boolean,
      default: calendarProp["showRangePrompt"]
    },
    // 是否允许日期范围的起止时间为同一天，mode = range时有效
    allowSameDay: {
      type: Boolean,
      default: calendarProp["allowSameDay"]
    },
    // 区间模式下确认返回值格式，all-返回区间内所有日期，boundary-仅返回起止日期
    rangeResultMode: {
      type: String,
      default: calendarProp["rangeResultMode"]
    },
    // 圆角值
    round: {
      type: [Boolean, String, Number],
      default: calendarProp["round"]
    },
    // 最多展示月份数量
    monthNum: {
      type: [Number, String],
      default: 3
    },
    // 是否启用非滚动的单月切换模式
    monthSwitch: {
      type: Boolean,
      default: calendarProp["monthSwitch"]
    },
    // 是否显示今天按钮
    showToday: {
      type: Boolean,
      default: calendarProp["showToday"]
    }
  },
  data() {
    return {
      start: 0,
      inited: false,
      // 需要显示的月份的数组
      months: [],
      // 在月份滚动区域中，当前视图中月份的index索引
      monthIndex: 0,
      // 月份滚动区域的高度
      listHeight: 0,
      // month组件中选择的日期数组
      selected: [],
      scrollIntoView: "",
      scrollIntoViewScroll: "",
      scrollTop: 0,
      // 过滤处理方法
      innerFormatter: (value) => {
        return value;
      }
    };
  },
  watch: {
    defaultDate: new UTSJSONObject({
      handler() {
        if (this.inited)
          this.setMonth();
      }
    }),
    // @ts-ignore
    selectedChange: new UTSJSONObject({
      handler() {
        if (this.inited)
          this.setMonth();
      }
    }),
    // 打开弹窗时，设置月份数据
    show: new UTSJSONObject({
      immediate: true,
      handler(nval = null) {
        if (nval) {
          this.init();
        } else {
          this.scrollIntoView = "";
        }
      }
    })
  },
  computed: {
    // 由于maxDate和minDate可以为字符串(2021-10-10)，或者数值(时间戳)，但是dayuts如果接受字符串形式的时间戳会有问题，这里进行处理
    innerMaxDate() {
      return uni_modules_uviewUltra_libs_function_test.number(this.maxDate) ? this.maxDate.toString() : this.maxDate.toString();
    },
    innerMinDate() {
      return uni_modules_uviewUltra_libs_function_test.number(this.minDate) ? this.minDate.toString() : this.minDate.toString();
    },
    todayDate() {
      return uni_modules_limeDayuts_common_index.dayuts().format("YYYY-MM-DD");
    },
    todayText() {
      return uni_modules_uviewUltra_libs_i18n_index.t("up.calendar.today", new UTSJSONObject({}));
    },
    todayDisabled() {
      let today = uni_modules_limeDayuts_common_index.dayuts(this.todayDate);
      let innerMinDate = this.innerMinDate;
      let innerMaxDate = this.innerMaxDate;
      if (innerMinDate != "" && innerMinDate != "0" && today.isBefore(uni_modules_limeDayuts_common_index.dayuts(innerMinDate), "day")) {
        return true;
      }
      if (innerMaxDate != "" && innerMaxDate != "0" && today.isAfter(uni_modules_limeDayuts_common_index.dayuts(innerMaxDate), "day")) {
        return true;
      }
      return false;
    },
    // 多个条件的变化，会引起选中日期的变化，这里统一管理监听
    selectedChange() {
      return [this.innerMinDate, this.innerMaxDate];
    },
    subtitle() {
      if (this.months.length > 0) {
        let monthIndex = this.monthIndex;
        return `${this.months[monthIndex]["year"]}年${// @ts-ignore
        this.months[monthIndex]["month"]}月`;
      } else {
        return "";
      }
    },
    currentMonths() {
      if (this.monthSwitch && this.months.length > 0) {
        return [this.months[this.monthIndex]];
      }
      return this.months;
    },
    switchPrevDisabled() {
      return this.monthIndex <= 0;
    },
    switchNextDisabled() {
      return this.monthIndex >= this.months.length - 1;
    },
    switchPrevYearDisabled() {
      return this.monthIndex - 12 < 0;
    },
    switchNextYearDisabled() {
      return this.monthIndex + 12 > this.months.length - 1;
    },
    buttonDisabled() {
      if (this.mode === "range") {
        if (this.selected.length <= 1) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  },
  mounted() {
    this.start = Date.now();
  },
  emits: ["confirm", "close"],
  methods: {
    addUnit(e = null) {
      return uni_modules_uviewUltra_libs_function_index.addUnit(e);
    },
    getConfirmValue(selected = null) {
      const sel = selected !== null && selected !== void 0 ? selected : this.selected;
      if (this.mode == "range" && this.rangeResultMode == "boundary" && sel.length >= 2) {
        let len = sel.length - 1;
        return [sel[0], sel[len]];
      }
      return sel;
    },
    // 在微信小程序中，不支持将函数当做props参数，故只能通过ref形式调用
    setFormatter(e) {
      this.innerFormatter = e;
    },
    // month组件内部选择日期后，通过事件通知给父组件
    monthSelectedM(e, scene) {
      this.selected = e;
      if (!this.showConfirm) {
        if (
          // @ts-ignore
          this.mode === "multiple" || // @ts-ignore
          this.mode === "single" || // @ts-ignore
          this.mode === "range" && this.selected.length >= 2
        ) {
          if (scene === "init") {
            return null;
          }
          if (scene === "tap") {
            this.$emit("confirm", this.getConfirmValue());
          }
        }
      }
    },
    init() {
      if (
        // @ts-ignore
        this.innerMaxDate != "0" && this.innerMaxDate != "" && // @ts-ignore
        this.innerMinDate != "0" && this.innerMinDate != "" && // @ts-ignore
        new Date(this.innerMaxDate).getTime() < new Date(this.innerMinDate).getTime()
      ) {
        common_vendor.index.__f__("log", "at uni_modules/uview-ultra/components/up-calendar/up-calendar.uvue:535", this.innerMaxDate);
        return uni_modules_uviewUltra_libs_function_index.error("maxDate不能小于minDate时间");
      }
      this.listHeight = this.rowHeight * (this.monthSwitch ? 6 : 5) + 30;
      this.setMonth();
      this.inited = true;
    },
    close() {
      this.$emit("close");
    },
    // 点击确定按钮
    confirm() {
      if (!this.buttonDisabled) {
        this.$emit("confirm", this.getConfirmValue());
      }
    },
    // 获得两个日期之间的月份数
    getMonths(minDate = null, maxDate = null) {
      const minYear = uni_modules_limeDayuts_common_index.dayuts(minDate).year();
      const minMonth = uni_modules_limeDayuts_common_index.dayuts(minDate).month() + 1;
      const maxYear = uni_modules_limeDayuts_common_index.dayuts(maxDate).year();
      const maxMonth = uni_modules_limeDayuts_common_index.dayuts(maxDate).month() + 1;
      return (maxYear - minYear) * 12 + (maxMonth - minMonth) + 1;
    },
    // 设置月份数据
    setMonth() {
      const minDate = this.innerMinDate != "" && this.innerMinDate != "0" ? this.innerMinDate : uni_modules_limeDayuts_common_index.dayuts().valueOf();
      const maxDate = (
        // @ts-ignore
        this.innerMaxDate != "" && this.innerMaxDate != "0" ? this.innerMaxDate : uni_modules_limeDayuts_common_index.dayuts(minDate).add(this.monthNum - 1, "month").valueOf()
      );
      const months = uni_modules_uviewUltra_libs_function_index.range(
        1,
        // @ts-ignore
        this.monthNum,
        this.getMonths(minDate, maxDate)
      );
      this.months = [];
      const minDateStr = uni_modules_limeDayuts_common_index.dayuts(minDate).format("YYYY-MM-DD");
      const maxDateStr = uni_modules_limeDayuts_common_index.dayuts(maxDate).format("YYYY-MM-DD");
      for (let i = 0; i < months; i++) {
        const monthBase = uni_modules_limeDayuts_common_index.dayuts(minDate).add(i, "month");
        const daysInMonth = monthBase.daysInMonth();
        const monthValue = monthBase.month() + 1;
        const yearValue = monthBase.year();
        let cdate = [];
        for (let day = 1; day <= daysInMonth; day++) {
          const dayBase = monthBase.date(day);
          const date = dayBase.format("YYYY-MM-DD");
          const week = dayBase.day();
          let bottomInfo = "";
          let config = new uni_modules_uviewUltra_components_upCalendar_types.UPCalendarMonthsItemDate({
            selected: null,
            day: day.toString(),
            week,
            disabled: date < minDateStr || date > maxDateStr,
            date: new Date(date),
            dateStr: date,
            bottomInfo,
            dot: false,
            month: monthValue
          });
          cdate.push(config);
        }
        let md = new monthsItem(
          {
            top: 0,
            date: cdate,
            // 当前所属的月份
            month: monthValue.toString(),
            // 当前年份
            year: yearValue.toString()
          }
          // @ts-ignore
        );
        this.months.push(md);
      }
      if (this.monthSwitch) {
        this.monthIndex = this.getDefaultMonthIndex();
      }
    },
    getDefaultMonthIndex() {
      let selected = uni_modules_limeDayuts_common_index.dayuts().format("YYYY-MM");
      if (this.defaultDate != null) {
        if (!uni_modules_uviewUltra_libs_function_test.array(this.defaultDate)) {
          selected = uni_modules_limeDayuts_common_index.dayuts(this.defaultDate).format("YYYY-MM");
        } else if (this.defaultDate.length > 0) {
          selected = uni_modules_limeDayuts_common_index.dayuts(this.defaultDate[0]).format("YYYY-MM");
        }
      }
      const index = this.months.findIndex((_a) => {
        var year = _a.year, month = _a.month;
        month = uni_modules_uviewUltra_libs_function_index.padZero(month);
        return `${year}-${month}` === selected;
      });
      return index == -1 ? 0 : index;
    },
    prevMonth() {
      if (!this.switchPrevDisabled) {
        this.monthIndex -= 1;
      }
    },
    nextMonth() {
      if (!this.switchNextDisabled) {
        this.monthIndex += 1;
      }
    },
    prevYear() {
      if (!this.switchPrevYearDisabled) {
        this.monthIndex -= 12;
      }
    },
    nextYear() {
      if (!this.switchNextYearDisabled) {
        this.monthIndex += 12;
      }
    },
    jumpToToday() {
      if (this.todayDisabled) {
        return null;
      }
      const targetMonth = uni_modules_limeDayuts_common_index.dayuts(this.todayDate).format("YYYY-MM");
      if (this.monthSwitch) {
        const todayMonthIndex = this.months.findIndex((_a) => {
          var year = _a.year, month = _a.month;
          month = uni_modules_uviewUltra_libs_function_index.padZero(month);
          return `${year}-${month}` == targetMonth;
        });
        if (todayMonthIndex != -1) {
          this.monthIndex = todayMonthIndex;
        }
        return null;
      }
      this.scrollIntoDefaultMonth(targetMonth);
    },
    // 滚动到默认设置的月份
    scrollIntoDefaultMonth(selected) {
      const _index = this.months.findIndex((_a) => {
        var year = _a.year, month = _a.month;
        month = uni_modules_uviewUltra_libs_function_index.padZero(month);
        return `${year}-${month}` === selected;
      });
      if (_index != -1) {
        this.scrollTop = this.months[_index].top || 0;
      }
    },
    // scroll-view滚动监听
    onScroll(event) {
      const scrollTop = Math.max(0, event.detail.scrollTop);
      for (let i = 0; i < this.months.length; i++) {
        if (scrollTop >= (this.months[i].top > 0 ? this.months[i].top : this.listHeight)) {
          this.monthIndex = i;
          this.scrollIntoViewScroll = `month-${i}`;
        }
      }
    },
    // 更新月份的top值
    onUpdateMonthTopM(topArr) {
      if (this.monthSwitch) {
        return null;
      }
      this.updateMonthTopM(topArr);
    },
    updateMonthTopM(topArr) {
      topArr.map((item, index) => {
        this.months[index]["top"] = item;
      });
      if (this.defaultDate == null) {
        const select = uni_modules_limeDayuts_common_index.dayuts().format("YYYY-MM");
        this.scrollIntoDefaultMonth(select);
        return null;
      }
      let selected = uni_modules_limeDayuts_common_index.dayuts().format("YYYY-MM");
      if (!uni_modules_uviewUltra_libs_function_test.array(this.defaultDate)) {
        selected = uni_modules_limeDayuts_common_index.dayuts(this.defaultDate).format("YYYY-MM");
      } else {
        selected = uni_modules_limeDayuts_common_index.dayuts(this.defaultDate[0]).format("YYYY-MM");
      }
      this.scrollIntoDefaultMonth(selected);
    }
  }
});
if (!Array) {
  const _component_uHeader = common_vendor.resolveComponent("uHeader");
  const _component_uMonth = common_vendor.resolveComponent("uMonth");
  const _easycom_up_button2 = common_vendor.resolveComponent("up-button");
  const _easycom_up_popup2 = common_vendor.resolveComponent("up-popup");
  (_component_uHeader + _component_uMonth + _easycom_up_button2 + _easycom_up_popup2)();
}
const _easycom_up_button = () => "../up-button/up-button.js";
const _easycom_up_popup = () => "../up-popup/up-popup.js";
if (!Math) {
  (_easycom_up_button + _easycom_up_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: common_vendor.o($options.prevMonth, "1b"),
    b: common_vendor.o($options.nextMonth, "a7"),
    c: common_vendor.o($options.prevYear, "a2"),
    d: common_vendor.o($options.nextYear, "b4"),
    e: common_vendor.o($options.jumpToToday, "7a"),
    f: common_vendor.p({
      title: $props.title,
      subtitle: $options.subtitle,
      showSubtitle: $props.showSubtitle,
      showTitle: $props.showTitle,
      showSwitch: $props.monthSwitch,
      showToday: $props.showToday,
      todayText: $options.todayText,
      todayDisabled: $options.todayDisabled,
      prevDisabled: $options.switchPrevDisabled,
      nextDisabled: $options.switchNextDisabled,
      prevYearDisabled: $options.switchPrevYearDisabled,
      nextYearDisabled: $options.switchNextYearDisabled,
      class: "data-v-cf2b6afc"
    }),
    g: !$props.monthSwitch
  }, !$props.monthSwitch ? {
    h: common_vendor.sr("month", "cf2b6afc-2,cf2b6afc-0"),
    i: common_vendor.o($options.monthSelectedM, "f7"),
    j: common_vendor.o($options.onUpdateMonthTopM, "f6"),
    k: common_vendor.p({
      color: $props.color,
      rowHeight: $props.rowHeight,
      showMark: $props.showMark,
      months: $data.months,
      mode: $props.mode,
      maxCount: $props.maxCount,
      startText: $props.startText,
      endText: $props.endText,
      defaultDate: $props.defaultDate,
      minDate: $options.innerMinDate,
      maxDate: $options.innerMaxDate,
      maxMonth: $props.monthNum,
      readonly: $props.readonly,
      maxRange: $props.maxRange,
      rangePrompt: $props.rangePrompt,
      showRangePrompt: $props.showRangePrompt,
      allowSameDay: $props.allowSameDay,
      todayDate: $options.todayDate,
      class: "r data-v-cf2b6afc"
    }),
    l: $options.addUnit($data.listHeight),
    m: common_vendor.o((...args) => $options.onScroll && $options.onScroll(...args), "2a"),
    n: $data.scrollTop,
    o: $data.scrollIntoView
  } : {
    p: common_vendor.sr("month", "cf2b6afc-3,cf2b6afc-0"),
    q: common_vendor.o($options.monthSelectedM, "b9"),
    r: common_vendor.o($options.onUpdateMonthTopM, "06"),
    s: common_vendor.p({
      color: $props.color,
      rowHeight: $props.rowHeight,
      showMark: $props.showMark,
      months: $options.currentMonths,
      mode: $props.mode,
      maxCount: $props.maxCount,
      startText: $props.startText,
      endText: $props.endText,
      defaultDate: $props.defaultDate,
      minDate: $options.innerMinDate,
      maxDate: $options.innerMaxDate,
      maxMonth: $props.monthNum,
      readonly: $props.readonly,
      maxRange: $props.maxRange,
      rangePrompt: $props.rangePrompt,
      showRangePrompt: $props.showRangePrompt,
      allowSameDay: $props.allowSameDay,
      todayDate: $options.todayDate,
      class: "r data-v-cf2b6afc"
    }),
    t: $options.addUnit($data.listHeight)
  }, {
    v: $props.showConfirm
  }, $props.showConfirm ? {
    w: common_vendor.o($options.confirm, "12"),
    x: common_vendor.p({
      shape: "circle",
      text: $options.buttonDisabled ? $props.confirmDisabledText : $props.confirmText,
      color: $props.color == "#3c9cff" ? "" : $props.color,
      type: $props.color == "#3c9cff" ? "primary" : "",
      disabled: $options.buttonDisabled,
      class: "data-v-cf2b6afc"
    })
  } : {}, {
    y: common_vendor.gei(_ctx, ""),
    z: common_vendor.o($options.close, "0c"),
    A: common_vendor.p({
      show: $props.show,
      mode: "bottom",
      closeable: true,
      round: $props.round,
      closeOnClickOverlay: $props.closeOnClickOverlay,
      id: common_vendor.gei(_ctx, ""),
      class: "data-v-cf2b6afc"
    }),
    B: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-cf2b6afc"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-calendar/up-calendar.js.map
