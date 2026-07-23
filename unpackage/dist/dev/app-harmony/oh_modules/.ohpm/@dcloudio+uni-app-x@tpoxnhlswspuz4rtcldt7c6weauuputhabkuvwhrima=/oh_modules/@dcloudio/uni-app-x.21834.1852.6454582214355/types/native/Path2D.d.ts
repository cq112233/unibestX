/**
 * @package io.dcloud.uniapp.runtime
 */
/**
* Path2D用来声明路径，用来在canvas中根据需要创建可以保留并重用的路径, 此路径会被CanvasRenderingContext2D对象使用
* @uniPlatform {
*    "app": {
*        "android": {
*            "osVer": "5.0",
*            "uniVer": "x",
*            "unixVer": "4.25"
*        },
*        "ios": {
*            "osVer": "12.0",
*            "uniVer": "x",
*            "unixVer": "4.25"
*   	  },
  *     "harmony": {
*            "osVer": "5.0.0",
*            "uniVer": "x",
*            "unixVer": "4.61"
*   	  }
*    }
*    }
*    "web": {
*        "uniVer": "√",
*        "unixVer": "4.0"
*    }
* }
*/
export class Path2D {
  /**
  * 闭合路径，将最后一个点与起点连接起来。如果图形已经封闭，或者只有一个点，那么此方法不会产生任何效果。
  * @uniPlatform {
  *    "app": {
  *        "android": {
  *            "osVer": "5.0",
  *            "uniVer": "x",
  *            "unixVer": "4.25"
  *        },
  *        "ios": {
  *            "osVer": "12.0",
  *            "uniVer": "x",
  *            "unixVer": "4.25"
  *   	  },
  *       "harmony": {
  *            "osVer": "5.0.0",
  *            "uniVer": "x",
  *            "unixVer": "4.61"
  *   	  }
  *    }
  *    }
  *    "web": {
  *        "uniVer": "√",
  *        "unixVer": "4.0"
  *    }
  * }
  */
  closePath(): void

  /**
  * 将一个新的路径的起始点移动到 (x，y) 坐标
  * @param {number} x 点的X轴坐标
  * @param {number} y 点的Y轴坐标
  * @uniPlatform {
  *    "app": {
  *        "android": {
  *            "osVer": "5.0",
  *            "uniVer": "x",
  *            "unixVer": "4.25"
  *        },
  *        "ios": {
  *            "osVer": "12.0",
  *            "uniVer": "x",
  *            "unixVer": "4.25"
  *   	  },
  *     "harmony": {
  *            "osVer": "5.0.0",
  *            "uniVer": "x",
  *            "unixVer": "4.61"
  *   	  }
  *    }
  *    }
  *    "web": {
  *        "uniVer": "√",
  *        "unixVer": "4.0"
  *    }
  * }
  */
  moveTo(x: number, y: number): void

