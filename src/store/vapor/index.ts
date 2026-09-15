import { createPinia, setActivePinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';

console.log('vapor----pinia启动');
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

// ⚠️ 严禁在此 `export *` 转发 stores：本文件只负责创建并默认导出 pinia 实例。
// 门面 `src/store/index.uts` 是唯一转发层，两层转发会让 UTS 在 Android 端把
// 重名符号改名为 `useXxxStore__1`，导致运行期 `NoSuchMethodError`。
export default pinia;
