export interface Uni {
  /**
   * 创建 canvas 绘图上下文（推荐使用 createCanvasContextAsync）
   *
   * @tutorial_uni_app https://uniapp.dcloud.io/api/canvas/createCanvasContext.html
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/create-canvas-context.html
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/create-canvas-context.html
   *
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "x"
   *     },
   *     "ios": {
   *       "osVer": "12.0",
   *       "uniVer": "√",
   *       "unixVer": "x"
   *     },
   *     "harmony": {
   *       "osVer": "3.0",
   *       "uniVer": "4.23",
   *       "unixVer": "x"
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
   *       "unixVer": "√"
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
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.html
     */
  createCanvasContext: CreateCanvasContext;
  /**
   * 把当前画布指定区域的内容导出生成指定大小的图片
   *
   * @tutorial_uni_app https://uniapp.dcloud.io/api/canvas/canvasToTempFilePath.html
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "x"
   *     },
   *     "ios": {
   *       "osVer": "12.0",
   *       "uniVer": "√",
   *       "unixVer": "x"
   *     },
   *     "harmony": {
   *       "osVer": "3.0",
   *       "uniVer": "4.23",
   *       "unixVer": "x"
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
   *       "unixVer": "√"
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
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasToTempFilePath.html
     */
  canvasToTempFilePath: CanvasToTempFilePath;
  /**
   * 描述 canvas 区域隐含的像素数据
   * @tutorial_uni_app https://uniapp.dcloud.io/api/canvas/canvasGetImageData.html
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "x"
   *     },
   *     "ios": {
   *       "osVer": "12.0",
   *       "uniVer": "√",
   *       "unixVer": "x"
   *     },
   *     "harmony": {
   *       "osVer": "3.0",
   *       "uniVer": "4.23",
   *       "unixVer": "x"
   *     }
   *   },
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "1.9.0",
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
   *       "unixVer": "√"
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
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasGetImageData.html
     */
  canvasGetImageData: CanvasGetImageData;
  /**
   * 将像素数据绘制到画布
   * @tutorial_uni_app https://uniapp.dcloud.io/api/canvas/canvasPutImageData.html
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "x"
   *     },
   *     "ios": {
   *       "osVer": "12.0",
   *       "uniVer": "√",
   *       "unixVer": "x"
   *     },
   *     "harmony": {
   *       "osVer": "3.0",
   *       "uniVer": "4.23",
   *       "unixVer": "x"
   *     }
   *   },
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "1.9.0",
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
   *       "unixVer": "√"
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
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasPutImageData.html
     */
  canvasPutImageData: CanvasPutImageData;
}
export type CreateCanvasContext = (canvasId: string, componentInstance: any) => CanvasContext;

export interface CanvasGradient {
  /**
   * 添加颜色的渐变点
   */
  addColorStop(stop: number, color: string): void;
}

export interface CanvasTextMetrics {
  /**
   * 文本的宽度
   */
  width: number;
}

