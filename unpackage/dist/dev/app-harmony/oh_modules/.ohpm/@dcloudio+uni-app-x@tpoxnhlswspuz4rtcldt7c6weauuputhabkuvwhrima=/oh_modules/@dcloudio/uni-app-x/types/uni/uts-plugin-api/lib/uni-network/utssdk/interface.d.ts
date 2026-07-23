export type Request<T> = (param: RequestOptions<T>) => RequestTask;

/**
 * 网络请求参数
 */
export type RequestOptions<T> = {
    /**
     * 开发者服务器接口地址
     *
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
     */
    url: string,
    /**
     * 请求的参数 在`app-android端，参数类型只能为`UTSJSONObject`或者`string`类型,app-android平台从 4.51版本开始支持ArrayBuffer, app-ios平台从 4.61版本开始支持ArrayBuffer
     * @type {RequestDataOptions}
     * @defaultValue null
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
     */
    data?: any | null,
    /**
     * 设置请求的 header，header 中不能设置 Referer
     * @defaultValue null
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
     */
    header?: UTSJSONObject | null,
    /**
     * 请求方法，如果设置的值不在取值范围内，会以GET方法进行请求。
     * @defaultValue "GET"
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
     */
    method?: RequestMethod | null,
    /**
     * 超时时间，单位 ms
     * @defaultValue 60000
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          }
         },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  }
      }
     */
    timeout?: number | null,
    /**
     * 如果设为 json，会对返回的数据进行一次 JSON.parse，非 json 不会进行 JSON.parse
     * @defaultValue "json"
     * @deprecated 不支持
     * @autodoc false
     */
    dataType?: string | null,
    /**
     * 设置响应的数据类型。
     *
     * @deprecated 不支持
     * @autodoc false
     */
    responseType?: string | null,
    /**
     * 验证 ssl 证书
     *
     * @deprecated 不支持
     * @autodoc false
     */
    sslVerify?: boolean | null,
    /**
     * 跨域请求时是否携带凭证（cookies）
     *
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "4.4",
            "uniVer": "√",
            "uniUtsPlugin": "x",
            "unixVer": "x"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "x",
            "unixVer": "x",
            "unixUtsPlugin": "x"
          },
          "harmony": {
            "osVer": "x",
            "uniVer": "x",
            "unixVer": "x"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
     */
    withCredentials?: boolean | null,
    /**
     * DNS解析时优先使用ipv4
     * @defaultValue false
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "x",
            "unixVer": "x"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "x",
            "unixVer": "x",
            "unixUtsPlugin": "x"
          },
          "harmony": {
            "osVer": "x",
            "uniVer": "x",
            "unixVer": "x"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "x",
          "unixVer": "x"
        }
      }
     */
    firstIpv4?: boolean | null,

    /**
     * 开启 transfer-encoding chunked。
     * @uniPlatform
     * {
     *   "app": {
     *     "android": {
     *       "osVer": "5.0",
     *       "uniVer": "√",
     *       "uniUtsPlugin": "4.71",
     *       "unixVer": "4.71"
     *     },
     *     "ios": {
     *       "osVer": "12.0",
     *       "uniVer": "√",
     *       "uniUtsPlugin": "4.71",
     *       "unixVer": "4.71",
     *       "unixUtsPlugin": "4.71"
     *     },
     *     "harmony": {
     *       "osVer": "3.0",
     *       "uniVer": "4.71",
     *       "uniUtsPlugin": "4.71",
     *       "unixVer": "4.71"
     *       "unixUtsPlugin": "4.71"
     *     },
     *   },
     *   "mp": {
     *     "weixin": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "4.41"
     *     },
     *     "alipay": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     },
     *     "baidu": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     },
     *     "toutiao": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     },
     *     "lark": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     },
     *     "qq": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     },
     *     "kuaishou": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     },
     *     "jd": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     }
     *   },
     *   "web": {
     *       "uniVer": "√",
     *       "unixVer": "4.71"
     *   }
     * }
     */
    enableChunked?: boolean | null,
    /**
     * 网络请求成功回调。
     * @defaultValue null
     */
    success?: RequestSuccessCallback<T> | null,
    /**
     * 网络请求失败回调。
     * @defaultValue null
     */
    fail?: RequestFailCallback | null,
    /**
     * 网络请求完成回调，成功或者失败都会调用。
     * @defaultValue null
     */
    complete?: RequestCompleteCallback | null
}

export type RequestSuccess<T> = {
    /**
     * 开发者服务器返回的数据, app-android平台从 4.51版本开始支持ArrayBuffer, app-ios平台从 4.61版本开始支持ArrayBuffer
     * @type {RequestDataOptions}
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
     */
    data: T | null,
    /**
     * 开发者服务器返回的 HTTP 状态码
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
     */
    statusCode: number,
    /**
     * 开发者服务器返回的 HTTP Response Header
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
     */
    header: any,
    /**
     * 开发者服务器返回的 cookies，格式为字符串数组
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
        "web": {
          "uniVer": "x",
          "unixVer": "x"
        }
      }
     */
    cookies: Array<string>
}

/**
 * 请求方法
 */
export type RequestMethod =
    /**
     * GET方法请求一个指定资源的表示形式，使用 GET 的请求应该只被用于获取数据。
     */
    "GET" |
    /**
     * POST方法用于将实体提交到指定的资源，通常导致在服务器上的状态变化或副作用。
     */
    "POST" |
    /**
     * PUT方法用有效载荷请求替换目标资源的所有当前表示。
     */
    "PUT" |
    /**
     * PATCH方法用于对资源应用部分修改。
     */
    "PATCH" |
    /**
     * DELETE方法删除指定的资源。
     */
    "DELETE" |
    /**
     * HEAD方法请求一个与GET请求的响应相同的响应，但没有响应体。
     */
    "HEAD" |
    /**
     * OPTIONS 方法用于描述目标资源的通信选项。
     */
    "OPTIONS";

/**
 * 错误码
 */
export type RequestErrorCode =
    /**
     * 接口超时
     */
    5 |
    /**
     * 服务端系统错误
     */
    1000 |
    /**
     * json数据解析错误
     */
    100001 |
    /**
     * 错误信息json解析失败
     */
    100002 |
    /**
     * 网络中断
     */
    600003 |
    /**
     * data参数类型不合法
     */
    600008 |
    /**
     * URL格式不合法
     */
    600009 |
    /**
     * request系统错误
     */
    602001;

/**
 * 网络请求失败的错误回调参数
 */
export interface RequestFail extends IUniError {
    errCode: RequestErrorCode
};
export type RequestSuccessCallback<T> = (option: RequestSuccess<T>) => void;
export type RequestFailCallback = (option: RequestFail) => void;
export type RequestCompleteCallback = (option: any) => void;

