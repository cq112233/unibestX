"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_grid_item_1 = common_vendor.resolveComponent("up-grid-item");
  const _easycom_up_grid_1 = common_vendor.resolveComponent("up-grid");
  (_easycom_NavBar_1 + _easycom_up_icon_1 + _easycom_up_grid_item_1 + _easycom_up_grid_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_icon = () => "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
const _easycom_up_grid_item = () => "../../../../../uni_modules/uview-ultra/components/up-grid-item/up-grid-item.js";
const _easycom_up_grid = () => "../../../../../uni_modules/uview-ultra/components/up-grid/up-grid.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_icon + _easycom_up_grid_item + _easycom_up_grid + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "grid",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Grid 宫格",
          ["auto-back"]: true,
          class: "data-v-75f5808e"
        }),
        b: common_vendor.f(4, (i, k0, i0) => {
          return {
            a: "75f5808e-5-" + i0 + "," + ("75f5808e-4-" + i0),
            b: i,
            c: "75f5808e-4-" + i0 + ",75f5808e-3"
          };
        }),
        c: common_vendor.p({
          name: "photo",
          size: 30,
          class: "data-v-75f5808e"
        }),
        d: common_vendor.p({
          class: "data-v-75f5808e"
        }),
        e: common_vendor.p({
          border: true,
          class: "data-v-75f5808e"
        }),
        f: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-grid 宫格",
          class: "data-v-75f5808e"
        }),
        g: common_vendor.gei(_ctx, ""),
        h: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-75f5808e"
        }),
        i: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-75f5808e"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/grid/grid.js.map
