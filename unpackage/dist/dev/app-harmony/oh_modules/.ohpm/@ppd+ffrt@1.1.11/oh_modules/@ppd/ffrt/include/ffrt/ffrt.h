/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @addtogroup FFRT
 * @{
 *
 * @brief Provides Function Flow Runtime (FFRT) C and C++ APIs.
 *
 * FFRT is a task-based concurrent runtime library that automatically schedules
 * tasks according to their dependencies, eliminating the need for manual
 * thread management.
 *
 * @since 10
 */

/**
 * @file ffrt.h
 *
 * @brief Includes the FFRT C or C++ interfaces depending on the source language.
 *
 * When compiled as C++, this header includes the C++ wrapper headers. Otherwise, it
 * includes the underlying C headers.
 *
 * @library libffrt.z.so
 * @kit FunctionFlowRuntimeKit
 * @syscap SystemCapability.Resourceschedule.Ffrt.Core
 * @since 10
 */

#ifndef FFRT_API_FFRT_H
#define FFRT_API_FFRT_H

#include "info/application_target_sdk_version.h"

#ifdef __cplusplus
#include "cpp/task.h"
#include "cpp/mutex.h"
#if OH_CURRENT_API_VERSION >= 18
    #include "cpp/shared_mutex.h"
#endif
#include "cpp/condition_variable.h"
#include "cpp/sleep.h"
#include "cpp/queue.h"
#include "cpp/pattern/job_partner.h"
#include "cpp/pattern/job_ring.h"
#include "ffrt/timer.h"
#include "ffrt/loop.h"
#else
#include "ffrt/task.h"
#include "ffrt/mutex.h"
#if OH_CURRENT_API_VERSION >= 18
    #include "ffrt/shared_mutex.h"
#endif
#include "ffrt/condition_variable.h"
#include "ffrt/sleep.h"
#include "ffrt/queue.h"
#if OH_CURRENT_API_VERSION >= 20
    #include "ffrt/fiber.h"
#endif
#include "ffrt/timer.h"
#include "ffrt/loop.h"
#endif

#endif
/** @} */
