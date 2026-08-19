
const __sfc__ = defineComponent({
  __name: 'Card',
  props: {
  title: {
    type: String,
    default: '默认标题'
  }
},
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



return (): any | null => {

  return _cE("view", _uM({
    class: "rounded-16px p-20px m-16px border-width-1px border-style-solid",
    style: _nS(_uM({
      backgroundColor: 'var(--card-bg, #ffffff)',
      borderColor: 'var(--border-color, #edf2f7)'
    }))
  }), [
    _cE("view", _uM({ class: "flex flex-row items-center mb-16px" }), [
      _cE("view", _uM({ class: "w-4px h-16px bg-__3182ce_ rounded-2px mr-8px" })),
      renderSlot(_ctx.$slots, "title", {}, (): any[] => [
        _cE("text", _uM({
          class: "text-16px font-bold",
          style: _nS(_uM({ color: 'var(--text-color, #2d3748)' }))
        }), _tD(_ctx.title), 5 /* TEXT, STYLE */)
      ])
    ]),
    renderSlot(_ctx.$slots, "default")
  ], 4 /* STYLE */)
}
}

})
export default __sfc__
const GenSrcPagesBasicComponentsCardStyles = [_uM([["bg-__3182ce_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#3182ce"]]))], ["border-style-solid", _pS(_uM([["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["border-width-1px", _pS(_uM([["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["flex", _pS(_uM([["display", "flex"]]))], ["flex-row", _pS(_uM([["flexDirection", "row"]]))], ["font-bold", _pS(_uM([["fontWeight", 700]]))], ["h-16px", _pS(_uM([["height", 16]]))], ["items-center", _pS(_uM([["alignItems", "center"]]))], ["m-16px", _pS(_uM([["marginTop", 16], ["marginRight", 16], ["marginBottom", 16], ["marginLeft", 16]]))], ["mb-16px", _pS(_uM([["marginBottom", 16]]))], ["mr-8px", _pS(_uM([["marginRight", 8]]))], ["p-20px", _pS(_uM([["paddingTop", 20], ["paddingRight", 20], ["paddingBottom", 20], ["paddingLeft", 20]]))], ["rounded-16px", _pS(_uM([["borderTopLeftRadius", 16], ["borderTopRightRadius", 16], ["borderBottomRightRadius", 16], ["borderBottomLeftRadius", 16]]))], ["rounded-2px", _pS(_uM([["borderTopLeftRadius", 2], ["borderTopRightRadius", 2], ["borderBottomRightRadius", 2], ["borderBottomLeftRadius", 2]]))], ["text-16px", _pS(_uM([["fontSize", 16]]))], ["w-4px", _pS(_uM([["width", 4]]))]])]
