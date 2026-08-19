# ffrt

## 简介

ffrt 是 FFRT C++ 接口的封装，提供 FFRT C++ 接口和接口使用文档说明。

## 使用指南

FFRT C++ 接口使用指南可以参考开源社区文档（[Function Flow Runtime C++ API](https://gitcode.com/openharmony/resourceschedule_ffrt/blob/master/docs/ffrt-api-guideline-cpp.md)）。

## 下载安装

```shell
ohpm install @ppd/ffrt
```

OpenHarmony ohpm 环境配置等更多内容，请参考[如何安装 OpenHarmony ohpm 包](https://gitcode.com/openharmony-tpc/docs/blob/master/OpenHarmony_har_usage.md)

## 接口列表

- cpp/pattern/job_partner.h
- cpp/condition_variable.h
- cpp/mutex.h
- cpp/queue.h
- cpp/shared_mutex.h
- cpp/sleep.h
- cpp/task.h

## 使用示例

### 一、设置三方包依赖信息

在 Terminal 窗口中，切换到需要引入三方包的模块，执行 `ohpm install @ppd/ffrt` 命令安装三方包，DevEco Studio 会自动在工程的 `oh-package.json5` 中自动添加三方包依赖。

### 二、修改 CMakeLists.txt

#### 方式一：`ohpm` 统一管理

1. 新增 `FIND_PACKAGE` 配置

    ```cmake
    if(DEFINED PACKAGE_FIND_FILE)
        include(${PACKAGE_FIND_FILE})
    endif()
    ```

2. 新增 `target_link_libraries` 配置

    ```cmake
    target_link_libraries(entry PUBLIC ffrt::ffrt_cpp libffrt.z.so)
    ```

#### 方式二：显式管理

1. 增加头文件路径配置

    ```cmake
    include_directories(${MODULES_PATH}/@ppd/ffrt/include)
    ```

2. 新增 `target_link_libraries` 配置

    ```cmake
    target_link_libraries(entry PUBLIC libffrt.z.so)
    ```

> NOTE
>
> 变量 `MODULES_PATH` 表示三方库安装位置，需要开发者自己定义或者直接替换成绝对路径或者相对路径。
>
> 例如：`${NATIVERENDER_ROOT_PATH}/oh_modules/@ppd/ffrt/include`

#### 选择建议

- 方式一使用的是 CMake 的配置模式，无需手动设置 FFRT 头文件/库路径，更简洁且兼容性更好；
- 由于 FFRT 三方库是 head-only 的，使用方式二不需要依赖三方库的动态库 `libffrt_cpp.so`；
- 简而言之：如果框架或库使用 FFRT 建议选择方式一，为开发者提供便利；如果不想应用集成 `libffrt_cpp.so` 建议使用方式二。

### 三、在 C++ 代码中引入头文件，然后调用对应的 C++ 接口

```cpp
// include all C or C++ header files
#include "ffrt/ffrt.h"

// include specified header files
#include "ffrt/cpp/pattern/job_partner.h"
#include "ffrt/cpp/task.h"
#include "ffrt/cpp/mutex.h"
#include "ffrt/cpp/shared_mutex.h"
#include "ffrt/cpp/condition_variable.h"
#include "ffrt/cpp/sleep.h"
#include "ffrt/cpp/queue.h"
```

## 使用说明

> 最低兼容 SDK 版本：API 12
