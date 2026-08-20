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

#ifndef IMAGE_KNIFE_C_KEKE_TRANSFORMATION_FACTORY_H
#define IMAGE_KNIFE_C_KEKE_TRANSFORMATION_FACTORY_H

#include "transformation.h"
#include "transformation_option.h"

namespace ImageKnifePro {
/**
 * @brief 图形变换对象构造工厂
 * 通过该构造工厂创建默认的图形变换对象
 * 继承于Transformation基类的自定义的图形变换对象指针可以直接使用，无需时使用该工厂构造
 */
class TransformationFactory {
public:
    /**
     * @brief 创建默认的图形变换对象
     * @param option : 默认图形变换描述对象
     * @return 返回默认图形变换对象的基类智能指针
     */
    static std::shared_ptr<Transformation> CreateTransformation(std::shared_ptr<TransformationOption> option);
};
}

#endif //IMAGE_KNIFE_C_KEKE_TRANSFORMATION_FACTORY_H
