import fs from 'node:fs';
import path from 'node:path';
import { extractDistinctPlatformConditions, loadPlatformPagesJson } from './pages-json-util';

/**
 * uni-pages 路由元信息表插件（卫星）。
 *
 * 自包含：本文件不 import 核心插件或任何 plugins/ 下的共享模块。它通过在自己导出的插件对象上挂
 * `uniPagesStage` 字段被核心插件发现（核心在 configResolved 时按该字段收集、按 order 升序在同一次
 * 生成 pass 内运行）。
 *
 * ## 为什么需要这一步
 *
 * `useRoute().meta / .name` 的数据源是「pages.json 里该页面的配置项」：页面 `definePage()` 里声明的
 * 字段（layout / showBack / hideNavbar / enablePullDownRefresh / style，以及 name、requireAuth 这类自定义
 * 字段）都会被核心插件原样写进 pages.json。
 *
 * 但运行时没有任何 API 能整条读出页面配置 —— 官方的 `$getPageStyle()` 只返回 style 节点；pages.json
 * 本身也不随产物分发（小程序侧被编译成 app.json，且自定义字段全被丢掉）。所以只能构建期整表落成一个
 * .uts 字符串常量，由 src/router/core/route-state.uts 首用时 `JSON.parseObject` 解析并缓存。
 *
 * 本阶段在核心写完 pages.json 之前运行，直接复用即将被序列化的那个 output 对象 —— 于是
 * 「pages.json 里是什么，表里就是什么」是结构上成立的，不依赖任何时序假设。
 */

// ==========================================
// 与核心结构等价的最小类型（无需 import，避免共享模块）
// ==========================================

type PageConfig = {
  path: string;
  style?: Record<string, any>;
  [key: string]: any;
};

type PagesBuildState = {
  root: string;
  output: { pages: PageConfig[]; subPackages?: Array<{ root: string; pages: PageConfig[] }>; [key: string]: any };
  /** 生效的分包集合：核心在 finalize 阶段才把它挂到 output.subPackages，故本阶段直接从这里取 */
  scannedSubPkgs: Array<{ root: string; pages: PageConfig[] }>;
  flags: { sandboxActive: boolean; skipConfigWriteback: boolean };
};

type PagesStageContext = {
  root: string;
  isProduction: boolean;
};

type PagesStage = {
  name: string;
  order: number;
  run: (state: PagesBuildState, ctx: PagesStageContext) => void;
};

/** 生成的路由元信息表路径（相对项目根） */
export const ROUTE_META_FILE = 'src/router/generated/page-meta.uts';

/** 页面路径 → 运行时口径（补前导 `/`、折叠重复斜杠），如 `src/sub/a/a` → `/src/sub/a/a` */
function toRuntimeRoutePath(pagePath: string): string {
  return `/${pagePath}`.replace(/\/+/g, '/');
}

/** 由即将写入 pages.json 的配置对象构造「路由路径 → 页面配置」表 */
export function buildRouteMetaTable(output: Record<string, any>): Record<string, PageConfig> {
  const table: Record<string, PageConfig> = {};

  const collect = (page: any, prefix: string): void => {
    if (page == null || typeof page.path !== 'string' || page.path === '') {
      return;
    }
    const routePath = toRuntimeRoutePath(prefix === '' ? page.path : `${prefix}/${page.path}`);
    // 深拷贝一份并把 path 规范成运行时口径，避免与 pages.json 的相对 path 混淆
    const copy = { ...page, path: routePath };
    delete copy._variants;
    // 路由名：优先取 definePage 声明的 name，未声明则默认读取路径最后一个单词（如 modalBasicDemo）
    if (typeof copy.name !== 'string' || copy.name.trim() === '') {
      const segments = routePath.split('?')[0].split('/').filter(Boolean);
      if (segments.length > 0) {
        copy.name = segments[segments.length - 1];
      }
    }
    table[routePath] = copy;
  };

  const mainPages = output.pages;
  if (Array.isArray(mainPages)) {
    mainPages.forEach((p: any) => collect(p, ''));
  }
  const subPackages = output.subPackages;
  if (Array.isArray(subPackages)) {
    subPackages.forEach((pkg: any) => {
      if (pkg == null || !Array.isArray(pkg.pages)) {
        return;
      }
      const root = typeof pkg.root === 'string' ? pkg.root : '';
      pkg.pages.forEach((p: any) => collect(p, root));
    });
  }

  return table;
}

