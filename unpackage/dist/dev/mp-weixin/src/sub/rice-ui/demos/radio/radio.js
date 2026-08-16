"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_radio_1 = common_vendor.resolveComponent("rice-radio");
  const _easycom_rice_radio_group_1 = common_vendor.resolveComponent("rice-radio-group");
  (_easycom_NavBar_1 + _easycom_rice_radio_1 + _easycom_rice_radio_group_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_radio = () => "../../../../../uni_modules/rice-ui/components/rice-radio/rice-radio.js";
const _easycom_rice_radio_group = () => "../../../../../uni_modules/rice-ui/components/rice-radio-group/rice-radio-group.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_radio + _easycom_rice_radio_group + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "radio",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const selectedFruit = common_vendor.ref("apple");
    const selectedShape = common_vendor.ref("1");
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Radio 单选框",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-57dc1f32"
        }),
        b: currentTheme.value,
        c: common_vendor.p({
          value: "apple",
          label: "苹果 🍎",
          ["checked-color"]: currentTheme.value,
          class: "data-v-57dc1f32"
        }),
        d: common_vendor.p({
          value: "banana",
          label: "香蕉 🍌",
          ["checked-color"]: currentTheme.value,
          class: "data-v-57dc1f32"
        }),
        e: common_vendor.p({
          value: "orange",
          label: "橙子 🍊",
          ["checked-color"]: currentTheme.value,
          class: "data-v-57dc1f32"
        }),
        f: common_vendor.o(($event) => {
          return common_vendor.isRef(selectedFruit) ? selectedFruit.value = $event : null;
        }, "36"),
        g: common_vendor.p({
          ["checked-color"]: currentTheme.value,
          modelValue: common_vendor.unref(selectedFruit),
          class: "data-v-57dc1f32"
        }),
        h: common_vendor.t(common_vendor.unref(selectedFruit)),
        i: currentTheme.value,
        j: common_vendor.p({
          value: "1",
          label: "红色方形单选 1",
          class: "data-v-57dc1f32"
        }),
        k: common_vendor.p({
          value: "2",
          label: "红色方形单选 2",
          class: "data-v-57dc1f32"
        }),
        l: common_vendor.o(($event) => {
          return common_vendor.isRef(selectedShape) ? selectedShape.value = $event : null;
        }, "aa"),
        m: common_vendor.p({
          ["checked-color"]: "#ee0a24",
          shape: "square",
          modelValue: common_vendor.unref(selectedShape),
          class: "data-v-57dc1f32"
        }),
        n: currentTheme.value,
        o: common_vendor.p({
          disabled: true,
          value: true,
          ["checked-color"]: currentTheme.value,
          label: "禁用且选中",
          class: "data-v-57dc1f32"
        }),
        p: common_vendor.p({
          disabled: true,
          value: false,
          ["checked-color"]: currentTheme.value,
          label: "禁用且未选",
          class: "data-v-57dc1f32"
        }),
        q: common_vendor.gei(_ctx, ""),
        r: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-57dc1f32"
        }),
        s: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-57dc1f32"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/radio/radio.js.map
