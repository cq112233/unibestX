const { defineComponent, openBlock, createElementBlock, Fragment, renderList, normalizeClass, createElementVNode, toDisplayString, createCommentVNode, normalizeStyle } = globalThis.Vue
import { m as mpMixin } from "../../libs/mixin/mpMixin.js";
import { m as mixin } from "../../libs/mixin/mixin.js";
import { a as addUnit, g as getWindowInfo } from "../../libs/function/index.js";
import { c as colorGradient } from "../../libs/function/colorGradient.js";
import { a as array } from "../../libs/function/test.js";
import { d as defProps } from "./calendar.js";
import { d as dayuts } from "../../../lime-dayuts/common/index.js";
import "../../../lime-dayuts/common/use.js";
import "../../../lime-dayuts/utssdk/interface.js";
import "./types.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
let calendarProp = defProps["calendar"];
class monthsItem extends UTS.UTSType {
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
      name: "monthsItem"
    };
  }
  constructor(options, metadata = monthsItem.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.top = this.__props__.top;
    this.year = this.__props__.year;
    this.month = this.__props__.month;
    this.date = this.__props__.date;
    delete this.__props__;
  }
}
const _sfc_main = defineComponent({
  name: "up-calendar-month",
  mixins: [mpMixin, mixin],
  props: {
    // 是否显示月份背景色
    showMark: {
      type: Boolean,
      default: true
    },
    // 主题色，对底部按钮和选中日期有效
    color: {
      type: String,
      default: "#3c9cff"
    },
    // 月份数据
    months: {
      type: Array,
      default: []
    },
    // 日期选择类型
    mode: {
      type: String,
      default: "single"
    },
    // 日期行高
    rowHeight: {
      type: [String, Number],
      default: 58
    },
    // mode=multiple时，最多可选多少个日期
    maxCount: {
      type: [String, Number],
      default: Infinity
    },
    // mode=range时，第一个日期底部的提示文字
    startText: {
      type: String,
      default: "开始"
    },
    // mode=range时，最后一个日期底部的提示文字
    endText: {
      type: String,
      default: "结束"
    },
    // 默认选中的日期，mode为multiple或range是必须为数组格式
    defaultDate: {
      type: [Array, String, Date],
      default: null
    },
    // 最小的可选日期
    minDate: {
      type: [String, Number],
      default: 0
    },
    // 最大可选日期
    maxDate: {
      type: [String, Number],
      default: 0
    },
    // 如果没有设置maxDate，则往后推多少个月
    maxMonth: {
      type: [String, Number],
      default: 2
    },
    // 是否为只读状态，只读状态下禁止选择日期
    readonly: {
      type: Boolean,
      default: () => {
        return calendarProp.getBoolean("readonly");
      }
    },
    // 日期区间最多可选天数，默认无限制，mode = range时有效
    maxRange: {
      type: [Number, String],
      default: 365
    },
    // 范围选择超过最多可选天数时的提示文案，mode = range时有效
    rangePrompt: {
      type: String,
      default: ""
    },
    // 范围选择超过最多可选天数时，是否展示提示文案，mode = range时有效
    showRangePrompt: {
      type: Boolean,
      default: true
    },
    // 是否允许日期范围的起止时间为同一天，mode = range时有效
    allowSameDay: {
      type: Boolean,
      default: false
    },
    // 今天日期，用于独立高亮
    todayDate: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      // 每个日期的宽度
      width: 0,
      // 当前选中的日期item
      item: null,
      monthsInner: [],
      selected: []
    };
  },
  watch: {
    selectedChange: {
      immediate: true,
      handler() {
        this.setDefaultDate();
      }
    },
    months: {
      immediate: true,
      handler() {
        this.monthsInner = this.months;
      }
    }
  },
  computed: {
    // 多个条件的变化，会引起选中日期的变化，这里统一管理监听
    selectedChange() {
      return [this.minDate, this.maxDate, this.defaultDate];
    },
    dayStyle() {
      return (index1, index2, item) => {
        const style = new UTSJSONObject({});
        if (item != null) {
          let week = item.week;
          style["height"] = addUnit(this.rowHeight);
          if (index2 == 0) {
            week = (week == 0 ? 7 : week) - 1;
            style["marginLeft"] = `${week / 7 * 100}%`;
          }
        }
        if (this.mode == "range") {
          style["padding"] = 0;
        }
        return style;
      };
    },
    daySelectStyle() {
      return (index1, index2, item) => {
        let date = item["dateStr"] != null ? item["dateStr"] : dayuts(item["date"]).format("YYYY-MM-DD"), style = new UTSJSONObject(
          {}
          // 判断date是否在selected数组中，因为月份可能会需要补0，所以使用dateSame判断，而不用数组的includes判断
        );
        const sameDate = (element) => {
          return this.dateSame(element, date);
        };
        if (this.selected.some(sameDate)) {
          let shouldActiveBg = true;
          if (this.mode == "range" && this.selected.length >= 2) {
            const len = this.selected.length - 1;
            if (!this.dateSame(date, this.selected[0]) && !this.dateSame(date, this.selected[len])) {
              shouldActiveBg = false;
            }
          }
          if (shouldActiveBg) {
            if (this.color != "#3c9cff") {
              style["backgroundColor"] = this.color;
            }
          }
        }
        if (this.todayDate != "" && this.dateSame(date, this.todayDate) && !this.selected.some(sameDate)) {
          if (this.color != "#3c9cff") {
            style["border"] = `1px solid ${this.color}`;
          }
          style["boxSizing"] = "border-box";
        }
        if (this.mode == "single") {
          if (this.selected.length > 0 && date == this.selected[0]) {
            style["borderRadius"] = "3px";
          }
        } else if (this.mode == "range") {
          if (this.selected.length >= 2) {
            const len = this.selected.length - 1;
            if (this.dateSame(date, this.selected[0])) {
              style["borderTopLeftRadius"] = "3px";
              style["borderBottomLeftRadius"] = "3px";
            }
            if (this.dateSame(date, this.selected[len])) {
              style["borderTopRightRadius"] = "3px";
              style["borderBottomRightRadius"] = "3px";
            }
          } else if (this.selected.length == 1) {
            style["borderTopLeftRadius"] = "3px";
            style["borderBottomLeftRadius"] = "3px";
          }
        } else {
          const sameDate_1 = (element) => {
            return this.dateSame(element, date);
          };
          if (this.selected.some(sameDate_1)) {
            style["borderRadius"] = "3px";
          }
        }
        return style;
      };
    },
    // 某个日期是否被选中
    textStyle() {
      return (item) => {
        const date = item["dateStr"] != null ? item["dateStr"] : dayuts(item["date"]).format("YYYY-MM-DD"), style = new UTSJSONObject(
          {}
          // 选中的日期，提示文字设置白色
        );
        const sameDate = (element) => {
          return this.dateSame(element, date);
        };
        if (this.selected.some(sameDate)) {
          style["color"] = "#ffffff";
        }
        if (this.mode === "range") {
          const len = this.selected.length - 1;
          if (dayuts(date).isAfter(dayuts(this.selected[0])) && dayuts(date).isBefore(dayuts(this.selected[len]))) {
            if (this.color != "#3c9cff") {
              style["color"] = this.color;
            }
          }
        }
        return style;
      };
    },
    // 获取底部的提示文字
    getBottomInfo() {
      return (index1, index2, item) => {
        const date = item["dateStr"] != null ? item["dateStr"] : dayuts(item["date"]).format("YYYY-MM-DD");
        let bottomInfo = "";
        if (item["bottomInfo"] != null) {
          bottomInfo = item["bottomInfo"].toString();
        }
        if (this.mode === "range" && this.selected.length > 0) {
          if (this.selected.length == 1) {
            if (this.dateSame(date, this.selected[0]))
              return this.startText;
            else
              return bottomInfo;
          } else {
            const len = this.selected.length - 1;
            if (this.dateSame(date, this.selected[0]) && this.dateSame(date, this.selected[1]) && len == 1) {
              return `${this.startText}/${this.endText}`;
            } else if (this.dateSame(date, this.selected[0])) {
              return this.startText;
            } else if (this.dateSame(date, this.selected[len])) {
              return this.endText;
            } else {
              return bottomInfo;
            }
          }
        } else {
          return bottomInfo;
        }
      };
    }
  },
  mounted() {
    this.init();
  },
  emits: ["monthSelected", "updateMonthTop"],
  methods: {
    isRangeMiddle(item) {
      if (this.mode != "range" || this.selected.length < 2)
        return false;
      const date = item["dateStr"] != null ? item["dateStr"] : dayuts(item["date"]).format("YYYY-MM-DD");
      const len = this.selected.length - 1;
      return dayuts(date).isAfter(dayuts(this.selected[0])) && dayuts(date).isBefore(dayuts(this.selected[len]));
    },
    rangeBgStyle(item) {
      const style = new UTSJSONObject({});
      if (this.color != "#3c9cff") {
        style["backgroundColor"] = colorGradient(this.color, "#ffffff", 100)[90];
        style["opacity"] = 0.7;
      }
      return style;
    },
    isSelected(item) {
      const date = item["dateStr"] != null ? item["dateStr"] : dayuts(item["date"]).format("YYYY-MM-DD");
      const sameDate = (element) => {
        return this.dateSame(element, date);
      };
      if (!this.selected.some(sameDate))
        return false;
      if (this.mode == "range" && this.selected.length >= 2) {
        const len = this.selected.length - 1;
        return this.dateSame(date, this.selected[0]) || this.dateSame(date, this.selected[len]);
      }
      return true;
    },
    isToday(item) {
      const date = item["dateStr"] != null ? item["dateStr"] : dayuts(item["date"]).format("YYYY-MM-DD");
      const sameDate = (element) => {
        return this.dateSame(element, date);
      };
      return this.todayDate != "" && this.dateSame(date, this.todayDate) && !this.selected.some(sameDate);
    },
    init() {
      this.$nextTick(() => {
        this.getWrapperWidth();
        this.getMonthRect();
      });
    },
    // 判断两个日期是否相等
    dateSame(date1, date2) {
      return dayuts(date1).isSame(dayuts(date2));
    },
    // 获取月份数据区域的宽度，因为nvue不支持百分比，所以无法通过css设置每个日期item的宽度
    getWrapperWidth() {
      this.upGetRect(".up-calendar-month-wrapper", false).then((res) => {
        var _a;
        let size = res;
        let width = (_a = size.width) !== null && _a !== void 0 ? _a : 0;
        if (width <= 0) {
          width = getWindowInfo().windowWidth;
        }
        this.width = width;
      });
    },
    getMonthRect() {
      const promiseAllArr = this.months.map((item, index) => {
        return this.getMonthRectByPromise(`up-calendar-month-${index}`);
      });
      Promise.all(promiseAllArr).then((res) => {
        var _a;
        let sizes = res;
        let height = 1;
        const topArr = [];
        for (let i = 0; i < this.months.length; i++) {
          topArr.push(height);
          height += (_a = sizes[i].height) !== null && _a !== void 0 ? _a : 0;
        }
        this.$emit("updateMonthTop", topArr);
      });
    },
    // 获取每个月份区域的尺寸
    getMonthRectByPromise(el = null) {
      return this.upGetRect(`.${el}`, false);
    },
    // 点击某一个日期
    clickHandler(index1, index21, item) {
      var _a;
      if (this.readonly) {
        return null;
      }
      this.item = item;
      const date = item["dateStr"] != null ? item["dateStr"] : dayuts(item["date"]).format("YYYY-MM-DD");
      let disabled = (_a = item.disabled) !== null && _a !== void 0 ? _a : false;
      if (disabled)
        return null;
      let selected = [...this.selected];
      if (this.mode === "single") {
        selected = [date];
      } else if (this.mode === "multiple") {
        const sameDate = (element) => {
          return this.dateSame(element, date);
        };
        if (selected.some(sameDate)) {
          const itemIndex = selected.findIndex((item2) => {
            return item2 === date;
          });
          selected.splice(itemIndex, 1);
        } else {
          if (selected.length < this.maxCount) {
            selected.push(date);
          }
        }
      } else {
        if (selected.length == 0 || selected.length >= 2) {
          selected = [date];
        } else if (selected.length == 1) {
          const existsDate = selected[0];
          if (dayuts(date).isBefore(existsDate)) {
            selected = [date];
          } else if (dayuts(date).isAfter(existsDate)) {
            selected.push(date);
            const startDate = selected[0];
            const endDate = selected[1];
            const arr = [];
            let i = 0;
            do {
              arr.push(dayuts(startDate).add(i, "day").format("YYYY-MM-DD"));
              i++;
            } while (dayuts(startDate).add(i, "day").isBefore(dayuts(endDate)));
            arr.push(endDate);
            selected = arr;
          } else {
            if (selected[0] === date && !this.allowSameDay)
              return null;
            selected.push(date);
          }
        }
      }
      this.setSelected(selected);
    },
    // 设置默认日期
    setDefaultDate() {
      if (this.defaultDate == null) {
        const selected = [dayuts().format("YYYY-MM-DD")];
        return this.setSelected(selected, false);
      }
      let defaultDate = [];
      let minDateData = this.minDate.toString();
      let maxDateData = this.maxDate.toString();
      const minDate = minDateData != "" ? minDateData : dayuts().format("YYYY-MM-DD");
      const maxDate = maxDateData != "" ? maxDateData : dayuts(minDate).add(this.maxMonth - 1, "month").format("YYYY-MM-DD");
      if (this.mode === "single") {
        if (!array(this.defaultDate)) {
          defaultDate = [dayuts(this.defaultDate).format("YYYY-MM-DD")];
        } else {
          let tmp = dayuts(this.defaultDate[0]).format("YYYY-MM-DD");
          defaultDate = [tmp];
        }
      } else {
        if (!array(this.defaultDate))
          return null;
        defaultDate = this.defaultDate;
      }
      defaultDate = defaultDate.filter((item) => {
        return dayuts(item).isAfter(dayuts(minDate).subtract(1, "day")) && dayuts(item).isBefore(dayuts(maxDate).add(1, "day"));
      });
      this.setSelected(defaultDate, false);
    },
    setSelected(selected, event = true) {
      this.selected = selected;
      if (event) {
        this.$emit("monthSelected", this.selected, "tap");
      }
    }
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-calendar-month-wrapper": { "": { "marginTop": 4 } }, "up-calendar-month__title": { "": { "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "height": 42 } }, "up-calendar-month__title-text": { "": { "fontSize": 14, "lineHeight": "42px", "color": "#303133", "textAlign": "center", "fontWeight": "bold" } }, "up-calendar-month__days": { "": { "position": "relative", "display": "flex", "flexDirection": "row", "flexWrap": "wrap" } }, "up-calendar-month__days__month-mark-wrapper": { "": { "position": "absolute", "top": 0, "bottom": 0, "left": 0, "right": 0, "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center" } }, "up-calendar-month__days__month-mark-wrapper__text": { "": { "fontSize": 155, "color": "rgba(231,232,234,0.83)" } }, "up-calendar-month__days__day": { "": { "display": "flex", "flexDirection": "row", "paddingTop": 2, "paddingRight": 2, "paddingBottom": 2, "paddingLeft": 2, "width": "14.285%" } }, "up-calendar-month__days__day__select": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "position": "relative" } }, "up-calendar-month__days__day__select__range-bg": { "": { "position": "absolute", "top": 0, "bottom": 0, "left": 0, "right": 0, "zIndex": 1, "backgroundColor": "var(--theme-color, #0957de)", "opacity": 0.15 } }, "up-calendar-month__days__day__select__dot": { "": { "width": 7, "height": 7, "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "backgroundColor": "#f56c6c", "position": "absolute", "top": 12, "right": 7, "zIndex": 2 } }, "up-calendar-month__days__day__select__buttom-info": { "": { "color": "#606266", "textAlign": "center", "position": "absolute", "bottom": 5, "fontSize": 10, "left": 0, "right": 0, "zIndex": 2 } }, "up-calendar-month__days__day__select__buttom-info--selected": { "": { "color": "#ffffff" } }, "up-calendar-month__days__day__select__buttom-info--disabled": { "": { "color": "#cacbcd" } }, "up-calendar-month__days__day__select__info": { "": { "textAlign": "center", "fontSize": 16, "position": "relative", "zIndex": 2 } }, "up-calendar-month__days__day__select__info--selected": { "": { "color": "#ffffff" } }, "up-calendar-month__days__day__select__info--disabled": { "": { "color": "#cacbcd" } }, "up-calendar-month__days__day__select__info--range-middle": { "": { "color": "var(--theme-color, #0957de)" } }, "up-calendar-month__days__day__select--today": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1, "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid", "borderTopColor": "var(--theme-color, #0957de)", "borderRightColor": "var(--theme-color, #0957de)", "borderBottomColor": "var(--theme-color, #0957de)", "borderLeftColor": "var(--theme-color, #0957de)", "boxSizing": "border-box" } }, "up-calendar-month__days__day__select--selected": { "": { "backgroundColor": "var(--theme-color, #0957de)", "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "borderTopLeftRadius": 3, "borderTopRightRadius": 3, "borderBottomRightRadius": 3, "borderBottomLeftRadius": 3 } }, "up-calendar-month__days__day__select--range-selected": { "": { "opacity": 0.3, "borderTopLeftRadius": 0, "borderTopRightRadius": 0, "borderBottomRightRadius": 0, "borderBottomLeftRadius": 0 } }, "up-calendar-month__days__day__select--range-start-selected": { "": { "borderTopRightRadius": 0, "borderBottomRightRadius": 0 } }, "up-calendar-month__days__day__select--range-end-selected": { "": { "borderTopLeftRadius": 0, "borderBottomLeftRadius": 0 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: "up-calendar-month-wrapper",
      ref: "up-calendar-month-wrapper"
    },
    [
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($data.monthsInner, (item, index) => {
          return openBlock(), createElementBlock("view", {
            key: index,
            class: normalizeClass([`up-calendar-month-` + index.toString()]),
            ref_for: true,
            ref: `up-calendar-month-` + index.toString(),
            id: `month-` + index.toString()
          }, [
            index != 0 ? (openBlock(), createElementBlock("view", {
              key: 0,
              class: "up-calendar-month__title"
            }, [
              createElementVNode(
                "text",
                { class: "up-calendar-month__title-text" },
                toDisplayString(item["year"]) + "年" + toDisplayString(item["month"]) + "月",
                1
                /* TEXT */
              )
            ])) : createCommentVNode("v-if", true),
            createElementVNode("view", { class: "up-calendar-month__days" }, [
              $props.showMark ? (openBlock(), createElementBlock("view", {
                key: 0,
                class: "up-calendar-month__days__month-mark-wrapper"
              }, [
                createElementVNode(
                  "text",
                  { class: "up-calendar-month__days__month-mark-wrapper__text" },
                  toDisplayString(item["month"]),
                  1
                  /* TEXT */
                )
              ])) : createCommentVNode("v-if", true),
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(item.date, (item1, index1) => {
                  return openBlock(), createElementBlock("view", {
                    key: index1,
                    class: "up-calendar-month__days__day",
                    style: normalizeStyle([$options.dayStyle(index, index1, item1)]),
                    onClick: ($event) => $options.clickHandler(index, index1, item1)
                  }, [
                    createElementVNode(
                      "view",
                      {
                        class: normalizeClass(["up-calendar-month__days__day__select", {
                          "up-calendar-month__days__day__select--selected": $options.isSelected(item1),
                          "up-calendar-month__days__day__select--today": $options.isToday(item1)
                        }]),
                        style: normalizeStyle([$options.daySelectStyle(index, index1, item1)])
                      },
                      [
                        $options.isRangeMiddle(item1) ? (openBlock(), createElementBlock(
                          "view",
                          {
                            key: 0,
                            class: "up-calendar-month__days__day__select__range-bg",
                            style: normalizeStyle([$options.rangeBgStyle(item1)])
                          },
                          null,
                          4
                          /* STYLE */
                        )) : createCommentVNode("v-if", true),
                        createElementVNode(
                          "text",
                          {
                            class: normalizeClass(["up-calendar-month__days__day__select__info", {
                              "up-calendar-month__days__day__select__info--disabled": item1.disabled,
                              "up-calendar-month__days__day__select__info--range-middle": $options.isRangeMiddle(item1)
                            }]),
                            style: normalizeStyle([$options.textStyle(item1)])
                          },
                          toDisplayString(item1["day"]),
                          7
                          /* TEXT, CLASS, STYLE */
                        ),
                        $options.getBottomInfo(index, index1, item1) ? (openBlock(), createElementBlock(
                          "text",
                          {
                            key: 1,
                            class: normalizeClass(["up-calendar-month__days__day__select__buttom-info", { "up-calendar-month__days__day__select__buttom-info--disabled": item1["disabled"] }]),
                            style: normalizeStyle([$options.textStyle(item1)])
                          },
                          toDisplayString($options.getBottomInfo(index, index1, item1)),
                          7
                          /* TEXT, CLASS, STYLE */
                        )) : createCommentVNode("v-if", true),
                        item1["dot"] ? (openBlock(), createElementBlock("text", {
                          key: 2,
                          class: "up-calendar-month__days__day__select__dot"
                        })) : createCommentVNode("v-if", true)
                      ],
                      6
                      /* CLASS, STYLE */
                    )
                  ], 12, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ], 10, ["id"]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ],
    512
    /* NEED_PATCH */
  );
}
const uMonth = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-calendar/month.uvue"]]);
export {
  monthsItem as m,
  uMonth as u
};
//# sourceMappingURL=month.js.map
