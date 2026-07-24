import Card from '../../basic/components/Card.uvue'
import { ref } from 'vue'


const __sfc__ = defineComponent({
  __name: 'MediaCard',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const photoUrl = ref('')
const scanResult = ref('')

function chooseImage() {
  uni.chooseImage({
    count: 1,
    success: (res) => {
      const paths = res.tempFilePaths
      if (paths.length > 0) {
        photoUrl.value = paths[0]
      }
    },
    fail: (err) => {
      console.error(err)
    },
  })
}

function scanCode() {
  uni.scanCode({
    success: (res) => {
      scanResult.value = res.result
    },
    fail: (err) => {
      console.error(err)
    },
  })
}

return (): any | null => {

  return _cV(unref(Card), _uM({ title: "相机与多媒体" }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_ items-center justify-center" }), [
        photoUrl.value === ''
          ? _cE("text", _uM({
              key: 0,
              class: "text-14px text-__94a3b8_"
            }), "未选择照片")
          : _cE("image", _uM({
              key: 1,
              src: photoUrl.value,
              class: "w-150px h-150px rounded-8px",
              mode: "aspectFill"
            }), null, 8 /* PROPS */, ["src"])
      ]),
      _cE("view", _uM({
        class: "w-full h-44px rounded-8px bg-__3b82f6_ mb-12px flex flex-row items-center justify-center",
        onClick: chooseImage
      }), [
        _cE("text", _uM({ class: "text-__ffffff_ text-14px font-bold" }), "拍摄/选择照片")
      ]),
      _cE("view", _uM({ class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_" }), [
        _cE("text", _uM({ class: "text-12px text-__94a3b8_ mb-8px" }), "扫码结果"),
        _cE("text", _uM({ class: "text-14px font-bold text-__334155_" }), _tD(scanResult.value !== '' ? scanResult.value : '暂无数据'), 1 /* TEXT */)
      ]),
      _cE("view", _uM({
        class: "w-full h-44px rounded-8px bg-__10b981_ flex flex-row items-center justify-center",
        onClick: scanCode
      }), [
        _cE("text", _uM({ class: "text-__ffffff_ text-14px font-bold" }), "扫码测试")
      ])
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcPagesFunctionComponentsMediaCardStyles = [_uM([["bg-__10b981_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#10b981"]]))], ["bg-__3b82f6_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#3b82f6"]]))], ["border-color-__e2e8f0_", _pS(_uM([["borderTopColor", "#e2e8f0"], ["borderRightColor", "#e2e8f0"], ["borderBottomColor", "#e2e8f0"], ["borderLeftColor", "#e2e8f0"]]))], ["border-style-solid", _pS(_uM([["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["border-width-1px", _pS(_uM([["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["flex", _pS(_uM([["display", "flex"]]))], ["flex-row", _pS(_uM([["flexDirection", "row"]]))], ["font-bold", _pS(_uM([["fontWeight", 700]]))], ["h-150px", _pS(_uM([["height", 150]]))], ["h-44px", _pS(_uM([["height", 44]]))], ["items-center", _pS(_uM([["alignItems", "center"]]))], ["justify-center", _pS(_uM([["justifyContent", "center"]]))], ["mb-12px", _pS(_uM([["marginBottom", 12]]))], ["mb-16px", _pS(_uM([["marginBottom", 16]]))], ["mb-8px", _pS(_uM([["marginBottom", 8]]))], ["p-16px", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["rounded-12px", _pS(_uM([["borderTopLeftRadius", 12], ["borderTopRightRadius", 12], ["borderBottomRightRadius", 12], ["borderBottomLeftRadius", 12]]))], ["rounded-8px", _pS(_uM([["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["text-__334155_", _pS(_uM([["color", "#334155"]]))], ["text-__94a3b8_", _pS(_uM([["color", "#94a3b8"]]))], ["text-__ffffff_", _pS(_uM([["color", "#ffffff"]]))], ["text-12px", _pS(_uM([["fontSize", 12]]))], ["text-14px", _pS(_uM([["fontSize", 14]]))], ["w-150px", _pS(_uM([["width", 150]]))], ["w-full", _pS(_uM([["width", "100%"]]))]])]
