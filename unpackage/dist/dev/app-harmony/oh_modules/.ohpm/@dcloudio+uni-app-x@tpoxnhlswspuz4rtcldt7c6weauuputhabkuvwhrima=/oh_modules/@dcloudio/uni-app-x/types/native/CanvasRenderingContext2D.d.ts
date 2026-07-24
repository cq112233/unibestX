/**
 * @package io.dcloud.uniapp.runtime
 */

import { Image } from "./IUniElement"
import { Path2D } from "./Path2D"
/**
* 表示文本的尺寸，通过 CanvasRenderingContext2D.measureText() 方法创建
* @uniPlatform {
*    "app": {
*        "android": {
*            "osVer": "5.0",
*            "uniVer": "√",
*            "unixVer": "4.25"
*        },
*        "ios": {
*            "osVer": "12.0",
*            "uniVer": "√",
*            "unixVer": "4.25"
*   	  }
*    }
*    "web": {
*        "uniVer": "√",
*        "unixVer": "4.0"
*    }
* }
*/
export interface TextMetrics {
  readonly width: number
}

export type CanvasDirection =
  /**
   * 文字方向为从左到右
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
"ltr" |
/**
* 文字方向为从右到左
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
"rtl" |
/**
* 文字方向从相应的 <canvas> 元素或 Document 继承
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
"inherit";

export type CanvasLineCap =
/**
* `butt`线段末端以方形结束；
* @uniPlatform {
*    "app": {
*        "android": {
*            "osVer": "5.0",
*            "uniVer": "√",
*            "unixVer": "4.25"
*        },
*        "ios": {
*            "osVer": "12.0",
*            "uniVer": "√",
*            "unixVer": "4.25"
*   	  }
*    }
*    "web": {
*        "uniVer": "√",
*        "unixVer": "4.0"
*    }
* }
*/
"butt" |
/**
* `round`线段末端以圆形结束；
* @uniPlatform {
*    "app": {
*        "android": {
*            "osVer": "5.0",
*            "uniVer": "√",
*            "unixVer": "4.25"
*        },
*        "ios": {
*            "osVer": "12.0",
*            "uniVer": "√",
*            "unixVer": "4.25"
*   	  }
*    }
*    "web": {
*        "uniVer": "√",
*        "unixVer": "4.0"
*    }
* }
*/
"round" |
/**
* `square`线段末端以方形结束，但是会增加一个一半宽度的矩形区域。
* @uniPlatform {
*    "app": {
*        "android": {
*            "osVer": "5.0",
*            "uniVer": "√",
*            "unixVer": "4.25"
*        },
*        "ios": {
*            "osVer": "12.0",
*            "uniVer": "√",
*            "unixVer": "4.25"
*   	  }
*    }
*    "web": {
*        "uniVer": "√",
*        "unixVer": "4.0"
*    }
* }
*/
"square";

