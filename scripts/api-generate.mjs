import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import pkg from 'openapi-ts-request';
import readConfigPkg from 'openapi-ts-request/dist/readConfig.js';
import { transformGeneratedServiceCode, transformGeneratedTypesCode } from './openapi-uts-transform.mjs';

const { generateService } = pkg;
const { readConfig } = readConfigPkg;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

/**
 * 当后端在 Apifox 中未手动在「设计」里建字段、仅提供了「示例 (example)」时，
 * 递归自动推断并构造完整的 OpenAPI Schema properties，确保前端能够生成 100% 强类型的入参与出参。
 */
function inferSchemaFromExample(val) {
  if (val === null || val === undefined) {
    return { type: 'string', nullable: true };
  }
  if (Array.isArray(val)) {
    return {
      type: 'array',
      items: val.length > 0 ? inferSchemaFromExample(val[0]) : { type: 'object' }
    };
  }
  if (typeof val === 'object') {
    const properties = {};
    for (const [k, v] of Object.entries(val)) {
      properties[k] = inferSchemaFromExample(v);
    }
    return {
      type: 'object',
      properties
    };
  }
  if (typeof val === 'number') {
    return { type: 'number' };
  }
  if (typeof val === 'boolean') {
    return { type: 'boolean' };
  }
  return { type: 'string' };
}

/**
 * 遍历 OpenAPI 数据树，对空 properties 的接口使用 example 进行智能增强补全
 */
function enhanceOpenApiSchemaWithExamples(openAPIData) {
  if (!openAPIData || !openAPIData.paths)
    return openAPIData;

  for (const pathKey of Object.keys(openAPIData.paths)) {
    const pathItem = openAPIData.paths[pathKey];
    for (const method of ['get', 'post', 'put', 'delete', 'patch']) {
      const operation = pathItem[method];
      if (!operation)
        continue;

      // 1. 自动增强 requestBody 请求体
      const reqBodyContent = operation.requestBody?.content?.['application/json'];
      if (reqBodyContent && reqBodyContent.example) {
        const schema = reqBodyContent.schema || {};
        const hasNoProps = !schema.properties || Object.keys(schema.properties).length === 0;
        if (hasNoProps) {
          const inferred = inferSchemaFromExample(reqBodyContent.example);
          reqBodyContent.schema = {
            ...schema,
            type: 'object',
            properties: inferred.properties || {}
          };
        }
      }

      // 2. 自动增强 responses 响应体
      const res200Content = operation.responses?.['200']?.content?.['application/json'];
      if (res200Content && res200Content.example) {
        const schema = res200Content.schema || {};
        const hasNoProps = !schema.properties || Object.keys(schema.properties).length === 0;
        if (hasNoProps) {
          const inferred = inferSchemaFromExample(res200Content.example);
          res200Content.schema = {
            ...schema,
            type: 'object',
            properties: inferred.properties || {}
          };
        }
      }
    }
  }

  return openAPIData;
}

/**
 * 将指定目录下的所有生成 .ts 文件转化为 uni-app X 规范的 .uts 文件，
 * 并修正模块导入后缀（如 ./types -> ./types.uts）
 */
function postProcessUtsFiles(targetDir) {
  if (!fs.existsSync(targetDir))
    return;

  const entries = fs.readdirSync(targetDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(targetDir, entry.name);

    if (entry.isDirectory()) {
      postProcessUtsFiles(fullPath);
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.ts') && !entry.name.endsWith('.d.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');

      // 0. 服务文件：把 UTS 不支持的内联对象字面量类型 / 对象展开改写成具名 type + 统一配置构造函数
      if (content.includes('export function ')) {
        content = transformGeneratedServiceCode(content);
      }

      // 0b. 数据模型文件：把嵌套的对象字面量类型递归提升为具名 type（UTS110111101）
      if (entry.name === 'types.ts' || /^export type \w+ = \{\n[\s\S]*\n  \w+\??: \{/.test(content)) {
        content = transformGeneratedTypesCode(content);
      }

      // 1. 将相对导入补全为 .uts 后缀（满足 uni-app X 跨端编译及 uts2js 静态解析要求）
      content = content.replace(/from '(\.\/[^']+)'/g, (match, p1) => {
        if (p1.endsWith('.uts'))
          return match;
        return `from '${p1}.uts'`;
      });
      content = content.replace(/from "(\.\/[^"]+)"/g, (match, p1) => {
        if (p1.endsWith('.uts'))
          return match;
        return `from "${p1}.uts"`;
      });

      // 2. 写入 .uts 文件并移除旧的 .ts 文件
      const utsPath = path.join(targetDir, entry.name.replace(/\.ts$/, '.uts'));
      fs.writeFileSync(utsPath, content, 'utf8');
      fs.unlinkSync(fullPath);
    }
  }
}

/**
 * 解析 OpenAPI $ref 引用（如 #/components/schemas/Xxx 或 #/definitions/Xxx）
 */
