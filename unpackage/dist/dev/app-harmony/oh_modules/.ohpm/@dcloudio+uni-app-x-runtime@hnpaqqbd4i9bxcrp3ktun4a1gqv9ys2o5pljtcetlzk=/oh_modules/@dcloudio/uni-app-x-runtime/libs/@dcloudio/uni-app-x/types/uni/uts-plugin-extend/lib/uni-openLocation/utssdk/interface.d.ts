export interface IOpenLocationError extends IUniError {
  errCode: number
    /**
     * 错误信息
     *
     * @uniPlatform {
     *   "app": {
     *     "android": {
     *       "osVer": "5.0",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "ios": {
     *       "osVer": "12.0",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "harmony": {
     *       "osVer": "3.0",
     *       "uniVer": "4.25",
     *       "unixVer": "4.61"
     *     }
     *   },
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
     *   },
     *   "web": {
     *     "uniVer": "√",
     *     "unixVer": "4.0"
     *   }
     * }
     */
    errMsg?: string;
}

/**
 * uni.openLocation成功回调参数
 */
export type OpenLocationSuccess = {
    /**
     * 错误信息
     *
     * @uniPlatform {
     *   "app": {
     *     "android": {
     *       "osVer": "5.0",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "ios": {
     *       "osVer": "12.0",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "harmony": {
     *       "osVer": "3.0",
     *       "uniVer": "4.25",
     *       "unixVer": "4.61"
     *     }
     *   },
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
     *   },
     *   "web": {
     *     "uniVer": "√",
     *     "unixVer": "4.0"
     *   }
     * }
     */
    errMsg?: string;
}

/**
 * uni.openLocation失败回调参数
 */
export type OpenLocationFail = IOpenLocationError;

/**
 * uni.openLocation成功回调函数定义
 * @uniPlatform {
 *   "app": {
 *     "android": {
 *       "osVer": "5.0",
 *       "uniVer": "√",
 *       "unixVer": "4.41"
 *     },
 *     "ios": {
 *       "osVer": "12.0",
 *       "uniVer": "√",
 *       "unixVer": "4.41"
 *     },
 *     "harmony": {
 *       "osVer": "3.0",
 *       "uniVer": "4.25",
 *       "unixVer": "4.61"
 *     }
 *   },
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
 *   },
 *   "web": {
 *     "uniVer": "√",
 *     "unixVer": "4.0"
 *   }
 * }
 */
export type OpenLocationSuccessCallback = (res: OpenLocationSuccess) => void
/**
 * uni.openLocation失败回调函数定义
 * @uniPlatform {
 *   "app": {
 *     "android": {
 *       "osVer": "5.0",
 *       "uniVer": "√",
 *       "unixVer": "4.41"
 *     },
 *     "ios": {
 *       "osVer": "12.0",
 *       "uniVer": "√",
 *       "unixVer": "4.41"
 *     },
 *     "harmony": {
 *       "osVer": "3.0",
 *       "uniVer": "4.25",
 *       "unixVer": "4.61"
 *     }
 *   },
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
 *   },
 *   "web": {
 *     "uniVer": "√",
 *     "unixVer": "4.0"
 *   }
 * }
 */
export type OpenLocationFailCallback = (res: OpenLocationFail) => void
/**
 * uni.openLocation完成回调函数定义
 * @uniPlatform {
 *   "app": {
 *     "android": {
 *       "osVer": "5.0",
 *       "uniVer": "√",
 *       "unixVer": "4.41"
 *     },
 *     "ios": {
 *       "osVer": "12.0",
 *       "uniVer": "√",
 *       "unixVer": "4.41"
 *     },
 *     "harmony": {
 *       "osVer": "3.0",
 *       "uniVer": "4.25",
 *       "unixVer": "4.61"
 *     }
 *   },
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
 *   },
 *   "web": {
 *     "uniVer": "√",
 *     "unixVer": "4.0"
 *   }
 * }
 */
export type OpenLocationCompleteCallback = (res: any) => void

/**
 * uni.openLocation
 */
export type OpenLocationOptions = {
  /**
   * 纬度，范围为-90~90，负数表示南纬
     * @uniPlatform {
     *   "app": {
     *     "android": {
     *       "osVer": "5.0",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "ios": {
     *       "osVer": "12.0",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "harmony": {
     *       "osVer": "3.0",
     *       "uniVer": "4.25",
     *       "unixVer": "4.61"
     *     }
     *   },
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
     *   },
     *   "web": {
     *     "uniVer": "√",
     *     "unixVer": "4.0"
     *   }
     * }
     */
  latitude: number;
  /**
   * 经度，范围为-180~180，负数表示西经
     * @uniPlatform {
     *   "app": {
     *     "android": {
     *       "osVer": "5.0",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "ios": {
     *       "osVer": "12.0",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "harmony": {
     *       "osVer": "3.0",
     *       "uniVer": "4.25",
     *       "unixVer": "4.61"
     *     }
     *   },
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
     *   },
     *   "web": {
     *     "uniVer": "√",
     *     "unixVer": "4.0"
     *   }
     * }
     */
  longitude: number;
  /**
   * 缩放比例，范围5~18，默认为18
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "ios": {
   *       "osVer": "12.0",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "harmony": {
   *       "osVer": "3.0",
   *       "uniVer": "4.25",
   *       "unixVer": "4.61"
   *     }
   *   },
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
   *   },
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  scale?: number;
  /**
   * 位置名称
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "ios": {
   *       "osVer": "12.0",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "harmony": {
   *       "osVer": "3.0",
   *       "uniVer": "4.25",
   *       "unixVer": "4.61"
   *     }
   *   },
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
   *   },
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  name?: string;
  /**
   * 地址的详细说明
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "ios": {
   *       "osVer": "12.0",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "harmony": {
   *       "osVer": "3.0",
   *       "uniVer": "4.25",
   *       "unixVer": "4.61"
   *     }
   *   },
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
   *   },
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  address?: string;
  /**
   * 成功返回的回调函数
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "ios": {
   *       "osVer": "12.0",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "harmony": {
   *       "osVer": "3.0",
   *       "uniVer": "4.25",
   *       "unixVer": "4.61"
   *     }
   *   },
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
   *   },
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  success?: OpenLocationSuccessCallback;
  /**
   * 失败的回调函数
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "ios": {
   *       "osVer": "12.0",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "harmony": {
   *       "osVer": "3.0",
   *       "uniVer": "4.25",
   *       "unixVer": "4.61"
   *     }
   *   },
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
   *   },
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  fail?: OpenLocationFailCallback;
  /**
   * 结束的回调函数（调用成功、失败都会执行）
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "ios": {
   *       "osVer": "12.0",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "harmony": {
   *       "osVer": "3.0",
   *       "uniVer": "4.25",
   *       "unixVer": "4.61"
   *     }
   *   },
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
   *   },
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  complete?: OpenLocationCompleteCallback;
}

export type OpenLocation = (options: OpenLocationOptions) => void


export interface Uni {
  /**
   * 使用地图查看位置
   *
   * @tutorial https://uniapp.dcloud.io/api/location/open-location.html
   * @tutorial_uni_app https://uniapp.dcloud.io/api/location/open-location.html
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "ios": {
   *       "osVer": "12.0",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "harmony": {
   *       "osVer": "3.0",
   *       "uniVer": "4.25",
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
   *   },
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.openLocation.html
     */
  openLocation(options: OpenLocationOptions): void
}
