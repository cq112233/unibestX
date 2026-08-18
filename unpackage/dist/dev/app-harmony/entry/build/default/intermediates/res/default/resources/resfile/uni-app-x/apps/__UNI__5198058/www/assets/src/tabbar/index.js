import { s as syncCurIdxByCurrentPage, b as tabbarList, c as curIdx, d as setCurIdx } from "./store.js";
import { T as TabbarItem } from "./TabbarItem.js";
import { s as safeAreaInsets } from "../utils/systemInfo.js";
import { _ as _export_sfc } from "../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, setSharedData: _setSharedData, toDisplayString: _toDisplayString, setSharedDataClass: _setSharedDataClass, createSharedDataComponent: _createSharedDataComponent, setSharedDataEvent: _setSharedDataEvent, createSharedDataFor: _createSharedDataFor } = globalThis.Vue;
const __className = "GenSrcTabbarIndex";
const { computed, onMounted } = globalThis.Vue;
const TABBAR_HEIGHT = 50;
const TABBAR_CONTAINER_HEIGHT = 80;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "066738c8",
  __className,
  __filename: "src/tabbar/index.uvue",
  __name: "index",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcTabbarIndexSharedData", sharedDataClassId: 0 })));
    const safeAreaBottom = computed(() => {
      const insets = safeAreaInsets.value;
      if (insets != null) {
        return insets.bottom;
      }
      return 0;
    });
    function handleClickBulge() {
      uni.navigateTo({
        url: "/src/pages/ai/ai"
      });
    }
    function handleClick(index) {
      if (index == curIdx.value)
        return null;
      const list = tabbarList;
      if (list.length <= index)
        return null;
      if (list[index].isBulge) {
        handleClickBulge();
        return null;
      }
      const url = list[index].pagePath;
      setCurIdx(index);
      uni.switchTab({ url });
    }
    onMounted(() => {
      syncCurIdxByCurrentPage();
      uni.hideTabBar(new UTSJSONObject({
        fail: (err = null) => {
          uni.__f__("log", "at src/tabbar/index.uvue:51", "hideTabBar fail: ", err);
        }
      }));
    });
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        const _safeAreaBottom = _unref(safeAreaBottom);
        const __height_TABBAR_HEIGHT_safeAreaBottom_px = { height: `${TABBAR_HEIGHT + _safeAreaBottom}px` };
        _setSharedDataStyle(__sharedData, 1, __height_TABBAR_HEIGHT_safeAreaBottom_px);
        _setSharedDataStyle(__sharedData, 2, { height: `${TABBAR_CONTAINER_HEIGHT + _safeAreaBottom}px` });
        _setSharedDataStyle(__sharedData, 3, __height_TABBAR_HEIGHT_safeAreaBottom_px);
      });
      _createSharedDataFor(_setSharedDataScoped(__sharedData, 0, _createSharedDataVFor(__sharedDataScope, () => {
        return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
      })), () => {
        return _unref(tabbarList);
      }, (__sharedData_VFor0, _for_item0, _for_key0) => {
        _renderSharedDataEffect(() => {
          return _setSharedDataClass(__sharedData_VFor0, 3, ["tabbar-item", { "tabbar-item-bulge": _for_item0.value.isBulge }]);
        });
        const n3 = _createSharedDataComponent(TabbarItem, "10d18caa-" + _for_key0.value, {
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
          return handleClick(_for_key0.value);
        });
        return null;
      }, (__sharedData_VFor0, item, index) => {
        return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
      }, 1);
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 4, { height: `${_unref(safeAreaBottom)}px` });
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const Tabbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  Tabbar as T
};
//# sourceMappingURL=index.js.map
