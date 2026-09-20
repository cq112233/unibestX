/**
 * 两个生成器（gen-icons.mjs / gen-demo.mjs）共用的那一半：
 * 读图标库配置 → 拉取那份阿里 CSS → 解析出字体地址与图标表。
 *
 * 抽成模块的唯一理由：这两支脚本必须对「当前绑的是哪个库」给出**同一个答案**。
 * 各写一份解析迟早会漂（比如一支认了协议相对 URL、另一支没认），而漂的后果是
 * 小程序拉 A 字体、App 演示页内联 B 字体 —— 两端渲染出不同字形，且不报任何错。
 *
 * 配置本身在插件根目录的 iconfont.config.mjs（那是给人改的，注释写在那儿）。
 */
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

export const HERE = dirname(fileURLToPath(import.meta.url));
export const PLUGIN = resolve(HERE, '..');
export const CONFIG = join(PLUGIN, 'iconfont.config.mjs');
const ICONS_UTS = join(PLUGIN, 'common', 'icons.uts');

/**
 * 读 iconfont.config.mjs。
 *
 * 三个字段都做校验而不是给默认值：配置写错时宁可当场报错，也不要静默回退到
 * 某个内置默认库 —— 那会生成一批「看起来正常、但指向另一个图标库」的产物。
 */
export async function loadConfig() {
  if (!existsSync(CONFIG)) {
    fail(`找不到图标库配置：${CONFIG}\n  换图标 / 换库改的就是这个文件（可从版本库恢复）。`);
  }
  let raw;
  try {
    raw = (await import(pathToFileURL(CONFIG).href)).default;
  }
  catch (e) {
    fail(`读不了 ${CONFIG}：${e.message}`);
  }
  if (raw == null || typeof raw != 'object') {
    fail(`${CONFIG} 必须 default export 一个对象，例如 export default { css: '…' }`);
  }
  if (typeof raw.css != 'string' || raw.css.trim() == '') {
    fail(`${CONFIG} 的 css 必须是「Font class」的 CSS 链接或本地 .css 路径，当前是：${JSON.stringify(raw.css)}`);
  }
  if (raw.exclude != null && !Array.isArray(raw.exclude)) {
    fail(`${CONFIG} 的 exclude 必须是图标名数组（不要的话写 []），当前是：${JSON.stringify(raw.exclude)}`);
  }
  if (typeof raw.fallbackIcon != 'string' || raw.fallbackIcon.trim() == '') {
    fail(`${CONFIG} 的 fallbackIcon 必须是图标名（App 端演示页的兜底图标），当前是：${JSON.stringify(raw.fallbackIcon)}`);
  }
  return {
    css: raw.css.trim(),
    exclude: (raw.exclude ?? []).map((n) => String(n).trim()),
    fallbackIcon: raw.fallbackIcon.trim()
  };
}

export function fail(msg) {
  console.error(`✗ ${msg}`);
  process.exit(1);
}

/** 协议相对写法（//at.alicdn.com/...）要补成 https：小程序 loadFontFace 只认 https，
 *  且 App 端 web-view 在 file:// 下会把 // 解析成 file://at.alicdn.com/... 直接废掉。 */
export function toHttps(raw) {
  return raw.startsWith('//') ? `https:${raw}` : raw;
}

export function isRemote(cssSource) {
  return /^(https?:)?\/\//.test(cssSource);
}

/** 拉取（或读本地）那份 CSS —— `--css` 传本地路径是离线 / CI 时的退路 */
export async function readCss(cssSource) {
  if (!isRemote(cssSource)) {
    const p = resolve(process.cwd(), cssSource);
    if (!existsSync(p)) {
      fail(`CSS 文件不存在：${p}`);
    }
    return readFileSync(p, 'utf8');
  }
  const url = toHttps(cssSource);
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    return await res.text();
  }
  catch (e) {
    fail(
      `拉取 CSS 失败：${url}\n    ${e.message}\n`
      + '  离线 / CI 环境请先把这份 CSS 存到本地，再用 --css ./iconfont.css 指定。'
    );
  }
}

/** 取 @font-face 的 src 列表，返回 [{ url, format }]，保持 CSS 里的书写顺序 */
export function parseFontSrcs(css) {
  const block = /@font-face\s*\{([\s\S]*?)\}/.exec(css);
  if (block == null) {
    fail('CSS 里找不到 @font-face 块，可能不是阿里 iconfont 的「Font class」CSS');
  }
  const srcs = [];
  const re = /url\(\s*['"]?([^'")]+)['"]?\s*\)\s*format\(\s*['"]([^'"]+)['"]\s*\)/g;
  let m;
  while ((m = re.exec(block[1])) != null) {
    srcs.push({ url: toHttps(m[1].trim()), format: m[2].trim() });
  }
  if (srcs.length == 0) {
    fail('@font-face 里没解析出任何带 format() 的 src url');
  }
  return srcs;
}

