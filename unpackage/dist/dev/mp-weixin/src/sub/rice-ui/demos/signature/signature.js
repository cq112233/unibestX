"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_signature_1 = common_vendor.resolveComponent("rice-signature");
  (_easycom_NavBar_1 + _easycom_rice_signature_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_signature = () => "../../../../../uni_modules/rice-ui/components/rice-signature/rice-signature.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_signature + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "signature",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const signatureImg = common_vendor.ref("");
    function onSubmit(img) {
      signatureImg.value = img;
      common_vendor.index.showToast({
        title: "签名保存成功",
        icon: "success"
      });
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: common_vendor.p({
          title: "Signature 签名",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-1cb7e2c9"
        }),
        b: currentTheme.value,
        c: common_vendor.o(onSubmit, "ee"),
        d: common_vendor.p({
          tips: "请在上方空白区域书写您的签名",
          ["pen-color"]: currentTheme.value,
          class: "data-v-1cb7e2c9"
        }),
        e: common_vendor.unref(signatureImg) != ""
      }, common_vendor.unref(signatureImg) != "" ? {
        f: common_vendor.unref(signatureImg)
      } : {}, {
        g: common_vendor.gei(_ctx, ""),
        h: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-1cb7e2c9"
        }),
        i: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      });
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cb7e2c9"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/signature/signature.js.map
