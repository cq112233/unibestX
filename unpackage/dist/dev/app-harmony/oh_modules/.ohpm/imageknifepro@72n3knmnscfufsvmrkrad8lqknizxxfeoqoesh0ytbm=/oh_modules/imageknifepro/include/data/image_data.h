#ifndef IMAGEKNIFEPRO_DOM2_LITE_IMAGE_DATA_H
#define IMAGEKNIFEPRO_DOM2_LITE_IMAGE_DATA_H

#include <cstdint>
#include <memory>
#include <multimedia/image_framework/image/image_common.h>
#include <multimedia/image_framework/image/pixelmap_native.h>

#include "imageknife_export.h"

namespace ImageKnifePro {

class ImageData final {
public:
    IMAGEKNIFEPRO_API ~ImageData();

    IMAGEKNIFEPRO_API Image_Size GetNaturalSize() const;
    IMAGEKNIFEPRO_API OH_PixelmapNative *GetPixelmap() const;
    IMAGEKNIFEPRO_API OH_PixelmapNative **GetPixelmapList() const;
    IMAGEKNIFEPRO_API int *GetDelayTimeList() const;
    IMAGEKNIFEPRO_API uint32_t GetFrameCount() const;

    ImageData(const ImageData &) = delete;
    ImageData &operator=(const ImageData &) = delete;

private:
    ImageData(std::shared_ptr<void> owner, OH_PixelmapNative **pixelmapList, int *delayTimeList,
        uint32_t frameCount, Image_Size naturalSize);

    std::shared_ptr<void> owner_;
    OH_PixelmapNative **pixelmapList_ = nullptr;
    int *delayTimeList_ = nullptr;
    uint32_t frameCount_ = 0;
    Image_Size naturalSize_ = {0, 0};

    friend class ImageDataFactory;
};

} // namespace ImageKnifePro

#endif
