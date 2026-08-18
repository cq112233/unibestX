"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_textarea_1 = common_vendor.resolveComponent("up-textarea");
  (_easycom_NavBar_1 + _easycom_up_textarea_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_textarea = () => "../../../../../uni_modules/uview-ultra/components/up-textarea/up-textarea.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_textarea + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "textarea",
  setup(__props) {
    const textValue1 = common_vendor.ref("");
    const textValue2 = common_vendor.ref("");
    const textValue3 = common_vendor.ref("");
    const textValue4 = common_vendor.ref("");
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-textarea 多行文本",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-fcd94c07"
        }),
        b: common_vendor.o(($event) => {
          return textValue1.value = $event;
        }, "a0"),
        c: common_vendor.p({
          placeholder: "请输入内容",
          count: true,
          maxlength: 100,
          modelValue: textValue1.value,
          class: "data-v-fcd94c07"
        }),
        d: common_vendor.o(($event) => {
          return textValue2.value = $event;
        }, "44"),
        e: common_vendor.p({
          placeholder: "输入文字会自动撑开高度",
          ["auto-height"]: true,
          modelValue: textValue2.value,
          class: "data-v-fcd94c07"
        }),
        f: common_vendor.o(($event) => {
          return textValue3.value = $event;
        }, "2b"),
        g: common_vendor.p({
          placeholder: "下划线输入",
          border: "bottom",
          modelValue: textValue3.value,
          class: "data-v-fcd94c07"
        }),
        h: common_vendor.o(($event) => {
          return textValue4.value = $event;
        }, "f5"),
        i: common_vendor.p({
          placeholder: "禁止输入内容",
          disabled: true,
          modelValue: textValue4.value,
          class: "data-v-fcd94c07"
        }),
        j: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-textarea 多行文本",
          class: "data-v-fcd94c07"
        }),
        k: common_vendor.gei(_ctx, ""),
        l: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-fcd94c07"
        }),
        m: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fcd94c07"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/textarea/textarea.js.map
