import { _ as __easycom_2$1 } from "../up-button/up-button.js";
const { defineComponent, resolveComponent, resolveDynamicComponent, openBlock, createBlock, withCtx, createElementVNode, createVNode, createElementBlock, normalizeStyle, renderSlot, createCommentVNode } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_2$2 } from "../up-popup/up-popup.js";
import { u as uHeader } from "./header.js";
import { U as UPCalendarMonthsItemDate } from "./types.js";
import { u as uMonth, m as monthsItem } from "./month.js";
import "./props.js";
import "./util.js";
import { d as dayuts } from "../../../lime-dayuts/common/index.js";
import "../../../lime-dayuts/common/use.js";
import "../../../lime-dayuts/utssdk/interface.js";
import { t, f as formatMonthTitle } from "../../libs/i18n/index.js";
import { m as mpMixin } from "../../libs/mixin/mpMixin.js";
import { m as mixin } from "../../libs/mixin/mixin.js";
import { a as addUnit, f as error, h as range, p as padZero } from "../../libs/function/index.js";
import { n as number, a as array } from "../../libs/function/test.js";
import { d as defProps } from "./calendar.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
var _a;
let calendarProp = defProps["calendar"];
const _sfc_main = defineComponent({
  name: "up-calendar",
  mixins: [mpMixin, mixin],
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
    },
    // 是否为iPhoneX留出底部安全距离
    safeAreaInsetBottom: {
      type: Boolean,
      default: (_a = calendarProp["safeAreaInsetBottom"]) !== null && _a !== void 0 ? _a : true
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
      return number(this.maxDate) ? this.maxDate.toString() : this.maxDate.toString();
    },
    innerMinDate() {
      return number(this.minDate) ? this.minDate.toString() : this.minDate.toString();
    },
    todayDate() {
      return dayuts().format("YYYY-MM-DD");
    },
    todayText() {
      return t("up.calendar.today", new UTSJSONObject({}));
    },
    todayDisabled() {
      let today = dayuts(this.todayDate);
      let innerMinDate = this.innerMinDate;
      let innerMaxDate = this.innerMaxDate;
      if (innerMinDate != "" && innerMinDate != "0" && today.isBefore(dayuts(innerMinDate), "day")) {
        return true;
      }
      if (innerMaxDate != "" && innerMaxDate != "0" && today.isAfter(dayuts(innerMaxDate), "day")) {
        return true;
      }
      return false;
    },
    // 多个条件的变化，会引起选中日期的变化，这里统一管理监听
    selectedChange() {
      return [this.innerMinDate, this.innerMaxDate];
    },
    elTitle() {
      if (this.title != "" && this.title != "日期选择") {
        return this.title;
      }
      return t("up.calendar.chooseDates", new UTSJSONObject({}));
    },
    elConfirmText() {
      if (this.confirmText != "" && this.confirmText != "确定") {
        return this.confirmText;
      }
      return t("up.common.confirm", new UTSJSONObject({}));
    },
    elConfirmDisabledText() {
      if (this.confirmDisabledText != "" && this.confirmDisabledText != "确定") {
        return this.confirmDisabledText;
      }
      return t("up.common.confirm", new UTSJSONObject({}));
    },
    elStartText() {
      if (this.startText != "" && this.startText != "开始") {
        return this.startText;
      }
      return t("up.common.start", new UTSJSONObject({}));
    },
    elEndText() {
      if (this.endText != "" && this.endText != "结束") {
        return this.endText;
      }
      return t("up.common.end", new UTSJSONObject({}));
    },
    subtitle() {
      if (this.months.length > 0) {
        let monthIndex = this.monthIndex;
        const item = this.months[monthIndex];
        return formatMonthTitle(item.year, item.month);
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
      return addUnit(e);
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
        uni.__f__("log", "at uni_modules/uview-ultra/components/up-calendar/up-calendar.uvue:569", this.innerMaxDate);
        return error("maxDate不能小于minDate时间");
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
      const minYear = dayuts(minDate).year();
      const minMonth = dayuts(minDate).month() + 1;
      const maxYear = dayuts(maxDate).year();
      const maxMonth = dayuts(maxDate).month() + 1;
      return (maxYear - minYear) * 12 + (maxMonth - minMonth) + 1;
    },
    // 设置月份数据
    setMonth() {
      const minDate = this.innerMinDate != "" && this.innerMinDate != "0" ? this.innerMinDate : dayuts().valueOf();
      const maxDate = (
        // @ts-ignore
        this.innerMaxDate != "" && this.innerMaxDate != "0" ? this.innerMaxDate : dayuts(minDate).add(this.monthNum - 1, "month").valueOf()
      );
      const months = range(
        1,
        // @ts-ignore
        this.monthNum,
        this.getMonths(minDate, maxDate)
      );
      this.months = [];
      const minDateStr = dayuts(minDate).format("YYYY-MM-DD");
      const maxDateStr = dayuts(maxDate).format("YYYY-MM-DD");
      for (let i = 0; i < months; i++) {
        const monthBase = dayuts(minDate).add(i, "month");
        const daysInMonth = monthBase.daysInMonth();
        const monthValue = monthBase.month() + 1;
        const yearValue = monthBase.year();
        let cdate = [];
        for (let day = 1; day <= daysInMonth; day++) {
          const dayBase = monthBase.date(day);
          const date = dayBase.format("YYYY-MM-DD");
          const week = dayBase.day();
          let bottomInfo = "";
          let config = new UPCalendarMonthsItemDate({
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
      let selected = dayuts().format("YYYY-MM");
      if (this.defaultDate != null) {
        if (!array(this.defaultDate)) {
          selected = dayuts(this.defaultDate).format("YYYY-MM");
        } else if (this.defaultDate.length > 0) {
          selected = dayuts(this.defaultDate[0]).format("YYYY-MM");
        }
      }
      const index = this.months.findIndex((_a2) => {
        var year = _a2.year, month = _a2.month;
        month = padZero(month);
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
      const targetMonth = dayuts(this.todayDate).format("YYYY-MM");
      if (this.monthSwitch) {
        const todayMonthIndex = this.months.findIndex((_a2) => {
          var year = _a2.year, month = _a2.month;
          month = padZero(month);
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
      const _index = this.months.findIndex((_a2) => {
        var year = _a2.year, month = _a2.month;
        month = padZero(month);
        return `${year}-${month}` === selected;
      });
      if (_index != -1) {
        this.$nextTick(() => {
          this.scrollIntoView = "";
          this.scrollIntoView = `month-${_index}`;
          this.scrollIntoViewScroll = this.scrollIntoView;
        });
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
        const select = dayuts().format("YYYY-MM");
        this.scrollIntoDefaultMonth(select);
        return null;
      }
      let selected = dayuts().format("YYYY-MM");
      if (!array(this.defaultDate)) {
        selected = dayuts(this.defaultDate).format("YYYY-MM");
      } else {
        selected = dayuts(this.defaultDate[0]).format("YYYY-MM");
      }
      this.scrollIntoDefaultMonth(selected);
    }
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-calendar__confirm": { "": { "paddingTop": 12, "paddingRight": 18, "paddingBottom": 16, "paddingLeft": 18 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uHeader = resolveComponent("uHeader");
  const _component_uMonth = resolveComponent("uMonth");
  const _component_up_button = resolveEasycom(resolveDynamicComponent("up-button"), __easycom_2$1);
  const _component_up_popup = resolveEasycom(resolveDynamicComponent("up-popup"), __easycom_2$2);
  return openBlock(), createBlock(_component_up_popup, {
    show: $props.show,
    mode: "bottom",
    closeable: "",
    onClose: $options.close,
    round: $props.round,
    closeOnClickOverlay: $props.closeOnClickOverlay,
    safeAreaInsetBottom: $props.safeAreaInsetBottom
  }, {
    default: withCtx(() => [
      createElementVNode("view", { class: "up-calendar" }, [
        createVNode(_component_uHeader, {
          title: $options.elTitle,
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
          onPrev: $options.prevMonth,
          onNext: $options.nextMonth,
          onPrevYear: $options.prevYear,
          onNextYear: $options.nextYear,
          onToday: $options.jumpToToday
        }, null, 8, ["title", "subtitle", "showSubtitle", "showTitle", "showSwitch", "showToday", "todayText", "todayDisabled", "prevDisabled", "nextDisabled", "prevYearDisabled", "nextYearDisabled", "onPrev", "onNext", "onPrevYear", "onNextYear", "onToday"]),
        !$props.monthSwitch ? (openBlock(), createElementBlock("scroll-view", {
          key: 0,
          style: normalizeStyle({ height: $options.addUnit($data.listHeight) }),
          direction: "vertical",
          onScroll: _cache[0] || (_cache[0] = (...args) => $options.onScroll && $options.onScroll(...args)),
          "scroll-top": $data.scrollTop,
          scrollIntoView: $data.scrollIntoView
        }, [
          createVNode(_component_uMonth, {
            color: $props.color,
            rowHeight: $props.rowHeight,
            showMark: $props.showMark,
            months: $data.months,
            mode: $props.mode,
            maxCount: $props.maxCount,
            startText: $options.elStartText,
            endText: $options.elEndText,
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
            ref: "month",
            onMonthSelected: $options.monthSelectedM,
            onUpdateMonthTop: $options.onUpdateMonthTopM
          }, null, 8, ["color", "rowHeight", "showMark", "months", "mode", "maxCount", "startText", "endText", "defaultDate", "minDate", "maxDate", "maxMonth", "readonly", "maxRange", "rangePrompt", "showRangePrompt", "allowSameDay", "todayDate", "onMonthSelected", "onUpdateMonthTop"])
        ], 44, ["scroll-top", "scrollIntoView"])) : (openBlock(), createElementBlock(
          "view",
          {
            key: 1,
            style: normalizeStyle({ height: $options.addUnit($data.listHeight) })
          },
          [
            createVNode(_component_uMonth, {
              color: $props.color,
              rowHeight: $props.rowHeight,
              showMark: $props.showMark,
              months: $options.currentMonths,
              mode: $props.mode,
              maxCount: $props.maxCount,
              startText: $options.elStartText,
              endText: $options.elEndText,
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
              ref: "month",
              onMonthSelected: $options.monthSelectedM,
              onUpdateMonthTop: $options.onUpdateMonthTopM
            }, null, 8, ["color", "rowHeight", "showMark", "months", "mode", "maxCount", "startText", "endText", "defaultDate", "minDate", "maxDate", "maxMonth", "readonly", "maxRange", "rangePrompt", "showRangePrompt", "allowSameDay", "todayDate", "onMonthSelected", "onUpdateMonthTop"])
          ],
          4
          /* STYLE */
        )),
        $props.showConfirm ? renderSlot(_ctx.$slots, "footer", { key: 2 }, () => [
          createElementVNode("view", { class: "up-calendar__confirm" }, [
            createVNode(_component_up_button, {
              shape: "circle",
              text: $options.buttonDisabled ? $options.elConfirmDisabledText : $options.elConfirmText,
              color: $props.color == "#3c9cff" ? "" : $props.color,
              type: $props.color == "#3c9cff" ? "primary" : "",
              onClick: $options.confirm,
              disabled: $options.buttonDisabled
            }, null, 8, ["text", "color", "type", "onClick", "disabled"])
          ])
        ]) : createCommentVNode("v-if", true)
      ])
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["show", "onClose", "round", "closeOnClickOverlay", "safeAreaInsetBottom"]);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-calendar/up-calendar.uvue"]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-calendar.js.map
