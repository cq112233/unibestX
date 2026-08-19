import { UTSObject, UTS, UniError, defineAsyncApi, getUniProvider } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { UniProvider, IUniError, ApiExecutor, ApiError } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
type RequestPaymentFailImpl = RequestPaymentFailImpl__1;
const RequestPaymentUniErrorSubject = 'uni-requestPayment';
interface UniPaymentProvider extends UniProvider {
    requestPayment(options: RequestPaymentOptions): void;
}
type RequestPaymentErrorCode = 700600 | 701100 | 701110 | 700601 | 700602 | 700603 | 700000 | 700604 | 700605 | 700607 | 700608 | 700800 | 700801;
type RequestPayment = (options: RequestPaymentOptions) => void;
class RequestPaymentSuccess extends UTSObject {
    data: object | null = null;
}
type RequestPaymentSuccessCallback = (result: RequestPaymentSuccess) => void;
type RequestPaymentFail = IRequestPaymentFail;
type RequestPaymentFailCallback = (result: RequestPaymentFail) => void;
type RequestPaymentComplete = Object;
interface IRequestPaymentFail extends IUniError {
    errCode: RequestPaymentErrorCode;
}
type RequestPaymentCompleteCallback = (result: RequestPaymentComplete) => void;
class RequestPaymentOptions extends UTSObject {
    provider!: string;
    orderInfo!: string;
    success: RequestPaymentSuccessCallback | null = null;
    fail: RequestPaymentFailCallback | null = null;
    complete: RequestPaymentCompleteCallback | null = null;
}
const RequestPaymentUniErrors: Map<RequestPaymentErrorCode, string> = new Map([
    [
        700600,
        'The payment result is unknown (it may have been successfully paid). Please check the payment status of the order in the merchant order list.'
    ],
    [
        701100,
        'Order payment failure.'
    ],
    [
        701110,
        'Repeat the request.'
    ],
    [
        700601,
        'The user canceled midway.'
    ],
    [
        700602,
        'Network connection error.'
    ],
    [
        700603,
        'Payment result unknown (may have been successfully paid), please check the payment status of the order in the merchant order list.'
    ],
    [
        700607,
        'Payment not completed.'
    ],
    [
        700608,
        'Parameter error.'
    ],
    [
        700000,
        'Other payment errors.'
    ],
    [
        700604,
        'Wechat is not installed.'
    ],
    [
        700605,
        'Failed to get provider.'
    ],
    [
        700800,
        'URL Scheme is not configured.'
    ],
    [
        700801,
        'Universal Link is not configured.'
    ]
]);
class RequestPaymentFailImpl__1 extends UniError implements IRequestPaymentFail {
    errCode: RequestPaymentErrorCode;
    constructor(errCode: RequestPaymentErrorCode) {
        super();
        this.errSubject = RequestPaymentUniErrorSubject;
        this.errCode = errCode;
        this.errMsg = UTS.mapGet(RequestPaymentUniErrors, errCode) ?? "";
    }
}
const API_REQUEST_PAYMENT = 'requestPayment';
const requestPayment: RequestPayment = defineAsyncApi<RequestPaymentOptions, RequestPaymentSuccess>(API_REQUEST_PAYMENT, (options: RequestPaymentOptions, exec: ApiExecutor<RequestPaymentSuccess>): void => {
    const provider = getUniProvider<UniPaymentProvider>('payment', options.provider);
    if (!provider) {
        exec.reject('Provider not found.');
        return;
    }
    provider.requestPayment({
        orderInfo: options.orderInfo,
        success: (result: RequestPaymentSuccess) => {
            exec.resolve(result);
        },
        fail: (error: RequestPaymentFail) => {
            const errMsg = UTS.mapGet(RequestPaymentUniErrors, error.errCode) ?? "";
            exec.reject(errMsg, {
                errCode: error.errCode
            } as ApiError);
        }
    } as RequestPaymentOptions);
}) as RequestPayment;
export { RequestPaymentOptions as RequestPaymentOptions, RequestPaymentSuccess as RequestPaymentSuccess };
export type { IRequestPaymentFail as IRequestPaymentFail, RequestPayment as RequestPayment, RequestPaymentComplete as RequestPaymentComplete, RequestPaymentCompleteCallback as RequestPaymentCompleteCallback, RequestPaymentErrorCode as RequestPaymentErrorCode, RequestPaymentFail as RequestPaymentFail, RequestPaymentFailCallback as RequestPaymentFailCallback, RequestPaymentFailImpl as RequestPaymentFailImpl, RequestPaymentSuccessCallback as RequestPaymentSuccessCallback, UniPaymentProvider as UniPaymentProvider };
export { requestPayment as requestPayment };
