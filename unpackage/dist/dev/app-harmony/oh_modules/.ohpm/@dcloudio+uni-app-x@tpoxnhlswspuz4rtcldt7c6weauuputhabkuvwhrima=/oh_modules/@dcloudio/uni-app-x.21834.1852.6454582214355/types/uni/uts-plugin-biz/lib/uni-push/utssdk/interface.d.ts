export interface Uni {
	/**
	  * getPushClientId()
	  * @description
	  * 获取客户端唯一的推送标识
	  * @param {GetPushClientIdOptions}
	  * @return {void}
	  * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/uni-push.html#getpushclientid
	  * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/uni-push.html#getpushclientid
	  * @tutorial_uni_app http://uniapp.dcloud.io/api/plugins/push.html#getpushclientid
	  * @uniPlatform {
	  *   "app": {
	  *     "android": {
	  *       "osVer": "4.4",
	  *       "uniVer": "√",
	  *       "unixVer": "3.98"
	  *     },
	  *     "ios": {
	  *       "osVer": "12.0",
	  *       "uniVer": "√",
	  *       "unixVer": "4.18"
	  *     },
    *     "harmony": {
    *       "osVer": "3.0",
    *       "uniVer": "4.31",
    *       "unixVer": "4.61"
    *     }
	  *   },
    *   "mp": {
    *     "weixin": {
    *         "hostVer": "x",
    *         "uniVer": "x",
    *         "unixVer": "4.41"
    *     },
    *     "alipay": {
    *         "hostVer": "x",
    *         "uniVer": "x",
    *         "unixVer": "x"
    *     },
    *     "baidu": {
    *         "hostVer": "x",
    *         "uniVer": "x",
    *         "unixVer": "x"
    *     },
    *     "toutiao": {
    *         "hostVer": "x",
    *         "uniVer": "x",
    *         "unixVer": "x"
    *     },
    *     "lark": {
    *         "hostVer": "x",
    *         "uniVer": "x",
    *         "unixVer": "x"
    *     },
    *     "qq": {
    *         "hostVer": "x",
    *         "uniVer": "x",
    *         "unixVer": "x"
    *     },
    *     "kuaishou": {
    *         "hostVer": "x",
    *         "uniVer": "x",
    *         "unixVer": "x"
    *     },
    *     "jd": {
    *         "hostVer": "x",
    *         "uniVer": "x",
    *         "unixVer": "x"
    *     }
    *   },
	  *   "web": {
	  *     "uniVer": "x",
	  *     "unixVer": "4.27"
	  *   }
	  * }
	  * @example
	  ```typescript
		uni.getPushClientId({
      complete: (res: any) => {
        console.log("getPushClientId complete => " + JSON.stringify(res));
      }
		});
	  ```
	  */
	getPushClientId(options: GetPushClientIdOptions): void;
	/**
	  * onPushMessage()
	  * @description
	  * 启动监听推送消息事件
	  * @param {OnPushMessageCallback}
	  * @return {void}
	  * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/uni-push.html#onpushmessage
	  * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/uni-push.html#onpushmessage
	  * @tutorial_uni_app http://uniapp.dcloud.io/api/plugins/push.html#onpushmessage
	  * @uniPlatform {
	  *   "app": {
	  *     "android": {
	  *       "osVer": "4.4",
	  *       "uniVer": "√",
	  *       "unixVer": "3.98"
	  *     },
	  *     "ios": {
	  *       "osVer": "12.0",
	  *       "uniVer": "√",
	  *       "unixVer": "4.18"
	  *     },
    *     "harmony": {
    *       "osVer": "3.0",
    *       "uniVer": "4.31",
    *       "unixVer": "4.61"
    *     }
	  *   },
    *   "mp": {
    *     "weixin": {
    *         "hostVer": "x",
    *         "uniVer": "x",
    *         "unixVer": "4.41"
    *     },
    *     "alipay": {
    *         "hostVer": "x",
    *         "uniVer": "x",
    *         "unixVer": "x"
    *     },
    *     "baidu": {
    *         "hostVer": "x",
    *         "uniVer": "x",
    *         "unixVer": "x"
    *     },
    *     "toutiao": {
    *         "hostVer": "x",
    *         "uniVer": "x",
    *         "unixVer": "x"
    *     },
    *     "lark": {
    *         "hostVer": "x",
    *         "uniVer": "x",
    *         "unixVer": "x"
    *     },
    *     "qq": {
    *         "hostVer": "x",
    *         "uniVer": "x",
    *         "unixVer": "x"
    *     },
    *     "kuaishou": {
    *         "hostVer": "x",
    *         "uniVer": "x",
    *         "unixVer": "x"
    *     },
    *     "jd": {
    *         "hostVer": "x",
    *         "uniVer": "x",
    *         "unixVer": "x"
    *     }
    *   },
	  *   "web": {
	  *     "uniVer": "x",
	  *     "unixVer": "4.27"
	  *   }
	  * }
	  * @example
	   ```typescript
		uni.onPushMessage((res : OnPushMessageCallbackResult) => {
      console.log("onPushMessage => " + JSON.stringify(res))
		});
	   ```
	  */
	onPushMessage(callback: OnPushMessageCallback): void;
	/**
	  * offPushMessage()
	  * @description
	  * 关闭推送消息监听事件，iOS端调用会关闭所有监听。
	  * @param {OnPushMessageCallback}
	  * @return {void}
	  * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/uni-push.html#offpushmessage
	  * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/uni-push.html#offpushmessage
	  * @tutorial_uni_app http://uniapp.dcloud.io/api/plugins/push.html#offpushmessage
	  * @uniPlatform {
	  *   "app": {
	  *     "android": {
	  *       "osVer": "4.4",
	  *       "uniVer": "√",
	  *       "unixVer": "3.98"
	  *     },
	  *     "ios": {
	  *       "osVer": "12.0",
	  *       "uniVer": "√",
	  *       "unixVer": "4.18"
	  *     },
    *     "harmony": {
    *       "osVer": "3.0",
    *       "uniVer": "4.31",
    *       "unixVer": "4.61"
    *     }
	  *   },
    *   "mp": {
    *     "weixin": {
    *         "hostVer": "x",
    *         "uniVer": "x",
    *         "unixVer": "4.41"
    *     },
    *     "alipay": {
    *         "hostVer": "x",
    *         "uniVer": "x",
    *         "unixVer": "x"
    *     },
    *     "baidu": {
    *         "hostVer": "x",
    *         "uniVer": "x",
    *         "unixVer": "x"
    *     },
    *     "toutiao": {
    *         "hostVer": "x",
    *         "uniVer": "x",
    *         "unixVer": "x"
    *     },
    *     "lark": {
    *         "hostVer": "x",
    *         "uniVer": "x",
    *         "unixVer": "x"
    *     },
    *     "qq": {
    *         "hostVer": "x",
    *         "uniVer": "x",
    *         "unixVer": "x"
    *     },
    *     "kuaishou": {
    *         "hostVer": "x",
    *         "uniVer": "x",
    *         "unixVer": "x"
    *     },
    *     "jd": {
    *         "hostVer": "x",
    *         "uniVer": "x",
    *         "unixVer": "x"
    *     }
    *   },
	  *   "web": {
	  *     "uniVer": "x",
	  *     "unixVer": "4.27"
	  *   }
	  * }
	  * @example
	   ```typescript
		const cb = (res : OnPushMessageCallbackResult) => {
      console.log("onPushMessage => " + JSON.stringify(res))
		}
		uni.offPushMessage(cb);
	   ```
	  */
	offPushMessage(callback: OnPushMessageCallback): void;
	/**
	  * 获取通知渠道管理器，Android 8系统以上才可以设置通知渠道，Android 8系统以下返回null，[通知渠道介绍](https://developer.android.com/develop/ui/views/notifications/channels?hl=zh-cn) ，iOS不支持。
    *
	  * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/uni-push.html#getchannelmanager
	  * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/uni-push.html#getchannelmanager
	  * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/plugins/push.html#getchannelmanager
    *
	  * @deprecated 已废弃，仅为了向下兼容保留，建议使用`getPushChannelManager`。
	  * @param {void}
	  * @return {ChannelManager}
	  * @uniPlatform {
	  *   "app": {
	  *     "android": {
	  *       "osVer": "4.4",
	  *       "uniVer": "3.98",
	  *       "unixVer": "3.98"
	  *     },
	  *     "ios": {
	  *       "osVer": "x",
	  *       "uniVer": "x",
	  *       "unixVer": "x"
	  *     }
	  *   },
	  *   "web": {
	  *     "uniVer": "x",
	  *     "unixVer": "x"
	  *   }
	  * }
	  * @example
	   ```typescript
		const channelManager = uni.getChannelManager();
		channelManager.setPushChannel({
      channelId: "test1",
      channelDesc: "test1 desc",
      soundName: "pushsound",
      enableLights: true,
      enableVibration: true,
      importance: 4,
      lockscreenVisibility: 1
		})
		const channels = channelManager.getAllChannels() as string[]
		console.log("channels : " + channels);
	   ```
	  */
	getChannelManager(): ChannelManager;

	/**
	  * 获取通知渠道管理器，Android 8系统以上才可以设置通知渠道，Android 8系统以下返回null，[通知渠道介绍](https://developer.android.com/develop/ui/views/notifications/channels?hl=zh-cn)，iOS不支持。
    *
	  * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/uni-push.html#getpushchannelmanager
	  * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/uni-push.html#getpushchannelmanager
    *
	  * @param {void}
	  * @return {PushChannelManager}
	  * @uniPlatform {
	  *   "app": {
	  *     "android": {
	  *       "osVer": "4.4",
	  *       "uniVer": "4.25",
	  *       "unixVer": "4.25"
	  *     },
	  *     "ios": {
	  *       "osVer": "x",
	  *       "uniVer": "x",
	  *       "unixVer": "x"
	  *     }
	  *   },
	  *   "web": {
	  *     "uniVer": "x",
	  *     "unixVer": "x"
	  *   }
	  * }
	  * @example
	   ```typescript
		const channelManager = uni.getPushChannelManager();
		channelManager.setPushChannel({
		  channelId: "test1",
		  channelDesc: "test1 desc",
		  soundName: "pushsound",
		  enableLights: true,
		  enableVibration: true,
		  importance: 4,
		  lockscreenVisibility: 1
		})
		const channels = channelManager.getAllChannels() as string[]
		console.log("channels : " + channels);
	   ```
	  */
	getPushChannelManager(): PushChannelManager;

	/**
	  * 创建本地通知栏消息
    *
	  * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/uni-push.html#createpushmessage
	  * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/uni-push.html#createpushmessage
	  * @tutorial_uni_app http://uniapp.dcloud.io/api/plugins/push.html#createpushmessage
	  * @param {CreatePushMessageOptions}
	  * @return {void}
	  * @uniPlatform {
	  *   "app": {
	  *     "android": {
	  *       "osVer": "4.4",
	  *       "uniVer": "√",
	  *       "unixVer": "3.98"
	  *     },
	  *     "ios": {
	  *       "osVer": "12.0",
	  *       "uniVer": "√",
	  *       "unixVer": "4.18"
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
	  *   }
	  * }
	  * @example
	   ```typescript
		uni.createPushMessage({
      title: "标题",
      content: "您有新的消息",
      cover:true,
      channelId: "test1",
      when:1697623177000,
      icon:"/static/icon.png",
      delay:5,
      payload:{
        pkey:"pvalue1"
      },
      channelId:"message",
      category : "IM",
      success(res : CreatePushMessageSuccess) {
        console.log("res: " + res);
      }
		});
	   ```
	  */
	createPushMessage(options: CreatePushMessageOptions): void;

	/**
   * 设置应用图标上显示的角标数字，注意：不同手机厂商的角标显示规则不同，有部分设备的rom版本不支持显示角标，另有部分rom需要在应用的通知管理里开启`桌面角标`配置，才可以设置角标成功。
   *
  * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/uni-push.html#setappbadgenumber
  * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/uni-push.html#setappbadgenumber
  * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/plugins/push.html#setappbadgenumber
  *
	* @param num - 要显示的角标数字值，参数为0则表示清除角标数字。
	* @param options - 小米手机显示角标需要在系统消息中心显示一条通知，此参数用于设置通知的标题（title）和内容（content）。
	* @return {void}
	* @uniPlatform {
	*   "app": {
	*     "android": {
	*       "osVer": "5.0",
	*       "uniVer": "x",
	*       "unixVer": "4.25"
	*     },
	*     "ios": {
	*       "osVer": "12.0",
	*       "uniVer": "x",
	*       "unixVer": "4.25"
  *     },
  *     "harmony": {
  *      "osVer": "3.0",
  *      "uniVer": "4.31",
  *      "unixVer": "4.61"
  *     }
	*   },
	*   "web": {
	*     "uniVer": "x",
	*     "unixVer": "x"
	*   }
	* }
	*
	 * @example
	  ```typescript
		if (uni.getDeviceInfo().deviceBrand?.toLowerCase() == "xiaomi") {
      uni.setAppBadgeNumber(1, {
      title:"AppName",
      content: "您有1条未读消息"
      } as BadgeOptions)
		} else {
      uni.setAppBadgeNumber(5)
		}
	  ```
	 */
	setAppBadgeNumber(num: number, options?: BadgeOptions | null): void;
}

