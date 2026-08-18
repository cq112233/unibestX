/*
 * Copyright (C) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#ifndef IMAGE_KNIFE_C_CACHE_KEY_GENERATOR_H
#define IMAGE_KNIFE_C_CACHE_KEY_GENERATOR_H

#include <string>
#include "image_source.h"
#include "imageknife_task.h"
#include "imageknife_option.h"

namespace ImageKnifePro {
/**
 * @brief 缓存key生成器，包含文件缓存key和内存缓存key
 * 如果需要自定义缓存key生成策略，则需要继承该类，并实现对应的虚函数
 * 然后通过ImageKnife::SetCacheKeyGenerator注册
 */
class CacheKeyGenerator {
public:
    /**
     * @brief 内存缓存key回调参数
     */
    struct MemoryKeyParams {
        /**
         * @brief 图片来源，String, Pixelmap, Resource 联合类型
         * 可能是网络图片url或本地资源图片
         */
        ImageSource *imageSource = nullptr;
        /**
         * @brief 图片请求类型枚举，默认为主图
         */
        ImageKnifePro::ImageRequestType type = ImageRequestType::MAIN_SRC;
        /**
         * @brief 生成key签名信息，由ImageKnifeOption.signature指定，默认为空
         */
        std::string signature;
        /**
         * @brief 单个或多个图形变换的信息，没有图形变换步骤则是空字符串
         */
        std::string transformationInfo;
        /**
         * @brief 降采样信息，没有降采样步骤则是空字符
         */
        std::string downSamplingInfo;
        /**
         * @brief 标识用于显示的UI组件是否为动图组件
         */
        bool isAnimator = false;
        /**
         * @brief 系统的颜色模式，不同模式的Resource资源读取的图片可能不一样
         */
        ResourceManager_ColorMode colorMode = COLOR_MODE_LIGHT;
        /**
         * @brief 描述期望的图像内容显示方向
         */
        Orientation orientation = Orientation::AUTO;
        /**
         * @brief 描述期望的图片动态范围
         */
        DynamicRange dynamicRange = DynamicRange::AUTO;
    };

    virtual ~CacheKeyGenerator() = default;
    /**
     * @brief 文件缓存key生成回调
     * @param imageData 图片源
     * @param signature 生成key签名信息
     * @return 文件缓存key字符串，作为缓存文件的文件名
     */
    virtual std::string GenerateFileKey(const ImageSource *imageData, const std::string &signature = "") = 0;

    /**
     * @brief 内存缓存key生成回调
     * @param memoryKeyParams 内存缓存key回调参数
     * @return 内存缓存key字符串, 也是合并请求的标识
     */
    virtual std::string GenerateMemoryKey(MemoryKeyParams &memoryKeyParams) = 0;
};
} // namespace ImageKnifePro
#endif // IMAGE_KNIFE_C_CACHE_KEY_GENERATOR_H
