
# the minimum version of CMake.
cmake_minimum_required(VERSION 3.22)
project(TestSharedData)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

if(NOT "$ENV{DOM2_KEEP_DEBUG_SYMBOL}" STREQUAL "ON")
    set(CMAKE_SHARED_LINKER_FLAGS "${CMAKE_SHARED_LINKER_FLAGS} -Wl,--strip-all")
endif()

set(CCACHE_PROGRAM "$ENV{CCACHE_EXE}")
if(CCACHE_PROGRAM)
    set(CMAKE_C_COMPILER_LAUNCHER "${CCACHE_PROGRAM}" CACHE STRING "C compiler launcher" FORCE)
    set(CMAKE_CXX_COMPILER_LAUNCHER "${CCACHE_PROGRAM}" CACHE STRING "CXX compiler launcher" FORCE)
endif()

add_definitions(-DUNI_REFINED_LAYOUT -DOS_HARMONY)
if(SUPPORT_RENDER_NODE)
    add_definitions(-DOS_HARMONY_SUPPORT_RENDER_NODE)
endif()

set(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})
set(OH_MODULES_PATH ${CMAKE_CURRENT_SOURCE_DIR}/../../../oh_modules)

if(DEFINED PACKAGE_FIND_FILE)
    include(${PACKAGE_FIND_FILE})
endif()

include_directories(
    ${NATIVERENDER_ROOT_PATH}
    ${NATIVERENDER_ROOT_PATH}/include
    ${OH_MODULES_PATH}/@dcloudio/uni-app-x-runtime/src/main/cpp/include
    ${OH_MODULES_PATH}/@dcloudio/uni-app-x-runtime/src/main/cpp/common
    ${OH_MODULES_PATH}/@dcloudio/uni-app-x-runtime/src/main/cpp/common/include
    ${OH_MODULES_PATH}/@dcloudio/uni-app-x-runtime/src/main/cpp
)

file(GLOB_RECURSE PROJECT_FILES ./*.cpp)

add_library(sdk SHARED IMPORTED)
set_target_properties(sdk PROPERTIES
    IMPORTED_LOCATION ${OH_MODULES_PATH}/@dcloudio/uni-app-x-runtime/libs/${OHOS_ARCH}/libsdk.so
)

add_library(imageknifepro SHARED IMPORTED)
set_target_properties(imageknifepro PROPERTIES
    IMPORTED_LOCATION ${OH_MODULES_PATH}/imageknifepro/libs/${OHOS_ARCH}/libimageknifepro.so
)

