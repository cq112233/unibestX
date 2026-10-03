import { describe, expect, it } from 'vitest';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { runOptimizer } from '../../../scripts/optimize-images.mjs';

describe('image-optimizer unit tests', () => {
  it('should return a valid Vite plugin object for ViteImageOptimizer', () => {
    const plugin = ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 }
    });

    expect(plugin.name).toBe('vite-plugin-image-optimizer');
    expect(plugin.apply).toBe('build');
    expect(plugin.enforce).toBe('post');
  });

  it('should scan static directory and calculate compression savings in check mode', async () => {
    const stats = await runOptimizer({ check: true });

    expect(stats).toBeDefined();
    expect(stats.totalOriginal).toBeGreaterThan(0);
    expect(stats.totalCompressed).toBeGreaterThan(0);
    expect(stats.totalSaved).toBeGreaterThan(0);
    expect(stats.optimizedCount).toBeGreaterThan(0);
  });
});
