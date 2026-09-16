# H5 端 Docker 部署实现计划（重构版）

> **面向 AI 代理的工作者：** 必需子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法来跟踪进度。

**目标：** 将 unibestX 的 H5 端 Docker 部署推翻重构为现代化标准实践：在宿主机/CI 环境执行构建，Docker 镜像基于 `nginx:alpine` 仅承载静态产物与动态反代配置，实现秒级打包与极小体积交付。

**架构：** 宿主机（Node 20 + pnpm + 本地 HBuilderX CLI）执行 `pnpm build:test` / `pnpm build:prod` 产出静态文件到 `unpackage/dist/build/web`；单阶段 Dockerfile 仅基于 `nginx:alpine`（原生支持 amd64/arm64），通过 Nginx 官方 `templates` 自动执行 `envsubst` 注入 `${API_UPSTREAM}` 反向代理，`docker compose` 编排管理测试与生产实例。

**技术栈：** Nginx 1.27 Alpine、Docker Compose v2、Node 20、pnpm、HBuilderX CLI

**设计依据：** [docs/superpowers/specs/2026-09-16-h5-docker-deploy-design.md](../specs/2026-09-16-h5-docker-deploy-design.md)

---

## ⚠️ 执行者必读的项目约束

1. **严禁 `git add -A` / `git add .`**。本仓库构建或编译可能产生本地临时文件，**每个 commit 步骤必须显式指定添加的文件**。
2. **本计划不修改任何 `.uvue` / `.uts` 页面或业务逻辑代码**，完全不触碰 `unibestX-skill` 的分册约束。

---

## 文件结构清单

| 文件路径 | 变更类型 | 职责 |
| :--- | :--- | :--- |
| `deploy/probe/` | 删除 | 移除废弃的 HBuilderX 容器内探针 |
| `docs/superpowers/plans/docker-build-baseline.txt` | 删除 | 移除废弃的探针基线记录 |
| `.dockerignore` | 新增 | 极致收缩构建上下文（仅将 `unpackage/dist/build/web` 和 `deploy/` 送入构建） |
| `deploy/nginx.conf.template` | 新增 | 生产级 Nginx 配置模板（Gzip、静态长缓存、Hash 路由重定向、envsubst 反代） |
| `Dockerfile` | 新增 | 基于 `nginx:alpine` 的极简运行时镜像定义 |
| `deploy/.env.test` | 新增 | 测试环境 compose 配置（端口、测试 API 上游） |
| `deploy/.env.prod` | 新增 | 生产环境 compose 配置（端口、生产 API 上游） |
| `docker-compose.yml` | 新增 | `h5-test` 与 `h5-prod` 服务编排 |
| `package.json` | 修改 | 新增快捷构建命令（`docker:build:test`, `docker:build:prod`, `docker:up:test`, `docker:up:prod`） |
| `docs/guide/docker-deploy.md` | 新增 | 部署操作使用指南 |

---

## 任务 1：清理废弃的旧版探针文件

**文件：**
- 删除：`deploy/probe/hbx-probe.Dockerfile`
- 删除：`docs/superpowers/plans/docker-build-baseline.txt`

- [ ] **步骤 1：删除废弃文件**

```bash
rm -rf deploy/probe
rm -f docs/superpowers/plans/docker-build-baseline.txt
```

- [ ] **步骤 2：验证清理完毕**

```bash
git status --short
```

预期：看到两个文件的删除标记。

- [ ] **步骤 3：Commit**

```bash
git add deploy/probe docs/superpowers/plans/docker-build-baseline.txt
git commit -m "chore(deploy): 清理废弃的 HBuilderX 容器探针及基线文件"
```

---

## 任务 2：编写 `.dockerignore`

**目的：** 使用白名单机制，严格阻止 `node_modules`、源码及开发残留被复制进 Docker 上下文，确保 `docker build` 上下文传输在 0.1 秒内完成。

**文件：**
- 创建：`.dockerignore`

- [ ] **步骤 1：创建 `.dockerignore` 文件**

写入如下内容：
```gitignore
# 默认忽略所有文件
*

# 仅放行 Nginx 模板配置
!deploy
!deploy/nginx.conf.template

# 仅放行 H5 静态打包产物
!unpackage
!unpackage/dist
!unpackage/dist/build
!unpackage/dist/build/web
!unpackage/dist/build/web/**
```

- [ ] **步骤 2：验证上下文过滤有效**

在终端测试 Docker context 体积传输情况。

- [ ] **步骤 3：Commit**

```bash
git add .dockerignore
git commit -m "feat(deploy): 新增 .dockerignore 上下文白名单配置"
```

---

## 任务 3：编写 Nginx 生产配置模板 `deploy/nginx.conf.template`

**目的：** 提供生产级 Web 服务配置，兼容 SPA Hash 路由、静态资源长期缓存，并通过 `${API_UPSTREAM}` 变量支持动态反代后端的 `/api/` 接口。

**文件：**
- 创建：`deploy/nginx.conf.template`

- [ ] **步骤 1：编写模板配置**

