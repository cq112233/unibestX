"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_subsection_1 = common_vendor.resolveComponent("rice-subsection");
  (_easycom_NavBar_1 + _easycom_rice_subsection_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_subsection = () => "../../../../../uni_modules/rice-ui/components/rice-subsection/rice-subsection.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_subsection + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "subsection",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const currentIndex1 = common_vendor.ref(0);
    const currentIndex2 = common_vendor.ref(1);
    const list1 = ["全部", "待付款", "待收货", "已完成"];
    const list2 = ["日报", "周报", "月报"];
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Subsection 分段器",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-1ac9ba9d"
        }),
        b: currentTheme.value,
        c: common_vendor.o(($event) => {
          return common_vendor.isRef(currentIndex1) ? currentIndex1.value = $event : null;
        }, "a3"),
        d: common_vendor.p({
          list: list1,
          ["active-color"]: currentTheme.value,
          shape: "round",
          modelValue: common_vendor.unref(currentIndex1),
          class: "data-v-1ac9ba9d"
        }),
        e: common_vendor.t(list1[common_vendor.unref(currentIndex1)]),
        f: currentTheme.value,
        g: common_vendor.o(($event) => {
          return common_vendor.isRef(currentIndex2) ? currentIndex2.value = $event : null;
        }, "c1"),
        h: common_vendor.p({
          list: list2,
          ["active-color"]: currentTheme.value,
          shape: "square",
          modelValue: common_vendor.unref(currentIndex2),
          class: "data-v-1ac9ba9d"
        }),
        i: common_vendor.t(list2[common_vendor.unref(currentIndex2)]),
        j: common_vendor.gei(_ctx, ""),
        k: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-1ac9ba9d"
        }),
        l: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1ac9ba9d"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/subsection/subsection.js.map
