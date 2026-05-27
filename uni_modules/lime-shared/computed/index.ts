// @ts-nocheck
// #ifndef VUE2 && APP
export { computed } from '../vue';
// #endif

// #ifdef VUE2 && APP
import { watchEffect, onScopeDispose, ref } from '../vue';

export function computed(getter) {
	const result = ref();
	watchEffect(() => {
		result.value = getter();
	});
	return result;
}
// #endif