export type GetPushClientId = (options: GetPushClientIdOptions) => void;
export type GetPushClientIdSuccess = {
  /**
   * 个推客户端推送id，对应uni-id-device表的push_clientid
   *
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "4.4",
   *       "uniVer": "√",
   *       "unixVer": "3.98"
   *     },
   *     "ios": {
   *       "osVer": "12.0",
   *       "uniVer": "√",
   *       "unixVer": "4.18"
   *     }
   *   },
   *   "web": {
   *     "uniVer": "x",
   *     "unixVer": "4.27"
   *   }
   * }
   */
  cid: string,
  /**
   * 错误描述
   *
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "4.4",
   *       "uniVer": "√",
   *       "unixVer": "3.98"
   *     },
   *     "ios": {
   *       "osVer": "12.0",
   *       "uniVer": "√",
   *       "unixVer": "4.18"
   *     }
   *   },
   *   "web": {
   *     "uniVer": "x",
   *     "unixVer": "4.27"
   *   }
   * }
   */
  errMsg: string
};
export type GetPushClientIdSuccessCallback = (result: GetPushClientIdSuccess) => void;
export type GetPushClientIdFail = UniError;
export type GetPushClientIdFailCallback = (result: GetPushClientIdFail) => void;
export type GetPushClientIdComplete = any;
export type GetPushClientIdCompleteCallback = (result: GetPushClientIdComplete) => void;
export type GetPushClientIdOptions = {
  /**
   * 接口调用成功的回调函数
   * @defaultValue null
   */
  success?: GetPushClientIdSuccessCallback | null,
  /**
   * 接口调用失败的回调函数
   * @defaultValue null
   */
  fail?: GetPushClientIdFailCallback | null,
  /**
   * 接口调用结束的回调函数（调用成功、失败都会执行）
   * @defaultValue null
   */
  complete?: GetPushClientIdCompleteCallback | null
};
/**
 * 事件类型
 * - click 从系统推送服务点击消息启动应用事件
 * - receive 应用从推送服务器接收到推送消息事件
 */