创建 `deploy/nginx.conf.template`，内容如下：
```nginx
server {
    listen 80;
    server_name localhost;

    # 根目录指向静态产物
    root /usr/share/nginx/html;
    index index.html;

    # 启用 Gzip 压缩
    gzip on;
    gzip_min_length 1k;
    gzip_buffers 4 16k;
    gzip_http_version 1.1;
    gzip_comp_level 6;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml;
    gzip_vary on;

    # SPA Hash 路由兜底
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 静态资源长期缓存（带 hash 的 js/css/assets）
    location /assets/ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # 后端接口动态反向代理
    # 当环境变量 API_UPSTREAM 存在时由 Nginx 模板引擎注入真实地址
    location /api/ {
        proxy_pass ${API_UPSTREAM};
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        proxy_connect_timeout 60s;
        proxy_read_timeout 60s;
        proxy_send_timeout 60s;
    }

    # 禁止访问隐藏文件
    location ~ /\. {
        deny all;
    }
}
```

- [ ] **步骤 2：Commit**

```bash
git add deploy/nginx.conf.template
git commit -m "feat(deploy): 新增支持 envsubst 的生产级 Nginx 配置模板"
```

---

## 任务 4：编写根目录 `Dockerfile`

**目的：** 基于官方轻量 `nginx:alpine`，带构建前置防空校验。

**文件：**
- 创建：`Dockerfile`

- [ ] **步骤 1：创建 `Dockerfile`**

```dockerfile
# syntax=docker/dockerfile:1
FROM nginx:alpine

LABEL maintainer="unibestX"
LABEL description="unibestX H5 生产部署轻量容器"

# 拷贝 Nginx 模板，官方镜像启动入口自动通过 envsubst 解析生成 /etc/nginx/conf.d/default.conf
COPY deploy/nginx.conf.template /etc/nginx/templates/default.conf.template

# 拷贝前端构建产物
# 提示：构建前必须先在宿主机运行 pnpm build:test 或 pnpm build:prod
COPY unpackage/dist/build/web /usr/share/nginx/html

EXPOSE 80

STOPSIGNAL SIGQUIT

CMD ["nginx", "-g", "daemon off;"]
```

- [ ] **步骤 2：Commit**

```bash
git add Dockerfile
git commit -m "feat(deploy): 新增轻量级 Nginx Dockerfile"
```

---

## 任务 5：编写环境配置文件与 `docker-compose.yml`

**目的：** 支持独立运行或同时编排测试环境与生产环境容器。

**文件：**
- 创建：`deploy/.env.test`
- 创建：`deploy/.env.prod`
- 创建：`docker-compose.yml`

- [ ] **步骤 1：创建 `deploy/.env.test`**

```env
# unibestX H5 测试服配置
PORT=8081
API_UPSTREAM=https://ukw0y1.laf.run
```

- [ ] **步骤 2：创建 `deploy/.env.prod`**

```env
# unibestX H5 生产服配置
PORT=8080
API_UPSTREAM=https://ukw0y1.laf.run
```

- [ ] **步骤 3：创建 `docker-compose.yml`**

```yaml
services:
  # 测试环境服务
  h5-test:
    build:
      context: .
      dockerfile: Dockerfile
    image: unibestx-h5:test
    container_name: unibestx-h5-test
    restart: always
    env_file:
      - deploy/.env.test
    ports:
      - "${PORT:-8081}:80"
    environment:
      - API_UPSTREAM=${API_UPSTREAM:-https://ukw0y1.laf.run}

  # 生产环境服务
  h5-prod:
    build:
      context: .
      dockerfile: Dockerfile
    image: unibestx-h5:prod
    container_name: unibestx-h5-prod
    restart: always
    env_file:
      - deploy/.env.prod
    ports:
      - "${PORT:-8080}:80"
    environment:
      - API_UPSTREAM=${API_UPSTREAM:-https://ukw0y1.laf.run}
```

- [ ] **步骤 4：Commit**

```bash
git add deploy/.env.test deploy/.env.prod docker-compose.yml
git commit -m "feat(deploy): 新增测试与生产环境 docker-compose 编排配置"
```

---

## 任务 6：配置 `package.json` 快捷脚本

**目的：** 将宿主机构建与 Docker 打包串联，让开发者或 CI 可以一键完成全流程。

**文件：**
- 修改：`package.json`

- [ ] **步骤 1：更新 `scripts` 字段**

添加快捷命令：
```json
"docker:build:test": "pnpm build:test && docker compose build h5-test",
"docker:build:prod": "pnpm build:prod && docker compose build h5-prod",
"docker:up:test": "docker compose up -d h5-test",
"docker:up:prod": "docker compose up -d h5-prod",
"docker:down": "docker compose down"
```

- [ ] **步骤 2：Commit**

```bash
git add package.json
git commit -m "feat(deploy): package.json 补充 Docker 部署快捷命令"
```

---

## 任务 7：编写部署操作文档 `docs/guide/docker-deploy.md`

**文件：**
- 创建：`docs/guide/docker-deploy.md`

- [ ] **步骤 1：编写详细使用与上线指南**
  说明部署前置准备、本地构建与启动、服务器生产上线流程、反向代理说明。

- [ ] **步骤 2：Commit**

```bash
git add docs/guide/docker-deploy.md
git commit -m "docs(deploy): 新增 H5 Docker 部署使用指南"
```

---

## 任务 8：端到端验证

- [ ] **步骤 1：测试宿主机构建**
  运行 `pnpm build:test`，验证 `unpackage/dist/build/web/index.html` 成功生成。
- [ ] **步骤 2：测试 Docker 镜像构建（若 Docker Desktop 开启）**
  运行 `docker compose build h5-test`，验证打包速度在 2 秒内完成，镜像大小约 25MB。
