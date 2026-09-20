/**
 * 从阿里 iconfont 的「Font class」CSS 生成插件自己的宿主配置与字体声明。
 *
 * ── 为什么是 CSS，而不是下载包里的 iconfont.json ──────────────────────────
 * 那个 .css 一份就装齐了生成所需的全部信息，且是个公开 URL、不用先下载再解压：
 *   - @font-face 里的 font-family    → 不采用（见下），但用于交叉校验
 *   - @font-face 的 src 列表         → 字体文件地址（含 ?t= 防缓存时间戳）
 *   - .icon-<名字>:before 的 content → 图标名 → 码点
 *
 * ⚠️ family 名刻意**不照抄 CSS 里的 `iconfont`**：那是阿里的通用名，项目里也存在
 * 同名的历史字体（static/iconfont.ttf），同名家族的 @font-face 会互相顶掉且静默。
 * 插件固定用自己的 ALI_ICON_FONT_FAMILY（在 common/iconfont.uts 里，本脚本读取它），
 * 生成的 @font-face 也用这个名字。
 *
 * ── 产出：两个文件，都在插件目录内 ───────────────────────────────────────
 *   1. common/icons.uts                                 —— 整文件生成：ALI_ICON_FONT_URL + ALI_ICONS
 *   2. components/AliIconfontIcon/AliIconfontIcon.uvue 的 <style> 块里一个生成区 —— @font-face
 * 一份 CSS 喂两处，URL、图标表、字体声明必然同源，不会漂。
 *
 * ── 为什么生成在插件里，而不是宿主的 App.uvue ────────────────────────────
 * 这些确实是「宿主数据」，但宿主不必看见它们：字体二进制本来就 base64 内联在插件的
 * static/app/ 演示页里 —— 插件早就跟这个阿里项目绑在一起了。生成在插件内部，
 * 由插件自己的 common/iconfont.uts import 使用，宿主就只剩一次 setupIconfont() 调用，
 * 既不用 import 配置、也不用改样式块。
 *
 * @font-face 能跟着组件走，是因为它是全局 at-rule、不受 scoped 影响，而组件的 <style>
 * 会随组件进产物 —— 官方 uni-icons 就是这么干的（它组件自己的 style 块里就写着 @font-face）。
 * 同理它**必须**写在 .uvue 自己的 style 块里：挪进被 @import 的 .scss，sass 压缩会剥掉
 * CSS 注释、连带把 #ifdef 守卫一起删掉，只会解析到顶层文件里的守卫，于是 App / 小程序端
 * 也会被强行注入这条规则。
 *
 * ── 为什么 URL 要由脚本同源产出 ─────────────────────────────────────────
 * 字体是构建期资源：Web/H5 靠编译期固化的 @font-face、App 靠生成期内联的 base64，
 * 两边都够不到运行期变量。所以「一个 URL 喂三处」只能靠脚本同源产出，
 * 而不是靠运行期注册（setupIconfont 那只覆盖小程序一路）。
 *
 * ── 用法 ─────────────────────────────────────────────────────────────────
 *   pnpm icons                       # 换图标 / 换库：改 iconfont.config.mjs 后跑这个（在项目根目录）
 *   pnpm icons:check                 # 只校验产物是否与源一致，不写盘
 *   node scripts/gen-icons.mjs       # 同上，直接在插件目录下跑
 *   node scripts/gen-icons.mjs --css ./iconfont.css   # 临时用本地 CSS（离线 / CI 缓存）
 *
 * 数据源与排除名单都不在本脚本里，在插件根目录的 iconfont.config.mjs —— 那里是给人改的。
 *
 * 输出刻意按图标名排序、码点统一大写：
 * - 排序 → 阿里项目里拖动图标顺序不会造成无意义的 diff；
 * - 大写 → 与项目既有写法一致（parseInt(code, 16) 大小写不敏感，纯粹为了可读性统一）。
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

import { PLUGIN, cssFamily, fail, isRemote, loadConfig, parseFontSrcs, parseIcons, pickFontUrl, readCss, toHttps } from './ali-css.mjs';

const PLUGIN_UTS = join(PLUGIN, 'common', 'iconfont.uts');
/** 生成物 1：宿主要 import 的常量（整文件由本脚本覆盖） */
const ICONS_UTS = join(PLUGIN, 'common', 'icons.uts');
/** 生成物 2：组件自带 @font-face 的文件（只覆盖两个标记之间的部分） */
const ICON_COMPONENT = join(PLUGIN, 'components', 'AliIconfontIcon', 'AliIconfontIcon.uvue');

/** 组件 <style> 块里生成区的边界（CSS 块注释形态，必须与 AliIconfontIcon.uvue 里逐字一致） */
const STYLE_START = '/* >>> gen-icons.mjs 生成区开始（改动会被脚本覆盖） */';
const STYLE_END = '/* <<< gen-icons.mjs 生成区结束 */';

