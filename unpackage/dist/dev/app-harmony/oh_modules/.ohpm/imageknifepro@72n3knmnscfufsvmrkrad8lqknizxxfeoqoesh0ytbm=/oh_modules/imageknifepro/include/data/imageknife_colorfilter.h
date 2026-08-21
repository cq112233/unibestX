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
#ifndef __IMAGEKNIFE_COLORFILTER_H__
#define __IMAGEKNIFE_COLORFILTER_H__

#include <native_drawing/drawing_types.h>

namespace ImageKnifePro {
/**
 * @brief 图形实现ColorFilter属性的数据，管理原始OH_Drawing_ColorFilter释放
*/
struct ImageKnifeColorFilter {
public:
    /**
     * @brief 构造ColorFilter属性数据
     * @param filter : 原始OH_Drawing_ColorFilter指针
     */
    explicit ImageKnifeColorFilter(OH_Drawing_ColorFilter *filter);

    /**
     * @brief 获取ColorFilter属性数据地址
     * @return ColorFilter地址
     */
    OH_Drawing_ColorFilter *GetColorFilter() const;

    ~ImageKnifeColorFilter();
private:
    OH_Drawing_ColorFilter *colorFilter_ = nullptr;
};

}

#endif // __IMAGEKNIFE_COLORFILTER_H__
