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

class MockUTSJSONObject extends Object {
  get(key: string) {
    return (this as any)[key];
  }

  getNumber(key: string) {
    const val = (this as any)[key];
    return typeof val === 'number' ? val : null;
  }

  getString(key: string) {
    const val = (this as any)[key];
    return typeof val === 'string' ? val : null;
  }

  getBoolean(key: string) {
    const val = (this as any)[key];
    return typeof val === 'boolean' ? val : null;
  }

  toMap() {
    return new Map(Object.entries(this));
  }
}
(globalThis as any).UTSJSONObject = MockUTSJSONObject;

if (typeof (JSON as any).parseObject !== 'function') {
  (JSON as any).parseObject = (str: string) => {
    try {
      const obj = JSON.parse(str);
      return Object.assign(new MockUTSJSONObject(), obj);
    }
    catch {
      return null;
    }
  };
}

// Mock i18n 避免 lime-i18n 原生 UTS 宏在 Vitest 纯 JS 模拟环境中执行报错
const mockI18n = {
  global: {
    locale: { value: 'zh-Hans' },
    t: (key: string) => key
  }
};
vi.mock('@/src/i18n', () => ({
  default: mockI18n,
  i18n: mockI18n,
  t: (key: string) => key,
  getLocale: () => 'zh-Hans',
  setLocale: vi.fn()
}));
