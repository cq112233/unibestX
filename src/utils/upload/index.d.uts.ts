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
export type UploadFileOptions = {
  url?: string;
  filePath: string;
  name?: string;
  header?: UTSJSONObject;
  formData?: UTSJSONObject;
  ignoreAuth?: boolean;
  onProgress?: (progress: number) => void;
};

/**
 * 默认 OSS 上传基础域名与接口路径（支持直接在 .env 中配置 VITE_UPLOAD_BASEURL 与 VITE_UPLOAD_PATH）
 */
export declare const DEFAULT_OSS_BASE_URL: string;

export declare const DEFAULT_OSS_UPLOAD_PATH: string;

export declare const DEFAULT_OSS_UPLOAD_URL: string;

/**
 * 使用 uni.uploadFile 统一封装的文件上传函数（App / 小程序 / H5 全端通用）
 * - 统一原生 uni.uploadFile 底层调用
 * - 支持传入完整 URL 或仅传入相对路径（如 /gateway/... 自动拼接 base URL）
 * - 自动携带 Token（可传 ignoreAuth: true 跳过）
 * - 支持 onProgress 上传进度回调
 * - 严格解析并校验返回值（兼容 code: 200 / "200" / success: true / 各种 url 结构）
 *
 * 使用示例：
 * uni.chooseImage({
 *   count: 1,
 *   success: (res) => {
 *     const filePath = res.tempFilePaths[0] as string;
 *     uploadOssFile(filePath)
 *       .then((url: string) => {
 *         console.log('上传成功 OSS 地址:', url);
 *       })
 *       .catch((err: Error | null) => {
 *         uni.showToast({ title: err?.message ?? '上传失败', icon: 'none' });
 *       });
 *   }
 * });
 */
export declare function uploadFile(options: UploadFileOptions): Promise<string>;

/**
 * 上传 OSS 文件快捷函数
 */
export declare function uploadOssFile(
  filePath: string,
  formData: UTSJSONObject | null = null,
  ignoreAuth: boolean = false
): Promise<string>;

/**
 * 文件上传工具聚合类
 *
 * 集中呈现文件上传相关方法，一目了然；同时支持面向对象式 `upload.xxx()` 调用。
 *
 * @example
 * ```uts
 * // 方式 1：标准具名导入
 * import { uploadFile, uploadOssFile } from '@/src/utils/upload/index.uts';
 *
 * // 方式 2：对象单例导入（一目了然）
 * import { upload } from '@/src/utils/upload/index.uts';
 * upload.uploadOssFile(filePath);
 * ```
 */
export declare class UploadUtils {
  uploadFile(options: UploadFileOptions): Promise<string>;

  uploadOssFile(
    filePath: string,
    formData: UTSJSONObject | null = null,
    ignoreAuth: boolean = false
  ): Promise<string>;
}

/** 上传工具全局单例 */
export declare const upload: UploadUtils;

/** 别名导出 */
export declare const uploadUtils: UploadUtils;

export default upload;
