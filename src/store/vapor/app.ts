import { reactive } from 'vue';
import { defineStore } from 'pinia';
import type { IAppState } from '../types.d.uts';

/**
 * 启动时同步读取本地持久化数据，恢复底座运行时状态
 */
function getStoredAppState(): Partial<IAppState> | null {
  try {
    const raw = uni.getStorageSync('pinia:app');
    if (raw != null && typeof raw === 'string' && raw !== '') {
      const parsed = JSON.parse(raw);
      return (parsed?.state ?? parsed) as Partial<IAppState>;
    }
  }
  catch {
    // ignore
  }
  return null;
}

/**
 * 应用底座基础状态 Store（纯底座上下文，与业务功能如主题、多语言完全解耦）
 */
export const useAppStore = defineStore('app', () => {
  const stored = getStoredAppState();

  const state = reactive<IAppState>({
    mode: stored?.mode ?? 'vapor'
  });

  return {
    state
  };
}, {
  persist: true
});
