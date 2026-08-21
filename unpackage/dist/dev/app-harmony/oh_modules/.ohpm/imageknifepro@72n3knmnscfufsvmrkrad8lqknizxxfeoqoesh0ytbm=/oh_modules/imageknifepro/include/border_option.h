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

#ifndef IMAGE_KNIFE_C_KEKE_BORDER_OPTION_H
#define IMAGE_KNIFE_C_KEKE_BORDER_OPTION_H

#include <cstdint>
#include <vector>
#include <arkui/native_type.h>
namespace ImageKnifePro {

/**
 * @brief 设置图片组件的边框，圆角属性，及其样式
 */
class BorderOption {
public:
    /**
     * @brief 设置边框宽度，单位vp
     * 1. 当数组长度为1时:
     *   width[0]: 设置的宽度同时应用于上，右，下，左四个边框
     * 2. 当数组长度为4时:
     *   width[0]: 设置上边框的宽度
     *   width[1]: 设置右边框的宽度
     *   width[2]: 设置下边框的宽度
     *   width[3]: 设置左边框的宽度
     * 3. 当数组长度为0时，不设置边框宽度
     */
    std::vector<float> width;

    /**
     * @brief 设置边框百分比宽度
     * 1. 当数组长度为1时:
     *   percentageWidth[0]: 设置的百分比宽度同时应用于上，右，下，左四个边框
     * 2. 当数组长度为4时:
     *   percentageWidth[0]: 设置上边框的百分比宽度
     *   percentageWidth[1]: 设置右边框的百分比宽度
     *   percentageWidth[2]: 设置下边框的百分比宽度
     *   percentageWidth[3]: 设置左边框的百分比宽度
     * 3. 当数组长度为0时，不设置边框宽度
     */
    std::vector<float> percentageWidth;

    /**
     * @brief 设置边框圆角半径，单位vp
     * 1. 当数组长度为1时:
     *   radius[0]: 设置的圆角半径同时应用于边框的四个角
     * 2. 当数组长度为4时:
     *   radius[0]: 设置左上角的圆角半径
     *   radius[1]: 设置右上角的圆角半径
     *   radius[2]: 设置左下角的圆角半径
     *   radius[3]: 设置右下角的圆角半径
     * 3. 当数组长度为0时，不设置边框圆角半径
     */
    std::vector<float> radius;

    /**
     * @brief 设置边框百分比圆角半径
     * 1. 当数组长度为1时:
     *   percentageRadius[0]: 设置的百分比圆角半径同时应用于边框的四个角
     * 2. 当数组长度为4时:
     *   percentageRadius[0]: 设置左上角的百分比圆角半径
     *   percentageRadius[1]: 设置右上角的百分比圆角半径
     *   percentageRadius[2]: 设置左下角的百分比圆角半径
     *   percentageRadius[3]: 设置右下角的百分比圆角半径
     * 3. 当数组长度为0时，不设置边框百分比圆角半径
     */
    std::vector<float> percentageRadius;

    /**
     * @brief 设置边框颜色，格式为ARGB，示例:0xFFFF11FF
     * 1. 当数组长度为1时:
     *   color[0]: 设置的颜色同时应用于上，右，下，左四个边框
     * 2. 当数组长度为4时:
     *   color[0]: 设置上边框的颜色
     *   color[1]: 设置右边框的颜色
     *   color[2]: 设置下边框的颜色
     *   color[3]: 设置左边框的颜色
     * 3. 当数组长度为0时，不设置边框颜色
     */
    std::vector<uint32_t> color;

    /**
     * @brief 设置边框的样式
     * 1. 当数组长度为1时:
     *   style[0]: 设置的样式同时应用于上，右，下，左四个边框
     * 2. 当数组长度为4时:
     *   style[0]: 设置上边框的样式
     *   style[1]: 设置右边框的样式
     *   style[2]: 设置下边框的样式
     *   style[3]: 设置左边框的样式
     * 3. 当数组长度为0时，不设置边框样式
     */
    std::vector<ArkUI_BorderStyle> style;

    virtual ~BorderOption() = default;
};

}

#endif //IMAGE_KNIFE_C_KEKE_BORDER_OPTION_H
