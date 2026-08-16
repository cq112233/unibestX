"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_qrcode_1 = common_vendor.resolveComponent("rice-qrcode");
  (_easycom_NavBar_1 + _easycom_rice_qrcode_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_qrcode = () => "../../../../../uni_modules/rice-ui/components/rice-qrcode/rice-qrcode.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_qrcode + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "qrcode",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "QRCode 二维码",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-781ca1d5"
        }),
        b: currentTheme.value,
        c: common_vendor.p({
          value: "https://riceui.cn/",
          size: 160,
          class: "data-v-781ca1d5"
        }),
        d: common_vendor.gei(_ctx, ""),
        e: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-781ca1d5"
        }),
        f: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-781ca1d5"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/qrcode/qrcode.js.map