export type RequestTaskOnChunkReceivedListenerResult = {
    /** 返回的chunk buffer 
    * @uniPlatform
    * {
    *   "app": {
    *     "android": {
    *       "osVer": "5.0",
    *       "uniVer": "√",
    *       "uniUtsPlugin": "4.71",
    *       "unixVer": "4.71"
    *     },
    *     "ios": {
    *       "osVer": "12.0",
    *       "uniVer": "x",
    *       "uniUtsPlugin": "4.71",
    *       "unixVer": "4.71",
    *       "unixUtsPlugin": "4.71"
    *     },
    *     "harmony": {
    *       "osVer": "3.0",
    *       "uniVer": "4.71",
    *       "uniUtsPlugin": "4.71",
    *       "unixVer": "4.71"
    *       "unixUtsPlugin": "4.71"
    *     },
    *   },
    *   "mp": {
    *     "weixin": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "4.41"
    *     },
    *     "alipay": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "x"
    *     },
    *     "baidu": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "x"
    *     },
    *     "toutiao": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "x"
    *     },
    *     "lark": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "x"
    *     },
    *     "qq": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "x"
    *     },
    *     "kuaishou": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "x"
    *     },
    *     "jd": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "x"
    *     }
    *   },
    *   "web": {
    *       "uniVer": "√",
    *       "unixVer": "4.71"
    *   }
    * }
    */
    data: ArrayBuffer
}
export type RequestTaskOnChunkReceivedCallback = (

    result: RequestTaskOnChunkReceivedListenerResult
) => void


export type RequestTaskOnHeadersReceivedListenerResult = {
    /** 开发者服务器返回的 cookies，格式为字符串数组 
    * @uniPlatform
    * {
    *   "app": {
    *     "android": {
    *       "osVer": "5.0",
    *       "uniVer": "√",
    *       "uniUtsPlugin": "4.71",
    *       "unixVer": "4.71"
    *     },
    *     "ios": {
    *       "osVer": "12.0",
    *       "uniVer": "x",
    *       "uniUtsPlugin": "4.71",
    *       "unixVer": "4.71",
    *       "unixUtsPlugin": "4.71"
    *     },
    *     "harmony": {
    *       "osVer": "3.0",
    *       "uniVer": "4.71",
    *       "uniUtsPlugin": "4.71",
    *       "unixVer": "4.71"
    *       "unixUtsPlugin": "4.71"
    *     },
    *   },
    *   "mp": {
    *     "weixin": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "4.41"
    *     },
    *     "alipay": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "x"
    *     },
    *     "baidu": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "x"
    *     },
    *     "toutiao": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "x"
    *     },
    *     "lark": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "x"
    *     },
    *     "qq": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "x"
    *     },
    *     "kuaishou": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "x"
    *     },
    *     "jd": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "x"
    *     }
    *   },
    *   "web": {
    *       "uniVer": "√",
    *       "unixVer": "4.71"
    *   }
    * }
    */
    cookies: string[]
    /** 开发者服务器返回的 HTTP Response Header 
    * @uniPlatform
    * {
    *   "app": {
    *     "android": {
    *       "osVer": "5.0",
    *       "uniVer": "√",
    *       "uniUtsPlugin": "4.71",
    *       "unixVer": "4.71"
    *     },
    *     "ios": {
    *       "osVer": "12.0",
    *       "uniVer": "x",
    *       "uniUtsPlugin": "4.71",
    *       "unixVer": "4.71",
    *       "unixUtsPlugin": "4.71"
    *     },
    *     "harmony": {
    *       "osVer": "3.0",
    *       "uniVer": "4.71",
    *       "uniUtsPlugin": "4.71",
    *       "unixVer": "4.71"
    *       "unixUtsPlugin": "4.71"
    *     },
    *   },
    *   "mp": {
    *     "weixin": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "4.41"
    *     },
    *     "alipay": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "x"
    *     },
    *     "baidu": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "x"
    *     },
    *     "toutiao": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "x"
    *     },
    *     "lark": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "x"
    *     },
    *     "qq": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "x"
    *     },
    *     "kuaishou": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "x"
    *     },
    *     "jd": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "x"
    *     }
    *   },
    *   "web": {
    *       "uniVer": "√",
    *       "unixVer": "4.71"
    *   }
    * }
    */
    header: UTSJSONObject
    /** 开发者服务器返回的 HTTP 状态码 （目前开发者工具上不会返回 statusCode 字段，可用真机查看该字段，后续将会支持） 
    * @uniPlatform
    * {
    *   "app": {
    *     "android": {
    *       "osVer": "5.0",
    *       "uniVer": "√",
    *       "uniUtsPlugin": "4.71",
    *       "unixVer": "4.71"
    *     },
    *     "ios": {
    *       "osVer": "12.0",
    *       "uniVer": "x",
    *       "uniUtsPlugin": "4.71",
    *       "unixVer": "4.71",
    *       "unixUtsPlugin": "4.71"
    *     },
    *     "harmony": {
    *       "osVer": "3.0",
    *       "uniVer": "4.71",
    *       "uniUtsPlugin": "4.71",
    *       "unixVer": "4.71"
    *       "unixUtsPlugin": "4.71"
    *     },
    *   },
    *   "mp": {
    *     "weixin": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "4.41"
    *     },
    *     "alipay": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "x"
    *     },
    *     "baidu": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "x"
    *     },
    *     "toutiao": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "x"
    *     },
    *     "lark": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "x"
    *     },
    *     "qq": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "x"
    *     },
    *     "kuaishou": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "x"
    *     },
    *     "jd": {
    *         "hostVer": "√",
    *         "uniVer": "√",
    *         "unixVer": "x"
    *     }
    *   },
    *   "web": {
    *       "uniVer": "√",
    *       "unixVer": "4.71"
    *   }
    * }
    */
    statusCode: number
}
/** HTTP Response Header 事件的监听函数 */
export type RequestTaskOnHeadersReceivedCallback = (
    result: RequestTaskOnHeadersReceivedListenerResult
) => void

export interface RequestTask {
    /**
      * 中断网络请求。
      * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/request/request.html
      * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/request.html
      * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/request.html
      * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
      * @example
       ```typescript
        var requestTask = uni.request({
          url: 'http://192.168.12.106:8080/postHalo', //仅为示例，并非真实接口地址。
          complete: ()=> {}
        });
        requestTask.abort();
       ```
      */
    abort(): void

