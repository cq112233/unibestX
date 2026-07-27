
const __sfc__ = defineComponent({
  data() {
    return {
      condition: true,
      extra: 'wtu-1hb5u6g-g wtu-1ht3hqg-h',
      flag: true,
      toggled: true,
    }
  },
})

export default __sfc__
function GenSrcComponentsBindClassRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
  return _cE("view", _uM({ class: "wtu-1hu0utr-0 wtu-y55q6h-1 wtu-ivhrpw-2 wtu-19wcvi6-3" }), [
    _cE("view", _uM({ class: "issue-822-component-child wtu-2oqnm6-4 wtu-17asn6o-5 wtu-3c9fnx-6" }), [
      _cE("text", _uM({ class: "wtu-1f3rwb4-7" }), "issue 822 component child")
    ]),
    _cE("view", _uM({ class: "wtu-1elh8h7-8 wtu-3c9fnx-6 wtu-vlijqx-9 wtu-y55q6h-1" }), [
      _cE("text", _uM({
        class: _nC(_ctx.flag ? 'wtu-6mro4v-a wtu-g3slxv-b' : 'wtu-zbeef1-c')
      }), " simple ", 2 /* CLASS */),
      _cE("text", _uM({
        class: _nC([
          _ctx.extra,
          _uM({ 'wtu-c5hw0m-d': _ctx.toggled }),
        ])
      }), " complex ", 2 /* CLASS */),
      _cE("text", _uM({
        class: _nC(_ctx.condition ? 'wtu-2jxb3j-e wtu-9251zl-f' : '')
      }), " fallback ", 2 /* CLASS */)
    ])
  ])
}
const GenSrcComponentsBindClassStyles = [_uM([["issue-822-component-child", _pS(_uM([["borderTopWidth", 2], ["borderRightWidth", 2], ["borderBottomWidth", 2], ["borderLeftWidth", 2], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"], ["borderTopColor", "#7c3aed"], ["borderRightColor", "#7c3aed"], ["borderBottomColor", "#7c3aed"], ["borderLeftColor", "#7c3aed"]]))], ["border-solid", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["wtu-1hu0utr-0", _pS(_uM([["borderTopStyle", "var(--tw-border-style)"], ["borderRightStyle", "var(--tw-border-style)"], ["borderBottomStyle", "var(--tw-border-style)"], ["borderLeftStyle", "var(--tw-border-style)"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["wtu-y55q6h-1", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["wtu-ivhrpw-2", _pS(_uM([["borderTopColor", "#999999"], ["borderRightColor", "#999999"], ["borderBottomColor", "#999999"], ["borderLeftColor", "#999999"]]))], ["wtu-19wcvi6-3", _pS(_uM([["paddingTop", "32rpx"], ["paddingRight", "32rpx"], ["paddingBottom", "32rpx"], ["paddingLeft", "32rpx"]]))], ["wtu-2oqnm6-4", _pS(_uM([["height", 200]]))], ["wtu-17asn6o-5", _pS(_uM([["width", "100%"]]))], ["wtu-3c9fnx-6", _pS(_uM([["backgroundColor", "#87add3"]]))], ["wtu-1f3rwb4-7", _pS(_uM([["color", "#111111"]]))], ["wtu-1elh8h7-8", _pS(_uM([["paddingTop", 20.32], ["paddingRight", 20.32], ["paddingBottom", 20.32], ["paddingLeft", 20.32]]))], ["wtu-vlijqx-9", _pS(_uM([["borderTopColor", "#111111"], ["borderRightColor", "#111111"], ["borderBottomColor", "#111111"], ["borderLeftColor", "#111111"]]))], ["wtu-6mro4v-a", _pS(_uM([["backgroundColor", "#123456"]]))], ["wtu-g3slxv-b", _pS(_uM([["marginBottom", 12.32]]))], ["wtu-zbeef1-c", _pS(_uM([["backgroundColor", "#d7700a"]]))], ["wtu-c5hw0m-d", _pS(_uM([["color", "#ff0000"]]))], ["wtu-2jxb3j-e", _pS(_uM([["backgroundColor", "#f205f6"]]))], ["wtu-9251zl-f", _pS(_uM([["color", "#70ed0a"]]))], ["wtu-1hb5u6g-g", _pS(_uM([["fontSize", "93.54rpx"]]))], ["wtu-1ht3hqg-h", _pS(_uM([["backgroundColor", "#d2e252"]]))]])]
