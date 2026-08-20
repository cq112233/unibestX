if(NOT TARGET ffrt::ffrt_cpp)
    add_library(ffrt::ffrt_cpp SHARED IMPORTED)
    set_target_properties(ffrt::ffrt_cpp PROPERTIES
        INTERFACE_INCLUDE_DIRECTORIES "/Users/chenqi/Documents/chenqi-front/unibestX/unpackage/dist/dev/app-harmony/oh_modules/.ohpm/@ppd+ffrt@1.1.11/oh_modules/@ppd/ffrt/include"
        IMPORTED_LOCATION "/Users/chenqi/Documents/chenqi-front/unibestX/unpackage/dist/dev/app-harmony/oh_modules/.ohpm/@ppd+ffrt@1.1.11/oh_modules/@ppd/ffrt/libs/arm64-v8a/libffrt_cpp.so")
endif()
