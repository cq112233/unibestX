/**
 * CSSStyleDeclaration表示一个CSS 声明块对象，它是一个 CSS 属性键值对的集合，暴露样式信息和各种与样式相关的方法和属性。
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "3.9"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.11"
 *        },
 *        "harmony": {
 *           "osVer": "5.0.0",
 *           "uniVer": "x",
 *           "unixVer": "4.61"
 *        }
 *    },
 *    "web": {
 *        "uniVer": "x",
 *        "unixVer": "4.0"
 *    }
 * }
 */
export class CSSStyleDeclaration {

  /**
   * 对CSS指定样式设置一个新值，如有此样式已存在则更新。
   * @param name CSS样式名称
   * @param {string} [value=""] 要设置的新CSS样式值 默认值空字符串
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.51"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.51"
   *        },
   *        "harmony": {
   *           "osVer": "5.0.0",
   *           "uniVer": "x",
   *           "unixVer": "4.61"
   *        }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "4.41"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  setProperty(name: string | string.cssPropertyString, value?: string): void

  /**
   * 对CSS指定样式设置一个新值，如有此样式已存在则更新。
   * @param name CSS样式名称
   * @param value 要设置的新CSS样式值
   * @deprecated 已废弃，仅为了向下兼容保留
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "3.9"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *   	  },
   *        "harmony": {
   *           "osVer": "5.0.0",
   *           "uniVer": "x",
   *           "unixVer": "4.61"
   *        }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "4.41"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  setProperty(name: string | string.cssPropertyString, value: any | null): void

  /**
   * 获取CSS指定的样式值，如果指定的样式不存在则返回空字符串。
   * @param property 要获取的CSS样式名称
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.51"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.51"
   *   	  },
   *        "harmony": {
   *           "osVer": "5.0.0",
   *           "uniVer": "x",
   *           "unixVer": "4.61"
   *        }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "4.41"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  getPropertyValue(property: string | string.cssPropertyString): string

  /**
   * 删除CSS指定的样式值
   * @param property 要删除的CSS样式名称
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.51"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.51"
   *   	  },
   *        "harmony": {
   *           "osVer": "5.0.0",
   *           "uniVer": "x",
   *           "unixVer": "4.61"
   *        }
   *    }
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  removeProperty(property: string | string.cssPropertyString): string
}
