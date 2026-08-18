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
 * @file RichTextEngine.h
 * @brief RichText 渲染引擎统一入口
 *
 * 这是 librichtext.so 的唯一公开接口。
 *
 * ## 功能概述
 *
 * - HTML 富文本解析和渲染
 * - 支持 TilePool 渲染模式；Direct 为遗留 HarmonyOS NativeWindow 模式
 * - 图片异步加载
 * - 链接和图片点击交互
 *
 * ## 初始化模式对比
 *
 * | 模式     | API                                     | 首屏速度              | 适用场景           |
 * |---------|-----------------------------------------|----------------------|-------------------|
 * | 自动模式 | setHtmlContent() / setMarkdownContent() | 快（长内容会自动优化） | 默认推荐           |
 *
 * ## 模式一：自动模式（默认，推荐）
 *
 * ```cpp
 * #include <richtext/RichTextEngine.h>
 *
 * // 1. 创建引擎
 * richtext::EngineConfig config;
 * config.renderMode = richtext::RenderMode::TILE_POOL;
 * config.viewportWidth = 1080;
 * config.viewportHeight = 2400;
 * config.tileHeight = 512;
 *
 * auto engine = richtext::RichTextEngine::create(config);
 *
 * // 2. 设置回调
 * engine->setHeightChangedCallback([](float height) {
 *     // 更新容器高度
 * });
 *
 * // 3. 设置内容
 * // - 短内容：通常同步完成解析和布局
 * // - 长内容：内部可能自动切到“首屏优先 + 异步补全”
 * engine->setHtmlContent("<h1>Hello</h1><p>World</p>");
 *
 * // 4. 立即可用
 * engine->setScrollY(0);
 * auto slots = engine->getTileSlots();
 * ```
 *
 * ## 模式二：长内容自动首屏优先（内部策略）
 *
 * 当 HTML / Markdown 内容较长时，库内部会自动切到“首屏优先 + 异步补全”策略，
 * 尽量让首屏文字和首批图片先完成同步解析，剩余内容再在首屏渲染后补全。
 *
 * ```cpp
 * #include <richtext/RichTextEngine.h>
 *
 * // 1. 创建引擎
 * richtext::EngineConfig config;
 * config.renderMode = richtext::RenderMode::TILE_POOL;
 * config.viewportWidth = 1080;
 * config.viewportHeight = 2400;
 *
 * auto engine = richtext::RichTextEngine::create(config);
 *
 * // 2. 设置回调（异步布局完成后会回调更新高度）
 * engine->setHeightChangedCallback([](float height) {
 *     // 更新容器高度
 * });
 *
 * // 3. 直接设置长内容
 * //    首屏优先窗口和图文同出策略都由 native 库内部决定
 * engine->setHtmlContent(html);
 *
 * // 4. 首屏已就绪，立即可渲染
 * engine->setScrollY(0);
 * auto slots = engine->getTileSlots();
 * ```
 *
 * ## Custom Draw 绘制示例
 *
 * ```cpp
 * void onCustomDraw(OH_Drawing_Canvas* canvas) {
 *     auto slots = engine->getTileSlots();
 *     for (const auto& slot : slots) {
 *         if (slot.nativeHandle()) {
 *             // OHOS 兼容示例：将平台句柄视为 PixelMap
 *             auto* drawingPixelMap = OH_Drawing_PixelMapGetFromOhPixelMapNative(
 *                 static_cast<OH_PixelmapNative*>(slot.nativeHandle()));
 *
 *             // 定义源和目标区域
 *             OH_Drawing_Rect* srcRect = OH_Drawing_RectCreate(0, 0, width, slot.height);
 *             OH_Drawing_Rect* dstRect = OH_Drawing_RectCreate(0, slot.y, width, slot.y + slot.height);
 *
 *             // 绘制
 *             OH_Drawing_CanvasDrawPixelMapRect(canvas, drawingPixelMap, srcRect, dstRect, nullptr);
 *
 *             // 释放
 *             OH_Drawing_RectDestroy(srcRect);
 *             OH_Drawing_RectDestroy(dstRect);
 *         }
 *     }
 * }
 * ```
 */

#ifndef RICHTEXT_ENGINE_H
#define RICHTEXT_ENGINE_H

