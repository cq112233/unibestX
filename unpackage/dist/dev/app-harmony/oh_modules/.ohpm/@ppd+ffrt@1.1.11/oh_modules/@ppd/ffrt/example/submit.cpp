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

#include "ffrt/ffrt.h"

int ffrt_submit_example1()
{
    int x = 0;
    ffrt::submit([&]() { x = 2; }, {}, {&x});
    ffrt::submit([&]() { x = x * 3; }, {&x}, {});
    ffrt::wait();
    printf("hello ffrt. x=%d\n", x);
    return 0;
}

int ffrt_submit_example2()
{
    int x = 0;
    ffrt::submit([&]() { x = 2; }, {}, {&x}, ffrt::task_attr().name("add2"));
    ffrt::submit([&]() { x = x * 3; }, {&x}, {}, ffrt::task_attr().name("mul3")); // default to CPU
    ffrt::wait();
    printf("hello ffrt. x=%d\n", x);
    return 0;
}

int ffrt_submit_example3()
{
    int x = 0;
    ffrt::task_handle h = ffrt::submit_h([&]() { x = 2; }, {}, {});
    ffrt::wait({h});
    printf("hello ffrt, x=%d\n", x);
    return 0;
}

int main()
{
    ffrt_submit_example1();
    ffrt_submit_example2();
    ffrt_submit_example3();
    return 0;
}