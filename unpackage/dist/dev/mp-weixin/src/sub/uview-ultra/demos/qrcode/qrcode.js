"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_qrcode_1 = common_vendor.resolveComponent("up-qrcode");
  (_easycom_NavBar_1 + _easycom_up_qrcode_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_qrcode = () => "../../../../../uni_modules/uview-ultra/components/up-qrcode/up-qrcode.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_qrcode + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "qrcode",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Qrcode 二维码",
          ["auto-back"]: true,
          class: "data-v-e8ed7175"
        }),
        b: common_vendor.p({
          size: "200",
          val: "https://uview-ultra.lingyun.net",
          class: "data-v-e8ed7175"
        }),
        c: common_vendor.p({
          size: "200",
          background: "#f3f4f6",
          foreground: "#2979ff",
          val: "https://uview-ultra.lingyun.net",
          class: "data-v-e8ed7175"
        }),
        d: common_vendor.p({
          size: "200",
          icon: "https://uview-ultra.lingyun.net/common/logo.png",
          ["icon-size"]: "40",
          val: "https://uview-ultra.lingyun.net",
          class: "data-v-e8ed7175"
        }),
        e: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-qrcode 二维码",
          class: "data-v-e8ed7175"
        }),
        f: common_vendor.gei(_ctx, ""),
        g: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-e8ed7175"
        }),
        h: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e8ed7175"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/qrcode/qrcode.js.map
