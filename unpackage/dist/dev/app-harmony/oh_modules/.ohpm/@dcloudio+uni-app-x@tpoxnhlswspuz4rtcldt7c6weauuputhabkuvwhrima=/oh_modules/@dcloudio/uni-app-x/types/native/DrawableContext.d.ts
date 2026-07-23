/**
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
 *   	  },
 *      "harmony": {
 *        "osVer": "x",
 *        "uniVer": "x",
 *        "unixVer": "4.61"
 *      }
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
 *        "unixVer": "x"
 *    }
 * }
 */
export class DrawableContext {
  /**
   * 设置字体大小
   * @defaultValue 10px
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
   *   	  }
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
   *        "unixVer": "x"
   *    }
   * }
   */
  font: string
  /**
   * 设置填充颜色
   * @defaultValue #000 (黑色)
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
   *   	  }
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
   *        "unixVer": "x"
   *    }
   * }
   */
  fillStyle: string.ColorString
  /**
   * 指定如何绘制每一条线条末端的属性，可选值：`butt`线段末端以方形结束；`round`线段末端以圆形结束；`square`线段末端以方形结束，但是会增加一个一半宽度的矩形区域。
   * @defaultValue butt
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
   *   	  }
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
   *        "unixVer": "x"
   *    }
   * }
   */
  lineCap: string
  /**
   * 设置虚线偏移量
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
   *   	  }
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
   *        "unixVer": "x"
   *    }
   * }
   */
  lineDashOffset: number
  /**
   * 设置 2 个长度不为 0 的线条相连部分如何连接在一起的属性，可选值：`bevel`斜角；`round`圆角；`miter`尖角。
   * @defaultValue miter
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
   *   	  }
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
   *        "unixVer": "x"
   *    }
   * }
   */
  lineJoin: string
  /**
   * 设置线条的宽度
   * @defaultValue 1px
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
   *   	  }
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
   *        "unixVer": "x"
   *    }
   * }
   */
  lineWidth: number
  /**
   * 设置边框的颜色
   * @defaultValue #000 (黑色)
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
   *   	  }
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
   *        "unixVer": "x"
   *    }
   * }
   */
  strokeStyle: string.ColorString
  /**
   * 设置文本的对齐方式，可取值：`left`左对齐；`center`居中对齐；`right`右对齐。
   * @defaultValue left
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
   *   	  }
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
   *        "unixVer": "x"
   *    }
   * }
   */
  textAlign: string
  /**
   * 创建一个新的空路径
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
   *   	  }
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
   *        "unixVer": "x"
   *    }
   * }
   */
  beginPath(): void

