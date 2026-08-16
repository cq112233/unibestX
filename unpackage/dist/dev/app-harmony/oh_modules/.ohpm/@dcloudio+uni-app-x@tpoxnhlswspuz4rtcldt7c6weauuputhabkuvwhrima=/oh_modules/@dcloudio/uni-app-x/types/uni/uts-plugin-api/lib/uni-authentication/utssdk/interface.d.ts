
export interface Uni {
    /**
     * 开始 SOTER 生物认证
     *
     * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/bio-auth.html#startsoterauthentication
     * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/system/authentication.html#startsoterauthentication
     * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/bio-auth.html#startsoterauthentication
     *
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
     *       "uniVer": "4.31",
     *       "unixVer": "4.61"
     *     }
     *   },
     *   "web": {
     *     "uniVer": "x",
     *     "unixVer": "x"
     *   },
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "1.5.0",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.startSoterAuthentication.html
     */
    startSoterAuthentication(options: StartSoterAuthenticationOptions): void;
    /**
     * 获取本机支持的 SOTER 生物认证方式
     *
     * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/bio-auth.html#checkissupportsoterauthentication
     * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/bio-auth.html#checkissupportsoterauthentication
     * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/system/authentication.html#checkissupportsoterauthentication
     *
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
     *       "uniVer": "4.31",
     *       "unixVer": "4.61"
     *     }
     *   },
     *   "web": {
     *     "uniVer": "x",
     *     "unixVer": "x"
     *   },
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "1.5.0",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.checkIsSupportSoterAuthentication.html
     */
    checkIsSupportSoterAuthentication(options: CheckIsSupportSoterAuthenticationOptions): void;
    /**
     * 获取设备内是否录入如指纹等生物信息
     *
     * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/bio-auth.html#checkissoterenrolledindevice
     * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/bio-auth.html#checkissoterenrolledindevice
     * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/system/authentication.html#checkissoterenrolledindevice
     *
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
     *       "uniVer": "4.31",
     *       "unixVer": "4.61"
     *     }
     *   },
     *   "web": {
     *     "uniVer": "x",
     *     "unixVer": "x"
     *   },
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "1.6.0",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.checkIsSoterEnrolledInDevice.html
     */
    checkIsSoterEnrolledInDevice(options: CheckIsSoterEnrolledInDeviceOptions): void;
}

export type StartSoterAuthentication = (options: StartSoterAuthenticationOptions) => void;
/**
* 生物认证方式
*/
export type SoterAuthMode =
    /**
     * 指纹识别
     */
    'fingerPrint' |
    /**
     * 人脸识别
     */
    'facial' |
    /**
     * 声纹识别（暂未支持）
     */
    'speech';

export type StartSoterAuthenticationSuccess = {
    /**
     * 错误码
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
    errCode: number,
    /**
     * 生物认证方式
     * - fingerPrint: 指纹识别
     * - facial: 人脸识别
     * - speech: 声纹识别（暂未支持）
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
    authMode: SoterAuthMode,
    /**
     * 在设备安全区域（TEE）内获得的本机安全信息以及本次认证信息
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
    resultJSON?: string | null,
    /**
     * 用SOTER安全密钥对 resultJSON 的签名(SHA256 with RSA/PSS, saltlen=20)
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
    resultJSONSignature?: string | null,
    /**
     * 接口调用结果
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
    errMsg: string
};
export type StartSoterAuthenticationSuccessCallback = (result: StartSoterAuthenticationSuccess) => void;
export type StartSoterAuthenticationFail = UniError;
export type StartSoterAuthenticationFailCallback = (result: StartSoterAuthenticationFail) => void;
export type StartSoterAuthenticationComplete = any;
export type StartSoterAuthenticationCompleteCallback = (result: StartSoterAuthenticationComplete) => void;
export type StartSoterAuthenticationOptions = {
    /**
     * 请求使用的可接受的生物认证方式
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
    requestAuthModes: SoterAuthMode[],
    /**
     * 挑战因子
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
    challenge?: string | null,
    /**
     * 验证描述，即识别过程中显示在界面上的对话框提示内容
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
    authContent?: string | null,
    /**
     * 接口调用成功的回调函数
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
    success?: StartSoterAuthenticationSuccessCallback | null,
    /**
     * 接口调用失败的回调函数
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
    fail?: StartSoterAuthenticationFailCallback | null,
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
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
    complete?: StartSoterAuthenticationCompleteCallback | null
};
export type CheckIsSupportSoterAuthentication = (options: CheckIsSupportSoterAuthenticationOptions) => void;
export type CheckIsSupportSoterAuthenticationSuccess = {
    /**
     * 接口调用成功的回调函数
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
    supportMode: SoterAuthMode[],
    /**
     * 接口调用结果
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
    errMsg: string
};
export type CheckIsSupportSoterAuthenticationSuccessCallback = (result: CheckIsSupportSoterAuthenticationSuccess) => void;
export type CheckIsSupportSoterAuthenticationFail = UniError;
export type CheckIsSupportSoterAuthenticationFailCallback = (result: CheckIsSupportSoterAuthenticationFail) => void;
export type CheckIsSupportSoterAuthenticationComplete = any;
export type CheckIsSupportSoterAuthenticationCompleteCallback = (result: CheckIsSupportSoterAuthenticationComplete) => void;
export type CheckIsSupportSoterAuthenticationOptions = {
    /**
     * 接口调用成功的回调函数
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
    success?: CheckIsSupportSoterAuthenticationSuccessCallback | null,
    /**
     * 接口调用失败的回调函数
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
    fail?: CheckIsSupportSoterAuthenticationFailCallback | null,
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
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
    complete?: CheckIsSupportSoterAuthenticationCompleteCallback | null
};
export type CheckIsSoterEnrolledInDevice = (options: CheckIsSoterEnrolledInDeviceOptions) => void;
export type CheckIsSoterEnrolledInDeviceSuccess = {
    /**
     * 是否已录入信息
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
    isEnrolled: boolean,
    /**
     * 错误信息
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
    errMsg: string
};
export type CheckIsSoterEnrolledInDeviceSuccessCallback = (result: CheckIsSoterEnrolledInDeviceSuccess) => void;
export type CheckIsSoterEnrolledInDeviceFail = UniError;
export type CheckIsSoterEnrolledInDeviceFailCallback = (result: CheckIsSoterEnrolledInDeviceFail) => void;
export type CheckIsSoterEnrolledInDeviceComplete = any;
export type CheckIsSoterEnrolledInDeviceCompleteCallback = (result: CheckIsSoterEnrolledInDeviceComplete) => void;
export type CheckIsSoterEnrolledInDeviceOptions = {
    /**
     * 生物认证方式
     * - fingerPrint: 指纹识别
     * - facial: 人脸识别（暂未支持）
     * - speech: 声纹识别（暂未支持）
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
    checkAuthMode: SoterAuthMode,
    /**
     * 接口调用成功的回调函数
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
    success?: CheckIsSoterEnrolledInDeviceSuccessCallback | null,
    /**
     * 接口调用失败的回调函数
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
    fail?: CheckIsSoterEnrolledInDeviceFailCallback | null,
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
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
    complete?: CheckIsSoterEnrolledInDeviceCompleteCallback | null
};
