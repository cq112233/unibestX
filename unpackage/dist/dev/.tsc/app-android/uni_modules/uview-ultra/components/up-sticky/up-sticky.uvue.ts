
	import { propsSticky } from './props.uts';
	import { mpMixin } from '../../libs/mixin/mpMixin.uts';
	import { mixin } from '../../libs/mixin/mixin.uts';
	import { addStyle, deepMerge, getPx, guid } from '../../libs/function/index.uts';
	import zIndex from '../../libs/config/zIndex.uts';

	/**
	 * sticky 吸顶
	 * @description 该组件与 CSS 中 position: sticky 属性效果一致，当页面滚动到指定距离时固定在视口顶部。
	 */
	const __sfc__ = defineComponent({
		name: 'up-sticky',
		mixins: [mpMixin, mixin, propsSticky],
		props: {
			scrollTop: {
				type: [String, Number],
				default: 0
			}
		},
		data() {
			return {
				stickyTop: 0,
				elId: guid(),
				initialTop: 0,
				left: 0,
				width: 'auto',
				height: 'auto',
				fixed: false
			}
		},
		computed: {
			style(): any {
				const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-sticky/up-sticky.uvue", 49, 11), } as UTSJSONObject
				if (!this.disabled) {
					style['height'] = this.fixed ? (this.height == 'auto' ? 'auto' : this.height + 'px') : 'auto'
				} else {
					style['position'] = 'relative'
				}
				style['backgroundColor'] = this.bgColor
				return deepMerge(addStyle(this.customStyle), style)
			},
			stickyContent(): any {
				const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-sticky/up-sticky.uvue", 59, 11), } as UTSJSONObject
				style['position'] = this.fixed ? 'fixed' : 'static'
				if (this.fixed) {
					style['top'] = this.stickyTop + 'px'
					style['left'] = this.left + 'px'
					if (this.width != 'auto') {
						style['width'] = this.width + 'px'
					}
					style['zIndex'] = this.uZindex
				}
				return style
			},
			uZindex(): number {
				return this.$props['zIndex'].toString() != '' ? parseInt(this.zIndex.toString()) : (zIndex['sticky'] as number)
			}
		},
		mounted() {
			this.init()
		},
		watch: {
			scrollTop: {
				handler(nval: string | number) {
					this.checkSticky(parseFloat(getPx(nval)))
				},
				immediate: true
			},
			offsetTop() {
				this.getStickyTop()
			}
		},
		methods: {
			init() {
				this.getStickyTop()
				this.initObserveContent()
			},
			initObserveContent() {
				setTimeout(() => {
					// @ts-ignore
					this.upGetRect('#' + this.elId).then((res: NodeInfo) => {
						if (res.height != null && res.height! > 0) {
							this.height = res.height!.toString()
						}
						if (res.left != null) {
							this.left = res.left!
						}
						if (res.width != null && res.width! > 0) {
							this.width = res.width!.toString()
						}
						if (res.top != null && res.top! > 0) {
							this.initialTop = res.top!
						}
					})
				}, 150)
			},
			checkSticky(scrollTop: number) {
				if (this.disabled) {
					if (this.fixed) this.fixed = false
					return
				}
				if (this.initialTop <= 0) {
					// @ts-ignore
					this.upGetRect('#' + this.elId).then((res: NodeInfo) => {
						if (res.top != null && res.top! > 0) {
							this.initialTop = res.top! + scrollTop
						}
					})
					return
				}
				const threshold = this.initialTop - this.stickyTop
				const shouldFixed = scrollTop >= threshold
				if (shouldFixed != this.fixed) {
					this.fixed = shouldFixed
					if (shouldFixed) {
						this.$emit('fixed', this.index)
					} else {
						this.$emit('unfixed', this.index)
					}
				}
			},
			getStickyTop() {
				this.stickyTop = (parseFloat(getPx(this.offsetTop)) + parseFloat(getPx(this.customNavHeight)))
			}
		}
	})

export default __sfc__
function GenUniModulesUviewUltraComponentsUpStickyUpStickyRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
  return _cE("view", _uM({
    class: "up-sticky",
    style: _nS(_ctx.style)
  }), [
    _cE("view", _uM({
      id: _ctx.elId,
      style: _nS(_ctx.stickyContent),
      class: "up-sticky__content"
    }), [
      renderSlot(_ctx.$slots, "default")
    ], 12 /* STYLE, PROPS */, ["id"])
  ], 4 /* STYLE */)
}
export type UpStickyComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpStickyUpStickyStyles = []
