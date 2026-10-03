import * as vue from 'vue';
import { vi } from 'vitest';

// uni-app X 原生环境将 Vue 核心 API 注入全局作用域
Object.assign(globalThis, vue);

// ========================================================
// uni-app X 跨端环境全局 Mock
// ========================================================

const storage = new Map<string, any>();

const mockUni: any = {
  getStorageSync: vi.fn((key: string) => storage.get(key) ?? null),
  setStorageSync: vi.fn((key: string, value: any) => storage.set(key, value)),
  removeStorageSync: vi.fn((key: string) => storage.delete(key)),
  clearStorageSync: vi.fn(() => storage.clear()),

  showToast: vi.fn(),
  hideToast: vi.fn(),
  showLoading: vi.fn(),
  hideLoading: vi.fn(),

  navigateBack: vi.fn(),
  navigateTo: vi.fn(),
  redirectTo: vi.fn(),
  reLaunch: vi.fn(),
  switchTab: vi.fn(),

  getWindowInfo: vi.fn(() => ({
    windowWidth: 375,
    windowHeight: 812,
    statusBarHeight: 44,
    screenHeight: 812,
    screenWidth: 375,
    safeArea: {
      left: 0,
      right: 375,
      top: 44,
      bottom: 778,
      width: 375,
      height: 734
    },
    safeAreaInsets: {
      top: 44,
      bottom: 34,
      left: 0,
      right: 0
    }
  })),

  getSystemInfoSync: vi.fn(() => ({
    platform: 'devtools',
    osName: 'ios',
    pixelRatio: 2,
    windowWidth: 375,
    windowHeight: 812,
    statusBarHeight: 44
  }))
};

// 挂载全局 uni 与 getCurrentPages
(globalThis as any).uni = mockUni;
(globalThis as any).getCurrentPages = vi.fn(() => []);
