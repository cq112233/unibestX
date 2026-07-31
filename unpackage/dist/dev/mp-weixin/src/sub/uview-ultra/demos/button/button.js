"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  (_easycom_NavBar_1 + _easycom_up_button_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_button = () => "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_button + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "button",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-button 按钮",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-bf43e27b"
        }),
        b: common_vendor.p({
          type: "primary",
          text: "主要按钮",
          class: "data-v-bf43e27b"
        }),
        c: common_vendor.p({
          type: "success",
          text: "成功按钮",
          class: "data-v-bf43e27b"
        }),
        d: common_vendor.p({
          type: "info",
          text: "信息按钮",
          class: "data-v-bf43e27b"
        }),
        e: common_vendor.p({
          type: "warning",
          text: "警告按钮",
          class: "data-v-bf43e27b"
        }),
        f: common_vendor.p({
          type: "error",
          text: "危险按钮",
          class: "data-v-bf43e27b"
        }),
        g: common_vendor.p({
          type: "primary",
          text: "主要按钮",
          plain: true,
          class: "data-v-bf43e27b"
        }),
        h: common_vendor.p({
          type: "primary",
          text: "大尺寸",
          size: "large",
          class: "data-v-bf43e27b"
        }),
        i: common_vendor.p({
          type: "primary",
          text: "普通尺寸",
          size: "normal",
          class: "data-v-bf43e27b"
        }),
        j: common_vendor.p({
          type: "primary",
          text: "小尺寸",
          size: "small",
          class: "data-v-bf43e27b"
        }),
        k: common_vendor.p({
          type: "primary",
          text: "迷你尺寸",
          size: "mini",
          class: "data-v-bf43e27b"
        }),
        l: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-button 按钮",
          class: "data-v-bf43e27b"
        }),
        m: common_vendor.gei(_ctx, ""),
        n: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-bf43e27b"
        }),
        o: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bf43e27b"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/button/button.js.map
