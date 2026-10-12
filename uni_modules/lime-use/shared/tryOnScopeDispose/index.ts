// @ts-nocheck
// #ifndef UNI-APP-X
import {getCurrentScope, onScopeDispose} from '@/uni_modules/lime-shared/vue';
// #endif

/**
 * 尝试在当前 Vue 作用域内注册清理函数
 * @param fn 需要执行的清理函数
 * @returns 如果成功注册清理函数则返回 true，否则返回 false
 * @description 在有当前作用域时调用 onScopeDispose 注册清理函数，在 UNI-APP-X 环境下总是返回 false
 */
export function tryOnScopeDispose(fn: () => void): boolean {
  // 检查是否存在当前作用域
  if (getCurrentScope() != null) {
    // 在作用域内注册清理函数
    onScopeDispose(fn)
    return true
  }
  // 无当前作用域时返回 false
  return false
}