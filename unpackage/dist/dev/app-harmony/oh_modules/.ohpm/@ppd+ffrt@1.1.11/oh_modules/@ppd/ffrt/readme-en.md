# ffrt

## Introduction

ffrt is a wrapper for the FFRT C++ interface, providing FFRT C++ interfaces and interface documentation.

## Usage Guide

For the FFRT C++ interface usage guide, please refer to the open-source community documentation ([Function Flow Runtime C++ API](https://gitcode.com/openharmony/resourceschedule_ffrt/blob/master/docs/ffrt-api-guideline-cpp.md)).

## Download and Installation

```shell
ohpm install @ppd/ffrt
```

For more information on OpenHarmony ohpm environment configuration, please refer to [How to Install OpenHarmony ohpm Packages](https://gitcode.com/openharmony-tpc/docs/blob/master/OpenHarmony_har_usage.md).

## Interface List

- cpp/pattern/job_partner.h
- cpp/condition_variable.h
- cpp/mutex.h
- cpp/queue.h
- cpp/shared_mutex.h
- cpp/sleep.h
- cpp/task.h

## Usage Example

### 1. Set Third-Party Package Dependency Information

In the Terminal window, navigate to the module that requires the third-party package and execute the `ohpm install @ppd/ffrt` command to install the package. DevEco Studio will automatically add the third-party package dependency to the project's `oh-package.json5`.

### 2. Modify CMakeLists.txt

#### Method 1: `ohpm` Unified Management

1. Add `FIND_PACKAGE` configuration

    ```cmake
    if(DEFINED PACKAGE_FIND_FILE)
        include(${PACKAGE_FIND_FILE})
    endif()
    ```

2. Add `target_link_libraries` configuration

    ```cmake
    target_link_libraries(entry PUBLIC ffrt::ffrt_cpp libffrt.z.so)
    ```

#### Method 2: Explicit Management

1. Add header file path configuration

    ```cmake
    include_directories(${MODULES_PATH}/@ppd/ffrt/include)
    ```

2. Add `target_link_libraries` configuration

    ```cmake
    target_link_libraries(entry PUBLIC libffrt.z.so)
    ```

> NOTE
>
> The variable `MODULES_PATH` represents the installation location of the third-party library. Developers need to define it themselves or replace it directly with an absolute or relative path.
>
> For example: `${NATIVERENDER_ROOT_PATH}/oh_modules/@ppd/ffrt/include`

#### Recommendations for Selection

- **Method 1** adopts CMake configuration mode, which does not require manual setting of FFRT header file/library paths, making it more concise and compatible.
- Since the FFRT third-party library is **head-only**, **Method 2** does not require dependence on the third-party dynamic library `libffrt_cpp.so`.
- In short: If a framework or library uses FFRT, **Method 1 is recommended** to provide convenience for developers; if you do not want the application to integrate `libffrt_cpp.so`, **Method 2 is recommended**.

### 3. Include Header Files in C++ Code and Call the Corresponding C++ Interfaces

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

## Usage Notes

> Minimum compatible SDK version: API 12
