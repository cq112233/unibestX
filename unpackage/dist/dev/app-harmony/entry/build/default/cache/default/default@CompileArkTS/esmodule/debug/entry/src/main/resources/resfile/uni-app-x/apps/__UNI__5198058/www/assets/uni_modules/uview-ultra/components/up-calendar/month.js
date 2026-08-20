import { a as addUnit, u as upGetRect, e as getWindowInfo } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { f as formatMonthTitle } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/i18n/index&";
import { c as colorGradient } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/colorGradient&";
import { a as array } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/test&";
import { d as dayuts } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-dayuts/common/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-dayuts/common/use&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-dayuts/utssdk/interface&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-calendar/types&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, setSharedData: _setSharedData, toDisplayString: _toDisplayString, setSharedDataClass: _setSharedDataClass, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, renderSharedDataEffect: _renderSharedDataEffect, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataIf: _createSharedDataIf, setSharedDataStyle: _setSharedDataStyle, setSharedDataEvent: _setSharedDataEvent, createSharedDataFor: _createSharedDataFor, setSharedDataTemplateRef: _setSharedDataTemplateRef } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpCalendarMonth";
const { ref, watch, onMounted, getCurrentInstance, nextTick } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-calendar-month"
  },
  __dynamicSharedData: true,
  __hash: "65c54e47",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-calendar/month.uvue",
  __name: "month",
  props: {
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
  },
  emits: ["monthSelected", "updateMonthTop"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpCalendarMonthSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const instance = getCurrentInstance();
    const width = ref(0);
    const monthsInner = ref([]);
    const selected = ref([]);
    function getMonthTitle(item) {
      return formatMonthTitle(item.year, item.month);
    }
    function dateSame(date1, date2) {
      return dayuts(date1).isSame(dayuts(date2));
    }
    function isRangeMiddle(item) {
      if (props.mode != "range" || selected.value.length < 2)
        return false;
      const date = item["dateStr"] != null ? item["dateStr"] : dayuts(item["date"]).format("YYYY-MM-DD");
      const len = selected.value.length - 1;
      return dayuts(date).isAfter(dayuts(selected.value[0])) && dayuts(date).isBefore(dayuts(selected.value[len]));
    }
    function rangeBgStyle(item) {
      const style = new UTSJSONObject({});
      if (props.color != "#3c9cff") {
        style["backgroundColor"] = colorGradient(props.color, "#ffffff", 100)[90];
        style["opacity"] = 0.7;
      }
      return style;
    }
    function isSelected(item) {
      const date = item["dateStr"] != null ? item["dateStr"] : dayuts(item["date"]).format("YYYY-MM-DD");
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
      const date = item["dateStr"] != null ? item["dateStr"] : dayuts(item["date"]).format("YYYY-MM-DD");
      const sameDate = (element) => {
        return dateSame(element, date);
      };
      return props.todayDate != "" && dateSame(date, props.todayDate) && !selected.value.some(sameDate);
    }
    function dayStyle(index1, index2, item) {
      const style = new UTSJSONObject({});
      if (item != null) {
        let week = item.week;
        style["height"] = addUnit(props.rowHeight);
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
      let date = item["dateStr"] != null ? item["dateStr"] : dayuts(item["date"]).format("YYYY-MM-DD");
      let style = new UTSJSONObject({});
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
      const date = item["dateStr"] != null ? item["dateStr"] : dayuts(item["date"]).format("YYYY-MM-DD");
      let style = new UTSJSONObject({});
      const sameDate = (element) => {
        return dateSame(element, date);
      };
      if (selected.value.some(sameDate)) {
        style["color"] = "#ffffff";
      }
      if (props.mode === "range") {
        const len = selected.value.length - 1;
        if (dayuts(date).isAfter(dayuts(selected.value[0])) && dayuts(date).isBefore(dayuts(selected.value[len]))) {
          if (props.color != "#3c9cff") {
            style["color"] = props.color;
          }
        }
      }
      return style;
    }
    function getBottomInfo(index1, index2, item) {
      const date = item["dateStr"] != null ? item["dateStr"] : dayuts(item["date"]).format("YYYY-MM-DD");
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
    function setSelected(sel, shouldEmit = true) {
      selected.value = sel;
      if (shouldEmit) {
        emit("monthSelected", selected.value, "tap");
      }
    }
    function clickHandler(index1, index21, item) {
      var _a2;
      if (props.readonly)
        return null;
      const date = item["dateStr"] != null ? item["dateStr"] : dayuts(item["date"]).format("YYYY-MM-DD");
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
          if (dayuts(date).isBefore(existsDate)) {
            curSelected = [date];
          } else if (dayuts(date).isAfter(existsDate)) {
            curSelected.push(date);
            const startDate = curSelected[0];
            const endDate = curSelected[1];
            const arr = [];
            let i = 0;
            do {
              arr.push(dayuts(startDate).add(i, "day").format("YYYY-MM-DD"));
              i++;
            } while (dayuts(startDate).add(i, "day").isBefore(dayuts(endDate)));
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
        const sel = [dayuts().format("YYYY-MM-DD")];
        setSelected(sel, false);
        return null;
      }
      let defDate = [];
      let minDateData = props.minDate.toString();
      let maxDateData = props.maxDate.toString();
      const minDate = minDateData != "" ? minDateData : dayuts().format("YYYY-MM-DD");
      const maxDate = maxDateData != "" ? maxDateData : dayuts(minDate).add(parseInt(props.maxMonth.toString()) - 1, "month").format("YYYY-MM-DD");
      if (props.mode === "single") {
        if (!array(props.defaultDate)) {
          defDate = [dayuts(props.defaultDate).format("YYYY-MM-DD")];
        } else {
          let tmp = dayuts(props.defaultDate[0]).format("YYYY-MM-DD");
          defDate = [tmp];
        }
      } else {
        if (!array(props.defaultDate))
          return null;
        defDate = props.defaultDate;
      }
      defDate = defDate.filter((it) => {
        return dayuts(it).isAfter(dayuts(minDate).subtract(1, "day")) && dayuts(it).isBefore(dayuts(maxDate).add(1, "day"));
      });
      setSelected(defDate, false);
    }
    function getWrapperWidth() {
      upGetRect(".up-calendar-month-wrapper", false, instance === null || instance === void 0 ? null : instance.proxy).then((res) => {
        var _a2;
        let size = res;
        let w = (_a2 = size.width) !== null && _a2 !== void 0 ? _a2 : 0;
        if (w <= 0) {
          w = getWindowInfo().windowWidth;
        }
        width.value = w;
      });
    }
    function getMonthRect() {
      const promiseAllArr = props.months.map((item, index) => {
        return upGetRect(`.up-calendar-month-${index}`, false, instance === null || instance === void 0 ? null : instance.proxy);
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
      nextTick(() => {
        getWrapperWidth();
        getMonthRect();
      });
    }
    watch(() => {
      return [props.minDate, props.maxDate, props.defaultDate];
    }, () => {
      setDefaultDate();
    }, { immediate: true });
    watch(() => {
      return props.months;
    }, (n) => {
      monthsInner.value = n;
    }, { immediate: true });
    onMounted(() => {
      init();
    });
    __expose({
      init,
      setDefaultDate,
      setSelected
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      _createSharedDataFor(_setSharedDataScoped(__sharedData, 0, _createSharedDataVFor(__sharedDataScope, () => {
        return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
      })), () => {
        return monthsInner.value;
      }, (__sharedData_VFor0, _for_item0, _for_key0) => {
        _renderSharedDataEffect(() => {
          const _index = _for_key0.value;
          _setSharedDataClass(__sharedData_VFor0, 6, [`up-calendar-month-` + _index.toString()]);
          _setSharedDataAttr(__sharedData_VFor0, 7, _toSharedDataString(`month-` + _index.toString()));
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData_VFor0, 1, _toSharedDataBoolean(_for_key0.value != 0));
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedData(__sharedData_VFor0, 2, _toDisplayString(getMonthTitle(_for_item0.value)));
          });
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData_VFor0, 3, _toSharedDataBoolean(__props.showMark));
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedData(__sharedData_VFor0, 4, _toDisplayString(_for_item0.value["month"]));
          });
        });
        _createSharedDataFor(_setSharedDataScoped(__sharedData_VFor0, 5, _createSharedDataVFor(__sharedDataScope, () => {
          return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 2 });
        })), () => {
          return _for_item0.value.date;
        }, (__sharedData_VFor1, _for_item1, _for_key1) => {
          _renderSharedDataEffect(() => {
            const _index = _for_key0.value;
            const _index1 = _for_key1.value;
            const _item1 = _for_item1.value;
            _setSharedDataStyle(__sharedData_VFor1, 9, dayStyle(_index, _index1, _item1));
            _setSharedDataClass(__sharedData_VFor1, 10, ["up-calendar-month__days__day__select", {
              "up-calendar-month__days__day__select--selected": isSelected(_item1),
              "up-calendar-month__days__day__select--today": isToday(_item1)
            }]);
            _setSharedDataStyle(__sharedData_VFor1, 11, daySelectStyle(_index, _index1, _item1));
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData_VFor1, 1, _toSharedDataBoolean(isRangeMiddle(_for_item1.value)));
          }, () => {
            _renderSharedDataEffect(() => {
              return _setSharedDataStyle(__sharedData_VFor1, 2, rangeBgStyle(_for_item1.value));
            });
          });
          _renderSharedDataEffect(() => {
            const _item1 = _for_item1.value;
            _setSharedDataClass(__sharedData_VFor1, 12, ["up-calendar-month__days__day__select__info", {
              "up-calendar-month__days__day__select__info--disabled": _item1.disabled,
              "up-calendar-month__days__day__select__info--range-middle": isRangeMiddle(_item1)
            }]);
            _setSharedDataStyle(__sharedData_VFor1, 13, textStyle(_item1));
            _setSharedData(__sharedData_VFor1, 14, _toDisplayString(_item1["day"]));
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData_VFor1, 3, _toSharedDataBoolean(getBottomInfo(_for_key0.value, _for_key1.value, _for_item1.value) != ""));
          }, () => {
            _renderSharedDataEffect(() => {
              const _item1 = _for_item1.value;
              _setSharedDataClass(__sharedData_VFor1, 4, ["up-calendar-month__days__day__select__buttom-info", { "up-calendar-month__days__day__select__buttom-info--disabled": _item1["disabled"] }]);
              _setSharedDataStyle(__sharedData_VFor1, 5, textStyle(_item1));
              _setSharedData(__sharedData_VFor1, 6, _toDisplayString(getBottomInfo(_for_key0.value, _for_key1.value, _item1)));
            });
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData_VFor1, 7, _toSharedDataBoolean(_for_item1.value["dot"]));
          }, () => {
          });
          _setSharedDataEvent(__sharedData_VFor1, 8, () => {
            return clickHandler(_for_key0.value, _for_key1.value, _for_item1.value);
          });
          return null;
        }, (__sharedData_VFor1, item1, index1) => {
          return _setSharedData(__sharedData_VFor1, 0, _toDisplayString(index1));
        });
        _renderSharedDataEffect(() => {
          return _setSharedDataTemplateRef(__sharedData_VFor0, 8, (n25) => {
            _setTemplateRef(n25, `up-calendar-month-` + _for_key0.value.toString(), true);
          });
        });
        return null;
      }, (__sharedData_VFor0, item, index) => {
        return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
      }, 1);
      _setSharedDataTemplateRef(__sharedData, 1, (n26) => {
        _setTemplateRef(n26, "up-calendar-month-wrapper");
      });
      return __sharedData;
    };
  }
});
const _style_0 = {"border":{"":{"borderStyle":"var(--tw-border-style)","borderWidth":1}}};
const uMonth = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  uMonth as u
};
//# sourceMappingURL=month.js.map
