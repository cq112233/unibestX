import { reactive, watch } from 'vue';
import { defineStore } from 'pinia';
import i18n from '@/src/i18n/index.uts';
import { getDefaultLocale } from '@/src/config/env/env.uts';

/**
 * 多语言状态（类型镜像自唯一真源 `../types.uts`）
 *
 * ⚠️ 为什么不 `import type` 那个 `.uts`：见 `src/types/uts-shim.d.ts` 说明（会报 TS2709）。
 */
type II18nState = {
  locale: string;
};

export const useI18nStore = defineStore('i18n', () => {
  const state = reactive<II18nState>({
    locale: getDefaultLocale()
  });

  if (i18n?.global?.locale != null) {
    i18n.global.locale.value = state.locale;
  }

  // 监听持久化还原或手动修改的语言变更，同步更新 i18n 全局响应式语言
  watch(
    () => state.locale,
    (newLocale: string) => {
      if (newLocale.length > 0 && i18n?.global?.locale != null) {
        i18n.global.locale.value = newLocale;
      }
    }
  );

  /**
   * 初始化应用多语言配置（同步当前全局 i18n 语言）
   */
  function initLocale(): void {
    if (i18n?.global?.locale != null) {
      i18n.global.locale.value = state.locale;
    }
  }

  /**
   * 切换当前应用语言，同步更新 vue-i18n 全局响应式语言（持久化由插件自动处理）
   * @param locale 目标语言标识（如 'zh-CN', 'en-US'）
   */
  function setLocale(locale: string): void {
    state.locale = locale;
    if (i18n?.global?.locale != null) {
      i18n.global.locale.value = locale;
    }
  }

  return {
    state,
    setLocale,
    initLocale
  };
}, {
  persist: true
});
