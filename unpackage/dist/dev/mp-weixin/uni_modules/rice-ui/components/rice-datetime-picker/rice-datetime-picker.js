"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
require("../../libs/plugin/coloruts/constant.js");
require("../../libs/plugin/coloruts/type.js");
const uni_modules_riceUi_libs_plugin_dateuts_index = require("../../libs/plugin/dateuts/index.js");
require("../rice-picker/type.js");
const uni_modules_riceUi_components_riceDatetimePicker_utils = require("./utils.js");
const uni_modules_riceUi_components_riceDatetimePicker_type = require("./type.js");
if (!Array) {
  const _easycom_rice_picker_1 = common_vendor.resolveComponent("rice-picker");
  _easycom_rice_picker_1();
}
const _easycom_rice_picker = () => "../rice-picker/rice-picker.js";
if (!Math) {
  _easycom_rice_picker();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-datetime-picker",
  styleIsolation: "app-and-page"
}, { __name: "rice-datetime-picker", props: /* @__PURE__ */ common_vendor.mergeModels(new common_vendor.UTSJSONObject({
  type: { default: "date" },
  minDate: { default: uni_modules_riceUi_libs_plugin_dateuts_index.dateuts().subtract(10, "year").startOf("day").format("YYYY-MM-DD HH:mm:ss") },
  maxDate: { default: uni_modules_riceUi_libs_plugin_dateuts_index.dateuts().add(10, "year").endOf("day").format("YYYY-MM-DD HH:mm:ss") },
  valueFormat: {},
  format: {},
  toolbarPosition: {},
  title: {},
  confirmButtonText: {},
  cancelButtonText: {},
  closeOnClickOverlay: { type: Boolean, default: true },
  closeOnClickConfirm: { type: Boolean, default: true },
  closeOnClickCancel: { type: Boolean, default: true },
  loading: { type: Boolean },
  filter: {},
  formatter: {},
  fontSize: {},
  optionHeight: {},
  visibleOptionNum: {},
  zIndex: {},
  usePopup: { type: Boolean, default: true },
  emptyText: {},
  safeAreaInsetBottom: { type: Boolean, default: true },
  immediateChange: { type: Boolean, default: true }
}), new common_vendor.UTSJSONObject({
  "modelValue": {
    type: String,
    default: ""
  },
  "modelModifiers": {},
  "show": {
    type: Boolean,
    default: false
  },
  "showModifiers": {}
})), emits: /* @__PURE__ */ common_vendor.mergeModels(["confirm", "change", "cancel", "open", "close", "opened", "closed"], ["update:modelValue", "update:show"]), setup(__props, _a) {
  var __emit = _a.emit;
  const emit = __emit;
  const props = __props;
  const modelValue = common_vendor.useModel(__props, "modelValue");
  const show = common_vendor.useModel(__props, "show");
  if (!uni_modules_riceUi_libs_utils_basic.hasStrValue(modelValue.value)) {
    modelValue.value = uni_modules_riceUi_libs_plugin_dateuts_index.dateuts().format("YYYY-MM-DD HH:mm:ss");
  }
  const mode = common_vendor.computed(() => {
    return uni_modules_riceUi_components_riceDatetimePicker_utils.getMode(props.type);
  });
  const isVisible = common_vendor.computed(() => {
    return show.value || props.usePopup == false;
  });
  const getMinOrMaxDate = (minOrMax) => {
    const isTimeMode = props.type == "minute" || props.type == "time";
    const isMin = minOrMax == "min";
    let boundary = isMin ? props.minDate : props.maxDate;
    const isDate = uni_modules_riceUi_components_riceDatetimePicker_utils.isRightDate(boundary);
    if (isTimeMode) {
      const now = uni_modules_riceUi_components_riceDatetimePicker_utils.isRightDate(modelValue.value) ? uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(modelValue.value).format("YYYY-MM-DD") : uni_modules_riceUi_libs_plugin_dateuts_index.dateuts().format("YYYY-MM-DD");
      const range = isMin ? "00:00:00" : "23:59:59";
      const second = isDate ? uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(boundary).format("HH:mm:ss") : uni_modules_riceUi_components_riceDatetimePicker_utils.isTime(boundary) ? boundary : range;
      return uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(`${now} ${second}`);
    }
    if (!isDate) {
      return isMin ? uni_modules_riceUi_libs_plugin_dateuts_index.dateuts().subtract(10, "year").startOf("day") : uni_modules_riceUi_libs_plugin_dateuts_index.dateuts().add(10, "year").endOf("day");
    }
    return uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(boundary);
  };
  const minDate = common_vendor.computed(() => {
    return getMinOrMaxDate("min");
  });
  const maxDate = common_vendor.computed(() => {
    return getMinOrMaxDate("max");
  });
  const getParseDate = () => {
    var _a2;
    let newVal = modelValue.value;
    const isTimeMode = props.type == "minute" || props.type == "time";
    if (isTimeMode && uni_modules_riceUi_components_riceDatetimePicker_utils.isTime(newVal)) {
      newVal = uni_modules_riceUi_libs_plugin_dateuts_index.dateuts().format(`YYYY-MM-DD ${newVal}`);
    }
    const isDate = uni_modules_riceUi_components_riceDatetimePicker_utils.isRightDate(newVal);
    if (!isDate) {
      return minDate.value;
    }
    let date = uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(newVal);
    const compare = uni_modules_riceUi_libs_utils_basic.clamp(date.valueOf(), minDate.value.valueOf(), maxDate.value.valueOf());
    const startValue = (_a2 = uni_modules_riceUi_components_riceDatetimePicker_utils.startOfMaps[props.type]) !== null && _a2 !== void 0 ? _a2 : "date";
    const d = uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(compare).startOf(startValue);
    return d.isValid() ? d : minDate.value;
  };
  const currentDate = common_vendor.ref(getParseDate());
  const initCurrentValues = () => {
    const date = currentDate.value.toObject();
    const values = mode.value.map((type) => {
      switch (type) {
        case "year":
          return date.year;
        case "month":
          return date.month + 1;
        case "day":
          return date.date;
        case "hour":
          return date.hours;
        case "minute":
          return date.minutes;
        case "second":
          return date.seconds;
        default:
          return 0;
      }
    });
    return values;
  };
  const currentValues = common_vendor.ref(isVisible.value ? initCurrentValues() : []);
  function getDateArr(type = "default") {
    let date = minDate.value;
    if (type == "max") {
      date = maxDate.value;
    } else if (type == "default") {
      const compare = uni_modules_riceUi_libs_utils_basic.clamp(currentDate.value.valueOf(), minDate.value.valueOf(), maxDate.value.valueOf());
      const d = uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(compare);
      date = d.isValid() ? d : minDate.value;
    }
    return date.toArray();
  }
  const getOptionBoundary = (minOrMax, type) => {
    const isMin = minOrMax == "min";
    const boundary = new common_vendor.UTSJSONObject({
      year: [2e3, 2099],
      month: [0, 11],
      day: [1, currentDate.value.daysInMonth()],
      hour: [0, 23],
      minute: [0, 59],
      second: [0, 59]
    });
    const curDate = getDateArr();
    const compareDate = getDateArr(minOrMax);
    const boundaryInfo = boundary.getArray(type);
    for (let i = 0; i < curDate.length; i++) {
      if (type == uni_modules_riceUi_components_riceDatetimePicker_utils.FULL_MODES[i]) {
        return compareDate[i];
      }
      if (curDate[i] != compareDate[i]) {
        return isMin ? boundaryInfo[0] : boundaryInfo[1];
      }
    }
    return isMin ? boundaryInfo[0] : boundaryInfo[1];
  };
  const createOptionsGenera = (type) => {
    let min = getOptionBoundary("min", type);
    let max = getOptionBoundary("max", type);
    if (type == "month") {
      min += 1;
      max += 1;
    }
    return uni_modules_riceUi_components_riceDatetimePicker_utils.getOptions(min, max, type, props.formatter, props.filter);
  };
  const currentColumns = common_vendor.ref([]);
  const updateColumns = () => {
    if (!isVisible.value)
      return null;
    let options = mode.value.map((type) => {
      switch (type) {
        case "year":
          return createOptionsGenera("year");
        case "month":
          return createOptionsGenera("month");
        case "day":
          return createOptionsGenera("day");
        case "hour":
          return createOptionsGenera("hour");
        case "minute":
          return createOptionsGenera("minute");
        case "second":
          return createOptionsGenera("second");
        default:
          return [];
      }
    });
    currentColumns.value = options;
  };
  updateColumns();
  const format = common_vendor.computed(() => {
    if (props.format != null)
      return props.format;
    const type = props.type;
    if (type == "year")
      return "YYYY";
    if (type == "month")
      return "YYYY-MM";
    if (type == "date")
      return "YYYY-MM-DD";
    if (type == "minute")
      return "HH:mm";
    if (type == "time")
      return "HH:mm:ss";
    if (type == "datehour")
      return "YYYY-MM-DD HH";
    if (type == "dateminute")
      return "YYYY-MM-DD HH:mm";
    return "YYYY-MM-DD HH:mm:ss";
  });
  const normalizePickerExtend = (value) => {
    const normalized = new uni_modules_riceUi_components_riceDatetimePicker_type.DateTimePickerExtend(Object.assign({ year: null, month: null, day: null, hour: null, minute: null, second: null, timeStamp: null, value: null }, value));
    const hasYear = mode.value.includes("year");
    const hasMonth = mode.value.includes("month");
    const hasDay = mode.value.includes("day");
    if (hasYear && hasMonth && hasDay) {
      const safeMonth = uni_modules_riceUi_libs_utils_basic.clamp(normalized.month, 1, 12);
      const monthStart = uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(`${normalized.year}-${safeMonth}-01 00:00:00`);
      const maxDay = monthStart.daysInMonth();
      normalized.month = safeMonth;
      normalized.day = uni_modules_riceUi_libs_utils_basic.clamp(normalized.day, 1, maxDay);
    }
    return normalized;
  };
  const getAllValue = () => {
    const date = currentDate.value.toObject();
    const result = new uni_modules_riceUi_components_riceDatetimePicker_type.DateTimePickerExtend({
      year: date.year,
      month: date.month + 1,
      day: date.date,
      hour: date.hours,
      minute: date.minutes,
      second: date.seconds,
      timeStamp: 0,
      value: ""
    });
    mode.value.forEach((m, i) => {
      if (result[m] != null && currentValues.value.length > 0)
        result[m] = currentValues.value[i];
    });
    const normalized = normalizePickerExtend(result);
    const newVal = `${normalized.year}-${normalized.month}-${normalized.day} ${normalized.hour}:${normalized.minute}:${normalized.second}`;
    const d = uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(newVal);
    normalized.timeStamp = d.valueOf();
    normalized.value = d.format(format.value);
    return normalized;
  };
  const onConfirm = () => {
    const values = getAllValue();
    emit("confirm", values.value, values);
  };
  const onCancel = () => {
    const values = getAllValue();
    emit("cancel", values.value, values);
  };
  const onChange = () => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      yield common_vendor.nextTick$1();
      const values = getAllValue();
      emit("change", values.value, values);
    });
  };
  const updateModelValue = (newVal) => {
    if (!isVisible.value || modelValue.value == newVal)
      return null;
    modelValue.value = newVal;
  };
  common_vendor.watch(currentValues, () => {
    const result = getAllValue();
    updateModelValue(result.value);
  }, {
    deep: true,
    immediate: true
  });
  common_vendor.watch([modelValue, mode, isVisible, () => {
    return props.minDate;
  }, () => {
    return props.maxDate;
  }], () => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      if (!isVisible.value)
        return Promise.resolve(null);
      currentDate.value = getParseDate();
      currentValues.value = initCurrentValues();
      updateColumns();
    });
  }, {
    deep: true
  });
  const onOpen = () => {
    emit("open");
  };
  const onClose = () => {
    emit("close");
  };
  const onOpened = () => {
    emit("opened");
  };
  const onClosed = () => {
    emit("closed");
  };
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.gei(_ctx, ""),
      b: common_vendor.o(onConfirm, "3e"),
      c: common_vendor.o(onCancel, "13"),
      d: common_vendor.o(onChange, "52"),
      e: common_vendor.o(onOpen, "42"),
      f: common_vendor.o(onClose, "6b"),
      g: common_vendor.o(onOpened, "93"),
      h: common_vendor.o(onClosed, "57"),
      i: common_vendor.o(($event) => {
        return common_vendor.isRef(currentValues) ? currentValues.value = $event : null;
      }, "93"),
      j: common_vendor.o(($event) => {
        return show.value = $event;
      }, "77"),
      k: common_vendor.p({
        columns: common_vendor.unref(currentColumns),
        ["use-popup"]: _ctx.usePopup,
        loading: _ctx.loading,
        ["toolbar-position"]: _ctx.toolbarPosition,
        ["immediate-change"]: _ctx.immediateChange,
        ["close-on-click-confirm"]: _ctx.closeOnClickConfirm,
        ["close-on-click-cancel"]: _ctx.closeOnClickCancel,
        ["close-on-click-overlay"]: _ctx.closeOnClickOverlay,
        title: _ctx.title,
        ["confirm-button-text"]: _ctx.confirmButtonText,
        ["cancel-button-text"]: _ctx.cancelButtonText,
        ["font-size"]: _ctx.fontSize,
        ["visible-option-num"]: _ctx.visibleOptionNum,
        ["option-height"]: _ctx.optionHeight,
        ["empty-text"]: _ctx.emptyText,
        ["z-index"]: _ctx.zIndex,
        ["safe-area-inset-bottom"]: _ctx.safeAreaInsetBottom,
        modelValue: common_vendor.unref(currentValues),
        show: show.value,
        id: common_vendor.gei(_ctx, "")
      }),
      l: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-datetime-picker/rice-datetime-picker.js.map
