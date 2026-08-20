#ifndef IMAGEKNIFEPRO_DOM2_LITE_TYPE_H
#define IMAGEKNIFEPRO_DOM2_LITE_TYPE_H

#include <cstdint>
#include <functional>
#include <string>

namespace ImageKnifePro {

enum class ImageFormat {
    UNKNOWN = 0,
    JPG,
    PNG,
    WEBP,
    BMP,
    GIF,
    SVG,
    TIFF,
    HEIC,
    ICO,
    CUSTOM_FORMAT,
    AVIF
};

enum class Priority {
    HIGH = 0,
    MEDIUM,
    LOW
};

enum class AnimationDecodeMode {
    AUTO = 0,
    BATCH_MODE,
    FRAME_MODE
};

enum class LoadFailedCode {
    UNKNOWN_ERROR = 1,
    QUEUE_CANCEL = 1000000,
    LOADING_CANCEL = 1000001,
    DISPATCH_THREAD = 1000002,
    GENERATE_KEY = 1000003,
    LOAD_IMAGE_FAILED = 100300,
    LOAD_LOCAL_FILE_FAILED = 100401,
    IMAGE_SOURCE_ERROR = 100501,
    IMAGE_PIXEL_MAP_ERROR = 100502,
    IMAGE_DECODE_FAILED = 100503
};

enum class ImageSourceFrom {
    UNKNOWN = 0,
    MEMORY,
    FILE,
    NETWORK,
    LOCAL,
    DATA_URI
};

struct ErrorInfo {
    LoadFailedCode code = LoadFailedCode::UNKNOWN_ERROR;
    std::string phase;
};

struct ImageInfo {
    std::string requestId;
    bool isMergedRequest = false;
    ImageSourceFrom imageSourceFrom = ImageSourceFrom::UNKNOWN;
    uint32_t imageWidth = 0;
    uint32_t imageHeight = 0;
    uint32_t bufSize = 0;
    uint32_t httpCode = 0;
    ErrorInfo errorInfo;
    ImageFormat type = ImageFormat::UNKNOWN;
    uint32_t frameCount = 0;
};

struct OnLoadCallBack {
    std::function<void(ImageInfo)> onLoadSuccess = nullptr;
    std::function<void(std::string, ImageInfo)> onLoadFailed = nullptr;
    std::function<void(std::string, ImageInfo)> onLoadCancel = nullptr;
};

} // namespace ImageKnifePro

#endif
