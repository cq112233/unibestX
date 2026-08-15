#ifndef RICHTEXT_C_API_H
#define RICHTEXT_C_API_H

#include "RichTextExport.h"
#include <stdbool.h>
#include <stddef.h>
#include <stdint.h>

#ifdef __cplusplus
extern "C" {
#endif

#define RT_RICHTEXT_API_VERSION_1 1u

typedef void* RTRichTextEngineHandle;

typedef enum RTRichTextNativeHandleType {
    RT_RICHTEXT_NATIVE_HANDLE_NONE = 0,
    RT_RICHTEXT_NATIVE_HANDLE_OHOS_PIXELMAP = 1,
    RT_RICHTEXT_NATIVE_HANDLE_IOS_CGIMAGE = 2,
    RT_RICHTEXT_NATIVE_HANDLE_IOS_CVPIXELBUFFER = 3,
    RT_RICHTEXT_NATIVE_HANDLE_RGBA_BITMAP = 4,
    RT_RICHTEXT_NATIVE_HANDLE_ANDROID_BITMAP = 5
} RTRichTextNativeHandleType;

typedef enum RTRichTextRenderMode {
    RT_RICHTEXT_RENDER_MODE_DIRECT = 0,
    RT_RICHTEXT_RENDER_MODE_TILE_POOL = 1
} RTRichTextRenderMode;

typedef struct RTRichTextEngineConfig {
    int renderMode;
    int viewportWidth;
    int viewportHeight;
    float devicePixelRatio;
    int tileHeight;
    int bufferCount;
    int maxSlotCount;
    int tileHandleType;
    void* nativeWindow;
    bool disableVSync;
} RTRichTextEngineConfig;

typedef struct RTRichTextStyleConfig {
    const char* const* fontFamilies;
    size_t fontFamilyCount;
    const char* const* monospaceFamilies;
    size_t monospaceFamilyCount;
    float baseFontSize;
    float lineHeight;
    bool lineHeightIsMultiplier;
    bool lineHeightOverride;
    bool useBusinessHtmlDefaults;
    uint32_t defaultTextColor;
    uint32_t backgroundColor;
    uint32_t defaultLinkColor;
    uint32_t codeBackgroundColor;
    uint32_t preBackgroundColor;
    float padding;
    float paragraphSpacing;
    float listIndent;
    float codeFontSizeRatio;
    float prePadding;
    float preBorderRadius;
    const char* imageLoadFailedText;
    float imageAltFontSizeRatio;
    bool showImageLoadingPlaceholder;
} RTRichTextStyleConfig;

typedef struct RTRichTextTileSlot {
    int slotIndex;
    int tileIndex;
    int version;
    int y;
    int height;
    int handleType;
    void* handle;
    void* pixelmap;
} RTRichTextTileSlot;

typedef struct RTRichTextImageRequestResult {
    int handleType;
    void* handle;
    void* pixelmap;
    int width;
    int height;
} RTRichTextImageRequestResult;

typedef void (*RTRichTextHeightChangedCallback)(void* userData, float height);
typedef void (*RTRichTextStringCallback)(void* userData, const char* value);
typedef RTRichTextImageRequestResult (*RTRichTextImageRequestCallback)(void* userData, const char* url);

typedef struct RTRichTextApiV1 {
    uint32_t version;
    size_t size;
    RTRichTextEngineHandle (*createEngine)(const RTRichTextEngineConfig* config);
    void (*destroyEngine)(RTRichTextEngineHandle engine);
    void (*setHtmlContent)(RTRichTextEngineHandle engine, const char* html);
    void (*setStyleConfig)(RTRichTextEngineHandle engine, const RTRichTextStyleConfig* config);
    void (*setViewportSize)(RTRichTextEngineHandle engine, int width, int height);
    int (*setScrollY)(RTRichTextEngineHandle engine, float scrollY);
    float (*totalHeight)(RTRichTextEngineHandle engine);
    int (*getSlotCount)(RTRichTextEngineHandle engine);
    size_t (*getTileSlots)(RTRichTextEngineHandle engine, float scrollY, RTRichTextTileSlot* slots, size_t capacity);
    bool (*handleClick)(RTRichTextEngineHandle engine, float x, float y);
    void (*notifyFirstDrawComplete)(RTRichTextEngineHandle engine);
    void (*onImagePixelmapReady)(RTRichTextEngineHandle engine, const char* url, void* pixelmap, int width, int height);
    void (*onImageFailed)(RTRichTextEngineHandle engine, const char* url, const char* error);
    void (*setHeightChangedCallback)(RTRichTextEngineHandle engine, RTRichTextHeightChangedCallback callback, void* userData);
    void (*setImageRequestCallback)(RTRichTextEngineHandle engine, RTRichTextImageRequestCallback callback, void* userData);
    void (*setImageClickedCallback)(RTRichTextEngineHandle engine, RTRichTextStringCallback callback, void* userData);
    void (*setLinkClickedCallback)(RTRichTextEngineHandle engine, RTRichTextStringCallback callback, void* userData);
    bool (*registerFont)(RTRichTextEngineHandle engine, const char* familyName, const char* fontPath);
    bool (*setActiveFont)(const char* familyName);
} RTRichTextApiV1;

RICHTEXT_API const RTRichTextApiV1* RTRichTextGetApiV1(void);

#ifdef __cplusplus
}
#endif

#endif // RICHTEXT_C_API_H
