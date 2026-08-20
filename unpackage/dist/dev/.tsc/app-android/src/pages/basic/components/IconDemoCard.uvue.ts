import _easycom_uni_icons from '@/uni_modules/uni-icons/components/uni-icons/uni-icons.uvue'
import _easycom_l_icon from '@/uni_modules/lime-icon/components/l-icon/l-icon.uvue'
import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import Card from './Card.uvue';
import { computed } from 'vue';
import { $t } from '@/src/utils/i18n';


const __sfc__ = defineComponent({
  __name: 'IconDemoCard',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const iconDemoTitle = computed((): string => $t('basic.iconDemoTitle'));
const svgAuthWarning = computed((): string => $t('basic.svgAuthWarning'));

return (): any | null => {

const _component_uni_icons = resolveEasyComponent("uni-icons",_easycom_uni_icons)
const _component_l_icon = resolveEasyComponent("l-icon",_easycom_l_icon)
const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)

  return _cV(unref(Card), _uM({ title: iconDemoTitle.value }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "wtu-edh1ze-0 wtu-r2og8u-1 wtu-1c6w9qp-2 wtu-e32pgj-3" }), [
        _cE("view", _uM({ class: "wtu-edh1ze-0 wtu-r2og8u-1" }), [
          _cE("view", _uM({ class: "wtu-jjoyn4-4 wtu-ubwupt-5 wtu-1u0ls6d-6 wtu-1i1fm6y-7 wtu-b8dflc-8" })),
          _cE("text", _uM({ class: "wtu-kba525-9 wtu-1dcwght-a wtu-1lor33j-b" }), "uni-icon")
        ]),
        _cE("view", _uM({ class: "wtu-edh1ze-0 wtu-r2og8u-1" }), [
          _cV(_component_uni_icons, _uM({
            type: "contact",
            size: "26",
            style: _nS(_uM({"color":"#3b82f6","margin-right":"8px"}))
          }), null, 8 /* PROPS */, ["style"]),
          _cE("text", _uM({ class: "wtu-lbze2f-c wtu-1uc842y-d" }), "contact")
        ])
      ]),
      _cE("view", _uM({ class: "wtu-3wtn0e-e wtu-u07xcs-f" })),
      _cE("view", _uM({ class: "wtu-edh1ze-0 wtu-r2og8u-1 wtu-1c6w9qp-2 wtu-e32pgj-3" }), [
        _cE("view", _uM({ class: "wtu-edh1ze-0 wtu-r2og8u-1" }), [
          _cE("view", _uM({ class: "wtu-jjoyn4-4 wtu-ubwupt-5 wtu-1u0ls6d-6 wtu-vs4ahm-g wtu-b8dflc-8" })),
          _cE("view", _uM({ class: "wtu-no3ft0-h" }), [
            _cE("text", _uM({ class: "wtu-kba525-9 wtu-1dcwght-a wtu-1lor33j-b" }), "lime-icon"),
            _cE("view", _uM({ class: "wtu-159q4wc-i wtu-1wj9wbu-j wtu-dktp6a-k wtu-vjo5gh-l wtu-bevybu-m wtu-p0dhsv-n wtu-kl7gdk-o wtu-11fbxns-p wtu-1da3t5c-q" }), [
              _cE("text", _uM({ class: "wtu-12mw64h-r wtu-nnvrio-s" }), _tD(svgAuthWarning.value), 1 /* TEXT */)
            ])
          ])
        ]),
        _cE("view", _uM({ class: "wtu-edh1ze-0 wtu-r2og8u-1" }), [
          _cV(_component_l_icon, _uM({
            name: "circle",
            size: "24",
            style: _nS(_uM({"color":"#10b981","margin-right":"8px"}))
          }), null, 8 /* PROPS */, ["style"]),
          _cE("text", _uM({ class: "wtu-lbze2f-c wtu-1uc842y-d" }), "circle")
        ])
      ]),
      _cE("view", _uM({ class: "wtu-3wtn0e-e wtu-u07xcs-f" })),
      _cE("view", _uM({ class: "wtu-edh1ze-0 wtu-r2og8u-1 wtu-1c6w9qp-2 wtu-e32pgj-3" }), [
        _cE("view", _uM({ class: "wtu-edh1ze-0 wtu-r2og8u-1" }), [
          _cE("view", _uM({ class: "wtu-jjoyn4-4 wtu-ubwupt-5 wtu-1u0ls6d-6 wtu-1fmwiif-t wtu-b8dflc-8" })),
          _cE("text", _uM({ class: "wtu-kba525-9 wtu-1dcwght-a wtu-1lor33j-b" }), "up-icon (uview-ultra)")
        ]),
        _cE("view", _uM({ class: "wtu-edh1ze-0 wtu-r2og8u-1" }), [
          _cV(_component_up_icon, _uM({
            name: "setting",
            size: "24",
            style: _nS(_uM({"color":"#a855f7","margin-right":"8px"}))
          }), null, 8 /* PROPS */, ["style"]),
          _cE("text", _uM({ class: "wtu-lbze2f-c wtu-1uc842y-d" }), "setting")
        ])
      ])
    ]),
    _: 1 /* STABLE */
  }), 8 /* PROPS */, ["title"])
}
}

})
export default __sfc__
const GenSrcPagesBasicComponentsIconDemoCardStyles = [_uM([["wtu-edh1ze-0", _pS(_uM([["flexDirection", "row"]]))], ["wtu-r2og8u-1", _pS(_uM([["alignItems", "center"]]))], ["wtu-1c6w9qp-2", _pS(_uM([["justifyContent", "space-between"]]))], ["wtu-e32pgj-3", _pS(_uM([["paddingTop", 12], ["paddingBottom", 12]]))], ["wtu-jjoyn4-4", _pS(_uM([["width", 6]]))], ["wtu-ubwupt-5", _pS(_uM([["height", 6]]))], ["wtu-1u0ls6d-6", _pS(_uM([["borderTopLeftRadius", 3], ["borderTopRightRadius", 3], ["borderBottomRightRadius", 3], ["borderBottomLeftRadius", 3]]))], ["wtu-1i1fm6y-7", _pS(_uM([["backgroundColor", "#3b82f6"]]))], ["wtu-b8dflc-8", _pS(_uM([["marginRight", 8]]))], ["wtu-kba525-9", _pS(_uM([["fontSize", 14]]))], ["wtu-1dcwght-a", _pS(_uM([["color", "#475569"]]))], ["wtu-1lor33j-b", _pS(_uM([["--tw-font-weight", "var(--font-weight-medium, 500)"], ["fontWeight", 500]]))], ["wtu-lbze2f-c", _pS(_uM([["fontSize", 12]]))], ["wtu-1uc842y-d", _pS(_uM([["color", "#94a3b8"]]))], ["wtu-3wtn0e-e", _pS(_uM([["height", 1]]))], ["wtu-u07xcs-f", _pS(_uM([["backgroundColor", "#f1f5f9"]]))], ["wtu-vs4ahm-g", _pS(_uM([["backgroundColor", "#10b981"]]))], ["wtu-no3ft0-h", _pS(_uM([["flexDirection", "column"]]))], ["wtu-159q4wc-i", _pS(_uM([["backgroundColor", "#fff1f2"]]))], ["wtu-1wj9wbu-j", _pS(_uM([["borderTopLeftRadius", 4], ["borderTopRightRadius", 4], ["borderBottomRightRadius", 4], ["borderBottomLeftRadius", 4]]))], ["wtu-dktp6a-k", _pS(_uM([["paddingTop", 2], ["paddingBottom", 2]]))], ["wtu-vjo5gh-l", _pS(_uM([["paddingLeft", 6], ["paddingRight", 6]]))], ["wtu-bevybu-m", _pS(_uM([["marginTop", 4]]))], ["wtu-p0dhsv-n", _pS(_uM([["alignSelf", "flex-start"]]))], ["wtu-kl7gdk-o", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "var(--tw-border-style)"], ["borderRightStyle", "var(--tw-border-style)"], ["borderBottomStyle", "var(--tw-border-style)"], ["borderLeftStyle", "var(--tw-border-style)"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["wtu-11fbxns-p", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["wtu-1da3t5c-q", _pS(_uM([["borderTopColor", "#ffe4e6"], ["borderRightColor", "#ffe4e6"], ["borderBottomColor", "#ffe4e6"], ["borderLeftColor", "#ffe4e6"]]))], ["wtu-12mw64h-r", _pS(_uM([["fontSize", 10]]))], ["wtu-nnvrio-s", _pS(_uM([["color", "#f43f5e"]]))], ["wtu-1fmwiif-t", _pS(_uM([["backgroundColor", "#a855f7"]]))]])]