  /**
   * 绘制一段弧线
   * @param {number} x 圆心的X轴坐标
   * @param {number} y 圆心的Y轴坐标
   * @param {number} radius 圆弧的半径
   * @param {number} startAngle 圆弧的起始点，x 轴方向开始计算，单位为弧度
   * @param {number} endAngle 圆弧的终点，单位为弧度
   * @param {number} [anticlockwise=true] 圆弧绘制方向，true：逆时针绘制，false：顺时针绘制。
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
   *   	  }
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
   *        "unixVer": "x"
   *    }
   * }
   */
  arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean | null): void

  /**
   * 将一个新的路径的起始点移动到 (x，y) 坐标
   * @param {number} x 点的X轴坐标
   * @param {number} y 点的Y轴坐标
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
   *   	  }
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
   *        "unixVer": "x"
   *    }
   * }
   */
  moveTo(x: number, y: number): void

  /**
   * 创建一个矩形路径
   * @param {number} x 矩形起点的X轴坐标
   * @param {number} y 矩形起点的Y轴坐标
   * @param {number} width 矩形宽度
   * @param {number} height 矩形高度
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
   *   	  }
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
   *        "unixVer": "x"
   *    }
   * }
   */
  rect(x: number, y: number, width: number, height: number): void

  /**
   * 将路径的最后一个点连接到 (x，y) 坐标
   * @param {number} x 线终点的X轴坐标
   * @param {number} y 线终点的Y轴坐标
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
   *   	  }
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
   *        "unixVer": "x"
   *    }
   * }
   */
  lineTo(x: number, y: number): void
  /**
   * 闭合路径，将最后一个点与起点连接起来。如果图形已经封闭，或者只有一个点，那么此方法不会产生任何效果。
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
   *   	  }
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
   *        "unixVer": "x"
   *    }
   * }
   */
  closePath(): void
  /**
   * 绘制当前或已经存在的路径的边框。
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
   *   	  }
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
   *        "unixVer": "x"
   *    }
   * }
   */
  stroke(): void
  /**
   * 绘制一个矩形框
   * @param {number} x 矩形起点的X轴坐标
   * @param {number} y 矩形起点的Y轴坐标
   * @param {number} width 矩形宽度
   * @param {number} height 矩形高度
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
   *   	  }
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
   *        "unixVer": "x"
   *    }
   * }
   */
  strokeRect(x: number, y: number, width: number, height: number): void
  /**
   * 绘制空心字符
   * @param {string} text 要绘制的字符
   * @param {number} x 字符开始绘制的X轴坐标
   * @param {number} y 字符开始绘制的Y轴坐标
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
   *   	  }
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
   *        "unixVer": "x"
   *    }
   * }
   */
  strokeText(text: string, x: number, y: number): void

  /**
   * 填充当前或已存在的路径
   * @param {string} [fillRule=nonzero] 填充规则。可取值：`nonzero`非零环绕规则；`evenodd`奇偶环绕规则。
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
   *   	  }
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
   *        "unixVer": "x"
   *    }
   * }
   */
  fill(fillRule?: string | null): void

  /**
   * 绘制一个实心矩形
   * @param {number} x 矩形起点的X轴坐标
   * @param {number} y 矩形起点的Y轴坐标
   * @param {number} width 矩形宽度
   * @param {number} height 矩形高度
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
   *   	  }
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
   *        "unixVer": "x"
   *    }
   * }
   */
  fillRect(x: number, y: number, width: number, height: number): void

  /**
   * 绘制实心字符
   * @param {string} text 要绘制的字符
   * @param {number} x 字符开始绘制的X轴坐标
   * @param {number} y 字符开始绘制的Y轴坐标
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
   *   	  }
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
   *        "unixVer": "x"
   *    }
   * }
   */
  fillText(text: string, x: number, y: number): void
  /**
   * 清空绘制数据
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
   *   	  }
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
   *        "unixVer": "x"
   *    }
   * }
   */
  reset(): void
  /**
   * 将所有绘制内容更新到画布上
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
   *   	  }
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
   *        "unixVer": "x"
   *    }
   * }
   */
  update(): void
  /**
   * 设置虚线样式
   * @param {Array<number>} segments 一组描述交替绘制线段和间距长度的数字。
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
   *   	  }
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
   *        "unixVer": "x"
   *    }
   * }
   */
  setLineDash(segments: Array<number>): void

  /**
   * 根据控制点和半径绘制圆弧路径
   * @param {number} x1 第一个控制点的 x 轴坐标
   * @param {number} y1 第一个控制点的 y 轴坐标
   * @param {number} x2 第二个控制点的 x 轴坐标
   * @param {number} y2 第二个控制点的 y 轴坐标
   * @param {number} radius 圆弧的半径
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
   *   	  }
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
   *        "unixVer": "x"
   *    }
   * }
   */
  // arcTo(x1 : number, y1 : number, x2 : number, y2 : number, radius : number) : void

  /**
   * 创建三次方贝塞尔曲线路径
   * @param {number} cp1x 第一个贝塞尔控制点的 x 坐标
   * @param {number} cp1y 第一个贝塞尔控制点的 y 坐标
   * @param {number} cp2x 第二个贝塞尔控制点的 x 坐标
   * @param {number} cp2y 第二个贝塞尔控制点的 y 坐标
   * @param {number} x 结束点的 x 坐标
   * @param {number} y 结束点的 y 坐标
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
   *   	  }
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
   *        "unixVer": "x"
   *    }
   * }
   */
  bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void
}
