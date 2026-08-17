"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_skeleton_1 = common_vendor.resolveComponent("up-skeleton");
  (_easycom_NavBar_1 + _easycom_up_skeleton_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_skeleton = () => "../../../../../uni_modules/uview-ultra/components/up-skeleton/up-skeleton.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_skeleton + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "skeleton",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Skeleton 骨架屏",
          ["auto-back"]: true,
          class: "data-v-b103a7f6"
        }),
        b: common_vendor.p({
          loading: true,
          animate: true,
          rows: 3,
          title: true,
          class: "data-v-b103a7f6"
        }),
        c: common_vendor.p({
          loading: true,
          animate: true,
          rows: 2,
          title: true,
          avatar: true,
          class: "data-v-b103a7f6"
        }),
        d: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-skeleton 骨架屏",
          class: "data-v-b103a7f6"
        }),
        e: common_vendor.gei(_ctx, ""),
        f: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-b103a7f6"
        }),
        g: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b103a7f6"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/skeleton/skeleton.js.map
