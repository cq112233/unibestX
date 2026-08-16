interface Uni {

  /**
   * 环境变量
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "5.0",
   *           "uniVer": "x",
   *           "unixVer": "3.99"
   *        },
   *        "ios": {
   *           "osVer": "12.0",
   *           "uniVer": "x",
   *           "unixVer": "4.11"
   *        },
   *        "harmony": {
   *          "osVer": "5.0.0",
   *          "uniVer": "x",
   *          "unixVer": "4.61"
   *        }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "4.41"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  env: {

    /**
     * 文件系统中的用户文件目录路径
     * @uniPlatform {
     *    "app": {
     *        "android": {
     *           "osVer": "5.0",
     *           "uniVer": "x",
     *           "unixVer": "3.99"
     *        },
     *        "ios": {
     *           "osVer": "12.0",
     *           "uniVer": "x",
     *           "unixVer": "4.11"
     *        },
     *        "harmony": {
     *          "osVer": "5.0.0",
     *          "uniVer": "x",
     *          "unixVer": "4.61"
     *        }
     *    },
     *    "mp": {
     *      "weixin": {
     *        "uniVer": "√",
     *        "unixVer": "4.41"
     *      }
     *    },
     *    "web": {
     *        "uniVer": "x",
     *        "unixVer": "x"
     *    }
     * }
     */
    USER_DATA_PATH: string,
    /**
     * 文件系统中的缓存文件目录路径
     * @uniPlatform {
     *    "app": {
     *        "android": {
     *           "osVer": "5.0",
     *           "uniVer": "x",
     *           "unixVer": "3.99"
     *        },
     *        "ios": {
     *           "osVer": "12.0",
     *           "uniVer": "x",
     *           "unixVer": "4.11"
     *        },
     *        "harmony": {
     *          "osVer": "5.0.0",
     *          "uniVer": "x",
     *          "unixVer": "4.61"
     *        }
     *    },
     *    "mp": {
     *      "weixin": {
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
    CACHE_PATH: "unifile://cache/",
    /**
     * 文件系统中的应用沙盒目录路径
     * @uniPlatform {
     *    "app": {
     *        "android": {
     *           "osVer": "5.0",
     *           "uniVer": "x",
     *           "unixVer": "3.99"
     *        },
     *        "ios": {
     *           "osVer": "12.0",
     *           "uniVer": "x",
     *           "unixVer": "4.11"
     *        },
     *        "harmony": {
     *          "osVer": "5.0.0",
     *          "uniVer": "x",
     *          "unixVer": "4.61"
     *        }
     *    },
     *    "mp": {
     *      "weixin": {
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
    SANDBOX_PATH: "unifile://sandbox/",
    /**
     * 文件系统中的应用临时目录路径，应用退出自动清理
     * @uniPlatform {
     *    "app": {
     *        "android": {
     *           "osVer": "x",
     *           "uniVer": "x",
     *           "unixVer": "x"
     *        },
     *        "ios": {
     *           "osVer": "x",
     *           "uniVer": "x",
     *           "unixVer": "x"
     *        },
     *        "harmony": {
     *          "osVer": "5.0.0",
     *          "uniVer": "x",
     *          "unixVer": "4.62"
     *        }
     *    },
     *    "mp": {
     *      "weixin": {
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
    TEMP_PATH: "unifile://temp/",
    /**
     * 文件系统中的应用内置沙盒目录路径（仅app-android平台支持）
     * @uniPlatform {
     *    "app": {
     *        "android": {
     *           "osVer": "5.0",
     *           "uniVer": "x",
     *           "unixVer": "3.99"
     *        },
     *        "ios": {
     *           "osVer": "x",
     *           "uniVer": "x",
     *           "unixVer": "x"
     *        },
     *        "harmony": {
     *          "osVer": "x",
     *          "uniVer": "x",
     *          "unixVer": "x
     *        }
     *    },
     *    "mp": {
     *      "weixin": {
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
    ANDROID_INTERNAL_SANDBOX_PATH: "unifile://androidInternalSandbox/",

  }

}
