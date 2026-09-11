import { N as NavBar } from "../components/NavBar/NavBar.js";
import "../store/index.js";
import { g as getThemeTokens } from "../utils/theme.js";
import { i as isPageScrollDisabled, a as isPageRefresherDisabled } from "../utils/pageScroll.js";
import { u as useAppStore } from "../store/app.js";
import { _ as _export_sfc } from "../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponent: _createSharedDataComponent, createSharedDataIf: _createSharedDataIf, setSharedDataAttr: _setSharedDataAttr, toSharedDataScrollViewDirection: _toSharedDataScrollViewDirection, toSharedDataAttrBoolean: _toSharedDataAttrBoolean, toSharedDataColor: _toSharedDataColor, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenSrcLayoutsNavbar";
const { computed, onMounted, onUnmounted, ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "src/layouts/navbar.uvue",
  __name: "navbar",
  props: {
    /** 页面顶层类型标识，如 'home' */
    type: {
      type: String,
      default: ""
    },
    /** 导航栏标题（读取自 page.title） */
    title: {
      type: String,
      default: ""
    },
    /** 是否显示左侧返回按钮（默认 true） */
    showBack: {
      type: Boolean,
      default: true
    },
    /** 是否启用内容区域的自定义下拉刷新 */
    enablePullDownRefresh: {
      type: Boolean,
      default: false
    },
    /** 导航栏备用背景色（读取自 page.bgColor） */
    bgColor: {
      type: String,
      default: ""
    },
    /** 导航栏备用文字颜色（读取自 page.titleColor） */
    titleColor: {
      type: String,
      default: ""
    },
    /** 导航栏底部是否显示 1px 细分割线 */
    border: {
      type: Boolean,
      default: false
    },
    /** 页面 style 完整配置对象（未拍平，包含 navigationBarTitleText, enablePullDownRefresh, navigationBarBackgroundColor 等） */
    pageStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    },
    /** 是否隐藏导航栏（默认 false） */
    hideNavbar: {
      type: Boolean,
      default: false
    },
    hideNavBar: {
      type: Boolean,
      default: false
    },
    /** 是否显示导航栏（默认 true） */
    showNavbar: {
      type: Boolean,
      default: true
    },
    showNavBar: {
      type: Boolean,
      default: true
    },
    /** 扁平兼容字段：导航栏标题 */
    navigationBarTitleText: {
      type: String,
      default: ""
    },
    /** 扁平兼容字段：导航栏背景色 */
    navigationBarBackgroundColor: {
      type: String,
      default: ""
    },
    /** 扁平兼容字段：导航栏文字颜色 */
    navigationBarTextStyle: {
      type: String,
      default: ""
    },
    /** 页面根容器自定义类名（通过 definePage 或 pages.config.json 中的 customPageClass 传入） */
    customPageClass: {
      type: String,
      default: ""
    },
    /** 兼容别名：自定义类名 */
    customClass: {
      type: String,
      default: ""
    },
    layoutClass: {
      type: String,
      default: ""
    },
    /** 页面根容器自定义行内样式（通过 definePage 或 pages.config.json 中的 customPageStyle 传入） */
    customPageStyle: {
      type: String,
      default: ""
    },
    /** 兼容别名：自定义行内样式 */
    customStyle: {
      type: String,
      default: ""
    },
    layoutStyle: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcLayoutsNavbarSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const pageStyleObj = computed(() => {
      var _a;
      return (_a = props.pageStyle) !== null && _a !== void 0 ? _a : new UTSJSONObject({});
    });
    const pageScrollDirection = computed(() => {
      return isPageScrollDisabled.value ? "none" : "vertical";
    });
    const isRefresherEnabled = computed(() => {
      return !isPageScrollDisabled.value && !isPageRefresherDisabled.value;
    });
    const rootClass = computed(() => {
      let cls = "navbar-layout wtu-10fwolo-0 wtu-mswjne-1 wtu-1h86bsx-2";
      if (props.customPageClass.length > 0) {
        cls += ` ${props.customPageClass}`;
      }
      if (props.customClass.length > 0) {
        cls += ` ${props.customClass}`;
      }
      if (props.layoutClass.length > 0) {
        cls += ` ${props.layoutClass}`;
      }
      return cls;
    });
    const rootStyle = computed(() => {
      let s = "";
      if (props.customPageStyle.length > 0) {
        s += props.customPageStyle;
      }
      if (props.customStyle.length > 0) {
        s += (s.length > 0 ? ";" : "") + props.customStyle;
      }
      if (props.layoutStyle.length > 0) {
        s += (s.length > 0 ? ";" : "") + props.layoutStyle;
      }
      return s;
    });
    const isNavbarVisible = computed(() => {
      if (props.hideNavbar || props.hideNavBar || !props.showNavbar || !props.showNavBar) {
        return false;
      }
      return true;
    });
    const isTriggered = ref(false);
    function handleRefresherRefresh() {
      isTriggered.value = true;
      uni.$emit("onPagePullDownRefresh");
    }
    function handleRefresherRestore() {
      isTriggered.value = false;
    }
    function onStopRefresh() {
      isTriggered.value = false;
    }
    onMounted(() => {
      uni.$on("stopPagePullDownRefresh", onStopRefresh);
    });
    onUnmounted(() => {
      uni.$off("stopPagePullDownRefresh", onStopRefresh);
    });
    function handleScroll(e) {
      const scrollTop = e.detail.scrollTop;
      uni.$emit("onNavbarPageScroll", new UTSJSONObject({
        scrollTop: Math.ceil(scrollTop)
      }));
    }
    function handleScrollToLower() {
      uni.$emit("onNavbarReachBottom");
    }
    const isNativePullDown = computed(() => {
      const psVal = pageStyleObj.value.enablePullDownRefresh;
      if (psVal == true || psVal == "true") {
        return true;
      }
      return false;
    });
    const useCustomRefresher = computed(() => {
      if (isNativePullDown.value) {
        return false;
      }
      return props.enablePullDownRefresh;
    });
    const displayTitle = computed(() => {
      var _a;
      const titleFromStyle = (_a = pageStyleObj.value.navigationBarTitleText) !== null && _a !== void 0 ? _a : "";
      if (titleFromStyle.length > 0) {
        return titleFromStyle;
      }
      if (props.navigationBarTitleText.length > 0) {
        return props.navigationBarTitleText;
      }
      return props.title;
    });
    const navBgColor = computed(() => {
      var _a;
      const bgFromStyle = (_a = pageStyleObj.value.navigationBarBackgroundColor) !== null && _a !== void 0 ? _a : "";
      if (bgFromStyle.length > 0) {
        return bgFromStyle;
      }
      if (props.navigationBarBackgroundColor.length > 0) {
        return props.navigationBarBackgroundColor;
      }
      return props.bgColor;
    });
    const navTitleColor = computed(() => {
      var _a;
      const textStyleFromStyle = (_a = pageStyleObj.value.navigationBarTextStyle) !== null && _a !== void 0 ? _a : "";
      if (textStyleFromStyle.length > 0) {
        return textStyleFromStyle;
      }
      if (props.navigationBarTextStyle.length > 0) {
        return props.navigationBarTextStyle;
      }
      return props.titleColor;
    });
    const isCustomNav = computed(() => {
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
    const themeTokens = computed(() => {
      return getThemeTokens(useAppStore().state.isDark);
    });
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 14, ["weapp-tw-border", rootClass.value]);
        _setSharedDataStyle(__sharedData, 15, rootStyle.value);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(isCustomNav.value));
      }, () => {
        const n2 = _createSharedDataComponent(NavBar, "25004ef0", {
          "is-navbar-visible": () => {
            return isNavbarVisible.value;
          },
          title: () => {
            return displayTitle.value;
          },
          "show-back": () => {
            return __props.showBack;
          },
          "title-color": () => {
            return navTitleColor.value;
          },
          "bg-color": () => {
            return navBgColor.value;
          },
          fixed: false,
          placeholder: false,
          border: () => {
            return __props.border;
          }
        });
        _setSharedData(__sharedData, 1, n2.sharedData);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 2, _toSharedDataBoolean(useCustomRefresher.value));
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataAttr(__sharedData, 7, _toSharedDataScrollViewDirection(pageScrollDirection.value));
          _setSharedDataAttr(__sharedData, 8, _toSharedDataAttrBoolean(isRefresherEnabled.value, false));
          _setSharedDataAttr(__sharedData, 9, _toSharedDataAttrBoolean(isTriggered.value, false));
          _setSharedDataAttr(__sharedData, 10, _toSharedDataColor(themeTokens.value.bgContent));
        });
        _createSharedDataSlot("default", null, null);
        _setSharedDataEvent(__sharedData, 3, handleRefresherRefresh);
        _setSharedDataEvent(__sharedData, 4, handleRefresherRestore);
        _setSharedDataEvent(__sharedData, 5, handleScroll);
        _setSharedDataEvent(__sharedData, 6, handleScrollToLower);
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataAttr(__sharedData, 13, _toSharedDataScrollViewDirection(pageScrollDirection.value));
        });
        _createSharedDataSlot("default", null, null);
        _setSharedDataEvent(__sharedData, 11, handleScroll);
        _setSharedDataEvent(__sharedData, 12, handleScrollToLower);
      }, 517);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const LayoutComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  LayoutComponent as L
};
