/**
 * 如下方法参照android规范
 * https://developer.android.com/reference/android/webkit/MimeTypeMap#getMimeTypeFromExtension
 */
/**
 * getExtensionFromMimeType
 * @internal
 */
export declare function getExtensionFromMimeType(mimeType: string): string | null;
/**
 * getMimeTypeFromExtension
 * @param {string} extension A file extension without the leading '.'
 * @internal
 */
export declare function getMimeTypeFromExtension(extension: string): string | null;
