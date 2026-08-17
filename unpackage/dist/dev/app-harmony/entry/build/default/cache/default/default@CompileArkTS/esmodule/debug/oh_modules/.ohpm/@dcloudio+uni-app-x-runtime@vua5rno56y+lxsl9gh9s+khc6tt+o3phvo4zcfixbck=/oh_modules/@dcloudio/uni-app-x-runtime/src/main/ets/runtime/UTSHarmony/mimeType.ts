import uniformTypeDescriptor from "@ohos:data.uniformTypeDescriptor";
/**
 * 如下方法参照android规范
 * https://developer.android.com/reference/android/webkit/MimeTypeMap#getMimeTypeFromExtension
 */
/**
 * getExtensionFromMimeType
 * @internal
 */
export function getExtensionFromMimeType(mimeType: string): string | null {
    const typeId = uniformTypeDescriptor.getUniformDataTypeByMIMEType(mimeType);
    const typeObj = uniformTypeDescriptor.getTypeDescriptor(typeId);
    const filenameExtensions = typeObj.filenameExtensions;
    return filenameExtensions[0] ? filenameExtensions[0].replace(/^./, '') : null;
}
/**
 * getMimeTypeFromExtension
 * @param {string} extension A file extension without the leading '.'
 * @internal
 */
export function getMimeTypeFromExtension(extension: string): string | null {
    const typeId = uniformTypeDescriptor.getUniformDataTypeByFilenameExtension('.' + extension);
    const typeObj = uniformTypeDescriptor.getTypeDescriptor(typeId);
    const mimeTypes = typeObj.mimeTypes;
    return mimeTypes[0] || null;
}
