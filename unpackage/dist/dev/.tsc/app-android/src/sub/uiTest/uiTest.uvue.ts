import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'


const __sfc__ = defineComponent({
  __name: 'uiTest',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;


return (): any | null => {

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({ "navigation-bar-title-text": 'UI 测试' }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "p-5px min-h-screen bg-__f8fafc_" }), " 111 ")
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
const GenSrcSubUiTestUiTestStyles = [_uM([["bg-__f8fafc_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f8fafc"]]))], ["p-5px", _pS(_uM([["paddingTop", 5], ["paddingRight", 5], ["paddingBottom", 5], ["paddingLeft", 5]]))]])]
