// @ts-nocheck
// #ifndef VUE3
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
export * from '@vue/composition-api'
// #endif
// #ifdef VUE3
export * from 'vue';
// #endif
// #ifdef APP-IOS || APP-ANDROID
export type ComputedRef<T> = ComputedRefImpl<T>
// #endif