"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_switch_1 = common_vendor.resolveComponent("up-switch");
  (_easycom_NavBar_1 + _easycom_up_switch_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_switch = () => "../../../../../uni_modules/uview-ultra/components/up-switch/up-switch.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_switch + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "switch",
  setup(__props) {
    const switchValue1 = common_vendor.ref(true);
    const switchValue2 = common_vendor.ref(true);
    const switchValue3 = common_vendor.ref(true);
    const switchValue4 = common_vendor.ref(true);
    const switchValue5 = common_vendor.ref(true);
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-switch 开关",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-77fc340c"
        }),
        b: common_vendor.o(($event) => {
          return switchValue1.value = $event;
        }, "73"),
        c: common_vendor.p({
          ["active-color"]: "#2979ff",
          modelValue: switchValue1.value,
          class: "data-v-77fc340c"
        }),
        d: common_vendor.t(switchValue1.value ? "已开启" : "已关闭"),
        e: common_vendor.o(($event) => {
          return switchValue2.value = $event;
        }, "7c"),
        f: common_vendor.p({
          disabled: true,
          modelValue: switchValue2.value,
          class: "data-v-77fc340c"
        }),
        g: common_vendor.o(($event) => {
          return switchValue3.value = $event;
        }, "01"),
        h: common_vendor.p({
          loading: true,
          modelValue: switchValue3.value,
          class: "data-v-77fc340c"
        }),
        i: common_vendor.o(($event) => {
          return switchValue4.value = $event;
        }, "ba"),
        j: common_vendor.p({
          ["active-color"]: "#fa3534",
          ["inactive-color"]: "#f56c6c",
          modelValue: switchValue4.value,
          class: "data-v-77fc340c"
        }),
        k: common_vendor.o(($event) => {
          return switchValue5.value = $event;
        }, "02"),
        l: common_vendor.p({
          size: "20",
          modelValue: switchValue5.value,
          class: "mr-10px data-v-77fc340c"
        }),
        m: common_vendor.o(($event) => {
          return switchValue5.value = $event;
        }, "22"),
        n: common_vendor.p({
          size: "28",
          modelValue: switchValue5.value,
          class: "data-v-77fc340c"
        }),
        o: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-switch 开关",
          class: "data-v-77fc340c"
        }),
        p: common_vendor.gei(_ctx, ""),
        q: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-77fc340c"
        }),
        r: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-77fc340c"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/switch/switch.js.map
