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

#ifndef IMAGE_KNIFE_C_KEKE_IMAGE_DATA_CACHE_H
#define IMAGE_KNIFE_C_KEKE_IMAGE_DATA_CACHE_H

#include "imageknife_type.h"
#include <cstdint>

namespace ImageKnifePro {
/**
 * @brief 内存缓存拦截器的缓存对象，用于图片组件显示，无需用户生成
 */
struct ImageDataCache {
    /**
     * @brief 获取缓存图片的原始宽度
     * @return 图片宽度
     */
    virtual uint32_t GetImageWidth() const = 0;
    /**
     * @brief 获取缓存图片的原始高度
     * @return 图片高度
     */
    virtual uint32_t GetImageHeight() const = 0;
    /**
     * @brief 获取缓存图片的所消耗的内存大小
     * @return 图片的大小，动图为所有帧的总大小
     */
    virtual uint32_t GetImageCacheSize() const = 0;
    /**
     * @brief 获取缓存图片的原始格式：png, jpg, webp, etc
     * @return 图片格式枚举
     */
    virtual ImageFormat GetImageFormat() const = 0;

    virtual ~ImageDataCache() = default;
};

}
#endif // IMAGE_KNIFE_C_KEKE_IMAGE_DATA_CACHE_H
