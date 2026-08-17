"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_loadmore_1 = common_vendor.resolveComponent("up-loadmore");
  (_easycom_NavBar_1 + _easycom_up_loadmore_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_loadmore = () => "../../../../../uni_modules/uview-ultra/components/up-loadmore/up-loadmore.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_loadmore + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "loadmore",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Loadmore 加载更多",
          ["auto-back"]: true,
          class: "data-v-acd0529f"
        }),
        b: common_vendor.p({
          status: "loadmore",
          class: "data-v-acd0529f"
        }),
        c: common_vendor.p({
          status: "loading",
          ["loading-text"]: "正在奋力加载中...",
          class: "data-v-acd0529f"
        }),
        d: common_vendor.p({
          status: "nomore",
          ["nomore-text"]: "我是有底线的",
          class: "data-v-acd0529f"
        }),
        e: common_vendor.p({
          status: "nomore",
          line: true,
          class: "data-v-acd0529f"
        }),
        f: common_vendor.p({
          status: "loading",
          ["loading-icon"]: "spinner",
          color: "#fa3534",
          ["icon-color"]: "#fa3534",
          class: "data-v-acd0529f"
        }),
        g: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-loadmore 加载更多",
          class: "data-v-acd0529f"
        }),
        h: common_vendor.gei(_ctx, ""),
        i: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-acd0529f"
        }),
        j: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-acd0529f"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/loadmore/loadmore.js.map
