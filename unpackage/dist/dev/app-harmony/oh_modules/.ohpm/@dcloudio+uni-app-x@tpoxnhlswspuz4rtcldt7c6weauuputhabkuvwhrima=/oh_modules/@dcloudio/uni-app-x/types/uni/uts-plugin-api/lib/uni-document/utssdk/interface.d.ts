export interface Uni {
  /**
   * 设置系统剪贴板的内容
   *
   * @tutorial https://uniapp.dcloud.net.cn/api/system/clipboard.html#setclipboarddata
   * @tutorial-uni-app https://uniapp.dcloud.net.cn/api/system/clipboard.html#setclipboarddata
   * @uniPlatform {
     *  "app": {
     *    "android": {
     *      "osVer": "5.0",
     *      "uniVer": "√",
     *      "unixVer": "x"
     *    },
     *    "ios": {
     *      "osVer": "12.0",
     *      "uniVer": "√",
     *      "unixVer": "x"
     *    },
     *    "harmony": {
     *      "osVer": "3.0",
     *      "uniVer": "4.23",
     *      "unixVer": "4.61"
     *    }
     *  },
     *  "mp": {
     *    "weixin": {
     *      "hostVer": "√",
     *      "uniVer": "√",
     *      "unixVer": "4.41"
     *    },
     *    "alipay": {
     *      "hostVer": "√",
     *      "uniVer": "√",
     *      "unixVer": "x"
     *    },
     *    "baidu": {
     *      "hostVer": "√",
     *      "uniVer": "√",
     *      "unixVer": "x"
     *    },
     *    "toutiao": {
     *      "hostVer": "√",
     *      "uniVer": "√",
     *      "unixVer": "x"
     *    },
     *    "lark": {
     *      "hostVer": "√",
     *      "uniVer": "√",
     *      "unixVer": "x"
     *    },
     *    "qq": {
     *      "hostVer": "√",
     *      "uniVer": "√",
     *      "unixVer": "x"
     *    },
     *    "kuaishou": {
     *      "hostVer": "√",
     *      "uniVer": "√",
     *      "unixVer": "x"
     *    },
     *    "jd": {
     *      "hostVer": "√",
     *      "uniVer": "√",
     *      "unixVer": "x"
     *    }
     *  },
     *  "web": {
     *    "uniVer": "√",
     *    "unixVer": "4.0"
     *  }
     * }
   */
  createElement(tagName: string): UniElement;
}

export type CreateElement = (tagName: string) => UniElement;
