"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_icon_1 = common_vendor.resolveComponent("rice-icon");
  const _easycom_rice_badge_1 = common_vendor.resolveComponent("rice-badge");
  (_easycom_NavBar_1 + _easycom_rice_icon_1 + _easycom_rice_badge_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_icon = () => "../../../../../uni_modules/rice-ui/components/rice-icon/rice-icon.js";
const _easycom_rice_badge = () => "../../../../../uni_modules/rice-ui/components/rice-badge/rice-badge.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_icon + _easycom_rice_badge + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "badge",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Badge 徽标",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-d0891f52"
        }),
        b: currentTheme.value,
        c: common_vendor.p({
          name: "chat",
          size: "24px",
          color: "#475569",
          class: "data-v-d0891f52"
        }),
        d: common_vendor.p({
          value: 5,
          class: "data-v-d0891f52"
        }),
        e: common_vendor.p({
          name: "volume",
          size: "24px",
          color: "#475569",
          class: "data-v-d0891f52"
        }),
        f: common_vendor.p({
          value: 99,
          max: "99",
          class: "data-v-d0891f52"
        }),
        g: common_vendor.p({
          name: "user",
          size: "24px",
          color: "#475569",
          class: "data-v-d0891f52"
        }),
        h: common_vendor.p({
          ["is-dot"]: true,
          class: "data-v-d0891f52"
        }),
        i: currentTheme.value,
        j: common_vendor.p({
          value: "HOT",
          type: "error",
          single: true,
          class: "data-v-d0891f52"
        }),
        k: common_vendor.p({
          value: "NEW",
          type: "success",
          single: true,
          class: "data-v-d0891f52"
        }),
        l: common_vendor.p({
          value: "VIP",
          type: "warning",
          single: true,
          class: "data-v-d0891f52"
        }),
        m: common_vendor.p({
          value: 12,
          color: currentTheme.value,
          single: true,
          class: "data-v-d0891f52"
        }),
        n: common_vendor.gei(_ctx, ""),
        o: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-d0891f52"
        }),
        p: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d0891f52"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/badge/badge.js.map
