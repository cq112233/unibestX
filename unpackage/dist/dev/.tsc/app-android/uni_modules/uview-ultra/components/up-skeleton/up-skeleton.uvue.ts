
	import { propsSkeleton } from './props';
	import { mpMixin } from '../../libs/mixin/mpMixin';
	import { mixin } from '../../libs/mixin/mixin';
	import { addUnit, sleep } from '../../libs/function/index';
	
	/**
	 * Skeleton 骨架屏
	 * @description 骨架屏一般用于页面在请求远程数据尚未完成时，页面用灰色块预显示本来的页面结构，给用户更好的体验。
	 * @tutorial https://uview-plus.jiangruyi.com/components/skeleton.html
	 * @property {Boolean}					loading		是否显示骨架占位图，设置为false将会展示子组件内容 (默认 true )
	 * @property {Boolean}					animate		是否开启动画效果 (默认 true )
	 * @property {String | Number}			rows		段落占位图行数 (默认 0 )
	 * @property {String | Number | Array}	rowsWidth	段落占位图的宽度，可以为百分比，数值，带单位字符串等，可通过数组传入指定每个段落行的宽度 (默认 '100%' )
	 * @property {String | Number | Array}	rowsHeight	段落的高度 (默认 18 )
	 * @property {Boolean}					title		是否展示标题占位图 (默认 true )
	 * @property {String | Number}			titleWidth	标题的宽度 (默认 '50%' )
	 * @property {String | Number}			titleHeight	标题的高度 (默认 18 )
	 * @property {Boolean}					avatar		是否展示头像占位图 (默认 false )
	 * @property {String | Number}			avatarSize	头像占位图大小 (默认 32 )
	 * @property {String}					avatarShape	头像占位图的形状，circle-圆形，square-方形 (默认 'circle' )
	 * @example <up-search placeholder="日照香炉生紫烟" v-model="keyword"></up-search>
	 */
	const __sfc__ = defineComponent({
		name: 'up-skeleton',
		mixins: [mpMixin, mixin, propsSkeleton],
		data() {
			return {
				width: 0
			}
		},
		watch: {
			loading: {
				handler: function() {
					this.getComponentWidth()
				}
			}
		},
		computed: {
			rowsArray(): Array<UTSJSONObject> {
				const rows: Array<UTSJSONObject> = []
				// @ts-ignore
				for (let i = 0; i < parseInt(this.rows.toString()); i++) {
					let item: UTSJSONObject = {__$originalPosition: new UTSSourceMapPosition("item", "uni_modules/uview-ultra/components/up-skeleton/up-skeleton.uvue", 94, 10),}
					// 需要预防超出数组边界的情况
					let rowWidth: string | number = ''
					if (this.rowsWidth instanceof Array) {
						// 数组形式
						// @ts-ignore
						if (i === parseInt(this.rows.toString()) - 1) {
							rowWidth = '70%'
						} else {
							rowWidth = this.rowsWidth[i] != null ? this.rowsWidth[i]??'0px'
								// @ts-ignore
								:  (i === this.rowsWidth.length ? '70%' : '100%')
						}
					} else {
						// 非数组形式
						// @ts-ignore
						if (i === parseInt(this.rows.toString()) - 1) {
							rowWidth = '70%'
						} else {
							// @ts-ignore
							rowWidth = this.rowsWidth.toString()
						}
					}
					
					let rowHeight: string | number = ''
					if (this.rowsHeight instanceof Array) {
						// @ts-ignore
						rowHeight = this.rowsHeight[i] != null ? this.rowsHeight[i]??'0px' : '18px'
					} else {
						// @ts-ignore
						rowHeight = this.rowsHeight.toString()
					}
					
					// 如果有title占位图，第一个段落占位图的外边距需要大一些，如果没有title占位图，第一个段落占位图则无需外边距
					// 之所以需要这么做，是因为weex的无能，以提升性能为借口不支持css的一些伪类
					if (!this.title && i == 0) {
						item['marginTop'] = '0px'
					} else if (this.title && i == 0) {
						item['marginTop'] = '20px'
					} else {
						item['marginTop'] = '12px'
					}

					item['width'] = addUnit(rowWidth)
					item['height'] = addUnit(rowHeight)
					rows.push(item)
				}
				return rows
			},
			uTitleWidth(): string {
				let tWidth = '0px'
				tWidth = addUnit(this.titleWidth)
				return addUnit(tWidth)
			}
		},
		mounted() {
			this.init()
		},
		methods: {
			addUnit(e: any): string {
				return addUnit(e)
			},
			init() {
				this.getComponentWidth()
			},
			// 获取组件的宽度
			async getComponentWidth() {
				// 延时一定时间，以获取dom尺寸
				await sleep(20)
				// 这里需要模拟 $uGetRect 方法
			}
		}
	})

