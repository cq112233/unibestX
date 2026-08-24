import type { Ref } from "vue"
import { UseChildrenProvice } from "./useChildren.uts"

export type UseParent = {
	childIndex : Ref<number>,
}

export function useParent(componentName : string) : UseParent {
	const parent = inject<UseChildrenProvice | null>(`${componentName}-Relation`, null)

	if (parent != null) {
		const instance = getCurrentInstance()!
		parent.link(instance)
		const childIndex = computed(() => parent.childrenList.value.indexOf(instance))
		onUnmounted(() => {
			parent.unlink(instance)
		})

		return {
			childIndex,
		}
	}


	return {
		childIndex: ref<number>(-1),
	}
}