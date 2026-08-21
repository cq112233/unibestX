"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_circle_progress_1 = common_vendor.resolveComponent("up-circle-progress");
  (_easycom_NavBar_1 + _easycom_up_circle_progress_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_circle_progress = () => "../../../../../uni_modules/uview-ultra/components/up-circle-progress/up-circle-progress.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_circle_progress + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "circle-progress",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "CircleProgress 圆形进度条",
          ["auto-back"]: true,
          class: "data-v-1805ab9e"
        }),
        b: common_vendor.p({
          class: "data-v-1805ab9e"
        }),
        c: common_vendor.p({
          percentage: "30",
          ["active-color"]: "#19be6b",
          class: "data-v-1805ab9e"
        }),
        d: common_vendor.p({
          percentage: "60",
          ["active-color"]: "#ffaa33",
          ["inactive-color"]: "#f3f4f6",
          class: "data-v-1805ab9e"
        }),
        e: common_vendor.p({
          percentage: "80",
          width: "100",
          class: "data-v-1805ab9e"
        }),
        f: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "CircleProgress 圆形进度条",
          class: "data-v-1805ab9e"
        }),
        g: common_vendor.gei(_ctx, ""),
        h: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-1805ab9e"
        }),
        i: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1805ab9e"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/circle-progress/circle-progress.js.map
