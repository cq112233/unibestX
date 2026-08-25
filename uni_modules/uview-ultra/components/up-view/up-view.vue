<template>
	<view class="up-view" :style="viewStyle" @click="clickHandler">
		<slot></slot>
	</view>
</template>

<script>
export default {
	name: 'up-view',
	props: {
		backgroundColor: {
			type: String,
			default: ''
		},
		color: {
			type: String,
			default: ''
		},
		flexDirection: {
			type: String,
			default: ''
		},
		justifyContent: {
			type: String,
			default: ''
		},
		alignItems: {
			type: String,
			default: ''
		},
		flex1: {
			type: [String, Number],
			default: ''
		},
		width: {
			type: String,
			default: ''
		},
		height: {
			type: String,
			default: ''
		},
		padding: {
			type: String,
			default: ''
		},
		margin: {
			type: String,
			default: ''
		},
		borderColor: {
			type: String,
			default: ''
		}
	},
	emits: ['click'],
	computed: {
		viewStyle() {
			const style = {}
			if (this.backgroundColor) style.backgroundColor = this.backgroundColor
			if (this.color) style.color = this.color
			if (this.flexDirection) style.flexDirection = this.flexDirection
			if (this.justifyContent) style.justifyContent = this.justifyContent
			if (this.alignItems) style.alignItems = this.alignItems
			if (this.flex1 !== '') style.flex = this.flex1
			if (this.width) style.width = this.width
			if (this.height) style.height = this.height
			if (this.padding) style.padding = this.padding
			if (this.margin) style.margin = this.margin
			if (this.borderColor) style.borderColor = this.borderColor
			return style
		}
	},
	methods: {
		clickHandler() {
			this.$emit('click')
		}
	}
}
</script>

<style lang="scss" scoped>
.up-view {
	display: flex;
}
</style>
