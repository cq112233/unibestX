/**
 * 生成 static/app/ali-iconfont-demo.html —— App 端 web-view 渲染单个图标用的本地页。
 *
 * 做法：把 ttf 以 base64 内联进 @font-face，页面本身零外部依赖（离线可用，
 * 也不吃 file:// 页面的跨域限制）。
 *
 * 插件里刻意不放字体二进制：它已经内联在生成物里了，再存一份是重复。
 *
 * 用法（在插件根目录下执行）：
 *   node scripts/gen-demo.mjs                       # 只改了 CSS / JS：复用现有 HTML 里的字体
 *   node scripts/gen-demo.mjs --fetch-font          # 换库：按 iconfont.config.mjs 的 CSS 自动拉新字体
 *   node scripts/gen-demo.mjs --font ./new.ttf      # 指定字体文件（也接受 http(s) 链接）
 *   node scripts/gen-demo.mjs --extract ./out.ttf   # 把现有 HTML 里内联的字体导出成 ttf（备份 / 交接用）
 *
 * 换库时另外两处（图标表、@font-face）由 scripts/gen-icons.mjs 生成；
 * 在项目根目录跑一条 `pnpm icons` 会按顺序把两边都跑掉，日常不必分别调用这两个脚本。
 *
 * 页面里的兜底码点**不写死**：由 iconfont.config.mjs 的 fallbackIcon 从**已生成的**图标表
 * （common/icons.uts）查出码点写进来 —— 换库后不会出现「兜底指着新库里没有的码点、
 * 字体一重建就渲染成豆腐块」。
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { fail, loadConfig, parseFontSrcs, pickFontUrl, readCss, readIconCodes } from './ali-css.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, '..', 'static', 'app', 'ali-iconfont-demo.html');

/**
 * 字体来源：插件里**刻意不放**字体二进制 —— 它已经 base64 内联在生成物里了，
 * 再存一份纯属重复。所以默认直接从现有 HTML 里把内联的 base64 解出来复用，
 * 只改 CSS / JS 时无需任何参数、也不需要外部字体文件。
 */
const EMBEDDED_RE = /base64,([A-Za-z0-9+/=]+)/;

function fontFromExistingHtml() {
  if (!existsSync(OUT)) {
    return null;
  }
  const m = EMBEDDED_RE.exec(readFileSync(OUT, 'utf8'));
  return m ? Buffer.from(m[1], 'base64') : null;
}

const argv = process.argv.slice(2);
const flag = (name) => {
  const i = argv.indexOf(name);
  return i < 0 ? null : argv[i + 1] ?? '';
};

// --extract <out.ttf>：把生成物里内联的字体导出成独立 ttf 文件（换字体 / 备份时用）
const extractTo = flag('--extract');
if (extractTo != null) {
  const font = fontFromExistingHtml();
  if (font == null) {
    console.error(`✗ 无法从 ${OUT} 里解出内联字体（文件不存在或已被改动）`);
    process.exit(1);
  }
  const dest = resolve(process.cwd(), extractTo);
  writeFileSync(dest, font);
  console.log(`extracted: ${dest} (${font.length} bytes)`);
  process.exit(0);
}

/**
 * 兜底码点：由配置里的图标名从**已生成的**图标表里查出真实码点。
 *
 * 读的都是本地文件（配置 + common/icons.uts），不联网，所以取了 `--fetch-font` 也照样
 * 每次都校准一遍 —— 页面里因此不存在「写死的码点」，也就不会出现旧码点在新字体里
 * 没有字形（渲染成豆腐块）这种只有肉眼看才发现的坏结果。
 */
const config = await loadConfig();
const codes = readIconCodes();
const fallbackCode = codes.get(config.fallbackIcon);
if (fallbackCode == null) {
  fail(
    `配置里的 fallbackIcon 是「${config.fallbackIcon}」，但它不在图标表里。\n`
    + `  表里现有：${[...codes.keys()].join(', ')}\n`
    + '  请改 iconfont.config.mjs 的 fallbackIcon（或先跑 pnpm icons 更新图标表）。'
  );
}