export type CanvasFontStretch =
  /**
   * 指定比普通字体更紧凑的字体,对应百分比数值为50%
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
"ultra-condensed" |
 /**
  * 指定比普通字体更紧凑的字体,对应百分比数值为62.5%
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
"extra-condensed" |
 /**
  * 指定比普通字体更紧凑的字体,对应百分比数值为75%
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
   "condensed" |
    /**
     * 指定比普通字体更紧凑的字体,对应百分比数值为87.5%
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
   "semi-condensed" |
    /**
     * 普通字体外观
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
   "normal" |
    /**
     * 指定比普通字体更扩展的字体,对应百分比数值为112.5%
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
   "semi-expanded" |
    /**
     *  指定比普通字体更扩展的字体,对应百分比数值为125%
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
   "expanded" |
    /**
     * 指定比普通字体更扩展的字体,对应百分比数值为150%
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
   "extra-expanded" |
    /**
     * 指定比普通字体更扩展的字体,对应百分比数值为200%
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
   "ultra-expanded"
;

export type CanvasGlobalCompositeOperation =
  /**
   * 在现有画布上下文之上绘制新图形
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
"source-over" |
  /**
   * 新图形只在新图形和目标画布重叠的地方绘制。其他的都是透明的
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
  "source-in" |
  /**
   * 在不与现有画布内容重叠的地方绘制新图形
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
"source-out" |
  /**
   * 新图形只在与现有画布内容重叠的地方绘制。
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
"source-atop" |
  /**
   * 在现有的画布内容后面绘制新的图形。
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
"destination-over" |
  /**
   * 现有的画布只保留与新图形重叠的部分，新的图形是在画布内容后面绘制的。
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
"destination-atop" |
  /**
   * 现有的画布内容保持在新图形和现有画布内容重叠的位置。其他的都是透明的。
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
"destination-in" |
  /**
   * 现有内容保持在新图形不重叠的地方。
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
"destination-out" |
  /**
   * 两个重叠图形的颜色是通过颜色值相加来确定的。
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
"lighter" |
  /**
   * 只显示新图形。
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
"copy" |
  /**
   * 图像中，那些重叠和正常绘制之外的其他地方是透明的。
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
"xor" |
/**
 * 将顶层像素与底层相应像素相乘，结果是一幅更黑暗的图片。
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
"multiply" |
/**
 * 像素被倒转，相乘，再倒转，结果是一幅更明亮的图片。
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
"screen" |
/**
 * multiply 和 screen 的结合，原本暗的地方更暗，原本亮的地方更亮。
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
"overlay" |
/**
 * 保留两个图层中最暗的像素
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
"darken" |
/**
 * 保留两个图层中最亮的像素。
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
"lighten" |
/**
 * 将底层除以顶层的反置。
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
"color-dodge" |
/**
 * 将反置的底层除以顶层，然后将结果反过来。
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
"color-burn" |
/**
 * multiply 和 screen 的结合，类似于叠加，但上下图层互换了。
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
"hard-light" |
/**
 * 用顶层减去底层或者相反来得到一个正值。
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
"soft-light" |
/**
 * 一个柔和版本的 hard-light。纯黑或纯白不会导致纯黑或纯白。
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
"difference" |
/**
 * 和 difference 相似，但对比度较低。
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
"exclusion" |
/**
 * 保留了底层的亮度和色度，同时采用了顶层的色调。
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
"hue" |
/**
 * 保留底层的亮度和色调，同时采用顶层的色度。
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
"saturation" |
/**
 * 保留了底层的亮度，同时采用了顶层的色调和色度。
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
"color" |
/**
 * 保持底层的色调和色度，同时采用顶层的亮度。
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
"luminosity"
;

export type CanvasSmoothingQuality =
/**
 * 低质量。
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
"low" |
/**
 * 中等质量。
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
"medium" |
/**
 * 高质量。
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
"high";

export type CanvasLineJoin =
/**
 * 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。圆角的半径是线段的宽度。
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *   	  }
 *    }
 *    "web": {
 *        "uniVer": "√",
 *        "unixVer": "4.0"
 *    }
 * }
 */
"round" |
/**
 * 在相连部分的末端填充一个额外的以三角形为底的区域，每个部分都有各自独立的矩形拐角。
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *   	  }
 *    }
 *    "web": {
 *        "uniVer": "√",
 *        "unixVer": "4.0"
 *    }
 * }
 */
"bevel" |
/**
 * 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置受到 miterLimit 属性的影响。默认值。
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *   	  }
 *    }
 *    "web": {
 *        "uniVer": "√",
 *        "unixVer": "4.0"
 *    }
 * }
 */
"miter";

export type CanvasTextAlign =
/**
 * 文本左对齐。
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *   	  }
 *    }
 *    "web": {
 *        "uniVer": "√",
 *        "unixVer": "4.0"
 *    }
 * }
 */
 "left" |
 /**
 * 文本右对齐。
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *   	  }
 *    }
 *    "web": {
 *        "uniVer": "√",
 *        "unixVer": "4.0"
 *    }
 * }
 */
 "right" |
 /**
 * 文本居中对齐。
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *   	  }
 *    }
 *    "web": {
 *        "uniVer": "√",
 *        "unixVer": "4.0"
 *    }
 * }
 */
 "center" |
 /**
 * 文本对齐界线开始的地方（左对齐指本地从左向右，右对齐指本地从右向左）。
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *   	  }
 *    }
 *    "web": {
 *        "uniVer": "√",
 *        "unixVer": "4.0"
 *    }
 * }
 */
 "start" |
 /**
 * 文本对齐界线结束的地方（左对齐指本地从左向右，右对齐指本地从右向左）。
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *   	  }
 *    }
 *    "web": {
 *        "uniVer": "√",
 *        "unixVer": "4.0"
 *    }
 * }
 */
 "end";

export type CanvasTextBaseline =
 /**
 * 文本基线在文本块的顶部。
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *   	  }
 *    }
 *    "web": {
 *        "uniVer": "√",
 *        "unixVer": "4.0"
 *    }
 * }
 */
"top" |
 /**
 * 文本基线是悬挂基线。
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *   	  }
 *    }
 *    "web": {
 *        "uniVer": "√",
 *        "unixVer": "4.0"
 *    }
 * }
 */
