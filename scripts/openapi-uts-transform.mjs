/**
 * openapi-ts-request 生成代码 → uni-app X 可编译 UTS 的改写器
 *
 * 生成器模板（node_modules/openapi-ts-request/templates/serviceController.njk）产出的是
 * 浏览器 / Node 世界里的普通 TS：
 *
 *   export function foo({ body, options }: {
 *     body: API.Xxx;
 *     options?: OpenApiRequestOptions;
 *   }) {
 *     return request<API.Yyy>('/path', {
 *       method: 'POST',
 *       headers: { 'Content-Type': 'application/json' },
 *       data: body,
 *       ...(options || {}),
 *     });
 *   }
 *
 * 这两个点在 UTS 里都不成立：
 *   1. 参数位置「直接声明对象字面量类型」—— UTS110111101（只能用具名 type 别名）；
 *   2. 强类型对象字面量里 `...(options || {})` 展开 —— UTS 不支持这种覆盖式展开。
 *
 * 本模块把它改写成：
 *
 *   export type FooRequestParams = {
 *     body: API.Xxx;
 *     options?: OpenApiRequestOptions;
 *   };
 *
 *   export function foo(requestParams: FooRequestParams) {
 *     return request<API.Yyy>('/path', buildBodyRequestConfig('POST', requestParams.body, requestParams.options));
 *   }
 *
 * 调用方写法不变（仍然是 `foo({ body })`），`buildBodyRequestConfig` 见 src/http/openapi.uts。
 * 遇到本改写器还不认识的生成形态（query 参数 / 文件上传 / 路径变量）会直接抛错，
 * 让生成流程显式失败，而不是悄悄产出编译不过的 .uts。
 */

