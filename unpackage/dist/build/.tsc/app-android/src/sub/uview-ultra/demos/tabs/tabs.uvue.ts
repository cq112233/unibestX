import _easycom_up_tabs from '@/uni_modules/uview-ultra/components/up-tabs/up-tabs.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue'
import { ref } from 'vue';

const __sfc__ = defineComponent({
  __name: 'tabs',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

;

// 1. 超长标签列表 (14项)
const currentLong = ref<number>(0);
const longList = ref<Array<UTSJSONObject>>([
  { name: '关注' },
  { name: '推荐' },
  { name: '电影' },
  { name: '电视剧' },
  { name: '综艺' },
  { name: '动漫' },
  { name: '少儿' },
  { name: '纪录片' },
  { name: '体育' },
  { name: '游戏' },
  { name: '音乐' },
  { name: '搞笑' },
  { name: '科技' },
  { name: '美食' }
]);

// 2. 基础标签列表
const currentBase = ref<number>(0);
const baseList = ref<Array<UTSJSONObject>>([
  { name: '关注' },
  { name: '推荐' },
  { name: '电影' },
  { name: '科技' }
]);

// 3. 带徽标列表
const currentBadge = ref<number>(0);
const badgeList = ref<Array<UTSJSONObject>>([
  { name: '关注', badge: { isDot: true } as UTSJSONObject },
  { name: '推荐', badge: { value: 5 } as UTSJSONObject },
  { name: '消息', badge: { value: 99 } as UTSJSONObject },
  { name: '热榜' }
]);

// 4. 禁用项列表
const currentDisabled = ref<number>(0);
const disabledList = ref<Array<UTSJSONObject>>([
  { name: '国内新闻' },
  { name: '国际焦点' },
  { name: '付费专区', disabled: true },
  { name: '数码测评' }
]);

// 5. 自定义样式列表
const currentCustom = ref<number>(1);
const customList = ref<Array<UTSJSONObject>>([
  { name: '最新发布' },
  { name: '最热推荐' },
  { name: '好评排行' },
  { name: '折扣特惠' }
]);

// 6. 等分不可滚动列表
const currentEqual = ref<number>(0);
const equalList = ref<Array<UTSJSONObject>>([
  { name: '待付款' },
  { name: '待发货' },
  { name: '待收货' },
  { name: '待评价' }
]);

function onLongChange(item: UTSJSONObject) {
  console.log('超长Tabs切换:', item);
}

function onBaseChange(item: UTSJSONObject) {
  console.log('基础Tabs切换:', item);
}

return (): any | null => {

const _component_up_tabs = resolveEasyComponent("up-tabs",_easycom_up_tabs)

  return _cV(unref(AppKu), _uM({
    layout: 'navbar',
    "show-back": true,
    "hide-navbar": false,
    "enable-pull-down-refresh": false,
    "page-style": {'navigationBarTitleText':'Tabs 标签页','navigationStyle':'custom'}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": {'navigationBarTitleText':'Tabs 标签页','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }), [
            _cE("view", _uM({ class: "weapp-tw-border p-_b16px_B" }), [
              _cE("view", _uM({ class: "weapp-tw-border demo-block" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "超长横向滚动标签 (14项)"),
                _cV(_component_up_tabs, _uM({
                  current: currentLong.value,
                  "onUpdate:current": $event => {(currentLong).value = $event},
                  list: longList.value,
                  onChange: onLongChange
                }), null, 8 /* PROPS */, ["current", "onUpdate:current", "list"]),
                _cE("view", _uM({ class: "weapp-tw-border content-box mt-_b10px_B" }), [
                  _cE("text", _uM({ class: "weapp-tw-border content-text" }), "当前选中：" + _tD(longList.value[currentLong.value].name) + " (第 " + _tD(currentLong.value + 1) + " 项)", 1 /* TEXT */)
                ])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "基础用法与内容联动"),
                _cV(_component_up_tabs, _uM({
                  current: currentBase.value,
                  "onUpdate:current": $event => {(currentBase).value = $event},
                  list: baseList.value,
                  onChange: onBaseChange
                }), null, 8 /* PROPS */, ["current", "onUpdate:current", "list"]),
                _cE("view", _uM({ class: "weapp-tw-border content-box mt-_b10px_B" }), [
                  _cE("text", _uM({ class: "weapp-tw-border content-text" }), "正在浏览：" + _tD(baseList.value[currentBase.value].name) + " 分类内容", 1 /* TEXT */)
                ])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "带角标与红点提示"),
                _cV(_component_up_tabs, _uM({
                  current: currentBadge.value,
                  "onUpdate:current": $event => {(currentBadge).value = $event},
                  list: badgeList.value
                }), null, 8 /* PROPS */, ["current", "onUpdate:current", "list"])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "禁用特定标签项"),
                _cV(_component_up_tabs, _uM({
                  current: currentDisabled.value,
                  "onUpdate:current": $event => {(currentDisabled).value = $event},
                  list: disabledList.value
                }), null, 8 /* PROPS */, ["current", "onUpdate:current", "list"])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "自定义滑块与高亮样式"),
                _cV(_component_up_tabs, _uM({
                  current: currentCustom.value,
                  "onUpdate:current": $event => {(currentCustom).value = $event},
                  list: customList.value,
                  "line-color": "#fa3534",
                  "line-width": "32px",
                  "line-height": "4px",
                  "active-style": { color: '#fa3534', fontWeight: 'bold' } as UTSJSONObject,
                  "inactive-style": { color: '#909399' } as UTSJSONObject
                }), null, 8 /* PROPS */, ["current", "onUpdate:current", "list"])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "等分布局 (不可滚动: scrollable=false)"),
                _cV(_component_up_tabs, _uM({
                  current: currentEqual.value,
                  "onUpdate:current": $event => {(currentEqual).value = $event},
                  list: equalList.value,
                  scrollable: false,
                  "line-color": "#19be6b",
                  "active-style": { color: '#19be6b', fontWeight: 'bold' } as UTSJSONObject
                }), null, 8 /* PROPS */, ["current", "onUpdate:current", "list"])
              ])
            ])
          ])
        ]),
        _: 1 /* STABLE */
      }))
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcSubUviewUltraDemosTabsTabsStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "var(--theme-color, #0957de)"]]))], ["content-box", _pS(_uM([["paddingTop", 14], ["paddingRight", 14], ["paddingBottom", 14], ["paddingLeft", 14], ["backgroundColor", "#f1f5f9"], ["borderTopLeftRadius", 6], ["borderTopRightRadius", 6], ["borderBottomRightRadius", 6], ["borderBottomLeftRadius", 6], ["alignItems", "center"], ["justifyContent", "center"]]))], ["content-text", _pS(_uM([["fontSize", 13], ["color", "#475569"]]))]])]
