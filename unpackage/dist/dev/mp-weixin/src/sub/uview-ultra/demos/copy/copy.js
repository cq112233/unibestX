"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  const _easycom_up_copy_1 = common_vendor.resolveComponent("up-copy");
  (_easycom_NavBar_1 + _easycom_up_button_1 + _easycom_up_copy_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_button = () => "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
const _easycom_up_copy = () => "../../../../../uni_modules/uview-ultra/components/up-copy/up-copy.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_button + _easycom_up_copy + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "copy",
  setup(__props) {
    function onCopySuccess() {
      common_vendor.index.showToast({ title: "复制成功！", icon: "success" });
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Copy 复制",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-609cee78"
        }),
        b: common_vendor.p({
          type: "primary",
          text: "点击复制文本",
          size: "mini",
          class: "data-v-609cee78"
        }),
        c: common_vendor.o(onCopySuccess, "a5"),
        d: common_vendor.p({
          content: "uview-ultra is great !",
          class: "data-v-609cee78"
        }),
        e: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-copy 文本复制",
          class: "data-v-609cee78"
        }),
        f: common_vendor.gei(_ctx, ""),
        g: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-609cee78"
        }),
        h: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-609cee78"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/copy/copy.js.map
