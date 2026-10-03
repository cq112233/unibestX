/**
 * uni-app X 专属 ESLint 插件：UTS 语法与 UVUE 模板规范校验
 *
 * 核心策略：
 * 1. 满足 Vue 3 Vapor 蒸汽模式与 Kotlin/Swift 原生强类型规范（报错拦截）
 * 2. 对 VDOM 模式特有的渲染差异提供友好兼容性提示（警告提示）
 */
import fs from 'node:fs';
import path from 'node:path';
import colorNames from 'color-name';
import postcss from 'postcss';

/** 辅助函数：从 VElement 或 AST 节点中获取 class 属性字符串 */
function getClassValues(node) {
  const values = [];
  if (!node.startTag || !node.startTag.attributes) {
    return values;
  }

  for (const attr of node.startTag.attributes) {
    if (!attr.directive && attr.key && attr.key.name === 'class') {
      if (attr.value && typeof attr.value.value === 'string') {
        values.push({ text: attr.value.value, loc: attr.loc, attrNode: attr });
      }
    }
    // 处理 :class="'...'" 静态字符串形式
    if (attr.directive && attr.key && (attr.key.name?.name === 'class' || attr.key.argument?.name === 'class')) {
      if (attr.value && attr.value.expression && attr.value.expression.type === 'Literal' && typeof attr.value.expression.value === 'string') {
        values.push({ text: attr.value.expression.value, loc: attr.loc, attrNode: attr.value.expression });
      }
    }
  }
  return values;
}

/** 标准 CSS 英文单词命名颜色集合（uni-app X 原生端与 VDOM 平台建议统一替换为十六进制色值） */
const CSS_NAMED_COLORS = new Set(Object.keys(colorNames));

/** 将 CSS 英文单词命名颜色转换为标准十六进制色值（如 red -> #ff0000） */
function getHexFromNamedColor(name) {
  if (!name) {
    return null;
  }
  const rgb = colorNames[name.toLowerCase()];
  if (!rgb) {
    return null;
  }
  return `#${rgb.map(x => x.toString(16).padStart(2, '0')).join('')}`;
}

/** 判断 CSS 属性名是否为颜色或可携带颜色的复合属性 */
function isColorProperty(prop) {
  if (!prop)
    return false;
  const p = prop.toLowerCase().trim();
  if (p === 'color')
    return true;
  if (p.endsWith('-color'))
    return true;
  if (p === 'background' || p === 'border' || p.startsWith('border-'))
    return true;
  if (p === 'outline' || p === 'text-decoration' || p === 'box-shadow' || p === 'text-shadow')
    return true;
  if (p === 'fill' || p === 'stroke' || p === 'caret-color')
    return true;
  if (p.startsWith('--') && (p.includes('color') || p.includes('theme') || p.includes('bg') || p.includes('border')))
    return true;
  return false;
}

/** 从 CSS 声明的 value 中查找所有英文单词命名颜色，并返回其在 value 内的偏移位置 */
function findNamedColorsInCssValue(value) {
  if (!value || typeof value !== 'string')
    return [];
  // 屏蔽注释、引号字符串、十六进制色值、url(...)、var(...)，保持字符索引长度一致
  const masked = value
    .replace(/\/\*[\s\S]*?\*\//g, m => ' '.repeat(m.length))
    .replace(/"(?:\\.|[^"\\])*"/g, m => ' '.repeat(m.length))
    .replace(/'(?:\\.|[^'\\])*'/g, m => ' '.repeat(m.length))
    .replace(/#[0-9a-f]+/gi, m => ' '.repeat(m.length))
    .replace(/\burl\([^()]*\)/gi, m => ' '.repeat(m.length))
    .replace(/\bvar\([^()]*\)/gi, m => ' '.repeat(m.length));

  const regex = /\b([a-z]+)\b/gi;
  const matches = [];
  let m = regex.exec(masked);
  while (m !== null) {
    const word = m[1].toLowerCase();
    if (CSS_NAMED_COLORS.has(word)) {
      matches.push({ color: m[1], index: m.index });
    }
    m = regex.exec(masked);
  }
  return matches;
}

/** 降级正则扫描 CSS 字符串中的颜色声明 */
function scanCssFallback(text, baseOffset, context) {
  const declPattern = /(?:^|[;{\n])\s*([a-z_-]+)\s*:\s*([^;}\n]+)/gi;
  let match = declPattern.exec(text);
  while (match !== null) {
    const prop = match[1];
    const val = match[2];
    if (isColorProperty(prop)) {
      const matches = findNamedColorsInCssValue(val);
      const colonIndex = match[0].indexOf(':');
      const valOffsetInMatch = colonIndex + 1 + match[0].slice(colonIndex + 1).indexOf(val);
      const valStart = match.index + valOffsetInMatch;

      for (const m of matches) {
        const start = baseOffset + valStart + m.index;
        const end = start + m.color.length;
        const hexColor = getHexFromNamedColor(m.color);
        context.report({
          loc: {
            start: context.sourceCode.getLocFromIndex(start),
            end: context.sourceCode.getLocFromIndex(end)
          },
          messageId: 'preferHexStyle',
          data: { color: m.color },
          fix(fixer) {
            if (!hexColor) {
              return null;
            }
            return fixer.replaceTextRange([start, end], hexColor);
          }
        });
      }
    }
    match = declPattern.exec(text);
  }
}

/** 检查单个 <style> 元素中的 CSS 声明 */
function checkStyleElement(styleNode, context) {
  for (const child of (styleNode.children || [])) {
    if (child.type === 'VText' && typeof child.value === 'string' && child.range) {
      const text = child.value;
      const baseOffset = child.range[0];

      try {
        const root = postcss.parse(text);
        root.walkDecls((decl) => {
          if (isColorProperty(decl.prop)) {
            const matches = findNamedColorsInCssValue(decl.value);
            if (matches.length > 0) {
              const declSlice = text.slice(decl.source.start.offset, decl.source.end.offset + 1);
              const colonIndex = declSlice.indexOf(':');
              const valueSubIndex = colonIndex !== -1 ? colonIndex + 1 + declSlice.slice(colonIndex + 1).indexOf(decl.value) : declSlice.indexOf(decl.value);
              const valueOffset = decl.source.start.offset + Math.max(0, valueSubIndex);

              for (const m of matches) {
                const start = baseOffset + valueOffset + m.index;
                const end = start + m.color.length;
                const hexColor = getHexFromNamedColor(m.color);
                context.report({
                  loc: {
                    start: context.sourceCode.getLocFromIndex(start),
                    end: context.sourceCode.getLocFromIndex(end)
                  },
                  messageId: 'preferHexStyle',
                  data: { color: m.color },
                  fix(fixer) {
                    if (!hexColor) {
                      return null;
                    }
                    return fixer.replaceTextRange([start, end], hexColor);
                  }
                });
              }
            }
          }
        });
      }
      catch {
        scanCssFallback(text, baseOffset, context);
      }
    }
  }
}

