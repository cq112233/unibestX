// ==========================================
// uni_modules 裸模块导入的 TS 侧 ambient 声明（非模块作用域文件）
//
// 【为什么需要这个文件】
// 这些 uni_modules 的入口是 `index.uts`（TS 不认识的扩展名），且其 package.json
// 未声明 types / main，于是下列写法在 VSCode / tsc 下报 TS2307「找不到模块」：
//     import { Request } from '@/uni_modules/lime-request'
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

// ---------- lime-request：底层网络请求库 ----------
// 真源：uni_modules/lime-request/common/index.uts、utssdk/interface.uts
declare module '@/uni_modules/lime-request' {
  export class Request {
    constructor(config: any);
    defaultConfig: any;
    interceptors: any;
    request<_T = any>(config: any): Promise<any>;
    get<_T = any>(url: string, config?: any): Promise<any>;
    head<_T = any>(url: string, config?: any): Promise<any>;
    connect<_T = any>(url: string, config?: any): Promise<any>;
    trace<_T = any>(url: string, config?: any): Promise<any>;
    post<_T = any>(url: string, data?: any, config?: any): Promise<any>;
    put<_T = any>(url: string, data?: any, config?: any): Promise<any>;
    delete<_T = any>(url: string, data?: any, config?: any): Promise<any>;
    options<_T = any>(url: string, data?: any, config?: any): Promise<any>;
    upload(url: string, config?: any): Promise<any>;
    download(url: string, config?: any): Promise<any>;
  }
  export function getRequestFail(error: any): any;
  export type LimeRequestConfig = any;
  export type LimeRequestTask = any;
  export type LimeRequestResponse<_T> = any;
  export type LimeRequestFail = any;
  export type LimeInterceptors<_T, _U> = any;
  export type LimeeRequestRejected = any;
  export type LimeRequestSource = any;
}

// ---------- lime-i18n ----------
// 真源：uni_modules/lime-i18n/common/index.uts
declare module '@/uni_modules/lime-i18n' {
  export function createI18n(options?: any): any;
  export function useI18n(options?: any): any;
}

// ---------- lime-dayuts ----------
// 真源：uni_modules/lime-dayuts/index.ts
declare module '@/uni_modules/lime-dayuts' {
  export function dayuts(...args: any[]): any;
}

// ---------- unix-Bignumber ----------
// 真源：uni_modules/unix-Bignumber/index.uts
// 说明：入参与返回值类型在真源里多为 `any`（对应 bignumber.js 的宽松签名），
// 这里如实照抄，避免 TS 侧宣称比真源更严格的类型。
declare module '@/uni_modules/unix-Bignumber' {
  export const ROUND_UP: number;
  export const ROUND_DOWN: number;
  export const ROUND_CEIL: number;
  export const ROUND_FLOOR: number;
  export const ROUND_HALF_UP: number;
  export const ROUND_HALF_DOWN: number;
  export const ROUND_HALF_EVEN: number;
  export const ROUND_HALF_CEIL: number;
  export const ROUND_HALF_FLOOR: number;
  export const MODULO_MODE_DOWN: number;
  export const MODULO_MODE_EUCLID: number;

  export type BigNumberFormat = any;
  export type BigNumberFormatInput = any;
  export type BigNumberConfigInput = any;
  export type BigNumberConfigOutput = any;

  export function config(cfg: any): any;
  export function getConfig(): any;

  export class BigNumber {
    constructor(value: any, base?: number);
    plus(value: any): BigNumber;
    minus(value: any): BigNumber;
    multipliedBy(value: any): BigNumber;
    dividedBy(value: any): BigNumber;
    dividedToIntegerBy(value: any): BigNumber;
    modulo(value: any): BigNumber;
    exponentiatedBy(value: any, modulus?: any): BigNumber;
    sqrt(): BigNumber;
    comparedTo(value: any): any;
    isEqualTo(value: any): boolean;
    isGreaterThan(value: any): boolean;
    isGreaterThanOrEqualTo(value: any): boolean;
    isLessThan(value: any): boolean;
    isLessThanOrEqualTo(value: any): boolean;
    isFinite(): boolean;
    isInteger(): boolean;
    isNaN(): boolean;
    isNegative(): boolean;
    isPositive(): boolean;
    isZero(): boolean;
    absoluteValue(): BigNumber;
    negated(): BigNumber;
    integerValue(rm?: number): BigNumber;
    decimalPlaces(dp?: number, rm?: number): any;
    sd(significantDigits?: any, rm?: any): any;
    precision(significantDigits?: any, rm?: any): any;
    shiftedBy(places: number): BigNumber;
    toString(base?: number): string;
    toFixed(dp?: number, rm?: number): string;
    toFormat(dp?: number, rm?: number, format?: any): string;
    toNumber(): number;
    toJSON(): string;
    valueOf(): string;
    times(value: any): BigNumber;
    div(value: any): BigNumber;
    idiv(value: any): BigNumber;
    mod(value: any): BigNumber;
    pow(value: any, modulus?: any): BigNumber;
    eq(value: any): boolean;
    gt(value: any): boolean;
    gte(value: any): boolean;
    lt(value: any): boolean;
    lte(value: any): boolean;
    abs(): BigNumber;
    static isBigNumber(value: any): boolean;
    static config(cfg: any): any;
    static getConfig(): any;
    static of(value: any, base?: number): BigNumber;
  }
}

// ---------- unix-crypto ----------
// 真源：uni_modules/unix-crypto/index.uts
declare module '@/uni_modules/unix-crypto' {
  export function base64Encode(text: string): Promise<string>;
  export function base64Decode(base64: string): Promise<string>;
  export function md5(text: string): Promise<string>;
  export function sha256(text: string): Promise<string>;
  export function hmacSha1(text: string, key: string): Promise<string>;
  export function aesEncrypt(text: string, key: string): Promise<string>;
  export function aesDecrypt(hex: string, key: string): Promise<string>;
  export function desEncrypt(text: string, key: string): Promise<string>;
  export function desDecrypt(hex: string, key: string): Promise<string>;
  export function rsaGenerateKeyPair(bits: number): Promise<string>;
  export function rsaEncrypt(text: string, publicKey: string): Promise<string>;
  export function rsaDecrypt(hex: string, privateKey: string): Promise<string>;
  export function rsaSign(text: string, privateKey: string, hashType: string): Promise<string>;
  export function rsaVerify(text: string, publicKey: string, sigHex: string, hashType: string): Promise<boolean>;
  export function generateUUID(): string;
  export function uuid(): string;
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
