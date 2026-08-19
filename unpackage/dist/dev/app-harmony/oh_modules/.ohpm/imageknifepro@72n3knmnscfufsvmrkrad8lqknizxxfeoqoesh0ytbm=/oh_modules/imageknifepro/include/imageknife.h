#ifndef IMAGEKNIFEPRO_DOM2_LITE_IMAGEKNIFE_H
#define IMAGEKNIFEPRO_DOM2_LITE_IMAGEKNIFE_H

#include <future>
#include <memory>
#include <string>

#include "data/image_data.h"
#include "imageknife_export.h"
#include "imageknife_option.h"

namespace ImageKnifePro {

class ImageKnifeRequest;

IMAGEKNIFEPRO_API void InitImageKnifeCpp(const std::string &fileCacheDir);

class ImageKnife final {
public:
    IMAGEKNIFEPRO_API static ImageKnife &GetInstance();

    IMAGEKNIFEPRO_API std::shared_future<std::shared_ptr<ImageData>> GetCacheImage(
        const std::string &loadSrc);
    IMAGEKNIFEPRO_API std::shared_future<std::shared_ptr<ImageData>> GetCacheImage(
        std::shared_ptr<ImageKnifeOption> option, std::shared_ptr<ImageKnifeRequest> &request);
    IMAGEKNIFEPRO_API void CancelRequest(std::shared_ptr<ImageKnifeRequest> request);

    ImageKnife(const ImageKnife &) = delete;
    ImageKnife &operator=(const ImageKnife &) = delete;

private:
    ImageKnife() = default;
    ~ImageKnife() = default;
};

} // namespace ImageKnifePro

#endif
