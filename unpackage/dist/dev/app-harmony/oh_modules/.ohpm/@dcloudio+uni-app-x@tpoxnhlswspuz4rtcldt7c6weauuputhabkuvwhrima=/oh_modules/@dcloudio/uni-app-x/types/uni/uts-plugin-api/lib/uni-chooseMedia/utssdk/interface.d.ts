/**
 * 错误码
 */
export type ChooseMediaErrorCode =
	/**
	 * 用户取消
	 */
	1101001 |
	/**
	 * 未获取权限
	 */
	1101005 |
	/**
	 * 图片或视频保存失败
	 */
	1101006 |
	/**
	 * 拍照或录像失败
	 */
	1101008;

/**
 * 图片或视频操作失败的错误回调
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
export interface IChooseMediaError extends IUniError {
	errCode : ChooseMediaErrorCode
};
export type ChooseMediaFileType = 'image' | 'video'
export type ChooseMediaTempFile = {
	/**
	 * 选定视频的临时文件路径
	 */
	tempFilePath : string,
	/**
	 * 文件类型
	 */
	fileType : ChooseMediaFileType
	/**
	 * 选定视频的数据量大小
	 */
	size : number,
	/**
	 * 视频文件的字节大小
	 * @uniPlatform {
	  *	 "app": {
	  *		"android": {
	  *			"osVer": "5.0",
	  *			"uniVer": "x",
	  *			"unixVer": "4.61"
	  *		},
	  *		"ios": {
	  *			"osVer": "12.0",
	  *			"uniVer": "x",
	  *			"unixVer": "4.61"
	  *		},
	*    "harmony": {
	*      "osVer": "5.0.0",
	*      "uniVer": "4.61",
	*      "unixVer": "4.61"
	*    }
	  *	},
	  *	"web": {
	  *		"uniVer": "x",
	  *		"unixVer": "x"
	  *	}
	  * }
	  */
	byteSize ?: number | null,
	/**
	 * 选定视频的时间长度
	 */
	duration ?: number | null,
	/**
	 * 返回选定视频的长
	 */
	height ?: number | null,
	/**
	 * 返回选定视频的宽
	 */
	width ?: number | null,
	/**
	 * 视频缩略图临时文件路径
	 */
	thumbTempFilePath ?: string | null
}
export type ChooseMediaSuccess = {
	tempFiles : ChooseMediaTempFile[],
	type : 'image' | 'video' | 'mix'
};

export type ChooseMediaFail = IChooseMediaError;
export type ChooseMediaSuccessCallback = (callback : ChooseMediaSuccess) => void
export type ChooseMediaFailCallback = (callback : ChooseMediaFail) => void
export type ChooseMediaCompleteCallback = (callback : any) => void
export type ChooseMediaPageOrientation = /**
     * 自动
     */
	"auto" |
	/**
	 * 竖屏显示
	 */
	"portrait" |
	/**
	 * 横屏显示
	 */
	"landscape"

