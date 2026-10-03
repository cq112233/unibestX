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
 * Foo 实体数据结构
 */
export type FooItem = {
  id: number;
  name: string;
  desc: string;
};

/**
 * Foo 列表查询参数
 */
export type FooQuery = {
  name?: string | null;
  pageNo?: number;
  pageSize?: number;
};

/**
 * Foo 分页容器
 */
export type FooPageResult = PageResult<FooItem>;

/**
 * 历史类型别名兼容
 */
export type IFoo = FooItem;

export type IFooList = FooPageResult;
