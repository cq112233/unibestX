import { reactive, watch } from 'vue';
import { defineStore } from 'pinia';
import i18n from '@/src/i18n/index.uts';
import {
  applyThemeColor,
  applyThemeMode,
  getDefaultTheme,
  getSystemTheme,
  isDarkMode,
  themeColor
} from '@/src/utils/theme/index.uts';
import { getDefaultLocale } from '@/src/utils/env/index.uts';
// 类型统一来自 src/store/types.uts（唯一真源），本文件严禁再 export type 同名类型
import type { IAppState } from '../types.uts';

/**
 * 启动时同步预读一次本地持久化数据，使初始状态直接命中用户配置，彻底消除启动闪烁与默认值覆盖
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

export const useAppStore = defineStore('app', () => {
  const stored = getStoredAppState();

  // 1. 响应式状态（优先使用本地已持久化的状态，未配置时使用环境默认值）
  const state = reactive<IAppState>({
    theme: stored?.theme ?? getDefaultTheme(),
    locale: stored?.locale ?? getDefaultLocale(),
    themeMode: stored?.themeMode ?? 'auto',
    isDark: stored?.isDark ?? isDarkMode(stored?.themeMode ?? 'auto'),
    mode: 'vapor'
  });

  let _themeModeInited = false;

  // 2. 初始化全局样式与主题色
  themeColor.value = state.theme;
  applyThemeColor(state.theme);
  applyThemeMode(state.themeMode, state.isDark);
  if (i18n?.global?.locale != null) {
    i18n.global.locale.value = state.locale;
  }

  // 监听 state.theme 变化，自动同步全局 themeColor 与运行环境 CSS 变量（涵盖持久化还原与动态切换）
  watch(
    () => state.theme,
    (newTheme: string) => {
      if (newTheme.length > 0) {
        themeColor.value = newTheme;
        applyThemeColor(newTheme);
      }
    }
  );

  // 监听 state.locale 变化，自动同步 i18n
  watch(
    () => state.locale,
    (newLocale: string) => {
      if (newLocale.length > 0 && i18n?.global?.locale != null) {
        i18n.global.locale.value = newLocale;
      }
    }
  );

  // ==========================================
  // Actions
  // ==========================================

  function setTheme(theme: string): void {
    state.theme = theme;
    themeColor.value = theme;
    applyThemeColor(theme);
  }

  function refreshIsDark(): void {
    const mode = state.themeMode;
    if (mode == 'light') {
      state.isDark = false;
    }
    else if (mode == 'dark') {
      state.isDark = true;
    }
    else {
      state.isDark = getSystemTheme() == 'dark';
    }
    applyThemeMode(mode, state.isDark);
  }

  function setThemeMode(mode: string): void {
    state.themeMode = mode;
    // #ifdef APP
    uni.setAppTheme({ theme: mode as 'light' | 'dark' | 'auto' });
    // #endif
    refreshIsDark();
  }

  function initThemeMode(): void {
    if (!_themeModeInited) {
      _themeModeInited = true;

      // #ifdef APP
      uni.onAppThemeChange((res: AppThemeChangeResult) => {
        if (state.themeMode != 'auto') {
          state.isDark = res.appTheme == 'dark';
        }
      });
      uni.onOsThemeChange((res: OsThemeChangeResult) => {
        if (state.themeMode == 'auto') {
          state.isDark = res.osTheme == 'dark';
        }
      });
      // #endif

      // #ifdef H5
      if (typeof window !== 'undefined' && window.matchMedia != null) {
        const darkMql = window.matchMedia('(prefers-color-scheme: dark)');
        darkMql.addEventListener('change', () => {
          if (state.themeMode == 'auto') {
            refreshIsDark();
          }
        });
      }
      // #endif

      // #ifndef APP
      // #ifndef H5
      uni.onHostThemeChange((_res: OnHostThemeChangeCallbackResult) => {
        if (state.themeMode == 'auto') {
          refreshIsDark();
        }
      });
      // #endif
      // #endif
    }

    // #ifdef APP
    uni.setAppTheme({ theme: state.themeMode as 'light' | 'dark' | 'auto' });
    // #endif

    refreshIsDark();
  }

  function setLocale(locale: string): void {
    state.locale = locale;
    if (i18n?.global?.locale != null) {
      i18n.global.locale.value = locale;
    }
  }

  return {
    state,
    setTheme,
    initThemeMode,
    setThemeMode,
    refreshIsDark,
    setLocale
  };
}, {
  persist: true
});
