if(NOT TARGET imageknifepro::imageknifepro)
    add_library(imageknifepro::imageknifepro SHARED IMPORTED)
    set_target_properties(imageknifepro::imageknifepro PROPERTIES
        INTERFACE_INCLUDE_DIRECTORIES "/Users/chenqi/Documents/chenqi-front/unibestX/unpackage/dist/dev/app-harmony/oh_modules/.ohpm/imageknifepro@72n3knmnscfufsvmrkrad8lqknizxxfeoqoesh0ytbm=/oh_modules/imageknifepro/include"
        IMPORTED_LOCATION "/Users/chenqi/Documents/chenqi-front/unibestX/unpackage/dist/dev/app-harmony/oh_modules/.ohpm/imageknifepro@72n3knmnscfufsvmrkrad8lqknizxxfeoqoesh0ytbm=/oh_modules/imageknifepro/libs/arm64-v8a/libimageknifepro.so")
endif()