    /**
     * 监听 Transfer-Encoding Chunk Received 事件。
     * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/request/request.html
     * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/request.html
     * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/request.html
     * @uniPlatform
     * {
     *   "app": {
     *     "android": {
     *       "osVer": "5.0",
     *       "uniVer": "√",
     *       "uniUtsPlugin": "4.71",
     *       "unixVer": "4.71"
     *     },
     *     "ios": {
     *       "osVer": "12.0",
     *       "uniVer": "x",
     *       "uniUtsPlugin": "4.71",
     *       "unixVer": "4.71",
     *       "unixUtsPlugin": "4.71"
     *     },
     *     "harmony": {
     *       "osVer": "3.0",
     *       "uniVer": "4.71",
     *       "uniUtsPlugin": "4.71",
     *       "unixVer": "4.71"
     *       "unixUtsPlugin": "4.71"
     *     },
     *   },
     *   "mp": {
     *     "weixin": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "4.41"
     *     },
     *     "alipay": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     },
     *     "baidu": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     },
     *     "toutiao": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     },
     *     "lark": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     },
     *     "qq": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     },
     *     "kuaishou": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     },
     *     "jd": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     }
     *   },
     *   "web": {
     *       "uniVer": "√",
     *       "unixVer": "4.71"
     *   }
     * }
     */
    onChunkReceived(listener: RequestTaskOnChunkReceivedCallback): number

    /**
     * 移除 Transfer-Encoding Chunk Received 事件的监听函数。
     * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/request/request.html
     * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/request.html
     * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/request.html
     * @uniPlatform
     * {
     *   "app": {
     *     "android": {
     *       "osVer": "5.0",
     *       "uniVer": "√",
     *       "uniUtsPlugin": "4.71",
     *       "unixVer": "4.71"
     *     },
     *     "ios": {
     *       "osVer": "12.0",
     *       "uniVer": "x",
     *       "uniUtsPlugin": "4.71",
     *       "unixVer": "4.71",
     *       "unixUtsPlugin": "4.71"
     *     },
     *     "harmony": {
     *       "osVer": "3.0",
     *       "uniVer": "4.71",
     *       "uniUtsPlugin": "4.71",
     *       "unixVer": "4.71"
     *       "unixUtsPlugin": "4.71"
     *     },
     *   },
     *   "mp": {
     *     "weixin": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "4.41"
     *     },
     *     "alipay": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     },
     *     "baidu": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     },
     *     "toutiao": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     },
     *     "lark": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     },
     *     "qq": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     },
     *     "kuaishou": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     },
     *     "jd": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     }
     *   },
     *   "web": {
     *       "uniVer": "√",
     *       "unixVer": "4.71"
     *   }
     * }
     */
	offChunkReceived(listener ?: number | RequestTaskOnChunkReceivedCallback | null): void
    /**
     * 监听 HTTP Response Header 事件。
     * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/request/request.html
     * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/request.html
     * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/request.html
     * @uniPlatform
     * {
     *   "app": {
     *     "android": {
     *       "osVer": "5.0",
     *       "uniVer": "√",
     *       "uniUtsPlugin": "4.71",
     *       "unixVer": "4.71"
     *     },
     *     "ios": {
     *       "osVer": "12.0",
     *       "uniVer": "x",
     *       "uniUtsPlugin": "4.71",
     *       "unixVer": "4.71",
     *       "unixUtsPlugin": "4.71"
     *     },
     *     "harmony": {
     *       "osVer": "3.0",
     *       "uniVer": "4.71",
     *       "uniUtsPlugin": "4.71",
     *       "unixVer": "4.71"
     *       "unixUtsPlugin": "4.71"
     *     },
     *   },
     *   "mp": {
     *     "weixin": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "4.41"
     *     },
     *     "alipay": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     },
     *     "baidu": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     },
     *     "toutiao": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     },
     *     "lark": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     },
     *     "qq": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     },
     *     "kuaishou": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     },
     *     "jd": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     }
     *   },
     *   "web": {
     *       "uniVer": "√",
     *       "unixVer": "4.71"
     *   }
     * }
     */
    onHeadersReceived(listener: RequestTaskOnHeadersReceivedCallback): number

    /**
     * 移除 HTTP Response Header 事件的监听函数。
     * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/request/request.html
     * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/request.html
     * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/request.html
     * @uniPlatform
     * {
     *   "app": {
     *     "android": {
     *       "osVer": "5.0",
     *       "uniVer": "√",
     *       "uniUtsPlugin": "4.71",
     *       "unixVer": "4.71"
     *     },
     *     "ios": {
     *       "osVer": "12.0",
     *       "uniVer": "x",
     *       "uniUtsPlugin": "4.71",
     *       "unixVer": "4.71",
     *       "unixUtsPlugin": "4.71"
     *     },
     *     "harmony": {
     *       "osVer": "3.0",
     *       "uniVer": "4.71",
     *       "uniUtsPlugin": "4.71",
     *       "unixVer": "4.71"
     *       "unixUtsPlugin": "4.71"
     *     },
     *   },
     *   "mp": {
     *     "weixin": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "4.41"
     *     },
     *     "alipay": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     },
     *     "baidu": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     },
     *     "toutiao": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     },
     *     "lark": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     },
     *     "qq": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     },
     *     "kuaishou": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     },
     *     "jd": {
     *         "hostVer": "√",
     *         "uniVer": "√",
     *         "unixVer": "x"
     *     }
     *   },
     *   "web": {
     *       "uniVer": "√",
     *       "unixVer": "4.71"
     *   }
     * }
     */
	offHeadersReceived(listener ?: number | RequestTaskOnHeadersReceivedCallback | null): void
}

//===============================上传==================================


export type UploadFile = (options: UploadFileOptions) => UploadTask;
export type UploadFileOptionFiles = {
    /**
     * multipart 提交时，表单的项目名，默认为 file，如果 name 不填或填的值相同，可能导致服务端读取文件时只能读取到一个文件。
     * @defaultValue "file"
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
     */
    name?: string | null,
    /**
     * 要上传文件资源的路径
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "x",
          "unixVer": "x"
        }
      }
     */
    uri: string,
    /**
     * 要上传的文件对象
      * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "x",
            "uniVer": "x",
            "unixVer": "x"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
     */
    file?: any | null
};
export type UploadFileSuccess = {
    /**
     * 开发者服务器返回的数据
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
     */
    data: string,
    /**
     * 开发者服务器返回的 HTTP 状态码
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
     */
    statusCode: number
};
export type UploadFileSuccessCallback = (result: UploadFileSuccess) => void;
/**
 * 上传文件失败的错误回调参数
 * @uniPlatform {
 *   "mp": {
 *     "weixin": {
 *       "hostVer": "√",
 *       "uniVer": "√",
 *       "unixVer": "4.41"
 *     },
 *     "alipay": {
 *       "hostVer": "-",
 *       "uniVer": "-",
 *       "unixVer": "-"
 *     },
 *     "baidu": {
 *       "hostVer": "-",
 *       "uniVer": "-",
 *       "unixVer": "-"
 *     },
 *     "toutiao": {
 *       "hostVer": "-",
 *       "uniVer": "-",
 *       "unixVer": "-"
 *     },
 *     "lark": {
 *       "hostVer": "-",
 *       "uniVer": "-",
 *       "unixVer": "-"
 *     },
 *     "qq": {
 *       "hostVer": "-",
 *       "uniVer": "-",
 *       "unixVer": "-"
 *     },
 *     "kuaishou": {
 *       "hostVer": "-",
 *       "uniVer": "-",
 *       "unixVer": "-"
 *     },
 *     "jd": {
 *       "hostVer": "-",
 *       "uniVer": "-",
 *       "unixVer": "-"
 *     }
 *   }
 * }
 */
