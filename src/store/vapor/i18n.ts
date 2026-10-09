import { reactive, watch } from 'vue';
import { defineStore } from 'pinia';
import i18n from '@/src/i18n/index.uts';
import { getDefaultLocale } from '@/src/config/env/env.uts';
import type { II18nState } from '../types.d.uts';

function getStoredI18nState(): Partial<II18nState> | null {
  try {
    const raw = uni.getStorageSync('pinia:i18n');
    if (raw != null && typeof raw === 'string' && raw !== '') {
      const parsed = JSON.parse(raw);
      return (parsed?.state ?? parsed) as Partial<II18nState>;
    }
  }
  catch {
    // ignore
  }
  return null;
}

export const useI18nStore = defineStore('i18n', () => {
  const stored = getStoredI18nState();

  const state = reactive<II18nState>({
    locale: stored?.locale ?? getDefaultLocale()
  });

  if (i18n?.global?.locale != null) {
    i18n.global.locale.value = state.locale;
  }

  watch(
    () => state.locale,
    (newLocale: string) => {
      if (newLocale.length > 0 && i18n?.global?.locale != null) {
        i18n.global.locale.value = newLocale;
      }
    }
  );

  /**
   * 切换当前应用语言，同步更新 vue-i18n 全局响应式语言及本地持久化配置
   * @param locale 目标语言标识（如 'zh-Hans', 'en'）
   */
  function setLocale(locale: string): void {
    state.locale = locale;
    if (i18n?.global?.locale != null) {
      i18n.global.locale.value = locale;
    }
  }

  return {
    state,
    setLocale
  };
}, {
  persist: true
});
