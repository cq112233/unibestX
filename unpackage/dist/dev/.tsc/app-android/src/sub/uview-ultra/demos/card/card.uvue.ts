import _easycom_NavBar from '@/src/components/NavBar/NavBar.uvue'
import _easycom_up_card from '@/uni_modules/uview-ultra/components/up-card/up-card.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'

const __sfc__ = defineComponent({
  __name: 'card',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const logoImg = '/static/logo.png'

return (): any | null => {

const _component_NavBar = resolveEasyComponent("NavBar",_easycom_NavBar)
const _component_up_card = resolveEasyComponent("up-card",_easycom_up_card)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "navigation-style": 'custom',
        "navigation-bar-title-text": 'up-card 卡片'
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "page-container bg-__f8fafc_ min-h-screen pb-30px" }), [
            _cV(_component_NavBar, _uM({
              title: "up-card 卡片",
              "auto-back": true,
              "safe-area-inset-top": true,
              "bg-color": "#ffffff"
            })),
            _cE("view", _uM({ class: "p-16px" }), [
              _cE("view", _uM({ class: "demo-block" }), [
                _cE("text", _uM({ class: "demo-label" }), "基础卡片"),
                _cV(_component_up_card, _uM({
                  title: "基础卡片",
                  "sub-title": "副标题",
                  margin: "0",
                  "show-foot": false
                }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cE("text", _uM({
                      slot: "body",
                      class: "text-13px text-__606266_ leading-20px"
                    }), "这是卡片主体内容区域，可以放置任意内容。")
                  ]),
                  _: 1 /* STABLE */
                })),
                _cE("view", _uM({ class: "h-10px" })),
                _cV(_component_up_card, _uM({
                  title: "带缩略图",
                  thumb: logoImg,
                  "thumb-circle": true,
                  "thumb-width": "36px",
                  margin: "0"
                }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cE("text", _uM({
                      slot: "body",
                      class: "text-13px text-__606266_ leading-20px"
                    }), "左侧缩略图为圆形，适合展示头像或图标。"),
                    _cE("view", _uM({
                      slot: "foot",
                      class: "flex-row justify-between w-full"
                    }), [
                      _cE("text", _uM({ class: "text-12px text-__909399_" }), "底部区域"),
                      _cE("text", _uM({ class: "text-12px text-__2979ff_" }), "查看详情")
                    ])
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
const GenSrcSubUviewUltraDemosCardCardStyles = [_uM([["bg-__f8fafc_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f8fafc"]]))], ["flex-row", _pS(_uM([["flexDirection", "row"]]))], ["h-10px", _pS(_uM([["height", 10]]))], ["justify-between", _pS(_uM([["justifyContent", "space-between"]]))], ["leading-20px", _pS(_uM([["lineHeight", "20px"]]))], ["p-16px", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["pb-30px", _pS(_uM([["paddingBottom", 30]]))], ["text-__2979ff_", _pS(_uM([["color", "#2979ff"]]))], ["text-__606266_", _pS(_uM([["color", "#606266"]]))], ["text-__909399_", _pS(_uM([["color", "#909399"]]))], ["text-12px", _pS(_uM([["fontSize", 12]]))], ["text-13px", _pS(_uM([["fontSize", 13]]))], ["w-full", _pS(_uM([["width", "100%"]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "#2979ff"]]))]])]
