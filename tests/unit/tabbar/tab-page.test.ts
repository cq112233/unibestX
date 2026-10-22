import { beforeEach, describe, expect, it } from 'vitest';
import { curIdx, setCurIdx } from '@/src/tabbar/core/state.uts';
import {
  activateTabPageFromHostQuery,
  readTabPageQuery,
  resetTabPageQueries,
  setTabPageUrl,
  syncTabPageHostUrl
} from '@/src/tabbar/core/tab-page.uts';

describe('tabbar virtual page route', () => {
  beforeEach(() => {
    resetTabPageQueries();
    setCurIdx(0);
  });

  it('stores decoded query from a normal router url', () => {
    setTabPageUrl('/src/pages/basic/basic?id=1&name=%E4%B8%AD%E6%96%87');

    const query = readTabPageQuery('/src/pages/basic/basic');
    expect(query.get('id')).toBe('1');
    expect(query.get('name')).toBe('中文');
  });

  it('keeps the previous query when a tab is clicked without a query', () => {
    setTabPageUrl('/src/pages/basic/basic?id=1');
    setTabPageUrl('/src/pages/basic/basic');

    expect(readTabPageQuery('/src/pages/basic/basic').get('id')).toBe('1');
  });

  it('activates a tab from host page deep link query', () => {
    const activated = activateTabPageFromHostQuery(
      new Map<string, string>([
        ['tab', 'basic'],
        ['id', '42']
      ])
    );

    expect(activated).toBe(true);
    expect(curIdx.value).toBe(1);
    expect(readTabPageQuery('/src/pages/basic/basic').get('id')).toBe('42');
  });

  it('returns a copy so callers cannot mutate the route store', () => {
    setTabPageUrl('/src/pages/basic/basic?id=1');
    const query = readTabPageQuery('/src/pages/basic/basic');
    query.set('id', 'changed');

    expect(readTabPageQuery('/src/pages/basic/basic').get('id')).toBe('1');
  });

  it('syncs the H5 host url after switching a virtual tab', () => {
    window.location.hash = '#/?tab=function&a=1';
    setTabPageUrl('/src/pages/basic/basic?id=3333');

    syncTabPageHostUrl('/src/pages/basic/basic');

    expect(window.location.hash).toBe('#/?tab=basic&id=3333');
  });
});