const SIGNATURE_RE = /^export function (\w+)\(\{$/;
const TYPE_OPEN_RE = /^\}: \{$/;
const TYPE_CLOSE_RE = /^\}\) \{$/;

/**
 * 读取「return request...」调用块里用到的关键信息
 * @param {string} bodyText 函数体文本
 * @param {string} functionName 函数名（仅用于报错定位）
 */
function parseRequestCall(bodyText, functionName) {
  const callMatch = /return\s+request(<[^>]*>)?\(/.exec(bodyText);
  if (!callMatch) {
    throw new Error(`[openapi-uts-transform] ${functionName}: 找不到 return request(...) 调用，生成模板可能已变更`);
  }

  const generics = callMatch[1] || '';

  if (/\bparams:\s*\{/.test(bodyText)) {
    throw new Error(`[openapi-uts-transform] ${functionName}: 暂不支持带 query 参数的生成形态，请先扩展改写器`);
  }
  if (/\bdata:\s*formData\b/.test(bodyText)) {
    throw new Error(`[openapi-uts-transform] ${functionName}: 暂不支持文件上传（FormData）的生成形态，请先扩展改写器`);
  }

  const methodMatch = /method:\s*'([A-Za-z]+)'/.exec(bodyText);
  const dataMatch = /data:\s*(\w+)/.exec(bodyText);
  if (!methodMatch || !dataMatch) {
    throw new Error(`[openapi-uts-transform] ${functionName}: 无法解析 method / data，生成模板可能已变更`);
  }

  // 路径可能是普通字符串，也可能是带 ${} 的模板字符串（路径变量）
  const pathMatch = /return\s+request(?:<[^>]*>)?\(\s*(?:'([^']*)'|`([^`]*)`)/.exec(bodyText);
  if (!pathMatch) {
    throw new Error(`[openapi-uts-transform] ${functionName}: 无法解析请求路径`);
  }
  if (pathMatch[2] !== undefined) {
    throw new Error(`[openapi-uts-transform] ${functionName}: 暂不支持路径变量（模板字符串）的生成形态，请先扩展改写器`);
  }

  const contentTypeMatch = /'Content-Type':\s*'([^']+)'/.exec(bodyText);

  return {
    generics,
    method: methodMatch[1],
    dataName: dataMatch[1],
    path: pathMatch[1],
    contentType: contentTypeMatch ? contentTypeMatch[1] : 'application/json'
  };
}

/**
 * 把一段 openapi-ts-request 生成的服务代码改写成 UTS 可编译形态
 * @param {string} content 生成文件的文本内容
 * @returns {string}
 */
export function transformGeneratedServiceCode(content) {
  const lines = content.split('\n');
  const out = [];
  let transformed = false;
  let i = 0;

  while (i < lines.length) {
    const signatureMatch = SIGNATURE_RE.exec(lines[i]);
    if (!signatureMatch) {
      out.push(lines[i]);
      i++;
      continue;
    }

    const functionName = signatureMatch[1];

    // 参数解构列表
    let cursor = i + 1;
    const destructured = [];
    while (cursor < lines.length && !TYPE_OPEN_RE.test(lines[cursor])) {
      const item = lines[cursor].replace(/,$/, '').trim();
      if (item.length > 0) {
        destructured.push(item);
      }
      cursor++;
    }
    if (cursor >= lines.length) {
      throw new Error(`[openapi-uts-transform] ${functionName}: 找不到参数类型块起始行`);
    }

    // 参数类型块
    const typeStart = cursor + 1;
    cursor = typeStart;
    while (cursor < lines.length && !TYPE_CLOSE_RE.test(lines[cursor])) {
      cursor++;
    }
    if (cursor >= lines.length) {
      throw new Error(`[openapi-uts-transform] ${functionName}: 找不到参数类型块结束行`);
    }
    const typeLines = lines.slice(typeStart, cursor);

    // 函数体
    const bodyStart = cursor + 1;
    cursor = bodyStart;
    while (cursor < lines.length && lines[cursor] !== '}') {
      cursor++;
    }
    if (cursor >= lines.length) {
      throw new Error(`[openapi-uts-transform] ${functionName}: 找不到函数体结束行`);
    }
    const bodyText = lines.slice(bodyStart, cursor).join('\n');

    const unsupported = destructured.filter((name) => name !== 'body' && name !== 'options');
    if (unsupported.length > 0) {
      throw new Error(
        `[openapi-uts-transform] ${functionName}: 暂不支持参数 ${unsupported.join(', ')}，请先扩展改写器`
      );
    }

    const call = parseRequestCall(bodyText, functionName);
    if (call.dataName !== 'body') {
      throw new Error(`[openapi-uts-transform] ${functionName}: data 期望引用 body，实际是 ${call.dataName}`);
    }

    const configArgs = [`'${call.method}'`, 'requestParams.body', 'requestParams.options'];
    if (call.contentType !== 'application/json') {
      configArgs.push(`'${call.contentType}'`);
    }

    // 类型别名用 PascalCase，与 types.uts 里的契约类型保持一致
    const requestParamsTypeName = `${functionName.charAt(0).toUpperCase()}${functionName.slice(1)}RequestParams`;

    out.push(`export type ${requestParamsTypeName} = {`);
    out.push(...typeLines);
    out.push('};');
    out.push('');
    out.push(`export function ${functionName}(requestParams: ${requestParamsTypeName}) {`);
    out.push(`  return request${call.generics}(`);
    out.push(`    '${call.path}',`);
    out.push(`    buildBodyRequestConfig(${configArgs.join(', ')})`);
    out.push('  );');
    out.push('}');

    transformed = true;
    i = cursor + 1;
  }

  if (!transformed) {
    return content;
  }

  let result = out.join('\n');

  // 补上 buildBodyRequestConfig 的具名导入（同一符号只在一处导入，重复执行安全）
  result = result.replace(
    /^(import \{[^}]*\} from '@\/src\/http\/openapi\.uts';)$/m,
    (line) => (line.includes('buildBodyRequestConfig') ? line : line.replace(' }', ', buildBodyRequestConfig }'))
  );

  return result;
}

