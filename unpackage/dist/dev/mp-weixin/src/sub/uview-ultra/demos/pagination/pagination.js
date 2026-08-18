"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_pagination_1 = common_vendor.resolveComponent("up-pagination");
  (_easycom_NavBar_1 + _easycom_up_pagination_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_pagination = () => "../../../../../uni_modules/uview-ultra/components/up-pagination/up-pagination.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_pagination + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "pagination",
  setup(__props) {
    const paginationCurrentPage = common_vendor.ref(1);
    const paginationPageSize = common_vendor.ref(10);
    const paginationTotal = common_vendor.ref(100);
    function onPaginationCurrentChange(page) {
      paginationCurrentPage.value = page;
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Pagination 分页器",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-c985d42c"
        }),
        b: common_vendor.o(onPaginationCurrentChange, "3b"),
        c: common_vendor.p({
          ["current-page"]: paginationCurrentPage.value,
          ["page-size"]: paginationPageSize.value,
          total: paginationTotal.value,
          layout: "prev, pager, next, total",
          class: "data-v-c985d42c"
        }),
        d: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-pagination 分页器",
          class: "data-v-c985d42c"
        }),
        e: common_vendor.gei(_ctx, ""),
        f: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-c985d42c"
        }),
        g: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c985d42c"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/pagination/pagination.js.map
