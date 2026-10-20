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
 * 支持多人员、多服务（Apifox / Swagger）多源代码生成配置。
 * 运行 `pnpm api:gen` 即可批量生成各服务的强类型 API 代码。
 *
 * 官方文档: https://github.com/openapi-ui/openapi-ts-request
 */
export default defineConfig([
  // ----------------------------------------------------
  // 1. A 人员 - 1 服务 (Apifox) -> 输出到 a-service1
  // ----------------------------------------------------
  {
    apifoxConfig: {
      projectId: process.env.APIFOX_PROJECT_ID || '8697068', // A人员 1服务的项目 ID
      apifoxToken: process.env.APIFOX_TOKEN || ''
    },
    serversPath: './src/api/generated/a-service1',
    requestLibPath: '@/src/http/openapi.uts',
    // 指向主服务 http（走 /api）
    requestImportStatement: 'import { request, buildBodyRequestConfig } from \'@/src/http/openapi.uts\';\nimport type { OpenApiRequestOptions } from \'@/src/http/openapi.uts\';',
    requestOptionsType: 'OpenApiRequestOptions',
    isCamelCase: true
  },

  // ----------------------------------------------------
  // 2. A 人员 - 2 服务 (Apifox) -> 输出到 a-service2
  // ----------------------------------------------------
  {
    apifoxConfig: {
      projectId: '8888888', // A人员 2服务的项目 ID
      apifoxToken: process.env.APIFOX_TOKEN || ''
    },
    serversPath: './src/api/generated/a-service2',
    requestLibPath: '@/src/http/openapi.uts',
    // 指向主服务 http（走 /api）
    requestImportStatement: 'import { request, buildBodyRequestConfig } from \'@/src/http/openapi.uts\';\nimport type { OpenApiRequestOptions } from \'@/src/http/openapi.uts\';',
    requestOptionsType: 'OpenApiRequestOptions',
    isCamelCase: true
  },

  // ----------------------------------------------------
  // 3. B 人员 - 1 服务 (Apifox) -> 输出到 b-service1
  // ----------------------------------------------------
  {
    apifoxConfig: {
      projectId: '7777777', // B人员 1服务的项目 ID
      apifoxToken: process.env.APIFOX_TOKEN || ''
    },
    serversPath: './src/api/generated/b-service1',
    requestLibPath: '@/src/http/openapi.uts',
    // 部署在副服务器，直接绑定 secondaryRequest（走 /api-secondary）
    requestImportStatement: 'import { secondaryRequest as request, buildBodyRequestConfig } from \'@/src/http/openapi.uts\';\nimport type { OpenApiRequestOptions } from \'@/src/http/openapi.uts\';',
    requestOptionsType: 'OpenApiRequestOptions',
    isCamelCase: true
  },

  // ----------------------------------------------------
  // 4. B 人员 - 2 服务 (Swagger) -> 输出到 b-service2
  // ----------------------------------------------------
  {
    // Swagger 可以是后端的在线 json 地址，也可以是本地 swagger.json 文件
    schemaPath: 'https://petstore.swagger.io/v2/swagger.json',
    serversPath: './src/api/generated/b-service2',
    requestLibPath: '@/src/http/openapi.uts',
    // 部署在副服务器，直接绑定 secondaryRequest（走 /api-secondary）
    requestImportStatement: 'import { secondaryRequest as request, buildBodyRequestConfig } from \'@/src/http/openapi.uts\';\nimport type { OpenApiRequestOptions } from \'@/src/http/openapi.uts\';',
    requestOptionsType: 'OpenApiRequestOptions',
    isCamelCase: true
  }
]);
