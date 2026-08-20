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


#ifndef IMAGE_KNIFE_C_KEKE_IMAGEKNIFEC_TYPE_H
#define IMAGE_KNIFE_C_KEKE_IMAGEKNIFEC_TYPE_H

#ifdef __cplusplus
extern "C" {
#endif

/**
 * @brief ImageKnife缓存策略枚举
 */
typedef enum {
    /**
     * @brief 默认操作内存和文件缓存
     */
    IMAGE_KNIFE_CACHE_STRATEGY_DEFAULT = 0,
    /**
     * @brief 只操作内存缓存
     */
    IMAGE_KNIFE_CACHE_STRATEGY_MEMORY = 1,
    /**
     * @brief 只操作文件缓存
     */
    IMAGE_KNIFE_CACHE_STRATEGY_FILE = 2,
    /**
     * @brief 不使用缓存
     */
    IMAGE_KNIFE_CACHE_STRATEGY_NONE = 3,
} ImageknifecCacheStrategy;

/**
 * @brief ImageKnife纯C接口错误码
 */
typedef enum {
    /**
     * @brief 接口调用成功
     */
    IMAGE_KNIFE_SUCCESS = 0,
    /**
     * @brief 非法参数
     */
    IMAGE_KNIFE_ERROR_BAD_PARAMETER = 4000401,
    /**
     * @brief 指向的Cpp对象不存在
     */
    IMAGE_KNIFE_ERROR_OBJECT_NOT_EXIST = 4000404,
    /**
     * @brief 指向的Cpp对象数据为空
     */
    IMAGE_KNIFE_ERROR_OBJECT_EMPTY_DATA = 4000403,
} ImageknifecError;


#ifdef __cplusplus
}
#endif
#endif //IMAGE_KNIFE_C_KEKE_IMAGEKNIFEC_TYPE_H
