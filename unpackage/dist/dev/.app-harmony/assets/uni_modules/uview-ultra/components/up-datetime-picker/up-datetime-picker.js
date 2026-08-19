import { _ as __easycom_1 } from "../up-input/up-input.js";
import { _ as __easycom_2$1 } from "../up-picker/up-picker.js";
import { d as dayuts } from "../../../lime-dayuts/common/index.js";
import "../../../lime-dayuts/common/use.js";
import "../../../lime-dayuts/utssdk/interface.js";
import { p as padZero, i as error, f as range } from "../../libs/function/index.js";
import "../../libs/function/test.js";
import { d as defProps } from "./datetimePicker.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, unref: _unref, isRef: _isRef, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedDataEvent: _setSharedDataEvent, createSharedDataIf: _createSharedDataIf, createSharedDataSlot: _createSharedDataSlot, withSharedDataVaporCtx: _withSharedDataVaporCtx } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpDatetimePickerUpDatetimePicker";
const { ref, watch, nextTick, onMounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "ced722d6",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-datetime-picker/up-datetime-picker.uvue",
  __name: "up-datetime-picker",
  props: {
    hasInput: {
      type: Boolean,
      default: defProps.getBoolean("datetimePicker.hasInput")
    },
    placeholder: {
      type: String,
      default: defProps.getString("datetimePicker.placeholder")
    },
    format: {
      type: String,
      default: defProps.getString("datetimePicker.format")
    },
    show: {
      type: Boolean,
      default: defProps.getBoolean("datetimePicker.show")
    },
    pageInline: {
      type: Boolean,
      default: defProps.getBoolean("datetimePicker.pageInline")
    },
    popupMode: {
      type: String,
      default: defProps.getString("datetimePicker.popupMode")
    },
    showToolbar: {
      type: Boolean,
      default: defProps.getBoolean("datetimePicker.showToolbar")
    },
    toolbarRightSlot: {
      type: Boolean,
      default: defProps.getBoolean("datetimePicker.toolbarRightSlot")
    },
    modelValue: {
      type: [String, Number],
      default: defProps.getString("datetimePicker.value")
    },
    title: {
      type: String,
      default: defProps.getString("datetimePicker.title")
    },
    mode: {
      type: String,
      default: defProps.getString("datetimePicker.mode")
    },
    maxDate: {
      type: Number,
      default: defProps.getNumber("datetimePicker.maxDate")
    },
    minDate: {
      type: Number,
      default: defProps.getNumber("datetimePicker.minDate")
    },
    minHour: {
      type: Number,
      default: defProps.getNumber("datetimePicker.minHour")
    },
    maxHour: {
      type: Number,
      default: defProps.getNumber("datetimePicker.maxHour")
    },
    minMinute: {
      type: Number,
      default: defProps.getNumber("datetimePicker.minMinute")
    },
    maxMinute: {
      type: Number,
      default: defProps.getNumber("datetimePicker.maxMinute")
    },
    minSecond: {
      type: Number,
      default: defProps.getNumber("datetimePicker.minSecond")
    },
    maxSecond: {
      type: Number,
      default: defProps.getNumber("datetimePicker.maxSecond")
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
      default: defProps.getBoolean("datetimePicker.loading")
    },
    itemHeight: {
      type: [String, Number],
      default: defProps.getNumber("datetimePicker.itemHeight")
    },
    cancelText: {
      type: String,
      default: defProps.getString("datetimePicker.cancelText")
    },
    confirmText: {
      type: String,
      default: defProps.getString("datetimePicker.confirmText")
    },
    cancelColor: {
      type: String,
      default: defProps.getString("datetimePicker.cancelColor")
    },
    confirmColor: {
      type: String,
      default: defProps.getString("datetimePicker.confirmColor")
    },
    visibleItemCount: {
      type: [String, Number],
      default: defProps.getNumber("datetimePicker.visibleItemCount")
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: defProps.getBoolean("datetimePicker.closeOnClickOverlay")
    },
    defaultIndex: {
      type: Array,
      default: () => {
        return defProps.getArray("datetimePicker.defaultIndex");
      }
    }
  },
  emits: ["close", "cancel", "confirm", "change", "update:modelValue"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpDatetimePickerUpDatetimePickerSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    let inputValue = ref("");
    let showByClickInput = ref(false);
    let columns = ref([]);
    let innerDefaultIndex = ref([]);
    let innerFormatter = ref((type, value) => {
      return value;
    });
    let innerValue = ref("");
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
      index = range(0, column.length - 1, index);
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
          inputValue.value = dayuts(newValue).format(props.format);
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
          inputValue.value = dayuts(newValue).format(format);
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
        const date = typeof value === "number" ? new Date(value) : new Date(value.toString());
        const validDate = isNaN(date.getTime()) ? /* @__PURE__ */ new Date() : date;
        values = [
          formatterFunc("year", `${validDate.getFullYear()}`),
          // 月份补0
          formatterFunc("month", padZero(validDate.getMonth() + 1))
        ];
        if (props.mode === "date" || props.mode === "datehour" || props.mode === "datetime" || props.mode === "datetimesecond") {
          values.push(formatterFunc("day", padZero(validDate.getDate())));
        }
        if (props.mode === "datehour" || props.mode === "datetime" || props.mode === "datetimesecond") {
          values.push(formatterFunc("hour", padZero(validDate.getHours())));
        }
        if (props.mode === "datetime" || props.mode === "datetimesecond") {
          values.push(formatterFunc("minute", padZero(validDate.getMinutes())));
        }
        if (props.mode === "datetimesecond") {
          values.push(formatterFunc("second", padZero(validDate.getSeconds())));
        }
      }
      let indexs = [];
      columns.value.forEach((column, index) => {
        const targetVal = index < values.length ? values[index] : "";
        indexs.push(Math.max(0, column.findIndex((item) => {
          return item == targetVal;
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
      const year = dayuts(boundary).year();
      let month = 1;
      let date = 1;
      let hour = 0;
      let minute = 0;
      let second = 0;
      if (type === "max") {
        month = 12;
        date = dayuts(boundary).daysInMonth();
        hour = 23;
        minute = 59;
        second = 59;
      }
      if (dayuts(value).year() === year) {
        month = dayuts(boundary).month() + 1;
        if (dayuts(value).month() + 1 === month) {
          date = dayuts(boundary).date();
          if (dayuts(value).date() === date) {
            hour = dayuts(boundary).hour();
            if (dayuts(value).hour() === hour) {
              minute = dayuts(boundary).minute();
              if (dayuts(value).minute() === minute) {
                second = dayuts(boundary).second();
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
            const fallbackDays = dayuts(innerValue.value).isValid() ? dayuts(innerValue.value).daysInMonth() : 31;
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
        value = type === "year" ? `${value}` : padZero(value);
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
            uni.showToast({
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
      updateIndexs(value);
      nextTick(() => {
        setTimeout(() => {
          updateIndexs(value);
        }, 0);
      });
    }
    function syncColumnsAfterChange(value = null) {
      const nextColumns = buildColumns();
      if (!columnsEqual(columns.value, nextColumns)) {
        columns.value = nextColumns;
        nextTick(() => {
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
        value = props.mode === "timesecond" ? `${padZero(now.getHours())}:${padZero(now.getMinutes())}:${padZero(now.getSeconds())}` : `${padZero(now.getHours())}:${padZero(now.getMinutes())}`;
      }
      if (!isDateMode) {
        if (value.toString().indexOf(":") == -1) {
          error("时间错误，请传递如12:24的格式");
          return "";
        }
        const timeArr = value.toString().split(":");
        let hour = timeArr.length > 0 ? timeArr[0] : "00";
        let minute = timeArr.length > 1 ? timeArr[1] : "00";
        let second = timeArr.length > 2 ? timeArr[2] : "00";
        const hourNum = parseInt(hour);
        const minuteNum = parseInt(minute);
        hour = padZero(range(props.minHour, props.maxHour, isNaN(hourNum) ? props.minHour : hourNum));
        minute = padZero(range(props.minMinute, props.maxMinute, isNaN(minuteNum) ? props.minMinute : minuteNum));
        if (props.mode === "timesecond") {
          const secondNum = parseInt(second);
          second = padZero(range(props.minSecond, props.maxSecond, isNaN(secondNum) ? props.minSecond : secondNum));
          return `${hour}:${minute}:${second}`;
        }
        return `${hour}:${minute}`;
      } else {
        value = dayuts(value).isBefore(dayuts(props.minDate)) ? props.minDate : value;
        value = dayuts(value).isAfter(dayuts(props.maxDate)) ? props.maxDate : value;
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
          error("请勿在过滤或格式化函数时添加数字");
          return "0";
        } else if (type != "" && ((_a2 = judge[0]) === null || _a2 === void 0 ? null : _a2.length) == 4) {
          return judge[0].toString();
        } else if (judge[0].length > 2) {
          error("请勿在过滤或格式化函数时添加数字");
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
        const hourText = safeColumnValue(values, 0, idx0, padZero(props.minHour));
        const minuteText = safeColumnValue(values, 1, idx1, padZero(props.minMinute));
        const secondText = safeColumnValue(values, 2, idx2, padZero(props.minSecond));
        let hour = toInt(intercept(hourText), props.minHour);
        let minute = toInt(intercept(minuteText), props.minMinute);
        let second = toInt(intercept(secondText), props.minSecond);
        hour = range(props.minHour, props.maxHour, hour);
        minute = range(props.minMinute, props.maxMinute, minute);
        second = range(props.minSecond, props.maxSecond, second);
        selectValue = `${padZero(hour)}:${padZero(minute)}`;
        if (props.mode === "timesecond") {
          selectValue = `${selectValue}:${padZero(second)}`;
        }
      } else {
        const validCurrent = dayuts(innerValue.value).isValid() ? dayuts(innerValue.value) : dayuts(props.minDate);
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
        const monthText = safeColumnValue(values, 1, idx1, padZero(currentMonth));
        let year = toInt(intercept(yearText, "year"), currentYear);
        let month = toInt(intercept(monthText), currentMonth);
        let hour = 0, minute = 0, second = 0;
        month = range(1, 12, month);
        const maxDate = dayuts(`${year}-${month}`).daysInMonth();
        const dayText = safeColumnValue(values, 2, idx2, padZero(Math.min(currentDate, maxDate)));
        let date = toInt(intercept(dayText), Math.min(currentDate, maxDate));
        if (props.mode === "year-month") {
          date = 1;
        }
        date = range(1, maxDate, date);
        if (props.mode === "datehour" || props.mode === "datetime" || props.mode === "datetimesecond") {
          const idx3 = indexs.length > 3 ? indexs[3] : 0;
          const hourText = safeColumnValue(values, 3, idx3, padZero(currentHour));
          hour = range(0, 23, toInt(intercept(hourText), currentHour));
        }
        if (props.mode === "datetime" || props.mode === "datetimesecond") {
          const idx4 = indexs.length > 4 ? indexs[4] : 0;
          const minuteText = safeColumnValue(values, 4, idx4, padZero(currentMinute));
          minute = range(0, 59, toInt(intercept(minuteText), currentMinute));
        }
        if (props.mode === "datetimesecond") {
          const idx5 = indexs.length > 5 ? indexs[5] : 0;
          const secondText = safeColumnValue(values, 5, idx5, padZero(currentSecond));
          second = range(0, 59, toInt(intercept(secondText), currentSecond));
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
        // 微信小程序不能传递this实例，会因为循环引用而报错
        // picker: this.$refs.picker,
        mode: props.mode
      }));
    }
    watch(() => {
      return props.show;
    }, (newValue) => {
      if (!newValue && props.hasInput) {
        showByClickInput.value = false;
      }
      if (newValue) {
        innerValue.value = correctValue(props.modelValue);
        updateColumnValue(innerValue.value);
        setTimeout(() => {
          updateIndexs(innerValue.value);
        }, 150);
      }
    });
    watch(() => {
      return props.modelValue;
    }, (newVal = null) => {
      innerValue.value = correctValue(newVal);
      updateColumnValue(innerValue.value);
    });
    init();
    onMounted(() => {
      if (props.pageInline) {
        setTimeout(() => {
          updateIndexs(innerValue.value);
        }, 200);
      }
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_up_input = __easycom_1;
      const _component_up_picker = __easycom_2$1;
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.hasInput));
      }, () => {
        const n2 = _createSharedDataComponentWithFallback(_component_up_input, "7b41608c", {
          placeholder: () => {
            return __props.placeholder;
          },
          readonly: () => {
            return !!_unref(showByClickInput);
          },
          border: "surround",
          modelValue: () => {
            return _unref(inputValue);
          },
          "onUpdate:modelValue": () => {
            return (_value) => {
              return _isRef(inputValue) ? inputValue.value = _value : inputValue = _value;
            };
          }
        });
        _setSharedData(__sharedData, 1, n2?.sharedData);
        _setSharedDataEvent(__sharedData, 2, changeShow);
      });
      const n8 = _createSharedDataComponentWithFallback(_component_up_picker, "7b4150d4", {
        show: () => {
          return __props.pageInline || __props.show || __props.hasInput && _unref(showByClickInput);
        },
        pageInline: () => {
          return __props.pageInline;
        },
        popupMode: () => {
          return __props.popupMode;
        },
        closeOnClickOverlay: () => {
          return __props.closeOnClickOverlay;
        },
        columns: () => {
          return _unref(columns);
        },
        title: () => {
          return __props.title;
        },
        itemHeight: () => {
          return __props.itemHeight;
        },
        showToolbar: () => {
          return __props.showToolbar;
        },
        visibleItemCount: () => {
          return __props.visibleItemCount;
        },
        defaultIndex: () => {
          return _unref(innerDefaultIndex);
        },
        cancelText: () => {
          return __props.cancelText;
        },
        confirmText: () => {
          return __props.confirmText;
        },
        cancelColor: () => {
          return __props.cancelColor;
        },
        confirmColor: () => {
          return __props.confirmColor;
        },
        toolbarRightSlot: () => {
          return __props.toolbarRightSlot;
        },
        onClose: () => {
          return close;
        },
        onCancel: () => {
          return cancel;
        },
        onConfirm: () => {
          return confirm;
        },
        onChange: () => {
          return change;
        }
      }, {
        "toolbar-right": _withSharedDataVaporCtx(() => {
          _createSharedDataSlot("toolbar-right", null, null);
        }),
        "toolbar-bottom": _withSharedDataVaporCtx(() => {
          _createSharedDataSlot("toolbar-bottom", null, null);
        })
      });
      _setSharedData(__sharedData, 3, n8?.sharedData);
      _setTemplateRef(n8, "picker");
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-datetime-picker.js.map
