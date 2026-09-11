import _easycom_up_tabbar_item from '@/uni_modules/uview-ultra/components/up-tabbar-item/up-tabbar-item.uvue'
import _easycom_up_tabbar from '@/uni_modules/uview-ultra/components/up-tabbar/up-tabbar.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue'
import { ref } from 'vue';

const __sfc__ = defineComponent({
  __name: 'tabbar',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

;

const value1 = ref<number>(0);
const value2 = ref<number>(0);
const value3 = ref<number>(0);

function change1(index: any): void {
  value1.value = parseInt(index.toString());
}

function change2(index: any): void {
  value2.value = parseInt(index.toString());
}

function change3(index: any): void {
  value3.value = parseInt(index.toString());
}

return (): any | null => {

const _component_up_tabbar_item = resolveEasyComponent("up-tabbar-item",_easycom_up_tabbar_item)
const _component_up_tabbar = resolveEasyComponent("up-tabbar",_easycom_up_tabbar)

  return _cV(unref(AppKu), _uM({
    layout: 'navbar',
    "show-back": true,
    "hide-navbar": false,
    "enable-pull-down-refresh": false,
    "page-style": {'navigationBarTitleText':'Tabbar 底部导航','navigationStyle':'custom'}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": {'navigationBarTitleText':'Tabbar 底部导航','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }), [
            _cE("view", _uM({ class: "weapp-tw-border p-_b16px_B" }), [
              _cE("view", _uM({ class: "weapp-tw-border demo-block" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "基础用法"),
                _cV(_component_up_tabbar, _uM({
                  value: value1.value,
                  fixed: false,
                  "safe-area-inset-bottom": false,
                  onChange: change1
                }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cV(_component_up_tabbar_item, _uM({
                      text: "首页",
                      icon: "home"
                    })),
                    _cV(_component_up_tabbar_item, _uM({
                      text: "放映厅",
                      icon: "photo"
                    })),
                    _cV(_component_up_tabbar_item, _uM({
                      text: "直播",
                      icon: "play-right"
                    })),
                    _cV(_component_up_tabbar_item, _uM({
                      text: "我的",
                      icon: "account"
                    }))
                  ]),
                  _: 1 /* STABLE */
                }), 8 /* PROPS */, ["value"])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "徽标提示与小红点"),
                _cV(_component_up_tabbar, _uM({
                  value: value2.value,
                  fixed: false,
                  "safe-area-inset-bottom": false,
                  onChange: change2
                }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cV(_component_up_tabbar_item, _uM({
                      text: "首页",
                      icon: "home",
                      badge: "5"
                    })),
                    _cV(_component_up_tabbar_item, _uM({
                      text: "消息",
                      icon: "chat",
                      dot: true
                    })),
                    _cV(_component_up_tabbar_item, _uM({
                      text: "我的",
                      icon: "account"
                    }))
                  ]),
                  _: 1 /* STABLE */
                }), 8 /* PROPS */, ["value"])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "自定义颜色"),
                _cV(_component_up_tabbar, _uM({
                  value: value3.value,
                  fixed: false,
                  "safe-area-inset-bottom": false,
                  "active-color": "#fa3534",
                  "inactive-color": "#909399",
                  onChange: change3
                }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cV(_component_up_tabbar_item, _uM({
                      text: "发现",
                      icon: "search"
                    })),
                    _cV(_component_up_tabbar_item, _uM({
                      text: "购物车",
                      icon: "shopping-cart"
                    })),
                    _cV(_component_up_tabbar_item, _uM({
                      text: "我的",
                      icon: "account"
                    }))
                  ]),
                  _: 1 /* STABLE */
                }), 8 /* PROPS */, ["value"])
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
const GenSrcSubUviewUltraDemosTabbarTabbarStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 12], ["paddingLeft", 6], ["borderLeftWidth", 3], ["borderLeftColor", "var(--theme-color, #0957de)"], ["borderLeftStyle", "solid"]]))]])]
