import { UTSObject, IUniError, UTSJSONObject } from "@dcloudio/uni-app-framework";
type ConnectSocket = (options: ConnectSocketOptions) => SocketTask;
declare class ConnectSocketSuccess extends UTSObject {
    errMsg: string;
}
type ConnectSocketSuccessCallback = (result: ConnectSocketSuccess) => void;
type ConnectSocketErrorCode = 600009;
interface ConnectSocketFail extends IUniError {
    errCode: ConnectSocketErrorCode;
}
type ConnectSocketFailCallback = (result: ConnectSocketFail) => void;
type ConnectSocketComplete = Object;
type ConnectSocketCompleteCallback = (result: ConnectSocketComplete) => void;
declare class ConnectSocketOptions extends UTSObject {
    url: string;
    header: UTSJSONObject | null;
    protocols: (string[]) | null;
    success: ConnectSocketSuccessCallback | null;
    fail: ConnectSocketFailCallback | null;
    complete: ConnectSocketCompleteCallback | null;
}
declare class GeneralCallbackResult extends UTSObject {
    errMsg: string;
}
type SendSocketMessageErrorCode = 10001 | 10002 | 602001;
interface SendSocketMessageFail extends IUniError {
    errCode: SendSocketMessageErrorCode;
}
declare class SendSocketMessageOptions extends UTSObject {
    data: Object;
    success: ((result: GeneralCallbackResult) => void) | null;
    fail: ((result: SendSocketMessageFail) => void) | null;
    complete: ((result: Object) => void) | null;
}
declare class CloseSocketOptions extends UTSObject {
    code: number | null;
    reason: string | null;
    success: ((result: GeneralCallbackResult) => void) | null;
    fail: ((result: GeneralCallbackResult) => void) | null;
    complete: ((result: GeneralCallbackResult) => void) | null;
}
declare class OnSocketOpenCallbackResult extends UTSObject {
    header: Object;
}
declare class OnSocketMessageCallbackResult extends UTSObject {
    data: Object;
}
interface SocketTask {
    send(options: SendSocketMessageOptions): void;
    close(options: CloseSocketOptions): void;
    onOpen(callback: (result: OnSocketOpenCallbackResult) => void): void;
    onClose(callback: (result: Object) => void): void;
    onError(callback: (result: GeneralCallbackResult) => void): void;
    onMessage(callback: (result: OnSocketMessageCallbackResult) => void): void;
}
type OnSocketOpenCallback = (result: OnSocketOpenCallbackResult) => void;
type OnSocketOpen = (options: OnSocketOpenCallback) => void;
declare class OnSocketErrorCallbackResult extends UTSObject {
    errMsg: string;
}
type OnSocketErrorCallback = (result: OnSocketErrorCallbackResult) => void;
type OnSocketError = (callback: OnSocketErrorCallback) => void;
type SendSocketMessage = (options: SendSocketMessageOptions) => void;
type OnSocketMessageCallback = (result: OnSocketMessageCallbackResult) => void;
type OnSocketMessage = (callback: OnSocketMessageCallback) => void;
type CloseSocket = (options: CloseSocketOptions) => void;
declare class OnSocketCloseCallbackResult extends UTSObject {
    code: number;
    reason: string;
}
type OnSocketCloseCallback = (result: OnSocketCloseCallbackResult) => void;
type OnSocketClose = (callback: OnSocketCloseCallback) => void;
declare const connectSocket: ConnectSocket;
declare const onSocketMessage: OnSocketMessage;
declare const onSocketOpen: OnSocketOpen;
declare const onSocketError: OnSocketError;
declare const onSocketClose: OnSocketClose;
declare const sendSocketMessage: SendSocketMessage;
declare const closeSocket: CloseSocket;
export { CloseSocket as CloseSocket, CloseSocketOptions as CloseSocketOptions, ConnectSocket as ConnectSocket, ConnectSocketErrorCode as ConnectSocketErrorCode, ConnectSocketFail as ConnectSocketFail, ConnectSocketOptions as ConnectSocketOptions, ConnectSocketSuccess as ConnectSocketSuccess, GeneralCallbackResult as GeneralCallbackResult, OnSocketClose as OnSocketClose, OnSocketCloseCallback as OnSocketCloseCallback, OnSocketCloseCallbackResult as OnSocketCloseCallbackResult, OnSocketError as OnSocketError, OnSocketErrorCallback as OnSocketErrorCallback, OnSocketErrorCallbackResult as OnSocketErrorCallbackResult, OnSocketMessage as OnSocketMessage, OnSocketMessageCallback as OnSocketMessageCallback, OnSocketMessageCallbackResult as OnSocketMessageCallbackResult, OnSocketOpen as OnSocketOpen, OnSocketOpenCallback as OnSocketOpenCallback, OnSocketOpenCallbackResult as OnSocketOpenCallbackResult, SendSocketMessage as SendSocketMessage, SendSocketMessageErrorCode as SendSocketMessageErrorCode, SendSocketMessageFail as SendSocketMessageFail, SendSocketMessageOptions as SendSocketMessageOptions, SocketTask as SocketTask };
export { connectSocket as connectSocket };
export { onSocketMessage as onSocketMessage };
export { onSocketOpen as onSocketOpen };
export { onSocketError as onSocketError };
export { onSocketClose as onSocketClose };
export { sendSocketMessage as sendSocketMessage };
export { closeSocket as closeSocket };
