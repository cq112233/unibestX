import { u as updateAvailableHeight, A as AppKuHeightProps } from "./src/utils/systemInfo.js";
import { T as Tabbar } from "./src/tabbar/index.js";
import { C as CustomCapsuleTabbar } from "./src/tabbar/custom/index.js";
import { c as customTabbarEnable, a as isCapsuleTabbar, s as selectedTabbarStrategy } from "./src/tabbar/helper/index.js";
import "./src/store/index.js";
import { g as getThemeTokens, a as applyNavbarTheme } from "./src/utils/theme.js";
import { r as registerToast, u as unregisterToast } from "./src/utils/toast.js";
import { u as useAppStore } from "./src/store/app.js";
import { i as isPageTabbar, s as syncCurIdxByCurrentPage } from "./src/tabbar/helper/store.js";
import { _ as _export_sfc } from "./plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponent: _createSharedDataComponent, createSharedDataIf: _createSharedDataIf } = globalThis.Vue;
const __className = "GenAppku";
const { computed, nextTick, onMounted, onUnmounted, ref, watch } = globalThis.Vue;
const { onShow } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "App.ku.uvue",
  __name: "App.ku",
  props: {
    /** 是否显示左侧返回按钮（默认 true） */
    showBack: {
      type: Boolean,
      default: true
    },
    /** 是否隐藏导航栏（默认 false） */
    hideNavbar: {
      type: Boolean,
      default: false
    },
    /** 页面布局模板标识（非 navbar 布局按无导航处理，参与可用高度计算时不扣状态栏/导航栏） */
    layout: {
      type: String,
      default: ""
    },
    /** 是否启用内容区域的自定义下拉刷新 */
    enablePullDownRefresh: {
      type: Boolean,
      default: false
    },
    /** 页面根容器自定义类名（页面 customPageClass） */
    customPageClass: {
      type: String,
      default: ""
    },
    /** 页面根容器自定义行内样式（页面 customPageStyle） */
    customPageStyle: {
      type: String,
      default: ""
    },
    /** 页面 style 完整配置对象（未拍平：navigationStyle / navigationBarTitleText / navigationBarBackgroundColor 等） */
    pageStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenAppkuSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const appStore = useAppStore();
    const pageStyleObj = computed(() => {
      var _a;
      return (_a = props.pageStyle) !== null && _a !== void 0 ? _a : new UTSJSONObject({});
    });
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
    onMounted(() => {
      applyNavbarTheme(appStore.state.isDark);
      try {
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
      } catch (_e) {
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
    computed(() => {
      var _a;
      const textStyleFromStyle = (_a = pageStyleObj.value.navigationStyle) !== null && _a !== void 0 ? _a : "";
      if (textStyleFromStyle.length > 0) {
        if (textStyleFromStyle == "custom") {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    });
    onShow(() => {
      uni.__f__("log", "at App.ku.uvue:187", "AppKu:onShow");
      setTimeout(() => {
        var _a;
        updateAvailableHeight(new AppKuHeightProps({
          hideNavbar: props.hideNavbar,
          pageStyle: (_a = props.pageStyle) !== null && _a !== void 0 ? _a : new UTSJSONObject({}),
          layout: props.layout
        }), selectedTabbarStrategy);
      }, 150);
    });
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 4, ["weapp-tw-border root-container flex flex-col flex-1", { dark: _unref(appStore).state.isDark }]);
        _setSharedDataStyle(__sharedData, 5, ["flex: 1; display: flex; flex-direction: column;", themeStyle.value]);
      });
      _createSharedDataSlot("default", null, null);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(_unref(customTabbarEnable) && isCurrentPageTabbar.value));
      }, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 1, _toSharedDataBoolean(_unref(isCapsuleTabbar)));
        }, () => {
          const n6 = _createSharedDataComponent(CustomCapsuleTabbar, "ca370b2a");
          _setSharedData(__sharedData, 2, n6.sharedData);
        }, () => {
          const n8 = _createSharedDataComponent(Tabbar, "ca3703e0");
          _setSharedData(__sharedData, 3, n8.sharedData);
        }, 261);
      });
      return __sharedData;
    };
  }
});
const _style_0 = {"flex":{"":{"display":"flex"}},"flex-col":{"":{"flexDirection":"column"}},"flex-1":{"":{"flex":"1"}}};
const _style_1 = {};
const AppKu = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  AppKu as A
};
