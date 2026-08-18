import _easycom_NavBar from '@/src/components/NavBar/NavBar.uvue'
import _easycom_up_card from '@/uni_modules/uview-ultra/components/up-card/up-card.uvue'
import _easycom_up_button from '@/uni_modules/uview-ultra/components/up-button/up-button.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'

const __sfc__ = defineComponent({
  __name: 'card',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const logoImg = '/static/logo.png';

return (): any | null => {

const _component_NavBar = resolveEasyComponent("NavBar",_easycom_NavBar)
const _component_up_card = resolveEasyComponent("up-card",_easycom_up_card)
const _component_up_button = resolveEasyComponent("up-button",_easycom_up_button)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "navigation-style": 'custom',
        "navigation-bar-title-text": 'up-card 卡片'
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "page-container bg-_b_hf8fafc_B min-h-screen pb-30px" }), [
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
                  body: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "text-13px text-_b_h606266_B leading-20px" }), "这是卡片主体内容区域，可以放置任意内容。")
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
                  body: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "text-13px text-_b_h606266_B leading-20px" }), "左侧缩略图为圆形，适合展示头像或图标。")
                  ]),
                  foot: withSlotCtx((): any[] => [
                    _cE("view", _uM({ class: "flex-row justify-between w-full" }), [
                      _cE("text", _uM({ class: "text-12px text-_b_h909399_B" }), "底部区域"),
                      _cE("text", _uM({ class: "text-12px text-_b_h2979ff_B" }), "查看详情")
                    ])
                  ]),
                  _: 1 /* STABLE */
                }))
              ]),
              _cE("view", _uM({ class: "demo-block mt-12px" }), [
                _cE("text", _uM({ class: "demo-label" }), "完整卡片(含头部和尾部)"),
                _cV(_component_up_card, _uM({
                  title: "订单信息",
                  "sub-title": "已完成",
                  thumb: logoImg,
                  margin: "0"
                }), _uM({
                  body: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "text-14px text-_b_h333_B leading-24px" }), "订单编号：2023080112345678\n商品名称：某某精美商品一件\n购买时间：2023-08-01 12:34:56")
                  ]),
                  foot: withSlotCtx((): any[] => [
                    _cE("view", _uM({ class: "flex-row justify-end w-full" }), [
                      _cV(_component_up_button, _uM({
                        text: "评价",
                        type: "primary",
                        size: "mini",
                        plain: true,
                        class: "mr-10px"
                      })),
                      _cV(_component_up_button, _uM({
                        text: "再次购买",
                        type: "primary",
                        size: "mini"
                      }))
                    ])
                  ]),
                  _: 1 /* STABLE */
                }))
              ]),
              _cE("view", _uM({ class: "demo-block mt-12px" }), [
                _cE("text", _uM({ class: "demo-label" }), "自定义阴影与边框"),
                _cV(_component_up_card, _uM({
                  title: "带明显阴影",
                  "sub-title": "自定义",
                  margin: "0",
                  "box-shadow": "0 4px 12px rgba(0,0,0,0.1)",
                  border: false
                }), _uM({
                  body: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "text-13px text-_b_h606266_B" }), "这个卡片去掉了边框，并自定义了较深的阴影效果。")
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
const GenSrcSubUviewUltraDemosCardCardStyles = [_uM([["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "#2979ff"]]))]])]
