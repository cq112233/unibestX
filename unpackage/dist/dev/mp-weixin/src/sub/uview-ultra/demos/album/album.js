"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_album_1 = common_vendor.resolveComponent("up-album");
  (_easycom_NavBar_1 + _easycom_up_album_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_album = () => "../../../../../uni_modules/uview-ultra/components/up-album/up-album.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_album + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "album",
  setup(__props) {
    const albumUrls = common_vendor.ref([
      "https://cdn.uviewui.com/uview/album/1.jpg",
      "https://cdn.uviewui.com/uview/album/2.jpg",
      "https://cdn.uviewui.com/uview/album/3.jpg",
      "https://cdn.uviewui.com/uview/album/4.jpg",
      "https://cdn.uviewui.com/uview/album/5.jpg"
    ]);
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Album 相册",
          ["auto-back"]: true,
          class: "data-v-7a4a4969"
        }),
        b: common_vendor.p({
          urls: ["https://cdn.uviewui.com/uview/album/1.jpg", "https://cdn.uviewui.com/uview/album/2.jpg"],
          class: "data-v-7a4a4969"
        }),
        c: common_vendor.p({
          urls: ["https://cdn.uviewui.com/uview/album/1.jpg"],
          class: "data-v-7a4a4969"
        }),
        d: common_vendor.p({
          urls: albumUrls.value,
          ["max-count"]: "8",
          ["row-count"]: 4,
          class: "data-v-7a4a4969"
        }),
        e: common_vendor.p({
          urls: albumUrls.value,
          radius: "8",
          space: "10",
          class: "data-v-7a4a4969"
        }),
        f: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-album 相册",
          class: "data-v-7a4a4969"
        }),
        g: common_vendor.gei(_ctx, ""),
        h: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-7a4a4969"
        }),
        i: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7a4a4969"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/album/album.js.map
