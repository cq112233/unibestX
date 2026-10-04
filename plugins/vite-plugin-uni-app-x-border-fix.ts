import fs from 'node:fs';
import path from 'node:path';
import type { Plugin } from 'vite';

/**
 * uni-app x H5 内置组件边框修复插件
 *
 * 问题背景：
 * weapp-tailwindcss 为 uni-app x 的 Web 产物注入了一条「边框中和规则」，把内置组件
 * （uni-view / uni-text / uni-button 等约 55 个标签）的 border-width 重置为 0，
 * 用来抵消 Tailwind preflight 的 `border-width: 0; border-style: solid` 组合。
 *
 * 但 @weapp-tailwindcss/postcss 3.3.10 起，这条中和规则被排到了 DCloud 框架样式
 * （uni-h5/style/framework/uvue.css）之前。uvue.css 里同样对这批内置组件设置了
 * `border-width: medium`，两者选择器特异性完全相同（都是元素选择器），于是排在后面的
 * 框架规则胜出 —— 所有内置组件凭空获得 3px 实线边框（medium 即 3px），
 * 盒子尺寸被撑大，卡片、按钮、文本容器全部错位。
 *
 * 实测（headless Chrome，按构建产物真实顺序复现）：
 *   修前：<uni-app> 内的 <uni-view> → border-top-width: 3px / style: solid，高度 22px → 28px
 *   修后：同元素 → border-top-width: 0px
 *
 * 为什么不用 pnpm patch 改依赖：
 * 上游 postcss 包的内部管线每次小版本都会重构，patch 文件需要反复重打；把纠正逻辑
 * 留在仓库里，升级 weapp-tailwindcss 后只要问题还在就一直生效，上游修好后本插件
 * 检测到顺序已正确会自动跳过，可以直接删除。
 *
 * 仅在 H5 构建（无 dev server 的静态产物）阶段生效，不影响 dev 与其它平台。
 */

// weapp-tailwindcss 注入的中和规则头部注释，作为定位锚点（唯一且稳定）
const RESET_MARK = 'weapp-tailwindcss uni-app-x web preflight reset';

// 中和规则本体：`uni-app uni-ad, uni-app uni-view, ... uni-app uni-web-view{border-width:0;}`
// 用 [^,{}]+ 逐段匹配选择器，避免 \s* 与量词叠加造成的回溯
const RESET_RULE_RE = /uni-app uni-[\w-]+(?:,\s*uni-app uni-[\w-]+)*\{border-width:0;?\}/;

// 框架样式里需要被中和的那条：结尾处的 `border-width:medium`
const FRAMEWORK_MEDIUM_RE = /border-width\s*:\s*medium/g;

export type UniAppXBorderFixOptions = {
  /**
   * 是否启用修复
   * @default true
   */
  enabled?: boolean;
  /**
   * 是否输出调试日志
   * @default false
   */
  debug?: boolean;
};

/** 返回 re 在 text 中最后一次匹配的起始下标，无匹配返回 -1 */
function lastIndexOfMatch(text: string, re: RegExp): number {
  const flags = re.flags.includes('g') ? re.flags : `${re.flags}g`;
  const global = new RegExp(re.source, flags);
  let last = -1;
  let match = global.exec(text);
  while (match !== null) {
    last = match.index;
    match = global.exec(text);
  }
  return last;
}

/**
 * 把中和规则移动到框架 `border-width:medium` 之后。
 *
 * 返回移动后的 CSS 与是否发生了改动；未命中锚点或顺序已正确时原样返回。
 */
