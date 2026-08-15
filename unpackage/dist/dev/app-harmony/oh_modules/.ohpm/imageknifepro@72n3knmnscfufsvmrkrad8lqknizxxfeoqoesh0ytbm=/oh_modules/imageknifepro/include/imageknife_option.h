#ifndef IMAGEKNIFEPRO_DOM2_LITE_OPTION_H
#define IMAGEKNIFEPRO_DOM2_LITE_OPTION_H

#include <memory>

#include "image_source.h"
#include "imageknife_type.h"

namespace ImageKnifePro {

class ImageKnifeOption final {
public:
    ImageSource loadSrc;
    AnimationDecodeMode animationDecodeMode = AnimationDecodeMode::AUTO;
    Priority priority = Priority::LOW;
    std::shared_ptr<OnLoadCallBack> onLoadListener = nullptr;
};

} // namespace ImageKnifePro

#endif
