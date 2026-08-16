export type UrlCallbackOptions = {
	/**
	 * 透传到服务器端的userId
	 */
	userId ?: string | null,
	/**
	 * 透传到服务器端的extra，不推荐设置过于复杂的字符串
	 */
	extra ?: string | null
}

export type CreateInterstitialAdOptions = {
	/**
	 * 广告位 id
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
	adpid : string,
    /**
     * 广告单元 id
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
    adUnitId?: string | null;
}

export type CreateRewardedVideoAdOptions = {
	/**
	 * 广告位 id
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
	adpid : string,
	/**
	 * 服务器回调透传参数
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
	urlCallback ?: UrlCallbackOptions | null
    /**
     * 广告单元 id
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
    adUnitId?: string | null;
    /**
     * 需要基础库： `3.7.1`
     *
     * 是否禁用分享页，默认为false
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "3.7.1",
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
    disableFallbackSharePage?: boolean | null;
    /**
     * 需要基础库： `2.8.0`
     *
     * 是否启用多例模式，默认为false
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "2.8.0",
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
    multiton?: boolean | null;
}

export interface RewardedVideoAd extends IVideoAd,IRewardedVideoAd{

}

export interface InterstitialAd {
	/**
	 * 广告加载成功之后，调用此方法展示广告
	 * @uniPlatform {
	 *  "app": {
	 *		"android": {
	 *			"osVer": "4.4",
	 *			"uniVer": "√",
	 *			"unixVer": "4.31"
	 *		},
	 *    "ios": {
	 *      "osVer": "12.0",
	 *      "uniVer": "√",
	 *      "unixVer": "4.31"
	 *    }
	 *	},
	 *  "web": {
	 * 	 "uniVer": "x",
	 *    "unixVer": "x"
	 *  }
	 * }
	 */
	show() : Promise<any>
	/**
	 * 加载广告
	 * @uniPlatform {
	 *  "app": {
	 *		"android": {
	 *			"osVer": "4.4",
	 *			"uniVer": "√",
	 *			"unixVer": "4.31"
	 *		},
	 *    "ios": {
	 *      "osVer": "12.0",
	 *      "uniVer": "√",
	 *      "unixVer": "4.31"
	 *    }
	 *	},
	 *  "web": {
	 * 	 "uniVer": "x",
	 *    "unixVer": "x"
	 *  }
	 * }
	 */
	load() : Promise<any>
	/**
	 * 销毁广告
	 * @uniPlatform {
	 *  "app": {
	 *		"android": {
	 *			"osVer": "4.4",
	 *			"uniVer": "√",
	 *			"unixVer": "4.31"
	 *		},
	 *    "ios": {
	 *      "osVer": "12.0",
	 *      "uniVer": "√",
	 *      "unixVer": "4.31"
	 *    }
	 *	},
	 *  "web": {
	 * 	 "uniVer": "x",
	 *    "unixVer": "x"
	 *  }
	 * }
	 */
	destroy() : void
	/**
	 * 绑定广告 load 事件的监听器
	 * @uniPlatform {
	 *  "app": {
	 *		"android": {
	 *			"osVer": "4.4",
	 *			"uniVer": "√",
	 *			"unixVer": "4.31"
	 *		},
	 *    "ios": {
	 *      "osVer": "12.0",
	 *      "uniVer": "√",
	 *      "unixVer": "4.31"
	 *    }
	 *	},
	 *  "web": {
	 * 	 "uniVer": "x",
	 *    "unixVer": "x"
	 *  }
	 * }
	 */
	onLoad(callback : AdCallBackEvent) : void
	/**
	 * 解除绑定 load 事件的监听器
	 * @uniPlatform {
	 *  "app": {
	 *		"android": {
	 *			"osVer": "4.4",
	 *			"uniVer": "√",
	 *			"unixVer": "4.31"
	 *		},
	 *    "ios": {
	 *      "osVer": "12.0",
	 *      "uniVer": "√",
	 *      "unixVer": "4.31"
	 *    }
	 *	},
	 *  "web": {
	 * 	 "uniVer": "x",
	 *    "unixVer": "x"
	 *  }
	 * }
	 */
	offLoad(callback : AdCallBackEvent) : void
	/**
	 * 绑定 error 事件的监听器
	 * @uniPlatform {
	 *  "app": {
	 *		"android": {
	 *			"osVer": "4.4",
	 *			"uniVer": "√",
	 *			"unixVer": "4.31"
	 *		},
	 *    "ios": {
	 *      "osVer": "12.0",
	 *      "uniVer": "√",
	 *      "unixVer": "4.31"
	 *    }
	 *	},
	 *  "web": {
	 * 	 "uniVer": "x",
	 *    "unixVer": "x"
	 *  }
	 * }
	 */
	onError(callback : AdErrorCallBackEvent) : void
	/**
	 * 解除绑定 error 事件的监听器
	 * @uniPlatform {
	 *  "app": {
	 *		"android": {
	 *			"osVer": "4.4",
	 *			"uniVer": "√",
	 *			"unixVer": "4.31"
	 *		},
	 *    "ios": {
	 *      "osVer": "12.0",
	 *      "uniVer": "√",
	 *      "unixVer": "4.31"
	 *    }
	 *	},
	 *  "web": {
	 * 	 "uniVer": "x",
	 *    "unixVer": "x"
	 *  }
	 * }
	 */
	offError(callback : AdErrorCallBackEvent) : void
	/**
	 * 绑定 close 事件的监听器
	 * @uniPlatform {
	 *  "app": {
	 *		"android": {
	 *			"osVer": "4.4",
	 *			"uniVer": "√",
	 *			"unixVer": "4.31"
	 *		},
	 *    "ios": {
	 *      "osVer": "12.0",
	 *      "uniVer": "√",
	 *      "unixVer": "4.31"
	 *    }
	 *	},
	 *  "web": {
	 * 	 "uniVer": "x",
	 *    "unixVer": "x"
	 *  }
	 * }
	 */
	onClose(callback : AdCallBackEvent) : void
	/**
	 * 解除绑定 close 事件的监听器
	 * @uniPlatform {
	 *  "app": {
	 *		"android": {
	 *			"osVer": "4.4",
	 *			"uniVer": "√",
	 *			"unixVer": "4.31"
	 *		},
	 *    "ios": {
	 *      "osVer": "12.0",
	 *      "uniVer": "√",
	 *      "unixVer": "4.31"
	 *    }
	 *	},
	 *  "web": {
	 * 	 "uniVer": "x",
	 *    "unixVer": "x"
	 *  }
	 * }
	 */
	offClose(callback : AdCallBackEvent) : void
	/**
	 * 绑定广告可点击屏幕区域事件的监听器
	 * @uniPlatform {
	 *  "app": {
	 *		"android": {
	 *			"osVer": "4.4",
	 *			"uniVer": "√",
	 *			"unixVer": "4.31"
	 *		},
	 *    "ios": {
	 *      "osVer": "12.0",
	 *      "uniVer": "√",
	 *      "unixVer": "4.31"
	 *    }
	 *	},
	 *  "web": {
	 * 	 "uniVer": "x",
	 *    "unixVer": "x"
	 *  }
	 * }
	 */
	onAdClicked(callback : AdCallBackEvent) : void;
}

