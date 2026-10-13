import { mount } from '@vue/test-utils';
import { defineComponent, h } from 'vue';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { useRequest } from '@/src/http/hooks/useRequest.uts';
import { BusinessError } from '@/src/http/error/error.uts';
// 精准导入（红线 36）：经门面 `index.uts` 的 `export *` 拿 `http` 时，与 @vue/test-utils 同文件
// 导入会命中 esbuild 的命名绑定解析问题，`http` 变成 undefined。深层路径正常，也是本仓测试的既有写法。
import { http } from '@/src/http/request/request.uts';

/**
 * useRequest（组合式请求 hook）行为验证
 *
 * 为什么必须在这里验：竞态代次、重试范围、轮询与 loading 的关系、卸载后的写入拦截，
 * 这几条全是「手写 loading 样板几乎必然写错」的地方，而它们在编译期不会有任何提示 ——
 * 写错了页面照样渲染，只是偶尔把旧数据糊上去、或者卸载后还在改状态。
 *
 * 覆盖面只到「UTS 语法糖之下」的这层语义。`.uts` 在 Kotlin 通道才暴露的坑（联合类型三元、
 * 链式 .catch、泛型别名进 as 位置）单测走 esbuild 转译**不复现**，那部分靠真机编译把关。
 */

/** 手动控制 resolve / reject 时机的 promise */
function defer<T>() {
  let resolve!: (value: T) => void;
  let reject!: (err: any) => void;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

/** 跑干微任务队列：前置钩子链 + 请求 + 收尾是若干个微任务 */
async function flush(times = 3): Promise<void> {
  for (let i = 0; i < times; i++) {
    await new Promise(resolve => setTimeout(resolve, 0));
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/** 已挂载的 wrapper，afterEach 统一卸载，避免轮询定时器漏到下一个用例 */
const mountedWrappers: Array<ReturnType<typeof mount>> = [];

/**
 * 在真实的组件 setup 里跑 hook
 *
 * 不能直接裸调 `useRequest`：`onUnmounted` 依赖当前组件实例，脱离组件既会告警，
 * 也让「卸载后不再写状态」这条根本测不到。
 */
function withSetup<T>(run: () => T): T {
  let result!: T;
  const wrapper = mount(defineComponent({
    setup() {
      result = run();
      return () => h('div');
    }
  }));
  mountedWrappers.push(wrapper);
  return result;
}

afterEach(() => {
  while (mountedWrappers.length > 0) {
    mountedWrappers.pop()!.unmount();
  }
});

describe('useRequest 基础状态流转', () => {
  it('immediate 默认在 setup 当下就发一次请求，成功后写 data 并触发 onComplete / onSuccess', async () => {
    const d = defer<{ title: string }>();
    const seenKeys: Array<string> = [];
    let seenArgs: Array<any> = [];

    const result = withSetup(() => useRequest<{ title: string }>((ctx: any) => {
      seenKeys.push(ctx.requestKey);
      seenArgs = ctx.args;
      return d.promise;
    }));

    // 请求在 setup 期间就发出去了，不等 onMounted
    expect(seenKeys.length).toBe(1);
    expect(seenKeys[0].length > 0).toBe(true);
    expect(seenArgs).toEqual([]);
    expect(result.loading.value).toBe(true);

    const events: Array<Array<any>> = [];
    result.onSuccess((e: any) => events.push(['success', e]));
    result.onComplete((e: any) => events.push(['complete', e]));

    d.resolve({ title: '你好' });
    await flush();

    expect(result.data.value).toEqual({ title: '你好' });
    expect(result.loading.value).toBe(false);
    expect(result.error.value).toBe(null);
    expect(events.map(e => e[0])).toEqual(['complete', 'success']);
    expect(events[0][1].data).toEqual({ title: '你好' });
    expect(events[0][1].error).toBe(null);
    expect(events[1][1].args).toEqual([]);
  });

  it('immediate: false 时不自动发，必须显式 send', async () => {
    let calls = 0;
    const result = withSetup(() => useRequest<number>(() => {
      calls++;
      return Promise.resolve(1);
    }, { immediate: false }));

    await flush();
    expect(calls).toBe(0);
    expect(result.loading.value).toBe(false);

    result.send();
    await flush();
    expect(calls).toBe(1);
    expect(result.data.value).toBe(1);
  });

  it('refreshing 只在「已有数据时的再次请求」为 true，首次加载不算', async () => {
    const pending: Array<ReturnType<typeof defer<number>>> = [];
    const result = withSetup(() => useRequest<number>(() => {
      const d = defer<number>();
      pending.push(d);
      return d.promise;
    }, { immediate: false }));

    result.send();
    expect(result.loading.value).toBe(true);
    expect(result.refreshing.value).toBe(false); // 还没有任何数据

    pending[0].resolve(1);
    await flush();
    expect(result.data.value).toBe(1);
    expect(result.loading.value).toBe(false);

    result.send();
    expect(result.loading.value).toBe(true);
    expect(result.refreshing.value).toBe(true); // 这次是「带着旧内容的刷新」

    pending[1].resolve(2);
    await flush();
    expect(result.refreshing.value).toBe(false);
  });

  it('失败时写 error 并触发 onError，且 send 不 reject 而是 resolve null', async () => {
    const d = defer<number>();
    const result = withSetup(() => useRequest<number>(() => d.promise, { immediate: false }));

    const errors: Array<any> = [];
    result.onError((e: any) => errors.push(e));

    const promise = result.send();
    d.reject(new Error('网络炸了'));

    await expect(promise).resolves.toBe(null);
    await flush();

    expect(result.error.value?.message).toBe('网络炸了');
    expect(result.loading.value).toBe(false);
    expect(errors.length).toBe(1);
    expect(errors[0].error.message).toBe('网络炸了');
    expect(errors[0].data).toBe(null);
  });
});

describe('useRequest 并发竞态', () => {
  it('先发后到的旧响应被丢弃，data 以最后一次为准', async () => {
    const pending: Array<ReturnType<typeof defer<number>>> = [];
    const result = withSetup(() => useRequest<number>(() => {
      const d = defer<number>();
      pending.push(d);
      return d.promise;
    }, { immediate: false }));

    const first = result.send('a');
    const second = result.send('b');
    expect(pending.length).toBe(2);

    // 第二次先返回
    pending[1].resolve(2);
    await flush();
    // 第一次后返回，必须被代次守卫丢弃
    pending[0].resolve(1);
    await flush();

    expect(result.data.value).toBe(2);
    expect(result.loading.value).toBe(false);
    await expect(second).resolves.toBe(2);
    await expect(first).resolves.toBe(null); // 被顶掉 → resolve null，不写状态
  });

  it('被顶掉的旧请求不会把 loading 提前置回 false', async () => {
    const pending: Array<ReturnType<typeof defer<number>>> = [];
    const result = withSetup(() => useRequest<number>(() => {
      const d = defer<number>();
      pending.push(d);
      return d.promise;
    }, { immediate: false }));

    result.send('a');
    result.send('b');

    pending[0].resolve(1); // 旧的那次先回来
    await flush();
    expect(result.loading.value).toBe(true); // 新请求还在飞，不能被旧的提前关掉
    expect(result.data.value).toBe(null);

    pending[1].resolve(2);
    await flush();
    expect(result.loading.value).toBe(false);
    expect(result.data.value).toBe(2);
  });
});

describe('useRequest 重试', () => {
  it('网络层失败按 retry 次数重试到成功', async () => {
    let calls = 0;
    const result = withSetup(() => useRequest<string>(() => {
      calls++;
      if (calls < 3) {
        return Promise.reject(new Error('network down'));
      }
      return Promise.resolve('ok');
    }, { retry: 2, retryDelay: 0 }));

    await flush(10);

    expect(calls).toBe(3);
    expect(result.data.value).toBe('ok');
    expect(result.error.value).toBe(null);
    expect(result.loading.value).toBe(false);
  });

  it('retry 用尽后仍是失败态', async () => {
    let calls = 0;
    const result = withSetup(() => useRequest<string>(() => {
      calls++;
      return Promise.reject(new Error('network down'));
    }, { retry: 2, retryDelay: 0 }));

    await flush(10);

    expect(calls).toBe(3); // 首次 + 2 次重试
    expect(result.error.value?.message).toBe('network down');
  });

  it('业务码失败（BusinessError）不重试', async () => {
    let calls = 0;
    const result = withSetup(() => useRequest<string>(() => {
      calls++;
      return Promise.reject(new BusinessError('余额不足', 5001));
    }, { retry: 3, retryDelay: 0 }));

    await flush(10);

    expect(calls).toBe(1);
    expect(result.error.value?.message).toBe('余额不足');
  });
});

describe('useRequest 防抖', () => {
  it('窗口内连续调用只发一次，且用的是最后一次的参数', async () => {
    const seen: Array<Array<any>> = [];
    const result = withSetup(() => useRequest<number>((ctx: any) => {
      seen.push(ctx.args);
      return Promise.resolve(1);
    }, { immediate: false, debounce: 20 }));

    result.send('a');
    result.send('b');
    result.send('c');

    await sleep(80);
    await flush();

    expect(seen.length).toBe(1);
    expect(seen[0]).toEqual(['c']);
  });
});

describe('useRequest 轮询', () => {
  it('轮询不翻 loading，失败静默不写 error', async () => {
    let calls = 0;
    const result = withSetup(() => useRequest<number>(() => {
      calls++;
      if (calls == 1) {
        return Promise.resolve(1);
      }
      return Promise.reject(new Error('poll fail'));
    }, { polling: 20 }));

    await flush();
    expect(result.data.value).toBe(1);
    expect(result.loading.value).toBe(false);

    await sleep(90); // 跑过若干个轮询周期
    await flush();

    expect(calls).toBeGreaterThan(1);
    expect(result.error.value).toBe(null); // 轮询失败静默
    expect(result.loading.value).toBe(false); // 轮询全程不翻 loading

    result.stopPolling();
  });

  it('stopPolling 之后不再发起', async () => {
    let calls = 0;
    const result = withSetup(() => useRequest<number>(() => {
      calls++;
      return Promise.resolve(calls);
    }, { polling: 20 }));

    await flush();
    result.stopPolling();
    const afterStop = calls;

    await sleep(90);
    await flush();
    expect(calls).toBe(afterStop);
  });
});

describe('useRequest abort', () => {
  it('abort 不触发 onError、触发 onComplete，迟到响应不写状态', async () => {
    const d = defer<number>();
    const result = withSetup(() => useRequest<number>(() => d.promise, { immediate: false }));

    const errors: Array<any> = [];
    const completes: Array<any> = [];
    result.onError((e: any) => errors.push(e));
    result.onComplete((e: any) => completes.push(e));

    const promise = result.send();
    expect(result.loading.value).toBe(true);

    result.abort();
    expect(result.loading.value).toBe(false);

    d.resolve(9); // 迟到的成功响应
    await flush();

    await expect(promise).resolves.toBe(null);
    expect(result.data.value).toBe(null);
    expect(errors.length).toBe(0);
    expect(completes.length).toBe(1);
    expect(completes[0].data).toBe(null);
    expect(completes[0].error).toBe(null);
  });

  it('abort 会通过 ctx.requestKey 真的取消底层在飞请求', async () => {
    const tasks: Array<any> = [];
    (globalThis as any).uni.request = vi.fn(() => {
      const task = { abort: vi.fn(), onChunkReceived: vi.fn(), offChunkReceived: vi.fn() };
      tasks.push(task);
      return task;
    });

    try {
      const result = withSetup(() => useRequest<any>((ctx: any) => {
        return http.get<any>('/demo/use-request-abort', {
          extra: { ignoreAuth: true, requestKey: ctx.requestKey }
        } as any);
      }));

      await flush(5);
      expect(tasks.length).toBe(1);
      expect(tasks[0].abort).not.toHaveBeenCalled();

      result.abort();
      expect(tasks[0].abort).toHaveBeenCalledTimes(1);
    }
    finally {
      delete (globalThis as any).uni.request;
    }
  });

  it('abort 能作废「已入队但还没触发」的防抖调用', async () => {
    let calls = 0;
    const result = withSetup(() => useRequest<number>(() => {
      calls++;
      return Promise.resolve(1);
    }, { immediate: false, debounce: 20 }));

    result.send('a');
    result.abort(); // 防抖窗口还没到就取消

    await sleep(80);
    await flush();

    expect(calls).toBe(0);
  });
});

describe('useRequest 卸载清理', () => {
  it('卸载后迟到的响应不再写状态', async () => {
    const d = defer<number>();
    const result = withSetup(() => useRequest<number>(() => d.promise, { immediate: false }));

    result.send();
    // 卸载整棵组件
    mountedWrappers.pop()!.unmount();

    d.resolve(7);
    await flush();

    expect(result.data.value).toBe(null);
    expect(result.loading.value).toBe(false);
  });

  it('卸载后 pending 的防抖调用不会真的发请求', async () => {
    let calls = 0;
    const result = withSetup(() => useRequest<number>(() => {
      calls++;
      return Promise.resolve(1);
    }, { immediate: false, debounce: 20 }));

    result.send('a');
    mountedWrappers.pop()!.unmount();

    await sleep(80);
    await flush();

    expect(calls).toBe(0);
  });
});
