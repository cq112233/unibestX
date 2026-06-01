<template>
	<up-code-input
		:maxlength="maxlength"
		:dot="dotFill"
		:mode="codeInputMode"
		:model-value="currentValue"
		:focus="focus"
		:bold="bold"
		:font-size="fontSize"
		:color="inactiveColor"
		:size="width"
		:disabled-keyboard="disabledKeyboard"
		:border-color="activeBorderColor"
		@change="onChange"
		@finish="onFinish"
		@update:modelValue="onModelValueUpdate"
	></up-code-input>
</template>

<script>
export default {
	name: 'up-message-input',
	props: {
		maxlength: {
			type: [Number, String],
			default: 4
		},
		dotFill: {
			type: Boolean,
			default: false
		},
		mode: {
			type: String,
			default: 'box'
		},
		modelValue: {
			type: [String, Number],
			default: ''
		},
		value: {
			type: [String, Number],
			default: ''
		},
		breathe: {
			type: Boolean,
			default: true
		},
		focus: {
			type: Boolean,
			default: false
		},
		bold: {
			type: Boolean,
			default: false
		},
		fontSize: {
			type: [String, Number],
			default: 60
		},
		activeColor: {
			type: String,
			default: '#2979ff'
		},
		inactiveColor: {
			type: String,
			default: '#606266'
		},
		width: {
			type: [Number, String],
			default: '80'
		},
		disabledKeyboard: {
			type: Boolean,
			default: false
		}
	},
	emits: ['change', 'finish', 'update:modelValue'],
	computed: {
		currentValue() {
			const modelText = this.modelValue == null ? '' : this.modelValue.toString()
			return modelText.length > 0 ? modelText : (this.value == null ? '' : this.value.toString())
		},
		codeInputMode() {
			return this.mode == 'box' ? 'box' : 'line'
		},
		activeBorderColor() {
			return this.mode == 'box' ? this.activeColor : this.inactiveColor
		}
	},
	methods: {
		onChange(value) {
			this.$emit('change', value)
		},
		onFinish(value) {
			this.$emit('finish', value)
		},
		onModelValueUpdate(value) {
			this.$emit('update:modelValue', value)
		}
	}
}
</script>
