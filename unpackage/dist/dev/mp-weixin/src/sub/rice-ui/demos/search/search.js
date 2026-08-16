"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_search_1 = common_vendor.resolveComponent("rice-search");
  (_easycom_NavBar_1 + _easycom_rice_search_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_search = () => "../../../../../uni_modules/rice-ui/components/rice-search/rice-search.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_search + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "search",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const searchValue1 = common_vendor.ref("");
    const searchValue2 = common_vendor.ref("");
    function onSearch(val) {
      common_vendor.index.showToast({
        title: `搜索内容: ${val}`,
        icon: "none"
      });
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Search 搜索框",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-940a57a7"
        }),
        b: currentTheme.value,
        c: common_vendor.o(onSearch, "42"),
        d: common_vendor.o(($event) => {
          return common_vendor.isRef(searchValue1) ? searchValue1.value = $event : null;
        }, "09"),
        e: common_vendor.p({
          placeholder: "请输入搜索关键词",
          ["action-style"]: {
            color: currentTheme.value
          },
          modelValue: common_vendor.unref(searchValue1),
          class: "data-v-940a57a7"
        }),
        f: currentTheme.value,
        g: common_vendor.o(onSearch, "61"),
        h: common_vendor.o(onSearch, "89"),
        i: common_vendor.o(($event) => {
          return common_vendor.isRef(searchValue2) ? searchValue2.value = $event : null;
        }, "ae"),
        j: common_vendor.p({
          placeholder: "请输入搜索内容",
          shape: "round",
          ["show-action"]: true,
          ["action-text"]: "搜索",
          ["action-style"]: {
            color: currentTheme.value
          },
          modelValue: common_vendor.unref(searchValue2),
          class: "data-v-940a57a7"
        }),
        k: common_vendor.gei(_ctx, ""),
        l: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-940a57a7"
        }),
        m: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-940a57a7"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/search/search.js.map
