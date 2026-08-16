"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_collapse_item_1 = common_vendor.resolveComponent("rice-collapse-item");
  const _easycom_rice_collapse_1 = common_vendor.resolveComponent("rice-collapse");
  (_easycom_NavBar_1 + _easycom_rice_collapse_item_1 + _easycom_rice_collapse_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_collapse_item = () => "../../../../../uni_modules/rice-ui/components/rice-collapse-item/rice-collapse-item.js";
const _easycom_rice_collapse = () => "../../../../../uni_modules/rice-ui/components/rice-collapse/rice-collapse.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_collapse_item + _easycom_rice_collapse + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "collapse",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const activeNames = common_vendor.ref(["1"]);
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Collapse 折叠面板",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-bfd4a2da"
        }),
        b: currentTheme.value,
        c: common_vendor.p({
          title: "什么是 Rice UI？",
          name: "1",
          class: "data-v-bfd4a2da"
        }),
        d: common_vendor.p({
          title: "是否支持蒸汽模式 (Vapor Mode)？",
          name: "2",
          class: "data-v-bfd4a2da"
        }),
        e: common_vendor.p({
          title: "如何使用暗黑模式？",
          name: "3",
          class: "data-v-bfd4a2da"
        }),
        f: common_vendor.o(($event) => {
          return common_vendor.isRef(activeNames) ? activeNames.value = $event : null;
        }, "42"),
        g: common_vendor.p({
          modelValue: common_vendor.unref(activeNames),
          class: "data-v-bfd4a2da"
        }),
        h: common_vendor.gei(_ctx, ""),
        i: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-bfd4a2da"
        }),
        j: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bfd4a2da"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/collapse/collapse.js.map