export interface CanvasContext {
  /**
   * 填充色
     * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
     */
  fillStyle: string;
  /**
   * 边框颜色
     * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
     */
  strokeStyle: string;
  /**
   * 阴影的模糊级别
     * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
     */
  shadowBlur: number;
  /**
   * 阴影的颜色
     * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
     */
  shadowColor: string;
  /**
   * 阴影相对于形状在水平方向的偏移
     * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
     */
  shadowOffsetX: number;
  /**
   * 阴影相对于形状在竖直方向的偏移
     * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
     */
  shadowOffsetY: number;
  /**
   * 线条的宽度
     * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
     */
  lineWidth: number;
  /**
   * 线条的端点样式
     * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
     */
  lineCap: 'butt' | 'round' | 'square';
  /**
   * 线条的结束交点样式
     * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
     */
  lineJoin: 'bevel' | 'round' | 'miter';
  /**
   * 最大斜接长度
     * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
     */
  miterLimit: number;
  /**
   * 透明度
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  globalAlpha: number;
  /**
   * 设置要在绘制新形状时应用的合成操作的类型
     * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
     */
  globalCompositeOperation: string;
  /**
   * 偏移量
     * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
     */
  lineDashOffset: number;
  /**
   * 字体样式
     * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
     */
  font: string;
  /**
   * 设置填充色
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  setFillStyle(color: CanvasGradient): void;
  /**
   * 设置边框颜色
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  setStrokeStyle(color: string): void;
  /**
   * 设置阴影样式
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  setShadow(offsetX?: number, offsetY?: number, blur?: number, color?: string): void;
  /**
   * 创建一个线性的渐变颜色
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
  /**
   * 创建一个圆形的渐变颜色
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  createCircularGradient(x: number, y: number, r: number): CanvasGradient;
  /**
   * 创建一个颜色的渐变点
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  addColorStop(stop: number, color: string): void;
  /**
   * 设置线条的宽度
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  setLineWidth(lineWidth: number): void;
  /**
   * 设置线条的端点样式
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  setLineCap(lineCap: string): void;
  /**
   * 设置线条的交点样式
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  setLineJoin(lineJoin: string): void;
  /**
   * 设置线条的宽度
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  setLineDash(pattern: any[], offset: number): void;
  /**
   * 设置最大斜接长度
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  setMiterLimit(miterLimit: number): void;
  /**
   * 创建一个矩形
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  rect(x: number, y: number, width: number, height: number): void;
  /**
   * 填充一个矩形
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  fillRect(x: number, y: number, width: number, height: number): void;
  /**
   * 画一个矩形(非填充)
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  strokeRect(x: number, y: number, width: number, height: number): void;
  /**
   * 清除画布上在该矩形区域内的内容
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  clearRect(x: number, y: number, width: number, height: number): void;
  /**
   * 对当前路径中的内容进行填充
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  fill(): void;
  /**
   * 画出当前路径的边框
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  stroke(): void;
  /**
   * 开始创建一个路径
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  beginPath(): void;
  /**
   * 关闭一个路径
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  closePath(): void;
  /**
   * 把路径移动到画布中的指定点，不创建线条
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  moveTo(x: number, y: number): void;
  /**
   * 增加一个新点，然后创建一条从上次指定点到目标点的线
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  lineTo(x: number, y: number): void;
  /**
   * 画一条弧线
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  arc(x: number, y: number, r: number, sAngle: number, eAngle: number, counterclockwise?: boolean): void;
  /**
   * 创建三次方贝塞尔曲线路径
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
  /**
   * 创建二次贝塞尔曲线路径
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
  /**
   * 横纵坐标缩放
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  scale(scaleWidth: number, scaleHeight: number): void;
  /**
   * 顺时针旋转当前坐标轴
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  rotate(rotate: number): void;
  /**
   * 对当前坐标系的原点(0, 0)进行变换
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  translate(x: number, y: number): void;
  /**
   * 从原始画布中剪切任意形状和尺寸
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  clip(): void;
  /**
   * 设置字体的字号
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  setFontSize(fontSize: number): void;
  /**
   * 在画布上绘制被填充的文本
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  fillText(text: string, x: number, y: number, maxWidth?: number): void;
  /**
   * 设置文字的对齐
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  setTextAlign(align: string): void;
  /**
   * 设置文字的水平对齐
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  setTextBaseline(textBaseline: string): void;
  /**
   * 绘制图像到画布
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  drawImage(imageResource: string, dx?: number, dy?: number, dWidth?: number, dHeigt?: number, sx?: number, sy?: number, sWidth?: number, sHeight?: number): void;
  /**
   * 设置全局画笔透明度
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  setGlobalAlpha(alpha: number): void;
  /**
   * 保存当前的绘图上下文
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  save(): void;
  /**
   * 恢复之前保存的绘图上下文
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  restore(): void;
  /**
   * 将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  draw(reserve?: boolean, callback?: ((result: any) => void)): void;
  /**
   * 测量文本尺寸信息，目前仅返回文本宽度
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  measureText(text: string): CanvasTextMetrics;
  /**
   * 根据控制点和半径绘制圆弧路径
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
  /**
   * 给定的 (x, y) 位置绘制文本描边的方法
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  strokeText(text: string, x: number, y: number, maxWidth?: number): void;
  /**
   * 对指定的图像创建模式的方法，可在指定的方向上重复元图像
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  createPattern(image: string, repetition: string): void;
  /**
   * 使用矩阵重新设置（覆盖）当前变换的方法
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  setTransform(scaleX: number, skewX: number, skewY: number, scaleY: number, translateX: number, translateY: number): void;
}

export type CanvasToTempFilePath = (options: CanvasToTempFilePathOptions, componentInstance: any) => void;
export type CanvasToTempFilePathSuccess = {
  /**
   * 导出生成的图片路径
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  tempFilePath: string
    /** */
    errMsg?: string;
};
export type CanvasToTempFilePathSuccessCallback = (result: CanvasToTempFilePathSuccess) => void;
export type CanvasToTempFilePathFail = UniError;
export type UniError = {
  errSubject: string,
  errCode: number,
  errMsg: string,
  data?: object | null,
  cause?: any | null
};
export type CanvasToTempFilePathFailCallback = (result: CanvasToTempFilePathFail) => void;
export type CanvasToTempFilePathComplete = any;
export type CanvasToTempFilePathCompleteCallback = (result: CanvasToTempFilePathComplete) => void;
export type CanvasToTempFilePathOptions = {
  /**
   * 画布x轴起点（默认0）
     * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
     */
  x?: number | null,
  /**
   * 画布y轴起点（默认0）
     * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
     */
  y?: number | null,
  /**
   * 画布宽度（默认为canvas宽度-x）
   * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
   */
  width?: number | null,
  /**
   * 画布高度（默认为canvas高度-y）
   * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
   */
  height?: number | null,
  /**
   * 输出图片宽度（默认为 width * 屏幕像素密度）
   * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
   */
  destWidth?: number | null,
  /**
   * 输出图片高度（默认为 height * 屏幕像素密度）
   * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
   */
  destHeight?: number | null,
  /**
   * 画布标识，传入 <canvas/> 的 canvas-id
   * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
   * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html
   */
  canvasId: string,
  /**
   * 目标文件的类型，默认为 'png'
   * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
   */
  fileType?: string | null,
  /**
   * 图片的质量，取值范围为 (0, 1]，不在范围内时当作1.0处理
   * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
   */
  quality?: number | null,
  /**
   * 接口调用成功的回调函数
   * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
   */
  success?: CanvasToTempFilePathSuccessCallback | null,
  /**
   * 接口调用失败的回调函数
   * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
   */
  fail?: CanvasToTempFilePathFailCallback | null,
  /**
   * 接口调用结束的回调函数（调用成功、失败都会执行）
   * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
   */
  complete?: CanvasToTempFilePathCompleteCallback | null
    /**
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
    canvas?: any;
};
export type CanvasGetImageData = (options: CanvasGetImageDataOptions, component?: any) => void;
export type CanvasGetImageDataSuccess = {
  /**
   * 回调信息
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  errMsg: string,
  /**
   * 图像数据矩形的宽度
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  width: number,
  /**
   * 图像数据矩形的高度
   * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
   */
  height: number,
  /**
   * 图像像素点数据，一维数组，每四项表示一个像素点的rgba
   * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
   */
  data: any[]
};
export type CanvasGetImageDataSuccessCallback = (result: CanvasGetImageDataSuccess) => void;
export type CanvasGetImageDataFail = UniError;
export type CanvasGetImageDataFailCallback = (result: CanvasGetImageDataFail) => void;
export type CanvasGetImageDataComplete = any;
export type CanvasGetImageDataCompleteCallback = (result: CanvasGetImageDataComplete) => void;
export type CanvasGetImageDataOptions = {
  /**
   * 画布标识，传入 <canvas/> 的 canvas-id
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html
     */
  canvasId: string,
  /**
   * 将要被提取的图像数据矩形区域的左上角 x 坐标
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  x?: number | null,
  /**
   * 将要被提取的图像数据矩形区域的左上角 y 坐标
   * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
   */
  y?: number | null,
  /**
   * 将要被提取的图像数据矩形区域的宽度
   * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
   */
  width?: number | null,
  /**
   * 将要被提取的图像数据矩形区域的高度
   * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
   */
  height?: number | null,
  /**
   * 接口调用成功的回调函数
   * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
   */
  success?: CanvasGetImageDataSuccessCallback | null,
  /**
   * 接口调用失败的回调函数
   * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
   */
  fail?: CanvasGetImageDataFailCallback | null,
  /**
   * 接口调用结束的回调函数（调用成功、失败都会执行）
   * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
   */
  complete?: CanvasGetImageDataCompleteCallback | null
};
export type CanvasPutImageData = (options: CanvasPutImageDataOptions, component?: any) => void;
export type CanvasPutImageDataSuccess = {
    /**
     * 错误信息
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
    errMsg?: string;
};
export type CanvasPutImageDataSuccessCallback = (result: CanvasPutImageDataSuccess) => void;
export type CanvasPutImageDataFail = UniError;
export type CanvasPutImageDataFailCallback = (result: CanvasPutImageDataFail) => void;
export type CanvasPutImageDataComplete = any;
export type CanvasPutImageDataCompleteCallback = (result: CanvasPutImageDataComplete) => void;
export type CanvasPutImageDataOptions = {
  /**
   * 画布标识，传入 <canvas/> 的 canvas-id
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html
     */
  canvasId: string,
  /**
   * 图像像素点数据，一维数组，每四项表示一个像素点的rgba
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "baidu": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "toutiao": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "lark": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "qq": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "kuaishou": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     },
     *     "jd": {
     *       "hostVer": "x",
     *       "uniVer": "x",
     *       "unixVer": "x"
     *     }
     *   }
     * }
     */
  data?: (any[]) | null,
  /**
   * 源图像数据在目标画布中的位置偏移量（x 轴方向的偏移量）
   * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
   */
  x?: number | null,
  /**
   * 源图像数据在目标画布中的位置偏移量（y 轴方向的偏移量）
   * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
   */
  y?: number | null,
  /**
   * 源图像数据矩形区域的宽度
   * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
   */
  width?: number | null,
  /**
   * 源图像数据矩形区域的高度
   * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
   */
  height?: number | null,
  /**
   * 接口调用成功的回调函数
   * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
   */
  success?: CanvasPutImageDataSuccessCallback | null,
  /**
   * 接口调用失败的回调函数
   * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
   */
  fail?: CanvasPutImageDataFailCallback | null,
  /**
   * 接口调用结束的回调函数（调用成功、失败都会执行）
   * @uniPlatform {
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "baidu": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "toutiao": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "lark": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "qq": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "kuaishou": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     },
   *     "jd": {
   *       "hostVer": "x",
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   }
   * }
   */
  complete?: CanvasPutImageDataCompleteCallback | null
};
