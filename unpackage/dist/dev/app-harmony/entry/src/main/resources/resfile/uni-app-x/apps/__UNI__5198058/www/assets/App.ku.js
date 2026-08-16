import { T as Tabbar } from "./src/tabbar/index.js";
import "./src/store/index.js";
import { i as isPageTabbar, s as syncCurIdxByCurrentPage } from "./src/tabbar/store.js";
import { i as isDark } from "./uni_modules/rice-ui/libs/store/useConfig.js";
import "./uni_modules/rice-ui/libs/use/useCountDown/index.js";
import "./uni_modules/rice-ui/libs/use/useNamespace/index.js";
import "./uni_modules/rice-ui/libs/use/usePopup/index.js";
import "./uni_modules/rice-ui/libs/use/useRelation/useChildren.js";
import "./uni_modules/rice-ui/libs/use/useRelation/useParent.js";
import "./uni_modules/rice-ui/libs/use/useSafeArea/index.js";
import "./uni_modules/rice-ui/libs/use/useTouch/index.js";
import "./uni_modules/rice-ui/libs/plugin/coloruts/constant.js";
import "./uni_modules/rice-ui/libs/plugin/coloruts/type.js";
import "./uni_modules/rice-ui/libs/plugin/dateuts/type.js";
import "./uni_modules/rice-ui/libs/plugin/dateuts/locale.js";
import "./uni_modules/rice-ui/components/rice-action-sheet/type.js";
import "./uni_modules/rice-ui/components/rice-action-sheet/api.js";
import "./uni_modules/rice-ui/components/rice-button/type.js";
import "./uni_modules/rice-ui/components/rice-calendar/type.js";
import "./uni_modules/rice-ui/components/rice-cascader/type.js";
import "./uni_modules/rice-ui/components/rice-dialog/type.js";
import "./uni_modules/rice-ui/components/rice-dialog/api.js";
import "./uni_modules/rice-ui/components/rice-datetime-picker/type.js";
import "./uni_modules/rice-ui/components/rice-float-fab/type.js";
import "./uni_modules/rice-ui/components/rice-loading/type.js";
import "./uni_modules/rice-ui/components/rice-picker/type.js";
import "./uni_modules/rice-ui/libs/utils/basic.js";
import "./uni_modules/rice-ui/components/rice-swipe-actions-item/type.js";
import "./uni_modules/rice-ui/components/rice-tabs/type.js";
import "./uni_modules/rice-ui/components/rice-icon/font.js";
import "./uni_modules/rice-ui/components/rice-uploader/type.js";
import "./uni_modules/rice-ui/components/rice-form/index.js";
import "./uni_modules/rice-ui/components/rice-radio/type.js";
import "./uni_modules/rice-ui/components/rice-radio-group/index.js";
import "./uni_modules/rice-ui/components/rice-checkbox/type.js";
import "./uni_modules/rice-ui/components/rice-checkbox-group/index.js";
import "./uni_modules/rice-ui/components/rice-code-input/type.js";
import "./uni_modules/rice-ui/components/rice-qrcode/type.js";
import { u as useAppStore } from "./src/store/app.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponent: _createSharedDataComponent, createSharedDataIf: _createSharedDataIf } = globalThis.Vue;
const __className = "GenAppku";
const { computed, onBeforeMount, ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "15920a78",
  __className,
  __filename: "App.ku.uvue",
  __name: "App.ku",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenAppkuSharedData", sharedDataClassId: 0 })));
    const appStore = useAppStore();
    const isDarkMode = computed(() => {
      return isDark.value;
    });
    const currentThemeClass = computed(() => {
      const theme = appStore.state.theme;
      if (theme == "#37c2bc") {
        return "theme-teal";
      }
      if (theme == "#0957DE" || theme == "#0957de") {
        return "theme-blue";
      }
      if (theme == "#10b981") {
        return "theme-green";
      }
      if (theme == "#f43f5e") {
        return "theme-rose";
      }
      if (theme == "#f97316") {
        return "theme-orange";
      }
      return "theme-teal";
    });
    const rootThemeStyle = computed(() => {
      const theme = appStore.state.theme;
      return new UTSJSONObject({
        "--theme-color": theme,
        "--rice-primary-color": theme
      });
    });
    const isCurrentPageTabbar = ref(false);
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
    });
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 2, ["flex flex-col flex-1", [isDarkMode.value ? "rice-theme-dark rice-variables" : "rice-theme-light rice-variables", currentThemeClass.value]]);
        _setSharedDataStyle(__sharedData, 3, ["flex: 1;", rootThemeStyle.value]);
      });
      _createSharedDataSlot("default", null, null);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(isCurrentPageTabbar.value));
      }, () => {
        const n4 = _createSharedDataComponent(Tabbar, "ca3712ae");
        _setSharedData(__sharedData, 1, n4.sharedData);
      });
      return __sharedData;
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=App.ku.js.map
