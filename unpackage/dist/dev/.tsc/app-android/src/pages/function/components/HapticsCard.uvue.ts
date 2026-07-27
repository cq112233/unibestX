import Card from '../../basic/components/Card.uvue'
import { ref } from 'vue'


import Build from 'android.os.Build'
import Context from 'android.content.Context'
import Vibrator from 'android.os.Vibrator'
import VibratorManager from 'android.os.VibratorManager'







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
      _cE("view", _uM({ class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }), [
        _cE("text", _uM({ class: "text-12px wtu-xlfis6-0 mb-8px" }), "剪贴板测试文本"),
        _cE("input", _uM({
          modelValue: copyText.value,
          onInput: ($event: UniInputEvent) => {(copyText).value = $event.detail.value},
          placeholder: "请输入要复制的文本",
          class: "h-38px wtu-44c3cb-1 rounded-6px px-12px border-width-1px border-style-solid border-color-[#cbd5e1] text-14px wtu-lwq7o6-2 mb-12px"
        }), null, 40 /* PROPS, NEED_HYDRATION */, ["modelValue", "onInput"]),
        _cE("view", _uM({
          class: "wtu-1phhh09-3 h-38px rounded-8px wtu-1km86q6-4 wtu-snabsj-5 wtu-1e9fgzq-6 wtu-15f70xm-7 wtu-1kekspa-8",
          onClick: handleCopy
        }), [
          _cE("text", _uM({ class: "wtu-199nxoz-9 text-14px wtu-17exkt3-a" }), "复制测试文本")
        ])
      ]),
      _cE("view", _uM({
        class: "wtu-1phhh09-3 h-44px rounded-8px wtu-nwcnqo-b wtu-snabsj-5 wtu-1e9fgzq-6 wtu-15f70xm-7 wtu-1kekspa-8",
        onClick: triggerVibration
      }), [
        _cE("text", _uM({ class: "wtu-199nxoz-9 text-14px wtu-17exkt3-a" }), "短震动反馈")
      ])
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcPagesFunctionComponentsHapticsCardStyles = [_uM([["font-bold", _pS(_uM([["--tw-font-weight", "700"], ["fontWeight", 700]]))], ["wtu-xlfis6-0", _pS(_uM([["color", "#94a3b8"]]))], ["wtu-44c3cb-1", _pS(_uM([["backgroundColor", "#ffffff"]]))], ["wtu-lwq7o6-2", _pS(_uM([["color", "#334155"]]))], ["wtu-1phhh09-3", _pS(_uM([["width", "100%"]]))], ["wtu-1km86q6-4", _pS(_uM([["backgroundColor", "#10b981"]]))], ["wtu-snabsj-5", _pS(_uM([["display", "flex"]]))], ["wtu-1e9fgzq-6", _pS(_uM([["flexDirection", "row"]]))], ["wtu-15f70xm-7", _pS(_uM([["alignItems", "center"]]))], ["wtu-1kekspa-8", _pS(_uM([["justifyContent", "center"]]))], ["wtu-199nxoz-9", _pS(_uM([["color", "#ffffff"]]))], ["wtu-17exkt3-a", _pS(_uM([["--tw-font-weight", "700"], ["fontWeight", 700]]))], ["wtu-nwcnqo-b", _pS(_uM([["backgroundColor", "#f59e0b"]]))]])]
