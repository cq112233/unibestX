export interface Uni {
  /**
   * 获取当前设置的语言
   *
   * @tutorial https://uniapp.dcloud.io/api/ui/locale.html#getlocale
   * @tutorial_uni_app https://uniapp.dcloud.io/api/ui/locale.html#getlocale
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
   *      "unixVer": "x"
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
   *      "unixVer": "√"
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
  getLocale: GetLocale;
  /**
   * 设置当前语言
   *
   * @tutorial https://uniapp.dcloud.io/api/ui/locale.html#setlocale
   * @tutorial_uni_app https://uniapp.dcloud.io/api/ui/locale.html#setlocale
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
   *      "unixVer": "x"
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
   *      "unixVer": "√"
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
  setLocale: SetLocale;
  /**
   * 设置当前语言
   *
   * @tutorial https://uniapp.dcloud.io/api/ui/locale.html#onlocalechange
   * @tutorial_uni_app https://uniapp.dcloud.io/api/ui/locale.html#onlocalechange
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
   *      "unixVer": "x"
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
   *      "unixVer": "√"
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
  onLocaleChange: OnLocaleChange;
}

export type GetLocale = () => string;
export type SetLocale = (locale: string) => void;
export type OnLocaleChangeCallbackResult = {
  /**
   * 当前语言
   */
  locale?: string | null
};
export type OnLocaleChangeCallback = (result: OnLocaleChangeCallbackResult) => void;
export type OnLocaleChange = (callback: OnLocaleChangeCallback) => void;