/** 取字体文件地址：优先 truetype —— 小程序 loadFontFace 与演示页内联都用它 */
export function pickFontUrl(srcs) {
  const ttf = srcs.find((s) => s.format == 'truetype');
  if (ttf == null) {
    fail(`@font-face 里没有 truetype 格式的 src（只有 ${srcs.map((s) => s.format).join(', ')}）`);
  }
  return ttf.url;
}

/** CSS 自带的 family 名（仅用于交叉校验，插件不用它，见 readFamily 那边的说明） */
export function cssFamily(css) {
  return /@font-face\s*\{[\s\S]*?font-family\s*:\s*['"]([^'"]+)['"]/.exec(css)?.[1] ?? null;
}

/** 取图标名 → 码点，返回 { pairs, excluded }；pairs 是过滤掉 exclude 后按名排序的 [[名字, 大写码点], ...] */
export function parseIcons(css, exclude) {
  const pairs = [];
  const re = /\.icon-([A-Za-z0-9_-]+)\s*:\s*before\s*\{([^}]*)\}/g;
  let m;
  while ((m = re.exec(css)) != null) {
    const code = /content\s*:\s*"\\([0-9a-fA-F]+)"/.exec(m[2]);
    if (code == null) {
      fail(`.icon-${m[1]} 的 content 不是字面量码点，无法解析`);
    }
    pairs.push([m[1], code[1].toUpperCase()]);
  }
  if (pairs.length == 0) {
    fail('CSS 里没解析出任何 .icon-<名字>:before 规则，可能不是「Font class」模式的 CSS');
  }

  const names = new Set(pairs.map((p) => p[0]));
  if (names.size != pairs.length) {
    fail('CSS 里有重名的 .icon-<名字> 规则，无法生成唯一映射表');
  }

  // 名单里拼错的名字会静默失效（少排除一个还看不出来），所以这里点名报错
  const misspelled = exclude.filter((name) => !names.has(name));
  if (misspelled.length > 0) {
    fail(
      `配置的 exclude 名单里的图标在 CSS 里不存在：${misspelled.join(', ')}\n`
      + '  要么名字拼错了，要么它已经从阿里项目里删掉了 —— 两种情况都请修正 iconfont.config.mjs。'
    );
  }

  const excluded = pairs.filter((p) => exclude.includes(p[0])).map((p) => p[0]);
  const kept = pairs.filter((p) => !exclude.includes(p[0]));
  if (kept.length == 0) {
    fail('exclude 把所有图标都排除了，图标表会是空的 —— 请缩小名单');
  }

  // 按码位字节序比较即可（纯 ASCII 图标名），避免 locale 相关的排序差异
  kept.sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0));
  return { pairs: kept, excluded };
}

/**
 * 读**已生成**的 common/icons.uts 里的图标表，返回 名字 → 码点 的 Map。
 *
 * gen-demo 用它查 fallbackIcon 的码点 —— 刻意不重新解析一遍 CSS：那份表已经由
 * gen-icons 生成好了，从这里读保证「兜底码点」与「表里真实存在的码点」是同一份真相。
 * （`pnpm icons` 保证 gen-icons 先跑，所以这里读到的总是新的。）
 */
export function readIconCodes() {
  if (!existsSync(ICONS_UTS)) {
    fail(`找不到 ${ICONS_UTS} —— 请先跑 gen-icons.mjs（\`pnpm icons\` 会按顺序跑）。`);
  }
  const src = readFileSync(ICONS_UTS, 'utf8');
  const body = /ALI_ICONS\s*:\s*UTSJSONObject\s*=\s*\{([\s\S]*?)\}/.exec(src);
  if (body == null) {
    fail(`在 ${ICONS_UTS} 里读不到 ALI_ICONS 表 —— 该文件应由 gen-icons.mjs 生成，别手改。`);
  }
  const map = new Map();
  const re = /'([^']+)'\s*:\s*'([0-9A-Fa-f]+)'/g;
  let m;
  while ((m = re.exec(body[1])) != null) {
    map.set(m[1], m[2].toUpperCase());
  }
  if (map.size == 0) {
    fail(`${ICONS_UTS} 的 ALI_ICONS 是空的，无法解析兜底码点。`);
  }
  return map;
}
