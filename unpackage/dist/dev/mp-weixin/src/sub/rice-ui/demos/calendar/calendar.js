"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_calendar_1 = common_vendor.resolveComponent("rice-calendar");
  const _easycom_rice_button_1 = common_vendor.resolveComponent("rice-button");
  (_easycom_NavBar_1 + _easycom_rice_calendar_1 + _easycom_rice_button_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_calendar = () => "../../../../../uni_modules/rice-ui/components/rice-calendar/rice-calendar.js";
const _easycom_rice_button = () => "../../../../../uni_modules/rice-ui/components/rice-button/rice-button.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_calendar + _easycom_rice_button + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "calendar",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const selectedDate = common_vendor.ref("今天");
    const showPopupCalendar = common_vendor.ref(false);
    const popupSelectedDate = common_vendor.ref("");
    function onDateConfirm(val = null) {
      selectedDate.value = common_vendor.UTS.JSON.stringify(val);
    }
    function onPopupDateConfirm(val = null) {
      popupSelectedDate.value = common_vendor.UTS.JSON.stringify(val);
      showPopupCalendar.value = false;
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: common_vendor.p({
          title: "Calendar 日历",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-8db1e630"
        }),
        b: currentTheme.value,
        c: common_vendor.o(onDateConfirm, "23"),
        d: common_vendor.p({
          ["use-popup"]: false,
          ["show-title"]: true,
          color: currentTheme.value,
          title: "选择日期",
          class: "data-v-8db1e630"
        }),
        e: common_vendor.t(common_vendor.unref(selectedDate)),
        f: currentTheme.value,
        g: common_vendor.o(($event) => {
          return showPopupCalendar.value = true;
        }, "05"),
        h: common_vendor.p({
          type: "primary",
          color: currentTheme.value,
          text: "打开弹窗日历",
          class: "data-v-8db1e630"
        }),
        i: common_vendor.o(onPopupDateConfirm, "99"),
        j: common_vendor.o(($event) => {
          return common_vendor.isRef(showPopupCalendar) ? showPopupCalendar.value = $event : null;
        }, "7b"),
        k: common_vendor.p({
          ["use-popup"]: true,
          color: currentTheme.value,
          title: "弹窗选择日期",
          show: common_vendor.unref(showPopupCalendar),
          class: "data-v-8db1e630"
        }),
        l: common_vendor.unref(popupSelectedDate) != ""
      }, common_vendor.unref(popupSelectedDate) != "" ? {
        m: common_vendor.t(common_vendor.unref(popupSelectedDate))
      } : {}, {
        n: common_vendor.gei(_ctx, ""),
        o: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-8db1e630"
        }),
        p: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      });
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8db1e630"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/calendar/calendar.js.map
