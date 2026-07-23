import webSocket from "@ohos:net.webSocket";
import { Emitter, getCurrentMP } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import { UTSObject, UTS, UniError, defineTaskApi, defineAsyncApi } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { IUniError, UTSJSONObject, ProtocolOptions, ApiOptions, ApiExecutor } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
type ConnectSocket = (options: ConnectSocketOptions) => SocketTask;
class ConnectSocketSuccess extends UTSObject {
    errMsg!: string;
}
type ConnectSocketSuccessCallback = (result: ConnectSocketSuccess) => void;
type ConnectSocketErrorCode = 600009;
interface ConnectSocketFail extends IUniError {
    errCode: ConnectSocketErrorCode;
}
type ConnectSocketFailCallback = (result: ConnectSocketFail) => void;
type ConnectSocketComplete = Object;
type ConnectSocketCompleteCallback = (result: ConnectSocketComplete) => void;
class ConnectSocketOptions extends UTSObject {
    url!: string;
    header: UTSJSONObject | null = null;
    protocols: (string[]) | null = null;
    success: ConnectSocketSuccessCallback | null = null;
    fail: ConnectSocketFailCallback | null = null;
    complete: ConnectSocketCompleteCallback | null = null;
}
class GeneralCallbackResult extends UTSObject {
    errMsg!: string;
}
type SendSocketMessageErrorCode = 10001 | 10002 | 602001;
interface SendSocketMessageFail extends IUniError {
    errCode: SendSocketMessageErrorCode;
}
class SendSocketMessageOptions extends UTSObject {
    data!: Object;
    success: ((result: GeneralCallbackResult) => void) | null = null;
    fail: ((result: SendSocketMessageFail) => void) | null = null;
    complete: ((result: Object) => void) | null = null;
}
class CloseSocketOptions extends UTSObject {
    code: number | null = null;
    reason: string | null = null;
    success: ((result: GeneralCallbackResult) => void) | null = null;
    fail: ((result: GeneralCallbackResult) => void) | null = null;
    complete: ((result: GeneralCallbackResult) => void) | null = null;
}
class OnSocketOpenCallbackResult extends UTSObject {
    header!: Object;
}
class OnSocketMessageCallbackResult extends UTSObject {
    data!: Object;
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
class OnSocketErrorCallbackResult extends UTSObject {
    errMsg!: string;
}
type OnSocketErrorCallback = (result: OnSocketErrorCallbackResult) => void;
type OnSocketError = (callback: OnSocketErrorCallback) => void;
type SendSocketMessage = (options: SendSocketMessageOptions) => void;
type OnSocketMessageCallback = (result: OnSocketMessageCallbackResult) => void;
type OnSocketMessage = (callback: OnSocketMessageCallback) => void;
type CloseSocket = (options: CloseSocketOptions) => void;
class OnSocketCloseCallbackResult extends UTSObject {
    code!: number;
    reason!: string;
}
type OnSocketCloseCallback = (result: OnSocketCloseCallbackResult) => void;
type OnSocketClose = (callback: OnSocketCloseCallback) => void;
const API_CONNECT_SOCKET = 'connectSocket';
const ConnectSocketApiProtocol = new Map<string, ProtocolOptions>([
    [
        'url',
        {
            type: 'string',
            required: true
        }
    ],
    [
        'header',
        {
            type: 'object',
            required: false
        }
    ],
    [
        'protocols',
        {
            type: 'string[]',
            required: false
        }
    ]
]);
const ConnectSocketApiOptions: ApiOptions<ConnectSocketOptions> = {
    formatArgs: new Map<string, Function>([
        [
            'url',
            (url: string, params: ConnectSocketOptions) => {
                if (url == null) {
                    throw new Error('url is required');
                }
            }
        ]
    ])
};
const API_SEND_SOCKET_MESSAGE = 'sendSocketMessage';
const API_CLOSE_SOCKET = 'closeSocket';
interface IUniWebsocketEmitter {
    on: (eventName: string, callback: Function) => void;
    once: (eventName: string, callback: Function) => void;
    off: (eventName: string, callback?: Function | null) => void;
    emit: (eventName: string, ...args: (Object | undefined | null)[]) => void;
}
function tryExec(fn: Function | null | undefined, ...args: Object[]) {
    if (!fn) {
        return;
    }
    try {
        fn(...args);
    }
    catch (error) {
        UTS.console.error(error);
    }
}
const GlobalWebsocketEmitter = new Emitter() as IUniWebsocketEmitter;
function destroySocketTaskEmitter(emitter: IUniWebsocketEmitter) {
    emitter.off('message');
    emitter.off('open');
    emitter.off('error');
    emitter.off('close');
}
class SocketTask__1 implements SocketTask {
    __v_skip: boolean = true;
    _destroy: Function;
    private _ws: webSocket.WebSocket;
    private _emitter: IUniWebsocketEmitter = new Emitter() as IUniWebsocketEmitter;
    constructor(ws: webSocket.WebSocket) {
        const mp = getCurrentMP();
        this._ws = ws;
        this._ws.on('message', (_, data) => {
            const message = {
                data
            } as OnSocketMessageCallbackResult;
            this._emitter.emit('message', message);
            if (mp && mp.appId) {
                const socketTasks = getSocketTasks(mp.appId);
                if (this === socketTasks[0]) {
                    GlobalWebsocketEmitter.emit('message', message);
                }
            }
        });
        this._ws.on('open', (_, data) => {
            this._emitter.emit('open', data);
            if (mp && mp.appId) {
                const socketTasks = getSocketTasks(mp.appId);
                if (this === socketTasks[0]) {
                    GlobalWebsocketEmitter.emit('open', data);
                }
            }
        });
        this._ws.on('error', (error) => {
            const message = {
                errMsg: error.message
            } as OnSocketErrorCallbackResult;
            this._emitter.emit('error', message);
            if (mp && mp.appId) {
                const socketTasks = getSocketTasks(mp.appId);
                if (this === socketTasks[0]) {
                    GlobalWebsocketEmitter.emit('error', message);
                }
            }
        });
        this._ws.on('close', (_, data) => {
            this._emitter.emit('close', data);
            if (mp && mp.appId) {
                const socketTasks = getSocketTasks(mp.appId);
                if (this === socketTasks[0]) {
                    GlobalWebsocketEmitter.emit('close', data);
                }
                const index = socketTasks.indexOf(this);
                if (index >= 0) {
                    socketTasks.splice(index, 1);
                }
            }
        });
        this._destroy = () => {
            destroySocketTaskEmitter(this._emitter);
            this.close();
        };
    }
    send(options: SendSocketMessageOptions) {
        this._ws.send(options.data as string | ArrayBuffer).then((success: boolean) => {
            if (success) {
                tryExec(options.success, {} as GeneralCallbackResult);
            }
            else {
                tryExec(options.fail, new UniError('send message failed'));
            }
        }, (err: Error) => {
            tryExec(options.fail, new UniError(err.message));
        });
    }
    close(options: CloseSocketOptions | null = null) {
        this._ws.close({
            code: typeof options?.code === 'number' ? options.code : 1000,
            reason: typeof options?.reason === 'string' ? options.reason : ''
        } as webSocket.WebSocketCloseOptions).then((success: boolean) => {
            if (success) {
                tryExec(options?.success, {} as GeneralCallbackResult);
            }
            else {
                tryExec(options?.fail, new UniError('close socket failed'));
            }
        }, (err: Error) => {
            tryExec(options?.fail, new UniError(err.message));
        });
    }
    onMessage(callback: Function) {
        this._emitter.on('message', callback);
    }
    onOpen(callback: Function) {
        this._emitter.on('open', callback);
    }
    onError(callback: Function) {
        this._emitter.on('error', callback);
    }
    onClose(callback: Function) {
        this._emitter.on('close', callback);
    }
}
const socketTasksMap: Map<string, SocketTask__1[]> = new Map();
function addSocketTask(task: SocketTask__1) {
    const mp = getCurrentMP();
    mp.on('beforeClose', task._destroy);
    task.onClose(() => {
        mp.off('beforeClose', task._destroy);
    });
    const id = mp.appId;
    if (!socketTasksMap.has(id)) {
        socketTasksMap.set(id, []);
    }
    const socketTasks = UTS.mapGet(socketTasksMap, id) as SocketTask__1[];
    socketTasks.push(task);
}
function getSocketTasks(id: string | null = null): SocketTask__1[] {
    if (!id) {
        const mp = getCurrentMP();
        id = mp.appId;
    }
    return UTS.mapGet(socketTasksMap, id!) || [];
}
const connectSocket = defineTaskApi<ConnectSocketOptions, ConnectSocketSuccess, SocketTask>(API_CONNECT_SOCKET, (args: ConnectSocketOptions, exec: ApiExecutor<ConnectSocketSuccess>): SocketTask__1 => {
    const ws = webSocket.createWebSocket();
    const mp = getCurrentMP();
    ws.connect(args.url, {
        header: args.header ? args.header as Object : undefined,
        protocol: args.protocols ? Array.isArray(args.protocols) ? args.protocols.join(',') : args.protocols : ''
    } as webSocket.WebSocketRequestOptions);
    const task = new SocketTask__1(ws);
    mp.on('beforeClose', task._destroy);
    task.onClose(() => {
        mp.off('beforeClose', task._destroy);
    });
    addSocketTask(task);
    exec.resolve({
        errMsg: 'connectSocket:ok'
    } as ConnectSocketSuccess);
    return task;
}, ConnectSocketApiProtocol, ConnectSocketApiOptions) as ConnectSocket;
const onSocketMessage: OnSocketMessage = (callback: Function) => {
    GlobalWebsocketEmitter.on('message', callback);
};
const onSocketOpen: OnSocketOpen = (callback: Function) => {
    GlobalWebsocketEmitter.on('open', callback);
};
const onSocketError: OnSocketError = (callback: Function) => {
    GlobalWebsocketEmitter.on('error', callback);
};
const onSocketClose: OnSocketClose = (callback: Function) => {
    GlobalWebsocketEmitter.on('close', callback);
};
const sendSocketMessage = defineAsyncApi<SendSocketMessageOptions, GeneralCallbackResult>(API_SEND_SOCKET_MESSAGE, (args: SendSocketMessageOptions, exec: ApiExecutor<GeneralCallbackResult>) => {
    const socketTasks = getSocketTasks();
    const task = socketTasks[0];
    if (task) {
        task.send({
            data: args.data,
            success(res) {
                exec.resolve(res);
            },
            fail(err) {
                exec.reject('sendSocketMessage:fail');
            }
        } as SendSocketMessageOptions);
    }
    else {
        exec.reject('WebSocket is not connected');
    }
}) as SendSocketMessage;
const closeSocket = defineAsyncApi<CloseSocketOptions, GeneralCallbackResult>(API_CLOSE_SOCKET, (args: CloseSocketOptions, exec: ApiExecutor<GeneralCallbackResult>) => {
    const socketTasks = getSocketTasks();
    const task = socketTasks[0];
    if (task) {
        task.close({
            code: args.code,
            reason: args.reason,
            success(res) {
                exec.resolve(res);
            },
            fail(err) {
                exec.reject('closeSocket:fail');
            }
        } as CloseSocketOptions);
    }
    else {
        exec.reject('WebSocket is not connected');
    }
}) as CloseSocket;
export { CloseSocketOptions as CloseSocketOptions, ConnectSocketOptions as ConnectSocketOptions, ConnectSocketSuccess as ConnectSocketSuccess, GeneralCallbackResult as GeneralCallbackResult, OnSocketCloseCallbackResult as OnSocketCloseCallbackResult, OnSocketErrorCallbackResult as OnSocketErrorCallbackResult, OnSocketMessageCallbackResult as OnSocketMessageCallbackResult, OnSocketOpenCallbackResult as OnSocketOpenCallbackResult, SendSocketMessageOptions as SendSocketMessageOptions };
export type { CloseSocket as CloseSocket, ConnectSocket as ConnectSocket, ConnectSocketErrorCode as ConnectSocketErrorCode, ConnectSocketFail as ConnectSocketFail, OnSocketClose as OnSocketClose, OnSocketCloseCallback as OnSocketCloseCallback, OnSocketError as OnSocketError, OnSocketErrorCallback as OnSocketErrorCallback, OnSocketMessage as OnSocketMessage, OnSocketMessageCallback as OnSocketMessageCallback, OnSocketOpen as OnSocketOpen, OnSocketOpenCallback as OnSocketOpenCallback, SendSocketMessage as SendSocketMessage, SendSocketMessageErrorCode as SendSocketMessageErrorCode, SendSocketMessageFail as SendSocketMessageFail, SocketTask as SocketTask };
export { connectSocket as connectSocket };
export { onSocketMessage as onSocketMessage };
export { onSocketOpen as onSocketOpen };
export { onSocketError as onSocketError };
export { onSocketClose as onSocketClose };
export { sendSocketMessage as sendSocketMessage };
export { closeSocket as closeSocket };