"hanging" |
 /**
 * 文本基线在文本块的中间。
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *   	  }
 *    }
 *    "web": {
 *        "uniVer": "√",
 *        "unixVer": "4.0"
 *    }
 * }
 */
"middle" |
 /**
 * 文本基线是标准的字母基线。默认值。
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *   	  }
 *    }
 *    "web": {
 *        "uniVer": "√",
 *        "unixVer": "4.0"
 *    }
 * }
 */
"alphabetic" |
 /**
 * 文字基线是表意字基线；如果字符本身超出了 alphabetic 基线，那么 ideograhpic 基线位置在字符本身的底部。（用于中文、日文和韩文。）
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *   	  }
 *    }
 *    "web": {
 *        "uniVer": "√",
 *        "unixVer": "4.0"
 *    }
 * }
 */
"ideographic" |
 /**
 * 文本基线在文本块的底部。与 ideographic 基线的区别在于 ideographic 基线不需要考虑下行字母。
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *   	  }
 *    }
 *    "web": {
 *        "uniVer": "√",
 *        "unixVer": "4.0"
 *    }
 * }
 */
"bottom";

export type CanvasTextRendering =
/**
 * 浏览器在绘制文本时根据情况对速度、易读性和几何精确性进行优化。
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
"auto" |
/**
 * 浏览器在绘制文本时优先考虑渲染速度，而不是易读性和几何精确性。它禁用字距调整和连字。
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
"optimizeSpeed" |
/**
 * 浏览器在绘制文本时优先考虑易读性，而不是渲染速度和几何精确性。这启用了字距调整和可选连字。
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
"optimizeLegibility" |
/**
 * 浏览器在绘制文本时优先考虑几何精确性，而不是渲染速度和易读性。字体的某些方面（例如字距调整）不会线性缩放。对于大的缩放比例，你可能会看到不太美观的文本渲染，但大小是你所期望的（不会被向上或向下舍入到底层操作系统支持的最接近的字体大小）。
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
"geometricPrecision";

/**
* 描述canvas元素的一个隐含像素数据的区域，注意：App平台ImageData只支持context接口获取不支持通过new ImageData方式创建
* @uniPlatform {
*    "app": {
*        "android": {
*            "osVer": "5.0",
*            "uniVer": "√",
*            "unixVer": "4.25"
*        },
*        "ios": {
*            "osVer": "12.0",
*            "uniVer": "√",
*            "unixVer": "4.25"
*   	  }
*    }
*    "web": {
*        "uniVer": "√",
*        "unixVer": "4.0"
*    }
* }
*/
export interface ImageData {
   /**
 * 一维数组，包含以 RGBA 顺序的数据，数据使用 0 至 255（包含）的整数表示
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *   	  }
 *    }
 *    "web": {
 *        "uniVer": "√",
 *        "unixVer": "4.0"
 *    }
 * }
 */
  readonly data: Uint8ClampedArray
/**
 * 使用像素描述 ImageData 的实际宽度
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *   	  }
 *    }
 *    "web": {
 *        "uniVer": "√",
 *        "unixVer": "4.0"
 *    }
 * }
 */
  readonly width: number
  /**
 * 使用像素描述 ImageData 的实际高度
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *   	  }
 *    }
 *    "web": {
 *        "uniVer": "√",
 *        "unixVer": "4.0"
 *    }
 * }
 */
  readonly height: number
}
/**
   * 接口表示一个不透明对象，描述了一个基于图像、画布或视频的模板，该模板通过 CanvasRenderingContext2D.createPattern() 方法创建
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
export interface CanvasPattern {

}

/**
 * 表示描述渐变的不透明对象。该接口通过 CanvasRenderingContext2D.createLinearGradient()、
 * CanvasRenderingContext2D.createConicGradient()
 * 或 CanvasRenderingContext2D.createRadialGradient() 方法返回
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *   	  }
 *    }
 *    "web": {
 *        "uniVer": "√",
 *        "unixVer": "4.0"
 *    }
 * }
 */
export interface CanvasGradient {
  /**
   * 添加颜色的渐变点。小于最小 stop 的部分会按最小 stop 的 color 来渲染，大于最大 stop 的部分会按最大 stop 的 color 来渲染, 最大支持5个分段
   * @param {number} stop 表示渐变中开始与结束之间的位置，范围 0-1
   * @param {string} color 渐变点的颜色
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  addColorStop(stop: number, color: string): void
}

/**
  * canvas元素的绘图2D渲染上下文, 它用于绘制形状、文本、图像和其他对象
  * @uniPlatform {
  *    "app": {
  *        "android": {
  *            "osVer": "5.0",
  *            "uniVer": "√",
  *            "unixVer": "4.25"
  *        },
  *        "ios": {
  *            "osVer": "12.0",
  *            "uniVer": "√",
  *            "unixVer": "4.25"
  *   	  }
  *    }
  *    "web": {
  *        "uniVer": "√",
  *        "unixVer": "4.0"
  *    }
  * }
*/
export interface CanvasRenderingContext2D {

