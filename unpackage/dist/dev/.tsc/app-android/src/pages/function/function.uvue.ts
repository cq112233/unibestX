import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
import SystemInfoCard from './components/SystemInfoCard.uvue'
import HapticsCard from './components/HapticsCard.uvue'
import MediaCard from './components/MediaCard.uvue'
import { handleBackPressExit } from '@/src/utils/backPress'


const __sfc__ = defineComponent({
  __name: 'function',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

onBackPress((options: OnBackPressOptions): boolean => {

  if (options.from == 'backbutton') {
    return handleBackPressExit()
  }

  return false
})

return (): any | null => {

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({ "navigation-bar-title-text": '功能' }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("scroll-view", _uM({ class: "wtu-v5gisg-0" }), [
            _cE("view", _uM({ class: "pt-20px px-16px pb-10px" }), [
              _cE("text", _uM({ class: "text-20px wtu-dexfdw-1 wtu-1macy2r-2" }), "设备系统信息"),
              _cE("text", _uM({ class: "text-13px wtu-17u3i8b-3 mt-4px" }), "演示 iOS/Android 原生设备 API 调用与状态读取")
            ]),
            _cV(unref(SystemInfoCard)),
            _cV(unref(HapticsCard)),
            _cV(unref(MediaCard))
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
const GenSrcPagesFunctionFunctionStyles = [_uM([["font-bold", _pS(_uM([["--tw-font-weight", "700"], ["fontWeight", 700]]))], ["wtu-v5gisg-0", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["wtu-dexfdw-1", _pS(_uM([["--tw-font-weight", "700"], ["fontWeight", 700]]))], ["wtu-1macy2r-2", _pS(_uM([["color", "#1a202c"]]))], ["wtu-17u3i8b-3", _pS(_uM([["color", "#718096"]]))]])]