export interface UploadFileFail extends IUniError {
    errCode: RequestErrorCode
};
export type UploadFileFailCallback = (result: UploadFileFail) => void;

export type UploadFileCompleteCallback = (result: any) => void;
export type UploadFileOptions = {
    /**
     * 开发者服务器 url
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
     */
    url: string,
    /**
     * 要上传文件资源的路径, 支持uni.env
     * @defaultValue null
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
     */
    filePath?: string | null,
    /**
     * 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
     * @defaultValue null
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
     */
    name?: string | null,
    /**
     * 需要上传的文件列表。
     * @defaultValue null
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
     */
    files?: (UploadFileOptionFiles[]) | null,
    /**
     * HTTP 请求 Header, header 中不能设置 Referer
     * @defaultValue null
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
     */
    header?: UTSJSONObject | null,
    /**
     * HTTP 请求中其他额外的 form data
     * @defaultValue null
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
     */
    formData?: UTSJSONObject | null,
    /**
     * 超时时间，单位 ms
     * @defaultValue 120000
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
     */
    timeout?: number | null,
    /**
     * 成功返回的回调函数
     * @defaultValue null
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
    success?: UploadFileSuccessCallback | null,
    /**
     * 失败的回调函数
     * @defaultValue null
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
    fail?: UploadFileFailCallback | null,
    /**
     * 结束的回调函数（调用成功、失败都会执行）
     * @defaultValue null
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
    complete?: UploadFileCompleteCallback | null
    /**
     * 需要基础库： `2.10.4`
     *
     * 是否开启 http2
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "2.10.4",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
    enableHttp2?: boolean | null;
    /**
     * 是否开启 profile，默认开启。开启后可在接口回调的 res.profile 中查看性能调试信息。目前仅 iOS 端支持。
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
    enableProfile?: boolean | null;
    /**
     * 需要基础库： `2.10.4`
     *
     * 是否开启 Quic/h3 协议（iOS 微信目前使用 gQUIC-Q43；Android 微信在 v8.0.54 前使用 gQUIC-Q43，v8.0.54 开始使用 IETF QUIC，即 h3 协议；PC微信使用 IETF QUIC，即 h3 协议）
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "2.10.4",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
    enableQuic?: boolean | null;
    /**
     * 需要基础库： `3.4.1`
     *
     * 使用高性能模式，暂仅支持 Android，默认关闭。该模式下有更优的网络性能表现。
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "3.4.1",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
    useHighPerformanceMode?: boolean | null;
};
export type OnProgressUpdateResult = {
    /**
     * 上传进度百分比
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
     */
    progress: number,
    /**
     * 已经上传的数据长度，单位 Bytes
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
     */
    totalBytesSent: number,
    /**
     * 预期需要上传的数据总长度，单位 Bytes
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
     */
    totalBytesExpectedToSend: number
};

export type UploadFileProgressUpdateCallback = (result: OnProgressUpdateResult) => void
export interface UploadTask {
    /**
      * 中断上传任务。
      * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/request/network-file.html#uploadfile
      * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/upload-file.html
      * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/upload-file.html
      * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
      * @example
       ```typescript
        var uploadTask = uni.uploadFile({
          url: 'http://192.168.12.106:8080/uploadFile', //仅为示例，并非真实接口地址。
          complete: ()=> {}
        });
        uploadTask.abort();
       ```
      */
    abort(): void,
    /**
      * 监听上传进度变化。
      * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/request/network-file.html#uploadfile
      * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/upload-file.html
      * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/upload-file.html
      * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
      * @example
       ```typescript
        uploadTask.onProgressUpdate((res) => {
          console.log('上传进度' + res.progress);
          console.log('已经上传的数据长度' + res.totalBytesSent);
          console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
        });
       ```
      */
    onProgressUpdate(callback: UploadFileProgressUpdateCallback): void,
};

//===============================下载==================================

