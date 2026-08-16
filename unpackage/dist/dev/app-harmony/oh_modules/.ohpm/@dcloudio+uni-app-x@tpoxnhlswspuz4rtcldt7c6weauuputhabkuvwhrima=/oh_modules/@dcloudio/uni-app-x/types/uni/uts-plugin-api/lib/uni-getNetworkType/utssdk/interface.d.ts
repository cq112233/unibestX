export interface Uni {
    /**
     * getNetworkType()
     * @description
     * 获取网络类型
     * @param {GetNetworkTypeOptions} options
     * @return {void}
     * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/system/network.html#getnetworktype
     * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/get-network-type.html
     * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/get-network-type.html
     * @uniPlatform {
     *   "app": {
     *     "android": {
     *       "osVer": "5.0",
     *       "uniVer": "√",
     *       "unixVer": "3.9+"
     *     },
     *     "ios": {
     *       "osVer": "12.0",
     *       "uniVer": "√",
     *       "unixVer": "4.11"
     *     },
     *     "harmony": {
     *       "osVer": "3.0",
     *       "uniVer": "4.24",
     *       "unixVer": "4.61"
     *     }
     *   },
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "1.9.6",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "x"
     *     }
     *   },
     *   "web": {
     *     "uniVer": "√",
     *     "unixVer": "4.0"
     *   }
     * }
     * @example
     * ```typescript
     *   uni.getNetworkType({
     *     success(res){
     *       console.log(res);
     *     }
     *   });
     * ```
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.getNetworkType.html
     */
    getNetworkType(options: GetNetworkTypeOptions): void;
    /**
     * 监听网络状态变化
     *
     * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/system/network.html#onnetworkstatuschange
     * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/network-status-change.html
     * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/network-status-change.html
     * @uniPlatform {
     *   "app": {
     *     "android": {
     *       "osVer": "5.0",
     *       "uniVer": "√",
     *       "unixVer": "x"
     *     },
     *     "ios": {
     *       "osVer": "12.0",
     *       "uniVer": "√",
     *       "unixVer": "x"
     *     },
     *     "harmony": {
     *       "osVer": "3.0",
     *       "uniVer": "4.24",
     *       "unixVer": "4.61"
     *     }
     *   },
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "1.1.0",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "x"
     *     }
     *   },
     *   "web": {
     *     "uniVer": "√",
     *     "unixVer": "4.0"
     *   }
     * }
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.onNetworkStatusChange.html
     */
    onNetworkStatusChange(callback: OnNetworkStatusChangeCallback): void;
    /**
     * 取消监听网络状态变化
     *
     * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/system/network.html#offnetworkstatuschange
     * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/network-status-change.html
     * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/network-status-change.html
     * @uniPlatform {
     *   "app": {
     *     "android": {
     *       "osVer": "5.0",
     *       "uniVer": "√",
     *       "unixVer": "x"
     *     },
     *     "ios": {
     *       "osVer": "12.0",
     *       "uniVer": "√",
     *       "unixVer": "x"
     *     },
     *     "harmony": {
     *       "osVer": "3.0",
     *       "uniVer": "4.24",
     *       "unixVer": "4.61"
     *     }
     *   },
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "2.9.3",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "x"
     *     }
     *   },
     *   "web": {
     *     "uniVer": "√",
     *     "unixVer": "4.0"
     *   }
     * }
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.offNetworkStatusChange.html
     */
    offNetworkStatusChange(callback: (result: any) => void): void;
}

export type GetNetworkType = (options: GetNetworkTypeOptions) => void;
export type GetNetworkTypeSuccess = {
    /**
     * 网络类型
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
    networkType: string
    /**
     * 需要基础库： `2.22.1`
     *
     * 设备是否使用了网络代理
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "2.22.1",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
    hasSystemProxy?: boolean | null;
    /**
     * 信号强弱，单位 dbm
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
    signalStrength?: number | null;
    /**
     * 需要基础库： `3.5.3`
     *
     * 是否处于弱网环境
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "3.5.3",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
    weakNet?: boolean | null;
};
export type GetNetworkTypeSuccessCallback = (result: GetNetworkTypeSuccess) => void;
export type GetNetworkTypeFail = UniError;
export type GetNetworkTypeFailCallback = (result: GetNetworkTypeFail) => void;
export type GetNetworkTypeComplete = any;
export type GetNetworkTypeCompleteCallback = (result: GetNetworkTypeComplete) => void;
export type GetNetworkTypeOptions = {
    /**
     * 接口调用成功的回调函数
     * @defaultValue null
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
    success?: GetNetworkTypeSuccessCallback | null,
    /**
     * 接口调用失败的回调函数
     * @defaultValue null
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
    fail?: GetNetworkTypeFailCallback | null,
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     * @defaultValue null
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
    complete?: GetNetworkTypeCompleteCallback | null
};
export type OnNetworkStatusChangeCallbackResult = {
    /**
     * 当前是否有网络连接
     * @type boolean
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
    isConnected: boolean,
    /**
     * 网络类型
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
    networkType: string
};
export type OnNetworkStatusChangeCallback = (result: OnNetworkStatusChangeCallbackResult) => void;
export type OnNetworkStatusChange = (callback: OnNetworkStatusChangeCallback) => void;
export type OffNetworkStatusChange = (callback: (result: any) => void) => void;
