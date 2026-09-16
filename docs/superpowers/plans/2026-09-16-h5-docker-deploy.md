# H5 端 Docker 部署实现计划

> **面向 AI 代理的工作者：** 必需子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法来跟踪进度。

**目标：** 让 unibestX 的 H5 产物可以通过 Docker 部署，一套 Dockerfile 产出测试服 / 生产两个镜像，容器内完成构建，最终镜像只含 nginx + 静态文件。

**架构：** 多阶段构建。builder 阶段用 `ubuntu:20.04`（钉死 `linux/amd64`，因 HBuilderX 只有 x64 包）+ HBuilderX Linux CLI 在容器内跑 `cli publish --platform h5`；runner 阶段用 `nginx:alpine`（不钉平台）承载静态产物，并用 nginx 官方镜像的 envsubst 模板机制注入 `/api` 反代上游。环境通过 build ARG 透传给现有的 `pnpm env:test` / `pnpm env:prod` 脚本切换。

**技术栈：** Docker 多阶段构建、HBuilderX Linux CLI 5.24.2026081301、Node 20 + pnpm、nginx:alpine、docker compose

**设计依据：** [docs/superpowers/specs/2026-09-16-h5-docker-deploy-design.md](../specs/2026-09-16-h5-docker-deploy-design.md)

---

## ⚠️ 执行者必读的三条项目约束

1. **严禁 `git add -A` / `git add .`。** 本仓库的构建产物 `unpackage/dist/build/web` 被 git 跟踪，跑一次构建会改动约 60 个已跟踪文件。**每个 commit 步骤都只显式 add 计划中列出的文件。**
2. **本计划不修改任何 `.uvue` / `.uts` 文件**，因此不触发 `unibestX-skill` 的分册约束。若你发现需要改这些文件，说明偏离了计划，应停下来确认。
3. **`main.css` 的 `position: sticky` 覆写等既有机制与本计划无关**，不要顺手动它们。

## 文件结构

| 文件 | 类型 | 职责 |
| :--- | :--- | :--- |
| `deploy/probe/hbx-probe.Dockerfile` | 新增 | 可行性探针（任务 1 的关卡），长期保留作 HBuilderX 升级回归工具 |
| `.dockerignore` | 新增 | 收缩构建上下文 + 隔离宿主机环境残留 |
| `Dockerfile` | 新增 | 多阶段构建：builder → runner |
| `deploy/nginx.docker.conf.template` | 新增 | 容器内 nginx 配置，`${API_UPSTREAM}` 由 envsubst 注入 |
| `docker-compose.yml` | 新增 | `h5-test` / `h5-prod` 两个 service |
| `deploy/.env.test` | 新增 | 测试服 compose 变量 |
| `deploy/.env.prod` | 新增 | 生产 compose 变量 |
| `docs/guide/docker-deploy.md` | 新增 | 部署操作手册 |
| `README.md` | 修改 | 「打包与发布」章节补 Docker 部署入口 |

**为什么 `deploy/probe/` 单独放一个探针而不是直接写完整 Dockerfile**：HBuilderX 能否在容器内启动是**未经验证的假设**（官方无 Docker 先例）。探针把「下载 1.76GB + 启动 HBuilderX」这件事从完整构建里隔离出来，失败时能快速定位，成功后完整 Dockerfile 只是把它接进流程。

---

## 任务 1：可行性探针（go/no-go 关卡）

**这是关卡任务。未通过则整个计划作废，不要继续任务 2。**

**文件：**
- 创建：`deploy/probe/hbx-probe.Dockerfile`

- [ ] **步骤 1：确认 Docker 环境就绪**

```bash
docker version --format 'Server: {{.Server.Os}}/{{.Server.Arch}}'
```

预期：输出 `Server: linux/arm64`（在 M5 Mac 上）。

若报 `Cannot connect to the Docker daemon`，先启动 Docker Desktop。

然后**人工确认** Rosetta 开关：Docker Desktop → Settings → General → 勾选 `Use Rosetta for x86/amd64 emulation`。这一步无法用命令验证，必须手动看一眼。

- [ ] **步骤 2：编写探针 Dockerfile**

创建 `deploy/probe/hbx-probe.Dockerfile`：

