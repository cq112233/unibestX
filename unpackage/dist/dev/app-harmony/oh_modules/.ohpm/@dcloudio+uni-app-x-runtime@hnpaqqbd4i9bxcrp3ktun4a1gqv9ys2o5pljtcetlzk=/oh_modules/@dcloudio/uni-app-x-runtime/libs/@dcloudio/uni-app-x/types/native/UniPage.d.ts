import { UniSafeAreaInsets } from './UniSafeAreaInsets'
import { FullscreenError, UniElement } from './IUniElement'

export type UniPageBody = {
  /**
   * 页面可使用区域左上角纵坐标，单位为px
   */
  top: number,
  /**
   * 页面可使用区域右下角纵坐标，单位为px
   */
  bottom: number,
  /**
   * 页面可使用区域左上角横坐标，单位为px
   */
  left: number,
  /**
   * 页面可使用区域右下角横坐标，单位为px
   */
  right: number,
  /**
   * 页面可使用区域的宽度，单位为px
   */
  width: number,
  /**
   * 页面可使用区域的高度，单位为px
   */
  height: number
}
/**
 * 页面性能计时信息
 */
interface UniPagePerformanceTiming {
 /**
  * 性能计时持续的时间，单位为ms
  */
 duration: number
}
/**
 * 监听页面布局变化更新事件回调函数
 */
type UniPageOnLayoutChangeCallback = (res: UniPageOnLayoutChangeCallbackResult) => void
/**
 * 监听页面布局变化更新事件回调参数
 */
type UniPageOnLayoutChangeCallbackResult = UniPagePerformanceTiming
/**
 * 渲染性能计时信息
 *  UniPagePerformanceTiming基类的duration属性为渲染到屏幕的总时间
 */
interface UniPagePerformanceRenderTiming extends UniPagePerformanceTiming {
 /**
  * 更新渲染属性的总时间，单位为ms
  */
 updateDuration: number
}
/**
 * 监听页面布局变化更新事件回调函数
 */
type UniPageOnRenderChangeCallback = (res: UniPageOnRenderChangeCallbackResult) => void
/**
 * 监听页面布局变化更新事件回调参数
 */
type UniPageOnRenderChangeCallbackResult = UniPagePerformanceRenderTiming
/**
 * 监听页面触摸事件回调函数
 */
type UniPageOnTouchEventCallback = () => void