  /**
   * 是对与给定上下文关联的HTMLCanvasElement对象的只读引用
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  },
        "harmony": {
          "osVer": "5.0.0",
          "uniVer": "x",
          "unixVer": "4.61"
        }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  readonly canvas: UniCanvasElement

  /**
   * 描述当前文本方向
   * @defaultValue inherit
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
  direction: CanvasDirection

  /**
   * 设置填充颜色
   * @defaultValue #000 (黑色)
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  fillStyle:
  /**
  * CanvasGradient 对象（线性或径向渐变）。
  * @uniPlatform {
  *    "app": {
  *        "android": {
  *            "osVer": "5.0",
  *            "uniVer": "√",
  *            "unixVer": "4.25"
  *        },
  *        "ios": {
  *            "osVer": "12.0",
  *            "uniVer": "√",
  *            "unixVer": "4.25"
  *   	  }
  *    }
  *    "web": {
  *        "uniVer": "√",
  *        "unixVer": "4.0"
  *    }
  * }
  */
   CanvasGradient |
 /**
  * CanvasPattern 对象（重复的图像）。
  * @uniPlatform {
  *    "app": {
  *        "android": {
  *            "osVer": "5.0",
  *            "uniVer": "√",
  *            "unixVer": "4.25"
  *        },
  *        "ios": {
  *            "osVer": "12.0",
  *            "uniVer": "√",
  *            "unixVer": "4.25"
  *   	  }
  *    }
  *    "web": {
  *        "uniVer": "√",
  *        "unixVer": "4.0"
  *    }
  * }
  */
 CanvasPattern |
   /**
  * 同CSS颜色值。
  * @uniPlatform {
  *    "app": {
  *        "android": {
  *            "osVer": "5.0",
  *            "uniVer": "√",
  *            "unixVer": "4.25"
  *        },
  *        "ios": {
  *            "osVer": "12.0",
  *            "uniVer": "√",
  *            "unixVer": "4.25"
  *   	  }
  *    }
  *    "web": {
  *        "uniVer": "√",
  *        "unixVer": "4.0"
  *    }
  * }
  */
 string.ColorString;

