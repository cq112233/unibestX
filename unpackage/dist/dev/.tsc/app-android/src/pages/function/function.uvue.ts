import AppKu from '@/App.ku.uvue'
import EnvCard from './components/EnvCard.uvue';
import SystemInfoCard from './components/SystemInfoCard.uvue';
import HapticsCard from './components/HapticsCard.uvue';
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
      _cE("view", _uM({ class: "flex-col pb-100px" }), [
        _cE("view", _uM({ class: "pt-20px px-16px pb-10px" }), [
          _cE("text", _uM({ class: "text-20px font-bold text-__1a202c_" }), "设备系统信息"),
          _cE("text", _uM({ class: "text-13px text-__718096_ mt-4px" }), "演示 iOS/Android 原生设备 API 调用与状态读取")
        ]),
        _cV(unref(EnvCard)),
        _cV(unref(ZPagingDemoCard)),
        _cV(unref(SystemInfoCard)),
        _cV(unref(HapticsCard)),
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
const GenSrcPagesFunctionFunctionStyles = [_uM([["flex-col", _pS(_uM([["flexDirection", "column"]]))], ["font-bold", _pS(_uM([["fontWeight", 700]]))], ["mt-4px", _pS(_uM([["marginTop", 4]]))], ["pb-100px", _pS(_uM([["paddingBottom", 100]]))], ["pb-10px", _pS(_uM([["paddingBottom", 10]]))], ["pt-20px", _pS(_uM([["paddingTop", 20]]))], ["px-16px", _pS(_uM([["paddingLeft", 16], ["paddingRight", 16]]))], ["text-__1a202c_", _pS(_uM([["color", "#1a202c"]]))], ["text-__718096_", _pS(_uM([["color", "#718096"]]))], ["text-13px", _pS(_uM([["fontSize", 13]]))], ["text-20px", _pS(_uM([["fontSize", 20]]))]])]
