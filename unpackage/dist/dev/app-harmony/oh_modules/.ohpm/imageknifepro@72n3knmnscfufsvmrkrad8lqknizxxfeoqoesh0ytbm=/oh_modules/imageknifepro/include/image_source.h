#ifndef IMAGEKNIFEPRO_DOM2_LITE_IMAGE_SOURCE_H
#define IMAGEKNIFEPRO_DOM2_LITE_IMAGE_SOURCE_H

#include <string>
#include <utility>

namespace ImageKnifePro {

class ImageSource final {
public:
    ImageSource() = default;
    explicit ImageSource(std::string value) : value_(std::move(value)) {}

    void SetString(std::string value)
    {
        value_ = std::move(value);
    }

    bool GetString(std::string &value) const
    {
        value = value_;
        return !value_.empty();
    }

    const std::string &GetString() const
    {
        return value_;
    }

private:
    std::string value_;
};

} // namespace ImageKnifePro

#endif