export interface IVideoAd {
	/**
	 * 广告加载成功之后，调用此方法展示广告
	 * @uniPlatform {
	 *  "app": {
	 *		"android": {
	 *			"osVer": "4.4",
	 *			"uniVer": "√",
	 *			"unixVer": "4.0+"
	 *		},
	 *    "ios": {
	 *      "osVer": "12.0",
	 *      "uniVer": "√",
	 *      "unixVer": "4.22"
	 *    }
	 *	},
	 *  "web": {
	 * 	 "uniVer": "x",
	 *    "unixVer": "x"
	 *  }
	 * }
	 */
	show() : Promise<any>
	/**
	 * 加载广告
	 * @uniPlatform {
	 *  "app": {
	 *		"android": {
	 *			"osVer": "4.4",
	 *			"uniVer": "√",
	 *			"unixVer": "4.0+"
	 *		},
	 *    "ios": {
	 *      "osVer": "12.0",
	 *      "uniVer": "√",
	 *      "unixVer": "4.22"
	 *    }
	 *	},
	 *  "web": {
	 * 	 "uniVer": "x",
	 *    "unixVer": "x"
	 *  }
	 * }
	 */
	load() : Promise<any>
	/**
	 * 销毁广告
	 * @uniPlatform {
	 *  "app": {
	 *		"android": {
	 *			"osVer": "4.4",
	 *			"uniVer": "√",
	 *			"unixVer": "4.0+"
	 *		},
	 *    "ios": {
	 *      "osVer": "12.0",
	 *      "uniVer": "√",
	 *      "unixVer": "4.22"
	 *    }
	 *	},
	 *  "web": {
	 * 	 "uniVer": "x",
	 *    "unixVer": "x"
	 *  }
	 * }
	 */
	destroy() : void
	/**
	 * 绑定广告 load 事件的监听器
	 * @uniPlatform {
	 *  "app": {
	 *		"android": {
	 *			"osVer": "4.4",
	 *			"uniVer": "√",
	 *			"unixVer": "4.0+"
	 *		},
	 *    "ios": {
	 *      "osVer": "12.0",
	 *      "uniVer": "√",
	 *      "unixVer": "4.22"
	 *    }
	 *	},
	 *  "web": {
	 * 	 "uniVer": "x",
	 *    "unixVer": "x"
	 *  }
	 * }
	 */
	onLoad(callback : AdCallBackEvent) : void
	/**
	 * 解除绑定 load 事件的监听器
	 * @uniPlatform {
	 *  "app": {
	 *		"android": {
	 *			"osVer": "4.4",
	 *			"uniVer": "√",
	 *			"unixVer": "4.0+"
	 *		},
	 *    "ios": {
	 *      "osVer": "12.0",
	 *      "uniVer": "√",
	 *      "unixVer": "4.22"
	 *    }
	 *	},
	 *  "web": {
	 * 	 "uniVer": "x",
	 *    "unixVer": "x"
	 *  }
	 * }
	 */
	offLoad(callback : AdCallBackEvent) : void
	/**
	 * 绑定 error 事件的监听器
	 * @uniPlatform {
	 *  "app": {
	 *		"android": {
	 *			"osVer": "4.4",
	 *			"uniVer": "√",
	 *			"unixVer": "4.0+"
	 *		},
	 *    "ios": {
	 *      "osVer": "12.0",
	 *      "uniVer": "√",
	 *      "unixVer": "4.22"
	 *    }
	 *	},
	 *  "web": {
	 * 	 "uniVer": "x",
	 *    "unixVer": "x"
	 *  }
	 * }
	 */
	onError(callback : AdErrorCallBackEvent) : void
	/**
	 * 解除绑定 error 事件的监听器
	 * @uniPlatform {
	 *  "app": {
	 *		"android": {
	 *			"osVer": "4.4",
	 *			"uniVer": "√",
	 *			"unixVer": "4.0+"
	 *		},
	 *    "ios": {
	 *      "osVer": "12.0",
	 *      "uniVer": "√",
	 *      "unixVer": "4.22"
	 *    }
	 *	},
	 *  "web": {
	 * 	 "uniVer": "x",
	 *    "unixVer": "x"
	 *  }
	 * }
	 */
	offError(callback : AdErrorCallBackEvent) : void
	/**
	 * 绑定 close 事件的监听器
	 * @uniPlatform {
	 *  "app": {
	 *		"android": {
	 *			"osVer": "4.4",
	 *			"uniVer": "√",
	 *			"unixVer": "4.0+"
	 *		},
	 *    "ios": {
	 *      "osVer": "12.0",
	 *      "uniVer": "√",
	 *      "unixVer": "4.22"
	 *    }
	 *	},
	 *  "web": {
	 * 	 "uniVer": "x",
	 *    "unixVer": "x"
	 *  }
	 * }
	 */
	onClose(callback : AdCloseCallBackEvent) : void
	/**
	 * 解除绑定 close 事件的监听器
	 * @uniPlatform {
	 *  "app": {
	 *		"android": {
	 *			"osVer": "4.4",
	 *			"uniVer": "√",
	 *			"unixVer": "4.0+"
	 *		},
	 *    "ios": {
	 *      "osVer": "12.0",
	 *      "uniVer": "√",
	 *      "unixVer": "4.22"
	 *    }
	 *	},
	 *  "web": {
	 * 	 "uniVer": "x",
	 *    "unixVer": "x"
	 *  }
	 * }
	 */
	offClose(callback : AdCloseCallBackEvent) : void
	/**
	 * 绑定广告可点击屏幕区域事件的监听器
	 * @uniPlatform {
	 *  "app": {
	 *		"android": {
	 *			"osVer": "4.4",
	 *			"uniVer": "√",
	 *			"unixVer": "4.0+"
	 *		},
	 *    "ios": {
	 *      "osVer": "12.0",
	 *      "uniVer": "√",
	 *      "unixVer": "4.22"
	 *    }
	 *	},
	 *  "web": {
	 * 	 "uniVer": "x",
	 *    "unixVer": "x"
	 *  }
	 * }
	 */
	onAdClicked(callback : AdCallBackEvent) : void;
}

