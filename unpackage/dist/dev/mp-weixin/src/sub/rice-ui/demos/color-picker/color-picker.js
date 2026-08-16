"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_color_picker_1 = common_vendor.resolveComponent("rice-color-picker");
  (_easycom_NavBar_1 + _easycom_rice_color_picker_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_color_picker = () => "../../../../../uni_modules/rice-ui/components/rice-color-picker/rice-color-picker.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_color_picker + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "color-picker",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const selectedColor = common_vendor.ref(appStore.state.theme);
    common_vendor.watch(currentTheme, (newVal) => {
      selectedColor.value = newVal;
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "ColorPicker 颜色选择",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-4714a8b3"
        }),
        b: currentTheme.value,
        c: common_vendor.o(($event) => {
          return common_vendor.isRef(selectedColor) ? selectedColor.value = $event : null;
        }, "f6"),
        d: common_vendor.p({
          ["show-alpha"]: true,
          modelValue: common_vendor.unref(selectedColor),
          class: "data-v-4714a8b3"
        }),
        e: common_vendor.t(common_vendor.unref(selectedColor)),
        f: common_vendor.unref(selectedColor),
        g: common_vendor.gei(_ctx, ""),
        h: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-4714a8b3"
        }),
        i: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4714a8b3"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/color-picker/color-picker.js.map
