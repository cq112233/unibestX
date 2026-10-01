/**
 * uni-app X 专属 ESLint 插件：UTS 语法与 UVUE 模板规范校验
 *
 * 核心策略：
 * 1. 满足 Vue 3 Vapor 蒸汽模式与 Kotlin/Swift 原生强类型规范（报错拦截）
 * 2. 对 VDOM 模式特有的渲染差异提供友好兼容性提示（警告提示）
 */

/** 辅助函数：从 VElement 或 AST 节点中获取 class 属性字符串 */
function getClassValues(node) {
  const values = [];
  if (!node.startTag || !node.startTag.attributes) {
    return values;
  }

  for (const attr of node.startTag.attributes) {
    if (!attr.directive && attr.key && attr.key.name === 'class') {
      if (attr.value && typeof attr.value.value === 'string') {
        values.push({ text: attr.value.value, loc: attr.loc });
      }
    }
    // 处理 :class="'...'" 静态字符串形式
    if (attr.directive && attr.key && (attr.key.name?.name === 'class' || attr.key.argument?.name === 'class')) {
      if (attr.value && attr.value.expression && attr.value.expression.type === 'Literal' && typeof attr.value.expression.value === 'string') {
        values.push({ text: attr.value.expression.value, loc: attr.loc });
      }
    }
  }
  return values;
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

    /** 11. UVUE 模板中使用英文单词命名颜色提示 */
    'uvue-prefer-hex-color': {
      meta: {
        type: 'suggestion',
        docs: {
          description: '原生平台部分渲染层不支持英文单词命名颜色（如 bg-[red]），建议统一使用标准十六进制色值'
        },
        messages: {
          preferHex: '[VDOM不兼容提示] 原生端部分平台不支持英文单词命名颜色 "{{cls}}"，建议统一使用标准十六进制色值（如 text-[#ffffff]、bg-[#ef4444]）'
        }
      },
      create(context) {
        const namedColorPattern = /(?:^|\s)((?:bg|text|border)-\[(?:red|blue|green|yellow|black|white|purple|orange|pink|gray)\])(?:\s|$)/gi;

        if (!context.sourceCode.parserServices?.defineTemplateBodyVisitor) {
          return {};
        }

        return context.sourceCode.parserServices.defineTemplateBodyVisitor({
          VElement(node) {
            const classList = getClassValues(node);
            for (const { text, loc } of classList) {
              namedColorPattern.lastIndex = 0;
              let match = namedColorPattern.exec(text);
              while (match !== null) {
                context.report({
                  node,
                  loc,
                  messageId: 'preferHex',
                  data: { cls: match[1] }
                });
                match = namedColorPattern.exec(text);
              }
            }
          }
        });
      }
    }
  }
};

export default pluginUts;
