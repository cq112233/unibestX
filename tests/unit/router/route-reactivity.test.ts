import { computed } from 'vue';
import { describe, expect, it } from 'vitest';
import {
  applyRouteFromUrl,
  previousRouteState,
  removeRouteMeta,
  routeState,
  setRouteMeta
} from '@/uni_modules/route-bestX/index.uts';

describe('routeState reactivity', () => {
  it('invalidates computed values when the same path receives a new query', () => {
    applyRouteFromUrl('/src/pages/basic/basic?a=2');
    const fullPath = computed((): string => routeState.fullPath);

    expect(fullPath.value).toBe('/src/pages/basic/basic?a=2');

    applyRouteFromUrl('/src/pages/basic/basic?a=3');

    expect(fullPath.value).toBe('/src/pages/basic/basic?a=3');
  });

  it('keeps params, meta and name in the previous route snapshot', () => {
    setRouteMeta('/src/pages/index/index', { name: 'home', title: '首页' } as any);
    applyRouteFromUrl('/src/pages/index/index?a=1');

    applyRouteFromUrl('/src/pages/basic/basic');

    expect(previousRouteState.path).toBe('/src/pages/index/index');
    expect(previousRouteState.fullPath).toBe('/src/pages/index/index?a=1');
    expect(previousRouteState.query.get('a')).toBe('1');
    expect(previousRouteState.params.get('a')).toBe('1');
    expect(previousRouteState.meta!.name).toBe('home');
    expect(previousRouteState.name).toBe('home');
    removeRouteMeta('/src/pages/index/index');
  });
});
