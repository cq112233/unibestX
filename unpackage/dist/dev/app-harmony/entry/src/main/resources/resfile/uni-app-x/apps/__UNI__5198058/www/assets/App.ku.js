import { _ as __easycom_0 } from "./uni_modules/uview-ultra/components/up-toast/up-toast.js";
import { T as Tabbar } from "./src/tabbar/index.js";
import "./src/store/index.js";
import { i as isPageTabbar, s as syncCurIdxByCurrentPage } from "./src/tabbar/store.js";
import { r as registerToast, u as unregisterToast } from "./src/utils/toast.js";
import { g as getThemeTokens, a as applyNavbarTheme } from "./src/utils/theme.js";
import { u as useAppStore } from "./src/store/app.js";
import { _ as _export_sfc } from "./plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponent: _createSharedDataComponent, createSharedDataIf: _createSharedDataIf, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback } = globalThis.Vue;
const __className = "GenAppku";
const { computed, nextTick, onBeforeMount, onMounted, onUnmounted, ref, watch } = globalThis.Vue;
const { onShow } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "04fa470d",
  __className,
  __filename: "App.ku.uvue",
  __name: "App.ku",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenAppkuSharedData", sharedDataClassId: 0 })));
    const appStore = useAppStore();
    const themeStyle = computed(() => {
      const dark = appStore.state.isDark;
      return new UTSJSONObject({
        "--theme-color": appStore.state.theme,
        "--bg-color": getThemeTokens(dark).bgContent,
        "--text-color": dark ? "#e2e8f0" : "#1e293b",
        "--text-secondary": dark ? "#94a3b8" : "#64748b",
        "--card-bg": dark ? "#1e293b" : "#ffffff",
        "--border-color": dark ? "#334155" : "#e2e8f0"
      });
    });
    const isCurrentPageTabbar = ref(false);
    const uToastRef = ref(null);
    watch(uToastRef, (val = null) => {
      if (val != null) {
        registerToast(val);
      }
    }, { immediate: true });
    onBeforeMount(() => {
      const pages = getCurrentPages();
      if (pages.length > 0) {
        const route = pages[pages.length - 1].route;
        if (route != null && route.length > 0) {
          const path = route.startsWith("/") ? route : `/${route}`;
          const isTabbar = isPageTabbar(path);
          isCurrentPageTabbar.value = isTabbar;
          if (isTabbar) {
            syncCurIdxByCurrentPage();
          }
        }
      }
      if (uToastRef.value != null) {
        registerToast(uToastRef.value);
      }
    });
    onMounted(() => {
      if (uToastRef.value != null) {
        registerToast(uToastRef.value);
      }
      nextTick(() => {
        if (uToastRef.value != null) {
          registerToast(uToastRef.value);
        }
      });
    });
    onUnmounted(() => {
      if (uToastRef.value != null) {
        unregisterToast(uToastRef.value);
      }
    });
    onShow(() => {
      if (uToastRef.value != null) {
        registerToast(uToastRef.value);
      }
      applyNavbarTheme(appStore.state.isDark);
    });
    watch(() => {
      return appStore.state.isDark;
    }, (newVal) => {
      applyNavbarTheme(newVal);
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_up_toast = __easycom_0;
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 3, ["root-container flex flex-col flex-1", { dark: _unref(appStore).state.isDark }]);
        _setSharedDataStyle(__sharedData, 4, ["flex: 1;", themeStyle.value]);
      });
      _createSharedDataSlot("default", null, null);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(isCurrentPageTabbar.value));
      }, () => {
        const n4 = _createSharedDataComponent(Tabbar, "ca3719e6");
        _setSharedData(__sharedData, 1, n4.sharedData);
      });
      const n5 = _createSharedDataComponentWithFallback(_component_up_toast, "ca3712e6");
      _setSharedData(__sharedData, 2, n5?.sharedData);
      _setTemplateRef(n5, uToastRef, null, "uToastRef");
      return __sharedData;
    };
  }
});
const _style_0 = {"flex":{"":{"display":"flex"}},"flex-col":{"":{"flexDirection":"column"}},"flex-1":{"":{"flex":"1"}}};
const AppKu = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  AppKu as A
};
//# sourceMappingURL=App.ku.js.map
