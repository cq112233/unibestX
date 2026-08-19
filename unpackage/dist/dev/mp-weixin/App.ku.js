"use strict";
const common_vendor = require("./common/vendor.js");
require("./src/store/index.js");
const src_tabbar_store = require("./src/tabbar/store.js");
const src_utils_toast = require("./src/utils/toast.js");
const src_utils_theme = require("./src/utils/theme.js");
const src_store_app = require("./src/store/app.js");
if (!Array) {
  const _easycom_up_toast_1 = common_vendor.resolveComponent("up-toast");
  _easycom_up_toast_1();
}
const _easycom_up_toast = () => "./uni_modules/uview-ultra/components/up-toast/up-toast.js";
if (!Math) {
  (common_vendor.unref(Tabbar) + _easycom_up_toast)();
}
const Tabbar = () => "./src/tabbar/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "App.ku",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const themeStyle = common_vendor.computed(() => {
      const dark = appStore.state.isDark;
      return new common_vendor.UTSJSONObject({
        "--theme-color": appStore.state.theme,
        "--bg-color": src_utils_theme.getThemeTokens(dark).bgContent,
        "--text-color": dark ? "#e2e8f0" : "#1e293b",
        "--text-secondary": dark ? "#94a3b8" : "#64748b",
        "--card-bg": dark ? "#1e293b" : "#ffffff",
        "--border-color": dark ? "#334155" : "#e2e8f0"
      });
    });
    const isCurrentPageTabbar = common_vendor.ref(false);
    const uToastRef = common_vendor.ref(null);
    common_vendor.watch(uToastRef, (val = null) => {
      if (val != null) {
        src_utils_toast.registerToast(val);
      }
    }, { immediate: true });
    common_vendor.onBeforeMount(() => {
      const pages = getCurrentPages();
      if (pages.length > 0) {
        const route = pages[pages.length - 1].route;
        if (route != null && route.length > 0) {
          const path = route.startsWith("/") ? route : `/${route}`;
          const isTabbar = src_tabbar_store.isPageTabbar(path);
          isCurrentPageTabbar.value = isTabbar;
          if (isTabbar) {
            src_tabbar_store.syncCurIdxByCurrentPage();
          }
        }
      }
      if (uToastRef.value != null) {
        src_utils_toast.registerToast(uToastRef.value);
      }
    });
    common_vendor.onMounted(() => {
      if (uToastRef.value != null) {
        src_utils_toast.registerToast(uToastRef.value);
      }
      common_vendor.nextTick$1(() => {
        if (uToastRef.value != null) {
          src_utils_toast.registerToast(uToastRef.value);
        }
      });
    });
    common_vendor.onUnmounted(() => {
      if (uToastRef.value != null) {
        src_utils_toast.unregisterToast(uToastRef.value);
      }
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: isCurrentPageTabbar.value
      }, isCurrentPageTabbar.value ? {
        b: common_vendor.p({
          class: "data-v-cf1c0046"
        })
      } : {}, {
        c: common_vendor.sr(uToastRef, "cf1c0046-1", {
          "k": "uToastRef"
        }),
        d: common_vendor.p({
          class: "r data-v-cf1c0046"
        }),
        e: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        f: common_vendor.s(themeStyle.value),
        g: common_vendor.s({
          "--status-bar-height": `${_ctx.u_s_b_h}px`,
          "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
        }),
        h: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      });
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-cf1c0046"]]);
wx.createComponent(Component);
//# sourceMappingURL=../.sourcemap/mp-weixin/App.ku.js.map
