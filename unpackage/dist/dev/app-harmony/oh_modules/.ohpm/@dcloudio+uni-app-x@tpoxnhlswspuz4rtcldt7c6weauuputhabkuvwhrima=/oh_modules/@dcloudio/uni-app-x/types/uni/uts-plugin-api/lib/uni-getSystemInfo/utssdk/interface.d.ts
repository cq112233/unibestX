export interface Uni {
  /**
    * getSystemInfo()
    * @description
    * 异步获取系统信息
    * @param {GetSystemInfoOptions}  options
    * @return {void}
    * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/get-system-info.html
    * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/get-system-info.html
    * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/system/info.html
    * @uniPlatform {
    *   "app": {
    *     "android": {
    *       "osVer": "5.0",
    *       "uniVer": "√",
    *       "unixVer": "3.9+"
    *     },
    *     "ios": {
    *       "osVer": "12.0",
    *       "uniVer": "√",
    *       "unixVer": "4.11"
    *     },
    *     "harmony": {
    *       "osVer": "3.0",
    *       "uniVer": "4.23",
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
    * @example
     ```typescript
      uni.getSystemInfo({
        success(e) {
          console.log("success :",e);
        },
        complete(e) {
          console.log("complete :",e);
        }
      })
     ```
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfo.html
     */
  getSystemInfo(options: GetSystemInfoOptions): void;

  /**
    * getSystemInfoSync()
    * @description
    * 同步获取系统信息
    * @param {void}
    * @return {GetSystemInfoResult}
    * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/get-system-info.html#getsysteminfosync
    * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/get-system-info.html#getsysteminfosync
    * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/system/info.html#getsysteminfosync
    * @uniPlatform {
    *   "app": {
    *     "android": {
    *       "osVer": "5.0",
    *       "uniVer": "√",
    *       "unixVer": "3.9+"
    *     },
    *     "ios": {
    *       "osVer": "12.0",
    *       "uniVer": "√",
    *       "unixVer": "4.11"
    *     },
    *     "harmony": {
    *       "osVer": "3.0",
    *       "uniVer": "4.23",
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
    * @example
     ```typescript
      uni.getSystemInfoSync()
     ```
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfoSync.html
     */
  getSystemInfoSync(): GetSystemInfoResult;

  /**
    * getWindowInfo()
    * @description
    * 同步获取窗口信息
    * @param {void}
    * @return {GetWindowInfoResult} result
    * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/get-window-info.html
    * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/get-window-info.html
    * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/system/getWindowInfo.html
    * @uniPlatform {
    *   "app": {
    *     "android": {
    *       "osVer": "5.0",
    *       "uniVer": "√",
    *       "unixVer": "3.9+"
    *     },
    *     "ios": {
    *       "osVer": "12.0",
    *       "uniVer": "√",
    *       "unixVer": "4.11"
    *     },
    *     "harmony": {
    *       "osVer": "3.0",
    *       "uniVer": "4.23",
    *       "unixVer": "4.61"
    *     }
    *   },
    *   "mp": {
    *     "weixin": {
    *       "hostVer": "2.20.1",
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
    * @example
     ```typescript
      uni.getWindowInfo()
     ```
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getWindowInfo.html
     */
  getWindowInfo(): GetWindowInfoResult;
}