export function reorderBorderReset(
  css: string,
  debug = false
): { css: string; moved: boolean } {
  const markIndex = css.indexOf(RESET_MARK);
  if (markIndex === -1) {
    // 没有中和规则（非 uni-app x，或上游改了实现），无需处理
    return { css, moved: false };
  }

  // 从锚点注释之后开始搜索规则本体，避免误伤用户自己写的同名选择器
  const searchFrom = markIndex + RESET_MARK.length;
  const ruleSlice = css.slice(searchFrom);
  const localMatch = RESET_RULE_RE.exec(ruleSlice);
  if (!localMatch) {
    return { css, moved: false };
  }

  const ruleStart = searchFrom + localMatch.index;
  const ruleEnd = ruleStart + localMatch[0].length;
  const rule = localMatch[0];

  // 锚点文字位于注入的注释 `/* ... */` 内部，摘除必须带上注释开头，
  // 否则残留的 `/*` 会把后续所有样式吞进未闭合注释（页面全白）
  const commentStart = css.lastIndexOf('/*', markIndex);
  const blockStart = commentStart === -1 ? markIndex : commentStart;

  // 最后一个 medium 声明的位置：中和规则必须排在它之后才能生效
  const lastMedium = lastIndexOfMatch(css, FRAMEWORK_MEDIUM_RE);
  if (lastMedium === -1) {
    // 框架样式里没有 medium（DCloud 改了或该文件不包含框架样式），无需处理
    return { css, moved: false };
  }

  if (ruleStart > lastMedium) {
    // 顺序已经正确
    return { css, moved: false };
  }

  // 摘除原规则（连同锚点注释一起搬走，便于二次构建幂等识别）
  const without = css.slice(0, blockStart) + css.slice(ruleEnd);
  const removed = ruleEnd - blockStart;

  // 重新计算最后一个 medium 在新字符串中的位置
  const newLastMedium = lastIndexOfMatch(without, FRAMEWORK_MEDIUM_RE);
  if (newLastMedium === -1) {
    return { css, moved: false };
  }

  // 找到该 medium 所属规则块的结束 `}`，插到它后面
  const closeBrace = without.indexOf('}', newLastMedium);
  if (closeBrace === -1) {
    return { css, moved: false };
  }
  const insertAt = closeBrace + 1;

  const block = `/*${RESET_MARK}*/\n${rule}`;
  const result = without.slice(0, insertAt) + block + without.slice(insertAt);

  if (debug) {
    console.log(`[uni-app-x-border-fix] 中和规则已从 ${markIndex} 移动到 ${insertAt}（摘除 ${removed} 字符）`);
  }

  return { css: result, moved: true };
}

export default function uniAppXBorderFixPlugin(
  options: UniAppXBorderFixOptions = {}
): Plugin {
  const { enabled = true, debug = false } = options;

  const isH5 = process.env.UNI_PLATFORM === 'web'
    || process.env.UNI_PLATFORM === 'h5'
    || !process.env.UNI_PLATFORM;
  const isBuild = process.env.NODE_ENV === 'production'
    || process.argv.includes('build');

  if (!enabled || !isH5 || !isBuild) {
    return { name: 'vite-plugin-uni-app-x-border-fix' };
  }

  return {
    name: 'vite-plugin-uni-app-x-border-fix',
    // post：在 weapp-tailwindcss 与 uni 的 CSS 全部合并产出之后再改产物
    enforce: 'post',
    apply: 'build',

    /**
     * HBuilderX CLI 的 CSS 合并发生在主 rollup pass 之后，generateBundle 阶段拿到的
     * 产物里还没有最终合并的框架样式，因此这里用 writeBundle：所有文件写盘完成后
     * 直接按目录读盘纠正。
     */
    writeBundle(options) {
      const dir = options.dir
        ?? (options.file ? path.dirname(options.file) : path.resolve(process.cwd(), 'unpackage/dist/build/web'));
      const assetsDir = path.resolve(dir, 'assets');
      if (!fs.existsSync(assetsDir)) {
        return;
      }

      for (const name of fs.readdirSync(assetsDir)) {
        if (!name.endsWith('.css')) {
          continue;
        }
        const file = path.resolve(assetsDir, name);
        const source = fs.readFileSync(file, 'utf8');
        if (!source.includes(RESET_MARK)) {
          continue;
        }

        const { css, moved } = reorderBorderReset(source, debug);
        if (!moved) {
          continue;
        }

        fs.writeFileSync(file, css);
        if (debug) {
          console.log(`[uni-app-x-border-fix] 已修复 ${name}`);
        }
      }
    }
  } as Plugin;
}
