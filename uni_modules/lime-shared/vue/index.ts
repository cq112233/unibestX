// @ts-nocheck

// #ifdef VUE3
export * from 'vue';
// #endif

// #ifndef VUE3
// #ifndef VUE2 && APP
export * from '@vue/composition-api';
// #endif

// #ifdef VUE2
export * from '@vue/composition-api';
import * as _vue from '@vue/composition-api';
export function toValue(source) {
	// 处理函数
	if (typeof source === 'function') {
		return source();
	}

	// 处理 ref
	if (_vue.isRef(source)) {
		return source.value;
	}

	// reactive 对象直接返回
	return source;
}

// #endif

// #ifdef VUE2 && APP
// vue2 app computed无法响应
export function computed(getterOrOptions) {
	const isGetter = typeof getterOrOptions === 'function';
	const getter = isGetter ? getterOrOptions : getterOrOptions.get;
	const setter = !isGetter ? getterOrOptions.set : undefined;

	if (typeof getter !== 'function') {
		throw new Error('computed 的 getter 必须是一个函数');
	}

	if (!isGetter) {
		if (!getterOrOptions || typeof getterOrOptions !== 'object') {
			throw new Error('computed 参数必须是函数或包含 get 方法的对象');
		}
		if (!getterOrOptions.get) {
			throw new Error('computed 对象必须包含 get 方法');
		}
		if (setter !== undefined && typeof setter !== 'function') {
			throw new Error('computed 的 setter 必须是函数');
		}
	}

	const internalValue = _vue.ref(getter());
	const result = _vue.customRef((track, trigger) => {
		return {
			get() {
				track();
				return internalValue.value;
			},
			set(newValue) {
				internalValue.value = newValue
				if(setter){
					setter(newValue)
				}
				trigger()
			}
		};
	});

	const stop = _vue.watchEffect(() => {
		const newValue = getter();
		internalValue.value = newValue
	})
	
	_vue.onScopeDispose(() => {
		stop();
	});
	return result;
}
// #endif


// #ifdef APP-NVUE
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
// #endif

// #endif