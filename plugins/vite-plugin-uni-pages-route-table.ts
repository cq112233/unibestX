import path from 'node:path';
import type { Plugin } from 'vite';
import { loadPlatformPagesJson } from './pages-json-util';

/**
 * uni-pages 页面路由表虚拟模块（卫星）。
 *
 * 卫星独立：本文件不 import 核心插件或其他卫星插件。它通过在自己导出的插件对象上挂
 * `uniPagesStage` 字段被核心插件发现（核心在 configResolved 时按该字段收集、按 order 升序在同一次
 * 生成 pass 内运行）。
 *
 * ## 为什么使用虚拟模块
 *
 * `useRoute()` 的页面配置 / `.name` 数据源是「pages.json 里该页面的配置项」：页面 `definePage()` 里声明的
 * 字段（layout / showBack / hideNavbar / enablePullDownRefresh / style，以及 name、requireAuth 这类自定义
 * 字段）都会被核心插件原样写进 pages.json。
 *
 * 但运行时没有任何 API 能整条读出页面配置 —— 官方的 `$getPageStyle()` 只返回 style 节点；pages.json
 * 本身也不随产物分发（小程序侧被编译成 app.json，且自定义字段全被丢掉）。因此这里在构建期把当前
 * 平台的页面配置表渲染成 `virtual:uni-pages-route-table` 模块，由 `src/router/index.uts` 直接导入，
 * 不再生成任何物理文件。
 *
 * 本阶段在核心写完 pages.json 之前运行，直接复用即将被序列化的 state；虚拟模块内容按当前构建平台
 * 生成，因此不依赖 UTS 条件编译宏。
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
  /** 模式 4 的 Tab 页不注册真实路由，但仍保留在路由表中供 useTabPage() 读取 meta / name */
  virtualPages?: PageConfig[];
  /** 生效的分包集合：核心在 finalize 阶段才把它挂到 output.subPackages，故本阶段直接从这里取 */
  scannedSubPkgs: Array<{ root: string; pages: PageConfig[] }>;
  flags: { sandboxActive: boolean; strictMainPages: boolean; skipConfigWriteback: boolean };
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

/** 业务代码导入的公共虚拟模块 ID */
export const PAGES_ROUTE_TABLE_MODULE_ID = 'virtual:uni-pages-route-table';

/** Vite / Rollup 内部使用的已解析模块 ID */
export const RESOLVED_PAGES_ROUTE_TABLE_MODULE_ID = `\0${PAGES_ROUTE_TABLE_MODULE_ID}`;

/** 页面路径 → 运行时口径（补前导 `/`、折叠重复斜杠），如 `src/sub/a/a` → `/src/sub/a/a` */
function toRuntimeRoutePath(pagePath: string): string {
  return `/${pagePath}`.replace(/\/+/g, '/');
}

