if(NOT TARGET richtext::richtext)
    add_library(richtext::richtext SHARED IMPORTED)
    set_target_properties(richtext::richtext PROPERTIES
        INTERFACE_INCLUDE_DIRECTORIES "/Users/chenqi/Documents/chenqi-front/unibestX/unpackage/dist/dev/app-harmony/oh_modules/.ohpm/richtext@gkig+3szoby80newhj9i4izv7h5v3u05x0tkyyi86nk=/oh_modules/richtext/include"
        IMPORTED_LOCATION "/Users/chenqi/Documents/chenqi-front/unibestX/unpackage/dist/dev/app-harmony/oh_modules/.ohpm/richtext@gkig+3szoby80newhj9i4izv7h5v3u05x0tkyyi86nk=/oh_modules/richtext/libs/arm64-v8a/librichtext.so")
endif()