// ==========================================================
// 类型文件（types.uts）改写
//
// 生成器会把响应里的嵌套结构直接内联进属性类型：
//
//   export type FooResponse = {
//     data?: {
//       list?: { id?: number }[];
//     };
//   };
//
// UTS110111101 只允许「顶层 type 别名 = 对象字面量」；属性位置的对象字面量、
// 以及数组元素的对象字面量都不合法。这里递归把它们提升为同文件内的具名别名：
//
//   export type FooResponseDataItem = { id?: number };
//   export type FooResponseData = { list?: Array<FooResponseDataItem> };
//   export type FooResponse = { data?: FooResponseData };
// ==========================================================

/**
 * 从 `{` 所在下标开始找配对的 `}` 下标
 */
function findMatchingBrace(text, openIndex) {
  let depth = 0;
  for (let i = openIndex; i < text.length; i++) {
    if (text[i] === '{') {
      depth++;
    } else if (text[i] === '}') {
      depth--;
      if (depth === 0) {
        return i;
      }
    }
  }
  return -1;
}

/**
 * 按顶层 `;` 切分对象体里的属性声明（属性值可能是多行对象字面量）
 */
function splitTopLevelProperties(body) {
  const parts = [];
  let depth = 0;
  let current = '';
  for (let i = 0; i < body.length; i++) {
    const ch = body[i];
    const prev = i > 0 ? body[i - 1] : '';
    if (ch === '{' || ch === '(' || ch === '[' || (ch === '<' && prev !== '=')) {
      depth++;
    } else if (ch === '}' || ch === ')' || ch === ']' || ch === '>') {
      // `=>` 里的 `>` 不是泛型/尖括号的闭合
      if (!(ch === '>' && prev === '=')) {
        depth--;
      }
    }
    if (ch === ';' && depth === 0) {
      parts.push(current);
      current = '';
      continue;
    }
    current += ch;
  }
  if (current.trim().length > 0) {
    parts.push(current);
  }
  return parts;
}

/**
 * 把名字规范成类型别名可用的 PascalCase
 */
