"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_stepper_1 = common_vendor.resolveComponent("rice-stepper");
  (_easycom_NavBar_1 + _easycom_rice_stepper_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_stepper = () => "../../../../../uni_modules/rice-ui/components/rice-stepper/rice-stepper.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_stepper + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "stepper",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const stepVal1 = common_vendor.ref(1);
    const stepVal2 = common_vendor.ref(2);
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Stepper 步进器",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-d2b46246"
        }),
        b: currentTheme.value,
        c: common_vendor.o(($event) => {
          return common_vendor.isRef(stepVal1) ? stepVal1.value = $event : null;
        }, "7e"),
        d: common_vendor.p({
          ["button-style"]: {
            color: currentTheme.value
          },
          modelValue: common_vendor.unref(stepVal1),
          class: "data-v-d2b46246"
        }),
        e: currentTheme.value,
        f: common_vendor.o(($event) => {
          return common_vendor.isRef(stepVal2) ? stepVal2.value = $event : null;
        }, "01"),
        g: common_vendor.p({
          min: 1,
          max: 10,
          step: 2,
          ["button-style"]: {
            color: currentTheme.value
          },
          modelValue: common_vendor.unref(stepVal2),
          class: "data-v-d2b46246"
        }),
        h: currentTheme.value,
        i: common_vendor.p({
          ["model-value"]: 5,
          disabled: true,
          class: "data-v-d2b46246"
        }),
        j: common_vendor.gei(_ctx, ""),
        k: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-d2b46246"
        }),
        l: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d2b46246"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/stepper/stepper.js.map
