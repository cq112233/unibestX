"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  const _easycom_up_datetime_picker_1 = common_vendor.resolveComponent("up-datetime-picker");
  (_easycom_NavBar_1 + _easycom_up_button_1 + _easycom_up_datetime_picker_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_button = () => "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
const _easycom_up_datetime_picker = () => "../../../../../uni_modules/uview-ultra/components/up-datetime-picker/up-datetime-picker.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_button + _easycom_up_datetime_picker + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "datetime-picker",
  setup(__props) {
    const dtShow1 = common_vendor.ref(false);
    const dtShow2 = common_vendor.ref(false);
    const dtShow3 = common_vendor.ref(false);
    const dtShow4 = common_vendor.ref(false);
    const dtShowMinMaxDate = common_vendor.ref(false);
    const dtShowMinMaxTime = common_vendor.ref(false);
    const dtShowStart = common_vendor.ref(false);
    const dtShowEnd = common_vendor.ref(false);
    const dtValue1 = common_vendor.ref(Date.parse("2026-08-10 08:30:00"));
    const dtValue2 = common_vendor.ref(Date.parse("2026-08-10 00:00:00"));
    const dtValue3 = common_vendor.ref(Date.parse("2026-08-10 00:00:00"));
    const dtValue4 = common_vendor.ref("08:30");
    const limitMinDate = Date.parse("2026-08-01 00:00:00");
    const limitMaxDate = Date.parse("2026-08-31 00:00:00");
    const dtValueMinMaxDate = common_vendor.ref(Date.parse("2026-08-10 00:00:00"));
    const dtValueMinMaxTime = common_vendor.ref("09:30");
    const dtValueStart = common_vendor.ref(Date.parse("2026-08-10 00:00:00"));
    const dtValueEnd = common_vendor.ref(Date.parse("2026-08-20 00:00:00"));
    function formatDate(timestamp) {
      const d = new Date(timestamp);
      const year = d.getFullYear();
      const month = (d.getMonth() + 1 < 10 ? "0" : "") + (d.getMonth() + 1);
      const date = (d.getDate() < 10 ? "0" : "") + d.getDate();
      const hours = (d.getHours() < 10 ? "0" : "") + d.getHours();
      const minutes = (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
      return `${year}-${month}-${date} ${hours}:${minutes}`;
    }
    function formatDateOnly(timestamp) {
      const d = new Date(timestamp);
      const year = d.getFullYear();
      const month = (d.getMonth() + 1 < 10 ? "0" : "") + (d.getMonth() + 1);
      const date = (d.getDate() < 10 ? "0" : "") + d.getDate();
      return `${year}-${month}-${date}`;
    }
    function formatYearMonth(timestamp) {
      const d = new Date(timestamp);
      const year = d.getFullYear();
      const month = (d.getMonth() + 1 < 10 ? "0" : "") + (d.getMonth() + 1);
      return `${year}-${month}`;
    }
    function onConfirm1(e) {
      const val = e["value"];
      if (val != null) {
        dtValue1.value = val;
      }
      dtShow1.value = false;
    }
    function onConfirm2(e) {
      const val = e["value"];
      if (val != null) {
        dtValue2.value = val;
      }
      dtShow2.value = false;
    }
    function onConfirm3(e) {
      const val = e["value"];
      if (val != null) {
        dtValue3.value = val;
      }
      dtShow3.value = false;
    }
    function onConfirm4(e) {
      const val = e["value"];
      if (val != null) {
        dtValue4.value = val.toString();
      }
      dtShow4.value = false;
    }
    function onConfirmMinMaxDate(e) {
      const val = e["value"];
      if (val != null) {
        dtValueMinMaxDate.value = val;
      }
      dtShowMinMaxDate.value = false;
    }
    function onConfirmMinMaxTime(e) {
      const val = e["value"];
      if (val != null) {
        dtValueMinMaxTime.value = val.toString();
      }
      dtShowMinMaxTime.value = false;
    }
    function onConfirmStart(e) {
      const val = e["value"];
      if (val != null) {
        dtValueStart.value = val;
      }
      dtShowStart.value = false;
    }
    function onConfirmEnd(e) {
      const val = e["value"];
      if (val != null) {
        dtValueEnd.value = val;
      }
      dtShowEnd.value = false;
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-datetime-picker 时间选择",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-0bd82cbc"
        }),
        b: common_vendor.o(($event) => {
          return dtShow1.value = true;
        }, "7b"),
        c: common_vendor.p({
          type: "primary",
          text: "年月日时分",
          size: "mini",
          class: "data-v-0bd82cbc"
        }),
        d: common_vendor.t(formatDate(dtValue1.value)),
        e: common_vendor.o(($event) => {
          return dtShow2.value = true;
        }, "79"),
        f: common_vendor.p({
          type: "success",
          text: "年月日",
          size: "mini",
          class: "data-v-0bd82cbc"
        }),
        g: common_vendor.t(formatDateOnly(dtValue2.value)),
        h: common_vendor.o(($event) => {
          return dtShow3.value = true;
        }, "89"),
        i: common_vendor.p({
          type: "warning",
          text: "年月",
          size: "mini",
          class: "data-v-0bd82cbc"
        }),
        j: common_vendor.t(formatYearMonth(dtValue3.value)),
        k: common_vendor.o(($event) => {
          return dtShow4.value = true;
        }, "5a"),
        l: common_vendor.p({
          type: "error",
          text: "时分",
          size: "mini",
          class: "data-v-0bd82cbc"
        }),
        m: common_vendor.t(dtValue4.value),
        n: common_vendor.o(($event) => {
          return dtShowMinMaxDate.value = true;
        }, "3c"),
        o: common_vendor.p({
          type: "primary",
          text: "选择当月日期",
          size: "mini",
          class: "data-v-0bd82cbc"
        }),
        p: common_vendor.t(formatDateOnly(dtValueMinMaxDate.value)),
        q: common_vendor.o(($event) => {
          return dtShowMinMaxTime.value = true;
        }, "50"),
        r: common_vendor.p({
          type: "warning",
          text: "选择时分范围",
          size: "mini",
          class: "data-v-0bd82cbc"
        }),
        s: common_vendor.t(dtValueMinMaxTime.value),
        t: common_vendor.o(($event) => {
          return dtShowStart.value = true;
        }, "1d"),
        v: common_vendor.p({
          type: "primary",
          text: "选择开始",
          size: "mini",
          class: "data-v-0bd82cbc"
        }),
        w: common_vendor.t(formatDateOnly(dtValueStart.value)),
        x: common_vendor.o(($event) => {
          return dtShowEnd.value = true;
        }, "fd"),
        y: common_vendor.p({
          type: "success",
          text: "选择结束",
          size: "mini",
          class: "data-v-0bd82cbc"
        }),
        z: common_vendor.t(formatDateOnly(dtValueEnd.value)),
        A: common_vendor.o(onConfirm1, "a2"),
        B: common_vendor.o(($event) => {
          return dtShow1.value = false;
        }, "29"),
        C: common_vendor.o(($event) => {
          return dtValue1.value = $event;
        }, "03"),
        D: common_vendor.p({
          show: dtShow1.value,
          mode: "datetime",
          modelValue: dtValue1.value,
          class: "data-v-0bd82cbc"
        }),
        E: common_vendor.o(onConfirm2, "f2"),
        F: common_vendor.o(($event) => {
          return dtShow2.value = false;
        }, "77"),
        G: common_vendor.o(($event) => {
          return dtValue2.value = $event;
        }, "fa"),
        H: common_vendor.p({
          show: dtShow2.value,
          mode: "date",
          modelValue: dtValue2.value,
          class: "data-v-0bd82cbc"
        }),
        I: common_vendor.o(onConfirm3, "e4"),
        J: common_vendor.o(($event) => {
          return dtShow3.value = false;
        }, "07"),
        K: common_vendor.o(($event) => {
          return dtValue3.value = $event;
        }, "ad"),
        L: common_vendor.p({
          show: dtShow3.value,
          mode: "year-month",
          modelValue: dtValue3.value,
          class: "data-v-0bd82cbc"
        }),
        M: common_vendor.o(onConfirm4, "85"),
        N: common_vendor.o(($event) => {
          return dtShow4.value = false;
        }, "0f"),
        O: common_vendor.o(($event) => {
          return dtValue4.value = $event;
        }, "3e"),
        P: common_vendor.p({
          show: dtShow4.value,
          mode: "time",
          modelValue: dtValue4.value,
          class: "data-v-0bd82cbc"
        }),
        Q: common_vendor.o(onConfirmMinMaxDate, "70"),
        R: common_vendor.o(($event) => {
          return dtShowMinMaxDate.value = false;
        }, "4a"),
        S: common_vendor.o(($event) => {
          return dtValueMinMaxDate.value = $event;
        }, "d4"),
        T: common_vendor.p({
          show: dtShowMinMaxDate.value,
          mode: "date",
          ["min-date"]: common_vendor.unref(limitMinDate),
          ["max-date"]: common_vendor.unref(limitMaxDate),
          modelValue: dtValueMinMaxDate.value,
          class: "data-v-0bd82cbc"
        }),
        U: common_vendor.o(onConfirmMinMaxTime, "3e"),
        V: common_vendor.o(($event) => {
          return dtShowMinMaxTime.value = false;
        }, "72"),
        W: common_vendor.o(($event) => {
          return dtValueMinMaxTime.value = $event;
        }, "86"),
        X: common_vendor.p({
          show: dtShowMinMaxTime.value,
          mode: "time",
          ["min-hour"]: 9,
          ["max-hour"]: 18,
          modelValue: dtValueMinMaxTime.value,
          class: "data-v-0bd82cbc"
        }),
        Y: common_vendor.o(onConfirmStart, "8f"),
        Z: common_vendor.o(($event) => {
          return dtShowStart.value = false;
        }, "e3"),
        aa: common_vendor.o(($event) => {
          return dtValueStart.value = $event;
        }, "35"),
        ab: common_vendor.p({
          show: dtShowStart.value,
          mode: "date",
          ["max-date"]: dtValueEnd.value,
          modelValue: dtValueStart.value,
          class: "data-v-0bd82cbc"
        }),
        ac: common_vendor.o(onConfirmEnd, "63"),
        ad: common_vendor.o(($event) => {
          return dtShowEnd.value = false;
        }, "23"),
        ae: common_vendor.o(($event) => {
          return dtValueEnd.value = $event;
        }, "f4"),
        af: common_vendor.p({
          show: dtShowEnd.value,
          mode: "date",
          ["min-date"]: dtValueStart.value,
          modelValue: dtValueEnd.value,
          class: "data-v-0bd82cbc"
        }),
        ag: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-datetime-picker 时间选择",
          class: "data-v-0bd82cbc"
        }),
        ah: common_vendor.gei(_ctx, ""),
        ai: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-0bd82cbc"
        }),
        aj: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0bd82cbc"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/datetime-picker/datetime-picker.js.map
