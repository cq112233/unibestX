#ifndef IMAGEKNIFEPRO_DOM2_LITE_EXPORT_H
#define IMAGEKNIFEPRO_DOM2_LITE_EXPORT_H

#if defined(__GNUC__)
#define IMAGEKNIFEPRO_API __attribute__((visibility("default")))
#else
#define IMAGEKNIFEPRO_API
#endif

#endif
