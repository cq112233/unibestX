"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  const _easycom_up_calendar_1 = common_vendor.resolveComponent("up-calendar");
  (_easycom_NavBar_1 + _easycom_up_button_1 + _easycom_up_calendar_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_button = () => "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
const _easycom_up_calendar = () => "../../../../../uni_modules/uview-ultra/components/up-calendar/up-calendar.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_button + _easycom_up_calendar + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "calendar",
  setup(__props) {
    const calendarShow1 = common_vendor.ref(false);
    const calendarShow2 = common_vendor.ref(false);
    const calendarShow3 = common_vendor.ref(false);
    const calendarShow4 = common_vendor.ref(false);
    function showCalendar1() {
      calendarShow1.value = true;
    }
    function showCalendar2() {
      calendarShow2.value = true;
    }
    function showCalendar3() {
      calendarShow3.value = true;
    }
    function showCalendar4() {
      calendarShow4.value = true;
    }
    function onConfirm1(e) {
      common_vendor.index.__f__("log", "at src/sub/uview-ultra/demos/calendar/calendar.uvue:62", "single", e);
      calendarShow1.value = false;
    }
    function onConfirm2(e) {
      common_vendor.index.__f__("log", "at src/sub/uview-ultra/demos/calendar/calendar.uvue:66", "multiple", e);
      calendarShow2.value = false;
    }
    function onConfirm3(e) {
      common_vendor.index.__f__("log", "at src/sub/uview-ultra/demos/calendar/calendar.uvue:70", "range", e);
      calendarShow3.value = false;
    }
    function onConfirm4(e) {
      common_vendor.index.__f__("log", "at src/sub/uview-ultra/demos/calendar/calendar.uvue:74", "custom color", e);
      calendarShow4.value = false;
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-calendar 日历",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-d19eab76"
        }),
        b: common_vendor.o(showCalendar1, "23"),
        c: common_vendor.p({
          type: "primary",
          text: "单选模式",
          size: "mini",
          class: "data-v-d19eab76"
        }),
        d: common_vendor.o(showCalendar2, "60"),
        e: common_vendor.p({
          type: "success",
          text: "多选日期",
          size: "mini",
          class: "data-v-d19eab76"
        }),
        f: common_vendor.o(showCalendar3, "27"),
        g: common_vendor.p({
          type: "warning",
          text: "范围选择",
          size: "mini",
          class: "data-v-d19eab76"
        }),
        h: common_vendor.o(showCalendar4, "5c"),
        i: common_vendor.p({
          type: "error",
          text: "自定义颜色",
          size: "mini",
          class: "data-v-d19eab76"
        }),
        j: common_vendor.o(onConfirm1, "09"),
        k: common_vendor.o(($event) => {
          return calendarShow1.value = false;
        }, "c5"),
        l: common_vendor.p({
          show: calendarShow1.value,
          mode: "single",
          class: "data-v-d19eab76"
        }),
        m: common_vendor.o(onConfirm2, "2d"),
        n: common_vendor.o(($event) => {
          return calendarShow2.value = false;
        }, "23"),
        o: common_vendor.p({
          show: calendarShow2.value,
          mode: "multiple",
          class: "data-v-d19eab76"
        }),
        p: common_vendor.o(onConfirm3, "ed"),
        q: common_vendor.o(($event) => {
          return calendarShow3.value = false;
        }, "33"),
        r: common_vendor.p({
          show: calendarShow3.value,
          mode: "range",
          class: "data-v-d19eab76"
        }),
        s: common_vendor.o(onConfirm4, "5e"),
        t: common_vendor.o(($event) => {
          return calendarShow4.value = false;
        }, "98"),
        v: common_vendor.p({
          show: calendarShow4.value,
          mode: "single",
          color: "#fa3534",
          class: "data-v-d19eab76"
        }),
        w: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-calendar 日历",
          class: "data-v-d19eab76"
        }),
        x: common_vendor.gei(_ctx, ""),
        y: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-d19eab76"
        }),
        z: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d19eab76"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/calendar/calendar.js.map
