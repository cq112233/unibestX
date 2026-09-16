# syntax=docker/dockerfile:1
# ==========================================
# unibestX H5 生产部署轻量容器
# 基础镜像：nginx:alpine（原生支持 amd64 / arm64，镜像仅约 25MB）
# 注意：构建前请确保已在宿主机完成打包（pnpm build:test 或 pnpm build:prod）
# ==========================================

FROM nginx:alpine

LABEL maintainer="unibestX"
LABEL description="unibestX H5 生产部署轻量容器"

# 拷贝 Nginx 配置模板，容器启动时官方 entrypoint 自动由 envsubst 生成 /etc/nginx/conf.d/default.conf
COPY deploy/nginx.conf.template /etc/nginx/templates/default.conf.template

# 拷贝已在宿主机编译完成的静态资源
COPY unpackage/dist/build/web /usr/share/nginx/html

EXPOSE 80

STOPSIGNAL SIGQUIT

CMD ["nginx", "-g", "daemon off;"]
