import { computed, onMounted, onUnmounted, ref } from 'vue';
import NavBar from '@/src/components/NavBar/NavBar.uvue';
import { useAppStore } from '@/src/store';
import { getThemeTokens } from '@/src/utils/theme';
import type { ThemeTokens } from '@/src/utils/theme';
import { isPageRefresherDisabled, isPageScrollDisabled } from '@/src/utils/pageScroll.uts';

/**
 * 布局属性定义（由 uni-layouts-plugin 编译时自动从页面 definePage 或 pages.json 提取传入）
 */

const __sfc__ = defineComponent({
  __name: 'navbar',
  props: {
  /** 页面顶层类型标识，如 'home' */
  type: {
    type: String,
    default: ''
  },
  /** 导航栏标题（读取自 page.title） */
  title: {
    type: String,
    default: ''
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
    default: ''
  },
  /** 导航栏备用文字颜色（读取自 page.titleColor） */
  titleColor: {
    type: String,
    default: ''
  },
  /** 导航栏底部是否显示 1px 细分割线 */
  border: {
    type: Boolean,
    default: false
  },
  /** 页面 style 完整配置对象（未拍平，包含 navigationBarTitleText, enablePullDownRefresh, navigationBarBackgroundColor 等） */
  pageStyle: {
    type: Object,
    default: () => ({})
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
    default: ''
  },
  /** 扁平兼容字段：导航栏背景色 */
  navigationBarBackgroundColor: {
    type: String,
    default: ''
  },
  /** 扁平兼容字段：导航栏文字颜色 */
  navigationBarTextStyle: {
    type: String,
    default: ''
  },
  /** 页面根容器自定义类名（通过 definePage 或 pages.config.json 中的 customPageClass 传入） */
  customPageClass: {
    type: String,
    default: ''
  },
  /** 兼容别名：自定义类名 */
  customClass: {
    type: String,
    default: ''
  },
  layoutClass: {
    type: String,
    default: ''
  },
  /** 页面根容器自定义行内样式（通过 definePage 或 pages.config.json 中的 customPageStyle 传入） */
  customPageStyle: {
    type: String,
    default: ''
  },
  /** 兼容别名：自定义行内样式 */
  customStyle: {
    type: String,
    default: ''
  },
  layoutStyle: {
    type: String,
    default: ''
  }
},
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const props = __props;

/**
 * 获取 pageStyle 对象
 */
const pageStyleObj = computed((): UTSJSONObject => {
  return (props.pageStyle ?? {}) as UTSJSONObject;
});

const pageScrollDirection = computed((): string => {
  return isPageScrollDisabled.value ? 'none' : 'vertical';
});

const isRefresherEnabled = computed((): boolean => {
  return !isPageScrollDisabled.value && !isPageRefresherDisabled.value;
});

/**
 * 根容器样式类名：合并默认基础类名与自定义页面类名（customPageClass）
 */
const rootClass = computed((): string => {
  let cls = 'navbar-layout wtu-10fwolo-0 wtu-mswjne-1 wtu-1h86bsx-2';
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

/**
 * 根容器行内样式：合并自定义页面行内样式（customPageStyle）
 */
const rootStyle = computed((): string => {
  let s = '';
  if (props.customPageStyle.length > 0) {
    s += props.customPageStyle;
  }
  if (props.customStyle.length > 0) {
    s += (s.length > 0 ? ';' : '') + props.customStyle;
  }
  if (props.layoutStyle.length > 0) {
    s += (s.length > 0 ? ';' : '') + props.layoutStyle;
  }
  return s;
});

/**
 * 计算导航栏是否可见
 * 1. 优先读取 props.hideNavbar / props.hideNavBar / props.showNavbar / props.showNavBar
 * 2. 兜底读取 pageStyle 中的 hideNavbar / showNavbar
 */
const isNavbarVisible = computed((): boolean => {
  if (props.hideNavbar || props.hideNavBar || !props.showNavbar || !props.showNavBar) {
    return false;
  }
  return true;
});

/** 下拉刷新状态控制：true 表示刷新中（展示 Loading），false 表示已复位收起 */
const isTriggered = ref(false);

/**
 * 用户下拉触发刷新回调
 */
function handleRefresherRefresh() {
  isTriggered.value = true;
  // 向页面派发下拉刷新通知事件
  uni.$emit('onPagePullDownRefresh');
}

/**
 * 下拉刷新复位完成事件
 */
function handleRefresherRestore() {
  isTriggered.value = false;
}

/**
 * 接收页面业务层发出的停止刷新通知（stopNavbarPullDownRefresh）
 */
function onStopRefresh() {
  isTriggered.value = false;
}

// 挂载时注册全局停止刷新事件监听
onMounted(() => {
  uni.$on('stopPagePullDownRefresh', onStopRefresh);
});

// 卸载时移除全局事件监听，避免内存泄漏
onUnmounted(() => {
  uni.$off('stopPagePullDownRefresh', onStopRefresh);
});

/**
 * 布局滚动容器滚动事件回调：统一向页面层派发 onNavbarPageScroll 事件
 */
function handleScroll(e: UniScrollEvent): void {
  const scrollTop = e.detail.scrollTop;
  uni.$emit('onNavbarPageScroll', {
    scrollTop: Math.ceil(scrollTop)
  } as UTSJSONObject);
}

/**
 * 布局滚动容器触底事件回调：统一向页面层派发 onNavbarReachBottom 事件
 */
function handleScrollToLower(): void {
  uni.$emit('onNavbarReachBottom');
}

/**
 * 判断当前页面是否开启了原生系统下拉刷新（读取 definePage.style.enablePullDownRefresh）
 */
const isNativePullDown = computed((): boolean => {
  const psVal = pageStyleObj.value.enablePullDownRefresh;
  if (psVal == true || psVal == 'true') {
    return true;
  }
  return false;
});

/**
 * 决定是否使用 NavBar 内部自定义下拉刷新：
 * 若原生已开启下拉（style.enablePullDownRefresh），原生优先并关闭内部下拉；仅在原生未开启时才使用自定义下拉
 */
const useCustomRefresher = computed((): boolean => {
  if (isNativePullDown.value) {
    return false;
  }
  return props.enablePullDownRefresh;
});

/**
 * 计算最终生效的导航栏标题
 */
const displayTitle = computed((): string => {
  const titleFromStyle = (pageStyleObj.value.navigationBarTitleText as string | null) ?? '';
  if (titleFromStyle.length > 0) {
    return titleFromStyle;
  }
  if (props.navigationBarTitleText.length > 0) {
    return props.navigationBarTitleText;
  }
  return props.title;
});

/**
 * 计算最终生效的导航栏背景色
 */
const navBgColor = computed((): string => {
  const bgFromStyle = (pageStyleObj.value.navigationBarBackgroundColor as string | null) ?? '';
  if (bgFromStyle.length > 0) {
    return bgFromStyle;
  }
  if (props.navigationBarBackgroundColor.length > 0) {
    return props.navigationBarBackgroundColor;
  }
  return props.bgColor;
});

/**
 * 计算最终生效的导航栏文字/图标颜色
 */
const navTitleColor = computed((): string => {
  const textStyleFromStyle = (pageStyleObj.value.navigationBarTextStyle as string | null) ?? '';
  if (textStyleFromStyle.length > 0) {
    return textStyleFromStyle;
  }
  if (props.navigationBarTextStyle.length > 0) {
    return props.navigationBarTextStyle;
  }
  return props.titleColor;
});

const isCustomNav = computed((): boolean => {
  const textStyleFromStyle = (pageStyleObj.value.navigationStyle as string | null) ?? '';
  if (textStyleFromStyle.length > 0) {
    if (textStyleFromStyle == 'custom') {
      return true;
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
});

const themeTokens = computed((): ThemeTokens => {
  return getThemeTokens(useAppStore().state.isDark);
});

return (): any | null => {

  return _cE("view", _uM({
    class: _nC(["weapp-tw-border", rootClass.value]),
    style: _nS(rootStyle.value)
  }), [
    isTrue(isCustomNav.value)
      ? _cV(unref(NavBar), _uM({
          key: 0,
          "is-navbar-visible": isNavbarVisible.value,
          title: displayTitle.value,
          "show-back": _ctx.showBack,
          "title-color": navTitleColor.value,
          "bg-color": navBgColor.value,
          fixed: false,
          placeholder: false,
          border: _ctx.border
        }), null, 8 /* PROPS */, ["is-navbar-visible", "title", "show-back", "title-color", "bg-color", "border"])
      : _cC("v-if", true),
    isTrue(useCustomRefresher.value)
      ? _cE("scroll-view", _uM({
          key: 1,
          direction: pageScrollDirection.value,
          class: "wtu-10fwolo-0 wtu-mswjne-1 wtu-1h86bsx-2",
          "refresher-enabled": isRefresherEnabled.value,
          "refresher-triggered": isTriggered.value,
          "refresher-background": themeTokens.value.bgContent,
          "lower-threshold": 50,
          onRefresherrefresh: handleRefresherRefresh,
          onRefresherrestore: handleRefresherRestore,
          onScroll: handleScroll,
          onScrolltolower: handleScrollToLower
        }), [
          renderSlot(_ctx.$slots, "default")
        ], 40 /* PROPS, NEED_HYDRATION */, ["direction", "refresher-enabled", "refresher-triggered", "refresher-background"])
      : _cE("scroll-view", _uM({
          key: 2,
          class: "wtu-10fwolo-0 wtu-mswjne-1 wtu-1h86bsx-2",
          direction: pageScrollDirection.value,
          "lower-threshold": 50,
          onScroll: handleScroll,
          onScrolltolower: handleScrollToLower
        }), [
          renderSlot(_ctx.$slots, "default")
        ], 40 /* PROPS, NEED_HYDRATION */, ["direction"])
  ], 6 /* CLASS, STYLE */)
}
}

})
export default __sfc__
const GenSrcLayoutsNavbarStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["wtu-10fwolo-0", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["wtu-mswjne-1", _pS(_uM([["display", "flex"]]))], ["wtu-1h86bsx-2", _pS(_uM([["flexDirection", "column"]]))]])]
