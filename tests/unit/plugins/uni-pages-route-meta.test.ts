import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { transformWithEsbuild } from 'vite';
import { afterAll, describe, expect, it } from 'vitest';
import { ROUTE_META_FILE, writeRouteMetaFile } from '../../../plugins/vite-plugin-uni-pages-route-meta';

/**
 * 路由元信息表生成器行为验证
 *
 * 为什么必须在这里验：这张表是 `useRoute().meta / .name` 的唯一数据源，而它的产物是一个
 * **手拼出来的 .uts 字符串字面量**。路径口径写错（少前导斜杠 / 多一个重复斜杠）、分包 root
 * 忘了拼前缀、转义漏了一类字符 —— 这些在编译期全都不会报错，只会让运行时的 meta 静默错位、
 * 或者整表 `JSON.parseObject` 直接失败退化成空表。
 *
 * 反面同样要守住：内容一致时**不能重写文件**，否则每次扫描都触发一次无谓的文件变更 +
 * 开发服务器全量热重载。
 */

const tmpRoots: string[] = [];

/** 在临时目录里跑一次生成，返回目录、生成文件路径与文件原文 */
function generate(output: Record<string, any>): { dir: string; file: string; source: string } {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'uni-pages-route-meta-'));
  tmpRoots.push(dir);
  writeRouteMetaFile(output, dir);
  const file = path.join(dir, ROUTE_META_FILE);
  return { dir, file, source: fs.readFileSync(file, 'utf-8') };
}

/**
 * 把生成的字面量还原成字符串：
 * 生成器只转义 `\` 与 `'`（见 vite-plugin-uni-pages-route-meta.ts 的注释），所以去掉一层转义即可。
 * 转义若漏了一类字符，还原结果就不再是合法 JSON，下面的 JSON.parse 会直接失败。
 */
function literalToString(literal: string): string {
  return literal.slice(1, -1).replace(/\\(.)/g, '$1');
}

/** 取出 `export const PAGE_META_JSON: string = '...';` 里的字面量并还原成对象 */
function parseGenerated(source: string): Record<string, any> {
  const matched = /export const PAGE_META_JSON: string = ('.*');\n$/.exec(source);
  expect(matched).not.toBeNull();
  return JSON.parse(literalToString(matched![1]));
}

afterAll(() => {
  for (let i = 0; i < tmpRoots.length; i++) {
    fs.rmSync(tmpRoots[i], { recursive: true, force: true });
  }
});

describe('uni-pages-route-meta unit tests', () => {
  it('主包与分包页面都进表，key 与 value.path 统一成运行时口径（带前导斜杠）', () => {
    const { source } = generate({
      pages: [
        { path: 'pages/index/index', name: 'index', type: 'home', style: { navigationBarTitleText: '首页' } }
      ],
      subPackages: [
        { root: 'src/sub', pages: [{ path: 'routerBasicDemo/routerBasicDemo', name: 'routerBasicDemo', layout: 'navbar' }] }
      ]
    });

    const table = parseGenerated(source);

    // pages.json 里主包 path 不带 src/、分包 path 不带 root，运行时口径必须两者都补全
    expect(Object.keys(table).sort()).toEqual([
      '/pages/index/index',
      '/src/sub/routerBasicDemo/routerBasicDemo'
    ]);
    // value.path 被改写成运行时口径，避免与 pages.json 的相对 path 混淆
    expect(table['/pages/index/index'].path).toBe('/pages/index/index');
    expect(table['/src/sub/routerBasicDemo/routerBasicDemo'].path).toBe('/src/sub/routerBasicDemo/routerBasicDemo');
    // 其余字段原样保留（definePage 声明什么就是什么）
    expect(table['/pages/index/index'].name).toBe('index');
    expect(table['/pages/index/index'].type).toBe('home');
    expect(table['/pages/index/index'].style.navigationBarTitleText).toBe('首页');
    expect(table['/src/sub/routerBasicDemo/routerBasicDemo'].layout).toBe('navbar');
  });

  it('重复斜杠与前后斜杠被折叠成单斜杠（分包的 root 常带尾斜杠）', () => {
    const { source } = generate({
      pages: [],
      subPackages: [{ root: 'src/sub/', pages: [{ path: '/detail/detail' }] }]
    });

    expect(Object.keys(parseGenerated(source))).toEqual(['/src/sub/detail/detail']);
  });

  it('字段里带单引号 / 反斜杠时字面量仍是合法 TS，且能原样还原', async () => {
    const page = { path: 'pages/demo/demo', title: 'it\'s a \\ backslash', name: 'demo' };
    const { source } = generate({ pages: [page] });

    // 1) 语法合法性：真过一遍 esbuild —— 漏转义单引号会在这里直接抛（比正则守卫可靠）
    await expect(transformWithEsbuild(source, 'page-meta.ts', { loader: 'ts' })).resolves.toBeTruthy();

    // 2) 语义：还原后逐字段相等（key 顺序无关）
    expect(parseGenerated(source)['/pages/demo/demo']).toEqual({
      path: '/pages/demo/demo',
      title: 'it\'s a \\ backslash',
      name: 'demo'
    });
  });

  it('内容一致时不重写文件（避免触发开发服务器无谓热重载）', () => {
    const { file, dir } = generate({ pages: [{ path: 'pages/index/index' }] });
    const past = new Date('2020-01-01T00:00:00Z');

    // 把 mtime 拨回过去：若第二次调用重写了文件，mtime 会被刷新
    fs.utimesSync(file, past, past);
    writeRouteMetaFile({ pages: [{ path: 'pages/index/index' }] }, dir);

    expect(Math.round(fs.statSync(file).mtimeMs)).toBe(past.getTime());
  });

  it('内容变化时重写（沙盒模式下 output 被裁剪，表跟着变少）', () => {
    const full = {
      pages: [{ path: 'pages/index/index' }, { path: 'pages/me/me' }],
      subPackages: [{ root: 'src/sub', pages: [{ path: 'a/a' }] }]
    };
    const { dir, file } = generate(full);
    expect(Object.keys(parseGenerated(fs.readFileSync(file, 'utf-8'))).length).toBe(3);

    // 沙盒调试模式只保留 1 个页面
    writeRouteMetaFile({ pages: [{ path: 'pages/index/index' }] }, dir);

    expect(Object.keys(parseGenerated(fs.readFileSync(file, 'utf-8')))).toEqual(['/pages/index/index']);
  });

  it('畸形 output 不抛异常，退化成分空表', () => {
    const cases: Record<string, any>[] = [
      {},
      { pages: 'not-an-array' },
      { pages: [null, { path: '' }, { path: 123 }, {}] },
      { subPackages: [null, {}, { root: 'src/sub' }] }
    ];

    for (let i = 0; i < cases.length; i++) {
      expect(parseGenerated(generate(cases[i]).source)).toEqual({});
    }
  });

  it('生成文件头部标注真实来源文件，且导出签名稳定', () => {
    const { source } = generate({ pages: [{ path: 'pages/index/index' }] });

    expect(source).toContain('本文件由 plugins/vite-plugin-uni-pages-route-meta.ts 自动生成');
    expect(source).toContain('export const PAGE_META_JSON: string = ');
  });
});
