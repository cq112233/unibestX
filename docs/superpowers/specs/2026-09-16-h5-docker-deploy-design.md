# H5 端 Docker 部署（测试服 + 生产）设计文档

- 日期：2026-09-16
- 状态：待实现
- 相关技能：无（本次为部署基建，不产出 `.uvue` / `.uts` / `.scss`，不触碰 `unibestX-skill` 的分册约束）

## 1. 背景

项目 H5 端的打包链路**已经存在且可用**，本次不新建平台能力，只补齐「交付形态」：

| 已有资产 | 现状 |
| :--- | :--- |
| [scripts/build-h5.mjs](../../../scripts/build-h5.mjs) | 调 HBuilderX CLI（`cli publish --platform h5`）出包到 `unpackage/dist/build/web` |
| [deploy/nginx.conf](../../../deploy/nginx.conf) | 一份「手工拷到服务器」的裸 nginx 配置，非容器化 |
| `.env` 的 `VITE_H5_USE_PROXY` | 控制 H5 是否走 `/api` 反向代理，当前为 `false` |
| 环境切换 | `pnpm env:test` / `pnpm env:prod` 增删 `.env.production.local` |

**缺口**：没有任何 Docker 交付物。运维部署依赖「在服务器上装 Node + HBuilderX + 手工 nginx」，环境不可复现，测试服与生产无统一交付标准。

## 2. 目标与范围

### 2.1 交付目标

1. 用**一套 Dockerfile**，通过 build ARG 产出 `test` / `prod` 两个镜像
2. 构建在**容器内完成**（多阶段），最终镜像只含 nginx + 静态文件
3. 一份 `docker-compose.yml` 编排两套环境，可同机不同端口，也可异机各自起
4. nginx 负责静态托管 + hash 路由兜底 + 资源长缓存，并**预留 `/api` 反代能力**

### 2.2 明确不做（YAGNI）

- **不做容器内 HTTPS 终止** —— 由阿里云（SLB / CDN + SSL 证书）在外层终止 TLS，容器只监听 80
- **不做后端服务容器化** —— 后端是 `https://ukw0y1.laf.run` 云函数，不在本仓库
- **不做 CI/CD 流水线** —— 本次只交付可手工执行的构建与部署物
- **不修改 `scripts/build-h5.mjs` 与 `deploy/nginx.conf`** —— 前者直接复用（其 `findCli()` 已含容器内路径），后者保留给非容器部署场景
- 不引入 Compose 之外的编排工具（K8s / Swarm）

## 3. 文件清单

| 文件 | 类型 | 职责 |
| :--- | :--- | :--- |
| `Dockerfile` | 新增 | 多阶段：builder（ubuntu:20.04 + HBuilderX）→ runner（nginx:alpine） |
| `.dockerignore` | 新增 | 收缩构建上下文，隔离宿主机残留 |
| `docker-compose.yml` | 新增 | `h5-test` / `h5-prod` 两个 service |
| `deploy/nginx.docker.conf.template` | 新增 | 容器内 nginx 配置（envsubst 模板） |
| `deploy/.env.test` / `deploy/.env.prod` | 新增 | compose 变量（端口、API 上游） |
| `docs/guide/docker-deploy.md` | 新增 | 部署操作手册 |
| `README.md` | 修改 | 「打包与发布」章节补一节 Docker 部署短链 |

### 3.1 数据流

```text
Dockerfile (builder 阶段)
    │
    ├─ ① 装系统依赖 + Node 20 + pnpm
    ├─ ② 下载解压 HBuilderX Linux 包  ──► /opt/hbuilderx/HBuilderX
    ├─ ③ cli open（起 HBuilderX 进程，后续命令的前提）
    ├─ ④ COPY 项目源码 + pnpm install
    ├─ ⑤ pnpm env:${APP_ENV}（生成/删除 .env.production.local）
    ├─ ⑥ pnpm build:h5 ──► scripts/build-h5.mjs ──► cli publish
    └─ ⑦ cli app quit
                │
                ▼  unpackage/dist/build/web
Dockerfile (runner 阶段)
    └─ nginx:alpine + 静态产物 + envsubst 模板 ──► 监听 80
```

## 4. Dockerfile 设计

### 4.1 两个阶段

