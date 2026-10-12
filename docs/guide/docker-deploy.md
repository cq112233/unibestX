# H5 端 Docker 部署手册

unibestX H5 采用业界标准的**「宿主机构建 + Nginx:alpine 轻量容器运行」**交付方案。

- ⚡️ **秒级打包**：Docker 镜像构建仅需约 1~2 秒。
- 📦 **极致轻量**：基于 `nginx:alpine`，最终镜像体积仅约 **25MB**。
- 🌍 **原生多架构**：原生支持 `linux/amd64` 与 Apple Silicon `linux/arm64`，无转译损耗。
- 🔄 **动态反代**：支持容器启动时通过环境变量动态注入 `${API_UPSTREAM}` 后端代理地址。

---

## 目录结构

```text
├── docker/                        # 容器化部署配置
│   ├── Dockerfile                 # Nginx 轻量运行镜像定义
│   ├── Dockerfile.dockerignore    # 上下文白名单（过滤无关源码与依赖）
│   └── docker-compose.yml         # h5-test 与 h5-prod 服务编排
└── deploy/
    ├── nginx.conf                 # Nginx 配置文件（同时支持 Docker 动态反代与裸机部署）
    ├── .env.test                  # 测试服环境变量（端口、API 上游）
    └── .env.prod                  # 生产服环境变量（端口、API 上游）
```

> **关于 `.dockerignore`**：Docker 只在「构建上下文根目录」或「与 Dockerfile 同目录且以 Dockerfile 文件名开头」的位置读取忽略文件。本项目构建上下文是仓库根目录（`COPY` 依赖 `unpackage/dist/build/web`），因此忽略文件必须叫 `docker/Dockerfile.dockerignore`——叫 `docker/.dockerignore` 会**静默失效**，导致 `node_modules` 被塞进构建上下文。

---

## 前置要求

1. **宿主机开发环境**：
   - Node.js 20+ 及 pnpm
   - HBuilderX（macOS 放在 `/Applications/HBuilderX.app` 或 Linux/Windows 对应安装目录）
2. **Docker 环境**：
   - 已安装并启动 Docker Desktop 或 Docker Engine

---

## 快速上手（本地 / CI）

项目在 `package.json` 中已内置快捷命令：

### 1. 测试环境打包与启动

```bash
# 一键完成：环境变量切换 -> 本地 H5 编译 -> Docker 镜像构建
pnpm docker:build:test

# 启动测试环境容器（后台运行）
pnpm docker:up:test
```

启动成功后，浏览器访问：**`http://localhost:8081`**

### 2. 生产环境打包与启动

```bash
# 一键完成：环境变量切换 -> 本地 H5 编译 -> Docker 镜像构建
pnpm docker:build:prod

# 启动生产环境容器（后台运行）
pnpm docker:up:prod
```

启动成功后，浏览器访问：**`http://localhost:8080`**

### 3. 停止与清理容器

```bash
# 单独停止服务（不删除容器）
pnpm docker:stop:test   # 停止测试服容器
pnpm docker:stop:prod   # 停止生产服容器

# 单独停止并删除指定容器
pnpm docker:down:test   # 下线测试服容器
pnpm docker:down:prod   # 下线生产服容器

# 全部停止并销毁网络与容器
pnpm docker:down
```

---

## 环境变量配置

在 `deploy/.env.test` 和 `deploy/.env.prod` 中可自定义配置：

| 变量名 | 默认值（测试 / 生产） | 说明 |
| :--- | :--- | :--- |
| `PORT` | `8081` / `8080` | 宿主机映射的 Web 服务端口 |
| `API_UPSTREAM` | `https://ukw0y1.laf.run` | 后端业务接口代理地址，容器内 `/api/` 会转发至该地址 |

> **提示**：修改 `.env` 变量后，直接执行 `docker compose -f docker/docker-compose.yml up -d` 即可生效，**无需重新构建镜像**（Nginx 启动时会自动由 `envsubst` 注入）。
>
> 下文所有 `docker compose` 命令均需带 `-f docker/docker-compose.yml`（或在 `docker/` 目录内执行），否则 Compose 找不到编排文件。

---

## 生产服务器部署指南

### 方案 A：CI/CD 镜像推送（推荐）

1. 在 CI 节点（具备 Node + HBuilderX 环境）执行：

   ```bash
   pnpm build:prod
   # 构建上下文是仓库根目录，注意显式指定 Dockerfile 路径
   docker build -f docker/Dockerfile -t your-registry.com/unibestx-h5:v1.0.0 .
   docker push your-registry.com/unibestx-h5:v1.0.0
   ```

2. 目标服务器只需准备 `docker/docker-compose.yml` 与 `deploy/.env.prod`（保持这一层目录结构，编排文件里的 `../deploy/` 相对路径才能解析），直接拉取镜像即可：

   ```bash
   docker compose -f docker/docker-compose.yml pull
   docker compose -f docker/docker-compose.yml up -d h5-prod
   ```

### 方案 B：代码库直接上线

若服务器已挂载或安装好环境：

```bash
git pull
pnpm docker:build:prod
pnpm docker:up:prod
```

---

## 常用排查与运维命令

以下命令均在**仓库根目录**执行，并显式指定编排文件路径：

```bash
# 查看正在运行的容器
docker compose -f docker/docker-compose.yml ps

# 查看 Nginx 实时访问与错误日志
docker compose -f docker/docker-compose.yml logs -f h5-prod

# 进入容器检查生成的 Nginx 配置
docker compose -f docker/docker-compose.yml exec h5-prod cat /etc/nginx/conf.d/default.conf

# 测试配置生效情况
curl -I http://localhost:8080/
```
