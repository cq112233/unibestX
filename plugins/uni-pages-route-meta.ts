import fs from 'node:fs';
import path from 'node:path';

/**
 * 路由元信息表生成器：pages.json 页面配置 → src/router/generated/page-meta.uts
 *
 * ## 为什么需要这一步
 *
 * `useRoute().meta / .name` 的数据源是「pages.json 里该页面的配置项」：页面 `definePage()`
 * 里声明的字段（layout / showBack / hideNavbar / enablePullDownRefresh / style，以及
 * name、requireAuth 这类自定义字段）都会被 vite-plugin-uni-pages 原样写进 pages.json。
 *
 * 但运行时没有任何 API 能整条读出页面配置 —— 官方的 `$getPageStyle()` 只返回 style 节点；
 * pages.json 本身也不随产物分发（小程序侧被编译成 app.json，且自定义字段全被丢掉，
 * 实测只有 navigationBarTitleText / navigationStyle 这类平台字段能活到运行期）。
 * 所以只能构建期整表落成一个 .uts 字符串常量，由 src/router/hooks/route-state.uts
 * 首用时 `JSON.parseObject` 解析并缓存。
 *
 * ## 为什么不做成「独立监听 pages.json 的插件」
 *
 * pages.json 是本插件的**产物**而非输入（输入是各 .uvue 里的 definePage 与 pages.config.json），
 * 监听它必然与写回形成自环。故本模块只提供纯函数，由调用方在「同一次生成 pass、
 * 写 pages.json 之前」调用，并直接复用即将被序列化的那个 output 对象 ——
 * 于是「pages.json 里是什么，表里就是什么」是结构上成立的，不依赖任何时序假设。
 *
 * 沙盒调试模式下传进来的 output 已被裁剪，表会自动跟着变少（与可路由页面保持一致）。
 */

/** 生成的路由元信息表路径（相对项目根） */
export const ROUTE_META_FILE = 'src/router/generated/page-meta.uts';

/** 页面路径 → 运行时口径（补前导 `/`、折叠重复斜杠），如 `src/sub/a/a` → `/src/sub/a/a` */
function toRuntimeRoutePath(pagePath: string): string {
  return `/${pagePath}`.replace(/\/+/g, '/');
}

/**
 * 生成路由元信息表
 *
 * @param output 即将写入 pages.json 的完整配置对象（含 pages / subPackages）
 * @param projectRoot 项目根目录（生成目标相对它定位）
 */
export function writeRouteMetaFile(output: Record<string, any>, projectRoot: string): void {
  const table: Record<string, any> = {};

  const collect = (page: any, prefix: string): void => {
    if (page == null || typeof page.path !== 'string' || page.path === '') {
      return;
    }
    const routePath = toRuntimeRoutePath(prefix === '' ? page.path : `${prefix}/${page.path}`);
    // 深拷贝一份并把 path 规范成运行时口径，避免与 pages.json 的相对 path 混淆
    table[routePath] = { ...page, path: routePath };
  };

  const mainPages = output.pages;
  if (Array.isArray(mainPages)) {
    mainPages.forEach((p: any) => collect(p, ''));
  }
  const subPackages = output.subPackages;
  if (Array.isArray(subPackages)) {
    subPackages.forEach((pkg: any) => {
      if (pkg == null || !Array.isArray(pkg.pages)) {
        return;
      }
      const root = typeof pkg.root === 'string' ? pkg.root : '';
      pkg.pages.forEach((p: any) => collect(p, root));
    });
  }

  // 用单引号包裹（项目 eslint 的 style/quotes 规则），故只需转义 `\` 与 `'`，
  // 表里的双引号原样保留即可
  const jsonText = JSON.stringify(table);
  const stringLiteral = `'${jsonText.replace(/\\/g, '\\\\').replace(/'/g, '\\\'')}'`;

  const content = [
    '/**',
    ' * ⚠️ 本文件由 plugins/uni-pages-route-meta.ts 自动生成，请勿手动修改。',
    ' *',
    ' * 内容：pages.json 里每个页面的**完整配置项**（页面 definePage 声明什么，这里就是什么），',
    ' *      供 `useRoute().meta / .name` 读取，见 src/router/hooks/route-state.uts。',
    ' * 生成时机：每次生成 / 更新 pages.json 时同步重写。',
    ' */',
    `export const PAGE_META_JSON: string = ${stringLiteral};`,
    ''
  ].join('\n');

  const targetPath = path.resolve(projectRoot, ROUTE_META_FILE);
  const targetDir = path.dirname(targetPath);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const oldContent = fs.existsSync(targetPath) ? fs.readFileSync(targetPath, 'utf-8') : '';
  // 内容一致就不写：避免无谓的文件变更触发开发服务器额外热重载
  if (content !== oldContent) {
    fs.writeFileSync(targetPath, content, 'utf-8');
    console.log(`[uni-pages] Generated ${ROUTE_META_FILE} (${Object.keys(table).length} routes)`);
  }
}
