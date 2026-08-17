"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_rate_1 = common_vendor.resolveComponent("up-rate");
  (_easycom_NavBar_1 + _easycom_up_rate_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_rate = () => "../../../../../uni_modules/uview-ultra/components/up-rate/up-rate.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_rate + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "rate",
  setup(__props) {
    const rateValue1 = common_vendor.ref(3);
    const rateValue2 = common_vendor.ref(4);
    const rateValue3 = common_vendor.ref(3.5);
    const rateValue4 = common_vendor.ref(4);
    const rateValue5 = common_vendor.ref(2);
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-rate 评分",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-41df1ea4"
        }),
        b: common_vendor.o(($event) => {
          return rateValue1.value = $event;
        }, "f0"),
        c: common_vendor.p({
          count: 5,
          modelValue: rateValue1.value,
          class: "data-v-41df1ea4"
        }),
        d: common_vendor.o(($event) => {
          return rateValue2.value = $event;
        }, "25"),
        e: common_vendor.p({
          count: 5,
          ["active-icon"]: "heart-fill",
          ["inactive-icon"]: "heart",
          ["active-color"]: "#fa3534",
          modelValue: rateValue2.value,
          class: "data-v-41df1ea4"
        }),
        f: common_vendor.o(($event) => {
          return rateValue3.value = $event;
        }, "2c"),
        g: common_vendor.p({
          count: 5,
          ["allow-half"]: true,
          modelValue: rateValue3.value,
          class: "data-v-41df1ea4"
        }),
        h: common_vendor.o(($event) => {
          return rateValue4.value = $event;
        }, "ca"),
        i: common_vendor.p({
          count: 5,
          readonly: true,
          modelValue: rateValue4.value,
          class: "data-v-41df1ea4"
        }),
        j: common_vendor.o(($event) => {
          return rateValue5.value = $event;
        }, "60"),
        k: common_vendor.p({
          count: 5,
          disabled: true,
          modelValue: rateValue5.value,
          class: "data-v-41df1ea4"
        }),
        l: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-rate 评分",
          class: "data-v-41df1ea4"
        }),
        m: common_vendor.gei(_ctx, ""),
        n: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-41df1ea4"
        }),
        o: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-41df1ea4"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/rate/rate.js.map