export type DownloadFile = (options: DownloadFileOptions) => DownloadTask;
export type DownloadFileSuccess = {
    /**
     * 临时文件路径，下载后的文件会存储到一个临时文件
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
     */
    tempFilePath: string,
    /**
     * 开发者服务器返回的 HTTP 状态码
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
     */
    statusCode: number
    /**
     * 用户文件路径 (本地路径)。传入 filePath 时会返回，跟传入的 filePath 一致
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
    filePath?: string | null;
    /**
     * 需要基础库： `2.10.4`
     *
     * 网络请求过程中一些调试信息，[查看详细说明](https://developers.weixin.qq.com/miniprogram/dev/framework/performance/network.html)
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "2.10.4",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
    profile?: DownloadFileSuccessProfile | null;
};
export type DownloadFileSuccessCallback = (result: DownloadFileSuccess) => void;
/**
 * 下载文件失败的错误回调参数
 * @uniPlatform {
 *   "mp": {
 *     "weixin": {
 *       "hostVer": "√",
 *       "uniVer": "√",
 *       "unixVer": "4.41"
 *     },
 *     "alipay": {
 *       "hostVer": "-",
 *       "uniVer": "-",
 *       "unixVer": "-"
 *     },
 *     "baidu": {
 *       "hostVer": "-",
 *       "uniVer": "-",
 *       "unixVer": "-"
 *     },
 *     "toutiao": {
 *       "hostVer": "-",
 *       "uniVer": "-",
 *       "unixVer": "-"
 *     },
 *     "lark": {
 *       "hostVer": "-",
 *       "uniVer": "-",
 *       "unixVer": "-"
 *     },
 *     "qq": {
 *       "hostVer": "-",
 *       "uniVer": "-",
 *       "unixVer": "-"
 *     },
 *     "kuaishou": {
 *       "hostVer": "-",
 *       "uniVer": "-",
 *       "unixVer": "-"
 *     },
 *     "jd": {
 *       "hostVer": "-",
 *       "uniVer": "-",
 *       "unixVer": "-"
 *     }
 *   }
 * }
 */
export interface DownloadFileFail extends IUniError {
    errCode: RequestErrorCode
};
export type DownloadFileFailCallback = (result: DownloadFileFail) => void;
export type DownloadFileComplete = any;
export type DownloadFileCompleteCallback = (result: DownloadFileComplete) => void;
export type DownloadFileOptions = {
    /**
     * 下载资源的 url
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
     */
    url: string,
    /**
     * HTTP 请求 Header，header 中不能设置 Referer
     * @defaultValue null
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  }
      }
     */
    header?: UTSJSONObject | null,
    /**
     * 指定文件下载路径
     * 支持相对路径与绝对路径，例：
     * `/imgs/pic.png`、`/storage/emulated/0/Android/data/io.dcloud.HBuilder/apps/HBuilder/temp/imgs/pic.png`
     * 并且支持指定下载目录，例：
     * `/imgs/`
     * 支持uni.env的平台兼容性：Android自3.9开始支持uni.env，iOS自4.13开始支持uni.env
     * @defaultValue null
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
     */
    filePath?: string | null,
    /**
     * 超时时间，单位 ms
     * @defaultValue 120000
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
     */
    timeout?: number | null,
    /**
     * 下载成功后以 tempFilePath 的形式传给页面，res = {tempFilePath: '文件的临时路径'}
     * @defaultValue null
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
    success?: DownloadFileSuccessCallback | null,
    /**
     * 失败的回调函数
     * @defaultValue null
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
    fail?: DownloadFileFailCallback | null,
    /**
     * 结束的回调函数（调用成功、失败都会执行）
     * @defaultValue null
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
    complete?: DownloadFileCompleteCallback | null
    /**
     * 需要基础库： `2.10.4`
     *
     * 是否开启 http2
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "2.10.4",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
    enableHttp2?: boolean | null;
    /**
     * 是否开启 profile，默认开启。开启后可在接口回调的 res.profile 中查看性能调试信息。
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
    enableProfile?: boolean | null;
    /**
     * 需要基础库： `2.10.4`
     *
     * 是否开启 Quic/h3 协议（iOS 微信目前使用 gQUIC-Q43；Android 微信在 v8.0.54 前使用 gQUIC-Q43，v8.0.54 开始使用 IETF QUIC，即 h3 协议；PC微信使用 IETF QUIC，即 h3 协议）
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "2.10.4",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
    enableQuic?: boolean | null;
    /**
     * 需要基础库： `3.4.1`
     *
     * 使用高性能模式，暂仅支持 Android，默认关闭。该模式下有更优的网络性能表现。
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "3.4.1",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
    useHighPerformanceMode?: boolean | null;
};
export type OnProgressDownloadResult = {
    /**
     * 下载进度百分比
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
     */
    progress: number,
    /**
     * 已经下载的数据长度，单位 Bytes
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
     */
    totalBytesWritten: number,
    /**
     * 预期需要下载的数据总长度，单位 Bytes
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "5.0",
            "uniVer": "√",
            "uniUtsPlugin": "3.91",
            "unixVer": "3.91"
          },
          "ios": {
            "osVer": "12.0",
            "uniVer": "√",
            "uniUtsPlugin": "4.11",
            "unixVer": "4.11",
            "unixUtsPlugin": "4.11"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
        "web": {
          "uniVer": "√",
          "unixVer": "4.0"
        }
      }
     */
    totalBytesExpectedToWrite: number
};
export type DownloadFileProgressUpdateCallback = (result: OnProgressDownloadResult) => void;
export interface DownloadTask {
    /**
      * 中断下载任务
      * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/request/network-file.html#downloadfile
      * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/download-file.html
      * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/download-file.html
      * @uniPlatform
        {
          "app": {
            "android": {
              "osVer": "5.0",
              "uniVer": "√",
              "uniUtsPlugin": "3.91",
              "unixVer": "3.91"
            },
            "ios": {
              "osVer": "12.0",
              "uniVer": "√",
              "uniUtsPlugin": "4.11",
              "unixVer": "4.11",
              "unixUtsPlugin": "4.11"
            },
            "harmony": {
              "osVer": "3.0",
              "uniVer": "4.23",
              "unixVer": "4.61"
            }
          },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
          "web": {
            "uniVer": "√",
            "unixVer": "4.0"
          }
        }
      * @example
       ```typescript
        var downloadTask = uni.downloadFile({
          url: 'https://www.example.com/file/test', //仅为示例，并非真实接口地址。
          complete: ()=> {}
        });
        downloadTask.abort();
       ```
      */
    abort(): void,
    /**
      * 监听下载进度变化。
      * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/request/network-file.html#downloadfile
      * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/download-file.html
      * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/download-file.html
      * @uniPlatform
        {
          "app": {
            "android": {
              "osVer": "5.0",
              "uniVer": "√",
              "uniUtsPlugin": "3.91",
              "unixVer": "3.91"
            },
            "ios": {
              "osVer": "12.0",
              "uniVer": "√",
              "uniUtsPlugin": "4.11",
              "unixVer": "4.11",
              "unixUtsPlugin": "4.11"
            },
            "harmony": {
              "osVer": "3.0",
              "uniVer": "4.23",
              "unixVer": "4.61"
            }
          },
      *  "mp": {
      *    "weixin": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "4.41"
      *    },
      *    "alipay": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "baidu": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "toutiao": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "lark": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "qq": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "kuaishou": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    },
      *    "jd": {
      *        "hostVer": "√",
      *        "uniVer": "√",
      *        "unixVer": "x"
      *    }
      *  },
          "web": {
            "uniVer": "√",
            "unixVer": "4.0"
          }
        }
      * @example
       ```typescript
        downloadTask.onProgressUpdate((res) => {
          console.log('下载进度' + res.progress);
          console.log('已经下载的数据长度' + res.totalBytesWritten);
          console.log('预期需要下载的数据总长度' + res.totalBytesExpectedToWrite);
        });
       ```
      */
    onProgressUpdate(callback: DownloadFileProgressUpdateCallback): void,
};

export type ConfigMTLS = (options: ConfigMTLSOptions) => void;
export type Certificate = {
    /**
     * 对应请求的域名（注意：不要协议部分）
     */
    host: string,
    /**
     * 客户端证书（服务器端需要验证客户端证书时需要配置此项，格式要求请参考下面的证书格式说明，注意 iOS 平台客户端证书只支持 .p12 类型的证书。HarmonyOS Next 上是证书路径 [文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/js-apis-http-V5#clientcert11)）
     */
    client?: string | null,
    /**
     * 客户端证书对应的密码（客户端证书存在时必须配置此项。HarmonyOS Next 上是证书秘钥的密码 [文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/js-apis-http-V5#clientcert11)）
     */
    clientPassword?: string | null,
    /**
     * 证书秘钥的路径，只支持 HarmonyOS Next
     *
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "x",
            "uniVer": "x",
            "unixVer": "x"
          },
          "ios": {
            "osVer": "x",
            "uniVer": "x",
            "unixVer": "x"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.23",
            "unixVer": "4.61"
          }
        },
        "web": {
          "uniVer": "x",
          "unixVer": "x"
        }
      }
     */
    keyPath?: string | null,
    /**
     * 服务器端证书（客户端需要对服务器端证书做校验时需要配置此项，格式要求请参考下面的证书格式说明，注意 iOS 平台服务器端证书只支持 .cer 类型的证书。HarmonyOS Next 不支持）
     *
     * @uniPlatform {
      {
        "app": {
          "android": {
            "osVer": "4.4",
            "uniVer": "3.2.7",
            "unixVer": "x"
          },
          "ios": {
            "osVer": "10.0",
            "uniVer": "3.2.7",
            "unixVer": "x"
          },
          "harmony": {
            "osVer": "x",
            "uniVer": "x",
            "unixVer": "x"
          }
        },
        "web": {
          "uniVer": "x",
          "unixVer": "x"
        }
      }
     */
    server?: (string[]) | null
};
export type ConfigMTLSSuccess = {
    /**
     * 成功返回 0,失败返回相应 code 码
     */
    code: number
};
export type ConfigMTLSSuccessCallback = (result: ConfigMTLSSuccess) => void;
export type ConfigMTLSFail = {
    /**
     * 成功返回 0,失败返回相应 code 码
     */
    code: number
};
export type ConfigMTLSFailCallback = (result: ConfigMTLSFail) => void;
export type ConfigMTLSComplete = any;
export type ConfigMTLSCompleteCallback = (result: ConfigMTLSComplete) => void;
export type ConfigMTLSOptions = {
    /**
     * 资源url
     */
    certificates: Certificate[],
    /**
     * 成功返回的回调函数
     */
    success?: ConfigMTLSSuccessCallback | null,
    /**
     * 失败的回调函数
     */
    fail?: ConfigMTLSFailCallback | null,
    /**
     * 结束的回调函数（调用成功、失败都会执行）
     */
    complete?: ConfigMTLSCompleteCallback | null
}

export interface Uni {
    /**
      * 发起网络请求。
      * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/request/request.html
      * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/request.html
      * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/request.html
    * @inline
    * @reified
      * @uniPlatform {
    *   "app": {
    *     "android": {
    *       "osVer": "4.4",
    *       "uniVer": "√",
    *       "uniUtsPlugin": "3.91",
    *       "unixVer": "3.91"
    *     },
    *     "ios": {
    *       "osVer": "12.0",
    *       "uniVer": "√",
    *       "uniUtsPlugin": "4.11",
    *       "unixVer": "4.11",
    *       "unixUtsPlugin": "4.11"
    *     },
    *     "harmony": {
    *       "osVer": "3.0",
    *       "uniVer": "4.23",
    *       "unixVer": "4.61"
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
    *       "unixVer": "x"
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
      * @example
       ```typescript
          uni.request({
                url: "http://192.168.12.106:8080/postHalo",
                dataType: "json",
                responseType: "json",
                method: "POST",
                data: {
                  platform: "ios",
                },
                // header: {
                //   "Content-Type": "application/json",
                // },
                timeout: 6000,
                sslVerify: false,
                withCredentials: false,
                firstIpv4: false,
                success(res) {
                  console.log("success :", res.data);
                },
                fail(e) {
                  console.log(e);
                },
                complete(res) {
                  console.log("complete :", res);
                },
              });
       ```
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.html
     */
    request<T>(param: RequestOptions<T>): RequestTask;
    /**
      * 将本地资源上传到开发者服务器。
      * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/request/network-file.html#uploadfile
      * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/upload-file.html
      * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/upload-file.html
      * @uniPlatform {
      *   "app": {
      *     "android": {
      *       "osVer": "4.4",
      *       "uniVer": "√",
      *       "uniUtsPlugin": "3.91",
      *       "unixVer": "3.91"
      *     },
      *     "ios": {
      *       "osVer": "12.0",
      *       "uniVer": "√",
      *       "uniUtsPlugin": "x",
      *       "unixVer": "4.11",
      *       "unixUtsPlugin": "4.11"
      *     },
      *     "harmony": {
      *       "osVer": "3.0",
      *       "uniVer": "4.23",
      *       "unixVer": "4.61"
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
      *       "unixVer": "x"
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
      * @example
       ```typescript
        uni.uploadFile({
                url: 'http://192.168.12.106:8080/uploadFile', //仅为示例，非真实的接口地址
                filePath: "/static/logo.png",
                name: 'file',
                formData: {
                  'user': 'test'
                },
                success: (uploadFileRes) => {
                  console.log(uploadFileRes.data);
                }
              });
       ```
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/UploadTask.html
     */
    uploadFile(options: UploadFileOptions): UploadTask;
    /**
      * 下载文件资源到本地，客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径。
      * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/request/network-file.html#downloadfile
      * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/download-file.html
      * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/download-file.html
      * @uniPlatform {
      *   "app": {
      *     "android": {
      *       "osVer": "4.4",
      *       "uniVer": "√",
      *       "uniUtsPlugin": "3.91",
      *       "unixVer": "3.91"
      *     },
      *     "ios": {
      *       "osVer": "12.0",
      *       "uniVer": "√",
      *       "uniUtsPlugin": "x",
      *       "unixVer": "4.11",
      *       "unixUtsPlugin": "4.11"
      *     },
      *     "harmony": {
      *       "osVer": "3.0",
      *       "uniVer": "4.23",
      *       "unixVer": "4.61"
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
      *       "unixVer": "x"
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
      * @example
       ```typescript
        uni.downloadFile({
                  url: "http://192.168.12.106:8080/downloadfile",
                  success(e) {
                    console.log("success111 :", e);
                  }
                });
       ```
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.html
     */
    downloadFile(options: DownloadFileOptions): DownloadTask;
    /**
     * 配置自签名证书
     *
     * @tutorial https://uniapp.dcloud.net.cn/api/request/request.html#configmtls
     * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/request/request.html#configmtls
     *
     * @uniPlatform
      {
        "app": {
          "android": {
            "osVer": "4.4",
            "uniVer": "3.2.7",
            "uniUtsPlugin": "x",
            "unixVer": "x"
          },
          "ios": {
            "osVer": "10.0",
            "uniVer": "3.2.7",
            "uniUtsPlugin": "x",
            "unixVer": "x",
            "unixUtsPlugin": "x"
          },
          "harmony": {
            "osVer": "3.0",
            "uniVer": "4.31",
            "unixVer": "4.61"
          }
        },
        "web": {
          "uniVer": "x",
          "unixVer": "x"
        }
      }
     */
    configMTLS(options: ConfigMTLSOptions): void;
}

/**
 * 需要基础库： `2.10.4`
 *
 * 网络请求过程中一些调试信息，[查看详细说明](https://developers.weixin.qq.com/miniprogram/dev/framework/performance/network.html)
 *
 * @uniPlatform {
 *   "mp": {
 *     "weixin": {
 *       "hostVer": "2.10.4",
 *       "uniVer": "√",
 *       "unixVer": "4.41"
 *     },
 *     "alipay": {
 *       "hostVer": "-",
 *       "uniVer": "-",
 *       "unixVer": "-"
 *     },
 *     "baidu": {
 *       "hostVer": "-",
 *       "uniVer": "-",
 *       "unixVer": "-"
 *     },
 *     "toutiao": {
 *       "hostVer": "-",
 *       "uniVer": "-",
 *       "unixVer": "-"
 *     },
 *     "lark": {
 *       "hostVer": "-",
 *       "uniVer": "-",
 *       "unixVer": "-"
 *     },
 *     "qq": {
 *       "hostVer": "-",
 *       "uniVer": "-",
 *       "unixVer": "-"
 *     },
 *     "kuaishou": {
 *       "hostVer": "-",
 *       "uniVer": "-",
 *       "unixVer": "-"
 *     },
 *     "jd": {
 *       "hostVer": "-",
 *       "uniVer": "-",
 *       "unixVer": "-"
 *     }
 *   }
 * }
 */
export type DownloadFileSuccessProfile = {
    /**
    * SSL建立完成的时间,如果不是安全连接,则值为 0
    * 
    * @uniPlatform {
    *   "mp": {
    *     "weixin": {
    *       "hostVer": "√",
    *       "uniVer": "√",
    *       "unixVer": "4.41"
    *     },
    *     "alipay": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "baidu": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "toutiao": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "lark": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "qq": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "kuaishou": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "jd": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     }
    *   }
    * }
    */
    SSLconnectionEnd?: number | null;
    /**
    * SSL建立连接的时间,如果不是安全连接,则值为 0
    * 
    * @uniPlatform {
    *   "mp": {
    *     "weixin": {
    *       "hostVer": "√",
    *       "uniVer": "√",
    *       "unixVer": "4.41"
    *     },
    *     "alipay": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "baidu": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "toutiao": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "lark": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "qq": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "kuaishou": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "jd": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     }
    *   }
    * }
    */
    SSLconnectionStart?: number | null;
    /**
    * HTTP（TCP） 完成建立连接的时间（完成握手），如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接完成的时间。注意这里握手结束，包括安全连接建立完成、SOCKS 授权通过
    * 
    * @uniPlatform {
    *   "mp": {
    *     "weixin": {
    *       "hostVer": "√",
    *       "uniVer": "√",
    *       "unixVer": "4.41"
    *     },
    *     "alipay": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "baidu": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "toutiao": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "lark": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "qq": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "kuaishou": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "jd": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     }
    *   }
    * }
    */
    connectEnd?: number | null;
    /**
    * HTTP（TCP） 开始建立连接的时间，如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接开始的时间
    * 
    * @uniPlatform {
    *   "mp": {
    *     "weixin": {
    *       "hostVer": "√",
    *       "uniVer": "√",
    *       "unixVer": "4.41"
    *     },
    *     "alipay": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "baidu": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "toutiao": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "lark": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "qq": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "kuaishou": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "jd": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     }
    *   }
    * }
    */
    connectStart?: number | null;
    /**
    * DNS 域名查询完成的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等
    * 
    * @uniPlatform {
    *   "mp": {
    *     "weixin": {
    *       "hostVer": "√",
    *       "uniVer": "√",
    *       "unixVer": "4.41"
    *     },
    *     "alipay": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "baidu": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "toutiao": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "lark": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "qq": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "kuaishou": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "jd": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     }
    *   }
    * }
    */
    domainLookUpEnd?: number | null;
    /**
    * DNS 域名查询开始的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等
    * 
    * @uniPlatform {
    *   "mp": {
    *     "weixin": {
    *       "hostVer": "√",
    *       "uniVer": "√",
    *       "unixVer": "4.41"
    *     },
    *     "alipay": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "baidu": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "toutiao": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "lark": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "qq": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "kuaishou": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "jd": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     }
    *   }
    * }
    */
    domainLookUpStart?: number | null;
    /**
    * 评估当前网络下载的kbps
    * 
    * @uniPlatform {
    *   "mp": {
    *     "weixin": {
    *       "hostVer": "√",
    *       "uniVer": "√",
    *       "unixVer": "4.41"
    *     },
    *     "alipay": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "baidu": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "toutiao": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "lark": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "qq": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "kuaishou": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "jd": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     }
    *   }
    * }
    */
    downstreamThroughputKbpsEstimate?: number | null;
    /**
    * 评估的网络状态 unknown, offline, slow 2g, 2g, 3g, 4g, last/0, 1, 2, 3, 4, 5, 6
    * 
    * @uniPlatform {
    *   "mp": {
    *     "weixin": {
    *       "hostVer": "√",
    *       "uniVer": "√",
    *       "unixVer": "4.41"
    *     },
    *     "alipay": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "baidu": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "toutiao": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "lark": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "qq": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "kuaishou": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "jd": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     }
    *   }
    * }
    */
    estimate_nettype?: number | null;
    /**
    * 组件准备好使用 HTTP 请求抓取资源的时间，这发生在检查本地缓存之前
    * 
    * @uniPlatform {
    *   "mp": {
    *     "weixin": {
    *       "hostVer": "√",
    *       "uniVer": "√",
    *       "unixVer": "4.41"
    *     },
    *     "alipay": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "baidu": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "toutiao": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "lark": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "qq": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "kuaishou": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "jd": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     }
    *   }
    * }
    */
    fetchStart?: number | null;
    /**
    * 协议层根据多个请求评估当前网络的 rtt（仅供参考）
    * 
    * @uniPlatform {
    *   "mp": {
    *     "weixin": {
    *       "hostVer": "√",
    *       "uniVer": "√",
    *       "unixVer": "4.41"
    *     },
    *     "alipay": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "baidu": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "toutiao": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "lark": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "qq": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "kuaishou": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "jd": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     }
    *   }
    * }
    */
    httpRttEstimate?: number | null;
    /**
    * 当前请求的IP
    * 
    * @uniPlatform {
    *   "mp": {
    *     "weixin": {
    *       "hostVer": "√",
    *       "uniVer": "√",
    *       "unixVer": "4.41"
    *     },
    *     "alipay": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "baidu": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "toutiao": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "lark": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "qq": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "kuaishou": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "jd": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     }
    *   }
    * }
    */
    peerIP?: string | null;
    /**
    * 当前请求的端口
    * 
    * @uniPlatform {
    *   "mp": {
    *     "weixin": {
    *       "hostVer": "√",
    *       "uniVer": "√",
    *       "unixVer": "4.41"
    *     },
    *     "alipay": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "baidu": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "toutiao": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "lark": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "qq": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "kuaishou": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "jd": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     }
    *   }
    * }
    */
    port?: number | null;
    /**
    * 使用协议类型，有效值：http1.1, h2, quic, unknown
    * 
    * @uniPlatform {
    *   "mp": {
    *     "weixin": {
    *       "hostVer": "√",
    *       "uniVer": "√",
    *       "unixVer": "4.41"
    *     },
    *     "alipay": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "baidu": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "toutiao": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "lark": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "qq": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "kuaishou": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "jd": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     }
    *   }
    * }
    */
    protocol?: string | null;
    /**
    * 收到字节数
    * 
    * @uniPlatform {
    *   "mp": {
    *     "weixin": {
    *       "hostVer": "√",
    *       "uniVer": "√",
    *       "unixVer": "4.41"
    *     },
    *     "alipay": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "baidu": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "toutiao": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "lark": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "qq": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "kuaishou": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "jd": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     }
    *   }
    * }
    */
    receivedBytedCount?: number | null;
    /**
    * 最后一个 HTTP 重定向完成时的时间。有跳转且是同域名内部的重定向才算，否则值为 0
    * 
    * @uniPlatform {
    *   "mp": {
    *     "weixin": {
    *       "hostVer": "√",
    *       "uniVer": "√",
    *       "unixVer": "4.41"
    *     },
    *     "alipay": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "baidu": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "toutiao": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "lark": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "qq": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "kuaishou": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "jd": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     }
    *   }
    * }
    */
    redirectEnd?: number | null;
    /**
    * 第一个 HTTP 重定向发生时的时间。有跳转且是同域名内的重定向才算，否则值为 0
    * 
    * @uniPlatform {
    *   "mp": {
    *     "weixin": {
    *       "hostVer": "√",
    *       "uniVer": "√",
    *       "unixVer": "4.41"
    *     },
    *     "alipay": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "baidu": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "toutiao": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "lark": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "qq": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "kuaishou": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "jd": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     }
    *   }
    * }
    */
    redirectStart?: number | null;
    /**
    * HTTP请求读取真实文档结束的时间
    * 
    * @uniPlatform {
    *   "mp": {
    *     "weixin": {
    *       "hostVer": "√",
    *       "uniVer": "√",
    *       "unixVer": "4.41"
    *     },
    *     "alipay": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "baidu": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "toutiao": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "lark": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "qq": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "kuaishou": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "jd": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     }
    *   }
    * }
    */
    requestEnd?: number | null;
    /**
    * HTTP请求读取真实文档开始的时间（完成建立连接），包括从本地读取缓存。连接错误重连时，这里显示的也是新建立连接的时间
    * 
    * @uniPlatform {
    *   "mp": {
    *     "weixin": {
    *       "hostVer": "√",
    *       "uniVer": "√",
    *       "unixVer": "4.41"
    *     },
    *     "alipay": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "baidu": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "toutiao": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "lark": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "qq": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "kuaishou": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "jd": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     }
    *   }
    * }
    */
    requestStart?: number | null;
    /**
    * HTTP 响应全部接收完成的时间（获取到最后一个字节），包括从本地读取缓存
    * 
    * @uniPlatform {
    *   "mp": {
    *     "weixin": {
    *       "hostVer": "√",
    *       "uniVer": "√",
    *       "unixVer": "4.41"
    *     },
    *     "alipay": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "baidu": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "toutiao": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "lark": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "qq": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "kuaishou": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "jd": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     }
    *   }
    * }
    */
    responseEnd?: number | null;
    /**
    * HTTP 开始接收响应的时间（获取到第一个字节），包括从本地读取缓存
    * 
    * @uniPlatform {
    *   "mp": {
    *     "weixin": {
    *       "hostVer": "√",
    *       "uniVer": "√",
    *       "unixVer": "4.41"
    *     },
    *     "alipay": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "baidu": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "toutiao": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "lark": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "qq": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "kuaishou": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "jd": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     }
    *   }
    * }
    */
    responseStart?: number | null;
    /**
    * 当次请求连接过程中实时 rtt
    * 
    * @uniPlatform {
    *   "mp": {
    *     "weixin": {
    *       "hostVer": "√",
    *       "uniVer": "√",
    *       "unixVer": "4.41"
    *     },
    *     "alipay": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "baidu": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "toutiao": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "lark": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "qq": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "kuaishou": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "jd": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     }
    *   }
    * }
    */
    rtt?: number | null;
    /**
    * 发送的字节数
    * 
    * @uniPlatform {
    *   "mp": {
    *     "weixin": {
    *       "hostVer": "√",
    *       "uniVer": "√",
    *       "unixVer": "4.41"
    *     },
    *     "alipay": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "baidu": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "toutiao": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "lark": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "qq": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "kuaishou": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "jd": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     }
    *   }
    * }
    */
    sendBytesCount?: number | null;
    /**
    * 是否复用连接
    * 
    * @uniPlatform {
    *   "mp": {
    *     "weixin": {
    *       "hostVer": "√",
    *       "uniVer": "√",
    *       "unixVer": "4.41"
    *     },
    *     "alipay": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "baidu": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "toutiao": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "lark": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "qq": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "kuaishou": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "jd": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     }
    *   }
    * }
    */
    socketReused?: boolean | null;
    /**
    * 当前网络的实际下载kbps
    * 
    * @uniPlatform {
    *   "mp": {
    *     "weixin": {
    *       "hostVer": "√",
    *       "uniVer": "√",
    *       "unixVer": "4.41"
    *     },
    *     "alipay": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "baidu": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "toutiao": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "lark": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "qq": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "kuaishou": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "jd": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     }
    *   }
    * }
    */
    throughputKbps?: number | null;
    /**
    * 传输层根据多个请求评估的当前网络的 rtt（仅供参考）
    * 
    * @uniPlatform {
    *   "mp": {
    *     "weixin": {
    *       "hostVer": "√",
    *       "uniVer": "√",
    *       "unixVer": "4.41"
    *     },
    *     "alipay": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "baidu": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "toutiao": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "lark": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "qq": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "kuaishou": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "jd": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     }
    *   }
    * }
    */
    transportRttEstimate?: number | null;
    /**
    * 是否走到了高性能模式。基础库 v3.3.4 起支持。
    * 
    * @uniPlatform {
    *   "mp": {
    *     "weixin": {
    *       "hostVer": "√",
    *       "uniVer": "√",
    *       "unixVer": "4.41"
    *     },
    *     "alipay": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "baidu": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "toutiao": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "lark": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "qq": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "kuaishou": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     },
    *     "jd": {
    *       "hostVer": "-",
    *       "uniVer": "-",
    *       "unixVer": "-"
    *     }
    *   }
    * }
    */
    usingHighPerformanceMode?: boolean | null
};
