
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

  return _cE("view", _uM({ class: "wtu-1ldduh1-0 rounded-16px p-20px m-16px border-width-1px border-style-solid border-color-[#edf2f7]" }), [
    _cE("view", _uM({ class: "wtu-1xzbcj9-1 wtu-ermdzg-2 wtu-1ejnel4-3 mb-16px" }), [
      _cE("view", _uM({ class: "w-4px h-16px wtu-1rlqhz-4 rounded-2px mr-8px" })),
      renderSlot(_ctx.$slots, "title", {}, (): any[] => [
        _cE("text", _uM({ class: "text-16px wtu-vvdt71-5 wtu-6hzxf1-6" }), _tD(_ctx.title), 1 /* TEXT */)
      ])
    ]),
    renderSlot(_ctx.$slots, "default")
  ])
}
}

})
export default __sfc__
const GenSrcPagesBasicComponentsCardStyles = [_uM([["wtu-1ldduh1-0", _pS(_uM([["backgroundColor", "#ffffff"]]))], ["wtu-1xzbcj9-1", _pS(_uM([["display", "flex"]]))], ["wtu-ermdzg-2", _pS(_uM([["flexDirection", "row"]]))], ["wtu-1ejnel4-3", _pS(_uM([["alignItems", "center"]]))], ["wtu-1rlqhz-4", _pS(_uM([["backgroundColor", "#3182ce"]]))], ["wtu-vvdt71-5", _pS(_uM([["--tw-font-weight", "var(--font-weight-bold, 700)"], ["fontWeight", 700]]))], ["wtu-6hzxf1-6", _pS(_uM([["color", "#2d3748"]]))]])]
