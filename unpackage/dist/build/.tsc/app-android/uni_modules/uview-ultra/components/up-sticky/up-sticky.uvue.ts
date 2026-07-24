
	import { propsSticky } from './props.uts';
	import { mpMixin } from '../../libs/mixin/mpMixin.uts';
	import { mixin } from '../../libs/mixin/mixin.uts';
	import { addStyle, deepMerge, getPx, guid } from '../../libs/function/index.uts';
	import zIndexConfig from '../../libs/config/zIndex.uts';

	/**
	 * sticky 吸顶
	 * @description 该组件在 App 端（Android/iOS/鸿蒙）使用 JS 计算 scrollTop + position: fixed 方案，在微信小程序/H5 端使用 CSS sticky 属性。
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

				elId: 'up-sticky-' + guid(),
				isFixed: false,
				initialTop: 0 as number,
				height: 0 as number,
				left: 0 as number,
				width: 0 as number,
				isInit: false

			}
		},
		computed: {
			paddingArray(): Array<number> {
				const top = parseFloat(getPx(this.offsetTop)) + parseFloat(getPx(this.customNavHeight))
				return [top, 0, 0, 0] as Array<number>
			},
			webMpStyle(): any {
				const style = {} as UTSJSONObject
				if (!this.disabled) {
					style['position'] = 'sti' + 'cky'
					// 在 H5 与小程序端，CSS position: sticky 是相对于其所在滚动容器 (如 scroll-view) 顶部的
					// 故 top 仅需要使用 offsetTop，无需叠加外部滚动容器已经偏移的 customNavHeight
					const top = parseFloat(getPx(this.offsetTop))
					style['top'] = top + 'px'
					style['zIndex'] = this.uZindex
				} else {
					style['position'] = 'relative'
				}
				if (this.bgColor != '') {
					style['backgroundColor'] = this.bgColor
				}
				return deepMerge(addStyle(this.customStyle), style)
			},
			uZindex(): number {
				const zVal = this.$props['zIndex']
				if (zVal != null && zVal.toString() != '') {
					const parsed = parseInt(zVal.toString())
					if (!isNaN(parsed)) {
						return parsed
					}
				}
				return (zIndexConfig['sticky'] as number ?? 999)
			},

			stickyTop(): number {
				return parseFloat(getPx(this.offsetTop)) + parseFloat(getPx(this.customNavHeight))
			},
			wrapperStyle(): any {
				const style = {} as UTSJSONObject
				if (this.isFixed && this.height > 0) {
					style['height'] = this.height + 'px'
				}
				return style
			},
			contentStyle(): any {
				const style = {} as UTSJSONObject
				if (!this.disabled && this.isFixed) {
					style['position'] = 'fixed'
					style['top'] = this.stickyTop + 'px'
					style['left'] = this.left + 'px'
					if (this.width > 0) {
						style['width'] = this.width + 'px'
					}
					style['zIndex'] = this.uZindex
				} else {
					style['position'] = 'relative'
				}
				if (this.bgColor != '') {
					style['backgroundColor'] = this.bgColor
				}
				return deepMerge(addStyle(this.customStyle), style)
			}

		},

		watch: {
			scrollTop(val: any) {
				if (this.disabled) return
				const st = parseFloat(val.toString())
				this.checkFixed(st)
			}
		},
		mounted() {
			this.init()
		},
		methods: {
			init() {
				this.upGetRect('#' + this.elId, false).then((res: NodeInfo) => {
					if (res.height != null && res.height! > 0) {
						this.height = res.height!
					}
					if (res.left != null) {
						this.left = res.left!
					}
					if (res.width != null && res.width! > 0) {
						this.width = res.width!
					}
					const currentTop = res.top ?? 0
					const st = parseFloat(this.scrollTop.toString())
					this.initialTop = currentTop + st
					this.isInit = true
					this.checkFixed(st)
				})
			},
			checkFixed(st: number) {
				if (!this.isInit) {
					this.init()
					return
				}
				const currentY = this.initialTop - st
				if (currentY <= this.stickyTop && this.initialTop > 0) {
					if (!this.isFixed) {
						this.upGetRect('#' + this.elId, false).then((res: NodeInfo) => {
							if (res.width != null && res.width! > 0) {
								this.width = res.width!
							}
							if (res.left != null) {
								this.left = res.left!
							}
							if (res.height != null && res.height! > 0) {
								this.height = res.height!
							}
						})
					}
					this.isFixed = true
				} else {
					this.isFixed = false
				}
			}
		}

	})

export default __sfc__
function GenUniModulesUviewUltraComponentsUpStickyUpStickyRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
  return _cE("view", _uM({
    class: "up-sticky",
    id: _ctx.elId,
    style: _nS(_ctx.wrapperStyle)
  }), [
    _cE("view", _uM({
      class: "up-sticky__content",
      style: _nS(_ctx.contentStyle)
    }), [
      renderSlot(_ctx.$slots, "default")
    ], 4 /* STYLE */)
  ], 12 /* STYLE, PROPS */, ["id"])
}
export type UpStickyComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpStickyUpStickyStyles = [_uM([["up-sticky", _pS(_uM([["width", "100%"], ["boxSizing", "border-box"]]))], ["up-sticky__content", _pS(_uM([["boxSizing", "border-box"]]))]])]
