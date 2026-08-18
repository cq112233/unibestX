"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_search_1 = common_vendor.resolveComponent("up-search");
  (_easycom_NavBar_1 + _easycom_up_search_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_search = () => "../../../../../uni_modules/uview-ultra/components/up-search/up-search.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_search + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "search",
  setup(__props) {
    const searchValue1 = common_vendor.ref("");
    const searchValue2 = common_vendor.ref("");
    const searchValue3 = common_vendor.ref("");
    const searchValue4 = common_vendor.ref("");
    const searchValue5 = common_vendor.ref("");
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-search 搜索",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-11283430"
        }),
        b: common_vendor.o(($event) => {
          return searchValue1.value = $event;
        }, "2d"),
        c: common_vendor.p({
          placeholder: "请输入搜索关键字",
          modelValue: searchValue1.value,
          class: "data-v-11283430"
        }),
        d: common_vendor.o(($event) => {
          return searchValue2.value = $event;
        }, "b4"),
        e: common_vendor.p({
          placeholder: "隐藏操作按钮",
          ["show-action"]: false,
          modelValue: searchValue2.value,
          class: "data-v-11283430"
        }),
        f: common_vendor.o(($event) => {
          return searchValue3.value = $event;
        }, "e2"),
        g: common_vendor.p({
          shape: "square",
          ["search-icon-color"]: "#fa3534",
          placeholder: "方形搜索框",
          modelValue: searchValue3.value,
          class: "data-v-11283430"
        }),
        h: common_vendor.o(($event) => {
          return searchValue4.value = $event;
        }, "1f"),
        i: common_vendor.p({
          ["action-text"]: "搜一下",
          modelValue: searchValue4.value,
          class: "data-v-11283430"
        }),
        j: common_vendor.o(($event) => {
          return searchValue5.value = $event;
        }, "da"),
        k: common_vendor.p({
          disabled: true,
          placeholder: "禁用输入",
          modelValue: searchValue5.value,
          class: "data-v-11283430"
        }),
        l: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-search 搜索",
          class: "data-v-11283430"
        }),
        m: common_vendor.gei(_ctx, ""),
        n: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-11283430"
        }),
        o: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-11283430"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/search/search.js.map
