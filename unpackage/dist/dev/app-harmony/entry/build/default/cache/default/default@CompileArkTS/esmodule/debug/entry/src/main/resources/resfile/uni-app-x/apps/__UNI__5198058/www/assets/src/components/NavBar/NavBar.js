import { s as safeAreaInsets, a as systemInfo } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/utils/systemInfo&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataIf: _createSharedDataIf, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, toDisplayString: _toDisplayString } = globalThis.Vue;
const __className = "GenSrcComponentsNavBarNavBar";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "38b7fc16",
  __className,
  __filename: "src/components/NavBar/NavBar.uvue",
  __name: "NavBar",
  props: {
    title: {
      type: String,
      default: ""
    },
    titleColor: {
      type: String,
      default: "#1e293b"
    },
    bgColor: {
      type: String,
      default: "#ffffff"
    },
    fixed: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: Boolean,
      default: true
    },
    showBack: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcComponentsNavBarNavBarSharedData", sharedDataClassId: 0 })));
    const statusBarHeight = computed(() => {
      const insets = safeAreaInsets.value;
      if (insets != null && insets.top > 0) {
        return insets.top;
      }
      const info = systemInfo.value;
      if (info != null && info.statusBarHeight > 0) {
        return info.statusBarHeight;
      }
      return 0;
    });
    function handleBack() {
      const pages = getCurrentPages();
      if (pages.length > 1) {
        uni.navigateBack(new UTSJSONObject({
          delta: 1
        }));
      } else {
        uni.reLaunch({
          url: "/src/pages/index/index"
        });
      }
    }
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        const _border = __props.border;
        _setSharedDataClass(__sharedData, 7, __props.fixed ? "navbar-container navbar-fixed" : "navbar-container");
        _setSharedDataStyle(__sharedData, 8, {
          backgroundColor: __props.bgColor,
          borderBottomWidth: _border ? "1px" : "0px",
          borderBottomStyle: _border ? "solid" : "none",
          borderBottomColor: _border ? "#e2e8f0" : "transparent"
        });
        _setSharedDataStyle(__sharedData, 9, { height: `${statusBarHeight.value}px` });
      });
      _createSharedDataSlot("left", null, null, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 2, _toSharedDataBoolean(__props.showBack));
        }, () => {
          _renderSharedDataEffect(() => {
            const _titleColor = __props.titleColor;
            _setSharedDataStyle(__sharedData, 3, { borderLeftColor: _titleColor, borderBottomColor: _titleColor });
          });
        });
      });
      _setSharedDataEvent(__sharedData, 6, handleBack);
      _createSharedDataSlot("default", null, null, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataStyle(__sharedData, 4, { color: __props.titleColor });
          _setSharedData(__sharedData, 5, _toDisplayString(__props.title));
        });
      });
      _createSharedDataSlot("right", null, null);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.fixed && __props.placeholder));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData, 1, { height: `${statusBarHeight.value + 44}px` });
        });
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=NavBar.js.map
