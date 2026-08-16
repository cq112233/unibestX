"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_button_1 = common_vendor.resolveComponent("rice-button");
  const _easycom_rice_loading_1 = common_vendor.resolveComponent("rice-loading");
  const _easycom_rice_overlay_1 = common_vendor.resolveComponent("rice-overlay");
  (_easycom_NavBar_1 + _easycom_rice_button_1 + _easycom_rice_loading_1 + _easycom_rice_overlay_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_button = () => "../../../../../uni_modules/rice-ui/components/rice-button/rice-button.js";
const _easycom_rice_loading = () => "../../../../../uni_modules/rice-ui/components/rice-loading/rice-loading.js";
const _easycom_rice_overlay = () => "../../../../../uni_modules/rice-ui/components/rice-overlay/rice-overlay.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_button + _easycom_rice_loading + _easycom_rice_overlay + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "overlay",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const showOverlay = common_vendor.ref(false);
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Overlay 遮罩层",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-652d140f"
        }),
        b: currentTheme.value,
        c: common_vendor.o(($event) => {
          return showOverlay.value = true;
        }, "ce"),
        d: common_vendor.p({
          type: "primary",
          color: currentTheme.value,
          text: "显示全屏遮罩层",
          class: "data-v-652d140f"
        }),
        e: common_vendor.p({
          size: "32px",
          color: currentTheme.value,
          class: "data-v-652d140f"
        }),
        f: common_vendor.o(($event) => {
          return showOverlay.value = false;
        }, "d3"),
        g: common_vendor.p({
          size: "mini",
          type: "default",
          text: "关闭遮罩",
          class: "mt-12px data-v-652d140f"
        }),
        h: common_vendor.o(() => {
        }, "b8"),
        i: common_vendor.o(($event) => {
          return common_vendor.isRef(showOverlay) ? showOverlay.value = $event : null;
        }, "5b"),
        j: common_vendor.p({
          show: common_vendor.unref(showOverlay),
          class: "data-v-652d140f"
        }),
        k: common_vendor.gei(_ctx, ""),
        l: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-652d140f"
        }),
        m: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-652d140f"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/overlay/overlay.js.map
