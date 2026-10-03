import { describe, expect, it } from 'vitest';
import vitePluginAppinfo from 'vite-plugin-build-info';

describe('vite-plugin-build-info unit tests', () => {
  it('should return a valid Vite plugin named vite-plugin-build-info', () => {
    const plugin = vitePluginAppinfo({
      enableLog: true,
      enableMeta: true,
      enableGlobal: true
    });

    expect(plugin.name).toBe('vite-plugin-build-info');
    expect(typeof plugin.transformIndexHtml).toBe('function');
  });

  it('should inject meta and script tags into HTML', async () => {
    const plugin = vitePluginAppinfo({
      enableLog: true,
      enableMeta: true,
      enableGlobal: true
    });

    const tags = await (plugin.transformIndexHtml as any)();
    expect(Array.isArray(tags)).toBe(true);
    expect(tags.length).toBe(3);

    const metaTag = tags.find((t: any) => t.tag === 'meta');
    expect(metaTag).toBeDefined();
    expect(metaTag.attrs.name).toBe('app-info');
    expect(metaTag.attrs.content).toContain('version');

    const logScript = tags.find((t: any) => t.tag === 'script' && t.children?.includes('console.log'));
    expect(logScript).toBeDefined();

    const globalScript = tags.find((t: any) => t.tag === 'script' && t.children?.includes('__APP_INFO__'));
    expect(globalScript).toBeDefined();
  });
});
