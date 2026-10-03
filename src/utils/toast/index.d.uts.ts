/**
 * 本文件由 `scripts/gen-uts-dts.mjs` 自动生成，请勿手工编辑。
 *
 * 它声明 `./index.uts` 的导出面，供 TS / IDE 解析类型与补全。
 * tsconfig 的 `allowArbitraryExtensions` 把 `./index.uts` 解析到同目录的
 * `index.d.uts.ts`，因此本文件必须与 `index.uts` **同目录同名**，不能挪走。
 *
 * 修改 `index.uts` 的导出后，重新执行：node scripts/gen-uts-dts.mjs
 * 校验是否已同步：node scripts/gen-uts-dts.mjs --check
 */
/**
 * 调用全局 Toast 提示
 */
export declare function showToast(options: UTSJSONObject): void;

/**
 * 快捷调用 toast
 */
export declare function toast(message: string, _type: string = 'default'): void;

export declare function toastSuccess(message: string): void;

export declare function toastError(message: string): void;

export declare function toastWarning(message: string): void;

export declare function toastPrimary(message: string): void;

/**
 * 消息提示工具聚合类
 *
 * 集中呈现各类 Toast 提示方法，一目了然；同时支持面向对象式 `toastUtils.xxx()` 调用。
 *
 * @example
 * ```uts
 * // 方式 1：标准具名导入
 * import { toast, toastSuccess, toastError } from '@/src/utils/toast/index.uts';
 *
 * // 方式 2：对象单例导入（一目了然）
 * import { toastUtils } from '@/src/utils/toast/index.uts';
 * toastUtils.success('操作成功');
 * ```
 */
export declare class ToastUtils {
  showToast(options: UTSJSONObject): void;

  toast(message: string, type: string = 'default'): void;

  info(message: string): void;

  success(message: string): void;

  error(message: string): void;

  warning(message: string): void;

  primary(message: string): void;
}

/** 消息提示工具全局单例 */
export declare const toastUtils: ToastUtils;

export default toastUtils;
