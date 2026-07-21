import Card from './Card.uvue'


const __sfc__ = defineComponent({
  __name: 'UViewUltraDemoCard',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

let isNavigating = false

function navigateToShowcase() {
  if (isNavigating) {
    return
  }
  isNavigating = true
  uni.navigateTo({
    url: '/src/sub/uview-ultra/uview-ultra',
    complete: () => {
      setTimeout(() => {
        isNavigating = false
      }, 500)
    },
  })
}

return (): any | null => {

  return _cV(unref(Card), _uM({ title: "uview-ultra 组件库" }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "flex-col mb-16px" }), [
        _cE("text", _uM({ class: "text-13px text-__64748b_ leading-18px mb-12px" }), " uview-ultra 是一款专为 uni-app X 设计的高品质 UI 组件库，高度适配 UTS 强类型系统与原生跨端开发，包含按钮、表单、反馈等丰富且精美的组件集。 "),
        _cE("view", _uM({ class: "flex-row items-center mb-4px flex-wrap" }), [
          _cE("view", _uM({ class: "mr-6px mb-4px px-10px py-3px rounded-20px bg-__e0edff_ border-width-1px border-style-solid border-color-__bfdbfe_" }), [
            _cE("text", _uM({ class: "text-11px text-__2563eb_ font-medium" }), "高品质组件")
          ]),
          _cE("view", _uM({ class: "mr-6px mb-4px px-10px py-3px rounded-20px bg-__d1fae5_ border-width-1px border-style-solid border-color-__a7f3d0_" }), [
            _cE("text", _uM({ class: "text-11px text-__059669_ font-medium" }), "原生 UTS 支持")
          ]),
          _cE("view", _uM({ class: "mb-4px px-10px py-3px rounded-20px bg-__fef3c7_ border-width-1px border-style-solid border-color-__fde68a_" }), [
            _cE("text", _uM({ class: "text-11px text-__d97706_ font-medium" }), "跨端一致性")
          ])
        ])
      ]),
      _cE("view", _uM({
        class: "w-full h-44px rounded-8px bg-__3b82f6_ flex flex-row items-center justify-center",
        onClick: navigateToShowcase
      }), [
        _cE("text", _uM({ class: "text-__ffffff_ text-14px font-bold" }), "进入 uview-ultra 示例")
      ])
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcPagesBasicComponentsUViewUltraDemoCardStyles = [_uM([["bg-__3b82f6_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#3b82f6"]]))], ["bg-__d1fae5_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#d1fae5"]]))], ["bg-__e0edff_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#e0edff"]]))], ["bg-__fef3c7_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#fef3c7"]]))], ["border-color-__a7f3d0_", _pS(_uM([["borderTopColor", "#a7f3d0"], ["borderRightColor", "#a7f3d0"], ["borderBottomColor", "#a7f3d0"], ["borderLeftColor", "#a7f3d0"]]))], ["border-color-__bfdbfe_", _pS(_uM([["borderTopColor", "#bfdbfe"], ["borderRightColor", "#bfdbfe"], ["borderBottomColor", "#bfdbfe"], ["borderLeftColor", "#bfdbfe"]]))], ["border-color-__fde68a_", _pS(_uM([["borderTopColor", "#fde68a"], ["borderRightColor", "#fde68a"], ["borderBottomColor", "#fde68a"], ["borderLeftColor", "#fde68a"]]))], ["border-style-solid", _pS(_uM([["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["border-width-1px", _pS(_uM([["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["flex", _pS(_uM([["display", "flex"]]))], ["flex-col", _pS(_uM([["flexDirection", "column"]]))], ["flex-row", _pS(_uM([["flexDirection", "row"]]))], ["flex-wrap", _pS(_uM([["flexWrap", "wrap"]]))], ["font-bold", _pS(_uM([["fontWeight", 700]]))], ["font-medium", _pS(_uM([["fontWeight", 500]]))], ["h-44px", _pS(_uM([["height", 44]]))], ["items-center", _pS(_uM([["alignItems", "center"]]))], ["justify-center", _pS(_uM([["justifyContent", "center"]]))], ["leading-18px", _pS(_uM([["lineHeight", "18px"]]))], ["mb-12px", _pS(_uM([["marginBottom", 12]]))], ["mb-16px", _pS(_uM([["marginBottom", 16]]))], ["mb-4px", _pS(_uM([["marginBottom", 4]]))], ["mr-6px", _pS(_uM([["marginRight", 6]]))], ["px-10px", _pS(_uM([["paddingLeft", 10], ["paddingRight", 10]]))], ["py-3px", _pS(_uM([["paddingTop", 3], ["paddingBottom", 3]]))], ["rounded-20px", _pS(_uM([["borderTopLeftRadius", 20], ["borderTopRightRadius", 20], ["borderBottomRightRadius", 20], ["borderBottomLeftRadius", 20]]))], ["rounded-8px", _pS(_uM([["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["text-__059669_", _pS(_uM([["color", "#059669"]]))], ["text-__2563eb_", _pS(_uM([["color", "#2563eb"]]))], ["text-__64748b_", _pS(_uM([["color", "#64748b"]]))], ["text-__d97706_", _pS(_uM([["color", "#d97706"]]))], ["text-__ffffff_", _pS(_uM([["color", "#ffffff"]]))], ["text-11px", _pS(_uM([["fontSize", 11]]))], ["text-13px", _pS(_uM([["fontSize", 13]]))], ["text-14px", _pS(_uM([["fontSize", 14]]))], ["w-full", _pS(_uM([["width", "100%"]]))]])]
