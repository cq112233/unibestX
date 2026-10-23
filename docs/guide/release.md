# 运行发布

H5 可以在命令行或 CI 中构建；App 和小程序仍需要 HBuilderX 的发行能力。

## 环境切换

```bash
pnpm env:test
pnpm env:prod
```

也可以直接使用带环境参数的构建命令：

```bash
pnpm build:test
pnpm build:prod
```

## H5

```bash
pnpm build:h5
pnpm build:test
pnpm build:prod
```

产物目录：`unpackage/dist/build/web`。

> 不要使用纯 `uni build` 代替项目脚本。项目通过 HBuilderX CLI 构建，才能正确包含 `src/sub` 分包页面。

## Docker 部署

```bash
pnpm docker:build:test
pnpm docker:up:test

pnpm docker:build:prod
pnpm docker:up:prod
```

- 测试服默认端口：`8081`
- 生产服默认端口：`8080`
- 动态反向代理与环境变量见 [H5 Docker 部署手册](/guide/docker-deploy)

## App / 小程序

在 HBuilderX 中选择“发行”：

| 平台 | 路径 |
| :--- | :--- |
| Android | 发行 → 原生 App → 云打包 / 本地打包 |
| iOS | 发行 → 原生 App → 云打包（需要 Apple 证书） |
| 鸿蒙 | 发行 → 原生 App → 鸿蒙 |
| 微信小程序 | 发行 → 小程序 → 微信，再用开发者工具上传 |
| 支付宝小程序 | 发行 → 小程序 → 支付宝，再用开发者工具上传 |

## 发布前检查

```bash
pnpm health
pnpm typecheck
pnpm lint:all
pnpm test
pnpm size:check
```

生产构建前还应确认 AppID、接口域名、请求合法域名、应用签名、隐私权限和版本号。

