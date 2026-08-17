export interface ICompassError extends IUniError {
  errCode: number
    /**
     * 错误信息
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
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
     */
    errMsg?: string;
}
/**
 * uni.startCompass成功回调参数
 */
export type CompassSuccess = {
    /**
     * 错误信息
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
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
     */
    errMsg?: string;
}
/**
 * uni.startCompass失败回调参数
 */
export type CompassFail = ICompassError;
/**
 * uni.startCompass成功回调函数定义
 * @uniPlatform {
 *   "mp": {
 *     "weixin": {
 *       "hostVer": "√",
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
 */
export type CompassSuccessCallback = (res: CompassSuccess) => void
/**
 * uni.startCompass失败回调函数定义
 * @uniPlatform {
 *   "mp": {
 *     "weixin": {
 *       "hostVer": "√",
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
 */
export type CompassFailCallback = (res: CompassFail) => void
/**
 * uni.startCompass完成回调函数定义
 * @uniPlatform {
 *   "mp": {
 *     "weixin": {
 *       "hostVer": "√",
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
 */
export type CompassCompleteCallback = (res: any) => void


/**
 * uni.startCompass
 * @uniPlatform {
 *   "mp": {
 *     "weixin": {
 *       "hostVer": "√",
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
 */
interface StartCompassOptions {
  /**
   * 成功返回的回调函数
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
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
     */
  success?: CompassSuccessCallback;
  /**
   * 失败的回调函数
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
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
     */
  fail?: CompassFailCallback;
  /**
   * 结束的回调函数（调用成功、失败都会执行）
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
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
     */
  complete?: CompassCompleteCallback;
}


interface StopCompassOptions {
  /**
   * 成功返回的回调函数
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
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
     */
  success?: CompassSuccessCallback;
  /**
   * 失败的回调函数
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
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
     */
  fail?: CompassFailCallback;
  /**
   * 结束的回调函数（调用成功、失败都会执行）
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
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
     */
  complete?: CompassCompleteCallback;
}

/**
 * uni.onCompassChange
 * @uniPlatform {
 *   "mp": {
 *     "weixin": {
 *       "hostVer": "√",
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
 */
interface OnCompassChangeSuccess {
  /**
   * 面对的方向度数
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
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
     */
  direction: number;
    /**
     * 需要基础库： `2.4.0`
     *
     * 精度
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "2.4.0",
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
     *
     * @type any
     */
    accuracy?: any;
    /**
     * 错误信息
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
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
     */
    errMsg?: string;
}

export type OnCompassChange = (result: OnCompassChangeSuccess) => void


export interface Uni {
  /**
   * 监听罗盘数据
   *
   * @tutorial https://uniapp.dcloud.io/api/system/compass.html#oncompasschange
   * @tutorial_uni_app https://uniapp.dcloud.io/api/system/compass.html#oncompasschange
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
   *       "osVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   },
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "√",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "√",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "√",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "√",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "√",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "√",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   },
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.onCompassChange.html
     */
  onCompassChange(callback: OnCompassChange): void;
  /**
   * 取消监听罗盘数据
   *
   * @tutorial https://uniapp.dcloud.io/api/system/compass.html#offcompasschange
   * @tutorial_uni_app https://uniapp.dcloud.io/api/system/compass.html#offcompasschange
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
   *       "osVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
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
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "√",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "√",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "√",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "√",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "√",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   },
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.offCompassChange.html
     */
  offCompassChange(callback: OnCompassChange): void;
  /**
   * 开始监听罗盘数据
   *
   * @tutorial https://uniapp.dcloud.io/api/system/compass.html#startcompass
   * @tutorial_uni_app https://uniapp.dcloud.io/api/system/compass.html#startcompass
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
   *       "osVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
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
   *       "uniVer": "x",
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
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   },
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.startCompass.html
     */
  startCompass(options?: StartCompassOptions): void;
  /**
   * 停止监听罗盘数据
   *
   * @tutorial https://uniapp.dcloud.io/api/system/compass.html#stopcompass
   * @tutorial_uni_app https://uniapp.dcloud.io/api/system/compass.html#stopcompass
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
   *       "osVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
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
   *       "uniVer": "x",
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
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   },
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.stopCompass.html
     */
  stopCompass(options?: StopCompassOptions): void;
}
