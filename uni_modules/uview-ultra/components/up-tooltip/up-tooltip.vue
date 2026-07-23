<template>
	<view
		class="up-tooltip"
		:style="[rootStyle]"
	>
		<up-overlay
			:show="overlayShow"
			:opacity="0"
			@click="overlayClickHandler"
		></up-overlay>
		<view class="up-tooltip__wrapper">
			<text
				v-if="hasText"
				class="up-tooltip__wrapper__text"
				:id="textId"
				:ref="textId"
				:userSelect="false"
				:selectable="false"
				@longpress.stop="longpressHandler"
				@tap.stop="clickHandler"
				@click.stop="clickHandler"
				:style="[textStyle]"
			>{{ displayText }}</text>
			<view
				v-else
				class="up-tooltip__wrapper__trigger"
				:id="textId"
				:ref="textId"
				@longpress.stop="longpressHandler"
				@tap.stop="clickHandler"
				@click.stop="clickHandler"
			>
				<slot name="trigger">
					<slot></slot>
				</slot>
			</view>
			<up-transition
				mode="fade"
				:show="displayShow"
				duration="300"
				:customStyle="transitionStyle"
			>
				<view
					class="up-tooltip__wrapper__popup"
					:id="tooltipId"
					:ref="tooltipId"
				>
					<view
						class="up-tooltip__wrapper__popup__indicator"
						hover-class="up-tooltip__wrapper__popup__indicator--hover"
						v-if="showIndicator"
						:style="[indicatorMergedStyle]"
					>
						<!-- 由于nvue不支持三角形绘制，这里就做一个四方形，再旋转45deg，得到露出的一个三角 -->
					</view>
					<slot name="content">
						<view class="up-tooltip__wrapper__popup__list" :style="[popupListStyle]">
							<view
								v-if="showCopyButton"
								class="up-tooltip__wrapper__popup__list__btn"
								hover-class="up-tooltip__wrapper__popup__list__btn--hover"
								@click="setClipboardData"
							>
								<text
									class="up-tooltip__wrapper__popup__list__btn__text"
								>复制</text>
							</view>
							<up-line
								direction="column"
								color="#8d8e90"
								v-if="showCopyLine"
								length="18"
							></up-line>
							<template v-for="(item , index) in buttonItems" :key="index">
								<view
									class="up-tooltip__wrapper__popup__list__btn"
									hover-class="up-tooltip__wrapper__popup__list__btn--hover"
									@click="btnClickHandler(index)"
								>
									<text
										class="up-tooltip__wrapper__popup__list__btn__text"
									>{{ item }}</text>
								</view>
								<up-line
									direction="column"
									color="#8d8e90"
									v-if="index < buttonCount - 1"
									length="18"
								></up-line>
							</template>
						</view>
					</slot>
				</view>
			</up-transition>
		</view>
	</view>
</template>

