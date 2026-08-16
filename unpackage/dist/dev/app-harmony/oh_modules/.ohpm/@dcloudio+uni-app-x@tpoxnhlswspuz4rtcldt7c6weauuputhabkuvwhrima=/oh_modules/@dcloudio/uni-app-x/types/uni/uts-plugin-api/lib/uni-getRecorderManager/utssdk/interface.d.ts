export interface Uni {
	/**
	 * 录音管理
	 * @tutorial-uni-app https://uniapp.dcloud.net.cn/api/media/record-manager.html
	 *
	 * @uniPlatform {
     *   "app": {
     *     "android": {
     *       "osVer": "5.0",
     *       "uniVer": "√",
     *       "unixVer": "4.61",
     *       "unixUtsPlugin": "4.61"
     *     },
     *     "ios": {
     *       "osVer": "12.0",
     *       "uniVer": "√",
     *       "unixVer": "4.61",
     *       "unixUtsPlugin": "4.61"
     *     },
     *     "harmony": {
     *       "osVer": "5.0.0",
     *       "uniVer": "4.31",
     *       "unixVer": "4.61"
     *     }
     *   },
     *   "web": {
     *     "uniVer": "x",
     *     "unixVer": "x"
     *   },
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "1.6.0",
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
     *   }
     * }
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.html
     */
	getRecorderManager() : RecorderManager
}
export type GetRecorderManager = () => RecorderManager;
export type RecorderManagerStartOptions = {
	/**
	 * 指定录音的时长，单位 ms ，如果传入了合法的 duration ，在到达指定的 duration 后会自动停止录音，默认值 60000（1 分钟)，微信小程序最大值 600000（10 分钟), App 平台没有最大值限制
	 * @uniPlatform
	  {
			"app": {
				"android": {
					"osVer": "5.0",
					"uniVer": "√",
					"uniUtsPlugin": "x",
					"unixVer": "4.61",
					"unixUtsPlugin": "4.61"
				},
				"ios": {
					"osVer": "12.0",
					"uniVer": "√",
					"uniUtsPlugin": "x",
					"unixVer": "4.61",
					"unixUtsPlugin": "4.61"
				},
	      "harmony": {
	        "osVer": "5.0.0",
	        "uniVer": "4.31",
	        "unixVer": "4.61"
	      }
			}
	  }
	 */
	duration ?: number | null,
	/**
	 * 采样率，有效值 8000/16000/44100
	 * @defaultValue 8000
	 * @uniPlatform
	  {
			"app": {
				"android": {
					"osVer": "5.0",
					"uniVer": "√",
					"uniUtsPlugin": "x",
					"unixVer": "4.61",
					"unixUtsPlugin": "4.61"
				},
				"ios": {
					"osVer": "12.0",
					"uniVer": "√",
					"uniUtsPlugin": "x",
					"unixVer": "4.61",
					"unixUtsPlugin": "4.61"
				},
	      "harmony": {
	        "osVer": "5.0.0",
	        "uniVer": "4.31",
	        "unixVer": "4.61"
	      }
			}
	  }
	 */
	sampleRate ?: number | null,
	/**
	 * 录音通道数，有效值 1/2
	 * @defaultValue 2
	 * @uniPlatform
	  {
			"app": {
				"android": {
					"osVer": "5.0",
					"uniVer": "√",
					"uniUtsPlugin": "x",
					"unixVer": "x",
					"unixUtsPlugin": "x"
				},
				"ios": {
					"osVer": "12.0",
					"uniVer": "√",
					"uniUtsPlugin": "x",
					"unixVer": "4.61",
					"unixUtsPlugin": "4.61"
				},
	      "harmony": {
	        "osVer": "5.0.0",
	        "uniVer": "4.31",
	        "unixVer": "4.61"
	      }
			}
	  }
	 */
	numberOfChannels ?: number | null,
	/**
	 * 编码码率，有效值见下表格
	 * @defaultValue 48000
	 * @uniPlatform
	  {
			"app": {
				"android": {
					"osVer": "5.0",
					"uniVer": "√",
					"uniUtsPlugin": "x",
					"unixVer": "4.61",
					"unixUtsPlugin": "4.61"
				},
				"ios": {
					"osVer": "12.0",
					"uniVer": "√",
					"uniUtsPlugin": "x",
					"unixVer": "4.61",
					"unixUtsPlugin": "4.61"
				},
	      "harmony": {
	        "osVer": "5.0.0",
	        "uniVer": "4.31",
	        "unixVer": "4.61"
	      }
			}
	  }
	 */
	encodeBitRate ?: number | null,
	/**
	 * 音频格式
	 * @defaultValue aac
	 * @uniPlatform
	  {
			"app": {
				"android": {
					"osVer": "5.0",
					"uniVer": "√",
					"uniUtsPlugin": "x",
					"unixVer": "4.61",
					"unixUtsPlugin": "4.61"
				},
				"ios": {
					"osVer": "12.0",
					"uniVer": "√",
					"uniUtsPlugin": "x",
					"unixVer": "4.61",
					"unixUtsPlugin": "4.61"
				},
				"harmony": {
					"osVer": "5.0.0",
	        "uniVer": "4.31",
					"unixVer": "4.61"
				}
			}
	  }
	 */
	format ?:
	/**
	 * aac格式
	 * @uniPlatform
	  {
			"app": {
				"android": {
					"osVer": "5.0",
					"uniVer": "√",
					"uniUtsPlugin": "x",
					"unixVer": "4.61",
					"unixUtsPlugin": "4.61"
				},
				"ios": {
					"osVer": "12.0",
					"uniVer": "√",
					"uniUtsPlugin": "x",
					"unixVer": "4.61",
					"unixUtsPlugin": "4.61"
				},
				"harmony": {
					"osVer": "5.0.0",
	        "uniVer": "4.31",
					"unixVer": "4.61"
				}
			},
			"mp": {
	 	    "weixin": {
	 	      "hostVer": "√",
	 	      "uniVer": "√",
	 	      "unixVer": "4.41"
	 	    }
			},
			"web": {
				"uniVer": "x",
				"unixVer": "x"
			}
	  }
	 */
	'aac' |
	/**
	 * mp3格式
	 * @uniPlatform
	  {
			"app": {
				"android": {
					"osVer": "5.0",
					"uniVer": "√",
					"uniUtsPlugin": "x",
					"unixVer": "4.61",
					"unixUtsPlugin": "4.61"
				},
				"ios": {
					"osVer": "12.0",
					"uniVer": "√",
					"uniUtsPlugin": "x",
					"unixVer": "x",
					"unixUtsPlugin": "x"
				},
				"harmony": {
					"osVer": "5.0.0",
	        "uniVer": "4.61",
					"unixVer": "4.61"
				}
			},
			"mp": {
	 	    "weixin": {
	 	      "hostVer": "√",
	 	      "uniVer": "√",
	 	      "unixVer": "4.41"
	 	    }
			},
			"web": {
				"uniVer": "x",
				"unixVer": "x"
			}
	  }
	 */
	'mp3' |
	/**
	 * pcm格式
	 * @uniPlatform
	  {
			"app": {
				"android": {
					"osVer": "5.0",
					"uniVer": "√",
					"uniUtsPlugin": "x",
					"unixVer": "4.61",
					"unixUtsPlugin": "4.61"
				},
				"ios": {
					"osVer": "12.0",
					"uniVer": "√",
					"uniUtsPlugin": "x",
					"unixVer": "4.61",
					"unixUtsPlugin": "4.61"
				},
				"harmony": {
					"osVer": "x",
	       "uniVer": "x",
					"unixVer": "x"
				}
			},
			"mp": {
	 	    "weixin": {
	 	      "hostVer": "√",
	 	      "uniVer": "√",
	 	      "unixVer": "4.41"
	 	    }
			},
			"web": {
				"uniVer": "x",
				"unixVer": "x"
			}
	  }
	 */
	'pcm' |
	/**
	 * wav格式
	 * @uniPlatform
	  {
			"app": {
				"android": {
					"osVer": "5.0",
					"uniVer": "√",
					"uniUtsPlugin": "x",
					"unixVer": "4.61",
					"unixUtsPlugin": "4.61"
				},
				"ios": {
					"osVer": "12.0",
					"uniVer": "√",
					"uniUtsPlugin": "x",
					"unixVer": "4.61",
					"unixUtsPlugin": "4.61"
				},
				"harmony": {
					"osVer": "5.0.0",
	       "uniVer": "4.61",
					"unixVer": "4.61"
				}
			},
			"mp": {
	 	    "weixin": {
	 	      "hostVer": "√",
	 	      "uniVer": "√",
	 	      "unixVer": "4.41"
	 	    }
			},
			"web": {
				"uniVer": "x",
				"unixVer": "x"
			}
	  }
	 */
	'wav' |
	/**
	 * m4a格式
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
					"osVer": "5.0.0",
	        "uniVer": "4.61",
					"unixVer": "4.61"
				}
			},
			"mp": {
	 	    "weixin": {
	 	      "hostVer": "x",
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
	'm4a' | null,
	/**
	 * 指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调。暂仅支持 mp3 格式。
	 * @uniPlatform
	  {
			"app": {
				"android": {
					"osVer": "5.0",
					"uniVer": "√",
					"uniUtsPlugin": "x",
					"unixVer": "x",
					"unixUtsPlugin": "x"
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
			"mp": {
	 	    "weixin": {
	 	      "hostVer": "√",
	 	      "uniVer": "√",
	 	      "unixVer": "4.41"
	 	    }
			},
			"web": {
				"uniVer": "x",
				"unixVer": "x"
			}
	  }
	 */
	frameSize ?: number | null
};