  /**
  * 将路径的最后一个点连接到 (x，y) 坐标
  * @param {number} x 线终点的X轴坐标
  * @param {number} y 线终点的Y轴坐标
  * @uniPlatform {
  *    "app": {
  *        "android": {
  *            "osVer": "5.0",
  *            "uniVer": "x",
  *            "unixVer": "4.25"
  *        },
  *        "ios": {
  *            "osVer": "12.0",
  *            "uniVer": "x",
  *            "unixVer": "4.25"
  *   	  },
  *     "harmony": {
  *            "osVer": "5.0.0",
  *            "uniVer": "x",
  *            "unixVer": "4.61"
  *   	  }
  *    }
  *    }
  *    "web": {
  *        "uniVer": "√",
  *        "unixVer": "4.0"
  *    }
  * }
  */
  lineTo(x: number, y: number): void

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
  *            "unixVer": "4.25"
  *        },
  *        "ios": {
  *            "osVer": "12.0",
  *            "uniVer": "x",
  *            "unixVer": "4.25"
  *   	  },
  *     "harmony": {
  *            "osVer": "5.0.0",
  *            "uniVer": "x",
  *            "unixVer": "4.61"
  *   	  }
  *    }
  *    }
  *    "web": {
  *        "uniVer": "√",
  *        "unixVer": "4.0"
  *    }
  * }
  */
  bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void

  /**
  * 创建二次贝塞尔曲线路径
  * @param {number} cpx 贝塞尔控制点的 x 坐标
  * @param {number} cpy 贝塞尔控制点的 y 坐标
  * @param {number} x 结束点的 x 坐标
  * @param {number} y 结束点的 y 坐标
  * @uniPlatform {
  *    "app": {
  *        "android": {
  *            "osVer": "5.0",
  *            "uniVer": "x",
  *            "unixVer": "4.25"
  *        },
  *        "ios": {
  *            "osVer": "12.0",
  *            "uniVer": "x",
  *            "unixVer": "4.25"
  *   	  },
  *     "harmony": {
  *            "osVer": "5.0.0",
  *            "uniVer": "x",
  *            "unixVer": "4.61"
  *   	  }
  *    }
  *    }
  *    "web": {
  *        "uniVer": "√",
  *        "unixVer": "4.0"
  *    }
  * }
  */
  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void

  /**
  * 绘制一段弧线
  * @param {number} x 圆弧中心（圆心）的 x 轴坐标
  * @param {number} y 圆弧中心（圆心）的 y 轴坐标
  * @param {number} radius 圆弧的半径
  * @param {number} startAngle 圆弧的起始点，x 轴方向开始计算，单位为弧度
  * @param {number} endAngle 圆弧的终点，单位为弧度
  * @param {number} [anticlockwise=true] 圆弧绘制方向，true：逆时针绘制，false：顺时针绘制。
  * @uniPlatform {
  *    "app": {
  *        "android": {
  *            "osVer": "5.0",
  *            "uniVer": "x",
  *            "unixVer": "4.25"
  *        },
  *        "ios": {
  *            "osVer": "12.0",
  *            "uniVer": "x",
  *            "unixVer": "4.25"
  *   	  },
  *     "harmony": {
  *            "osVer": "5.0.0",
  *            "uniVer": "x",
  *            "unixVer": "4.61"
  *   	  }
  *    }
  *    }
  *    "web": {
  *        "uniVer": "√",
  *        "unixVer": "4.0"
  *    }
  * }
  */
  arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean): void

  /**
  * 根据控制点和半径绘制圆弧路径，使用当前的描点 (前一个 moveTo 或 lineTo 等函数的止点)。根据当前描点与给定的控制点 1 连接的直线，和控制点 1 与控制点 2 连接的直线，作为使用指定半径的圆的切线，画出两条切线之间的弧线路径
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
  *            "unixVer": "4.25"
  *        },
  *        "ios": {
  *            "osVer": "12.0",
  *            "uniVer": "x",
  *            "unixVer": "4.25"
  *   	  },
  *     "harmony": {
  *            "osVer": "5.0.0",
  *            "uniVer": "x",
  *            "unixVer": "4.61"
  *   	  }
  *    }
  *    }
  *    "web": {
  *        "uniVer": "√",
  *        "unixVer": "4.0"
  *    }
  * }
  */
  arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void

  /**
   * 添加椭圆路径。椭圆的圆心在（x,y）位置，半径分别是radiusX 和 radiusY，按照anticlockwise（默认顺时针）指定的方向，从 startAngle 开始绘制，到 endAngle 结束
   * @param {number} x 椭圆圆心的 x 轴（水平）坐标
   * @param {number} y 椭圆圆心的 y 轴（垂直）坐标
   * @param {number} radiusX 椭圆长轴的半径。必须为非负数
   * @param {number} radiusY 椭圆短轴的半径。必须为非负数。
   * @param {number} rotation 椭圆的旋转角度，以弧度表示。
   * @param {number} startAngle 椭圆弧的起始偏心角，从正 x 轴沿顺时针测量，用弧度表示。
   * @param {number} endAngle 椭圆弧的结束偏心角，从正 x 轴沿顺时针测量，用弧度表示。
   * @param {number} anticlockwise 一个可选的布尔值，如果为 true，则逆时针绘制椭圆弧。默认值为 false（顺时针）。
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "x"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "x"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise: boolean): void

  /**
  * 创建一个矩形路径
  * @param {number} x 矩形路径起点的 x 轴坐标
  * @param {number} y 矩形路径起点的 y 轴坐标
  * @param {number} width 矩形路径的宽度
  * @param {number} height 矩形路径的高度
  * @uniPlatform {
  *    "app": {
  *        "android": {
  *            "osVer": "5.0",
  *            "uniVer": "x",
  *            "unixVer": "4.25"
  *        },
  *        "ios": {
  *            "osVer": "12.0",
  *            "uniVer": "x",
  *            "unixVer": "4.25"
  *   	  },
  *     "harmony": {
  *            "osVer": "5.0.0",
  *            "uniVer": "x",
  *            "unixVer": "4.61"
  *   	  }
  *    }
  *    }
  *    "web": {
  *        "uniVer": "√",
  *        "unixVer": "4.0"
  *    }
  * }
  */
  rect(x: number, y: number, width: number, height: number): void
}
