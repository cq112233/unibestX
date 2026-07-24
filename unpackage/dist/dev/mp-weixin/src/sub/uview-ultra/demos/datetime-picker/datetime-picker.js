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
    function showDt1() {
      dtShow1.value = true;
    }
    function showDt2() {
      dtShow2.value = true;
    }
    function showDt3() {
      dtShow3.value = true;
    }
    function showDt4() {
      dtShow4.value = true;
    }
    function onConfirm1(e) {
      common_vendor.index.__f__("log", "at src/sub/uview-ultra/demos/datetime-picker/datetime-picker.uvue:63", "datetime", e);
      dtShow1.value = false;
    }
    function onConfirm2(e) {
      common_vendor.index.__f__("log", "at src/sub/uview-ultra/demos/datetime-picker/datetime-picker.uvue:67", "date", e);
      dtShow2.value = false;
    }
    function onConfirm3(e) {
      common_vendor.index.__f__("log", "at src/sub/uview-ultra/demos/datetime-picker/datetime-picker.uvue:71", "year-month", e);
      dtShow3.value = false;
    }
    function onConfirm4(e) {
      common_vendor.index.__f__("log", "at src/sub/uview-ultra/demos/datetime-picker/datetime-picker.uvue:75", "time", e);
      dtShow4.value = false;
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
        b: common_vendor.o(showDt1, "50"),
        c: common_vendor.p({
          type: "primary",
          text: "年月日时分",
          size: "mini",
          class: "data-v-0bd82cbc"
        }),
        d: common_vendor.o(showDt2, "e0"),
        e: common_vendor.p({
          type: "success",
          text: "年月日",
          size: "mini",
          class: "data-v-0bd82cbc"
        }),
        f: common_vendor.o(showDt3, "19"),
        g: common_vendor.p({
          type: "warning",
          text: "年月",
          size: "mini",
          class: "data-v-0bd82cbc"
        }),
        h: common_vendor.o(showDt4, "66"),
        i: common_vendor.p({
          type: "error",
          text: "时分",
          size: "mini",
          class: "data-v-0bd82cbc"
        }),
        j: common_vendor.o(onConfirm1, "11"),
        k: common_vendor.o(($event) => {
          return dtShow1.value = false;
        }, "a3"),
        l: common_vendor.p({
          show: dtShow1.value,
          mode: "datetime",
          class: "data-v-0bd82cbc"
        }),
        m: common_vendor.o(onConfirm2, "0b"),
        n: common_vendor.o(($event) => {
          return dtShow2.value = false;
        }, "3b"),
        o: common_vendor.p({
          show: dtShow2.value,
          mode: "date",
          class: "data-v-0bd82cbc"
        }),
        p: common_vendor.o(onConfirm3, "70"),
        q: common_vendor.o(($event) => {
          return dtShow3.value = false;
        }, "9c"),
        r: common_vendor.p({
          show: dtShow3.value,
          mode: "year-month",
          class: "data-v-0bd82cbc"
        }),
        s: common_vendor.o(onConfirm4, "02"),
        t: common_vendor.o(($event) => {
          return dtShow4.value = false;
        }, "0c"),
        v: common_vendor.p({
          show: dtShow4.value,
          mode: "time",
          class: "data-v-0bd82cbc"
        }),
        w: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-datetime-picker 时间选择",
          class: "data-v-0bd82cbc"
        }),
        x: common_vendor.gei(_ctx, ""),
        y: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-0bd82cbc"
        }),
        z: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0bd82cbc"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/datetime-picker/datetime-picker.js.map
