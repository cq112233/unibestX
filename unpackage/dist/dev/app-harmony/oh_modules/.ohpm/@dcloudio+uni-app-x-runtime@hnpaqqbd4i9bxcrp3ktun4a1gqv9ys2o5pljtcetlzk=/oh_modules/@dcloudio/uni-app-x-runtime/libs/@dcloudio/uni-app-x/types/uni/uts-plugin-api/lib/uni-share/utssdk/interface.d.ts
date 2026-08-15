export interface Uni {
    /**
     * 分享
     *
     * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/plugins/share.html
     * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/share.html
     * @uniPlatform {
	 *    "app": {
	 *        "android": {
	 *            "osVer": "x",
	 *            "uniVer": "x",
	 *            "unixVer": "x"
	 *        },
	 *        "ios": {
	 *            "osVer": "x",
	 *            "uniVer": "x",
	 *            "unixVer": "x"
	 *        },
	 *        "harmony": {
	 *            "osVer": "5.0.0",
	 *            "uniVer": "√",
	 *            "unixVer": "4.66"
	 *        }
	 *    },
	 *    "web": {
	 *        "uniVer": "x",
	 *        "unixVer": "x"
	 *    }
	 * }
     */
    share: Share;
}

export type Share = (options: ShareOptions) => void;
export type ShareMiniProgramShareType =
/**
 * 正式版
 */
0 |
/**
 * 测试版
 */
1 |
/**
 * 体验版
 */
2
export type ShareMiniProgramShareOptions = {
    /**
     * 微信小程序原始id
     */
    id?: string | null,
    /**
     * 点击链接进入的页面
     */
    path?: string | null,
    /**
     * 微信小程序版本类型，默认为0。
     * @defaultValue 0
     */
    type?: ShareMiniProgramShareType | null,
    /**
     * 兼容低版本的网页链接
     */
    webUrl?: string | null
};
export type ShareSuccess = {};
export type ShareSuccessCallback = (result: ShareSuccess) => void;
export type ShareFail = UniError;
export type ShareFailCallback = (result: ShareFail) => void;
export type ShareComplete = any;
export type ShareCompleteCallback = (result: ShareComplete) => void;
export type ShareProvider = 'weixin'
export type ShareType =
/**
 * 图文
 */
0 |
/**
 * 纯文字
 */
1 |
/**
 * 纯图片
 */
2 |
/**
 * 音乐
 */
3 |
/**
 * 视频
 */
4 |
/**
 * 小程序
 */
5;
export type ShareScene =
/**
 * 分享到聊天界面
 */
'WXSceneSession' |
/**
 * 分享到朋友圈
 */
'WXSceneTimeline' |
/**
 * 分享微信收藏
 */
'WXSceneFavorite';
export type ShareOptions = {
    /**
     * 分享服务提供商，通过uni.getProvider获取，如果不设置则弹出分享列表选择界面
     * - sinaweibo: 新浪微博分享
     * - qq: 分享到QQ好友
     * - weixin: 分享微信消息、朋友圈及微信小程序
     */
    provider?: ShareProvider | null,
    /**
     * 分享类型。默认图文0
     * @defaultValue 0
     */
    type?: ShareType | null,
    /**
     * 标题
     */
    title?: string | null,
    /**
     * 场景
     */
    scene?: ShareScene | null,
    /**
     * 摘要
     */
    summary?: string | null,
    /**
     * 跳转链接
     */
    href?: string | null,
    /**
     * 图片地址
     */
    imageUrl?: string | null,
    /**
     * 音视频地址
     */
    mediaUrl?: string | null,
    /**
     * 分享小程序
     */
    miniProgram?: ShareMiniProgramShareOptions | null,
    /**
     * 是否启用拉起客服功能（目前仅支持微信）
     */
    openCustomerServiceChat?: boolean | null,
    /**
     * 客服ID（目前仅支持微信）
     */
    corpid?: string | null,
    /**
     * 客服的页面路径（目前仅支持微信）
     */
    customerUrl?: string | null,
    /**
     * 接口调用成功的回调函数
     */
    success?: ShareSuccessCallback | null,
    /**
     * 接口调用失败的回调函数
     */
    fail?: ShareFailCallback | null,
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: ShareCompleteCallback | null
};
export interface UniShareProvider extends UniProvider {
  share(options: ShareOptions): void;
}