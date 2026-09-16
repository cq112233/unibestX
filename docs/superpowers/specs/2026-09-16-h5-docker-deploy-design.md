# H5 端 Docker 部署设计文档（重构版：宿主机构建 + Nginx 轻量容器）

- 日期：2026-09-16
- 状态：已批准
- 架构分类：部署基建（不涉及 `.uvue` / `.uts`，不触碰 `unibestX-skill` 分册约束）

---

## 1. 背景与重构动因

### 1.1 历史方案回顾与废弃原因
原方案试图在 Docker 容器内通过 `ubuntu:20.04` 下载并安装 HBuilderX Linux 官方桌面完整包（1.76GB 压缩包，解压后 3.7GB），并在容器内执行 `cli publish --platform h5`。

经过探针验证与实测，确认该方案存在以下严重工程硬伤，予以推翻重构：
1. **软件属性与容器哲学违背**：HBuilderX 为 Qt5 桌面 GUI 应用，官方未提供无头（headless）编译器。容器内必须后台运行 GUI 守护进程，其 `cli open` 进程会继承 stdout 占满 BuildKit 日志管道导致构建卡死，且 CLI 错误退出码恒为 0，错误捕获极脆弱。
2. **架构模拟性能极差**：DCloud 官方仅提供 x86_64 包，无 ARM64 版本。在 Apple Silicon (Mac M 系列) 开发机上必须通过 Rosetta 2 模拟，光探针启动即耗时 8 分 28 秒；若包含 npm 依赖安装与项目编译，单次构建预计高达 15~30 分钟，极不实用。
3. **外部网络单点故障**：构建阶段强依赖从 DCloud 官网实时拉取 1.76GB 大包，官方版本迭代或网络限速会导致构建直接失败。

### 1.2 现代化前端部署标准
行业标准前端 SPA / H5 容器化实践：
> **「编译归编译，运行归运行」**：在具备完整编译环境（Node.js + 本地 HBuilderX CLI）的宿主机或 CI 节点执行构建，Docker 镜像仅作为轻量运行时（`nginx:alpine`），仅包含静态产物与 Nginx 配置。

---

## 2. 目标与范围

### 2.1 核心目标
1. **轻量与秒级打包**：Docker 镜像仅基于 `nginx:alpine`，构建时间由原来的 15~30 分钟降低至 **1~2 秒**，镜像体积由数 GB 降低至 **约 25MB**。
2. **多架构零损耗（Multi-Arch）**：原生支持 `linux/amd64` 与 `linux/arm64`，Mac 本地无指令集转译损耗，生产 Linux 服务器原生高效运行。
3. **环境隔离与动态反代**：
   - 区分测试服 (`test`) 与生产 (`prod`) 静态构建产物；
   - Nginx 使用官方 `templates` + `envsubst` 机制，在容器启动时动态注入后端 API 反代上游地址 `${API_UPSTREAM}`。
4. **统一开发与运维体验 (DX)**：
   - 一份 `docker-compose.yml` 编排 `h5-test` 与 `h5-prod`；
   - `package.json` 整合一键式命令，串联环境切换、前端打包与镜像构建。

### 2.2 明确非目标（YAGNI）
- 不在容器内执行 HBuilderX 安装与编译；
- 容器内不处理 HTTPS 证书（由外层网关/阿里云 SLB/CDN 统一负责 TLS 终止，容器仅监听 80 端口）；
- 不侵入修改现有核心业务与页面代码。

---

## 3. 架构与数据流设计

