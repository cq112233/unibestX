"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_limeDayuts_common_index = require("../../../lime-dayuts/common/index.js");
require("../../../lime-dayuts/common/use.js");
require("../../../lime-dayuts/utssdk/interface.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
require("../../libs/function/test.js");
const uni_modules_uviewUltra_components_upDatetimePicker_datetimePicker = require("./datetimePicker.js");
if (!Array) {
  const _easycom_up_input_1 = common_vendor.resolveComponent("up-input");
  const _easycom_up_picker_1 = common_vendor.resolveComponent("up-picker");
  (_easycom_up_input_1 + _easycom_up_picker_1)();
}
const _easycom_up_input = () => "../up-input/up-input.js";
const _easycom_up_picker = () => "../up-picker/up-picker.js";
if (!Math) {
  (_easycom_up_input + _easycom_up_picker)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "up-datetime-picker",
  props: {
    hasInput: {
      type: Boolean,
      default: uni_modules_uviewUltra_components_upDatetimePicker_datetimePicker.defProps.getBoolean("datetimePicker.hasInput")
    },
    placeholder: {
      type: String,
      default: uni_modules_uviewUltra_components_upDatetimePicker_datetimePicker.defProps.getString("datetimePicker.placeholder")
    },
    format: {
      type: String,
      default: uni_modules_uviewUltra_components_upDatetimePicker_datetimePicker.defProps.getString("datetimePicker.format")
    },
    show: {
      type: Boolean,
      default: uni_modules_uviewUltra_components_upDatetimePicker_datetimePicker.defProps.getBoolean("datetimePicker.show")
    },
    pageInline: {
      type: Boolean,
      default: uni_modules_uviewUltra_components_upDatetimePicker_datetimePicker.defProps.getBoolean("datetimePicker.pageInline")
    },
    popupMode: {
      type: String,
      default: uni_modules_uviewUltra_components_upDatetimePicker_datetimePicker.defProps.getString("datetimePicker.popupMode")
    },
    showToolbar: {
      type: Boolean,
      default: uni_modules_uviewUltra_components_upDatetimePicker_datetimePicker.defProps.getBoolean("datetimePicker.showToolbar")
    },
    toolbarRightSlot: {
      type: Boolean,
      default: uni_modules_uviewUltra_components_upDatetimePicker_datetimePicker.defProps.getBoolean("datetimePicker.toolbarRightSlot")
    },
    modelValue: {
      type: [String, Number],
      default: uni_modules_uviewUltra_components_upDatetimePicker_datetimePicker.defProps.getString("datetimePicker.value")
    },
    title: {
      type: String,
      default: uni_modules_uviewUltra_components_upDatetimePicker_datetimePicker.defProps.getString("datetimePicker.title")
    },
    mode: {
      type: String,
      default: uni_modules_uviewUltra_components_upDatetimePicker_datetimePicker.defProps.getString("datetimePicker.mode")
    },
    maxDate: {
      type: Number,
      default: uni_modules_uviewUltra_components_upDatetimePicker_datetimePicker.defProps.getNumber("datetimePicker.maxDate")
    },
    minDate: {
      type: Number,
      default: uni_modules_uviewUltra_components_upDatetimePicker_datetimePicker.defProps.getNumber("datetimePicker.minDate")
    },
    minHour: {
      type: Number,
      default: uni_modules_uviewUltra_components_upDatetimePicker_datetimePicker.defProps.getNumber("datetimePicker.minHour")
    },
    maxHour: {
      type: Number,
      default: uni_modules_uviewUltra_components_upDatetimePicker_datetimePicker.defProps.getNumber("datetimePicker.maxHour")
    },
    minMinute: {
      type: Number,
      default: uni_modules_uviewUltra_components_upDatetimePicker_datetimePicker.defProps.getNumber("datetimePicker.minMinute")
    },
    maxMinute: {
      type: Number,
      default: uni_modules_uviewUltra_components_upDatetimePicker_datetimePicker.defProps.getNumber("datetimePicker.maxMinute")
    },
    minSecond: {
      type: Number,
      default: uni_modules_uviewUltra_components_upDatetimePicker_datetimePicker.defProps.getNumber("datetimePicker.minSecond")
    },
    maxSecond: {
      type: Number,
      default: uni_modules_uviewUltra_components_upDatetimePicker_datetimePicker.defProps.getNumber("datetimePicker.maxSecond")
    },
    filter: {
      type: Function,
      default: null
    },
    formatter: {
      type: Function,
      default: null
    },
    loading: {
      type: Boolean,
      default: uni_modules_uviewUltra_components_upDatetimePicker_datetimePicker.defProps.getBoolean("datetimePicker.loading")
    },
    itemHeight: {
      type: [String, Number],
      default: uni_modules_uviewUltra_components_upDatetimePicker_datetimePicker.defProps.getNumber("datetimePicker.itemHeight")
    },
    cancelText: {
      type: String,
      default: uni_modules_uviewUltra_components_upDatetimePicker_datetimePicker.defProps.getString("datetimePicker.cancelText")
    },
    confirmText: {
      type: String,
      default: uni_modules_uviewUltra_components_upDatetimePicker_datetimePicker.defProps.getString("datetimePicker.confirmText")
    },
    cancelColor: {
      type: String,
      default: uni_modules_uviewUltra_components_upDatetimePicker_datetimePicker.defProps.getString("datetimePicker.cancelColor")
    },
    confirmColor: {
      type: String,
      default: uni_modules_uviewUltra_components_upDatetimePicker_datetimePicker.defProps.getString("datetimePicker.confirmColor")
    },
    visibleItemCount: {
      type: [String, Number],
      default: uni_modules_uviewUltra_components_upDatetimePicker_datetimePicker.defProps.getNumber("datetimePicker.visibleItemCount")
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: uni_modules_uviewUltra_components_upDatetimePicker_datetimePicker.defProps.getBoolean("datetimePicker.closeOnClickOverlay")
    },
    defaultIndex: {
      type: Array,
      default: () => {
        return uni_modules_uviewUltra_components_upDatetimePicker_datetimePicker.defProps.getArray("datetimePicker.defaultIndex");
      }
    }
  },
  emits: ["close", "cancel", "confirm", "change", "update:modelValue"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emit = __emit;
    let inputValue = common_vendor.ref("");
    let showByClickInput = common_vendor.ref(false);
    let columns = common_vendor.ref([]);
    let innerDefaultIndex = common_vendor.ref([]);
    let innerFormatter = common_vendor.ref((type, value) => {
      return value;
    });
    let innerValue = common_vendor.ref("");
    const changeShow = () => {
      showByClickInput.value = !showByClickInput.value;
    };
    function toInt(value = null, fallback = 0) {
      if (value == null)
        return fallback;
      const num = parseInt(value.toString());
      return isNaN(num) ? fallback : num;
    }
    function safeColumnValue(values, columnIndex, optionIndex, fallback = "") {
      const column = values.length > columnIndex && values[columnIndex] != null ? values[columnIndex] : [];
      if (column.length == 0)
        return fallback;
      let index = optionIndex;
      if (isNaN(index))
        index = 0;
      index = uni_modules_uviewUltra_libs_function_index.range(0, column.length - 1, index);
      const value = column[index];
      if (value == null)
        return fallback;
      return value.toString();
    }
    function columnsEqual(left, right) {
      if (left.length != right.length)
        return false;
      for (let i = 0; i < left.length; i++) {
        const leftColumn = left[i];
        const rightColumn = right[i];
        if (leftColumn.length != rightColumn.length)
          return false;
        for (let j = 0; j < leftColumn.length; j++) {
          if (leftColumn[j] != rightColumn[j])
            return false;
        }
      }
      return true;
    }
    function getInputValue(newValue) {
      if (newValue == "" || newValue == null) {
        inputValue.value = "";
        return null;
      }
      if (props.mode == "time" || props.mode == "timesecond") {
        inputValue.value = newValue;
      } else {
        if (props.format != "") {
          inputValue.value = uni_modules_limeDayuts_common_index.dayuts(newValue).format(props.format);
        } else {
          let format = "";
          switch (props.mode) {
            case "date":
              format = "YYYY-MM-DD";
              break;
            case "year-month":
              format = "YYYY-MM";
              break;
            case "datetime":
              format = "YYYY-MM-DD HH:mm";
              break;
            case "datehour":
              format = "YYYY-MM-DD HH";
              break;
            case "datetimesecond":
              format = "YYYY-MM-DD HH:mm:ss";
              break;
            case "time":
              format = "HH:mm";
              break;
            case "timesecond":
              format = "HH:mm:ss";
              break;
          }
          inputValue.value = uni_modules_limeDayuts_common_index.dayuts(newValue).format(format);
        }
      }
    }
    function getFormatFunc() {
      let formatter = function(type, value) {
        return value;
      };
      if (props.formatter != null) {
        formatter = props.formatter;
      } else {
        formatter = innerFormatter.value;
      }
      return formatter;
    }
    function updateIndexs(value = null) {
      let values = [];
      let formatterFunc = (type, value2) => {
        return value2;
      };
      formatterFunc = getFormatFunc();
      if (props.mode === "time" || props.mode === "timesecond") {
        const timeArr = value.toString().split(":");
        const hourVal = timeArr.length > 0 ? timeArr[0] : "00";
        const minuteVal = timeArr.length > 1 ? timeArr[1] : "00";
        const secondVal = timeArr.length > 2 ? timeArr[2] : "00";
        values = [formatterFunc("hour", hourVal), formatterFunc("minute", minuteVal)];
        if (props.mode === "timesecond") {
          values.push(formatterFunc("second", secondVal));
        }
      } else {
        new Date(value.toString());
        values = [
          formatterFunc("year", `${uni_modules_limeDayuts_common_index.dayuts(value).year()}`),
          // 月份补0
          formatterFunc("month", uni_modules_uviewUltra_libs_function_index.padZero(uni_modules_limeDayuts_common_index.dayuts(value).month() + 1))
        ];
        if (props.mode === "date" || props.mode === "datehour" || props.mode === "datetime" || props.mode === "datetimesecond") {
          values.push(formatterFunc("day", uni_modules_uviewUltra_libs_function_index.padZero(uni_modules_limeDayuts_common_index.dayuts(value).date())));
        }
        if (props.mode === "datehour" || props.mode === "datetime" || props.mode === "datetimesecond") {
          values.push(formatterFunc("hour", uni_modules_uviewUltra_libs_function_index.padZero(uni_modules_limeDayuts_common_index.dayuts(value).hour())));
        }
        if (props.mode === "datetime" || props.mode === "datetimesecond") {
          values.push(formatterFunc("minute", uni_modules_uviewUltra_libs_function_index.padZero(uni_modules_limeDayuts_common_index.dayuts(value).minute())));
        }
        if (props.mode === "datetimesecond") {
          values.push(formatterFunc("second", uni_modules_uviewUltra_libs_function_index.padZero(uni_modules_limeDayuts_common_index.dayuts(value).second())));
        }
      }
      let indexs = [];
      columns.value.forEach((column, index) => {
        const targetVal = index < values.length ? values[index] : "";
        indexs.push(Math.max(0, column.findIndex((item) => {
          return item === targetVal;
        })));
      });
      innerDefaultIndex.value = indexs;
    }
    function getBoundary(type, innerValue2 = null) {
      let value = new Date(innerValue2.toString());
      if (isNaN(value.getTime())) {
        value = /* @__PURE__ */ new Date();
      }
      let boundary = new Date(props.minDate);
      switch (type) {
        case "min":
          boundary = new Date(props.minDate);
          break;
        case "max":
          boundary = new Date(props.maxDate);
          break;
      }
      const year = uni_modules_limeDayuts_common_index.dayuts(boundary).year();
      let month = 1;
      let date = 1;
      let hour = 0;
      let minute = 0;
      let second = 0;
      if (type === "max") {
        month = 12;
        date = uni_modules_limeDayuts_common_index.dayuts(boundary).daysInMonth();
        hour = 23;
        minute = 59;
        second = 59;
      }
      if (uni_modules_limeDayuts_common_index.dayuts(value).year() === year) {
        month = uni_modules_limeDayuts_common_index.dayuts(boundary).month() + 1;
        if (uni_modules_limeDayuts_common_index.dayuts(value).month() + 1 === month) {
          date = uni_modules_limeDayuts_common_index.dayuts(boundary).date();
          if (uni_modules_limeDayuts_common_index.dayuts(value).date() === date) {
            hour = uni_modules_limeDayuts_common_index.dayuts(boundary).hour();
            if (uni_modules_limeDayuts_common_index.dayuts(value).hour() === hour) {
              minute = uni_modules_limeDayuts_common_index.dayuts(boundary).minute();
              if (uni_modules_limeDayuts_common_index.dayuts(value).minute() === minute) {
                second = uni_modules_limeDayuts_common_index.dayuts(boundary).second();
              }
            }
          }
        }
      }
      let result = new UTSJSONObject({});
      result[`${type}Year`] = year;
      result[`${type}Month`] = month;
      result[`${type}Date`] = date;
      result[`${type}Hour`] = hour;
      result[`${type}Minute`] = minute;
      result[`${type}Second`] = second;
      return result;
    }
    function getRanges() {
      if (props.mode === "time" || props.mode === "timesecond") {
        const timeColumns = [
          new UTSJSONObject({
            type: "hour",
            ranges: [props.minHour, props.maxHour]
          }),
          new UTSJSONObject({
            type: "minute",
            ranges: [props.minMinute, props.maxMinute]
          })
        ];
        if (props.mode === "timesecond") {
          timeColumns.push(new UTSJSONObject({
            type: "second",
            ranges: [props.minSecond, props.maxSecond]
          }));
        }
        return timeColumns;
      }
      const maxObj = getBoundary("max", innerValue.value);
      const minObj = getBoundary("min", innerValue.value);
      const maxYear = maxObj["maxYear"];
      const maxDate = maxObj["maxDate"];
      const maxMonth = maxObj["maxMonth"];
      const maxHour = maxObj["maxHour"];
      const maxMinute = maxObj["maxMinute"];
      const maxSecond = maxObj["maxSecond"];
      const minYear = minObj["minYear"];
      const minDate = minObj["minDate"];
      const minMonth = minObj["minMonth"];
      const minHour = minObj["minHour"];
      const minMinute = minObj["minMinute"];
      const minSecond = minObj["minSecond"];
      const result = [
        new UTSJSONObject({
          type: "year",
          ranges: [minYear, maxYear]
        }),
        new UTSJSONObject({
          type: "month",
          ranges: [minMonth, maxMonth]
        }),
        new UTSJSONObject({
          type: "day",
          ranges: [minDate, maxDate]
        }),
        new UTSJSONObject({
          type: "hour",
          ranges: [minHour, maxHour]
        }),
        new UTSJSONObject({
          type: "minute",
          ranges: [minMinute, maxMinute]
        }),
        new UTSJSONObject({
          type: "second",
          ranges: [minSecond, maxSecond]
        })
      ];
      if (result.length > 2) {
        const dayItem = result[2];
        const dayType = dayItem["type"];
        if (dayType == "day") {
          const dayRange = dayItem["ranges"];
          const start = dayRange[0];
          const end = dayRange[1];
          if (isNaN(start) || isNaN(end) || start > end) {
            const fallbackDays = uni_modules_limeDayuts_common_index.dayuts(innerValue.value).isValid() ? uni_modules_limeDayuts_common_index.dayuts(innerValue.value).daysInMonth() : 31;
            dayItem["ranges"] = [1, fallbackDays];
          }
        }
      }
      if (props.mode === "date")
        result.splice(3, 3);
      if (props.mode === "datehour")
        result.splice(4, 2);
      if (props.mode === "datetime")
        result.splice(5, 1);
      if (props.mode === "year-month")
        result.splice(2, 4);
      return result;
    }
    function timesFunc(n, type, ranges) {
      let index = -1;
      let result = [];
      if (n > 0) {
        for (var i = 0; i < n; i++) {
          result.push("");
        }
      }
      let fu = function(index2) {
        let value = (parseInt(ranges[0].toString()) + index2).toString();
        value = type === "year" ? `${value}` : uni_modules_uviewUltra_libs_function_index.padZero(value);
        return value;
      };
      while (++index < n) {
        result[index] = fu(index);
      }
      return result;
    }
    function getOriginColumns() {
      let results = [];
      let rangesList = getRanges();
      rangesList.forEach((item) => {
        let type = item["type"].toString();
        let ranges = item["ranges"];
        let values = timesFunc(ranges[1] - ranges[0] + 1, type, ranges);
        if (props.filter != null) {
          let filterFunc = props.filter;
          let tmp = filterFunc(type, values);
          if (tmp != null) {
            values = tmp;
          }
          if (values == null || values.length == 0) {
            common_vendor.index.showToast({
              title: "日期filter结果不能为空",
              icon: "error",
              mask: true
            });
          }
        }
        results.push(new UTSJSONObject({
          type,
          values
        }));
      });
      return results;
    }
    function buildColumns() {
      const formatter = getFormatFunc();
      const originColumns = getOriginColumns();
      const results = [];
      originColumns.forEach((column) => {
        const formattedValues = column["values"].map((value) => {
          return formatter(column["type"].toString(), value);
        });
        results.push(formattedValues);
      });
      return results;
    }
    function updateColumns() {
      columns.value = buildColumns();
    }
    function updateColumnValue(value = null) {
      innerValue.value = value;
      updateColumns();
      common_vendor.nextTick$1(() => {
        setTimeout(() => {
          updateIndexs(value);
        }, 0);
      });
    }
    function syncColumnsAfterChange(value = null) {
      const nextColumns = buildColumns();
      if (!columnsEqual(columns.value, nextColumns)) {
        columns.value = nextColumns;
        common_vendor.nextTick$1(() => {
          setTimeout(() => {
            updateIndexs(value);
          }, 0);
        });
      }
    }
    function correctValue(val = null) {
      let value = "";
      if (val != null && val != "") {
        value = val;
      }
      const isDateMode = props.mode !== "time" && props.mode !== "timesecond";
      if (isDateMode && (value == null || value == "")) {
        value = (/* @__PURE__ */ new Date()).getTime();
      } else if (isDateMode) {
        let timestamp = 0;
        if (typeof value === "number") {
          timestamp = value;
        } else if (typeof value === "string") {
          const numValue = parseInt(value.toString());
          if (!isNaN(numValue)) {
            timestamp = numValue;
          } else {
            const date = new Date(value);
            if (!isNaN(date.getTime())) {
              timestamp = date.getTime();
            } else {
              timestamp = (/* @__PURE__ */ new Date()).getTime();
            }
          }
        }
        value = timestamp;
      } else if (!isDateMode && (value == null || value == "")) {
        const now = /* @__PURE__ */ new Date();
        value = props.mode === "timesecond" ? `${uni_modules_uviewUltra_libs_function_index.padZero(now.getHours())}:${uni_modules_uviewUltra_libs_function_index.padZero(now.getMinutes())}:${uni_modules_uviewUltra_libs_function_index.padZero(now.getSeconds())}` : `${uni_modules_uviewUltra_libs_function_index.padZero(now.getHours())}:${uni_modules_uviewUltra_libs_function_index.padZero(now.getMinutes())}`;
      }
      if (!isDateMode) {
        if (value.toString().indexOf(":") == -1) {
          uni_modules_uviewUltra_libs_function_index.error("时间错误，请传递如12:24的格式");
          return "";
        }
        const timeArr = value.toString().split(":");
        let hour = timeArr.length > 0 ? timeArr[0] : "00";
        let minute = timeArr.length > 1 ? timeArr[1] : "00";
        let second = timeArr.length > 2 ? timeArr[2] : "00";
        const hourNum = parseInt(hour);
        const minuteNum = parseInt(minute);
        hour = uni_modules_uviewUltra_libs_function_index.padZero(uni_modules_uviewUltra_libs_function_index.range(props.minHour, props.maxHour, isNaN(hourNum) ? props.minHour : hourNum));
        minute = uni_modules_uviewUltra_libs_function_index.padZero(uni_modules_uviewUltra_libs_function_index.range(props.minMinute, props.maxMinute, isNaN(minuteNum) ? props.minMinute : minuteNum));
        if (props.mode === "timesecond") {
          const secondNum = parseInt(second);
          second = uni_modules_uviewUltra_libs_function_index.padZero(uni_modules_uviewUltra_libs_function_index.range(props.minSecond, props.maxSecond, isNaN(secondNum) ? props.minSecond : secondNum));
          return `${hour}:${minute}:${second}`;
        }
        return `${hour}:${minute}`;
      } else {
        value = uni_modules_limeDayuts_common_index.dayuts(value).isBefore(uni_modules_limeDayuts_common_index.dayuts(props.minDate)) ? props.minDate : value;
        value = uni_modules_limeDayuts_common_index.dayuts(value).isAfter(uni_modules_limeDayuts_common_index.dayuts(props.maxDate)) ? props.maxDate : value;
        return value;
      }
    }
    function init() {
      innerValue.value = correctValue(props.modelValue);
      updateColumnValue(innerValue.value);
      getInputValue(innerValue.value.toString());
    }
    function close() {
      if (props.closeOnClickOverlay) {
        if (props.hasInput) {
          showByClickInput.value = false;
        }
        emit("close");
      }
    }
    function cancel() {
      if (props.hasInput) {
        showByClickInput.value = false;
      }
      emit("cancel");
    }
    function confirm() {
      emit("update:modelValue", innerValue.value);
      if (props.hasInput) {
        getInputValue(innerValue.value.toString());
        showByClickInput.value = false;
      }
      emit("confirm", new UTSJSONObject({
        value: innerValue.value,
        mode: props.mode
      }));
    }
    function intercept(e, type = "") {
      var _a2;
      if (e == null) {
        return type != "" ? "0000" : "00";
      }
      let judge = e.toString().match(/\d+/g);
      if (judge != null) {
        if (judge.length > 1) {
          uni_modules_uviewUltra_libs_function_index.error("请勿在过滤或格式化函数时添加数字");
          return "0";
        } else if (type != "" && ((_a2 = judge[0]) === null || _a2 === void 0 ? null : _a2.length) == 4) {
          return judge[0].toString();
        } else if (judge[0].length > 2) {
          uni_modules_uviewUltra_libs_function_index.error("请勿在过滤或格式化函数时添加数字");
          return "0";
        } else {
          return judge[0].toString();
        }
      } else {
        return type != "" ? "0000" : "00";
      }
    }
    function change(e) {
      let indexs = e["indexs"];
      if (indexs == null)
        indexs = [];
      let values = e["values"];
      if (values == null)
        values = [];
      let selectValue = "";
      if (props.mode === "time" || props.mode === "timesecond") {
        const idx0 = indexs.length > 0 ? indexs[0] : 0;
        const idx1 = indexs.length > 1 ? indexs[1] : 0;
        const idx2 = indexs.length > 2 ? indexs[2] : 0;
        const hourText = safeColumnValue(values, 0, idx0, uni_modules_uviewUltra_libs_function_index.padZero(props.minHour));
        const minuteText = safeColumnValue(values, 1, idx1, uni_modules_uviewUltra_libs_function_index.padZero(props.minMinute));
        const secondText = safeColumnValue(values, 2, idx2, uni_modules_uviewUltra_libs_function_index.padZero(props.minSecond));
        let hour = toInt(intercept(hourText), props.minHour);
        let minute = toInt(intercept(minuteText), props.minMinute);
        let second = toInt(intercept(secondText), props.minSecond);
        hour = uni_modules_uviewUltra_libs_function_index.range(props.minHour, props.maxHour, hour);
        minute = uni_modules_uviewUltra_libs_function_index.range(props.minMinute, props.maxMinute, minute);
        second = uni_modules_uviewUltra_libs_function_index.range(props.minSecond, props.maxSecond, second);
        selectValue = `${uni_modules_uviewUltra_libs_function_index.padZero(hour)}:${uni_modules_uviewUltra_libs_function_index.padZero(minute)}`;
        if (props.mode === "timesecond") {
          selectValue = `${selectValue}:${uni_modules_uviewUltra_libs_function_index.padZero(second)}`;
        }
      } else {
        const validCurrent = uni_modules_limeDayuts_common_index.dayuts(innerValue.value).isValid() ? uni_modules_limeDayuts_common_index.dayuts(innerValue.value) : uni_modules_limeDayuts_common_index.dayuts(props.minDate);
        const currentYear = validCurrent.year();
        const currentMonth = validCurrent.month() + 1;
        const currentDate = validCurrent.date();
        const currentHour = validCurrent.hour();
        const currentMinute = validCurrent.minute();
        const currentSecond = validCurrent.second();
        const idx0 = indexs.length > 0 ? indexs[0] : 0;
        const idx1 = indexs.length > 1 ? indexs[1] : 0;
        const idx2 = indexs.length > 2 ? indexs[2] : 0;
        const yearText = safeColumnValue(values, 0, idx0, currentYear.toString());
        const monthText = safeColumnValue(values, 1, idx1, uni_modules_uviewUltra_libs_function_index.padZero(currentMonth));
        let year = toInt(intercept(yearText, "year"), currentYear);
        let month = toInt(intercept(monthText), currentMonth);
        let hour = 0, minute = 0, second = 0;
        month = uni_modules_uviewUltra_libs_function_index.range(1, 12, month);
        const maxDate = uni_modules_limeDayuts_common_index.dayuts(`${year}-${month}`).daysInMonth();
        const dayText = safeColumnValue(values, 2, idx2, uni_modules_uviewUltra_libs_function_index.padZero(Math.min(currentDate, maxDate)));
        let date = toInt(intercept(dayText), Math.min(currentDate, maxDate));
        if (props.mode === "year-month") {
          date = 1;
        }
        date = uni_modules_uviewUltra_libs_function_index.range(1, maxDate, date);
        if (props.mode === "datehour" || props.mode === "datetime" || props.mode === "datetimesecond") {
          const idx3 = indexs.length > 3 ? indexs[3] : 0;
          const hourText = safeColumnValue(values, 3, idx3, uni_modules_uviewUltra_libs_function_index.padZero(currentHour));
          hour = uni_modules_uviewUltra_libs_function_index.range(0, 23, toInt(intercept(hourText), currentHour));
        }
        if (props.mode === "datetime" || props.mode === "datetimesecond") {
          const idx4 = indexs.length > 4 ? indexs[4] : 0;
          const minuteText = safeColumnValue(values, 4, idx4, uni_modules_uviewUltra_libs_function_index.padZero(currentMinute));
          minute = uni_modules_uviewUltra_libs_function_index.range(0, 59, toInt(intercept(minuteText), currentMinute));
        }
        if (props.mode === "datetimesecond") {
          const idx5 = indexs.length > 5 ? indexs[5] : 0;
          const secondText = safeColumnValue(values, 5, idx5, uni_modules_uviewUltra_libs_function_index.padZero(currentSecond));
          second = uni_modules_uviewUltra_libs_function_index.range(0, 59, toInt(intercept(secondText), currentSecond));
        }
        selectValue = new Date(year, month - 1, date, hour, minute, second).getTime();
        if (isNaN(selectValue)) {
          selectValue = correctValue(innerValue.value);
        }
      }
      let selectValueFormat = correctValue(selectValue);
      innerValue.value = selectValueFormat;
      syncColumnsAfterChange(selectValueFormat);
      emit("change", new UTSJSONObject({
        value: selectValueFormat,
        mode: props.mode
      }));
    }
    common_vendor.watch(() => {
      return props.show;
    }, (newValue) => {
      if (!newValue && props.hasInput) {
        showByClickInput.value = false;
      }
      if (newValue) {
        updateColumnValue(innerValue.value);
        setTimeout(() => {
          updateIndexs(innerValue.value);
        }, 150);
      }
    });
    init();
    common_vendor.onMounted(() => {
      if (props.pageInline) {
        setTimeout(() => {
          updateIndexs(innerValue.value);
        }, 200);
      }
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: __props.hasInput
      }, __props.hasInput ? {
        b: common_vendor.o(($event) => {
          return common_vendor.isRef(inputValue) ? inputValue.value = $event : inputValue = $event;
        }, "02"),
        c: common_vendor.p({
          placeholder: __props.placeholder,
          readonly: !!common_vendor.unref(showByClickInput),
          border: "surround",
          modelValue: common_vendor.unref(inputValue),
          class: "data-v-3f26ebf8"
        }),
        d: common_vendor.o(changeShow, "52")
      } : {}, {
        e: common_vendor.sr("picker", "3f26ebf8-1"),
        f: common_vendor.o(close, "3c"),
        g: common_vendor.o(cancel, "6e"),
        h: common_vendor.o(confirm, "c4"),
        i: common_vendor.o(change, "1b"),
        j: common_vendor.p({
          show: __props.pageInline || __props.show || __props.hasInput && common_vendor.unref(showByClickInput),
          pageInline: __props.pageInline,
          popupMode: __props.popupMode,
          closeOnClickOverlay: __props.closeOnClickOverlay,
          columns: common_vendor.unref(columns),
          title: __props.title,
          itemHeight: __props.itemHeight,
          showToolbar: __props.showToolbar,
          visibleItemCount: __props.visibleItemCount,
          defaultIndex: common_vendor.unref(innerDefaultIndex),
          cancelText: __props.cancelText,
          confirmText: __props.confirmText,
          cancelColor: __props.cancelColor,
          confirmColor: __props.confirmColor,
          toolbarRightSlot: __props.toolbarRightSlot,
          class: "r data-v-3f26ebf8"
        }),
        k: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        l: `${_ctx.u_s_b_h}px`,
        m: `${_ctx.u_s_a_i_b}px`,
        n: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      });
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3f26ebf8"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-datetime-picker/up-datetime-picker.js.map
