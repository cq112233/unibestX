import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  createHttpClient,
  http,
  streamHttp
} from '@/src/http/request/request.uts';

/**
 * 流式请求（HttpClient.stream / streamHttp）的行为验证
 *
 * ⚠️ 为什么必须在这里验：`requestStream` 目前在 `src/` 下没有任何调用方，
 * H5 / 真机跑起来只会走到 `simulateStream` 那条本地模拟分支 —— 真实流式这条路径
 * 只有单测能触达。它又是「自己发 uni.request」的代码，URL 拼接与取消语义写错了
 * 编译期不会有任何提示。
 */

type FakeChunkListener = (result: { data: ArrayBuffer }) => void;

/** 造一个假的 uni.request：捕获入参、返回可被 abort 的假 task，并暴露三路回放入口 */
function installFakeRequest() {
  const calls: Array<any> = [];
  const tasks: Array<any> = [];
  const listeners: Array<Array<FakeChunkListener>> = [];

  (globalThis as any).uni.request = vi.fn((options: any) => {
    const index = calls.length;
    calls.push(options);
    listeners.push([]);
    const task = {
      abort: vi.fn(),
      onChunkReceived: vi.fn((listener: FakeChunkListener) => {
        listeners[index].push(listener);
        return index;
      }),
      offChunkReceived: vi.fn()
    };
    tasks.push(task);
    return task;
  });

  return {
    calls,
    tasks,
    emitChunk: (index: number, data: ArrayBuffer) => {
      listeners[index].forEach(listener => listener({ data }));
    },
    fireSuccess: (index: number) => {
      calls[index].success({});
    },
    fireFail: (index: number, errMsg: string) => {
      calls[index].fail({ errMsg });
    }
  };
}

/** 前置钩子链是异步的，真正的 uni.request 发生在微任务之后 */
function flush(): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, 0));
}

