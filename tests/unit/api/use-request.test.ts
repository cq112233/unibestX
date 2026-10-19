import { mount } from '@vue/test-utils';
import { defineComponent, h } from 'vue';
import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  defaultQueryClient,
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
  VUE_QUERY_CLIENT_KEY,
  VueQueryPlugin
} from '@/uni_modules/request-bestX/index.uts';
import type {
  MutationOptions,
  QueryFunctionContext,
  QueryOptions
} from '@/uni_modules/request-bestX/index.uts';
import { BusinessError } from '@/src/http/error/error.uts';
import { http } from '@/src/http/instances/index.uts';

/**
 * Vue Query 组合式状态机（TanStack Vue Query 风格）行为验证
 *
 * 验证目标：
 * 1. QueryClient 缓存池、数据新鲜度判别与失效通知；
 * 2. VueQueryPlugin 与 useQueryClient 上下文注入机制；
 * 3. useQuery 声明式查询、缓存复用、竞态、网络重试与 abort 联动；
 * 4. useMutation 变更操作、乐观上下文透传与异步抛错。
 */

function defer<T>() {
  let resolve!: (value: T) => void;
  let reject!: (err: any) => void;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

async function flush(times = 3): Promise<void> {
  for (let i = 0; i < times; i++) {
    await new Promise(resolve => setTimeout(resolve, 0));
  }
}

const mountedWrappers: Array<ReturnType<typeof mount>> = [];

function withSetup<T>(composable: () => T, customClient?: QueryClient): T {
  let result!: T;
  const Comp = defineComponent({
    setup() {
      result = composable();
      return () => h('div');
    }
  });

  const wrapper = mount(Comp, {
    global: {
      provide: customClient != null ? { [VUE_QUERY_CLIENT_KEY]: customClient } : {}
    }
  });
  mountedWrappers.push(wrapper);
  return result;
}

afterEach(() => {
  defaultQueryClient.clear();
  while (mountedWrappers.length > 0) {
    const w = mountedWrappers.pop();
    w?.unmount();
  }
});

describe('queryClient 核心缓存池', () => {
  it('正确支持 getQueryData / setQueryData 与状态读写', () => {
    const client = new QueryClient();
    expect(client.getQueryData('user_1')).toBe(null);

    client.setQueryData('user_1', { name: 'Alice' });
    expect(client.getQueryData<{ name: string }>('user_1')).toEqual({ name: 'Alice' });

    const state = client.getQueryState('user_1');
    expect(state).not.toBe(null);
    expect(state?.status).toBe('success');
    expect(state?.dataUpdatedAt).toBeGreaterThan(0);

    client.clear();
    expect(client.getQueryData('user_1')).toBe(null);
  });

  it('invalidateQueries 标记数据过期并触发订阅更新', () => {
    const client = new QueryClient();
    let notified = 0;
    client.subscribe('todos', () => {
      notified++;
    });

    client.setQueryData('todos', ['task 1']);
    expect(notified).toBe(1);

    client.invalidateQueries('todos');
    const state = client.getQueryState('todos');
    expect(state?.dataUpdatedAt).toBe(0);
    expect(notified).toBe(2);
  });
});

describe('vueQueryPlugin 与 useQueryClient', () => {
  it('默认回退到 defaultQueryClient', () => {
    const client = useQueryClient();
    expect(client).toBe(defaultQueryClient);
  });

  it('支持通过 Vue provide 注入自定义 QueryClient', () => {
    const custom = new QueryClient();
    let resolvedClient: QueryClient | null = null;
    withSetup(() => {
      resolvedClient = useQueryClient();
    }, custom);

    expect(resolvedClient).toBe(custom);
  });

  it('vueQueryPlugin 插件正确挂载 provide', () => {
    const custom = new QueryClient();
    const app = {
      provide: vi.fn()
    };
    VueQueryPlugin.install(app, { queryClient: custom });
    expect(app.provide).toHaveBeenCalledWith(VUE_QUERY_CLIENT_KEY, custom);
  });
});

describe('useQuery 基础状态流转与缓存', () => {
  it('首次发起：状态从 isLoading 到 isSuccess 并写入缓存', async () => {
    const d = defer<string>();
    const result = withSetup(() => useQuery<string>({
      queryKey: ['greeting'],
      queryFn: () => d.promise
    } as QueryOptions<string>));

    expect(result.isLoading.value).toBe(true);
    expect(result.isFetching.value).toBe(true);
    expect(result.isSuccess.value).toBe(false);
    expect(result.status.value).toBe('pending');
    expect(result.data.value).toBe(null);

    d.resolve('hello');
    await flush();

    expect(result.isLoading.value).toBe(false);
    expect(result.isFetching.value).toBe(false);
    expect(result.isSuccess.value).toBe(true);
    expect(result.status.value).toBe('success');
    expect(result.data.value).toBe('hello');

    // 验证写入了全局缓存
    expect(defaultQueryClient.getQueryData<string>(['greeting'])).toBe('hello');
  });

  it('命中 staleTime 时不重复向服务端发请求', async () => {
    let calls = 0;
    const client = new QueryClient();

    // 第一次查询
    const query1 = withSetup(() => useQuery<number>({
      queryKey: ['count'],
      queryFn: () => {
        calls++;
        return Promise.resolve(42);
      },
      staleTime: 60000 // 1 分钟新鲜期
    } as QueryOptions<number>), client);

    await flush();
    expect(calls).toBe(1);
    expect(query1.data.value).toBe(42);

    // 第二个组件挂载相同 key，处于 staleTime 内直接命中
    const query2 = withSetup(() => useQuery<number>({
      queryKey: ['count'],
      queryFn: () => {
        calls++;
        return Promise.resolve(99);
      },
      staleTime: 60000
    } as QueryOptions<number>), client);

    await flush();
    expect(calls).toBe(1);
    expect(query2.data.value).toBe(42);
  });

  it('enabled: false 阻止首次自动发起，调用 refetch() 可手动触发', async () => {
    let calls = 0;
    const result = withSetup(() => useQuery<string>({
      queryKey: ['lazy'],
      queryFn: () => {
        calls++;
        return Promise.resolve('ready');
      },
      enabled: false
    } as QueryOptions<string>));

    await flush();
    expect(calls).toBe(0);
    expect(result.data.value).toBe(null);
    expect(result.isFetching.value).toBe(false);

    await result.refetch();
    expect(calls).toBe(1);
    expect(result.data.value).toBe('ready');
  });
});

describe('useQuery 重试机制', () => {
  it('网络层失败按 retry 次数自动重试到成功', async () => {
    let calls = 0;
    const result = withSetup(() => useQuery<string>({
      queryKey: ['retrySuccess'],
      queryFn: () => {
        calls++;
        if (calls < 3) {
          return Promise.reject(new Error('network down'));
        }
        return Promise.resolve('ok');
      },
      retry: 2,
      retryDelay: 0
    } as QueryOptions<string>));

    await flush(10);
    expect(calls).toBe(3);
    expect(result.data.value).toBe('ok');
    expect(result.isSuccess.value).toBe(true);
    expect(result.isError.value).toBe(false);
  });

  it('业务失败（BusinessError）不重试', async () => {
    let calls = 0;
    const result = withSetup(() => useQuery<string>({
      queryKey: ['retryBusiness'],
      queryFn: () => {
        calls++;
        return Promise.reject(new BusinessError('余额不足', 5001));
      },
      retry: 3,
      retryDelay: 0
    } as QueryOptions<string>));

    await flush(10);
    expect(calls).toBe(1);
    expect(result.isError.value).toBe(true);
    expect(result.error.value?.message).toBe('余额不足');
  });
});

describe('useQuery abort 取消联动', () => {
  it('abort 与 cancel 能正确停止在飞请求并取消底层任务', async () => {
    const tasks: Array<any> = [];
    (globalThis as any).uni.request = vi.fn(() => {
      const task = { abort: vi.fn(), offChunkReceived: vi.fn(), onChunkReceived: vi.fn() };
      tasks.push(task);
      return task;
    });

    try {
      const result = withSetup(() => useQuery<any>({
        queryKey: ['abortDemo'],
        queryFn: (ctx: QueryFunctionContext) => {
          return http.get<any>('/demo/use-query-abort', {
            extra: { ignoreAuth: true, requestKey: ctx.requestKey }
          } as any);
        }
      } as QueryOptions<any>));

      await flush(5);
      expect(tasks.length).toBe(1);
      expect(tasks[0].abort).not.toHaveBeenCalled();

      // 对标 TanStack Query 的 cancel / abort
      result.cancel();
      expect(tasks[0].abort).toHaveBeenCalledTimes(1);
      expect(result.isFetching.value).toBe(false);
    }
    finally {
      delete (globalThis as any).uni.request;
    }
  });

  it('queryClient.cancelQueries 对标 TanStack Query 规范取消在飞任务', async () => {
    const tasks: Array<any> = [];
    (globalThis as any).uni.request = vi.fn(() => {
      const task = { abort: vi.fn(), offChunkReceived: vi.fn(), onChunkReceived: vi.fn() };
      tasks.push(task);
      return task;
    });

    try {
      const result = withSetup(() => useQuery<any>({
        queryKey: ['tanstackCancelDemo'],
        queryFn: (ctx: QueryFunctionContext) => {
          return http.get<any>('/demo/tanstack-cancel', {
            extra: { ignoreAuth: true, requestKey: ctx.requestKey }
          } as any);
        }
      } as QueryOptions<any>));

      await flush(5);
      expect(tasks.length).toBe(1);
      expect(tasks[0].abort).not.toHaveBeenCalled();

      // 支持对象传参：queryClient.cancelQueries({ queryKey: [...] })
      defaultQueryClient.cancelQueries({ queryKey: ['tanstackCancelDemo'] });
      expect(tasks[0].abort).toHaveBeenCalledTimes(1);
      expect(result.isFetching.value).toBe(false);
    }
    finally {
      delete (globalThis as any).uni.request;
    }
  });

  it('invalidateQueries 触发活跃 query 重新拉取', async () => {
    let calls = 0;
    withSetup(() => useQuery<number>({
      queryKey: ['autoRefresh'],
      queryFn: () => {
        calls++;
        return Promise.resolve(calls);
      }
    } as QueryOptions<number>));

    await flush();
    expect(calls).toBe(1);

    defaultQueryClient.invalidateQueries(['autoRefresh']);
    await flush();
    expect(calls).toBe(2);
  });
});

describe('useMutation 变更操作', () => {
  it('mutate 触发变更并正确执行 onSuccess 与 onSettled', async () => {
    let successData = '';
    let settledData = '';
    const mutation = withSetup(() => useMutation<string, { title: string }>({
      mutationFn: variables => Promise.resolve(`saved: ${variables.title}`),
      onSuccess: (data) => {
        successData = data;
      },
      onSettled: (data) => {
        settledData = data ?? '';
      }
    } as MutationOptions<string, { title: string }>));

    expect(mutation.status.value).toBe('idle');
    expect(mutation.isPending.value).toBe(false);

    mutation.mutate({ title: 'post 1' });
    expect(mutation.isPending.value).toBe(true);

    await flush();
    expect(mutation.isPending.value).toBe(false);
    expect(mutation.isSuccess.value).toBe(true);
    expect(mutation.data.value).toBe('saved: post 1');
    expect(successData).toBe('saved: post 1');
    expect(settledData).toBe('saved: post 1');
  });

  it('mutateAsync 支持 await 并向外抛出异常', async () => {
    let errorCaught = '';
    const mutation = withSetup(() => useMutation<string, number>({
      mutationFn: (id) => {
        if (id < 0) {
          return Promise.reject(new Error('ID 必须为正数'));
        }
        return Promise.resolve(`item ${id}`);
      },
      onError: (err) => {
        errorCaught = err.message;
      }
    } as MutationOptions<string, number>));

    await expect(mutation.mutateAsync(-1)).rejects.toThrow('ID 必须为正数');
    expect(mutation.isError.value).toBe(true);
    expect(errorCaught).toBe('ID 必须为正数');

    // 成功调用
    const res = await mutation.mutateAsync(100);
    expect(res).toBe('item 100');
    expect(mutation.isSuccess.value).toBe(true);

    // reset 重置
    mutation.reset();
    expect(mutation.status.value).toBe('idle');
    expect(mutation.data.value).toBe(null);
  });

  it('onMutate 返回的 context 能够正确透传给后续回调', async () => {
    let receivedContext = '';
    const mutation = withSetup(() => useMutation<string, string>({
      mutationFn: text => Promise.resolve(`echo: ${text}`),
      onMutate: (text) => {
        return `context_for_${text}`;
      },
      onSuccess: (_data, _vars, ctx) => {
        receivedContext = ctx;
      }
    } as MutationOptions<string, string>));

    await mutation.mutateAsync('test');
    expect(receivedContext).toBe('context_for_test');
  });

  it('支持 mutationKey、variables 与 queryClient.isMutating 联动', async () => {
    let resolveFn: ((val: string) => void) | null = null;
    const mutation = withSetup(() => useMutation<string, string>({
      mutationKey: ['addTodo'],
      mutationFn: _text => new Promise<string>((resolve) => {
        resolveFn = resolve;
      })
    } as MutationOptions<string, string>));

    expect(defaultQueryClient.isMutating()).toBe(0);
    expect(defaultQueryClient.isMutating({ mutationKey: ['addTodo'] })).toBe(0);

    const promise = mutation.mutateAsync('new-item');
    expect(mutation.variables.value).toBe('new-item');
    expect(defaultQueryClient.isMutating()).toBe(1);
    expect(defaultQueryClient.isMutating({ mutationKey: ['addTodo'] })).toBe(1);
    expect(defaultQueryClient.isMutating({ mutationKey: ['otherKey'] })).toBe(0);

    resolveFn!('done');
    await promise;

    expect(defaultQueryClient.isMutating()).toBe(0);
    expect(defaultQueryClient.isMutating({ mutationKey: ['addTodo'] })).toBe(0);

    mutation.reset();
    expect(mutation.variables.value).toBe(null);
  });
});

describe('useQuery 依赖查询 (Dependent Queries / 先后顺序)', () => {
  it('支持传入响应式 enabled (Ref/computed)，由 false 变 true 时自动触发请求', async () => {
    let callCount = 0;
    const isReady = ref(false);

    const query = withSetup(() => useQuery<string>({
      queryKey: ['dependentQueryDemo'],
      queryFn: () => {
        callCount++;
        return Promise.resolve(`data_${callCount}`);
      },
      enabled: isReady
    } as QueryOptions<string>));

    await flush(5);
    // 初始 enabled 为 false，不应发起任何请求
    expect(callCount).toBe(0);
    expect(query.data.value).toBe(null);
    expect(query.isLoading.value).toBe(false);

    // 依赖满足，变为 true
    isReady.value = true;
    await flush(10);

    expect(callCount).toBe(1);
    expect(query.data.value).toBe('data_1');
    expect(query.isSuccess.value).toBe(true);
  });

  it('两个查询按先后顺序联动 (Query B 依赖 Query A 的返回结果)', async () => {
    // 模拟第一个接口：获取用户信息
    const userQuery = withSetup(() => useQuery<{ id: number; name: string }>({
      queryKey: ['userProfile'],
      queryFn: () => Promise.resolve({ id: 888, name: 'Alice' })
    } as QueryOptions<{ id: number; name: string }>));

    // 模拟第二个接口：依赖 userQuery 的 id
    const ordersQuery = withSetup(() => useQuery<Array<string>>({
      queryKey: ['userOrders'],
      queryFn: () => Promise.resolve([`order_for_${userQuery.data.value!.id}`]),
      enabled: () => userQuery.data.value != null
    } as QueryOptions<Array<string>>));

    await flush(10);

    expect(userQuery.data.value?.name).toBe('Alice');
    expect(ordersQuery.data.value).toEqual(['order_for_888']);
  });
});
