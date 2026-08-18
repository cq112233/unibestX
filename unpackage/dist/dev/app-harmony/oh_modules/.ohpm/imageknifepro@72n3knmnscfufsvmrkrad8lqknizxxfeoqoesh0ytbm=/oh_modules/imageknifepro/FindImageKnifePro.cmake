
if(NOT IMAGEKNIFEPRO_ROOT_PATH)
	message(FATAL_ERROR "-- [IMAGEKNIFEPRO]: IMAGEKNIFEPRO_ROOT_PATH must be set up at first.")
endif()

set(IMAGEKNIFEPRO_SEARCH_PATH ${IMAGEKNIFEPRO_ROOT_PATH})
set(CMAKE_CXX_STANDARD 17)
# find base path
find_path(IMAGEKNIFEPRO_PATH
    NAMES include/imageknife.h
    PATHS ${IMAGEKNIFEPRO_SEARCH_PATH}
    CMAKE_FIND_ROOT_PATH_BOTH
    )

# find includes
if(NOT IMAGEKNIFEPRO_INCLUDE_DIRS)
    find_path(IMAGEKNIFEPRO_INCLUDE_DIR
        NAMES imageknife.h
        PATHS ${IMAGEKNIFEPRO_PATH}
        PATH_SUFFIXES include
        CMAKE_FIND_ROOT_PATH_BOTH
    )

    set(IMAGEKNIFEPRO_INCLUDE_DIRS
        ${IMAGEKNIFEPRO_INCLUDE_DIR})
endif()

# find link directories
if(NOT IMAGEKNIFEPRO_LINK_DIRS)
    find_path(IMAGEKNIFEPRO_LIB_LINK_DIRS
        NAMES libimageknifepro.so
        PATHS "${IMAGEKNIFEPRO_PATH}"
        PATH_SUFFIXES "libs/${CMAKE_OHOS_ARCH_ABI}"
        CMAKE_FIND_ROOT_PATH_BOTH
    )

    set(IMAGEKNIFEPRO_LINK_DIRS
        ${IMAGEKNIFEPRO_LIB_LINK_DIRS})
    if("${OHOS_ARCH}" STREQUAL "arm64-v8a")
        set(RCP_LINK_DIRS ${HMOS_SDK_NATIVE}/sysroot/usr/lib/aarch64-linux-ohos)
    elseif("${OHOS_ARCH}" STREQUAL "armeabi-v7a")
        set(RCP_LINK_DIRS ${HMOS_SDK_NATIVE}/sysroot/usr/lib/arm-linux-ohos)
    elseif("${OHOS_ARCH}" STREQUAL "x86_64")
        set(RCP_LINK_DIRS ${HMOS_SDK_NATIVE}/sysroot/usr/lib/x86_64-linux-ohos)
    endif()
endif()

# find librarys
if(NOT IMAGEKNIFEPRO_LIBRARIS)
    find_library(IMAGEKNIFEPRO_LIBRARY
        NAMES imageknifepro
        PATHS "${IMAGEKNIFEPRO_PATH}"
        PATH_SUFFIXES "libs/${CMAKE_OHOS_ARCH_ABI}"
        CMAKE_FIND_ROOT_PATH_BOTH
    )

    set(IMAGEKNIFEPRO_LIBRARIS
        imageknifepro
        ace_napi.z
        ace_ndk.z
        rcp_c
        image_source
        pixelmap
        rawfile.z
        ohresmgr
        hilog_ndk.z
        ohcrypto)

endif()

# 编译宏
if(NOT IMAGEKNIFEPRO_DEFINITIONS)
    if(OHOS)
        set(IMAGEKNIFEPRO_DEFINITIONS ${IMAGEKNIFEPRO_DEFINITIONS} "IMAGEKNIFEPRO_ENABLE_NAPI=1")
    endif()
endif()

include(FindPackageHandleStandardArgs)
find_package_handle_standard_args(IMAGEKNIFEPRO DEFAULT_MSG
    IMAGEKNIFEPRO_INCLUDE_DIRS
    IMAGEKNIFEPRO_LIBRARIS
)

if(IMAGEKNIFEPRO_FOUND AND NOT TARGET Imageknifepro::libimageknifepro)
    # 创建接口lib
    add_library(Imageknifepro::libimageknifepro INTERFACE IMPORTED)

    # 设置target 头文件依赖
    target_include_directories(Imageknifepro::libimageknifepro INTERFACE ${IMAGEKNIFEPRO_INCLUDE_DIRS})

    # 设置target link依赖路径
    target_link_directories(Imageknifepro::libimageknifepro INTERFACE ${IMAGEKNIFEPRO_LINK_DIRS}
                                                                  ${RCP_LINK_DIRS})

    # 设置target lib依赖
    target_link_libraries(Imageknifepro::libimageknifepro INTERFACE ${IMAGEKNIFEPRO_LIBRARIS})

    # 设置target 编译宏
    target_compile_definitions(Imageknifepro::libimageknifepro INTERFACE ${IMAGEKNIFEPRO_DEFINITIONS})

    # 安全编译选项 NO Rpath 规则
    set(CMAKE_SKIP_RPATH TRUE)
endif()
