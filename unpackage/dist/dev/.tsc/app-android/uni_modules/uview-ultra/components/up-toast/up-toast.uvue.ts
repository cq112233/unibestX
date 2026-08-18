import _easycom_up_loading_icon from '@/uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.uvue'
import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import _easycom_up_gap from '@/uni_modules/uview-ultra/components/up-gap/up-gap.uvue'
import _easycom_up_overlay from '@/uni_modules/uview-ultra/components/up-overlay/up-overlay.uvue'
import { computed, ref, onBeforeUnmount } from 'vue'
import { os, getWindowInfo, deepMerge, type2icon } from '../../libs/function/index'
import color from '../../libs/config/color'
import { hexToRgb } from '../../libs/function/colorGradient'


const __sfc__ = defineComponent({
  __name: 'up-toast',
name: 'up-toast',
  setup(__props, __setupCtx: SetupContext) {
const __expose = __setupCtx.expose
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const isShow = ref<boolean>(false)
const timer = ref<number | null>(null)

const config = {__$originalPosition: new UTSSourceMapPosition("config", "uni_modules/uview-ultra/components/up-toast/up-toast.uvue", 55, 7),
  message: '',
  type: '',
  zIndex: 10090,
  duration: 2000,
  icon: true,
  position: 'center',
  complete: null as (() => void) | null,
  overlay: true,
  loading: false,
}

const tmpConfig = ref<UTSJSONObject>({
  message: '',
  type: '',
  zIndex: 10090,
  duration: 2000,
  icon: true,
  position: 'center',
  complete: null as (() => void) | null,
  overlay: true,
  loading: false,
} as UTSJSONObject)

const iconName = computed<string>(() => {
  const icon = tmpConfig.value['icon']
  const type = (tmpConfig.value['type'] ?? '') as string
  if (icon == '' || icon == 'none') {
    return ''
  }
  if (icon == true) {
    if (['error', 'warning', 'success', 'primary'].includes(type)) {
      return type2icon(type)
    } else {
      return ''
    }
  } else {
    return icon != null ? icon.toString() : ''
  }
})

const overlayStyle = computed<UTSJSONObject>(() => {
  const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-toast/up-toast.uvue", 97, 9), 
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: 'rgba(0, 0, 0, 0)'
  } as UTSJSONObject
  if (!(tmpConfig.value['overlay'] as boolean)) {
    style['pointerEvents'] = 'none'
  }
  return style
})

const iconStyle = computed<UTSJSONObject>(() => {
  const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-toast/up-toast.uvue", 110, 9), 
    marginRight: '4px'
  } as UTSJSONObject
  return style
})

const contentStyle = computed<UTSJSONObject>(() => {
  const windowHeight = getWindowInfo().windowHeight
  const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-toast/up-toast.uvue", 118, 9), } as UTSJSONObject
  let value = 0
  const position = tmpConfig.value['position']?.toString() ?? ''
  if (position === 'top') {
    value = -windowHeight * 0.25
  } else if (position === 'bottom') {
    value = windowHeight * 0.25
  }
  style['transform'] = `translateY(${value}px)`
  return style
})

function clearTimer() {
  isShow.value = false
  if (timer.value != null) {
    clearTimeout(timer.value!)
    timer.value = null
  }
}

function show(options: UTSJSONObject) {
  tmpConfig.value = deepMerge(config, options)
  clearTimer()
  isShow.value = true
  const duration = tmpConfig.value['duration'] as number
  if (duration != -1) {
    timer.value = setTimeout(() => {
      clearTimer()
      const complete = tmpConfig.value['complete']
      if (typeof complete === 'function') {
        ;(complete as () => void)()
      }
    }, duration)
  }
}

function hide() {
  clearTimer()
}

function primary(message: string) {
  show({
    type: 'primary',
    message
  } as UTSJSONObject)
}

function success(message: string) {
  show({
    type: 'success',
    message
  } as UTSJSONObject)
}

function error(message: string) {
  show({
    type: 'error',
    message
  } as UTSJSONObject)
}

function warning(message: string) {
  show({
    type: 'warning',
    message
  } as UTSJSONObject)
}

onBeforeUnmount(() => {
  clearTimer()
})

__expose({
  show,
  hide,
  primary,
  success,
  error,
  warning
})

return (): any | null => {

const _component_up_loading_icon = resolveEasyComponent("up-loading-icon",_easycom_up_loading_icon)
const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)
const _component_up_gap = resolveEasyComponent("up-gap",_easycom_up_gap)
const _component_up_overlay = resolveEasyComponent("up-overlay",_easycom_up_overlay)

  return _cE("view", _uM({ class: "up-toast" }), [
    _cV(_component_up_overlay, _uM({
      show: isShow.value,
      zIndex: tmpConfig.value['zIndex'],
      "custom-style": overlayStyle.value
    }), _uM({
      default: withSlotCtx((): any[] => [
        _cE("view", _uM({
          class: _nC(["up-toast__content", ['up-type-' + tmpConfig.value['type'], (tmpConfig.value['type'] === 'loading' || tmpConfig.value['loading'] as boolean) ?  'up-toast__content--loading' : '']]),
          style: _nS([contentStyle.value])
        }), [
          tmpConfig.value['type'] === 'loading'
            ? _cV(_component_up_loading_icon, _uM({
                key: 0,
                mode: "circle",
                color: "rgb(255, 255, 255)",
                inactiveColor: "rgb(120, 120, 120)",
                size: "25"
              }))
            : isTrue(tmpConfig.value['type'] !== 'defalut' && iconName.value != '')
              ? _cV(_component_up_icon, _uM({
                  key: 1,
                  name: iconName.value,
                  size: "17",
                  color: tmpConfig.value['type'],
                  customStyle: iconStyle.value
                }), null, 8 /* PROPS */, ["name", "color", "customStyle"])
              : _cC("v-if", true),
          isTrue(tmpConfig.value['type'] === 'loading' || tmpConfig.value['loading'] as boolean)
            ? _cV(_component_up_gap, _uM({
                key: 2,
                height: "12",
                bgColor: "transparent"
              }))
            : _cC("v-if", true),
          _cE("text", _uM({
            class: _nC(["up-toast__content__text", ['up-toast__content__text--' + tmpConfig.value['type']]]),
            style: _nS(_uM({"max-width":"400rpx"}))
          }), _tD(tmpConfig.value['message']), 7 /* TEXT, CLASS, STYLE */)
        ], 6 /* CLASS, STYLE */)
      ]),
      _: 1 /* STABLE */
    }), 8 /* PROPS */, ["show", "zIndex", "custom-style"])
  ])
}
}

})
export default __sfc__
export type UpToastComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpToastUpToastStyles = [_uM([["up-toast__content", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["paddingTop", 12], ["paddingRight", 20], ["paddingBottom", 12], ["paddingLeft", 20], ["borderTopLeftRadius", 4], ["borderTopRightRadius", 4], ["borderBottomRightRadius", 4], ["borderBottomLeftRadius", 4], ["backgroundColor", "#585858"], ["alignItems", "center"], ["maxWidth", "600rpx"], ["position", "relative"]]))], ["up-toast__content--loading", _pS(_uM([["flexDirection", "column"], ["paddingTop", 20], ["paddingRight", 20], ["paddingBottom", 20], ["paddingLeft", 20]]))], ["up-toast__content__text", _pS(_uM([["color", "#ffffff"], ["fontSize", 15], ["lineHeight", "15px"]]))], ["up-toast__content__text--default", _pS(_uM([["color", "#ffffff"]]))], ["up-toast__content__text--error", _pS(_uM([["color", "#f56c6c"]]))], ["up-toast__content__text--primary", _pS(_uM([["color", "var(--theme-color, #0957de)"]]))], ["up-toast__content__text--success", _pS(_uM([["color", "#5ac725"]]))], ["up-toast__content__text--warning", _pS(_uM([["color", "#f9ae3d"]]))], ["up-type-primary", _pS(_uM([["backgroundColor", "#ecf5ff"], ["borderTopColor", "#d7eafe"], ["borderRightColor", "#d7eafe"], ["borderBottomColor", "#d7eafe"], ["borderLeftColor", "#d7eafe"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["up-type-success", _pS(_uM([["backgroundColor", "#dbf1e1"], ["borderTopColor", "#BEF5C8"], ["borderRightColor", "#BEF5C8"], ["borderBottomColor", "#BEF5C8"], ["borderLeftColor", "#BEF5C8"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["up-type-error", _pS(_uM([["backgroundColor", "#fef0f0"], ["borderTopColor", "#fde2e2"], ["borderRightColor", "#fde2e2"], ["borderBottomColor", "#fde2e2"], ["borderLeftColor", "#fde2e2"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["up-type-warning", _pS(_uM([["backgroundColor", "#fdf6ec"], ["borderTopColor", "#faecd8"], ["borderRightColor", "#faecd8"], ["borderBottomColor", "#faecd8"], ["borderLeftColor", "#faecd8"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["up-type-default", _pS(_uM([["backgroundColor", "#585858"]]))]])]
