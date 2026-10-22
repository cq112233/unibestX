import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  buildPageRoutesTable,
  inlinePageRoutesImport,
  renderPageRoutesSource
} from '@/plugins/vite-plugin-uni-pages-route-table';

const routeTable = buildPageRoutesTable({
  pages: [
    {
      path: 'src/pages/index/index',
      name: 'home',
      style: { navigationBarTitleText: '首页' }
    }
  ],
  subPackages: [
    {
      root: 'src/sub',
      pages: [{ path: 'detail/detail' }]
    }
  ]
});

describe('uni-pages route table virtual module', () => {
  it('renders four exports for the Vite virtual module', () => {
    const source = renderPageRoutesSource(routeTable);

    expect(source).toContain('export const PAGES_ROUTE_TABLE_JSON =');
    expect(source).toContain('export const PAGES_ROUTE_TABLE =');
    expect(source).toContain('export const PAGES_ROUTE_TABLE_LIST_JSON =');
    expect(source).toContain('export const PAGES_ROUTE_TABLE_LIST =');
  });

  it('inlines the App UTS import before virtual module resolution', () => {
    const code = [
      'import { PAGES_ROUTE_TABLE_JSON } from \'virtual:uni-pages-route-table\';',
      'setPageMetaJson(PAGES_ROUTE_TABLE_JSON);'
    ].join('\n');
    const output = inlinePageRoutesImport(code, routeTable);

    expect(output).not.toContain('virtual:uni-pages-route-table');
    expect(output).toContain('const PAGES_ROUTE_TABLE_JSON =');
    expect(output).toContain('setPageMetaJson(PAGES_ROUTE_TABLE_JSON);');
  });

  it('supports named import aliases', () => {
    const code = 'import { PAGES_ROUTE_TABLE_JSON as tableJson } from "virtual:uni-pages-route-table";';
    const output = inlinePageRoutesImport(code, routeTable);

    expect(output).toContain('const tableJson =');
    expect(output).not.toContain('virtual:uni-pages-route-table');
  });

  it('inlines the real router entry import', () => {
    const code = fs.readFileSync(path.resolve(process.cwd(), 'src/router/index.uts'), 'utf-8');
    const output = inlinePageRoutesImport(code, routeTable);

    expect(output).not.toContain('virtual:uni-pages-route-table');
  });
});
