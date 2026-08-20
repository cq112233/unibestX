/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file RichTextTypes.h
 * @brief RichText 引擎公开类型定义
 *
 * 包含所有对外暴露的类型：配置、回调、枚举等。
 */

#ifndef RICHTEXT_TYPES_H
#define RICHTEXT_TYPES_H

#include "RichTextExport.h"
#include <cstddef>
#include <cstdint>
#include <functional>
#include <string>
#include <vector>

namespace richtext {

// ============================================================================
// 回调类型定义
// ============================================================================

/**
 * @brief 内容高度变化回调
 * @param height 内容总高度（包含 padding，单位：逻辑像素 vp）
 */
using HeightChangedCallback = std::function<void(float height)>;

/**
 * @brief 链接点击回调
 * @param href 链接的 href 属性值
 */
using LinkClickedCallback = std::function<void(const std::string& href)>;

/**
 * @brief 图片点击回调
 * @param src 图片的 src 属性值
 */
using ImageClickedCallback = std::function<void(const std::string& src)>;

// ============================================================================
// 平台句柄类型
// ============================================================================

/**
 * @brief 平台原生句柄类型
 *
 * 用于在公开接口中描述平台相关资源，避免将 OHOS PixelMap 语义固定在
 * 跨平台 API 中。当前 OHOS 仍主要使用 OHOS_PIXELMAP，iOS 迁移将逐步
 * 接入 IOS_CGIMAGE / IOS_CVPIXELBUFFER。
 */
enum class NativeHandleType {
    NONE = 0,
    OHOS_PIXELMAP,
    IOS_CGIMAGE,
    IOS_CVPIXELBUFFER,
    RGBA_BITMAP,
    ANDROID_BITMAP
};

/**
 * @brief 图片请求回调的同步返回结果
 *
 * 平台层在收到图片请求时，如果本地有缓存的原生图像句柄，
 * 可以通过此结构体同步返回，引擎立即使用，跳过异步等待。
 */
struct RICHTEXT_API ImageRequestResult {
    /** 平台句柄类型 */
    NativeHandleType handleType = NativeHandleType::NONE;

    /** 平台原生图像句柄 */
    void* handle = nullptr;

    /**
     * 兼容字段：OHOS PixelMap 指针。
     *
     * 当前 OHOS 代码仍会填充此字段；新平台代码应优先使用 handle。
     */
    void* pixelmap = nullptr;   // OH_PixelmapNative*，nullptr 表示无缓存

    int width = 0;
    int height = 0;

    void* nativeHandle() const {
        return handle != nullptr ? handle : pixelmap;
    }

    bool hasCachedData() const {
        return nativeHandle() != nullptr && width > 0 && height > 0;
    }

