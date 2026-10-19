import { afterEach, describe, expect, it, vi } from 'vitest';
import { createFoo, deleteFoo, fetchFooById, fetchFooLatest, fetchFooList, FOO_UPLOAD_PATH, updateFoo, uploadFooFile } from '@/src/api/example.uts';
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

    it('fetchFooList 带关键字时打 GET /test?search=，页码直传并映射 name/desc', async () => {
      const spy = vi.spyOn(http, 'get')
        // 第 1 次：分页数据
        .mockResolvedValueOnce(json([
          { id: '1', name: 'unix', desc: 'uni-app X 核心架构' },
          { id: '2', name: 'UnibestX', desc: '最好用的 uni-app X 跨端开发模板' }
        ]))
        // 第 2 次：?limit=0 拉全量算总数
        .mockResolvedValueOnce(json([
          { id: '1' },
          { id: '2' },
          { id: '3' },
          { id: '4' },
          { id: '5' }
        ]));

      const res = await fetchFooList(1, 2, 'uni');

      expect(spy).toHaveBeenCalledTimes(2);
      expect(argOf(spy, 0, 0)).toBe('/test');
      // 对外契约是页码，接口直接用 page
      expect(argOf(spy, 0, 1).params).toEqual({ page: 1, limit: 2, search: 'uni' });
      // 演示靶子：整段覆盖 baseURL，不动全局 DEFAULT_HTTP_OPTIONS
      expect(argOf(spy, 0, 1).baseURL).toBe('https://6ad5d5e4f71f154ac4860ffe.mockapi.io/api');
      // 演示接口免登录：缺了这项，未登录访问演示页会直接被前置钩子抛「未登录」
      expect(argOf(spy, 0, 1).extra.ignoreAuth).toBe(true);
      // 第 2 次专门取总数：limit=0 表示不限制
      expect(argOf(spy, 1, 0)).toBe('/test');
      expect(argOf(spy, 1, 1).params).toEqual({ limit: 0, search: 'uni' });

      expect(res.list.length).toBe(2);
      // 契约映射：接口 name → name，接口 desc → desc
      expect(res.list[0].name).toBe('unix');
      expect(res.list[0].desc).toBe('uni-app X 核心架构');
      expect(res.list[0].id).toBe(1);
      expect(res.total).toBe(5);
      // hasMore 由 skip + 本页条数 < total 现算：0 + 2 < 5
      expect(res.hasMore).toBe(true);
    });

    it('fetchFooList 空关键字时打 GET /test，不带 search 参数', async () => {
      const spy = vi.spyOn(http, 'get')
        .mockResolvedValueOnce(json([]))
        .mockResolvedValueOnce(json([{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }]));

      const res = await fetchFooList(2, 5, '');

      expect(argOf(spy, 0, 0)).toBe('/test');
      expect(argOf(spy, 0, 1).params).toEqual({ page: 2, limit: 5 });
      expect(argOf(spy, 1, 1).params).toEqual({ limit: 0 });
      // 空回包兜底成空数组，而不是 null
      expect(res.list).toEqual([]);
      expect(res.total).toBe(5);
      // skip 5 + 0 >= 5
      expect(res.hasMore).toBe(false);
    });

    it('fetchFooList 收到 H5 那种「没带访问方法的普通对象元素」回包也要能解析', async () => {
      // ⚠️ 裸 REST 回包在 H5 是浏览器 JSON.parse 出来的普通对象，元素没有 getString，
      //    api 层必须先经 toJsonObject 规范化；这里刻意不包 json() 就是这个场景
      const spy = vi.spyOn(http, 'get')
        .mockResolvedValueOnce([
          { id: '9', name: 'plain', desc: '原生普通对象回包' }
        ] as any)
        .mockResolvedValueOnce([{ id: '9' }] as any);

      const res = await fetchFooList(1, 10, '');

      expect(spy).toHaveBeenCalledTimes(2);
      expect(res.list.length).toBe(1);
      expect(res.list[0].name).toBe('plain');
      expect(res.list[0].desc).toBe('原生普通对象回包');
      expect(res.total).toBe(1);
    });

    it('fetchFooList 不得吞掉失败（无本地兜底，失败即失败）', async () => {
      vi.spyOn(http, 'get').mockRejectedValue(new Error('网络错误，请稍后再试') as any);

      await expect(fetchFooList(1, 10, '')).rejects.toThrow('网络错误，请稍后再试');
    });

    it('fetchFooLatest 默认取最近 2 条：一次拉全量后按数字 id 倒序', async () => {
      const spy = vi.spyOn(http, 'get').mockResolvedValue(json([
        { id: '9', name: 'nine' },
        { id: '50', name: 'fifty' },
        { id: '51', name: 'newest', desc: '最新一条' },
        { id: '3', name: 'three' }
      ]));

      const res = await fetchFooLatest();

      // 只发一次请求（limit=0 拉全量），不依赖 mockapi 不可靠的 createdAt 排序
      expect(spy).toHaveBeenCalledTimes(1);
      expect(argOf(spy, 0, 0)).toBe('/test');
      expect(argOf(spy, 0, 1).params).toEqual({ limit: 0 });
      expect(res.list.length).toBe(2);
      // 字符串 id 必须先转数字再比较，否则 '9' > '50'
      expect(res.list[0].id).toBe(51);
      expect(res.list[1].id).toBe(50);
      expect(res.total).toBe(4);
      expect(res.hasMore).toBe(false);
    });

    it('fetchFooLatest 可指定条数', async () => {
      vi.spyOn(http, 'get').mockResolvedValue(json([
        { id: '1' },
        { id: '2' },
        { id: '3' }
      ]));

      const res = await fetchFooLatest(5);

      expect(res.list.length).toBe(3);
      expect(res.list.map((item: FooItem) => item.id)).toEqual([3, 2, 1]);
    });

    it('fetchFooById 应打 GET /test/:id 并把字符串 id 解析成 number', async () => {
      const spy = vi.spyOn(http, 'get').mockResolvedValue(json({
        id: '7',
        name: 'seven',
        desc: '自定义项'
      }));

      const item = await fetchFooById(7);

      expect(argOf(spy, 0, 0)).toBe('/test/7');
      expect(argOf(spy, 0, 1).baseURL).toBe('https://6ad5d5e4f71f154ac4860ffe.mockapi.io/api');
      expect(item).not.toBeNull();
      expect(item?.id).toBe(7);
      expect(item?.name).toBe('seven');
      expect(item?.desc).toBe('自定义项');
    });

    it('fetchFooById 在回包为空对象时应兜底成 0 / 空串而非崩在取值上', async () => {
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

    it('createFoo 应打 POST /test 并把页面字段直接映射成 name / desc 请求体', async () => {
      const spy = vi.spyOn(http, 'post').mockResolvedValue(json({
        id: '6',
        name: 'new-foo',
        desc: 'desc'
      }));

      const created = await createFoo({ id: 0, name: 'new-foo', desc: 'desc' } as FooItem);

      expect(argOf(spy, 0, 0)).toBe('/test');
      const payload = argOf(spy, 0, 1);
      expect(payload.name).toBe('new-foo');
      expect(payload.desc).toBe('desc');
      // 新记录的 id 由后端生成（入参里的 id 不作数），字符串 id 已解析成 number
      expect(created.id).toBe(6);
      expect(created.name).toBe('new-foo');
      expect(argOf(spy, 0, 2).extra.ignoreAuth).toBe(true);
    });

    it('updateFoo 应打 PUT /test/:id 并把回包映射成最新记录', async () => {
      const spy = vi.spyOn(http, 'put').mockResolvedValue(json({
        id: '6',
        name: 'updated-foo',
        desc: 'desc'
      }));

      const updated = await updateFoo(6, { id: 6, name: 'updated-foo', desc: 'desc' } as FooItem);

      expect(argOf(spy, 0, 0)).toBe('/test/6');
      const payload = argOf(spy, 0, 1);
      expect(payload.name).toBe('updated-foo');
      expect(payload.desc).toBe('desc');
      expect(updated.name).toBe('updated-foo');
      expect(updated.id).toBe(6);
    });

    it('deleteFoo 应打 DELETE /test/:id 并在成功时 resolve true', async () => {
      const spy = vi.spyOn(http, 'delete').mockResolvedValue(json({ id: '6' }));

      const deleted = await deleteFoo(6);

      expect(argOf(spy, 0, 0)).toBe('/test/6');
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

  describe('upload api module', () => {
    afterEach(() => {
      vi.restoreAllMocks();
    });

    /** 读取第 n 次调用的第 i 个实参（spy 经 `.uts` 通配声明解析后为 any） */
    function argOf(spy: any, callIndex: number, argIndex: number): any {
      return spy.mock.calls[callIndex][argIndex];
    }

    /** 同 foo 用例：把普通对象包成带 getString 等方法的 UTSJSONObject 形态 */
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

    it('未配置 .env 时默认上传目标回退到免费图床 tmpfiles.org', () => {
      expect(FOO_UPLOAD_PATH).toBe('https://tmpfiles.org/api/v1/upload');
    });

    it('uploadFooFile 把 tmpfiles 预览页 URL 转成 /dl/ 直链，并带上 expire 延长保留时间', async () => {
      const spy = vi.spyOn(http, 'upload').mockResolvedValue(json({
        url: 'https://tmpfiles.org/12345/test.png'
      }));

      const url = await uploadFooFile('/tmp/test.png', true, 'https://tmpfiles.org/api/v1/upload');

      expect(argOf(spy, 0, 0)).toBe('https://tmpfiles.org/api/v1/upload');
      const config = argOf(spy, 0, 1);
      expect(config.name).toBe('file');
      // 172800 秒 = 48 小时，tmpfiles 允许的最长保留时间
      expect(config.formData.expire).toBe(172800);
      expect(config.extra.ignoreAuth).toBe(true);
      expect(url).toBe('https://tmpfiles.org/dl/12345/test.png');
    });

    it('uploadFooFile 对非 tmpfiles 目标不加 expire 字段', async () => {
      const spy = vi.spyOn(http, 'upload').mockResolvedValue('https://cdn.example.com/a.png');

      await uploadFooFile('/tmp/test.png', true, 'https://cdn.example.com/upload');

      expect(argOf(spy, 0, 1).formData).toBeUndefined();
    });

    it('uploadFooFile 兼容纯文本 URL 回包（0x0.st / uguu 文本模式）', async () => {
      vi.spyOn(http, 'upload').mockResolvedValue('https://0x0.st/abc.png');

      const url = await uploadFooFile('/tmp/test.png', true, 'https://0x0.st');

      expect(url).toBe('https://0x0.st/abc.png');
    });

    it('uploadFooFile 在回包里找不到 URL 时 reject（不返回空串）', async () => {
      vi.spyOn(http, 'upload').mockResolvedValue(json({ ok: true }));

      await expect(uploadFooFile('/tmp/test.png', true)).rejects.toThrow('上传响应中未找到文件地址');
    });

    it('uploadFooFile 不得吞掉上传失败', async () => {
      vi.spyOn(http, 'upload').mockRejectedValue(new Error('网络错误') as any);

      await expect(uploadFooFile('/tmp/test.png', true)).rejects.toThrow('网络错误');
    });
  });
});