/** 检查内联静态 style 字符串 */
function checkInlineStyleString(styleStr, range, context) {
  if (!range || !styleStr) {
    return;
  }
  const quoteOffset = 1;
  const baseOffset = range[0] + quoteOffset;
  scanCssFallback(styleStr, baseOffset, context);
}

/** 检查动态 :style 表达式 */
function checkDynamicStyleExpression(expr, context) {
  if (!expr) {
    return;
  }
  if (expr.type === 'Literal' && typeof expr.value === 'string' && expr.range) {
    checkInlineStyleString(expr.value, expr.range, context);
  }
  else if (expr.type === 'ObjectExpression' && Array.isArray(expr.properties)) {
    for (const prop of expr.properties) {
      if (prop.type === 'Property') {
        const keyName = prop.key?.name || prop.key?.value;
        if (typeof keyName === 'string' && isColorProperty(keyName)) {
          if (prop.value && prop.value.type === 'Literal' && typeof prop.value.value === 'string') {
            const matches = findNamedColorsInCssValue(prop.value.value);
            for (const m of matches) {
              const hexColor = getHexFromNamedColor(m.color);
              context.report({
                node: prop.value,
                loc: prop.value.loc,
                messageId: 'preferHexStyle',
                data: { color: m.color },
                fix(fixer) {
                  if (!hexColor) {
                    return null;
                  }
                  const raw = context.sourceCode.getText(prop.value);
                  const quote = raw[0] === '"' ? '"' : '\'';
                  return fixer.replaceText(prop.value, `${quote}${hexColor}${quote}`);
                }
              });
            }
          }
        }
      }
    }
  }
}

