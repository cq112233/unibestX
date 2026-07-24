// type OnLaunchOptions = {
//   path: string
// }
type OnHide = () => void
export function onHide(hook: OnHide, target?: ComponentInternalInstance | null): void
type OnAppLaunch = (options: OnLaunchOptions) => void
export function onLaunch(hook: OnAppLaunch, target?: ComponentInternalInstance | null): void
// type OnShowOptions = {
//   path: string;
// };
type OnAppShow = (options: OnShowOptions) => void
export function onAppShow(hook: OnAppShow, target?: ComponentInternalInstance | null): void
type OnAppHide = () => void
export function onAppHide(hook: OnAppHide, target?: ComponentInternalInstance | null): void
type OnLastPageBackPress = () => void
export function onLastPageBackPress(hook: OnLastPageBackPress, target?: ComponentInternalInstance | null): void
type OnExit = () => void
export function onExit(hook: OnExit, target?: ComponentInternalInstance | null): void
type OnLoadOptions = UTSJSONObject;
type OnLoad = (options: OnLoadOptions) => void
/**
 * 生命周期回调 监听页面加载
 *
 * 页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数。
 * @param query 打开当前页面路径中的参数
 *
 * @tutorial [https://doc.dcloud.net.cn/uni-app-x/page.html#lifecycle](https://doc.dcloud.net.cn/uni-app-x/page.html#lifecycle)
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
 *          "unixVer": "4.11"
 *      },
 *      "harmony": {
 *         "osVer": "3.0",
 *         "uniVer": "4.23",
 *         "unixVer": "4.61"
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
export function onLoad(hook: OnLoad, target?: ComponentInternalInstance | null): void
type OnPageShow = () => void
/**
 * 生命周期回调 监听页面显示
 *
 * 页面显示/切入前台时触发。
 *
 * @tutorial [https://doc.dcloud.net.cn/uni-app-x/page.html#lifecycle](https://doc.dcloud.net.cn/uni-app-x/page.html#lifecycle)
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
 *          "unixVer": "4.11"
 *      },
 *      "harmony": {
 *         "osVer": "3.0",
 *         "uniVer": "4.23",
 *         "unixVer": "4.61"
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
export function onPageShow(hook: OnPageShow, target?: ComponentInternalInstance | null): void
type OnPageHide = () => void
/**
 * 生命周期回调 监听页面隐藏
 *
 * 页面隐藏/切入后台时触发。 如 `navigateTo` 或底部 `tab` 切换到其他页面，应用切入后台等。
 *
 * @tutorial [https://doc.dcloud.net.cn/uni-app-x/page.html#lifecycle](https://doc.dcloud.net.cn/uni-app-x/page.html#lifecycle)
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
 *          "unixVer": "4.11"
 *      },
 *      "harmony": {
 *         "osVer": "3.0",
 *         "uniVer": "4.23",
 *         "unixVer": "4.61"
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
export function onPageHide(hook: OnPageHide, target?: ComponentInternalInstance | null): void
type OnReady = () => void
/**
 * 生命周期回调 监听页面初次渲染完成
 *
 * 页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
 *
 * @tutorial [https://doc.dcloud.net.cn/uni-app-x/page.html#lifecycle](https://doc.dcloud.net.cn/uni-app-x/page.html#lifecycle)
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
 *          "unixVer": "4.11"
 *      },
 *      "harmony": {
 *         "osVer": "3.0",
 *         "uniVer": "4.23",
 *         "unixVer": "4.61"
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
export function onReady(hook: OnReady, target?: ComponentInternalInstance | null): void
type OnUnload = () => void
/**
 * 生命周期回调 监听页面卸载
 *
 * 页面卸载时触发。如 `redirectTo` 或 `navigateBack` 到其他页面时。
 *
 * @tutorial [https://doc.dcloud.net.cn/uni-app-x/page.html#lifecycle](https://doc.dcloud.net.cn/uni-app-x/page.html#lifecycle)
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
 *          "unixVer": "4.11"
 *      },
 *      "harmony": {
 *         "osVer": "3.0",
 *         "uniVer": "4.23",
 *         "unixVer": "4.61"
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
export function onUnload(hook: OnUnload, target?: ComponentInternalInstance | null): void
type OnPullDownRefresh = () => void
/**
 * 监听用户下拉动作
 * - 需要在 `pages.json` 的页面配置中开启 `enablePullDownRefresh` 。
 * - 可以通过 `uni.startPullDownRefresh` 触发下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
 * - 当处理完数据刷新后，`uni.stopPullDownRefresh` 可以停止当前页面的下拉刷新。
 *
 * @tutorial [https://doc.dcloud.net.cn/uni-app-x/page.html#lifecycle](https://doc.dcloud.net.cn/uni-app-x/page.html#lifecycle)
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
 *          "unixVer": "4.11"
 *      },
 *      "harmony": {
 *         "osVer": "3.0",
 *         "uniVer": "4.23",
 *         "unixVer": "4.61"
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
export function onPullDownRefresh(hook: OnPullDownRefresh, target?: ComponentInternalInstance | null): void
// type OnPageScrollOptions = {
//   scrollTop: number;
// };
type OnPageScroll = (options: OnPageScrollOptions) => void
/**
 * 页面滚动触发事件的处理函数
 *
 * 监听用户滑动页面事件。
 * @param options 页面滚动参数
 *
 * @tutorial [https://doc.dcloud.net.cn/uni-app-x/page.html#lifecycle](https://doc.dcloud.net.cn/uni-app-x/page.html#lifecycle)
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
 *          "unixVer": "4.13"
 *      },
 *      "harmony": {
 *         "osVer": "3.0",
 *         "uniVer": "4.23",
 *         "unixVer": "4.61"
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
export function onPageScroll(hook: OnPageScroll, target?: ComponentInternalInstance | null): void
type OnReachBottom = () => void
/**
   * 页面上拉触底事件的处理函数
   * - 可以在 `pages.json` 的页面配置中设置触发距离 `onReachBottomDistance` 。
   * - 在触发距离内滑动期间，本事件只会被触发一次。
   *
   * @tutorial [https://doc.dcloud.net.cn/uni-app-x/page.html#lifecycle](https://doc.dcloud.net.cn/uni-app-x/page.html#lifecycle)
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
   *          "unixVer": "4.11"
   *      },
   *      "harmony": {
   *         "osVer": "3.0",
   *         "uniVer": "4.23",
   *         "unixVer": "4.61"
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
export function onReachBottom(hook: OnReachBottom, target?: ComponentInternalInstance | null): void
// type OnBackPressOptions = {
//   from: 'backbutton' | 'navigateBack';
// };
type OnBackPress = (options: OnBackPressOptions) => boolean | null
/**
 * 监听页面返回
 * @param options tab 点击参数
 * @return 返回 `true` 时阻止页面返回
 *
 * @tutorial [https://doc.dcloud.net.cn/uni-app-x/page.html#lifecycle](https://doc.dcloud.net.cn/uni-app-x/page.html#lifecycle)
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
 *          "unixVer": "4.11"
 *      },
 *      "harmony": {
 *         "osVer": "3.0",
 *         "uniVer": "4.23",
 *         "unixVer": "4.61"
 *      }
 *  },
 *  "mp": {
 *    "weixin": {
 *        "hostVer": "x",
 *        "uniVer": "x",
 *        "unixVer": "4.41"
 *    },
 *    "alipay": {
 *        "hostVer": "√",
 *        "uniVer": "√",
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
 *    }
 *  },
 *  "web": {
 *      "uniVer": "√",
 *      "unixVer": "4.0"
 *  }
 *}
 */
