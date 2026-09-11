import { computed } from 'vue';
import { NAVBAR_CONTENT_HEIGHT, safeAreaInsets, systemInfo } from '@/src/utils/systemInfo';
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
  },
  isNavbarVisible: {
    type: Boolean,
    default: true
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
  if (!props.showBack) {
    return;
  }
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

  return isTrue(_ctx.isNavbarVisible)
    ? _cE("view", _uM({
        key: 0,
        class: "weapp-tw-border wtu-1aith5s-0"
      }), [
        _cE("view", _uM({
          class: _nC(["weapp-tw-border", _ctx.fixed ? 'wtu-1aith5s-0 wtu-1hza0m2-1 wtu-v37xsx-2 wtu-1kuus4x-3 wtu-yudqu9-4 wtu-16gfyql-5 wtu-172k480-6 wtu-1jjdtzl-7' : 'wtu-1aith5s-0 wtu-1hza0m2-1 wtu-v37xsx-2']),
          style: _nS(_uM({
        backgroundColor: effectiveBgColor.value,
        borderBottomWidth: (_ctx.border && _ctx.isNavbarVisible) ? '1px' : '0px',
        borderBottomStyle: (_ctx.border && _ctx.isNavbarVisible) ? 'solid' : 'none',
        borderBottomColor: (_ctx.border && _ctx.isNavbarVisible) ? '#e2e8f0' : 'transparent'
      }))
        }), [
          _cE("view", _uM({
            class: "weapp-tw-border status-bar",
            style: _nS(_uM({ height: `${statusBarHeight.value}px` }))
          }), [
            renderSlot(_ctx.$slots, "statusBar")
          ], 4 /* STYLE */),
          _cE("view", _uM({
            class: "weapp-tw-border wtu-18yaopx-8 wtu-1aith5s-0 wtu-1hza0m2-1 wtu-14uskr-9 wtu-15lgj4j-a wtu-e0ckar-b",
            style: _nS(_uM({ height: `${unref(NAVBAR_CONTENT_HEIGHT)}px` }))
          }), [
            _cE("view", _uM({ class: "weapp-tw-border wtu-2b6zb8-c wtu-yudqu9-4 wtu-tm4vo7-d wtu-16gfyql-5 wtu-1sye3kh-e wtu-wna7a7-f wtu-1hza0m2-1 wtu-14uskr-9 wtu-15lgj4j-a wtu-xcw4ny-g" }), [
              renderSlot(_ctx.$slots, "left", {}, (): any[] => [
                isTrue(_ctx.showBack)
                  ? _cE("view", _uM({
                      key: 0,
                      class: "weapp-tw-border wtu-1hza0m2-1 wtu-14uskr-9 wtu-15lgj4j-a wtu-e0ckar-b wtu-4zyuka-h wtu-1jqsajq-i",
                      onClick: handleBack
                    }), [
                      _cE("view", _uM({
                        class: "weapp-tw-border wtu-o68kmh-j wtu-13y4yiu-k wtu-1sg8gtf-l wtu-jkppd5-m wtu-13mafgx-n wtu-1dwvfa3-o wtu-1dc31xl-p",
                        style: _nS(_uM({ borderLeftColor: effectiveTitleColor.value, borderBottomColor: effectiveTitleColor.value, transform: 'rotate(45deg)' }))
                      }), null, 4 /* STYLE */)
                    ])
                  : _cC("v-if", true)
              ])
            ]),
            _cE("view", _uM({ class: "weapp-tw-border wtu-1hza0m2-1 wtu-1x7okjj-q wtu-1x9vpnw-r wtu-14uskr-9 wtu-15lgj4j-a wtu-e0ckar-b wtu-19jr9qi-s wtu-edlfxo-t" }), [
              renderSlot(_ctx.$slots, "mid", {}, (): any[] => [
                renderSlot(_ctx.$slots, "default", {}, (): any[] => [
                  _ctx.title.length > 0
                    ? _cE("text", _uM({
                        key: 0,
                        class: "weapp-tw-border wtu-1roo6rl-u wtu-18wne8y-v wtu-1i83dl2-w",
                        style: _nS(_uM({ color: effectiveTitleColor.value }))
                      }), _tD(_ctx.title), 5 /* TEXT, STYLE */)
                    : _cC("v-if", true)
                ])
              ])
            ]),
            _cE("view", _uM({ class: "weapp-tw-border wtu-2b6zb8-c wtu-yudqu9-4 wtu-tm4vo7-d wtu-172k480-6 wtu-1sye3kh-e wtu-wna7a7-f wtu-1hza0m2-1 wtu-14uskr-9 wtu-15lgj4j-a wtu-1jbsm23-x wtu-cttqi0-y" }), [
              renderSlot(_ctx.$slots, "right")
            ])
          ], 4 /* STYLE */)
        ], 6 /* CLASS, STYLE */),
        isTrue(_ctx.fixed && _ctx.placeholder)
          ? _cE("view", _uM({
              key: 0,
              class: "weapp-tw-border",
              style: _nS(_uM({ height: `${statusBarHeight.value + (_ctx.isNavbarVisible ? unref(NAVBAR_CONTENT_HEIGHT) : 0)}px` }))
            }), null, 4 /* STYLE */)
          : _cC("v-if", true)
      ])
    : _cE("view", _uM({
        key: 1,
        class: "weapp-tw-border status-bar",
        style: _nS(_uM({ height: `${statusBarHeight.value}px` }))
      }), null, 4 /* STYLE */)
}
}

})
export default __sfc__
const GenSrcComponentsNavBarNavBarStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["wtu-1aith5s-0", _pS(_uM([["width", "100%"]]))], ["wtu-1hza0m2-1", _pS(_uM([["display", "flex"]]))], ["wtu-v37xsx-2", _pS(_uM([["flexDirection", "column"]]))], ["wtu-1kuus4x-3", _pS(_uM([["position", "fixed"]]))], ["wtu-yudqu9-4", _pS(_uM([["top", 0]]))], ["wtu-16gfyql-5", _pS(_uM([["left", 0]]))], ["wtu-172k480-6", _pS(_uM([["right", 0]]))], ["wtu-1jjdtzl-7", _pS(_uM([["zIndex", 999]]))], ["wtu-18yaopx-8", _pS(_uM([["position", "relative"]]))], ["wtu-14uskr-9", _pS(_uM([["flexDirection", "row"]]))], ["wtu-15lgj4j-a", _pS(_uM([["alignItems", "center"]]))], ["wtu-e0ckar-b", _pS(_uM([["justifyContent", "center"]]))], ["wtu-2b6zb8-c", _pS(_uM([["position", "absolute"]]))], ["wtu-tm4vo7-d", _pS(_uM([["bottom", 0]]))], ["wtu-1sye3kh-e", _pS(_uM([["zIndex", 10]]))], ["wtu-wna7a7-f", _pS(_uM([["width", 60]]))], ["wtu-xcw4ny-g", _pS(_uM([["justifyContent", "flex-start"]]))], ["wtu-4zyuka-h", _pS(_uM([["paddingTop", 10], ["paddingBottom", 10]]))], ["wtu-1jqsajq-i", _pS(_uM([["paddingLeft", 15], ["paddingRight", 15]]))], ["wtu-o68kmh-j", _pS(_uM([["height", 10]]))], ["wtu-13y4yiu-k", _pS(_uM([["width", 10]]))], ["wtu-1sg8gtf-l", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "var(--tw-border-style)"], ["borderTopWidth", 0]]))], ["wtu-jkppd5-m", _pS(_uM([["--tw-border-style", "solid"], ["borderRightStyle", "var(--tw-border-style)"], ["borderRightWidth", 0]]))], ["wtu-13mafgx-n", _pS(_uM([["--tw-border-style", "solid"], ["borderBottomStyle", "var(--tw-border-style)"], ["borderBottomWidth", 2]]))], ["wtu-1dwvfa3-o", _pS(_uM([["--tw-border-style", "solid"], ["borderLeftStyle", "var(--tw-border-style)"], ["borderLeftWidth", 2]]))], ["wtu-1dc31xl-p", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["wtu-1x7okjj-q", _pS(_uM([["height", "100%"]]))], ["wtu-1x9vpnw-r", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["wtu-19jr9qi-s", _pS(_uM([["paddingLeft", 60]]))], ["wtu-edlfxo-t", _pS(_uM([["paddingRight", 60]]))], ["wtu-1roo6rl-u", _pS(_uM([["fontSize", 17]]))], ["wtu-18wne8y-v", _pS(_uM([["--tw-font-weight", "var(--font-weight-semibold, 600)"], ["fontWeight", 600]]))], ["wtu-1i83dl2-w", _pS(_uM([["textOverflow", "ellipsis"]]))], ["wtu-1jbsm23-x", _pS(_uM([["justifyContent", "flex-end"]]))], ["wtu-cttqi0-y", _pS(_uM([["paddingRight", 15]]))]])]