```dockerfile
# syntax=docker/dockerfile:1
# ==========================================
# HBuilderX Linux CLI 容器内可行性探针
#
# 用途：在编写完整 Dockerfile 前，验证 HBuilderX 能在 linux/amd64 容器内启动。
#       保留此文件作为「HBuilderX 升级后回归验证」工具。
#
# 用法：docker build -f deploy/probe/hbx-probe.Dockerfile -t hbx-probe .
#
# 背景：HBuilderX 官方只提供 linux_full_x64 包（无 ARM64 版），
#       因此在 Apple Silicon 宿主上必须钉死 --platform=linux/amd64。
# ==========================================
FROM --platform=linux/amd64 ubuntu:20.04

ARG HBX_VERSION=5.24.2026081301
ENV DEBIAN_FRONTEND=noninteractive
ENV HBX_HOME=/opt/hbuilderx/HBuilderX

RUN apt-get update && apt-get install -y --no-install-recommends \
      ca-certificates curl tar \
    && rm -rf /var/lib/apt/lists/*

# ---------- 阶段 1：下载解压 ----------
RUN echo "=== [1/3] 下载 HBuilderX ${HBX_VERSION} ===" \
    && curl -fL -o /tmp/hbx.tar.gz \
         "https://download1.dcloud.net.cn/download/HBuilderX.${HBX_VERSION}.linux_x64.full.tar.gz" \
    && mkdir -p /opt/hbuilderx \
    && tar -xzf /tmp/hbx.tar.gz -C /opt/hbuilderx \
    && rm -f /tmp/hbx.tar.gz \
    && echo "=== 解压完成，cli 权限： ===" \
    && ls -la "${HBX_HOME}/cli" \
    && du -sh /opt/hbuilderx

# ---------- 阶段 2：二进制可执行性 ----------
# 这一步能过，说明 amd64 二进制在容器里能跑（arm64 宿主靠 Rosetta/QEMU）
RUN echo "=== [2/3] cli --help（此阶段 HBuilderX 进程未启动）===" \
    && ("${HBX_HOME}/cli" --help || echo "(退出码非 0：符合预期，--help 需 HBuilderX 进程在跑)")

# ---------- 阶段 3：关键验证 —— 启动 HBuilderX 并确认就绪 ----------
RUN echo "=== [3/3] cli open → 轮询就绪 → cli ver ===" \
    && "${HBX_HOME}/cli" open \
    && for i in $(seq 1 60); do \
         if "${HBX_HOME}/cli" --help >/dev/null 2>&1; then \
           echo ">>> HBuilderX 已就绪，轮询耗时约 $((i * 2))s"; break; \
         fi; \
         sleep 2; \
       done \
    && "${HBX_HOME}/cli" ver \
    && "${HBX_HOME}/cli" app quit \
    && echo ">>> 探针全部通过"
```

- [ ] **步骤 3：构建探针并计时**

```bash
cd /Users/chenqi/Desktop/unibestX
time docker build -f deploy/probe/hbx-probe.Dockerfile -t hbx-probe . 2>&1 | tail -40
```

**预期（Mac + Rosetta）**：下载 1.76GB 约 2–6 分钟，构建整体 5–15 分钟，末尾出现 `>>> HBuilderX 已就绪，轮询耗时约 Ns`、`>>> 探针全部通过`。

- [ ] **步骤 4：判定关卡（三种结果，三种处理）**

| 情况 | 现象 | 处理 |
| :--- | :--- | :--- |
| **A. 通过** | 看到 `>>> 探针全部通过` | ✅ 继续步骤 5 |
| **B. 缺系统库** | 报错含 `libgtk` / `libX11` / `cannot open shared object` / `error while loading shared libraries` | 在探针里补 `apt-get install -y libgtk-3-0 libx11-xcb1 libxcomposite1 libxdamage1 libxrandr2 libasound2 xvfb`，并把 `cli open` 改为 `xvfb-run -a "${HBX_HOME}/cli" open`，重跑步骤 3 |
| **C. 就绪轮询超时 / 耗时过长** | `cli ver` 失败，或「轮询耗时」> 300s | **停下来汇报，不要继续。** 说明 Rosetta/QEMU 路径不实用，需要回到设计讨论（改为「Mac 只写代码，构建在 x86_64 服务器上跑」） |

> 若 `cli open` 阻塞在前台导致构建卡死，改为后台启动：`"${HBX_HOME}/cli" open & sleep 5`，并在后续 `cli ver` 后补 `cli app quit`。
>
> 若 `cli --help` 在 HBuilderX 未启动时也返回 0（即它不能作为就绪信号），改用 `cli project list` 作为轮询判据。

- [ ] **步骤 5：记录实测数据**

把实测结果追加到 `docs/superpowers/plans/tabbar-surface-baseline.txt` 同级目录下新建的 `docker-build-baseline.txt`：

