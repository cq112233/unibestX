/**
 * 调用全局 Toast 提示
 */
export function showToast(options: UTSJSONObject) {
  const msg = (options.message ?? options.title ?? '') as string;
  const icon = (options.icon ?? 'none') as 'success' | 'loading' | 'error' | 'none';
  const duration = (options.duration != null ? options.duration : 1500) as number;
  uni.showToast({
    title: msg,
    icon,
    duration
  });
}

/**
 * 快捷调用 toast
 */
export function toast(message: string, _type: string = 'default') {
  uni.showToast({
    title: message,
    icon: 'none'
  });
}

export function toastSuccess(message: string) {
  uni.showToast({
    title: message,
    icon: 'success'
  });
}

export function toastError(message: string) {
  uni.showToast({
    title: message,
    icon: 'error'
  });
}

export function toastWarning(message: string) {
  toast(message);
}

export function toastPrimary(message: string) {
  toast(message);
}
