<p align="center">
  <a href="https://github.com/cq112233/unibestX">
    <img width="160" src="static/logo-rounded.png" alt="unibestX Logo">
  </a>
</p>

<h1 align="center">unibestX · base</h1>

<p align="center">
  <code>uni-app X</code> + <code>Vue 3</code> + <code>UTS</code> + <code>Vite 5</code> + <code>Tailwind CSS 4</code>
</p>

这是 unibestX 的轻量基础分支，只保留日常业务启动链路：**首页、我的、登录、HTTP、路由、TabBar、状态管理、接口生成与基础工程化**。当前基线不再包含 i18n、动态主题、隐私闸门、图表、加密、Markdown、流式 Demo 等扩展能力。

## 快速开始

环境要求：

- Node.js `>= 22.22.2`
- pnpm `>= 10`
- HBuilderX `>= 5.26`（App 端运行与真机基座仍由 HBuilderX 负责）

```bash
pnpm install
pnpm dev            # H5
pnpm dev:app-android
pnpm dev:app-ios
pnpm dev:app-harmony
pnpm dev:mp-weixin
pnpm dev:mp-alipay
```

App 首次运行前，请在 `manifest.config.ts` 中填写自己的 DCloud AppID，再同步到 HBuilderX。

## 当前基线

| 能力 | 入口 | 说明 |
| :--- | :--- | :--- |
| 页面 | `src/pages/index/index.uvue`、`src/pages/me/me.uvue` | 首页与我的，均使用 `navbar` 布局 |
| 登录 | `src/sub/auth/login.uvue` | 支持真实接口与本地 mock 降级 |
| HTTP | `src/http/index.uts` | 基于 `request-bestX`，含拦截器、错误归一、Query hooks |
| 接口生成 | `src/api/generated/` | OpenAPI 生成结果，base 分支完整保留 |
| 路由 | `src/router/index.uts` | 基于 `route-bestX`，含登录守卫、维护守卫与 TabBar 分流 |
| TabBar | `src/tabbar/config.uts` | 配置驱动，当前为模式 4，两项 Tab：首页 / 我的 |
| 状态 | `src/store/index.uts` | 官方 Pinia 与 x-pinia-s 双实现门面 |
| 打包 | `pnpm build:h5`、`pnpm build:test`、`pnpm build:prod` | H5 构建与环境切换 |

当前 `uni_modules` 只保留以下依赖：

- `request-bestX`：请求、拦截器、`useQuery` / `useMutation`
- `route-bestX`：路由、守卫、页面配置快照
- `x-pinia-s`：App VDOM 侧 Pinia 实现
- `z-paging-x`：分页组件
- `lime-dayuts`：日期工具
- `uni-icons`：图标

## 目录结构

```text
.
├── App.uvue                         # 应用入口：登录态恢复、用户信息 mock、错误监听
├── main.uts                         # Vue / Pinia / Router 注册
├── pages.config.json                # 页面配置源文件
├── pages.json                       # 插件生成物，禁止手改
├── openapi-ts-request.config.ts     # 接口代码生成配置
├── plugins/                         # uni-pages / TabBar / Layout 等 Vite 插件
├── src/
│   ├── api/
│   │   ├── auth/auth.uts            # 登录、用户信息、token mock
│   │   ├── example.uts              # HTTP 写法参考
│   │   └── generated/               # OpenAPI 强类型接口（保留）
│   ├── components/                  # NavBar、NestedScroll、TabbarMaskModal
│   ├── config/env/                  # 环境变量与平台常量
│   ├── hooks/                       # 应用级 hooks
│   ├── http/                        # 网络层门面、实例、错误
│   ├── layouts/                     # default / empty / navbar 布局
│   ├── pages/                       # 主包页面（index / me）
│   ├── router/                      # 路由门面、配置、守卫
│   ├── store/                       # vapor / vdom 双 Store 实现
│   ├── sub/auth/                    # 分包登录页
│   ├── tabbar/                      # TabBar core / ui / adapters / hooks
│   └── utils/                       # auth、report、systemInfo、toast
├── static/                          # 图片与 TabBar 图标
├── tests/                           # Vitest 单测
└── uni_modules/                     # 精简后的 6 个模块
```

## 环境变量

环境配置采用「公用 + 按环境拆分」：

- `.env`：所有环境共用
- `.env.development`：开发环境
- `.env.test`：测试环境
- `.env.production`：生产环境
- `.env.local`：本地私有覆盖，不提交

常用变量：

| 变量 | 说明 |
| :--- | :--- |
| `VITE_APP_TITLE` | 应用名称 |
| `VITE_APP_VERSION` | 业务版本号 |
| `VITE_SERVER_BASEURL` | 主接口域名 |
| `VITE_SERVER_BASEURL_SECONDARY` | 备用接口域名 |
| `VITE_UPLOAD_BASEURL` / `VITE_UPLOAD_PATH` | OSS 上传配置 |
| `VITE_H5_USE_PROXY` | H5 是否走 `/api` 反向代理 |
| `VITE_USE_MOCK` | 是否启用 Vite Mock |
| `VITE_TABBAR_MODE` | TabBar 策略，当前为 `4` |
| `VITE_DEV_SANDBOX` / `VITE_DEV_SANDBOX_PAGES` | 单页沙盒调试 |

