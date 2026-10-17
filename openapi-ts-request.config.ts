import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'openapi-ts-request';

// 优先加载本地私有环境变量 .env.local（已被 .gitignore 忽略，防止敏感 token 泄露到 Git）
const envLocalPath = path.resolve(process.cwd(), '.env.local');
if (fs.existsSync(envLocalPath) && typeof process.loadEnvFile === 'function') {
  process.loadEnvFile(envLocalPath);
}

/**
 * openapi-ts-request 配置文件
 *
 * 专为 unibestX (uni-app X + UTS) 优化的接口与类型代码生成配置。
 * 运行 `pnpm api:gen` 即可一键拉取 Apifox 规范并自动生成全套强类型 API。
 *
 * 官方文档: https://github.com/openapi-ui/openapi-ts-request
 */
export default defineConfig({
  // 1. Apifox 官方 API 直连配置（敏感信息从本地 .env.local 或环境变量中读取）
  apifoxConfig: {
    projectId: process.env.APIFOX_PROJECT_ID || '8697068',
    apifoxToken: process.env.APIFOX_TOKEN || ''
  },

  // 2. 生成代码输出目录（统一收拢在 src/api/generated/ 下）
  serversPath: './src/api/generated',

  // 3. 抹平 unibestX 网络层的统一请求客户端适配器
  requestLibPath: '@/src/http/openapi.uts',
  requestImportStatement: 'import { request } from \'@/src/http/openapi.uts\';\nimport type { OpenApiRequestOptions } from \'@/src/http/openapi.uts\';',
  requestOptionsType: 'OpenApiRequestOptions',

  // 4. 函数与文件采用小驼峰命名
  isCamelCase: true,

  // 5. 是否只生成 TypeScript/UTS 类型定义（设为 true 则不生成请求函数）
  isOnlyGenTypeScriptType: false
});
