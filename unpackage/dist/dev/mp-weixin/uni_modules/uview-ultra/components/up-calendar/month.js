"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_i18n_index = require("../../libs/i18n/index.js");
const uni_modules_uviewUltra_libs_function_colorGradient = require("../../libs/function/colorGradient.js");
const uni_modules_uviewUltra_libs_function_test = require("../../libs/function/test.js");
const uni_modules_uviewUltra_components_upCalendar_calendar = require("./calendar.js");
const uni_modules_limeDayuts_common_index = require("../../../lime-dayuts/common/index.js");
require("../../../lime-dayuts/common/use.js");
require("../../../lime-dayuts/utssdk/interface.js");
require("./types.js");
let calendarProp = uni_modules_uviewUltra_components_upCalendar_calendar.defProps["calendar"];
const _sfc_main = common_vendor.defineComponent({
  name: "up-calendar-month",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin],
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
          style["height"] = uni_modules_uviewUltra_libs_function_index.addUnit(this.rowHeight);
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
        let date = item["dateStr"] != null ? item["dateStr"] : uni_modules_limeDayuts_common_index.dayuts(item["date"]).format("YYYY-MM-DD"), style = new UTSJSONObject(
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
        const date = item["dateStr"] != null ? item["dateStr"] : uni_modules_limeDayuts_common_index.dayuts(item["date"]).format("YYYY-MM-DD"), style = new UTSJSONObject(
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
          if (uni_modules_limeDayuts_common_index.dayuts(date).isAfter(uni_modules_limeDayuts_common_index.dayuts(this.selected[0])) && uni_modules_limeDayuts_common_index.dayuts(date).isBefore(uni_modules_limeDayuts_common_index.dayuts(this.selected[len]))) {
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
        const date = item["dateStr"] != null ? item["dateStr"] : uni_modules_limeDayuts_common_index.dayuts(item["date"]).format("YYYY-MM-DD");
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
    getMonthTitle(item) {
      return uni_modules_uviewUltra_libs_i18n_index.formatMonthTitle(item.year, item.month);
    },
    isRangeMiddle(item) {
      if (this.mode != "range" || this.selected.length < 2)
        return false;
      const date = item["dateStr"] != null ? item["dateStr"] : uni_modules_limeDayuts_common_index.dayuts(item["date"]).format("YYYY-MM-DD");
      const len = this.selected.length - 1;
      return uni_modules_limeDayuts_common_index.dayuts(date).isAfter(uni_modules_limeDayuts_common_index.dayuts(this.selected[0])) && uni_modules_limeDayuts_common_index.dayuts(date).isBefore(uni_modules_limeDayuts_common_index.dayuts(this.selected[len]));
    },
    rangeBgStyle(item) {
      const style = new UTSJSONObject({});
      if (this.color != "#3c9cff") {
        style["backgroundColor"] = uni_modules_uviewUltra_libs_function_colorGradient.colorGradient(this.color, "#ffffff", 100)[90];
        style["opacity"] = 0.7;
      }
      return style;
    },
    isSelected(item) {
      const date = item["dateStr"] != null ? item["dateStr"] : uni_modules_limeDayuts_common_index.dayuts(item["date"]).format("YYYY-MM-DD");
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
      const date = item["dateStr"] != null ? item["dateStr"] : uni_modules_limeDayuts_common_index.dayuts(item["date"]).format("YYYY-MM-DD");
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
      return uni_modules_limeDayuts_common_index.dayuts(date1).isSame(uni_modules_limeDayuts_common_index.dayuts(date2));
    },
    // 获取月份数据区域的宽度，因为nvue不支持百分比，所以无法通过css设置每个日期item的宽度
    getWrapperWidth() {
      this.upGetRect(".up-calendar-month-wrapper", false).then((res = null) => {
        var _a;
        let size = res;
        let width = (_a = size.width) !== null && _a !== void 0 ? _a : 0;
        if (width <= 0) {
          width = uni_modules_uviewUltra_libs_function_index.getWindowInfo().windowWidth;
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
      const date = item["dateStr"] != null ? item["dateStr"] : uni_modules_limeDayuts_common_index.dayuts(item["date"]).format("YYYY-MM-DD");
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
          if (uni_modules_limeDayuts_common_index.dayuts(date).isBefore(existsDate)) {
            selected = [date];
          } else if (uni_modules_limeDayuts_common_index.dayuts(date).isAfter(existsDate)) {
            selected.push(date);
            const startDate = selected[0];
            const endDate = selected[1];
            const arr = [];
            let i = 0;
            do {
              arr.push(uni_modules_limeDayuts_common_index.dayuts(startDate).add(i, "day").format("YYYY-MM-DD"));
              i++;
            } while (uni_modules_limeDayuts_common_index.dayuts(startDate).add(i, "day").isBefore(uni_modules_limeDayuts_common_index.dayuts(endDate)));
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
        const selected = [uni_modules_limeDayuts_common_index.dayuts().format("YYYY-MM-DD")];
        return this.setSelected(selected, false);
      }
      let defaultDate = [];
      let minDateData = this.minDate.toString();
      let maxDateData = this.maxDate.toString();
      const minDate = minDateData != "" ? minDateData : uni_modules_limeDayuts_common_index.dayuts().format("YYYY-MM-DD");
      const maxDate = maxDateData != "" ? maxDateData : uni_modules_limeDayuts_common_index.dayuts(minDate).add(this.maxMonth - 1, "month").format("YYYY-MM-DD");
      if (this.mode === "single") {
        if (!uni_modules_uviewUltra_libs_function_test.array(this.defaultDate)) {
          defaultDate = [uni_modules_limeDayuts_common_index.dayuts(this.defaultDate).format("YYYY-MM-DD")];
        } else {
          let tmp = uni_modules_limeDayuts_common_index.dayuts(this.defaultDate[0]).format("YYYY-MM-DD");
          defaultDate = [tmp];
        }
      } else {
        if (!uni_modules_uviewUltra_libs_function_test.array(this.defaultDate))
          return null;
        defaultDate = this.defaultDate;
      }
      defaultDate = defaultDate.filter((item) => {
        return uni_modules_limeDayuts_common_index.dayuts(item).isAfter(uni_modules_limeDayuts_common_index.dayuts(minDate).subtract(1, "day")) && uni_modules_limeDayuts_common_index.dayuts(item).isBefore(uni_modules_limeDayuts_common_index.dayuts(maxDate).add(1, "day"));
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return {
    a: common_vendor.f($data.monthsInner, (item, index, i0) => {
      return common_vendor.e({
        a: index != 0
      }, index != 0 ? {
        b: common_vendor.t($options.getMonthTitle(item))
      } : {}, $props.showMark ? {
        c: common_vendor.t(item["month"])
      } : {}, {
        d: common_vendor.f(item.date, (item1, index1, i1) => {
          return common_vendor.e({
            a: $options.isRangeMiddle(item1)
          }, $options.isRangeMiddle(item1) ? {
            b: common_vendor.s($options.rangeBgStyle(item1))
          } : {}, {
            c: common_vendor.t(item1["day"]),
            d: item1.disabled ? 1 : "",
            e: $options.isRangeMiddle(item1) ? 1 : "",
            f: common_vendor.s($options.textStyle(item1)),
            g: $options.getBottomInfo(index, index1, item1)
          }, $options.getBottomInfo(index, index1, item1) ? {
            h: common_vendor.t($options.getBottomInfo(index, index1, item1)),
            i: item1["disabled"] ? 1 : "",
            j: common_vendor.s($options.textStyle(item1))
          } : {}, {
            k: item1["dot"]
          }, item1["dot"] ? {} : {}, {
            l: common_vendor.s($options.daySelectStyle(index, index1, item1)),
            m: $options.isSelected(item1) ? 1 : "",
            n: $options.isToday(item1) ? 1 : "",
            o: common_vendor.s($options.dayStyle(index, index1, item1)),
            p: common_vendor.o(($event) => $options.clickHandler(index, index1, item1), index1),
            q: index1
          });
        }),
        e: common_vendor.sei(`month-` + index.toString() !== "" ? `month-` + index.toString() : "r0-35c61338-index", "view", `up-calendar-month-` + index.toString(), {
          "f": 1
        }),
        f: index,
        g: common_vendor.n(`up-calendar-month-` + index.toString()),
        h: `up-calendar-month-` + index.toString()
      });
    }),
    b: $props.showMark,
    c: common_vendor.sei(common_vendor.gei(_ctx, "", "r1-35c61338"), "view", "up-calendar-month-wrapper"),
    d: `${_ctx.u_s_b_h}px`,
    e: `${_ctx.u_s_a_i_b}px`,
    f: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-35c61338"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-calendar/month.js.map
