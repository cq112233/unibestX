import { describe, expect, it } from 'vitest';
import { maskSensitive } from '@/src/utils/report/index.uts';
import {
  BusinessError,
  createHttpClient,
  DEFAULT_HTTP_OPTIONS,
  defaultBusinessAfterError,
  defaultBusinessAfterSuccess,
  defaultRequestAdapter,
  HttpError,
  resolveErrorMessage
} from '@/src/http/index.uts';

describe('error-report masking', () => {
  it('should mask mobile numbers', () => {
    expect(maskSensitive('用户 13800138000 登录')).toBe('用户 138****8000 登录');
  });

  it('should mask JSON token fields', () => {
    const out = maskSensitive('{"token":"abcdefghijklmnop","name":"abc"}');
    expect(out.includes('abcdefghijklmnop')).toBe(false);
    expect(out.includes('abcd****mnop')).toBe(true);
  });

  it('should mask key=value form', () => {
    const out = maskSensitive('accessToken=abcdefghijklmnop&page=1');
    expect(out.includes('abcdefghijklmnop')).toBe(false);
  });

  it('should fully mask short secrets', () => {
    expect(maskSensitive('{"token":"short"}')).toBe('{"token":"****"}');
  });

  it('should leave non-sensitive text untouched', () => {
    expect(maskSensitive('普通错误信息')).toBe('普通错误信息');
  });
});

describe('error classification', () => {
  it('should classify timeout by english keyword', () => {
    expect(resolveErrorMessage('request timeout', -1).kind).toBe('timeout');
  });

  it('should classify timeout by chinese keyword', () => {
    expect(resolveErrorMessage('请求超时了', -1).kind).toBe('timeout');
  });

  it('should classify network failure when code is -1', () => {
    expect(resolveErrorMessage('', -1).kind).toBe('http');
  });

  it('should classify business error when code and message present', () => {
    const info = resolveErrorMessage('余额不足', 5001);
    expect(info.kind).toBe('business');
    expect(info.message).toBe('余额不足');
    expect(info.code).toBe(5001);
  });

  it('should fall back to unknown without code or message', () => {
    expect(resolveErrorMessage('', 0).kind).toBe('unknown');
  });
});

describe('error normalization driven by structured source', () => {
  it('should keep business kind when the message happens to mention 网络', () => {
    // 关键词嗅探只能当兜底：拿到真实业务码就以业务码为准，
    // 否则「网络繁忙，请稍后再试」这种业务文案会被误判成 http
    const info = resolveErrorMessage('网络繁忙，请稍后再试', 5001);
    expect(info.kind).toBe('business');
    expect(info.statusCode).toBe(0);
  });

  it('should keep business kind when the message happens to contain fail', () => {
    expect(resolveErrorMessage('操作 fail 了', 5001).kind).toBe('business');
  });

  it('should classify by the real http status code', () => {
    const info = resolveErrorMessage('服务器错误(500)，请检查网络或联系管理员！：request:fail', -1, 500);
    expect(info.kind).toBe('http');
    expect(info.statusCode).toBe(500);
  });

  it('should classify 408 as timeout', () => {
    // 传输层已经明确给出 408，不必再去嗅探文案
    expect(resolveErrorMessage('请求超时(408)，请检查网络或联系管理员！：request:fail', -1, 408).kind).toBe('timeout');
  });
});

