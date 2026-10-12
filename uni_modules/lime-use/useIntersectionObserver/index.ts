// @ts-nocheck
// #ifndef UNI-APP-X 
import { 
  ref, 
  computed, 
  watch, 
  onMounted, 
  onBeforeUnmount,
  unref,
  toValue,
  getCurrentInstance,
  type Ref,
  type ComputedRef,
  type MaybeRef,
  type MaybeRefOrGetter,
} from '@/uni_modules/lime-shared/vue'
import type { ComponentPublicInstance } from '@/uni_modules/lime-shared/vue'
// #endif

/**
 * useIntersectionObserver 选项类型
 */
export type UseIntersectionObserverOptions = {
  /**
   * 根元素选择器
   */
  root?: MaybeRef<string>
  /**
   * 目标元素选择器
   */
  selector?: MaybeRef<string>
  /**
   * 顶部边距（默认：0）
   */
  marginTop?: MaybeRefOrGetter<number>
  /**
   * 底部边距（默认：0）
   */
  marginBottom?: MaybeRefOrGetter<number>
  /**
   * 是否禁用（默认：false）
   */
  disabled?: MaybeRefOrGetter<boolean>
  /**
   * 阈值数组
   */
  thresholds?: number[]
  /**
   * 初始相交比例
   */
  initialRatio?: number
  /**
   * 是否观察所有目标（默认：false）
   */
  observeAll?: boolean
  /**
   * 组件实例
   */
  instance?: ComponentPublicInstance
}

/**
 * useIntersectionObserver 返回值类型
 */
export type UseIntersectionObserverReturn = {
  /**
   * 重新创建观察器
   */
  recreate: () => void
  /**
   * 断开观察器连接
   */
  disconnect: () => void
  /**
   * 是否正在观察
   */
  isObserving: ComputedRef<boolean>
}

/**
 * 创建并管理 IntersectionObserver 的 Composition API
 * 用于监听目标元素相对于视口或指定根元素的可见性变化
 *
 * 平台差异：
 * - WEB 平台使用原生 IntersectionObserver（uni.createIntersectionObserver 在 H5 下
 *   当 observe 元素子节点 position 变为 fixed 后会间歇性停止触发回调）
 * - 小程序平台使用 uni.createIntersectionObserver
 * - UNI-APP-X && APP 平台不支持
 * 
 * @param callback - 当目标元素可见性变化时的回调函数
 * @param options - 配置选项
 * @returns 控制观察器的方法和状态
 * 
 * @example
 * ```typescript
 * const { recreate, disconnect, isObserving } = useIntersectionObserver(
 *   (result) => {
 *     console.log('相交比例:', result.intersectionRatio)
 *   },
 *   {
 *     selector: '.target-element',
 *     marginTop: 100,
 *     marginBottom: 100
 *   }
 * )
 * ```
 */
export function useIntersectionObserver(
  callback: (result: ObserveResult) => void,
  options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverReturn {
  // #ifndef UNI-APP-X && APP
  // 响应式计算选项
  const selector = computed(() => unref(options.selector))
  const root = computed(() => unref(options.root))
  const marginTop = computed(() => toValue(options.marginTop) ?? 0)
  const marginBottom = computed(() => toValue(options.marginBottom) ?? 0)
  const disabled = computed(() => toValue(options.disabled) ?? false)
  
  const {
    thresholds,
    initialRatio,
    observeAll = false,
    instance: customInstance
  } = options

  // 如果没有传入 instance，则使用 getCurrentInstance 获取
  const instance = customInstance ?? getCurrentInstance()?.proxy

  // 观察器实例
  let observer: any = null

  // 响应式状态
  const isObservingRef = ref(false)
  const isObserving = computed(() => isObservingRef.value)

  // ============================================================
  // WEB 平台：使用原生 IntersectionObserver
  // 原因：uni.createIntersectionObserver 在 H5 下当 observe 元素子节点
  // position 变为 fixed 后会间歇性停止触发回调
  //
  // 注意：windowTop（导航栏高度）由调用方在 marginTop 中传入，
  // 这里不自动处理 windowTop，保持 hook 通用性
  // ============================================================
  // #ifdef WEB
  const createObserver = () => {
    if (!selector.value || disabled.value) {
      return
    }

    const el = document.querySelector(selector.value)
    if (el == null) return

    // 确定 root 元素
    let rootEl: Element | null = null
    if (root.value) {
      rootEl = document.querySelector(root.value)
      if (rootEl == null) return
    }

    const margins = `${marginTop.value}px 0px ${marginBottom.value}px 0px`

    observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const entry = entries[0]
        // 适配为 uni IO 的 ObserveResult 结构
        // relativeRect 对应 rootBounds（应用 rootMargin 后的根矩形）
        const rootBounds = entry.rootBounds ?? {
          top: marginTop.value,
          bottom: window.innerHeight + marginBottom.value,
          left: 0,
          right: window.innerWidth,
          width: window.innerWidth,
          height: window.innerHeight
        }
        callback({
          intersectionRatio: entry.intersectionRatio,
          intersectionRect: entry.intersectionRect as any,
          relativeRect: rootBounds as any,
          boundingClientRect: entry.boundingClientRect as any
        } as ObserveResult)
      },
      {
        root: rootEl,
        threshold: thresholds ?? [0],
        rootMargin: margins
      }
    )

    observer.observe(el)
    isObservingRef.value = true
  }
  // #endif

  // ============================================================
  // 非 WEB 平台（小程序等）：使用 uni.createIntersectionObserver
  // ============================================================
  // #ifndef WEB
  const createObserver = () => {
    // 如果未提供选择器或已禁用，则不创建
    if (!selector.value || disabled.value) {
      return
    }

    // 创建 IntersectionObserver 实例
    observer = uni.createIntersectionObserver(
      instance,
      {
        thresholds,
        initialRatio,
        observeAll
      }
    )

    // 设置相对参照区域
    if (root.value) {
      observer?.relativeTo(root.value, {
        top: marginTop.value,
        bottom: marginBottom.value
      })
    } else {
      observer?.relativeToViewport({
        top: marginTop.value,
        bottom: marginBottom.value
      })
    }

    // 开始观察目标元素
    observer?.observe(selector.value, callback)
    isObservingRef.value = true
  }
  // #endif

  // 断开观察器连接
  const disconnect = () => {
    if (observer) {
      observer.disconnect()
      observer = null
      isObservingRef.value = false
    }
  }

  // 重新创建观察器
  const recreate = () => {
    disconnect()
    createObserver()
  }

  // 监听选项变化，自动重新创建观察器
  watch(
    [selector, root, marginTop, marginBottom, disabled],
    () => {
      recreate()
    },
    { immediate: false }
  )

  // 组件挂载时创建观察器
  onMounted(() => {
    createObserver()
  })

  // 组件卸载前断开观察器
  onBeforeUnmount(() => {
    disconnect()
  })

  return {
    recreate,
    disconnect,
    isObserving
  }
  // #endif

  // #ifdef UNI-APP-X && APP
  // UNI-APP-X && APP 平台暂不支持 IntersectionObserver API
  console.warn('[useIntersectionObserver] UNI-APP-X && APP 平台暂不支持 IntersectionObserver API')
  return {
    recreate: () => {},
    disconnect: () => {},
    isObserving: computed(() => false)
  }
  // #endif
}