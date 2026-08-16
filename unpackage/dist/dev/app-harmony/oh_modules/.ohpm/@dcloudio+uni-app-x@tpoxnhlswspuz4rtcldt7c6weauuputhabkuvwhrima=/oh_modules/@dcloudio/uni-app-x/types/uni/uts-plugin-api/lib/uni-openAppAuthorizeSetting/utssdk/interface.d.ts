export interface Uni {

  /**
   * openAppAuthorizeSetting()
   * @description
   * 跳转系统授权管理页
   * @param {OpenAppAuthorizeSettingOptions}  options
   * @return {void}
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/open-app-authorize-setting.html#openappauthorizesetting
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/open-app-authorize-setting.html#openappauthorizesetting
   * @tutorial_uni_app http://uniapp.dcloud.io/api/system/openappauthorizesetting
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "uniUtsPlugin": "4.51",
   *       "unixVer": "4.51"
   *     },
   *     "ios": {
   *       "osVer": "12.0",
   *       "uniVer": "√",
   *       "uniUtsPlugin": "4.51",
   *       "unixVer": "4.51",
   *       "unixUtsPlugin": "4.51"
   *     },
   *     "harmony": {
   *       "osVer": "3.0",
   *       "uniVer": "4.23",
   *       "unixVer": "4.61"
   *     }
   *   },
   *   "web": {
   *     "uniVer": "x",
   *     "unixVer": "x"
   *   },
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "2.20.1",
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
   * @example
    ```typescript
      uni.openAppAuthorizeSetting({});
    ```
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.openAppAuthorizeSetting.html
     */
  openAppAuthorizeSetting(options: OpenAppAuthorizeSettingOptions): void;
}

export type OpenAppAuthorizeSetting = (options: OpenAppAuthorizeSettingOptions) => void;
export type OpenAppAuthorizeSettingSuccess = {
  /**
   * 错误信息
   * @uniPlatform
    {
      "app": {
        "android": {
          "osVer": "5.0",
          "uniVer": "√",
          "uniUtsPlugin": "4.51",
          "unixVer": "4.51"
        },
        "ios": {
          "osVer": "12.0",
          "uniVer": "√",
          "uniUtsPlugin": "4.51",
          "unixVer": "4.51",
          "unixUtsPlugin": "4.51"
        },
        "harmony": {
          "osVer": "3.0",
          "uniVer": "4.23",
          "unixVer": "4.61"
        }
      },
      "web": {
        "uniVer": "x",
        "unixVer": "x"
      }
    }
   */
  errMsg: string
};
export type OpenAppAuthorizeSettingSuccessCallback = (result: OpenAppAuthorizeSettingSuccess) => void;
export type OpenAppAuthorizeSettingFail = {
  /**
   * 错误信息
   * @uniPlatform
    {
      "app": {
        "android": {
          "osVer": "5.0",
          "uniVer": "√",
          "uniUtsPlugin": "4.51",
          "unixVer": "4.51"
        },
        "ios": {
          "osVer": "12.0",
          "uniVer": "√",
          "uniUtsPlugin": "4.51",
          "unixVer": "4.51",
          "unixUtsPlugin": "4.51"
        },
        "harmony": {
          "osVer": "3.0",
          "uniVer": "4.23",
          "unixVer": "4.61"
        }
      },
      "web": {
        "uniVer": "x",
        "unixVer": "x"
      }
    }
   */
  errMsg: string
};
export type OpenAppAuthorizeSettingFailCallback = (result: OpenAppAuthorizeSettingFail) => void;
export type OpenAppAuthorizeSettingComplete = {
  /**
   * 错误信息
   * @uniPlatform
    {
      "app": {
        "android": {
          "osVer": "5.0",
          "uniVer": "√",
          "uniUtsPlugin": "4.51",
          "unixVer": "4.51"
        },
        "ios": {
          "osVer": "12.0",
          "uniVer": "√",
          "uniUtsPlugin": "4.51",
          "unixVer": "4.51",
          "unixUtsPlugin": "4.51"
        },
        "harmony": {
          "osVer": "3.0",
          "uniVer": "4.23",
          "unixVer": "4.61"
        }
      },
      "web": {
        "uniVer": "x",
        "unixVer": "x"
      }
    }
   */
  errMsg: string
};
export type OpenAppAuthorizeSettingCompleteCallback = (result: OpenAppAuthorizeSettingComplete) => void;
export type OpenAppAuthorizeSettingOptions = {
  /**
   * 接口调用成功的回调函数
   * @defaultValue null
   * @uniPlatform
    {
      "app": {
        "android": {
          "osVer": "5.0",
          "uniVer": "√",
          "uniUtsPlugin": "4.51",
          "unixVer": "4.51"
        },
        "ios": {
          "osVer": "12.0",
          "uniVer": "√",
          "uniUtsPlugin": "4.51",
          "unixVer": "4.51",
          "unixUtsPlugin": "4.51"
        },
        "harmony": {
          "osVer": "3.0",
          "uniVer": "4.23",
          "unixVer": "4.61"
        }
      },
      "web": {
        "uniVer": "x",
        "unixVer": "x"
      }
    }
   */
  success?: OpenAppAuthorizeSettingSuccessCallback | null,

  /**
   * 接口调用失败的回调函数
   * @defaultValue null
   * @uniPlatform
    {
      "app": {
        "android": {
          "osVer": "5.0",
          "uniVer": "√",
          "uniUtsPlugin": "4.51",
          "unixVer": "4.51"
        },
        "ios": {
          "osVer": "12.0",
          "uniVer": "√",
          "uniUtsPlugin": "4.51",
          "unixVer": "4.51",
          "unixUtsPlugin": "4.51"
        },
        "harmony": {
          "osVer": "3.0",
          "uniVer": "4.23",
          "unixVer": "4.61"
        }
      },
      "web": {
        "uniVer": "x",
        "unixVer": "x"
      }
    }
   */
  fail?: OpenAppAuthorizeSettingFailCallback | null,

  /**
   * 接口调用结束的回调函数（调用成功、失败都会执行）
   * @defaultValue null
   * @uniPlatform
    {
      "app": {
        "android": {
          "osVer": "5.0",
          "uniVer": "√",
          "uniUtsPlugin": "4.51",
          "unixVer": "4.51"
        },
        "ios": {
          "osVer": "12.0",
          "uniVer": "√",
          "uniUtsPlugin": "4.51",
          "unixVer": "4.51",
          "unixUtsPlugin": "4.51"
        },
        "harmony": {
          "osVer": "3.0",
          "uniVer": "4.23",
          "unixVer": "4.61"
        }
      },
      "web": {
        "uniVer": "x",
        "unixVer": "x"
      }
    }
   */
  complete?: OpenAppAuthorizeSettingCompleteCallback | null
};
