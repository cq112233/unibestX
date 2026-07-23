"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_radio_1 = common_vendor.resolveComponent("up-radio");
  const _easycom_up_radio_group_1 = common_vendor.resolveComponent("up-radio-group");
  (_easycom_NavBar_1 + _easycom_up_radio_1 + _easycom_up_radio_group_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_radio = () => "../../../../../uni_modules/uview-ultra/components/up-radio/up-radio.js";
const _easycom_up_radio_group = () => "../../../../../uni_modules/uview-ultra/components/up-radio-group/up-radio-group.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_radio + _easycom_up_radio_group + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "radio",
  setup(__props) {
    const radioValue = common_vendor.ref("apple");
    const radioValue2 = common_vendor.ref("apple");
    const radioValue3 = common_vendor.ref("square");
    const radioValue4 = common_vendor.ref("label");
    function radioChange(n) {
      common_vendor.index.__f__("log", "at src/sub/uview-ultra/demos/radio/radio.uvue:48", "radio change", n);
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-radio 单选框",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-26d4c8ed"
        }),
        b: common_vendor.p({
          name: "apple",
          label: "苹果",
          class: "mb-10px mr-20px data-v-26d4c8ed"
        }),
        c: common_vendor.p({
          name: "banana",
          label: "香蕉",
          class: "mb-10px mr-20px data-v-26d4c8ed"
        }),
        d: common_vendor.o(radioChange, "f8"),
        e: common_vendor.o(($event) => {
          return radioValue.value = $event;
        }, "7e"),
        f: common_vendor.p({
          modelValue: radioValue.value,
          class: "data-v-26d4c8ed"
        }),
        g: common_vendor.p({
          name: "apple",
          label: "苹果(禁用)",
          disabled: true,
          class: "mb-10px mr-20px data-v-26d4c8ed"
        }),
        h: common_vendor.p({
          name: "banana",
          label: "香蕉(未禁用)",
          class: "mb-10px mr-20px data-v-26d4c8ed"
        }),
        i: common_vendor.o(($event) => {
          return radioValue2.value = $event;
        }, "5b"),
        j: common_vendor.p({
          modelValue: radioValue2.value,
          class: "data-v-26d4c8ed"
        }),
        k: common_vendor.p({
          name: "square",
          label: "方形",
          shape: "square",
          ["active-color"]: "#fa3534",
          class: "mb-10px mr-20px data-v-26d4c8ed"
        }),
        l: common_vendor.p({
          name: "circle",
          label: "圆形",
          shape: "circle",
          ["active-color"]: "#ff9900",
          class: "mb-10px mr-20px data-v-26d4c8ed"
        }),
        m: common_vendor.o(($event) => {
          return radioValue3.value = $event;
        }, "7d"),
        n: common_vendor.p({
          modelValue: radioValue3.value,
          class: "data-v-26d4c8ed"
        }),
        o: common_vendor.p({
          name: "label",
          label: "只能点圈圈",
          ["label-disabled"]: true,
          class: "mb-10px mr-20px data-v-26d4c8ed"
        }),
        p: common_vendor.o(($event) => {
          return radioValue4.value = $event;
        }, "1e"),
        q: common_vendor.p({
          modelValue: radioValue4.value,
          class: "data-v-26d4c8ed"
        }),
        r: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-radio 单选框",
          class: "data-v-26d4c8ed"
        }),
        s: common_vendor.gei(_ctx, ""),
        t: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-26d4c8ed"
        }),
        v: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-26d4c8ed"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/radio/radio.js.map
