import _easycom_up_collapse_item from '@/uni_modules/uview-ultra/components/up-collapse-item/up-collapse-item.uvue'
import _easycom_up_collapse from '@/uni_modules/uview-ultra/components/up-collapse/up-collapse.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue'
import { ref } from 'vue';

const __sfc__ = defineComponent({
  __name: 'collapse',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

;

const collapseValue = ref('1');

return (): any | null => {

const _component_up_collapse_item = resolveEasyComponent("up-collapse-item",_easycom_up_collapse_item)
const _component_up_collapse = resolveEasyComponent("up-collapse",_easycom_up_collapse)

  return _cV(unref(AppKu), _uM({
    layout: 'navbar',
    "show-back": true,
    "hide-navbar": false,
    "enable-pull-down-refresh": false,
    "page-style": {'navigationBarTitleText':'up-collapse 折叠面板','navigationStyle':'custom'}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": {'navigationBarTitleText':'up-collapse 折叠面板','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }), [
            _cE("view", _uM({ class: "weapp-tw-border p-_b16px_B" }), [
              _cE("view", _uM({ class: "weapp-tw-border demo-block" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "基础用法"),
                _cV(_component_up_collapse, _uM({
                  value: collapseValue.value,
                  accordion: true
                }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cV(_component_up_collapse_item, _uM({
                      title: "第一项",
                      name: "1"
                    }), _uM({
                      default: withSlotCtx((): any[] => [
                        _cE("text", _uM({ class: "weapp-tw-border collapse-text" }), "uview-ultra 是基于 uview-plus 修改的 uni-app-x 版本")
                      ]),
                      _: 1 /* STABLE */
                    })),
                    _cV(_component_up_collapse_item, _uM({
                      title: "第二项",
                      name: "2"
                    }), _uM({
                      default: withSlotCtx((): any[] => [
                        _cE("text", _uM({ class: "weapp-tw-border collapse-text" }), "支持 iOS、Android、H5、小程序等多端")
                      ]),
                      _: 1 /* STABLE */
                    }))
                  ]),
                  _: 1 /* STABLE */
                }), 8 /* PROPS */, ["value"])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "自定义图标"),
                _cV(_component_up_collapse, _uM({ value: ['1'] }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cV(_component_up_collapse_item, _uM({
                      title: "第一项",
                      name: "1",
                      icon: "star"
                    }), _uM({
                      default: withSlotCtx((): any[] => [
                        _cE("text", _uM({ class: "weapp-tw-border collapse-text" }), "带有星星图标的面板")
                      ]),
                      _: 1 /* STABLE */
                    }))
                  ]),
                  _: 1 /* STABLE */
                }))
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
const GenSrcSubUviewUltraDemosCollapseCollapseStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "var(--theme-color, #0957de)"]]))], ["collapse-text", _pS(_uM([["fontSize", 13], ["color", "#909399"], ["lineHeight", "20px"]]))]])]
