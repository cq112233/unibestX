if(NOT TARGET videocompressor::videoCompressor)
    add_library(videocompressor::videoCompressor SHARED IMPORTED)
    set_target_properties(videocompressor::videoCompressor PROPERTIES
        IMPORTED_LOCATION "/Users/chenqi/Documents/chenqi-front/unibestX/unpackage/dist/dev/app-harmony/oh_modules/.ohpm/@ohos+videocompressor@soegz02lhnnihit14ad03wcy4dhlg8y+cdslhkqxb5s=/oh_modules/@ohos/videocompressor/libs/arm64-v8a/libvideoCompressor.so")
endif()
