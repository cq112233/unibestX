"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_image_1 = common_vendor.resolveComponent("rice-image");
  (_easycom_NavBar_1 + _easycom_rice_image_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_image = () => "../../../../../uni_modules/rice-ui/components/rice-image/rice-image.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_image + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "image",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Image 图片",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-c80b154f"
        }),
        b: currentTheme.value,
        c: common_vendor.p({
          src: "/static/logo.png",
          width: "80px",
          height: "80px",
          class: "data-v-c80b154f"
        }),
        d: currentTheme.value,
        e: common_vendor.p({
          src: "/static/logo.png",
          width: "70px",
          height: "70px",
          radius: "12px",
          class: "data-v-c80b154f"
        }),
        f: common_vendor.p({
          src: "/static/logo.png",
          width: "70px",
          height: "70px",
          round: true,
          class: "data-v-c80b154f"
        }),
        g: currentTheme.value,
        h: common_vendor.p({
          src: "/static/logo.png",
          width: "70px",
          height: "70px",
          mode: "scaleToFill",
          radius: "6px",
          class: "data-v-c80b154f"
        }),
        i: common_vendor.p({
          src: "/static/logo.png",
          width: "70px",
          height: "70px",
          mode: "aspectFit",
          radius: "6px",
          class: "data-v-c80b154f"
        }),
        j: common_vendor.p({
          src: "/static/logo.png",
          width: "70px",
          height: "70px",
          mode: "aspectFill",
          radius: "6px",
          class: "data-v-c80b154f"
        }),
        k: common_vendor.gei(_ctx, ""),
        l: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-c80b154f"
        }),
        m: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c80b154f"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/image/image.js.map
