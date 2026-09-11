import { d as safeHideNativeTabBar, e as safeAreaBottom, t as themeTokens, f as isVersionGte525, g as tabbarPlaceholderHeight, T as TABBAR_CONTAINER_HEIGHT, j as TABBAR_HEIGHT, h as handleTabbarClick } from "./helper/index.js";
import { T as TabbarItem } from "./TabbarItem.js";
import { s as syncCurIdxByCurrentPage, a as tabbarList } from "./helper/store.js";
import { _ as _export_sfc } from "../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, unref: _unref, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, setSharedData: _setSharedData, toDisplayString: _toDisplayString, createSharedDataComponent: _createSharedDataComponent, setSharedDataEvent: _setSharedDataEvent, createSharedDataFor: _createSharedDataFor } = globalThis.Vue;
const __className = "GenSrcTabbarIndex";
const { onMounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "src/tabbar/index.uvue",
  __name: "index",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcTabbarIndexSharedData", sharedDataClassId: 0 })));
    onMounted(() => {
      syncCurIdxByCurrentPage();
      safeHideNativeTabBar();
    });
    function onTabClick(index) {
      handleTabbarClick(index);
    }
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        const _safeAreaBottom = _unref(safeAreaBottom);
        const _themeTokens = _unref(themeTokens);
        _setSharedDataClass(__sharedData, 1, ["weapp-tw-border tabbar-placeholder", { "tabbar-placeholder-absolute": _unref(isVersionGte525) }]);
        _setSharedDataStyle(__sharedData, 2, { height: `${_unref(tabbarPlaceholderHeight)}px` });
        _setSharedDataStyle(__sharedData, 3, { height: `${_unref(TABBAR_CONTAINER_HEIGHT) + _safeAreaBottom}px` });
        _setSharedDataStyle(__sharedData, 4, { height: `${_unref(TABBAR_HEIGHT) + _safeAreaBottom}px`, backgroundColor: _themeTokens.tabBg, borderTopColor: _themeTokens.tabBorder });
      });
      _createSharedDataFor(_setSharedDataScoped(__sharedData, 0, _createSharedDataVFor(__sharedDataScope, () => {
        return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
      })), () => {
        return _unref(tabbarList);
      }, (__sharedData_VFor0, _for_item0, _for_key0) => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData_VFor0, 3, { height: `${_for_item0.value.isBulge ? _unref(TABBAR_CONTAINER_HEIGHT) : _unref(TABBAR_HEIGHT)}px` });
        });
        const n3 = _createSharedDataComponent(TabbarItem, "09657d62-" + _for_key0.value, {
          item: () => {
            return _for_item0.value;
          },
          index: () => {
            return _for_key0.value;
          },
          "is-bulge": () => {
            return _for_item0.value.isBulge;
          }
        });
        _setSharedData(__sharedData_VFor0, 1, n3.sharedData);
        _setSharedDataEvent(__sharedData_VFor0, 2, () => {
          return onTabClick(_for_key0.value);
        });
        return null;
      }, (__sharedData_VFor0, item, index) => {
        return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
      }, 1);
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 5, { height: `${_unref(safeAreaBottom)}px`, backgroundColor: _unref(themeTokens).tabBg });
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const Tabbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  Tabbar as T
};
