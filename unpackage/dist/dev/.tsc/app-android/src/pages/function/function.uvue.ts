import AppKu from '@/App.ku.uvue'
import EnvCard from './components/EnvCard.uvue';
import SystemInfoCard from './components/SystemInfoCard.uvue';
import HapticsCard from './components/HapticsCard.uvue';
import ToastCard from './components/ToastCard.uvue';
import MediaCard from './components/MediaCard.uvue';
import LodashDemoCard from './components/LodashDemoCard.uvue';
import CryptoDemoCard from './components/CryptoDemoCard.uvue';
import TimeDemoCard from './components/TimeDemoCard.uvue';
import SignatureCard from './components/SignatureCard.uvue';
import EchartsDemoCard from './components/EchartsDemoCard.uvue';
import ZPagingDemoCard from './components/ZPagingDemoCard.uvue';
import { handleBackPressExit } from '@/src/utils/backPress';

const __sfc__ = defineComponent({
  __name: 'function',
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

return (): any | null => {

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "wtu-1n5rv11-0 wtu-lw2ctl-1" }), [
        _cE("view", _uM({ class: "wtu-1i41ley-2 wtu-1a1clmh-3 wtu-qtpsxx-4" }), [
          _cE("text", _uM({ class: "wtu-ympeof-5 wtu-dexfdw-6 wtu-1macy2r-7" }), "设备系统信息"),
          _cE("text", _uM({ class: "wtu-1q99rg1-8 wtu-17u3i8b-9 wtu-1g5yxwv-a" }), "演示 iOS/Android 原生设备 API 调用与状态读取")
        ]),
        _cV(unref(EnvCard)),
        _cV(unref(ZPagingDemoCard)),
        _cV(unref(SystemInfoCard)),
        _cV(unref(HapticsCard)),
        _cV(unref(ToastCard)),
        _cV(unref(MediaCard)),
        _cV(unref(LodashDemoCard)),
        _cV(unref(CryptoDemoCard)),
        _cV(unref(TimeDemoCard)),
        _cV(unref(SignatureCard)),
        _cV(unref(EchartsDemoCard))
      ])
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcPagesFunctionFunctionStyles = [_uM([["wtu-1n5rv11-0", _pS(_uM([["flexDirection", "column"]]))], ["wtu-lw2ctl-1", _pS(_uM([["paddingBottom", 100]]))], ["wtu-1i41ley-2", _pS(_uM([["paddingTop", 20]]))], ["wtu-1a1clmh-3", _pS(_uM([["paddingLeft", 16], ["paddingRight", 16]]))], ["wtu-qtpsxx-4", _pS(_uM([["paddingBottom", 10]]))], ["wtu-ympeof-5", _pS(_uM([["fontSize", 20]]))], ["wtu-dexfdw-6", _pS(_uM([["--tw-font-weight", "var(--font-weight-bold, 700)"], ["fontWeight", 700]]))], ["wtu-1macy2r-7", _pS(_uM([["color", "#1a202c"]]))], ["wtu-1q99rg1-8", _pS(_uM([["fontSize", 13]]))], ["wtu-17u3i8b-9", _pS(_uM([["color", "#718096"]]))], ["wtu-1g5yxwv-a", _pS(_uM([["marginTop", 4]]))]])]