/** 由当前平台即将写入 pages.json 的配置对象构造「路由路径 → 页面配置」表 */
export function buildPageRoutesTable(output: Record<string, any>): Record<string, PageConfig> {
  const table: Record<string, PageConfig> = {};

  const collect = (page: any, prefix: string): void => {
    if (page == null || typeof page.path !== 'string' || page.path === '') {
      return;
    }
    const routePath = toRuntimeRoutePath(prefix === '' ? page.path : `${prefix}/${page.path}`);
    // 深拷贝一份并把 path 规范成运行时口径，避免与 pages.json 的相对 path 混淆
    const copy = { ...page, path: routePath };
    // 剥离构建期内部字段（以下划线开头），虚拟模块只暴露 pages.json 的页面配置
    for (const key of Object.keys(copy)) {
      if (key.startsWith('_')) {
        delete copy[key];
      }
    }
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

/** 把路由配置表渲染为虚拟模块源码（单引号字符串字面量，兼容 UTS 导入） */
export function renderPageRoutesSource(table: Record<string, PageConfig>): string {
  const jsonText = JSON.stringify(table);
  const stringLiteral = `'${jsonText.replace(/\\/g, '\\\\').replace(/'/g, '\\\'')}'`;
  const listJsonText = JSON.stringify(Object.values(table));
  const listStringLiteral = `'${listJsonText.replace(/\\/g, '\\\\').replace(/'/g, '\\\'')}'`;

  return [
    '/**',
    ' * ⚠️ 本模块由 plugins/vite-plugin-uni-pages-route-table.ts 提供的 Vite 虚拟模块自动生成。',
    ' *',
    ` * 模块 ID：${PAGES_ROUTE_TABLE_MODULE_ID}`,
    ' * 内容：当前构建平台的 pages.json 页面配置表，供 `useRoute()` 读取页面配置与路由名。',
    ' * 生成时机：每次生成 / 更新 pages.json 时同步刷新。',
    ' */',
    // 虚拟模块没有 .uts 后缀，Vite 会按 JS 解析；这里不写类型标注，UTS 与 JS 都能直接消费。
    '/** 路径 → 页面配置的 JSON 字符串 */',
    `export const PAGES_ROUTE_TABLE_JSON = ${stringLiteral};`,
    '',
    '/** 路径 → 页面配置的对象形式 */',
    `export const PAGES_ROUTE_TABLE = ${jsonText};`,
    '',
    '/** 页面配置数组的 JSON 字符串 */',
    `export const PAGES_ROUTE_TABLE_LIST_JSON = ${listStringLiteral};`,
    '',
    '/** 页面配置数组形式，便于直接遍历 */',
    `export const PAGES_ROUTE_TABLE_LIST = ${listJsonText};`,
    ''
  ].join('\n');
}

/** 核心插件未运行时（如单测）从磁盘 pages.json 生成同一份虚拟模块内容 */
function readPageRoutesSourceFromPagesJson(projectRoot: string): string {
  const parsed = loadPlatformPagesJson(path.resolve(projectRoot, 'pages.json'));
  return renderPageRoutesSource(buildPageRoutesTable(parsed as Record<string, any>));
}

// ==========================================
// 插件导出
// ==========================================

export default function uniPagesRouteTablePlugin(): Plugin & { uniPagesStage: PagesStage } {
  let projectRoot = process.cwd();
  let moduleSource = '';
  let server: any = null;

  const invalidateVirtualModule = (): void => {
    if (server == null) {
      return;
    }
    try {
      const mod = server.moduleGraph.getModuleById(RESOLVED_PAGES_ROUTE_TABLE_MODULE_ID);
      if (mod != null) {
        server.moduleGraph.invalidateModule(mod);
      }
    }
    catch {}
  };

  const stage: PagesStage = {
    name: 'uni-pages:route-table',
    order: 300,
    run(state) {
      // 本阶段在核心 finalize（把 scannedSubPkgs 挂到 output.subPackages）之前运行，
      // 故自行把分包补全成 output 形状再交给生成器 —— 与 pages.json 的最终口径保持一致。
      const routePages = [...state.output.pages];
      const routePagePaths = new Set(routePages.map(page => page.path));
      const virtualPages = state.virtualPages ?? [];
      virtualPages.forEach((page) => {
        if (!routePagePaths.has(page.path)) {
          routePages.push(page);
          routePagePaths.add(page.path);
        }
      });
      const nextSource = renderPageRoutesSource(buildPageRoutesTable({
        pages: routePages,
        subPackages: state.scannedSubPkgs
      }));
      if (nextSource === moduleSource) {
        return;
      }
      moduleSource = nextSource;
      invalidateVirtualModule();
    }
  };

  return {
    name: 'uni-pages:route-table',
    enforce: 'pre',
    uniPagesStage: stage,

    configResolved(config: any) {
      projectRoot = config.root ?? projectRoot;
    },

    configureServer(devServer: any) {
      server = devServer;
    },

    resolveId(id: string): string | null {
      if (id === PAGES_ROUTE_TABLE_MODULE_ID) {
        return RESOLVED_PAGES_ROUTE_TABLE_MODULE_ID;
      }
      return null;
    },

    load(id: string): string | null {
      if (id !== RESOLVED_PAGES_ROUTE_TABLE_MODULE_ID) {
        return null;
      }
      if (moduleSource === '') {
        moduleSource = readPageRoutesSourceFromPagesJson(projectRoot);
      }
      return moduleSource;
    }
  };
}
