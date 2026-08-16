"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_collapse_item_1 = common_vendor.resolveComponent("up-collapse-item");
  const _easycom_up_collapse_1 = common_vendor.resolveComponent("up-collapse");
  (_easycom_NavBar_1 + _easycom_up_collapse_item_1 + _easycom_up_collapse_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_collapse_item = () => "../../../../../uni_modules/uview-ultra/components/up-collapse-item/up-collapse-item.js";
const _easycom_up_collapse = () => "../../../../../uni_modules/uview-ultra/components/up-collapse/up-collapse.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_collapse_item + _easycom_up_collapse + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "collapse",
  setup(__props) {
    const collapseValue = common_vendor.ref("1");
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-collapse 折叠面板",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-64de1dc6"
        }),
        b: common_vendor.p({
          title: "第一项",
          name: "1",
          class: "data-v-64de1dc6"
        }),
        c: common_vendor.p({
          title: "第二项",
          name: "2",
          class: "data-v-64de1dc6"
        }),
        d: common_vendor.p({
          value: collapseValue.value,
          accordion: true,
          class: "data-v-64de1dc6"
        }),
        e: common_vendor.p({
          title: "第一项",
          name: "1",
          icon: "star",
          class: "data-v-64de1dc6"
        }),
        f: common_vendor.p({
          value: ["1"],
          class: "data-v-64de1dc6"
        }),
        g: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-collapse 折叠面板",
          class: "data-v-64de1dc6"
        }),
        h: common_vendor.gei(_ctx, ""),
        i: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-64de1dc6"
        }),
        j: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-64de1dc6"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/collapse/collapse.js.map