业务代码不要裸读 `import.meta.env`，统一从 `@/src/config/index.uts` 或 `@/src/config/env/platform.uts` 导入。

## HTTP 与 Query hooks

业务请求链路固定为：**页面 → `src/api/<module>/` → `src/http` → `request-bestX`**。

```uts
import { useQuery } from '@/uni_modules/request-bestX/index.uts';
import { fetchUserInfoApi } from '@/src/api/auth/auth.uts';

const userQuery = useQuery({
  queryKey: ['user-info'],
  queryFn: (): Promise<AuthUserInfo | null> => fetchUserInfoApi()
});
```

`useQuery` / `useMutation` / `useQueryClient` 对标 TanStack Query，支持缓存、失效、重试、状态派发与乐观更新。完整用法见 [src/http/README.md](src/http/README.md)。

接口生成：

```bash
pnpm api:gen
```

生成配置在 `openapi-ts-request.config.ts`，产物写入 `src/api/generated/`。当前已保留以下生成接口：

- `foodSampleReport.uts`
- `hygienePatrolReport.uts`
- `ingredientTestReport.uts`
- `morningCheckReport.uts`
- `roomDisinfectionReport.uts`
- `tablewareDisinfectionReport.uts`
- `types.uts` 与统一出口 `index.uts`

## 路由

路由由 `@/uni_modules/route-bestX` 提供底层能力，项目层在 `src/router` 完成组装：

```uts
import { useRoute, useRouter } from '@/src/router/index.uts';

const route = useRoute();
const router = useRouter();

router.push({
  path: '/src/sub/auth/login',
  query: { redirect: route.fullPath }
});
```

- `pages.config.json` 与页面内 `definePage` 是配置源，`pages.json` 自动生成。
- `src/router/index.uts` 通过 `virtual:uni-pages-route-table` 读取页面路由表，不生成中间文件。
- 登录拦截、维护模式与 Tab 切换前置钩子均集中在 `src/router/guards` 与 `src/tabbar/adapters/tab-navigation.uts`。

完整说明见 [src/router/README.md](src/router/README.md)。

## TabBar

唯一配置真源是 [src/tabbar/config.uts](src/tabbar/config.uts)。当前配置：

- 模式：`VITE_TABBAR_MODE=4`（单页保活）
- 视觉形态：`type: 'capsule'`
- 列表：`index`（首页）、`me`（我的）
- `glassEffect: true`：iOS 侧启用液态玻璃

模式 4 只有宿主首页是真实路由，`me` 会作为组件挂载，因此 `pages.json` 中只出现 `src/pages/index/index` 是预期行为，不要手动把 `me` 加回路由表。

页面统一通过 hooks 接入：

```uts
import { useTabPage, useTabPageShell } from '@/src/tabbar/index.uts';

useTabPageShell('me');
const { route, onLoad, onShow, onHide } = useTabPage();
```

完整 API 与模式差异见 [src/tabbar/README.md](src/tabbar/README.md)。

## 状态管理

统一从门面导入，禁止业务直接引用 `vapor/` 或 `vdom/`：

```uts
import { useTokenStore, useUserStore } from '@/src/store/index.uts';
```

- App Vapor、H5、Web、小程序使用官方 Pinia。
- App VDOM 使用 `x-pinia-s`。
- token / user 持久化在两个分支中保持同一套调用方式。

详见 [src/store/README.md](src/store/README.md)。

## 验证命令

```bash
pnpm typecheck      # TypeScript / UTS 类型检查
pnpm test           # Vitest 全量单测
pnpm lint           # ESLint
pnpm lint:style     # Stylelint
pnpm build:h5       # H5 生产构建
```

涉及 Android 原生编译、iOS 真机或小程序工具的行为，必须再通过 HBuilderX 实际编译/运行确认，不能只以 H5 构建结果代替。

## UTS 约定

1. 逻辑文件用 `.uts`，页面与组件用 `.uvue`。
2. 禁止 `interface`，对象结构统一使用 `type`。
3. 禁止 `undefined`，空值统一使用 `null`。
4. 基础类型比较使用 `==` / `!=`，不使用 `===` / `!==`。
5. 原生端禁用 `window`、`document`、`localStorage` 等浏览器 API。
6. 端专属全局符号必须用条件编译物理隔离，不能只用普通 `if`。
7. 新代码不得新增 ESLint / Stylelint warning。
8. `pages.json` 是生成物，只改 `pages.config.json` 或页面 `definePage`。

更完整的 uni-app X / UTS 正反例见 [.agents/skills/unibestX-skill/SKILL.md](.agents/skills/unibestX-skill/SKILL.md)。

## License

[MIT](https://opensource.org/license/mit/)
