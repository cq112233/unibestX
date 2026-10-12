import type { ComponentPublicInstance } from 'vue';
import { defineStore } from 'pinia';

/**
 * 组件实例注册表 store（Vapor 分支：官方 Pinia）
 *
 * 【职责只有一件事】按名字存取组件实例：`setInstance` / `getInstance` / `deleteInstance`。
 * 打开弹窗、传什么数据、取什么数据这类业务语义**全部留在调用方** —— 拿到实例后自己
 * `$callMethod('方法名', ...)`。store 自身不认识 TabbarMaskModal，也不认识任何具体组件。
 *
 * 【典型用法】弹窗必须挂在页面级才能覆盖全屏，而触发它的按钮可能埋在很深层级
 * （例如 swiper-item 内部的子组件）：
 *
 * ```uts
 * // 页面级：挂载时注册，卸载时删除
 * onMounted(() => { modalStore.setInstance('tabbarMaskModal', modalRef.value) })
 * onUnmounted(() => { modalStore.deleteInstance('tabbarMaskModal') })
 *
 * // 任意层级：取出来直接用
 * const inst = modalStore.getInstance('tabbarMaskModal')
 * if (inst != null) { inst.$callMethod('openModal', payload) }
 * ```
 *
 * 【为什么寄存器用模块级 Map 而不是 state】
 *   1) state 会被深度响应式代理，组件实例被代理后 `$callMethod` 等内部字段会失真；
 *   2) 组件实例不可序列化，进 state 会污染持久化（pinia-plugin-persistedstate）
 *      与 devtools 序列化。
 * 因此本 store 不持有任何 state —— 它只是一个实例容器。
 */

/** 实例注册表：key 为业务自定义名（如 'tabbarMaskModal'） */
const instanceMap: Map<string, ComponentPublicInstance> = new Map<string, ComponentPublicInstance>();

export const useModalStore = defineStore('modal', () => {
  /**
   * 注册（或覆盖）一个实例
   *
   * @param key 业务自定义的实例名
   * @param instance 组件实例；传 null 等价于删除该 key
   */
  function setInstance(key: string, instance: ComponentPublicInstance | null): void {
    if (instance == null) {
      instanceMap.delete(key);
      return;
    }
    instanceMap.set(key, instance!);
  }

  /**
   * 取实例
   *
   * @param key 业务自定义的实例名
   * @returns 命中返回实例，未命中返回 null（调用方必须判空）
   */
  function getInstance(key: string): ComponentPublicInstance | null {
    const instance = instanceMap.get(key);
    return instance == null ? null : instance;
  }

  /** 删除实例（组件卸载时调用，避免表里留着已销毁的实例） */
  function deleteInstance(key: string): void {
    instanceMap.delete(key);
  }

  return {
    setInstance,
    getInstance,
    deleteInstance
  };
});
