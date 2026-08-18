export interface Uni {
  /**
   * 监听内存不足告警事件。
   *
   * @tutorial https://uniapp.dcloud.io/system/memory.html#onmemorywarning
   * @tutorial_uni_app https://uniapp.dcloud.io/api/system/memory.html#onmemorywarning
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "3.6.9",
   *       "unixVer": "x"
   *     },
   *     "ios": {
   *       "osVer": "9.0",
   *       "uniVer": "3.6.11",
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
   *       "hostVer": "2.0.2",
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
   *     "uniVer": "x",
   *     "unixVer": "x"
   *   }
   * }
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/device/memory/wx.onMemoryWarning.html
     */
  onMemoryWarning: OnMemoryWarning;
  /**
   * 取消监听内存不足告警事件。不传入 callback 则取消所有监听。
   *
   * @tutorial https://uniapp.dcloud.io/api/media/background-audio-manager.html
   * @tutorial_uni_app https://uniapp.dcloud.io/api/media/background-audio-manager.html
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "x",
   *       "uniVer": "√",
   *       "unixVer": "x"
   *     },
   *     "ios": {
   *       "osVer": "x",
   *       "uniVer": "x",
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
   *       "hostVer": "2.9.0",
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
   *     "uniVer": "x",
   *     "unixVer": "x"
   *   }
   * }
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/device/memory/wx.offMemoryWarning.html
     */
  offMemoryWarning: OffMemoryWarning;
}

export type OnMemoryWarning = (callback: OnMemoryWarningCallback) => void;
export type OnMemoryWarningCallbackResult = {
  /**
   * 仅 Android 有该字段，对应系统内存告警等级宏定义
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
  level: number
};
export type OnMemoryWarningCallback = (result: OnMemoryWarningCallbackResult) => void;
export type OffMemoryWarning = (callback: OffMemoryWarningCallback) => void;
export type OffMemoryWarningCallbackResult = {
  /**
   * 仅 Android 有该字段，对应系统内存告警等级宏定义
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
  level: number
};
export type OffMemoryWarningCallback = (result: OffMemoryWarningCallbackResult) => void;
