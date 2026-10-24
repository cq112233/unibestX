import type { Plugin } from 'vite';

export type TagTransformConfig = {
  /** 转换的目标 uni-app 原生组件名，如 'view' | 'text' | 'image' */
  tag: string;
  /** 默认原生样式（长属性安全规范，跨端原生渲染 100% 生效） */
  defaultStyle?: string;
};

export type HtmlToUniOptions = {
  /** 是否启用插件，默认 true */
  enabled?: boolean;
  /** 自定义或覆盖的标签映射表，支持简写字符串如 { div: 'view' } */
  tagMap?: Record<string, string | TagTransformConfig>;
  /** 需要处理的文件后缀列表，默认 ['.uvue', '.vue'] */
  includeExt?: string[];
  /** 是否自动为 b/strong/i/em 等语义标签提供默认排版效果，默认 true */
  injectDefaultStyle?: boolean;
};

const DEFAULT_TAG_CONFIGS: Record<string, TagTransformConfig> = {
  div: { tag: 'view' },
  p: { tag: 'view' },
  section: { tag: 'view' },
  article: { tag: 'view' },
  header: { tag: 'view' },
  footer: { tag: 'view' },
  aside: { tag: 'view' },
  main: { tag: 'view' },
  nav: { tag: 'view' },
  ul: { tag: 'view' },
  ol: { tag: 'view' },
  li: { tag: 'view' },
  b: { tag: 'text', defaultStyle: 'font-weight: bold;' },
  strong: { tag: 'text', defaultStyle: 'font-weight: bold;' },
  span: { tag: 'text' },
  i: { tag: 'text', defaultStyle: 'font-style: italic;' },
  em: { tag: 'text', defaultStyle: 'font-style: italic;' },
  s: { tag: 'text', defaultStyle: 'text-decoration-line: line-through;' },
  del: { tag: 'text', defaultStyle: 'text-decoration-line: line-through;' },
  u: { tag: 'text', defaultStyle: 'text-decoration-line: underline;' },
  img: { tag: 'image' }
};

/**
 * 判断开发者是否在 class、style 或属性中显式表达了同维度的排版意图（如 font-[400] / font-normal / not-italic / iconfont 等）
 * 若开发者已显式声明，插件智能退让，绝不注入默认样式，把样式控制权 100% 留给开发者
 */