#include "RichTextExport.h"
#include "RichTextTypes.h"
#include <memory>
#include <string>
#include <vector>

namespace richtext {

/**
 * @brief RichText 渲染引擎
 *
 * 提供 HTML 富文本的解析、布局、渲染和交互能力。
 * 使用工厂方法 create() 创建实例。
 */
class RICHTEXT_API RichTextEngine {
public:
    /**
     * @brief 创建引擎实例
     *
     * @param config 引擎配置
     * @return 成功返回引擎实例，失败返回 nullptr
     */
    static std::unique_ptr<RichTextEngine> create(const EngineConfig& config);

    virtual ~RichTextEngine() = default;

    // ========================================================================
    // 内容管理
    // ========================================================================

    /**
     * @brief 设置 HTML 内容
     *
     * 解析 HTML 并触发布局。支持的标签包括：
     * - 文本: <p>, <span>, <strong>, <em>, <u>, <s>, <code>
     * - 标题: <h1> ~ <h6>
     * - 列表: <ul>, <ol>, <li>
     * - 链接: <a href="...">
     * - 图片: <img src="..." width="..." height="...">
     * - 换行: <br>
     * - 分隔: <hr>
     *
     * 对于短内容，通常会同步完成解析和布局；
     * 对于长内容，库内部可能自动切换到“首屏优先 + 异步补全”策略，
     * 优先让首屏文字和图片尽快可见，剩余内容再通过 heightChangedCallback 通知补全结果。
     *
     * @param html HTML 内容字符串
     */
    virtual void setHtmlContent(const std::string& html) = 0;

    /**
     * @brief 设置样式配置
     *
     * @param config 样式配置
     *
     * @note 建议在 setHtmlContent() 之前调用
     */
    virtual void setStyleConfig(const StyleConfig& config) = 0;

    /**
     * @brief 获取当前样式配置
     */
    virtual StyleConfig getStyleConfig() const = 0;

    // ========================================================================
    // 视口与滚动
    // ========================================================================

    /**
     * @brief 设置视口大小
     *
     * @param width 宽度（像素）
     * @param height 高度（像素）
     */
    virtual void setViewportSize(int width, int height) = 0;

    /**
     * @brief 设置滚动位置
     *
     * @param scrollY 滚动偏移（像素），0 表示顶部
     * @return 渲染的 Tile 数量（仅 TilePool 模式有效）
     */
    virtual int setScrollY(float scrollY) = 0;

    /**
     * @brief 获取当前滚动位置
     */
    virtual float getScrollY() const = 0;

    /**
     * @brief 获取最大可滚动距离
     */
    virtual float maxScrollY() const = 0;

    // ========================================================================
    // Tile 模式接口
    // ========================================================================

    /**
     * @brief 获取当前可见的 Tile 槽位列表
     *
     * 返回按 Y 坐标排序的 TileSlot 列表，用于 Custom Draw。
     *
     * @return Tile 槽位列表
     */
    virtual std::vector<TileSlot> getTileSlots() const = 0;

    /**
     * @brief 获取 Tile 槽位（viewport-aware 版本）
     *
     * 原子操作：根据指定的视口位置重新计算槽位分配并返回。
     * 位置更新和渲染在同一操作中完成，避免白屏问题。
     *
     * @param scrollY 视口滚动位置
     * @return Tile 槽位列表（按 Y 坐标排序）
     */
    virtual std::vector<TileSlot> getTileSlots(float scrollY) = 0;

    /**
     * @brief 获取槽位数量
     */
    virtual int getSlotCount() const = 0;

    /**
     * @brief 标记所有 Tile 需要重绘
     */
    virtual void markAllTilesDirty() = 0;

    /**
     * @brief 获取 Tile Pool 性能统计
     */
    virtual TilePoolStats getTilePoolStats() const = 0;

    // ========================================================================
    // 交互处理
    // ========================================================================

    /**
     * @brief 处理点击事件
     *
     * @param x 点击位置 X 坐标（相对于视口）
     * @param y 点击位置 Y 坐标（相对于视口）
     * @return true 如果点击命中了可交互元素
     */
    virtual bool handleClick(float x, float y) = 0;

    // ========================================================================
    // 回调设置
    // ========================================================================

