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

#ifndef IMAGE_KNIFE_C_IMAGEKNIFE_LOADER_H
#define IMAGE_KNIFE_C_IMAGEKNIFE_LOADER_H

#include "interceptor.h"

namespace ImageKnifePro {
/**
 * @brief ImageKnife加载器，可添加拦截器来实现自定义的加载解码等过程
 * loader可以全局默认应用，也可以不同图片ImageKnifeOption使用不同的loader来进行加载
 */
class ImageKnifeLoader {
public:
    /**
     * @brief 添加拦截器时的位置，可以添加至责任链开始，也可以添加至责任链尾
     */
    enum class Position {
        /**
         * @brief 责任链开始位置，为默认添加位置
         */
        START,
        /**
         * @brief 责任链末尾位置
         */
        END
    };
    /**
     * @brief 在内存缓存责任链上添加一个拦截器
     * @param interceptor 需要添加的内存缓存拦截器的智能指针
     * @param position 拦截器插入位置，默认为责任链开始位置
     */
    virtual void AddMemoryCacheInterceptor(std::shared_ptr<MemoryCacheInterceptor> interceptor,
                                           Position position = Position::START) = 0;
    /**
     * @brief 在文件缓存责任链上添加一个拦截器
     * @param interceptor 需要添加的文件缓存拦截器的智能指针
     * @param position 拦截器插入位置，默认为责任链开始位置
     */
    virtual void AddFileCacheInterceptor(std::shared_ptr<FileCacheInterceptor> interceptor,
                                         Position position = Position::START) = 0;
    /**
     * @brief 在加载责任链上添加一个拦截器，该责任链包含网络下载，本地资源图片读取
     * @param interceptor 需要添加的加载拦截器的智能指针
     * @param position 拦截器插入位置，默认为责任链开始位置
     */
    virtual void AddLoadInterceptor(std::shared_ptr<LoadInterceptor> interceptor,
                                    Position position = Position::START) = 0;

    /**
     * @brief 在解码责任链上添加一个拦截器
     * @param interceptor 需要添加的解码拦截器的智能指针
     * @param position 拦截器插入位置，默认为责任链开始位置
     */
    virtual void AddDecodeInterceptor(std::shared_ptr<DecodeInterceptor> interceptor,
                                      Position position = Position::START) = 0;
    /**
     * @brief 创建默认的ImageKnifeLoader，已添加默认的内存，文件，下载，解码拦截器
     * @return 返回ImageKnifeLoader对象智能指针
     */
    static std::shared_ptr<ImageKnifeLoader> CreateDefaultImageLoader();
    /**
     * @brief 创建ImageKnifeLoader，其中内存，文件，下载，解码责任链为空，需要添加否则不可用
     * @return 返回ImageKnifeLoader对象智能指针
     */
    static std::shared_ptr<ImageKnifeLoader> CreateEmptyImageLoader();
    virtual ~ImageKnifeLoader() = default;
};

} // end of namespace

#endif // IMAGE_KNIFE_C_IMAGEKNIFE_LOADER_H
