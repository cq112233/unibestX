import type { MockMethod } from 'vite-plugin-mock';
import { pagination, resultSuccess } from './_util';

// 内存 Mock 数据集
let fooList = [
  { id: 1, name: 'unix', desc: 'uni-app X 核心架构' },
  { id: 2, name: 'UnibestX', desc: '最好的 uni-app X 跨端开发模板' },
  { id: 3, name: 'lime-request', desc: '高性能轻量级网络请求库' },
  { id: 4, name: 'weapp-tailwindcss', desc: '全平台原子化样式解决方案' },
  { id: 5, name: 'vitest', desc: '极速轻量单元测试框架' }
];

export default [
  // 1. 获取 Foo 详情或列表（支持参数过滤与分页）
  {
    url: '/api/foo',
    method: 'get',
    timeout: 100,
    response: (opt: any) => {
      const { name, page = '1', pageSize = '10' } = opt?.query || {};
      let result = [...fooList];
      if (name) {
        result = result.filter(item => item.name.toLowerCase().includes(String(name).toLowerCase()));
      }

      const p = Number(page);
      const size = Number(pageSize);
      const paged = pagination(p, size, result);

      return resultSuccess({
        id: paged[0]?.id ?? 1,
        name: paged[0]?.name ?? 'unix',
        list: paged,
        total: result.length,
        page: p,
        pageSize: size
      });
    }
  },

  // 2. 根据 ID 查询详情
  {
    url: '/api/foo/:id',
    method: 'get',
    timeout: 50,
    response: (opt: any) => {
      const idStr = opt?.url?.split('/').pop() || opt?.query?.id;
      const id = Number(idStr) || 1;
      const item = fooList.find(f => f.id === id) || { id, name: `item-${id}`, desc: '自定义项' };
      return resultSuccess(item);
    }
  },

  // 3. 新建 Foo
  {
    url: '/api/foo',
    method: 'post',
    timeout: 150,
    response: (opt: any) => {
      const body = opt?.body;
      const newId = fooList.length > 0 ? Math.max(...fooList.map(f => f.id)) + 1 : 1;
      const newItem = {
        id: newId,
        name: body?.name || `foo-${newId}`,
        desc: body?.desc || '离线新建条目'
      };
      fooList.unshift(newItem);
      return resultSuccess(newItem, '创建成功');
    }
  },

  // 4. 更新 Foo
  {
    url: '/api/foo/:id',
    method: 'put',
    timeout: 100,
    response: (opt: any) => {
      const body = opt?.body;
      const idStr = opt?.url?.split('/').pop();
      const id = Number(idStr) || 1;
      const index = fooList.findIndex(f => f.id === id);
      if (index >= 0) {
        fooList[index] = { ...fooList[index], ...body, id };
        return resultSuccess(fooList[index], '更新成功');
      }
      return resultSuccess({ id, ...(body || {}) }, '更新成功');
    }
  },

  // 5. 删除 Foo
  {
    url: '/api/foo/:id',
    method: 'delete',
    timeout: 80,
    response: (opt: any) => {
      const idStr = opt?.url?.split('/').pop();
      const id = Number(idStr) || 1;
      fooList = fooList.filter(f => f.id !== id);
      return resultSuccess({ id }, '删除成功');
    }
  }
] as MockMethod[];
