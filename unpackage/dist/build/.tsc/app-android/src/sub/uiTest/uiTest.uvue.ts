import _imports_0 from './images/logo.png'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue'
import logoImg from './images/logo.png';

const __sfc__ = defineComponent({
  __name: 'uiTest',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

;

const logoSrc = logoImg;

return (): any | null => {

  return _cV(unref(AppKu), _uM({
    layout: 'navbar',
    "show-back": true,
    "hide-navbar": false,
    "enable-pull-down-refresh": false,
    "page-style": {'navigationBarTitleText':'UI 测试','navigationStyle':'custom'}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": {'navigationBarTitleText':'UI 测试','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "weapp-tw-border p-_b16px_B min-h-screen bg-_b_hf8fafc_B" }), [
            _cE("text", _uM({ class: "weapp-tw-border text-_b18px_B font-bold text-_b_h334155_B mb-_b16px_B" }), "Image 标签测试"),
            _cE("view", _uM({ class: "weapp-tw-border mb-_b16px_B p-_b12px_B bg-white rounded-_b8px_B shadow-xs" }), [
              _cE("text", _uM({ class: "weapp-tw-border text-_b14px_B font-bold text-_b_h64748b_B mb-_b8px_B" }), "1. 相对路径引用 (./images/logo.png)"),
              _cE("image", _uM({
                src: _imports_0,
                style: _nS(_uM({"width":"80px","height":"80px"})),
                mode: "aspectFit"
              }), null, 4 /* STYLE */)
            ]),
            _cE("view", _uM({ class: "weapp-tw-border mb-_b16px_B p-_b12px_B bg-white rounded-_b8px_B shadow-xs" }), [
              _cE("text", _uM({ class: "weapp-tw-border text-_b14px_B font-bold text-_b_h64748b_B mb-_b8px_B" }), "2. 绝对静态路径 (/static/logo.png)"),
              _cE("image", _uM({
                src: "/static/logo.png",
                style: _nS(_uM({"width":"80px","height":"80px"})),
                mode: "aspectFit"
              }), null, 4 /* STYLE */)
            ]),
            _cE("view", _uM({ class: "weapp-tw-border mb-_b16px_B p-_b12px_B bg-white rounded-_b8px_B shadow-xs" }), [
              _cE("text", _uM({ class: "weapp-tw-border text-_b14px_B font-bold text-_b_h64748b_B mb-_b8px_B" }), "3. JS 变量绑定 (imported logo)"),
              _cE("image", _uM({
                src: unref(logoSrc),
                style: _nS(_uM({"width":"80px","height":"80px"})),
                mode: "aspectFit"
              }), null, 12 /* STYLE, PROPS */, ["src"])
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
const GenSrcSubUiTestUiTestStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))]])]
