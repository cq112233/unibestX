import { propsTr } from './props'
	import { mpMixin } from '../../libs/mixin/mpMixin'
	import { mixin } from '../../libs/mixin/mixin'

	// options
	
const __sfc__ = defineComponent({
  __name: 'up-tr',
name: 'up-tr',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

	

return (): any | null => {

  return _cE("view", _uM({ class: "weapp-tw-border up-tr" }), [
    renderSlot(_ctx.$slots, "default")
  ])
}
}

})
export default __sfc__
export type UpTrComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpTrUpTrStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["up-tr", _pS(_uM([["display", "flex"], ["flexDirection", "row"]]))]])]
