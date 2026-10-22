import fs from 'node:fs';
import path from 'node:path';

/**
 * 页面生成结果的构建期快照。
 *
 * 模式 4 会把 Tab 页从 pages.json 中移除，但这些页面的 definePage 多平台配置仍需供
 * TabViews 生成器读取 navbar 标题等元数据。多个端可能同时运行独立 dev 进程，因此快照
 * 同时写入进程级全局槽和项目缓存文件；任一进程重新生成 TabViews 时都能得到完整变体。
 */

export type PagesMetaPage = Record<string, any>;

export type PagesMetaSnapshot = {
  platform: string;
  pages: PagesMetaPage[];
  subPackages: Array<{ root: string; pages: PagesMetaPage[] }>;
};

type PagesMetaGlobal = typeof globalThis & {
  __UNIBESTX_PAGES_META_STATE__?: {
    root: string;
    value: PagesMetaSnapshot;
  } | null;
};

const CACHE_RELATIVE_PATH = 'unpackage/cache/unibestx-pages-meta.json';

// Vite 配置与不同构建阶段可能拿到不同的模块实例；进程内统一通过全局槽共享。
const pagesMetaGlobal = globalThis as PagesMetaGlobal;

function normalizeRoot(projectRoot: string): string {
  return path.resolve(projectRoot);
}

function getCachePath(projectRoot: string): string {
  return path.resolve(projectRoot, CACHE_RELATIVE_PATH);
}

function isSnapshot(value: any): value is PagesMetaSnapshot {
  return value != null
    && Array.isArray(value.pages)
    && Array.isArray(value.subPackages);
}

export function setPagesMetaSnapshot(value: PagesMetaSnapshot, projectRoot: string = process.cwd()): void {
  const root = normalizeRoot(projectRoot);
  pagesMetaGlobal.__UNIBESTX_PAGES_META_STATE__ = { root, value };

  try {
    const cachePath = getCachePath(root);
    fs.mkdirSync(path.dirname(cachePath), { recursive: true });
    const tempPath = `${cachePath}.${process.pid}.tmp`;
    fs.writeFileSync(tempPath, JSON.stringify(value), 'utf-8');
    fs.renameSync(tempPath, cachePath);
  }
  catch {}
}

export function getPagesMetaSnapshot(projectRoot: string = process.cwd()): PagesMetaSnapshot | null {
  const root = normalizeRoot(projectRoot);
  const state = pagesMetaGlobal.__UNIBESTX_PAGES_META_STATE__ ?? null;
  if (state != null && state.root == root) {
    return state.value;
  }

  try {
    const cachePath = getCachePath(root);
    if (!fs.existsSync(cachePath)) {
      return null;
    }
    const parsed = JSON.parse(fs.readFileSync(cachePath, 'utf-8'));
    if (!isSnapshot(parsed)) {
      return null;
    }
    pagesMetaGlobal.__UNIBESTX_PAGES_META_STATE__ = { root, value: parsed };
    return parsed;
  }
  catch {
    return null;
  }
}
