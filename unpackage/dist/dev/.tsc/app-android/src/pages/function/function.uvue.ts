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
      _cE("view", _uM({ class: "wtu-1n5rv11-0 pb-100px" }), [
        _cE("view", _uM({ class: "pt-20px px-16px pb-10px" }), [
          _cE("text", _uM({ class: "text-20px wtu-dexfdw-1 wtu-1macy2r-2" }), "设备系统信息"),
          _cE("text", _uM({ class: "text-13px wtu-17u3i8b-3 mt-4px" }), "演示 iOS/Android 原生设备 API 调用与状态读取")
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
const GenSrcPagesFunctionFunctionStyles = [_uM([["wtu-1n5rv11-0", _pS(_uM([["flexDirection", "column"]]))], ["wtu-dexfdw-1", _pS(_uM([["--tw-font-weight", "var(--font-weight-bold, 700)"], ["fontWeight", 700]]))], ["wtu-1macy2r-2", _pS(_uM([["color", "#1a202c"]]))], ["wtu-17u3i8b-3", _pS(_uM([["color", "#718096"]]))]])]
