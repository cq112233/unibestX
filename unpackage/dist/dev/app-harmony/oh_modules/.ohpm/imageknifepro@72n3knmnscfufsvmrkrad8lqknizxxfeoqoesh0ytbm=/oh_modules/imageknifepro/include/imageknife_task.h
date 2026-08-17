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

#ifndef IMAGE_KNIFE_C_IMAGEKNIFE_TASK_H
#define IMAGE_KNIFE_C_IMAGEKNIFE_TASK_H

#include "data/image_data.h"
#include "file_type_parser.h"
#include "imageknife_type.h"
#include "data/image_data_cache.h"
#include "image_source.h"

namespace ImageKnifePro {
class ImageKnifeRequest;
/**
 * @brief 图片加载的任务，用于加载责任链拦截器之间流转数据
 * 一个图片请求最多产生三个加载任务，取决于是否使用了占位图和错误图，以及主图加载是否成功
 */
class ImageKnifeTask {
public:
    /**
     * @brief 加载任务中的产品，在加载责任链拦截器中产出的数据需要通过Product向下个步骤传递
     */
    struct Product {
        /**
         * @brief 原始图片数据buffer，来源可能是网络下载，本地资源文件的读取
         */
        std::shared_ptr<uint8_t[]> imageBuffer = nullptr;
        /**
         * @brief 标识原始图片imageBuffer的长度
         */
        uint32_t imageLength = 0;
        /**
         * @brief 解码后或图形变换后的pixelmap图片数据，可能由单帧或多帧（动图），如果是多帧则还包含每帧的时间信息
         */
        std::shared_ptr<ImageData> imageData = nullptr;
        /**
         * @brief 图片内存缓存的数据对象，用于组件直接渲染显示。该对象在加载成功后自动生成，内存缓存拦截器只能缓存读取其智能指针
         */
        std::shared_ptr<ImageDataCache> imageDataCache = nullptr;
        /**
         * @brief 描述读取或写入的文件缓存的路径
         * 文件缓存拦截器在读取/写入成功时，填入文件缓存路径
         */
        std::string filePath;
    };

    /**
     * @brief 内存缓存/文件缓存子任务描述对象，非缓存责任链无需处理
     */
    struct CacheTask {
        /**
        * @brief 当前图片加载对应的缓存key，用于内存/文件缓存拦截器，可作为文件缓存的文件名
        * 生成key的策略可以由ImageKnife::SetCacheKeyGenerator自定义
        */
        std::string cacheKey;
        /**
         * @brief 标识内存缓存/文件缓存拦截器的任务类型，非缓存责任链该成员为NONE
         */
        CacheTaskType type = CacheTaskType::NONE;
    };

    /**
     * @brief 加载任务中的产品对象
     */
    Product product;
    /**
     * @brief 缓存子任务描述对象
     */
    CacheTask cacheTask;
    /**
     * @brief 可选参数。将拦截器取消时的额外信息回填至该成员，会附加到cancel回调的信息中
     */
    std::string cancelInfo;
    /**
     * @brief 可选参数。将网络下载拦截器中的http状态码回填至该成员，会记录到图片数据采集的ImageInfo中
     */
    int httpCode = 0;

    /**
     * @brief 用于拦截器中输出错误日志，会附带上组件ID/Handle，Version，RequestType，以及所在的拦截器名称等信息
     * @param errorInfo 要输出的错误日志内容
     */
    virtual void EchoError(std::string errorInfo) = 0;
    /**
     * @brief 判断当前任务的图片组件是否为动图组件
     * @return 动图组件返回true，否则返回false
     */
    virtual bool IsAnimator() const = 0;
    /**
     * @brief 获取加载的图片buffer的编码格式
     * @return 返回图片格式枚举，在buffer加载完成前调用返回UNKOWN
     */
    virtual ImageFormat GetImageBufferFormat() const = 0;
    /**
     * @brief 获取图片请求类型，标识当前任务加载的是主图，占位图，还是错误图
     * @return 返回ImageRequestType枚举
     */
    virtual ImageRequestType GetImageRequestType() const = 0;
    /**
     * @brief 获取加载任务的图片源ImageSource
     * @return 任务类型为加载主图，返回loadSrc。加载占位图返回placeholderSrc。加载错误图返回errorSrc
     */
    virtual ImageSource *GetImageSource() const = 0;
    /**
     * @brief 获取当前任务对应的图片请求ImageKnifeRequest对象
     * @return 返回ImageKnifeRequest对象智能指针
     */
    virtual std::shared_ptr<ImageKnifeRequest> GetImageKnifeRequest() const = 0;
    /**
     * @brief 获取期望的解码图片尺寸，该尺寸大小由降采样策略计算生成
     * @return 返回图片尺寸
     * 在解码责任链之前调用，返回的width和height为0
     * 请求的图片类型非主图，返回的width和height为0
     * 不使用降采样，返回的width和height为0
     */
    virtual Image_Size GetDesiredImageSize() const = 0;
    /**
     * @brief 获取解码时的当前指定帧index
     * 指定帧根据解码模式状态确定
     * @return 返回index
     * 静态图片返回0，即图片第一帧
     * 返回-1，代表批量模式解码，需解码图片所有帧
     * 逐帧解码返回大于等于0的具体index
     */
    virtual int GetDecodeFrameIndex() const = 0;
    /**
     * @brief 获取解码图片源对象
     * 由FileTypeParser::CreateDecodeImageSource创建，需要自行转换成对应的子类使用
     * @return 返回解码图片源对象
     * 如果FileTypeParser::ParseFileTypeInfo拿到的是nullptr或者文件格式Unknown，则返回值可能为nullptr，或无效对象
     */
    virtual std::shared_ptr<DecodeImageSource> GetDecodeImageSource() const = 0;
    /**
     * @brief 获取文件格式信息对象
     * 包含自定义的格式，图片宽高，帧数等信息
     * 文件格式信息可由自定义的格式解析逻辑进行判断
     * @return 返回文件格式信息对象
     */
    virtual std::shared_ptr<FileTypeInfo> GetFileTypeInfo() const = 0;
    virtual ~ImageKnifeTask() = default;
};

}

#endif // IMAGE_KNIFE_C_IMAGEKNIFE_TASK_H
