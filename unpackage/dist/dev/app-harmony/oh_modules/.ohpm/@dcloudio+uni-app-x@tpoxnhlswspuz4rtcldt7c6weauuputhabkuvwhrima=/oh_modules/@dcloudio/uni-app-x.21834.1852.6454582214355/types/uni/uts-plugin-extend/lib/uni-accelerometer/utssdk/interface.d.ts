export interface Uni {
  /**
   * 监听加速度数据
   *
   * @tutorial https://uniapp.dcloud.io/api/system/accelerometer.html#onaccelerometerchange
   * @tutorial_uni_app https://uniapp.dcloud.io/api/system/accelerometer.html#onaccelerometerchange
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "2.9.6",
   *       "unixVer": "x"
   *     },
   *     "ios": {
   *       "osVer": "9.0",
   *       "uniVer": "2.9.6",
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
   *       "uniVer": "2.9.3",
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
   *     "uniVer": "2.9.6",
   *     "unixVer": "x"
   *   }
   * }
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.onAccelerometerChange.html
     */
  onAccelerometerChange: OnAccelerometerChange;
  /**
   * 取消监听加速度数据
   *
   * @tutorial https://uniapp.dcloud.io/api/system/accelerometer.html#offaccelerometerchange
   * @tutorial_uni_app https://uniapp.dcloud.io/api/system/accelerometer.html#offaccelerometerchange
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "2.9.6",
   *       "unixVer": "x"
   *     },
   *     "ios": {
   *       "osVer": "9.0",
   *       "uniVer": "2.9.6",
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
   *       "uniVer": "2.9.3",
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
   *     "uniVer": "2.9.6",
   *     "unixVer": "x"
   *   }
   * }
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.offAccelerometerChange.html
     */
  offAccelerometerChange: OffAccelerometerChange;
  /**
   * 开始监听加速度数据
   *
   * @tutorial https://uniapp.dcloud.io/api/system/accelerometer.html#startaccelerometer
   * @tutorial_uni_app https://uniapp.dcloud.io/api/system/accelerometer.html#startaccelerometer
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "x"
   *     },
   *     "ios": {
   *       "osVer": "9.0",
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
   *       "hostVer": "x",
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
   *       "uniVer": "√",
   *       "unixVer": "x"
   *     }
   *   },
   *   "web": {
   *     "uniVer": "2.9.6",
   *     "unixVer": "x"
   *   }
   * }
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.startAccelerometer.html
     */
  startAccelerometer: StartAccelerometer;
  /**
   * 停止监听加速度数据
   *
   * @tutorial https://uniapp.dcloud.io/api/system/accelerometer.html#stopaccelerometer
   * @tutorial_uni_app https://uniapp.dcloud.io/api/system/accelerometer.html#stopaccelerometer
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "x"
   *     },
   *     "ios": {
   *       "osVer": "9.0",
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
   *       "hostVer": "x",
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
   *       "uniVer": "√",
   *       "unixVer": "x"
   *     }
   *   },
   *   "web": {
   *     "uniVer": "2.9.6",
   *     "unixVer": "x"
   *   }
   * }
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.stopAccelerometer.html
     */
  stopAccelerometer: StopAccelerometer;
}

export type OnAccelerometerChangeCallbackResult = {
  /**
   * X 轴
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
  x: number,
  /**
   * Y 轴
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
  y: number,
  /**
   * Z 轴
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
  z: number
};
export type OnAccelerometerChangeCallback = (result: OnAccelerometerChangeCallbackResult) => void;
export type OnAccelerometerChange = (callback: OnAccelerometerChangeCallback) => void;
export type OffAccelerometerChange = (callback: (result: any) => void) => void;
export type StartAccelerometer = (options: StartAccelerometerOptions) => void;
export type StartAccelerometerSuccess = {
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
};
export type UniError = {
  errSubject: string,
  errCode: number,
  errMsg: string,
  data?: object | null,
  cause?: any | null
};
export type StartAccelerometerSuccessCallback = (result: StartAccelerometerSuccess) => void;
export type StartAccelerometerFail = UniError;
export type StartAccelerometerFailCallback = (result: StartAccelerometerFail) => void;
export type StartAccelerometerComplete = any;
export type StartAccelerometerCompleteCallback = (result: StartAccelerometerComplete) => void;
export type StartAccelerometerOptions = {
  /**
   * 回调频率
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
  interval?:
  /**
   * 适用于更新游戏的回调频率，在 20ms/次 左右
   */
  'game' |
  /**
   * 适用于更新游戏的回调频率，在 20ms/次 左右
   */
  'ui' |
  /**
   * 普通的回调频率，在 200ms/次 左右
   */
  'normal' | null,
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
  success?: StartAccelerometerSuccessCallback | null,
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
  fail?: StartAccelerometerFailCallback | null,
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
  complete?: StartAccelerometerCompleteCallback | null
};
export type StopAccelerometer = (options: StopAccelerometerOptions) => void;
export type StopAccelerometerSuccess = {
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
};
export type StopAccelerometerSuccessCallback = (result: StopAccelerometerSuccess) => void;
export type StopAccelerometerFail = UniError;
export type StopAccelerometerFailCallback = (result: StopAccelerometerFail) => void;
export type StopAccelerometerComplete = any;
export type StopAccelerometerCompleteCallback = (result: StopAccelerometerComplete) => void;
export type StopAccelerometerOptions = {
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
  success?: StopAccelerometerSuccessCallback | null,
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
  fail?: StopAccelerometerFailCallback | null,
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
  complete?: StopAccelerometerCompleteCallback | null
};