export interface UniPage {
  /**
   * 页面的路由地址
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/unipage.html
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/unipage.html
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
   *      "unixUtsPlugin": "4.31"
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
  route: string
  /**
   * 页面的路由参数信息
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/unipage.html
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/unipage.html
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
   *      "unixUtsPlugin": "4.31"
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
   *    "unixVer": "4.31"
   *  }
   * }
   */
  options: UTSJSONObject
  /**
   * UniPage vue 实例对象
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/unipage.html
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/unipage.html
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
  vm?: ComponentPublicInstance | null
  /**
   * UniPage vue 实例对象
   * @deprecated 已废弃，仅为了向下兼容保留
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/unipage.html
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/unipage.html
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
  $vm?: ComponentPublicInstance | null
  /**
   * UniPage 页面可使用区域信息，单位为px
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/unipage.html
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/unipage.html
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *      "osVer": "5.0",
   *      "uniVer": "x",
   *      "unixVer": "4.51"
   *    },
   *    "ios": {
   *      "osVer": "x",
   *      "uniVer": "x",
   *      "unixVer": "4.51"
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
   *    "unixVer": "4.51"
   *  }
   * }
   */
  pageBody: UniPageBody
  /**
   * UniPage 安全区域插入位置（与屏幕边界的距离）信息
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/unipage.html
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/unipage.html
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *      "osVer": "5.0",
   *      "uniVer": "x",
   *      "unixVer": "4.51"
   *    },
   *    "ios": {
   *      "osVer": "x",
   *      "uniVer": "x",
   *      "unixVer": "4.51"
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
   *    "unixVer": "4.51"
   *  }
   * }
   */
  safeAreaInsets: UniSafeAreaInsets
  /**
   * 已经进入全屏状态的元素
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/unipage.html
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/unipage.html
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *      "osVer": "5.0",
   *      "uniVer": "x",
   *      "unixVer": "4.61"
   *    },
   *    "ios": {
   *      "osVer": "x",
   *      "uniVer": "x",
   *      "unixVer": "4.61"
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
   *    "unixVer": "x"
   *  }
   * }
   */
  readonly fullscreenElement?: UniElement | null
  /**
   * 页面窗口宽度
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/unipage.html
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/unipage.html
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *      "osVer": "5.0",
   *      "uniVer": "x",
   *      "unixVer": "4.61"
   *    },
   *    "ios": {
   *      "osVer": "x",
   *      "unixVer": "4.61",
   *      "unixUtsPlugin": "4.61"
   *    },
   *    "harmony": {
   *      "osVer": "x",
   *      "uniVer": "x",
   *      "unixVer": "4.63"
   *    }
   *  },
   *  "mp": {
   *    "weixin": {
   *      "hostVer": "√",
   *      "uniVer": "x",
   *      "unixVer": "4.63"
   *    },
   *  },
   *  "web": {
   *    "uniVer": "x",
   *    "unixVer": "4.63"
   *  }
   * }
   */
  readonly width: number
  /**
   * 页面窗口高度
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/unipage.html
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/unipage.html
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *      "osVer": "5.0",
   *      "uniVer": "x",
   *      "unixVer": "4.61"
   *    },
   *    "ios": {
   *      "osVer": "x",
   *      "unixVer": "4.61",
   *      "unixUtsPlugin": "4.61"
   *    },
   *    "harmony": {
   *      "osVer": "x",
   *      "uniVer": "x",
   *      "unixVer": "4.63"
   *    }
   *  },
   *  "mp": {
   *    "weixin": {
   *      "hostVer": "√",
   *      "uniVer": "x",
   *      "unixVer": "4.63"
   *    },
   *  },
   *  "web": {
   *    "uniVer": "x",
   *    "unixVer": "4.63"
   *  }
   * }
   */
  readonly height: number
  /**
   * 页面状态栏高度
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/unipage.html
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/unipage.html
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *      "osVer": "5.0",
   *      "uniVer": "x",
   *      "unixVer": "4.61"
   *    },
   *    "ios": {
   *      "osVer": "x",
   *      "unixVer": "4.61",
   *      "unixUtsPlugin": "4.61"
   *    },
   *    "harmony": {
   *      "osVer": "x",
   *      "uniVer": "x",
   *      "unixVer": "4.63"
   *    }
   *  },
   *  "mp": {
   *    "weixin": {
   *      "hostVer": "√",
   *      "uniVer": "x",
   *      "unixVer": "4.63"
   *    },
   *  },
   *  "web": {
   *    "uniVer": "x",
   *    "unixVer": "4.63"
   *  }
   * }
   */
  readonly statusBarHeight: number
  /**
   * 获取当前页面样式。详细属性配置请参考PageStyle
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/unipage.html#getpagestyle
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
   *      "unixUtsPlugin": "4.31"
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
  getPageStyle(): UTSJSONObject
  /**
   * 获取当前页面样式。详细属性配置请参考PageStyle
   * @deprecated 已废弃，仅为了向下兼容保留
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/unipage.html#getpagestyle-2
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *      "osVer": "5.0",
   *      "uniVer": "x",
   *      "unixVer": "4.13"
   *    },
   *    "ios": {
   *      "osVer": "x",
   *      "uniVer": "x",
   *      "unixVer": "4.13"
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
   *    "unixVer": "4.13"
   *  }
   * }
   */
  $getPageStyle(): UTSJSONObject
  /**
   * 设置当前页面样式。详细属性配置请参考PageStyle
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/unipage.html#setpagestyle
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
   *      "unixUtsPlugin": "4.31"
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
  setPageStyle(style: UTSJSONObject): void
  /**
   * 设置当前页面样式。详细属性配置请参考PageStyle
   * @deprecated 已废弃，仅为了向下兼容保留
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/unipage.html#setpagestyle-2
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *      "osVer": "5.0",
   *      "uniVer": "x",
   *      "unixVer": "4.13"
   *    },
   *    "ios": {
   *      "osVer": "x",
   *      "uniVer": "x",
   *      "unixVer": "4.13"
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
   *    "unixVer": "4.13"
   *  }
   * }
   */
  $setPageStyle(style: UTSJSONObject): void
  /**
   * 用于 dialogPage 获取所属父页面
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/event-bus.html#emit
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/event-bus.html#emit
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
   *      "unixUtsPlugin": "4.31"
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
  getParentPage(): UniPage | null
  /**
   * 获取当前页面的 dialog 子页面集合
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/event-bus.html#emit
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/event-bus.html#emit
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
   *      "unixUtsPlugin": "4.31"
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
  getDialogPages(): UniPage[]
  /**
   * 返回一个匹配特定 ID 的元素， 如果不存在，返回 null。\
   * 如果需要获取指定的节点类型，需要使用 as 进行类型转换。\
   * ID 区分大小写，且应该是唯一的。如果存在多个匹配的元素，则返回第一个匹配的元素。
   *
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/unipage.html#getelementbyid
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/unipage.html#getelementbyid
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
  getElementById(id: string.IDString | string): UniElement | null
  /**
   * 返回 android 平台页面根 view
   *
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/unipage.html#getandroidview
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/unipage.html#getandroidview
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
  getAndroidView(): View | null
  /**
   * 返回 android 平台加载页面内容的Activity
   *
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/unipage.html#getandroidactivity
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/unipage.html#getandroidactivity
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *      "osVer": "5.0",
   *      "uniVer": "x",
   *      "unixVer": "4.61"
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
   *      "hostVer": "x",
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
  getAndroidActivity(): Activity | null
  /**
   * 返回 ios 平台页面根 view
   *
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/unipage.html#getiosview
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/unipage.html#getiosview
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *      "osVer": "x",
   *      "uniVer": "x",
   *      "unixVer": "x"
   *    },
   *    "ios": {
   *      "osVer": "12",
   *      "uniVer": "x",
   *      "unixVer": "x",
   *      "unixUtsPlugin": "4.33"
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
  getIOSView(): UIView | null
  /**
   * 返回页面 HTML Element 对象
   *
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/unipage.html#gethtmlelement
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/unipage.html#gethtmlelement
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *      "osVer": "5.0",
   *      "uniVer": "x",
   *      "unixVer": "x"
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
   *    "unixVer": "4.31"
   *  }
   * }
   */
  getHTMLElement(): UniElement | null

