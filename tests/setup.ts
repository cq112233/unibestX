import * as vue from 'vue';
import { vi } from 'vitest';
import { PAGES_ROUTE_TABLE_JSON } from 'virtual:uni-pages-route-table';
import { setPageMetaJson } from '@/uni_modules/route-bestX/index.uts';

// uni-app X 原生环境将 Vue 核心 API 注入全局作用域
Object.assign(globalThis, vue);

// 初始化页面路由表供单测使用
setPageMetaJson(PAGES_ROUTE_TABLE_JSON);

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

  // 路由完成事件（useRoute 状态源，见 src/router/core/route-state.uts）
  onAppRoute: vi.fn(),
  offAppRoute: vi.fn(),
  addInterceptor: vi.fn(),
  removeInterceptor: vi.fn(),

  // 网络请求方法基础桩
  request: vi.fn((options: any) => {
    if (typeof options?.success === 'function') {
      setTimeout(() => {
        options.success({
          statusCode: 200,
          data: { code: 0, data: null, message: 'ok' },
          header: {},
          errMsg: 'request:ok'
        });
        options.complete?.();
      }, 0);
    }
    return { abort: vi.fn() };
  }),
  uploadFile: vi.fn((_options: any) => {
    return { abort: vi.fn(), onProgressUpdate: vi.fn() };
  }),
  downloadFile: vi.fn((_options: any) => {
    return { abort: vi.fn(), onProgressUpdate: vi.fn() };
  }),

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

/**
 * 真源里嵌套的 JSON 值取出来仍是 UTSJSONObject（带 getString / keys 等方法）；
 * 裸 JS 字面量没有这些方法，取值时补一层包装，否则 `query.getAny(k)` 这类调用会崩。
 * 数组保持原样（`isArray` 判定与 `,` 拼接依赖它）。
 */
function wrapJsonValue(val: any): any {
  if (val == null || typeof val !== 'object' || Array.isArray(val)) {
    return val;
  }
  if (val instanceof MockUTSJSONObject) {
    return val;
  }
  return Object.assign(new MockUTSJSONObject(), val as Record<string, any>);
}

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

  /**
   * 对齐 UTS 真源的两参形式 `getArray<T>(key, defaultValue)`：
   * 字段不是数组（缺失 / 类型不符）时回落默认值 —— 传了默认值时不会返回 null。
   */
  getArray(key: string, defaultValue: any = null) {
    const val = (this as any)[key];
    return Array.isArray(val) ? val : defaultValue;
  }

  /**
   * 对齐 UTS 真源 `UTSJSONObject.getAny(key)`：取任意类型值，字段缺失返回 null。
   * 路由状态模块用 `UTSJSONObject.keys() + getAny()` 遍历 query（见分册 1.14）。
   */
  getAny(key: string) {
    return wrapJsonValue(Object.hasOwn(this, key) ? (this as any)[key] : null);
  }

  /**
   * 对齐 UTS 真源 `UTSJSONObject.getJSON(key)`：取嵌套对象，非对象 / 缺失返回 null。
   * （路由器的 `{ path, query }` 形态靠它取 query 子对象）
   */
  getJSON(key: string) {
    const val = Object.hasOwn(this, key) ? (this as any)[key] : null;
    if (val == null || typeof val !== 'object' || Array.isArray(val)) {
      return null;
    }
    return wrapJsonValue(val);
  }

  /** 对齐 UTS 真源静态方法 `UTSJSONObject.keys(obj)` */
  static keys(obj: any) {
    return obj == null ? [] : Object.keys(obj);
  }

  toMap() {
    return new Map(Object.entries(this));
  }
}
(globalThis as any).UTSJSONObject = MockUTSJSONObject;

/**
 * 真源 `JSON.parseObject` 会把**内层**对象与数组也包成 UTSJSONObject（H5 实现同样深度包装），
 * 所以这里递归包装：否则 `table[key].getString(...)` 这类内层取值在单测里会
 * `getString is not a function`，而真机上是好的（假阴性）。
 * 数组保持数组本身，只包装其中的对象元素 —— `Array.isArray` 判定必须继续成立。
 */
function deepWrapJsonValue(val: any): any {
  if (val == null || typeof val !== 'object') {
    return val;
  }
  if (Array.isArray(val)) {
    return val.map((item: any) => deepWrapJsonValue(item));
  }
  if (val instanceof MockUTSJSONObject) {
    return val;
  }
  const wrapped = new MockUTSJSONObject();
  const entries = Object.entries(val as Record<string, any>);
  for (let i = 0; i < entries.length; i++) {
    (wrapped as any)[entries[i][0]] = deepWrapJsonValue(entries[i][1]);
  }
  return wrapped;
}

if (typeof (JSON as any).parseObject !== 'function') {
  (JSON as any).parseObject = (str: string) => {
    try {
      return deepWrapJsonValue(JSON.parse(str));
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

// Mock uni-app 的组件级页面生命周期：真源要在组件实例上下文里注册，单测里没有实例。
// useRoute() 每次调用都会注册 onPageShow（页面重新显示时回读路由），故必须打桩。
vi.mock('@dcloudio/uni-app', () => ({
  onPageShow: vi.fn(),
  onPageHide: vi.fn(),
  onLoad: vi.fn(),
  onReady: vi.fn()
}));
