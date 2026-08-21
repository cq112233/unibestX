"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_title_1 = common_vendor.resolveComponent("up-title");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  const _easycom_up_pdf_reader_1 = common_vendor.resolveComponent("up-pdf-reader");
  (_easycom_NavBar_1 + _easycom_up_title_1 + _easycom_up_button_1 + _easycom_up_pdf_reader_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_title = () => "../../../../../uni_modules/uview-ultra/components/up-title/up-title.js";
const _easycom_up_button = () => "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
const _easycom_up_pdf_reader = () => "../../../../../uni_modules/uview-ultra/components/up-pdf-reader/up-pdf-reader.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_title + _easycom_up_button + _easycom_up_pdf_reader + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const pdfUrl = "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "pdf-reader",
  setup(__props) {
    const height = common_vendor.ref("600px");
    function setHeight(val) {
      height.value = val;
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-pdf-reader PDF 阅读",
          class: "data-v-4c12f5fc"
        }),
        b: common_vendor.p({
          class: "demo-title data-v-4c12f5fc"
        }),
        c: common_vendor.o(($event) => {
          return setHeight("600px");
        }, "54"),
        d: common_vendor.p({
          text: "高度 600px",
          type: "primary",
          plain: height.value != "600px",
          size: "mini",
          class: "height-option data-v-4c12f5fc"
        }),
        e: common_vendor.o(($event) => {
          return setHeight("400px");
        }, "98"),
        f: common_vendor.p({
          text: "高度 400px",
          type: "primary",
          plain: height.value != "400px",
          size: "mini",
          class: "height-option data-v-4c12f5fc"
        }),
        g: common_vendor.p({
          src: pdfUrl,
          height: height.value,
          class: "data-v-4c12f5fc"
        }),
        h: common_vendor.p({
          class: "demo-title data-v-4c12f5fc"
        }),
        i: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-pdf-reader PDF 阅读",
          class: "data-v-4c12f5fc"
        }),
        j: common_vendor.gei(_ctx, ""),
        k: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-4c12f5fc"
        }),
        l: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4c12f5fc"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/pdf-reader/pdf-reader.js.map