  /**
   * 提供模糊、灰度等过滤效果的属性。它类似于 CSS filter 属性，并且接受相同的函数
   * @defaultValue none
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
  filter: string

  /**
   * 指定绘制文字所使用的字体样式。使用和 CSS 字体描述符相同的字符串值。
   * 注意App平台只支持font-size、font-family、font-weight
   * @defaultValue 10px sans-serif
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  font: string

  /**
   * 指定绘制文本时字体如何被扩展或压缩。该属性对应于 CSS 中的 font-stretch 属性
   * @defaultValue normal
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
  fontStretch: CanvasFontStretch

  /**
   * 用来描述在 canvas 上绘图之前，设置图形和图片透明度的属性。数值的范围从 0.0（完全透明）到 1.0（完全不透明）
   * @defaultValue 1.0
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  globalAlpha: number

  /**
   * 在绘制新形状时应用的合成操作的类型，其中 type 是用于标识要使用的合成或混合模式操作的字符串
   * @defaultValue source-over
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  globalCompositeOperation: CanvasGlobalCompositeOperation

  /**
   * 用于设置是否对缩放后的图片进行平滑处理，true 表示进行平滑处理，false 表示不进行
   * @defaultValue true
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
  imageSmoothingEnabled: boolean

  /**
   * 用于设置图像平滑度,要使此属性生效，imageSmoothingEnabled 属性必须为 true，可选值：`low`低质量； `medium`中等质量；`high`高质量。
   * @defaultValue low
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
  imageSmoothingQuality: CanvasSmoothingQuality

  /**
   * 用于指定绘制文本时字母之间的间距。这对应于 CSS 中的 letter-spacing 属性
   * @defaultValue 0px
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
  letterSpacing: string

  /**
   * 指定如何绘制每一条线条末端的属性，可选值：`butt`线段末端以方形结束；`round`线段末端以圆形结束；`square`线段末端以方形结束，但是会增加一个一半宽度的矩形区域。
   * @defaultValue butt
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  lineCap: CanvasLineCap

  /**
   * 设置虚线偏移量
   * @defaultValue 0.0
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
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
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  lineJoin: CanvasLineJoin

  /**
   * 设置线条的宽度, 零、负数、Infinity 和 NaN 值将被忽略
   * @defaultValue 1.0
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  lineWidth: number

  /**
   * 设置斜接面限制比例的属性。当获取属性值时，会返回当前的值。当给属性赋值时，0、负数、 Infinity 和 NaN 都会被忽略；除此之外都会被赋予一个新值。
   * @defaultValue 10.0
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  miterLimit: number

  /**
   * 用于描述模糊效果程度,其中 0 表示没有模糊，数字越大表示模糊程度越高。这个值不对应于像素数量，并且不受当前变换矩阵的影响。负数、Infinity 和 NaN 将被忽略
   * @defaultValue 0
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
  shadowBlur: number

  /**
   * 描述阴影颜色,只有当 shadowColor 属性设置为非透明值时，阴影才会被绘制。其中的 shadowBlur、shadowOffsetX 或 shadowOffsetY 属性中至少有一个必须是非零的。
   * @defaultValue fully-transparent black
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
  shadowColor: string

  /**
   * 指定阴影在水平方向上的偏移距离。正值向右偏移，负值向左偏移。默认值为 0（无水平偏移）。Infinity 和 NaN 值将被忽略
   * @defaultValue 0
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
  shadowOffsetX: number

  /**
   * 指定阴影在垂直方向上的偏移距离。正值向右偏移，负值向左偏移。默认值为 0（无水平偏移）。Infinity 和 NaN 值将被忽略
   * @defaultValue 0
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
  shadowOffsetY: number

  /**
   * 设置边框的颜色
   * @defaultValue #000 (黑色)
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  strokeStyle:
    /**
   * CanvasGradient 对象（线性或径向渐变）。
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
    CanvasGradient |
  /**
   * CanvasPattern 对象（重复的图像）。
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  CanvasPattern |
    /**
   * 同CSS颜色值。
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  string.ColorString;

  /**
   * 设置文本的对齐方式，可取值：`left`左对齐；`center`居中对齐；`right`右对齐。
   * @defaultValue left
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  textAlign: CanvasTextAlign


  /**
   * 描述绘制文本时，当前文本基线的属性
   * @defaultValue alphabetic
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  textBaseline: CanvasTextBaseline

  /**
  * 用于在渲染文本时向渲染引擎提供应该如何优化的相关信息
  * @defaultValue auto
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
  *            "unixVer": "x"
  *   	  }
  *    }
  *    "web": {
  *        "uniVer": "√",
  *        "unixVer": "4.0"
  *    }
  * }
  */
  textRendering: CanvasTextRendering

  /**
  * 用于指定绘制文本时单词之间的间距, 如果设置为无效或无法解析的值，则属性值将保持不变
  * @defaultValue 0px
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
  *            "unixVer": "x"
  *   	  }
  *    }
  *    "web": {
  *        "uniVer": "√",
  *        "unixVer": "4.0"
  *    }
  * }
  */
  wordSpacing: string

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
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void

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
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void

  /**
   * 开始创建一个路径。需要调用 fill 或者 stroke 才会使用路径进行填充或描边
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  beginPath(): void

  /**
   * 绘制三次贝赛尔曲线路径
   * @param {number} cp1x 第一个控制点的 x 轴坐标
   * @param {number} cp1y 第一个控制点的 y 轴坐标
   * @param {number} cp2x 第二个控制点的 x 轴坐标
   * @param {number} cp2y 第二个控制点的 y 轴坐标
   * @param {number} x 结束点的 x 轴坐标
   * @param {number} y 结束点的 y 轴坐标
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void

  /**
   * 清除画布上在该矩形区域内的内容
   * @param {number} x 矩形起点的 x 轴坐标
   * @param {number} y 矩形起点的 y 轴坐标
   * @param {number} width 矩形的宽度
   * @param {number} height 矩形的高度
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  clearRect(x: number, y: number, width: number, height: number): void

  /**
   * 将当前创建的路径设置为当前剪切路径
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  clip(): void

  /**
   * 将当前创建的路径设置为当前剪切路径
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
  clip(path: Path2D): void

  /**
   * 将当前创建的路径设置为当前剪切路径
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
  clip(fillRule: string): void

  /**
   * 将当前创建的路径设置为当前剪切路径
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
  clip(path: Path2D, fillRule: string): void

  /**
   * 关闭一个路径
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  closePath(): void

  /**
   * 创建一个新的、空白的、指定大小的 ImageData 对象。所有的像素在新对象中都是透明的黑色
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
  createImageData(width: number, height: number): void

  /**
   * 对指定的图像创建模式的方法，可在指定的方向上重复元图像
   * @param {string} image 重复的图像源，支持代码包路径和本地临时路径 (本地路径)
   * @param {string} repetition 如何重复图像
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  createPattern(image: Image, repetition?: string | null): CanvasPattern | null

  /**
   * 创建一个线性的渐变颜色。返回的CanvasGradient对象需要使用 CanvasGradient.addColorStop() 来指定渐变点，至少要两个
   * @param {number} x0 起点的 x 坐标
   * @param {number} y0 起点的 y 坐标
   * @param {number} x1 终点的 x 坐标
   * @param {number} y1 终点的 y 坐标
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient

  /**
  * 根据参数确定两个圆的坐标，绘制放射性渐变。注意App平台和Web平台绘制效果有差异
  * @param {number} x0 开始圆形的 x 轴坐标
  * @param {number} y0 开始圆形的 y 轴坐标
  * @param {number} r0 开始圆形的半径
  * @param {number} x1 结束圆形的 x 轴坐标
  * @param {number} y1 结束圆形的 y 轴坐标
  * @param {number} r1 结束圆形的半径
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
  *   	  }
  *    }
  *    "web": {
  *        "uniVer": "√",
  *        "unixVer": "4.0"
  *    }
  * }
  */
  createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r01: number): CanvasGradient

