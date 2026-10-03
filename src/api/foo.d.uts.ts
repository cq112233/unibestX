/**
 * 本文件由 `scripts/gen-uts-dts.mjs` 自动生成，请勿手工编辑。
 *
 * 它声明 `./foo.uts` 的导出面，供 TS / IDE 解析类型与补全。
 * tsconfig 的 `allowArbitraryExtensions` 把 `./foo.uts` 解析到同目录的
 * `foo.d.uts.ts`，因此本文件必须与 `foo.uts` **同目录同名**，不能挪走。
 *
 * 修改 `foo.uts` 的导出后，重新执行：node scripts/gen-uts-dts.mjs
 * 校验是否已同步：node scripts/gen-uts-dts.mjs --check
 */
/**
 * Foo 接口入口（遵循 unibestX-skill 规范）
 * 推荐引用规范路径：@/src/api/foo/foo.uts
 */
export {
  createFoo,
  deleteFoo,
  fetchFooById,
  fetchFooList,
  fetchFooRemote,
  foo,
  FOO_UPLOAD_PATH,
  getFooById,
  getFooList,
  updateFoo,
  uploadFooFile
} from './foo/foo.uts';

export type { FooItem, FooPageResult, FooQuery, IFoo, IFooList } from './foo/types.uts';