export interface IRewardedVideoAd {
	/**
	 * 绑定 verify 事件的监听器
	 * @uniPlatform {
	 *  "app": {
	 *		"android": {
	 *			"osVer": "4.4",
	 *			"uniVer": "√",
	 *			"unixVer": "4.0+"
	 *		},
	 *    "ios": {
	 *      "osVer": "12.0",
	 *      "uniVer": "√",
	 *      "unixVer": "4.22"
	 *    }
	 *	},
	 *  "web": {
	 * 	 "uniVer": "x",
	 *    "unixVer": "x"
	 *  }
	 * }
	 */
	onVerify(callback : AdVerifyCallBackEvent) : void;
}

export type VideoAdClose = {
	/**
	 * true表示广告播放完毕或者达到发放奖励的条件
	 */
	isEnded : boolean
}

export type RewardedVideoAdClose = VideoAdClose

export type UniAdErrorCode = number;

export interface IUniAdError extends IUniError {
	/**
	 * 错误码
	 * - -5001 广告位标识adpid为空，请传入有效的adpid
	 * - -5002 无效的广告位标识adpid，请使用正确的adpid
	 * - -5003 广告位未开通广告，请在广告平台申请并确保已审核通过
	 * - -5004 无广告模块，打包时请配置要使用的广告模块
	 * - -5005 广告加载失败，请稍后重试
	 * - -5006 广告已经展示过了，请重新加载
	 * - -5007 广告不可用或已过期，请重新请求
	 * - -5008 广告不可用或已过期，请重新请求
	 * - -5009 广告类型不符，请检查后再试
	 * - -5011 打包或开通的渠道，不支持此类型广告
	 * - -5013 广告播放失败，请重新加载
	 */
	errCode : UniAdErrorCode
}

