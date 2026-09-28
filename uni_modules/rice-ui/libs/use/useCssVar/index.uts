
import { isDark } from "../../store"


export function useCssVar(prop : string, target : Ref<UniElement | null>) {

	const variable = ref("")

	const updateCssVar = () => {
		if (target.value != null && prop != "") {
			variable.value = target.value.style.getPropertyValue(prop)
		}
	}

	watch([target, isDark], async () => {
		await nextTick()
		if (target.value != null) {
			updateCssVar()
		}
	}, {
		immediate: true
	})



	return variable
}