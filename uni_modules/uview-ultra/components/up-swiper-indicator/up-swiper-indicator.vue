<template>
	<view class="up-swiper-indicator">
		<view
			class="up-swiper-indicator__wrapper"
			v-if="indicatorMode === 'line'"
			:class="[`up-swiper-indicator__wrapper--${indicatorMode}`]"
			:style="{
				width: addUnit(lineWidth * (parseInt(length) || 0)),
				backgroundColor: indicatorInactiveColor
			}"
		>
			<view
				class="up-swiper-indicator__wrapper--line__bar"
				:style="[lineStyle]"
			></view>
		</view>
		<view
			class="up-swiper-indicator__wrapper"
			v-if="indicatorMode === 'dot'"
		>
			<view
				class="up-swiper-indicator__wrapper__dot"
				v-for="(item, index) in (parseInt(length) || 0)"
				:key="index"
				:class="[index === (parseInt(current) || 0) && 'up-swiper-indicator__wrapper__dot--active']"
				:style="[dotStyle(index)]"
			>
			</view>
		</view>
	</view>
</template>

<script>
	import { props } from './props';
	import { mpMixin } from '../../libs/mixin/mpMixin';
	import { mixin } from '../../libs/mixin/mixin';
	import { addUnit } from '../../libs/function/index';

	export default {
		name: 'up-swiper-indicator',
		mixins: [mpMixin, mixin, props],
		data() {
			return {
				lineWidth: 22
			}
		},
		computed: {
			// 指示器为线型的样式
			lineStyle() {
				let style = {}
				const curr = parseInt(this.current) || 0
				style.width = addUnit(this.lineWidth)
				style.transform = `translateX(${ addUnit(curr * this.lineWidth) })`
				style.backgroundColor = this.indicatorActiveColor
				return style
			},
			// 指示器为点型的样式
			dotStyle() {
				return index => {
					let style = {}
					const curr = parseInt(this.current) || 0
					style.backgroundColor = index === curr ? this.indicatorActiveColor : this.indicatorInactiveColor
					return style
				}
			}
		},
		methods: {
			addUnit
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../libs/css/components.scss';

	.up-swiper-indicator {

		&__wrapper {
			@include flex;

			&--line {
				border-radius: 100px;
				height: 4px;

				&__bar {
					width: 22px;
					height: 4px;
					border-radius: 100px;
					background-color: #FFFFFF;
					transition: transform 0.3s;
				}
			}

			&__dot {
				width: 5px;
				height: 5px;
				border-radius: 100px;
				margin: 0 4px;

				&--active {
					width: 12px;
				}
			}

		}
	}
</style>
