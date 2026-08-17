"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_number_box_1 = common_vendor.resolveComponent("up-number-box");
  (_easycom_NavBar_1 + _easycom_up_number_box_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_number_box = () => "../../../../../uni_modules/uview-ultra/components/up-number-box/up-number-box.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_number_box + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "number-box",
  setup(__props) {
    const numberValue1 = common_vendor.ref(1);
    const numberValue2 = common_vendor.ref(1);
    const numberValue3 = common_vendor.ref(5);
    const numberValue4 = common_vendor.ref(1);
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-number-box 步进器",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-f55e146d"
        }),
        b: common_vendor.o(($event) => {
          return numberValue1.value = $event;
        }, "75"),
        c: common_vendor.p({
          modelValue: numberValue1.value,
          class: "data-v-f55e146d"
        }),
        d: common_vendor.o(($event) => {
          return numberValue2.value = $event;
        }, "6f"),
        e: common_vendor.p({
          step: 2,
          modelValue: numberValue2.value,
          class: "data-v-f55e146d"
        }),
        f: common_vendor.o(($event) => {
          return numberValue3.value = $event;
        }, "f8"),
        g: common_vendor.p({
          min: 5,
          max: 10,
          modelValue: numberValue3.value,
          class: "data-v-f55e146d"
        }),
        h: common_vendor.o(($event) => {
          return numberValue4.value = $event;
        }, "a4"),
        i: common_vendor.p({
          disabled: true,
          modelValue: numberValue4.value,
          class: "data-v-f55e146d"
        }),
        j: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-number-box 步进器",
          class: "data-v-f55e146d"
        }),
        k: common_vendor.gei(_ctx, ""),
        l: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-f55e146d"
        }),
        m: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f55e146d"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/number-box/number-box.js.map
