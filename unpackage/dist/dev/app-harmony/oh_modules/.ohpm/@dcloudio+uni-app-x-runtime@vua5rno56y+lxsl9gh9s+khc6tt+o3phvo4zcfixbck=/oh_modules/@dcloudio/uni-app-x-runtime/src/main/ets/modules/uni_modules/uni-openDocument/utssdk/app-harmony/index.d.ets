import { UTSObject, IUniError } from "@dcloudio/uni-app-framework";
declare class OpenDocumentSuccess extends UTSObject {
}
type OpenDocumentFail = IOpenDocumentError;
type OpenDocumentErrorCode = 1300601 | 1300602 | 1300603 | 1300604;
interface IOpenDocumentError extends IUniError {
    errCode: OpenDocumentErrorCode;
}
type OpenDocumentSuccessCallback = (res: OpenDocumentSuccess) => void;
type OpenDocumentFailCallback = (res: OpenDocumentFail) => void;
type OpenDocumentCompleteCallback = (res: Object) => void;
type OpenDocumentSupportedTypes = string;
declare class OpenDocumentOptions extends UTSObject {
    filePath: string;
    fileType: OpenDocumentSupportedTypes | null;
    success: OpenDocumentSuccessCallback | null;
    fail: OpenDocumentFailCallback | null;
    complete: OpenDocumentCompleteCallback | null;
}
type OpenDocument = (options?: OpenDocumentOptions | null) => void;
declare const openDocument: OpenDocument;
export { IOpenDocumentError as IOpenDocumentError, OpenDocument as OpenDocument, OpenDocumentCompleteCallback as OpenDocumentCompleteCallback, OpenDocumentErrorCode as OpenDocumentErrorCode, OpenDocumentFail as OpenDocumentFail, OpenDocumentFailCallback as OpenDocumentFailCallback, OpenDocumentOptions as OpenDocumentOptions, OpenDocumentSuccess as OpenDocumentSuccess, OpenDocumentSuccessCallback as OpenDocumentSuccessCallback, OpenDocumentSupportedTypes as OpenDocumentSupportedTypes };
export { openDocument as openDocument };
