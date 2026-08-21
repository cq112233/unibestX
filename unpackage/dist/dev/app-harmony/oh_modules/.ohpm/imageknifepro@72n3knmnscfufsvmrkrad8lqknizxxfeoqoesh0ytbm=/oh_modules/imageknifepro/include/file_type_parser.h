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

#ifndef IMAGE_KNIFE_C_KEKE_FILE_TYPE_PARSER_H
#define IMAGE_KNIFE_C_KEKE_FILE_TYPE_PARSER_H

#include "imageknife_type.h"

namespace ImageKnifePro {

/**
 * @brief 文件格式信息，包含图片格式，宽高，帧数
 * 使用自定义图片格式时，需将format枚举设置为CUSTOM_FORMAT, 同时在customFormat中描述具体的格式名称
 */
struct FileTypeInfo {
    /**
     * @brief 图片格式枚举
     */
    ImageFormat format = ImageFormat::UNKNOWN;
    /**
     * @brief 自定义图片格式描述字符串
     */
    std::string customFormat;
    /**
     * @brief 图片的帧数
     * 该项未设置会导致动图解码异常
     */
    uint32_t frameCount = 0;
    /**
     * @brief 图片描述的动图播放次数
     * 可选属性
     * 在组件未设置动图控制项AnimatorOption时，动图播放次数将使用该属性
     * 如果组件设置了动图控制项AnimatorOption，则该属性将被忽略
     * 默认为0，表示无限循环播放
     */
    uint32_t loopCount = 0;
    /**
     * @brief 图片的宽度
     * 该项未设置会导致无法获取期望的降采样宽高
     * 该项未设置会导致动图解码模式：AUTO失效
     */
    uint32_t width = 0;
    /**
     * @brief 图片的高度
     * 该项未设置会导致无法获取期望的降采样宽高
     * 该项未设置会导致动图解码模式：AUTO失效
     */
    uint32_t height = 0;
    /**
     * @brief 动图的每帧对应的播放时长数组，单位为毫秒
     * 如果动图缺少该项，则逐帧解码模式中导致动图每帧播放时长异常
     */
    std::shared_ptr<int []> delayTimeList = nullptr;
};

/**
 * @brief 解码图片源基类
 * 可继承该基类，并实现FileTypeParser::CreateDecodeImageSource虚函数
 * 在自定义解码过程中，动图逐帧解码时可通过ImageKnifeTask::GetDecodeImageSource获取对象指针，避免每帧解码时重复创建的开销
 */
class DecodeImageSource {
public:
    virtual ~DecodeImageSource() = default;
};

/**
 * @brief 文件图片类型分析器基类
 * 继承该基类，实现自定义的文件格式判断逻辑
 */
class FileTypeParser {
public:
    /**
     * @brief 解析文件buffer的图片格式类型，以及相应的宽高等信息
     * 自定义的文件格式判断需实现该纯虚函数
     * @param buffer 文件buffer
     * @param length 文件buffer的长度
     * @param imageSource 解码图片源基类指针
     * 由CreateDecodeImageSource创建，若未选择实现该虚函数，则该入参为nullptr
     * @return 返回文件类型信息对象指针
     * 如果返回nullptr或FileTypeInfo::format为UNKNOWN, 则交由默认的文件格式信息判断逻辑去分析
     */
    virtual std::shared_ptr<FileTypeInfo> ParseFileTypeInfo(uint8_t *buffer, uint32_t length,
                                                            std::shared_ptr<DecodeImageSource> imageSource) = 0;

    /**
     * @brief 创建解码图片源对象
     * 可选实现虚函数
     * 在逐帧解码的模式中，图片buffer开始显示前调用获取图片解码源对象，避免逐帧解码过程中每一帧重复创建，减少开销
     * 可通过ImageKnifeTask::GetDecodeImageSource获取创建的图片解码源对象，在自定义解码过程中进行复用
     * 如果ParseFileTypeInfo返回的FileTypeInfo为nullptr，或者FileTypeInfo::format为UNKNOWN，则DecodeImageSource会被默认的替代
     * @param buffer 文件buffer
     * 在解码过程中，该文件buffer不会被析构
     * @param length 文件buffer的长度
     * @return 返回图片解码源对象基类指针，该基类函数返回nullptr
     */
    virtual std::shared_ptr<DecodeImageSource> CreateDecodeImageSource(uint8_t *buffer, uint32_t length);

    virtual ~FileTypeParser() = default;
};

}
#endif //IMAGE_KNIFE_C_KEKE_FILE_TYPE_PARSER_H
