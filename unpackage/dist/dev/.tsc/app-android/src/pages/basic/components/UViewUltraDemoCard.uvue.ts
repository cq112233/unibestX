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
      _cE("view", _uM({ class: "wtu-13iqdf5-0 mb-16px" }), [
        _cE("text", _uM({ class: "text-13px wtu-1785dy7-1 leading-18px mb-12px" }), " uview-ultra 是一款专为 uni-app X 设计的高品质 UI 组件库，高度适配 UTS 强类型系统与原生跨端开发，包含按钮、表单、反馈等丰富且精美的组件集。 "),
        _cE("view", _uM({
          class: "wtu-1q4tojf-2 wtu-w5085f-3 wtu-16me7zd-4 p-8px rounded-6px mb-12px",
          onClick: copyWebsiteUrl
        }), [
          _cE("text", _uM({ class: "text-12px wtu-1qimyho-5 wtu-4bvek0-6 mr-4px" }), "官网："),
          _cE("text", _uM({ class: "text-12px wtu-ficp91-7 wtu-htznmv-8 wtu-6q2ecc-9" }), "https://uview-ultra.lingyun.net/"),
          _cE("text", _uM({ class: "text-11px wtu-1vmhsdv-a" }), "点击复制")
        ]),
        _cE("view", _uM({ class: "wtu-1q4tojf-2 wtu-w5085f-3 mb-4px wtu-1r3ycv9-b" }), [
          _cE("view", _uM({ class: "mr-6px mb-4px px-10px py-3px rounded-20px wtu-4xy5je-c border-width-1px border-style-solid border-color-[#bfdbfe]" }), [
            _cE("text", _uM({ class: "text-11px wtu-ficp91-7 wtu-4bvek0-6" }), "高品质组件")
          ]),
          _cE("view", _uM({ class: "mr-6px mb-4px px-10px py-3px rounded-20px wtu-1s7ijmi-d border-width-1px border-style-solid border-color-[#a7f3d0]" }), [
            _cE("text", _uM({ class: "text-11px wtu-2n85i1-e wtu-4bvek0-6" }), "原生 UTS 支持")
          ]),
          _cE("view", _uM({ class: "mb-4px px-10px py-3px rounded-20px wtu-1gfg2fq-f border-width-1px border-style-solid border-color-[#fde68a]" }), [
            _cE("text", _uM({ class: "text-11px wtu-3gfhmb-g wtu-4bvek0-6" }), "跨端一致性")
          ])
        ])
      ]),
      _cE("view", _uM({
        class: "wtu-1qytvm8-h h-44px rounded-8px wtu-y5c8pz-i wtu-23qlii-j wtu-1q4tojf-2 wtu-w5085f-3 wtu-1v0n2r7-k",
        onClick: navigateToShowcase
      }), [
        _cE("text", _uM({ class: "wtu-53w5ye-l text-14px wtu-moifc8-m" }), "进入 uview-ultra 示例")
      ])
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcPagesBasicComponentsUViewUltraDemoCardStyles = [_uM([["wtu-13iqdf5-0", _pS(_uM([["flexDirection", "column"]]))], ["wtu-1785dy7-1", _pS(_uM([["color", "#64748b"]]))], ["wtu-1q4tojf-2", _pS(_uM([["flexDirection", "row"]]))], ["wtu-w5085f-3", _pS(_uM([["alignItems", "center"]]))], ["wtu-16me7zd-4", _pS(_uM([["backgroundColor", "#f1f5f9"]]))], ["wtu-1qimyho-5", _pS(_uM([["color", "#475569"]]))], ["wtu-4bvek0-6", _pS(_uM([["--tw-font-weight", "var(--font-weight-medium, 500)"], ["fontWeight", 500]]))], ["wtu-ficp91-7", _pS(_uM([["color", "#2563eb"]]))], ["wtu-htznmv-8", _pS(_uM([["textDecorationLine", "underline"]]))], ["wtu-6q2ecc-9", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["wtu-1vmhsdv-a", _pS(_uM([["color", "#94a3b8"]]))], ["wtu-1r3ycv9-b", _pS(_uM([["flexWrap", "wrap"]]))], ["wtu-4xy5je-c", _pS(_uM([["backgroundColor", "#e0edff"]]))], ["wtu-1s7ijmi-d", _pS(_uM([["backgroundColor", "#d1fae5"]]))], ["wtu-2n85i1-e", _pS(_uM([["color", "#059669"]]))], ["wtu-1gfg2fq-f", _pS(_uM([["backgroundColor", "#fef3c7"]]))], ["wtu-3gfhmb-g", _pS(_uM([["color", "#d97706"]]))], ["wtu-1qytvm8-h", _pS(_uM([["width", "100%"]]))], ["wtu-y5c8pz-i", _pS(_uM([["backgroundColor", "#3b82f6"]]))], ["wtu-23qlii-j", _pS(_uM([["display", "flex"]]))], ["wtu-1v0n2r7-k", _pS(_uM([["justifyContent", "center"]]))], ["wtu-53w5ye-l", _pS(_uM([["color", "#ffffff"]]))], ["wtu-moifc8-m", _pS(_uM([["--tw-font-weight", "var(--font-weight-bold, 700)"], ["fontWeight", 700]]))]])]
