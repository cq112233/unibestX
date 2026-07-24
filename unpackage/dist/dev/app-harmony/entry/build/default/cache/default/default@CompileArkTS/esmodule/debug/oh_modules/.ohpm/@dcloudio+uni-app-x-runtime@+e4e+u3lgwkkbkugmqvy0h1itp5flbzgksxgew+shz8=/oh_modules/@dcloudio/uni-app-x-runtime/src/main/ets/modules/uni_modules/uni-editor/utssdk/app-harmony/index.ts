import { UTSObject } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import { UniError, uni, UTS, UniViewElementImpl, getCurrentPages } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { UniElement, string, ComponentPublicInstance } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
class UniEditorElementOptionsSuccessRes extends UTSObject {
    errMsg!: string;
}
class UniEditorElementOptionsFailRes extends UTSObject {
    errMsg!: string;
}
class UniEditorElementOptionsCompleteRes extends UTSObject {
    errMsg!: string;
}
class UniEditorElementOptions extends UTSObject {
    success: ((res: UniEditorElementOptionsSuccessRes) => void) | null = null;
    fail: ((res: UniEditorElementOptionsFailRes) => void) | null = null;
    complete: ((res: UniEditorElementOptionsCompleteRes) => void) | null = null;
}
class UniEditorElementInsertImageOptions extends UTSObject {
    src: string | null = null;
    alt: string | null = null;
    width: string | null = null;
    height: string | null = null;
    extClass: string | null = null;
    data: Object | null = null;
    success: ((res: UniEditorElementOptionsSuccessRes) => void) | null = null;
    fail: ((res: UniEditorElementOptionsFailRes) => void) | null = null;
    complete: ((res: UniEditorElementOptionsCompleteRes) => void) | null = null;
}
class UniEditorElementInsertTextOptions extends UTSObject {
    text: string | null = null;
    success: ((res: UniEditorElementOptionsSuccessRes) => void) | null = null;
    fail: ((res: UniEditorElementOptionsFailRes) => void) | null = null;
    complete: ((res: UniEditorElementOptionsCompleteRes) => void) | null = null;
}
class UniEditorElementInsertLinkOptions extends UTSObject {
    text: string | null = null;
    href!: string;
    success: ((res: UniEditorElementOptionsSuccessRes) => void) | null = null;
    fail: ((res: UniEditorElementOptionsFailRes) => void) | null = null;
    complete: ((res: UniEditorElementOptionsCompleteRes) => void) | null = null;
}
class UniEditorElementInsertMentionOptions extends UTSObject {
    id: string | null = null;
    name: string | null = null;
    color: string | null = null;
    background: string | null = null;
    radius: string | null = null;
    success: ((res: UniEditorElementOptionsSuccessRes) => void) | null = null;
    fail: ((res: UniEditorElementOptionsFailRes) => void) | null = null;
    complete: ((res: UniEditorElementOptionsCompleteRes) => void) | null = null;
}
class UniEditorElementSetContentsOptions extends UTSObject {
    delta: Object | null = null;
    html: string | null = null;
    success: ((res: UniEditorElementOptionsSuccessRes) => void) | null = null;
    fail: ((res: UniEditorElementOptionsFailRes) => void) | null = null;
    complete: ((res: UniEditorElementOptionsCompleteRes) => void) | null = null;
}
class UniEditorElementGetSelectionTextOptionsRes extends UTSObject {
    errMsg!: string;
    text!: string;
}
class UniEditorElementGetSelectionTextOptions extends UTSObject {
    success: ((res: UniEditorElementGetSelectionTextOptionsRes) => void) | null = null;
    fail: ((res: UniEditorElementOptionsFailRes) => void) | null = null;
    complete: ((res: UniEditorElementOptionsCompleteRes) => void) | null = null;
}
class UniEditorElementGetContentsOptionsRes extends UTSObject {
    errMsg!: string;
    delta!: Object;
    html!: string;
    text!: string;
}
class UniEditorElementGetContentsOptions extends UTSObject {
    success: ((res: UniEditorElementGetContentsOptionsRes) => void) | null = null;
    fail: ((res: UniEditorElementOptionsFailRes) => void) | null = null;
    complete: ((res: UniEditorElementOptionsCompleteRes) => void) | null = null;
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
class CreateEditorContextAsyncOptions extends UTSObject {
    id!: string.IDString;
    component: ComponentPublicInstance | null = null;
    success: CreateEditorContextAsyncSuccessCallback | null = null;
    fail: CreateEditorContextAsyncFailCallback | null = null;
    complete: CreateEditorContextAsyncCompleteCallback | null = null;
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
export { UniEditorElementOptions as UniEditorElementOptions, UniEditorElementInsertImageOptions as UniEditorElementInsertImageOptions, UniEditorElementInsertTextOptions as UniEditorElementInsertTextOptions, UniEditorElementInsertLinkOptions as UniEditorElementInsertLinkOptions, UniEditorElementInsertMentionOptions as UniEditorElementInsertMentionOptions, UniEditorElementGetSelectionTextOptions as UniEditorElementGetSelectionTextOptions, UniEditorElementSetContentsOptions as UniEditorElementSetContentsOptions, UniEditorElementGetSelectionTextOptionsRes as UniEditorElementGetSelectionTextOptionsRes, CreateEditorContextAsyncOptions as CreateEditorContextAsyncOptions, UniEditorElementGetContentsOptions as UniEditorElementGetContentsOptions, UniEditorElementOptionsSuccessRes as UniEditorElementOptionsSuccessRes, UniEditorElementOptionsFailRes as UniEditorElementOptionsFailRes, UniEditorElementOptionsCompleteRes as UniEditorElementOptionsCompleteRes, UniEditorElementGetContentsOptionsRes as UniEditorElementGetContentsOptionsRes };
export type { CreateEditorContextAsync as CreateEditorContextAsync, EditorContext as EditorContext, IUniEditorElement as IUniEditorElement };
function createEditorEventName(name: string, id: string): string {
    return `__UNIEDITOR_${name}_${id}`;
}
let callbackId = 100000;
function LOG(...args: string[]) { }
function generateCallbackId(): number {
    return ++callbackId;
}
class NativeEditor {
    id: string;
    private pendingCallbacks = new Map<number, UTSObject | null>();
    private disposed = false;
    constructor(id: string, element: UniEditorElement) {
        this.id = id;
        element?.setNativeEditor(this);
        uni.$on(createEditorEventName('callback', this.id), (cbId: number, result: UTSObject) => {
            this.handleCallback(cbId, result);
        });
    }
    registerCallback(cbId: number, options: UTSObject | null) {
        if (this.disposed) {
            return;
        }
        this.pendingCallbacks.set(cbId, options);
    }
    private handleCallback(cbId: number, result: UTSObject) {
        const callbacks = UTS.mapGet(this.pendingCallbacks, cbId);
        this.pendingCallbacks.delete(cbId);
        if (callbacks == null) {
            LOG('Callback not found for id:', cbId.toString());
            return;
        }
        const errMsg = result['errMsg'] as string | null;
        const isSuccess = errMsg != null && errMsg.indexOf(':ok') > -1;
        if (isSuccess) {
            const success = callbacks['success'] as ((res: UTSObject) => void) | null;
            if (success != null) {
                success(result);
            }
        }
        else {
            const fail = callbacks['fail'] as ((res: UTSObject) => void) | null;
            if (fail != null) {
                fail(result);
            }
        }
        const complete = callbacks['complete'] as ((res: UTSObject) => void) | null;
        if (complete != null) {
            complete(result);
        }
    }
    dispose() {
        if (this.disposed) {
            return;
        }
        this.disposed = true;
        this.pendingCallbacks.clear();
        uni.$off(createEditorEventName('callback', this.id));
    }
}
class UniEditorElement extends UniViewElementImpl implements IUniEditorElement {
    tagName: string = 'EDITOR';
    nodeName: string = 'EDITOR';
    private nativeEditor: NativeEditor | null = null;
    dispose() {
        this.nativeEditor?.dispose();
        this.nativeEditor = null;
        super.dispose();
    }
    private getNativeEditorId(): string {
        return this.nativeEditor!.id;
    }
    setNativeEditor(nativeEditor: NativeEditor) {
        this.nativeEditor = nativeEditor;
    }
    format(name: string, value: string | number | null = null): void {
        uni.$emit(createEditorEventName('format', this.getNativeEditorId()), name, value);
    }
    insertDivider(options: UniEditorElementOptions | null): void {
        const cbId = generateCallbackId();
        this.nativeEditor?.registerCallback(cbId, options);
        uni.$emit(createEditorEventName('insertDivider', this.getNativeEditorId()), options, cbId);
    }
    insertImage(options: UniEditorElementInsertImageOptions | null): void {
        const cbId = generateCallbackId();
        this.nativeEditor?.registerCallback(cbId, options);
        uni.$emit(createEditorEventName('insertImage', this.getNativeEditorId()), options, cbId);
    }
    insertText(options: UniEditorElementInsertTextOptions | null): void {
        const cbId = generateCallbackId();
        this.nativeEditor?.registerCallback(cbId, options);
        uni.$emit(createEditorEventName('insertText', this.getNativeEditorId()), options, cbId);
    }
    insertLink(options: UniEditorElementInsertLinkOptions | null): void {
        const cbId = generateCallbackId();
        this.nativeEditor?.registerCallback(cbId, options);
        uni.$emit(createEditorEventName('insertLink', this.getNativeEditorId()), options, cbId);
    }
    insertMention(options: UniEditorElementInsertMentionOptions | null): void {
        const cbId = generateCallbackId();
        this.nativeEditor?.registerCallback(cbId, options);
        uni.$emit(createEditorEventName('insertMention', this.getNativeEditorId()), options, cbId);
    }
    setContents(options: UniEditorElementSetContentsOptions | null): void {
        const cbId = generateCallbackId();
        this.nativeEditor?.registerCallback(cbId, options);
        uni.$emit(createEditorEventName('setContents', this.getNativeEditorId()), options, cbId);
    }
    getContents(options: UniEditorElementGetContentsOptions | null): void {
        const cbId = generateCallbackId();
        this.nativeEditor?.registerCallback(cbId, options);
        uni.$emit(createEditorEventName('getContents', this.getNativeEditorId()), options, cbId);
    }
    clear(options: UniEditorElementOptions | null): void {
        const cbId = generateCallbackId();
        this.nativeEditor?.registerCallback(cbId, options);
        uni.$emit(createEditorEventName('clear', this.getNativeEditorId()), options, cbId);
    }
    removeFormat(options: UniEditorElementOptions | null): void {
        const cbId = generateCallbackId();
        this.nativeEditor?.registerCallback(cbId, options);
        uni.$emit(createEditorEventName('removeFormat', this.getNativeEditorId()), options, cbId);
    }
    undo(options: UniEditorElementOptions | null): void {
        const cbId = generateCallbackId();
        this.nativeEditor?.registerCallback(cbId, options);
        uni.$emit(createEditorEventName('undo', this.getNativeEditorId()), options, cbId);
    }
    redo(options: UniEditorElementOptions | null): void {
        const cbId = generateCallbackId();
        this.nativeEditor?.registerCallback(cbId, options);
        uni.$emit(createEditorEventName('redo', this.getNativeEditorId()), options, cbId);
    }
    blur(): void {
        uni.$emit(createEditorEventName('blur', this.getNativeEditorId()));
    }
    getSelectionText(options: UniEditorElementGetSelectionTextOptions | null): void {
        const cbId = generateCallbackId();
        this.nativeEditor?.registerCallback(cbId, options);
        uni.$emit(createEditorEventName('getSelectionText', this.getNativeEditorId()), options, cbId);
    }
    scrollIntoView(options: UniEditorElementOptions | null): void {
        const cbId = generateCallbackId();
        this.nativeEditor?.registerCallback(cbId, options);
        uni.$emit(createEditorEventName('scrollIntoView', this.getNativeEditorId()), options, cbId);
    }
}
const createEditorContextAsync: CreateEditorContextAsync = (options): void => {
    const id = options.id;
    const component = options.component;
    const success = options.success;
    const fail = options.fail;
    const complete = options.complete;
    let editorElement: UniEditorElement | null = null;
    if (component == null) {
        const pages = getCurrentPages();
        if (pages.length > 0) {
            editorElement = pages[pages.length - 1].$vm!.$el?.parentElement?.querySelector('#' + id) as UniEditorElement | null;
        }
    }
    else {
        editorElement = component.$el?.parentElement?.querySelector('#' + id) as UniEditorElement | null;
    }
    if (editorElement == null) {
        const uniError = new UniError('uni-createEditorContextAsync', -1, 'editor id or component invalid.');
        fail?.(uniError);
        complete?.();
    }
    else {
        success?.(new EditorContextImpl(editorElement));
        complete?.();
    }
};
class EditorContextImpl implements EditorContext {
    private editorElement: UniEditorElement;
    constructor(editorElement: UniEditorElement) {
        this.editorElement = editorElement;
    }
    format(name: string, value: string | number | null): void {
        this.editorElement.format(name, value);
    }
    insertDivider(options: UniEditorElementOptions | null = null): void {
        this.editorElement.insertDivider(options);
    }
    insertImage(options: UniEditorElementInsertImageOptions | null = null): void {
        this.editorElement.insertImage(options);
    }
    insertText(options: UniEditorElementInsertTextOptions | null = null): void {
        this.editorElement.insertText(options);
    }
    insertLink(options: UniEditorElementInsertLinkOptions | null = null): void {
        this.editorElement.insertLink(options);
    }
    insertMention(options: UniEditorElementInsertMentionOptions | null = null): void {
        this.editorElement.insertMention(options);
    }
    setContents(options: UniEditorElementSetContentsOptions | null = null): void {
        this.editorElement.setContents(options);
    }
    getContents(options: UniEditorElementGetContentsOptions | null = null): void {
        this.editorElement.getContents(options);
    }
    getSelectionText(options: UniEditorElementGetSelectionTextOptions | null = null): void {
        this.editorElement.getSelectionText(options);
    }
    clear(options: UniEditorElementOptions | null = null): void {
        this.editorElement.clear(options);
    }
    removeFormat(options: UniEditorElementOptions | null = null): void {
        this.editorElement.removeFormat(options);
    }
    undo(options: UniEditorElementOptions | null = null): void {
        this.editorElement.undo(options);
    }
    redo(options: UniEditorElementOptions | null = null): void {
        this.editorElement.redo(options);
    }
    blur(options: UniEditorElementOptions | null = null): void {
        this.editorElement.blur();
        options?.success?.({
            errMsg: 'blur:ok'
        } as UniEditorElementOptionsSuccessRes);
        options?.complete?.({
            errMsg: 'blur:ok'
        } as UniEditorElementOptionsCompleteRes);
    }
    scrollIntoView(options: UniEditorElementOptions | null = null): void {
        this.editorElement.scrollIntoView(options);
    }
}
export { NativeEditor as NativeEditor };
export { UniEditorElement as UniEditorElement };
export { createEditorContextAsync as createEditorContextAsync };