export interface RecorderManagerOnStopResult {
	/**
	 * 录音文件的临时路径
	 * @uniPlatform
	  {
			"app": {
				"android": {
					"osVer": "5.0",
					"uniVer": "√",
					"uniUtsPlugin": "x",
					"unixVer": "4.61",
					"unixUtsPlugin": "4.61"
				},
				"ios": {
					"osVer": "12.0",
					"uniVer": "√",
					"uniUtsPlugin": "x",
					"unixVer": "4.61",
					"unixUtsPlugin": "4.61"
				},
				"harmony": {
					"osVer": "5.0.0",
	        "uniVer": "4.31",
					"unixVer": "4.61"
				}
			}
	  }
	 */
	tempFilePath : string
};

export interface RecorderManager {
	/**
	 * 开始录音
	 * @tutorial https://uniapp.dcloud.net.cn/api/media/record-manager.html
	 * @tutorial-uni-app https://uniapp.dcloud.net.cn/api/media/record-manager.html
	 *
	 * @uniPlatform {
	 * 	"app": {
	 * 		"android": {
	 * 			"osVer": "5.0",
	 * 			"uniVer": "√",
	 * 			"unixVer": "4.61"
	 * 		},
	 * 		"ios": {
	 * 			"osVer": "12.0",
	 * 			"uniVer": "√",
	 * 			"unixVer": "4.61"
	 * 		},
	 *    "harmony": {
	 *      "osVer": "5.0.0",
	 *      "uniVer": "4.31",
	 *      "unixVer": "4.61"
	 *    }
	 * 	},
	 *   "web": {
	 *     "uniVer": "√",
	 *     "unixVer": "x"
	 *   },
	 *  "mp":{
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
	 *  }
	 * }
	 */
	start(options : RecorderManagerStartOptions) : void;
	/**
	 * 暂停录音,App-Android平台在Android 7.0及以后版本支持
	 * @tutorial https://uniapp.dcloud.net.cn/api/media/record-manager.html
	 * @tutorial-uni-app https://uniapp.dcloud.net.cn/api/media/record-manager.html
	 *
	 * @uniPlatform {
	 * 	"app": {
	 * 		"android": {
	 * 			"osVer": "7.0",
	 * 			"uniVer": "x",
	 * 			"unixVer": "4.61"
	 * 		},
	 * 		"ios": {
	 * 			"osVer": "12.0",
	 * 			"uniVer": "√",
	 * 			"unixVer": "4.61"
	 * 		},
	 *    "harmony": {
	 *      "osVer": "5.0.0",
	 *      "uniVer": "4.31",
	 *      "unixVer": "4.61"
	 *    }
	 * 	},
	 *   "web": {
	 *     "uniVer": "√",
	 *     "unixVer": "x"
	 *   },
	 *  "mp":{
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
	 *  }
	 * }
	 */
	pause() : void;
	/**
	 * 继续录音，App-Android平台在Android 7.0及以后版本支持
	 * @tutorial https://uniapp.dcloud.net.cn/api/media/record-manager.html
	 * @tutorial-uni-app https://uniapp.dcloud.net.cn/api/media/record-manager.html
	 *
	 * @uniPlatform {
	 * 	"app": {
	 * 		"android": {
	 * 			"osVer": "7.0",
	 * 			"uniVer": "x",
	 * 			"unixVer": "4.61"
	 * 		},
	 * 		"ios": {
	 * 			"osVer": "12.0",
	 * 			"uniVer": "√",
	 * 			"unixVer": "4.61"
	 * 		},
	 *    "harmony": {
	 *      "osVer": "5.0.0",
	 *      "uniVer": "4.31",
	 *      "unixVer": "4.61"
	 *    }
	 * 	},
	 *   "web": {
	 *     "uniVer": "√",
	 *     "unixVer": "x"
	 *   },
	 *  "mp":{
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
	 *  }
	 * }
	 */
	resume() : void;
	/**
	 * 停止录音
	 * @tutorial https://uniapp.dcloud.net.cn/api/media/record-manager.html
	 * @tutorial-uni-app https://uniapp.dcloud.net.cn/api/media/record-manager.html
	 *
	 * @uniPlatform {
	 * 	"app": {
	 * 		"android": {
	 * 			"osVer": "5.0",
	 * 			"uniVer": "√",
	 * 			"unixVer": "4.61"
	 * 		},
	 * 		"ios": {
	 * 			"osVer": "12.0",
	 * 			"uniVer": "√",
	 * 			"unixVer": "4.61"
	 * 		},
	 *    "harmony": {
	 *      "osVer": "5.0.0",
	 *      "uniVer": "4.31",
	 *      "unixVer": "4.61"
	 *    }
	 * 	},
	 *   "web": {
	 *     "uniVer": "√",
	 *     "unixVer": "x"
	 *   },
	 *  "mp":{
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
	 *  }
	 * }
	 */
	stop() : void;
	/**
	 * 录音开始事件
	 * @tutorial https://uniapp.dcloud.net.cn/api/media/record-manager.html
	 * @tutorial-uni-app https://uniapp.dcloud.net.cn/api/media/record-manager.html
	 *
	 * @uniPlatform {
	 * 	"app": {
	 * 		"android": {
	 * 			"osVer": "5.0",
	 * 			"uniVer": "√",
	 * 			"unixVer": "4.61"
	 * 		},
	 * 		"ios": {
	 * 			"osVer": "12.0",
	 * 			"uniVer": "√",
	 * 			"unixVer": "4.61"
	 * 		},
	 *    "harmony": {
	 *      "osVer": "5.0.0",
	 *      "uniVer": "4.31",
	 *      "unixVer": "4.61"
	 *    }
	 * 	},
	 *   "web": {
	 *     "uniVer": "√",
	 *     "unixVer": "x"
	 *   },
	 *  "mp":{
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
	 *  }
	 * }
	 */
	onStart(options : (result : any) => void) : void;
	/**
	 * 录音暂停事件,App-Android平台在Android 7.0及以后版本支持
	 * @tutorial https://uniapp.dcloud.net.cn/api/media/record-manager.html
	 * @tutorial-uni-app https://uniapp.dcloud.net.cn/api/media/record-manager.html
	 *
	 * @uniPlatform {
	 * 	"app": {
	 * 		"android": {
	 * 			"osVer": "7.0",
	 * 			"uniVer": "x",
	 * 			"unixVer": "4.61"
	 * 		},
	 * 		"ios": {
	 * 			"osVer": "12.0",
	 * 			"uniVer": "√",
	 * 			"unixVer": "4.61"
	 * 		},
	 *    "harmony": {
	 *      "osVer": "5.0.0",
	 *      "uniVer": "4.31",
	 *      "unixVer": "4.61"
	 *    }
	 * 	},
	 *   "web": {
	 *     "uniVer": "√",
	 *     "unixVer": "x"
	 *   },
	 *  "mp":{
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
	 *  }
	 * }
	 */
	onPause(options : (result : any) => void) : void;
	/**
	 * 录音停止事件，会回调文件地址
	 * @tutorial https://uniapp.dcloud.net.cn/api/media/record-manager.html
	 * @tutorial-uni-app https://uniapp.dcloud.net.cn/api/media/record-manager.html
	 *
	 * @uniPlatform {
	 * 	"app": {
	 * 		"android": {
	 * 			"osVer": "5.0",
	 * 			"uniVer": "√",
	 * 			"unixVer": "4.61"
	 * 		},
	 * 		"ios": {
	 * 			"osVer": "12.0",
	 * 			"uniVer": "√",
	 * 			"unixVer": "4.61"
	 * 		},
	 *    "harmony": {
	 *      "osVer": "5.0.0",
	 *      "uniVer": "4.31",
	 *      "unixVer": "4.61"
	 *    }
	 * 	},
	 *   "web": {
	 *     "uniVer": "√",
	 *     "unixVer": "x"
	 *   },
	 *  "mp":{
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
	 *  }
	 * }
	 */
	onStop(options : (result : RecorderManagerOnStopResult) => void) : void;
	/**
	 * 已录制完指定帧大小的文件，会回调录音分片结果数据。如果设置了 frameSize ，则会回调此事件
	 * @tutorial https://uniapp.dcloud.net.cn/api/media/record-manager.html
	 * @tutorial-uni-app https://uniapp.dcloud.net.cn/api/media/record-manager.html
	 *
	 * @uniPlatform {
	 * 	"app": {
	 * 		"android": {
	 * 			"osVer": "5.0",
	 * 			"uniVer": "x",
	 * 			"unixVer": "x"
	 * 		},
	 * 		"ios": {
	 * 			"osVer": "12.0",
	 * 			"uniVer": "x",
	 * 			"unixVer": "x"
	 * 		},
	 *    "harmony": {
	 *      "osVer": "5.0.0",
	 *      "uniVer": "x",
	 *      "unixVer": "x"
	 *    }
	 * 	},
	 *   "web": {
	 *     "uniVer": "√",
	 *     "unixVer": "x"
	 *   },
	 *  "mp":{
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
	 *  }
	 * }
	 */
	onFrameRecorded(options : (result : any) => void) : void;
	/**
	 * 录音错误事件, 会回调错误信息
	 * @tutorial https://uniapp.dcloud.net.cn/api/media/record-manager.html
	 * @tutorial-uni-app https://uniapp.dcloud.net.cn/api/media/record-manager.html
	 *
	 * @uniPlatform {
	 * 	"app": {
	 * 		"android": {
	 * 			"osVer": "5.0",
	 * 			"uniVer": "√",
	 * 			"unixVer": "4.61"
	 * 		},
	 * 		"ios": {
	 * 			"osVer": "12.0",
	 * 			"uniVer": "v",
	 * 			"unixVer": "4.61"
	 * 		},
	 *    "harmony": {
	 *      "osVer": "5.0.0",
	 *      "uniVer": "4.31",
	 *      "unixVer": "4.61"
	 *    }
	 * 	},
	 *   "web": {
	 *     "uniVer": "√",
	 *     "unixVer": "x"
	 *   },
	 *  "mp":{
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
	 *  }
	 * }
	 */
	onError(options : (result : any) => void) : void;
	/**
	 * 监听录音继续事件,App-Android平台在Android 7.0及以后版本支持
	 *
	 * @tutorial https://uniapp.dcloud.net.cn/api/media/record-manager.html
	 * @tutorial-uni-app https://uniapp.dcloud.net.cn/api/media/record-manager.html
	 *
	 * @uniPlatform {
	 * 	"app": {
	 * 		"android": {
	 * 			"osVer": "7.0",
	 * 			"uniVer": "x",
	 * 			"unixVer": "4.61"
	 * 		},
	 * 		"ios": {
	 * 			"osVer": "12.0",
	 * 			"uniVer": "x",
	 * 			"unixVer": "4.61"
	 * 		},
	 *    "harmony": {
	 *      "osVer": "5.0.0",
	 *      "uniVer": "4.31",
	 *      "unixVer": "4.61"
	 *    }
	 * 	},
	 *   "web": {
	 *     "uniVer": "x",
	 *     "unixVer": "x"
	 *   },
	 *  "mp":{
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
	 *  }
	 * }
	 */
	onResume(options : (result : any) => void) : void;
	/**
	 * 监听录音因为受到系统占用而被中断开始事件
	 *
	 * @tutorial https://uniapp.dcloud.net.cn/api/media/record-manager.html
	 * @tutorial-uni-app https://uniapp.dcloud.net.cn/api/media/record-manager.html
	 *
	 * @uniPlatform {
	 * 	"app": {
	 * 		"android": {
	 * 			"osVer": "5.0",
	 * 			"uniVer": "x",
	 * 			"unixVer": "4.61"
	 * 		},
	 * 		"ios": {
	 * 			"osVer": "12.0",
	 * 			"uniVer": "x",
	 * 			"unixVer": "4.61"
	 * 		},
	 *    "harmony": {
	 *      "osVer": "5.0.0",
	 *      "uniVer": "4.31",
	 *      "unixVer": "4.61"
	 *    }
	 * 	},
	 *   "web": {
	 *     "uniVer": "x",
	 *     "unixVer": "x"
	 *   },
	 *  "mp":{
	 *    "weixin": {
	 *      "hostVer": "√",
	 *      "uniVer": "√",
	 *      "unixVer": "4.41"
	 *    },
	 *    "alipay": {
	 *      "hostVer": "x",
	 *      "uniVer": "x",
	 *      "unixVer": "x"
	 *    },
	 *    "baidu": {
	 *      "hostVer": "√",
	 *      "uniVer": "√",
	 *      "unixVer": "x"
	 *    },
	 *    "toutiao": {
	 *      "hostVer": "x",
	 *      "uniVer": "x",
	 *      "unixVer": "x"
	 *    },
	 *    "lark": {
	 *      "hostVer": "x",
	 *      "uniVer": "x",
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
	 *      "hostVer": "x",
	 *      "uniVer": "x",
	 *      "unixVer": "x"
	 *    }
	 *  }
	 * }
	 */
	onInterruptionBegin(options : (result : any) => void) : void;
	/**
	 * 监听录音中断结束事件
	 *
	 * @tutorial https://uniapp.dcloud.net.cn/api/media/record-manager.html
	 * @tutorial-uni-app https://uniapp.dcloud.net.cn/api/media/record-manager.html
	 *
	 * @uniPlatform {
	 * 	"app": {
	 * 		"android": {
	 * 			"osVer": "5.0",
	 * 			"uniVer": "x",
	 * 			"unixVer": "4.61"
	 * 		},
	 * 		"ios": {
	 * 			"osVer": "12.0",
	 * 			"uniVer": "x",
	 * 			"unixVer": "4.61"
	 * 		},
	 *    "harmony": {
	 *      "osVer": "5.0.0",
	 *      "uniVer": "4.31",
	 *      "unixVer": "4.61"
	 *    }
	 * 	},
	 *   "web": {
	 *     "uniVer": "x",
	 *     "unixVer": "x"
	 *   },
	 *  "mp":{
	 *    "weixin": {
	 *      "hostVer": "√",
	 *      "uniVer": "√",
	 *      "unixVer": "4.41"
	 *    },
	 *    "alipay": {
	 *      "hostVer": "x",
	 *      "uniVer": "x",
	 *      "unixVer": "x"
	 *    },
	 *    "baidu": {
	 *      "hostVer": "√",
	 *      "uniVer": "√",
	 *      "unixVer": "x"
	 *    },
	 *    "toutiao": {
	 *      "hostVer": "x",
	 *      "uniVer": "x",
	 *      "unixVer": "x"
	 *    },
	 *    "lark": {
	 *      "hostVer": "x",
	 *      "uniVer": "x",
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
	 *      "hostVer": "x",
	 *      "uniVer": "x",
	 *      "unixVer": "x"
	 *    }
	 *  }
	 * }
	 */
	onInterruptionEnd(options : (result : any) => void) : void;
}
