"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_count_to_1 = common_vendor.resolveComponent("up-count-to");
  (_easycom_NavBar_1 + _easycom_up_count_to_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_count_to = () => "../../../../../uni_modules/uview-ultra/components/up-count-to/up-count-to.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_count_to + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "count-to",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "CountTo 数字滚动",
          ["auto-back"]: true,
          class: "data-v-4ea707c3"
        }),
        b: common_vendor.p({
          ["end-val"]: 1e3,
          color: "#2979ff",
          ["font-size"]: 30,
          class: "data-v-4ea707c3"
        }),
        c: common_vendor.p({
          ["end-val"]: 1234.56,
          decimals: 2,
          separator: ",",
          color: "#fa3534",
          ["font-size"]: 24,
          class: "data-v-4ea707c3"
        }),
        d: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-count-to 数字滚动",
          class: "data-v-4ea707c3"
        }),
        e: common_vendor.gei(_ctx, ""),
        f: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-4ea707c3"
        }),
        g: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4ea707c3"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/count-to/count-to.js.map