<script>
	import { mpMixin } from '../../libs/mixin/mpMixin.js';
	import { mixin } from '../../libs/mixin/mixin.js';
	import { addStyle, addUnit, getPx, guid, toast, sleep, sys } from '../../libs/function/index.js';

	function createRectInfo() {
		return {
			width: 0,
			left: 0,
			right: 0
		}
	}

	function normalizeBool(value) {
		return value == true
	}

	function normalizeNumber(value, fallback = 0) {
		if (typeof value === 'number') {
			return value
		}
		if (value == null) {
			return fallback
		}
		const parsed = parseFloat(value.toString())
		return isNaN(parsed) ? fallback : parsed
	}

	function getObjNumber(obj, key, fallback = 0) {
		if (obj == null) {
			return fallback
		}
		if (typeof Map !== 'undefined' && obj instanceof Map) {
			return normalizeNumber(obj.get(key), fallback)
		}
		return normalizeNumber(obj[key], fallback)
	}

	/**
	 * Tooltip 
	 * @description 长按或点击弹出按钮提示框
	 * @tutorial https://ijry.github.io/uview-plus/components/tooltip.html
	 */
	export default {
		name: 'up-tooltip',
		mixins: [mpMixin, mixin],
		props: {
			text: {
				type: [String, Number],
				default: ''
			},
			copyText: {
				type: [String, Number],
				default: ''
			},
			size: {
				type: [String, Number],
				default: 14
			},
			color: {
				type: String,
				default: '#606266'
			},
			bgColor: {
				type: String,
				default: 'transparent'
			},
			popupBgColor: {
				type: String,
				default: '#060607'
			},
			direction: {
				type: String,
				default: 'top'
			},
			placement: {
				type: String,
				default: ''
			},
			zIndex: {
				type: [String, Number],
				default: 10071
			},
			showCopy: {
				type: Boolean,
				default: true
			},
			buttons: {
				type: Array,
				default() {
					return []
				}
			},
			overlay: {
				type: Boolean,
				default: true
			},
			showToast: {
				type: Boolean,
				default: true
			},
			show: {
				type: Boolean,
				default: false
			},
			triggerMode: {
				type: String,
				default: 'click'
			},
			forcePosition: {
				type: Object,
				default() {
					return {}
				}
			},
			customStyle: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {
				// 是否展示气泡
				innerShow: false,
				lastLongpressTime: 0,
				lastClickTime: 0,
				openTime: 0,
				// 生成唯一id，防止一个页面多个组件，造成干扰
				textId: guid(),
				tooltipId: guid(),
				// 初始时放置在顶部
				tooltipTop: 0,
				// 气泡的位置信息
				tooltipInfo: createRectInfo(),
				// 文本的位置信息
				textInfo: createRectInfo(),
				// 气泡在可能超出屏幕边沿范围时，重新定位后，距离屏幕边沿的距离
				screenGap: 12,
				// 三角形指示器的宽高
				indicatorWidth: 14,
			}
		},
		watch: {
			propsChange() {
				this.getElRect()
			},
			show(newVal) {
				this.innerShow = newVal
				if (newVal) {
					this.getElRect()
				}
			},
			displayShow(newVal) {
				if (newVal) {
					this.$nextTick(() => {
						this.getElRect()
						setTimeout(() => {
							this.getElRect()
						}, 50)
						setTimeout(() => {
							this.getElRect()
						}, 150)
					})
				}
			}
		},
		computed: {
			propsChange() {
				return this.displayText + '-' + this.buttonCount.toString() + '-' + this.currentDirection
			},
			displayText() {
				const text = this.text
				return text == null ? '' : text.toString()
			},
			hasText() {
				return this.displayText != ''
			},
			currentDirection() {
				if (this.placement != '') {
					if (this.placement.indexOf('bottom') != -1) {
						return 'bottom'
					}
					if (this.placement.indexOf('top') != -1) {
						return 'top'
					}
				}
				return this.direction == 'bottom' ? 'bottom' : 'top'
			},
			displayShow() {
				return this.show || this.innerShow
			},
			rootStyle() {
				const customStyle = this.customStyle != null ? this.customStyle : {}
				return addStyle(customStyle)
			},
			buttonItems() {
				return this.buttons != null ? this.buttons : []
			},
			buttonCount() {
				return this.buttonItems.length
			},
			overlayShow() {
				return this.displayShow == true && normalizeBool(this.overlay)
			},
			showIndicator() {
				return normalizeBool(this.showCopy) || this.buttonCount > 0 || (this.$slots && this.$slots.content != null)
			},
			showCopyLine() {
				return normalizeBool(this.showCopy) && this.buttonCount > 0
			},
			showCopyButton() {
				return normalizeBool(this.showCopy)
			},
			textStyle() {
				const style = {}
				style['fontSize'] = addUnit(this.size)
				style['color'] = this.color
				style['borderRadius'] = '4px'
				style['padding'] = '2px 4px'
				style['backgroundColor'] = this.bgColor != '' && this.bgColor != 'transparent' && this.displayShow == true ? this.bgColor : 'transparent'
				return style
			},
			popupListStyle() {
				const style = {}
				if (this.popupBgColor != '' && this.popupBgColor != 'transparent') {
					style['backgroundColor'] = this.popupBgColor
				}
				return style
			},
			indicatorStyle() {
				const style = {}
				const sysInfo = sys()
				const tooltipInfo = this.tooltipInfo
				const textInfo = this.textInfo
				const tooltipWidth = getObjNumber(tooltipInfo, 'width')
				const textWidth = getObjNumber(textInfo, 'width')
				const textLeft = getObjNumber(textInfo, 'left')
				const windowWidth = normalizeNumber(sysInfo.windowWidth, 0)

				if (this.popupBgColor != '' && this.popupBgColor != 'transparent') {
					style['backgroundColor'] = this.popupBgColor
				}

				if (tooltipWidth > 0 && textWidth > 0 && textLeft >= 0 && windowWidth > 0) {
					const textCenter = textLeft + textWidth / 2
					const idealPopupLeftScreen = textCenter - tooltipWidth / 2
					let actualPopupLeftScreen = idealPopupLeftScreen

					if (idealPopupLeftScreen < this.screenGap) {
						actualPopupLeftScreen = this.screenGap
					} else if (idealPopupLeftScreen + tooltipWidth > windowWidth - this.screenGap) {
						actualPopupLeftScreen = windowWidth - this.screenGap - tooltipWidth
					}

					const textCenterInPopup = textCenter - actualPopupLeftScreen
					let indicatorLeftRelative = textCenterInPopup - this.indicatorWidth / 2

					const minLeft = 8
					const maxLeft = tooltipWidth - this.indicatorWidth - 8
					if (indicatorLeftRelative < minLeft) {
						indicatorLeftRelative = minLeft
					} else if (indicatorLeftRelative > maxLeft) {
						indicatorLeftRelative = maxLeft
					}

					style['left'] = addUnit(indicatorLeftRelative)
				} else {
					style['left'] = '50%'
					style['marginLeft'] = '-' + addUnit(this.indicatorWidth / 2)
				}

				if (this.currentDirection === 'top') {
					style['bottom'] = '-4px'
				} else {
					style['top'] = '-4px'
				}
				return style
			},
			tooltipStyle() {
				const style = {}
				const sysInfo = sys()
				const tooltipInfo = this.tooltipInfo
				const textInfo = this.textInfo
				const tooltipWidth = getObjNumber(tooltipInfo, 'width')
				const textWidth = getObjNumber(textInfo, 'width')
				const textLeft = getObjNumber(textInfo, 'left')
				const windowWidth = normalizeNumber(sysInfo.windowWidth, 0)

				let isCentered = false

				if (tooltipWidth > 0 && textWidth > 0 && textLeft >= 0 && windowWidth > 0) {
					const textCenter = textLeft + textWidth / 2
					const idealPopupLeftScreen = textCenter - tooltipWidth / 2
					let actualPopupLeftScreen = idealPopupLeftScreen

					if (idealPopupLeftScreen < this.screenGap) {
						actualPopupLeftScreen = this.screenGap
					} else if (idealPopupLeftScreen + tooltipWidth > windowWidth - this.screenGap) {
						actualPopupLeftScreen = windowWidth - this.screenGap - tooltipWidth
					}

					const popupLeftRelative = actualPopupLeftScreen - textLeft
					style['left'] = addUnit(popupLeftRelative)
				} else {
					style['left'] = '50%'
					isCentered = true
				}

				if (this.currentDirection === 'top') {
					style['top'] = '0px'
					style['transform'] = isCentered ? 'translate(-50%, -100%)' : 'translateY(-100%)'
					style['marginTop'] = '-10px'
				} else {
					style['top'] = '100%'
					style['transform'] = isCentered ? 'translate(-50%, 0%)' : 'translateY(0%)'
					style['marginTop'] = '10px'
				}
				return style
			},
			transitionStyle() {
				const style = {
					position: 'absolute',
					zIndex: this.zIndex
				}
				return Object.assign(style, this.tooltipStyle)
			},
			indicatorMergedStyle() {
				const style = Object.assign({}, this.indicatorStyle)
				style['width'] = addUnit(this.indicatorWidth)
				style['height'] = addUnit(this.indicatorWidth)
				return style
			}
		},
		mounted() {
			if (this.show) {
				this.innerShow = true
			}
			this.init()
		},
		emits: ["click", "open", "close"],
		methods: {
			init() {
				this.getElRect()
			},
			open() {
				this.innerShow = true
				this.openTime = Date.now()
				this.$emit('open')
				sleep(30).then(() => {
					this.getElRect()
				})
			},
			close() {
				this.innerShow = false
				this.$emit('close')
			},
			triggerPopup() {
				this.innerShow = !this.innerShow
				if (this.innerShow) {
					this.openTime = Date.now()
					this.$emit('open')
					sleep(30).then(() => {
						this.getElRect()
					})
				} else {
					this.$emit('close')
				}
			},
			// 长按触发事件
			longpressHandler() {
				this.lastLongpressTime = Date.now()
				this.triggerPopup()
			},
			// 点击触发事件
			clickHandler() {
				if (Date.now() - this.lastLongpressTime < 500) {
					return
				}
				if (Date.now() - this.lastClickTime < 300) {
					return
				}
				this.lastClickTime = Date.now()
				if (this.triggerMode == 'click' || this.triggerMode == 'hover') {
					this.triggerPopup()
				}
			},
			// 点击透明遮罩
			overlayClickHandler() {
				if (Date.now() - this.openTime < 200) {
					return
				}
				this.innerShow = false
				this.$emit('close')
			},
			// 点击弹出按钮
			btnClickHandler(index) {
				this.innerShow = false
				this.$emit('close')
				// 如果需要展示复制按钮，此处index需要加1，因为复制按钮在第一个位置
				this.$emit('click', this.showCopy ? index + 1 : index)
			},
			// 查询内容高度
			queryRect(ref) {
				return new Promise(resolve => {
					this.$uGetRect(`#${ref}`).then(size => {
						resolve(size)
					})
				})
			},
			// 元素尺寸
			getElRect() {
				this.queryRect(this.tooltipId.toString()).then(size => {
					if (size != null) {
						this.tooltipInfo = size
					}
				})
				this.queryRect(this.textId.toString()).then(size => {
					if (size != null) {
						this.textInfo = size
					}
				})
			},
			getCopyData() {
				const copyText = this.copyText
				if (copyText != null && copyText.toString() != '') {
					return copyText.toString()
				}
				return this.displayText
			},
			// 复制文本到粘贴板
			setClipboardData() {
				// 关闭组件
				this.innerShow = false
				this.$emit('close')
				this.$emit('click', 0)
				uni.setClipboardData({
					data: this.getCopyData(),
					success: () => {
						if (this.showToast == true) {
							toast('复制成功')
						}
					},
					fail: () => {
						if (this.showToast == true) {
							toast('复制失败')
						}
					},
					complete: () => {
						this.innerShow = false
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../libs/css/components.scss";

	.up-tooltip {
		position: relative;
		@include flex;

		&__wrapper {
			@include flex;
			justify-content: center;
			/* #ifndef APP-NVUE */
			white-space: nowrap;
			/* #endif */

			&__text {
				font-size: 14px;
			}

			&__trigger {
				@include flex;
			}

			&__popup {
				@include flex;
				justify-content: center;

				&__list {
					background-color: #060607;
					position: relative;
					flex: 1;
					border-radius: 5px;
					padding: 0px 0;
					@include flex(row);
					align-items: center;
					overflow: hidden;

					&__btn {
						padding: 11px 13px;

						&--hover {
							background-color: #58595B;
						}

						&__text {
							line-height: 12px;
							font-size: 13px;
							color: #FFFFFF;
						}
					}
				}

				&__indicator {
					position: absolute;
					background-color: #060607;
					width: 14px;
					height: 14px;
					bottom: -4px;
					transform: rotate(45deg);
					border-radius: 2px;
					z-index: -1;

					&--hover {
						background-color: #58595B;
					}
				}
			}
		}
	}
</style>
