import { describe, expect, it } from 'vitest';
import { createFoo, deleteFoo, fetchFooById, fetchFooList, updateFoo } from '@/src/api/foo/foo.uts';
import type { FooItem } from '@/src/api/foo/types.uts';
import { fetchFeatureList, fetchTemplateMeta } from '@/src/api/index/index.uts';
import { fetchUserInfo, login, logout } from '@/src/api/auth/auth.uts';
import { fetchUserMenuList, fetchUserProfile } from '@/src/api/me/me.uts';

describe('src/api spec compliant tests', () => {
  describe('foo api module', () => {
    it('fetchFooList should return paginated data with correct total', async () => {
      const res = await fetchFooList('', 1, 2);
      expect(res.list.length).toBe(2);
      expect(res.total).toBeGreaterThanOrEqual(5);
      expect(res.hasMore).toBe(true);
    });

    it('fetchFooList should filter by keyword', async () => {
      const res = await fetchFooList('vitest', 1, 10);
      expect(res.list.some((item: FooItem) => item.name === 'vitest')).toBe(true);
    });

    it('fetchFooById should return item or null', async () => {
      const item = await fetchFooById(1);
      expect(item).not.toBeNull();
      expect(item?.name).toBe('unix');

      const nonExistent = await fetchFooById(99999);
      expect(nonExistent).toBeNull();
    });

    it('create, update and delete foo should succeed', async () => {
      const created = await createFoo({ id: 99, name: 'new-foo', desc: 'desc' } as FooItem);
      expect(created.name).toBe('new-foo');

      const updated = await updateFoo(created.id, { id: created.id, name: 'updated-foo', desc: 'desc' } as FooItem);
      expect(updated.name).toBe('updated-foo');

      const deleted = await deleteFoo(created.id);
      expect(deleted).toBe(true);
    });
  });

  describe('index api module', () => {
    it('fetchFeatureList should return core features', async () => {
      const list = await fetchFeatureList();
      expect(list.length).toBeGreaterThanOrEqual(6);
      expect(list[0].title).toContain('单页 TabBar');
    });

    it('fetchTemplateMeta should return template intro', async () => {
      const meta = await fetchTemplateMeta();
      expect(meta.title).toBe('unibestX');
      expect(meta.author).toBe('cq112233');
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

  describe('me api module', () => {
    it('fetchUserProfile should return user profile', async () => {
      const profile = await fetchUserProfile();
      expect(profile.username).toBe('UNIX');
      expect(profile.isLogin).toBe(true);
    });

    it('fetchUserMenuList should return menu items', async () => {
      const menus = await fetchUserMenuList();
      expect(menus.length).toBeGreaterThan(0);
      expect(menus[0].title).toBe('主题外观');
    });
  });
});
