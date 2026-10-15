import fs from 'node:fs';
import process from 'node:process';
import { parse as cjParse } from 'comment-json';
import JSON5 from 'json5';

/**
 * 校验条件编译平台标识是否匹配当前目标平台
 *
 * 规则对齐 uni-app / uni-app X 条件编译规范：
 * - H5 / WEB 互为别名
 * - MP 匹配所有小程序（MP-WEIXIN、MP-ALIPAY、MP-BAIDU 等）
 * - APP / APP-PLUS 匹配所有 App（APP-ANDROID、APP-IOS、APP-HARMONY 等）
 * - 支持 `||` 多平台逻辑或（如 `APP || MP-WEIXIN`）
 */
export function matchesPlatform(conditionStr: string, targetPlatform: string): boolean {
  let normTarget = (targetPlatform || '').trim().toUpperCase();
  if (!normTarget) {
    normTarget = (process.env.UNI_PLATFORM || 'H5').trim().toUpperCase();
  }
  if ((normTarget === 'APP' || normTarget === 'APP-PLUS') && process.env.UNI_APP_PLATFORM) {
    normTarget = `APP-${process.env.UNI_APP_PLATFORM.toUpperCase()}`;
  }
  const platforms = conditionStr.split('||').map(p => p.trim().toUpperCase()).filter(Boolean);

  const isMatchSingle = (p: string): boolean => {
    if (p === normTarget) {
      return true;
    }
    // MP 通配所有小程序 (MP-WEIXIN, MP-ALIPAY, MP-BAIDU, MP-TOUTIAO, MP-QQ, MP-KUAISHOU, MP-LARK, MP-JD, MP-XHS, MP-360, MP-HARMONY 等)
    if (p === 'MP' && normTarget.startsWith('MP-')) {
      return true;
    }
    // H5 与 WEB 互为别名
    if ((p === 'H5' || p === 'WEB') && (normTarget === 'H5' || normTarget === 'WEB')) {
      return true;
    }
    // APP / APP-PLUS 通配所有 App (APP-ANDROID, APP-IOS, APP-HARMONY)
    if ((p === 'APP' || p === 'APP-PLUS') && (normTarget.startsWith('APP') || normTarget === 'APP-PLUS')) {
      return true;
    }
    // 当目标仅为通用 APP 且未指定子平台时，允许子平台作为通用 App 兜底
    if ((p === 'APP-ANDROID' || p === 'APP-IOS' || p === 'APP-HARMONY') && (normTarget === 'APP' && !process.env.UNI_APP_PLATFORM)) {
      return true;
    }
    return false;
  };

  return platforms.some(isMatchSingle);
}

/**
 * 按当前平台过滤文本中的 `#ifdef` / `#ifndef` / `#endif` 条件编译注释块
 */
export function preprocessJsonComments(content: string, targetPlatform?: string): string {
  const platform = targetPlatform || process.env.UNI_PLATFORM || 'h5';
  const lines = content.split(/\r?\n/);
  const stack: boolean[] = [true];
  const outLines: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // 匹配 // #ifdef PLATFORM 或 /* #ifdef PLATFORM */
    if (trimmed.startsWith('//') || trimmed.startsWith('/*')) {
      const stripped = trimmed.replace(/^\/\/\s*|^\/\*\s*|\s*\*\/$/g, '');
      const isIfdef = stripped.startsWith('#ifdef ');
      const isIfndef = stripped.startsWith('#ifndef ');
      if (isIfdef || isIfndef) {
        const type = isIfdef ? 'ifdef' : 'ifndef';
        const cond = stripped.slice(type.length + 1).trim();
        const match = matchesPlatform(cond, platform);
        const parentActive = stack[stack.length - 1];
        const isActive = parentActive && (type === 'ifdef' ? match : !match);
        stack.push(isActive);
        continue;
      }

      // 匹配 #endif
      if (stripped === '#endif') {
        if (stack.length > 1) {
          stack.pop();
        }
        continue;
      }
    }

    if (stack[stack.length - 1]) {
      outLines.push(line);
    }
  }

  return outLines.join('\n');
}

export type ParsedPagesJson = {
  pages?: Array<Record<string, any>>;
  subPackages?: Array<{ root: string; pages: Array<Record<string, any>> }>;
  globalStyle?: Record<string, any>;
  tabBar?: Record<string, any>;
  [key: string]: any;
};

/**
 * 安全解析 pages.json：先按 targetPlatform 做跨端条件编译裁剪，再用 JSON5 容错解析
 */
