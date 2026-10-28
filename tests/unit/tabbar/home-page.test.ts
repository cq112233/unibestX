import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { getDefaultHomePage, setDefaultHomePage } from '@/uni_modules/route-bestX/index.uts';

describe('getDefaultHomePage', () => {
  beforeEach(() => {
    setDefaultHomePage('');
  });

  afterEach(() => {
    setDefaultHomePage('');
    vi.restoreAllMocks();
  });

  it('does not return current page when current page stack is not home page', () => {
    // 模拟当前在基础页（页面栈底为 basic）
    vi.spyOn(globalThis as any, 'getCurrentPages').mockReturnValue([
      { route: 'src/pages/basic/basic' }
    ]);

    // 默认首页不应该被物理栈顶/栈底篡改为当前页
    const homePage = getDefaultHomePage();
    expect(homePage).not.toBe('/src/pages/basic/basic');
    expect(homePage).toBe('/src/pages/index/index');
  });

  it('respects explicitly configured homePage via setDefaultHomePage', () => {
    setDefaultHomePage('/src/pages/custom-home/custom-home');
    expect(getDefaultHomePage()).toBe('/src/pages/custom-home/custom-home');
  });
});