    void setHandle(NativeHandleType type, void* nativeHandleValue) {
        handleType = type;
        handle = nativeHandleValue;
        if (type == NativeHandleType::OHOS_PIXELMAP) {
            pixelmap = nativeHandleValue;
        }
    }
};

/**
 * @brief 图片请求回调
 * @param url 需要下载的图片 URL
 * @return ImageRequestResult 如果平台层有缓存，同步返回平台图像句柄；否则返回空结果
 */
using ImageRequestCallback = std::function<ImageRequestResult(const std::string& url)>;

// ============================================================================
// 文本选区类型
// ============================================================================

/**
 * @brief 选区拖拽手柄标识
 *
 * 平台层在拖拽外置手柄时需要把当前被拖动的端点传回引擎。引擎可能在
 * updateSelection() 中根据文本方向和拖拽位置发生首尾翻转，并通过
 * SelectionUpdateResult::activeHandle 告知平台层继续追踪的新端点。
 */
enum class SelectionHandle {
    /** 未指定端点，updateSelection() 会按 END 处理。 */
    NONE = 0,
    /** 选区起始端点。 */
    START,
    /** 选区结束端点。 */
    END
};

/**
 * @brief 文本位置（UTF-16 offset）
 *
 * blockIndex 对应引擎内部布局后的文本块序号；utf16Offset 使用 SkParagraph
 * 同源的 UTF-16 偏移，避免中文、emoji 等多字节字符的 byte offset 歧义。
 *
 * 平台层不应持久化或自行构造该结构；跨平台移植时只需要通过公开 API
 * 使用 SelectionRect、SelectionHandle 和 selectedText。
 */
struct RICHTEXT_API TextPosition {
    /** 布局后的文本块索引，-1 表示无效位置。 */
    int blockIndex = -1;
    /** 文本块内 UTF-16 code unit 偏移。 */
    int utf16Offset = 0;
};

/**
 * @brief 文本选区范围
 *
 * 该结构是渲染库内部语义位置范围，start/end 不要求天然有序；
 * 绘制和导出文本前会先归一化。平台层通常不直接使用该结构。
 */
struct RICHTEXT_API SelectionRange {
    /** 选区起点。 */
    TextPosition start;
    /** 选区终点。 */
    TextPosition end;
    /** 是否存在有效选区。 */
    bool valid = false;
};

/**
 * @brief 选区矩形
 *
 * 对外返回时使用视口坐标；引擎内部绘制时使用内容坐标。
 * 矩形只描述选中文本或图片占用的高亮区域，不包含外置手柄、放大镜和菜单。
 */
struct RICHTEXT_API SelectionRect {
    /** 视口坐标系左边界，单位为 vp/逻辑像素。 */
    float left = 0.0f;
    /** 视口坐标系上边界，单位为 vp/逻辑像素。 */
    float top = 0.0f;
    /** 视口坐标系右边界，单位为 vp/逻辑像素。 */
    float right = 0.0f;
    /** 视口坐标系下边界，单位为 vp/逻辑像素。 */
    float bottom = 0.0f;
};

/**
 * @brief 选区复制内容
 *
 * 渲染库负责把当前选区序列化为跨平台数据，平台层负责写入系统剪贴板。
 * plainText 用作兜底；htmlFragment 保留文字内联样式、段落样式、列表、table/img
 * 等富文本结构，支持 HTML 的目标应用可优先使用它完成富文本粘贴。
 */
struct RICHTEXT_API SelectionCopyContent {
    /** UTF-8 纯文本兜底内容，图片会退化为 src 或 [image]。 */
    std::string plainText;
    /** HTML 内容，包含 fragment 标记、基础段落、文字/段落样式、列表、table 和 img src。 */
    std::string htmlFragment;
    /** 选区内是否包含 table。 */
    bool hasTable = false;
    /** 选区内是否包含图片占位。 */
    bool hasImage = false;

    bool empty() const {
        return plainText.empty() && htmlFragment.empty();
    }
};

/**
 * @brief 更新选区后的结果
 *
 * 用于平台层同步外置手柄状态：changed 决定是否重绘高亮，hasSelection 决定
 * 是否保留选中模式，handleFlipped/activeHandle 决定拖拽手柄是否需要切换端点。
 */
struct RICHTEXT_API SelectionUpdateResult {
    /** 本次调用是否改变了选区范围。 */
    bool changed = false;
    /** 更新后是否仍存在有效选区。 */
    bool hasSelection = false;
    /** 拖拽端点是否跨过另一端并发生首尾翻转。 */
    bool handleFlipped = false;
    /** 更新后应继续追踪的活动手柄。 */
    SelectionHandle activeHandle = SelectionHandle::NONE;

    /** 兼容 bool 判断，等价于 changed。 */
    operator bool() const { return changed; }
};

// ============================================================================
// 渲染模式
// ============================================================================

/**
 * @brief 渲染模式枚举
 */
enum class RenderMode {
    /**
     * 直接渲染模式（遗留，仅 HarmonyOS NativeWindow/XComponent 使用）
     *
     * 当前 iOS 移植不支持此模式，请优先使用 TILE_POOL。
     */
    DIRECT,

    /**
     * Tile 分片渲染模式
     * 渲染到固定数量的 PixelMap，适用于 Custom Draw
     */
    TILE_POOL
};

// ============================================================================
// 样式配置
// ============================================================================

/**
 * @brief 富文本样式配置
 *
 * 用于配置字体、颜色、间距等全局样式。
 * 可通过 setStyleConfig() 设置，影响后续的 HTML 渲染。
 * 
 * ⚠️ 重要：StyleConfig 中的尺寸单位均为**逻辑像素**（符合 CSS 习惯）。
 * 引擎会根据 EngineConfig.devicePixelRatio 自动转换为物理像素。
 * 
 * 示例：
 *   - baseFontSize = 16.0（逻辑像素）
 *   - devicePixelRatio = 3.0
 *   - 实际渲染 = 16 × 3 = 48 物理像素
 */
struct RICHTEXT_API StyleConfig {
    // ========== 字体配置（逻辑像素）==========

    /** 默认字体族列表（按优先级排序） */
    std::vector<std::string> fontFamilies = {
        "HarmonyOS Sans SC", "Noto Sans CJK", "sans-serif"
    };

