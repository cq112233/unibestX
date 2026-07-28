import { UniElement } from "./IUniElement";
import { DOMRect } from "./DOMRect";

/**
 * 用于监视 UniElement 元素的大小变化。它可以观察一个或多个
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.13"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.18"
 *        },
 *        "harmony": {
 *            "osVer": "√",
 *            "uniVer": "x",
 *            "unixVer": "4.61"
 *        }
 *    },
 *    "mp": {
 *      "weixin": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "alipay": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "baidu": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "toutiao": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "lark": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "qq": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "kuaishou": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "jd": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      }
 *    },
 *    "web": {
 *        "uniVer": "x",
 *        "unixVer": "4.16"
 *    }
 * }
 */
export class UniResizeObserver {
  /**
   * UniResizeObserver 构造函数
   * @param callback 每当监视的元素调整大小时，回调该函数
   */
  constructor(callback: (entries:Array<UniResizeObserverEntry>)=> void)
  /**
   * UniResizeObserver 构造函数
   * @param callback 每当监视的元素调整大小时，回调该函数
   * @param observer UniResizeObserver 自身的引用
   */
  constructor(callback: (entries:Array<UniResizeObserverEntry>, observer: UniResizeObserver)=> void)
  /**
   * 取消所有的对 UniElement 目标的监视
   */
  disconnect(): void
  /**
   * 监视指定 UniElement 大小变化
   * @param target 被监视的 UniElement
   */
  observe(target: UniElement): void
  /**
   * 结束对指定的 UniElement 的监视
   * @param target 取消监视的 UniElement
   */
  unobserve(target: UniElement): void
}

/**
 * UniResizeObserverEntry 接口是传递给 UniResizeObserver() 构造函数中的回调函数参数的对象
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.13"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.18"
 *        },
 *        "harmony": {
 *            "osVer": "√",
 *            "uniVer": "x",
 *            "unixVer": "4.61"
 *        }
 *    },
 *    "mp": {
 *      "weixin": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "alipay": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "baidu": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "toutiao": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "lark": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "qq": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "kuaishou": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "jd": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      }
 *    },
 *    "web": {
 *        "uniVer": "x",
 *        "unixVer": "4.16"
 *    }
 * }
 */
export interface UniResizeObserverEntry {
  /**
   * 只读属性 包含被监视的元素带有边框box大小的数组。
   */
  borderBoxSize: Array<UniBorderBoxSize>
  /**
   * 只读属性 包含被监视的元素内容box大小的数组。
   */
  contentBoxSize: Array<UniContentBoxSize>
  /**
   * 只读属性 包含被监视的元素内容box设备像素大小的数组。
   */
  devicePixelContentBoxSize: Array<UniDevicePixelContentBoxSize>
  /**
   * 只读属性 包含被监视元素大小的DOMRect
   */
  contentRect: DOMRect
  /**
   * 只读属性 被监视的 UniElement
   */
  target: UniElement
}

/**
 * 被监视的元素带有边框box的大小
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.13"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.18"
 *   	  },
 *        "harmony": {
 *            "osVer": "√",
 *            "uniVer": "x",
 *            "unixVer": "4.61"
 *        }
 *    },
 *    "mp": {
 *      "weixin": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "alipay": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "baidu": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "toutiao": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "lark": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "qq": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "kuaishou": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "jd": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      }
 *    },
 *    "web": {
 *        "uniVer": "x",
 *        "unixVer": "4.16"
 *    }
 * }
 */
export interface UniBorderBoxSize {
    /**只读属性，被监视元素含边框box的高度*/
    blockSize: number
    /**只读属性，被监视元素含边框box的宽度*/
    inlineSize: number
}

/**
 * 被监视的元素内容box的大小
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.13"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.18"
 *   	  },
 *        "harmony": {
 *            "osVer": "√",
 *            "uniVer": "x",
 *            "unixVer": "4.61"
 *        }
 *    },
 *    "mp": {
 *      "weixin": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "alipay": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "baidu": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "toutiao": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "lark": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "qq": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "kuaishou": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "jd": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      }
 *    },
 *    "web": {
 *        "uniVer": "x",
 *        "unixVer": "4.16"
 *    }
 * }
 */
export interface UniContentBoxSize {
    /**只读属性，被监视元素内容box的高度*/
    blockSize: number
    /**只读属性，被监视元素内容box的宽度*/
    inlineSize: number
}

/**
 * 被监视的元素内容box的设备像素大小
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.13"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.18"
 *   	  },
 *        "harmony": {
 *            "osVer": "√",
 *            "uniVer": "x",
 *            "unixVer": "4.61"
 *        }
 *    },
 *    "mp": {
 *      "weixin": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "alipay": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "baidu": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "toutiao": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "lark": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "qq": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "kuaishou": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "jd": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      }
 *    },
 *    "web": {
 *        "uniVer": "x",
 *        "unixVer": "4.16"
 *    }
 * }
 */
export interface UniDevicePixelContentBoxSize {
    /**只读属性，被监视元素内容box的设备像素高度*/
    blockSize: number
    /**只读属性，被监视元素内容box的设备像素宽度*/
    inlineSize: number
}
