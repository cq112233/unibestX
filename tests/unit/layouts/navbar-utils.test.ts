import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  setNavbarRuntimeActive,
  stopNavbarPullDownRefresh
} from '@/src/layouts/navbar/utils/index.uts';

describe('stopNavbarPullDownRefresh', () => {
  const uniMock = (globalThis as any).uni;

  beforeEach(() => {
    uniMock.$emit = vi.fn();
    uniMock.stopPullDownRefresh = vi.fn();
    setNavbarRuntimeActive(true);
  });

  it('skips the page-level API after the app is no longer active', () => {
    setNavbarRuntimeActive(false);

    stopNavbarPullDownRefresh();

    expect(uniMock.$emit).toHaveBeenCalledTimes(1);
    expect(uniMock.stopPullDownRefresh).not.toHaveBeenCalled();
  });

  it('stops the native refresher while the app is active', () => {
    stopNavbarPullDownRefresh();

    expect(uniMock.$emit).toHaveBeenCalledTimes(1);
    expect(uniMock.stopPullDownRefresh).toHaveBeenCalledTimes(1);
  });
});