    /**
     * @brief 设置内容高度变化回调
     *
     * @param callback 回调函数，参数为总高度（包含 padding）
     */
    virtual void setHeightChangedCallback(HeightChangedCallback callback) = 0;

    /**
     * @brief 设置链接点击回调
     */
    virtual void setLinkClickedCallback(LinkClickedCallback callback) = 0;

    /**
     * @brief 设置图片点击回调
     */
    virtual void setImageClickedCallback(ImageClickedCallback callback) = 0;

    /**
     * @brief 设置图片请求回调
     *
     * 当引擎需要加载网络图片时触发。
     * 平台层应下载图片并调用 onImageHandleReady() / onImagePixelmapReady() 或 onImageFailed()。
     */
    virtual void setImageRequestCallback(ImageRequestCallback callback) = 0;

    // ========================================================================
    // 图片加载
    // ========================================================================

    /**
     * @brief 通知图片数据就绪
     *
     * @deprecated 所有图片解码已移至平台层，请使用 onImagePixelmapReady() 传递 PixelMap。
     *
     * @param url 图片 URL
     * @param data 图片二进制数据
     * @param size 数据大小（字节）
     */
    [[deprecated("Use onImagePixelmapReady() instead")]]
    virtual void onImageDataReady(const std::string& url, const uint8_t* data, size_t size) = 0;

    /**
     * @brief 通知平台图片句柄就绪
     *
     * 平台层解码图片后，可通过统一句柄接口回传图片资源。
     * iOS 迁移建议优先使用此接口传递 `IOS_CGIMAGE` / `IOS_CVPIXELBUFFER`。
     *
     * @param url 图片 URL
     * @param handleType 平台句柄类型
     * @param handle 平台原生图像句柄
     * @param width 图片宽度
     * @param height 图片高度
     */
    virtual void onImageHandleReady(const std::string& url,
                                    NativeHandleType handleType,
                                    void* handle,
                                    int width,
                                    int height) {
        (void)url; (void)handleType; (void)handle; (void)width; (void)height;
    }

    /**
     * @brief 通知图片 PixelMap 就绪（DMA 零拷贝模式，OHOS 兼容接口）
     *
     * 平台层解码图片后，直接传入 DMA PixelMap，实现零拷贝渲染。
     * 当前 iOS 迁移请优先使用 onImageHandleReady()。
     *
     * @param url 图片 URL
     * @param pixelmap OH_PixelmapNative* 指针
     * @param width 图片宽度
     * @param height 图片高度
     */
    virtual void onImagePixelmapReady(const std::string& url,
                                       void* pixelmap,
                                       int width,
                                       int height) {
        (void)url; (void)pixelmap; (void)width; (void)height;
    }

    /**
     * @brief 通知图片加载失败
     *
     * @param url 图片 URL
     * @param error 错误信息
     */
    virtual void onImageFailed(const std::string& url, const std::string& error) = 0;

    // ========================================================================
    // 状态查询
    // ========================================================================

    /**
     * @brief 获取内容高度（不含 padding）
     */
    virtual float contentHeight() const = 0;

    /**
     * @brief 获取总高度（包含 padding）
     */
    virtual float totalHeight() const = 0;

    /**
     * @brief 导出当前布局摘要（调试用）
     */
    virtual std::string dumpLayoutSummary() = 0;

    /**
     * @brief 获取视口宽度
     */
    virtual int viewportWidth() const = 0;

    /**
     * @brief 获取视口高度
     */
    virtual int viewportHeight() const = 0;

    /**
     * @brief 检查引擎是否已初始化
     */
    virtual bool isInitialized() const = 0;

    /**
     * @brief 获取当前渲染模式
     */
    virtual RenderMode renderMode() const = 0;

    // ========================================================================
    // 异步布局
    // ========================================================================

    /**
     * @brief 检查是否有待处理的布局
     * @return true 如果有正在进行的异步布局
     */
    virtual bool isLayoutPending() const = 0;

    /**
     * @brief 等待布局完成（阻塞）
     * @param timeoutMs 超时时间（毫秒），0 表示无限等待
     * @return true 布局已完成，false 超时
     *
     * 典型用法：
     * ```cpp
     * engine->setHtmlContent(html);
     * engine->waitForLayout(100);  // 等待最多 100ms
     * engine->setScrollY(0);       // 触发首次渲染
     * ```
     */
    virtual bool waitForLayout(uint32_t timeoutMs = 0) = 0;

