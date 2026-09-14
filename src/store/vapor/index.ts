import { createPinia, setActivePinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';

/**
 * 官方 Pinia 实例（适用于 APP 蒸汽模式 Vapor、Web、小程序、iOS/鸿蒙平台）
 */
const pinia = createPinia();

// 持久化插件配置，适配 uni-app 跨端 Storage
pinia.use(
  createPersistedState({
    key: (id: string): string => `pinia:${id}`,
    storage: {
      getItem: (key: string): string | null => {
        const val = uni.getStorageSync(key);
        return val != null && val !== '' ? `${val}` : null;
      },
      setItem: (key: string, value: string): void => {
        uni.setStorageSync(key, value);
      }
    }
  })
);

// 激活 Pinia 实例
setActivePinia(pinia);

export default pinia;

export * from './app';
export * from './token';
export * from './user';