  /**
   * 将当前在全屏模式下显示的元素退出全屏模式，恢复全屏之前的状态
   *
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/unipage.html#exitfullscreen
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/unipage.html#exitfullscreen
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *      "osVer": "5.0",
   *      "uniVer": "x",
   *      "unixVer": "4.61"
   *    },
   *    "ios": {
   *      "osVer": "x",
   *      "uniVer": "x",
   *      "unixVer": "x"
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
   *    "unixVer": "x"
   *  }
   * }
   */
  exitFullscreen(options: ExitFullscreenOptions|null) : void

  /**
   * 创建组件
   *
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/unipage.html#createelement
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/unipage.html#createelement
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *      "osVer": "5.0",
   *      "uniVer": "x",
   *      "unixVer": "x"
   *    },
   *    "ios": {
   *      "osVer": "x",
   *      "uniVer": "x",
   *      "unixVer": "x"
   *    },
   *    "harmony": {
   *      "osVer": "5.0.0",
   *      "uniVer": "x",
   *      "unixVer": "4.63"
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
  createElement(tagName: string): UniElement

  /**
  * @internal
  * web android harmony 获取当前页面 dialogPage 创建的 API 弹框集合
  */
  $getSystemDialogPages(): UniPage[]
  /**
   * @internal
   * ios 获取当前页面 dialogPage 创建的 API 弹框集合
   */
  __$$getSystemDialogPages(): UniPage[]
  /**
   * 监听页面布局变化更新事件
   * @uniPlatform {
     *  "app": {
     *    "android": {
     *      "osVer": "5.0",
     *      "uniVer": "x",
     *      "unixVer": "x",
     *      "unixvVer": "x"
     *    },
     *    "ios": {
     *      "osVer": "12.0",
     *      "uniVer": "x",
     *      "unixVer": "x",
     *      "unixvVer": "x"
     *    },
     *    "harmony": {
     *      "osVer": "6.0",
     *      "uniVer": "x",
     *      "unixVer": "x",
     *      "unixvVer": "5.0"
     *    }
     *  }
     * }
   */
  onLayoutChange(callback: UniPageOnLayoutChangeCallback): number
  /**
   * 取消监听页面布局变化更新事件
   * @uniPlatform {
     *  "app": {
     *    "android": {
     *      "osVer": "5.0",
     *      "uniVer": "x",
     *      "unixVer": "x",
     *      "unixvVer": "x"
     *    },
     *    "ios": {
     *      "osVer": "12.0",
     *      "uniVer": "x",
     *      "unixVer": "x",
     *      "unixvVer": "x"
     *    },
     *    "harmony": {
     *      "osVer": "6.0",
     *      "uniVer": "x",
     *      "unixVer": "x",
     *      "unixvVer": "5.0"
     *    }
     *  }
     * }
   */
  offLayoutChange(id: number): void
  /**
   * 监听页面渲染变化更新事件
   * @uniPlatform {
     *  "app": {
     *    "android": {
     *      "osVer": "5.0",
     *      "uniVer": "x",
     *      "unixVer": "x",
     *      "unixvVer": "x"
     *    },
     *    "ios": {
     *      "osVer": "12.0",
     *      "uniVer": "x",
     *      "unixVer": "x",
     *      "unixvVer": "x"
     *    },
     *    "harmony": {
     *      "osVer": "6.0",
     *      "uniVer": "x",
     *      "unixVer": "x",
     *      "unixvVer": "5.0"
     *    }
     *  }
     * }
   */
  onRenderChange(callback: UniPageOnRenderChangeCallback): number
  /**
   * 取消监听页面渲染变化更新事件
   * @uniPlatform {
     *  "app": {
     *    "android": {
     *      "osVer": "5.0",
     *      "uniVer": "x",
     *      "unixVer": "x",
     *      "unixvVer": "x"
     *    },
     *    "ios": {
     *      "osVer": "12.0",
     *      "uniVer": "x",
     *      "unixVer": "x",
     *      "unixvVer": "x"
     *    },
     *    "harmony": {
     *      "osVer": "6.0",
     *      "uniVer": "x",
     *      "unixVer": "x",
     *      "unixvVer": "5.0"
     *    }
     *  }
     * }
   */
  offRenderChange(id: number): void

