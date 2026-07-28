/// <reference path='./common.d.ts' />
import UIAbility from '@ohos.app.ability.UIAbility';
import { ComputedOptions, EditorCreateVueAppComponent, MethodOptions, OptionsData, ComponentInternalInstance, EditorVueAppComponent, EditorComponentPublicInstance, DefineApp, ComponentInjectOptions } from '@vue/runtime-core'

/**
 * Construct a type with a set of properties K of type T
 */
type Record<K extends keyof any, T> = {
  [P in K]: T;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
/**
 * Exclude from T those types that are assignable to U
 */
type Exclude<T, U> = T extends U ? never : T;
/**
 * Construct a type with the properties of T except for those in type K.
 */
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

interface ReferrerInfo {
  /**
   * 来源小程序或公众号或App的 appId
   *
   * 以下场景支持返回 referrerInfo.appId：
   * - 1020（公众号 profile 页相关小程序列表）： appId
   * - 1035（公众号自定义菜单）：来源公众号 appId
   * - 1036（App 分享消息卡片）：来源应用 appId
   * - 1037（小程序打开小程序）：来源小程序 appId
   * - 1038（从另一个小程序返回）：来源小程序 appId
   * - 1043（公众号模板消息）：来源公众号 appId
   */
  appId: string;
  /**
   * 来源小程序传过来的数据，scene=1037或1038时支持
   */
  extraData?: any;
}

type GlobalData = Record<string, any | null>
interface UniAppOptions<G extends GlobalData = GlobalData> {
  /**
   * 全局对象
   *
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#applifecycle
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#applifecycle
   * @tutorial_uni_app https://uniapp.dcloud.net.cn/collocation/App.html#applifecycle
   *
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *        "osVer": "5.0",
   *        "uniVer": "√",
   *        "unixVer": "3.9"
   *      },
   *      "ios": {
   *          "osVer": "10.0",
   *          "uniVer": "√",
   *          "unixVer": "4.0"
   *      }
   *  },
   *  "mp": {
   *    "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "4.41"
   *    },
   *    "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "lark": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "qq": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "jd": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    }
   *  },
   *  "web": {
   *      "uniVer": "√",
   *      "unixVer": "4.0"
   *  }
   *}
   */
  globalData?: G;
  /**
   * 生命周期回调，监听应用初始化，应用初始化完成时触发，全局只触发一次。
   *
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#applifecycle
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#applifecycle
   * @tutorial_uni_app https://uniapp.dcloud.net.cn/collocation/App.html#applifecycle
   *
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *        "osVer": "5.0",
   *        "uniVer": "√",
   *        "unixVer": "3.9"
   *      },
   *      "ios": {
   *          "osVer": "10.0",
   *          "uniVer": "√",
   *          "unixVer": "4.0"
   *      }
   *  },
   *  "mp": {
   *    "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "4.41"
   *    },
   *    "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "lark": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "qq": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "jd": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    }
   *  },
   *  "web": {
   *      "uniVer": "√",
   *      "unixVer": "4.0"
   *  }
   *}
   */
  onLaunch?(options: OnLaunchOptions): void;
  /**
   * 生命周期回调 监听应用显示
   *
   * 应用启动，或从后台进入前台显示时触发
   *
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#applifecycle
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#applifecycle
   * @tutorial_uni_app https://uniapp.dcloud.net.cn/collocation/App.html#applifecycle
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *        "osVer": "5.0",
   *        "uniVer": "√",
   *        "unixVer": "3.9"
   *      },
   *      "ios": {
   *          "osVer": "10.0",
   *          "uniVer": "√",
   *          "unixVer": "4.0"
   *      }
   *  },
   *  "mp": {
   *    "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "4.41"
   *    },
   *    "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "lark": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "qq": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "jd": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    }
   *  },
   *  "web": {
   *      "uniVer": "√",
   *      "unixVer": "4.0"
   *  }
   *}
   */
  onShow?(options: OnShowOptions): void;
  /**
   * 生命周期回调 监听应用隐藏
   *
   * 应用从前台进入后台时触发
   *
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#applifecycle
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#applifecycle
   * @tutorial_uni_app https://uniapp.dcloud.net.cn/collocation/App.html#applifecycle
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *        "osVer": "5.0",
   *        "uniVer": "√",
   *        "unixVer": "3.9"
   *      },
   *      "ios": {
   *          "osVer": "10.0",
   *          "uniVer": "√",
   *          "unixVer": "4.0"
   *      }
   *  },
   *  "mp": {
   *    "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "4.41"
   *    },
   *    "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "lark": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "qq": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "jd": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    }
   *  },
   *  "web": {
   *      "uniVer": "√",
   *      "unixVer": "4.0"
   *  }
   *}
   */
  onHide?(): void;
  /**
   * 错误监听函数
   * 应用发生脚本错误或 API 调用报错时触发
   * 4.33+ App 端支持监听异步逻辑中的错误
   * @param error 错误信息
   *
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#applifecycle
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#applifecycle
   * @tutorial_uni_app https://uniapp.dcloud.net.cn/collocation/App.html#applifecycle
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *        "osVer": "5.0",
   *        "uniVer": "√",
   *        "unixVer": "4.21"
   *      },
   *      "ios": {
   *          "osVer": "10.0",
   *          "uniVer": "√",
   *          "unixVer": "4.21"
   *      }
   *  },
   *  "mp": {
   *    "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "4.41"
   *    },
   *    "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "lark": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "qq": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "jd": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    }
   *  },
   *  "web": {
   *      "uniVer": "√",
   *      "unixVer": "4.0"
   *  }
   *}
   */
  onError?(error: any): void;
  /**
   * 页面不存在监听函数
   *
   * 应用要打开的页面不存在时触发，会带上页面信息回调该函数
   *
   * **注意：**
   * 1. 如果开发者没有添加 `onPageNotFound` 监听，当跳转页面不存在时，将推入微信客户端原生的页面不存在提示页面。
   * 2. 如果 `onPageNotFound` 回调中又重定向到另一个不存在的页面，将推入微信客户端原生的页面不存在提示页面，并且不再回调 `onPageNotFound`。
   *
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#applifecycle
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#applifecycle
   * @tutorial_uni_app https://uniapp.dcloud.net.cn/collocation/App.html#applifecycle
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *        "osVer": "5.0",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *      },
   *      "ios": {
   *          "osVer": "10.0",
   *          "uniVer": "√",
   *          "unixVer": "x"
   *      }
   *  },
   *  "mp": {
   *    "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "4.41"
   *    },
   *    "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "lark": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "qq": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "jd": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    }
   *  },
   *  "web": {
   *      "uniVer": "√",
   *      "unixVer": "4.0"
   *  }
   *}
   */
  onPageNotFound?(options: OnPageNotFoundOption): void;
  /**
   * 监听 nvue 页面消息
   *
   * nvue 页面使用 `uni.postMessage` 发送消息时触发
   *
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#applifecycle
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#applifecycle
   * @tutorial_uni_app https://uniapp.dcloud.net.cn/collocation/App.html#applifecycle
   * @internal
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *        "osVer": "5.0",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *      },
   *      "ios": {
   *          "osVer": "10.0",
   *          "uniVer": "√",
   *          "unixVer": "x"
   *      }
   *  },
   *  "mp": {
   *    "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "lark": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "qq": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "jd": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    },
   *    "360": {
   *        "hostVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "x"
   *    }
   *  },
   *  "quickapp": {
   *      "uniVer": "√",
   *      "unixVer": "x"
   *  },
   *  "web": {
   *      "uniVer": "√",
   *      "unixVer": "4.0"
   *  }
   *}
   */
  onUniNViewMessage?(options: AnyObject): void;
  /**
   * 监听应用退出。app-uvue-android 3.9+
   *
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#applifecycle
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#applifecycle
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *        "osVer": "5.0",
   *        "uniVer": "x",
   *        "unixVer": "3.9"
   *      },
   *      "ios": {
   *          "osVer": "x",
   *          "uniVer": "x",
   *          "unixVer": "x"
   *      },
   *      "harmony": {
   *         "osVer": "5.0.0",
   *         "uniVer": "x",
   *         "unixVer": "4.72"
   *      }
   *  },
   *  "mp": {
   *    "weixin": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    },
   *    "alipay": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    },
   *    "baidu": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    },
   *    "toutiao": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    },
   *    "lark": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    },
   *    "qq": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    },
   *    "kuaishou": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    },
   *    "jd": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    },
   *    "360": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   *  },
   *  "quickapp": {
   *      "uniVer": "x",
   *      "unixVer": "x"
   *  },
   *  "web": {
   *      "uniVer": "x",
   *      "unixVer": "x"
   *  }
   *}
   */
  onExit?(): void;
  /**
   * 最后一个页面按下Android back键，常用于自定义退出。
   *
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#applifecycle
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#applifecycle
   * @tutorial_uni_app https://uniapp.dcloud.net.cn/collocation/App.html#applifecycle
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *        "osVer": "5.0",
   *        "uniVer": "x",
   *        "unixVer": "3.9"
   *      },
   *      "ios": {
   *          "osVer": "x",
   *          "uniVer": "x",
   *          "unixVer": "x"
   *      },
   *      "harmony": {
   *         "osVer": "5.0.0",
   *         "uniVer": "x",
   *         "unixVer": "4.71"
   *      }
   *  },
   *  "mp": {
   *    "weixin": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    },
   *    "alipay": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    },
   *    "baidu": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    },
   *    "toutiao": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    },
   *    "lark": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    },
   *    "qq": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    },
   *    "kuaishou": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    },
   *    "jd": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    },
   *    "360": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   *  },
   *  "quickapp": {
   *      "uniVer": "x",
   *      "unixVer": "x"
   *  },
   *  "web": {
   *      "uniVer": "x",
   *      "unixVer": "x"
   *  }
   *}
   */
  onLastPageBackPress?(): void;
  /**
   *
   * 未处理的 Promise 拒绝事件监听函数
   *
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#applifecycle
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#applifecycle
   * @tutorial_uni_app https://uniapp.dcloud.net.cn/collocation/App.html#applifecycle
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *        "osVer": "5.0",
   *        "uniVer": "2.8.1",
   *        "unixVer": "x"
   *      },
   *      "ios": {
   *          "osVer": "10.0",
   *          "uniVer": "2.8.1",
   *          "unixVer": "x"
   *      }
   *  },
   *  "mp": {
   *    "weixin": {
   *        "hostVer": "1.9.90",
   *        "uniVer": "√",
   *        "unixVer": "4.41"
   *    },
   *    "alipay": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    },
   *    "baidu": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    },
   *    "toutiao": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    },
   *    "lark": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    },
   *    "qq": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    },
   *    "kuaishou": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    },
   *    "jd": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    },
   *    "360": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   *  },
   *  "quickapp": {
   *      "uniVer": "x",
   *      "unixVer": "x"
   *  },
   *  "web": {
   *      "uniVer": "2.8.1",
   *      "unixVer": "4.0"
   *  }
   *}
   */
  onUnhandledRejection?(): void;
  /**
   *
   * 监听系统主题变化
   *
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#applifecycle
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#applifecycle
   * @tutorial_uni_app https://uniapp.dcloud.net.cn/collocation/App.html#applifecycle
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "ios": {
   *          "osVer": "x",
   *          "uniVer": "x",
   *          "unixVer": "x"
   *      }
   *  },
   *  "mp": {
   *    "weixin": {
   *        "hostVer": "2.11.0",
   *        "uniVer": "√",
   *        "unixVer": "4.41"
   *    },
   *    "alipay": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    },
   *    "baidu": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    },
   *    "toutiao": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    },
   *    "lark": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    },
   *    "qq": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    },
   *    "kuaishou": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    },
   *    "jd": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    },
   *    "360": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   *  },
   *  "quickapp": {
   *      "uniVer": "x",
   *      "unixVer": "x"
   *  },
   *  "web": {
   *      "uniVer": "x",
   *      "unixVer": "x"
   *  }
   *}
   */
  onThemeChange?(): void;
}

/**
 * Obtain the return type of a function type
 */
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

type EditorComponentPublicInstanceX<D extends OptionsData, C extends ComputedOptions, M extends MethodOptions, I extends ComponentInjectOptions, II extends string, G extends GlobalData> = EditorComponentPublicInstance<D, C, M, I, II> & {
  globalData: G
}

type EditorVueAppComponentX<D extends OptionsData, C extends ComputedOptions, M extends MethodOptions, I extends ComponentInjectOptions, II extends string, G extends GlobalData> = EditorVueAppComponent<D, C, M> & {
  $: EditorComponentPublicInstanceX<D, C, M, I, II, G>
}

type EditorCreateVueAppComponentX<D extends OptionsData = OptionsData, C extends ComputedOptions = ComputedOptions, M extends MethodOptions = MethodOptions, I extends ComponentInjectOptions = {}, II extends string = string, G extends GlobalData = GlobalData> = Omit<EditorCreateVueAppComponent, 'create'> & {
  // 仅用于编辑器提示，TODO 重写 create 方法实现
  create: (instance: ComponentInternalInstance) => EditorVueAppComponentX<D, C, M, I, II, G>;
}

type AppInstance<T extends EditorCreateVueAppComponentX> = ReturnType<T['create']>['$']

export interface UniApp {
  /**
   * App vue 实例对象
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/get-app.html#getapp
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/get-app.html#getapp
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *      "osVer": "5.0",
   *      "uniVer": "x",
   *      "unixVer": "4.31"
   *    },
   *    "ios": {
   *      "osVer": "x",
   *      "uniVer": "x",
   *      "unixVer": "4.31",
   *      "unixUtsPlugin": "x"
   *    },
   *    "harmony": {
   *      "osVer": "5.0.0",
   *      "uniVer": "x",
   *      "unixVer": "4.61"
   *    }
   *  },
   *  "mp": {
   *    "weixin": {
   *      "hostVer": "√",
   *      "uniVer": "x",
   *      "unixVer": "x"
   *    },
   *  },
   *  "web": {
   *    "uniVer": "x",
   *    "unixVer": "4.31"
   *  }
   * }
   */
  vm?: ComponentPublicInstance | null,
  /**
   * App vue 实例对象
   * @deprecated 已废弃，仅为了向下兼容保留
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/get-app.html#getapp
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/get-app.html#getapp
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *      "osVer": "5.0",
   *      "uniVer": "x",
   *      "unixVer": "4.31"
   *    },
   *    "ios": {
   *      "osVer": "x",
   *      "uniVer": "x",
   *      "unixVer": "4.31",
   *      "unixUtsPlugin": "x"
   *    },
   *    "harmony": {
   *      "osVer": "5.0.0",
   *      "uniVer": "x",
   *      "unixVer": "4.61"
   *    }
   *  },
   *  "mp": {
   *    "weixin": {
   *      "hostVer": "√",
   *      "uniVer": "x",
   *      "unixVer": "x"
   *    },
   *  },
   *  "web": {
   *    "uniVer": "x",
   *    "unixVer": "4.31"
   *  }
   * }
   */
  $vm?: ComponentPublicInstance | null,
  /**
   * 全局对象
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#globaldata
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#globaldata
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *      "osVer": "5.0",
   *      "uniVer": "x",
   *      "unixVer": "4.31"
   *    },
   *    "ios": {
   *      "osVer": "x",
   *      "uniVer": "x",
   *      "unixVer": "4.31"
   *    },
   *    "harmony": {
   *      "osVer": "5.0.0",
   *      "uniVer": "x",
   *      "unixVer": "4.61"
   *    }
   *  },
   *  "mp": {
   *    "weixin": {
   *      "hostVer": "√",
   *      "uniVer": "x",
   *      "unixVer": "x"
   *    },
   *  },
   *  "web": {
   *    "uniVer": "x",
   *    "unixVer": "4.31"
   *  }
   * }
   */
  globalData: GlobalData,
  /**
   * 获取 Android 应用 Application 上下文
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/get-app.html#getandroidapplication
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/get-app.html#getandroidapplication
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *      "osVer": "5.0",
   *      "uniVer": "x",
   *      "unixVer": "4.31"
   *    },
   *    "ios": {
   *      "osVer": "x",
   *      "uniVer": "x",
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
   *      "hostVer": "√",
   *      "uniVer": "x",
   *      "unixVer": "x"
   *    },
   *  },
   *  "web": {
   *    "uniVer": "x",
   *    "unixVer": "x"
   *  }
   * }
   */
  getAndroidApplication(): Application
  /**
   * 获取 鸿蒙应用 Ability 实例
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/get-app.html#getharmonyability
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/get-app.html#getharmonyability
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *      "osVer": "x",
   *      "uniVer": "x",
   *      "unixVer": "x"
   *    },
   *    "ios": {
   *      "osVer": "x",
   *      "uniVer": "x",
   *      "unixVer": "x"
   *    },
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "x",
   *      "unixVer": "4.61"
   *    }
   *  },
   *  "mp": {
   *    "weixin": {
   *      "hostVer": "√",
   *      "uniVer": "x",
   *      "unixVer": "x"
   *    },
   *  },
   *  "web": {
   *    "uniVer": "x",
   *    "unixVer": "x"
   *  }
   * }
   */
  getHarmonyAbility(): UIAbility
}

type UniAppOrigin = UniApp

declare global {
  export interface AppCreateVueAppComponentDefault {}
  /**
   * `getApp()` 函数用于获取当前应用实例，可通过应用实例调用 App.uvue methods 中定义的方法, [详见](#appmethods)。
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/get-app.html#getapp
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/get-app.html#getapp
   * @tutorial_uni_app https://uniapp.dcloud.net.cn/tutorial/page.html#getapp
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *      "osVer": "5.0",
   *      "uniVer": "√",
   *      "unixVer": "√"
   *    },
   *    "ios": {
   *      "osVer": "12.0",
   *      "uniVer": "√",
   *      "unixVer": "√",
   *      "unixUtsPlugin": "4.31"
   *    },
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   *  },
   *  "mp": {
   *    "weixin": {
   *      "hostVer": "√",
   *      "uniVer": "√",
   *      "unixVer": "√"
   *    },
   *  },
   *  "web": {
   *    "uniVer": "√",
   *    "unixVer": "4.0"
   *  }
   * }
   */
  function getApp<T extends EditorCreateVueAppComponentX = AppCreateVueAppComponentDefault>(): UniApp & {
    globalData: AppInstance<T>['globalData']
    vm: AppInstance<T>
    $vm: AppInstance<T>
  }

  interface OnLaunchOptions {
    /**
     * 	应用启动页面路径
     */
    path: string;
    /**
     * 首次启动时的Scheme。返回值与App.onLaunch的回调参数一致
     *
     * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/get-launch-options-sync.html
     * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/get-launch-options-sync.html
     * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/getLaunchOptionsSync.html
     * @uniPlatform {
     *  "app": {
     *    "android": {
     *      "osVer": "5.0",
     *      "uniVer": "√",
     *      "unixVer": "4.25"
     *    },
     *    "ios": {
     *      "osVer": "12.0",
     *      "uniVer": "√",
     *      "unixVer": "4.25"
     *    },
     *    "harmony": {
     *      "osVer": "x",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    }
     *  },
     *  "mp": {
     *    "weixin": {
     *      "hostVer": "√",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    },
     *  },
     *  "web": {
     *    "uniVer": "x",
     *    "unixVer": "x"
     *  }
     * }
     */
    appScheme: string | null,
    /**
     * 首次启动时的appLink。返回值与App.onLaunch的回调参数一致
     *
     * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/getLaunchOptionsSync.html
     * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/get-launch-options-sync.html
     * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/get-launch-options-sync.html
     * @uniPlatform {
     *  "app": {
     *    "android": {
     *      "osVer": "5.0",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    },
     *    "ios": {
     *      "osVer": "12.0",
     *      "uniVer": "x",
     *      "unixVer": "4.25"
     *    },
     *    "harmony": {
     *      "osVer": "x",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    }
     *  },
     *  "mp": {
     *    "weixin": {
     *      "hostVer": "√",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    },
     *  },
     *  "web": {
     *    "uniVer": "x",
     *    "unixVer": "x"
     *  }
     * }
     */
    appLink: string | null
    /**
     * 打开小程序的query
     */
    // query: AnyObject;
    /**
     * 打开小程序的场景值
     * - 1001: 发现栏小程序主入口，「最近使用」列表（基础库2.2.4版本起包含「我的小程序」列表）
     * - 1005: 顶部搜索框的搜索结果页
     * - 1006: 发现栏小程序主入口搜索框的搜索结果页
     * - 1007: 单人聊天会话中的小程序消息卡片
     * - 1008: 群聊会话中的小程序消息卡片
     * - 1011: 扫描二维码
     * - 1012: 长按图片识别二维码
     * - 1013: 手机相册选取二维码
     * - 1014: 小程序模板消息
     * - 1017: 前往体验版的入口页
     * - 1019: 微信钱包
     * - 1020: 公众号 profile 页相关小程序列表
     * - 1022: 聊天顶部置顶小程序入口
     * - 1023: 安卓系统桌面图标
     * - 1024: 小程序 profile 页
     * - 1025: 扫描一维码
     * - 1026: 附近小程序列表
     * - 1027: 顶部搜索框搜索结果页「使用过的小程序」列表
     * - 1028: 我的卡包
     * - 1029: 卡券详情页
     * - 1030: 自动化测试下打开小程序
     * - 1031: 长按图片识别一维码
     * - 1032: 手机相册选取一维码
     * - 1034: 微信支付完成页
     * - 1035: 公众号自定义菜单
     * - 1036: App 分享消息卡片
     * - 1037: 小程序打开小程序
     * - 1038: 从另一个小程序返回
     * - 1039: 摇电视
     * - 1042: 添加好友搜索框的搜索结果页
     * - 1043: 公众号模板消息
     * - 1044: 带 shareTicket 的小程序消息卡片
     * - 1045: 朋友圈广告
     * - 1046: 朋友圈广告详情页
     * - 1047: 扫描小程序码
     * - 1048: 长按图片识别小程序码
     * - 1049: 手机相册选取小程序码
     * - 1052: 卡券的适用门店列表
     * - 1053: 搜一搜的结果页
     * - 1054: 顶部搜索框小程序快捷入口
     * - 1056: 音乐播放器菜单
     * - 1057: 钱包中的银行卡详情页
     * - 1058: 公众号文章
     * - 1059: 体验版小程序绑定邀请页
     * - 1064: 微信连Wi-Fi状态栏
     * - 1067: 公众号文章广告
     * - 1068: 附近小程序列表广告
     * - 1069: 移动应用
     * - 1071: 钱包中的银行卡列表页
     * - 1072: 二维码收款页面
     * - 1073: 客服消息列表下发的小程序消息卡片
     * - 1074: 公众号会话下发的小程序消息卡片
     * - 1077: 摇周边
     * - 1078: 连Wi-Fi成功页
     * - 1079: 微信游戏中心
     * - 1081: 客服消息下发的文字链
     * - 1082: 公众号会话下发的文字链
     * - 1084: 朋友圈广告原生页
     * - 1089: 微信聊天主界面下拉，「最近使用」栏（基础库2.2.4版本起包含「我的小程序」栏）
     * - 1090: 长按小程序右上角菜单唤出最近使用历史
     * - 1091: 公众号文章商品卡片
     * - 1092: 城市服务入口
     * - 1095: 小程序广告组件
     * - 1096: 聊天记录
     * - 1097: 微信支付签约页
     * - 1099: 页面内嵌插件
     * - 1102: 公众号 profile 页服务预览
     * - 1103: 发现栏小程序主入口，「我的小程序」列表（基础库2.2.4版本起废弃）
     * - 1104: 微信聊天主界面下拉，「我的小程序」栏（基础库2.2.4版本起废弃）
     */
    // scene: number;
    /**
     * 打开小程序的场景值
     */
    // shareTicket: string;
    /**
     * 当场景为由从另一个小程序或公众号或App打开时，返回此字段
     */
    // referrerInfo?: ReferrerInfo;
  }

  interface OnShowOptions {
    /**
     * 	应用启动页面路径
     */
    path: string
    /**
     * 本次启动时的Scheme。返回值与App.onShow的回调参数一致
     *
     * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/get-enter-options-sync.html
     * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/get-enter-options-sync.html
     * @uniPlatform {
     *  "app": {
     *    "android": {
     *      "osVer": "5.0",
     *      "uniVer": "x",
     *      "unixVer": "4.25"
     *    },
     *    "ios": {
     *      "osVer": "12.0",
     *      "uniVer": "x",
     *      "unixVer": "4.25"
     *    },
     *    "harmony": {
     *      "osVer": "x",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    }
     *  },
     *  "mp": {
     *    "weixin": {
     *      "hostVer": "√",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    },
     *  },
     *  "web": {
     *    "uniVer": "x",
     *    "unixVer": "x"
     *  }
     * }
     */
    appScheme: string | null
    /**
     * 本次启动时的appLink。返回值与App.onShow的回调参数一致
     *
     * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/get-enter-options-sync.html
     * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/get-enter-options-sync.html
     * @uniPlatform {
     *  "app": {
     *    "android": {
     *      "osVer": "5.0",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    },
     *    "ios": {
     *      "osVer": "12.0",
     *      "uniVer": "x",
     *      "unixVer": "4.25"
     *    },
     *    "harmony": {
     *      "osVer": "x",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    }
     *  },
     *  "mp": {
     *    "weixin": {
     *      "hostVer": "√",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    },
     *  },
     *  "web": {
     *    "uniVer": "x",
     *    "unixVer": "x"
     *  }
     * }
     */
    appLink: string | null
  }

  interface OnPageNotFoundOption {
    /**
     * 不存在页面的路径
     */
    path: string;
    /**
     * 打开不存在页面的 query
     */
    query: AnyObject;
    /**
     * 是否本次启动的首个页面（例如从分享等入口进来，首个页面是开发者配置的分享页面）
     */
    isEntryPage: boolean;
  }

  type UniApp = UniAppOrigin
}

type DefineAppX<D extends OptionsData, C extends ComputedOptions, M extends MethodOptions, I extends ComponentInjectOptions, II extends string, G extends GlobalData> = DefineApp<D, C, M, I, II> & UniAppOptions<G>

declare module '@vue/runtime-core' {
  interface AppCustomOptions extends UniAppOptions {

  }
  export function defineApp<D extends OptionsData = OptionsData, C extends ComputedOptions = ComputedOptions, M extends MethodOptions = MethodOptions, I extends ComponentInjectOptions = {}, II extends string = string, G extends GlobalData = GlobalData>(options: DefineAppX<D, C, M, I, II, G>): EditorCreateVueAppComponentX<D, C, M, I, II, G>
}
