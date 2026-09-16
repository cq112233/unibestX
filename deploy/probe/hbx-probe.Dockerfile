# syntax=docker/dockerfile:1
# ==========================================
# HBuilderX Linux CLI 容器内可行性探针
#
# 用途：在编写完整 Dockerfile 前，验证 HBuilderX 能在 linux/amd64 容器内启动并就绪。
#       保留此文件作为「HBuilderX 升级后回归验证」工具。
#
# 用法：docker build -f deploy/probe/hbx-probe.Dockerfile -t hbx-probe .
#
# 背景：HBuilderX 官方只提供 linux_full_x64 包（无 ARM64 版），
#       因此在 Apple Silicon 宿主上必须钉死 --platform=linux/amd64。
#
# 实测结论（2026-09-16，Apple M5 + Rosetta，数据见
# docs/superpowers/plans/docker-build-baseline.txt）：
#   1) cli 与主程序 HBuilderX 的第三方系统依赖很少，只需 6 个小包（ldd 实测得出），
#      不需要 xvfb / libgtk-3-0；显式指定 QT_QPA_PLATFORM=offscreen 即可无头启动；
#   2) `cli --help` 在 HBuilderX 未启动时也返回 0（打印「未检测到已打开的HBuilderX」），
#      不能当就绪判据；`cli ver` 的退出码同样恒为 0，必须用输出里的版本号判断；
#   3) `cli open` 会派生出常驻的 HBuilderX 子进程并继承 stdout，
#      故此处把它的输出重定向到文件，避免 buildkit 因日志管道不关闭而卡死。
# ==========================================
FROM --platform=linux/amd64 ubuntu:20.04

ARG HBX_VERSION=5.24.2026081301
ENV DEBIAN_FRONTEND=noninteractive
ENV HBX_HOME=/opt/hbuilderx/HBuilderX
# HBuilderX 是 Qt5 Widgets 程序。容器内没有 X 显示，用 offscreen 平台插件无头运行。
ENV QT_QPA_PLATFORM=offscreen

# 系统依赖由 ldd 实测得出，刻意不装 xvfb / libgtk-3-0（实测不需要）：
#   libglib2.0-0   -> libglib-2.0.so.0（cli 唯一缺失项）
#   libfontconfig1 -> libfontconfig.so.1
#   libfreetype6   -> libfreetype.so.6
#   libpng16-16    -> libpng16.so.16
#   libharfbuzz0b  -> libharfbuzz.so.0
#   libgl1         -> libGL.so.1（主程序 NEEDED，会连带 libgl1-mesa-dri ~388MB）
#
# 走 USTC 镜像源：容器内直连 archive.ubuntu.com 经宿主代理时频繁
# 「Ign / Connection failed」重试（实测 apt 曾耗时 373s，另有一次 16min 超时），
# 换 USTC 后降到约 80s。
RUN sed -i 's|http://archive.ubuntu.com/ubuntu|http://mirrors.ustc.edu.cn/ubuntu|g; \
            s|http://security.ubuntu.com/ubuntu|http://mirrors.ustc.edu.cn/ubuntu|g' \
      /etc/apt/sources.list \
    && ok=0; for i in 1 2 3 4 5; do \
         if apt-get update -o Acquire::Retries=5 \
            && apt-get install -y --no-install-recommends -o Acquire::Retries=5 --fix-missing \
                 ca-certificates curl tar \
                 libglib2.0-0 libfontconfig1 libfreetype6 libpng16-16 libharfbuzz0b libgl1; \
         then ok=1; break; fi; \
         echo ">>> apt 第 $i 次失败，5s 后重试"; sleep 5; \
       done; \
    [ "$ok" = 1 ] || { echo ">>> apt 全部重试失败"; exit 1; }; \
    rm -rf /var/lib/apt/lists/*

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

# ---------- 阶段 2：动态库齐备性 ----------
# 这一步能过，说明 amd64 二进制的第三方系统依赖已满足，二进制可在容器内装载
# （arm64 宿主上靠 Rosetta/QEMU 执行 amd64 指令）。
# 只筛「第三方系统库」：libQt5* / libicu* / libpcre2* 都是 HBuilderX 自带的，
# 从外层 shell 跑 ldd 时它们不在 RPATH 上，会误报为 not found，故排除。
RUN echo "=== [2/3] 检查第三方系统库是否齐全 ===" \
    && missing="$({ ldd "${HBX_HOME}/HBuilderX" 2>&1; ldd "${HBX_HOME}/cli" 2>&1; \
                      ldd "${HBX_HOME}/platforms/libqoffscreen.so" 2>&1; } \
                    | grep -a 'not found' | grep -av 'libQt5\|libicu\|libpcre2' || true)" \
    && if [ -n "$missing" ]; then echo ">>> 仍然缺失："; echo "$missing"; exit 1; fi \
    && echo ">>> 第三方系统库齐全"

# ---------- 阶段 3：关键验证 —— 启动 HBuilderX 并确认就绪 ----------
RUN echo "=== [3/3] cli open → 轮询就绪 → cli ver → app quit ===" \
    && "${HBX_HOME}/cli" open > /tmp/cli-open.log 2>&1 \
    && s0=$(date +%s) \
    && ready=0 \
    && for i in $(seq 1 60); do \
         if "${HBX_HOME}/cli" ver 2>&1 | grep -qE '[0-9]+\.[0-9]+\.[0-9]+'; then \
           ready=1; echo ">>> HBuilderX 已就绪，轮询耗时 $(( $(date +%s) - s0 ))s（第 $i 轮）"; break; \
         fi; \
         sleep 2; \
       done \
    && { [ "$ready" = 1 ] || { echo ">>> 就绪轮询超时（120s）。cli open 输出："; cat /tmp/cli-open.log; exit 1; }; } \
    && echo ">>> cli ver 输出：$("${HBX_HOME}/cli" ver 2>&1)" \
    && "${HBX_HOME}/cli" project list \
    && "${HBX_HOME}/cli" app quit \
    && sleep 2 \
    && { ! pgrep -x HBuilderX >/dev/null || { echo ">>> app quit 后仍有 HBuilderX 进程残留"; exit 1; }; } \
    && echo ">>> 探针全部通过"
