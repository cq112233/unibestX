import { reactive, watch } from 'vue';
import { defineStore } from 'pinia';
import i18n from '@/src/i18n/index.uts';
import { getDefaultLocale } from '@/src/config/env/env.uts';
import type { II18nState } from '../types.d.uts';

function getStoredI18nState(): Partial<II18nState> | null {
  try {
    const raw = uni.getStorageSync('pinia:i18n');
    if (raw != null) {
      const rawStr = `${raw}`;
      if (rawStr.length > 0 && rawStr !== 'null' && rawStr !== 'undefined') {
        const parsed = JSON.parse(rawStr);
        const res = (parsed?.state ?? parsed) as Partial<II18nState>;
        if (res?.locale && res.locale !== 'null' && res.locale !== 'undefined') {
          return res;
        }
      }
    }
    const limeRaw = uni.getStorageSync('uVueI18nLocale');
    if (limeRaw != null) {
      const limeStr = `${limeRaw}`;
      if (limeStr.length > 0 && limeStr !== 'null' && limeStr !== 'undefined') {
        return { locale: limeStr };
      }
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
   * 初始化应用多语言配置（从持久化存储恢复并同步设置 全局 i18n 语言）
   */
  function initLocale(): void {
    const storedState = getStoredI18nState();
    if (storedState?.locale && storedState.locale !== 'null' && storedState.locale !== 'undefined') {
      state.locale = storedState.locale;
    }
    if (i18n?.global?.locale != null) {
      i18n.global.locale.value = state.locale;
    }
  }

  /**
   * 切换当前应用语言，同步更新 vue-i18n 全局响应式语言及本地持久化配置
   * @param locale 目标语言标识（如 'zh-Hans', 'en'）
   */
  function setLocale(locale: string): void {
    state.locale = locale;
    if (i18n?.global?.locale != null) {
      i18n.global.locale.value = locale;
    }
    try {
      uni.setStorageSync('pinia:i18n', JSON.stringify({ state }));
      uni.setStorageSync('uVueI18nLocale', locale);
    }
    catch {
      // ignore
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
