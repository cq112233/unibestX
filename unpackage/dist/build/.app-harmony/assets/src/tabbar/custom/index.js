import { _ as __easycom_0 } from "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import { d as safeHideNativeTabBar, h as handleTabbarClick } from "../helper/index.js";
import { $ as $t } from "../../utils/i18n.js";
import "../../store/index.js";
import { g as getThemeTokens } from "../../utils/theme.js";
import { s as safeAreaInsets } from "../../utils/systemInfo.js";
import { u as useAppStore } from "../../store/app.js";
import { t as themeColor, s as syncCurIdxByCurrentPage, a as tabbarList, c as curIdx } from "../helper/store.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataStyle: _setSharedDataStyle, unref: _unref, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataIf: _createSharedDataIf, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, toDisplayString: _toDisplayString, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, setSharedDataEvent: _setSharedDataEvent, createSharedDataFor: _createSharedDataFor } = globalThis.Vue;
const __className = "GenSrcTabbarCustomIndex";
const { computed, onMounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "src/tabbar/custom/index.uvue",
  __name: "index",
  props: {
    /** 悬浮 TabBar 容器高度（默认 64px） */
    height: {
      type: Number,
      default: 64
    },
    /** 底部与屏幕边缘的间距（默认 12px） */
    bottomOffset: {
      type: Number,
      default: 12
    },
    /** 是否渲染底部占位块（默认 false） */
    showPlaceholder: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcTabbarCustomIndexSharedData", sharedDataClassId: 0 })));
    const appStore = useAppStore();
    const themeTokens = computed(() => {
      return getThemeTokens(appStore.state.isDark);
    });
    const safeAreaBottom = computed(() => {
      const insets = safeAreaInsets.value;
      return insets != null ? insets.bottom : 0;
    });
    const activeThemeColor = computed(() => {
      return themeColor.value.length > 0 ? themeColor.value : appStore.state.theme;
    });
    const activeItemBgColor = computed(() => {
      if (appStore.state.isDark) {
        return "rgba(255, 255, 255, 0.12)";
      }
      const color = activeThemeColor.value;
      return `${color}18`;
    });
    onMounted(() => {
      syncCurIdxByCurrentPage();
      safeHideNativeTabBar();
    });
    function onTabClick(index) {
      handleTabbarClick(index);
    }
    function getText(text) {
      return $t(text);
    }
    function getItemBgColor(index) {
      return curIdx.value == index ? activeItemBgColor.value : "transparent";
    }
    function getItemIcon(index) {
      if (tabbarList.length <= index) {
        return "";
      }
      const item = tabbarList[index];
      if (curIdx.value == index && item.iconActive.length > 0) {
        return item.iconActive;
      }
      return item.icon;
    }
    function getItemIconPath(index) {
      if (tabbarList.length <= index) {
        return "";
      }
      const item = tabbarList[index];
      if (curIdx.value == index && item.selectedIconPath != null && item.selectedIconPath.length > 0) {
        return item.selectedIconPath;
      }
      return item.iconPath != null ? item.iconPath : "";
    }
    function getItemIconColor(index) {
      return curIdx.value == index ? activeThemeColor.value : themeTokens.value.tabColor;
    }
    function getItemTextColor(index) {
      return curIdx.value == index ? activeThemeColor.value : themeTokens.value.tabColor;
    }
    function getItemFontWeight(index) {
      return curIdx.value == index ? "600" : "normal";
    }
    return () => {
      "raw js";
      const _component_uni_icons = __easycom_0;
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.showPlaceholder));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData, 1, { height: `${__props.height + __props.bottomOffset * 2 + _unref(safeAreaBottom)}px` });
        });
      });
      _renderSharedDataEffect(() => {
        const _themeTokens = _unref(themeTokens);
        _setSharedDataStyle(__sharedData, 3, {
          bottom: `${__props.bottomOffset + _unref(safeAreaBottom)}px`,
          height: `${__props.height}px`,
          backgroundColor: _themeTokens.tabBg,
          borderColor: _themeTokens.tabBorder
        });
      });
      _createSharedDataFor(_setSharedDataScoped(__sharedData, 2, _createSharedDataVFor(__sharedDataScope, () => {
        return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
      })), () => {
        return _unref(tabbarList);
      }, (__sharedData_VFor0, _for_item0, _for_key0) => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData_VFor0, 8, {
            backgroundColor: getItemBgColor(_for_key0.value)
          });
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData_VFor0, 1, _toSharedDataBoolean(_for_item0.value.iconType == "icon"));
        }, () => {
          const n7 = _createSharedDataComponentWithFallback(_component_uni_icons, "647ee35a-" + _for_key0.value, {
            type: () => {
              return getItemIcon(_for_key0.value);
            },
            size: 20,
            color: () => {
              return getItemIconColor(_for_key0.value);
            }
          });
          _setSharedData(__sharedData_VFor0, 2, n7?.sharedData);
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedDataAttr(__sharedData_VFor0, 3, _toSharedDataString(getItemIconPath(_for_key0.value)));
          });
        }, 517);
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData_VFor0, 4, _toSharedDataBoolean(_for_item0.value.badge != null && _for_item0.value.badge == "dot"));
        }, () => {
        }, () => {
          return _createSharedDataIf(() => {
            return _setSharedData(__sharedData_VFor0, 5, _toSharedDataBoolean(_for_item0.value.badge != null && _for_item0.value.badge != "dot"));
          }, () => {
            _renderSharedDataEffect(() => {
              return _setSharedData(__sharedData_VFor0, 6, _toDisplayString(_for_item0.value.badge));
            });
          });
        }, 773);
        _setSharedDataEvent(__sharedData_VFor0, 7, () => {
          return onTabClick(_for_key0.value);
        });
        _renderSharedDataEffect(() => {
          const _index = _for_key0.value;
          _setSharedDataStyle(__sharedData_VFor0, 9, {
            color: getItemTextColor(_index),
            fontWeight: getItemFontWeight(_index)
          });
          _setSharedData(__sharedData_VFor0, 10, _toDisplayString(getText(_for_item0.value.text)));
        });
        return null;
      }, (__sharedData_VFor0, item, index) => {
        return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
      }, 1);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const CustomCapsuleTabbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  CustomCapsuleTabbar as C
};
