import _easycom_up_title from '@/uni_modules/uview-ultra/components/up-title/up-title.uvue'
import _easycom_up_coupon from '@/uni_modules/uview-ultra/components/up-coupon/up-coupon.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue'
import { ref } from 'vue';

const __sfc__ = defineComponent({
  __name: 'coupon',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

;

const eventLog = ref<string>('点击优惠券查看事件');

function onClick() {
  eventLog.value = 'click => 点击了优惠券';
}

return (): any | null => {

const _component_up_title = resolveEasyComponent("up-title",_easycom_up_title)
const _component_up_coupon = resolveEasyComponent("up-coupon",_easycom_up_coupon)

  return _cV(unref(AppKu), _uM({
    layout: 'navbar',
    "show-back": true,
    "hide-navbar": false,
    "enable-pull-down-refresh": false,
    "page-style": {'navigationBarTitleText':'up-coupon 优惠券','navigationStyle':'custom'}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": {'navigationBarTitleText':'up-coupon 优惠券','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }), [
            _cE("view", _uM({ class: "weapp-tw-border p-_b16px_B" }), [
              _cE("view", _uM({ class: "weapp-tw-border demo-block" }), [
                _cV(_component_up_title, _uM({ class: "demo-title" }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "weapp-tw-border demo-title-text" }), "基础用法")
                  ]),
                  _: 1 /* STABLE */
                })),
                _cV(_component_up_coupon, _uM({
                  amount: "50",
                  title: "新人专享优惠券",
                  desc: "满 100 元可用",
                  time: "有效期至 2026-12-31",
                  "action-text": "立即领取",
                  onClick: onClick
                }))
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cV(_component_up_title, _uM({ class: "demo-title" }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "weapp-tw-border demo-title-text" }), "不同形态（coupon / envelope / card）")
                  ]),
                  _: 1 /* STABLE */
                })),
                _cV(_component_up_coupon, _uM({
                  amount: "20",
                  title: "信封样式",
                  shape: "envelope",
                  onClick: onClick
                })),
                _cV(_component_up_coupon, _uM({
                  class: "mt-_b12px_B",
                  amount: "30",
                  title: "卡片样式",
                  desc: "全场通用",
                  shape: "card",
                  onClick: onClick
                }))
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cV(_component_up_title, _uM({ class: "demo-title" }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "weapp-tw-border demo-title-text" }), "不同尺寸（small / medium / large）")
                  ]),
                  _: 1 /* STABLE */
                })),
                _cV(_component_up_coupon, _uM({
                  amount: "10",
                  title: "小型",
                  size: "small",
                  onClick: onClick
                })),
                _cV(_component_up_coupon, _uM({
                  class: "mt-_b12px_B",
                  amount: "10",
                  title: "中型",
                  size: "medium",
                  onClick: onClick
                })),
                _cV(_component_up_coupon, _uM({
                  class: "mt-_b12px_B",
                  amount: "10",
                  title: "大型",
                  size: "large",
                  onClick: onClick
                }))
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cV(_component_up_title, _uM({ class: "demo-title" }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "weapp-tw-border demo-title-text" }), "禁用状态 / 自定义背景色")
                  ]),
                  _: 1 /* STABLE */
                })),
                _cV(_component_up_coupon, _uM({
                  amount: "99",
                  title: "已失效优惠券",
                  "action-text": "已过期",
                  disabled: "",
                  onClick: onClick
                })),
                _cV(_component_up_coupon, _uM({
                  class: "mt-_b12px_B",
                  amount: "15",
                  title: "自定义背景",
                  "bg-color": "#eef7ff",
                  "action-text": "去使用",
                  onClick: onClick
                }))
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cV(_component_up_title, _uM({ class: "demo-title" }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "weapp-tw-border demo-title-text" }), "自定义操作插槽")
                  ]),
                  _: 1 /* STABLE */
                })),
                _cV(_component_up_coupon, _uM({
                  amount: "88",
                  title: "大额优惠券",
                  desc: "自定义右侧按钮",
                  onClick: onClick
                }), _uM({
                  action: withSlotCtx((): any[] => [
                    _cE("view", _uM({ class: "weapp-tw-border custom-action" }), [
                      _cE("text", _uM({ class: "weapp-tw-border custom-action-text" }), "点击领取")
                    ])
                  ]),
                  _: 1 /* STABLE */
                }))
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cV(_component_up_title, _uM({ class: "demo-title" }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "weapp-tw-border demo-title-text" }), "说明")
                  ]),
                  _: 1 /* STABLE */
                })),
                _cE("text", _uM({ class: "weapp-tw-border demo-text" }), " up-coupon 支持 coupon / envelope / card 三种形态、small / medium / large 三种尺寸，可自定义插槽与点击事件。 ")
              ]),
              _cE("view", _uM({ class: "weapp-tw-border log-box mt-_b10px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border log-text" }), _tD(eventLog.value), 1 /* TEXT */)
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
const GenSrcSubUviewUltraDemosCouponCouponStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-title", _pS(_uM([["marginBottom", 10]]))], ["demo-title-text", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"]]))], ["demo-text", _pS(_uM([["fontSize", 13], ["color", "#475569"], ["lineHeight", "20px"]]))], ["custom-action", _pS(_uM([["paddingTop", 8], ["paddingRight", 14], ["paddingBottom", 8], ["paddingLeft", 14], ["backgroundImage", "linear-gradient(to bottom right, #0957de, #7c3aed)"], ["borderTopLeftRadius", 6], ["borderTopRightRadius", 6], ["borderBottomRightRadius", 6], ["borderBottomLeftRadius", 6]]))], ["custom-action-text", _pS(_uM([["fontSize", 13], ["color", "#ffffff"]]))], ["log-box", _pS(_uM([["paddingTop", 10], ["paddingRight", 10], ["paddingBottom", 10], ["paddingLeft", 10], ["backgroundColor", "#f1f5f9"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["log-text", _pS(_uM([["fontSize", 13], ["color", "#475569"], ["lineHeight", "20px"]]))]])]
