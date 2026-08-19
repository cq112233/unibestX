import { computed } from 'vue';
import { safeAreaInsets, systemInfo } from '@/src/utils/systemInfo';
import { useAppStore } from '@/src/store';
import { getThemeTokens } from '@/src/utils/theme';
import type { ThemeTokens } from '@/src/utils/theme';

// 定义组件参数类型

const __sfc__ = defineComponent({
  __name: 'NavBar',
  props: {
  title: {
    type: String,
    default: ''
  },
  titleColor: {
    type: String,
    default: ''
  },
  bgColor: {
    type: String,
    default: ''
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
  }
},
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const props = __props;

// 亮 / 暗主题 token（与 theme.json 同步）：未显式传色时跟随当前外观模式
const themeTokens = computed((): ThemeTokens => {
  return getThemeTokens(useAppStore().state.isDark);
});

// 实际生效的导航栏背景色：显式传 bgColor 时优先，否则跟随主题
const effectiveBgColor = computed((): string => {
  return props.bgColor != '' ? props.bgColor : themeTokens.value.navBg;
});

// 实际生效的标题 / 返回箭头颜色：显式传 titleColor 时优先，否则跟随主题
const effectiveTitleColor = computed((): string => {
  return props.titleColor != '' ? props.titleColor : themeTokens.value.navText;
});

// 计算状态栏高度
const statusBarHeight = computed<number>((): number => {
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

// 处理返回事件
function handleBack() {
  const pages = getCurrentPages();
  if (pages.length > 1) {
    uni.navigateBack({
      delta: 1
    });
  }
  else {
    uni.reLaunch({
      url: '/src/pages/index/index'
    });
  }
}

return (): any | null => {

  return _cE("view", null, [
    _cE("view", _uM({
      class: _nC(_ctx.fixed ? 'navbar-container navbar-fixed' : 'navbar-container'),
      style: _nS(_uM({
        backgroundColor: effectiveBgColor.value,
        borderBottomWidth: _ctx.border ? '1px' : '0px',
        borderBottomStyle: _ctx.border ? 'solid' : 'none',
        borderBottomColor: _ctx.border ? '#e2e8f0' : 'transparent'
      }))
    }), [
      _cE("view", _uM({
        style: _nS(_uM({ height: `${statusBarHeight.value}px` }))
      }), null, 4 /* STYLE */),
      _cE("view", _uM({ class: "navbar-content" }), [
        _cE("view", _uM({
          class: "navbar-left",
          onClick: handleBack
        }), [
          renderSlot(_ctx.$slots, "left", {}, (): any[] => [
            isTrue(_ctx.showBack)
              ? _cE("view", _uM({
                  key: 0,
                  class: "back-btn-wrapper"
                }), [
                  _cE("view", _uM({
                    class: "back-arrow",
                    style: _nS(_uM({ borderLeftColor: effectiveTitleColor.value, borderBottomColor: effectiveTitleColor.value }))
                  }), null, 4 /* STYLE */)
                ])
              : _cC("v-if", true)
          ])
        ]),
        _cE("view", _uM({ class: "navbar-title" }), [
          renderSlot(_ctx.$slots, "default", {}, (): any[] => [
            _cE("text", _uM({
              class: "title-text",
              style: _nS(_uM({ color: effectiveTitleColor.value }))
            }), _tD(_ctx.title), 5 /* TEXT, STYLE */)
          ])
        ]),
        _cE("view", _uM({ class: "navbar-right" }), [
          renderSlot(_ctx.$slots, "right")
        ])
      ])
    ], 6 /* CLASS, STYLE */),
    isTrue(_ctx.fixed && _ctx.placeholder)
      ? _cE("view", _uM({
          key: 0,
          style: _nS(_uM({ height: `${statusBarHeight.value + 44}px` }))
        }), null, 4 /* STYLE */)
      : _cC("v-if", true)
  ])
}
}

})
export default __sfc__
export type NavBarComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenSrcComponentsNavBarNavBarStyles = [_uM([["border", _pS(_uM([["borderTopWidth", "var(--un-line-width-default,1px)"], ["borderRightWidth", "var(--un-line-width-default,1px)"], ["borderBottomWidth", "var(--un-line-width-default,1px)"], ["borderLeftWidth", "var(--un-line-width-default,1px)"]]))], ["fixed", _pS(_uM([["position", "fixed"]]))], ["none", _pS(_uM([["display", "none"]]))], ["navbar-container", _pS(_uM([["width", "100%"], ["display", "flex"], ["flexDirection", "column"]]))], ["navbar-fixed", _pS(_uM([["position", "fixed"], ["top", 0], ["left", 0], ["right", 0], ["zIndex", 999]]))], ["navbar-content", _pS(_uM([["height", 44], ["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["justifyContent", "center"], ["position", "relative"], ["width", "100%"]]))], ["navbar-left", _pS(_uM([["position", "absolute"], ["left", 0], ["top", 0], ["bottom", 0], ["width", 60], ["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["justifyContent", "flex-start"], ["zIndex", 10]]))], ["back-btn-wrapper", _pS(_uM([["paddingTop", 10], ["paddingRight", 15], ["paddingBottom", 10], ["paddingLeft", 15], ["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["justifyContent", "center"]]))], ["back-arrow", _pS(_uM([["width", 10], ["height", 10], ["borderLeftWidth", 2], ["borderLeftStyle", "solid"], ["borderLeftColor", "#1e293b"], ["borderBottomWidth", 2], ["borderBottomStyle", "solid"], ["borderBottomColor", "#1e293b"], ["transform", "rotate(45deg)"]]))], ["navbar-title", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["justifyContent", "center"], ["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["height", "100%"], ["paddingLeft", 60], ["paddingRight", 60]]))], ["title-text", _pS(_uM([["fontSize", 17], ["fontWeight", 600], ["textOverflow", "ellipsis"]]))], ["navbar-right", _pS(_uM([["position", "absolute"], ["right", 0], ["top", 0], ["bottom", 0], ["width", 60], ["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["justifyContent", "flex-end"], ["zIndex", 10], ["paddingRight", 15]]))]])]
