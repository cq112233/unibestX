"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_code_input_1 = common_vendor.resolveComponent("rice-code-input");
  (_easycom_NavBar_1 + _easycom_rice_code_input_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_code_input = () => "../../../../../uni_modules/rice-ui/components/rice-code-input/rice-code-input.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_code_input + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "code-input",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const code1 = common_vendor.ref("");
    const code2 = common_vendor.ref("123");
    const code3 = common_vendor.ref("8888");
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "CodeInput 验证码",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-928238a6"
        }),
        b: currentTheme.value,
        c: common_vendor.o(($event) => {
          return common_vendor.isRef(code1) ? code1.value = $event : null;
        }, "c5"),
        d: common_vendor.p({
          maxlength: 4,
          color: currentTheme.value,
          mode: "box",
          modelValue: common_vendor.unref(code1),
          class: "data-v-928238a6"
        }),
        e: common_vendor.t(common_vendor.unref(code1)),
        f: currentTheme.value,
        g: common_vendor.o(($event) => {
          return common_vendor.isRef(code2) ? code2.value = $event : null;
        }, "ea"),
        h: common_vendor.p({
          maxlength: 6,
          color: currentTheme.value,
          mode: "line",
          modelValue: common_vendor.unref(code2),
          class: "data-v-928238a6"
        }),
        i: common_vendor.t(common_vendor.unref(code2)),
        j: currentTheme.value,
        k: common_vendor.o(($event) => {
          return common_vendor.isRef(code3) ? code3.value = $event : null;
        }, "e8"),
        l: common_vendor.p({
          maxlength: 4,
          color: currentTheme.value,
          dot: true,
          modelValue: common_vendor.unref(code3),
          class: "data-v-928238a6"
        }),
        m: common_vendor.gei(_ctx, ""),
        n: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-928238a6"
        }),
        o: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-928238a6"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/code-input/code-input.js.map