```dockerfile
# ---------- Stage 1: builder ----------
FROM ubuntu:20.04 AS builder          # 官方 Linux CLI 唯一验证过的发行版
ARG APP_ENV=prod
ARG HBX_VERSION=5.24.2026081301       # 已实测可下载（HTTP 200）

RUN ...装 curl/tar/ca-certificates + Node 20 + pnpm
RUN curl -fL HBuilderX.${HBX_VERSION}.linux_x64.full.tar.gz | tar -xz -C /opt

COPY . /app
RUN pnpm install

# ⚠️ 以下三件事必须写在同一个 RUN 里 —— 见 4.2 约束 2
RUN /opt/hbuilderx/HBuilderX/cli open \
 && <等待 HBuilderX 就绪> \
 && pnpm env:${APP_ENV} && pnpm build:h5 \
 && /opt/hbuilderx/HBuilderX/cli app quit

# ---------- Stage 2: runner ----------
FROM nginx:alpine
COPY deploy/nginx.docker.conf.template /etc/nginx/templates/
COPY --from=builder /app/unpackage/dist/build/web /usr/share/nginx/html
```

### 4.2 三个必须遵守的约束

1. **HBuilderX 下载层必须在 `COPY` 源码之前**
   该层约 1.76GB（`release.json` 中 `linux_full_x64` 实测 1762.05M）。放在前面，改业务代码时不会触发重下。

2. **`cli open` 必须和 `pnpm build:h5` 在同一个 `RUN` 指令内**
   Docker 的每条 `RUN` 都是一个**独立的临时容器**，进程不会跨层存活。若按「`RUN cli open` → `RUN pnpm build:h5`」拆开写，第二层启动时 HBuilderX 进程早已随第一层容器销毁，`build-h5.mjs` 里的 `project open` / `publish` 会直接失败。
   正确做法：`cli open` → 等待就绪 → 构建 → `cli app quit` 串在同一条 `RUN` 中。
   同时 `cli open` 返回后 HBuilderX 未必**立即**可用，需轮询就绪（如反复 `cli project list` 探测）而非裸 `sleep` 固定秒数。

3. **builder 必须用 `ubuntu:20.04`**
   官方明确「仅在 Ubuntu 20.04 LTS 上测试过」。换其他发行版属未验证行为，不冒这个险。

### 4.3 复用而非改动现有脚本

[scripts/build-h5.mjs](../../../scripts/build-h5.mjs) 的 `findCli()` 候选列表中已包含 `/opt/hbuilderx/HBuilderX/cli`，与 Dockerfile 的安装路径天然吻合，**无需修改脚本**。同理，脚本自带的 `pages.json` 备份/还原逻辑在容器内照常生效。

## 5. 环境切换机制

沿用现有机制，不新造轮子：`pnpm env:${APP_ENV}` → `pnpm build:h5`。

- `APP_ENV=test` → `pnpm env:test` 生成 `.env.production.local`
- `APP_ENV=prod` → `pnpm env:prod` 删除 `.env.production.local`

### 5.1 关键正确性要求

**`.dockerignore` 必须排除 `.env.production.local`。**

理由：该文件在 `.gitignore` 中（由 `switch-env.mjs` 生成）。若开发者宿主机恰好在跑过 `pnpm env:test` 后执行 `docker build`，该残留会进入构建上下文被 `COPY` 进镜像，与容器内 `pnpm env:${APP_ENV}` 的生成结果产生覆盖顺序歧义，最终可能打出一个「标称生产、实为测试」的包。排除它是零成本的确定性保障。

同时排除：`node_modules/`、`unpackage/`、`dist/`、`.git/`、`docs/.vitepress/`（缩小上下文并避免宿主机旧产物混入）。

> 注：`.gitignore` 中 `unpackage/dist/build/web` 被显式跟踪，但这与 `.dockerignore` 无关 —— 容器内会重新构建产物，宿主机产物一律不得进入上下文。

## 6. nginx 容器配置

采用 nginx 官方镜像内置的 envsubst 模板机制：`/etc/nginx/templates/*.template` 经 entrypoint 渲染后输出到 `/etc/nginx/conf.d/`。

```nginx
server {
    listen 80;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;          # hash 路由：兜底防刷新 404
    }

    location /assets/ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    location /api/ {
        proxy_pass ${API_UPSTREAM};
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 6.1 两个必须处理的坑

**坑 1：envsubst 默认会吃掉 nginx 自己的变量。**

entrypoint 的 envsubst 若不限定范围，会把 `$uri`、`$host`、`$remote_addr`、`$scheme` 一并替换成空字符串，nginx 配置直接报废（且**不报错**，只是行为诡异）。

必须在 Dockerfile 中限定替换白名单：

```dockerfile
ENV NGINX_ENVSUBST_FILTER=API_UPSTREAM
```

**坑 2：`proxy_pass` 使用字面域名是「启动时解析」。**

nginx 对 `proxy_pass https://host;` 这种字面量，在**进程启动时**完成 DNS 解析。解析失败则 nginx 无法启动，容器陷入反复重启。因此：

- `API_UPSTREAM` **不设空值**，默认填 `https://ukw0y1.laf.run`（当前真实后端，可解析）
- 空值会让 nginx 直接启动失败

