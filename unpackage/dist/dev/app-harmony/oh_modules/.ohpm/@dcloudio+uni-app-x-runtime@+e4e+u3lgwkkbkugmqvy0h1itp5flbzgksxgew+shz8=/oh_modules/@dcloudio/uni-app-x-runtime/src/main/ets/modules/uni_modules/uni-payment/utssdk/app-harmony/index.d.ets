import { UniProvider, UTSObject, IUniError, UniError } from "@dcloudio/uni-app-framework";
type RequestPaymentFailImpl = RequestPaymentFailImpl__1;
interface UniPaymentProvider extends UniProvider {
    requestPayment(options: RequestPaymentOptions): void;
}
type RequestPaymentErrorCode = 700600 | 701100 | 701110 | 700601 | 700602 | 700603 | 700000 | 700604 | 700605 | 700607 | 700608 | 700800 | 700801;
type RequestPayment = (options: RequestPaymentOptions) => void;
declare class RequestPaymentSuccess extends UTSObject {
    data: object | null;
}
type RequestPaymentSuccessCallback = (result: RequestPaymentSuccess) => void;
type RequestPaymentFail = IRequestPaymentFail;
type RequestPaymentFailCallback = (result: RequestPaymentFail) => void;
type RequestPaymentComplete = Object;
interface IRequestPaymentFail extends IUniError {
    errCode: RequestPaymentErrorCode;
}
type RequestPaymentCompleteCallback = (result: RequestPaymentComplete) => void;
declare class RequestPaymentOptions extends UTSObject {
    provider: string;
    orderInfo: string;
    success: RequestPaymentSuccessCallback | null;
    fail: RequestPaymentFailCallback | null;
    complete: RequestPaymentCompleteCallback | null;
}
declare class RequestPaymentFailImpl__1 extends UniError implements IRequestPaymentFail {
    errCode: RequestPaymentErrorCode;
    constructor(errCode: RequestPaymentErrorCode);
}
declare const requestPayment: RequestPayment;
export { IRequestPaymentFail as IRequestPaymentFail, RequestPayment as RequestPayment, RequestPaymentComplete as RequestPaymentComplete, RequestPaymentCompleteCallback as RequestPaymentCompleteCallback, RequestPaymentErrorCode as RequestPaymentErrorCode, RequestPaymentFail as RequestPaymentFail, RequestPaymentFailCallback as RequestPaymentFailCallback, RequestPaymentFailImpl as RequestPaymentFailImpl, RequestPaymentOptions as RequestPaymentOptions, RequestPaymentSuccess as RequestPaymentSuccess, RequestPaymentSuccessCallback as RequestPaymentSuccessCallback, UniPaymentProvider as UniPaymentProvider };
export { requestPayment as requestPayment };