export type OnPushMessageType = "click" | "receive";

export type OnPushMessageCallbackResult = {
  /**
   * 事件类型
   * @type{OnPushMessageType}
   *
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "4.4",
   *       "uniVer": "√",
   *       "unixVer": "3.98"
   *     },
   *     "ios": {
   *       "osVer": "12.0",
   *       "uniVer": "√",
   *       "unixVer": "4.18"
   *     }
   *   },
   *   "web": {
   *     "uniVer": "x",
   *     "unixVer": "4.27"
   *   }
   * }
   */
  type: OnPushMessageType,
  /**
   * 消息内容
   *
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "4.4",
   *       "uniVer": "√",
   *       "unixVer": "3.98"
   *     },
   *     "ios": {
   *       "osVer": "12.0",
   *       "uniVer": "√",
   *       "unixVer": "4.18"
   *     }
   *   },
   *   "web": {
   *     "uniVer": "x",
   *     "unixVer": "4.27"
   *   }
   * }
   */
  data: UTSJSONObject
};

export type OnPushMessageCallback = (result: OnPushMessageCallbackResult) => void;
export type OnPushMessage = (callback: OnPushMessageCallback) => void;
export type OffPushMessage = (callback: OnPushMessageCallback) => void;


export type GetChannelManager = () => ChannelManager;
export type SetPushChannelOptions = {
  /**
   * 添加的声音文件，注意raw目录下必须要有 ，不传此字段将使用默认铃音。
   * @defaultValue null
   */
  soundName?: string | null,
  /**
   * 通知渠道id
   */
  channelId: string,
  /**
   * 通知渠道描述
   */
  channelDesc: string,
  /**
   * 呼吸灯闪烁
   * @defaultValue false
   */
  enableLights?: boolean | null,
  /**
   * 震动
   * @defaultValue false
   */
  enableVibration?: boolean | null,
  /**
   * 通知的重要性级别，可选范围IMPORTANCE_LOW：2、IMPORTANCE_DEFAULT：3、IMPORTANCE_HIGH：4 。
   * @defaultValue 3
   */
  importance?: number | null,
  /**
   * 锁屏可见性，可选范围VISIBILITY_PRIVATE：0、VISIBILITY_PUBLIC：1、VISIBILITY_SECRET：-1、VISIBILITY_NO_OVERRIDE：-1000。
   * @defaultValue -1000
   */
  lockscreenVisibility?: number | null
}

