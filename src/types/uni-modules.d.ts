// ==========================================
// uni_modules 裸模块导入的 TS 侧 ambient 声明（非模块作用域文件）
//
// 【为什么需要这个文件】
// 这些 uni_modules 的入口是 `index.uts`（TS 不认识的扩展名），且其 package.json
// 未声明 types / main，于是下列写法在 VSCode / tsc 下报 TS2307「找不到模块」：
//     import { SomeModule } from '@/uni_modules/some-module'
// 项目原靠每个 .uts 配套的 `<name>.d.uts.ts` 间接解决（allowArbitraryExtensions），
// 该机制已按决策整体移除，故在此补回等价声明。
//
// 【为什么不能写进 src/types/uni.d.ts】
// 该文件末尾有 `export {}`，属「模块作用域」，其中的 `declare module` 会被 TS
// 当作「模块增强」而非「环境声明」，对**不存在的模块**完全无效。实测：uni.d.ts
// 里既有的 `declare module '@/src/router'`、`declare module '*.uvue'` 均已失效
// （`@/src/router` 与 `*.uvue` 导入仍报 TS2307）。故 ambient 声明必须落在本文件
// 这类「非模块作用域」的 .d.ts 中。
//
// 【代价（已知并接受）】
// 声明为 any 的成员在 VSCode / tsc 下无类型与补全；HBuilderX 真机编译不受影响
// （走其自带的 uni-app x 解析，不读本文件）。
//
// ⚠️ 本文件必须保持「非模块作用域」（禁止出现顶层 import / export），
// 否则 `declare module` 会被当作模块增强而失效。
// ==========================================

// ---------- .uvue 单文件组件通配 ----------
// uni.d.ts 中的同名声明因模块作用域而失效（见上），此处补齐。
declare module '*.uvue' {
  const component: any;
  export default component;
}

// ---------- lime-dayuts ----------
// 真源：uni_modules/lime-dayuts/index.ts
declare module '@/uni_modules/lime-dayuts' {
  export function dayuts(...args: any[]): any;
}

// ---------- x-pinia-s：uni-app-x 严格类型版 Pinia ----------
// 真源：uni_modules/x-pinia-s/index.uts、instans/storeBase.uts、instans/defineStore.uts
declare module '@/uni_modules/x-pinia-s' {
  export class PiniaStoreBase {
    $id: string;
    constructor();
    protected bindState(state: any): void;
    _doReset(): void;
    _hydrate(data: any): void;
    _serialize(): any;
    $patch(partial: any): void;
    $reset(): void;
    $subscribe(cb: any): any;
    $onAction(cb: any): any;
    $dispose(): void;
  }
  export function defineStore<T>(id: string, factory: () => T): () => T;
  export function createPinia(): any;
  export function setActivePinia(pinia: any): void;
  export function getActivePinia(): any;
  export function createPersistPlugin(opts?: any): any;
  export function clearPersistedState(): void;
  export type PersistOptions = any;
  export type PersistSerializer = any;
  export type IPinia = any;
  export type PiniaPlugin = any;
  export type PiniaPluginContext = any;
}

// ---------- x-pinia-s 的子路径类型（以显式 .uts 路径导入，通配声明会降级为命名空间） ----------
// 真源：uni_modules/x-pinia-s/instans/types.uts
declare module '@/uni_modules/x-pinia-s/instans/types.uts' {
  export type PersistOptions = any;
  export type PersistSerializer = any;
}

// ---------- z-paging-x 组件实例类型（<z-paging-x ref="pagingX"> 中 ref 的类型） ----------
// 真源：uni_modules/z-paging-x/components/z-paging-x/types/index.uts 的 ZPagingXInstance
type ZPagingXComponentPublicInstance = import('vue').ComponentPublicInstance & {
  reload: () => void;
  refresh: () => void;
  complete: (data: any[] | null) => void;
  completeByTotal: (data: any[] | null, total: number) => void;
  completeByNoMore: (data: any[] | null, nomore: boolean) => void;
  completeByError: () => void;
  endRefresh: () => void;
  clear: () => void;
  scrollToTop: (animate: boolean) => void;
  scrollToBottom: (animate: boolean) => void;
  scrollToY: (y: number, animate: boolean) => void;
};