function hasExplicitStyleIntent(rawTagName: string, rawAttrs: string): boolean {
  const tag = rawTagName.toLowerCase();

  // 1. 检查内联 style 或动态绑定中是否已包含同名 CSS 属性
  if (tag === 'b' || tag === 'strong') {
    if (/\bfont-weight\b/.test(rawAttrs)) {
      return true;
    }
  }
  else if (tag === 'i' || tag === 'em') {
    if (/\bfont-style\b/.test(rawAttrs)) {
      return true;
    }
  }
  else if (tag === 's' || tag === 'del' || tag === 'u') {
    if (/\btext-decoration\b/.test(rawAttrs)) {
      return true;
    }
  }

  // 2. 检查静态 class
  const classAttrRegex = /(?<![:@v-])\bclass=(["'])([\s\S]*?)\1/;
  const match = classAttrRegex.exec(rawAttrs);
  if (!match) {
    return false;
  }

  const classList = match[2].trim().split(/\s+/).filter(Boolean);

  if (tag === 'b' || tag === 'strong') {
    // 包含字重覆盖类名（如 font-normal, font-light, font-[400] 等）
    return classList.some(cls =>
      /^font-(?:normal|thin|extralight|light|medium|semibold|bold|extrabold|black)$/.test(cls)
      || /^font-\[.+\]$/.test(cls)
    );
  }

  if (tag === 'i' || tag === 'em') {
    // 包含 not-italic 或作为图标使用的常见类名（如 iconfont, icon-, i- 等）
    return classList.some(cls =>
      cls === 'not-italic'
      || cls === 'italic'
      || cls === 'iconfont'
      || /^icon[-_]/.test(cls)
      || /^i-[a-z0-9]/.test(cls)
    );
  }

  if (tag === 's' || tag === 'del' || tag === 'u') {
    return classList.includes('no-underline') || classList.includes('line-through') || classList.includes('underline');
  }

  return false;
}

/**
 * 精确提取最外层 <template> ... </template> 范围与内容
 * 内部通过深度计数正确处理嵌套的 <template v-if> / <template #slot> 等标签
 */
function extractTemplate(code: string): { start: number; end: number; content: string } | null {
  const startMatch = /<template\b[^>]*>/i.exec(code);
  if (!startMatch) {
    return null;
  }
  const startIndex = startMatch.index + startMatch[0].length;
  let depth = 1;
  const tagRegex = /<\/?template\b[^>]*>/gi;
  tagRegex.lastIndex = startIndex;

  let match = tagRegex.exec(code);
  while (match !== null) {
    if (match[0].startsWith('</')) {
      depth--;
      if (depth === 0) {
        return {
          start: startIndex,
          end: match.index,
          content: code.slice(startIndex, match.index)
        };
      }
    }
    else if (!match[0].endsWith('/>')) {
      depth++;
    }
    match = tagRegex.exec(code);
  }

  return null;
}

/**
 * 将 HTML 标签（div / b / span / p / img 等）安全编译为 uni-app X 原生组件（view / text / image 等）
 * 兼具“开箱即用默认排版效果”与“显式覆盖时零干扰智能退让”的工业级体验
 */
export default function htmlToUniPlugin(options: HtmlToUniOptions = {}): Plugin {
  const enabled = options.enabled ?? true;
  const injectDefaultStyle = options.injectDefaultStyle ?? true;
  const extensions = options.includeExt ?? ['.uvue', '.vue'];

  // 标准化配置表
  const resolvedConfigs: Record<string, TagTransformConfig> = {};
  Object.keys(DEFAULT_TAG_CONFIGS).forEach((k) => {
    resolvedConfigs[k] = { ...DEFAULT_TAG_CONFIGS[k] };
  });

  if (options.tagMap != null) {
    Object.keys(options.tagMap).forEach((k) => {
      const val = options.tagMap![k];
      if (typeof val === 'string') {
        resolvedConfigs[k.toLowerCase()] = { tag: val };
      }
      else if (val != null) {
        resolvedConfigs[k.toLowerCase()] = { ...val };
      }
    });
  }

  const tags = Object.keys(resolvedConfigs);

  // 匹配起始标签或自闭合标签，例如 <b>、<b class="foo">、<img src="..." />
  const openTagRegex = new RegExp(`<(${tags.join('|')})\\b((?:[^>"']|"[^"]*"|'[^']*')*)>`, 'gi');
  // 匹配闭合标签，例如 </b>、</div>
  const closeTagRegex = new RegExp(`</(${tags.join('|')})>`, 'gi');

  return {
    name: 'unibestx:html-to-uni',
    enforce: 'pre',

    transform(code: string, id: string) {
      if (!enabled) {
        return null;
      }

      // 仅拦截源码目录中的 .uvue 和 .vue 文件，跳过 node_modules
      if (!extensions.some(ext => id.endsWith(ext)) || id.includes('node_modules')) {
        return null;
      }

      // 快速判断是否包含需替换的目标标签，不包含则直接放行，极致优化热重载性能
      const hasTargetTag = tags.some(tag => code.includes(`<${tag}`) || code.includes(`</${tag}>`));
      if (!hasTargetTag) {
        return null;
      }

      const tpl = extractTemplate(code);
      if (!tpl) {
        return null;
      }

      let converted = tpl.content.replace(openTagRegex, (_match, rawTagName: string, rawAttrs: string) => {
        const config = resolvedConfigs[rawTagName.toLowerCase()];
        if (!config) {
          return _match;
        }

        const targetTag = config.tag;
        let finalAttrs = rawAttrs;

        // 仅在开启样式注入、配置了 defaultStyle，且开发者未显式表达覆盖意图时注入标准样式
        if (injectDefaultStyle && config.defaultStyle && !hasExplicitStyleIntent(rawTagName, rawAttrs)) {
          const defaultStyle = config.defaultStyle;
          const styleAttrRegex = /(?<![:@v-])\bstyle=(["'])([\s\S]*?)\1/;
          const styleMatch = styleAttrRegex.exec(finalAttrs);

          if (styleMatch) {
            const quote = styleMatch[1];
            let existingStyle = styleMatch[2].trim();
            if (existingStyle && !existingStyle.endsWith(';')) {
              existingStyle += ';';
            }
            const mergedStyle = existingStyle ? `${defaultStyle} ${existingStyle}` : defaultStyle;
            finalAttrs = finalAttrs.replace(styleAttrRegex, `style=${quote}${mergedStyle}${quote}`);
          }
          else {
            finalAttrs = ` style="${defaultStyle}"${finalAttrs}`;
          }
        }

        return `<${targetTag}${finalAttrs}>`;
      });

      converted = converted.replace(closeTagRegex, (_m, rawTagName: string) => {
        const config = resolvedConfigs[rawTagName.toLowerCase()];
        const targetTag = config ? config.tag : rawTagName;
        return `</${targetTag}>`;
      });

      if (converted === tpl.content) {
        return null;
      }

      const newCode = code.slice(0, tpl.start) + converted + code.slice(tpl.end);

      return {
        code: newCode,
        map: null
      };
    }
  };
}
