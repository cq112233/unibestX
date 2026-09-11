import { b as setCurIdxByPath, c as curIdx, d as setCurIdx, a as tabbarList } from "./store.js";
import "../../store/index.js";
import { g as getThemeTokens } from "../../utils/theme.js";
import { s as safeAreaInsets, T as TABBAR_BASE_HEIGHT } from "../../utils/systemInfo.js";
import { c as customTabbarConfig } from "../config.js";
import { u as useAppStore } from "../../store/app.js";
const { computed } = globalThis.Vue;
const TABBAR_HEIGHT = TABBAR_BASE_HEIGHT;
const TABBAR_CONTAINER_HEIGHT = 80;
class TabbarStrategyType extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          NO_TABBAR: { type: Number, optional: false },
          NATIVE_TABBAR: { type: Number, optional: false },
          CUSTOM_TABBAR_WITH_NATIVE: { type: Number, optional: false },
          CUSTOM_TABBAR_WITHOUT_NATIVE: { type: Number, optional: false },
          CUSTOM_TABBAR: { type: Number, optional: false }
        };
      }
    };
  }
  constructor(options, metadata = TabbarStrategyType.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.NO_TABBAR = this.__props__.NO_TABBAR;
    this.NATIVE_TABBAR = this.__props__.NATIVE_TABBAR;
    this.CUSTOM_TABBAR_WITH_NATIVE = this.__props__.CUSTOM_TABBAR_WITH_NATIVE;
    this.CUSTOM_TABBAR_WITHOUT_NATIVE = this.__props__.CUSTOM_TABBAR_WITHOUT_NATIVE;
    this.CUSTOM_TABBAR = this.__props__.CUSTOM_TABBAR;
    delete this.__props__;
  }
}
const TABBAR_STRATEGY_MAP = new TabbarStrategyType({
  NO_TABBAR: 0,
  NATIVE_TABBAR: 1,
  CUSTOM_TABBAR_WITH_NATIVE: 2,
  CUSTOM_TABBAR_WITHOUT_NATIVE: 3,
  CUSTOM_TABBAR: 2
});
function parseTabbarStrategy() {
  var _a;
  const envMode = `${(_a = "2") !== null && _a !== void 0 ? _a : "1"}`.trim();
  if (envMode == "0" || envMode == "NO_TABBAR") {
    return TABBAR_STRATEGY_MAP.NO_TABBAR;
  }
  if (envMode == "2" || envMode == "CUSTOM_TABBAR" || envMode == "CUSTOM_TABBAR_WITH_NATIVE") {
    return TABBAR_STRATEGY_MAP.CUSTOM_TABBAR_WITH_NATIVE;
  }
  if (envMode == "3" || envMode == "CUSTOM_TABBAR_WITHOUT_NATIVE") {
    return TABBAR_STRATEGY_MAP.CUSTOM_TABBAR_WITHOUT_NATIVE;
  }
  return TABBAR_STRATEGY_MAP.NATIVE_TABBAR;
}
const selectedTabbarStrategy = parseTabbarStrategy();
selectedTabbarStrategy != TABBAR_STRATEGY_MAP.NO_TABBAR;
const customTabbarEnable = selectedTabbarStrategy == TABBAR_STRATEGY_MAP.CUSTOM_TABBAR_WITH_NATIVE || selectedTabbarStrategy == TABBAR_STRATEGY_MAP.CUSTOM_TABBAR_WITHOUT_NATIVE;
selectedTabbarStrategy == TABBAR_STRATEGY_MAP.NO_TABBAR;
const isCapsuleTabbar = customTabbarConfig.type == "capsule";
selectedTabbarStrategy == TABBAR_STRATEGY_MAP.CUSTOM_TABBAR_WITH_NATIVE;
const isNativeTabbar = selectedTabbarStrategy == TABBAR_STRATEGY_MAP.NATIVE_TABBAR;
selectedTabbarStrategy == TABBAR_STRATEGY_MAP.NATIVE_TABBAR || selectedTabbarStrategy == TABBAR_STRATEGY_MAP.CUSTOM_TABBAR_WITH_NATIVE;
const themeTokens = computed(() => {
  return getThemeTokens(useAppStore().state.isDark);
});
const safeAreaBottom = computed(() => {
  const insets = safeAreaInsets.value;
  if (insets != null) {
    return insets.bottom;
  }
  return 0;
});
const isVersionGte525 = computed(() => {
  return false;
});
const tabbarPlaceholderHeight = computed(() => {
  return TABBAR_HEIGHT + safeAreaBottom.value;
});
function handleClickBulge(url = "/src/pages/ai/ai") {
  uni.navigateTo({
    url
  });
}
function switchTabbar(url) {
  setCurIdxByPath(url);
  if (selectedTabbarStrategy == TABBAR_STRATEGY_MAP.CUSTOM_TABBAR_WITHOUT_NATIVE || selectedTabbarStrategy == TABBAR_STRATEGY_MAP.NO_TABBAR) {
    uni.redirectTo({
      url,
      fail: (_err = null) => {
        uni.navigateTo({
          url,
          fail: () => {
            uni.showToast({
              title: "沙盒调试中：目标页面未编译",
              icon: "none"
            });
          }
        });
      }
    });
  } else {
    uni.switchTab({
      url,
      fail: (_err = null) => {
        uni.redirectTo({
          url,
          fail: () => {
            uni.showToast({
              title: "沙盒调试中：目标页面未编译",
              icon: "none"
            });
          }
        });
      }
    });
  }
}
let isSwitchingTab = false;
function handleTabbarClick(index) {
  if (index == curIdx.value || isSwitchingTab) {
    return null;
  }
  const list = tabbarList;
  if (list.length <= index) {
    return null;
  }
  if (list[index].isBulge) {
    handleClickBulge(list[index].pagePath.length > 0 ? list[index].pagePath : "/src/pages/ai/ai");
    return null;
  }
  isSwitchingTab = true;
  const url = list[index].pagePath;
  setCurIdx(index);
  switchTabbar(url);
  setTimeout(() => {
    isSwitchingTab = false;
  }, 250);
}
function safeHideNativeTabBar() {
  try {
    uni.hideTabBar(new UTSJSONObject({
      animation: false,
      fail: (err = null) => {
        uni.__f__("log", "at src/tabbar/helper/index.uts:211", "hideTabBar fail: ", err);
      }
    }));
  } catch {
  }
}
function initNativeMidButtonTap() {
  if (!isNativeTabbar || customTabbarConfig.midButton == null) {
    return null;
  }
  try {
    const mid = customTabbarConfig.midButton;
    const targetUrl = mid != null && mid.pagePath != null && mid.pagePath.length > 0 ? mid.pagePath : "/src/pages/ai/ai";
    uni.onTabBarMidButtonTap(() => {
      handleClickBulge(targetUrl);
    });
  } catch (e) {
    uni.__f__("warn", "at src/tabbar/helper/index.uts:238", "onTabBarMidButtonTap registration error", e);
  }
}
export {
  TABBAR_CONTAINER_HEIGHT as T,
  isCapsuleTabbar as a,
  switchTabbar as b,
  customTabbarEnable as c,
  safeHideNativeTabBar as d,
  safeAreaBottom as e,
  isVersionGte525 as f,
  tabbarPlaceholderHeight as g,
  handleTabbarClick as h,
  initNativeMidButtonTap as i,
  TABBAR_HEIGHT as j,
  selectedTabbarStrategy as s,
  themeTokens as t
};