export function onBackPress(hook: OnBackPress, target?: ComponentInternalInstance | null): void
// type OnResizeSize = {
//   screenHeight: number;
//   screenWidth: number;
//   windowHeight: number;
//   windowWidth: number;
// };
// type OnResizeOptions = {
//   deviceOrientation: string;
//   size: OnResizeSize;
// };
type OnResize = (options: OnResizeOptions) => void
/**
 * 页面尺寸改变时触发
 * @param options 页面滚动参数
 *
 * @tutorial [https://doc.dcloud.net.cn/uni-app-x/page.html#lifecycle](https://doc.dcloud.net.cn/uni-app-x/page.html#lifecycle)
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
 *          "unixVer": "4.11"
 *      },
 *      "harmony": {
 *         "osVer": "3.0",
 *         "uniVer": "4.23",
 *         "unixVer": "4.61"
 *      }
 *  },
 *  "mp": {
 *    "weixin": {
 *        "hostVer": "√",
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
 *        "hostVer": "√",
 *        "uniVer": "√",
 *        "unixVer": "x"
 *    },
 *    "jd": {
 *        "hostVer": "x",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *    }
 *  },
 *  "web": {
 *      "uniVer": "√",
 *      "unixVer": "4.0"
 *  }
 *}
 */
export function onResize(hook: OnResize, target?: ComponentInternalInstance | null): void
