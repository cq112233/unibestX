#!/usr/bin/env node
/**
 * 把插件里的纯逻辑 .uts 转成 node 能直接执行的 .ts，并把 harness 自身一起搬进 .build/。
 *
 * 为什么 harness 也要搬：cases.ts / run.ts 里写的是 `./url.ts` 这种相对导入，
 * 只有和生成物同目录才解析得到。所以 .build/ 是**唯一运行目录**：
 *   node scripts/router-guard-test/.build/run.ts
 * 源文件仍手写在 scripts/router-guard-test/ 下，改完重跑本脚本即可。
 *
 * 只处理不碰 uni 全局的模块 —— interceptor.uts 会调 uni.addInterceptor 且有
 * 条件编译强转，不进 harness（由真机回归覆盖）。
 *
 * 转换内容刻意只有一处：相对导入补 .ts 后缀（node ESM 不猜扩展名）。
 * 一旦需要改写语法才能跑，说明这些模块已经不纯了 —— 那正是需要知道的事，
 * 所以遇到条件编译标记直接报错退出。
 */
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const SRC_DIR = path.join(ROOT, 'scripts/router-guard-test');
const OUT = path.join(SRC_DIR, '.build');
const PLUGIN_LIB = path.join(ROOT, 'uni_modules/unix-router-guard/lib');

/** 需要从 .uts 转成 .ts 的插件模块 */
const UTS_SOURCES = ['types.uts', 'url.uts', 'guard.uts'];

/** 原样搬进 .build/ 的 harness 文件 */
const HARNESS_FILES = ['shim.ts', 'cases.ts', 'run.ts'];

let missing = 0;

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'package.json'), JSON.stringify({ type: 'module' }, null, 2));

for (const name of UTS_SOURCES) {
  const file = path.join(PLUGIN_LIB, name);
  if (!fs.existsSync(file)) {
    console.error(`✗ 缺少源文件：${path.relative(ROOT, file)}`);
    missing += 1;
    continue;
  }
  const src = fs.readFileSync(file, 'utf8');
  if (/#\s*(?:ifdef|ifndef|endif)/.test(src)) {
    console.error(`✗ ${name} 里出现了条件编译标记：纯逻辑模块不应有平台分支`);
    process.exitCode = 1;
    continue;
  }
  const out = src.replace(/from '(\.\/[^']+)\.uts'/g, 'from \'$1.ts\'');
  fs.writeFileSync(path.join(OUT, name.replace(/\.uts$/, '.ts')), out);
  console.log(`✓ ${name} → .build/${name.replace(/\.uts$/, '.ts')}`);
}

for (const name of HARNESS_FILES) {
  const file = path.join(SRC_DIR, name);
  if (!fs.existsSync(file)) {
    console.error(`✗ 缺少 harness 文件：${path.relative(ROOT, file)}`);
    missing += 1;
    continue;
  }
  fs.copyFileSync(file, path.join(OUT, name));
  console.log(`✓ ${name} → .build/${name}`);
}

if (missing > 0) {
  console.error(`\n${missing} 个文件缺失，构建中止`);
  process.exitCode = 1;
}
else {
  console.log('\n构建完成，运行：node scripts/router-guard-test/.build/run.ts');
}
