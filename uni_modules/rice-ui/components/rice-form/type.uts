import type { Ref } from "vue"
import { FormItemState } from "../rice-form-item"

export type FormLabelPosition = 'left' | 'top' | 'right'
export type FormRequiredPosition = 'left' | 'right'
export type FormTrigger = 'change' | 'blur' | 'all'

export type FormItemContextProvide = {
	formItems : Ref<FormItemContext[]>,
	addField : (field : FormItemContext) => void,
	removeField : (field : FormItemContext) => void,
}

export type FormItemContext = {
	name ?: string,
	validate : (trigger : FormTrigger) => Promise<FormItemState>,
	clearValidate : () => void,
	scrollToField : () => Promise<void>,
}

export type FormRules = {
	required ?: boolean,
	message ?: string,
	trigger ?: FormTrigger,
	min ?: number,
	max ?: number,
	pattern ?: RegExp,
	validator ?: (value : any | null) => (boolean | string) | Promise<boolean | string>,
}

export type FormValidateErrors = {
	name : string,
	rule : FormRules,
	message : string,
	label ?: string,
}

export type FormProps = {
	model ?: any,
	rules ?: Map<string, FormRules[]>,
	labelWidth ?: string | number,
	labelPosition ?: FormLabelPosition,
	labelStyle ?: UTSJSONObject,
	showRequired ?: boolean,
	requiredPosition ?: FormRequiredPosition,
	showError ?: boolean,
	borderBottom ?: boolean,
	errorBottom ?: boolean,
	scrollToError ?: boolean,
	disabled ?: boolean,
	readonly ?: boolean,
	errorStyle ?: UTSJSONObject,
	customStyle ?: UTSJSONObject
}