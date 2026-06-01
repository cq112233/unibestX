<template>
	<view class="up-calendar-header up-border-bottom">
		<text
			class="up-calendar-header__title"
			v-if="showTitle"
		>{{ title }}</text>
		<view
			class="up-calendar-header__subtitle-wrap"
			v-if="showSubtitle"
		>
			<text
				v-if="showSwitch"
				class="up-calendar-header__switch"
				:class="{ 'up-calendar-header__switch--disabled': prevYearDisabled }"
				@click="prevYear"
			>«</text>
			<text
				v-if="showSwitch"
				class="up-calendar-header__switch"
				:class="{ 'up-calendar-header__switch--disabled': prevDisabled }"
				@click="prev"
			>‹</text>
			<text class="up-calendar-header__subtitle">{{ subtitle }}</text>
			<text
				v-if="showSwitch"
				class="up-calendar-header__switch"
				:class="{ 'up-calendar-header__switch--disabled': nextDisabled }"
				@click="next"
			>›</text>
			<text
				v-if="showSwitch"
				class="up-calendar-header__switch"
				:class="{ 'up-calendar-header__switch--disabled': nextYearDisabled }"
				@click="nextYear"
			>»</text>
			<text
				v-if="showToday"
				class="up-calendar-header__today"
				:class="{ 'up-calendar-header__today--disabled': todayDisabled }"
				@click="today"
			>{{ todayText }}</text>
		</view>
		<view class="up-calendar-header__weekdays">
			<text class="up-calendar-header__weekdays__weekday">一</text>
			<text class="up-calendar-header__weekdays__weekday">二</text>
			<text class="up-calendar-header__weekdays__weekday">三</text>
			<text class="up-calendar-header__weekdays__weekday">四</text>
			<text class="up-calendar-header__weekdays__weekday">五</text>
			<text class="up-calendar-header__weekdays__weekday">六</text>
			<text class="up-calendar-header__weekdays__weekday">日</text>
		</view>
	</view>
</template>

<script>
	import { mpMixin } from '../../libs/mixin/mpMixin.js';
	import { mixin } from '../../libs/mixin/mixin.js';
	export default {
		name: 'up-calendar-header',
		mixins: [mpMixin, mixin],
		props: {
			// 标题
			title: {
				type: String,
				default: ''
			},
			// 副标题
			subtitle: {
				type: String,
				default: ''
			},
			// 是否显示标题
			showTitle: {
				type: Boolean,
				default: true
			},
			// 是否显示副标题
			showSubtitle: {
				type: Boolean,
				default: true
			},
			showSwitch: {
				type: Boolean,
				default: false
			},
			prevDisabled: {
				type: Boolean,
				default: false
			},
			nextDisabled: {
				type: Boolean,
				default: false
			},
			prevYearDisabled: {
				type: Boolean,
				default: false
			},
			nextYearDisabled: {
				type: Boolean,
				default: false
			},
			showToday: {
				type: Boolean,
				default: true
			},
			todayText: {
				type: String,
				default: '今天'
			},
			todayDisabled: {
				type: Boolean,
				default: false
			},
		},
		data() {
			return {

			}
		},
		methods: {
			prev() {
				if (!this.prevDisabled) {
					this.$emit('prev')
				}
			},
			next() {
				if (!this.nextDisabled) {
					this.$emit('next')
				}
			},
			prevYear() {
				if (!this.prevYearDisabled) {
					this.$emit('prevYear')
				}
			},
			nextYear() {
				if (!this.nextYearDisabled) {
					this.$emit('nextYear')
				}
			},
			today() {
				if (!this.todayDisabled) {
					this.$emit('today')
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import "../../libs/css/components.scss";

	.up-calendar-header {
		display: flex;
		flex-direction: column;
		padding-bottom: 4px;

		&__title {
			font-size: 16px;
			color: $up-main-color;
			text-align: center;
			height: 42px;
			line-height: 42px;
			font-weight: bold;
		}

		&__subtitle-wrap {
			@include flex;
			align-items: center;
			justify-content: center;
			height: 40px;
		}

		&__subtitle {
			font-size: 14px;
			color: $up-main-color;
			text-align: center;
			font-weight: bold;
			min-width: 120px;
		}

		&__switch {
			width: 44px;
			height: 40px;
			line-height: 40px;
			text-align: center;
			color: $up-main-color;
			font-size: 22px;
			font-weight: bold;
			flex-shrink: 0;

			&--disabled {
				opacity: 0.35;
			}
		}

		&__weekdays {
			@include flex;
			justify-content: space-between;

			&__weekday {
				font-size: 13px;
				color: $up-main-color;
				line-height: 30px;
				flex: 1;
				text-align: center;
			}
		}

		&__today {
			margin-left: 4px;
			height: 28px;
			line-height: 28px;
			padding: 0 10px;
			border-radius: 14px;
			font-size: 13px;
			color: $up-primary;
			border: 1px solid $up-primary;
			flex-shrink: 0;

			&--disabled {
				opacity: 0.35;
			}
		}
	}
</style>
