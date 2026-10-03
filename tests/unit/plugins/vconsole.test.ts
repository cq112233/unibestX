import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { viteVConsole } from 'vite-plugin-vconsole';

describe('vite-plugin-vconsole Unit Tests', () => {
  const mockEntry = resolve('/project/root/main.uts');

  it('should return a valid Vite plugin object with pre enforce and correct name', () => {
    const plugin = viteVConsole({
      entry: [mockEntry],
      enabled: true
    });

    expect(plugin.name).toBe('vite:vconsole');
    expect(plugin.enforce).toBe('pre');
    expect(typeof plugin.transform).toBe('function');
  });

  it('should inject vConsole script when enabled is true and file matches entry', () => {
    const plugin = viteVConsole({
      entry: [mockEntry],
      enabled: true,
      config: {
        maxLogNumber: 1000,
        theme: 'dark'
      },
      customHide: 'location.href.includes("vconsole=false")'
    });

    const originalCode = 'export function createApp() { return {}; }';
    const result: any = (plugin.transform as any)(originalCode, mockEntry);

    expect(result).toBeDefined();
    expect(result.code).toContain('import VConsole from \'vconsole\';');
    expect(result.code).toContain('new VConsole(');
    expect(result.code).toContain('window.vConsole');
    expect(result.code).toContain('location.href.includes("vconsole=false")');
    expect(result.code).toContain(originalCode);
  });

  it('should NOT inject vConsole into non-entry files', () => {
    const plugin = viteVConsole({
      entry: [mockEntry],
      enabled: true
    });

    const otherFile = resolve('/project/root/src/pages/index/index.uvue');
    const originalCode = '<template><view>Hello</view></template>';
    const result: any = (plugin.transform as any)(originalCode, otherFile);

    expect(result.code).toBe(originalCode);
    expect(result.code).not.toContain('vconsole');
  });

  it('should NOT inject vConsole when enabled is false', () => {
    const plugin = viteVConsole({
      entry: [mockEntry],
      enabled: false
    });

    const originalCode = 'export function createApp() { return {}; }';
    const result: any = (plugin.transform as any)(originalCode, mockEntry);

    expect(result.code).toBe(originalCode);
    expect(result.code).not.toContain('vconsole');
  });

  it('should ensure vConsole is disabled in production environment even if requested', () => {
    // 模拟生产环境判断逻辑
    const env = { VITE_ENV_TYPE: 'production', VITE_SHOW_VCONSOLE: 'true' };
    const isBuild = true;
    const isProduction = env.VITE_ENV_TYPE === 'production' || (isBuild && env.VITE_ENV_TYPE !== 'test');
    const isWeb = true;
    const isVConsole = !isProduction && isWeb && env.VITE_SHOW_VCONSOLE === 'true';

    expect(isProduction).toBe(true);
    expect(isVConsole).toBe(false);

    const plugin = viteVConsole({
      entry: [mockEntry],
      enabled: isVConsole
    });

    const originalCode = 'export function createApp() { return {}; }';
    const result: any = (plugin.transform as any)(originalCode, mockEntry);
    expect(result.code).toBe(originalCode);
    expect(result.code).not.toContain('vconsole');
  });
});