  /**
   * 将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中, 该操作为可选非web标准，canvas组件会自动选择合适时机进行绘制
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  draw(): void

  /**
   * 绘制图像到画布
   * @param {string} imageResource 所要绘制的图片资源
   * @param {number} dx imageResource的左上角在目标 canvas 上 x 轴的位置
   * @param {number} dy imageResource的左上角在目标 canvas 上 y 轴的位置
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  drawImage(imageResource: Image, dx: number, dy: number): void
    /**
   * 绘制图像到画布
   * @param {string} imageResource 所要绘制的图片资源
   * @param {number} dx imageResource的左上角在目标 canvas 上 x 轴的位置
   * @param {number} dy imageResource的左上角在目标 canvas 上 y 轴的位置
   * @param {number} dWidth 在目标画布上绘制imageResource的宽度，允许对绘制的imageResource进行缩放
   * @param {number} dHeight 在目标画布上绘制imageResource的高度，允许对绘制的imageResource进行缩放
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  drawImage(imageResource: Image, dx: number, dy: number, dWidth: number, dHeight: number): void
    /**
   * 绘制图像到画布
   * @param {string} imageResource 所要绘制的图片资源
   * @param {number} sx 需要绘制到画布中的，imageResource的矩形（裁剪）选择框的左上角 x 坐标
   * @param {number} sy 需要绘制到画布中的，imageResource的矩形（裁剪）选择框的左上角 y 坐标
   * @param {number} sWidth 需要绘制到画布中的，imageResource的矩形（裁剪）选择框的宽度
   * @param {number} sHeight 需要绘制到画布中的，imageResource的矩形（裁剪）选择框的高度
   * @param {number} dx imageResource的左上角在目标 canvas 上 x 轴的位置
   * @param {number} dy imageResource的左上角在目标 canvas 上 y 轴的位置
   * @param {number} dWidth 在目标画布上绘制imageResource的宽度，允许对绘制的imageResource进行缩放
   * @param {number} dHeight 在目标画布上绘制imageResource的高度，允许对绘制的imageResource进行缩放
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  drawImage(imageResource: Image, sx: number, sy: number, sWidth: number, sHeight: number, dx: number, dy: number, dWidth: number, dHeight: number): void


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
   * 对当前路径中的内容进行填充
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  fill(): void

  /**
 * 对当前路径中的内容进行填充
 * @param {string} fillRule 填充当前或已存在的路径的方法。采取非零环绕(nonzero)或者奇偶环绕(evenodd)规则
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  fill(fillRule: "nonzero" | "evenodd"): void

  /**
   * 对指定路径中的内容进行填充
   * @param {string} path 填充路径
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  fill(path: Path2D): void
  /**
   * 对指定路径中的内容进行填充
   * @param {string} path 填充路径
   * @param {string} fillRule 填充当前或已存在的路径的方法。采取非零环绕(nonzero)或者奇偶环绕(evenodd)规则
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  fill(path: Path2D, fillRule: "nonzero" | "evenodd"): void

  /**
   *填充一个矩形。用 setFillStyle 设置矩形的填充色，如果没设置默认是黑色
   * @param {number} x 矩形起点的 x 轴坐标
   * @param {number} y 矩形起点的 y 轴坐标
   * @param {number} width 矩形的宽度
   * @param {number} height 矩形的高度
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  fillRect(x: number, y: number, width: number, height: number): void


  /**
   * 在画布上绘制文本
   * @param {string} text 要渲染的文本字符串
   * @param {number} x 开始绘制文本的点的 x 轴坐标
   * @param {number} y 开始绘制文本的点的 y 轴坐标
   * @param {number} maxWidth 需要绘制的最大宽度
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  fillText(text: string, x: number, y: number, maxWidth?: number): void

  /**
   * 返回一个ImageData对象，用来描述 canvas 区域隐含的像素数据，这个区域通过矩形表示，起始点为*(sx, sy)、宽为sw、高为sh。
   * @param {number} sx 将要被提取的图像数据矩形区域的左上角 x 坐标
   * @param {number} sy 将要被提取的图像数据矩形区域的左上角 y 坐标
   * @param {number} sw 将要被提取的图像数据矩形区域的宽度
   * @param {number} sh 将要被提取的图像数据矩形区域的高度
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  getImageData(sx: number, sy: number, sw: number, sh: number): ImageData

  /**
   * 返回一个Boolean 标记上下文是否已经丢失
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  isContextLost(): Boolean

  /**
   * 判断在当前路径中是否包含检测点
   * @param {number} x 检测点的 X 坐标
   * @param {number} y 检测点的 Y 坐标
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
  isPointInPath(x: number, y: number): boolean

  /**
   * 判断在当前路径中是否包含检测点
   * @param {number} x 检测点的 X 坐标
   * @param {number} y 检测点的 Y 坐标
   * @param {number} fillRule 用来决定点在路径内还是在路径外的算法
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
  isPointInPath(x: number, y: number, fillRule: string): boolean

  /**
   * 判断在当前路径中是否包含检测点
   * @param {number} path Path2D应用的路径
   * @param {number} x 检测点的 X 坐标
   * @param {number} y 检测点的 Y 坐标
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
  isPointInPath(path: Path2D, x: number, y: number): boolean

  /**
   * 判断在当前路径中是否包含检测点
   * @param {number} path Path2D应用的路径
   * @param {number} x 检测点的 X 坐标
   * @param {number} y 检测点的 Y 坐标
   * @param {number} fillRule 用来决定点在路径内还是在路径外的算法
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
  isPointInPath(path: Path2D, x: number, y: number, fillRule: string): boolean

  /**
   * 检测某点是否在路径的描边线
   * @param {number} x 检测点的 X 坐标
   * @param {number} y 检测点的 Y 坐标
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
  isPointInStroke(x: number, y: number): boolean

  /**
   * 检测某点是否在路径的描边线
   * @param {number} path Path2D应用的路径
   * @param {number} x 检测点的 X 坐标
   * @param {number} y 检测点的 Y 坐标
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
  isPointInStroke(path: Path2D, x: number, y: number): boolean

  /**
   * 在填充线时使用虚线模式, 它使用一组值来指定描述模式的线和间隙的交替长度。注意App平台和Web平台绘制效果有差异
   * @ret {segments} Array<number>一组描述交替绘制线段和间距（坐标空间单位）长度的数字
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  getLineDash(): Array<number>

  /**
  * 增加一个新点，然后创建一条从上次指定点到目标点的线。用 stroke 方法来画线条
  * @param {number} x 目标位置的 x 坐标
  * @param {number} y 目标位置的 y 坐标
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  lineTo(x: number, y: number): void

  /**
  * 测量文本尺寸信息。目前仅返回文本宽度
  * @param {number} text 要渲测量的文本字符串
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  measureText(text: string): TextMetrics

  /**
  * 把路径移动到画布中的指定点
  * @param {number} x 目标位置的 x 坐标
  * @param {number} y 目标位置的 y 坐标
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  moveTo(x: number, y: number): void

  /**
   * 将数据从已有的 ImageData 对象绘制到位图的方法。如果提供了一个绘制过的矩形，则只绘制该矩形的像素。此方法不受画布转换矩阵的影响
   * @param {number} imagedata 包含像素值的数组对象
   * @param {number} x 源图像数据在目标画布中的位置偏移量（x 轴方向的偏移量）
   * @param {number} y 源图像数据在目标画布中的位置偏移量（y 轴方向的偏移量）
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  putImageData(imageData: ImageData, x: number, y: number): void

  /**
   * 将数据从已有的 ImageData 对象绘制到位图的方法。如果提供了一个绘制过的矩形，则只绘制该矩形的像素。此方法不受画布转换矩阵的影响
   * @param {number} imagedata 包含像素值的数组对象
   * @param {number} x 源图像数据在目标画布中的位置偏移量（x 轴方向的偏移量）
   * @param {number} y 源图像数据在目标画布中的位置偏移量（y 轴方向的偏移量）
   * @param {number} dirtyX 在源图像数据中，矩形区域左上角的位置。默认是整个图像数据的左上角（x 坐标）
   * @param {number} dirtyY 在源图像数据中，矩形区域左上角的位置。默认是整个图像数据的左上角（y 坐标）
   * @param {number} dirtyWidth 在源图像数据中，矩形区域的宽度。默认是图像数据的宽度）
   * @param {number} dirtyHeight 在源图像数据中，矩形区域的高度。默认是图像数据的高度
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  putImageData(imageData: ImageData, x: number, y: number, dirtyX: number, dirtyY: number, dirtyWidth: number, dirtyHeight: number): void

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
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void

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
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  rect(x: number, y: number, width: number, height: number): void

  /**
   * 使用单位矩阵重新设置当前变换
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  resetTransform(): void

  /**
   * 恢复之前保存的绘图上下文
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  restore(): void

  /**
   * 以原点为中心顺时针旋转当前坐标轴
   * @param {rotate} 旋转角度，以弧度计 degrees * Math.PI/180；degrees 范围为 0-360
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  rotate(rotate: number): void

  /**
   * 在当前路径中添加一个圆角矩形
   * @param {number} imagedata 包含像素值的数组对象
   * @param {number} x 矩形起点的 x 轴坐标，以像素为单位
   * @param {number} y 矩形起点的 y 轴坐标，以像素为单位
   * @param {number} width 矩形的宽度。正值向右，负值向左
   * @param {number} height 矩形的高度。正值向下，负值向上
   * @param {number} radii 其数量和顺序与 width 和 height 为正值时的 border-radius CSS 属性相同
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
  roundRect(x: number, y: number, width: number, height: number, radii: any): void

  /**
   * 保存绘图上下文
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  save(): void

  /**
   * 缩放变换
   * @param {x} 水平方向的缩放因子
   * @param {y} 垂直方向的缩放因子
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  scale(x: number, y: number): void

  /**
   * 在填充线时使用虚线模式, 它使用一组值来指定描述模式的线和间隙的交替长度。
   * @param {segments} Array<number>一组描述交替绘制线段和间距（坐标空间单位）长度的数字
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  setLineDash(segments: Array<number>): void

  /**
   * 使用单位矩阵重新设置（覆盖）当前的变换并调用变换
   * @param {number} scaleX 水平缩放
   * @param {number} skewY 垂直倾斜
   * @param {number} skewX 水平倾斜
   * @param {number} scaleY 垂直缩放
   * @param {number} translateX 水平移动
   * @param {number} translateY 垂直移动
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  setTransform(scaleX: Number, skewY: Number, skewX: Number, scaleY: Number, translateX: Number, translateY: Number): void

  /**
   * 画出当前路径的边框。默认颜色色为黑色
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  stroke(): void

  /**
   * 画出指定路径的边框。默认颜色色为黑色
   * @param {path} Path2D
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  stroke(path: Path2D): void

  /**
   * 画一个矩形(非填充)
   * @param {number} x 矩形起点的 x 轴坐标
   * @param {number} y 矩形起点的 y 轴坐标
   * @param {number} width 矩形的宽度
   * @param {number} height 矩形的高度
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  strokeRect(x: number, y: number, width: number, height: number): void

  /**
   * 文本描边
   * @param {string} text 要渲染的文本字符串
   * @param {number} x 开始绘制文本的点的 x 轴坐标
   * @param {number} y 开始绘制文本的点的 y 轴坐标
   * @param {number} maxWidth 需要绘制的最大宽度
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  strokeText(text: string, x: number, y: number, maxWidth?: number): void

  /**
   * 使用矩阵多次叠加当前变换，矩阵由方法的参数进行描述。可以缩放、旋转、移动和倾斜上下文
   * @param {number} scaleX 水平缩放
   * @param {number} skewY 垂直倾斜
   * @param {number} skewX 水平倾斜
   * @param {number} scaleY 垂直缩放
   * @param {number} translateX 水平移动
   * @param {number} translateY 垂直移动
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  transform(scaleX: Number, skewY: number, skewX: number, scaleY: number, translateX: number, translateY: number): void

  /**
   * 当前网格添加平移变换
   * @param {number} translateX 水平方向的移动距离
   * @param {number} translateY 垂直方向的移动距离
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  translate(translateX: number, translateY: number): void
}
