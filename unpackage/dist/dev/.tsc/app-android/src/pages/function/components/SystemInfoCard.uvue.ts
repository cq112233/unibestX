import Card from '../../basic/components/Card.uvue'
import { onMounted, ref } from 'vue'


const __sfc__ = defineComponent({
  __name: 'SystemInfoCard',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const sysBrand = ref('')
const sysModel = ref('')
const sysSystem = ref('')
const sysPlatform = ref('')

function fetchSystemInfo() {
  try {
    const info = uni.getSystemInfoSync()
    sysBrand.value = info.brand ?? ''
    sysModel.value = info.model ?? ''
    sysSystem.value = info.system ?? ''
    sysPlatform.value = info.uniPlatform ?? ''
  }
  catch (err) {
    console.error(err, " at src/pages/function/components/SystemInfoCard.uvue:68")
  }
}

onMounted(() => {
  fetchSystemInfo()
})

return (): any | null => {

  return _cV(unref(Card), _uM({ title: "设备系统信息" }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_" }), [
        _cE("view", _uM({ class: "flex-row justify-between mb-10px" }), [
          _cE("text", _uM({ class: "text-14px text-__718096_" }), "手机品牌"),
          _cE("text", _uM({ class: "text-14px font-bold text-__2d3748_" }), _tD(sysBrand.value !== '' ? sysBrand.value : '暂无数据'), 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "flex-row justify-between mb-10px" }), [
          _cE("text", _uM({ class: "text-14px text-__718096_" }), "手机型号"),
          _cE("text", _uM({ class: "text-14px font-bold text-__2d3748_" }), _tD(sysModel.value !== '' ? sysModel.value : '暂无数据'), 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "flex-row justify-between mb-10px" }), [
          _cE("text", _uM({ class: "text-14px text-__718096_" }), "操作系统"),
          _cE("text", _uM({ class: "text-14px font-bold text-__2d3748_" }), _tD(sysSystem.value !== '' ? sysSystem.value : '暂无数据'), 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "flex-row justify-between" }), [
          _cE("text", _uM({ class: "text-14px text-__718096_" }), "运行平台"),
          _cE("text", _uM({ class: "text-14px font-bold text-__2d3748_" }), _tD(sysPlatform.value !== '' ? sysPlatform.value : '暂无数据'), 1 /* TEXT */)
        ])
      ]),
      _cE("view", _uM({
        class: "w-full h-44px rounded-8px bg-__3b82f6_ flex flex-row items-center justify-center",
        onClick: fetchSystemInfo
      }), [
        _cE("text", _uM({ class: "text-__ffffff_ text-14px font-bold" }), "获取系统信息")
      ])
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcPagesFunctionComponentsSystemInfoCardStyles = [_uM([["bg-__3b82f6_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#3b82f6"]]))], ["border-color-__e2e8f0_", _pS(_uM([["borderTopColor", "#e2e8f0"], ["borderRightColor", "#e2e8f0"], ["borderBottomColor", "#e2e8f0"], ["borderLeftColor", "#e2e8f0"]]))], ["border-style-solid", _pS(_uM([["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["border-width-1px", _pS(_uM([["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["flex", _pS(_uM([["display", "flex"]]))], ["flex-row", _pS(_uM([["flexDirection", "row"]]))], ["font-bold", _pS(_uM([["fontWeight", 700]]))], ["h-44px", _pS(_uM([["height", 44]]))], ["items-center", _pS(_uM([["alignItems", "center"]]))], ["justify-between", _pS(_uM([["justifyContent", "space-between"]]))], ["justify-center", _pS(_uM([["justifyContent", "center"]]))], ["mb-10px", _pS(_uM([["marginBottom", 10]]))], ["mb-16px", _pS(_uM([["marginBottom", 16]]))], ["p-16px", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["rounded-12px", _pS(_uM([["borderTopLeftRadius", 12], ["borderTopRightRadius", 12], ["borderBottomRightRadius", 12], ["borderBottomLeftRadius", 12]]))], ["rounded-8px", _pS(_uM([["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["text-__2d3748_", _pS(_uM([["color", "#2d3748"]]))], ["text-__718096_", _pS(_uM([["color", "#718096"]]))], ["text-__ffffff_", _pS(_uM([["color", "#ffffff"]]))], ["text-14px", _pS(_uM([["fontSize", 14]]))], ["w-full", _pS(_uM([["width", "100%"]]))]])]
