import { UniElement } from "./IUniElement"

/**
 * video元素对象
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
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
 *        "unixVer": "4.0"
 *    }
 * }
 */
export interface UniVideoElement extends UniElement {
  /**
   * 播放
   * @uniPlatform {
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
   *        "unixVer": "4.0"
   *    }
   * }
   */
  play(): void
  /**
   * 暂停
   * @uniPlatform {
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
   *        "unixVer": "4.0"
   *    }
   * }
   */
  pause(): void
  /**
   * 跳转到指定位置
   * @param {number} position 跳转到指定位置(秒)
   * @uniPlatform {
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
   *        "unixVer": "4.0"
   *    }
   * }
   */
  seek(position: number): void
  /**
   * 停止视频
   * @uniPlatform {
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
   *        "unixVer": "4.0"
   *    }
   * }
   */
  stop(): void
  /**
   * 发送弹幕
   * @param {Danmu} danmu 弹幕数据
   * @uniPlatform {
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
   *        "unixVer": "4.0"
   *    }
   * }
   */
  sendDanmu(danmu: Danmu): void
  /**
   * 设置倍速播放
   * @param {number} rate 支持倍率 0.5/0.8/1.0/1.25/1.5
   * @uniPlatform {
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
   *        "unixVer": "4.0"
   *    }
   * }
   */
  playbackRate(rate: number): void
  /**
   * 进入全屏
   * @param {RequestFullScreenOptions} direction 0|正常竖向, 90|屏幕逆时针90度, -90|屏幕顺时针90度
   * @uniPlatform {
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
   *        "unixVer": "4.0"
   *    }
   * }
   */
  requestFullScreen(direction?: RequestFullScreenOptions | null): void
  /**
   * 退出全屏
   * @uniPlatform {
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
   *        "unixVer": "4.0"
   *    }
   * }
   */
  exitFullScreen(): void
}

export let UniVideoElement: {
  prototype: UniVideoElement
  new(): UniVideoElement
}

export type Danmu = {
  /**
   * 弹幕文字
   */
  text?: string | null
  /**
   * 弹幕颜色
   */
  color?: string | null
  /**
   * 显示时刻
   */
  time?: number | null
}

export type RequestFullScreenOptions = {
  /**
   * direction
   */
  direction?:
  /**
   * 正常竖向
   */
  0 |
  /**
   * 屏幕逆时针90度
   */
  90 |
  /**
   * 屏幕顺时针90度
   */
  -90 | null
}
