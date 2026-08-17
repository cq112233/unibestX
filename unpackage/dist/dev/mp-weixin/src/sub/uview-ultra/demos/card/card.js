"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_card_1 = common_vendor.resolveComponent("up-card");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  (_easycom_NavBar_1 + _easycom_up_card_1 + _easycom_up_button_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_card = () => "../../../../../uni_modules/uview-ultra/components/up-card/up-card.js";
const _easycom_up_button = () => "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_card + _easycom_up_button + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const logoImg = "/static/logo.png";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "card",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-card 卡片",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-5bd7c5e5"
        }),
        b: common_vendor.p({
          title: "基础卡片",
          ["sub-title"]: "副标题",
          margin: "0",
          ["show-foot"]: false,
          class: "data-v-5bd7c5e5"
        }),
        c: common_vendor.p({
          title: "带缩略图",
          thumb: logoImg,
          ["thumb-circle"]: true,
          ["thumb-width"]: "36px",
          margin: "0",
          class: "data-v-5bd7c5e5"
        }),
        d: common_vendor.p({
          text: "评价",
          type: "primary",
          size: "mini",
          plain: true,
          class: "mr-10px data-v-5bd7c5e5"
        }),
        e: common_vendor.p({
          text: "再次购买",
          type: "primary",
          size: "mini",
          class: "data-v-5bd7c5e5"
        }),
        f: common_vendor.p({
          title: "订单信息",
          ["sub-title"]: "已完成",
          thumb: logoImg,
          margin: "0",
          class: "data-v-5bd7c5e5"
        }),
        g: common_vendor.p({
          title: "带明显阴影",
          ["sub-title"]: "自定义",
          margin: "0",
          ["box-shadow"]: "0 4px 12px rgba(0,0,0,0.1)",
          border: false,
          class: "data-v-5bd7c5e5"
        }),
        h: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-card 卡片",
          class: "data-v-5bd7c5e5"
        }),
        i: common_vendor.gei(_ctx, ""),
        j: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-5bd7c5e5"
        }),
        k: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5bd7c5e5"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/card/card.js.map
