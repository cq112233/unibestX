export interface Uni {
    /**
     * 预加载页面
     *
     * @tutorial https://uniapp.dcloud.io/api/preload-page.html
     * @tutorial_uni_app https://uniapp.dcloud.io/api/preload-page.html
     * @uniPlatform {
     *  "app": {
     *    "android": {
     *      "osVer": "5.0",
     *      "uniVer": "2.7.12",
     *      "unixVer": "x"
     *    },
     *    "ios": {
     *      "osVer": "9.0",
     *      "uniVer": "2.7.12",
     *      "unixVer": "x"
     *    },
     *    "harmony": {
     *      "osVer": "x",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    }
     *  },
     *  "mp": {
     *    "weixin": {
     *      "hostVer": "x",
     *      "uniVer": "x",
     *      "unixVer": "4.41"
     *    },
     *    "alipay": {
     *      "hostVer": "x",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    },
     *    "baidu": {
     *      "hostVer": "x",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    },
     *    "toutiao": {
     *      "hostVer": "x",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    },
     *    "lark": {
     *      "hostVer": "x",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    },
     *    "qq": {
     *      "hostVer": "x",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    },
     *    "kuaishou": {
     *      "hostVer": "x",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    },
     *    "jd": {
     *      "hostVer": "x",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    }
     *  },
     *  "web": {
     *    "uniVer": "2.7.12",
     *    "unixVer": "x"
     *  }
     * }
     */
    preloadPage: PreloadPage;
}
export type PreloadPage = (options: PreloadPageOptions) => void;
export type PreloadPageSuccess = {};
export type UniError = {
    errSubject: string,
    errCode: number,
    errMsg: string,
    data?: object | null,
    cause?: any | null
};
export type PreloadPageSuccessCallback = (result: PreloadPageSuccess) => void;
export type PreloadPageFail = UniError;
export type PreloadPageFailCallback = (result: PreloadPageFail) => void;
export type PreloadPageComplete = any;
export type PreloadPageCompleteCallback = (result: PreloadPageComplete) => void;
export type PreloadPageOptions = {
    /**
     * 预加载页面的路径
     */
    url: string,
    /**
     * 接口调用成功的回调函数
     */
    success?: PreloadPageSuccessCallback | null,
    /**
     * 接口调用失败的回调函数
     */
    fail?: PreloadPageFailCallback | null,
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: PreloadPageCompleteCallback | null
};
