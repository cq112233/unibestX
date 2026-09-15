import type { Next, RouteTarget } from './types.ts';
import {
  normalizeLocation,
  normalizePath,
  parseQuery,
  parseUrl,
  resolveRelativePath,
  serializeQuery
} from './url.ts';

/** 累计失败的用例名 */
export const failures: Array<string> = [];

function check(name: string, actual: any, expected: any): void {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a === e) {
    console.log(`  ✓ ${name}`);
    return;
  }
  console.log(`  ✗ ${name}\n      期望 ${e}\n      实际 ${a}`);
  failures.push(name);
}

export function runUrlCases(): void {
  console.log('\n[url] normalizePath');
  check('补前导斜杠', normalizePath('src/pages/x/x'), '/src/pages/x/x');
  check('已是绝对路径不动', normalizePath('/src/pages/x/x'), '/src/pages/x/x');
  check('空串原样返回', normalizePath(''), '');

  console.log('\n[url] resolveRelativePath');
  check('相对路径按当前页目录解析', resolveRelativePath('sub', '/src/pages/index/index'), '/src/pages/index/sub');
  check('绝对路径不解析', resolveRelativePath('/a/b', '/src/pages/index/index'), '/a/b');
  check('协议链接不解析', resolveRelativePath('https://a.com/x', '/src/pages/index/index'), 'https://a.com/x');
  check('页栈为空时不拼接', resolveRelativePath('sub', ''), 'sub');

  console.log('\n[url] parseQuery');
  check('解码百分号转义', parseQuery('name=%E5%BC%A0%E4%B8%89').get('name'), '张三');
  check('无值键给空串', parseQuery('flag').get('flag'), '');
  check('值里含等号不丢内容', parseQuery('a=b=c').get('a'), 'b=c');
  check('空串得到空 Map', parseQuery('').size, 0);

  console.log('\n[url] parseUrl');
  const t = parseUrl('/a/b?id=1&x=2', '', 'navigateTo');
  check('path 去掉 query', t.path, '/a/b');
  check('query 逐项', t.query.get('id'), '1');
  check('fullPath 保留 query 原文', t.fullPath, '/a/b?id=1&x=2');
  check('url 原样保留', t.url, '/a/b?id=1&x=2');
  check('api 透传', t.api, 'navigateTo');
  check('params 恒为空', t.params.size, 0);
  check('相对 url 按当前页解析', parseUrl('sub?id=1', '/src/pages/index/index', 'navigateTo').path, '/src/pages/index/sub');
  check('src/ 前缀补斜杠', parseUrl('src/pages/x/x', '', 'navigateTo').path, '/src/pages/x/x');
  check('无 query 时 fullPath 不带问号', parseUrl('/a/b', '', 'navigateTo').fullPath, '/a/b');

  console.log('\n[url] normalizeLocation(any)');
  check('字符串形态', normalizeLocation('/a/b?x=1'), '/a/b?x=1');
  check('对象形态', normalizeLocation({ path: '/a/b', query: { id: 1 } }), '/a/b?id=1');
  check('对象形态无 query', normalizeLocation({ path: '/a/b' }), '/a/b');
  check('对象形态数字值', normalizeLocation({ path: '/a/b', query: { n: 42 } }), '/a/b?n=42');
  check('对象形态布尔值', normalizeLocation({ path: '/a/b', query: { ok: true } }), '/a/b?ok=true');
  check('对象形态中文值做编码', normalizeLocation({ path: '/a/b', query: { k: '中' } }), '/a/b?k=%E4%B8%AD');
  check('对象形态数组用逗号连接', normalizeLocation({ path: '/a/b', query: { ids: [1, 2] } }), '/a/b?ids=1%2C2');
  check('对象形态 null 值忽略', normalizeLocation({ path: '/a/b', query: { x: null } }), '/a/b');
  check('空路径返回空串', normalizeLocation({ path: '' }), '');
  check('null 入参返回空串', normalizeLocation(null), '');

  console.log('\n[url] serializeQuery');
  check('null 得到空串', serializeQuery(null), '');
  check('空对象得到空串', serializeQuery({}), '');
}
