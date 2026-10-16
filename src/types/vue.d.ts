// ==========================================
// Vue 3 / UTS 核心宏函数与全局响应式 API 声明
// ==========================================

declare global {
  // ==========================================
  // Vue 宏函数全局声明（保证在 uvue / uts / ts 环境中获得完整 IDE 智能补全与参数提示）
  // ==========================================

  /**
   * Vue 3 / UTS <script setup> 宏函数：定义组件可触发的自定义事件
   *
   * 示例：
   * ```uts
   * const emit = defineEmits(['change', 'update'])
   * const emit = defineEmits<{
   *   (e: 'change', id: number): void
   *   (e: 'update', value: string): void
   * }>()
   * ```
   */
  function defineEmits<EE extends string = string>(
    emit: EE[]
  ): (event: EE, ...args: any[]) => void;
  function defineEmits<T extends (...args: any[]) => any>(): T;
  function defineEmits<T extends Record<string, any>>(
    emit: T
  ): (event: keyof T, ...args: any[]) => void;

  /**
   * Vue 3 / UTS <script setup> 宏函数：定义组件的 Props 属性
   *
   * 示例：
   * ```uts
   * const props = defineProps({
   *   title: { type: String, default: '' }
   * })
   * const props = defineProps<{ title?: string }>()
   * ```
   */
  function defineProps<T extends Record<string, any>>(): T;
  function defineProps<T extends Record<string, any>>(props: T): any;

  /**
   * Vue 3 / UTS <script setup> 宏函数：显式暴露组件内部属性/方法给父组件（通过 ref 访问）
   */
  function defineExpose(exposed?: Record<string, any>): void;

  /**
   * Vue 3 / UTS <script setup> 宏函数：声明组件选项（如 name, inheritAttrs 等）
   */
  function defineOptions(options?: Record<string, any>): void;

  /**
   * Vue 3 / UTS <script setup> 宏函数：为基于类型的 defineProps 声明提供默认值
   */
  function withDefaults<T extends Record<string, any>>(
    props: T,
    defaults: Partial<T>
  ): T;

  /**
   * Vue 3 / UTS <script setup> 宏函数：定义组件插槽类型
   */
  function defineSlots<T extends Record<string, any>>(): T;

  /**
   * Vue 3 / UTS <script setup> 宏函数：声明双向绑定 prop
   */
  function defineModel<T = any>(name?: string, options?: Record<string, any>): import('vue').Ref<T>;

  // ==========================================
  // Vue 核心响应式与生命周期 API 全局声明（全工程免 import 自动推导）
  // ==========================================
  const ref: typeof import('vue')['ref'];
  const reactive: typeof import('vue')['reactive'];
  const computed: typeof import('vue')['computed'];
  const watch: typeof import('vue')['watch'];
  const watchEffect: typeof import('vue')['watchEffect'];
  const shallowRef: typeof import('vue')['shallowRef'];
  const shallowReactive: typeof import('vue')['shallowReactive'];
  const toRef: typeof import('vue')['toRef'];
  const toRefs: typeof import('vue')['toRefs'];
  const toValue: typeof import('vue')['toValue'];
  const unref: typeof import('vue')['unref'];
  const nextTick: typeof import('vue')['nextTick'];
  const onMounted: typeof import('vue')['onMounted'];
  const onUpdated: typeof import('vue')['onUpdated'];
  const onUnmounted: typeof import('vue')['onUnmounted'];
  const provide: typeof import('vue')['provide'];
  const inject: typeof import('vue')['inject'];
}

declare module 'vue' {
  export interface ComponentCustomProperties {
    $callMethod: (name: string, ...args: any[]) => any;
    $router: import('@/uni_modules/route-bestX/index.uts').Router;
    $route: import('@/uni_modules/route-bestX/index.uts').RouteLocation;
  }
}

export {};
