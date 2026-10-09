import { describe, expect, it } from 'vitest';
import {
  cleanPath,
  ensureLeadingSlash,
  isSamePath,
  parseUrlToObj,
  removeLeadingSlash
} from '@/src/router/index.uts';

describe('route utils Unit Tests', () => {
  describe('ensureLeadingSlash', () => {
    it('should add leading slash if not present', () => {
      expect(ensureLeadingSlash('pages/index')).toBe('/pages/index');
    });

    it('should retain leading slash if already present', () => {
      expect(ensureLeadingSlash('/pages/index')).toBe('/pages/index');
    });

    it('should return slash for empty string', () => {
      expect(ensureLeadingSlash('')).toBe('/');
    });
  });

  describe('removeLeadingSlash', () => {
    it('should remove leading slash if present', () => {
      expect(removeLeadingSlash('/pages/index')).toBe('pages/index');
    });

    it('should leave path unchanged if no leading slash', () => {
      expect(removeLeadingSlash('pages/index')).toBe('pages/index');
    });
  });

  describe('cleanPath', () => {
    it('should remove query parameters and prepend slash', () => {
      expect(cleanPath('pages/index?tab=1&foo=bar')).toBe('/pages/index');
      expect(cleanPath('/pages/user?id=123')).toBe('/pages/user');
    });

    it('should handle paths without query parameters', () => {
      expect(cleanPath('pages/home')).toBe('/pages/home');
      expect(cleanPath('/pages/home')).toBe('/pages/home');
    });

    it('should return empty string for empty input', () => {
      expect(cleanPath('')).toBe('');
    });
  });

  describe('isSamePath', () => {
    it('should correctly identify identical paths regardless of query and leading slash', () => {
      expect(isSamePath('/pages/index/index', 'pages/index/index?foo=1')).toBe(true);
      expect(isSamePath('pages/index/index', '/pages/index/index')).toBe(true);
      expect(isSamePath('/src/pages/index/index', 'pages/index/index')).toBe(true);
      expect(isSamePath('/pages/me/index', '/pages/index/index')).toBe(false);
    });
  });

  describe('parseUrlToObj', () => {
    it('should parse url without query', () => {
      const res = parseUrlToObj('/pages/index');
      expect(res.path).toBe('/pages/index');
      expect(res.query.size).toBe(0);
    });

    it('should parse url with single and multiple query parameters', () => {
      const res = parseUrlToObj('/src/pages/login?redirect=index&tab=2');
      expect(res.path).toBe('/src/pages/login');
      expect(res.query.get('redirect')).toBe('index');
      expect(res.query.get('tab')).toBe('2');
    });

    it('should decode url encoded parameters', () => {
      const res = parseUrlToObj('/login?name=%E6%B5%8B%E8%AF%95');
      expect(res.path).toBe('/login');
      expect(res.query.get('name')).toBe('测试');
    });
  });
});
