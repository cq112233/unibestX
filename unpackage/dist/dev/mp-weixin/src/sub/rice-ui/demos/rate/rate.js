"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_rate_1 = common_vendor.resolveComponent("rice-rate");
  (_easycom_NavBar_1 + _easycom_rice_rate_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_rate = () => "../../../../../uni_modules/rice-ui/components/rice-rate/rice-rate.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_rate + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "rate",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const rate1 = common_vendor.ref(3);
    const rate2 = common_vendor.ref(4);
    const rate3 = common_vendor.ref(3.5);
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Rate 评分",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-bee38356"
        }),
        b: currentTheme.value,
        c: common_vendor.o(($event) => {
          return common_vendor.isRef(rate1) ? rate1.value = $event : null;
        }, "13"),
        d: common_vendor.p({
          color: currentTheme.value,
          modelValue: common_vendor.unref(rate1),
          class: "data-v-bee38356"
        }),
        e: common_vendor.t(common_vendor.unref(rate1)),
        f: currentTheme.value,
        g: common_vendor.o(($event) => {
          return common_vendor.isRef(rate2) ? rate2.value = $event : null;
        }, "e8"),
        h: common_vendor.p({
          color: "#ffd21e",
          size: "28px",
          modelValue: common_vendor.unref(rate2),
          class: "data-v-bee38356"
        }),
        i: common_vendor.o(($event) => {
          return common_vendor.isRef(rate3) ? rate3.value = $event : null;
        }, "74"),
        j: common_vendor.p({
          color: "#ee0a24",
          ["void-color"]: "#eee",
          size: "24px",
          ["allow-half"]: true,
          modelValue: common_vendor.unref(rate3),
          class: "data-v-bee38356"
        }),
        k: currentTheme.value,
        l: common_vendor.p({
          ["model-value"]: 4,
          readonly: true,
          color: currentTheme.value,
          size: "22px",
          class: "data-v-bee38356"
        }),
        m: common_vendor.gei(_ctx, ""),
        n: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-bee38356"
        }),
        o: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bee38356"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/rate/rate.js.map
