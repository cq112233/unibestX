"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_col_1 = common_vendor.resolveComponent("rice-col");
  const _easycom_rice_row_1 = common_vendor.resolveComponent("rice-row");
  (_easycom_NavBar_1 + _easycom_rice_col_1 + _easycom_rice_row_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_col = () => "../../../../../uni_modules/rice-ui/components/rice-col/rice-col.js";
const _easycom_rice_row = () => "../../../../../uni_modules/rice-ui/components/rice-row/rice-row.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_col + _easycom_rice_row + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "layout",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Layout 布局",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-f0e8466c"
        }),
        b: currentTheme.value,
        c: currentTheme.value,
        d: common_vendor.p({
          span: 24,
          class: "data-v-f0e8466c"
        }),
        e: common_vendor.p({
          class: "data-v-f0e8466c"
        }),
        f: currentTheme.value,
        g: common_vendor.p({
          span: 12,
          class: "data-v-f0e8466c"
        }),
        h: currentTheme.value,
        i: common_vendor.p({
          span: 12,
          class: "data-v-f0e8466c"
        }),
        j: common_vendor.p({
          class: "data-v-f0e8466c"
        }),
        k: currentTheme.value,
        l: common_vendor.p({
          span: 8,
          class: "data-v-f0e8466c"
        }),
        m: currentTheme.value,
        n: common_vendor.p({
          span: 8,
          class: "data-v-f0e8466c"
        }),
        o: currentTheme.value,
        p: common_vendor.p({
          span: 8,
          class: "data-v-f0e8466c"
        }),
        q: common_vendor.p({
          class: "data-v-f0e8466c"
        }),
        r: currentTheme.value,
        s: currentTheme.value,
        t: common_vendor.p({
          span: 8,
          class: "data-v-f0e8466c"
        }),
        v: currentTheme.value,
        w: common_vendor.p({
          span: 8,
          class: "data-v-f0e8466c"
        }),
        x: currentTheme.value,
        y: common_vendor.p({
          span: 8,
          class: "data-v-f0e8466c"
        }),
        z: common_vendor.p({
          gutter: 12,
          class: "data-v-f0e8466c"
        }),
        A: currentTheme.value,
        B: currentTheme.value,
        C: common_vendor.p({
          span: 8,
          class: "data-v-f0e8466c"
        }),
        D: currentTheme.value,
        E: common_vendor.p({
          span: 8,
          offset: 8,
          class: "data-v-f0e8466c"
        }),
        F: common_vendor.p({
          class: "data-v-f0e8466c"
        }),
        G: common_vendor.gei(_ctx, ""),
        H: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-f0e8466c"
        }),
        I: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f0e8466c"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/layout/layout.js.map
