import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uni-icons/components/uni-icons/uni-icons&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/tabbar/types&";
import { c as curIdx, t as themeColor } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/tabbar/store&";
import { $ as $t } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/utils/i18n&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/store/index&";
import { g as getThemeTokens } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/utils/theme&";
import { u as useAppStore } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/store/app&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, unref: _unref, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataIf: _createSharedDataIf, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedDataStyle: _setSharedDataStyle, toDisplayString: _toDisplayString } = globalThis.Vue;
const __className = "GenSrcTabbarTabbarItem";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "62588060",
  __className,
  __filename: "src/tabbar/TabbarItem.uvue",
  __name: "TabbarItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    isBulge: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcTabbarTabbarItemSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const tabbarItem = computed(() => {
      return props.item;
    });
    const themeTokens = computed(() => {
      return getThemeTokens(useAppStore().state.isDark);
    });
    function getIcon() {
      if (curIdx.value == props.index && tabbarItem.value.iconActive.length > 0) {
        return tabbarItem.value.iconActive;
      }
      return tabbarItem.value.icon;
    }
    function getActiveColor() {
      return curIdx.value == props.index ? themeColor.value : themeTokens.value.tabColor;
    }
    function isDotBadge() {
      return tabbarItem.value.badge != null && tabbarItem.value.badge == "dot";
    }
    function isNumberBadge() {
      return tabbarItem.value.badge != null && tabbarItem.value.badge != "dot";
    }
    function getBadgeText() {
      const badge = tabbarItem.value.badge;
      if (badge == null || badge == "dot")
        return "";
      if (typeof badge == "number") {
        const num = badge;
        if (num > 99)
          return "99+";
        return `${num}`;
      }
      return `${badge}`;
    }
    function getText() {
      return $t(tabbarItem.value.text);
    }
    return () => {
      "raw js";
      const _component_uni_icons = __easycom_0;
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(props.isBulge));
      }, () => {
      }, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 1, _toSharedDataBoolean(_unref(tabbarItem).iconType === "image"));
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedDataAttr(__sharedData, 2, _toSharedDataString(getIcon()));
          });
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 3, _toSharedDataBoolean(_unref(tabbarItem).iconType === "icon"));
        }, () => {
          const n11 = _createSharedDataComponentWithFallback(_component_uni_icons, "dc968c9c", {
            type: () => {
              return getIcon();
            },
            size: 24,
            color: () => {
              return getActiveColor();
            }
          });
          _setSharedData(__sharedData, 4, n11?.sharedData);
        });
        _renderSharedDataEffect(() => {
          _setSharedDataStyle(__sharedData, 8, { color: getActiveColor() });
          _setSharedData(__sharedData, 9, _toDisplayString(getText()));
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 5, _toSharedDataBoolean(isDotBadge()));
        }, () => {
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 6, _toSharedDataBoolean(isNumberBadge()));
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedData(__sharedData, 7, _toDisplayString(getBadgeText()));
          });
        });
      }, 261);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const TabbarItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  TabbarItem as T
};
//# sourceMappingURL=TabbarItem.js.map