function resolveOpenApiRef(ref, openAPIData) {
  if (!ref || typeof ref !== 'string')
    return null;
  const parts = ref.replace(/^#\//, '').split('/');
  let curr = openAPIData;
  for (const part of parts) {
    if (!curr)
      return null;
    curr = curr[part];
  }
  return curr;
}

/**
 * 递归从 OpenAPI Schema 中构造 Mock 示例数据
 */
function generateMockFromSchema(schema, openAPIData, depth = 0) {
  if (!schema || depth > 5)
    return null;

  if (schema.$ref) {
    const resolved = resolveOpenApiRef(schema.$ref, openAPIData);
    if (resolved) {
      return generateMockFromSchema(resolved, openAPIData, depth + 1);
    }
  }

  if (schema.example !== undefined) {
    return schema.example;
  }

  const type = schema.type;
  if (type === 'object' || schema.properties) {
    const obj = {};
    const props = schema.properties || {};
    for (const [key, propSchema] of Object.entries(props)) {
      obj[key] = generateMockValue(key, propSchema, openAPIData, depth + 1);
    }
    return obj;
  }

  if (type === 'array') {
    const itemSchema = schema.items || {};
    const item = generateMockFromSchema(itemSchema, openAPIData, depth + 1);
    return item !== undefined ? [item] : [];
  }

  return generateMockValue('', schema, openAPIData, depth);
}

/**
 * 根据字段名与类型生成智能语义化的 Mock 值
 */
function generateMockValue(name, schema, openAPIData, depth = 0) {
  if (!schema)
    return 'mock_val';
  if (schema.$ref) {
    const resolved = resolveOpenApiRef(schema.$ref, openAPIData);
    if (resolved)
      return generateMockFromSchema(resolved, openAPIData, depth + 1);
  }
  if (schema.example !== undefined)
    return schema.example;

  const type = schema.type;
  const n = (name || '').toLowerCase();

  if (type === 'integer' || type === 'number') {
    if (n.includes('code') || n === 'status')
      return 200;
    if (n.includes('total'))
      return 100;
    if (n.includes('page') || n.includes('current'))
      return 1;
    if (n.includes('size'))
      return 10;
    if (n.includes('id'))
      return 1;
    return 1;
  }

  if (type === 'boolean') {
    return true;
  }

  if (type === 'array') {
    const item = generateMockFromSchema(schema.items || {}, openAPIData, depth + 1);
    return item !== undefined ? [item] : [];
  }

  if (type === 'object' || schema.properties) {
    return generateMockFromSchema(schema, openAPIData, depth + 1);
  }

  if (n.includes('time') || n.includes('date'))
    return '2026-10-18 12:00:00';
  if (n.includes('url') || n.includes('avatar') || n.includes('image') || n.includes('img') || n.includes('pic')) {
    return '/static/logo.png';
  }
  if (n.includes('phone') || n.includes('mobile'))
    return '13800138000';
  if (n.includes('email') || n.includes('mail'))
    return 'dev@unibestx.com';
  if (n.includes('name') || n.includes('title'))
    return `测试${name || '数据'}`;
  if (n.includes('desc') || n.includes('content') || n.includes('remark'))
    return `${name || '字段'}示例描述`;
  if (n.includes('token'))
    return 'mock-token-sample';
  if (n.includes('id'))
    return '1';

  return `mock_${name || 'val'}`;
}

/**
 * 扫描已有的手写 Mock 路由，避免生成的自动 Mock 覆盖手动定制的高级逻辑
 */
function scanExistingManualMocks(mockDir) {
  const manualRoutes = new Set();
  if (!fs.existsSync(mockDir))
    return manualRoutes;

  const files = fs.readdirSync(mockDir);
  for (const file of files) {
    // 忽略 generated.ts, _util.ts 及非 js/ts 文件
    if (file === 'generated.ts' || file.startsWith('_') || (!file.endsWith('.ts') && !file.endsWith('.js'))) {
      continue;
    }
    const content = fs.readFileSync(path.join(mockDir, file), 'utf8');
    const urlMatches = content.matchAll(/url:\s*['"]([^'"]+)['"]/g);
    for (const match of urlMatches) {
      if (match[1]) {
        manualRoutes.add(match[1]);
      }
    }
  }
  return manualRoutes;
}

/**
 * 根据 OpenAPI 契约全自动生成 mock/generated.ts 拦截挡板
 */
function generateContractMockFile(openAPIData, targetRootDir) {
  if (!openAPIData || !openAPIData.paths)
    return;

  const mockDir = path.join(targetRootDir, 'mock');
  if (!fs.existsSync(mockDir)) {
    fs.mkdirSync(mockDir, { recursive: true });
  }

  const manualRoutes = scanExistingManualMocks(mockDir);
  const mockEntries = [];

  for (const pathKey of Object.keys(openAPIData.paths)) {
    // 将 OpenAPI 路径参数 {id} 转换为 Mock 路径参数 :id
    const routeUrl = pathKey.replace(/\{([^}]+)\}/g, ':$1');
    const pathItem = openAPIData.paths[pathKey];

    for (const method of ['get', 'post', 'put', 'delete', 'patch']) {
      const operation = pathItem[method];
      if (!operation)
        continue;

      // 手动编写的 Mock 拥有最高优先级，自动跳过
      if (manualRoutes.has(routeUrl)) {
        continue;
      }

      const summary = operation.summary || operation.description || '';
      const res200 = operation.responses?.['200'] || operation.responses?.['201'] || operation.responses?.default;
      const resContent = res200?.content?.['application/json'];

      let mockData = null;
      if (resContent?.example) {
        mockData = resContent.example;
      }
      else if (resContent?.schema) {
        mockData = generateMockFromSchema(resContent.schema, openAPIData);
      }

      if (!mockData) {
        mockData = {
          code: 200,
          message: 'ok',
          data: null
        };
      }

      // 判断 mockData 是否已经包含外层标准响应包装 (如 code, status, success)
      const hasEnvelope = typeof mockData === 'object' && mockData !== null && !Array.isArray(mockData)
        && ('code' in mockData || 'status' in mockData || 'success' in mockData);

      mockEntries.push({
        summary,
        url: routeUrl,
        method,
        hasEnvelope,
        data: mockData
      });
    }
  }

  if (mockEntries.length === 0)
    return;

  const codeBlocks = mockEntries.map((item) => {
    const comment = item.summary ? `  // [${item.method.toUpperCase()}] ${item.url} - ${item.summary}` : `  // [${item.method.toUpperCase()}] ${item.url}`;
    const returnExpr = item.hasEnvelope
      ? `return ${JSON.stringify(item.data, null, 6).trim()};`
      : `return resultSuccess(${JSON.stringify(item.data, null, 6).trim()});`;

    return `${comment}\n  {\n    url: '${item.url}',\n    method: '${item.method}',\n    timeout: 50,\n    response: () => {\n      ${returnExpr}\n    }\n  }`;
  });

  const fileContent = `/**
 * 契约自动挡板 Mock 文件 (Contract Mocking)
 *
 * ⚠️ 本文件由 scripts/api-generate.mjs 根据 Apifox / Swagger 契约规范全自动生成。
 * ⚠️ 请勿手动修改本文件。后端契约更新后，运行 pnpm api:gen 会全自动同步更新。
 * 💡 规则：手动编写的 Mock（如 mock/auth.ts, mock/foo.ts）拥有最高优先级，同名接口自动优先使用手写版。
 */
import type { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from './_util';

export default [
${codeBlocks.join(',\n\n')}
] as MockMethod[];
`;

  const outputPath = path.join(mockDir, 'generated.ts');
  fs.writeFileSync(outputPath, fileContent, 'utf8');

  try {
    execSync('npx eslint mock/generated.ts --fix', { cwd: targetRootDir, stdio: 'ignore' });
  }
  catch {
    // 忽略格式化错误
  }

  console.log(`📦 已自动生成本地 Mock 契约挡板: mock/generated.ts (共 ${mockEntries.length} 个接口)`);
}

