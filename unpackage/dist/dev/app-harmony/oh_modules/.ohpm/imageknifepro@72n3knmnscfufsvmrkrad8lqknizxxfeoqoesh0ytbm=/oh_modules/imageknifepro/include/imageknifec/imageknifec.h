/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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


#ifndef IMAGE_KNIFE_C_KEKE_IMAGEKNIFEC_H
#define IMAGE_KNIFE_C_KEKE_IMAGEKNIFEC_H

#include "imageknifec_image_data.h"
#include "imageknifec_type.h"

#ifdef __cplusplus
extern "C" {
#endif


/**
 * @brief GetCacheImage回调函数指针类型
 * @param usrCtx 用户自定义数据指针
 * @param imageData ImageKnife图片对象指针，不使用后需要使用ImageknifecImageDataRelease释放
 * 如果GetCacheImage加载获取对应url图片内存缓存失败，则imageData入参为空指针
 */
typedef void (*ImageknifecGetCacheImageCallback)(void *usrCtx, ImageknifecImageData *imageData);

/**
 * @brief GetCacheImage回调函数结构体
 */
typedef struct ImageknifecGetCacheImageCallbackObject {
    /**
     * @brief GetCacheImage回调函数指针
     */
    ImageknifecGetCacheImageCallback callback;
    /**
     * @brief 用户上下文，自定义数据指针
     */
    void *usrCtx;
} ImageknifecGetCacheImageCallbackObject;

/**
 * @brief 从内存或文件缓存中获取图片数据，若没有对应缓存，则去加载图片
 * 加载，解码等过程在子线程进行
 * @param loadSrc 图片地址url
 * @param onComplete GetCacheImage回调函数结构体，获取的图片数据在该回调函数的入参里取得
 * 加载结束后触发该回调函数，并确保回调函数会在主线程中触发
 * 如果获取，加载失败，则回调函数中ImageknifecImageData指针为空
 * @param cacheTye 缓存策略
 * 值为IMAGE_KNIFE_CACHE_STRATEGY_DEFAULT时尝试从内存，文件缓存中获取数据
 * 值为IMAGE_KNIFE_CACHE_STRATEGY_MEMORY时仅从内存缓存中取数据
 * 值为IMAGE_KNIFE_CACHE_STRATEGY_FILE时仅从文件缓存中取数据
 * 值为IMAGE_KNIFE_CACHE_STRATEGY_NONE时不使用缓存，直接去加载图片
 * @param signature 缓存key自定义签名信息，不使用时可以传入NULL
 * @return ImageKnife纯C接口错误码
 */
ImageknifecError ImageknifecGetCacheImageByLoadSrc(const char *loadSrc,
                                                   ImageknifecGetCacheImageCallbackObject *onComplete,
                                                   ImageknifecCacheStrategy cacheTye, const char *signature);

#ifdef __cplusplus
}
#endif
#endif //IMAGE_KNIFE_C_KEKE_IMAGEKNIFEC_H
