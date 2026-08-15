"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_code_input_1 = common_vendor.resolveComponent("up-code-input");
  (_easycom_NavBar_1 + _easycom_up_code_input_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_code_input = () => "../../../../../uni_modules/uview-ultra/components/up-code-input/up-code-input.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_code_input + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "code-input",
  setup(__props) {
    const codeInputValue1 = common_vendor.ref("");
    const codeInputValue2 = common_vendor.ref("");
    const codeInputValue3 = common_vendor.ref("");
    function onCodeInputFinish(val) {
      common_vendor.index.showToast({ title: `输入的验证码为: ${val}`, icon: "none" });
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "CodeInput 验证码",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-62d19361"
        }),
        b: common_vendor.o(onCodeInputFinish, "58"),
        c: common_vendor.o(($event) => {
          return codeInputValue1.value = $event;
        }, "fd"),
        d: common_vendor.p({
          maxlength: 6,
          mode: "box",
          modelValue: codeInputValue1.value,
          class: "data-v-62d19361"
        }),
        e: common_vendor.o(($event) => {
          return codeInputValue2.value = $event;
        }, "83"),
        f: common_vendor.p({
          maxlength: 4,
          mode: "line",
          modelValue: codeInputValue2.value,
          class: "data-v-62d19361"
        }),
        g: common_vendor.o(($event) => {
          return codeInputValue3.value = $event;
        }, "80"),
        h: common_vendor.p({
          maxlength: 4,
          mode: "box",
          space: "10",
          color: "#2979ff",
          ["border-color"]: "#2979ff",
          modelValue: codeInputValue3.value,
          class: "data-v-62d19361"
        }),
        i: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-code-input 验证码",
          class: "data-v-62d19361"
        }),
        j: common_vendor.gei(_ctx, ""),
        k: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-62d19361"
        }),
        l: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-62d19361"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/code-input/code-input.js.map
