import AppKu from '@/App.ku.uvue'
import ToastDemoCard from './components/ToastDemoCard.uvue';
import PropsDemoCard from './components/PropsDemoCard.uvue';
import IconDemoCard from './components/IconDemoCard.uvue';
import LangSwitchCard from './components/LangSwitchCard.uvue';
import ThemeSwitchCard from './components/ThemeSwitchCard.uvue';
import RouterDemoCard from './components/RouterDemoCard.uvue';
import HttpDemoCard from './components/HttpDemoCard.uvue';
import UViewUltraDemoCard from './components/UViewUltraDemoCard.uvue';
import TailwindcssDemoCard from './components/TailwindcssDemoCard.uvue';
import SystemInfoDemoCard from './components/SystemInfoDemoCard.uvue';
import { updateSystemInfo } from '@/src/utils/systemInfo';
import { handleBackPressExit } from '@/src/utils/backPress';

const __sfc__ = defineComponent({
  __name: 'basic',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

;

onBackPress((options: OnBackPressOptions): boolean => {

  if (options.from == 'backbutton') {
    return handleBackPressExit();
  }

  return false;
});

onResize(() => {
  updateSystemInfo();
});

return (): any | null => {

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "wtu-18katrf-0 wtu-8a3sf7-1" }), [
        _cE("view", _uM({ class: "wtu-18katrf-0" }), [
          _cV(unref(UViewUltraDemoCard)),
          _cV(unref(TailwindcssDemoCard)),
          _cV(unref(ThemeSwitchCard)),
          _cV(unref(RouterDemoCard)),
          _cV(unref(LangSwitchCard)),
          _cV(unref(IconDemoCard)),
          _cV(unref(HttpDemoCard)),
          _cV(unref(ToastDemoCard)),
          _cV(unref(PropsDemoCard)),
          _cV(unref(SystemInfoDemoCard))
        ])
      ])
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcPagesBasicBasicStyles = [_uM([["wtu-18katrf-0", _pS(_uM([["flexDirection", "column"]]))], ["wtu-8a3sf7-1", _pS(_uM([["paddingBottom", 100]]))]])]
