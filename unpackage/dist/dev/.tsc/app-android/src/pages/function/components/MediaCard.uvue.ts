import Card from '../../basic/components/Card.uvue';
import { ref } from 'vue';


const __sfc__ = defineComponent({
  __name: 'MediaCard',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const photoUrl = ref('');
const scanResult = ref('');

function chooseImage() {
  uni.chooseImage({
    count: 1,
    success: (res) => {
      const paths = res.tempFilePaths;
      if (paths.length > 0) {
        photoUrl.value = paths[0];
      }
    },
    fail: (err) => {
      console.error(err, " at src/pages/function/components/MediaCard.uvue:39");
    }
  });
}

function scanCode() {
  uni.scanCode({
    success: (res) => {
      scanResult.value = res.result;
    },
    fail: (err) => {
      console.error(err, " at src/pages/function/components/MediaCard.uvue:50");
    }
  });
}

return (): any | null => {

  return _cV(unref(Card), _uM({ title: "相机与多媒体" }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "wtu-19w2j55-0 wtu-vj37ae-1 wtu-iq02sv-2 wtu-1ohql58-3 wtu-pa6ipo-4 wtu-tlxzxu-5 wtu-q8b8gq-6 wtu-b9ro1a-7" }), [
        photoUrl.value === ''
          ? _cE("text", _uM({
              key: 0,
              class: "wtu-1q5m829-8 wtu-1s564xi-9"
            }), "未选择照片")
          : _cE("image", _uM({
              key: 1,
              src: photoUrl.value,
              class: "wtu-p8f9m4-a wtu-13oewch-b wtu-6cklr6-c",
              mode: "aspectFill"
            }), null, 8 /* PROPS */, ["src"])
      ]),
      _cE("view", _uM({
        class: "wtu-2xyrg9-d wtu-1e3977j-e wtu-6cklr6-c wtu-1y0ezim-f wtu-xcm8yz-g wtu-y8rs9f-h wtu-kkkwyu-i wtu-q8b8gq-6 wtu-b9ro1a-7",
        onClick: chooseImage
      }), [
        _cE("text", _uM({ class: "wtu-1ra95rn-j wtu-1q5m829-8 wtu-qeuvjr-k" }), "拍摄/选择照片")
      ]),
      _cE("view", _uM({ class: "wtu-19w2j55-0 wtu-vj37ae-1 wtu-iq02sv-2 wtu-1ohql58-3 wtu-pa6ipo-4 wtu-tlxzxu-5" }), [
        _cE("text", _uM({ class: "wtu-18z544j-l wtu-1s564xi-9 wtu-1ek978k-m" }), "扫码结果"),
        _cE("text", _uM({ class: "wtu-1q5m829-8 wtu-qeuvjr-k wtu-1j4877a-n" }), _tD(scanResult.value !== '' ? scanResult.value : '暂无数据'), 1 /* TEXT */)
      ]),
      _cE("view", _uM({
        class: "wtu-2xyrg9-d wtu-1e3977j-e wtu-6cklr6-c wtu-yibfla-o wtu-y8rs9f-h wtu-kkkwyu-i wtu-q8b8gq-6 wtu-b9ro1a-7",
        onClick: scanCode
      }), [
        _cE("text", _uM({ class: "wtu-1ra95rn-j wtu-1q5m829-8 wtu-qeuvjr-k" }), "扫码测试")
      ])
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcPagesFunctionComponentsMediaCardStyles = [_uM([["wtu-19w2j55-0", _pS(_uM([["borderTopLeftRadius", 12], ["borderTopRightRadius", 12], ["borderBottomRightRadius", 12], ["borderBottomLeftRadius", 12]]))], ["wtu-vj37ae-1", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["wtu-iq02sv-2", _pS(_uM([["marginBottom", 16]]))], ["wtu-1ohql58-3", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "var(--tw-border-style)"], ["borderRightStyle", "var(--tw-border-style)"], ["borderBottomStyle", "var(--tw-border-style)"], ["borderLeftStyle", "var(--tw-border-style)"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["wtu-pa6ipo-4", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["wtu-tlxzxu-5", _pS(_uM([["borderTopColor", "#e2e8f0"], ["borderRightColor", "#e2e8f0"], ["borderBottomColor", "#e2e8f0"], ["borderLeftColor", "#e2e8f0"]]))], ["wtu-q8b8gq-6", _pS(_uM([["alignItems", "center"]]))], ["wtu-b9ro1a-7", _pS(_uM([["justifyContent", "center"]]))], ["wtu-1q5m829-8", _pS(_uM([["fontSize", 14]]))], ["wtu-1s564xi-9", _pS(_uM([["color", "#94a3b8"]]))], ["wtu-p8f9m4-a", _pS(_uM([["width", 150]]))], ["wtu-13oewch-b", _pS(_uM([["height", 150]]))], ["wtu-6cklr6-c", _pS(_uM([["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["wtu-2xyrg9-d", _pS(_uM([["width", "100%"]]))], ["wtu-1e3977j-e", _pS(_uM([["height", 44]]))], ["wtu-1y0ezim-f", _pS(_uM([["backgroundColor", "#3b82f6"]]))], ["wtu-xcm8yz-g", _pS(_uM([["marginBottom", 12]]))], ["wtu-y8rs9f-h", _pS(_uM([["display", "flex"]]))], ["wtu-kkkwyu-i", _pS(_uM([["flexDirection", "row"]]))], ["wtu-1ra95rn-j", _pS(_uM([["color", "#ffffff"]]))], ["wtu-qeuvjr-k", _pS(_uM([["--tw-font-weight", "var(--font-weight-bold, 700)"], ["fontWeight", 700]]))], ["wtu-18z544j-l", _pS(_uM([["fontSize", 12]]))], ["wtu-1ek978k-m", _pS(_uM([["marginBottom", 8]]))], ["wtu-1j4877a-n", _pS(_uM([["color", "#334155"]]))], ["wtu-yibfla-o", _pS(_uM([["backgroundColor", "#10b981"]]))]])]