export type ChooseMediaOptions = {
	/**
	  * 屏幕方向。默认为page.json中的pageOrientation。
	  * @uniPlatform {
	  *	 "app": {
	  *		"android": {
	  *			"osVer": "5.0",
	  *			"uniVer": "x",
	  *			"unixVer": "4.51"
	  *		},
	  *		"ios": {
	  *			"osVer": "12.0",
	  *			"uniVer": "x",
	  *			"unixVer": "x"
	  *		},
	*    "harmony": {
	*      "osVer": "3.0",
	*      "uniVer": "4.31",
	*      "unixVer": "4.61"
	*    }
	  *	},
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
	  *	"web": {
	  *		"uniVer": "x",
	  *		"unixVer": "x"
	  *	}
	  * }
	  */
	pageOrientation ?: ChooseMediaPageOrientation | null,

	/**
	 * 最多可以选择的文件个数
	 * @defaultValue 9
	 * @uniPlatform {
	 * "app": {
		 *		"android": {
		 *			"osVer": "5.0",
		 *			"uniVer": "x",
		 *			"unixVer": "4.51"
		 *		},
		 *		"ios": {
		 *			"osVer": "12.0",
		 *			"uniVer": "x",
		 *			"unixVer": "4.51"
		 *		},
		 *    "harmony": {
		 *      "osVer": "3.0",
		 *      "uniVer": "4.31",
		 *      "unixVer": "4.61"
		 *    }
	 *	},
	 */
	count ?: number | null
	/**
	 * album 从相册选视频，camera 使用相机拍摄，合法值：'image'、'video'、'mix'
	 * @defaultValue 	['image', 'video']
	 * @uniPlatform {
	 * "app": {
		 *		"android": {
		 *			"osVer": "5.0",
		 *			"uniVer": "x",
		 *			"unixVer": "4.51"
		 *		},
		 *		"ios": {
		 *			"osVer": "12.0",
		 *			"uniVer": "x",
		 *			"unixVer": "4.51"
		 *		},
		 *    "harmony": {
		 *      "osVer": "3.0",
		 *      "uniVer": "4.31",
		 *      "unixVer": "4.61"
		 *    }
	 *	},
	 */
	mediaType ?: (string[]) | null,
	/**
	 * album 从相册选视频，camera 使用相机拍摄
	 * @defaultValue ['album', 'camera']
	 * @uniPlatform {
	 * "app": {
		 *		"android": {
		 *			"osVer": "5.0",
		 *			"uniVer": "x",
		 *			"unixVer": "4.51"
		 *		},
		 *		"ios": {
		 *			"osVer": "12.0",
		 *			"uniVer": "x",
		 *			"unixVer": "4.51"
		 *		},
		 *    "harmony": {
		 *      "osVer": "3.0",
		 *      "uniVer": "4.31",
		 *      "unixVer": "4.61"
		 *    }
	 *	},
	 */
	sourceType ?: (string[]) | null,
	/**
	 * 拍摄视频最长拍摄时间，单位秒。时间范围为 3s 至 30s 之间
	 * @defaultValue 10
	 * @uniPlatform {
	 * "app": {
		 *		"android": {
		 *			"osVer": "5.0",
		 *			"uniVer": "x",
		 *			"unixVer": "4.51"
		 *		},
		 *		"ios": {
		 *			"osVer": "12.0",
		 *			"uniVer": "x",
		 *			"unixVer": "4.51"
		 *		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.31",
   *      "unixVer": "4.61"
   *    }
	 *	},
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
   *  "web": {
   *    "uniVer": "x",
   *    "unixVer": "x"
   *  }
	 * }
	 */
	maxDuration ?: number | null,
	/**
	 * 仅在 sourceType 为 camera 时生效，使用前置或后置摄像头
	 *
	 * @uniPlatform {
	 * "app": {
		 *		"android": {
		 *			"osVer": "5.0",
		 *			"uniVer": "x",
		 *			"unixVer": "4.51"
		 *		},
		 *		"ios": {
		 *			"osVer": "12.0",
		 *			"uniVer": "x",
		 *			"unixVer": "4.51"
		 *		},
   *    "harmony": {
   *      "osVer": "3.0",
   *      "uniVer": "4.25",
   *      "unixVer": "4.61"
   *    }
	 *	},
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
	 *  "web": {
	 *    "uniVer": "x",
	 *    "unixVer": "x"
	 *  }
	 * }
	 */
	camera ?:
	/**
	 * 前置摄像头
	 */
	'front' |
	/**
	 * 后置摄像头
	 */
	'back' | null,
	/**
	 * 接口调用成功，返回视频文件的临时文件路径，详见返回参数说明
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
	success ?: (ChooseMediaSuccessCallback) | null,
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
	fail ?: (ChooseMediaFailCallback) | null,
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
	complete ?: (ChooseMediaCompleteCallback) | null
    /**
     * 是否压缩所选文件，基础库2.25.0前仅对 mediaType 为 image 时有效，2.25.0及以后对全量 mediaType 有效
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
    sizeType?: string[] | null;
};

export type ChooseMedia = (options : ChooseMediaOptions) => void;

export interface Uni {
	/**
	  * 拍摄或从手机相册中选择图片或视频。
	  *
	  * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/choose-media.html#choosemedia
	  * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/choose-media.html#choosemedia
	  * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/media/video.html#choosemedia
	  * @uniPlatform {
      *   "app": {
      *     "android": {
      *       "osVer": "5.0",
      *       "uniVer": "x",
      *       "unixVer": "4.51"
      *     },
      *     "ios": {
      *       "osVer": "12.0",
      *       "uniVer": "x",
      *       "unixVer": "4.51"
      *     },
      *     "harmony": {
      *       "osVer": "3.0",
      *       "uniVer": "4.31",
      *       "unixVer": "4.61"
      *     }
      *   },
      *   "mp": {
      *     "weixin": {
      *       "hostVer": "2.10.0",
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
      *     "uniVer": "x",
      *     "unixVer": "x"
      *   }
      * }
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html
     */
	chooseMedia(options: ChooseMediaOptions): void;
}