    /**
     * @brief 启用渐进式布局
     * @param enable true 启用渐进式布局
     * @param firstBatchBlocks 首批布局的 block 数量（默认 10）
     *
     * 渐进式布局适用于超长内容的首屏优化：
     * 1. 首先布局前 N 个 blocks，快速返回可渲染的首屏
     * 2. 在后台继续布局剩余 blocks
     * 3. 布局完成后更新总高度
     *
     * 时间线示例（1000 个 blocks）：
     * ```
     * t=0ms    setHtmlContent() 开始
     * t=5ms    HTML 解析完成（生成 1000 个 blocks）
     * t=15ms   首批 10 个 blocks 布局完成 → 首屏可渲染！
     * t=200ms  全部 1000 个 blocks 布局完成 → 更新总高度
     * ```
     *
     * @note 该选项会影响自动首屏优先后的后台补全节奏，通常只建议在调优超长内容时使用
     */
    virtual void setProgressiveLayoutEnabled(bool enable, size_t firstBatchBlocks = 10) = 0;

    // ========================================================================
    // 首屏性能统计
    // ========================================================================

    /**
     * @brief 获取首屏性能统计数据
     *
     * 返回从 Engine 创建到首屏显示完成的各阶段耗时。
     *
     * @return 首屏性能统计数据
     */
    virtual FirstScreenMetrics getFirstScreenMetrics() const = 0;

    /**
     * @brief 通知首次 onDraw 完成
     *
     * 由外部（如 ArkUI Custom Draw）在首次绘制完成后调用。
     * 调用后会自动打印首屏统计日志。
     *
     * @note 仅第一次调用有效，后续调用会被忽略
     */
    virtual void notifyFirstDrawComplete() = 0;

    /**
     * @brief 打印首屏统计日志
     *
     * 手动打印当前的首屏统计信息。
     * 通常在 notifyFirstDrawComplete() 后自动调用。
     */
    virtual void logFirstScreenStats() const = 0;

    // ========================================================================
    // 字体管理 (静态扩展接口，保持 ABI 兼容)
    // ========================================================================

    /**
     * @brief 注册自定义字体文件
     * @param engine 引擎实例指针
     * @param familyName 字体族名称（CSS font-family 使用）
     * @param fontPath 字体文件绝对路径
     * @return true 成功，false 失败
     * 
     * @note 注册后，请调用 setStyleConfig 更新字体配置以生效
     */
    static bool RegisterFont(RichTextEngine* engine, const std::string& familyName, const std::string& fontPath);

    /**
     * @brief 注册自定义字体数据
     * @param engine 引擎实例指针
     * @param familyName 字体族名称
     * @param data 字体数据指针
     * @param length 数据长度
     * @return true 成功，false 失败
     */
    static bool RegisterFontBuffer(RichTextEngine* engine, const std::string& familyName, const uint8_t* data, size_t length);

    // ========== 字库管理 API（增删改查） ==========

    /**
     * @brief 注销字体
     * @param familyName 字体族名称
     * @return true 成功，false 失败
     */
    static bool UnregisterFont(const std::string& familyName);

    /**
     * @brief 设置当前激活的字体
     * @param familyName 字体族名称，空字符串表示使用默认字体
     * @return true 成功，false 失败（字体未注册）
     */
    static bool SetActiveFont(const std::string& familyName);

    /**
     * @brief 获取当前激活的字体名称
     * @return 当前激活的字体名称，空字符串表示使用默认字体
     */
    static std::string GetActiveFont();

    /**
     * @brief 获取所有已注册的字体名称列表
     * @return 已注册的字体名称列表
     */
    static std::vector<std::string> GetRegisteredFonts();

    /**
     * @brief 检查字体是否已注册
     * @param familyName 字体族名称
     * @return true 已注册，false 未注册
     */
    static bool IsFontRegistered(const std::string& familyName);

    /**
     * @brief 清空所有已注册的自定义字体
     */
    static void ClearAllFonts();

    // ========================================================================
    // ABI 扩展接口
    // ========================================================================
    // 新增虚函数只能追加到类尾部，避免破坏既有宿主的 vtable 布局。

