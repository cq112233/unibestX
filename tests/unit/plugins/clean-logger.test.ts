import { describe, expect, it, vi } from 'vitest';
import cleanLoggerPlugin from '../../../plugins/vite-plugin-clean-logger';

describe('cleanLoggerPlugin Unit Tests', () => {
  it('should return a valid Vite plugin object with pre enforce and config hook', () => {
    const plugin = cleanLoggerPlugin({ silenceAll: true });
    expect(plugin.name).toBe('vite-plugin-clean-logger');
    expect(plugin.enforce).toBe('pre');
    expect(typeof plugin.config).toBe('function');
  });

  it('should configure customLogger and onwarn filter on config hook', () => {
    const plugin = cleanLoggerPlugin({
      silenceAll: false,
      ignoredPatterns: ['ignored-special-token']
    });

    const mockConfig: any = {
      logLevel: 'info',
      clearScreen: false,
      build: {}
    };

    // Execute plugin config hook
    (plugin.config as any)(mockConfig);

    expect(mockConfig.customLogger).toBeDefined();
    expect(mockConfig.build?.rollupOptions?.onwarn).toBeDefined();

    // Verify onwarn ignores matches
    const defaultHandler = vi.fn();
    mockConfig.build.rollupOptions.onwarn(
      { message: 'Some warning with ignored-special-token' },
      defaultHandler
    );
    expect(defaultHandler).not.toHaveBeenCalled();

    // Verify onwarn passes through normal warnings
    mockConfig.build.rollupOptions.onwarn(
      { message: 'A legitimate warning that should pass' },
      defaultHandler
    );
    expect(defaultHandler).toHaveBeenCalledTimes(1);
  });
});