  /**
   * 监听页面触摸开始事件
   * @uniPlatform {
     *  "app": {
     *    "android": {
     *      "osVer": "5.0",
     *      "uniVer": "x",
     *      "unixVer": "x",
     *      "unixvVer": "x"
     *    },
     *    "ios": {
     *      "osVer": "12.0",
     *      "uniVer": "x",
     *      "unixVer": "x",
     *      "unixvVer": "x"
     *    },
     *    "harmony": {
     *      "osVer": "6.0",
     *      "uniVer": "x",
     *      "unixVer": "x",
     *      "unixvVer": "5.0"
     *    }
     *  }
     * }
   */
  onTouchStart(callback: UniPageOnTouchEventCallback): number
  /**
   * 取消监听页面触摸开始事件
   * @uniPlatform {
     *  "app": {
     *    "android": {
     *      "osVer": "5.0",
     *      "uniVer": "x",
     *      "unixVer": "x",
     *      "unixvVer": "x"
     *    },
     *    "ios": {
     *      "osVer": "12.0",
     *      "uniVer": "x",
     *      "unixVer": "x",
     *      "unixvVer": "x"
     *    },
     *    "harmony": {
     *      "osVer": "6.0",
     *      "uniVer": "x",
     *      "unixVer": "x",
     *      "unixvVer": "5.0"
     *    }
     *  }
     * }
   */
  offTouchStart(id: number): void
  /**
   * 监听页面触摸结束事件
   * @uniPlatform {
     *  "app": {
     *    "android": {
     *      "osVer": "5.0",
     *      "uniVer": "x",
     *      "unixVer": "x",
     *      "unixvVer": "x"
     *    },
     *    "ios": {
     *      "osVer": "12.0",
     *      "uniVer": "x",
     *      "unixVer": "x",
     *      "unixvVer": "x"
     *    },
     *    "harmony": {
     *      "osVer": "6.0",
     *      "uniVer": "x",
     *      "unixVer": "x",
     *      "unixvVer": "5.0"
     *    }
     *  }
     * }
   */
  onTouchEnd(callback: UniPageOnTouchEventCallback): number
  /**
   * 取消监听页面触摸结束事件
   * @uniPlatform {
     *  "app": {
     *    "android": {
     *      "osVer": "5.0",
     *      "uniVer": "x",
     *      "unixVer": "x",
     *      "unixvVer": "x"
     *    },
     *    "ios": {
     *      "osVer": "12.0",
     *      "uniVer": "x",
     *      "unixVer": "x",
     *      "unixvVer": "x"
     *    },
     *    "harmony": {
     *      "osVer": "6.0",
     *      "uniVer": "x",
     *      "unixVer": "x",
     *      "unixvVer": "5.0"
     *    }
     *  }
     * }
   */
  offTouchEnd(id: number): void
  /**
   * 返回页面中与指定选择器或选择器组匹配的第一个 Element对象。如果找不到匹配项，则返回null
   * @param {string.cssSelectorString}selector CSS 选择器字符串
   * @uniPlatform {
    *    "app": {
    *        "android": {
    *            "osVer": "5.0",
    *            "uniVer": "x",
    *            "unixVer": "x"
    *        },
    *        "ios": {
    *            "osVer": "12.0",
    *            "uniVer": "x",
    *            "unixVer": "x",
    *            "unixUtsPlugin": "x"
    *        },
    *        "harmony": {
    *            "osVer": "5.0",
    *            "uniVer": "x",
    *            "unixVer": "x",
    *            "unixUtsPlugin": "x"
    *        }
    *    },
    *    "mp": {
    *      "weixin": {
    *        "osVer": "x",
    *        "uniVer": "x",
    *        "unixVer": "x"
    *      }
    *    },
    *    "web": {
    *        "uniVer": "x",
    *        "unixVer": "x"
    *    }
    * }
   */
  querySelector(selector: string.cssSelectorString): UniElement | null
  /**
   * 返回页面中与指定选择器或选择器组匹配的元素列表。
   * @param {string.cssSelectorString}selector CSS 选择器字符串
   * @uniPlatform {
    *    "app": {
    *        "android": {
    *            "osVer": "5.0",
    *            "uniVer": "x",
    *            "unixVer": "x"
    *        },
    *        "ios": {
    *            "osVer": "12.0",
    *            "uniVer": "x",
    *            "unixVer": "x",
    *            "unixUtsPlugin": "x"
    *        },
    *        "harmony": {
    *            "osVer": "5.0",
    *            "uniVer": "x",
    *            "unixVer": "x",
    *            "unixUtsPlugin": "x"
    *        }
    *    },
    *    "mp": {
    *      "weixin": {
    *        "osVer": "x",
    *        "uniVer": "x",
    *        "unixVer": "x"
    *      }
    *    },
    *    "web": {
    *        "uniVer": "x",
    *        "unixVer": "x"
    *    }
    * }
   */
  querySelectorAll(selector: string.cssSelectorString): UniElement[] | null
}

export type ExitFullscreenSuccessCallback = () => void

export type ExitFullscreenFailCallback = (error:FullscreenError) => void

export type ExitFullscreenCompleteCallback = (result:any|null) => void

export type ExitFullscreenOptions = {
  /**
   * 成功回调
   */
  success: ExitFullscreenSuccessCallback|null
  /**
   * 失败回调
   */
  fail: ExitFullscreenFailCallback|null
  /**
   * 完成回调
   */
  complete: ExitFullscreenCompleteCallback|null
}

export interface UniNormalPage extends UniPage {

}

export interface UniDialogPage extends UniPage {
  /**
   * @internal
  */
  $component: any | null
  /**
   * @internal
  */
  $disableEscBack: boolean
  /**
   * @internal
  */
  $triggerParentHide: boolean
}
