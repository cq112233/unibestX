import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { themeColor } from '@/src/tabbar/helper';
import i18n from '@/src/i18n/index.uts';
import {
  applyThemeColor,
  applyThemeMode,
  getDefaultTheme,
  getSystemTheme,
  isDarkMode
} from '@/src/utils/theme.uts';
import { getDefaultLocale } from '@/src/utils/env.uts';

// ==========================================
// 类型定义
// ==========================================

export type IAppState = {
  theme: string;
  locale: string;
  themeMode: string; // 'auto'（跟随系统）| 'light' | 'dark'
  isDark: boolean; // 实际生效的亮/暗
  mode: string; // 当前 Store 实现模式：'vapor'（官方 Pinia）| 'vdom'（x-pinia-s）
};

export const useAppStore = defineStore('app', () => {
  // 1. 响应式状态（与 x-pinia-s 的 state 结构完全一致，保证双向兼容）
  const state = reactive<IAppState>({
    theme: getDefaultTheme(),
    locale: getDefaultLocale(),
    themeMode: 'auto',
    isDark: isDarkMode('auto'),
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
