"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_tooltip_1 = common_vendor.resolveComponent("up-tooltip");
  (_easycom_NavBar_1 + _easycom_up_tooltip_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_tooltip = () => "../../../../../uni_modules/uview-ultra/components/up-tooltip/up-tooltip.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_tooltip + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tooltip",
  setup(__props) {
    const tooltipButtons = common_vendor.ref(["编辑", "删除"]);
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-tooltip 长按提示",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-065444fb"
        }),
        b: common_vendor.p({
          text: "长按此处复制文本",
          direction: "top",
          class: "data-v-065444fb"
        }),
        c: common_vendor.p({
          text: "长按显示操作",
          direction: "top",
          ["show-copy"]: false,
          buttons: tooltipButtons.value,
          class: "data-v-065444fb"
        }),
        d: common_vendor.p({
          text: "向下弹出",
          direction: "bottom",
          class: "data-v-065444fb"
        }),
        e: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-tooltip 长按提示",
          class: "data-v-065444fb"
        }),
        f: common_vendor.gei(_ctx, ""),
        g: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-065444fb"
        }),
        h: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-065444fb"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/tooltip/tooltip.js.map
