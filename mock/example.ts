import type { MockMethod } from 'vite-plugin-mock';

/**
 * Mock 示例模板（pnpm clean:mock 会保留本文件）
 *
 * 使用方式：
 * 1. 复制本文件为 mock/xxx.ts
 * 2. 修改 url、method 与 response
 * 3. 运行 pnpm dev:mock 联调
 */
export default [
  {
    url: '/api/example',
    method: 'get',
    timeout: 100,
    response: (opt: any) => {
      const keyword = String(opt?.query?.keyword || '');
      return {
        code: 200,
        message: 'ok',
        data: {
          keyword,
          list: [
            { id: 1, name: '示例数据' },
            { id: 2, name: keyword || '第二条示例数据' }
          ]
        }
      };
    }
  }
] as MockMethod[];