const argv = process.argv.slice(2);
const checkOnly = argv.includes('--check');
const flag = (name) => {
  const i = argv.indexOf(name);
  return i < 0 ? null : (argv[i + 1] ?? '');
};

// ────────────────────────────── 读取源 ──────────────────────────────
// 配置、拉 CSS、解析字体地址与图标表都在 scripts/ali-css.mjs —— 与 gen-demo.mjs 共用一份，
// 免得两支脚本对「当前绑的是哪个库」给出不同答案。

/** 读插件里的字体家族名 —— 它是唯一真源，本脚本生成的 @font-face 必须与之一致 */
function readFamily() {
  const uts = readFileSync(PLUGIN_UTS, 'utf8');
  const m = /export\s+const\s+ALI_ICON_FONT_FAMILY\s*(?::\s*string)?\s*=\s*['"]([^'"]+)['"]/.exec(uts);
  if (m == null) {
    console.error(
      `✗ 在 ${PLUGIN_UTS} 里读不到 ALI_ICON_FONT_FAMILY。\n`
      + '  本脚本依赖它作为 family 名的唯一真源，请确认该常量还在（不要改名或改成非字面量）。'
    );
    process.exit(1);
  }
  return m[1];
}

// ────────────────────────────── 渲染产物 ──────────────────────────────

/**
 * 渲染 common/icons.uts —— **整文件**由脚本产出，插件自己的 common/iconfont.uts
 * 从这里 import 两个常量（`setupIconfont()` 再无参使用它们）。
 *
 * 之所以要 export：消费者换成了另一个模块（而不是同一文件里的局部常量）。所以改了这个
 * 导出面要跑一次 `gen-uts-dts.mjs` 同步 `icons.d.uts.ts` —— 插件外的代码（宿主 src/ 下的
 * `.ts`）若 import 它，缺声明会在 IDE 报 Cannot find module。
 *
 * 整个文件生成、不设标记区：这个文件没有一行是手写的，没必要留标记。
 */
function renderIconsUts(family, fontUrl, pairs, sourceLabel) {
  const lines = [
    '// ⚠️ 本文件由 `uni_modules/ali-iconfont/scripts/gen-icons.mjs` 整个生成，**请勿手改** ——',
    '// 下次运行会被逐字节覆盖。换图标 / 换图标库请改插件根目录的 iconfont.config.mjs，',
    '// 然后在项目根目录跑 `pnpm icons`；`pnpm icons:check` 会校验它与源是否同步。',
    '/**',
    ' * 阿里 iconfont 宿主配置',
    ' *',
    ` * 数据源：${sourceLabel}`,
    ' *',
    ' * 这两个常量由插件自己的 common/iconfont.uts import 使用（setupIconfont() 无参调用）。',
    ' * 之所以落在插件里而不是宿主里：字体二进制本来就内联在插件的 static/app/ 演示页里，',
    ' * 插件已经跟这个阿里项目绑定；生成在插件内，宿主就只剩一次 setupIconfont() 调用。',
    ' */',
    '',
    '/**',
    ' * 字体文件地址（阿里 CDN，.ttf）',
    ' *',
    ' * 只有小程序端在运行期用得到（uni.loadFontFace 需要它）；Web / H5 端不读这个常量，',
    ' * 而是用同一份 CSS 生成到 AliIconfontIcon 组件 style 块里的 @font-face。',
    ' *',
    ' * 用字体文件而不是阿里给的 .js：那个 .js 是 Symbol(SVG Sprite) 模式，靠 <svg><use>',
    ' * 渲染，只有 H5 能用；字体文件 Web 端的 @font-face 与小程序端的 uni.loadFontFace 都能吃。',
    ' */',
    `export const ALI_ICON_FONT_URL = '${fontUrl}';`,
    '',
    '/**',
    ' * 图标名 → Unicode 码点（十六进制，不含 \\u）',
    ' *',
    ' * 由脚本从阿里 CSS 的 `.icon-<名字>:before { content: "\\xxxx" }` 解析而来，**不要手改**：',
    ' * 增删图标请在阿里图标库里改完重新拉取 CSS 后重跑脚本。',
    ` * 当前共 ${pairs.length} 个图标。`,
    ' *',
    ` * 字体家族名固定为 \`${family}\`，由插件持有（common/iconfont.uts 的 ALI_ICON_FONT_FAMILY）——`,
    ' * 它是插件的身份而不是宿主配置，所以不在这里生成。',
    ' */',
    'export const ALI_ICONS: UTSJSONObject = {'
  ];
  pairs.forEach(([name, code], i) => {
    lines.push(`  '${name}': '${code}'${i === pairs.length - 1 ? '' : ','}`);
  });
  // 文件末尾恰好一个换行（与写盘时的空行合并后不会多出空行）
  lines.push('};', '');
  return lines.join('\n');
}

