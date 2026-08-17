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

#ifndef IMAGE_KNIFE_C_KEKE_TRANSFORMATION_CONSTRUCTOR_H
#define IMAGE_KNIFE_C_KEKE_TRANSFORMATION_CONSTRUCTOR_H

#include "transformation.h"
#include "transformation_option.h"

namespace ImageKnifePro {
/**
 * @brief 图形变换对象构造者基类
 * 可以通过该构造者，使用来自ArkTs层的变换参数来创建具体的图形变换对象
 * 如自定义的图形变换无需传入参数，则可以直接注册图形变换对象
 */
class TransformationConstructor {
public:
    /**
     * @brief 创建默认的图形变换对象
     * @param option : 默认图形变换描述对象，解析自ArkTs层TransformationOption
     * @return 返回默认图形变换对象的基类智能指针
     */
    virtual std::shared_ptr<Transformation> CreateTransformation(std::shared_ptr<TransformationOption> option) = 0;

    virtual ~TransformationConstructor() = default;
};
}

#endif //IMAGE_KNIFE_C_KEKE_TRANSFORMATION_CONSTRUCTOR_H