export interface ChannelManager {
  /**
   * 设置推送渠道
   *
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "4.4",
   *       "uniVer": "√",
   *       "unixVer": "3.98"
   *     },
   *     "ios": {
   *       "osVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   },
   *   "web": {
   *     "uniVer": "x",
   *     "unixVer": "x"
   *   }
   * }
   */
  setPushChannel(options: SetPushChannelOptions): void;
  /**
   * 获取当前应用注册的所有的通知渠道。
   *
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "4.4",
   *       "uniVer": "√",
   *       "unixVer": "3.98"
   *     },
   *     "ios": {
   *       "osVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   },
   *   "web": {
   *     "uniVer": "x",
   *     "unixVer": "x"
   *   }
   * }
   */
  getAllChannels(): Array<string>;
}

export type PushChannelManager = ChannelManager


export type CreatePushMessage = (options: CreatePushMessageOptions) => void;
export type CreatePushMessageSuccess = {};
export type CreatePushMessageSuccessCallback = (result: CreatePushMessageSuccess) => void;
export type CreatePushMessageFail = UniError;
export type CreatePushMessageFailCallback = (result: CreatePushMessageFail) => void;
export type CreatePushMessageComplete = any;
export type CreatePushMessageCompleteCallback = (result: CreatePushMessageComplete) => void;
export type CreatePushMessageOptions = {
  /**
   * 是否覆盖上一次提示的消息
   * @type boolean
   * @defaultValue false
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "4.4",
   *       "uniVer": "√",
   *       "unixVer": "3.98"
   *     },
   *     "ios": {
   *       "osVer": "12.0",
   *       "uniVer": "√",
   *       "unixVer": "4.18"
   *     }
   *   },
   *   "web": {
   *     "uniVer": "x",
   *     "unixVer": "x"
   *   }
   * }
   */
  cover?: boolean | null,
  /**
   * 提示消息延迟显示的时间,单位为s
   * @defaultValue 0
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "4.4",
   *       "uniVer": "√",
   *       "unixVer": "3.98"
   *     },
   *     "ios": {
   *       "osVer": "12.0",
   *       "uniVer": "√",
   *       "unixVer": "4.18"
   *     }
   *   },
   *   "web": {
   *     "uniVer": "x",
   *     "unixVer": "x"
   *   }
   * }
   */
  delay?: number | null,
  /**
   * 推送消息的图标
   * @defaultValue null
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "4.4",
   *       "uniVer": "√",
   *       "unixVer": "3.98"
   *     },
   *     "ios": {
   *       "osVer": "12.0",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   },
   *   "web": {
   *     "uniVer": "x",
   *     "unixVer": "x"
   *   }
   * }
   */
  icon?: string | null,
  /**
   * 推送消息的提示音
   * - system: 使用系统通知提示音（默认值）
   * - none: 不使用提示音
   * @type 'system' | 'none'
   * @defaultValue "system"
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "4.4",
   *       "uniVer": "√",
   *       "unixVer": "3.98"
   *     },
   *     "ios": {
   *       "osVer": "12.0",
   *       "uniVer": "√",
   *       "unixVer": "4.18"
   *     }
   *   },
   *   "web": {
   *     "uniVer": "x",
   *     "unixVer": "x"
   *   }
   * }
   */
  sound?: string | null,
  /**
   * 推送消息的标题
   * @defaultValue App的名称
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "4.4",
   *       "uniVer": "√",
   *       "unixVer": "3.98"
   *     },
   *     "ios": {
   *       "osVer": "12.0",
   *       "uniVer": "√",
   *       "unixVer": "4.18"
   *     }
   *   },
   *   "web": {
   *     "uniVer": "x",
   *     "unixVer": "x"
   *   }
   * }
   */
  title?: string | null,
  /**
   * 消息显示的内容，在系统通知中心中显示的文本内容。鸿蒙系统中，此字段为必填字段。
   *
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "4.4",
   *       "uniVer": "√",
   *       "unixVer": "3.98"
   *     },
   *     "ios": {
   *       "osVer": "12.0",
   *       "uniVer": "√",
   *       "unixVer": "4.18"
   *     }
   *   },
   *   "web": {
   *     "uniVer": "x",
   *     "unixVer": "x"
   *   }
   * }
   */
  content: string,
  /**
   * 消息承载的数据，可根据业务逻辑自定义数据格式，在点击通知消息时`onPushMessage`回调中会返回此字段的数据。
   * @defaultValue null
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "4.4",
   *       "uniVer": "√",
   *       "unixVer": "3.98"
   *     },
   *     "ios": {
   *       "osVer": "12.0",
   *       "uniVer": "√",
   *       "unixVer": "4.18"
   *     }
   *   },
   *   "web": {
   *     "uniVer": "x",
   *     "unixVer": "x"
   *   }
   * }
   */
  payload?: any | null,
  /**
   * 消息上显示的提示时间，需要传入时间戳。
   * @defaultValue 当前时间
   *
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "4.4",
   *       "uniVer": "√",
   *       "unixVer": "3.98"
   *     },
   *     "ios": {
   *       "osVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   },
   *   "web": {
   *     "uniVer": "x",
   *     "unixVer": "x"
   *   }
   * }
   */
  when?: number | null,
  /**
   * 渠道id，Android特有字段，[通知渠道介绍](https://developer.android.com/develop/ui/views/notifications/channels?hl=zh-cn)，
   * 创建通知渠道请使用`getPushChannelManager`获取PushChannelManager对象，调用`setPushChannel`方法配置渠道。
   * @defaultValue "DcloudChannelID"
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "4.4",
   *       "uniVer": "√",
   *       "unixVer": "3.98"
   *     },
   *     "ios": {
   *       "osVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   },
   *   "web": {
   *     "uniVer": "x",
   *     "unixVer": "x"
   *   }
   * }
   */
  channelId?: string | null,
  /**
   * 通知类别，Android特有字段，[通知渠道介绍](https://developer.android.com/develop/ui/views/notifications/channels?hl=zh-cn)，
   * 标识通知的类别，应用场景为对于离线推送厂商配置的支持，比如[华为消息分类](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/message-classification-0000001149358835#section5101818813)
   * @defaultValue null
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "4.4",
   *       "uniVer": "√",
   *       "unixVer": "3.98"
   *     },
   *     "ios": {
   *       "osVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   },
   *   "web": {
   *     "uniVer": "x",
   *     "unixVer": "x"
   *   }
   * }
   */
  category?: string | null,
  /**
   * 接口调用成功的回调函数
   * @defaultValue null
   */
  success?: CreatePushMessageSuccessCallback | null,
  /**
   * 接口调用失败的回调函数
   * @defaultValue null
   */
  fail?: CreatePushMessageFailCallback | null,
  /**
   * 接口调用结束的回调函数（调用成功、失败都会执行）
   * @defaultValue null
   */
  complete?: CreatePushMessageCompleteCallback | null
};


export type BadgeOptions = {
	/**
	 * 消息的标题
	 * @defaultValue 应用的名称
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.25"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.25"
	 *     }
	 *   },
	 *   "web": {
	 *     "uniVer": "x",
	 *     "unixVer": "x"
	 *   }
	 * }
	 */
	title?: string | null,
	/**
	 * 消息的内容
	 * @defaultValue '您有x条未读消息'，其中x为设置的角标数字值。
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.25"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.25"
	 *     }
	 *   },
	 *   "web": {
	 *     "uniVer": "x",
	 *     "unixVer": "x"
	 *   }
	 * }
	 */
	content?: string | null
  }
