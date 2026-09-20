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
 * 文本盒的 `line-height` 相对字号的倍数 —— **组件渲染文本盒时必须用同一个数**。
 *
 * 取 1.15 而不是 1：盒高贴到字号上时，`(`、`∫` 这类降部比基线余量更深的字形会被原生
 * 文本盒裁掉，上下各留 0.075em 余量更稳。`renderKatex` 算容器高度时也按这个倍数推盒底，
 * 两边不同步就会出现「公式最后一行探出容器被裁掉」——二次方程求根公式的 `2a` 就是这么丢的。
 */
export declare const KATEX_LINE_HEIGHT_RATIO: number;

/**
 * 文本盒「上边缘 → 基线」的距离系数：`基线偏移 = KATEX_BASELINE_RATIO × 字号`。
 *
 * 文本盒内的基线位置是「半行距 + 字体升部」，只与字号成正比，所以可以用一个常数描述。
 * 0.84 是 Roboto 在实际行高下的实测值（升部 0.927 / 降部 0.244 的理论值是 0.92 上下），
 * 换字体族、或改 KATEX_LINE_HEIGHT_RATIO，这个数都要重新标定。
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

/**
 * 一个排版图元。坐标原点在「图容器」左上角、y 向下为正，
 * 使用方只需 position:absolute + top / left 贴上去，不用懂任何字体度量与图结构。
 */
export type MermaidShape = {
  /** 'node' 节点框 / 'text' 节点文字 / 'edge' 连线 / 'arrow' 箭头切片 */
  kind: string;
  /** 文本内容（只有 kind == 'text' 非空） */
  text: string;
  /** 左边缘，px */
  x: number;
  /** 上边缘，px */
  top: number;
  /** 宽度，px */
  width: number;
  /** 高度，px（连线就是线粗，箭头切片是切片高） */
  height: number;
  /** 字号（只有 'text' 用，其余为 0） */
  fontSize: number;
  /** 圆角半径，px（只有 'node' 用：方框 6、圆角 999） */
  radius: number;
};

/** 一张图的排版结果 */
export type MermaidLayout = {
  /** 图宽，px */
  width: number;
  /** 图高，px */
  height: number;
  /** 图元列表：连线在前、节点框在后（先画线再压框，端点才干净） */
  shapes: Array<MermaidShape>;
};

/**
 * mermaid 源码 → 可直接贴进模板的图元。
 *
 * 三步：解析（节点 + 边）→ 分层 → 定位。同层节点在交叉轴上居中排开，
 * 层与层之间留出连线与箭头的位置；孤立节点、回边、半截语句都不会让结果变成空图。
 * 任何输入都不抛异常（与 katex-lite 同样的约定）。
 */
export declare function renderMermaid(source: string, fontSize: number): MermaidLayout;

/**
 * 将包含 LaTeX 公式 ($$) 和 Mermaid 流程图的 Markdown 转换为原生 HTML
 * 保护公式与图表免受 marked 解析器的意外转义
 */
export declare function markdownToHtml(raw: string): string;
