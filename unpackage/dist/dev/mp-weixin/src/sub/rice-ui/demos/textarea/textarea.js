"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_textarea_1 = common_vendor.resolveComponent("rice-textarea");
  (_easycom_NavBar_1 + _easycom_rice_textarea_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_textarea = () => "../../../../../uni_modules/rice-ui/components/rice-textarea/rice-textarea.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_textarea + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "textarea",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const textVal1 = common_vendor.ref("");
    const textVal2 = common_vendor.ref("");
    const textVal3 = common_vendor.ref("");
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Textarea 文本框",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-06d9c5e0"
        }),
        b: currentTheme.value,
        c: common_vendor.o(($event) => {
          return common_vendor.isRef(textVal1) ? textVal1.value = $event : null;
        }, "36"),
        d: common_vendor.p({
          placeholder: "请输入您的宝贵建议与反馈...",
          modelValue: common_vendor.unref(textVal1),
          class: "data-v-06d9c5e0"
        }),
        e: currentTheme.value,
        f: common_vendor.o(($event) => {
          return common_vendor.isRef(textVal2) ? textVal2.value = $event : null;
        }, "12"),
        g: common_vendor.p({
          placeholder: "请输入详细描述",
          maxlength: 100,
          ["show-word-limit"]: true,
          height: "100px",
          modelValue: common_vendor.unref(textVal2),
          class: "data-v-06d9c5e0"
        }),
        h: currentTheme.value,
        i: common_vendor.o(($event) => {
          return common_vendor.isRef(textVal3) ? textVal3.value = $event : null;
        }, "91"),
        j: common_vendor.p({
          placeholder: "随着内容自动增高",
          ["auto-height"]: true,
          modelValue: common_vendor.unref(textVal3),
          class: "data-v-06d9c5e0"
        }),
        k: common_vendor.gei(_ctx, ""),
        l: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-06d9c5e0"
        }),
        m: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-06d9c5e0"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/textarea/textarea.js.map
