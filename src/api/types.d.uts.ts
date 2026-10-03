/**
 * 本文件由 `scripts/gen-uts-dts.mjs` 自动生成，请勿手工编辑。
 *
 * 它声明 `./types.uts` 的导出面，供 TS / IDE 解析类型与补全。
 * tsconfig 的 `allowArbitraryExtensions` 把 `./types.uts` 解析到同目录的
 * `types.d.uts.ts`，因此本文件必须与 `types.uts` **同目录同名**，不能挪走。
 *
 * 修改 `types.uts` 的导出后，重新执行：node scripts/gen-uts-dts.mjs
 * 校验是否已同步：node scripts/gen-uts-dts.mjs --check
 */
/**
 * 通用分页返回容器
 */
export type PageResult<T> = {
  list: Array<T>;
  hasMore: boolean;
  total: number;
};

/**
 * 通用分页查询参数
 */
export type PageQuery = {
  pageNo?: number;
  pageSize?: number;
  keyword?: string | null;
};
