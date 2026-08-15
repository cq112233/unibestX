"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_input_1 = common_vendor.resolveComponent("up-input");
  (_easycom_NavBar_1 + _easycom_up_input_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_input = () => "../../../../../uni_modules/uview-ultra/components/up-input/up-input.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_input + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "input",
  setup(__props) {
    const inputValue = common_vendor.ref("");
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-input 输入框",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-0e9315fc"
        }),
        b: common_vendor.o(($event) => {
          return inputValue.value = $event;
        }, "ab"),
        c: common_vendor.p({
          placeholder: "请输入内容",
          border: "surround",
          clearable: true,
          modelValue: inputValue.value,
          class: "data-v-0e9315fc"
        }),
        d: common_vendor.p({
          placeholder: "请输入搜索内容",
          ["prefix-icon"]: "search",
          ["suffix-icon"]: "scan",
          class: "data-v-0e9315fc"
        }),
        e: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-input 输入框",
          class: "data-v-0e9315fc"
        }),
        f: common_vendor.gei(_ctx, ""),
        g: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-0e9315fc"
        }),
        h: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0e9315fc"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/input/input.js.map