```bash
cat > docs/superpowers/plans/docker-build-baseline.txt <<'EOF'
HBuilderX 容器内可行性实测（第零步关卡）
==========================================
日期：2026-09-16
宿主：Apple M5 / arm64 / macOS 25.4.0
Docker：linux/amd64 容器（Rosetta 加速）
HBuilderX 版本：5.24.2026081301

- 下载+解压耗时：
- cli open 就绪耗时：
- 探针整体构建耗时：
- 最终镜像体积：
- 是否补装了系统库：
- 结论：通过 / 不通过
EOF
```

（上面每行留白处按实测填写，不要留空就提交。）

- [ ] **步骤 6：Commit**

```bash
git add deploy/probe/hbx-probe.Dockerfile docs/superpowers/plans/docker-build-baseline.txt
git commit -m "chore(deploy): 新增 HBuilderX 容器内可行性探针与实测基线"
```

---

## 任务 2：`.dockerignore` —— 隔离宿主机环境残留

**为什么这个任务单独存在**：`.env.production.local` 由 `pnpm env:test` 在宿主机生成。若它被 COPY 进构建上下文，会与容器内 `pnpm env:${APP_ENV}` 的生成结果产生覆盖顺序歧义，**可能打出「标称生产、实为测试」的包**。这是本任务的核心目的，不只是「缩小上下文」。

**文件：**
- 创建：`.dockerignore`

- [ ] **步骤 1：编写 `.dockerignore`**

创建 `.dockerignore`：

```gitignore
# ==========================================
# 构建上下文排除规则
# ==========================================

# ---- 依赖与构建产物（容器内会重新生成）----
node_modules/
unpackage/
dist/

# ---- 版本控制与编辑器 ----
.git/
.github/
.gitee/
.idea/
.hbuilderx/
.vscode/
.DS_Store

# ---- ⚠️ 核心：宿主机环境切换残留 ----
# .env.production.local 由 `pnpm env:test` 生成，
# 若混入构建上下文会导致「标称生产、实为测试」的包。
# 容器内会由 `pnpm env:${APP_ENV}` 重新生成，绝不能让宿主机的进来。
.env.production.local
.env.*.local

# ---- 构建过程备份 ----
.pages.json.bak

# ---- 文档站产物与缓存 ----
docs/.vitepress/dist/
docs/.vitepress/cache/

# ---- 本地测试脚手架 ----
scripts/router-guard-test/.build/
```

> **不要**排除 `deploy/`（runner 阶段要 COPY 里面的 nginx 模板）、`.npmrc`（pnpm install 需要）、`.env` / `.env.test` / `.env.production`（构建需要读这些）。

- [ ] **步骤 2：构造污染场景**

```bash
cd /Users/chenqi/Desktop/unibestX
echo "VITE_ENV_TYPE=polluted" > .env.production.local
mkdir -p node_modules/.probe && head -c 10485760 /dev/zero > node_modules/.probe/big.bin
echo "污染样本已就绪"
```

- [ ] **步骤 3：验证排除生效**

```bash
docker build -f- -t dockerignore-probe . <<'EOF' 2>&1 | tail -20
FROM alpine
COPY . /ctx
RUN echo "--- .env.production.local 是否泄漏 ---" \
 && (test -e /ctx/.env.production.local && echo "❌ 泄漏！" || echo "✅ 未泄漏") \
 && echo "--- node_modules 是否泄漏 ---" \
 && (test -e /ctx/node_modules && echo "❌ 泄漏！" || echo "✅ 未泄漏") \
 && echo "--- deploy 必须保留 ---" \
 && (test -e /ctx/deploy/nginx.conf && echo "✅ deploy 在" || echo "❌ deploy 被误排除") \
 && echo "--- .npmrc 必须保留 ---" \
 && (test -e /ctx/.npmrc && echo "✅ .npmrc 在" || echo "❌ .npmrc 被误排除")
EOF
```

预期输出：

```
✅ 未泄漏        (.env.production.local)
✅ 未泄漏        (node_modules)
✅ deploy 在
✅ .npmrc 在
```

同时观察构建日志首行的 `transferring context` 体积，应远小于 10MB。

- [ ] **步骤 4：清理污染样本**

```bash
rm -f .env.production.local
rm -rf node_modules/.probe
docker rmi dockerignore-probe 2>/dev/null || true
git status --short    # 确认没有多余文件残留
```

- [ ] **步骤 5：Commit**

```bash
git add .dockerignore
git commit -m "chore(deploy): 新增 .dockerignore，隔离宿主机环境切换残留"
```

---

