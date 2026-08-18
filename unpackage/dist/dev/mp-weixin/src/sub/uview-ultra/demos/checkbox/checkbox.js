"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_checkbox_1 = common_vendor.resolveComponent("up-checkbox");
  const _easycom_up_checkbox_group_1 = common_vendor.resolveComponent("up-checkbox-group");
  (_easycom_NavBar_1 + _easycom_up_checkbox_1 + _easycom_up_checkbox_group_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_checkbox = () => "../../../../../uni_modules/uview-ultra/components/up-checkbox/up-checkbox.js";
const _easycom_up_checkbox_group = () => "../../../../../uni_modules/uview-ultra/components/up-checkbox-group/up-checkbox-group.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_checkbox + _easycom_up_checkbox_group + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "checkbox",
  setup(__props) {
    const checkboxValue1 = common_vendor.ref(["apple"]);
    const checkboxValue2 = common_vendor.ref(["apple"]);
    const checkboxValue3 = common_vendor.ref(["circle"]);
    const checkboxValue4 = common_vendor.ref([]);
    function checkboxChange(n) {
      common_vendor.index.__f__("log", "at src/sub/uview-ultra/demos/checkbox/checkbox.uvue:48", "checkbox change", n);
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-checkbox 复选框",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-9ec856da"
        }),
        b: common_vendor.p({
          name: "apple",
          label: "苹果",
          class: "mb-10px mr-20px data-v-9ec856da"
        }),
        c: common_vendor.p({
          name: "banana",
          label: "香蕉",
          class: "mb-10px mr-20px data-v-9ec856da"
        }),
        d: common_vendor.o(checkboxChange, "cf"),
        e: common_vendor.o(($event) => {
          return checkboxValue1.value = $event;
        }, "e2"),
        f: common_vendor.p({
          modelValue: checkboxValue1.value,
          class: "data-v-9ec856da"
        }),
        g: common_vendor.p({
          name: "apple",
          label: "苹果(禁用)",
          disabled: true,
          class: "mb-10px mr-20px data-v-9ec856da"
        }),
        h: common_vendor.p({
          name: "banana",
          label: "香蕉(未禁用)",
          class: "mb-10px mr-20px data-v-9ec856da"
        }),
        i: common_vendor.o(($event) => {
          return checkboxValue2.value = $event;
        }, "ad"),
        j: common_vendor.p({
          modelValue: checkboxValue2.value,
          class: "data-v-9ec856da"
        }),
        k: common_vendor.p({
          name: "circle",
          label: "圆形",
          shape: "circle",
          ["active-color"]: "#fa3534",
          class: "mb-10px mr-20px data-v-9ec856da"
        }),
        l: common_vendor.p({
          name: "square",
          label: "方形",
          shape: "square",
          ["active-color"]: "#ff9900",
          class: "mb-10px mr-20px data-v-9ec856da"
        }),
        m: common_vendor.o(($event) => {
          return checkboxValue3.value = $event;
        }, "23"),
        n: common_vendor.p({
          modelValue: checkboxValue3.value,
          class: "data-v-9ec856da"
        }),
        o: common_vendor.p({
          name: "label",
          label: "只能点框框",
          ["label-disabled"]: true,
          class: "mb-10px mr-20px data-v-9ec856da"
        }),
        p: common_vendor.o(($event) => {
          return checkboxValue4.value = $event;
        }, "73"),
        q: common_vendor.p({
          modelValue: checkboxValue4.value,
          class: "data-v-9ec856da"
        }),
        r: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-checkbox 复选框",
          class: "data-v-9ec856da"
        }),
        s: common_vendor.gei(_ctx, ""),
        t: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-9ec856da"
        }),
        v: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9ec856da"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/checkbox/checkbox.js.map