function toPascalCase(name) {
  const cleaned = name.replace(/^['"]|['"]$/g, '');
  const parts = cleaned.split(/[^A-Za-z0-9]+/).filter((item) => item.length > 0);
  return parts.map((item) => `${item.charAt(0).toUpperCase()}${item.slice(1)}`).join('');
}

const PROPERTY_RE = /^\s*([A-Za-z_$][\w$]*|'[^']*'|\d+)(\??)\s*:\s*([\s\S]*)$/;

/**
 * 由对象体文本生成一个具名 type 声明，并递归处理其中的嵌套对象字面量
 */
function buildTypeDeclaration(typeName, objectBody, ctx) {
  const chunks = splitTopLevelProperties(objectBody);
  const properties = [];

  for (const chunk of chunks) {
    const propertyMatch = PROPERTY_RE.exec(chunk);
    if (!propertyMatch) {
      throw new Error(`[openapi-uts-transform] ${typeName}: 无法解析类型成员「${chunk.trim()}」`);
    }
    const [, rawName, optionalMark, valueType] = propertyMatch;
    const propName = toPascalCase(rawName);
    const rewritten = hoistValueType(valueType.trim(), `${typeName}${propName}`, ctx);
    properties.push(`${rawName}${optionalMark}: ${rewritten};`);
  }

  return `export type ${typeName} = {\n${properties.map((line) => `  ${line}`).join('\n')}\n};`;
}

/**
 * 递归展开属性类型里的对象字面量，产出的别名追加到 ctx.types
 * @returns {string} 改写后的属性值类型
 */
function hoistValueType(valueType, suggestedName, ctx) {
  const trimmed = valueType.trim();
  const openIndex = trimmed.indexOf('{');
  if (openIndex < 0) {
    return trimmed;
  }

  const closeIndex = findMatchingBrace(trimmed, openIndex);
  if (closeIndex < 0) {
    throw new Error(`[openapi-uts-transform] ${suggestedName}: 对象字面量括号不配对`);
  }

  const prefix = trimmed.slice(0, openIndex).trim();
  const suffix = trimmed.slice(closeIndex + 1).trim();
  const objectBody = trimmed.slice(openIndex + 1, closeIndex);

  const isArrayElement = /^Array\s*<$/.test(prefix) || suffix.startsWith('[]');
  const typeName = ctx.uniqueName(`${suggestedName}${isArrayElement ? 'Item' : ''}`);

  // 先递归展开内层，再把当前层压进列表，保证内层定义在前
  const hoisted = buildTypeDeclaration(typeName, objectBody, ctx);
  ctx.types.push(hoisted);

  const replacement = isArrayElement ? `Array<${typeName}>` : typeName;
  const leading = prefix.length > 0 && !prefix.startsWith('Array') ? `${prefix} ` : '';
  const trailing = suffix.replace(/^\[\]/, '').trim();

  return trailing.length > 0 ? `${leading}${replacement} ${trailing}` : `${leading}${replacement}`;
}

/**
 * 从声明所在行开始，找到整条 type 声明结束的行号
 */
function findDeclarationEnd(lines, startIndex, rhsOnFirstLine) {
  let index = startIndex;
  if (rhsOnFirstLine.trimStart().startsWith('{')) {
    const firstBrace = lines[startIndex].indexOf('{');
    let depth = 0;
    while (index < lines.length) {
      const text = index === startIndex ? lines[index].slice(firstBrace) : lines[index];
      for (const ch of text) {
        if (ch === '{') {
          depth++;
        } else if (ch === '}') {
          depth--;
        }
      }
      if (depth === 0) {
        return index;
      }
      index++;
    }
    return lines.length - 1;
  }

  while (index < lines.length && !lines[index].trimEnd().endsWith(';')) {
    index++;
  }
  return Math.min(index, lines.length - 1);
}

/**
 * 把一段 openapi-ts-request 生成的数据模型代码改写成 UTS 可编译形态
 * @param {string} content 生成文件的文本内容
 * @returns {string}
 */
export function transformGeneratedTypesCode(content) {
  const lines = content.split('\n');
  const out = [];
  let i = 0;

  while (i < lines.length) {
    const declarationMatch = /^export type (\w+) = ?(.*)$/.exec(lines[i]);
    if (!declarationMatch) {
      out.push(lines[i]);
      i++;
      continue;
    }

    const [, typeName, rhsOnFirstLine] = declarationMatch;
    const endIndex = findDeclarationEnd(lines, i, rhsOnFirstLine);
    const declaration = lines.slice(i, endIndex + 1).join('\n');
    const rhsStart = declaration.indexOf('=');
    const rhs = declaration.slice(rhsStart + 1).trim().replace(/;$/, '').trim();

    if (!rhs.startsWith('{')) {
      out.push(...lines.slice(i, endIndex + 1));
      i = endIndex + 1;
      continue;
    }

    const ctx = {
      types: [],
      taken: new Set()
    };
    ctx.uniqueName = (name) => {
      let candidate = name;
      let index = 2;
      while (ctx.taken.has(candidate)) {
        candidate = `${name}${index}`;
        index++;
      }
      ctx.taken.add(candidate);
      return candidate;
    };

    const objectBody = rhs.slice(1, findMatchingBrace(rhs, 0));
    ctx.taken.add(typeName);
    const rebuilt = buildTypeDeclaration(typeName, objectBody, ctx);

    if (ctx.types.length > 0) {
      out.push(ctx.types.join('\n\n'));
      out.push('');
    }
    out.push(rebuilt);
    i = endIndex + 1;
  }

  return out.join('\n');
}
