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
 * 核心特性条目
 */
export type FeatureItem = {
  id: number;
  title: string;
  desc: string;
  icon: string;
  tag?: string | null;
};

/**
 * 模板简介元数据
 */
export type TemplateMeta = {
  title: string;
  author: string;
  badge: string;
  description: string;
};
