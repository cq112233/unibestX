import { s as safeAreaInsets, a as systemInfo, N as NAVBAR_CONTENT_HEIGHT } from "../../utils/systemInfo.js";
import "../../store/index.js";
import { g as getThemeTokens } from "../../utils/theme.js";
import { u as useAppStore } from "../../store/app.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot, unref: _unref, setSharedDataEvent: _setSharedDataEvent, createSharedDataIf: _createSharedDataIf, toDisplayString: _toDisplayString } = globalThis.Vue;
const __className = "GenSrcComponentsNavBarNavBar";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
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
      default: ""
    },
    bgColor: {
      type: String,
      default: ""
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
      default: false
    },
    isNavbarVisible: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcComponentsNavBarNavBarSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const themeTokens = computed(() => {
      return getThemeTokens(useAppStore().state.isDark);
    });
    const effectiveBgColor = computed(() => {
      return props.bgColor != "" ? props.bgColor : themeTokens.value.navBg;
    });
    const effectiveTitleColor = computed(() => {
      return props.titleColor != "" ? props.titleColor : themeTokens.value.navText;
    });
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
      if (!props.showBack) {
        return null;
      }
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
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.isNavbarVisible));
      }, () => {
        _renderSharedDataEffect(() => {
          const _border = __props.border;
          const _isNavbarVisible = __props.isNavbarVisible;
          _setSharedDataClass(__sharedData, 9, ["weapp-tw-border", __props.fixed ? "wtu-1aith5s-0 wtu-1hza0m2-1 wtu-v37xsx-2 wtu-1kuus4x-3 wtu-yudqu9-4 wtu-16gfyql-5 wtu-172k480-6 wtu-1jjdtzl-7" : "wtu-1aith5s-0 wtu-1hza0m2-1 wtu-v37xsx-2"]);
          _setSharedDataStyle(__sharedData, 10, {
            backgroundColor: effectiveBgColor.value,
            borderBottomWidth: _border && _isNavbarVisible ? "1px" : "0px",
            borderBottomStyle: _border && _isNavbarVisible ? "solid" : "none",
            borderBottomColor: _border && _isNavbarVisible ? "#e2e8f0" : "transparent"
          });
          _setSharedDataStyle(__sharedData, 11, { height: `${statusBarHeight.value}px` });
        });
        _createSharedDataSlot("statusBar", null, null);
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData, 12, { height: `${_unref(NAVBAR_CONTENT_HEIGHT)}px` });
        });
        _createSharedDataSlot("left", null, null, () => {
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 3, _toSharedDataBoolean(__props.showBack));
          }, () => {
            _setSharedDataEvent(__sharedData, 4, handleBack);
            _renderSharedDataEffect(() => {
              const _effectiveTitleColor = effectiveTitleColor.value;
              _setSharedDataStyle(__sharedData, 5, { borderLeftColor: _effectiveTitleColor, borderBottomColor: _effectiveTitleColor, transform: "rotate(45deg)" });
            });
          });
        });
        _createSharedDataSlot("mid", null, null, () => {
          _createSharedDataSlot("default", null, null, () => {
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 6, _toSharedDataBoolean(__props.title.length > 0));
            }, () => {
              _renderSharedDataEffect(() => {
                _setSharedDataStyle(__sharedData, 7, { color: effectiveTitleColor.value });
                _setSharedData(__sharedData, 8, _toDisplayString(__props.title));
              });
            });
          });
        });
        _createSharedDataSlot("right", null, null);
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 1, _toSharedDataBoolean(__props.fixed && __props.placeholder));
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData, 2, { height: `${statusBarHeight.value + (__props.isNavbarVisible ? _unref(NAVBAR_CONTENT_HEIGHT) : 0)}px` });
          });
        });
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData, 13, { height: `${statusBarHeight.value}px` });
        });
      }, 1029);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const NavBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  NavBar as N
};