### 6.2 关于 `/api` 反代当前是否生效

当前 `.env` 中 `VITE_H5_USE_PROXY=false`，前端直连完整域名，**不会发出 `/api` 请求**，因此该 location 目前是「已就绪但未被命中」的预留能力。

一旦把 `VITE_H5_USE_PROXY` 改为 `true`，只需在 `deploy/.env.{test,prod}` 中设置 `API_UPSTREAM` 指向后端，**无需重建镜像**。

## 7. compose 编排

```yaml
services:
  h5-test:
    build:
      context: .
      args:
        APP_ENV: test
    image: unibestx-h5:test
    ports:
      - "${H5_TEST_PORT:-8081}:80"
    environment:
      API_UPSTREAM: ${API_UPSTREAM:-https://ukw0y1.laf.run}
    restart: unless-stopped

  h5-prod:
    build:
      context: .
      args:
        APP_ENV: prod
    image: unibestx-h5:prod
    ports:
      - "${H5_PROD_PORT:-8080}:80"
    environment:
      API_UPSTREAM: ${API_UPSTREAM:-https://ukw0y1.laf.run}
    restart: unless-stopped
```

**部署用法**（`--env-file` 指定环境变量，显式指定 service 名避免误起另一个）：

```bash
docker compose --env-file deploy/.env.test up -d --build h5-test
docker compose --env-file deploy/.env.prod up -d --build h5-prod
```

同机部署时两个 service 端口不同（8081 / 8080）可并存；异机部署时各服务器只 `up` 自己那一个 service。

## 8. 已知取舍与风险

| 风险 | 说明 | 缓解 |
| :--- | :--- | :--- |
| **容器内 HBuilderX 能否启动未经验证** | 官方文档只保证 Linux 服务器的 headless 用法，**未提供任何 Docker 化先例**；full 包若依赖 X11/GTK 等系统库，`cli open` 可能起不来 | **实现阶段第一步就是打通这个最小验证**（见 9.1），失败则补装系统库或引入 Xvfb；此路不通需回到方案讨论 |
| builder 层约 5GB | 1.76GB 压缩包 + 解压后体积 | 多阶段，最终镜像不含；层缓存复用 |
| 首次构建 5–10 分钟 | 需下载 1.76GB | 一次性成本，后续构建走缓存 |
| 官方仅验证 Ubuntu 20.04 | 其他发行版未测 | builder 固定 20.04 |
| 依赖版本不锁定 | `pnpm-lock.yaml` 被 `.gitignore` 排除 | 沿用项目现状，本次不引入新问题 |
| HBuilderX 版本写死 | `ARG HBX_VERSION` 固定 `5.24.2026081301` | 升级时改一个 ARG；可用 `--build-arg` 覆盖 |
| 容器不做 TLS | 只监听 80 | **由阿里云 SLB / CDN 在外层终止 HTTPS** |
| 静态资源缓存头较激进 | `/assets/` 设 30d immutable | 产物文件名带 hash，构建变更即换名，安全 |

## 9. 验收标准

### 9.1 第零步：最小可行性验证（必须先做）

整个方案的地基是「HBuilderX Linux CLI 能在容器里跑通」这件事，而**官方没有提供任何 Docker 先例**。因此在写完整 Dockerfile 之前，先用一个最小容器验证：

```bash
docker run --rm -it ubuntu:20.04 bash
# 容器内：装 curl/tar → 下载解压 HBuilderX → ./cli open → ./cli ver
```

**判据**：`cli ver` 能打印版本号。若失败，按报错补装系统库（GTK/X11 相关）或引入 `xvfb-run` 重试。

这一步不通，则本设计的多阶段方案不成立，需要回到方案讨论（退回「宿主机构建 + 镜像只托管」）。**不要跳过这一步直接写完整 Dockerfile** —— 否则会先花 10 分钟下载再去撞同一堵墙。

### 9.2 完整验收

以下 5 条全部通过才算完成，每条都需实际执行并留存输出：

1. `docker build --build-arg APP_ENV=prod -t unibestx-h5:prod .` 成功退出
2. `docker run -d -p 8080:80 unibestx-h5:prod` 后，`http://localhost:8080` 首页正常渲染
3. 直接访问深层路由（如 `http://localhost:8080/#/pages/basic/basic`）并刷新，不出现 404
4. 产物内接口域名确认为**生产域名**，证实 `APP_ENV` 透传生效（而非拿到宿主机残留的测试配置）
5. `docker images unibestx-h5:prod` 体积 **< 100MB** —— 这是多阶段构建真正生效的硬证据（若达 GB 级说明 builder 层漏进最终镜像）

另需对 `APP_ENV=test` 重复第 1、4 条，证实双环境隔离成立。
