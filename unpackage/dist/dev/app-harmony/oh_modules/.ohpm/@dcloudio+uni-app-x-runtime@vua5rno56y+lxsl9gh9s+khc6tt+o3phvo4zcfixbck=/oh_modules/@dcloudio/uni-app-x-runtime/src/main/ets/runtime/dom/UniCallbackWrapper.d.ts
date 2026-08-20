import { UniCallbackWrapper as IUniCallbackWrapper } from '@dcloudio/uni-app-x/types/native';
export declare class UniCallbackWrapper implements IUniCallbackWrapper {
    callback: (...args: any[]) => any;
    constructor(callback: (...args: any[]) => any);
}
