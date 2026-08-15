import { _ as __easycom_2$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-button/up-button&";
import { _ as __easycom_2$2 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-popup/up-popup&";
import { u as uHeader } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-calendar/header&";
import { u as uMonth } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-calendar/month&";
import { U as UPCalendarMonthsItemDate, C as CalendarMonthItem } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-calendar/types&";
import { d as dayuts } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-dayuts/common/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-dayuts/common/use&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-dayuts/utssdk/interface&";
import { t, f as formatMonthTitle } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/i18n/index&";
import { a as addUnit, f as range, p as padZero } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { a as array } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/test&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, createSharedDataComponent: _createSharedDataComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataStyle: _setSharedDataStyle, unref: _unref, setSharedDataAttr: _setSharedDataAttr, toSharedDataNumber: _toSharedDataNumber, toSharedDataString: _toSharedDataString, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataEvent: _setSharedDataEvent, createSharedDataIf: _createSharedDataIf, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataSlot: _createSharedDataSlot, withSharedDataVaporCtx: _withSharedDataVaporCtx } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpCalendarUpCalendar";
const { ref, computed, watch, onMounted, nextTick } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-calendar"
  },
  __dynamicSharedData: true,
  __hash: "73629cbc",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-calendar/up-calendar.uvue",
  __name: "up-calendar",
  props: {
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
  },
  emits: ["confirm", "close"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpCalendarUpCalendarSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const inited = ref(false);
    const months = ref([]);
    const monthIndex = ref(0);
    const listHeight = ref(0);
    const selected = ref([]);
    const scrollIntoView = ref("");
    const scrollTop = ref(0);
    const innerMaxDate = computed(() => {
      return props.maxDate.toString();
    });
    const innerMinDate = computed(() => {
      return props.minDate.toString();
    });
    const todayDate = computed(() => {
      return dayuts().format("YYYY-MM-DD");
    });
    const todayText = computed(() => {
      return t("up.calendar.today", new UTSJSONObject({}));
    });
    const todayDisabled = computed(() => {
      let today = dayuts(todayDate.value);
      let minD = innerMinDate.value;
      let maxD = innerMaxDate.value;
      if (minD != "" && minD != "0" && today.isBefore(dayuts(minD), "day")) {
        return true;
      }
      if (maxD != "" && maxD != "0" && today.isAfter(dayuts(maxD), "day")) {
        return true;
      }
      return false;
    });
    const elTitle = computed(() => {
      if (props.title != "" && props.title != "日期选择") {
        return props.title;
      }
      return t("up.calendar.chooseDates", new UTSJSONObject({}));
    });
    const elConfirmText = computed(() => {
      if (props.confirmText != "" && props.confirmText != "确定") {
        return props.confirmText;
      }
      return t("up.common.confirm", new UTSJSONObject({}));
    });
    const elConfirmDisabledText = computed(() => {
      if (props.confirmDisabledText != "" && props.confirmDisabledText != "确定") {
        return props.confirmDisabledText;
      }
      return t("up.common.confirm", new UTSJSONObject({}));
    });
    const elStartText = computed(() => {
      if (props.startText != "" && props.startText != "开始") {
        return props.startText;
      }
      return t("up.common.start", new UTSJSONObject({}));
    });
    const elEndText = computed(() => {
      if (props.endText != "" && props.endText != "结束") {
        return props.endText;
      }
      return t("up.common.end", new UTSJSONObject({}));
    });
    const subtitle = computed(() => {
      if (months.value.length > 0) {
        const item = months.value[monthIndex.value];
        return formatMonthTitle(item.year, item.month);
      }
      return "";
    });
    const currentMonths = computed(() => {
      if (props.monthSwitch && months.value.length > 0) {
        return [months.value[monthIndex.value]];
      }
      return months.value;
    });
    const switchPrevDisabled = computed(() => {
      return monthIndex.value <= 0;
    });
    const switchNextDisabled = computed(() => {
      return monthIndex.value >= months.value.length - 1;
    });
    const switchPrevYearDisabled = computed(() => {
      return monthIndex.value - 12 < 0;
    });
    const switchNextYearDisabled = computed(() => {
      return monthIndex.value + 12 > months.value.length - 1;
    });
    const buttonDisabled = computed(() => {
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
      const minYear = dayuts(minD).year();
      const minMonth = dayuts(minD).month() + 1;
      const maxYear = dayuts(maxD).year();
      const maxMonth = dayuts(maxD).month() + 1;
      return (maxYear - minYear) * 12 + (maxMonth - minMonth) + 1;
    }
    function setMonth() {
      const minD = innerMinDate.value != "" && innerMinDate.value != "0" ? innerMinDate.value : dayuts().valueOf();
      const maxD = innerMaxDate.value != "" && innerMaxDate.value != "0" ? innerMaxDate.value : dayuts(minD).add(parseInt(props.monthNum.toString()) - 1, "month").valueOf();
      const monthCount = range(1, parseInt(props.monthNum.toString()), getMonths(minD, maxD));
      let newMonths = [];
      const minDateStr = dayuts(minD).format("YYYY-MM-DD");
      const maxDateStr = dayuts(maxD).format("YYYY-MM-DD");
      for (let i = 0; i < monthCount; i++) {
        const monthBase = dayuts(minD).add(i, "month");
        const daysInMonth = monthBase.daysInMonth();
        const monthValue = monthBase.month() + 1;
        const yearValue = monthBase.year();
        let cdate = [];
        for (let day = 1; day <= daysInMonth; day++) {
          const dayBase = monthBase.date(day);
          const date = dayBase.format("YYYY-MM-DD");
          const week = dayBase.day();
          let config = new UPCalendarMonthsItemDate({
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
        let md = new CalendarMonthItem({
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
    function getDefaultMonthIndex() {
      let sel = dayuts().format("YYYY-MM");
      if (props.defaultDate != null) {
        if (!array(props.defaultDate)) {
          sel = dayuts(props.defaultDate).format("YYYY-MM");
        } else if (props.defaultDate.length > 0) {
          sel = dayuts(props.defaultDate[0]).format("YYYY-MM");
        }
      }
      const idx = months.value.findIndex((_a2) => {
        var year = _a2.year, month = _a2.month;
        month = padZero(month);
        return `${year}-${month}` === sel;
      });
      return idx == -1 ? 0 : idx;
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
    function jumpToToday() {
      if (todayDisabled.value)
        return null;
      const targetMonth = dayuts(todayDate.value).format("YYYY-MM");
      if (props.monthSwitch) {
        const todayMonthIdx = months.value.findIndex((_a2) => {
          var year = _a2.year, month = _a2.month;
          month = padZero(month);
          return `${year}-${month}` == targetMonth;
        });
        if (todayMonthIdx != -1) {
          monthIndex.value = todayMonthIdx;
        }
        return null;
      }
      scrollIntoDefaultMonth(targetMonth);
    }
    function scrollIntoDefaultMonth(selMonth) {
      const _index = months.value.findIndex((_a2) => {
        var year = _a2.year, month = _a2.month;
        month = padZero(month);
        return `${year}-${month}` === selMonth;
      });
      if (_index != -1) {
        nextTick(() => {
          scrollIntoView.value = "";
          scrollIntoView.value = `month-${_index}`;
        });
      }
    }
    function onScroll(event) {
      const curScrollTop = Math.max(0, event.detail.scrollTop);
      for (let i = 0; i < months.value.length; i++) {
        if (curScrollTop >= (months.value[i].top > 0 ? months.value[i].top : listHeight.value)) {
          monthIndex.value = i;
        }
      }
    }
    function onUpdateMonthTopM(topArr) {
      if (props.monthSwitch)
        return null;
      updateMonthTopM(topArr);
    }
    function updateMonthTopM(topArr) {
      topArr.map((item, index) => {
        if (index < months.value.length) {
          months.value[index].top = item;
        }
      });
      if (props.defaultDate == null) {
        const sel_1 = dayuts().format("YYYY-MM");
        scrollIntoDefaultMonth(sel_1);
        return null;
      }
      let sel = dayuts().format("YYYY-MM");
      if (!array(props.defaultDate)) {
        sel = dayuts(props.defaultDate).format("YYYY-MM");
      } else {
        sel = dayuts(props.defaultDate[0]).format("YYYY-MM");
      }
      scrollIntoDefaultMonth(sel);
    }
    watch(() => {
      return props.show;
    }, (nval) => {
      if (nval) {
        init();
      } else {
        scrollIntoView.value = "";
      }
    }, { immediate: true });
    watch(() => {
      return [props.defaultDate, innerMinDate.value, innerMaxDate.value];
    }, () => {
      if (inited.value)
        setMonth();
    });
    onMounted(() => {
      init();
    });
    __expose({
      init,
      setMonth,
      confirm,
      close
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_up_button = __easycom_2$1;
      const _component_up_popup = __easycom_2$2;
      const n15 = _createSharedDataComponentWithFallback(
        _component_up_popup,
        "24939e03",
        {
          show: () => {
            return __props.show;
          },
          mode: "bottom",
          closeable: "",
          onClose: () => {
            return close;
          },
          round: () => {
            return __props.round;
          },
          closeOnClickOverlay: () => {
            return __props.closeOnClickOverlay;
          },
          safeAreaInsetBottom: () => {
            return __props.safeAreaInsetBottom;
          }
        },
        {
          "default": _withSharedDataVaporCtx(() => {
            const n0 = _createSharedDataComponent(uHeader, "4e242f66", {
              title: () => {
                return elTitle.value;
              },
              subtitle: () => {
                return subtitle.value;
              },
              showSubtitle: () => {
                return __props.showSubtitle;
              },
              showTitle: () => {
                return __props.showTitle;
              },
              showSwitch: () => {
                return __props.monthSwitch;
              },
              showToday: () => {
                return __props.showToday;
              },
              todayText: () => {
                return todayText.value;
              },
              todayDisabled: () => {
                return todayDisabled.value;
              },
              prevDisabled: () => {
                return switchPrevDisabled.value;
              },
              nextDisabled: () => {
                return switchNextDisabled.value;
              },
              prevYearDisabled: () => {
                return switchPrevYearDisabled.value;
              },
              nextYearDisabled: () => {
                return switchNextYearDisabled.value;
              },
              onPrev: () => {
                return prevMonth;
              },
              onNext: () => {
                return nextMonth;
              },
              onPrevYear: () => {
                return prevYear;
              },
              onNextYear: () => {
                return nextYear;
              },
              onToday: () => {
                return jumpToToday;
              }
            });
            _setSharedData(__sharedData, 1, n0.sharedData);
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 2, _toSharedDataBoolean(!__props.monthSwitch));
            }, () => {
              _renderSharedDataEffect(() => {
                _setSharedDataStyle(__sharedData, 5, { height: _unref(addUnit)(listHeight.value) });
                _setSharedDataAttr(__sharedData, 6, _toSharedDataNumber(scrollTop.value));
                _setSharedDataAttr(__sharedData, 7, _toSharedDataString(scrollIntoView.value));
              });
              const n3 = _createSharedDataComponent(uMonth, "4e244a45", {
                color: () => {
                  return __props.color;
                },
                rowHeight: () => {
                  return __props.rowHeight;
                },
                showMark: () => {
                  return __props.showMark;
                },
                months: () => {
                  return months.value;
                },
                mode: () => {
                  return __props.mode;
                },
                maxCount: () => {
                  return __props.maxCount;
                },
                startText: () => {
                  return elStartText.value;
                },
                endText: () => {
                  return elEndText.value;
                },
                defaultDate: () => {
                  return __props.defaultDate;
                },
                minDate: () => {
                  return innerMinDate.value;
                },
                maxDate: () => {
                  return innerMaxDate.value;
                },
                maxMonth: () => {
                  return __props.monthNum;
                },
                readonly: () => {
                  return __props.readonly;
                },
                maxRange: () => {
                  return __props.maxRange;
                },
                rangePrompt: () => {
                  return __props.rangePrompt;
                },
                showRangePrompt: () => {
                  return __props.showRangePrompt;
                },
                allowSameDay: () => {
                  return __props.allowSameDay;
                },
                todayDate: () => {
                  return todayDate.value;
                },
                onMonthSelected: () => {
                  return monthSelectedM;
                },
                onUpdateMonthTop: () => {
                  return onUpdateMonthTopM;
                }
              });
              _setSharedData(__sharedData, 3, n3.sharedData);
              _setTemplateRef(n3, "month");
              _setSharedDataEvent(__sharedData, 4, onScroll);
            }, () => {
              _renderSharedDataEffect(() => {
                return _setSharedDataStyle(__sharedData, 9, { height: _unref(addUnit)(listHeight.value) });
              });
              const n6 = _createSharedDataComponent(uMonth, "76615c35", {
                color: () => {
                  return __props.color;
                },
                rowHeight: () => {
                  return __props.rowHeight;
                },
                showMark: () => {
                  return __props.showMark;
                },
                months: () => {
                  return currentMonths.value;
                },
                mode: () => {
                  return __props.mode;
                },
                maxCount: () => {
                  return __props.maxCount;
                },
                startText: () => {
                  return elStartText.value;
                },
                endText: () => {
                  return elEndText.value;
                },
                defaultDate: () => {
                  return __props.defaultDate;
                },
                minDate: () => {
                  return innerMinDate.value;
                },
                maxDate: () => {
                  return innerMaxDate.value;
                },
                maxMonth: () => {
                  return __props.monthNum;
                },
                readonly: () => {
                  return __props.readonly;
                },
                maxRange: () => {
                  return __props.maxRange;
                },
                rangePrompt: () => {
                  return __props.rangePrompt;
                },
                showRangePrompt: () => {
                  return __props.showRangePrompt;
                },
                allowSameDay: () => {
                  return __props.allowSameDay;
                },
                todayDate: () => {
                  return todayDate.value;
                },
                onMonthSelected: () => {
                  return monthSelectedM;
                },
                onUpdateMonthTop: () => {
                  return onUpdateMonthTopM;
                }
              });
              _setSharedData(__sharedData, 8, n6.sharedData);
              _setTemplateRef(n6, "month");
            }, 261);
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 10, _toSharedDataBoolean(__props.showConfirm));
            }, () => {
              _createSharedDataSlot("footer", null, null, () => {
                const n12 = _createSharedDataComponentWithFallback(_component_up_button, "7661c591", {
                  shape: "circle",
                  text: () => {
                    return buttonDisabled.value ? elConfirmDisabledText.value : elConfirmText.value;
                  },
                  color: () => {
                    return __props.color == "#3c9cff" ? "" : __props.color;
                  },
                  type: () => {
                    return __props.color == "#3c9cff" ? "primary" : "";
                  },
                  onClick: () => {
                    return confirm;
                  },
                  disabled: () => {
                    return buttonDisabled.value;
                  },
                  customStyle: "min-width:120px;"
                });
                _setSharedData(__sharedData, 11, n12?.sharedData);
              });
            });
          })
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n15?.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-calendar.js.map