export function parsePlatformPagesJson(rawContent: string, targetPlatform?: string): ParsedPagesJson {
  const preprocessed = preprocessJsonComments(rawContent, targetPlatform);
  return JSON5.parse(preprocessed) as ParsedPagesJson;
}

/**
 * 从文件路径读取并按当前平台解析 pages.json
 */
export function loadPlatformPagesJson(pagesJsonPath: string, targetPlatform?: string): ParsedPagesJson {
  if (!fs.existsSync(pagesJsonPath)) {
    return { pages: [], subPackages: [] };
  }
  try {
    const rawContent = fs.readFileSync(pagesJsonPath, 'utf-8');
    return parsePlatformPagesJson(rawContent, targetPlatform);
  }
  catch (e) {
    console.error(`[loadPlatformPagesJson] 解析 pages.json 失败:`, e);
    return { pages: [], subPackages: [] };
  }
}

export type PlatformPageVariant = {
  condition: string | null;
  page: Record<string, any>;
};

/**
 * 提取 pages.json 中所有出现的 distinct #ifdef 平台条件表达式
 */
export function extractDistinctPlatformConditions(pagesJsonPath: string): string[] {
  if (!fs.existsSync(pagesJsonPath)) {
    return [];
  }
  try {
    const rawContent = fs.readFileSync(pagesJsonPath, 'utf-8');
    const matches = rawContent.matchAll(/#ifdef\s+([^\r\n*/]+)/g);
    const conditions = new Set<string>();
    for (const match of matches) {
      if (match[1]) {
        conditions.add(match[1].trim());
      }
    }
    return Array.from(conditions);
  }
  catch {
    return [];
  }
}

/**
 * 读取 pages.json 中所有页面的全平台变体列表
 * 键为规范化路径（如 src/pages/index/index），值为该页面在各 #ifdef 块下的配置项列表
 */
export function loadAllPlatformPageVariants(pagesJsonPath: string): Map<string, PlatformPageVariant[]> {
  const result = new Map<string, PlatformPageVariant[]>();
  if (!fs.existsSync(pagesJsonPath)) {
    return result;
  }
  try {
    const rawContent = fs.readFileSync(pagesJsonPath, 'utf-8');
    const parsed = cjParse(rawContent) as any;
    if (parsed && Array.isArray(parsed.pages)) {
      for (let i = 0; i < parsed.pages.length; i++) {
        const item = parsed.pages[i];
        if (!item || typeof item.path !== 'string')
          continue;
        const normPath = item.path.replace(/\\/g, '/').replace(/^\//, '');
        const before = parsed.pages[Symbol.for(`before:${i}`)] as any[] | undefined;
        let condition: string | null = null;
        if (before) {
          for (const c of before) {
            if (c && typeof c.value === 'string') {
              const match = c.value.match(/#ifdef\s+([^\r\n*/]+)/);
              if (match) {
                condition = match[1].trim();
              }
            }
          }
        }
        let list = result.get(normPath);
        if (!list) {
          list = [];
          result.set(normPath, list);
        }
        list.push({ condition, page: item });
      }
    }
    if (parsed && Array.isArray(parsed.subPackages)) {
      for (const spkg of parsed.subPackages) {
        if (!spkg || !Array.isArray(spkg.pages))
          continue;
        const root = (spkg.root || '').replace(/\\/g, '/').replace(/^\//, '').replace(/\/$/, '');
        for (let i = 0; i < spkg.pages.length; i++) {
          const item = spkg.pages[i];
          if (!item || typeof item.path !== 'string')
            continue;
          const relPath = item.path.replace(/\\/g, '/').replace(/^\//, '');
          const fullPath = root ? `${root}/${relPath}` : relPath;
          const before = spkg.pages[Symbol.for(`before:${i}`)] as any[] | undefined;
          let condition: string | null = null;
          if (before) {
            for (const c of before) {
              if (c && typeof c.value === 'string') {
                const match = c.value.match(/#ifdef\s+([^\r\n*/]+)/);
                if (match) {
                  condition = match[1].trim();
                }
              }
            }
          }
          let list = result.get(fullPath);
          if (!list) {
            list = [];
            result.set(fullPath, list);
          }
          list.push({ condition, page: item });
        }
      }
    }
  }
  catch (e) {
    console.error(`[loadAllPlatformPageVariants] 解析 pages.json 失败:`, e);
  }
  return result;
}
