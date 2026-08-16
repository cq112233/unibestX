export const useFormData = (model : any | null) : UTSJSONObject => {
	if (model == null || typeof model != 'object' || Array.isArray(model)) {
		return {}
	}
	if (model instanceof UTSJSONObject) {
		return model
	}

	return JSON.parseObject(JSON.stringify(model)!)!

}