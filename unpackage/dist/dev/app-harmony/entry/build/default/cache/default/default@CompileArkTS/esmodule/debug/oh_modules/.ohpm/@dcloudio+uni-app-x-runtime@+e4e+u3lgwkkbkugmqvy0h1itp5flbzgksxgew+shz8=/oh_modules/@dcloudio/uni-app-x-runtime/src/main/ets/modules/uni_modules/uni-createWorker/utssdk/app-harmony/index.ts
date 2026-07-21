import type { BusinessError } from "@ohos:base";
import { EventHub } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import { UTSObject, UTS, UniError, defineSyncApi, UTSJSONObject } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { IUniError, ProtocolOptions } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { ThreadWorkerGlobalScope } from "@ohos:worker";
import worker from "@ohos:worker";
import type { ErrorEvent } from "@ohos:worker";
import deviceInfo from "@ohos:deviceInfo";
type WorkerOnErrorCallbackResultErrorCode = 5000501 | 5000502 | 5000503 | 5000504 | 5000505 | 5000506 | 5000510 | 5000511;
interface WorkerOnErrorCallbackResult extends IUniError {
    errCode: WorkerOnErrorCallbackResultErrorCode;
}
type WorkerOnMessageCallback = (message: Object) => void;
type WorkerOnErrorCallback = (result: WorkerOnErrorCallbackResult) => void;
class WorkerPostMessageOptions extends UTSObject {
    harmonySendable: boolean | null = null;
    transfer: (Object[]) | null = null;
}
interface Worker {
    onMessage(callback: WorkerOnMessageCallback): void;
    onError(callback: WorkerOnErrorCallback): void;
    postMessage(message: Object, options?: WorkerPostMessageOptions | null): void;
    terminate(): void;
}
type CreateWorker = (url: string) => Worker;
const CREATE_WORKER = 'createWorker';
const CreateWorkerApiProtocol = new Map<string, ProtocolOptions>([
    [
        'url',
        {
            type: 'string',
            required: true
        }
    ]
]);
const CreateWorkerUniErrorSubject = 'uni-createWorker';
const WORKER_RUN_FAILED = 5000501;
const WORKER_SERIALIZATION_FAILED = 5000502;
const CreateWorkerUniErrorMap: Map<WorkerOnErrorCallbackResultErrorCode, string> = new Map([
    [
        5000501,
        'worker run failed.'
    ],
    [
        5000502,
        'worker serialization failed.'
    ],
    [
        5000503,
        'The Worker instance is not running.'
    ],
    [
        5000504,
        'The called API is not supported in the worker thread.'
    ],
    [
        5000505,
        'Worker initialization failed.'
    ],
    [
        5000506,
        'The worker file path is invalid.'
    ],
    [
        5000510,
        'An error occurred when a non-main thread called the worker api.'
    ],
    [
        5000511,
        'The worker thread is invalid.'
    ]
]);
class WorkerOnErrorCallbackResultImpl extends UniError implements WorkerOnErrorCallbackResult {
    errCode: WorkerOnErrorCallbackResultErrorCode;
    constructor(errCode: WorkerOnErrorCallbackResultErrorCode, message: string | null = null) {
        super();
        this.errSubject = CreateWorkerUniErrorSubject;
        this.errCode = errCode;
        const errMsg = UTS.mapGet(CreateWorkerUniErrorMap, errCode) ?? "";
        this.errMsg = message ? `${errMsg} reason:${message}` : errMsg;
    }
}
export { WorkerPostMessageOptions as WorkerPostMessageOptions };
export type { CreateWorker as CreateWorker, Worker as Worker, WorkerOnMessageCallback as WorkerOnMessageCallback, WorkerOnErrorCallback as WorkerOnErrorCallback, WorkerOnErrorCallbackResult as WorkerOnErrorCallbackResult, WorkerOnErrorCallbackResultErrorCode as WorkerOnErrorCallbackResultErrorCode };
function transformErrorCode(code: number): number {
    switch (code) {
        case 10200004:
            return 5000503;
        case 10200005:
            return 5000504;
        case 10200003:
            return 5000505;
        case 10200007:
            return 5000506;
        default:
            break;
    }
    return 5000501;
}
function getNormalizedPath(url: string): string {
    return url.startsWith('/') ? url.slice(1) : url;
}
const __UNI_THREAD_WORKER_ALREADY__ = '__UNI_THREAD_WORKER_ALREADY__';
const createWorker: CreateWorker = defineSyncApi<Worker>(CREATE_WORKER, (url: string): Worker => {
    try {
        const threadWorker = new worker.ThreadWorker(`entry/ets/${getNormalizedPath(url)}`);
        threadWorker.postMessage(__UNI_THREAD_WORKER_ALREADY__);
        const ThreadWorkerEventHub = new EventHub();
        threadWorker.onmessage = (event) => {
            ThreadWorkerEventHub.emit('message', event.data);
        };
        threadWorker.onmessageerror = (error) => {
            ThreadWorkerEventHub.emit('error', new WorkerOnErrorCallbackResultImpl(WORKER_SERIALIZATION_FAILED, error?.data));
        };
        if (deviceInfo.sdkApiVersion >= 18) {
            (threadWorker as any).onAllErrors = (error: ErrorEvent) => {
                ThreadWorkerEventHub.emit('error', new WorkerOnErrorCallbackResultImpl(WORKER_RUN_FAILED, `${error.message} in ${error.filename}(${error.lineno}:${error.colno})`));
            };
        }
        else {
            threadWorker.onerror = (error) => {
                ThreadWorkerEventHub.emit('error', new WorkerOnErrorCallbackResultImpl(WORKER_RUN_FAILED, `${error.message} in ${error.filename}(${error.lineno}:${error.colno})`));
            };
        }
        class WorkerImpl implements Worker {
            __v_skip: boolean = true;
            _threadWorker: worker.ThreadWorker;
            constructor() {
                this._threadWorker = threadWorker;
            }
            onMessage(callback: WorkerOnMessageCallback): void {
                ThreadWorkerEventHub.on('message', callback);
            }
            onError(callback: WorkerOnErrorCallback): void {
                ThreadWorkerEventHub.on('error', callback);
            }
            postMessage(message: Object, options: WorkerPostMessageOptions | null = null): void {
                if (message instanceof UTSJSONObject) {
                    message = globalThis.JSON.parse(globalThis.JSON.stringify(message));
                }
                if (options?.harmonySendable) {
                    if (options?.transfer && options.transfer.length > 0) {
                        this._threadWorker?.postMessageWithSharedSendable(message, options.transfer as ArrayBuffer[]);
                    }
                    else {
                        this._threadWorker?.postMessageWithSharedSendable(message);
                    }
                    return;
                }
                else if (options?.transfer && options.transfer.length > 0) {
                    this._threadWorker?.postMessage(message, options.transfer as ArrayBuffer[]);
                }
                else {
                    this._threadWorker?.postMessage(message);
                }
            }
            terminate(): void {
                this._threadWorker.removeAllListener();
                this._threadWorker.terminate();
                ThreadWorkerEventHub.dispose();
            }
        }
        return new WorkerImpl();
    }
    catch (error) {
        const errorCode = transformErrorCode((error as BusinessError).code);
        throw new WorkerOnErrorCallbackResultImpl(errorCode as WorkerOnErrorCallbackResultErrorCode, (error as BusinessError).message);
    }
}, CreateWorkerApiProtocol) as CreateWorker;
class WorkerTaskImpl {
    private threadWorkerAlready: boolean = false;
    private messageQueue: Array<[
        Object,
        WorkerPostMessageOptions | null
    ]> = [];
    workerPort: ThreadWorkerGlobalScope = worker.workerPort;
    constructor() {
        this.workerPort.onmessage = (e) => {
            if (e.data === '__UNI_THREAD_WORKER_ALREADY__' && !this.threadWorkerAlready) {
                this.threadWorkerAlready = true;
                for (const ref of this.messageQueue) {
                    let message = ref[0], options = ref[1];
                    this.postMessage(message, options);
                }
                this.messageQueue = [];
                return;
            }
            this.onMessage(e.data);
        };
    }
    entry(): void { }
    onMessage(message: Object): void { }
    postMessage(message: Object, options: WorkerPostMessageOptions | null = null): void {
        if (message instanceof UTSJSONObject) {
            message = globalThis.JSON.parse(globalThis.JSON.stringify(message));
        }
        if (!this.threadWorkerAlready) {
            this.messageQueue.push([
                message,
                options
            ]);
            return;
        }
        if (options?.harmonySendable) {
            if (options?.transfer && options.transfer.length > 0) {
                this.workerPort?.postMessageWithSharedSendable(message, options.transfer as ArrayBuffer[]);
            }
            else {
                this.workerPort?.postMessageWithSharedSendable(message);
            }
            return;
        }
        else if (options?.transfer && options.transfer.length > 0) {
            this.workerPort?.postMessage(message, options.transfer as ArrayBuffer[]);
        }
        else {
            this.workerPort?.postMessage(message);
        }
    }
}
export { __UNI_THREAD_WORKER_ALREADY__ as __UNI_THREAD_WORKER_ALREADY__ };
export { createWorker as createWorker };
export { WorkerTaskImpl as WorkerTaskImpl };
