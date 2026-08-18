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


#ifndef IMAGE_KNIFE_C_KEKE_IMAGEKNIFEC_IMAGE_DATA_H
#define IMAGE_KNIFE_C_KEKE_IMAGEKNIFEC_IMAGE_DATA_H

#include "imageknifec_type.h"
#include <multimedia/image_framework/image/pixelmap_native.h>

#ifdef __cplusplus
extern "C" {
#endif

/**
 * @brief ImageKnife图片对象
 */
struct ImageknifecImageData;
typedef struct ImageknifecImageData ImageknifecImageData;

/**
 * @brief 获取ImageKnife图片的帧数
 * @param imageData 要操作的图片对象指针
 * @param frameCount 用于接收图片的帧数
 * @return ImageKnife纯C接口错误码
 */
ImageknifecError ImageknifecImageDataGetFrameCount(ImageknifecImageData *imageData, uint32_t *frameCount);

/**
 * @brief 获取ImageKnife图片第0帧的pixelmap指针
 * @param imageData 要操作的图片对象指针
 * @param pixelmap 用于接收图片pixelmap指针
 * @return ImageKnife纯C接口错误码
 */
ImageknifecError ImageknifecImageDataGetPixelmap(ImageknifecImageData *imageData, OH_PixelmapNative **pixelmap);

/**
 * @brief 获取ImageKnife图片的pixelmap指针数组
 * 不要手动释放pixelmapList数组中的具体的OH_PixelmapNative指针，避免影响其余地方使用该图片缓存
 * @param imageData 要操作的ImageKnife图片对象指针
 * @param pixelmapList 用于接收图片帧pixelmap指针数组，需要调用者创建pixelmapList数组并传入，pixelmapList由调用者释放
 * @param size 指示pixelmapList数组长度
 * @return ImageKnife纯C接口错误码
 */
ImageknifecError ImageknifecImageDataGetPixelmapList(ImageknifecImageData *imageData,
                                                     OH_PixelmapNative *pixelmapList[], size_t size);

/**
 * @brief 获取ImageKnife图片的每帧播放时长数组
 * @param imageData 要操作的ImageKnife图片对象指针
 * @param delayTimeList 用于接收图片帧播放时长数组，需要调用者创建delayTimeList数组并传入，delayTimeList由调用者释放
 * @param size 指示delayTimeList数组长度
 * @return ImageKnife纯C接口错误码
 */
ImageknifecError ImageknifecImageDataGetDelayTimeList(ImageknifecImageData *imageData,
                                                      int delayTimeList[], size_t size);

/**
 * @brief 释放ImageKnife图片对象
 * @param imageData 需要释放的ImageKnife图片对象指针
 * @return ImageKnife纯C接口错误码
 */
ImageknifecError ImageknifecImageDataRelease(ImageknifecImageData *imageData);

#ifdef __cplusplus
}
#endif
#endif //IMAGE_KNIFE_C_KEKE_IMAGEKNIFEC_IMAGE_DATA_H
