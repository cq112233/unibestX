"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_image_1 = common_vendor.resolveComponent("up-image");
  (_easycom_NavBar_1 + _easycom_up_image_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_image = () => "../../../../../uni_modules/uview-ultra/components/up-image/up-image.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_image + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "image",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Image 图片",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-87a05a01"
        }),
        b: common_vendor.p({
          src: "/static/logo.png",
          width: "60px",
          height: "60px",
          class: "data-v-87a05a01"
        }),
        c: common_vendor.p({
          src: "/static/logo.png",
          width: "60px",
          height: "60px",
          shape: "circle",
          class: "data-v-87a05a01"
        }),
        d: common_vendor.p({
          src: "/static/logo.png",
          width: "80px",
          height: "60px",
          mode: "aspectFit",
          class: "data-v-87a05a01"
        }),
        e: common_vendor.p({
          src: "/static/logo.png",
          width: "80px",
          height: "60px",
          mode: "scaleToFill",
          class: "data-v-87a05a01"
        }),
        f: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-image 图片",
          class: "data-v-87a05a01"
        }),
        g: common_vendor.gei(_ctx, ""),
        h: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-87a05a01"
        }),
        i: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-87a05a01"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/image/image.js.map
