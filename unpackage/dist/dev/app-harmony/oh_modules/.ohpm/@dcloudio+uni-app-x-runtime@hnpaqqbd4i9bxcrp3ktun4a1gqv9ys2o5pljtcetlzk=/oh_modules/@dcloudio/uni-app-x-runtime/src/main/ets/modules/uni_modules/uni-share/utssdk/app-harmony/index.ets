import { UniProvider, IUniError, UTSObject, ProtocolOptions, ApiOptions, defineAsyncApi, ApiExecutor, getUniProvider, ApiError } from "@dcloudio/uni-app-framework";
interface UniShareProvider extends UniProvider {
    share(options: ShareOptions): void;
}
interface IShareFail extends IUniError {
    errCode: ShareErrorCode;
}
type ShareErrorCode = 4000500 | 4000501 | 4000502 | 4000503 | 4000504 | 4000505 | 4000506 | 4000507 | 4000508 | 4000509 | 4000510 | 4000511;
type Share = (options: ShareOptions) => void;
type ShareMiniProgramShareType = 0 | 1 | 2;
class ShareMiniProgramShareOptions extends UTSObject {
    id: string | null = null;
    path: string | null = null;
    type: ShareMiniProgramShareType | null = null;
    webUrl: string | null = null;
}
class ShareSuccess extends UTSObject {
}
type ShareSuccessCallback = (result: ShareSuccess) => void;
type ShareFail = IShareFail;
type ShareFailCallback = (result: ShareFail) => void;
type ShareComplete = Object;
type ShareCompleteCallback = (result: ShareComplete) => void;
type ShareProvider = 'weixin';
type ShareType = 0 | 1 | 2 | 3 | 4 | 5;
type ShareScene = 'WXSceneSession' | 'WXSceneTimeline' | 'WXSceneFavorite';
class ShareOptions extends UTSObject {
    provider: ShareProvider | null = null;
    type: ShareType | null = null;
    title: string | null = null;
    scene: ShareScene | null = null;
    summary: string | null = null;
    href: string | null = null;
    imageUrl: string | null = null;
    mediaUrl: string | null = null;
    miniProgram: ShareMiniProgramShareOptions | null = null;
    openCustomerServiceChat: boolean | null = null;
    corpid: string | null = null;
    customerUrl: string | null = null;
    success: ShareSuccessCallback | null = null;
    fail: ShareFailCallback | null = null;
    complete: ShareCompleteCallback | null = null;
}
const API_SHARE = 'share';
const WX_SCENE: ShareScene[] = [
    'WXSceneSession',
    'WXSceneTimeline',
    'WXSceneFavorite'
];
const ShareApiProtocol = new Map<string, ProtocolOptions>([
    [
        'provider',
        {
            type: 'string'
        }
    ],
    [
        'timeout',
        {
            type: 'number'
        }
    ]
]);
const ShareApiOptions: ApiOptions<ShareOptions> = {
    formatArgs: new Map<string, Function>([
        [
            'type',
            (type: number, params: ShareOptions)=>{
                if (typeof params.type !== 'number') params.type = 0;
                return undefined;
            }
        ],
        [
            'scene',
            (scene: ShareScene, params: ShareOptions): string | undefined =>{
                const provider = params.provider, openCustomerServiceChat = params.openCustomerServiceChat;
                if (provider === 'weixin' && openCustomerServiceChat !== true && (!scene || !WX_SCENE.includes(scene))) {
                    return `分享到微信时，scene必须为以下其中一个：${WX_SCENE.join('、')}`;
                }
                return undefined;
            }
        ],
        [
            'summary',
            (summary: string, params: ShareOptions): string | undefined =>{
                if (params.type === 1 && !summary && params.openCustomerServiceChat !== true) {
                    return '分享纯文本时，summary必填且不超过 10KB';
                }
                return undefined;
            }
        ],
        [
            'href',
            (href: string, params: ShareOptions): string | undefined =>{
                if (params.type === 0 && !href && params.openCustomerServiceChat !== true) {
                    return '分享图文时，href必填且不超过 10KB';
                }
                return undefined;
            }
        ],
        [
            'imageUrl',
            (imageUrl: string, params: ShareOptions): string | undefined =>{
                if ([
                    0,
                    2,
                    5
                ].includes(Number(params.type)) && !imageUrl && params.openCustomerServiceChat !== true) {
                    return '分享图文、纯图片、小程序时，imageUrl 必填，推荐使用小于 64KB 的图片';
                }
                return undefined;
            }
        ],
        [
            'mediaUrl',
            (mediaUrl: string, params: ShareOptions): string | undefined =>{
                if ([
                    3,
                    4
                ].includes(Number(params.type)) && !mediaUrl && params.openCustomerServiceChat !== true) {
                    return '分享音乐、视频时，mediaUrl 必填';
                }
                return undefined;
            }
        ],
        [
            'miniProgram',
            (miniProgram: string, params: ShareOptions): string | undefined =>{
                if (params.type === 5 && !miniProgram && params.openCustomerServiceChat !== true) {
                    return '分享小程序时，miniProgram 必填';
                }
                return undefined;
            }
        ],
        [
            'corpid',
            (corpid: string, params: ShareOptions): string | undefined =>{
                if (params.openCustomerServiceChat && !corpid) {
                    return '使用打开客服功能时 corpid 必填';
                }
                return undefined;
            }
        ],
        [
            'customerUrl',
            (customerUrl: string, params: ShareOptions): string | undefined =>{
                if (params.openCustomerServiceChat && !customerUrl) {
                    return '使用打开客服功能时 customerUrl 必填';
                }
                return undefined;
            }
        ]
    ])
};
const SERVICE = 'share';
const DEFAULT_PROVIDER: ShareProvider = 'weixin';
const share: Share = defineAsyncApi<ShareOptions, ShareSuccess>(API_SHARE, (args: ShareOptions, executor: ApiExecutor<ShareSuccess>)=>{
    const provider = getUniProvider<UniShareProvider>(SERVICE, args.provider ?? DEFAULT_PROVIDER);
    if (!provider) {
        executor.reject('Provider not found.');
        return;
    }
    provider.share({
        type: args.type,
        title: args.title,
        scene: args.scene,
        summary: args.summary,
        href: args.href,
        imageUrl: args.imageUrl,
        mediaUrl: args.mediaUrl,
        miniProgram: args.miniProgram,
        openCustomerServiceChat: args.openCustomerServiceChat,
        corpid: args.corpid,
        customerUrl: args.customerUrl,
        success (res) {
            executor.resolve(res);
        },
        fail (err) {
            executor.reject(err.errMsg, err as ApiError);
        }
    } as ShareOptions);
}, ShareApiProtocol, ShareApiOptions) as Share;
export { IShareFail as IShareFail, Share as Share, ShareComplete as ShareComplete, ShareCompleteCallback as ShareCompleteCallback, ShareErrorCode as ShareErrorCode, ShareFail as ShareFail, ShareFailCallback as ShareFailCallback, ShareMiniProgramShareOptions as ShareMiniProgramShareOptions, ShareMiniProgramShareType as ShareMiniProgramShareType, ShareOptions as ShareOptions, ShareProvider as ShareProvider, ShareScene as ShareScene, ShareSuccess as ShareSuccess, ShareSuccessCallback as ShareSuccessCallback, ShareType as ShareType, UniShareProvider as UniShareProvider };
export { share as share };
