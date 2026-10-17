import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { buildPages, collectStagesFromPlugins, mergePagesJson } from '../../../plugins/vite-plugin-uni-pages';
import uniPagesRouteMetaPlugin, { ROUTE_META_FILE } from '../../../plugins/vite-plugin-uni-pages-route-meta';
import uniPagesSandboxPlugin from '../../../plugins/vite-plugin-uni-pages-sandbox';
import uniPagesTabbarPlugin from '../../../plugins/vite-plugin-uni-pages-tabbar';

/**
 * 四插件拆分的逐字节回归：证明「拆成核心 + 三个独立卫星插件」没有改变任何生成产物。
 *
 * 为什么必须在这里验：`pages.json` 与 `page-meta.uts` 都是运行时的关键输入（前者是路由表、后者是
 * `useRoute().meta / .name` 的唯一数据源），任何一处键序漂移、字段丢失都只会在运行时静默出错。
 *
 * 基准取自 `git show HEAD:` 而非工作区 —— 只要有 dev server 在跑，工作区产物就是「当前插件代码刚
 * 写出来的」，拿它当基准等于对着自己比对。
 *
 * 本测试直接驱动纯 `buildPages()` seam（不落盘 pages.json、不回写 pages.config.json），因此不会污染仓库。
 */

const ROOT = process.cwd();
const OPTIONS = {
  enabled: true,
  dir: 'src/pages',
  subPackages: ['src/sub'],
  exclude: ['**/components/**/*.*', '**/views/**/*.*'],
  outFile: 'pages.json',
  configFile: 'pages.config.json',
  homePage: ''
};

/** 受控环境变量：测试期间清空，让插件去读 .env（与生成基准时的口径一致） */
const CONTROLLED_ENV_KEYS = [
  'VITE_TABBAR_MODE',
  'VITE_DEV_SANDBOX',
  'VITE_DEV_SINGLE_PAGE',
  'VITE_DEV_SANDBOX_PAGES',
  'VITE_DEV_SINGLE_PATH'
];

let savedEnv: Record<string, string | undefined> = {};
const tmpRoots: string[] = [];

function gitShow(rel: string): string {
  return execFileSync('git', ['show', `HEAD:${rel}`], { cwd: ROOT, encoding: 'utf-8' });
}

function allPlugins(): any[] {
  return [uniPagesSandboxPlugin(), uniPagesTabbarPlugin(), uniPagesRouteMetaPlugin()];
}

beforeEach(() => {
  savedEnv = {};
  for (const key of CONTROLLED_ENV_KEYS) {
    savedEnv[key] = process.env[key];
    delete process.env[key];
  }
});

afterEach(() => {
  for (const key of CONTROLLED_ENV_KEYS) {
    if (savedEnv[key] === undefined) {
      delete process.env[key];
    }
    else {
      process.env[key] = savedEnv[key];
    }
  }
  for (const dir of tmpRoots.splice(0)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe('uni-pages 四插件拆分逐字节回归', () => {
  it('能从插件数组里发现三个卫星阶段并按 order 升序', () => {
    const stages = collectStagesFromPlugins(allPlugins());
    expect(stages.map(s => s.name)).toEqual([
      'uni-pages:sandbox',
      'uni-pages:tabbar',
      'uni-pages:route-meta'
    ]);
  });

  it('pages.json 与 HEAD 逐字节一致（沙盒/非沙盒默认口径）', async () => {
    // pages.json 的对比只需要 core + sandbox + tabbar（route-meta 会落盘，单独验）
    const stages = collectStagesFromPlugins(allPlugins()).filter(s => s.name !== 'uni-pages:route-meta');
    const state = await buildPages(OPTIONS, { root: ROOT, isProduction: false }, stages);
    expect(state).not.toBeNull();

    const baseline = gitShow('pages.json');
    const ours = mergePagesJson(baseline, state!.output, 'H5', false, ['APP']);
    expect(ours).toBe(baseline);
  });

  it('page-meta.uts 与 HEAD 一致（仅来源标注行允许不同）', async () => {
    const stages = collectStagesFromPlugins(allPlugins()).filter(s => s.name !== 'uni-pages:route-meta');
    const state = await buildPages(OPTIONS, { root: ROOT, isProduction: false }, stages);
    expect(state).not.toBeNull();

    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'uni-pages-golden-'));
    tmpRoots.push(dir);
    fs.writeFileSync(path.join(dir, 'pages.json'), gitShow('pages.json'), 'utf-8');

    // 直接驱动 route-meta 阶段，并模拟真实流水线口径：该阶段运行时核心尚未把
    // scannedSubPkgs 挂到 output.subPackages（finalize 在 stages 之后），因此这里刻意只给 pages。
    const routeMetaStage = collectStagesFromPlugins([uniPagesRouteMetaPlugin()])[0];
    routeMetaStage.run(
      { ...state!, root: dir, output: { pages: state!.output.pages } } as any,
      { root: dir, isProduction: false }
    );
    const ours = fs.readFileSync(path.join(dir, ROUTE_META_FILE), 'utf-8');

    const stripOrigin = (s: string): string =>
      s.split('\n').filter(l => !l.includes('本文件由')).join('\n');

    expect(stripOrigin(ours)).toBe(stripOrigin(gitShow('src/router/generated/page-meta.uts')));
  });
});
