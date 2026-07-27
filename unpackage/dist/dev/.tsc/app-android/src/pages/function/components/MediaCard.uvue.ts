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
      console.error(err, " at src/pages/function/components/MediaCard.uvue:39")
    },
  })
}

function scanCode() {
  uni.scanCode({
    success: (res) => {
      scanResult.value = res.result
    },
    fail: (err) => {
      console.error(err, " at src/pages/function/components/MediaCard.uvue:50")
    },
  })
}

return (): any | null => {

  return _cV(unref(Card), _uM({ title: "相机与多媒体" }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0] wtu-q8b8gq-0 wtu-b9ro1a-1" }), [
        photoUrl.value === ''
          ? _cE("text", _uM({
              key: 0,
              class: "text-14px wtu-1s564xi-2"
            }), "未选择照片")
          : _cE("image", _uM({
              key: 1,
              src: photoUrl.value,
              class: "w-150px h-150px rounded-8px",
              mode: "aspectFill"
            }), null, 8 /* PROPS */, ["src"])
      ]),
      _cE("view", _uM({
        class: "wtu-2xyrg9-3 h-44px rounded-8px wtu-1y0ezim-4 mb-12px wtu-y8rs9f-5 wtu-kkkwyu-6 wtu-q8b8gq-0 wtu-b9ro1a-1",
        onClick: chooseImage
      }), [
        _cE("text", _uM({ class: "wtu-1ra95rn-7 text-14px wtu-qeuvjr-8" }), "拍摄/选择照片")
      ]),
      _cE("view", _uM({ class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }), [
        _cE("text", _uM({ class: "text-12px wtu-1s564xi-2 mb-8px" }), "扫码结果"),
        _cE("text", _uM({ class: "text-14px wtu-qeuvjr-8 wtu-1j4877a-9" }), _tD(scanResult.value !== '' ? scanResult.value : '暂无数据'), 1 /* TEXT */)
      ]),
      _cE("view", _uM({
        class: "wtu-2xyrg9-3 h-44px rounded-8px wtu-yibfla-a wtu-y8rs9f-5 wtu-kkkwyu-6 wtu-q8b8gq-0 wtu-b9ro1a-1",
        onClick: scanCode
      }), [
        _cE("text", _uM({ class: "wtu-1ra95rn-7 text-14px wtu-qeuvjr-8" }), "扫码测试")
      ])
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcPagesFunctionComponentsMediaCardStyles = [_uM([["font-bold", _pS(_uM([["--tw-font-weight", "700"], ["fontWeight", 700]]))], ["wtu-q8b8gq-0", _pS(_uM([["alignItems", "center"]]))], ["wtu-b9ro1a-1", _pS(_uM([["justifyContent", "center"]]))], ["wtu-1s564xi-2", _pS(_uM([["color", "#94a3b8"]]))], ["wtu-2xyrg9-3", _pS(_uM([["width", "100%"]]))], ["wtu-1y0ezim-4", _pS(_uM([["backgroundColor", "#3b82f6"]]))], ["wtu-y8rs9f-5", _pS(_uM([["display", "flex"]]))], ["wtu-kkkwyu-6", _pS(_uM([["flexDirection", "row"]]))], ["wtu-1ra95rn-7", _pS(_uM([["color", "#ffffff"]]))], ["wtu-qeuvjr-8", _pS(_uM([["--tw-font-weight", "700"], ["fontWeight", 700]]))], ["wtu-1j4877a-9", _pS(_uM([["color", "#334155"]]))], ["wtu-yibfla-a", _pS(_uM([["backgroundColor", "#10b981"]]))]])]
