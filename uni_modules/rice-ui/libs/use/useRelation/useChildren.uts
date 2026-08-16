import type { Ref } from "vue"
export type UseChildren = {
	childrenList : Ref<ComponentInternalInstance[]>,
	linkChildren : () => void,
}

export type UseChildrenProvice = {
	link : (child : ComponentInternalInstance) => void,
	unlink : (child : ComponentInternalInstance) => void,
	childrenList : Ref<ComponentInternalInstance[]>,
}

export function useChildren(componentName : string) {
	const childrenList = ref<ComponentInternalInstance[]>([])

	const getChildIndex = (child : ComponentInternalInstance) => {
		return childrenList.value.indexOf(child)
	}

	const linkChildren = () => {
		const link = (child : ComponentInternalInstance) => {
			if (child.proxy != null) {
				childrenList.value.push(child)
			}
		}

		const unlink = (child : ComponentInternalInstance) => {
			const index = getChildIndex(child)
			if (index != -1) {
				childrenList.value.splice(index, 1)
			}
		}

		provide(`${componentName}-Relation`, {
			link,
			unlink,
			childrenList
		} as UseChildrenProvice)

	}

	return {
		childrenList,
		linkChildren,
	} as UseChildren

}