describe('business error carries its code end to end', () => {
  /** 走真实成功钩子拿一个业务失败，返回被抛出的错误 */
  function throwBusinessError(): any {
    try {
      defaultBusinessAfterSuccess(
        { code: 5001, data: null, message: '余额不足' } as any,
        {} as any
      );
    }
    catch (e) {
      return e;
    }
    return null;
  }

  it('should throw a BusinessError carrying the backend business code', () => {
    const err = throwBusinessError();
    expect(err).toBeInstanceOf(BusinessError);
    expect(err.code).toBe(5001);
    // 文案只保留后端原文，内部标记不再透给调用方
    expect(err.message).toBe('余额不足');
  });

  it('should not toast a second time for an already-toasted business error', () => {
    const showToast = (globalThis as any).uni.showToast;
    showToast.mockClear();

    const err = throwBusinessError();
    // 业务文案已由 defaultBusinessAfterSuccess 按后端原文弹过一次
    expect(showToast).toHaveBeenCalledTimes(1);
    showToast.mockClear();

    defaultBusinessAfterError(err, {} as any);

    expect(showToast).not.toHaveBeenCalled();
  });

  it('should reject the request promise with the BusinessError carrying the code', async () => {
    const rawClient: any = defaultRequestAdapter({ baseURL: 'https://business.example.com' } as any);
    // 200 响应下客户端的响应拦截器是空操作，直接给结果即可，链路其余部分保持真实
    rawClient.request = (_config: any) => Promise.resolve({
      statusCode: 200,
      data: { code: 5001, data: null, message: '余额不足' },
      config: {}
    });
    // 带上真实的默认业务钩子，否则 defaultBusinessAfterSuccess / onError 根本没注册
    const client = createHttpClient({ ...DEFAULT_HTTP_OPTIONS, client: rawClient } as any);

    const showToast = (globalThis as any).uni.showToast;
    showToast.mockClear();

    // extra 在真实运行时是 UTSJSONObject（带 getBoolean 等方法），裸对象模拟不出该形态
    const extra = Object.assign(new (globalThis as any).UTSJSONObject(), { ignoreAuth: true });
    const rejected = await client
      .get('/wallet', { extra } as any)
      .then(() => null, (e: any) => e);

    expect(rejected).toBeInstanceOf(BusinessError);
    expect(rejected.code).toBe(5001);
    // 成功钩子按后端原文提示过一次，失败钩子不再重复弹
    expect(showToast).toHaveBeenCalledTimes(1);
    expect(showToast.mock.calls[0][0].title).toBe('余额不足');
  });
});

describe('http status code survives the interceptor chain', () => {
  /** 造一个真实 lime-request 实例并挂上默认业务拦截器，再直接驱动响应拦截器链路 */
  async function driveResponseInterceptor(statusCode: number): Promise<any> {
    const rawClient: any = defaultRequestAdapter({ baseURL: 'https://status-code.example.com' } as any);
    createHttpClient({ client: rawClient });
    // lime-request 会把拦截器里抛出的错误包成 LimeRequestFail 并挂在 cause 上，
    // 这里原样复现该包装行为，确保断言的是真实链路
    const failure = await rawClient.interceptors.response
      .resolve({ statusCode, errMsg: 'request:fail', config: {} })
      .then(() => null, (e: any) => e);
    return failure;
  }

  it('should throw an HttpError wrapped by lime-request with the status code', async () => {
    const failure = await driveResponseInterceptor(500);
    expect(failure).not.toBeNull();
    expect(failure.cause).toBeInstanceOf(HttpError);
    expect(failure.cause.statusCode).toBe(500);
  });

  it('should treat the whole 2xx range as success', async () => {
    // ⚠️ 曾经写成 `statusCode != 200`：201 Created（新增成功）、204 No Content（删除成功）
    //    都会被判失败并弹「连接出错(201)!」，只有 200 能过
    expect(await driveResponseInterceptor(200)).toBeNull();
    expect(await driveResponseInterceptor(201)).toBeNull();
    expect(await driveResponseInterceptor(204)).toBeNull();
    // 非 2xx 仍然要失败
    expect(await driveResponseInterceptor(304)).not.toBeNull();
  });

  it('should normalize a 408 http failure into the timeout copy', async () => {
    const failure = await driveResponseInterceptor(408);
    const showToast = (globalThis as any).uni.showToast;
    showToast.mockClear();

    defaultBusinessAfterError(failure, {} as any);

    expect(showToast).toHaveBeenCalledTimes(1);
    expect(showToast.mock.calls[0][0].title).toBe('请求超时，请稍后重试');
  });
});
