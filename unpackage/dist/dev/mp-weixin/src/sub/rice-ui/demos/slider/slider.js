"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_slider_1 = common_vendor.resolveComponent("rice-slider");
  (_easycom_NavBar_1 + _easycom_rice_slider_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_slider = () => "../../../../../uni_modules/rice-ui/components/rice-slider/rice-slider.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_slider + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "slider",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const val1 = common_vendor.ref(50);
    const val2 = common_vendor.ref(20);
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Slider 滑块",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-5d43ce1b"
        }),
        b: currentTheme.value,
        c: common_vendor.o(($event) => {
          return common_vendor.isRef(val1) ? val1.value = $event : null;
        }, "9d"),
        d: common_vendor.p({
          ["active-color"]: currentTheme.value,
          modelValue: common_vendor.unref(val1),
          class: "data-v-5d43ce1b"
        }),
        e: common_vendor.t(common_vendor.unref(val1)),
        f: currentTheme.value,
        g: common_vendor.o(($event) => {
          return common_vendor.isRef(val2) ? val2.value = $event : null;
        }, "71"),
        h: common_vendor.p({
          step: 10,
          ["active-color"]: currentTheme.value,
          modelValue: common_vendor.unref(val2),
          class: "data-v-5d43ce1b"
        }),
        i: common_vendor.t(common_vendor.unref(val2)),
        j: common_vendor.gei(_ctx, ""),
        k: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-5d43ce1b"
        }),
        l: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5d43ce1b"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/slider/slider.js.map