    /**
     * @brief 设置 Markdown 内容
     *
     * 解析 Markdown 并触发布局。首版支持常用 GFM 子集：
     * - 标题、段落、强调、删除线
     * - 列表、引用、链接、图片
     * - 行内代码、代码块、表格、自动链接
     *
     * 与 setHtmlContent() 一样，长 Markdown 内容内部也可能自动走
     * “首屏优先 + 异步补全”策略，但 Markdown 仍按原生 Markdown 解析链路处理，
     * 不依赖先转换成 HTML 再渲染。
     *
     * @note 首版不支持 raw HTML、task list、math、wiki link
     *
     * @param markdown Markdown 内容字符串
     */
    virtual void setMarkdownContent(const std::string& markdown) = 0;

    /**
     * @brief 从视口坐标开始文本选中
     *
     * 用于平台层长按命中后进入选中模式。传入坐标以 RichText 视口左上角为
     * 原点，不需要平台层叠加 scrollY 或扣除内部 padding，渲染器会统一转换到
     * 内容坐标。首选会按词边界扩展，词边界不可用时退化为单字符/单图片选中。
     *
     * @param x 命中点 X，视口坐标，单位为 vp/逻辑像素
     * @param y 命中点 Y，视口坐标，单位为 vp/逻辑像素
     * @return true 选区发生变化且应刷新高亮、手柄和菜单；false 表示未命中文本
     */
    virtual bool startSelection(float x, float y) = 0;

    /**
     * @brief 更新文本选区
     *
     * 用于平台层拖拽起止手柄或长按后直接拖拽扩展选区。坐标契约与
     * startSelection() 相同，handle 表示当前被拖动的端点。若拖拽跨过另一端，
     * 引擎会交换 start/end，并通过返回值通知平台层切换活动手柄。
     *
     * @param x 拖拽点 X，视口坐标，单位为 vp/逻辑像素
     * @param y 拖拽点 Y，视口坐标，单位为 vp/逻辑像素
     * @param handle 当前拖动端点，NONE 会按 END 处理
     * @return SelectionUpdateResult 选区变化、有效状态和手柄翻转信息
     */
    virtual SelectionUpdateResult updateSelection(
        float x, float y, SelectionHandle handle = SelectionHandle::END) = 0;

    /**
     * @brief 清除文本选区
     *
     * 仅清理渲染库中的选区状态。平台层仍需要自行隐藏外置手柄、放大镜和菜单。
     */
    virtual void clearSelection() = 0;

    /**
     * @brief 当前是否存在文本选区
     *
     * @return true 当前有有效文本或图片选区
     */
    virtual bool hasSelection() const = 0;

    /**
     * @brief 获取选中的纯文本
     *
     * 返回按布局块顺序拼接后的 UTF-8 文本。图片占位对象会转换为图片 src，
     * 便于平台层复制菜单在纯文本剪贴板中保留图片引用。
     */
    virtual std::string getSelectedText() const = 0;

    /**
     * @brief 获取选区复制内容
     *
     * plainText 与 getSelectedText() 保持兼容；htmlFragment 会尽量保留文字/段落样式、
     * 列表、表格结构和图片标签，并带有 HTML fragment 标记，平台层可同时写入
     * text/plain 与 text/html 剪贴板数据。
     */
    virtual SelectionCopyContent getSelectionCopyContent() const = 0;

    /**
     * @brief 获取选区矩形（视口坐标）
     *
     * 返回的矩形已经扣除了当前 scrollY 并加回 RichText 内部 padding，平台层可直接
     * 用于定位外置手柄、菜单、放大镜以及可见性裁剪。矩形可能跨多行、多个 block，
     * 也可能因为选区滚出视口而为空或全部位于视口外。
     */
    virtual std::vector<SelectionRect> getSelectionRects() const = 0;

    /**
     * @brief 选中当前已布局内容中的全部文本
     *
     * @return true 如果选区发生变化
     *
     * @note 当前只覆盖已完成布局的内容；异步布局未完成时，平台层需要在布局完成后
     *       再按需刷新选区。
     */
    virtual bool selectAll() = 0;

protected:
    RichTextEngine() = default;

private:
    // 禁止拷贝
    RichTextEngine(const RichTextEngine&) = delete;
    RichTextEngine& operator=(const RichTextEngine&) = delete;
};

} // namespace richtext

#endif // RICHTEXT_ENGINE_H
