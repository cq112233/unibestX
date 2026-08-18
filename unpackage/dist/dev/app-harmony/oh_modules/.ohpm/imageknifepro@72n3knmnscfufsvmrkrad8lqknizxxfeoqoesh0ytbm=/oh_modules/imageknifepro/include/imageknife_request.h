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


#ifndef IMAGE_KNIFE_C_IMAGEKNIFE_REQUEST_H
#define IMAGE_KNIFE_C_IMAGEKNIFE_REQUEST_H

#include "imageknife_option.h"

namespace ImageKnifePro {
/**
 * @brief ImageKnife图片加载请求对象，一般由ImageKnifeNode创建
 */
class ImageKnifeRequest : public std::enable_shared_from_this<ImageKnifeRequest> {
public:
    /**
     * @brief 图片请求的加载状态
     */
    enum class Status {
        /**
         * @brief 请求加载中，创建时的初始状态
         */
        PROGRESS,
        /**
         * @brief 主图加载成功
         */
        COMPLETE,
        /**
         * @brief 主图加载失败，如果ImageKnifeOption设置了错误图，则开始加载错误图，否则停止在ERROR状态
         */
        ERROR,
        /**
         * @brief 错误图加载结束，不代表错误图加载成功
         */
        ERROR_COMPLETE,
        /**
         * @brief 请求因取消导致的销毁状态
         */
        DESTROY
    };

    /**
     * @brief 获取请求的加载状态
     * @return 返回加载状态枚举
     */
    virtual Status GetStatus() const = 0;
    /**
     * @brief 获取请求应用的图片选项参数
     * @return 返回ImageKnifeOption对象智能指针
     */
    virtual std::shared_ptr<ImageKnifeOption> GetImageKnifeOption() const = 0;
    virtual ~ImageKnifeRequest() = default;
};

} // end of namespace

#endif // IMAGE_KNIFE_C_IMAGEKNIFE_REQUEST_H