    /** 等宽字体族列表（用于 <code>, <pre> 等） */
    std::vector<std::string> monospaceFamilies = {
        "Menlo", "Consolas", "monospace"
    };

    /**
     * 基础字号（逻辑像素）
     * 
     * 默认 16.0，在 DPR=3.0 时渲染为 48 物理像素。
     * 相当于 CSS 中的 font-size: 16px。
     */
    float baseFontSize = 16.0f;

    // ========== 行高配置 ==========

    /**
     * 行高值。
     *
     * 对 HTML 渲染，若仍使用引擎默认值 `1.5x`，解析阶段会按浏览器
     * `line-height: normal` 处理，以保持与 WebView 默认排版一致。
     * 调用方显式修改此值后，将按显式配置生效。
     */
    float lineHeight = 1.5f;

    /** 行高模式：true = 倍数，false = 固定逻辑像素值 */
    bool lineHeightIsMultiplier = true;

    /**
     * 是否覆盖底层默认行高。
     *
     * true  = 使用 lineHeight 配置；
     * false = 等价于 CSS `line-height: normal`，不强制 Skia TextStyle height。
     */
    bool lineHeightOverride = true;

    /**
     * HTML 默认样式模式。
     *
     * true  = 贴近业务 rich-text Web 模式：默认 line-height 沿用 1.5，
     *         同时清除块级标签的 UA 默认 margin。
     * false = 贴近浏览器默认 HTML：保留块级默认 margin，且默认 1.5x
     *         会被解释为 `line-height: normal`。
     */
    bool useBusinessHtmlDefaults = true;

    // ========== 颜色配置 (ARGB 格式) ==========

    /** 默认文字颜色 */
    uint32_t defaultTextColor = 0xFF000000;

    /**
     * 全局背景色
     *
     * 默认透明 (0x00000000)。
     *
     * 引擎在渲染每个 Tile 前会使用此颜色进行清理，确保滚动时不产生重影。
     */
    uint32_t backgroundColor = 0x00000000;

    /** 链接颜色 */
    uint32_t defaultLinkColor = 0xFF266BD8;

    /** 行内代码背景色 */
    uint32_t codeBackgroundColor = 0xFFF0F0F0;

    /** 代码块背景色 */
    uint32_t preBackgroundColor = 0xFFF5F5F5;

    /** 文本选区高亮色 */
    uint32_t selectionColor = 0x663399FF;

    /**
     * 当前宿主/系统是否偏好暗色主题。
     *
     * 平台层可在系统主题变化时更新该值；HTML 中的
     * `@media (prefers-color-scheme: dark)` 和 CSS system colors 会据此解析。
     */
    bool prefersDarkTheme = false;

    /**
     * 是否允许算法变暗。
     *
     * 当 prefersDarkTheme=true 且内容未通过 `color-scheme` 或暗色媒体查询声明
     * 自身支持暗色时，引擎会对显式写死的浅色文字/背景/边框做 WebView 风格的
     * 暗色适配。
     */
    bool algorithmicDarkeningAllowed = false;

    // ========== 间距配置（逻辑像素）==========

    /**
     * 内边距（内容与视口边缘的距离，逻辑像素）
     * 
     * 默认 8.0，在 DPR=3.0 时为 24 物理像素。
     */
    float padding = 0.0f;

    /**
     * 段落间距（逻辑像素）
     * 
     * 默认 6.0，在 DPR=3.0 时为 18 物理像素。
     */
    float paragraphSpacing = 6.0f;

    /**
     * 列表缩进（每级，逻辑像素）
     * 
     * 默认 32.0（约 2 个汉字宽度），在 DPR=3.0 时为 96 物理像素。
     */
    float listIndent = 32.0f;

    // ========== 代码样式 ==========

    /** code 字号相对于基础字号的比例 */
    float codeFontSizeRatio = 0.9f;

    /**
     * pre 块内边距（逻辑像素）
     * 
     * 默认 3.0，在 DPR=3.0 时为 9 物理像素。
     */
    float prePadding = 0.0f;

    /**
     * pre 块圆角半径（逻辑像素）
     * 
     * 默认 2.0，在 DPR=3.0 时为 6 物理像素。
     */
    float preBorderRadius = 2.0f;

    // ========== 图片配置 ==========

    /** 图片加载失败时显示的文字 */
    std::string imageLoadFailedText = "图片加载失败";

    /** alt 文字字号相对于内容字号的比例 */
    float imageAltFontSizeRatio = 0.5f;

