export type OnShowOptions = {
    /**
     * 本次启动时页面的路径
     *
     * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/get-enter-options-sync.html
     * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/get-enter-options-sync.html
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
     *      "osVer": "3,0",
     *      "uniVer": "4.31",
     *      "unixVer": "4.61"
     *    }
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
     *    "uniVer": "√",
     *    "unixVer": "4.0"
     *  }
     * }
     */
    path: string
    /**
     * 本次启动时的Scheme。返回值与App.onShow的回调参数一致
     *
     * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/get-enter-options-sync.html
     * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/get-enter-options-sync.html
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
     *      "osVer": "5.0.0",
     *      "uniVer": "4.76",
     *      "unixVer": "4.76"
     *    }
     *  },
     *  "mp": {
     *    "weixin": {
     *        "hostVer": "√",
     *        "uniVer": "x",
     *        "unixVer": "x"
     *    },
     *    "alipay": {
     *        "hostVer": "√",
     *        "uniVer": "x",
     *        "unixVer": "x"
     *    },
     *    "baidu": {
     *        "hostVer": "√",
     *        "uniVer": "x",
     *        "unixVer": "x"
     *    },
     *    "toutiao": {
     *        "hostVer": "√",
     *        "uniVer": "x",
     *        "unixVer": "x"
     *    },
     *    "lark": {
     *        "hostVer": "√",
     *        "uniVer": "x",
     *        "unixVer": "x"
     *    },
     *    "qq": {
     *        "hostVer": "√",
     *        "uniVer": "x",
     *        "unixVer": "x"
     *    },
     *    "kuaishou": {
     *        "hostVer": "√",
     *        "uniVer": "x",
     *        "unixVer": "x"
     *    },
     *    "jd": {
     *        "hostVer": "√",
     *        "uniVer": "x",
     *        "unixVer": "x"
     *    }
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
     * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/get-enter-options-sync.html
     * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/get-enter-options-sync.html
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
     *      "osVer": "5.0.0",
     *      "uniVer": "4.76",
     *      "unixVer": "4.76"
     *    }
     *  },
     *  "mp": {
     *    "weixin": {
     *        "hostVer": "√",
     *        "uniVer": "x",
     *        "unixVer": "x"
     *    },
     *    "alipay": {
     *        "hostVer": "√",
     *        "uniVer": "x",
     *        "unixVer": "x"
     *    },
     *    "baidu": {
     *        "hostVer": "√",
     *        "uniVer": "x",
     *        "unixVer": "x"
     *    },
     *    "toutiao": {
     *        "hostVer": "√",
     *        "uniVer": "x",
     *        "unixVer": "x"
     *    },
     *    "lark": {
     *        "hostVer": "√",
     *        "uniVer": "x",
     *        "unixVer": "x"
     *    },
     *    "qq": {
     *        "hostVer": "√",
     *        "uniVer": "x",
     *        "unixVer": "x"
     *    },
     *    "kuaishou": {
     *        "hostVer": "√",
     *        "uniVer": "x",
     *        "unixVer": "x"
     *    },
     *    "jd": {
     *        "hostVer": "√",
     *        "uniVer": "x",
     *        "unixVer": "x"
     *    }
     *  },
     *  "web": {
     *    "uniVer": "x",
     *    "unixVer": "x"
     *  }
     * }
     */
    appLink: string | null
    /**
     * 需要基础库： `2.20.0`
     *
     * API 类别
     *
     * 可选值：
     * - 'default': 默认类别;
     * - 'nativeFunctionalized': 原生功能化，视频号直播商品、商品橱窗等场景打开的小程序;
     * - 'browseOnly': 仅浏览，朋友圈快照页等场景打开的小程序;
     * - 'embedded': 内嵌，通过打开半屏小程序能力打开的小程序;
     * - 'chatTool': 聊天工具，通过打开聊天工具能力打开的小程序;
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "2.20.0",
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
    apiCategory?: "default" | "nativeFunctionalized" | "browseOnly" | "embedded" | "chatTool" | null;
    /**
     * 打开的文件信息数组，只有从聊天素材场景打开（scene为1173）才会携带该参数
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
    forwardMaterials?: any | null;
    /**
     * 启动小程序的 query 参数
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
    query?: Record<string, string> | null;
    /**
     * 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意)
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
    referrerInfo?: OnShowOptionsReferrerInfo | null;
    /**
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html
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
    scene?: number | null;
    /**
     * 从微信群聊/单聊打开小程序时，chatType 表示具体微信群聊/单聊类型
     *
     * 可选值：
     * - 1: 微信联系人单聊;
     * - 2: 企业微信联系人单聊;
     * - 3: 普通微信群聊;
     * - 4: 企业微信互通群聊;
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
    chatType?: 1 | 2 | 3 | 4 | null;
    /**
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html#获取更多转发信息
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
    shareTicket?: string | null;
}

export type GetEnterOptionsSync = () => OnShowOptions

export interface Uni {
    /**
     * 获取本次启动时的参数。返回值与App.onShow的回调参数一致
     *
     * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/get-enter-options-sync.html
     * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/get-enter-options-sync.html
     * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/getEnterOptionsSync.html
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
     *       "osVer": "3,0",
     *       "uniVer": "4.31",
     *       "unixVer": "4.61"
     *     }
     *   },
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "2.9.4",
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
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getEnterOptionsSync.html
     */
    getEnterOptionsSync(): OnShowOptions
}

/**
 * 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意)
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
export type OnShowOptionsReferrerInfo = {
    /**
    * 来源小程序、公众号或 App 的 appId
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
    appId?: string | null;
    /**
    * 来源小程序传过来的数据，scene=1037或1038时支持
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
    extraData?: any | null
};
