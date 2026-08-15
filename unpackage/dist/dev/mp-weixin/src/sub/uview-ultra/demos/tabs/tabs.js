"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_tabs_1 = common_vendor.resolveComponent("up-tabs");
  (_easycom_NavBar_1 + _easycom_up_tabs_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_tabs = () => "../../../../../uni_modules/uview-ultra/components/up-tabs/up-tabs.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_tabs + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tabs",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Tabs 标签页",
          ["auto-back"]: true,
          class: "data-v-01e0da23"
        }),
        b: common_vendor.p({
          list: [{
            name: "关注"
          }, {
            name: "推荐"
          }, {
            name: "科技"
          }],
          class: "data-v-01e0da23"
        }),
        c: common_vendor.p({
          list: [{
            name: "关注"
          }, {
            name: "推荐"
          }, {
            name: "科技"
          }],
          ["line-color"]: "#fa3534",
          ["active-style"]: {
            color: "#fa3534"
          },
          class: "data-v-01e0da23"
        }),
        d: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-tabs 标签页",
          class: "data-v-01e0da23"
        }),
        e: common_vendor.gei(_ctx, ""),
        f: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-01e0da23"
        }),
        g: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-01e0da23"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/tabs/tabs.js.map
