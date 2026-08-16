"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_input_1 = common_vendor.resolveComponent("rice-input");
  (_easycom_NavBar_1 + _easycom_rice_input_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_input = () => "../../../../../uni_modules/rice-ui/components/rice-input/rice-input.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_input + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "input",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const text1 = common_vendor.ref("");
    const text2 = common_vendor.ref("Hello Rice UI");
    const text3 = common_vendor.ref("123456");
    const text4 = common_vendor.ref("");
    const text5 = common_vendor.ref("");
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Input 输入框",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-6b1fe886"
        }),
        b: currentTheme.value,
        c: common_vendor.o(($event) => {
          return common_vendor.isRef(text1) ? text1.value = $event : null;
        }, "06"),
        d: common_vendor.p({
          placeholder: "请输入文本",
          modelValue: common_vendor.unref(text1),
          class: "data-v-6b1fe886"
        }),
        e: common_vendor.o(($event) => {
          return common_vendor.isRef(text2) ? text2.value = $event : null;
        }, "bf"),
        f: common_vendor.p({
          placeholder: "可一键清空",
          clearable: true,
          modelValue: common_vendor.unref(text2),
          class: "data-v-6b1fe886"
        }),
        g: common_vendor.o(($event) => {
          return common_vendor.isRef(text3) ? text3.value = $event : null;
        }, "52"),
        h: common_vendor.p({
          placeholder: "密码输入框",
          ["show-password"]: true,
          modelValue: common_vendor.unref(text3),
          class: "data-v-6b1fe886"
        }),
        i: common_vendor.p({
          disabled: true,
          placeholder: "禁用状态输入框",
          class: "data-v-6b1fe886"
        }),
        j: currentTheme.value,
        k: common_vendor.o(($event) => {
          return common_vendor.isRef(text4) ? text4.value = $event : null;
        }, "5f"),
        l: common_vendor.p({
          placeholder: "前缀搜索图标",
          ["prefix-icon"]: "search",
          modelValue: common_vendor.unref(text4),
          class: "data-v-6b1fe886"
        }),
        m: common_vendor.o(($event) => {
          return common_vendor.isRef(text5) ? text5.value = $event : null;
        }, "f6"),
        n: common_vendor.p({
          placeholder: "后缀眼睛图标",
          ["suffix-icon"]: "eyes",
          modelValue: common_vendor.unref(text5),
          class: "data-v-6b1fe886"
        }),
        o: common_vendor.gei(_ctx, ""),
        p: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-6b1fe886"
        }),
        q: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6b1fe886"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/input/input.js.map
