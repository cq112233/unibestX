"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_avatar_1 = common_vendor.resolveComponent("rice-avatar");
  (_easycom_NavBar_1 + _easycom_rice_avatar_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_avatar = () => "../../../../../uni_modules/rice-ui/components/rice-avatar/rice-avatar.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_avatar + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "avatar",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Avatar 头像",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-83b06826"
        }),
        b: currentTheme.value,
        c: common_vendor.p({
          src: "/static/logo.png",
          size: "50px",
          round: true,
          class: "data-v-83b06826"
        }),
        d: common_vendor.p({
          src: "/static/logo.png",
          size: "50px",
          round: false,
          radius: "8px",
          class: "data-v-83b06826"
        }),
        e: currentTheme.value,
        f: common_vendor.p({
          src: "/static/logo.png",
          size: "32px",
          class: "data-v-83b06826"
        }),
        g: common_vendor.p({
          src: "/static/logo.png",
          size: "44px",
          class: "data-v-83b06826"
        }),
        h: common_vendor.p({
          src: "/static/logo.png",
          size: "56px",
          class: "data-v-83b06826"
        }),
        i: common_vendor.p({
          src: "/static/logo.png",
          size: "68px",
          class: "data-v-83b06826"
        }),
        j: currentTheme.value,
        k: common_vendor.p({
          text: "UN",
          ["bg-color"]: currentTheme.value,
          color: "#ffffff",
          size: "48px",
          class: "data-v-83b06826"
        }),
        l: common_vendor.p({
          icon: "user",
          ["bg-color"]: currentTheme.value,
          color: "#ffffff",
          size: "48px",
          class: "data-v-83b06826"
        }),
        m: common_vendor.p({
          text: "RICE",
          ["bg-color"]: "#334155",
          color: "#ffffff",
          size: "48px",
          class: "data-v-83b06826"
        }),
        n: common_vendor.gei(_ctx, ""),
        o: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-83b06826"
        }),
        p: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-83b06826"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/avatar/avatar.js.map
