import Card from './Card.uvue';


const __sfc__ = defineComponent({
  __name: 'UViewUltraDemoCard',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

function copyWebsiteUrl() {
  uni.setClipboardData({
    data: 'https://uview-ultra.lingyun.net/',
    success: () => {
      uni.showToast({
        title: '官网网址已复制到剪贴板',
        icon: 'none'
      });
    }
  });
}

function navigateToShowcase() {
  uni.navigateTo({
    url: '/src/sub/uview-ultra/uview-ultra',
    fail: (err) => {
      console.error('navigateToShowcase fail:', err, " at src/pages/basic/components/UViewUltraDemoCard.uvue:58");
    }
  });
}

return (): any | null => {

  return _cV(unref(Card), _uM({ title: "uview-ultra 组件库" }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "wtu-13iqdf5-0 wtu-1d5cxys-1" }), [
        _cE("text", _uM({ class: "wtu-w1o5fx-2 wtu-1785dy7-3 wtu-pfly9v-4 wtu-1kr9ink-5" }), " uview-ultra 是一款专为 uni-app X 设计的高品质 UI 组件库，高度适配 UTS 强类型系统与原生跨端开发，包含按钮、表单、反馈等丰富且精美的组件集。 "),
        _cE("view", _uM({
          class: "wtu-1q4tojf-6 wtu-w5085f-7 wtu-16me7zd-8 wtu-430mh4-9 wtu-19kp62j-a wtu-1kr9ink-5",
          onClick: copyWebsiteUrl
        }), [
          _cE("text", _uM({ class: "wtu-1ksfa3k-b wtu-1qimyho-c wtu-4bvek0-d wtu-1ltypld-e" }), "官网："),
          _cE("text", _uM({ class: "wtu-1ksfa3k-b wtu-ficp91-f wtu-htznmv-g wtu-6q2ecc-h" }), "https://uview-ultra.lingyun.net/"),
          _cE("text", _uM({ class: "wtu-eqrddv-i wtu-1vmhsdv-j" }), "点击复制")
        ]),
        _cE("view", _uM({ class: "wtu-1q4tojf-6 wtu-w5085f-7 wtu-mjrjfl-k wtu-1r3ycv9-l" }), [
          _cE("view", _uM({ class: "wtu-1tb23ev-m wtu-mjrjfl-k wtu-ffxk5r-n wtu-loqjyq-o wtu-emxvyn-p wtu-4xy5je-q wtu-18q4kl-r wtu-1dzl0d5-s wtu-1gc7zx2-t" }), [
            _cE("text", _uM({ class: "wtu-eqrddv-i wtu-ficp91-f wtu-4bvek0-d" }), "高品质组件")
          ]),
          _cE("view", _uM({ class: "wtu-1tb23ev-m wtu-mjrjfl-k wtu-ffxk5r-n wtu-loqjyq-o wtu-emxvyn-p wtu-1s7ijmi-u wtu-18q4kl-r wtu-1dzl0d5-s wtu-1fh5oba-v" }), [
            _cE("text", _uM({ class: "wtu-eqrddv-i wtu-2n85i1-w wtu-4bvek0-d" }), "原生 UTS 支持")
          ]),
          _cE("view", _uM({ class: "wtu-mjrjfl-k wtu-ffxk5r-n wtu-loqjyq-o wtu-emxvyn-p wtu-1gfg2fq-x wtu-18q4kl-r wtu-1dzl0d5-s wtu-1y4kgb1-y" }), [
            _cE("text", _uM({ class: "wtu-eqrddv-i wtu-3gfhmb-z wtu-4bvek0-d" }), "跨端一致性")
          ])
        ])
      ]),
      _cE("view", _uM({
        class: "wtu-1qytvm8-10 wtu-15ubny6-11 wtu-1g7vkj5-12 wtu-y5c8pz-13 wtu-23qlii-14 wtu-1q4tojf-6 wtu-w5085f-7 wtu-1v0n2r7-15",
        onClick: navigateToShowcase
      }), [
        _cE("text", _uM({ class: "wtu-53w5ye-16 wtu-1o11cnm-17 wtu-moifc8-18" }), "进入 uview-ultra 示例")
      ])
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcPagesBasicComponentsUViewUltraDemoCardStyles = [_uM([["wtu-13iqdf5-0", _pS(_uM([["flexDirection", "column"]]))], ["wtu-1d5cxys-1", _pS(_uM([["marginBottom", 16]]))], ["wtu-w1o5fx-2", _pS(_uM([["fontSize", 13]]))], ["wtu-1785dy7-3", _pS(_uM([["color", "#64748b"]]))], ["wtu-pfly9v-4", _pS(_uM([["--tw-leading", "18px"], ["lineHeight", "18px"]]))], ["wtu-1kr9ink-5", _pS(_uM([["marginBottom", 12]]))], ["wtu-1q4tojf-6", _pS(_uM([["flexDirection", "row"]]))], ["wtu-w5085f-7", _pS(_uM([["alignItems", "center"]]))], ["wtu-16me7zd-8", _pS(_uM([["backgroundColor", "#f1f5f9"]]))], ["wtu-430mh4-9", _pS(_uM([["paddingTop", 8], ["paddingRight", 8], ["paddingBottom", 8], ["paddingLeft", 8]]))], ["wtu-19kp62j-a", _pS(_uM([["borderTopLeftRadius", 6], ["borderTopRightRadius", 6], ["borderBottomRightRadius", 6], ["borderBottomLeftRadius", 6]]))], ["wtu-1ksfa3k-b", _pS(_uM([["fontSize", 12]]))], ["wtu-1qimyho-c", _pS(_uM([["color", "#475569"]]))], ["wtu-4bvek0-d", _pS(_uM([["--tw-font-weight", "var(--font-weight-medium, 500)"], ["fontWeight", 500]]))], ["wtu-1ltypld-e", _pS(_uM([["marginRight", 4]]))], ["wtu-ficp91-f", _pS(_uM([["color", "#2563eb"]]))], ["wtu-htznmv-g", _pS(_uM([["textDecorationLine", "underline"]]))], ["wtu-6q2ecc-h", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["wtu-eqrddv-i", _pS(_uM([["fontSize", 11]]))], ["wtu-1vmhsdv-j", _pS(_uM([["color", "#94a3b8"]]))], ["wtu-mjrjfl-k", _pS(_uM([["marginBottom", 4]]))], ["wtu-1r3ycv9-l", _pS(_uM([["flexWrap", "wrap"]]))], ["wtu-1tb23ev-m", _pS(_uM([["marginRight", 6]]))], ["wtu-ffxk5r-n", _pS(_uM([["paddingLeft", 10], ["paddingRight", 10]]))], ["wtu-loqjyq-o", _pS(_uM([["paddingTop", 3], ["paddingBottom", 3]]))], ["wtu-emxvyn-p", _pS(_uM([["borderTopLeftRadius", 20], ["borderTopRightRadius", 20], ["borderBottomRightRadius", 20], ["borderBottomLeftRadius", 20]]))], ["wtu-4xy5je-q", _pS(_uM([["backgroundColor", "#e0edff"]]))], ["wtu-18q4kl-r", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "var(--tw-border-style)"], ["borderRightStyle", "var(--tw-border-style)"], ["borderBottomStyle", "var(--tw-border-style)"], ["borderLeftStyle", "var(--tw-border-style)"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["wtu-1dzl0d5-s", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["wtu-1gc7zx2-t", _pS(_uM([["borderTopColor", "#bfdbfe"], ["borderRightColor", "#bfdbfe"], ["borderBottomColor", "#bfdbfe"], ["borderLeftColor", "#bfdbfe"]]))], ["wtu-1s7ijmi-u", _pS(_uM([["backgroundColor", "#d1fae5"]]))], ["wtu-1fh5oba-v", _pS(_uM([["borderTopColor", "#a7f3d0"], ["borderRightColor", "#a7f3d0"], ["borderBottomColor", "#a7f3d0"], ["borderLeftColor", "#a7f3d0"]]))], ["wtu-2n85i1-w", _pS(_uM([["color", "#059669"]]))], ["wtu-1gfg2fq-x", _pS(_uM([["backgroundColor", "#fef3c7"]]))], ["wtu-1y4kgb1-y", _pS(_uM([["borderTopColor", "#fde68a"], ["borderRightColor", "#fde68a"], ["borderBottomColor", "#fde68a"], ["borderLeftColor", "#fde68a"]]))], ["wtu-3gfhmb-z", _pS(_uM([["color", "#d97706"]]))], ["wtu-1qytvm8-10", _pS(_uM([["width", "100%"]]))], ["wtu-15ubny6-11", _pS(_uM([["height", 44]]))], ["wtu-1g7vkj5-12", _pS(_uM([["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["wtu-y5c8pz-13", _pS(_uM([["backgroundColor", "#3b82f6"]]))], ["wtu-23qlii-14", _pS(_uM([["display", "flex"]]))], ["wtu-1v0n2r7-15", _pS(_uM([["justifyContent", "center"]]))], ["wtu-53w5ye-16", _pS(_uM([["color", "#ffffff"]]))], ["wtu-1o11cnm-17", _pS(_uM([["fontSize", 14]]))], ["wtu-moifc8-18", _pS(_uM([["--tw-font-weight", "var(--font-weight-bold, 700)"], ["fontWeight", 700]]))]])]
