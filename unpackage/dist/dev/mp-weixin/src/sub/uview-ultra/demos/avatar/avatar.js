"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_avatar_1 = common_vendor.resolveComponent("up-avatar");
  (_easycom_NavBar_1 + _easycom_up_avatar_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_avatar = () => "../../../../../uni_modules/uview-ultra/components/up-avatar/up-avatar.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_avatar + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "avatar",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-avatar 头像",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-c4b6b3a9"
        }),
        b: common_vendor.p({
          src: "/static/logo.png",
          size: "40",
          class: "mr-10px data-v-c4b6b3a9"
        }),
        c: common_vendor.p({
          text: "U",
          size: "40",
          ["bg-color"]: "#2979ff",
          class: "mr-10px data-v-c4b6b3a9"
        }),
        d: common_vendor.p({
          src: "/static/logo.png",
          shape: "circle",
          size: "40",
          class: "mr-10px data-v-c4b6b3a9"
        }),
        e: common_vendor.p({
          src: "/static/logo.png",
          shape: "square",
          size: "40",
          class: "data-v-c4b6b3a9"
        }),
        f: common_vendor.p({
          src: "/static/logo.png",
          size: "50",
          class: "mr-10px data-v-c4b6b3a9"
        }),
        g: common_vendor.p({
          src: "/static/logo.png",
          size: "40",
          class: "mr-10px data-v-c4b6b3a9"
        }),
        h: common_vendor.p({
          src: "/static/logo.png",
          size: "30",
          class: "mr-10px data-v-c4b6b3a9"
        }),
        i: common_vendor.p({
          icon: "level",
          size: "40",
          ["bg-color"]: "#fa3534",
          class: "mr-10px data-v-c4b6b3a9"
        }),
        j: common_vendor.p({
          icon: "photo",
          size: "40",
          ["bg-color"]: "#ff9900",
          class: "mr-10px data-v-c4b6b3a9"
        }),
        k: common_vendor.p({
          text: "张",
          size: "40",
          ["bg-color"]: "#19be6b",
          class: "data-v-c4b6b3a9"
        }),
        l: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-avatar 头像",
          class: "data-v-c4b6b3a9"
        }),
        m: common_vendor.gei(_ctx, ""),
        n: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-c4b6b3a9"
        }),
        o: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c4b6b3a9"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/avatar/avatar.js.map
