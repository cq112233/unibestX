export interface Uni {
  /**
   * 设置系统剪贴板的内容
   *
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/clipboard.html#setclipboarddata
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/clipboard.html#setclipboarddata
   * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/system/clipboard.html#setclipboarddata
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "4.71"
   *     },
   *     "ios": {
   *       "osVer": "12.0",
   *       "uniVer": "√",
   *       "unixVer": "4.71"
   *     },
   *     "harmony": {
   *       "osVer": "3.0",
   *       "uniVer": "4.23",
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
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/device/clipboard/wx.setClipboardData.html
     */
  setClipboardData(options: SetClipboardDataOptions): void;
  /**
   * 获得系统剪贴板的内容
   *
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/clipboard.html#getclipboarddata
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/clipboard.html#getclipboarddata
   * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/system/clipboard.html#getclipboarddata
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "4.71"
   *     },
   *     "ios": {
   *       "osVer": "12.0",
   *       "uniVer": "√",
   *       "unixVer": "4.71"
   *     },
   *     "harmony": {
   *       "osVer": "3.0",
   *       "uniVer": "4.23",
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
   *       "unixVer": "√"
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
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/device/clipboard/wx.getClipboardData.html
     */
  getClipboardData(options: GetClipboardDataOptions): void;
}

export type ClipBoardErrorCode = 
/**
 * 没有权限或权限被拒
 */
102


export interface IClipBoardError extends IUniError {
	errCode: ClipBoardErrorCode
}
export type SetClipboardData = (options: SetClipboardDataOptions) => void;
export type SetClipboardDataSuccess = {};
export type SetClipboardDataSuccessCallback = (result: SetClipboardDataSuccess) => void;
export type SetClipboardDataFail = IClipBoardError;
export type SetClipboardDataFailCallback = (result: SetClipboardDataFail) => void;
export type SetClipboardDataComplete = any;
export type SetClipboardDataCompleteCallback = (result: SetClipboardDataComplete) => void;
export type SetClipboardDataOptions = {
  /**
   * 需要设置的内容
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
  data: string,
  /**
   * 是否弹出提示，默认弹出提示
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
  showToast?: boolean | null,
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
  success?: SetClipboardDataSuccessCallback | null,
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
  fail?: SetClipboardDataFailCallback | null,
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
  complete?: SetClipboardDataCompleteCallback | null
};
export type GetClipboardData = (options: GetClipboardDataOptions) => void;
export type GetClipboardDataSuccess = {
  /**
   * 剪贴板的内容
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
  data: string
};
export type GetClipboardDataSuccessCallback = (result: GetClipboardDataSuccess) => void;
export type GetClipboardDataFail = IClipBoardError;
export type GetClipboardDataFailCallback = (result: GetClipboardDataFail) => void;
export type GetClipboardDataComplete = any;
export type GetClipboardDataCompleteCallback = (result: GetClipboardDataComplete) => void;
export type GetClipboardDataOptions = {
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
  success?: GetClipboardDataSuccessCallback | null,
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
  fail?: GetClipboardDataFailCallback | null,
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
  complete?: GetClipboardDataCompleteCallback | null
};
