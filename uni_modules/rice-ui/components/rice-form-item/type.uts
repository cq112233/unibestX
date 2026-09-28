import { FormLabelPosition, FormRequiredPosition, FormRules } from "../rice-form"


export type FormItemState = {
	name ?: string,
	label ?: string,
	status : 'unvalidate' | 'passed' | 'failed',
	validateMessage : string,
	rule ?: FormRules,
}

export type FormItemProps = {
	name ?: string,
	label ?: string,
	labelWidth ?: string | number,
	labelPosition ?: FormLabelPosition,
	labelStyle ?: UTSJSONObject,
	rules ?: FormRules[],
	required ?: boolean,
	showRequired ?: boolean,
	requiredPosition ?: FormRequiredPosition,
	showError ?: boolean,
	suffixIcon ?: string,
	suffixIconStyle ?: UTSJSONObject,
	borderBottom ?: boolean,
	errorBottom ?: boolean,
	contentStyle ?: UTSJSONObject,
	errorStyle ?: UTSJSONObject,
	customStyle ?: UTSJSONObject,
}