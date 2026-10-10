import { reactive, watch } from 'vue';
import { defineStore } from 'pinia';
import {
  applyThemeColor,
  applyThemeMode,
  getDefaultTheme,
  getDefaultThemeMode,
  getSystemTheme,
  isDarkMode,
  themeColor
} from '@/src/theme/index.uts';
import type { IThemeState } from '../types.d.uts';

export const useThemeStore = defineStore('theme', () => {
  const defaultMode = getDefaultThemeMode();

  // 1. 响应式状态（由 pinia-plugin-persistedstate 自动从 Storage 恢复与持久化）
  const state = reactive<IThemeState>({
    theme: getDefaultTheme(),
    themeMode: defaultMode,
    isDark: isDarkMode(defaultMode)
  });

  let _themeModeInited = false;

  // 2. 初始化全局样式与主题色
  themeColor.value = state.theme;
  applyThemeColor(state.theme);
  applyThemeMode(state.themeMode, state.isDark);

  // 3. 监听 state.theme 变化，自动更新 themeColor ref 与 H5/原生 CSS 变量
  watch(
    () => state.theme,
    (newTheme: string) => {
      themeColor.value = newTheme;
      applyThemeColor(newTheme);
    }
  );

  // 4. 监听 themeMode 与 isDark 变化，自动应用外观
  watch(
    () => [state.themeMode, state.isDark] as const,
    ([newMode, newIsDark]) => {
      applyThemeMode(newMode, newIsDark);
    }
  );

  /**
   * 重新计算并应用深浅色状态（在外观模式切换或系统深色模式发生变化时调用）
   */
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

  /**
   * 切换品牌主题色（如海蓝色、翡翠绿、紫罗兰等），同步更新全局 CSS 变量与响应式引用
   * @param theme 目标主题色名（如 'theme-blue'）
   */
  function setTheme(theme: string): void {
    state.theme = theme;
    themeColor.value = theme;
    applyThemeColor(theme);
  }

  /**
   * 切换外观显示模式，支持跟随系统、强制浅色或强制暗黑
   * @param mode 外观模式：'auto'（跟随系统）| 'light'（浅色）| 'dark'（暗黑）
   */
  function setThemeMode(mode: string): void {
    state.themeMode = mode;
    // #ifdef APP
    uni.setAppTheme({ theme: mode as 'light' | 'dark' | 'auto' });
    // #endif
    refreshIsDark();
  }

  /**
   * 初始化外观模式监听器，监听操作系统、应用或宿主环境的深浅色变化事件并自动同步
   */
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
      if (typeof (uni as any).onHostThemeChange === 'function') {
        (uni as any).onHostThemeChange((_res: any) => {
          if (state.themeMode == 'auto') {
            refreshIsDark();
          }
        });
      }
      // #endif
      // #endif
    }

    // 重新应用外观
    refreshIsDark();
    // #ifdef APP
    uni.setAppTheme({ theme: state.themeMode as 'light' | 'dark' | 'auto' });
    // #endif
  }

  return {
    state,
    setTheme,
    initThemeMode,
    setThemeMode,
    refreshIsDark
  };
}, {
  persist: true
});
