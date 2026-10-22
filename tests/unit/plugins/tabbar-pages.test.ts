import { afterEach, describe, expect, it } from 'vitest';
import JSON5 from 'json5';
import { mergePagesJson } from '@/plugins/vite-plugin-uni-pages';
import uniPagesTabbarPlugin from '@/plugins/vite-plugin-uni-pages-tabbar';

type TestPage = {
  path: string;
  type?: string;
};

function createTabbarState(pages: TestPage[]) {
  return {
    root: process.cwd(),
    isProduction: true,
    output: { pages },
    virtualPages: [] as TestPage[],
    flags: {
      sandboxActive: false,
      strictMainPages: false,
      skipConfigWriteback: false
    }
  };
}

describe('mode 4 tabbar pages', () => {
  const originalMode = process.env.VITE_TABBAR_MODE;

  afterEach(() => {
    if (originalMode == null) {
      delete process.env.VITE_TABBAR_MODE;
    }
    else {
      process.env.VITE_TABBAR_MODE = originalMode;
    }
  });

  it('only keeps the host page registered in pages.json', () => {
    process.env.VITE_TABBAR_MODE = '4';
    const state = createTabbarState([
      { path: 'src/pages/index/index', type: 'home' },
      { path: 'src/pages/ai/ai' },
      { path: 'src/pages/basic/basic' },
      { path: 'src/pages/function/function' },
      { path: 'src/pages/me/me' }
    ]);

    uniPagesTabbarPlugin().uniPagesStage.run(state as any, {
      root: process.cwd(),
      isProduction: true
    });

    expect(state.output.pages.map(page => page.path)).toEqual([
      'src/pages/index/index',
      'src/pages/ai/ai'
    ]);
    expect(state.virtualPages.map(page => page.path)).toEqual([
      'src/pages/basic/basic',
      'src/pages/function/function',
      'src/pages/me/me'
    ]);
    expect(state.flags.strictMainPages).toBe(true);
  });

  it('removes the old registered tab routes from the generated pages.json', () => {
    const existing = JSON.stringify({
      pages: [
        { path: 'src/pages/index/index' },
        { path: 'src/pages/basic/basic' },
        { path: 'src/pages/me/me' },
        { path: 'src/pages/ai/ai' }
      ]
    });
    const output = {
      pages: [
        { path: 'src/pages/index/index' },
        { path: 'src/pages/ai/ai' }
      ]
    };

    const merged = mergePagesJson(existing, output as any, 'H5', false, [], process.cwd(), true);
    const paths = JSON5.parse(merged).pages.map((page: TestPage) => page.path);

    expect(paths).toContain('src/pages/index/index');
    expect(paths).toContain('src/pages/ai/ai');
    expect(paths).not.toContain('src/pages/basic/basic');
    expect(paths).not.toContain('src/pages/me/me');
  });

  it('restores tab routes after switching back to a multi-page tabbar mode', () => {
    process.env.VITE_TABBAR_MODE = '1';
    const state = createTabbarState([
      { path: 'src/pages/index/index', type: 'home' },
      { path: 'src/pages/basic/basic' },
      { path: 'src/pages/function/function' },
      { path: 'src/pages/me/me' }
    ]);

    uniPagesTabbarPlugin().uniPagesStage.run(state as any, {
      root: process.cwd(),
      isProduction: true
    });

    expect(state.flags.strictMainPages).toBe(false);
    expect(state.output.pages.map(page => page.path)).toEqual([
      'src/pages/index/index',
      'src/pages/basic/basic',
      'src/pages/function/function',
      'src/pages/me/me'
    ]);

    const existing = JSON.stringify({
      pages: [
        { path: 'src/pages/index/index' }
      ]
    });
    const merged = mergePagesJson(existing, state.output as any, 'H5', false, [], process.cwd(), false);
    const paths = JSON5.parse(merged).pages.map((page: TestPage) => page.path);

    expect(paths).toContain('src/pages/basic/basic');
    expect(paths).toContain('src/pages/function/function');
    expect(paths).toContain('src/pages/me/me');
  });
});
