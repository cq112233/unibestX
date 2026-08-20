
const __sfc__ = defineComponent({
  __name: 'BindClass',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const condition = ref(true);
const extra = ref('wtu-1026j5x-g wtu-1cznegj-h');
const flag = ref(true);
const toggled = ref(true);

return (): any | null => {

  return _cE("view", _uM({ class: "wtu-1m49j0s-0 wtu-n3ob0u-1 wtu-1vc4oyx-2 wtu-or3vkz-3" }), [
    _cE("view", _uM({ class: "issue-822-component-child wtu-12ysphb-4 wtu-rj66cr-5 wtu-79qmlq-6" }), [
      _cE("text", _uM({ class: "wtu-1qewyjj-7" }), "issue 822 component child")
    ]),
    _cE("view", _uM({ class: "wtu-hahnwa-8 wtu-79qmlq-6 wtu-1g1ucfi-9 wtu-n3ob0u-1" }), [
      _cE("text", _uM({
        class: _nC(unref(flag) ? 'wtu-uj646o-a wtu-v1dixk-b' : 'wtu-s9xl9u-c')
      }), " simple ", 2 /* CLASS */),
      _cE("text", _uM({
        class: _nC([
          unref(extra),
          _uM({ 'wtu-1l82hkd-d': unref(toggled) })
        ])
      }), " complex ", 2 /* CLASS */),
      _cE("text", _uM({
        class: _nC(unref(condition) ? 'wtu-1hf1vho-e wtu-6xzka-f' : '')
      }), " fallback ", 2 /* CLASS */)
    ])
  ])
}
}

})
export default __sfc__
const GenSrcSubTailwindcssComponentsBindClassStyles = [_uM([["issue-822-component-child", _pS(_uM([["borderTopWidth", 2], ["borderRightWidth", 2], ["borderBottomWidth", 2], ["borderLeftWidth", 2], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"], ["borderTopColor", "#7c3aed"], ["borderRightColor", "#7c3aed"], ["borderBottomColor", "#7c3aed"], ["borderLeftColor", "#7c3aed"]]))], ["wtu-1m49j0s-0", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "var(--tw-border-style)"], ["borderRightStyle", "var(--tw-border-style)"], ["borderBottomStyle", "var(--tw-border-style)"], ["borderLeftStyle", "var(--tw-border-style)"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["wtu-n3ob0u-1", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["wtu-1vc4oyx-2", _pS(_uM([["borderTopColor", "#999999"], ["borderRightColor", "#999999"], ["borderBottomColor", "#999999"], ["borderLeftColor", "#999999"]]))], ["wtu-or3vkz-3", _pS(_uM([["paddingTop", "32rpx"], ["paddingRight", "32rpx"], ["paddingBottom", "32rpx"], ["paddingLeft", "32rpx"]]))], ["wtu-12ysphb-4", _pS(_uM([["height", 200]]))], ["wtu-rj66cr-5", _pS(_uM([["width", "100%"]]))], ["wtu-79qmlq-6", _pS(_uM([["backgroundColor", "#87add3"]]))], ["wtu-1qewyjj-7", _pS(_uM([["color", "#111111"]]))], ["wtu-hahnwa-8", _pS(_uM([["paddingTop", 20.32], ["paddingRight", 20.32], ["paddingBottom", 20.32], ["paddingLeft", 20.32]]))], ["wtu-1g1ucfi-9", _pS(_uM([["borderTopColor", "#111111"], ["borderRightColor", "#111111"], ["borderBottomColor", "#111111"], ["borderLeftColor", "#111111"]]))], ["wtu-uj646o-a", _pS(_uM([["backgroundColor", "#123456"]]))], ["wtu-v1dixk-b", _pS(_uM([["marginBottom", 12.32]]))], ["wtu-s9xl9u-c", _pS(_uM([["backgroundColor", "#d7700a"]]))], ["wtu-1l82hkd-d", _pS(_uM([["color", "#ff0000"]]))], ["wtu-1hf1vho-e", _pS(_uM([["backgroundColor", "#f205f6"]]))], ["wtu-6xzka-f", _pS(_uM([["color", "#70ed0a"]]))], ["wtu-1026j5x-g", _pS(_uM([["fontSize", "93.54rpx"]]))], ["wtu-1cznegj-h", _pS(_uM([["backgroundColor", "#d2e252"]]))]])]
