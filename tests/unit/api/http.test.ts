import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import {
  createHttpClient,
  DEFAULT_HTTP_OPTIONS,
  defaultBusinessAfterComplete,
  defaultBusinessAfterSuccess,
  defaultBusinessBeforeRequest,
  defaultRequestAdapter,
  http,
  HttpClient,
  RequestLifecycle
} from '@/src/http/index.uts';

describe('httpClient beforeRequest & afterResponse hooks', () => {
  beforeEach(() => {
    http.clearBeforeRequest();
    http.clearAfterResponse();
  });

  afterEach(() => {
    http.clearBeforeRequest();
    http.clearAfterResponse();
  });

  it('should export DEFAULT_HTTP_OPTIONS and instantiate http via createHttpClient', () => {
    expect(DEFAULT_HTTP_OPTIONS).toBeDefined();
    expect(DEFAULT_HTTP_OPTIONS.timeout).toBe(5000);
    expect(http).toBeDefined();
    expect(typeof http.get).toBe('function');
    expect(typeof http.post).toBe('function');
  });

  it('should support synchronous beforeRequest hook modifying headers', async () => {
    let capturedHeader: any = null;

    const hook = (config: any) => {
      if (config.header == null) {
        config.header = {};
      }
      const header = config.header;
      header.token = 'custom-test-token';
      header['X-Custom-Header'] = 'custom-value';
      capturedHeader = header;
    };

    http.beforeRequest(hook);

    const dummyConfig = {
      url: '/test-sync',
      method: 'GET',
      extra: { ignoreAuth: true }
    } as any;

    try {
      await http.request(dummyConfig);
    }
    catch (_) {}

    expect(capturedHeader).not.toBeNull();
    expect(capturedHeader.token).toBe('custom-test-token');
    expect(capturedHeader['X-Custom-Header']).toBe('custom-value');
  });

  it('should support asynchronous beforeRequest hook', async () => {
    const executionOrder: string[] = [];

    http.beforeRequest(async (config: any) => {
      executionOrder.push('start-async');
      await new Promise(resolve => setTimeout(resolve, 10));
      if (config.header == null) {
        config.header = {};
      }
      config.header['X-Async-Id'] = 'async-123';
      executionOrder.push('end-async');
    });

    const dummyConfig = {
      url: '/test-async',
      method: 'GET',
      extra: { ignoreAuth: true }
    } as any;

    try {
      await http.request(dummyConfig);
    }
    catch (_) {}

    expect(executionOrder).toEqual(['start-async', 'end-async']);
    expect(dummyConfig.header['X-Async-Id']).toBe('async-123');
  });

  it('should allow removing a specific hook and clearing all hooks', async () => {
    let callCount = 0;
    const hook = () => {
      callCount += 1;
    };

    http.beforeRequest(hook);
    http.removeBeforeRequest(hook);

    const dummyConfig = {
      url: '/test-remove',
      method: 'GET',
      extra: { ignoreAuth: true }
    } as any;

    try {
      await http.request(dummyConfig);
    }
    catch (_) {}

    expect(callCount).toBe(0);

    http.beforeRequest(hook);
    http.clearBeforeRequest();

    try {
      await http.request(dummyConfig);
    }
    catch (_) {}

    expect(callCount).toBe(0);
  });

  it('should reject request when beforeRequest hook throws an error', async () => {
    http.beforeRequest(() => {
      throw new Error('拦截器强制中止');
    });

    const dummyConfig = {
      url: '/test-abort',
      method: 'GET',
      extra: { ignoreAuth: true }
    } as any;

    await expect(http.request(dummyConfig)).rejects.toThrow('拦截器强制中止');
  });

  it('should support createHttpClient factory function with multi-instance isolation', async () => {
    let client1Called = false;
    let client2Called = false;

    const client1 = createHttpClient({
      baseURL: 'https://api-1.example.com',
      header: { 'X-Tenant': 'tenant-1' } as any,
      beforeRequest: (config: any) => {
        client1Called = true;
        config.header['X-Client'] = 'client-1';
      }
    });

    const client2 = createHttpClient({
      baseURL: 'https://api-2.example.com',
      header: { 'X-Tenant': 'tenant-2' } as any,
      beforeRequest: (config: any) => {
        client2Called = true;
        config.header['X-Client'] = 'client-2';
      }
    });

    const config1 = { url: '/test-1', method: 'GET', extra: { ignoreAuth: true } } as any;
    try {
      await client1.request(config1);
    }
    catch (_) {}

    expect(client1Called).toBe(true);
    expect(client2Called).toBe(false);
    expect(config1.header['X-Client']).toBe('client-1');

    const config2 = { url: '/test-2', method: 'GET', extra: { ignoreAuth: true } } as any;
    try {
      await client2.request(config2);
    }
    catch (_) {}

    expect(client2Called).toBe(true);
    expect(config2.header['X-Client']).toBe('client-2');
  });

  it('should support afterResponse / responded hook on success', () => {
    let respondedHookCalled = false;
    const client = createHttpClient({
      baseURL: 'https://hook.example.com',
      responded: (data: any, _config: any) => {
        respondedHookCalled = true;
        return data;
      }
    });

    expect(typeof client.afterResponse).toBe('function');
    expect(typeof client.responded).toBe('function');
    expect(respondedHookCalled).toBe(false);
  });

  it('should decouple business hooks and allow clean client without ignoreAuth', async () => {
    // 纯净客户端：未配置 defaultBusinessBeforeRequest，发起请求不传 ignoreAuth 也不会触发“未登录”拦截
    const cleanClient = createHttpClient({
      baseURL: 'https://clean.example.com'
    });

    const dummyConfig = {
      url: '/public-data',
      method: 'GET'
    } as any;

    let rejectedWithError: any = null;
    try {
      await cleanClient.request(dummyConfig);
    }
    catch (err: any) {
      rejectedWithError = err;
    }

    // 不应抛出未登录错误
    if (rejectedWithError != null) {
      expect(rejectedWithError.message).not.toContain('未登录');
    }
  });

  it('should export business hooks and unpack data correctly', () => {
    expect(typeof defaultBusinessBeforeRequest).toBe('function');
    expect(typeof defaultBusinessAfterSuccess).toBe('function');
    expect(typeof defaultBusinessAfterComplete).toBe('function');
    expect(typeof defaultRequestAdapter).toBe('function');
    expect(DEFAULT_HTTP_OPTIONS.beforeRequest).toBe(defaultBusinessBeforeRequest);
    expect(DEFAULT_HTTP_OPTIONS.requestAdapter).toBe(defaultRequestAdapter);
    expect(typeof DEFAULT_HTTP_OPTIONS.refreshToken).toBe('function');
    expect(typeof DEFAULT_HTTP_OPTIONS.onUnauthorized).toBe('function');

    // 测试业务解包
    const mockResponse = {
      code: 0,
      data: { userId: '1001', username: 'antigravity' },
      message: 'success'
    };
    const unpacked = defaultBusinessAfterSuccess(mockResponse, {} as any);
    expect(unpacked).toEqual({ userId: '1001', username: 'antigravity' });
  });

  it('should support Alova-style responded object with onSuccess, onError and onComplete', async () => {
    let onSuccessCalled = false;
    let onCompleteCalled = false;

    const alovaLikeClient = createHttpClient({
      baseURL: 'https://alova.example.com',
      responded: {
        onSuccess: async (response: any, _method: any) => {
          onSuccessCalled = true;
          return response.data;
        },
        onError: (_err: any, _method: any) => {},
        onComplete: async (_method: any) => {
          onCompleteCalled = true;
        }
      }
    });

    expect(typeof alovaLikeClient.responded).toBe('function');
    expect(onSuccessCalled).toBe(false);
    expect(onCompleteCalled).toBe(false);
  });

  it('should support Alova-style responded single function shortcut', async () => {
    let shortcutCalled = false;

    const client = createHttpClient({
      baseURL: 'https://alova-fn.example.com',
      async responded(response: any, _method: any) {
        shortcutCalled = true;
        return response;
      }
    });

    expect(typeof client.responded).toBe('function');
    expect(shortcutCalled).toBe(false);
  });

  it('should support custom requestAdapter in HttpClientOptions', () => {
    let adapterCalled = false;
    let passedConfig: any = null;

    const customAdapter = (config: any) => {
      adapterCalled = true;
      passedConfig = config;
      return defaultRequestAdapter(config);
    };

    const client = createHttpClient({
      baseURL: 'https://adapter.example.com',
      timeout: 8888,
      requestAdapter: customAdapter
    });

    expect(client).toBeDefined();
    expect(adapterCalled).toBe(true);
    expect(passedConfig).not.toBeNull();
    expect(passedConfig.baseURL).toBe('https://adapter.example.com');
    expect(passedConfig.timeout).toBe(8888);
  });

  it('should support passing custom client instance directly', () => {
    const rawClient = defaultRequestAdapter({
      baseURL: 'https://direct-client.example.com'
    } as any);

    const client = createHttpClient({
      baseURL: 'https://direct-client.example.com',
      client: rawClient
    });

    expect(client).toBeDefined();
    expect((client as any).client).toBe(rawClient);
  });

  it('should fallback to default Request client when neither requestAdapter nor client is provided', () => {
    const client = new HttpClient({ baseURL: 'https://no-adapter.com' });
    expect(client).toBeDefined();
    expect((client as any).client).toBeDefined();
  });

  it('should operate entirely through RequestLifecycle instance', () => {
    const lifecycle = new RequestLifecycle();

    let taskAborted = false;
    const mockTask = {
      abort: () => {
        taskAborted = true;
      }
    };

    // 登记与取消
    lifecycle.registerTask('test-key-1', mockTask as any);
    expect(lifecycle.isAborted('test-key-1')).toBe(false);

    lifecycle.abort('test-key-1');
    expect(taskAborted).toBe(true);
    expect(lifecycle.isAborted('test-key-1')).toBe(true);
    expect(lifecycle.consumeAborted('test-key-1')).toBe(true);
    expect(lifecycle.isAborted('test-key-1')).toBe(false);

    // TTL 缓存实例操作
    lifecycle.setCache('cache-key', 'cached-data', 5000);
    expect(lifecycle.getCache('cache-key')).toBe('cached-data');
    lifecycle.clearCache('cache-key');
    expect(lifecycle.getCache('cache-key')).toBeNull();

    // 工具方法
    const config = {
      method: 'POST',
      url: '/test',
      data: { a: 1 },
      extra: {
        requestKey: 'my-key',
        cacheTtl: 1000,
        dedupe: true
      }
    } as any;
    expect(lifecycle.buildRequestKey(config)).toBe('POST|/test|{"a":1}');
    expect(lifecycle.readExtraString(config, 'requestKey')).toBe('my-key');
    expect(lifecycle.readExtraNumber(config, 'cacheTtl')).toBe(1000);
    expect(lifecycle.readExtraBoolean(config, 'dedupe')).toBe(true);
  });

  it('should support HttpClient instance-level abort and clearCache methods', () => {
    const client = createHttpClient({
      baseURL: 'https://instance-lifecycle.com'
    });

    expect(typeof client.abort).toBe('function');
    expect(typeof client.abortAll).toBe('function');
    expect(typeof client.clearCache).toBe('function');
    expect(client.getLifecycle()).toBeInstanceOf(RequestLifecycle);
  });
});
