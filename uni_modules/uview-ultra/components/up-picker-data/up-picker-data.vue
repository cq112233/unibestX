<template>
	<view class="up-picker-data">
		<view class="up-picker-data__trigger">
			<slot name="trigger"></slot>
			<up-input
				v-if="!$slots.trigger"
				:model-value="current"
				disabled
				disabled-color="#ffffff"
				:placeholder="title"
				border="none"
			></up-input>
			<view class="up-picker-data__trigger__cover" @click="show = true"></view>
		</view>
		<up-picker
			:show="show"
			:columns="columns"
			:key-name="labelKey"
			:default-index="defaultIndex"
			@confirm="confirm"
			@cancel="cancel"
			@close="close"
		></up-picker>
	</view>
</template>

<script>
export default {
	name: 'up-picker-data',
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
			default: 'id'
		},
		labelKey: {
			type: String,
			default: 'name'
		}
	},
	emits: ['update:modelValue', 'cancel', 'close', 'confirm'],
	data() {
		return {
			show: false,
			current: '',
			defaultIndex: []
		}
	},
	computed: {
		columns() {
			return [this.options]
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
			this.defaultIndex = []
			this.options.forEach((item, index) => {
				if ((item[this.valueKey] == null ? '' : item[this.valueKey].toString()) == model) {
					this.current = item[this.labelKey] == null ? '' : item[this.labelKey].toString()
					this.defaultIndex = [index]
				}
			})
		},
		cancel() {
			this.show = false
			this.$emit('cancel')
		},
		close() {
			this.show = false
			this.$emit('close')
		},
		confirm(e) {
			const value = e.value || []
			const item = value[0]
			this.show = false
			if (item) {
				this.$emit('update:modelValue', item[this.valueKey])
				this.current = item[this.labelKey] == null ? '' : item[this.labelKey].toString()
			}
			this.$emit('confirm')
		}
	}
}
</script>

<style lang="scss" scoped>
.up-picker-data__trigger {
	position: relative;
}

.up-picker-data__trigger__cover {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: 10;
}
</style>
