import type { Plugin } from 'vite';

export type TagTransformConfig = {
  /** 转换的目标 uni-app 原生组件名，如 'view' | 'text' | 'image' */
  tag: string;
  /** 自动注入的默认 Tailwind 样式类，如 'font-bold' | 'italic' */
  defaultClass?: string;
};

export type HtmlToUniOptions = {
  /** 是否启用插件，默认 true */
  enabled?: boolean;
  /**
   * 自定义或覆盖的标签映射表
   * 支持简写字符串（如 { div: 'view' }）或配置对象（如 { b: { tag: 'text', defaultClass: 'font-bold' } }）
   */
  tagMap?: Record<string, string | TagTransformConfig>;
  /** 需要处理的文件后缀列表，默认 ['.uvue', '.vue'] */
  includeExt?: string[];
  /** 是否自动为 b/strong/i 等语义标签注入默认样式类，默认 true */
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
  b: { tag: 'text', defaultClass: 'font-bold' },
  strong: { tag: 'text', defaultClass: 'font-bold' },
  span: { tag: 'text' },
  i: { tag: 'text', defaultClass: 'italic' },
  em: { tag: 'text', defaultClass: 'italic' },
  s: { tag: 'text', defaultClass: 'line-through' },
  del: { tag: 'text', defaultClass: 'line-through' },
  u: { tag: 'text', defaultClass: 'underline' },
  img: { tag: 'image' }
};

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
 * 并为 b / strong / i 等语义标签自动补齐默认样式（如 font-bold、italic）
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
        const defaultClass = injectDefaultStyle ? config.defaultClass : undefined;

        // 不需要注入 class 时，直接换标签名
        if (!defaultClass) {
          return `<${targetTag}${rawAttrs}>`;
        }

        // 需要注入 class，判断是否已有静态 class 属性
        const classAttrRegex = /\bclass=(["'])([\s\S]*?)\1/;
        const classMatch = classAttrRegex.exec(rawAttrs);

        let finalAttrs: string;
        if (classMatch) {
          const quote = classMatch[1];
          const existingClasses = classMatch[2].trim();
          const classList = existingClasses.split(/\s+/);
          // 若已有对应样式类则不重复添加，否则前置注入
          if (!classList.includes(defaultClass)) {
            const merged = existingClasses ? `${defaultClass} ${existingClasses}` : defaultClass;
            finalAttrs = rawAttrs.replace(classAttrRegex, `class=${quote}${merged}${quote}`);
          }
          else {
            finalAttrs = rawAttrs;
          }
        }
        else {
          // 没有静态 class，在属性前拼接 class 属性
          finalAttrs = ` class="${defaultClass}"${rawAttrs}`;
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