/**
 * 通用事件
 */
interface UniAdEvent {
	/**
	 * 是否冒泡
	 */
	bubbles : boolean
	/**
	 * 是否可以取消
	 */
	cancelable : boolean
	/**
	 * 事件类型
	 */
	type : string
	/**
	 * 触发事件的组件
	 */
	target ?: UniElement | null
	/**
	 * 当前组件
	 */
	currentTarget ?: UniElement | null
	/**
	 * 事件发生时的时间戳
	 */
	timeStamp : Long
	/**
	 * 阻止当前事件的进一步传播
	 */
	stopPropagation() : void
	/**
	 * 阻止当前事件的默认行为
	 */
	preventDefault() : void
}

export interface UniAdErrorEvent extends UniAdEvent {
	detail : IUniAdError
}

export type AdCallBackEvent = (result : any) => void

export type AdCloseCallBackEvent = (result : RewardedVideoAdClose) => void
export type AdErrorCallBackEvent = (result : IUniAdError) => void
export type AdVerifyCallBackEvent = (result : UTSJSONObject) => void

export type CreateRewardedVideoAd = (option : CreateRewardedVideoAdOptions) => RewardedVideoAd

export type CreateInterstitialAd = (option : CreateInterstitialAdOptions) => InterstitialAd

export interface Uni {
	/**
	 * 创建激励视频广告对象
	 * @description 创建激励视频广告对象
	 * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/create-rewarded-video-ad.html#createrewardedvideoad
	 * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/create-rewarded-video-ad.html#createrewardedvideoad
	 * @tutorial_uni_app https://uniapp.dcloud.net.cn/uni-ad/ad-rewarded-video.html#api%E8%AF%AD%E6%B3%95
	 * @uniPlatform {
     *   "app": {
     *     "android": {
     *       "osVer": "4.4",
     *       "uniVer": "√",
     *       "unixVer": "4.0+"
     *     },
     *     "ios": {
     *       "osVer": "12.0",
     *       "uniVer": "√",
     *       "unixVer": "4.22"
     *     }
     *   },
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "2.0.4",
     *       "uniVer": "x",
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
     *   },
     *   "web": {
     *     "uniVer": "x",
     *     "unixVer": "x"
     *   }
     * }
	 * @uniVueVersion 2,3
	 * @autotest {
	   generated:false
	 }
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.html
     */
	createRewardedVideoAd(option : CreateRewardedVideoAdOptions) : RewardedVideoAd;

	/**
	 * 创建插屏广告对象
	 * @description 创建插屏广告对象
	 * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/create-interstitial-ad.html
	 * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/create-interstitial-ad.html
	 * @tutorial_uni_app https://uniapp.dcloud.net.cn/uni-ad/ad-interstitial.html#api%E8%AF%AD%E6%B3%95
	 * @uniPlatform {
     *   "app": {
     *     "android": {
     *       "osVer": "4.4",
     *       "uniVer": "√",
     *       "unixVer": "4.31"
     *     },
     *     "ios": {
     *       "osVer": "12.0",
     *       "uniVer": "√",
     *       "unixVer": "4.31"
     *     }
     *   },
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "2.6.0",
     *       "uniVer": "x",
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
     *   },
     *   "web": {
     *     "uniVer": "x",
     *     "unixVer": "x"
     *   }
     * }
	 * @uniVueVersion 2,3
	 * @autotest {
	   generated:false
	 }
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.html
     */
	createInterstitialAd(option : CreateInterstitialAdOptions) : InterstitialAd;
}
