if(NOT TARGET uni-app-x-runtime::sdk)
    add_library(uni-app-x-runtime::sdk SHARED IMPORTED)
    set_target_properties(uni-app-x-runtime::sdk PROPERTIES
        IMPORTED_LOCATION "/Users/chenqi/Documents/chenqi-front/unibestX/unpackage/dist/dev/app-harmony/oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@hnpaqqbd4i9bxcrp3ktun4a1gqv9ys2o5pljtcetlzk=/oh_modules/@dcloudio/uni-app-x-runtime/libs/arm64-v8a/libsdk.so")
endif()