export type GetSystemInfo = (options: GetSystemInfoOptions) => void;
export type GetSystemInfoSync = () => GetSystemInfoResult;
export type GetWindowInfo = () => GetWindowInfoResult;
export type SafeArea = {
  /**
   * 安全区域左上角横坐标，单位为px
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
    *
},
    *  "mp": {
    *    "weixin": {
    *        "hostVer": "√",
    *        "uniVer": "√",
    *        "unixVer": "4.41"
    *
},
    *    "alipay": {
    *        "hostVer": "√",
    *        "uniVer": "√",
    *        "unixVer": "x"
    *
},
    *    "baidu": {
    *        "hostVer": "√",
    *        "uniVer": "√",
    *        "unixVer": "x"
    *
},
    *    "toutiao": {
    *        "hostVer": "√",
    *        "uniVer": "√",
    *        "unixVer": "x"
    *
},
    *    "lark": {
    *        "hostVer": "√",
    *        "uniVer": "√",
    *        "unixVer": "x"
    *
},
    *    "qq": {
    *        "hostVer": "√",
    *        "uniVer": "√",
    *        "unixVer": "x"
    *
},
    *    "kuaishou": {
    *        "hostVer": "√",
    *        "uniVer": "√",
    *        "unixVer": "x"
    *
},
    *    "jd": {
    *        "hostVer": "√",
    *        "uniVer": "√",
    *        "unixVer": "x"
    *
}
    *
},
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  left: number,
  /**
   * 安全区域右下角横坐标，单位为px
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  right: number,
  /**
   * 安全区域左上角纵坐标，单位为px
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  top: number,
  /**
   * 安全区域右下角纵坐标，单位为px
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  bottom: number,
  /**
   * 安全区域的宽度，单位为px
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  width: number,
  /**
   * 安全区域的高度，单位为px
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  height: number
};
export type SafeAreaInsets = {
  /**
   * 安全区域左侧插入位置（距离左边边界距离），单位为px
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  left: number,
  /**
   * 安全区域右侧插入位置（距离右边边界距离），单位为px
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  right: number,
  /**
   * 安全区顶部插入位置（距离顶部边界距离），单位为px
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  top: number,
  /**
   * 安全区域底部插入位置（距离底部边界距离），单位为px
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  bottom: number
};
// #ifdef UNI-APP-X
export type CutoutRect = {
  /**
   * 挖孔、刘海区域左上角横坐标，单位为px
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "9.0",
   * 			"uniVer": "x",
   * 			"unixVer": "4.31"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "x",
   * 			"unixVer": "x"
   * 		},
   * 		"harmony": {
   * 			"osVer": "3.0",
   * 			"uniVer": "x",
   * 			"unixVer": "x"
   * 		}
   * 	},
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
   * 	"web": {
   * 		"uniVer": "x",
   * 		"unixVer": "x"
   * 	}
   * }
   */
  left: number,
  /**
   * 挖孔、刘海区域右下角横坐标，单位为px
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "9.0",
   * 			"uniVer": "x",
   * 			"unixVer": "4.31"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "x",
   * 			"unixVer": "x"
   * 		},
   * 		"harmony": {
   * 			"osVer": "3.0",
   * 			"uniVer": "x",
   * 			"unixVer": "x"
   * 		}
   * 	},
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
   * 	"web": {
   * 		"uniVer": "x",
   * 		"unixVer": "x"
   * 	}
   * }
   */
  right: number,
  /**
   * 挖孔、刘海区域左上角纵坐标，单位为px
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "9.0",
   * 			"uniVer": "x",
   * 			"unixVer": "4.31"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "x",
   * 			"unixVer": "x"
   * 		},
   * 		"harmony": {
   * 			"osVer": "3.0",
   * 			"uniVer": "x",
   * 			"unixVer": "x"
   * 		}
   * 	},
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
     *        "uniVer": "√",
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
   * 	"web": {
   * 		"uniVer": "x",
   * 		"unixVer": "x"
   * 	}
   * }
   */
  top: number,
  /**
   * 挖孔、刘海区域右下角纵坐标，单位为px
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "9.0",
   * 			"uniVer": "x",
   * 			"unixVer": "4.31"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "x",
   * 			"unixVer": "x"
   * 		},
   * 		"harmony": {
   * 			"osVer": "3.0",
   * 			"uniVer": "x",
   * 			"unixVer": "x"
   * 		}
   * 	},
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
     *        "uniVer": "√",
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
   * 	"web": {
   * 		"uniVer": "x",
   * 		"unixVer": "x"
   * 	}
   * }
   */
  bottom: number
};
// #endif
export type GetSystemInfoResult = {
  /**
   * 客户端基础库版本
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
     *    "harmony": {
     *      "osVer": "x",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "x",
   *     "unixVer": "x"
   *   }
   * }
   */
  SDKVersion: string,
  /**
   * `manifest.json` 中应用appid。
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  appId: string,
  /**
   * 应用设置的语言。
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  appLanguage: string,
  /**
   * `manifest.json` 中应用名称。
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  appName: string,
  /**
   * `manifest.json` 中应用版本名称。
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  appVersion: string,
  /**
   * `manifest.json` 中应用版本号。
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  appVersionCode: string,
  /**
   * 应用资源（wgt）的版本名称。
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "x"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "x"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "x",
   *     "unixVer": "x"
   *   }
   * }
   */
  appWgtVersion?: string | null,
  /**
   * 手机品牌。
   * @deprecated 已废弃，仅为了向下兼容保留
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "x",
   *     "unixVer": "x"
   *   }
   * }
   */
  brand: string,
  /**
   * 浏览器名称。`App` 端是系统 webview 的名字，比如 wkwebview、chrome。小程序端为空
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
     *    "harmony": {
     *      "osVer": "x",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  browserName: string,
  /**
   * 浏览器版本、webview 版本。
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
     *    "harmony": {
     *      "osVer": "x",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  browserVersion: string,
  /**
   * 设备 ID
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
     *    "harmony": {
     *      "osVer": "3.0",
     *      "uniVer": "4.23",
     *      "unixVer": "4.61"
     *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  deviceId: string,
  /**
   * 设备品牌。如：`apple`、`huawei`。
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
     *    "harmony": {
     *      "osVer": "3.0",
     *      "uniVer": "4.23",
     *      "unixVer": "4.61"
     *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  deviceBrand: string,
  /**
   * 设备型号
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
     *    "harmony": {
     *      "osVer": "3.0",
     *      "uniVer": "4.23",
     *      "unixVer": "4.61"
     *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  deviceModel: string,
  /**
   * 设备类型。
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
     *    "harmony": {
     *      "osVer": "3.0",
     *      "uniVer": "4.23",
     *      "unixVer": "4.61"
     *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  deviceType: 'phone' | 'pad' | 'tv' | 'watch' | 'pc' | 'undefined' | 'car' | 'vr' | 'appliance',
  /**
   * 设备像素比
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
     *    "harmony": {
     *      "osVer": "3.0",
     *      "uniVer": "4.23",
     *      "unixVer": "4.61"
     *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  devicePixelRatio: number,
  /**
   * 设备方向。
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
     *    "harmony": {
     *      "osVer": "3.0",
     *      "uniVer": "4.23",
     *      "unixVer": "4.61"
     *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  deviceOrientation:
  /**
   * 纵向
   */
  'portrait' |
  /**
   * 横向
   */
  'landscape',
  /**
   * 程序设置的语言
   * @deprecated 已废弃，仅为了向下兼容保留
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
     *    "harmony": {
     *      "osVer": "x",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  language: string,
  /**
   * 手机型号
   * @deprecated 已废弃，仅为了向下兼容保留
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
     *    "harmony": {
     *      "osVer": "x",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  model?: string,
  /**
   * 系统名称
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
     *    "harmony": {
     *      "osVer": "3.0",
     *      "uniVer": "4.23",
     *      "unixVer": "4.61"
     *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  osName: 'ios' | 'android' | 'harmonyos' | 'macos' | 'windows' | 'linux',
  /**
   * 操作系统版本。如 ios 版本，andriod 版本
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
     *    "harmony": {
     *      "osVer": "3.0",
     *      "uniVer": "4.23",
     *      "unixVer": "4.61"
     *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  osVersion: string,
  /**
   * 操作系统语言
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
     *    "harmony": {
     *      "osVer": "3.0",
     *      "uniVer": "4.23",
     *      "unixVer": "4.61"
     *    }
   * 	},
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  osLanguage: string,
  /**
   * 操作系统主题
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "√"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
     *    "harmony": {
     *      "osVer": "3.0",
     *      "uniVer": "4.23",
     *      "unixVer": "4.61"
     *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "x",
   *     "unixVer": "x"
   *   }
   * }
   */
  osTheme?: 'light' | 'dark' | null,
  /**
   * 设备像素比
   * @deprecated 已废弃，仅为了向下兼容保留
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
     *    "harmony": {
     *      "osVer": "x",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  pixelRatio: number,
  /**
   * 客户端平台
   * @deprecated 已废弃，仅为了向下兼容保留
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
     *    "harmony": {
     *      "osVer": "x",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  platform: 'ios' |
       'android' |
       'harmonyos' |
       'mac' |
       'windows' |
       'linux' |
      /**
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
      "ohos" |
      /**
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
      "devtools",
  /**
   * 屏幕宽度，单位为px
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
     *    "harmony": {
     *      "osVer": "3.0",
     *      "uniVer": "4.23",
     *      "unixVer": "4.61"
     *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  screenWidth: number,
  /**
   * 屏幕高度，单位为px
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  screenHeight: number,
  /**
   * 状态栏的高度，单位为px
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  statusBarHeight: number,
  /**
   * 操作系统版本
   * @deprecated 已废弃，仅为了向下兼容保留
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  system: string,
  /**
   * 在竖屏正方向下的安全区域
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  safeArea: SafeArea,
  /**
   * 在竖屏正方向下的安全区域插入位置
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  safeAreaInsets: SafeAreaInsets,
  /**
   * 用户标识。小程序端为空
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
     *    "harmony": {
     *      "osVer": "x",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    }
   * 	},
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
   *    }
   *  },
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  ua: string,
  /**
   * uni 编译器版本。
   * @deprecated 已废弃，仅为了向下兼容保留
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
     *    "harmony": {
     *      "osVer": "x",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  uniCompileVersion: string,
  /**
   * uni 编译器版本。
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "x",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "x",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "x",
   *     "unixVer": "4.18"
   *   }
   * }
   */
  uniCompilerVersion: string,
  /**
   * uni-app 运行平台，与条件编译平台相同。
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  uniPlatform: 'app' | 'web' | 'mp-weixin' | 'mp-alipay' | 'mp-baidu' | 'mp-toutiao' | 'mp-lark' | 'mp-qq' | 'mp-kuaishou' | 'mp-jd' | 'mp-360' | 'quickapp-webview' | 'quickapp-webview-union' | 'quickapp-webview-huawei',
  /**
   * uni 运行时版本。
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  uniRuntimeVersion: string,
  /**
   * uni 编译器版本号。
   * @deprecated 已废弃，仅为了向下兼容保留
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "x",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "x",
   * 			"unixVer": "4.11"
   * 		},
     *    "harmony": {
     *      "osVer": "x",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  uniCompileVersionCode: number,
  /**
   * uni 编译器版本号。
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "x",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "x",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "x",
   *     "unixVer": "4.18"
   *   }
   * }
   */
  uniCompilerVersionCode: number,
  /**
   * uni 运行时版本号。
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "x",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "x",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  uniRuntimeVersionCode: number,
  /**
   * 引擎版本号。
   * @deprecated 已废弃，仅为了向下兼容保留
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
     *    "harmony": {
     *      "osVer": "x",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  version: string,
  /**
   * rom 名称。Android 部分机型获取不到值。iOS 恒为 `ios`
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "x",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "x",
   *     "unixVer": "x"
   *   }
   * }
   */
  romName: string,
  /**
   * rom 版本号。Android 部分机型获取不到值。iOS 为操作系统版本号（同 `osVersion`）。
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "x",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "x",
   *     "unixVer": "x"
   *   }
   * }
   */
  romVersion: string,
  /**
   * 可使用窗口宽度，单位为px
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  windowWidth: number,
  /**
   * 可使用窗口高度，单位为px
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  windowHeight: number,
  /**
   * 内容区域距离顶部的距离（同CSS变量 `--window-top`），单位为px
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  windowTop: number,
  /**
   * 内容区域距离底部的距离（同CSS变量 `--window-bottom`），单位为px
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  windowBottom: number,
  /**
   * Android 系统API库的版本。
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "√"
   * 		},
   * 		"ios": {
   * 			"osVer": "x",
   * 			"uniVer": "x",
   * 			"unixVer": "x"
   * 		},
     *    "harmony": {
     *      "osVer": "x",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "x",
   *     "unixVer": "x"
   *   }
   * }
   */
    osAndroidAPILevel?: number | null,
  /**
   * 鸿蒙系统软件API版本
   *
   * @uniPlatform
   * {
   *    "app": {
   *      "android": {
   *      "osVer": "5.0",
   *      "uniVer": "√",
   *      "unixVer": "√"
   *    },
   *    "ios": {
   *      "osVer": "x",
   *      "uniVer": "x",
   *      "unixVer": "x"
   *    },
   *    "harmony": {
   *      "osVer": "√",
   *      "uniVer": "4.61",
   *      "unixVer": "4.61"
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
   *   "web": {
   *     "uniVer": "x",
   *     "unixVer": "x"
   *   }
   * }
   */
    osHarmonySDKAPIVersion?: number | null,
    /**
     * 产品版本，关于本机信息内的软件版本
     *
     * @uniPlatform
     * {
     *    "app": {
     *      "android": {
     *      "osVer": "5.0",
     *      "uniVer": "√",
     *      "unixVer": "√"
     *    },
     *    "ios": {
     *      "osVer": "x",
     *      "uniVer": "x",
     *      "unixVer": "x"
     *    },
     *    "harmony": {
     *      "osVer": "√",
     *      "uniVer": "4.61",
     *      "unixVer": "4.61"
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
     *   "web": {
     *     "uniVer": "x",
     *     "unixVer": "x"
     *   }
     * }
     */
    osHarmonyDisplayVersion?: string | null,
  /**
   * 当前App的主题
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "x",
   * 			"unixVer": "4.18"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "x",
   * 			"unixVer": "4.18"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "x",
   *     "unixVer": "x"
   *   }
   * }
   */
  appTheme?: 'light' | 'dark' | 'auto' | null,
    /**
     * 需要基础库： `2.6.0`
     *
     * 允许微信使用相册的开关（仅 iOS 有效）
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "2.6.0",
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
    albumAuthorized?: boolean | null;
    /**
     * 需要基础库： `1.8.0`
     *
     * 设备性能等级（仅 Android）。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好）<br> 注意：性能等级当前仅反馈真机机型，暂不支持 IDE 模拟器机型
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "1.8.0",
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
    benchmarkLevel?: number | null;
    /**
     * 需要基础库： `2.6.0`
     *
     * 蓝牙的系统开关
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "2.6.0",
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
    bluetoothEnabled?: boolean | null;
    /**
     * 需要基础库： `2.6.0`
     *
     * 允许微信使用摄像头的开关
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "2.6.0",
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
    cameraAuthorized?: boolean | null;
    /**
     * 需要基础库： `2.15.0`
     *
     * 是否已打开调试。可通过右上角菜单或 [uni.setEnableDebug](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.setEnableDebug.html) 打开调试。
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "2.15.0",
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
    enableDebug?: boolean | null;
    /**
     * 需要基础库： `1.5.0`
     *
     * 用户字体大小（单位px）。以微信客户端「我-设置-通用-字体大小」中的设置为准
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "1.5.0",
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
    fontSizeSetting?: number | null;
    /**
     * 需要基础库： `2.12.3`
     *
     * 当前小程序运行的宿主环境
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "2.12.3",
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
    host?: GetSystemInfoResultHost | null;
    /**
     * 需要基础库： `2.6.0`
     *
     * 允许微信使用定位的开关
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "2.6.0",
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
    locationAuthorized?: boolean | null;
    /**
     * 需要基础库： `2.6.0`
     *
     * 地理位置的系统开关
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "2.6.0",
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
    locationEnabled?: boolean | null;
    /**
     * `true` 表示模糊定位，`false` 表示精确定位，仅 iOS 支持
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
    locationReducedAccuracy?: boolean | null;
    /**
     * 需要基础库： `2.6.0`
     *
     * 允许微信使用麦克风的开关
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "2.6.0",
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
    microphoneAuthorized?: boolean | null;
    /**
     * 需要基础库： `2.6.0`
     *
     * 允许微信通知带有提醒的开关（仅 iOS 有效）
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "2.6.0",
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
    notificationAlertAuthorized?: boolean | null;
    /**
     * 需要基础库： `2.6.0`
     *
     * 允许微信通知的开关
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "2.6.0",
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
    notificationAuthorized?: boolean | null;
    /**
     * 需要基础库： `2.6.0`
     *
     * 允许微信通知带有标记的开关（仅 iOS 有效）
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "2.6.0",
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
    notificationBadgeAuthorized?: boolean | null;
    /**
     * 需要基础库： `2.6.0`
     *
     * 允许微信通知带有声音的开关（仅 iOS 有效）
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "2.6.0",
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
    notificationSoundAuthorized?: boolean | null;
    /**
     * 需要基础库： `2.19.3`
     *
     * 允许微信使用日历的开关
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "2.19.3",
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
    phoneCalendarAuthorized?: boolean | null;
    /**
     * 需要基础库： `2.6.0`
     *
     * Wi-Fi 的系统开关
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "2.6.0",
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
    wifiEnabled?: boolean | null;
    /**
     * 需要基础库： `2.11.0`
     *
     * 系统当前主题，取值为`light`或`dark`，全局配置`"darkmode":true`时才能获取，否则为 undefined （不支持小游戏）
     *
     * 可选值：
     * - 'dark': 深色主题;
     * - 'light': 浅色主题;
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "2.11.0",
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
    theme?: "dark" | "light" | null;
};
export type GetSystemInfoSuccessCallback = (result: GetSystemInfoResult) => void;
type GetSystemInfoFail = UniError;
type GetSystemInfoFailCallback = (result: GetSystemInfoFail) => void;
export type GetSystemInfoComplete = any;
export type GetSystemInfoCompleteCallback = (result: GetSystemInfoComplete) => void;
export type GetSystemInfoOptions = {
  /**
   * 接口调用成功的回调函数
   * @defaultValue null
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
  success?: GetSystemInfoSuccessCallback | null,
  /**
   * 接口调用失败的回调函数
   * @defaultValue null
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
  fail?: GetSystemInfoFailCallback | null,
  /**
   * 接口调用结束的回调函数（调用成功、失败都会执行）
   * @defaultValue null
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
  complete?: GetSystemInfoCompleteCallback | null
};

export type GetWindowInfoResult = {
  /**
   * 设备像素比
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  pixelRatio: number,
  /**
   * 屏幕宽度，单位为px
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  screenWidth: number,
  /**
   * 屏幕高度，单位为px
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  screenHeight: number,
  /**
   * 可使用窗口宽度，单位为px
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  windowWidth: number,
  /**
   * 可使用窗口高度，单位为px
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
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
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	}
   * }
   */
  windowHeight: number,
  /**
   * 状态栏的高度，单位为px
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  statusBarHeight: number,
  /**
   * 内容区域距离顶部的距离（同CSS变量 `--window-top`），单位为px
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  windowTop: number,
  /**
   * 内容区域距离底部的距离（同CSS变量 `--window-bottom`），单位为px
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  windowBottom: number,
  /**
   * 安全区域在屏幕中的位置信息
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  safeArea: SafeArea,
  /**
   * 安全区域插入位置（与屏幕边界的距离）信息
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  safeAreaInsets: SafeAreaInsets,
  /**
   * 窗口上边缘的 y 值，单位为px
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "5.0",
   * 			"uniVer": "√",
   * 			"unixVer": "3.9+"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "√",
   * 			"unixVer": "4.11"
   * 		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.23",
   *      "unixVer": "4.61"
   *    }
   * 	},
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
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "4.0"
   *   }
   * }
   */
  screenTop: number,
  /**
   * 挖孔、刘海区域在屏幕中的位置信息
   *
   * @uniPlatform
   * {
   * 	"app": {
   * 		"android": {
   * 			"osVer": "9.0",
   * 			"uniVer": "x",
   * 			"unixVer": "4.31"
   * 		},
   * 		"ios": {
   * 			"osVer": "12.0",
   * 			"uniVer": "x",
   * 			"unixVer": "x"
   * 		},
   * 		"harmony": {
   * 			"osVer": "3.0",
   * 			"uniVer": "x",
   * 			"unixVer": "x"
   * 		}
   * 	},
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
   * 	"web": {
   * 		"uniVer": "x",
   * 		"unixVer": "x"
   * 	}
   * }
   */
  // #ifdef UNI-APP-X
  cutoutArea: Array<CutoutRect> | null
  // #endif
};
/**
 * 需要基础库： `2.12.3`
 *
 * 当前小程序运行的宿主环境
 *
 * @uniPlatform {
 *   "mp": {
 *     "weixin": {
 *       "hostVer": "2.12.3",
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
export type GetSystemInfoResultHost = {
    /**
    * 宿主 app 对应的 appId
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
    appId?: string | null
};
