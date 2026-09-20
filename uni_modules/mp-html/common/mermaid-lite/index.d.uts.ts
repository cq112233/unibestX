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
