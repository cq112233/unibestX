import { IUniError, UTSObject } from "@dcloudio/uni-app-framework";
import { ThreadWorkerGlobalScope as ThreadWorkerGlobalScope } from "@ohos.worker";
type WorkerOnErrorCallbackResultErrorCode = 5000501 | 5000502 | 5000503 | 5000504 | 5000505 | 5000506 | 5000510 | 5000511;
interface WorkerOnErrorCallbackResult extends IUniError {
    errCode: WorkerOnErrorCallbackResultErrorCode;
}
type WorkerOnMessageCallback = (message: Object) => void;
type WorkerOnErrorCallback = (result: WorkerOnErrorCallbackResult) => void;
declare class WorkerPostMessageOptions extends UTSObject {
    harmonySendable: boolean | null;
    transfer: (Object[]) | null;
}
interface Worker {
    onMessage(callback: WorkerOnMessageCallback): void;
    onError(callback: WorkerOnErrorCallback): void;
    postMessage(message: Object, options?: WorkerPostMessageOptions | null): void;
    terminate(): void;
}
type CreateWorker = (url: string) => Worker;
export { CreateWorker as CreateWorker, Worker as Worker, WorkerOnMessageCallback as WorkerOnMessageCallback, WorkerOnErrorCallback as WorkerOnErrorCallback, WorkerPostMessageOptions as WorkerPostMessageOptions, WorkerOnErrorCallbackResult as WorkerOnErrorCallbackResult, WorkerOnErrorCallbackResultErrorCode as WorkerOnErrorCallbackResultErrorCode };
declare const __UNI_THREAD_WORKER_ALREADY__ = "__UNI_THREAD_WORKER_ALREADY__";
declare const createWorker: CreateWorker;
declare class WorkerTaskImpl {
    private threadWorkerAlready;
    private messageQueue;
    workerPort: ThreadWorkerGlobalScope;
    constructor();
    entry(): void;
    onMessage(message: Object): void;
    postMessage(message: Object, options?: WorkerPostMessageOptions | null): void;
}
export { __UNI_THREAD_WORKER_ALREADY__ as __UNI_THREAD_WORKER_ALREADY__ };
export { createWorker as createWorker };
export { WorkerTaskImpl as WorkerTaskImpl };
