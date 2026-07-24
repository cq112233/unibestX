import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
import IconDemoCard from './components/IconDemoCard.uvue'
import LangSwitchCard from './components/LangSwitchCard.uvue'
import ThemeSwitchCard from './components/ThemeSwitchCard.uvue'
import TimeDemoCard from './components/TimeDemoCard.uvue'
import RouterDemoCard from './components/RouterDemoCard.uvue'
import HttpDemoCard from './components/HttpDemoCard.uvue'
import EchartsDemoCard from './components/EchartsDemoCard.uvue'
import SystemInfoDemoCard from './components/SystemInfoDemoCard.uvue'
import ZPagingDemoCard from './components/ZPagingDemoCard.uvue'
import UViewUltraDemoCard from './components/UViewUltraDemoCard.uvue'
import { updateSystemInfo } from '@/src/utils/systemInfo'
import { handleBackPressExit } from '@/src/utils/backPress'


const __sfc__ = defineComponent({
  __name: 'basic',
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

onResize(() => {
  updateSystemInfo()
})

return (): any | null => {

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({ "navigation-bar-title-text": '基础' }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("scroll-view", _uM({
            direction: "vertical",
            class: "flex-1"
          }), [
            _cV(unref(UViewUltraDemoCard)),
            _cV(unref(ZPagingDemoCard)),
            _cV(unref(SystemInfoDemoCard)),
            _cV(unref(IconDemoCard)),
            _cV(unref(LangSwitchCard)),
            _cV(unref(ThemeSwitchCard)),
            _cV(unref(TimeDemoCard)),
            _cV(unref(RouterDemoCard)),
            _cV(unref(HttpDemoCard)),
            _cV(unref(EchartsDemoCard))
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
const GenSrcPagesBasicBasicStyles = [_uM([["flex-1", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))]])]
