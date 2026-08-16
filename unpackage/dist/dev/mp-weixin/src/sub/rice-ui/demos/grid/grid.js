"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_grid_item_1 = common_vendor.resolveComponent("rice-grid-item");
  const _easycom_rice_grid_1 = common_vendor.resolveComponent("rice-grid");
  (_easycom_NavBar_1 + _easycom_rice_grid_item_1 + _easycom_rice_grid_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_grid_item = () => "../../../../../uni_modules/rice-ui/components/rice-grid-item/rice-grid-item.js";
const _easycom_rice_grid = () => "../../../../../uni_modules/rice-ui/components/rice-grid/rice-grid.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_grid_item + _easycom_rice_grid + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "grid",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Grid 宫格",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-9a354094"
        }),
        b: currentTheme.value,
        c: common_vendor.p({
          icon: "photo",
          ["icon-color"]: currentTheme.value,
          text: "相册",
          class: "data-v-9a354094"
        }),
        d: common_vendor.p({
          icon: "search",
          ["icon-color"]: currentTheme.value,
          text: "发现",
          class: "data-v-9a354094"
        }),
        e: common_vendor.p({
          icon: "star-fill",
          ["icon-color"]: currentTheme.value,
          text: "收藏",
          class: "data-v-9a354094"
        }),
        f: common_vendor.p({
          icon: "set",
          ["icon-color"]: currentTheme.value,
          text: "设置",
          class: "data-v-9a354094"
        }),
        g: common_vendor.p({
          ["column-num"]: 4,
          class: "data-v-9a354094"
        }),
        h: currentTheme.value,
        i: common_vendor.p({
          icon: "volume",
          ["icon-color"]: currentTheme.value,
          text: "消息",
          badge: "9+",
          class: "data-v-9a354094"
        }),
        j: common_vendor.p({
          icon: "user",
          ["icon-color"]: currentTheme.value,
          text: "个人中心",
          class: "data-v-9a354094"
        }),
        k: common_vendor.p({
          icon: "qr",
          ["icon-color"]: currentTheme.value,
          text: "扫一扫",
          class: "data-v-9a354094"
        }),
        l: common_vendor.p({
          ["column-num"]: 3,
          class: "data-v-9a354094"
        }),
        m: common_vendor.gei(_ctx, ""),
        n: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-9a354094"
        }),
        o: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9a354094"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/grid/grid.js.map