async function main() {
  console.log('🚀 开始基于 openapi-ts-request 生成 uni-app X API 与类型代码...');

  // 加载本地私有环境变量 .env.local
  const envLocalPath = path.join(rootDir, '.env.local');
  if (fs.existsSync(envLocalPath) && typeof process.loadEnvFile === 'function') {
    process.loadEnvFile(envLocalPath);
  }

  const configPath = path.join(rootDir, 'openapi-ts-request.config.ts');
  const config = await readConfig({
    filePath: configPath,
    fallbackName: 'openapi-ts-request'
  });

  if (!config) {
    console.error('❌ 未找到 openapi-ts-request.config.ts 配置文件');
    process.exit(1);
  }

  const configs = Array.isArray(config) ? config : [config];

  for (const conf of configs) {
    const serversPath = conf.serversPath
      ? path.resolve(rootDir, conf.serversPath)
      : path.resolve(rootDir, 'src/api/generated');

    let capturedOpenAPIData = null;

    // 智能挂载 OpenAPI 数据初始化钩子：若后端未在 Apifox 中定义 schema 字段，自动从 example 推断生成完整类型
    const originHook = conf.hook?.afterOpenApiDataInited;
    conf.hook = {
      ...(conf.hook || {}),
      afterOpenApiDataInited: (openAPIData) => {
        const enhanced = enhanceOpenApiSchemaWithExamples(openAPIData);
        capturedOpenAPIData = enhanced;
        if (originHook) {
          return originHook(enhanced) || enhanced;
        }
        return enhanced;
      }
    };

    console.log(`📡 正在解析接口规范: ${conf.schemaPath || `Apifox 项目 ${conf.apifoxConfig?.projectId}`} -> ${serversPath}`);
    await generateService(conf);

    console.log(`🔧 正在转换为 uni-app X 标准 .uts 格式并修正引用...`);
    postProcessUtsFiles(serversPath);

    // 全自动生成本地 Mock 契约挡板
    if (capturedOpenAPIData) {
      generateContractMockFile(capturedOpenAPIData, rootDir);
    }
  }

  console.log('✨ API 接口、强类型定义与本地 Mock 契约挡板全部生成完毕！');
}

main().catch((err) => {
  console.error('❌ 生成失败:', err);
  process.exit(1);
});
