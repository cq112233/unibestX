"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_line_progress_1 = common_vendor.resolveComponent("up-line-progress");
  (_easycom_NavBar_1 + _easycom_up_line_progress_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_line_progress = () => "../../../../../uni_modules/uview-ultra/components/up-line-progress/up-line-progress.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_line_progress + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "line-progress",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "LineProgress 线型进度条",
          ["auto-back"]: true,
          class: "data-v-e3beca51"
        }),
        b: common_vendor.p({
          percentage: 50,
          activeColor: "#2979ff",
          class: "data-v-e3beca51"
        }),
        c: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-line-progress 线型进度条",
          class: "data-v-e3beca51"
        }),
        d: common_vendor.gei(_ctx, ""),
        e: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-e3beca51"
        }),
        f: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e3beca51"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/line-progress/line-progress.js.map
