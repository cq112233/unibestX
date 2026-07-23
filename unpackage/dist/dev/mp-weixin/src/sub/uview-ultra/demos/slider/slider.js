"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_slider_1 = common_vendor.resolveComponent("up-slider");
  (_easycom_NavBar_1 + _easycom_up_slider_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_slider = () => "../../../../../uni_modules/uview-ultra/components/up-slider/up-slider.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_slider + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "slider",
  setup(__props) {
    const sliderValue1 = common_vendor.ref(30);
    const sliderValue2 = common_vendor.ref(50);
    const sliderValue3 = common_vendor.ref(40);
    const sliderValue4 = common_vendor.ref(60);
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-slider 滑块",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-9e664d5e"
        }),
        b: common_vendor.o(($event) => {
          return sliderValue1.value = $event;
        }, "f9"),
        c: common_vendor.p({
          min: 0,
          max: 100,
          modelValue: sliderValue1.value,
          class: "data-v-9e664d5e"
        }),
        d: common_vendor.o(($event) => {
          return sliderValue2.value = $event;
        }, "5d"),
        e: common_vendor.p({
          step: 10,
          modelValue: sliderValue2.value,
          class: "data-v-9e664d5e"
        }),
        f: common_vendor.o(($event) => {
          return sliderValue3.value = $event;
        }, "6b"),
        g: common_vendor.p({
          ["active-color"]: "#fa3534",
          ["inactive-color"]: "#f56c6c",
          modelValue: sliderValue3.value,
          class: "data-v-9e664d5e"
        }),
        h: common_vendor.o(($event) => {
          return sliderValue4.value = $event;
        }, "7b"),
        i: common_vendor.p({
          disabled: true,
          modelValue: sliderValue4.value,
          class: "data-v-9e664d5e"
        }),
        j: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-slider 滑块",
          class: "data-v-9e664d5e"
        }),
        k: common_vendor.gei(_ctx, ""),
        l: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-9e664d5e"
        }),
        m: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9e664d5e"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/slider/slider.js.map
