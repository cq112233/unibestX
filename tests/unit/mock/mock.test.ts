import { describe, expect, it } from 'vitest';
import fooMock from '../../../mock/foo';
import authMock from '../../../mock/auth';

describe('mock routes integration tests', () => {
  describe('foo mock routes', () => {
    const getFoo = fooMock.find(m => m.url === '/api/foo' && m.method === 'get');
    const getFooById = fooMock.find(m => m.url === '/api/foo/:id' && m.method === 'get');
    const postFoo = fooMock.find(m => m.url === '/api/foo' && m.method === 'post');

    it('should return foo list with pagination metadata', () => {
      expect(getFoo).toBeDefined();
      const res = (getFoo?.response as any)({ query: { page: '1', pageSize: '2' } });
      expect(res.code).toBe(200);
      expect(res.data.list.length).toBe(2);
      expect(res.data.total).toBeGreaterThanOrEqual(5);
    });

    it('should filter foo list by name', () => {
      const res = (getFoo?.response as any)({ query: { name: 'vitest' } });
      expect(res.code).toBe(200);
      expect(res.data.list.some((item: any) => item.name === 'vitest')).toBe(true);
    });

    it('should get foo by id', () => {
      expect(getFooById).toBeDefined();
      const res = (getFooById?.response as any)({ url: '/api/foo/2', query: {} });
      expect(res.code).toBe(200);
      expect(res.data.id).toBe(2);
      expect(res.data.name).toBe('UnibestX');
    });

    it('should create new foo item', () => {
      expect(postFoo).toBeDefined();
      const res = (postFoo?.response as any)({ body: { name: 'offline-test', desc: 'test desc' } });
      expect(res.code).toBe(200);
      expect(res.data.name).toBe('offline-test');
      expect(res.data.id).toBeGreaterThan(0);
    });
  });

  describe('auth mock routes', () => {
    const loginMock = authMock.find(m => m.url === '/api/auth/login');
    const userInfoMock = authMock.find(m => m.url === '/api/user/info');

    it('should fail login with invalid password', () => {
      const res = (loginMock?.response as any)({ body: { username: 'test', password: 'wrong-password' } });
      expect(res.code).toBe(400);
      expect(res.message).toContain('密码错误');
    });

    it('should succeed login with valid password', () => {
      const res = (loginMock?.response as any)({ body: { username: 'admin', password: 'admin' } });
      expect(res.code).toBe(200);
      expect(res.data.token).toContain('mock-token-');
      expect(res.data.userInfo.username).toBe('admin');
    });

    it('should return user info', () => {
      const res = (userInfoMock?.response as any)();
      expect(res.code).toBe(200);
      expect(res.data.username).toBe('admin');
      expect(res.data.roles).toContain('admin');
    });
  });
});