```text
[阶段 1: 宿主机 / CI 构建]
  pnpm build:test / pnpm build:prod
      │
      ├─ switch-env.mjs 切换环境变量 (.env.production.local)
      └─ build-h5.mjs 触发本地 HBuilderX CLI 原生秒级编译
      │
      ▼ 产物落盘
  unpackage/dist/build/web/ (index.html, assets/, static/)

[阶段 2: Docker 打包 (约 1-2 秒)]
  docker build -t unibestx-h5:prod .
      │
      ├─ 基于 nginx:alpine (~25MB)
      ├─ 检查产物防空校验 (test -f unpackage/dist/build/web/index.html)
      ├─ COPY unpackage/dist/build/web/ -> /usr/share/nginx/html
      └─ COPY deploy/nginx.conf -> /etc/nginx/templates/default.conf.template

[阶段 3: 容器运行时编排]
  docker compose up -d
      │
      ├─ Nginx 官方 entrypoint 自动 envsubst 替换 ${API_UPSTREAM}
      ├─ 静态资源 30 天缓存与 Gzip 压缩
      ├─ Hash 路由 try_files 兜底
      └─ /api 请求透明代理至对应后端服务
```

---

## 4. 文件与目录结构

| 文件路径 | 变更类型 | 职责描述 |
| :--- | :--- | :--- |
| `Dockerfile` | **新增** | 基于 `nginx:alpine` 的极简运行时镜像，拷贝静态产物和配置模板 |
| `.dockerignore` | **新增** | 构建上下文排除机制，白名单仅保留构建产物和 deploy 配置 |
| `deploy/nginx.conf` | **新增** | 支持 `envsubst` 的 Nginx 生产级配置模板（含 gzip、缓存、路由重定向、反向代理） |
| `docker-compose.yml` | **新增** | 容器编排文件，支持 `h5-test` 与 `h5-prod` 两个服务 |
| `deploy/.env.test` | **新增** | 测试环境 compose 配置（端口映射如 8081、测试 API 代理地址） |
| `deploy/.env.prod` | **新增** | 生产环境 compose 配置（端口映射如 8080、生产 API 代理地址） |
| `package.json` | **修改** | 注入快捷命令：`docker:build:test`, `docker:build:prod`, `docker:up:test`, `docker:up:prod` |
| `docs/guide/docker-deploy.md` | **新增** | 完备的 Docker 部署操作手册（本地调试、生产部署、反向代理配置） |
| `deploy/probe/` | **清理** | 废弃旧版 HBuilderX 容器探针目录，保持仓库整洁 |

---

## 5. 详细技术规范

### 5.1 Dockerfile 设计
```dockerfile
FROM nginx:alpine

# 1. 注入 nginx 配置模板，nginx 官方镜像启动时会自动用环境变量替换并生成 default.conf
COPY deploy/nginx.conf /etc/nginx/templates/default.conf.template

# 2. 拷贝静态文件
COPY unpackage/dist/build/web /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### 5.2 `.dockerignore` 设计
```gitignore
*
!deploy/
!deploy/nginx.conf
!unpackage/dist/build/web/
!unpackage/dist/build/web/**
```
仅将打包产物和 nginx 模板送入 Docker 构建上下文，使得 `transferring context` 小于 1MB，瞬间完成。

### 5.3 Nginx 配置规范 (`deploy/nginx.conf`)
- **Gzip 压缩**：开启常用文本与 JS/CSS 压缩；
- **Hash 路由容错**：`try_files $uri $uri/ /index.html;`；
- **静态资源缓存**：`/assets/` 设置 30 天缓存与 immutable；
- **动态反向代理**：配置 `location /api/ { proxy_pass ${API_UPSTREAM}; ... }`。

---

## 6. 验证方案
1. **前置构建验证**：运行 `pnpm build:prod`，确认本地生成 `unpackage/dist/build/web/index.html`。
2. **镜像打包验证**：运行 `docker build -t unibestx-h5:prod .`，耗时在 3 秒以内，镜像大小 < 40MB。
3. **容器运行验证**：启动容器，使用 curl 验证：
   - 根路径 `GET /` 返回 200 及 HTML；
   - 静态资源 `GET /assets/...` 返回对应缓存响应头；
   - API 代理路径转发预期。
