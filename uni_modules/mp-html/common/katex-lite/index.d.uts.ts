/**
 * 本文件由 `scripts/gen-uts-dts.mjs` 自动生成，请勿手工编辑。
 *
 * 它声明 `./index.uts` 的导出面，供 TS / IDE 解析类型与补全。
 * tsconfig 的 `allowArbitraryExtensions` 把 `./index.uts` 解析到同目录的
 * `index.d.uts.ts`，因此本文件必须与 `index.uts` **同目录同名**，不能挪走。
 *
 * 修改 `index.uts` 的导出后，重新执行：node scripts/gen-uts-dts.mjs
 * 校验是否已同步：node scripts/gen-uts-dts.mjs --check
 */
/**
 * 一个已排版好的图元。
 *
 * 坐标已经换算到「公式容器」坐标系（原点在容器左上角，y 向下为正）：
 * 组件只需 `position:absolute; left:x; top:top` 贴上去即可，不需要再懂任何字体度量。
 */
export type KatexBox = {
  /** 'text' 文本图元 / 'rule' 线段（分数线、根号横线、上划线） */
  kind: string;
  /** 文本内容（kind == 'rule' 时为空串） */
  text: string;
  /** 左边缘，px */
  x: number;
  /** 上边缘，px */
  top: number;
  /** 宽度，px（文本盒是估算宽度，线段盒是精确宽度） */
  width: number;
  /** 字号，px（kind == 'rule' 时为 0） */
  fontSize: number;
  /** 线段粗细，px（kind == 'text' 时为 0） */
  lineHeight: number;
  /** 是否斜体（数学变量斜体、数字与函数名正体） */
  italic: boolean;
};

/** 排版结果 */
export type KatexLayout = {
  /** 公式宽度，px */
  width: number;
  /** 公式总高度（基线以上 + 以下），px */
  height: number;
  /** 图元列表，已按「先文本后线段」无关的顺序排列（渲染顺序不影响结果） */
  boxes: Array<KatexBox>;
  /** 出错信息，空串表示正常 */
  error: string;
};

/**
 * 文本盒「上边缘 → 基线」的距离系数：`基线偏移 = 0.84 × 字号`。
 *
 * 组件给文本盒写的是 `line-height = font-size`，此时文本盒内的基线位置是
 * 「半行距 + 字体升部」，只与字号成正比，所以可以用一个常数描述（Roboto 升部 0.927 /
 * 降部 0.244 → (1 + 0.927 - 0.244) / 2 ≈ 0.84）。换字体族时改这一个数即可。
 */
export declare const KATEX_BASELINE_RATIO: number;

/**
 * 把一段 LaTeX 排成绝对定位图元。
 *
 * @param latex LaTeX 源码（可带或不带 `$` / `$$` 定界符，会自动忽略）
 * @param fontSize 基准字号 px（一般与被乘方公式所在正文的字号一致）
 */
export declare function renderKatex(latex: string, fontSize: number): KatexLayout;

/**
 * 文本宽度估算（px）：原生端拿不到字体度量，按字符类别估一个够用的值。
 * 导出给别的自研排版引擎复用（mermaid-lite 量节点标签就靠它），
 * 免得同一套字宽表在项目里出现两份、两处估算还不一致。
 */
export declare function measureTextWidth(text: string, fontSize: number): number;
