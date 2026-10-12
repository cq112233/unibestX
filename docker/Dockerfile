# syntax=docker/dockerfile:1
# ==========================================
# unibestX H5 生产部署轻量容器
# 基础镜像：nginx:alpine（原生支持 amd64 / arm64，镜像仅约 25MB）
# 注意：构建前请确保已在宿主机完成打包（pnpm build:test 或 pnpm build:prod）
#
# 用法（构建上下文 = 仓库根目录，下面的 COPY 路径也相对根目录）：
#   docker build -f docker/Dockerfile -t unibestx-h5:prod .
# 忽略规则在 docker/Dockerfile.dockerignore —— BuildKit 规定：Dockerfile 不在上下文
# 根目录时，忽略文件必须与 Dockerfile 同目录且以 Dockerfile 文件名开头才会生效。
# ==========================================

FROM nginx:alpine

LABEL maintainer="unibestX"
LABEL description="unibestX H5 生产部署轻量容器"

# 拷贝 Nginx 配置，容器启动时官方 entrypoint 自动由 envsubst 生成 /etc/nginx/conf.d/default.conf
COPY deploy/nginx.conf /etc/nginx/templates/default.conf.template

# 拷贝已在宿主机编译完成的静态资源
COPY unpackage/dist/build/web /usr/share/nginx/html

EXPOSE 80

STOPSIGNAL SIGQUIT

CMD ["nginx", "-g", "daemon off;"]
