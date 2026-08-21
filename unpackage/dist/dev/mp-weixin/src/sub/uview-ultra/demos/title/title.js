"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_title_1 = common_vendor.resolveComponent("up-title");
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  (_easycom_NavBar_1 + _easycom_up_title_1 + _easycom_up_icon_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_title = () => "../../../../../uni_modules/uview-ultra/components/up-title/up-title.js";
const _easycom_up_icon = () => "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_title + _easycom_up_icon + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "title",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const themeColor = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-title 标题",
          class: "data-v-9b2a015e"
        }),
        b: common_vendor.p({
          class: "demo-title data-v-9b2a015e"
        }),
        c: common_vendor.p({
          class: "data-v-9b2a015e"
        }),
        d: common_vendor.p({
          class: "demo-title data-v-9b2a015e"
        }),
        e: themeColor.value,
        f: common_vendor.p({
          class: "data-v-9b2a015e"
        }),
        g: common_vendor.p({
          class: "demo-title data-v-9b2a015e"
        }),
        h: common_vendor.p({
          name: "bell",
          size: "18",
          color: themeColor.value,
          class: "data-v-9b2a015e"
        }),
        i: common_vendor.p({
          class: "data-v-9b2a015e"
        }),
        j: common_vendor.p({
          class: "demo-title data-v-9b2a015e"
        }),
        k: common_vendor.p({
          class: "data-v-9b2a015e"
        }),
        l: common_vendor.p({
          class: "data-v-9b2a015e"
        }),
        m: common_vendor.p({
          class: "data-v-9b2a015e"
        }),
        n: common_vendor.p({
          class: "demo-title data-v-9b2a015e"
        }),
        o: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-title 标题",
          class: "data-v-9b2a015e"
        }),
        p: common_vendor.gei(_ctx, ""),
        q: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-9b2a015e"
        }),
        r: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9b2a015e"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/title/title.js.map
