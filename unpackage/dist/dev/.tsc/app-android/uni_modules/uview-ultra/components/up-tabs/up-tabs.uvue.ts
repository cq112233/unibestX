
	import { propsTabs } from './props';
	import { mpMixin } from '../../libs/mixin/mpMixin';
	import { mixin } from '../../libs/mixin/mixin';
	import badgeProps from '../../components/up-badge/badge'
	import { addUnit, addStyle, deepMerge, getPx, sleep, getWindowInfo } from '../../libs/function/index';
	/**
	 * Tabs 标签
	 * @description tabs标签组件，在标签多的时候，可以配置为左右滑动，标签少的时候，可以禁止滑动。 该组件的一个特点是配置为滚动模式时，激活的tab会自动移动到组件的中间位置。
	 * @tutorial https://uview-plus.jiangruyi.com/components/tabs.html
	 * @property {String | Number}	duration			滑块移动一次所需的时间，单位秒（默认 200 ）
	 * @property {String | Number}	swierWidth			swiper的宽度（默认 '750rpx' ）
	 * @property {String}	keyName	 从`list`元素对象中读取的键名（默认 'name' ）
	 * @event {Function(index)} change 标签改变时触发 index: 点击了第几个tab，索引从0开始
	 * @event {Function(index)} click 点击标签时触发 index: 点击了第几个tab，索引从0开始
	 * @event {Function(index)} longPress 长按标签时触发 index: 点击了第几个tab，索引从0开始
	 * @example <up-tabs :list="list" :is-scroll="false" :current="current" @change="change" @longPress="longPress"></up-tabs>
	 */
	const __sfc__ = defineComponent({
		name: 'up-tabs',
		// slots: Object as SlotsType<{
		//     content: { item: UTSJSONObject, keyName: string, index: number }
		//     default: { item: UTSJSONObject, keyName: string, index: number }
		//     icon: { item: UTSJSONObject, keyName: string, index: number }
		// }>,
		mixins: [mpMixin, mixin, propsTabs],
		data() {
			return {
				firstTime: true,
				scrollLeft: 0,
				scrollViewWidth: 0,
				lineOffsetLeft: 0,
				tabsRect: {
					left: 0,
					right: 0,
					
				} as NodeInfo,
				innerCurrent: 0,
				moving: false,
				retryCount: 0,
				itemRects: [] as Array<NodeInfo>,
			}
		},
		watch: {
			current: {
				immediate: true,
				handler (newValue: string|number) {
					// 内外部值不相等时，才尝试移动滑块
					if (newValue != this.innerCurrent) {
						if (typeof newValue == 'string') {
							this.innerCurrent = parseInt(newValue)
						} else {
							this.innerCurrent = newValue
						}
						this.$nextTick(() => {
							const hasRect = this.itemRects.length > 0 && this.itemRects.length === this.list.length && (this.itemRects[0].width ?? 0) > 0
							if (hasRect) {
								this.setLineLeft()
								this.setScrollLeft()
							} else {
								this.resize()
							}
						})
					}
				}
			},
			// list变化时，重新渲染list各项信息
			list(newValue: Array<UTSJSONObject>, oldValue: Array<UTSJSONObject> | null) {
				if (oldValue != null && this.isListEqual(newValue, oldValue)) {
					return
				}
				this.$nextTick(() => {
					this.resize()
				})
			}
		},
		computed: {
			propsBadge(): UTSJSONObject {
				return badgeProps['badge'] as UTSJSONObject
			},
			lineStyle(): any {
				const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-tabs/up-tabs.uvue", 163, 11), } as UTSJSONObject;
				style['width'] = addUnit(this.lineWidth);
				style['transform'] = 'translateX('+ (this.lineOffsetLeft)+'px)';
				style['transitionDuration'] = `${this.firstTime ? 0 : this.duration}ms`;
				style['height'] = addUnit(this.lineHeight);
				style['backgroundSize'] = this.lineBgSize;
				if (this.lineColor != '#3c9cff') {
					style['backgroundColor'] = this.lineColor;
				}
				return style;
			}
		},
		mounted() {
			this.init()
			// todo2026 wait uni-app-x
            // this.windowResizeCallback = (res) => {
            //     this.init()
            // }
            // uni.onWindowResize(this.windowResizeCallback)
		},
        beforeUnmount() {
			// todo2026 wait uni-app-x
            // uni.offWindowResize(this.windowResizeCallback)
        },
		emits: ['click', 'longPress', 'change', 'update:current'],
		methods: {
			addStyle(val: any): any {
				return addStyle(val)
			},
			addUnit(val: any): string {
				return addUnit(val)
			},
			getShowValue(itemObj: UTSJSONObject) {
				if (itemObj['badge'] != null) {
					let itemObjBadge = itemObj['badge'] as UTSJSONObject
					if (itemObjBadge['show'] != null && itemObjBadge['show'] as boolean
						|| (itemObjBadge['isDot'] != null && itemObjBadge['isDot'] as boolean)
						|| itemObjBadge['value'] != null) {
						return true
					}
				}
				return false
			},
			getBadgePropValue(itemObj: UTSJSONObject, name: string): any|null {
				if (itemObj!= null && itemObj['badge'] != null) {
					let itemObjBadge = itemObj['badge'] as UTSJSONObject
					if (itemObjBadge != null && itemObjBadge[name] != null) {
						return itemObjBadge[name] != null ? itemObjBadge[name] : ''
					} else {
						return (this.propsBadge != null && this.propsBadge[name] != null) ? this.propsBadge[name] : ''
					}
				}
				return ''
			},
			textStyle(index: number) {
				const style = {__$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-tabs/up-tabs.uvue", 218, 11),}
				// 取当期是否激活的样式
				const customeStyle = (index == this.innerCurrent)
					? addStyle(this.activeStyle)
					: addStyle(this.inactiveStyle)
				// 如果当前菜单被禁用，则加上对应颜色，需要在此做处理，是因为nvue下，无法在style样式中通过!import覆盖标签的内联样式
				if (this.list[index]['disabled'] != null && this.list[index]['disabled'] as boolean) {
					style['color'] = '#c8c9cc'
				}
				return deepMerge(customeStyle, style)
			},
			isListEqual(list1: Array<UTSJSONObject>, list2: Array<UTSJSONObject>): boolean {
				if (list1.length != list2.length) {
					return false
				}
				for (let i = 0; i < list1.length; i++) {
					const item1 = list1[i]
					const item2 = list2[i]
					if (item1[this.keyName] != item2[this.keyName]) {
						return false
					}
				}
				return true
			},
			setLineLeft() {
				if (this.itemRects.length <= this.innerCurrent) {
					return;
				}
				const tabItem = this.itemRects[this.innerCurrent];
				if (tabItem == null) {
					return;
				}
				// 获取滑块该移动的位置
				let lineOffsetLeft = this.itemRects
					.slice(0, this.innerCurrent)
					.reduce((total: number, curr: NodeInfo) => {
						return total + (curr.width ?? 0)
					}, 0);
                // 获取下划线的数值px表示法
				const lineWidth = parseFloat(getPx(this.lineWidth));
				const tabWidth = tabItem.width ?? 0
				const offset = tabWidth > 0 ? (tabWidth - lineWidth) / 2 : 0
				this.lineOffsetLeft = lineOffsetLeft + offset

				// 如果是第一次执行此方法，让滑块在初始化时，瞬间滑动到第一个tab item的中间
				// 这里需要一个定时器，因为在非nvue下，是直接通过style绑定过渡时间，需要等其过渡完成后，再设置为false(非第一次移动滑块)
				if (this.firstTime) {
					setTimeout(() => {
						this.firstTime = false
					}, 30);
				}
			},
			// 点击某一个标签
			clickHandler(item: any, index: number) {
				// 因为标签可能为disabled状态，所以click是一定会发出的，但是change事件是需要可用的状态才发出
				this.$emit('click', {
					...item as UTSJSONObject,
					index
				}, index)
				// 如果disabled状态，返回
				if (item['disabled'] != null && item['disabled'] as boolean) return
				// 如果点击当前不触发change
				if (this.innerCurrent == index) return
				this.innerCurrent = index
                this.$nextTick(() => {
                    const hasRect = this.itemRects.length > 0 && this.itemRects.length === this.list.length && (this.itemRects[0].width ?? 0) > 0
                    if (hasRect) {
                        this.setLineLeft()
                        this.setScrollLeft()
                    } else {
                        this.resize()
                    }
                })
				this.$emit('update:current', index)
				this.$emit('change', {
					...item,
					index
				}, index)
			},
			// 长按事件
			longPressHandler(item: UTSJSONObject, index: number) {
				this.$emit('longPress', {
					...item,
					index
				})
			},
			init() {
				this.retryCount = 0
				// 延迟 30ms 启动测量，搭配自适应的动态宽度期望值重试机制，确保鸿蒙等端稳定排版后精确对齐且无视觉抖动
				sleep(30).then(() => {
					this.resize()
				})
			},
			setScrollLeft() {
				// 当前活动tab的布局信息，有tab菜单的width和left(为元素左边界到父元素左边界的距离)等信息
				if (this.innerCurrent < 0) {
                    this.innerCurrent = 0;
                }
				if (this.itemRects.length <= this.innerCurrent) {
					return;
				}
				const tabRect = this.itemRects[this.innerCurrent]
				if (tabRect == null) {
					return;
				}
				// 累加得到当前item到左边的距离
				const offsetLeft = this.itemRects
					.slice(0, this.innerCurrent)
					.reduce((total: number, curr: NodeInfo) => {
						return total + (curr.width ?? 0)
					}, 0)
				// 此处为屏幕宽度
				const windowWidth = getWindowInfo().windowWidth
				// 将活动的tabs-item移动到屏幕正中间，实际上是对scroll-view的移动
				let scrollLeft = offsetLeft - ((this.tabsRect?.width ?? 0) - (tabRect.width ?? 0)) / 2 - (windowWidth - (this.tabsRect
					?.right ?? 0)) / 2 + (this.tabsRect?.left ?? 0) / 2
				// 这里做一个限制，限制scrollLeft的最大值为整个scroll-view宽度减去tabs组件的宽度
				scrollLeft = Math.min(scrollLeft, this.scrollViewWidth - (this.tabsRect?.width ?? 0))
				this.scrollLeft = Math.max(0, scrollLeft)
			},
			// 获取所有标签的尺寸
			resize() {
				// 如果不存在list，则不处理
				if((this.$props['list'] as Array<UTSJSONObject>).length == 0) {
					return
				}
				Promise.all([this.getTabsRect(), this.getAllItemRect()]).then((res: Array<Array<NodeInfo>>) => {
					// [tabsRect, itemRect = []]
					let tabsRect = (res[0] as Array<NodeInfo>)[0]
					let itemRect = res[1] as Array<NodeInfo>
					
					// 兼容部分原生平台（如鸿蒙/ArkUI）冷启动渲染排版较慢，导致首次测量为 0 或宽度不准确（未撑开）的情况，进行高精度自适应延迟重试测量
					const firstWidth = (itemRect.length > 0 && itemRect[0] != null) ? (itemRect[0].width ?? 0) : 0
					let minWidthExpected = 30
					if (this.list.length > 0) {
						const firstItemName = this.list[0][this.keyName]
						if (firstItemName != null) {
							const nameStr = firstItemName.toString()
							minWidthExpected = nameStr.length * 12 + 20
						}
					}
					if ((firstWidth < minWidthExpected) && this.retryCount < 5) {
						this.retryCount++
						setTimeout(() => {
							this.resize()
						}, 50)
						return
					}
					// console.log('******itemRect******', itemRect)
					// 兼容在swiper组件中使用
					if ((tabsRect.left ?? 0) > (tabsRect.width ?? 0)) {
						tabsRect.right = (tabsRect.right ?? 0) - Math.floor((tabsRect?.left ?? 0) / (tabsRect?.width ?? 0)) * (tabsRect?.width ?? 0)
						tabsRect.left = (tabsRect.left ?? 0) % (tabsRect.width ?? 1)
					}
					// console.log(tabsRect)
					this.tabsRect = tabsRect
					this.itemRects = itemRect
					this.scrollViewWidth = 0
					itemRect.map((item: NodeInfo, index: number) => {
						// 计算scroll-view of the width，这里
						if (item != null) {
							this.scrollViewWidth = this.scrollViewWidth + (item.width??0)
							// 另外计算每一个item的中心点X轴坐标
							// @ts-ignore
							this.list[index]['rect'] = item
						}
					})
					// console.log('******tabsRect******', this.tabsRect, this.scrollViewWidth)
					// 获取了tabs的尺寸之后，设置滑块的位置
					this.setLineLeft()
					this.setScrollLeft()
				})
			},
			// 获取导航菜单的尺寸
			getTabsRect(): Promise<Array<NodeInfo>> {
				return new Promise(resolve => {
					this.queryRect('up-tabs__wrapper__scroll-view').then((size: NodeInfo) => {
						resolve([size])
					})
				})
			},
			// 获取所有标签的尺寸
			getAllItemRect(): Promise<Array<NodeInfo>>  {
				return new Promise(resolve => {
					const promiseAllArr = (this.$props['list'] as Array<UTSJSONObject>).map((item: UTSJSONObject, index: number) => {
						return this.queryRect(`up-tabs__wrapper__nav__item-${index}`)
					})
					Promise.all(promiseAllArr).then((sizes: NodeInfo[]) => resolve(sizes))
				})
			},
			// 获取各个标签的尺寸
			queryRect(el: string): Promise<NodeInfo> {
				// upGetRect为uview-plus自带的节点查询简化方法，详见文档介绍：https://uview-plus.jiangruyi.com/js/getRect.html
				// 组件内部一般用this.$uGetRect，对外的为uni.$u.getRect，二者功能一致，名称不同
				return new Promise(resolve => {
					// @ts-ignore
					this.upGetRect(`.${el}`).then((size: NodeInfo) => {
						resolve(size)
					})
				})
			},
		},
	})

export default __sfc__
function GenUniModulesUviewUltraComponentsUpTabsUpTabsRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)
const _component_up_badge = resolveEasyComponent("up-badge",_easycom_up_badge)

  return _cE("view", _uM({
    class: _nC(["up-tabs", [_ctx.customClass]])
  }), [
    _cE("view", _uM({
      class: "up-tabs__wrapper",
      style: _nS(_uM({ height: _ctx.addUnit(_ctx.height) }))
    }), [
      renderSlot(_ctx.$slots, "left"),
      _cE("view", _uM({ class: "up-tabs__wrapper__scroll-view-wrapper" }), [
        _cE("scroll-view", _uM({
          direction: "horizontal",
          "scroll-x": _ctx.scrollable,
          "enable-flex": true,
          "scroll-left": _ctx.scrollLeft,
          "scroll-with-animation": "",
          class: "up-tabs__wrapper__scroll-view",
          "show-scrollbar": false,
          ref: "up-tabs__wrapper__scroll-view",
          style: _nS(_uM({ height: _ctx.addUnit(_ctx.height) }))
        }), [
          _cE("view", _uM({
            class: "up-tabs__wrapper__nav",
            ref: "up-tabs__wrapper__nav",
            style: _nS(_uM({ height: _ctx.addUnit(_ctx.height) }))
          }), [
            _cE(Fragment, null, RenderHelpers.renderList(_ctx.list, (item, index, __index, _cached): any => {
              return _cE("view", _uM({
                class: _nC(["up-tabs__wrapper__nav__item", [`up-tabs__wrapper__nav__item-${index}`,
								(item['disabled'] != null && (item['disabled'] as boolean)) ? 'up-tabs__wrapper__nav__item--disabled' : '',
								_ctx.innerCurrent == index ? 'up-tabs__wrapper__nav__item-active' : '']]),
                key: index,
                onClick: () => {_ctx.clickHandler(item, index)},
                onLongpress: () => {_ctx.longPressHandler(item,index)},
                ref_for: true,
                ref: `up-tabs__wrapper__nav__item-${index}`,
                style: _nS([_ctx.addStyle(_ctx.itemStyle), _uM({flex: _ctx.scrollable ? 'none' : '1'})])
              }), [
                isTrue(_ctx.$slots['icon'])
                  ? renderSlot(_ctx.$slots, "icon", _uM({
                      key: 0,
                      item: item,
                      keyName: _ctx.keyName,
                      index: index
                    }))
                  : _cE(Fragment, _uM({ key: 1 }), [
                      isTrue(item.icon)
                        ? _cE("view", _uM({
                            key: 0,
                            class: "up-tabs__wrapper__nav__item__prefix-icon"
                          }), [
                            _cV(_component_up_icon, _uM({
                              name: item['icon'],
                              customStyle: _ctx.addStyle(_ctx.iconStyle)
                            }), null, 8 /* PROPS */, ["name", "customStyle"])
                          ])
                        : _cC("v-if", true)
                    ], 64 /* STABLE_FRAGMENT */),
                _ctx.$slots['content'] != null
                  ? renderSlot(_ctx.$slots, "content", _uM({
                      key: 2,
                      item: item,
                      keyName: _ctx.keyName,
                      index: index
                    }))
                  : isTrue(_ctx.$slots['content'] == null && (_ctx.$slots['default'] != null || _ctx.$slots['$default'] != null))
                    ? renderSlot(_ctx.$slots, "default", _uM({
                        key: 3,
                        item: item,
                        keyName: _ctx.keyName,
                        index: index
                      }))
                    : _cE("text", _uM({
                        key: 4,
                        class: _nC([[(item['disabled'] != null && (item['disabled'] as boolean)) ?'up-tabs__wrapper__nav__item__text--disabled' : ''], "up-tabs__wrapper__nav__item__text"]),
                        style: _nS([_ctx.textStyle(index)])
                      }), _tD(item[_ctx.keyName]), 7 /* TEXT, CLASS, STYLE */),
                _cV(_component_up_badge, _uM({
                  show: _ctx.getShowValue(item),
                  isDot: _ctx.getBadgePropValue(item, 'isDot'),
                  value: _ctx.getBadgePropValue(item, 'value'),
                  max: _ctx.getBadgePropValue(item, 'max'),
                  type: _ctx.getBadgePropValue(item, 'type'),
                  showZero: _ctx.getBadgePropValue(item, 'showZero'),
                  bgColor: _ctx.getBadgePropValue(item, 'bgColor'),
                  color: _ctx.getBadgePropValue(item, 'color'),
                  shape: _ctx.getBadgePropValue(item, 'shape'),
                  numberType: _ctx.getBadgePropValue(item, 'numberType'),
                  inverted: _ctx.getBadgePropValue(item, 'inverted'),
                  customStyle: "margin-left: 4px;"
                }), null, 8 /* PROPS */, ["show", "isDot", "value", "max", "type", "showZero", "bgColor", "color", "shape", "numberType", "inverted"])
              ], 46 /* CLASS, STYLE, PROPS, NEED_HYDRATION */, ["onClick", "onLongpress"])
            }), 128 /* KEYED_FRAGMENT */),
            _cE("view", _uM({
              class: "up-tabs__wrapper__nav__line",
              ref: "up-tabs__wrapper__nav__line",
              style: _nS(_ctx.lineStyle)
            }), null, 4 /* STYLE */)
          ], 4 /* STYLE */)
        ], 12 /* STYLE, PROPS */, ["scroll-x", "scroll-left"])
      ]),
      renderSlot(_ctx.$slots, "right")
    ], 4 /* STYLE */)
  ], 2 /* CLASS */)
}
export type UpTabsComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpTabsUpTabsStyles = [_uM([["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["width", "100%"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["position", "relative"], ["height", "100%"]]))], ["up-tabs__wrapper__nav__item", _pS(_uM([["paddingTop", 0], ["paddingRight", 11], ["paddingBottom", 0], ["paddingLeft", 11], ["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["justifyContent", "center"], ["flexShrink", 0], ["height", "100%"]]))], ["up-tabs__wrapper__nav__item__text", _pS(_uM([["fontSize", 15], ["color", "#606266"], ["!whiteSpace", "nowrap"]]))], ["up-tabs__wrapper__nav__item__text--disabled", _pS(_uM([["!color", "#c8c9cc"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["height", 3], ["backgroundColor", "var(--theme-color, #0957de)"], ["width", 30], ["position", "absolute"], ["bottom", 2], ["borderTopLeftRadius", 100], ["borderTopRightRadius", 100], ["borderBottomRightRadius", 100], ["borderBottomLeftRadius", 100], ["transitionProperty", "transform"], ["transitionDuration", "300ms"]]))], ["@TRANSITION", _uM([["up-tabs__wrapper__nav__line", _uM([["property", "transform"], ["duration", "300ms"]])]])]])]

import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import _easycom_up_badge from '@/uni_modules/uview-ultra/components/up-badge/up-badge.uvue'
