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

#ifndef IMAGE_KNIFE_C_TRANSFORMATION_H
#define IMAGE_KNIFE_C_TRANSFORMATION_H

#include "imageknife_task.h"

namespace ImageKnifePro {

/**
 * @brief 图形变换的基类
 * 使用自定义的图形变换需要继承该基类，并实现器虚函数
 */
class Transformation {
public:
    /**
     * @brief 进行图形变换，自定义图形变换需要实现该纯虚函数
     * @param task : 图片加载任务对象的智能指针，位图通过task->product.imageData取得
     * 使用图形变换后的imageData来替换task->product.imageData以完成本次图形变换过程
     * @return 返回true表示图形变换将继续(如果multiTransformation中还有未执行的transform对象)
     * 返回false表示本次图型加载任务中图形变换过程终止
     */
    virtual bool Transform(std::shared_ptr<ImageKnifeTask> task) = 0;
    /**
     * @brief 获取图形变换的信息，用于内存缓存key的生成，自定义图形变换需实现该纯虚函数
     * 图形变换信息需要能够与其它的图形变换对象区分，包括同一个类使用了不同参数的对象
     * 默认的图形变换对象获取的信息以Default开头
     * @return 返回图形变换信息
     */
    virtual std::string GetTransformInfo() = 0;
    virtual ~Transformation() = default;
};

/**
 * @brief 多个图形变换效果
 * 图形变换效果将逐个叠加执行
 */
class MultiTransformation {
public:
    void Transform(std::shared_ptr<ImageKnifeTask> task);

    /**
     * @brief 获取多个图形变换的信息，用于内存缓存key的生成
     * @return 内部所有图形变换的信息
     */
    std::string GetTransformInfo();

    /**
     * @brief 使用图形变换数组来构造多重变换对象
     * @param transformations : 图形变换数组
     */
    MultiTransformation(std::vector<std::shared_ptr<Transformation>> transformations);
private:
    std::vector<std::shared_ptr<Transformation>> transformations_;
};

} // end of namespace

#endif // IMAGE_KNIFE_C_TRANSFORMATION_H