## 任务 3：Dockerfile — builder 阶段

**文件：**
- 创建：`Dockerfile`
- 复用（不修改）：`scripts/build-h5.mjs` —— 其 `findCli()` 候选路径已含 `/opt/hbuilderx/HBuilderX/cli`，与下面的 `HBX_HOME` 一致

- [ ] **步骤 1：编写 Dockerfile（先只写 builder 阶段）**

创建 `Dockerfile`：

```dockerfile
# syntax=docker/dockerfile:1
# ==========================================
# unibestX H5 多阶段构建
#
# 用法：
#   生产：docker build --build-arg APP_ENV=prod -t unibestx-h5:prod .
#   测试：docker build --build-arg APP_ENV=test -t unibestx-h5:test .
# ==========================================

# ==========================================
# Stage 1: builder —— 容器内完成 H5 构建
# ==========================================
# --platform 必须钉死 linux/amd64：
#   HBuilderX 官方只发布 linux_full_x64 包（无 ARM64 版），
#   在 Apple Silicon 宿主上不钉会出现 Exec format error。
FROM --platform=linux/amd64 ubuntu:20.04 AS builder

ARG APP_ENV=prod
ARG HBX_VERSION=5.24.2026081301
ARG NODE_MAJOR=20

ENV DEBIAN_FRONTEND=noninteractive
ENV HBX_HOME=/opt/hbuilderx/HBuilderX
# scripts/build-h5.mjs 的 findCli() 会优先读这个变量
ENV HBUILDERX_CLI_PATH=/opt/hbuilderx/HBuilderX/cli

# ---------- ① 系统依赖 + Node + pnpm ----------
RUN apt-get update && apt-get install -y --no-install-recommends \
      ca-certificates curl tar xz-utils gnupg \
    && curl -fsSL "https://deb.nodesource.com/setup_${NODE_MAJOR}.x" | bash - \
    && apt-get install -y --no-install-recommends nodejs \
    && npm i -g pnpm \
    && node -v && pnpm -v \
    && rm -rf /var/lib/apt/lists/*

# ---------- ② 下载解压 HBuilderX ----------
# 放在 COPY 源码之前：改业务代码时这一层走缓存，不重下 1.76GB
RUN curl -fL -o /tmp/hbx.tar.gz \
      "https://download1.dcloud.net.cn/download/HBuilderX.${HBX_VERSION}.linux_x64.full.tar.gz" \
    && mkdir -p /opt/hbuilderx \
    && tar -xzf /tmp/hbx.tar.gz -C /opt/hbuilderx \
    && rm -f /tmp/hbx.tar.gz \
    && test -x "${HBX_HOME}/cli"

# ---------- ③ 源码与依赖 ----------
WORKDIR /app
COPY . /app
RUN pnpm install

# ---------- ④ 构建 ----------
# ⚠️ cli open / 构建 / cli quit 必须在同一条 RUN 内：
#    Docker 每条 RUN 是独立临时容器，进程不跨层存活。
RUN "${HBX_HOME}/cli" open \
    && for i in $(seq 1 60); do \
         if "${HBX_HOME}/cli" --help >/dev/null 2>&1; then break; fi; \
         sleep 2; \
       done \
    && pnpm env:${APP_ENV} \
    && pnpm build:h5 \
    && "${HBX_HOME}/cli" app quit
```

- [ ] **步骤 2：只构建 builder 阶段**

```bash
cd /Users/chenqi/Desktop/unibestX
time docker build --target builder --build-arg APP_ENV=prod -t unibestx-h5:builder . 2>&1 | tail -30
```

预期：构建成功，日志末尾出现 `✅ H5 打包成功，产物目录：unpackage/dist/build/web`（来自 `scripts/build-h5.mjs`）。

- [ ] **步骤 3：验证产物确实存在**

```bash
docker run --rm unibestx-h5:builder ls -la /app/unpackage/dist/build/web/ | head -20
```

预期：至少看到 `index.html`、`assets/`。

- [ ] **步骤 4：验证环境变量透传生效**

```bash
docker run --rm unibestx-h5:builder sh -c "grep -rl '生产环境' /app/unpackage/dist/build/web/ | head -3"
```

预期：至少输出一个文件路径（`VITE_ENV_NAME=生产环境` 被内联进了产物）。

再验证反向：

```bash
docker run --rm unibestx-h5:builder sh -c "grep -rl '测试环境' /app/unpackage/dist/build/web/ | wc -l"
```

预期：`0`。