export default __sfc__
function GenUniModulesUviewUltraComponentsUpSkeletonUpSkeletonRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
  return _cE("view", _uM({ class: "up-skeleton" }), [
    isTrue(_ctx.loading)
      ? _cE("view", _uM({
          key: 0,
          class: "up-skeleton__wrapper",
          ref: "up-skeleton__wrapper",
          style: _nS(_uM({"display":"flex","flex-direction":"row"}))
        }), [
          isTrue(_ctx.avatar)
            ? _cE("view", _uM({
                key: 0,
                class: _nC(["up-skeleton__wrapper__avatar", [`up-skeleton__wrapper__avatar--${_ctx.avatarShape}`, _ctx.animate ? 'animate' : '']]),
                style: _nS(_uM({
						height: _ctx.addUnit(_ctx.avatarSize),
						width: _ctx.addUnit(_ctx.avatarSize)
					}))
              }), null, 6 /* CLASS, STYLE */)
            : _cC("v-if", true),
          _cE("view", _uM({
            class: "up-skeleton__wrapper__content",
            ref: "up-skeleton__wrapper__content",
            style: _nS(_uM({"flex":"1"}))
          }), [
            isTrue(_ctx.title)
              ? _cE("view", _uM({
                  key: 0,
                  class: _nC(["up-skeleton__wrapper__content__title", [_ctx.animate ? 'animate' : '']]),
                  style: _nS(_uM({
							width: _ctx.uTitleWidth,
							height: _ctx.addUnit(_ctx.titleHeight),
						}))
                }), null, 6 /* CLASS, STYLE */)
              : _cC("v-if", true),
            _cE(Fragment, null, RenderHelpers.renderList(_ctx.rowsArray, (item, index, __index, _cached): any => {
              return _cE("view", _uM({
                class: _nC(["up-skeleton__wrapper__content__rows", [_ctx.animate ? 'animate' : '']]),
                key: index,
                style: _nS(_uM({
							 width: item['width'],
							 height: item['height'],
							 marginTop: item['marginTop']
						}))
              }), null, 6 /* CLASS, STYLE */)
            }), 128 /* KEYED_FRAGMENT */)
          ], 4 /* STYLE */)
        ], 4 /* STYLE */)
      : renderSlot(_ctx.$slots, "default", _uM({ key: 1 }))
  ])
}
export type UpSkeletonComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpSkeletonUpSkeletonStyles = [_uM([["up-skeleton", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["up-skeleton__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "row"]]))], ["up-skeleton__wrapper__avatar", _pS(_uM([["backgroundColor", "#F1F2F4"], ["marginRight", 15]]))], ["up-skeleton__wrapper__avatar--circle", _pS(_uM([["borderTopLeftRadius", 100], ["borderTopRightRadius", 100], ["borderBottomRightRadius", 100], ["borderBottomLeftRadius", 100]]))], ["up-skeleton__wrapper__avatar--square", _pS(_uM([["borderTopLeftRadius", 4], ["borderTopRightRadius", 4], ["borderBottomRightRadius", 4], ["borderBottomLeftRadius", 4]]))], ["up-skeleton__wrapper__content", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["up-skeleton__wrapper__content__rows", _pS(_uM([["backgroundColor", "#F1F2F4"], ["borderTopLeftRadius", 3], ["borderTopRightRadius", 3], ["borderBottomRightRadius", 3], ["borderBottomLeftRadius", 3]]))], ["up-skeleton__wrapper__content__title", _pS(_uM([["backgroundColor", "#F1F2F4"], ["borderTopLeftRadius", 3], ["borderTopRightRadius", 3], ["borderBottomRightRadius", 3], ["borderBottomLeftRadius", 3]]))]])]
