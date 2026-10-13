import { afterEach, describe, expect, it, vi } from 'vitest';
import { createFoo, deleteFoo, fetchFooById, fetchFooList, updateFoo } from '@/src/api/example.uts';
import { fetchUserInfo, login, logout } from '@/src/api/auth/auth.uts';
import { http } from '@/src/http/index.uts';

/**
 * 类型镜像自唯一真源 `@/src/api/example.uts` 的 `FooItem`
 *
 * ⚠️ 为什么不 `import type` 那个 `.uts`：TS 侧 `.uts` 只有通配 `any` 声明
 * （见 `src/types/uts-shim.d.ts`），具名类型导入会被当作命名空间而报 TS2709，
 * 故此处内联镜像。真源改动时需同步本处。
 */
type FooItem = {
  id: number;
  name: string;
  desc: string;
};

describe('src/api spec compliant tests', () => {
  describe('foo api module', () => {
    afterEach(() => {
      vi.restoreAllMocks();
    });

    /** 读取第 n 次调用的第 i 个实参（spy 经 `.uts` 通配声明解析后为 any，取值需自行转窄） */
    function argOf(spy: any, callIndex: number, argIndex: number): any {
      return spy.mock.calls[callIndex][argIndex];
    }

    /**
     * 把普通对象递归包装成 UTSJSONObject 的运行期形态
     *
     * ⚠️ 原生端 http 解包后交回的是真 UTSJSONObject（带 `getNumber` / `getString` / `getArray`），
     * Node 侧的普通字面量没有这些方法，直接 mock 出去会在 api 层的映射处报
     * 「raw.getNumber is not a function」。这里用 tests/setup.ts 的 MockUTSJSONObject 复刻该形态，
     * **嵌套对象（如 posts 的每一项）同样要包** —— 映射回调里对每一项都要调 getString。
     */
    function json(value: any): any {
      const UTSJSONObjectCtor = (globalThis as any).UTSJSONObject;
      if (Array.isArray(value)) {
        return value.map((item: any) => json(item));
      }
      if (value != null && typeof value === 'object') {
        const wrapped: any = new UTSJSONObjectCtor();
        Object.keys(value).forEach((key: string) => {
          wrapped[key] = json(value[key]);
        });
        return wrapped;
      }
      return value;
    }

    it('fetchFooList 带关键字时打 GET /posts/search，页码换算成 skip 并映射 title/body', async () => {
      const spy = vi.spyOn(http, 'get').mockResolvedValue(json({
        posts: [
          { id: 1, title: 'unix', body: 'uni-app X 核心架构' },
          { id: 2, title: 'UnibestX', body: '最好用的 uni-app X 跨端开发模板' }
        ],
        total: 5,
        skip: 0,
        limit: 2
      }));

      const res = await fetchFooList(1, 2, 'uni');

      expect(spy).toHaveBeenCalledTimes(1);
      expect(argOf(spy, 0, 0)).toBe('/posts/search');
      const config = argOf(spy, 0, 1);
      // 对外契约是页码，接口要的是偏移量：pageNo=1 时 skip=0
      expect(config.params).toEqual({ limit: 2, skip: 0, q: 'uni' });
      // 演示靶子：整段覆盖 baseURL，不动全局 DEFAULT_HTTP_OPTIONS
      expect(config.baseURL).toBe('https://dummyjson.com');
      // 演示接口免登录：缺了这项，未登录访问演示页会直接被前置钩子抛「未登录」
      expect(config.extra.ignoreAuth).toBe(true);

      expect(res.list.length).toBe(2);
      // 契约映射：接口 title → name，接口 body → desc
      expect(res.list[0].name).toBe('unix');
      expect(res.list[0].desc).toBe('uni-app X 核心架构');
      expect(res.total).toBe(5);
      // hasMore 由 skip + 本页条数 < total 现算：0 + 2 < 5
      expect(res.hasMore).toBe(true);
    });

    it('fetchFooList 空关键字时打 GET /posts，不带 q 参数', async () => {
      const spy = vi.spyOn(http, 'get').mockResolvedValue(json({
        posts: [],
        total: 5
      }));

      const res = await fetchFooList(2, 5, '');

      expect(argOf(spy, 0, 0)).toBe('/posts');
      expect(argOf(spy, 0, 1).params).toEqual({ limit: 5, skip: 5 });
      // 回包没有 posts 字段时兜底成空数组，而不是 null
      expect(res.list).toEqual([]);
      expect(res.total).toBe(5);
      // skip 5 + 0 >= 5
      expect(res.hasMore).toBe(false);
    });

    it('fetchFooList 在回包缺 total 时应退回本页条数，避免提前判定没有更多', async () => {
      vi.spyOn(http, 'get').mockResolvedValue(json({
        posts: [
          { id: 1, title: 'a', body: 'b' }
        ]
      }));

      const res = await fetchFooList(1, 10, '');

      expect(res.total).toBe(1);
      // skip 0 + 1 >= 1
      expect(res.hasMore).toBe(false);
    });

    it('fetchFooList 收到 H5 那种「没带访问方法的普通对象」回包也要能解析', async () => {
      // ⚠️ 裸 REST 回包在 H5 是浏览器 JSON.parse 出来的普通对象，没有 getArray / getNumber，
      //    api 层必须先经 toJsonObject 规范化；这里刻意不包 json() 就是这个场景
      vi.spyOn(http, 'get').mockResolvedValue({
        posts: [
          { id: 9, title: 'plain', body: '原生普通对象回包' }
        ],
        total: 1
      } as any);

      const res = await fetchFooList(1, 10, '');

      expect(res.list.length).toBe(1);
      expect(res.list[0].name).toBe('plain');
      expect(res.list[0].desc).toBe('原生普通对象回包');
      expect(res.total).toBe(1);
    });

    it('fetchFooList 不得吞掉失败（无本地兜底，失败即失败）', async () => {
      vi.spyOn(http, 'get').mockRejectedValue(new Error('网络错误，请稍后再试') as any);

      await expect(fetchFooList(1, 10, '')).rejects.toThrow('网络错误，请稍后再试');
    });

    it('fetchFooById 应打 GET /posts/:id 并把弱类型对象映射成 FooItem', async () => {
      const spy = vi.spyOn(http, 'get').mockResolvedValue(json({
        id: 7,
        title: 'seven',
        body: '自定义项'
      }));

      const item = await fetchFooById(7);

      expect(argOf(spy, 0, 0)).toBe('/posts/7');
      expect(argOf(spy, 0, 1).baseURL).toBe('https://dummyjson.com');
      expect(item).not.toBeNull();
      expect(item?.id).toBe(7);
      expect(item?.name).toBe('seven');
      expect(item?.desc).toBe('自定义项');
    });

    it('fetchFooById 在回包为空对象时应兜底成 null / 空串而非崩在 getNumber 上', async () => {
      vi.spyOn(http, 'get').mockResolvedValue(json({}));

      const item = await fetchFooById(99999);

      expect(item).not.toBeNull();
      expect(item?.id).toBe(0);
      expect(item?.name).toBe('');
    });

    it('fetchFooById 在解包结果为 null 时 resolve 为 null（不 reject）', async () => {
      vi.spyOn(http, 'get').mockResolvedValue(null as any);

      const item = await fetchFooById(99999);

      expect(item).toBeNull();
    });

    it('createFoo 应打 POST /posts/add 并把页面字段映射成 title / body 请求体', async () => {
      const spy = vi.spyOn(http, 'post').mockResolvedValue(json({
        id: 6,
        title: 'new-foo',
        body: 'desc'
      }));

      const created = await createFoo({ id: 0, name: 'new-foo', desc: 'desc' } as FooItem);

      expect(argOf(spy, 0, 0)).toBe('/posts/add');
      const payload = argOf(spy, 0, 1);
      expect(payload.title).toBe('new-foo');
      expect(payload.body).toBe('desc');
      expect(payload.userId).toBe(1);
      // 新记录的 id 由后端生成（入参里的 id 不作数）
      expect(created.id).toBe(6);
      expect(created.name).toBe('new-foo');
      expect(argOf(spy, 0, 2).extra.ignoreAuth).toBe(true);
    });

    it('updateFoo 应打 PUT /posts/:id 并把回包映射成最新记录', async () => {
      const spy = vi.spyOn(http, 'put').mockResolvedValue(json({
        id: 6,
        title: 'updated-foo',
        body: 'desc'
      }));

      const updated = await updateFoo(6, { id: 6, name: 'updated-foo', desc: 'desc' } as FooItem);

      expect(argOf(spy, 0, 0)).toBe('/posts/6');
      const payload = argOf(spy, 0, 1);
      expect(payload.title).toBe('updated-foo');
      expect(payload.body).toBe('desc');
      expect(updated.name).toBe('updated-foo');
      expect(updated.id).toBe(6);
    });

    it('deleteFoo 应打 DELETE /posts/:id 并在成功时 resolve true', async () => {
      const spy = vi.spyOn(http, 'delete').mockResolvedValue(json({ id: 6 }));

      const deleted = await deleteFoo(6);

      expect(argOf(spy, 0, 0)).toBe('/posts/6');
      // DELETE 无请求体
      expect(argOf(spy, 0, 1)).toBeNull();
      expect(deleted).toBe(true);
    });

    it('deleteFoo 失败时不得吞掉错误（不再无条件返回 true）', async () => {
      vi.spyOn(http, 'delete').mockRejectedValue(new Error('删除失败') as any);

      await expect(deleteFoo(6)).rejects.toThrow('删除失败');
    });
  });

  describe('auth api module', () => {
    it('login should return valid token and userInfo', async () => {
      const res = await login({ username: 'admin', password: 'any' });
      expect(res.token).toBeDefined();
      expect(res.userInfo.username).toBe('admin');
      expect(res.userInfo.roles).toContain('admin');
    });

    it('fetchUserInfo should return user info', async () => {
      const info = await fetchUserInfo();
      expect(info.username).toBe('UNIX');
    });

    it('logout should return true', async () => {
      const ok = await logout();
      expect(ok).toBe(true);
    });
  });
});
