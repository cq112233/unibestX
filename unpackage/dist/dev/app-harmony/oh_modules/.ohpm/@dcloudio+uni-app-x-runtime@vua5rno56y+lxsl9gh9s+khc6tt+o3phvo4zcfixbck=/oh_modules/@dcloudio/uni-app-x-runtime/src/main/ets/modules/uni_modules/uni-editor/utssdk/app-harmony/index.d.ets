import { UTSObject } from "@dcloudio/uni-app-framework";
import { UniElement, UniError, string, ComponentPublicInstance, UniViewElementImpl } from "@dcloudio/uni-app-framework";
declare class UniEditorElementOptionsSuccessRes extends UTSObject {
    errMsg: string;
}
declare class UniEditorElementOptionsFailRes extends UTSObject {
    errMsg: string;
}
declare class UniEditorElementOptionsCompleteRes extends UTSObject {
    errMsg: string;
}
declare class UniEditorElementOptions extends UTSObject {
    success: ((res: UniEditorElementOptionsSuccessRes) => void) | null;
    fail: ((res: UniEditorElementOptionsFailRes) => void) | null;
    complete: ((res: UniEditorElementOptionsCompleteRes) => void) | null;
}
declare class UniEditorElementInsertImageOptions extends UTSObject {
    src: string | null;
    alt: string | null;
    width: string | null;
    height: string | null;
    extClass: string | null;
    data: Object | null;
    success: ((res: UniEditorElementOptionsSuccessRes) => void) | null;
    fail: ((res: UniEditorElementOptionsFailRes) => void) | null;
    complete: ((res: UniEditorElementOptionsCompleteRes) => void) | null;
}
declare class UniEditorElementInsertTextOptions extends UTSObject {
    text: string | null;
    success: ((res: UniEditorElementOptionsSuccessRes) => void) | null;
    fail: ((res: UniEditorElementOptionsFailRes) => void) | null;
    complete: ((res: UniEditorElementOptionsCompleteRes) => void) | null;
}
declare class UniEditorElementInsertLinkOptions extends UTSObject {
    text: string | null;
    href: string;
    success: ((res: UniEditorElementOptionsSuccessRes) => void) | null;
    fail: ((res: UniEditorElementOptionsFailRes) => void) | null;
    complete: ((res: UniEditorElementOptionsCompleteRes) => void) | null;
}
declare class UniEditorElementInsertMentionOptions extends UTSObject {
    id: string | null;
    name: string | null;
    color: string | null;
    background: string | null;
    radius: string | null;
    success: ((res: UniEditorElementOptionsSuccessRes) => void) | null;
    fail: ((res: UniEditorElementOptionsFailRes) => void) | null;
    complete: ((res: UniEditorElementOptionsCompleteRes) => void) | null;
}
declare class UniEditorElementSetContentsOptions extends UTSObject {
    delta: Object | null;
    html: string | null;
    success: ((res: UniEditorElementOptionsSuccessRes) => void) | null;
    fail: ((res: UniEditorElementOptionsFailRes) => void) | null;
    complete: ((res: UniEditorElementOptionsCompleteRes) => void) | null;
}
declare class UniEditorElementGetSelectionTextOptionsRes extends UTSObject {
    errMsg: string;
    text: string;
}
declare class UniEditorElementGetSelectionTextOptions extends UTSObject {
    success: ((res: UniEditorElementGetSelectionTextOptionsRes) => void) | null;
    fail: ((res: UniEditorElementOptionsFailRes) => void) | null;
    complete: ((res: UniEditorElementOptionsCompleteRes) => void) | null;
}
declare class UniEditorElementGetContentsOptionsRes extends UTSObject {
    errMsg: string;
    delta: Object;
    html: string;
    text: string;
}
declare class UniEditorElementGetContentsOptions extends UTSObject {
    success: ((res: UniEditorElementGetContentsOptionsRes) => void) | null;
    fail: ((res: UniEditorElementOptionsFailRes) => void) | null;
    complete: ((res: UniEditorElementOptionsCompleteRes) => void) | null;
}
interface IUniEditorElement extends UniElement {
    format(name: string, value?: string | number | null): void;
    insertDivider(options: UniEditorElementOptions | null): void;
    insertImage(options: UniEditorElementInsertImageOptions | null): void;
    insertText(options: UniEditorElementInsertTextOptions | null): void;
    insertLink(options: UniEditorElementInsertLinkOptions | null): void;
    insertMention(options?: UniEditorElementInsertMentionOptions | null): void;
    setContents(options: UniEditorElementSetContentsOptions | null): void;
    getContents(options: UniEditorElementGetContentsOptions | null): void;
    clear(options: UniEditorElementOptions | null): void;
    removeFormat(options: UniEditorElementOptions | null): void;
    undo(options: UniEditorElementOptions | null): void;
    redo(options: UniEditorElementOptions | null): void;
    getSelectionText(options: UniEditorElementGetSelectionTextOptions | null): void;
    scrollIntoView(options: UniEditorElementOptions | null): void;
}
type CreateEditorContextAsyncSuccessCallback = (context: EditorContext) => void;
type CreateEditorContextAsyncFailCallback = (error: UniError) => void;
type CreateEditorContextAsyncCompleteCallback = () => void;
declare class CreateEditorContextAsyncOptions extends UTSObject {
    id: string.IDString;
    component: ComponentPublicInstance | null;
    success: CreateEditorContextAsyncSuccessCallback | null;
    fail: CreateEditorContextAsyncFailCallback | null;
    complete: CreateEditorContextAsyncCompleteCallback | null;
}
interface EditorContext {
    format(name: string, value?: string | number | null): void;
    insertDivider(options?: UniEditorElementOptions | null): void;
    insertImage(options?: UniEditorElementInsertImageOptions | null): void;
    insertText(options?: UniEditorElementInsertTextOptions | null): void;
    insertLink(options?: UniEditorElementInsertLinkOptions | null): void;
    insertMention(options?: UniEditorElementInsertMentionOptions | null): void;
    setContents(options?: UniEditorElementSetContentsOptions | null): void;
    getContents(options?: UniEditorElementGetContentsOptions | null): void;
    clear(options?: UniEditorElementOptions | null): void;
    removeFormat(options?: UniEditorElementOptions | null): void;
    undo(options?: UniEditorElementOptions | null): void;
    redo(options?: UniEditorElementOptions | null): void;
    getSelectionText(options?: UniEditorElementGetSelectionTextOptions | null): void;
    scrollIntoView(options?: UniEditorElementOptions | null): void;
    blur(options?: UniEditorElementOptions | null): void;
}
type CreateEditorContextAsync = (options: CreateEditorContextAsyncOptions) => void;
export { UniEditorElementOptions as UniEditorElementOptions, UniEditorElementInsertImageOptions as UniEditorElementInsertImageOptions, UniEditorElementInsertTextOptions as UniEditorElementInsertTextOptions, UniEditorElementInsertLinkOptions as UniEditorElementInsertLinkOptions, UniEditorElementInsertMentionOptions as UniEditorElementInsertMentionOptions, UniEditorElementGetSelectionTextOptions as UniEditorElementGetSelectionTextOptions, UniEditorElementSetContentsOptions as UniEditorElementSetContentsOptions, UniEditorElementGetSelectionTextOptionsRes as UniEditorElementGetSelectionTextOptionsRes, CreateEditorContextAsync as CreateEditorContextAsync, CreateEditorContextAsyncOptions as CreateEditorContextAsyncOptions, EditorContext as EditorContext, UniEditorElementGetContentsOptions as UniEditorElementGetContentsOptions, UniEditorElementOptionsSuccessRes as UniEditorElementOptionsSuccessRes, UniEditorElementOptionsFailRes as UniEditorElementOptionsFailRes, UniEditorElementOptionsCompleteRes as UniEditorElementOptionsCompleteRes, UniEditorElementGetContentsOptionsRes as UniEditorElementGetContentsOptionsRes, IUniEditorElement as IUniEditorElement };
declare class NativeEditor {
    id: string;
    private pendingCallbacks;
    private disposed;
    constructor(id: string, element: UniEditorElement);
    registerCallback(cbId: number, options: UTSObject | null): void;
    private handleCallback;
    dispose(): void;
}
declare class UniEditorElement extends UniViewElementImpl implements IUniEditorElement {
    tagName: string;
    nodeName: string;
    private nativeEditor;
    dispose(): void;
    private getNativeEditorId;
    setNativeEditor(nativeEditor: NativeEditor): void;
    format(name: string, value?: string | number | null): void;
    insertDivider(options: UniEditorElementOptions | null): void;
    insertImage(options: UniEditorElementInsertImageOptions | null): void;
    insertText(options: UniEditorElementInsertTextOptions | null): void;
    insertLink(options: UniEditorElementInsertLinkOptions | null): void;
    insertMention(options: UniEditorElementInsertMentionOptions | null): void;
    setContents(options: UniEditorElementSetContentsOptions | null): void;
    getContents(options: UniEditorElementGetContentsOptions | null): void;
    clear(options: UniEditorElementOptions | null): void;
    removeFormat(options: UniEditorElementOptions | null): void;
    undo(options: UniEditorElementOptions | null): void;
    redo(options: UniEditorElementOptions | null): void;
    blur(): void;
    getSelectionText(options: UniEditorElementGetSelectionTextOptions | null): void;
    scrollIntoView(options: UniEditorElementOptions | null): void;
}
declare const createEditorContextAsync: CreateEditorContextAsync;
export { NativeEditor as NativeEditor };
export { UniEditorElement as UniEditorElement };
export { createEditorContextAsync as createEditorContextAsync };
