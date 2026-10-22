import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { setPagesMetaSnapshot } from '@/plugins/pages-meta-cache';
import { generateTabViews } from '@/plugins/vite-plugin-tabbar-views';

type FixtureProject = {
  root: string;
  targetFile: string;
};

const tempRoots: string[] = [];

function createFixtureProject(): FixtureProject {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'unibestx-tabviews-'));
  tempRoots.push(root);
  fs.mkdirSync(path.join(root, 'src/tabbar'), { recursive: true });
  fs.mkdirSync(path.join(root, 'src/pages/index'), { recursive: true });
  fs.mkdirSync(path.join(root, 'src/pages/basic'), { recursive: true });
  fs.mkdirSync(path.join(root, 'src/pages/function'), { recursive: true });

  fs.writeFileSync(path.join(root, 'pages.json'), JSON.stringify({ pages: [] }), 'utf-8');
  fs.writeFileSync(path.join(root, 'src/tabbar/config.uts'), `
export const customTabbarConfig = {
  list: [
    { pagePath: 'src/pages/index/index' },
    { pagePath: 'src/pages/basic/basic' },
    { pagePath: 'src/pages/function/function' }
  ]
}
`, 'utf-8');
  fs.writeFileSync(path.join(root, 'src/pages/index/index.uvue'), '<template><view /></template>', 'utf-8');
  fs.writeFileSync(path.join(root, 'src/pages/basic/basic.uvue'), '<template><view /></template>', 'utf-8');
  fs.writeFileSync(path.join(root, 'src/pages/function/function.uvue'), `
<script setup lang="uts">
definePage((options) => {
  const { platform } = options
  return {
    style: {
      navigationBarTitleText: platform.isH5 ? '😂' : 'tabbar.function'
    }
  }
})

const demoList = [{ title: 'z-paging-x 原生分页' }]
</script>
`, 'utf-8');

  return {
    root,
    targetFile: 'dist/TabViews.uvue'
  };
}

function readGeneratedViews(project: FixtureProject): string {
  generateTabViews(project.root, {
    hostPage: 'src/pages/index/index',
    targetFile: project.targetFile
  });
  return fs.readFileSync(path.resolve(project.root, project.targetFile), 'utf-8');
}

function clearMetaMemory(): void {
  delete (globalThis as any).__UNIBESTX_PAGES_META_STATE__;
}

afterEach(() => {
  clearMetaMemory();
  tempRoots.splice(0).forEach((root) => {
    fs.rmSync(root, { recursive: true, force: true });
  });
});

describe('generateTabViews', () => {
  it('restores platform title variants from the full page metadata snapshot', () => {
    const project = createFixtureProject();
    setPagesMetaSnapshot({
      platform: 'H5',
      pages: [
        { path: 'src/pages/index/index', showBack: false },
        { path: 'src/pages/basic/basic', showBack: false },
        {
          path: 'src/pages/function/function',
          showBack: false,
          style: { navigationBarTitleText: '😂' },
          _variants: [
            { platform: 'H5', page: { showBack: false, style: { navigationBarTitleText: '😂' } } },
            { platform: 'APP-ANDROID', page: { showBack: false, style: { navigationBarTitleText: 'tabbar.function' } } }
          ]
        }
      ],
      subPackages: []
    }, project.root);
    // 模拟另一个端的独立 dev 进程：内存为空，只能读取落盘的完整元数据。
    clearMetaMemory();

    const output = readGeneratedViews(project);
    expect(output).toContain('<!-- #ifdef H5 -->');
    expect(output).toContain('title="😂"');
    expect(output).toContain('title="tabbar.function"');
    expect(output).not.toContain('title="z-paging-x 原生分页"');
  });

  it('does not treat a business title as the navbar title when definePage is conditional', () => {
    const project = createFixtureProject();
    setPagesMetaSnapshot({
      platform: 'H5',
      pages: [
        { path: 'src/pages/index/index', showBack: false },
        { path: 'src/pages/basic/basic', showBack: false },
        { path: 'src/pages/function/function', showBack: false }
      ],
      subPackages: []
    }, project.root);

    const output = readGeneratedViews(project);
    expect(output).not.toContain('title="z-paging-x 原生分页"');
  });
});
