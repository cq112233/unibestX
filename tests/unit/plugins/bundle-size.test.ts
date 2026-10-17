import { Buffer } from 'node:buffer';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { checkBundleSize, collectFiles, DEFAULT_BUDGETS, resolveSubPackages } from '../../../scripts/check-bundle-size.mjs';

describe('bundle-size-budget checker unit tests', () => {
  it('should export correct default budget constants matching WeChat limits', () => {
    expect(DEFAULT_BUDGETS.maxMainKB).toBe(2048);
    expect(DEFAULT_BUDGETS.maxSubKB).toBe(2048);
    expect(DEFAULT_BUDGETS.maxTotalKB).toBe(20480);
    expect(DEFAULT_BUDGETS.warnRatio).toBe(0.8);
  });

  it('should collect files and calculate sizes recursively', () => {
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'unibestx-bundle-test-'));
    try {
      fs.writeFileSync(path.join(tmpDir, 'a.txt'), 'hello');
      const sub = path.join(tmpDir, 'sub');
      fs.mkdirSync(sub);
      fs.writeFileSync(path.join(sub, 'b.txt'), 'world!');

      const files = collectFiles(tmpDir);
      expect(files.length).toBe(2);
      expect(files.some((f: { relPath: string }) => f.relPath === 'a.txt')).toBe(true);
      expect(files.some((f: { relPath: string }) => f.relPath === 'sub/b.txt')).toBe(true);
    }
    finally {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    }
  });

  it('should resolve subpackages from app.json correctly', () => {
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'unibestx-app-json-test-'));
    try {
      const appJson = {
        pages: ['pages/index/index'],
        subPackages: [
          { root: 'src/sub', pages: ['demo/index'] },
          { root: 'pkgB', name: 'package-b', pages: ['index'] }
        ]
      };
      fs.writeFileSync(path.join(tmpDir, 'app.json'), JSON.stringify(appJson));

      const { subPackages, source } = resolveSubPackages(tmpDir);
      expect(source).toBe('app.json');
      expect(subPackages.length).toBe(2);
      expect(subPackages[0].root).toBe('src/sub');
      expect(subPackages[1].root).toBe('pkgB');
    }
    finally {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    }
  });

  it('should accurately split main and subpackages, detect limits and top files', () => {
    const tmpDist = fs.mkdtempSync(path.join(os.tmpdir(), 'unibestx-dist-test-'));
    try {
      // 1. 创建 app.json
      const appJson = {
        pages: ['pages/index/index'],
        subPackages: [
          { root: 'src/sub', name: 'SubModule', pages: ['pageA/index'] }
        ]
      };
      fs.writeFileSync(path.join(tmpDist, 'app.json'), JSON.stringify(appJson));

      // 2. 主包文件：app.js (100KB) + vendor.js (200KB)
      fs.writeFileSync(path.join(tmpDist, 'app.js'), Buffer.alloc(100 * 1024));
      fs.writeFileSync(path.join(tmpDist, 'vendor.js'), Buffer.alloc(200 * 1024));

      // 3. 分包文件：src/sub/pageA.js (150KB)
      const subDir = path.join(tmpDist, 'src', 'sub');
      fs.mkdirSync(subDir, { recursive: true });
      fs.writeFileSync(path.join(subDir, 'pageA.js'), Buffer.alloc(150 * 1024));

      // 执行体积分析
      const res = checkBundleSize({ dir: tmpDist });

      expect(res.hasDist).toBe(true);
      expect(res.passed).toBe(true);
      expect(res.main).toBeDefined();
      expect(res.subPackages).toBeDefined();

      if (res.main && res.subPackages) {
        expect(res.main.fileCount).toBe(3); // app.json + app.js + vendor.js
        expect(res.main.sizeKB).toBeGreaterThanOrEqual(300);
        expect(res.main.sizeKB).toBeLessThan(350);
        expect(res.main.passed).toBe(true);

        expect(res.subPackages.length).toBe(1);
        expect(res.subPackages[0].root).toBe('src/sub');
        expect(res.subPackages[0].sizeKB).toBeGreaterThanOrEqual(150);
        expect(res.subPackages[0].passed).toBe(true);

        // Top files 验证：排在第一的应该是 vendor.js (200KB)
        expect(res.main.topFiles.length).toBeGreaterThan(0);
        expect(res.main.topFiles[0].relPath).toBe('vendor.js');
      }
    }
    finally {
      fs.rmSync(tmpDist, { recursive: true, force: true });
    }
  });

  it('should fail gate when main package exceeds 2048 KB limit', () => {
    const tmpDist = fs.mkdtempSync(path.join(os.tmpdir(), 'unibestx-dist-over-'));
    try {
      fs.writeFileSync(path.join(tmpDist, 'app.json'), JSON.stringify({ pages: ['index'] }));
      // 生成 2.2MB 的大文件放入主包
      fs.writeFileSync(path.join(tmpDist, 'heavy-vendor.js'), Buffer.alloc(2200 * 1024));

      const res = checkBundleSize({ dir: tmpDist });

      expect(res.hasDist).toBe(true);
      expect(res.passed).toBe(false);
      expect(res.main).toBeDefined();
      if (res.main) {
        expect(res.main.passed).toBe(false);
        expect(res.main.sizeKB).toBeGreaterThan(2048);
      }
    }
    finally {
      fs.rmSync(tmpDist, { recursive: true, force: true });
    }
  });
});
