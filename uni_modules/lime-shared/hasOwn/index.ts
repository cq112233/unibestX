// @ts-nocheck
// #ifdef UNI-APP-X && APP
export { hasOwn } from './uvue'
// #endif


// #ifndef UNI-APP-X && APP
export { hasOwn } from './vue'
// #endif