export const pluginUts = {
  meta: {
    name: 'eslint-plugin-uts',
    version: '1.0.0'
  },
  rules: {
    /** 1. 严禁使用 interface（规避 UTS110111163） */
    'no-interface': {
      meta: {
        type: 'problem',
        docs: {
          description: 'UTS 强类型系统一律禁止使用 interface，必须全部统一使用 type（规避 UTS110111163 编译错误）'
        },
        fixable: 'code',
        messages: {
          noInterface: '[UTS规范] UTS 强类型系统禁止使用 interface 定义对象结构，必须统一使用 type 类型别名（规避 UTS110111163 错误）'
        }
      },
      create(context) {
        const filename = context.filename || context.getFilename?.() || '';
        if (filename.endsWith('.d.ts')) {
          return {};
        }

        return {
          TSInterfaceDeclaration(node) {
            context.report({
              node,
              messageId: 'noInterface',
              fix(fixer) {
                const sourceCode = context.sourceCode;
                const interfaceToken = sourceCode.getFirstToken(node);
                if (interfaceToken && interfaceToken.value === 'interface') {
                  const idText = sourceCode.getText(node.id);
                  const typeParamsText = node.typeParameters ? sourceCode.getText(node.typeParameters) : '';
                  const bodyText = sourceCode.getText(node.body);
                  return fixer.replaceText(node, `type ${idText}${typeParamsText} = ${bodyText}`);
                }
                return null;
              }
            });
          }
        };
      }
    },

    /** 2. 严禁使用 undefined（规避 UTS110111119） */
    'no-undefined': {
      meta: {
        type: 'problem',
        docs: {
          description: 'UTS 强类型系统不支持 undefined，可空类型统一用 Type | null，初始值统一用 null（规避 UTS110111119）'
        },
        messages: {
          typeUndefined: '[UTS规范] UTS 不支持 undefined 类型，可空类型请统一使用 Type | null（规避 UTS110111119 错误）',
          valueUndefined: '[UTS规范] UTS 不存在 undefined，变量初始化与空值比较请统一使用 null（规避 UTS110111119 错误）'
        }
      },
      create(context) {
        const filename = context.filename || context.getFilename?.() || '';
        if (filename.endsWith('.d.ts')) {
          return {};
        }

        return {
          TSUndefinedKeyword(node) {
            context.report({
              node,
              messageId: 'typeUndefined'
            });
          },
          Identifier(node) {
            if (node.name === 'undefined') {
              if (node.parent && node.parent.type === 'MemberExpression' && node.parent.property === node && !node.parent.computed) {
                return;
              }
              if (node.parent && node.parent.type === 'Property' && node.parent.key === node && !node.parent.computed) {
                return;
              }
              context.report({
                node,
                messageId: 'valueUndefined'
              });
            }
          }
        };
      }
    },

    /** 3. 基础类型等值比较建议统一使用 == 与 !=（规避 UTS110111120） */
    'prefer-double-equals': {
      meta: {
        type: 'suggestion',
        docs: {
          description: 'UTS 基础类型等值比较严禁使用 === 或 !==，统一使用 == 与 !='
        },
        fixable: 'code',
        messages: {
          preferDouble: '[UTS规范] UTS 语法严禁使用 {{op}}，基础类型等值比较请统一使用 {{suggestOp}}（规避 UTS110111120 错误）'
        }
      },
      create(context) {
        return {
          BinaryExpression(node) {
            if (node.operator === '===' || node.operator === '!==') {
              const suggestOp = node.operator === '===' ? '==' : '!=';
              context.report({
                node,
                messageId: 'preferDouble',
                data: {
                  op: node.operator,
                  suggestOp
                },
                fix(fixer) {
                  const sourceCode = context.sourceCode;
                  const tokens = sourceCode.getTokensBetween(node.left, node.right, token => token.value === node.operator);
                  if (tokens.length > 0) {
                    return fixer.replaceText(tokens[0], suggestOp);
                  }
                  return null;
                }
              });
            }
          }
        };
      }
    },

    /** 4. 严禁按方法调用 map.keys() */
    'no-map-keys-call': {
      meta: {
        type: 'problem',
        docs: {
          description: 'UTS 中 Kotlin 侧 keys 是属性而非方法，调用 keys() 会报 cannot be invoked as a function，改用 UTSJSONObject.keys(obj)'
        },
        messages: {
          noKeysCall: '[UTS规范] UTS 中 Kotlin 侧 keys 是属性而非方法，调用 .keys() 会触发运行时或编译报错，请改用 UTSJSONObject.keys(obj)'
        }
      },
      create(context) {
        return {
          CallExpression(node) {
            if (node.callee && node.callee.type === 'MemberExpression') {
              const prop = node.callee.property;
              if (prop && prop.name === 'keys' && !node.callee.computed) {
                const obj = node.callee.object;
                if (obj && obj.type === 'Identifier' && (obj.name === 'UTSJSONObject' || obj.name === 'Object')) {
                  return;
                }
                context.report({
                  node,
                  messageId: 'noKeysCall'
                });
              }
            }
          }
        };
      }
    },

    /** 5. 严禁导出包裹了顶层函数的对象字面量（如 export const env = { fn }） */
    'no-exported-object-functions': {
      meta: {
        type: 'problem',
        docs: {
          description: '严禁导出包裹了顶层函数的对象字面量（如 export const env = { fn }），会触发 Android Kotlin 编译崩溃 Function invocation expected'
        },
        messages: {
          noExportObjFn: '[UTS规范] 严禁导出包裹了顶层函数的对象字面量（Kotlin 编译报 Function invocation expected），统一使用标准具名函数导出 export function {{fnName}}()'
        }
      },
      create(context) {
        return {
          ExportNamedDeclaration(node) {
            if (node.declaration && node.declaration.type === 'VariableDeclaration') {
              for (const decl of node.declaration.declarations) {
                // 如果显式标注了类型（例如 : Interceptor），属于实现特定契约对象，不属于无类型函数包导出
                if (decl.id && decl.id.typeAnnotation) {
                  continue;
                }
                if (decl.init && decl.init.type === 'ObjectExpression') {
                  for (const prop of decl.init.properties) {
                    if (prop.type === 'Property' && (prop.shorthand || (prop.value?.type === 'Identifier' && prop.key?.name === prop.value?.name))) {
                      const keyName = prop.key?.name || 'fn';
                      context.report({
                        node: prop,
                        messageId: 'noExportObjFn',
                        data: { fnName: keyName }
                      });
                    }
                  }
                }
              }
            }
          }
        };
      }
    },

    /** 6. UVUE 模板中 <view> 挂载文字颜色样式提示（VDOM 不兼容） */
    'uvue-no-view-text-color': {
      meta: {
        type: 'suggestion',
        docs: {
          description: '原生平台 VDOM 模式下 <view> 元素不支持文字颜色样式（color 仅支持 <text>|<button>|<input>|<textarea>）'
        },
        messages: {
          noViewTextColor: '[VDOM不兼容提示] 原生 VDOM 模式下 <view> 元素不支持文字颜色样式（color 仅支持 <text>|<button>|<input>|<textarea>）；Vapor 模式虽可透传，但建议将类名 "{{cls}}" 移至内部 <text> 保持跨端渲染一致'
        }
      },
      create(context) {
        const textClsPattern = /(?:^|\s)(text-(?:\[#[0-9a-fA-F]{3,8}\]|\[(?:rgb|hsl)[^\]]+\]|primary|secondary|white|black|slate-\d+|gray-\d+|zinc-\d+|neutral-\d+|stone-\d+|red-\d+|orange-\d+|amber-\d+|yellow-\d+|lime-\d+|green-\d+|emerald-\d+|teal-\d+|cyan-\d+|sky-\d+|blue-\d+|indigo-\d+|violet-\d+|purple-\d+|fuchsia-\d+|pink-\d+|rose-\d+))(?:\s|$)/g;

        if (!context.sourceCode.parserServices?.defineTemplateBodyVisitor) {
          return {};
        }

        return context.sourceCode.parserServices.defineTemplateBodyVisitor({
          VElement(node) {
            if (node.rawName === 'view') {
              const classList = getClassValues(node);
              for (const { text, loc } of classList) {
                textClsPattern.lastIndex = 0;
                let match = textClsPattern.exec(text);
                while (match !== null) {
                  const matchedCls = match[1];
                  if (!['text-left', 'text-center', 'text-right', 'text-justify'].includes(matchedCls)) {
                    context.report({
                      node,
                      loc,
                      messageId: 'noViewTextColor',
                      data: { cls: matchedCls }
                    });
                  }
                  match = textClsPattern.exec(text);
                }
              }
            }
          }
        });
      }
    },

    /** 7. UVUE 模板中原生 <button> 挂载 flex 对齐类名提示（VDOM 不兼容） */
    'uvue-no-button-flex': {
      meta: {
        type: 'suggestion',
        docs: {
          description: '原生平台 VDOM 模式下 <button> 元素是专用对齐控件，挂载 flex 对齐属性会报错'
        },
        messages: {
          noButtonFlex: '[VDOM不兼容提示] 原生 VDOM 模式下 <button> 是系统原生文本对齐控件，严禁直接使用 flex 对齐类名 "{{cls}}"；复杂排版建议使用 <view> 容器包裹'
        }
      },
      create(context) {
        const buttonFlexPattern = /(?:^|\s)((?:items|justify)-(?:center|start|end|between|around|evenly|stretch|baseline)|flex-(?:row|col|1))(?:\s|$)/g;

        if (!context.sourceCode.parserServices?.defineTemplateBodyVisitor) {
          return {};
        }

        return context.sourceCode.parserServices.defineTemplateBodyVisitor({
          VElement(node) {
            if (node.rawName === 'button') {
              const classList = getClassValues(node);
              for (const { text, loc } of classList) {
                buttonFlexPattern.lastIndex = 0;
                let match = buttonFlexPattern.exec(text);
                while (match !== null) {
                  context.report({
                    node,
                    loc,
                    messageId: 'noButtonFlex',
                    data: { cls: match[1] }
                  });
                  match = buttonFlexPattern.exec(text);
                }
              }
            }
          }
        });
      }
    },

    /** 8. UVUE 模板中使用 gap 与 space 提示（VDOM 不兼容） */
    'uvue-no-gap-and-space': {
      meta: {
        type: 'suggestion',
        docs: {
          description: '原生 VDOM Flexbox 引擎不支持 gap 及 space-* 类名，会导致子元素挤压在一起'
        },
        messages: {
          noGap: '[VDOM不兼容提示] 原生 VDOM Flexbox 引擎不支持 "{{cls}}"（会导致元素挤压在一起）；水平排列建议改用 mr-* / ml-*，垂直列表建议改用 mb-* 或 mt-*'
        }
      },
      create(context) {
        const gapPattern = /(?:^|\s)(gap-\S+|space-[xy]-\S+)(?:\s|$)/g;

        if (!context.sourceCode.parserServices?.defineTemplateBodyVisitor) {
          return {};
        }

        return context.sourceCode.parserServices.defineTemplateBodyVisitor({
          VElement(node) {
            const classList = getClassValues(node);
            for (const { text, loc } of classList) {
              gapPattern.lastIndex = 0;
              let match = gapPattern.exec(text);
              while (match !== null) {
                context.report({
                  node,
                  loc,
                  messageId: 'noGap',
                  data: { cls: match[1] }
                });
                match = gapPattern.exec(text);
              }
            }
          }
        });
      }
    },

    /** 9. UVUE 模板中使用 font-mono / font-sans 提示（VDOM 解析器限制） */
    'uvue-no-font-mono': {
      meta: {
        type: 'suggestion',
        docs: {
          description: '原生平台 CSS 解析器缺少 font-size 会报错 parse-css-font，建议避免使用 font-mono / font-sans'
        },
        messages: {
          noFontMono: '[VDOM不兼容提示] 原生平台严格 CSS 解析器缺少 font-size 会报错 parse-css-font，建议避免使用 "{{cls}}" 工具类，改用内联 style="font-family: monospace;"'
        }
      },
      create(context) {
        const fontPattern = /(?:^|\s)(font-(?:mono|sans|serif))(?:\s|$)/g;

        if (!context.sourceCode.parserServices?.defineTemplateBodyVisitor) {
          return {};
        }

        return context.sourceCode.parserServices.defineTemplateBodyVisitor({
          VElement(node) {
            const classList = getClassValues(node);
            for (const { text, loc } of classList) {
              fontPattern.lastIndex = 0;
              let match = fontPattern.exec(text);
              while (match !== null) {
                context.report({
                  node,
                  loc,
                  messageId: 'noFontMono',
                  data: { cls: match[1] }
                });
                match = fontPattern.exec(text);
              }
            }
          }
        });
      }
    },

    /** 10. UVUE 模板中使用 items-baseline 提示（VDOM 编译器限制） */
    'uvue-no-items-baseline': {
      meta: {
        type: 'suggestion',
        docs: {
          description: '原生 VDOM CSS 编译器不支持 align-items: baseline'
        },
        messages: {
          noItemsBaseline: '[VDOM不兼容提示] 原生 VDOM CSS 编译器不支持 align-items: baseline，建议改用 items-end 或 items-center'
        }
      },
      create(context) {
        if (!context.sourceCode.parserServices?.defineTemplateBodyVisitor) {
          return {};
        }

        return context.sourceCode.parserServices.defineTemplateBodyVisitor({
          VElement(node) {
            const classList = getClassValues(node);
            for (const { text, loc } of classList) {
              if (/(?:^|\s)items-baseline(?:\s|$)/.test(text)) {
                context.report({
                  node,
                  loc,
                  messageId: 'noItemsBaseline'
                });
              }
            }
          }
        });
      }
    },

    /** 11. UVUE 模板与样式中使用英文单词命名颜色提示与自动修复 */
    'uvue-prefer-hex-color': {
      meta: {
        type: 'suggestion',
        fixable: 'code',
        docs: {
          description: '原生平台部分渲染层不支持英文单词命名颜色（如 bg-[red]、color: red），建议统一使用标准十六进制色值'
        },
        messages: {
          preferHex: '[VDOM不兼容提示] 原生端部分平台不支持英文单词命名颜色 "{{cls}}"，建议统一使用标准十六进制色值（如 text-[#ffffff]、bg-[#ef4444]）',
          preferHexStyle: '[VDOM不兼容提示] 原生端部分平台不支持英文单词命名颜色 "{{color}}"，建议统一使用标准十六进制色值（如 #ffffff、#ef4444）'
        }
      },
      create(context) {
        const namedColorPattern = /(?:^|\s)((?:bg|text|border(?:-[trblxy])?)-\[([a-z]+)\])(?:\s|$)/gi;

        if (!context.sourceCode.parserServices?.defineTemplateBodyVisitor) {
          return {};
        }

        return context.sourceCode.parserServices.defineTemplateBodyVisitor({
          VElement(node) {
            // 1. 检查模板 class 中的 Tailwind 英文单词颜色（如 bg-[red]、text-[white]、border-t-[blue] 等）
            const classList = getClassValues(node);
            for (const { text, loc, attrNode } of classList) {
              namedColorPattern.lastIndex = 0;
              let match = namedColorPattern.exec(text);
              while (match !== null) {
                const colorName = match[2]?.toLowerCase();
                if (colorName && CSS_NAMED_COLORS.has(colorName)) {
                  const hexColor = getHexFromNamedColor(colorName);
                  const matchedCls = match[1];
                  context.report({
                    node,
                    loc,
                    messageId: 'preferHex',
                    data: { cls: matchedCls },
                    fix(fixer) {
                      if (!hexColor || !attrNode) {
                        return null;
                      }
                      const rawAttr = context.sourceCode.getText(attrNode);
                      const prefix = matchedCls.slice(0, matchedCls.indexOf('[') + 1);
                      const replacement = `${prefix}${hexColor}]`;
                      const newAttr = rawAttr.replace(matchedCls, replacement);
                      if (newAttr !== rawAttr) {
                        return fixer.replaceText(attrNode, newAttr);
                      }
                      return null;
                    }
                  });
                }
                match = namedColorPattern.exec(text);
              }
            }

            // 2. 检查模板内联 style 与 :style 属性
            if (node.startTag && node.startTag.attributes) {
              for (const attr of node.startTag.attributes) {
                // 静态 style="color: red; ..."
                if (!attr.directive && attr.key && attr.key.name === 'style') {
                  if (attr.value && typeof attr.value.value === 'string' && attr.value.range) {
                    checkInlineStyleString(attr.value.value, attr.value.range, context);
                  }
                }
                // 动态 :style="{ color: 'red' }" 或 :style="'color: red;'"
                if (attr.directive && attr.key && (attr.key.name?.name === 'style' || attr.key.argument?.name === 'style')) {
                  if (attr.value && attr.value.expression) {
                    checkDynamicStyleExpression(attr.value.expression, context);
                  }
                }
              }
            }
          }
        }, {
          // 3. 检查 <style> / <style scoped> / <style lang="..."> 块中的 CSS 样式声明
          'Program:exit': function () {
            const df = context.sourceCode.parserServices?.getDocumentFragment?.();
            if (!df || !Array.isArray(df.children))
              return;
            const styleNodes = df.children.filter(c => c.type === 'VElement' && c.name === 'style');
            for (const styleNode of styleNodes) {
              checkStyleElement(styleNode, context);
            }
          }
        });
      }
    },

    /** 12. UVUE 模板中严禁使用 ! 提高优先级修饰符（鸿蒙端编译报错） */
    'uvue-no-important-modifier': {
      meta: {
        type: 'problem',
        docs: {
          description: '严禁在模板 class 中使用 ! 提高优先级修饰符，鸿蒙 app-harmony 会报错 Cannot apply unknown utility class'
        },
        messages: {
          noImportant: '[鸿蒙编译铁律] 严禁在模板 class 中使用 "!{{cls}}"，编译为 HarmonyOS 原生代码时会报 Cannot apply unknown utility class，请使用内联 style 或局部样式类替代'
        }
      },
      create(context) {
        const importantPattern = /(?:^|\s)!([\w[\]#-]+)(?:\s|$)/g;

        if (!context.sourceCode.parserServices?.defineTemplateBodyVisitor) {
          return {};
        }

        return context.sourceCode.parserServices.defineTemplateBodyVisitor({
          VElement(node) {
            const classList = getClassValues(node);
            for (const { text, loc } of classList) {
              importantPattern.lastIndex = 0;
              let match = importantPattern.exec(text);
              while (match !== null) {
                context.report({
                  node,
                  loc,
                  messageId: 'noImportant',
                  data: { cls: match[1] }
                });
                match = importantPattern.exec(text);
              }
            }
          }
        });
      }
    },

    /** 8. UVUE/Vue 模板中未导入组件自动检测与一键快速修复导入 (Code Action 自动导入) */
    'auto-import-component': {
      meta: {
        type: 'suggestion',
        docs: {
          description: '检测 UVUE/Vue 模板中未导入的自定义组件，并在 VS Code 快速修复（小灯泡）中提供点击一键自动导入选项'
        },
        hasSuggestions: true,
        messages: {
          undefComponent: '组件 \'<{{name}}>\' 尚未导入',
          undefNoCandidate: '组件 \'<{{name}}>\' 尚未定义或导入'
        }
      },
      create(context) {
        if (!context.sourceCode.parserServices?.defineTemplateBodyVisitor) {
          return {};
        }

        const filename = context.filename || context.getFilename?.() || '';
        if (!filename.endsWith('.vue') && !filename.endsWith('.uvue')) {
          return {};
        }

        // 收集 script 中已定义的标识符与导入
        const definedNames = new Set();

        // 收集自身组件名（避免递归引用自身报错）
        const basename = path.basename(filename, path.extname(filename));
        definedNames.add(basename);

        const ast = context.sourceCode.ast;
        let lastImportNode = null;

        if (ast && ast.body) {
          for (const stmt of ast.body) {
            if (stmt.type === 'ImportDeclaration') {
              lastImportNode = stmt;
              for (const spec of stmt.specifiers || []) {
                if (spec.local && spec.local.name) {
                  definedNames.add(spec.local.name);
                }
              }
            }
            else if (stmt.type === 'VariableDeclaration') {
              for (const decl of stmt.declarations || []) {
                if (decl.id && decl.id.name) {
                  definedNames.add(decl.id.name);
                }
              }
            }
            else if (stmt.type === 'FunctionDeclaration' && stmt.id?.name) {
              definedNames.add(stmt.id.name);
            }
            else if (stmt.type === 'ClassDeclaration' && stmt.id?.name) {
              definedNames.add(stmt.id.name);
            }
          }
        }

        // 查找 <script setup> 标签位置
        const rawSource = context.sourceCode.text;
        const scriptSetupMatch = /<script(?:\s[^>]*)?\ssetup(?:\s[^>]*)?>/i.exec(rawSource);

        // 忽略的内置/基础/uni-app/Vue 原生标签
        const defaultIgnore = new Set([
          'view',
          'scroll-view',
          'swiper',
          'swiper-item',
          'match-media',
          'movable-area',
          'movable-view',
          'cover-view',
          'cover-image',
          'root-portal',
          'list-view',
          'list-item',
          'sticky-header',
          'sticky-section',
          'waterflow',
          'flow-item',
          'nested-scroll-header',
          'nested-scroll-body',
          'refresh-box',
          'refresh-header',
          'custom-refresher-box',
          'text',
          'rich-text',
          'progress',
          'icon',
          'button',
          'checkbox',
          'checkbox-group',
          'editor',
          'form',
          'input',
          'label',
          'picker',
          'picker-view',
          'picker-view-column',
          'radio',
          'radio-group',
          'slider',
          'switch',
          'textarea',
          'navigator',
          'page-meta',
          'navigation-bar',
          'audio',
          'camera',
          'image',
          'video',
          'live-player',
          'live-pusher',
          'map',
          'canvas',
          'web-view',
          'ad',
          'ad-custom',
          'open-data',
          'slot',
          'template',
          'component',
          'transition',
          'transition-group',
          'keep-alive',
          'teleport'
        ]);

        const projectRoot = process.cwd();

        function toPascalCase(str) {
          return str.replace(/(?:^|[-_])(\w)/g, (_, c) => c.toUpperCase());
        }

        // 查找候选组件文件（全工程 src 目录递归检索）
        function findCandidates(rawName) {
          const candidates = [];
          const seen = new Set();

          function addCandidate(filePath) {
            if (fs.existsSync(filePath) && !seen.has(filePath)) {
              seen.add(filePath);
              const rel = `@/${path.relative(projectRoot, filePath).replace(/\\/g, '/')}`;
              candidates.push({ filePath, importPath: rel });
            }
          }

          const pascalName = toPascalCase(rawName);

          // 1. 优先检查当前文件同目录或其 components 子目录（就近原则）
          const currentDir = path.dirname(filename);
          addCandidate(path.join(currentDir, 'components', `${rawName}.uvue`));
          addCandidate(path.join(currentDir, 'components', `${rawName}.vue`));
          addCandidate(path.join(currentDir, 'components', `${pascalName}.uvue`));
          addCandidate(path.join(currentDir, 'components', `${pascalName}.vue`));
          addCandidate(path.join(currentDir, 'components', rawName, `${rawName}.uvue`));
          addCandidate(path.join(currentDir, 'components', pascalName, `${pascalName}.uvue`));
          addCandidate(path.join(currentDir, `${rawName}.uvue`));
          addCandidate(path.join(currentDir, `${pascalName}.uvue`));

          // 2. 检查 src/components/
          addCandidate(path.join(projectRoot, 'src/components', rawName, `${rawName}.uvue`));
          addCandidate(path.join(projectRoot, 'src/components', pascalName, `${pascalName}.uvue`));
          addCandidate(path.join(projectRoot, 'src/components', rawName, `${rawName}.vue`));
          addCandidate(path.join(projectRoot, 'src/components', pascalName, `${pascalName}.vue`));
          addCandidate(path.join(projectRoot, 'src/components', `${rawName}.uvue`));
          addCandidate(path.join(projectRoot, 'src/components', `${pascalName}.uvue`));
          addCandidate(path.join(projectRoot, 'src/components', `${rawName}.vue`));
          addCandidate(path.join(projectRoot, 'src/components', `${pascalName}.vue`));

          // 3. 全局扫描 src 目录下的所有 .uvue 与 .vue 文件（支持全项目任意子目录组件，如 src/tabbar/ui/...）
          const srcDir = path.join(projectRoot, 'src');
          if (fs.existsSync(srcDir)) {
            const allFiles = [];
            function walk(dir) {
              try {
                const entries = fs.readdirSync(dir, { withFileTypes: true });
                for (const entry of entries) {
                  if (entry.isDirectory()) {
                    if (!['node_modules', 'unpackage', 'dist', '.git'].includes(entry.name)) {
                      walk(path.join(dir, entry.name));
                    }
                  }
                  else if (entry.name.endsWith('.uvue') || entry.name.endsWith('.vue')) {
                    allFiles.push(path.join(dir, entry.name));
                  }
                }
              }
              catch {}
            }
            walk(srcDir);

            for (const filePath of allFiles) {
              if (seen.has(filePath))
                continue;
              const ext = path.extname(filePath);
              const base = path.basename(filePath, ext);
              const parentDir = path.basename(path.dirname(filePath));

              // 文件名精确或 PascalCase 匹配
              if (base === rawName || base === pascalName || base.toLowerCase() === rawName.toLowerCase() || base.toLowerCase() === pascalName.toLowerCase()) {
                addCandidate(filePath);
                continue;
              }

              // 目录名匹配（如 TabbarItem/index.uvue）
              if (parentDir === rawName || parentDir === pascalName || parentDir.toLowerCase() === rawName.toLowerCase() || parentDir.toLowerCase() === pascalName.toLowerCase()) {
                if (base === 'index' || base === rawName || base === pascalName) {
                  addCandidate(filePath);
                  continue;
                }
              }

              // 组件内容定义匹配 name: 'rawName'
              try {
                const content = fs.readFileSync(filePath, 'utf-8');
                if (new RegExp(`name\\s*:\\s*['"]${rawName}['"]`, 'i').test(content)) {
                  addCandidate(filePath);
                }
              }
              catch {}
            }
          }

          return candidates;
        }

        return context.sourceCode.parserServices.defineTemplateBodyVisitor({
          VElement(node) {
            const rawName = node.rawName;
            if (!rawName)
              return;

            // 基础标签与已知标签跳过
            if (defaultIgnore.has(rawName))
              return;

            // 纯小写 HTML 标签跳过（非自定义组件）
            if (/^[a-z]+$/.test(rawName))
              return;

            // easycom 库前缀组件跳过
            if (/^(?:uni|up|u|lime|iRainna|z-paging)-/i.test(rawName))
              return;

            // 已定义/已导入组件跳过
            if (definedNames.has(rawName))
              return;

            // 查找候选组件
            const candidates = findCandidates(rawName);

            if (candidates.length > 0) {
              const suggestions = candidates.map(c => ({
                desc: `导入组件: import ${rawName} from '${c.importPath}'`,
                fix(fixer) {
                  if (lastImportNode) {
                    return fixer.insertTextAfter(lastImportNode, `\nimport ${rawName} from '${c.importPath}';`);
                  }
                  if (scriptSetupMatch) {
                    const insertPos = scriptSetupMatch.index + scriptSetupMatch[0].length;
                    return fixer.insertTextAfterRange([insertPos, insertPos], `\nimport ${rawName} from '${c.importPath}';\n`);
                  }
                  return null;
                }
              }));

              context.report({
                node: node.startTag,
                messageId: 'undefComponent',
                data: { name: rawName },
                suggest: suggestions
              });
            }
            else {
              context.report({
                node: node.startTag,
                messageId: 'undefNoCandidate',
                data: { name: rawName }
              });
            }
          }
        });
      }
    },

    /** 9. 未定义符号/函数自动检测并提供一键快速修复导入 (Quick Fix 导入函数与变量) */
    'auto-import-symbol': {
      meta: {
        type: 'problem',
        docs: {
          description: '检测未导入的全局函数与变量（如 switchTabbar、useAppStore 等），标红报错并在快速修复（小灯泡）中提供一键自动导入'
        },
        hasSuggestions: true,
        messages: {
          undefWithImport: '\'{{name}}\' 未定义。可一键导入: {{importPath}}',
          undef: '\'{{name}}\' is not defined.'
        }
      },
      create(context) {
        const filename = context.filename || context.getFilename?.() || '';
        if (filename.endsWith('.d.ts') || filename.endsWith('.d.uts.ts')) {
          return {};
        }

        const projectRoot = process.cwd();

        // 收集全项目公开导出的符号索引
        function collectProjectExports() {
          const exportMap = new Map();

          function addSymbol(name, importPath) {
            if (!name || name === 'default' || name.length <= 1)
              return;
            if (!exportMap.has(name))
              exportMap.set(name, new Set());
            exportMap.get(name).add(importPath);
          }

          function parseExports(relPath, facadeImportPath) {
            const fullPath = path.join(projectRoot, relPath);
            if (!fs.existsSync(fullPath))
              return;
            const content = fs.readFileSync(fullPath, 'utf-8');
            const importPath = facadeImportPath || (`@/${relPath.replace(/\\/g, '/')}`);

            const declRegex = /export\s+(?:declare\s+)?(?:function|const|let|var|type|class|enum)\s+([\w$]+)/g;
            let m = declRegex.exec(content);
            while (m !== null) {
              addSymbol(m[1], importPath);
              m = declRegex.exec(content);
            }

            const namedExportRegex = /export\s*\{([^}]+)\}/g;
            let nm = namedExportRegex.exec(content);
            while (nm !== null) {
              const parts = nm[1].split(',');
              for (const p of parts) {
                const trimmed = p.trim();
                if (!trimmed)
                  continue;
                const aliasMatch = trimmed.match(/\bas\s+([\w$]+)$/);
                if (aliasMatch) {
                  addSymbol(aliasMatch[1], importPath);
                }
                else {
                  const directMatch = trimmed.match(/^[\w$]+/);
                  if (directMatch)
                    addSymbol(directMatch[0], importPath);
                }
              }
              nm = namedExportRegex.exec(content);
            }

            const exportStarRegex = /export\s*\*\s*from\s*['"]([^'"]+)['"]/g;
            let sm = exportStarRegex.exec(content);
            while (sm !== null) {
              const targetRel = path.normalize(path.join(path.dirname(relPath), sm[1]));
              for (const ext of ['', '.uts', '.ts', '/index.uts', '/index.ts']) {
                const cand = targetRel + ext;
                const candFull = path.join(projectRoot, cand);
                if (fs.existsSync(candFull) && !fs.statSync(candFull).isDirectory()) {
                  parseExports(cand, importPath);
                  break;
                }
              }
              sm = exportStarRegex.exec(content);
            }
          }

          // 核心公共门面
          parseExports('src/tabbar/index.uts');
          parseExports('src/store/index.uts');
          parseExports('src/router/index.uts');
          parseExports('src/http/request.uts');

          // src/utils 各模块
          const utilsDir = path.join(projectRoot, 'src/utils');
          if (fs.existsSync(utilsDir)) {
            try {
              for (const sub of fs.readdirSync(utilsDir)) {
                const idxFile = path.join(utilsDir, sub, 'index.uts');
                if (fs.existsSync(idxFile)) {
                  parseExports(path.relative(projectRoot, idxFile));
                }
              }
            }
            catch {}
          }

          return exportMap;
        }

        const exportMap = collectProjectExports();

        return {
          'Program:exit': function () {
            const scopeManager = context.sourceCode.scopeManager;
            if (!scopeManager || !scopeManager.globalScope)
              return;

            const globalVars = new Set(
              scopeManager.globalScope.variables.map(v => v.name)
            );

            // 基础内置全局变量与常见类型
            const builtins = new Set([
              'String',
              'Number',
              'Boolean',
              'Array',
              'Object',
              'Function',
              'Promise',
              'Map',
              'Set',
              'Date',
              'Math',
              'JSON',
              'RegExp',
              'Error',
              'Record',
              'any',
              'void',
              'null',
              'undefined',
              'never',
              'unknown',
              'UTSJSONObject',
              'Uni',
              'console',
              'setTimeout',
              'clearTimeout',
              'setInterval',
              'clearInterval',
              'ref',
              'computed',
              'reactive',
              'watch',
              'watchEffect',
              'shallowRef',
              'shallowReactive',
              'toRef',
              'toRefs',
              'toValue',
              'unref',
              'nextTick',
              'onMounted',
              'onUpdated',
              'onUnmounted',
              'provide',
              'inject',
              'defineOptions',
              'defineProps',
              'defineEmits',
              'defineExpose',
              'defineSlots',
              'defineModel',
              'definePage',
              'withDefaults',
              'uni',
              'plus'
            ]);

            // 收集当前文件中所有已存在的 ImportDeclaration
            const ast = context.sourceCode.ast;
            let lastImportNode = null;
            const existingImports = new Map(); // importPath -> ImportDeclaration node

            if (ast && ast.body) {
              for (const stmt of ast.body) {
                if (stmt.type === 'ImportDeclaration' && stmt.source?.value) {
                  lastImportNode = stmt;
                  existingImports.set(stmt.source.value, stmt);
                }
              }
            }

            // 查找 <script setup> 标签位置
            const rawSource = context.sourceCode.text;
            const scriptSetupMatch = /<script\s[^>]*setup[^>]*>/i.exec(rawSource);

            const reported = new Set();

            for (const ref of scopeManager.globalScope.through) {
              const idNode = ref.identifier;
              const name = idNode.name;

              if (reported.has(name))
                continue;
              if (globalVars.has(name) || builtins.has(name))
                continue;

              reported.add(name);

              const candidateImports = exportMap.get(name);

              if (candidateImports && candidateImports.size > 0) {
                const suggestions = [];
                for (const importPath of candidateImports) {
                  suggestions.push({
                    desc: `导入 ${name}: import { ${name} } from '${importPath}'`,
                    fix(fixer) {
                      const existing = existingImports.get(importPath);
                      if (existing && existing.specifiers && existing.specifiers.length > 0) {
                        const lastSpec = existing.specifiers[existing.specifiers.length - 1];
                        return fixer.insertTextAfter(lastSpec, `, ${name}`);
                      }
                      if (lastImportNode) {
                        return fixer.insertTextAfter(lastImportNode, `\nimport { ${name} } from '${importPath}';`);
                      }
                      if (scriptSetupMatch) {
                        const insertPos = scriptSetupMatch.index + scriptSetupMatch[0].length;
                        return fixer.insertTextAfterRange([insertPos, insertPos], `\nimport { ${name} } from '${importPath}';\n`);
                      }
                      return null;
                    }
                  });
                }

                context.report({
                  node: idNode,
                  messageId: 'undefWithImport',
                  data: {
                    name,
                    importPath: Array.from(candidateImports)[0]
                  },
                  suggest: suggestions
                });
              }
              else {
                context.report({
                  node: idNode,
                  messageId: 'undef',
                  data: { name }
                });
              }
            }
          }
        };
      }
    },

    /** 13. UVUE 模板中标签与属性格式自动化清理（消除属性内换行、标签与属性间多余空行） */
    'uvue-clean-template-whitespace': {
      meta: {
        type: 'layout',
        docs: {
          description: '自动格式化清理模板中标签内部空行、标签与属性间多余空行、class 属性内的换行与异常空格'
        },
        fixable: 'code',
        messages: {
          noBlankInTag: '标签内部（标签名与属性、属性与属性之间）禁止多余空行',
          noBlankAfterComment: 'HTML 注释与紧随其后的标签之间不应有多余空行',
          cleanAttr: '{{attrName}} 属性值应保持单行整洁，禁止在引号内部包含多余换行、连续空行或首尾空格'
        }
      },
      create(context) {
        if (!context.sourceCode.parserServices?.defineTemplateBodyVisitor) {
          return {};
        }

        return context.sourceCode.parserServices.defineTemplateBodyVisitor({
          // 1. 检查并清理标签内所有静态属性（class, style, src 等）内部的换行与连续空白
          VAttribute(node) {
            // 排除指令（如 :style、v-bind 等，只针对静态字符串属性）
            if (node.directive || !node.key || !node.value) {
              return;
            }

            const attrName = typeof node.key.name === 'string' ? node.key.name : 'attribute';
            const rawText = context.sourceCode.getText(node.value);
            const match = rawText.match(/^(['"])([\s\S]*)\1$/);
            if (!match) {
              return;
            }

            const quote = match[1];
            const content = match[2];

            const hasNewline = /[\r\n]/.test(content);
            const hasExcessiveSpaces = /^\s+|\s+$|\s{2,}/.test(content);

            if (hasNewline || hasExcessiveSpaces) {
              const cleanedContent = content.replace(/\s+/g, ' ').trim();
              const fixedText = `${quote}${cleanedContent}${quote}`;

              context.report({
                node: node.value,
                messageId: 'cleanAttr',
                data: { attrName },
                fix(fixer) {
                  return fixer.replaceText(node.value, fixedText);
                }
              });
            }
          },

          // 2. 检查并清理开始标签内部（标签名与首属性、属性之间、尾属性与 > 之间）的多余空行
          VStartTag(node) {
            const attributes = node.attributes || [];
            if (attributes.length === 0) {
              return;
            }

            // 2.1 检查标签名到第一个属性之间的空行
            const firstAttr = attributes[0];
            const tagName = node.parent?.rawName || '';
            const tagIdentifierEnd = node.range[0] + tagName.length + 1; // <tagName 的结束位置
            const textBeforeFirstAttr = context.sourceCode.text.slice(tagIdentifierEnd, firstAttr.range[0]);

            if (/(?:[\r\n]\s*){2,}/.test(textBeforeFirstAttr)) {
              const indentMatch = textBeforeFirstAttr.match(/\r?\n([ \t]*)$/);
              const indent = indentMatch ? indentMatch[1] : '      ';
              context.report({
                node: firstAttr,
                messageId: 'noBlankInTag',
                fix(fixer) {
                  return fixer.replaceTextRange([tagIdentifierEnd, firstAttr.range[0]], `\n${indent}`);
                }
              });
            }

            // 2.2 检查属性与属性之间的空行
            for (let i = 0; i < attributes.length - 1; i++) {
              const currentAttr = attributes[i];
              const nextAttr = attributes[i + 1];
              const textBetween = context.sourceCode.text.slice(currentAttr.range[1], nextAttr.range[0]);
              if (/(?:[\r\n]\s*){2,}/.test(textBetween)) {
                const indentMatch = textBetween.match(/\r?\n([ \t]*)$/);
                const indent = indentMatch ? indentMatch[1] : '      ';
                context.report({
                  node: nextAttr,
                  messageId: 'noBlankInTag',
                  fix(fixer) {
                    return fixer.replaceTextRange([currentAttr.range[1], nextAttr.range[0]], `\n${indent}`);
                  }
                });
              }
            }

            // 2.3 检查最后一个属性到 > 之间的空行
            const lastAttr = attributes[attributes.length - 1];
            const closeBracketStart = node.selfClosing ? node.range[1] - 2 : node.range[1] - 1;
            const textAfterLastAttr = context.sourceCode.text.slice(lastAttr.range[1], closeBracketStart);
            if (/(?:[\r\n]\s*){2,}/.test(textAfterLastAttr)) {
              const indentMatch = textAfterLastAttr.match(/\r?\n([ \t]*)$/);
              const indent = indentMatch ? indentMatch[1] : '    ';
              context.report({
                node: lastAttr,
                messageId: 'noBlankInTag',
                fix(fixer) {
                  return fixer.replaceTextRange([lastAttr.range[1], closeBracketStart], `\n${indent}`);
                }
              });
            }
          }
        }, {
          // 3. 检查并清理 HTML 注释与紧随其后的标签之间的空行
          'Program:exit': function () {
            const comments = context.sourceCode.ast?.templateBody?.comments || [];
            for (const comment of comments) {
              const textAfter = context.sourceCode.text.slice(comment.range[1]);
              const match = textAfter.match(/^((?:[ \t]*\r?\n){2,})([ \t]*)(<[a-z])/i);
              if (match) {
                const replaceStart = comment.range[1];
                const replaceEnd = comment.range[1] + match[1].length + match[2].length;
                const indent = match[2];
                context.report({
                  loc: comment.loc,
                  messageId: 'noBlankAfterComment',
                  fix(fixer) {
                    return fixer.replaceTextRange([replaceStart, replaceEnd], `\n${indent}`);
                  }
                });
              }
            }
          }
        });
      }
    }
  }
};

export default pluginUts;
