"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_switch_1 = common_vendor.resolveComponent("rice-switch");
  (_easycom_NavBar_1 + _easycom_rice_switch_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_switch = () => "../../../../../uni_modules/rice-ui/components/rice-switch/rice-switch.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_switch + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "switch",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const switchVal1 = common_vendor.ref(true);
    const switchVal2 = common_vendor.ref(true);
    const switchVal3 = common_vendor.ref(false);
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Switch 开关",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-c668864e"
        }),
        b: currentTheme.value,
        c: common_vendor.o(($event) => {
          return common_vendor.isRef(switchVal1) ? switchVal1.value = $event : null;
        }, "c3"),
        d: common_vendor.p({
          ["active-color"]: currentTheme.value,
          modelValue: common_vendor.unref(switchVal1),
          class: "data-v-c668864e"
        }),
        e: currentTheme.value,
        f: common_vendor.o(($event) => {
          return common_vendor.isRef(switchVal2) ? switchVal2.value = $event : null;
        }, "bc"),
        g: common_vendor.p({
          ["active-color"]: currentTheme.value,
          modelValue: common_vendor.unref(switchVal2),
          class: "data-v-c668864e"
        }),
        h: common_vendor.o(($event) => {
          return common_vendor.isRef(switchVal3) ? switchVal3.value = $event : null;
        }, "10"),
        i: common_vendor.p({
          size: "20px",
          ["active-color"]: currentTheme.value,
          modelValue: common_vendor.unref(switchVal3),
          class: "data-v-c668864e"
        }),
        j: currentTheme.value,
        k: common_vendor.p({
          ["model-value"]: true,
          disabled: true,
          ["active-color"]: currentTheme.value,
          class: "data-v-c668864e"
        }),
        l: common_vendor.p({
          ["model-value"]: true,
          loading: true,
          ["active-color"]: currentTheme.value,
          class: "data-v-c668864e"
        }),
        m: common_vendor.gei(_ctx, ""),
        n: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-c668864e"
        }),
        o: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c668864e"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/switch/switch.js.map
