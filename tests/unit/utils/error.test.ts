import { describe, expect, it } from 'vitest';
import { maskSensitive } from '@/src/utils/error-report/index.uts';
import { resolveErrorMessage } from '@/src/utils/error/index.uts';

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