    /** 是否显示图片加载中的占位符（默认：false 不显示） */
    bool showImageLoadingPlaceholder = false;
};

// ============================================================================
// 引擎配置
// ============================================================================

/**
 * @brief RichTextEngine 初始化配置
 *
 * ========== 虚拟像素模式 ==========
 * 所有尺寸单位均为**逻辑像素**（vp，与 HarmonyOS vp 单位一致）。
 * 引擎内部通过 Canvas scale(dpr, dpr) 自动处理 DPR 转换。
 *
 * 优点：
 * - 平台层代码无需到处做 vp2px/px2vp 转换
 * - 接口与 CSS/HarmonyOS 坐标系统一致
 * - 高度回调、滚动、点击坐标都是 vp
 */
struct RICHTEXT_API EngineConfig {
    /** 渲染模式 */
    RenderMode renderMode = RenderMode::TILE_POOL;

    /** 视口宽度（逻辑像素，vp） */
    int viewportWidth = 0;

    /** 视口高度（逻辑像素，vp） */
    int viewportHeight = 0;

    /**
     * 设备像素比（Device Pixel Ratio）
     *
     * 用于 Canvas scale 和 PixelMap 物理尺寸计算。
     * - HarmonyOS 设备通常为 2.0 ~ 3.5
     * - 默认值 3.0 适用于大多数 HarmonyOS 设备
     * - PixelMap 实际尺寸 = 逻辑像素 × DPR
     */
    float devicePixelRatio = 3.0f;

    // ===== Tile 模式配置 =====

    /** 每个 Tile 的高度（逻辑像素，vp） */
    int tileHeight = 170;

    /** 上下缓冲 Tile 数量 */
    int bufferCount = 1;

    /** 最大槽位数量（0 = 自动计算，根据内容动态分配） */
    int maxSlotCount = 0;

    /**
     * iOS Tile 原生句柄类型偏好。
     *
     * - iOS 默认使用 `IOS_CVPIXELBUFFER`
     * - `IOS_CGIMAGE` 保留给调试/兼容回退路径
     * - 其他平台当前忽略此字段
     */
    NativeHandleType tileHandleType = NativeHandleType::IOS_CVPIXELBUFFER;

    // ===== Direct 模式配置（遗留，仅 DIRECT 使用） =====

    /** NativeWindow 指针（DIRECT 模式必需；iOS 当前不使用） */
    void* nativeWindow = nullptr;

    /** 是否禁用 VSync（仅 DIRECT 模式生效） */
    bool disableVSync = false;
};

// ============================================================================
// Tile 槽位信息
// ============================================================================

/**
 * @brief Tile 槽位信息
 *
 * 用于 Tile 模式下的 Custom Draw，包含平台原生图像句柄及其位置信息。
 *
 * ========== 虚拟像素模式 ==========
 * y 和 height 使用逻辑像素（vp）。
 * Tile 图像的物理尺寸 = 逻辑尺寸 × DPR。
 *
 * 绘制时需要转换为物理像素：
 *   dstY = slot.y * dpr
 *   dstHeight = slot.height * dpr
 */
struct RICHTEXT_API TileSlot {
    /** 槽位索引 */
    int slotIndex = 0;

    /** 当前 Tile 索引 */
    int tileIndex = 0;

    /** 当前显示内容版本，槽位重绘后递增 */
    int version = 0;

    /** Y 坐标（内容坐标系，逻辑像素 vp） */
    int y = 0;

    /** 高度（逻辑像素，vp） */
    int height = 0;

    /** 平台句柄类型 */
    NativeHandleType handleType = NativeHandleType::NONE;

    /** 平台原生图像句柄 */
    void* handle = nullptr;

    /**
     * 兼容字段：OHOS PixelMap 指针。
     *
     * 当前 OHOS 代码仍会填充此字段；新平台代码应优先使用 handle。
     */
    void* pixelmap = nullptr;

    void* nativeHandle() const {
        return handle != nullptr ? handle : pixelmap;
    }
};

// ============================================================================
// 性能统计
// ============================================================================

/**
 * @brief Tile Pool 性能统计
 */
struct RICHTEXT_API TilePoolStats {
    int totalTiles = 0;         // 内容总 Tile 数
    int visibleTiles = 0;       // 可见 Tile 数
    int renderedTiles = 0;      // 本次渲染的 Tile 数
    int cachedTiles = 0;        // 缓存命中的 Tile 数
    double lastRenderTimeMs = 0; // 上次渲染耗时 (ms)