> **若这里返回非 0**：说明源码注释未被剥离（`测试环境` 出现在 `src/utils/env/index.uts` 的注释里）。此时改用 `VITE_ENV_TYPE` 的字面量作为判据，或用「test 与 prod 两个镜像的产物 diff 必须非空」来替代。**不要在未确认环境隔离有效的情况下继续。**

- [ ] **步骤 5：Commit**

```bash
git add Dockerfile
git commit -m "feat(deploy): 新增 Dockerfile builder 阶段，容器内完成 H5 构建"
```

---

## 任务 4：nginx 模板 + Dockerfile runner 阶段

**文件：**
- 创建：`deploy/nginx.docker.conf.template`
- 修改：`Dockerfile`（追加 runner 阶段）

- [ ] **步骤 1：编写 nginx 模板**

创建 `deploy/nginx.docker.conf.template`：

```nginx
# ==========================================
# unibestX H5 容器内 nginx 配置（envsubst 模板）
#
# 本文件被 nginx 官方镜像的 entrypoint 渲染后写入 /etc/nginx/conf.d/default.conf。
# 只有 ${API_UPSTREAM} 会被替换（由 NGINX_ENVSUBST_FILTER 限定），
# 因此下面的 $uri / $host / $remote_addr 等 nginx 内置变量不受影响。
# ==========================================

server {
    listen 80;
    server_name _;

    root /usr/share/nginx/html;
    index index.html;

    # ---- H5 为 hash 路由：直接命中静态文件，try_files 兜底防刷新 404 ----
    location / {
        try_files $uri $uri/ /index.html;
    }

    # ---- 产物文件名带 hash，可长缓存 ----
    location /assets/ {
        expires 30d;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # ---- index.html 不缓存，保证发版后立即生效 ----
    location = /index.html {
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }

    # ---- 预留：H5 走代理模式时启用（.env 里 VITE_H5_USE_PROXY=true）----
    # 上游地址由环境变量 API_UPSTREAM 注入，切换后端无需重建镜像。
    # 注意：proxy_pass 使用字面域名是「启动时解析」，因此 API_UPSTREAM
    #      不能为空，否则 nginx 会启动失败（Dockerfile 里已给默认值）。
    location /api/ {
        proxy_pass ${API_UPSTREAM};
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        proxy_connect_timeout 60s;
        proxy_read_timeout 60s;
    }

    gzip on;
    gzip_min_length 1024;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml;
}
```

- [ ] **步骤 2：追加 runner 阶段到 Dockerfile**

在 `Dockerfile` **末尾**追加：

```dockerfile

# ==========================================
# Stage 2: runner —— 纯静态托管
# ==========================================
# 这里刻意不钉 --platform：
#   产物是纯静态文件，与 CPU 架构无关，跨架构 COPY --from 完全合法。
#   不钉可让 Mac 本地跑原生 arm64 nginx，运行时零模拟开销；
#   在 x86_64 服务器上两边都是原生 amd64，无任何差异。
FROM nginx:alpine

# ⚠️ envsubst 默认替换「所有」$变量，会把 nginx 自己的 $uri / $host
#    也替换成空字符串，导致配置静默失效。必须限定替换白名单。
ENV NGINX_ENVSUBST_FILTER=API_UPSTREAM

# ⚠️ 兜底默认值：proxy_pass 用字面域名是启动时解析，
#    若为空会导致 nginx 无法启动、容器反复重启。
ENV API_UPSTREAM=https://ukw0y1.laf.run

COPY deploy/nginx.docker.conf.template /etc/nginx/templates/default.conf.template

COPY --from=builder /app/unpackage/dist/build/web /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

- [ ] **步骤 3：构建完整镜像**

```bash
cd /Users/chenqi/Desktop/unibestX
docker build --build-arg APP_ENV=prod -t unibestx-h5:prod . 2>&1 | tail -20
```

预期：构建成功。

- [ ] **步骤 4：验证多阶段真的生效（关键的体积判据）**

```bash
docker images --format '{{.Repository}}:{{.Tag}}\t{{.Size}}' | grep unibestx-h5
```

预期：`unibestx-h5:prod` 体积 **小于 100MB**（nginx:alpine 约 50MB + 静态产物）。

**若达到 GB 级**，说明 builder 阶段的内容漏进了最终镜像，检查是否误写成单阶段或在 runner 里 `COPY /opt/hbuilderx`。

- [ ] **步骤 5：验证 nginx 配置渲染正确（envsubst 白名单生效）**

```bash
docker run --rm unibestx-h5:prod cat /etc/nginx/conf.d/default.conf | grep -E 'try_files|proxy_pass|\$uri'
```

预期看到**未损坏**的三行（不是空字符串）：

```
        try_files $uri $uri/ /index.html;
        proxy_pass https://ukw0y1.laf.run;