/** --fetch-font：从配置的那份 CSS 里解析出 ttf 地址、下载下来（换库时用） */
async function fontFromConfigCss() {
  const css = await readCss(config.css);
  const url = pickFontUrl(parseFontSrcs(css));
  const res = await fetch(url);
  if (!res.ok) {
    fail(`下载字体失败：${url} → HTTP ${res.status}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  console.log(`font source: ${url} (${buf.length} bytes)`);
  return buf;
}

/** 字体来源优先级：--font（本地文件或 URL） > --fetch-font（配置的 CSS） > 复用现有 HTML 里的 */
const fontPath = flag('--font');
let font;
if (fontPath != null) {
  if (/^https?:\/\//.test(fontPath)) {
    const res = await fetch(fontPath);
    if (!res.ok) {
      fail(`下载字体失败：${fontPath} → HTTP ${res.status}`);
    }
    font = Buffer.from(await res.arrayBuffer());
    console.log(`font source: ${fontPath} (${font.length} bytes)`);
  }
  else {
    font = readFileSync(resolve(process.cwd(), fontPath));
    console.log(`font source: ${fontPath} (${font.length} bytes)`);
  }
}
else if (argv.includes('--fetch-font')) {
  font = await fontFromConfigCss();
}
else {
  font = fontFromExistingHtml();
  if (font == null) {
    fail(
      '找不到字体来源：生成物不存在（首次生成），且没有传 --font / --fetch-font。\n'
      + '  首次生成请用 --fetch-font（按配置拉）或 --font <字体文件>；之后只改 CSS / JS 时无需参数。'
    );
  }
  console.log(`font source: 复用现有 HTML 里内联的字体 (${font.length} bytes)`);
}

// 用 String.raw 而不是普通模板串：模板里有 CSS / JS 源码，
// 裸模板串会把反斜杠当转义处理（Python 那边对应 r""" 的写法）。
const TEMPLATE = String.raw`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no"
  />
  <title>阿里 iconfont · web-view 渲染页</title>
  <style>
    /*
     * 阿里 iconfont 在 App 端 web-view 里渲染单个图标的页面。
     * 宿主：uni_modules/ali-iconfont/components/AliIconfontIcon/AliIconfontIcon.uvue
     * 图标数据源（本页的字体与图标表、Web 端的 @font-face 同出这一份）：__ICON_CSS__
     *
     * 字体为什么内联 base64 而不是写 at.alicdn.com 的链接：
     * App 端 web-view 是系统 WebView，加载本地 file:// 页面时再去跨域拉 CDN 字体
     * 会被跨域策略拦掉（且断网必挂）；ttf 只有 5KB，内联后离线也能渲染。
     *
     * 页面尺寸由宿主的 web-view style 决定（正方形，边长 = 图标尺寸 + 8），
     * 所以这里不做响应式，只保证图标在方框里居中即可。
     */
    @font-face {
      font-family: 'AlibabaIconfont';
      src: url('data:font/truetype;charset=utf-8;base64,__FONT_BASE64__') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: block;
    }

    html,
    body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
    }

    body {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      /* 与宿主卡片的 --card-bg 一致：web-view 自身背景不透明，靠这一层融入卡片 */
      background: #ffffff;
      -webkit-tap-highlight-color: transparent;
    }

    .ali-icon {
      font-family: 'AlibabaIconfont';
      /*
       * font-style 必须显式 normal：图标是字形不是文字，一旦被斜体化，
       * WebView 会给没有 italic 字面的字体合成倾斜（App 端实测字形是斜的）。
       * 元素本身也刻意不用 <i> —— 那个标签浏览器默认就是 italic。
       */
      font-style: normal;
      font-weight: normal;
      /* 实际字号由脚本按 ?size= 覆盖，这里只给一个兜底值 */
      font-size: 22px;
      line-height: 1;
      color: #f59e0b;
    }

    /* 深色主题：宿主把 theme 属性转成 ?dark=1/0 带过来，色值对齐宿主的 --card-bg
       （宿主侧深色分支给出的就是 #1e293b，见其主题工具）。
       不传该参数时（宿主 theme='auto'）由脚本按 prefers-color-scheme 跟随系统。 */
    body.is-dark {
      background: #1e293b;
    }
  </style>
</head>
<body>
  <span class="ali-icon"></span>

  <script>
    /*
     * 参数（都由宿主 AliIconfontIcon 拼在 src 上）：
     *   code  图标 Unicode 码点（十六进制，如 E602），由宿主 AliIconfontIcon 从图标表查得
     *         （插件 common/icons.uts 里的 ALI_ICONS，由 gen-icons.mjs 生成）
     *   size  图标字号（px）
     *   dark  1 = 深色主题，0 = 亮色；不传时下面按 prefers-color-scheme 跟随系统
     */
    (function () {
      var params = null;
      try {
        params = new URLSearchParams(window.location.search);
      } catch (e) {
        params = null;
      }
      function param(key) {
        return params ? params.get(key) : null;
      }

      var icon = document.querySelector('.ali-icon');

      // 兜底码点：万一宿主查询串没传进来（老内核 / 路径处理差异、或图标名不在表里），
      // 至少还能看见一个图标，不至于全空白。
      // 码点由 gen-demo.mjs 从**图标表里真实存在的**图标（iconfont.config.mjs 的 fallbackIcon）
      // 查出后写在这里，**不要手改成一个表外码点**：表外码点当前字体里也许有字形，
      // 但换库重建字体后就没了，兜底会渲染成豆腐块，等于白兜。
      var FALLBACK_CODE = '__FALLBACK_CODE__';
      var code = parseInt(param('code') || FALLBACK_CODE, 16);
      if (isNaN(code) || code <= 0) {
        code = parseInt(FALLBACK_CODE, 16);
      }
      // 图标码点都在 BMP 内（< 0x10000），老内核没有 fromCodePoint 时用 fromCharCode 等价
      icon.textContent =
        typeof String.fromCodePoint === 'function'
          ? String.fromCodePoint(code)
          : String.fromCharCode(code);

      var size = parseFloat(param('size'));
      if (!isNaN(size) && size > 0) {
        icon.style.fontSize = size + 'px';
      }

      // 深色：宿主参数优先；取不到参数时跟随系统深浅色
      var dark;
      var q = param('dark');
      if (q === '1') {
        dark = true;
      } else if (q === '0') {
        dark = false;
      } else {
        try {
          dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        } catch (e2) {
          dark = false;
        }
      }
      if (dark) {
        document.body.className = 'is-dark';
      }
    })();
  </script>
</body>
</html>
`;

// 替换值一律走函数形式：字体 base64 / URL 里若出现 $& 之类的字符，
// 字符串形式的 replace 会把它当替换模式解析，函数形式则原样写入。
const html = TEMPLATE
  .replace('__FONT_BASE64__', () => font.toString('base64'))
  .replace('__FALLBACK_CODE__', () => fallbackCode)
  .replace('__ICON_CSS__', () => config.css);
writeFileSync(OUT, html, 'utf8');
console.log(`written: ${OUT}`);
console.log(`  html chars = ${html.length} | font = ${font.length} bytes | 兜底图标 = ${config.fallbackIcon}(${fallbackCode})`);