    // ========== 内存统计 ==========
    int slotCount = 0;              // 当前槽位数
    int minSlotCount = 0;           // 当前内容高度下的最小动态槽位数
    int maxSlotCount = 0;           // 最大槽位数
    size_t singleSlotMemory = 0;    // 当前平均单槽位内存 (bytes)
    size_t totalSlotMemory = 0;     // 当前总槽位内存 (bytes)
    size_t maxSlotMemory = 0;       // 当前策略下的最大总槽位内存 (bytes)
};

/**
 * @brief 首屏性能统计
 *
 * 统一记录从 Engine 创建到首屏显示完成的各阶段耗时。
 * 时间线：
 *   Engine.create() 开始
 *   ├── 字体初始化（FontCollection，首次或从缓存）
 *   ├── SkiaContext 初始化（EGL/GPU）
 *   ├── TilePool 初始化（Slot 资源创建）
 *   ├── setHtmlContent() 开始
 *   │   ├── HTML 解析
 *   │   └── 首次布局
 *   ├── setScrollY(0) 首批渲染
 *   │   ├── Tile 绘制
 *   │   └── GPU flush
 *   └── onDraw() 完成（外部回调）
 *   首屏完成
 */
struct RICHTEXT_API FirstScreenMetrics {
    // ========== 时间点 (绝对时间，ms) ==========
    double engineCreateStart = 0;     // Engine.create() 开始
    double fontInitEnd = 0;           // 字体初始化完成（FontCollection）
    double contextInitEnd = 0;        // SkiaContext 初始化完成（EGL/GPU）
    double tilePoolInitEnd = 0;       // TilePool 初始化完成
    double htmlSetStart = 0;          // setHtmlContent() 开始
    double htmlParseEnd = 0;          // HTML 解析完成
    double layoutEnd = 0;             // 首次布局完成
    double firstRenderStart = 0;      // 首批渲染开始 (setScrollY)
    double firstRenderEnd = 0;        // 首批渲染完成
    double firstDrawEnd = 0;          // 首次 onDraw 完成（外部通知）

    // ========== 附加信息 ==========
    int firstRenderTileCount = 0;     // 首批渲染的 Tile 数
    int slotCount = 0;                // Slot 数量
    size_t totalMemoryBytes = 0;      // 总内存占用 (bytes)
    bool isZeroCopyMode = false;      // 是否零拷贝模式
    bool fontFromCache = false;       // 字体是否从缓存获取

    // ========== 状态标记 ==========
    bool isFirstRenderDone = false;   // 首批渲染是否完成
    bool isFirstDrawDone = false;     // 首次 onDraw 是否完成

    // ========== 阶段耗时计算 (ms) ==========

    /** 字体初始化耗时 */
    double getFontInitTime() const {
        return fontInitEnd > 0 ? fontInitEnd - engineCreateStart : 0;
    }

    /** SkiaContext 初始化耗时（EGL/GPU） */
    double getContextInitTime() const {
        return contextInitEnd > 0 ? contextInitEnd - fontInitEnd : 0;
    }

    /** TilePool 初始化耗时 */
    double getTilePoolInitTime() const {
        return tilePoolInitEnd > 0 ? tilePoolInitEnd - contextInitEnd : 0;
    }

    /** 初始化总耗时 (Font + Context + TilePool) */
    double getInitTotalTime() const {
        return tilePoolInitEnd > 0 ? tilePoolInitEnd - engineCreateStart : 0;
    }

    /** HTML 解析耗时 */
    double getHtmlParseTime() const {
        return htmlParseEnd > 0 ? htmlParseEnd - htmlSetStart : 0;
    }

    /** 首次布局耗时 */
    double getLayoutTime() const {
        return layoutEnd > 0 ? layoutEnd - htmlParseEnd : 0;
    }

    /** 首批渲染耗时 */
    double getFirstRenderTime() const {
        return firstRenderEnd > 0 ? firstRenderEnd - firstRenderStart : 0;
    }

    /** 从 Engine 创建到首批渲染完成 */
    double getTimeToFirstRender() const {
        return firstRenderEnd > 0 ? firstRenderEnd - engineCreateStart : 0;
    }

    /** 从 Engine 创建到首次 onDraw 完成（用户真正看到画面） */
    double getTimeToFirstDraw() const {
        return firstDrawEnd > 0 ? firstDrawEnd - engineCreateStart : 0;
    }

    /** 从 setHtmlContent 到首批渲染完成 */
    double getContentToRenderTime() const {
        return firstRenderEnd > 0 && htmlSetStart > 0 ? firstRenderEnd - htmlSetStart : 0;
    }
};

} // namespace richtext

#endif // RICHTEXT_TYPES_H
