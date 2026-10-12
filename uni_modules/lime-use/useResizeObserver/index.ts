// @ts-nocheck
// #ifndef UNI-APP-X
import {
  ref,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
  toValue,
  type Ref,
  type ComputedRef,
  type MaybeRefOrGetter,
} from '@/uni_modules/lime-shared/vue'

// #endif
// #ifdef UNI-APP-X
// 导入类型定义
import type { MaybeRefOrGetter } from '../shared/types';
// #endif
import { tryOnScopeDispose } from '../shared/tryOnScopeDispose'
/**
 * useResizeObserver 选项类型
 */
export type UseResizeObserverOptions = {
  /**
   * 是否禁用（默认：false）
   */
  disabled?: MaybeRefOrGetter<boolean>
}

/**
 * useResizeObserver 返回值类型
 */
export type UseResizeObserverReturn = {
  /**
   * 单个元素引用
   */
  resizeRef: Ref<UniElement | null>
  /**
   * 多个元素引用数组
   */
  resizeRefs: Ref<UniElement[]>
  /**
   * 是否支持 UniResizeObserver
   */
  isSupported: ComputedRef<boolean>
  /**
   * 停止观察
   */
  stop: () => void
}

/**
 * 创建并管理 UniResizeObserver 的 Composition API
 * 用于监听元素大小变化
 * 支持通过 ref 引用元素并自动监听变化
 * 
 * @param callback - 当元素大小变化时的回调函数
 * @param options - 配置选项
 * @returns 控制观察器的方法和状态
 * 
 * @example
 * ```typescript
 * // 单个元素
 * const { resizeRef, isSupported, stop } = useResizeObserver(
 *   (entries) => {
 *     console.log('元素大小变化:', entries[0].contentRect)
 *   }
 * )
 * 
 * // 在模板中使用
 * <view ref="resizeRef">需要监听尺寸变化的元素</view>
 * ```
 */
export function useResizeObserver(
  callback: (entries: Array<UniResizeObserverEntry>, observer: UniResizeObserver) => void,
  options: UseResizeObserverOptions = {}
): UseResizeObserverReturn {
  // #ifdef UNI-APP-X
  // UNI-APP-X 环境下直接使用 UniResizeObserver
  const disabled = computed(() => toValue<boolean>(options.disabled ?? false))
  const resizeRef = ref<UniElement | null>(null)
  const resizeRefs = ref<UniElement[]>([])
  let observer: UniResizeObserver | null = null
  let stopWatch: (() => void) | null = null
  let stopWatchRefs: (() => void) | null = null
  const isSupported = computed(() => true)

  const cleanup = () => {
    if (observer != null) {
      observer?.disconnect()
      observer = null
    }
    if (stopWatch != null) {
      stopWatch?.()
      stopWatch = null
    }
    if (stopWatchRefs != null) {
      stopWatchRefs?.()
      stopWatchRefs = null
    }
  }

  const createObserver = () => {
    if (disabled.value) {
      return
    }

    if (observer == null) {
      observer = new UniResizeObserver(callback)
    }

    stopWatch = watch(
      ():UniElement|null => resizeRef.value,
      (el: UniElement | null) => {
        if (observer != null && el != null) {
          observer?.observe(el)
        }
      },
      { immediate: true, flush: 'post' }
    )

    stopWatchRefs = watch(
      ():Array<UniElement> => resizeRefs.value,
      (els: Array<UniElement>) => {
        if (observer != null) {
          els.forEach(el => {
            if (el != null) {
              observer?.observe(el)
            }
          })
        }
      },
      { immediate: true, flush: 'post', deep: true }
    )
  }

  const stop = () => {
    cleanup()
  }

  watch(
    disabled,
    (isDisabled: boolean) => {
      if (isDisabled) {
        cleanup()
      } else {
        createObserver()
      }
    }
  )

  onMounted(() => {
    createObserver()
  })

  onBeforeUnmount(() => {
    cleanup()
  })

  tryOnScopeDispose(stop)

  return {
    resizeRef,
    resizeRefs,
    isSupported,
    stop
  }
  // #endif

  // #ifndef UNI-APP-X
  // 非 UNI-APP-X 环境，只保留函数签名
  console.warn('[useResizeObserver] 当前环境不支持 UniResizeObserver')
  
  const resizeRef = ref<UniElement | null>(null)
  const resizeRefs = ref<UniElement[]>([])
  const isSupported = computed(() => false)
  
  const stop = () => {
    // 空实现
  }

  return {
    resizeRef,
    resizeRefs,
    isSupported,
    stop
  }
  // #endif
}
