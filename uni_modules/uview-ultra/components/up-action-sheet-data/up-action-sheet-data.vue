<template>
	<view class="up-action-sheet-data">
		<view class="up-action-sheet-data__trigger">
			<slot name="trigger"></slot>
			<up-input
				v-if="!$slots.trigger"
				:model-value="current"
				disabled
				disabled-color="#ffffff"
				:placeholder="title"
				border="none"
			></up-input>
			<view class="up-action-sheet-data__trigger__cover" @click="show = true"></view>
		</view>
		<up-action-sheet
			:show="show"
			:actions="options"
			:title="title"
			:description="description"
			@close="show = false"
			@select="select"
		></up-action-sheet>
	</view>
</template>

<script>
export default {
	name: 'up-action-sheet-data',
	props: {
		modelValue: {
			type: [String, Number],
			default: ''
		},
		title: {
			type: String,
			default: ''
		},
		description: {
			type: String,
			default: ''
		},
		options: {
			type: Array,
			default: () => []
		},
		valueKey: {
			type: String,
			default: 'value'
		},
		labelKey: {
			type: String,
			default: 'name'
		}
	},
	emits: ['update:modelValue'],
	data() {
		return {
			show: false,
			current: ''
		}
	},
	watch: {
		modelValue: {
			handler() {
				this.syncCurrent()
			},
			immediate: true
		},
		options: {
			handler() {
				this.syncCurrent()
			},
			immediate: true
		}
	},
	methods: {
		syncCurrent() {
			const model = this.modelValue == null ? '' : this.modelValue.toString()
			this.current = ''
			this.options.forEach((item) => {
				if ((item[this.valueKey] == null ? '' : item[this.valueKey].toString()) == model) {
					this.current = item[this.labelKey] == null ? '' : item[this.labelKey].toString()
				}
			})
		},
		select(item) {
			this.show = false
			this.$emit('update:modelValue', item[this.valueKey])
			this.current = item[this.labelKey] == null ? '' : item[this.labelKey].toString()
		}
	}
}
</script>

<style lang="scss" scoped>
.up-action-sheet-data__trigger {
	position: relative;
}

.up-action-sheet-data__trigger__cover {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
}
</style>
