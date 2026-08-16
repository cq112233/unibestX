"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_i18n_index = require("../../libs/i18n/index.js");
const uni_modules_uviewUltra_libs_function_colorGradient = require("../../libs/function/colorGradient.js");
const uni_modules_uviewUltra_libs_function_test = require("../../libs/function/test.js");
const uni_modules_limeDayuts_common_index = require("../../../lime-dayuts/common/index.js");
require("../../../lime-dayuts/common/use.js");
require("../../../lime-dayuts/utssdk/interface.js");
require("./types.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-calendar-month"
}, { __name: "month", props: {
  showMark: {
    type: Boolean,
    default: true
  },
  color: {
    type: String,
    default: "#3c9cff"
  },
  months: {
    type: Array,
    default: () => {
      return [];
    }
  },
  mode: {
    type: String,
    default: "single"
  },
  rowHeight: {
    type: [String, Number],
    default: 58
  },
  maxCount: {
    type: [String, Number],
    default: 999
  },
  startText: {
    type: String,
    default: "开始"
  },
  endText: {
    type: String,
    default: "结束"
  },
  defaultDate: {
    type: [Array, String, Date],
    default: null
  },
  minDate: {
    type: [String, Number],
    default: 0
  },
  maxDate: {
    type: [String, Number],
    default: 0
  },
  maxMonth: {
    type: [String, Number],
    default: 2
  },
  readonly: {
    type: Boolean,
    default: false
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
  todayDate: {
    type: String,
    default: ""
  }
}, emits: ["monthSelected", "updateMonthTop"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const instance = common_vendor.getCurrentInstance();
  const width = common_vendor.ref(0);
  const monthsInner = common_vendor.ref([]);
  const selected = common_vendor.ref([]);
  function getMonthTitle(item) {
    return uni_modules_uviewUltra_libs_i18n_index.formatMonthTitle(item.year, item.month);
  }
  function dateSame(date1, date2) {
    return uni_modules_limeDayuts_common_index.dayuts(date1).isSame(uni_modules_limeDayuts_common_index.dayuts(date2));
  }
  function isRangeMiddle(item) {
    if (props.mode != "range" || selected.value.length < 2)
      return false;
    const date = item["dateStr"] != null ? item["dateStr"] : uni_modules_limeDayuts_common_index.dayuts(item["date"]).format("YYYY-MM-DD");
    const len = selected.value.length - 1;
    return uni_modules_limeDayuts_common_index.dayuts(date).isAfter(uni_modules_limeDayuts_common_index.dayuts(selected.value[0])) && uni_modules_limeDayuts_common_index.dayuts(date).isBefore(uni_modules_limeDayuts_common_index.dayuts(selected.value[len]));
  }
  function rangeBgStyle(item) {
    const style = new common_vendor.UTSJSONObject({});
    if (props.color != "#3c9cff") {
      style["backgroundColor"] = uni_modules_uviewUltra_libs_function_colorGradient.colorGradient(props.color, "#ffffff", 100)[90];
      style["opacity"] = 0.7;
    }
    return style;
  }
  function isSelected(item) {
    const date = item["dateStr"] != null ? item["dateStr"] : uni_modules_limeDayuts_common_index.dayuts(item["date"]).format("YYYY-MM-DD");
    const sameDate = (element) => {
      return dateSame(element, date);
    };
    if (!selected.value.some(sameDate))
      return false;
    if (props.mode == "range" && selected.value.length >= 2) {
      const len = selected.value.length - 1;
      return dateSame(date, selected.value[0]) || dateSame(date, selected.value[len]);
    }
    return true;
  }
  function isToday(item) {
    const date = item["dateStr"] != null ? item["dateStr"] : uni_modules_limeDayuts_common_index.dayuts(item["date"]).format("YYYY-MM-DD");
    const sameDate = (element) => {
      return dateSame(element, date);
    };
    return props.todayDate != "" && dateSame(date, props.todayDate) && !selected.value.some(sameDate);
  }
  function dayStyle(index1, index2, item) {
    const style = new common_vendor.UTSJSONObject({});
    if (item != null) {
      let week = item.week;
      style["height"] = uni_modules_uviewUltra_libs_function_index.addUnit(props.rowHeight);
      if (index2 == 0) {
        week = (week == 0 ? 7 : week) - 1;
        style["marginLeft"] = `${week / 7 * 100}%`;
      }
    }
    if (props.mode == "range") {
      style["padding"] = 0;
    }
    return style;
  }
  function daySelectStyle(index1, index2, item) {
    let date = item["dateStr"] != null ? item["dateStr"] : uni_modules_limeDayuts_common_index.dayuts(item["date"]).format("YYYY-MM-DD");
    let style = new common_vendor.UTSJSONObject({});
    const sameDate = (element) => {
      return dateSame(element, date);
    };
    if (selected.value.some(sameDate)) {
      let shouldActiveBg = true;
      if (props.mode == "range" && selected.value.length >= 2) {
        const len = selected.value.length - 1;
        if (!dateSame(date, selected.value[0]) && !dateSame(date, selected.value[len])) {
          shouldActiveBg = false;
        }
      }
      if (shouldActiveBg) {
        if (props.color != "#3c9cff") {
          style["backgroundColor"] = props.color;
        }
      }
    }
    if (props.todayDate != "" && dateSame(date, props.todayDate) && !selected.value.some(sameDate)) {
      if (props.color != "#3c9cff") {
        style["border"] = `1px solid ${props.color}`;
      }
      style["boxSizing"] = "border-box";
    }
    if (props.mode == "single") {
      if (selected.value.length > 0 && date == selected.value[0]) {
        style["borderRadius"] = "3px";
      }
    } else if (props.mode == "range") {
      if (selected.value.length >= 2) {
        const len = selected.value.length - 1;
        if (dateSame(date, selected.value[0])) {
          style["borderTopLeftRadius"] = "3px";
          style["borderBottomLeftRadius"] = "3px";
        }
        if (dateSame(date, selected.value[len])) {
          style["borderTopRightRadius"] = "3px";
          style["borderBottomRightRadius"] = "3px";
        }
      } else if (selected.value.length == 1) {
        style["borderTopLeftRadius"] = "3px";
        style["borderBottomLeftRadius"] = "3px";
      }
    } else {
      if (selected.value.some(sameDate)) {
        style["borderRadius"] = "3px";
      }
    }
    return style;
  }
  function textStyle(item) {
    const date = item["dateStr"] != null ? item["dateStr"] : uni_modules_limeDayuts_common_index.dayuts(item["date"]).format("YYYY-MM-DD");
    let style = new common_vendor.UTSJSONObject({});
    const sameDate = (element) => {
      return dateSame(element, date);
    };
    if (selected.value.some(sameDate)) {
      style["color"] = "#ffffff";
    }
    if (props.mode === "range") {
      const len = selected.value.length - 1;
      if (uni_modules_limeDayuts_common_index.dayuts(date).isAfter(uni_modules_limeDayuts_common_index.dayuts(selected.value[0])) && uni_modules_limeDayuts_common_index.dayuts(date).isBefore(uni_modules_limeDayuts_common_index.dayuts(selected.value[len]))) {
        if (props.color != "#3c9cff") {
          style["color"] = props.color;
        }
      }
    }
    return style;
  }
  function getBottomInfo(index1, index2, item) {
    const date = item["dateStr"] != null ? item["dateStr"] : uni_modules_limeDayuts_common_index.dayuts(item["date"]).format("YYYY-MM-DD");
    let bottomInfo = "";
    if (item["bottomInfo"] != null) {
      bottomInfo = item["bottomInfo"].toString();
    }
    if (props.mode === "range" && selected.value.length > 0) {
      if (selected.value.length == 1) {
        if (dateSame(date, selected.value[0]))
          return props.startText;
        else
          return bottomInfo;
      } else {
        const len = selected.value.length - 1;
        if (dateSame(date, selected.value[0]) && dateSame(date, selected.value[1]) && len == 1) {
          return `${props.startText}/${props.endText}`;
        } else if (dateSame(date, selected.value[0])) {
          return props.startText;
        } else if (dateSame(date, selected.value[len])) {
          return props.endText;
        } else {
          return bottomInfo;
        }
      }
    }
    return bottomInfo;
  }
  function clickHandler(index1, index21, item) {
    var _a2;
    if (props.readonly)
      return null;
    const date = item["dateStr"] != null ? item["dateStr"] : uni_modules_limeDayuts_common_index.dayuts(item["date"]).format("YYYY-MM-DD");
    let disabled = (_a2 = item.disabled) !== null && _a2 !== void 0 ? _a2 : false;
    if (disabled)
      return null;
    let curSelected = [...selected.value];
    if (props.mode === "single") {
      curSelected = [date];
    } else if (props.mode === "multiple") {
      const sameDate = (element) => {
        return dateSame(element, date);
      };
      if (curSelected.some(sameDate)) {
        const itemIndex = curSelected.findIndex((it) => {
          return it === date;
        });
        curSelected.splice(itemIndex, 1);
      } else {
        if (curSelected.length < parseInt(props.maxCount.toString())) {
          curSelected.push(date);
        }
      }
    } else {
      if (curSelected.length == 0 || curSelected.length >= 2) {
        curSelected = [date];
      } else if (curSelected.length == 1) {
        const existsDate = curSelected[0];
        if (uni_modules_limeDayuts_common_index.dayuts(date).isBefore(existsDate)) {
          curSelected = [date];
        } else if (uni_modules_limeDayuts_common_index.dayuts(date).isAfter(existsDate)) {
          curSelected.push(date);
          const startDate = curSelected[0];
          const endDate = curSelected[1];
          const arr = [];
          let i = 0;
          do {
            arr.push(uni_modules_limeDayuts_common_index.dayuts(startDate).add(i, "day").format("YYYY-MM-DD"));
            i++;
          } while (uni_modules_limeDayuts_common_index.dayuts(startDate).add(i, "day").isBefore(uni_modules_limeDayuts_common_index.dayuts(endDate)));
          arr.push(endDate);
          curSelected = arr;
        } else {
          if (curSelected[0] === date && !props.allowSameDay)
            return null;
          curSelected.push(date);
        }
      }
    }
    setSelected(curSelected);
  }
  function setDefaultDate() {
    if (props.defaultDate == null) {
      const sel = [uni_modules_limeDayuts_common_index.dayuts().format("YYYY-MM-DD")];
      return setSelected(sel, false);
    }
    let defDate = [];
    let minDateData = props.minDate.toString();
    let maxDateData = props.maxDate.toString();
    const minDate = minDateData != "" ? minDateData : uni_modules_limeDayuts_common_index.dayuts().format("YYYY-MM-DD");
    const maxDate = maxDateData != "" ? maxDateData : uni_modules_limeDayuts_common_index.dayuts(minDate).add(parseInt(props.maxMonth.toString()) - 1, "month").format("YYYY-MM-DD");
    if (props.mode === "single") {
      if (!uni_modules_uviewUltra_libs_function_test.array(props.defaultDate)) {
        defDate = [uni_modules_limeDayuts_common_index.dayuts(props.defaultDate).format("YYYY-MM-DD")];
      } else {
        let tmp = uni_modules_limeDayuts_common_index.dayuts(props.defaultDate[0]).format("YYYY-MM-DD");
        defDate = [tmp];
      }
    } else {
      if (!uni_modules_uviewUltra_libs_function_test.array(props.defaultDate))
        return null;
      defDate = props.defaultDate;
    }
    defDate = defDate.filter((it) => {
      return uni_modules_limeDayuts_common_index.dayuts(it).isAfter(uni_modules_limeDayuts_common_index.dayuts(minDate).subtract(1, "day")) && uni_modules_limeDayuts_common_index.dayuts(it).isBefore(uni_modules_limeDayuts_common_index.dayuts(maxDate).add(1, "day"));
    });
    setSelected(defDate, false);
  }
  function setSelected(sel, shouldEmit = true) {
    selected.value = sel;
    if (shouldEmit) {
      emit("monthSelected", selected.value, "tap");
    }
  }
  function getWrapperWidth() {
    uni_modules_uviewUltra_libs_function_index.upGetRect(".up-calendar-month-wrapper", false, instance === null || instance === void 0 ? null : instance.proxy).then((res) => {
      var _a2;
      let size = res;
      let w = (_a2 = size.width) !== null && _a2 !== void 0 ? _a2 : 0;
      if (w <= 0) {
        w = uni_modules_uviewUltra_libs_function_index.getWindowInfo().windowWidth;
      }
      width.value = w;
    });
  }
  function getMonthRect() {
    const promiseAllArr = props.months.map((item, index) => {
      return uni_modules_uviewUltra_libs_function_index.upGetRect(`.up-calendar-month-${index}`, false, instance === null || instance === void 0 ? null : instance.proxy);
    });
    Promise.all(promiseAllArr).then((res) => {
      var _a2;
      let sizes = res;
      let height = 1;
      const topArr = [];
      for (let i = 0; i < props.months.length; i++) {
        topArr.push(height);
        height += (_a2 = sizes[i].height) !== null && _a2 !== void 0 ? _a2 : 0;
      }
      emit("updateMonthTop", topArr);
    });
  }
  function init() {
    common_vendor.nextTick$1(() => {
      getWrapperWidth();
      getMonthRect();
    });
  }
  common_vendor.watch(() => {
    return [props.minDate, props.maxDate, props.defaultDate];
  }, () => {
    setDefaultDate();
  }, { immediate: true });
  common_vendor.watch(() => {
    return props.months;
  }, (n) => {
    monthsInner.value = n;
  }, { immediate: true });
  common_vendor.onMounted(() => {
    init();
  });
  __expose({
    init,
    setDefaultDate,
    setSelected
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.f(monthsInner.value, (item, index, i0) => {
        return common_vendor.e({
          a: index != 0
        }, index != 0 ? {
          b: common_vendor.t(getMonthTitle(item))
        } : {}, __props.showMark ? {
          c: common_vendor.t(item["month"])
        } : {}, {
          d: common_vendor.f(item.date, (item1, index1, i1) => {
            return common_vendor.e({
              a: isRangeMiddle(item1)
            }, isRangeMiddle(item1) ? {
              b: common_vendor.s(rangeBgStyle())
            } : {}, {
              c: common_vendor.t(item1["day"]),
              d: item1.disabled ? 1 : "",
              e: isRangeMiddle(item1) ? 1 : "",
              f: common_vendor.s(textStyle(item1)),
              g: getBottomInfo(index, index1, item1) != ""
            }, getBottomInfo(index, index1, item1) != "" ? {
              h: common_vendor.t(getBottomInfo(index, index1, item1)),
              i: item1["disabled"] ? 1 : "",
              j: common_vendor.s(textStyle(item1))
            } : {}, {
              k: item1["dot"]
            }, item1["dot"] ? {} : {}, {
              l: common_vendor.s(daySelectStyle(index, index1, item1)),
              m: isSelected(item1) ? 1 : "",
              n: isToday(item1) ? 1 : "",
              o: common_vendor.s(dayStyle(index, index1, item1)),
              p: common_vendor.o(($event) => {
                return clickHandler(index, index1, item1);
              }, index1),
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
      b: __props.showMark,
      c: common_vendor.sei(common_vendor.gei(_ctx, "", "r1-35c61338"), "view", "up-calendar-month-wrapper"),
      d: `${_ctx.u_s_b_h}px`,
      e: `${_ctx.u_s_a_i_b}px`,
      f: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-35c61338"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-calendar/month.js.map
