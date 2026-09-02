
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
    class: "wtu-7ensv3-0 wtu-bpibez-1 wtu-xutmkl-2 wtu-1x9quu6-3 wtu-19r8swa-4",
    style: _nS(_uM({
      backgroundColor: 'var(--card-bg, #ffffff)',
      borderColor: 'var(--border-color, #edf2f7)'
    }))
  }), [
    _cE("view", _uM({ class: "wtu-1xzbcj9-5 wtu-ermdzg-6 wtu-1ejnel4-7 wtu-1gm6xh-8" }), [
      _cE("view", _uM({ class: "wtu-lhmr8c-9 wtu-r622l8-a wtu-1rlqhz-b wtu-1y9hy8q-c wtu-12f14oy-d" })),
      renderSlot(_ctx.$slots, "title", {}, (): any[] => [
        _cE("text", _uM({
          class: "wtu-12gzl1t-e wtu-vvdt71-f",
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
const GenSrcPagesBasicComponentsCardStyles = [_uM([["wtu-7ensv3-0", _pS(_uM([["borderTopLeftRadius", 16], ["borderTopRightRadius", 16], ["borderBottomRightRadius", 16], ["borderBottomLeftRadius", 16]]))], ["wtu-bpibez-1", _pS(_uM([["paddingTop", 20], ["paddingRight", 20], ["paddingBottom", 20], ["paddingLeft", 20]]))], ["wtu-xutmkl-2", _pS(_uM([["marginTop", 16], ["marginRight", 16], ["marginBottom", 16], ["marginLeft", 16]]))], ["wtu-1x9quu6-3", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "var(--tw-border-style)"], ["borderRightStyle", "var(--tw-border-style)"], ["borderBottomStyle", "var(--tw-border-style)"], ["borderLeftStyle", "var(--tw-border-style)"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["wtu-19r8swa-4", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["wtu-1xzbcj9-5", _pS(_uM([["display", "flex"]]))], ["wtu-ermdzg-6", _pS(_uM([["flexDirection", "row"]]))], ["wtu-1ejnel4-7", _pS(_uM([["alignItems", "center"]]))], ["wtu-1gm6xh-8", _pS(_uM([["marginBottom", 16]]))], ["wtu-lhmr8c-9", _pS(_uM([["width", 4]]))], ["wtu-r622l8-a", _pS(_uM([["height", 16]]))], ["wtu-1rlqhz-b", _pS(_uM([["backgroundColor", "#3182ce"]]))], ["wtu-1y9hy8q-c", _pS(_uM([["borderTopLeftRadius", 2], ["borderTopRightRadius", 2], ["borderBottomRightRadius", 2], ["borderBottomLeftRadius", 2]]))], ["wtu-12f14oy-d", _pS(_uM([["marginRight", 8]]))], ["wtu-12gzl1t-e", _pS(_uM([["fontSize", 16]]))], ["wtu-vvdt71-f", _pS(_uM([["--tw-font-weight", "var(--font-weight-bold, 700)"], ["fontWeight", 700]]))]])]
