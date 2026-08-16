"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_back_top_1 = common_vendor.resolveComponent("rice-back-top");
  (_easycom_NavBar_1 + _easycom_rice_back_top_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_back_top = () => "../../../../../uni_modules/rice-ui/components/rice-back-top/rice-back-top.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_back_top + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "back-top",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const currentMode = common_vendor.ref("round");
    const scrollTop = common_vendor.ref(0);
    const targetScrollTop = common_vendor.ref(0);
    function onScroll(e) {
      scrollTop.value = e.detail.scrollTop;
    }
    function scrollToDistance(top) {
      if (top == 0) {
        targetScrollTop.value = targetScrollTop.value == 0 ? 1e-4 : 0;
      } else {
        targetScrollTop.value = top;
      }
    }
    function onBackTopClick() {
      targetScrollTop.value = targetScrollTop.value == 0 ? 1e-4 : 0;
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "BackTop 返回顶部",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-ae7e5277"
        }),
        b: currentTheme.value,
        c: common_vendor.t(Math.round(scrollTop.value)),
        d: currentTheme.value,
        e: common_vendor.n(currentMode.value == "round" ? "text-white" : "text-__64748b_"),
        f: common_vendor.n(currentMode.value == "round" ? "bg-__334155_" : "bg-__f1f5f9_"),
        g: common_vendor.o(($event) => {
          return currentMode.value = "round";
        }, "9c"),
        h: common_vendor.n(currentMode.value == "half-round" ? "text-white" : "text-__64748b_"),
        i: common_vendor.n(currentMode.value == "half-round" ? "bg-__334155_" : "bg-__f1f5f9_"),
        j: common_vendor.o(($event) => {
          return currentMode.value = "half-round";
        }, "b2"),
        k: currentTheme.value,
        l: common_vendor.o(($event) => {
          return scrollToDistance(600);
        }, "d5"),
        m: common_vendor.o(($event) => {
          return scrollToDistance(0);
        }, "62"),
        n: currentTheme.value,
        o: common_vendor.f(40, (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: item
          };
        }),
        p: targetScrollTop.value,
        q: common_vendor.o(onScroll, "f5"),
        r: common_vendor.o(onBackTopClick, "67"),
        s: common_vendor.p({
          ["disabled-page-scroll"]: true,
          ["scroll-top"]: scrollTop.value,
          offset: 100,
          mode: currentMode.value,
          ["bg-color"]: currentTheme.value,
          ["text-color"]: "#ffffff",
          text: "顶部",
          class: "data-v-ae7e5277"
        }),
        t: common_vendor.gei(_ctx, ""),
        v: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-ae7e5277"
        }),
        w: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ae7e5277"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/back-top/back-top.js.map