/** 把元信息表渲染为 .uts 源码（单引号字符串字面量） */
export function renderRouteMetaSource(table: Record<string, PageConfig>): string {
  // 用单引号包裹（项目 eslint 的 style/quotes 规则），故只需转义 `\` 与 `'`
  const jsonText = JSON.stringify(table);
  const stringLiteral = `'${jsonText.replace(/\\/g, '\\\\').replace(/'/g, '\\\'')}'`;

  return [
    '/**',
    ' * ⚠️ 本文件由 plugins/vite-plugin-uni-pages-route-meta.ts 自动生成，请勿手动修改。',
    ' *',
    ' * 内容：pages.json 里每个页面的**完整配置项**（页面 definePage 声明什么，这里就是什么），',
    ' *      供 `useRoute().meta / .name` 读取，见 src/router/core/route-state.uts。',
    ' * 生成时机：每次生成 / 更新 pages.json 时同步重写。',
    ' */',
    `export const PAGE_META_JSON: string = ${stringLiteral};`,
    ''
  ].join('\n');
}

/**
 * 生成路由元信息表并落盘。内容一致时不写（避免无谓的文件变更触发开发服务器额外热重载）。
 * 返回是否发生了写入。
 */
export function writeRouteMetaFile(output: Record<string, any>, projectRoot: string): boolean {
  const pagesJsonPath = path.resolve(projectRoot, 'pages.json');
  const conditions = extractDistinctPlatformConditions(pagesJsonPath);

  let content = '';

  if (conditions.length > 0 && fs.existsSync(pagesJsonPath)) {
    // 确定性排序，确保无论哪个端解析 pages.json，遍历与生成顺序完全一致
    const sortedConditions = Array.from(new Set(conditions)).sort((a, b) => a.localeCompare(b));
    // 收集各条件编译块对应的 meta table
    const tableByCond = new Map<string, string>();
    for (const cond of sortedConditions) {
      const platforms = cond.split('||').map(p => p.trim());
      let repPlatform = platforms[0].toLowerCase();
      if (repPlatform === 'app' || repPlatform === 'app-plus') {
        repPlatform = 'app-android';
      }
      const parsedPages = loadPlatformPagesJson(pagesJsonPath, repPlatform);
      const table = buildRouteMetaTable(parsedPages);
      tableByCond.set(cond, JSON.stringify(table));
    }

    const uniqueTables = new Set(tableByCond.values());
    if (uniqueTables.size > 1) {
      const lines = [
        '/**',
        ' * ⚠️ 本文件由 plugins/vite-plugin-uni-pages-route-meta.ts 自动生成，请勿手动修改。',
        ' *',
        ' * 内容：pages.json 里每个页面的**完整配置项**（支持多平台条件编译），',
        ' *      供 `useRoute().meta / .name` 读取，见 src/router/core/route-state.uts。',
        ' * 生成时机：每次生成 / 更新 pages.json 时同步重写。',
        ' */'
      ];
      lines.push('function resolvePageMetaJson(): string {');
      lines.push('  let meta = \'\';');
      for (const cond of sortedConditions) {
        const jsonText = tableByCond.get(cond);
        if (!jsonText) {
          continue;
        }
        const stringLiteral = `'${jsonText.replace(/\\/g, '\\\\').replace(/'/g, '\\\'')}'`;
        lines.push(`  // #ifdef ${cond}`);
        lines.push('  if (meta == \'\') {');
        lines.push(`    meta = ${stringLiteral};`);
        lines.push('  }');
        lines.push('  // #endif');
      }
      lines.push('  return meta;');
      lines.push('}');
      lines.push('');
      lines.push('export const PAGE_META_JSON: string = resolvePageMetaJson();');
      lines.push('');
      content = lines.join('\n');
    }
  }

  if (!content) {
    const table = buildRouteMetaTable(output);
    content = renderRouteMetaSource(table);
  }

  const targetPath = path.resolve(projectRoot, ROUTE_META_FILE);
  const targetDir = path.dirname(targetPath);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const oldContent = fs.existsSync(targetPath) ? fs.readFileSync(targetPath, 'utf-8') : '';
  if (content !== oldContent) {
    fs.writeFileSync(targetPath, content, 'utf-8');
    console.log(`[uni-pages] Generated ${ROUTE_META_FILE}`);
    return true;
  }
  return false;
}

// ==========================================
// 插件导出
// ==========================================

const stage: PagesStage = {
  name: 'uni-pages:route-meta',
  order: 300,
  run(state) {
    // 本阶段在核心 finalize（把 scannedSubPkgs 挂到 output.subPackages）之前运行，
    // 故自行把分包补全成 output 形状再交给生成器 —— 与 pages.json 的最终口径保持一致。
    writeRouteMetaFile(
      { pages: state.output.pages, subPackages: state.scannedSubPkgs },
      state.root
    );
  }
};

export default function uniPagesRouteMetaPlugin() {
  return {
    name: 'uni-pages:route-meta',
    uniPagesStage: stage
  };
}
