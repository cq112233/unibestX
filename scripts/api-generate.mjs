import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import pkg from 'openapi-ts-request';
import readConfigPkg from 'openapi-ts-request/dist/readConfig.js';

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

    // 智能挂载 OpenAPI 数据初始化钩子：若后端未在 Apifox 中定义 schema 字段，自动从 example 推断生成完整类型
    const originHook = conf.hook?.afterOpenApiDataInited;
    conf.hook = {
      ...(conf.hook || {}),
      afterOpenApiDataInited: (openAPIData) => {
        const enhanced = enhanceOpenApiSchemaWithExamples(openAPIData);
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
  }

  console.log('✨ API 接口与强类型定义生成完毕，完全兼容 UTS 强类型系统与多端编译！');
}

main().catch((err) => {
  console.error('❌ 生成失败:', err);
  process.exit(1);
});
