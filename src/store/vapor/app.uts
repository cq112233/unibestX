import { reactive } from 'vue';
import { defineStore } from 'pinia';

/**
 * 应用底座状态（类型镜像自唯一真源 `../types.uts`）
 *
 * ⚠️ 为什么不 `import type` 那个 `.uts`：TS 侧 `.uts` 只有通配 `any` 声明
 * （见 `src/types/uts-shim.d.ts`），具名类型导入会被当作命名空间而报 TS2709，
 * 故此处内联镜像。真源改动时需同步本处。
 */
type IAppState = {
  mode: string;
};

/**
 * 应用底座基础状态 Store（纯底座上下文，与业务功能如主题、多语言完全解耦）
 */
export const useAppStore = defineStore('app', () => {
  const state = reactive<IAppState>({
    mode: 'vapor'
  });

  return {
    state
  };
}, {
  persist: true
});
