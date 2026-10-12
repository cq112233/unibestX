// ==========================================
// .uts 模块的 TS 侧兜底声明（非模块作用域文件）
//
// 【为什么需要这个文件】
// 项目原先为每个「被 .ts / .uvue 以字面 `xxx.uts` 路径导入」的 .uts 配套一份
// 同目录同名的 `<name>.d.uts.ts`（由 scripts/gen-uts-dts.mjs 生成），
// 配合 tsconfig 的 `allowArbitraryExtensions` 让 TS 能解析这些 .uts 模块。
//
// 该机制已按决策整体移除（连同生成脚本与 CI 校验步骤），于是 `.ts` / 测试里
// `import ... from 'xxx.uts'` 会一律报 TS2307「Cannot find module」。
// 下面这条通配声明负责恢复「模块可解析」这一最低前提。
//
// 【代价（已知并接受）】
// 通配声明是 shorthand（无 body）形式，模块内所有导出在 TS 侧均为 `any`：
//   1. 这些 .uts 的导出在 VSCode / tsc 下没有类型与补全；
//   2. ⚠️ **不能用 `import type` 引入它们再当类型使用**，否则报
//      TS2709「Cannot use namespace 'X' as a type」—— 需要类型时请在
//      消费方写显式类型标注（见 src/store/vapor/*.ts 与 tests/ 的写法）。
// HBuilderX 真机编译不受影响：它走自带的 uni-app x 解析，不读本文件。
//
// ⚠️ 本文件必须保持「非模块作用域」（禁止出现顶层 import / export），
// 否则 `declare module` 会被当作模块增强而失效。
// ==========================================

declare module '*.uts';
