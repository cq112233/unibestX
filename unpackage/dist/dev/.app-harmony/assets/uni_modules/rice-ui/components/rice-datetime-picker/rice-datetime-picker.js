import { _ as __easycom_1 } from "../rice-picker/rice-picker.js";
import { h as hasStrValue, c as clamp } from "../../libs/utils/basic.js";
import "../../libs/plugin/coloruts/constant.js";
import "../../libs/plugin/coloruts/type.js";
import { d as dateuts } from "../../libs/plugin/dateuts/index.js";
import "../rice-picker/type.js";
import { g as getMode, i as isRightDate, a as isTime, s as startOfMaps, b as getOptions, F as FULL_MODES } from "./utils.js";
import { D as DateTimePickerExtend } from "./type.js";
const { defineEmits: _defineEmits, useModel: _useModel, mergeModels: _mergeModels, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, unref: _unref, isRef: _isRef, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceDatetimePickerRiceDatetimePicker";
const { computed, ref, nextTick, watch } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-datetime-picker",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "ca146ada",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-datetime-picker/rice-datetime-picker.uvue",
  __name: "rice-datetime-picker",
  props: /* @__PURE__ */ _mergeModels(new UTSJSONObject({
    type: { default: "date", type: String },
    minDate: { default: dateuts().subtract(10, "year").startOf("day").format("YYYY-MM-DD HH:mm:ss"), type: String },
    maxDate: { default: dateuts().add(10, "year").endOf("day").format("YYYY-MM-DD HH:mm:ss"), type: String },
    valueFormat: { type: String },
    format: { type: String },
    toolbarPosition: { type: String },
    title: { type: [String, Number] },
    confirmButtonText: { type: [String, Number] },
    cancelButtonText: { type: [String, Number] },
    closeOnClickOverlay: { type: Boolean, default: true },
    closeOnClickConfirm: { type: Boolean, default: true },
    closeOnClickCancel: { type: Boolean, default: true },
    loading: { type: Boolean },
    filter: { type: Function },
    formatter: { type: Function },
    fontSize: { type: [String, Number] },
    optionHeight: { type: [String, Number] },
    visibleOptionNum: { type: Number },
    zIndex: { type: Number },
    usePopup: { type: Boolean, default: true },
    emptyText: { type: String },
    safeAreaInsetBottom: { type: Boolean, default: true },
    immediateChange: { type: Boolean, default: true }
  }), new UTSJSONObject({
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
  })),
  emits: /* @__PURE__ */ _mergeModels(["confirm", "change", "cancel", "open", "close", "opened", "closed"], ["update:modelValue", "update:show"]),
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceDatetimePickerRiceDatetimePickerSharedData", sharedDataClassId: 0 })));
    const emit = __emit;
    const props = __props;
    const modelValue = _useModel(__props, "modelValue");
    const show = _useModel(__props, "show");
    if (!hasStrValue(modelValue.value)) {
      modelValue.value = dateuts().format("YYYY-MM-DD HH:mm:ss");
    }
    const mode = computed(() => {
      return getMode(props.type);
    });
    const isVisible = computed(() => {
      return show.value || props.usePopup == false;
    });
    const getMinOrMaxDate = (minOrMax) => {
      const isTimeMode = props.type == "minute" || props.type == "time";
      const isMin = minOrMax == "min";
      let boundary = isMin ? props.minDate : props.maxDate;
      const isDate = isRightDate(boundary);
      if (isTimeMode) {
        const now = isRightDate(modelValue.value) ? dateuts(modelValue.value).format("YYYY-MM-DD") : dateuts().format("YYYY-MM-DD");
        const range = isMin ? "00:00:00" : "23:59:59";
        const second = isDate ? dateuts(boundary).format("HH:mm:ss") : isTime(boundary) ? boundary : range;
        return dateuts(`${now} ${second}`);
      }
      if (!isDate) {
        return isMin ? dateuts().subtract(10, "year").startOf("day") : dateuts().add(10, "year").endOf("day");
      }
      return dateuts(boundary);
    };
    const minDate = computed(() => {
      return getMinOrMaxDate("min");
    });
    const maxDate = computed(() => {
      return getMinOrMaxDate("max");
    });
    const getParseDate = () => {
      var _a2;
      let newVal = modelValue.value;
      const isTimeMode = props.type == "minute" || props.type == "time";
      if (isTimeMode && isTime(newVal)) {
        newVal = dateuts().format(`YYYY-MM-DD ${newVal}`);
      }
      const isDate = isRightDate(newVal);
      if (!isDate) {
        return minDate.value;
      }
      let date = dateuts(newVal);
      const compare = clamp(date.valueOf(), minDate.value.valueOf(), maxDate.value.valueOf());
      const startValue = (_a2 = startOfMaps[props.type]) !== null && _a2 !== void 0 ? _a2 : "date";
      const d = dateuts(compare).startOf(startValue);
      return d.isValid() ? d : minDate.value;
    };
    const currentDate = ref(getParseDate());
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
    const currentValues = ref(isVisible.value ? initCurrentValues() : []);
    function getDateArr(type = "default") {
      let date = minDate.value;
      if (type == "max") {
        date = maxDate.value;
      } else if (type == "default") {
        const compare = clamp(currentDate.value.valueOf(), minDate.value.valueOf(), maxDate.value.valueOf());
        const d = dateuts(compare);
        date = d.isValid() ? d : minDate.value;
      }
      return date.toArray();
    }
    const getOptionBoundary = (minOrMax, type) => {
      const isMin = minOrMax == "min";
      const boundary = new UTSJSONObject({
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
        if (type == FULL_MODES[i]) {
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
      return getOptions(min, max, type, props.formatter, props.filter);
    };
    const currentColumns = ref([]);
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
    const format = computed(() => {
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
      const normalized = new DateTimePickerExtend({
        year: null,
        month: null,
        day: null,
        hour: null,
        minute: null,
        second: null,
        timeStamp: null,
        value: null,
        ...value
      });
      const hasYear = mode.value.includes("year");
      const hasMonth = mode.value.includes("month");
      const hasDay = mode.value.includes("day");
      if (hasYear && hasMonth && hasDay) {
        const safeMonth = clamp(normalized.month, 1, 12);
        const monthStart = dateuts(`${normalized.year}-${safeMonth}-01 00:00:00`);
        const maxDay = monthStart.daysInMonth();
        normalized.month = safeMonth;
        normalized.day = clamp(normalized.day, 1, maxDay);
      }
      return normalized;
    };
    const getAllValue = () => {
      const date = currentDate.value.toObject();
      const result = new DateTimePickerExtend({
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
      const d = dateuts(newVal);
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
    const onChange = async () => {
      await nextTick();
      const values = getAllValue();
      emit("change", values.value, values);
    };
    const updateModelValue = (newVal) => {
      if (!isVisible.value || modelValue.value == newVal)
        return null;
      modelValue.value = newVal;
    };
    watch(currentValues, () => {
      const result = getAllValue();
      updateModelValue(result.value);
    }, {
      deep: true,
      immediate: true
    });
    watch([modelValue, mode, isVisible, () => {
      return props.minDate;
    }, () => {
      return props.maxDate;
    }], async () => {
      if (!isVisible.value)
        return Promise.resolve(null);
      currentDate.value = getParseDate();
      currentValues.value = initCurrentValues();
      updateColumns();
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
    return () => {
      "raw js";
      const _component_rice_picker = __easycom_1;
      const n0 = _createSharedDataComponentWithFallback(
        _component_rice_picker,
        "fd83b99e",
        {
          modelValue: () => {
            return _unref(currentValues);
          },
          "onUpdate:modelValue": () => {
            return (_value) => {
              return _isRef(currentValues) ? currentValues.value = _value : null;
            };
          },
          show: () => {
            return show.value;
          },
          "onUpdate:show": () => {
            return (_value) => {
              return show.value = _value;
            };
          },
          columns: () => {
            return _unref(currentColumns);
          },
          "use-popup": () => {
            return __props.usePopup;
          },
          loading: () => {
            return __props.loading;
          },
          "toolbar-position": () => {
            return __props.toolbarPosition;
          },
          "immediate-change": () => {
            return __props.immediateChange;
          },
          "close-on-click-confirm": () => {
            return __props.closeOnClickConfirm;
          },
          "close-on-click-cancel": () => {
            return __props.closeOnClickCancel;
          },
          "close-on-click-overlay": () => {
            return __props.closeOnClickOverlay;
          },
          title: () => {
            return __props.title;
          },
          "confirm-button-text": () => {
            return __props.confirmButtonText;
          },
          "cancel-button-text": () => {
            return __props.cancelButtonText;
          },
          "font-size": () => {
            return __props.fontSize;
          },
          "visible-option-num": () => {
            return __props.visibleOptionNum;
          },
          "option-height": () => {
            return __props.optionHeight;
          },
          "empty-text": () => {
            return __props.emptyText;
          },
          "z-index": () => {
            return __props.zIndex;
          },
          "safe-area-inset-bottom": () => {
            return __props.safeAreaInsetBottom;
          },
          onConfirm: () => {
            return onConfirm;
          },
          onCancel: () => {
            return onCancel;
          },
          onChange: () => {
            return onChange;
          },
          onOpen: () => {
            return onOpen;
          },
          onClose: () => {
            return onClose;
          },
          onOpened: () => {
            return onOpened;
          },
          onClosed: () => {
            return onClosed;
          }
        },
        null,
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n0?.sharedData);
      return __sharedData;
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=rice-datetime-picker.js.map
