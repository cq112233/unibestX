import { _ as __easycom_2$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-button/up-button&";
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { _ as __easycom_2$2 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-popup/up-popup&";
import { u as uHeader } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-calendar/header&";
import { u as uMonth } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-calendar/month&";
import { U as UPCalendarMonthsItemDate, C as CalendarMonthItem } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-calendar/types&";
import { d as dayuts } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-dayuts/common/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-dayuts/common/use&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-dayuts/utssdk/interface&";
import { t, f as formatMonthTitle } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/i18n/index&";
import { f as range, p as padZero, a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { a as array } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/test&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref, computed, watch, onMounted, nextTick } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-calendar"
  },
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
    const __returned__ = { props, emit, inited, months, monthIndex, listHeight, selected, scrollIntoView, scrollTop, innerMaxDate, innerMinDate, todayDate, todayText, todayDisabled, elTitle, elConfirmText, elConfirmDisabledText, elStartText, elEndText, subtitle, currentMonths, switchPrevDisabled, switchNextDisabled, switchPrevYearDisabled, switchNextYearDisabled, buttonDisabled, getConfirmValue, monthSelectedM, getMonths, setMonth, getDefaultMonthIndex, init, close, confirm, prevMonth, nextMonth, prevYear, nextYear, jumpToToday, scrollIntoDefaultMonth, onScroll, onUpdateMonthTopM, updateMonthTopM, get uHeader() {
      return uHeader;
    }, get uMonth() {
      return uMonth;
    }, get addUnit() {
      return addUnit;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-calendar__confirm": { "": { "paddingTop": 12, "paddingRight": 18, "paddingBottom": 16, "paddingLeft": 18 } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { createVNode: _createVNode, normalizeStyle: _normalizeStyle, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, renderSlot: _renderSlot, resolveComponent: _resolveComponent, createElementVNode: _createElementVNode, withCtx: _withCtx, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_button = resolveEasycom(__resolveDynamicComponent("up-button"), __easycom_2$1);
  const _component_up_popup = resolveEasycom(__resolveDynamicComponent("up-popup"), __easycom_2$2);
  return _openBlock(), _createBlock(_component_up_popup, {
    show: $props.show,
    mode: "bottom",
    closeable: "",
    onClose: $setup.close,
    round: $props.round,
    closeOnClickOverlay: $props.closeOnClickOverlay,
    safeAreaInsetBottom: $props.safeAreaInsetBottom
  }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "up-calendar" }, [
        _createVNode($setup["uHeader"], {
          title: $setup.elTitle,
          subtitle: $setup.subtitle,
          showSubtitle: $props.showSubtitle,
          showTitle: $props.showTitle,
          showSwitch: $props.monthSwitch,
          showToday: $props.showToday,
          todayText: $setup.todayText,
          todayDisabled: $setup.todayDisabled,
          prevDisabled: $setup.switchPrevDisabled,
          nextDisabled: $setup.switchNextDisabled,
          prevYearDisabled: $setup.switchPrevYearDisabled,
          nextYearDisabled: $setup.switchNextYearDisabled,
          onPrev: $setup.prevMonth,
          onNext: $setup.nextMonth,
          onPrevYear: $setup.prevYear,
          onNextYear: $setup.nextYear,
          onToday: $setup.jumpToToday
        }, null, 8, ["title", "subtitle", "showSubtitle", "showTitle", "showSwitch", "showToday", "todayText", "todayDisabled", "prevDisabled", "nextDisabled", "prevYearDisabled", "nextYearDisabled"]),
        !$props.monthSwitch ? (_openBlock(), _createElementBlock("scroll-view", {
          key: 0,
          style: _normalizeStyle({ height: $setup.addUnit($setup.listHeight) }),
          direction: "vertical",
          onScroll: $setup.onScroll,
          "scroll-top": $setup.scrollTop,
          "scroll-into-view": $setup.scrollIntoView
        }, [
          _createVNode($setup["uMonth"], {
            color: $props.color,
            rowHeight: $props.rowHeight,
            showMark: $props.showMark,
            months: $setup.months,
            mode: $props.mode,
            maxCount: $props.maxCount,
            startText: $setup.elStartText,
            endText: $setup.elEndText,
            defaultDate: $props.defaultDate,
            minDate: $setup.innerMinDate,
            maxDate: $setup.innerMaxDate,
            maxMonth: $props.monthNum,
            readonly: $props.readonly,
            maxRange: $props.maxRange,
            rangePrompt: $props.rangePrompt,
            showRangePrompt: $props.showRangePrompt,
            allowSameDay: $props.allowSameDay,
            todayDate: $setup.todayDate,
            ref: "month",
            onMonthSelected: $setup.monthSelectedM,
            onUpdateMonthTop: $setup.onUpdateMonthTopM
          }, null, 8, ["color", "rowHeight", "showMark", "months", "mode", "maxCount", "startText", "endText", "defaultDate", "minDate", "maxDate", "maxMonth", "readonly", "maxRange", "rangePrompt", "showRangePrompt", "allowSameDay", "todayDate"])
        ], 44, ["scroll-top", "scroll-into-view"])) : (_openBlock(), _createElementBlock(
          "view",
          {
            key: 1,
            style: _normalizeStyle({ height: $setup.addUnit($setup.listHeight) })
          },
          [
            _createVNode($setup["uMonth"], {
              color: $props.color,
              rowHeight: $props.rowHeight,
              showMark: $props.showMark,
              months: $setup.currentMonths,
              mode: $props.mode,
              maxCount: $props.maxCount,
              startText: $setup.elStartText,
              endText: $setup.elEndText,
              defaultDate: $props.defaultDate,
              minDate: $setup.innerMinDate,
              maxDate: $setup.innerMaxDate,
              maxMonth: $props.monthNum,
              readonly: $props.readonly,
              maxRange: $props.maxRange,
              rangePrompt: $props.rangePrompt,
              showRangePrompt: $props.showRangePrompt,
              allowSameDay: $props.allowSameDay,
              todayDate: $setup.todayDate,
              ref: "month",
              onMonthSelected: $setup.monthSelectedM,
              onUpdateMonthTop: $setup.onUpdateMonthTopM
            }, null, 8, ["color", "rowHeight", "showMark", "months", "mode", "maxCount", "startText", "endText", "defaultDate", "minDate", "maxDate", "maxMonth", "readonly", "maxRange", "rangePrompt", "showRangePrompt", "allowSameDay", "todayDate"])
          ],
          4
          /* STYLE */
        )),
        $props.showConfirm ? _renderSlot(_ctx.$slots, "footer", { key: 2 }, () => [
          _createElementVNode("view", { class: "up-calendar__confirm" }, [
            _createVNode(_component_up_button, {
              shape: "circle",
              text: $setup.buttonDisabled ? $setup.elConfirmDisabledText : $setup.elConfirmText,
              color: $props.color == "#3c9cff" ? "" : $props.color,
              type: $props.color == "#3c9cff" ? "primary" : "",
              onClick: $setup.confirm,
              disabled: $setup.buttonDisabled,
              customStyle: "min-width:120px;"
            }, null, 8, ["text", "color", "type", "disabled"])
          ])
        ]) : _createCommentVNode("v-if", true)
      ])
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["show", "round", "closeOnClickOverlay", "safeAreaInsetBottom"]);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-calendar/up-calendar.uvue"]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-calendar.js.map
