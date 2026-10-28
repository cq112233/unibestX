import { computed } from 'vue';
import { describe, expect, it } from 'vitest';
import { applyRouteFromUrl, routeState } from '@/uni_modules/route-bestX/index.uts';

describe('routeState reactivity', () => {
  it('invalidates computed values when the same path receives a new query', () => {
    applyRouteFromUrl('/src/pages/basic/basic?a=2');
    const fullPath = computed((): string => routeState.fullPath);

    expect(fullPath.value).toBe('/src/pages/basic/basic?a=2');

    applyRouteFromUrl('/src/pages/basic/basic?a=3');

    expect(fullPath.value).toBe('/src/pages/basic/basic?a=3');
  });
});
