"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_dropdown_item_1 = common_vendor.resolveComponent("up-dropdown-item");
  const _easycom_up_dropdown_1 = common_vendor.resolveComponent("up-dropdown");
  (_easycom_NavBar_1 + _easycom_up_dropdown_item_1 + _easycom_up_dropdown_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_dropdown_item = () => "../../../../../uni_modules/uview-ultra/components/up-dropdown-item/up-dropdown-item.js";
const _easycom_up_dropdown = () => "../../../../../uni_modules/uview-ultra/components/up-dropdown/up-dropdown.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_dropdown_item + _easycom_up_dropdown + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "dropdown",
  setup(__props) {
    const value1 = common_vendor.ref(1);
    const value2 = common_vendor.ref(2);
    const value3 = common_vendor.ref(1);
    const value4 = common_vendor.ref(2);
    const options1 = common_vendor.ref([
      new common_vendor.UTSJSONObject({ label: "默认", value: 1 }),
      new common_vendor.UTSJSONObject({ label: "最新", value: 2 }),
      new common_vendor.UTSJSONObject({ label: "最热", value: 3 })
    ]);
    const options2 = common_vendor.ref([
      new common_vendor.UTSJSONObject({ label: "默认排序", value: 1 }),
      new common_vendor.UTSJSONObject({ label: "距离优先", value: 2 }),
      new common_vendor.UTSJSONObject({ label: "价格优先", value: 3 })
    ]);
    const options3 = common_vendor.ref([
      new common_vendor.UTSJSONObject({ label: "全部", value: 1 }),
      new common_vendor.UTSJSONObject({ label: "中餐", value: 2 }),
      new common_vendor.UTSJSONObject({ label: "西餐", value: 3 })
    ]);
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Dropdown 下拉菜单",
          ["auto-back"]: true,
          class: "data-v-def49332"
        }),
        b: common_vendor.o(($event) => {
          return value1.value = $event;
        }, "b6"),
        c: common_vendor.p({
          title: "属性",
          options: options1.value,
          modelValue: value1.value,
          class: "data-v-def49332"
        }),
        d: common_vendor.o(($event) => {
          return value2.value = $event;
        }, "6a"),
        e: common_vendor.p({
          title: "排序",
          options: options2.value,
          modelValue: value2.value,
          class: "data-v-def49332"
        }),
        f: common_vendor.p({
          class: "data-v-def49332"
        }),
        g: common_vendor.o(($event) => {
          return value3.value = $event;
        }, "96"),
        h: common_vendor.p({
          title: "排序",
          options: options2.value,
          modelValue: value3.value,
          class: "data-v-def49332"
        }),
        i: common_vendor.o(($event) => {
          return value4.value = $event;
        }, "7d"),
        j: common_vendor.p({
          title: "筛选",
          options: options3.value,
          modelValue: value4.value,
          class: "data-v-def49332"
        }),
        k: common_vendor.p({
          ["active-color"]: "#fa3534",
          class: "data-v-def49332"
        }),
        l: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-dropdown 下拉菜单",
          class: "data-v-def49332"
        }),
        m: common_vendor.gei(_ctx, ""),
        n: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-def49332"
        }),
        o: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-def49332"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/dropdown/dropdown.js.map
