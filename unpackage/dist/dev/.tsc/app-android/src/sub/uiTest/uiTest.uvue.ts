import _imports_0 from './images/logo.png'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
import logoImg from './images/logo.png';


const __sfc__ = defineComponent({
  __name: 'uiTest',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const logoSrc = logoImg;

return (): any | null => {

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({ "navigation-bar-title-text": 'UI 测试' }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "p-16px min-h-screen bg-_b_hf8fafc_B" }), [
            _cE("text", _uM({ class: "text-18px font-bold text-_b_h334155_B mb-16px" }), "Image 标签测试"),
            _cE("view", _uM({ class: "mb-16px p-12px bg-white rounded-8px shadow-xs" }), [
              _cE("text", _uM({ class: "text-14px font-bold text-_b_h64748b_B mb-8px" }), "1. 相对路径引用 (./images/logo.png)"),
              _cE("image", _uM({
                src: _imports_0,
                style: _nS(_uM({"width":"80px","height":"80px"})),
                mode: "aspectFit"
              }), null, 4 /* STYLE */)
            ]),
            _cE("view", _uM({ class: "mb-16px p-12px bg-white rounded-8px shadow-xs" }), [
              _cE("text", _uM({ class: "text-14px font-bold text-_b_h64748b_B mb-8px" }), "2. 绝对静态路径 (/static/logo.png)"),
              _cE("image", _uM({
                src: "/static/logo.png",
                style: _nS(_uM({"width":"80px","height":"80px"})),
                mode: "aspectFit"
              }), null, 4 /* STYLE */)
            ]),
            _cE("view", _uM({ class: "mb-16px p-12px bg-white rounded-8px shadow-xs" }), [
              _cE("text", _uM({ class: "text-14px font-bold text-_b_h64748b_B mb-8px" }), "3. JS 变量绑定 (imported logo)"),
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
const GenSrcSubUiTestUiTestStyles = [_uM([["bg-_b_hf8fafc_B", _pS(_uM([["backgroundColor", "#f8fafc"]]))], ["font-bold", _pS(_uM([["--tw-font-weight", "700"], ["fontWeight", 700]]))], ["text-_b_h334155_B", _pS(_uM([["color", "#334155"]]))], ["bg-white", _pS(_uM([["backgroundColor", "#ffffff"]]))], ["text-_b_h64748b_B", _pS(_uM([["color", "#64748b"]]))]])]
