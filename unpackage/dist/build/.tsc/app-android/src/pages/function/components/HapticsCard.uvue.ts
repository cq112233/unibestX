import Card from '../../basic/components/Card.uvue'
import { ref } from 'vue'


import Build from 'android.os.Build'
import Context from 'android.content.Context'
import type Vibrator from 'android.os.Vibrator'
import type VibratorManager from 'android.os.VibratorManager'







const __sfc__ = defineComponent({
  __name: 'HapticsCard',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const copyText = ref('Hello unibestX!')


function vibrationAndroid() : void {
  const activity = UTSAndroid.getUniActivity()
  if (activity == null) {
    uni.showToast({ title: '获取 Activity 失败', icon: 'none' })
    return
  }

  try {
    if (Build.VERSION.SDK_INT >= 31) {
      const manager = activity.getSystemService(Context.VIBRATOR_MANAGER_SERVICE) as VibratorManager
      if (manager != null) {
        manager.defaultVibrator.vibrate(15)
        uni.showToast({ title: '已触发短震动', icon: 'none' })
      } else {
        uni.showToast({ title: '获取震动服务失败', icon: 'none' })
      }
    } else {
      const vibrator = activity.getSystemService(Context.VIBRATOR_SERVICE) as Vibrator
      if (vibrator != null) {
        vibrator.vibrate(15)
        uni.showToast({ title: '已触发短震动', icon: 'none' })
      } else {
        uni.showToast({ title: '获取震动服务失败', icon: 'none' })
      }
    }
  } catch (e : any) {
    uni.showToast({ title: '震动调用失败', icon: 'none' })
  }
}










































function triggerVibration() {

  vibrationAndroid()













}

function handleCopy() {
  if (copyText.value === '')
    return
  uni.setClipboardData({
    data: copyText.value,
    success: () => {
      uni.showToast({
        title: '复制成功',
        icon: 'success',
      })
    },
  })
}

return (): any | null => {

  return _cV(unref(Card), _uM({ title: "触感与工具" }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_" }), [
        _cE("text", _uM({ class: "text-12px text-__94a3b8_ mb-8px" }), "剪贴板测试文本"),
        _cE("input", _uM({
          modelValue: copyText.value,
          onInput: ($event: UniInputEvent) => {(copyText).value = $event.detail.value},
          placeholder: "请输入要复制的文本",
          class: "h-38px bg-white rounded-6px px-12px border-width-1px border-style-solid border-color-__cbd5e1_ text-14px text-__334155_ mb-12px"
        }), null, 40 /* PROPS, NEED_HYDRATION */, ["modelValue", "onInput"]),
        _cE("view", _uM({
          class: "w-full h-38px rounded-8px bg-__10b981_ flex flex-row items-center justify-center",
          onClick: handleCopy
        }), [
          _cE("text", _uM({ class: "text-__ffffff_ text-14px font-bold" }), "复制测试文本")
        ])
      ]),
      _cE("view", _uM({
        class: "w-full h-44px rounded-8px bg-__f59e0b_ flex flex-row items-center justify-center",
        onClick: triggerVibration
      }), [
        _cE("text", _uM({ class: "text-__ffffff_ text-14px font-bold" }), "短震动反馈")
      ])
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcPagesFunctionComponentsHapticsCardStyles = [_uM([["bg-__10b981_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#10b981"]]))], ["bg-__f59e0b_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f59e0b"]]))], ["bg-white", _pS(_uM([["backgroundColor", "rgba(255,255,255,var(--un-bg-opacity,1))"]]))], ["border-color-__cbd5e1_", _pS(_uM([["borderTopColor", "#cbd5e1"], ["borderRightColor", "#cbd5e1"], ["borderBottomColor", "#cbd5e1"], ["borderLeftColor", "#cbd5e1"]]))], ["border-color-__e2e8f0_", _pS(_uM([["borderTopColor", "#e2e8f0"], ["borderRightColor", "#e2e8f0"], ["borderBottomColor", "#e2e8f0"], ["borderLeftColor", "#e2e8f0"]]))], ["border-style-solid", _pS(_uM([["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["border-width-1px", _pS(_uM([["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["flex", _pS(_uM([["display", "flex"]]))], ["flex-row", _pS(_uM([["flexDirection", "row"]]))], ["font-bold", _pS(_uM([["fontWeight", 700]]))], ["h-38px", _pS(_uM([["height", 38]]))], ["h-44px", _pS(_uM([["height", 44]]))], ["items-center", _pS(_uM([["alignItems", "center"]]))], ["justify-center", _pS(_uM([["justifyContent", "center"]]))], ["mb-12px", _pS(_uM([["marginBottom", 12]]))], ["mb-16px", _pS(_uM([["marginBottom", 16]]))], ["mb-8px", _pS(_uM([["marginBottom", 8]]))], ["none", _pS(_uM([["display", "none"]]))], ["p-16px", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["px-12px", _pS(_uM([["paddingLeft", 12], ["paddingRight", 12]]))], ["rounded-12px", _pS(_uM([["borderTopLeftRadius", 12], ["borderTopRightRadius", 12], ["borderBottomRightRadius", 12], ["borderBottomLeftRadius", 12]]))], ["rounded-6px", _pS(_uM([["borderTopLeftRadius", 6], ["borderTopRightRadius", 6], ["borderBottomRightRadius", 6], ["borderBottomLeftRadius", 6]]))], ["rounded-8px", _pS(_uM([["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["text-__334155_", _pS(_uM([["color", "#334155"]]))], ["text-__94a3b8_", _pS(_uM([["color", "#94a3b8"]]))], ["text-__ffffff_", _pS(_uM([["color", "#ffffff"]]))], ["text-12px", _pS(_uM([["fontSize", 12]]))], ["text-14px", _pS(_uM([["fontSize", 14]]))], ["w-full", _pS(_uM([["width", "100%"]]))]])]
