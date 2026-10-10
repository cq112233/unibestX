import { reactive } from 'vue';
import { defineStore } from 'pinia';
import type { IAppState } from '../types.d.uts';

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