```

**若出现 `try_files  $uri/`（$uri 变空）或 `proxy_pass ;`**，说明 `NGINX_ENVSUBST_FILTER` 没生效，检查该 ENV 是否写在 `COPY ... templates` **之前**。

- [ ] **步骤 6：Commit**

```bash
git add deploy/nginx.docker.conf.template Dockerfile
git commit -m "feat(deploy): 新增 nginx 容器模板与 Dockerfile runner 阶段"
```

---

## 任务 5：compose 编排与双环境变量

**文件：**
- 创建：`docker-compose.yml`
- 创建：`deploy/.env.test`
- 创建：`deploy/.env.prod`

- [ ] **步骤 1：编写 compose 文件**

创建 `docker-compose.yml`：

```yaml
# ==========================================
# unibestX H5 部署编排（测试服 / 生产）
#
# 用法：
#   测试服：docker compose --env-file deploy/.env.test up -d --build h5-test
#   生产：  docker compose --env-file deploy/.env.prod up -d --build h5-prod
#
# 同机部署时两个 service 端口不同（8081 / 8080），可并存；
# 异机部署时各服务器只 up 自己那一个 service。
# ==========================================

services:
  h5-test:
    build:
      context: .
      args:
        APP_ENV: test
        HBX_VERSION: "5.24.2026081301"
    image: unibestx-h5:test
    container_name: unibestx-h5-test
    ports:
      - "${H5_TEST_PORT:-8081}:80"
    environment:
      # /api 反代上游。当前 .env 里 VITE_H5_USE_PROXY=false，
      # 前端不发 /api 请求，此项为预留；改为 true 时只需调整此处，无需重建镜像。
      API_UPSTREAM: ${API_UPSTREAM:-https://ukw0y1.laf.run}
    restart: unless-stopped

  h5-prod:
    build:
      context: .
      args:
        APP_ENV: prod
        HBX_VERSION: "5.24.2026081301"
    image: unibestx-h5:prod
    container_name: unibestx-h5-prod
    ports:
      - "${H5_PROD_PORT:-8080}:80"
    environment:
      API_UPSTREAM: ${API_UPSTREAM:-https://ukw0y1.laf.run}
    restart: unless-stopped
```

> `HBX_VERSION` 用引号包住：不加引号时 YAML 可能把 `5.24.2026081301` 解析成数字而丢精度。

- [ ] **步骤 2：编写两份环境变量文件**

创建 `deploy/.env.test`：

```bash
# 测试服 compose 变量
# 用法：docker compose --env-file deploy/.env.test up -d --build h5-test

# 宿主机映射端口
H5_TEST_PORT=8081

# /api 反代上游（VITE_H5_USE_PROXY=true 时才生效）
API_UPSTREAM=https://ukw0y1.laf.run
```

创建 `deploy/.env.prod`：

```bash
# 生产 compose 变量
# 用法：docker compose --env-file deploy/.env.prod up -d --build h5-prod

# 宿主机映射端口
H5_PROD_PORT=8080

# /api 反代上游（VITE_H5_USE_PROXY=true 时才生效）
API_UPSTREAM=https://ukw0y1.laf.run
```

- [ ] **步骤 3：验证 compose 配置可解析**

```bash
cd /Users/chenqi/Desktop/unibestX
docker compose --env-file deploy/.env.prod config
```

预期：打印完整解析后的 YAML，`h5-prod` 的 ports 为 `8080:80`，`API_UPSTREAM` 为 `https://ukw0y1.laf.run`，无 warning。

再验证 test：

```bash
docker compose --env-file deploy/.env.test config | grep -A2 'h5-test' | head -20
```

预期：`h5-test` 的 ports 为 `8081:80`。

- [ ] **步骤 4：Commit**

```bash
git add docker-compose.yml deploy/.env.test deploy/.env.prod
git commit -m "feat(deploy): 新增 compose 编排与测试/生产双环境变量"
```

---

## 任务 6：端到端验证（两个环境）

**这是验收任务，逐条对照设计文档 9.2 执行。每步都要留存实际输出。**

- [ ] **步骤 1：构建并启动生产容器**

```bash
cd /Users/chenqi/Desktop/unibestX
docker compose --env-file deploy/.env.prod up -d --build h5-prod
docker compose ps
```

预期：`unibestx-h5-prod` 状态 `Up`。

- [ ] **步骤 2：验收 —— 首页可访问**

```bash
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:8080/
```

预期：`200`。

- [ ] **步骤 3：验收 —— 深层路由刷新不 404**

```bash
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:8080/pages/basic/basic
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:8080/some/deep/unknown/path
```

预期：两条都是 `200`（`try_files` 兜底到 `index.html`）。

- [ ] **步骤 4：验收 —— 静态资源缓存头**

```bash
ASSET=$(docker exec unibestx-h5-prod sh -c "ls /usr/share/nginx/html/assets/ | head -1")
echo "样本资源：$ASSET"
curl -sI "http://localhost:8080/assets/$ASSET" | grep -i "cache-control"
```

预期：`Cache-Control: public, immutable`，且带 `Expires`。

- [ ] **步骤 5：验收 —— index.html 不被长缓存**

```bash
curl -sI http://localhost:8080/index.html | grep -i "cache-control"
```

预期：`no-cache, no-store, must-revalidate`。

- [ ] **步骤 6：验收 —— 生产镜像体积**

```bash
docker images --format '{{.Repository}}:{{.Tag}}\t{{.Size}}' | grep unibestx-h5:prod
```

预期：< 100MB。

- [ ] **步骤 7：验收 —— 双环境隔离**

```bash
# 生产镜像：必须含「生产环境」、不含「测试环境」
docker run --rm unibestx-h5:prod sh -c "grep -rl '生产环境' /usr/share/nginx/html/ | head -3"
docker run --rm unibestx-h5:prod sh -c "grep -rl '测试环境' /usr/share/nginx/html/ | wc -l"
```

预期：第一条有输出，第二条为 `0`。

- [ ] **步骤 8：构建并验证测试环境**

```bash
docker compose --env-file deploy/.env.test up -d --build h5-test
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:8081/
docker run --rm unibestx-h5:test sh -c "grep -rl '测试环境' /usr/share/nginx/html/ | head -3"
```

预期：`200`，且第二条有输出。

- [ ] **步骤 9：清理验证容器（保留镜像）**

```bash
docker compose --env-file deploy/.env.prod down
docker compose --env-file deploy/.env.test down
docker rmi unibestx-h5:builder hbx-probe 2>/dev/null || true
```

- [ ] **步骤 10：确认工作区干净**

```bash
git status --short
```

预期：**只**出现本任务新增的文档文件（若有）。**若出现 `unpackage/` 下的文件变更，说明有构建跑在了宿主机上 —— 回滚它们，不要提交**（见执行者必读第 1 条）。

---

## 任务 7：部署文档

**文件：**
- 创建：`docs/guide/docker-deploy.md`
- 修改：`README.md`（在「#### 🖥️ H5：在自己服务器 / CI 上打包（推荐）」小节之后插入 Docker 部署入口）

- [ ] **步骤 1：编写部署手册**

创建 `docs/guide/docker-deploy.md`：

````markdown
# H5 Docker 部署

一套 `Dockerfile` 通过 build ARG 产出测试服 / 生产两个镜像，容器内完成构建，最终镜像只含 nginx + 静态文件。

## 前置条件

| 项 | 要求 |
| :--- | :--- |
| 服务器架构 | **x86_64**（阿里云 ECS）。HBuilderX 只发布 `linux_full_x64`，无 ARM64 版 |
| 服务器内存 | ≥ 4GB（构建阶段解压 HBuilderX 后占用较大） |
| 磁盘 | ≥ 10GB（builder 层缓存约 5GB） |
| HTTPS | **由阿里云 SLB / CDN 在外层终止**，容器只监听 80 |

## 首次构建（服务器上，原生 x86_64，约 5–10 分钟）

```bash
cd /opt/unibestX
git pull
docker compose --env-file deploy/.env.prod up -d --build h5-prod
```

## 在 Apple Silicon Mac 上构建

HBuilderX 只有 x64 包，Mac 构建时 builder 阶段走 Rosetta 模拟。

1. Docker Desktop → Settings → General → 勾选 **Use Rosetta for x86/amd64 emulation**
2. 直接执行同样的 compose 命令即可 —— `Dockerfile` 已把 builder 阶段钉死为 `linux/amd64`，runner 阶段不钉，因此**最终容器在 Mac 上原生 arm64 运行，无模拟开销**

> 日常开发 H5 用 `pnpm dev:web` 即可，不需要每次都走 Docker 构建。Docker 构建只在需要验证完整生产产物时使用。

## 环境切换

| 环境 | 端口 | 命令 |
| :--- | :--- | :--- |
| 测试服 | 8081 | `docker compose --env-file deploy/.env.test up -d --build h5-test` |
| 生产 | 8080 | `docker compose --env-file deploy/.env.prod up -d --build h5-prod` |

端口与 `/api` 反代上游在 `deploy/.env.test` / `deploy/.env.prod` 中调整，**改完无需重建镜像**（`API_UPSTREAM` 是运行时环境变量）。

## 启用 /api 反向代理

当前 `.env` 中 `VITE_H5_USE_PROXY=false`（H5 直连后端完整域名），`/api` 反代处于预留状态。

要启用：

1. 把 `.env` 的 `VITE_H5_USE_PROXY` 改为 `true`（**这一步必须重建镜像**，因为它影响构建产物）
2. 在 `deploy/.env.{test,prod}` 中把 `API_UPSTREAM` 指向后端地址（这一步只需重启容器）

```bash
docker compose --env-file deploy/.env.prod up -d --build h5-prod
```

## 常见问题

**Q：构建卡在下 HBuilderX，或首次构建极慢**
1.76GB 包 + 解压，属正常。该层有 Docker 缓存，改业务代码不会重下。

**Q：`exec format error`**
宿主是 arm64 且 `--platform=linux/amd64` 没生效。确认 `Dockerfile` 的 builder 阶段保留了 `FROM --platform=linux/amd64 ubuntu:20.04 AS builder`。

**Q：容器启动后立刻退出，日志报 nginx 配置错误**
`API_UPSTREAM` 为空。`proxy_pass` 用字面域名是启动时解析，空值会导致 nginx 无法启动。

**Q：页面能开但接口 404**
检查 `VITE_H5_USE_PROXY` 与 `API_UPSTREAM` 是否配套。前者为 `false` 时前端直连完整域名，不会经过容器内 nginx。

**Q：升级 HBuilderX 版本**
改 `docker-compose.yml` 里的 `HBX_VERSION`，并用探针先验证可用：

```bash
docker build -f deploy/probe/hbx-probe.Dockerfile \
  --build-arg HBX_VERSION=<新版本号> -t hbx-probe .
```

版本号可从 <https://download1.dcloud.net.cn/hbuilderx/release.json> 的 `files[].code == "linux_full_x64"` 处获取。
````

- [ ] **步骤 2：在 README 中补入口**

先定位插入点：

```bash
grep -n "H5：在自己服务器 / CI 上打包" README.md
grep -n "^#### 🛠️ HBuilderX 发行打包" README.md
```

在 `#### 🛠️ HBuilderX 发行打包` 这一行**之前**插入：

```markdown
#### 🐳 H5：Docker 容器化部署（测试服 / 生产）

> 一套 `Dockerfile` 通过 build ARG 产出 `test` / `prod` 两个镜像，**在容器内完成构建**，最终镜像只含 nginx + 静态文件（< 100MB）。
> 测试服与生产可同机部署（端口 8081 / 8080），也可异机各自起。

```bash
docker compose --env-file deploy/.env.test up -d --build h5-test
docker compose --env-file deploy/.env.prod up -d --build h5-prod
```

📖 完整说明见 [docs/guide/docker-deploy.md](docs/guide/docker-deploy.md)

```

- [ ] **步骤 3：验证文档中的命令可用**

```bash
cd /Users/chenqi/Desktop/unibestX
docker compose --env-file deploy/.env.prod config > /dev/null && echo "✅ compose 配置可解析"
```

且确认 README 里引用的路径真实存在：

```bash
test -f docs/guide/docker-deploy.md && echo "✅ 文档存在"
```

- [ ] **步骤 4：Commit**

```bash
git add docs/guide/docker-deploy.md README.md
git commit -m "docs(deploy): 新增 H5 Docker 部署手册并在 README 补充入口"
```

---

## 完成判据

全部任务后，逐条核对：

- [ ] 探针通过，且 `docs/superpowers/plans/docker-build-baseline.txt` 填有真实实测数据
- [ ] `docker images` 中 `unibestx-h5:prod` 与 `unibestx-h5:test` 均 < 100MB
- [ ] 两个环境的首页均返回 200，深层路由刷新不 404
- [ ] 生产镜像含「生产环境」不含「测试环境」，测试镜像反之
- [ ] `docker run --rm unibestx-h5:prod cat /etc/nginx/conf.d/default.conf` 中 `$uri` / `$host` **未被 envsubst 破坏**
- [ ] `git log` 中有 7 个本计划的 commit，且**没有任何 `unpackage/` 下的文件被提交**
