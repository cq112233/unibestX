"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_checkbox_1 = common_vendor.resolveComponent("rice-checkbox");
  const _easycom_rice_checkbox_group_1 = common_vendor.resolveComponent("rice-checkbox-group");
  (_easycom_NavBar_1 + _easycom_rice_checkbox_1 + _easycom_rice_checkbox_group_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_checkbox = () => "../../../../../uni_modules/rice-ui/components/rice-checkbox/rice-checkbox.js";
const _easycom_rice_checkbox_group = () => "../../../../../uni_modules/rice-ui/components/rice-checkbox-group/rice-checkbox-group.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_checkbox + _easycom_rice_checkbox_group + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "checkbox",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const checked1 = common_vendor.ref(true);
    const checked2 = common_vendor.ref(false);
    const checked3 = common_vendor.ref(true);
    const groupValues = common_vendor.ref(["apple"]);
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Checkbox 复选框",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-73a22922"
        }),
        b: currentTheme.value,
        c: common_vendor.o(($event) => {
          return common_vendor.isRef(checked1) ? checked1.value = $event : null;
        }, "a1"),
        d: common_vendor.p({
          ["checked-color"]: currentTheme.value,
          label: "基础复选框 1",
          modelValue: common_vendor.unref(checked1),
          class: "data-v-73a22922"
        }),
        e: common_vendor.o(($event) => {
          return common_vendor.isRef(checked2) ? checked2.value = $event : null;
        }, "e6"),
        f: common_vendor.p({
          label: "自定义颜色",
          ["checked-color"]: "#ee0a24",
          modelValue: common_vendor.unref(checked2),
          class: "data-v-73a22922"
        }),
        g: common_vendor.o(($event) => {
          return common_vendor.isRef(checked3) ? checked3.value = $event : null;
        }, "f3"),
        h: common_vendor.p({
          ["checked-color"]: currentTheme.value,
          label: "方形复选框",
          shape: "square",
          modelValue: common_vendor.unref(checked3),
          class: "data-v-73a22922"
        }),
        i: common_vendor.p({
          disabled: true,
          value: true,
          ["checked-color"]: currentTheme.value,
          label: "禁用状态",
          class: "data-v-73a22922"
        }),
        j: currentTheme.value,
        k: common_vendor.p({
          value: "apple",
          label: "苹果 🍎",
          ["checked-color"]: currentTheme.value,
          class: "data-v-73a22922"
        }),
        l: common_vendor.p({
          value: "banana",
          label: "香蕉 🍌",
          ["checked-color"]: currentTheme.value,
          class: "data-v-73a22922"
        }),
        m: common_vendor.p({
          value: "orange",
          label: "橙子 🍊",
          ["checked-color"]: currentTheme.value,
          class: "data-v-73a22922"
        }),
        n: common_vendor.o(($event) => {
          return common_vendor.isRef(groupValues) ? groupValues.value = $event : null;
        }, "4d"),
        o: common_vendor.p({
          ["checked-color"]: currentTheme.value,
          modelValue: common_vendor.unref(groupValues),
          class: "data-v-73a22922"
        }),
        p: common_vendor.t(common_vendor.unref(groupValues)),
        q: common_vendor.gei(_ctx, ""),
        r: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-73a22922"
        }),
        s: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-73a22922"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/checkbox/checkbox.js.map