describe('httpClient.stream', () => {
  let fake: ReturnType<typeof installFakeRequest>;

  beforeEach(() => {
    fake = installFakeRequest();
  });

  afterEach(() => {
    delete (globalThis as any).uni.request;
  });

  it('把相对路径拼到 baseURL 上，并固定 POST 与 chunked 三件套', async () => {
    const client = createHttpClient({ baseURL: 'https://stream.example.com' });

    client.stream({ url: '/api/v1/chat', data: '{"q":"hi"}', timeout: 1234 } as any, () => {}, () => {});
    await flush();

    expect(fake.calls.length).toBe(1);
    expect(fake.calls[0].url).toBe('https://stream.example.com/api/v1/chat');
    expect(fake.calls[0].method).toBe('POST');
    expect(fake.calls[0].data).toBe('{"q":"hi"}');
    expect(fake.calls[0].enableChunked).toBe(true);
    expect(fake.calls[0].responseType).toBe('arraybuffer');
    expect(fake.calls[0].dataType).toBe('text');
    expect(fake.calls[0].timeout).toBe(1234);
  });

  it('baseURL 末尾带斜杠时不重复拼出双斜杠', async () => {
    const client = createHttpClient({ baseURL: 'https://stream.example.com/' });

    client.stream({ url: '/sse' } as any, () => {}, () => {});
    await flush();

    expect(fake.calls[0].url).toBe('https://stream.example.com/sse');
  });

  it('绝对地址原样使用，不拼 baseURL', async () => {
    const client = createHttpClient({ baseURL: 'https://stream.example.com' });

    client.stream({ url: 'https://other.example.com/sse' } as any, () => {}, () => {});
    await flush();

    expect(fake.calls[0].url).toBe('https://other.example.com/sse');
  });

  it('extra.domain 覆盖客户端 baseURL', async () => {
    const client = createHttpClient({ baseURL: 'https://stream.example.com' });

    client.stream({
      url: '/sse',
      extra: { domain: 'https://override.example.com' } as any
    } as any, () => {}, () => {});
    await flush();

    expect(fake.calls[0].url).toBe('https://override.example.com/sse');
  });

  it('chunk 原样转发给 onChunk', async () => {
    const client = createHttpClient({ baseURL: 'https://stream.example.com' });
    const received: Array<ArrayBuffer> = [];

    client.stream({ url: '/sse' } as any, (data: ArrayBuffer) => {
      received.push(data);
    }, () => {});
    await flush();

    const first = new ArrayBuffer(4);
    const second = new ArrayBuffer(8);
    fake.emitChunk(0, first);
    fake.emitChunk(0, second);

    expect(received).toEqual([first, second]);
  });

  it('success 回调以 onEnd(null) 收尾', async () => {
    const client = createHttpClient({ baseURL: 'https://stream.example.com' });
    const ends: Array<string | null> = [];

    client.stream({ url: '/sse' } as any, () => {}, (errMsg: string | null) => {
      ends.push(errMsg);
    });
    await flush();
    fake.fireSuccess(0);

    expect(ends).toEqual([null]);
  });

  it('fail 回调把 errMsg 交给 onEnd', async () => {
    const client = createHttpClient({ baseURL: 'https://stream.example.com' });
    const ends: Array<string | null> = [];

    client.stream({ url: '/sse' } as any, () => {}, (errMsg: string | null) => {
      ends.push(errMsg);
    });
    await flush();
    fake.fireFail(0, 'request:fail timeout');

    expect(ends).toEqual(['request:fail timeout']);
  });

  it('abort() 中断底层 task，且不再把随后的失败上报给调用方', async () => {
    const client = createHttpClient({ baseURL: 'https://stream.example.com' });
    const ends: Array<string | null> = [];

    const handle = client.stream({ url: '/sse' } as any, () => {}, (errMsg: string | null) => {
      ends.push(errMsg);
    });
    await flush();

    handle.abort();
    expect(fake.tasks[0].abort).toHaveBeenCalledTimes(1);

    // 中断后底层仍会回调一次 fail（errMsg 含 abort），必须被静默吞掉
    fake.fireFail(0, 'request:fail abort');
    expect(ends).toEqual([]);
  });

  it('前置钩子链解析完之前 abort()，一个请求都不发', async () => {
    const client = createHttpClient({ baseURL: 'https://stream.example.com' });

    const handle = client.stream({ url: '/sse' } as any, () => {}, () => {});
    handle.abort();
    await flush();

    expect(fake.calls.length).toBe(0);
  });
});

describe('http 单例的 stream 复用前置钩子链', () => {
  let fake: ReturnType<typeof installFakeRequest>;

  beforeEach(() => {
    fake = installFakeRequest();
  });

  afterEach(() => {
    delete (globalThis as any).uni.request;
  });

  it('beforeRequest 注入的 header 会进入底层 uni.request', async () => {
    const hook = (config: any) => {
      config.header.token = 'stream-token';
    };
    http.beforeRequest(hook);
    try {
      http.stream({
        url: '/sse',
        extra: { ignoreAuth: true } as any
      } as any, () => {}, () => {});
      await flush();

      expect(fake.calls.length).toBe(1);
      expect(fake.calls[0].header.token).toBe('stream-token');
    }
    finally {
      http.removeBeforeRequest(hook);
    }
  });
});

describe('streamHttp', () => {
  let fake: ReturnType<typeof installFakeRequest>;

  beforeEach(() => {
    fake = installFakeRequest();
  });

  afterEach(() => {
    delete (globalThis as any).uni.request;
  });

  it('固定 POST 与 chunked 参数后委托给默认实例', async () => {
    const handle = streamHttp('/sse', 'body', () => {}, () => {}, {
      extra: { ignoreAuth: true } as any
    } as any);
    await flush();

    expect(fake.calls.length).toBe(1);
    expect(fake.calls[0].method).toBe('POST');
    expect(fake.calls[0].data).toBe('body');
    expect(fake.calls[0].enableChunked).toBe(true);
    expect(typeof handle.abort).toBe('function');
  });
});
