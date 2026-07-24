import { UniProvider, IUniError, UTSObject } from "@dcloudio/uni-app-framework";
interface UniShareProvider extends UniProvider {
    share(options: ShareOptions): void;
}
interface IShareFail extends IUniError {
    errCode: ShareErrorCode;
}
type ShareErrorCode = 4000500 | 4000501 | 4000502 | 4000503 | 4000504 | 4000505 | 4000506 | 4000507 | 4000508 | 4000509 | 4000510 | 4000511;
type Share = (options: ShareOptions) => void;
type ShareMiniProgramShareType = 0 | 1 | 2;
declare class ShareMiniProgramShareOptions extends UTSObject {
    id: string | null;
    path: string | null;
    type: ShareMiniProgramShareType | null;
    webUrl: string | null;
}
declare class ShareSuccess extends UTSObject {
}
type ShareSuccessCallback = (result: ShareSuccess) => void;
type ShareFail = IShareFail;
type ShareFailCallback = (result: ShareFail) => void;
type ShareComplete = Object;
type ShareCompleteCallback = (result: ShareComplete) => void;
type ShareProvider = 'weixin';
type ShareType = 0 | 1 | 2 | 3 | 4 | 5;
type ShareScene = 'WXSceneSession' | 'WXSceneTimeline' | 'WXSceneFavorite';
declare class ShareOptions extends UTSObject {
    provider: ShareProvider | null;
    type: ShareType | null;
    title: string | null;
    scene: ShareScene | null;
    summary: string | null;
    href: string | null;
    imageUrl: string | null;
    mediaUrl: string | null;
    miniProgram: ShareMiniProgramShareOptions | null;
    openCustomerServiceChat: boolean | null;
    corpid: string | null;
    customerUrl: string | null;
    success: ShareSuccessCallback | null;
    fail: ShareFailCallback | null;
    complete: ShareCompleteCallback | null;
}
declare const share: Share;
export { IShareFail as IShareFail, Share as Share, ShareComplete as ShareComplete, ShareCompleteCallback as ShareCompleteCallback, ShareErrorCode as ShareErrorCode, ShareFail as ShareFail, ShareFailCallback as ShareFailCallback, ShareMiniProgramShareOptions as ShareMiniProgramShareOptions, ShareMiniProgramShareType as ShareMiniProgramShareType, ShareOptions as ShareOptions, ShareProvider as ShareProvider, ShareScene as ShareScene, ShareSuccess as ShareSuccess, ShareSuccessCallback as ShareSuccessCallback, ShareType as ShareType, UniShareProvider as UniShareProvider };
export { share as share };
