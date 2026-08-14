
	import defProps from './backtop.uts';
	import { addStyle, deepMerge } from '../../libs/function/index';
	import { mpMixin } from '../../libs/mixin/mpMixin.uts';
	import { mixin } from '../../libs/mixin/mixin.uts';

	const __sfc__ = defineComponent({
		name: 'up-back-top',
		mixins: [mpMixin, mixin],
		props: {
			mode: {
				type: String,
				default: 'circle'
			},
			icon: {
				type: String,
				default: 'arrow-upward'
			},
			text: {
				type: String,
				default: ''
			},
			duration: {
				type: [String, Number],
				default: 100
			},
			scrollTop: {
				type: [String, Number],
				default: 0
			},
			top: {
				type: [String, Number],
				default: 100
			},
			bottom: {
				type: [String, Number],
				default: 80
			},
			right: {
				type: [String, Number],
				default: 20
			},
			zIndex: {
				type: [String, Number],
				default: 999
			},
			iconStyle: {
				type: Object,
				default: (): UTSJSONObject => ({})
			},
			customStyle: {
				type: Object,
				default: (): UTSJSONObject => ({})
			}
		},
		emits: ['click'],
		computed: {
			show(): boolean {
				const sVal = (this.scrollTop ?? 0).toString()
				const tVal = (this.top ?? 100).toString()
				const sTop = parseFloat(sVal)
				const targetTop = parseFloat(tVal)
				if (isNaN(sTop)) return false
				const threshold = isNaN(targetTop) ? 100 : targetTop
				return sTop >= threshold
			},
			finalStyle(): any {
				const bStr = (this.bottom ?? 80).toString()
				const rStr = (this.right ?? 20).toString()
				const bVal = bStr.includes('px') ? bStr : (bStr + 'px')
				const rVal = rStr.includes('px') ? rStr : (rStr + 'px')
				const zVal = parseInt((this.zIndex ?? 999).toString())

				const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-back-top/up-back-top.uvue", 95, 11), 
					position: 'fixed',
					bottom: bVal,
					right: rVal,
					width: '44px',
					height: '44px',
					zIndex: isNaN(zVal) ? 999 : zVal,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: '#ffffff',
					borderRadius: this.mode === 'circle' ? '100px' : '8px',
					boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
					borderWidth: '1px',
					borderStyle: 'solid',
					borderColor: '#e2e8f0'
				} as UTSJSONObject

				return deepMerge(style, addStyle(this.customStyle as UTSJSONObject))
			}
		},
		methods: {
			backToTop(e: any) {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: parseInt(this.duration.toString()),
					fail: (_: any) => {}
				});
				this.$emit('click', e)
			}
		}
	})

export default __sfc__
function GenUniModulesUviewUltraComponentsUpBackTopUpBackTopRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)

  return isTrue(_ctx.show)
    ? _cE("view", _uM({
        key: 0,
        style: _nS(_ctx.finalStyle),
        class: "up-back-top",
        onClick: _ctx.backToTop
      }), [
        renderSlot(_ctx.$slots, "default", {}, (): any[] => [
          _cV(_component_up_icon, _uM({
            name: _ctx.icon,
            size: "22",
            color: "#2563eb"
          }), null, 8 /* PROPS */, ["name"]),
          _ctx.text != ''
            ? _cE("text", _uM({
                key: 0,
                class: "up-back-top__text"
              }), _tD(_ctx.text), 1 /* TEXT */)
            : _cC("v-if", true)
        ])
      ], 12 /* STYLE, PROPS */, ["onClick"])
    : _cC("v-if", true)
}
export type UpBackTopComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpBackTopUpBackTopStyles = [_uM([["up-back-top__text", _pS(_uM([["fontSize", 10], ["color", "#2563eb"], ["marginTop", 2]]))]])]

import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
