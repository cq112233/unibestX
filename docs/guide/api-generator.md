# 自动生成接口

项目支持从 Apifox / Swagger / OpenAPI 规范生成 UTS 强类型接口。

## 配置

在 `.env.local` 中配置，不要提交真实 Token：

```ini
APIFOX_PROJECT_ID=
APIFOX_TOKEN=
```

多个服务在 `openapi-ts-request.config.ts` 中配置，生成目录位于 `src/api/generated/`。

## 执行

```bash
pnpm api:gen
```

生成器会：

- 读取 OpenAPI / Apifox 契约。
- 从示例 JSON 逆向补全缺失字段。
- 把 `interface` 转为 UTS 可用的 `type`。
- 保留相对类型导入和 `.uts` 后缀。
- 同步生成本地 Mock 契约挡板。

## 生成后检查

```bash
pnpm typecheck
pnpm lint
```

生成代码不要手改。后端契约更新后重新执行 `pnpm api:gen`，业务页面通过 `src/api` 的统一入口调用。

