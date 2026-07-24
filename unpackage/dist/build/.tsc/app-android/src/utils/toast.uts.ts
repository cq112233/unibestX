import { ComponentPublicInstance } from 'vue'


const toastStack = [] as ComponentPublicInstance[]

/**
 * 注册当前页面的 toast 实例到全局栈中
 */
export function registerToast(toastInstance : ComponentPublicInstance) {
  const index = toastStack.indexOf(toastInstance)
  if (index != -1) { // eslint-disable-line eqeqeq
    toastStack.splice(index, 1)
  }
  toastStack.push(toastInstance)
}

/**
 * 从全局栈中移除当前页面的 toast 实例
 */
export function unregisterToast(toastInstance : ComponentPublicInstance) {
  const index = toastStack.indexOf(toastInstance)
  if (index != -1) { // eslint-disable-line eqeqeq
    toastStack.splice(index, 1)
  }
}

/**
 * 调用当前最上层活跃页面的 toast 提示
 */
export function showToast(options : UTSJSONObject) {
  if (toastStack.length > 0) {
    const activeToast = toastStack[toastStack.length - 1]
    activeToast.$callMethod('show', options)
  } else {
    // 降级使用原生 uni.showToast
    uni.showToast({
      title: options['message'] as string,
      icon: 'none'
    })
  }
}

/**
 * 快捷调用 toast
 */
export function toast(message : string, type : string = 'default') {
		console.log(3456)
  showToast({
    message: message,
    type: type
  } as UTSJSONObject)
}

export function toastSuccess(message : string) {
  toast(message, 'success')
}

export function toastError(message : string) {
  toast(message, 'error')
}

export function toastWarning(message : string) {
  toast(message, 'warning')
}

export function toastPrimary(message : string) {
  toast(message, 'primary')
}