/** 渲染组件 style 块里的生成区：Web / H5 端的 @font-face（守卫写在组件里，不在这里） */
function renderFontFace(family, srcs) {
  const srcLines = srcs.map((s, i) => {
    const comma = i === srcs.length - 1 ? ';' : ',';
    return `    url('${s.url}') format('${s.format}')${comma}`;
  });
  return [
    STYLE_START,
    '@font-face {',
    `  font-family: '${family}';`,
    '  src:',
    ...srcLines,
    '  font-weight: normal;',
    '  font-style: normal;',
    '}',
    STYLE_END
  ].join('\n');
}

// ────────────────────────────── 写盘 / 校验 ──────────────────────────────

function replaceRegion(text, start, end, block, targetLabel) {
  const startIdx = text.indexOf(start);
  const endIdx = text.indexOf(end);
  if (startIdx < 0 || endIdx < 0 || endIdx < startIdx) {
    fail(
      `在 ${targetLabel} 里找不到生成区标记，无法安全替换（标记被误删或改动？）\n`
      + `  期望标记：${start}\n            ${end}`
    );
  }
  return text.slice(0, startIdx) + block + text.slice(endIdx + end.length);
}

/** 输出里那句「另排除 …」——没排除任何东西时返回空串，免得打印一个空的括号 */
function excludedSuffix(excluded) {
  return excluded.length === 0 ? '' : `，另按配置的 exclude 排除 ${excluded.length} 个：${excluded.join(', ')}`;
}

async function main() {
  const config = await loadConfig();
  // --css 只是临时覆盖（离线 / CI 缓存），日常换库改 iconfont.config.mjs
  const cssSource = flag('--css') ?? config.css;
  const css = await readCss(cssSource);
  const family = readFamily();
  const srcs = parseFontSrcs(css);
  const fontUrl = pickFontUrl(srcs);
  const { pairs, excluded } = parseIcons(css, config.exclude);

  // 交叉校验：CSS 自带的 family 若与插件不同，说明我们确实在「改名使用」。
  // 这不是错误（改名是刻意的），但值得在输出里点一句，方便排查字体撞名。
  const aliFamily = cssFamily(css);

  const sourceLabel = isRemote(cssSource) ? toHttps(cssSource) : cssSource;

  const nextIconsUts = renderIconsUts(family, fontUrl, pairs, sourceLabel);
  const nextFontFace = renderFontFace(family, srcs);

  // 生成物 1：common/icons.uts —— 整文件覆盖（它没有一行是手写的，所以不需要标记区）
  const prevIconsUts = existsSync(ICONS_UTS) ? readFileSync(ICONS_UTS, 'utf8') : null;
  const iconsChanged = prevIconsUts !== nextIconsUts;

  // 生成物 2：组件 <style> 块里的生成区 —— 只替换两个标记之间的部分，组件其余代码一字不碰
  if (!existsSync(ICON_COMPONENT)) {
    fail(
      `找不到组件文件：${ICON_COMPONENT}\n`
      + '  它的 <style> 块里必须留着生成区标记，脚本只替换标记之间的内容。'
    );
  }
  const prevComponent = readFileSync(ICON_COMPONENT, 'utf8');
  const nextComponent = replaceRegion(prevComponent, STYLE_START, STYLE_END, nextFontFace, ICON_COMPONENT);
  const componentChanged = prevComponent !== nextComponent;

  if (checkOnly) {
    if (iconsChanged || componentChanged) {
      console.error(`❌ 生成物与 ${sourceLabel} 不同步：`);
      if (iconsChanged) {
        console.error(`   - ${ICONS_UTS}${prevIconsUts == null ? '（文件还不存在）' : ''}`);
      }
      if (componentChanged) {
        console.error(`   - ${ICON_COMPONENT} 的 style 生成区`);
      }
      console.error('\n重跑不带 --check 即可修正：pnpm icons');
      process.exit(1);
    }
    console.log(`✅ 两处生成物均与源一致（${pairs.length} 个图标${excludedSuffix(excluded)}）`);
    return;
  }

  const label = (p) => relative(process.cwd(), p) || p;
  if (iconsChanged) {
    writeFileSync(ICONS_UTS, nextIconsUts, 'utf8');
    console.log(`✎  ${label(ICONS_UTS)}  已${prevIconsUts == null ? '生成' : '更新'}（URL + ${pairs.length} 个图标）`);
  }
  else {
    console.log(`=  ${label(ICONS_UTS)}  无变化`);
  }
  if (componentChanged) {
    writeFileSync(ICON_COMPONENT, nextComponent, 'utf8');
    console.log(`✎  ${label(ICON_COMPONENT)}  已更新 style 生成区（@font-face）`);
  }
  else {
    console.log(`=  ${label(ICON_COMPONENT)}  style 生成区无变化`);
  }

  console.log(`\nfamily = ${family}${aliFamily != null && aliFamily !== family ? `（CSS 里叫 ${aliFamily}，刻意改名以避开同名顶掉）` : ''}`);
  console.log(`font   = ${fontUrl}`);
  console.log(`icons  = ${pairs.length} 个${excludedSuffix(excluded)}`);
}

main();
