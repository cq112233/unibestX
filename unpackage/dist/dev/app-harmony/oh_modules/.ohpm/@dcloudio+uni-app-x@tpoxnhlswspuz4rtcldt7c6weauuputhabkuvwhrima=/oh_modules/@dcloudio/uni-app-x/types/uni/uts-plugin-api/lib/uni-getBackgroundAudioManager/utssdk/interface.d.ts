export interface Uni {
  /**
   * 获取全局唯一的背景音频管理器 backgroundAudioManager
   *
   * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/get-background-audio-manager.html#getbackgroundaudiomanager
   * @tutorial_uni_app https://uniapp.dcloud.net.cn/api/media/background-audio-manager.html
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/api/get-background-audio-manager.html#getbackgroundaudiomanager
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "ios": {
   *       "osVer": "12.0",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "harmony": {
   *       "osVer": "3.0",
   *       "uniVer": "4.31",
   *       "unixVer": "4.61"
   *     }
   *   },
   *   "web": {
   *     "uniVer": "√",
   *     "unixVer": "x"
   *   },
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "1.2.0",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "alipay": {
   *       "hostVer": "1.11.0",
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
   *       "hostVer": "5.20.0",
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
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.html
     */
  getBackgroundAudioManager(): BackgroundAudioManager;
}

export type GetBackgroundAudioManager = () => BackgroundAudioManager;

export interface BackgroundAudioManager {
  /**
   * 当前音频的长度（单位：s），只有在当前有合法的 src 时返回
   * @uniPlatform
    {
          "app": {
              "android": {
                  "osVer": "5.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41"
              },
              "ios": {
                  "osVer": "12.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41",
                  "unixUtsPlugin": "4.41"
              }
          }
    }
   */
  duration: number;
  /**
   * 当前音频的播放位置（单位：s），只有在当前有合法的 src 时返回
   * @uniPlatform
    {
          "app": {
              "android": {
                  "osVer": "5.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41"
              },
              "ios": {
                  "osVer": "12.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41",
                  "unixUtsPlugin": "4.41"
              }
          }
    }
   */
  currentTime: number;
  /**
   * 当前是是否暂停或停止状态，true 表示暂停或停止，false 表示正在播放
   * @uniPlatform
    {
          "app": {
              "android": {
                  "osVer": "5.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41"
              },
              "ios": {
                  "osVer": "12.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41",
                  "unixUtsPlugin": "4.41"
              }
          }
    }
   */
  paused: boolean;
  /**
   * 音频的数据源，默认为空字符串，当设置了新的 src 时，会自动开始播放 ，目前支持的格式有 m4a, aac, mp3, wav
   * @uniPlatform
    {
          "app": {
              "android": {
                  "osVer": "5.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41"
              },
              "ios": {
                  "osVer": "12.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41",
                  "unixUtsPlugin": "4.41"
              }
          }
    }
   */
  src: string;
  /**
   * 音频开始播放的位置（单位：s）
   * @uniPlatform
    {
          "app": {
              "android": {
                  "osVer": "5.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41"
              },
              "ios": {
                  "osVer": "12.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41",
                  "unixUtsPlugin": "4.41"
              }
          }
    }
   */
  startTime: number;
  /**
   * 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲
   * @uniPlatform
    {
          "app": {
              "android": {
                  "osVer": "5.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41"
              },
              "ios": {
                  "osVer": "12.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41",
                  "unixUtsPlugin": "4.41"
              },
              "harmony": {
                  "osVer": "x",
                  "uniVer": "x",
                  "unixVer": "x"
              }
          }
    }
   */
  buffered: number;
  /**
   * 音频标题，用于做原生音频播放器音频标题。原生音频播放器中的分享功能，分享出去的卡片标题，也将使用该值。
   * @uniPlatform
    {
          "app": {
              "android": {
                  "osVer": "5.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41"
              },
              "ios": {
                  "osVer": "12.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41",
                  "unixUtsPlugin": "4.41"
              },
              "harmony": {
                  "osVer": "5.0.0",
                  "uniVer": "4.61",
                  "unixVer": "4.61"
              }
          }
    }
   */
  title: string;
  /**
   * 专辑名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值
   * @uniPlatform
    {
          "app": {
              "android": {
                  "osVer": "5.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41"
              },
              "ios": {
                  "osVer": "12.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41",
                  "unixUtsPlugin": "4.41"
              },
              "harmony": {
                  "osVer": "5.0.0",
                  "uniVer": "4.61",
                  "unixVer": "4.61"
              }
          }
    }
   */
  epname: string;
  /**
   * 歌手名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值
   * @uniPlatform
    {
          "app": {
              "android": {
                  "osVer": "5.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41"
              },
              "ios": {
                  "osVer": "12.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41",
                  "unixUtsPlugin": "4.41"
              },
              "harmony": {
                  "osVer": "5.0.0",
                  "uniVer": "4.61",
                  "unixVer": "4.61"
              }
          }
    }
   */
  singer: string;
  /**
   * 封面图url，用于做原生音频播放器背景图。原生音频播放器中的分享功能，分享出去的卡片配图及背景也将使用该图。
   * @uniPlatform
    {
          "app": {
              "android": {
                  "osVer": "5.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41"
              },
              "ios": {
                  "osVer": "12.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41",
                  "unixUtsPlugin": "4.41"
              },
              "harmony": {
                  "osVer": "5.0.0",
                  "uniVer": "4.61",
                  "unixVer": "4.61"
              }
          }
    }
   */
  coverImgUrl: string;
  /**
   * 页面链接，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值
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
          }
    }
   */
  webUrl: string;
  /**
   * 音频协议。默认值为 'http'，设置 'hls' 可以支持播放 HLS 协议的直播音频
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
          }
    }
   */
  protocol: string;
  /**
   * 播放的倍率。可取值： 0.5/0.8/1.0/1.25/1.5/2.0，默认值为1.0。（仅 App 支持）
   * @uniPlatform
    {
          "app": {
              "android": {
                  "osVer": "5.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41"
              },
              "ios": {
                  "osVer": "12.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41",
                  "unixUtsPlugin": "4.41"
              },
              "harmony": {
                  "osVer": "x",
                  "uniVer": "x",
                  "unixVer": "x"
              }
          }
    }
   */
  playbackRate?: number;
  /**
   * 是否缓存线上音频资源，默认值为true，当设置false时，不会缓存资源到本地，直播地址需要主动设置为false
   * @uniPlatform
    {
        "app": {
            "android": {
                "osVer": "5.0",
                "uniVer": "x",
                "uniUtsPlugin": "x",
                "unixVer": "4.71"
            },
            "ios": {
                "osVer": "12.0",
                "uniVer": "x",
                "uniUtsPlugin": "x",
                "unixVer": "4.71",
                "unixUtsPlugin": "4.71"
            },
          "harmony": {
              "osVer": "5.0.0",
              "uniVer": "x",
              "unixVer": "x",
          }
        },
      "mp": {
          "weixin": {
              "hostVer": "√",
              "uniVer": "√",
              "unixVer": "4.41"
          },
          "alipay": {
              "hostVer": "1.23.4",
              "uniVer": "√",
              "unixVer": "x"
          },
          "baidu": {
              "hostVer": "√",
              "uniVer": "√",
              "unixVer": "x"
          },
          "toutiao": {
              "hostVer": "√",
              "uniVer": "√",
              "unixVer": "x"
          },
          "lark": {
              "hostVer": "√",
              "uniVer": "√",
              "unixVer": "x"
          },
          "qq": {
              "hostVer": "√",
              "uniVer": "√",
              "unixVer": "x"
          },
          "kuaishou": {
              "hostVer": "√",
              "uniVer": "√",
              "unixVer": "x"
          },
          "jd": {
              "hostVer": "√",
              "uniVer": "√",
              "unixVer": "x"
          }
      },
        "web": {
            "uniVer": "√",
            "unixVer": "4.0"
        }
    }
   */
  // #ifdef APP-IOS || APP-ANDROID
  cache: boolean;
  // #endif
  /**
   * 播放
   * @uniPlatform
    {
          "app": {
              "android": {
                  "osVer": "5.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41"
              },
              "ios": {
                  "osVer": "12.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41",
                  "unixUtsPlugin": "4.41"
              },
              "harmony": {
                  "osVer": "5.0.0",
                  "uniVer": "4.31",
                  "unixVer": "4.61"
              }
          }
    }
   */
  play(): void;
  /**
   * 暂停
   * @uniPlatform
    {
          "app": {
              "android": {
                  "osVer": "5.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41"
              },
              "ios": {
                  "osVer": "12.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41",
                  "unixUtsPlugin": "4.41"
              },
              "harmony": {
                  "osVer": "5.0.0",
                  "uniVer": "4.31",
                  "unixVer": "4.61"
              }
          }
    }
   */
  pause(): void;
  /**
   * 跳转到指定位置，单位 s
   * @uniPlatform
    {
          "app": {
              "android": {
                  "osVer": "5.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41"
              },
              "ios": {
                  "osVer": "12.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41",
                  "unixUtsPlugin": "4.41"
              },
              "harmony": {
                  "osVer": "5.0.0",
                  "uniVer": "4.31",
                  "unixVer": "4.61"
              }
          }
    }
   */
  seek(position: number): void;
  /**
   * 停止
   * @uniPlatform
    {
          "app": {
              "android": {
                  "osVer": "5.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41"
              },
              "ios": {
                  "osVer": "12.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41",
                  "unixUtsPlugin": "4.41"
              },
              "harmony": {
                  "osVer": "5.0.0",
                  "uniVer": "4.31",
                  "unixVer": "4.61"
              }
          }
    }
   */
  stop(): void;
  /**
   * 背景音频进入可以播放状态，但不保证后面可以流畅播放
   * @uniPlatform
    {
          "app": {
              "android": {
                  "osVer": "5.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41"
              },
              "ios": {
                  "osVer": "12.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41",
                  "unixUtsPlugin": "4.41"
              },
              "harmony": {
                  "osVer": "5.0.0",
                  "uniVer": "4.31",
                  "unixVer": "4.61"
              }
          }
    }
   */
  onCanplay(callback: (result: any) => void): void;
  /**
   * 背景音频播放事件
   * @uniPlatform
    {
          "app": {
              "android": {
                  "osVer": "5.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41"
              },
              "ios": {
                  "osVer": "12.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41",
                  "unixUtsPlugin": "4.41"
              },
              "harmony": {
                  "osVer": "5.0.0",
                  "uniVer": "4.31",
                  "unixVer": "4.61"
              }
          }
    }
   */
  onPlay(callback: (result: any) => void): void;
  /**
   * 背景音频暂停事件
   * @uniPlatform
    {
          "app": {
              "android": {
                  "osVer": "5.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41"
              },
              "ios": {
                  "osVer": "12.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41",
                  "unixUtsPlugin": "4.41"
              },
              "harmony": {
                  "osVer": "5.0.0",
                  "uniVer": "4.31",
                  "unixVer": "4.61"
              }
          }
    }
   */
  onPause(callback: (result: any) => void): void;
  /**
   * 背景音频停止事件
   * @uniPlatform
    {
          "app": {
              "android": {
                  "osVer": "5.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41"
              },
              "ios": {
                  "osVer": "12.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41",
                  "unixUtsPlugin": "4.41"
              },
              "harmony": {
                  "osVer": "5.0.0",
                  "uniVer": "4.31",
                  "unixVer": "4.61"
              }
          }
    }
   */
  onStop(callback: (result: any) => void): void;
  /**
   * 背景音频自然播放结束事件
   * @uniPlatform
    {
          "app": {
              "android": {
                  "osVer": "5.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41"
              },
              "ios": {
                  "osVer": "12.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41",
                  "unixUtsPlugin": "4.41"
              },
              "harmony": {
                  "osVer": "5.0.0",
                  "uniVer": "4.31",
                  "unixVer": "4.61"
              }
          }
    }
   */
  onEnded(callback: (result: any) => void): void;
  /**
   * 音频进行 seek 操作事件
   * @uniPlatform
    {
  	  "app": {
  		  "android": {
  			  "osVer": "5.0",
  			  "uniVer": "√",
  			  "uniUtsPlugin": "x",
  			  "unixVer": "4.41"
  		  },
  		  "ios": {
  			  "osVer": "12.0",
  			  "uniVer": "√",
  			  "uniUtsPlugin": "x",
  			  "unixVer": "4.41",
  			  "unixUtsPlugin": "4.41"
  		  },
              "harmony": {
                  "osVer": "5.0.0",
                  "uniVer": "4.31",
                  "unixVer": "4.61"
              }
  	  },
  	  "web": {
  		  "uniVer": "√",
  		  "unixVer": "4.0"
  	  }
    }
   */
  onSeeking(callback : (result : any) => void) : void;
  /**
   * 音频完成 seek 操作事件
   * @uniPlatform
    {
  	  "app": {
  		  "android": {
  			  "osVer": "5.0",
  			  "uniVer": "√",
  			  "uniUtsPlugin": "x",
  			  "unixVer": "4.41"
  		  },
  		  "ios": {
  			  "osVer": "12.0",
  			  "uniVer": "√",
  			  "uniUtsPlugin": "x",
  			  "unixVer": "4.41",
  			  "unixUtsPlugin": "4.41"
  		  },
              "harmony": {
                  "osVer": "5.0.0",
                  "uniVer": "4.31",
                  "unixVer": "4.61"
              }
  	  },
  	  "web": {
  		  "uniVer": "√",
  		  "unixVer": "4.0"
  	  }
    }
   */
  onSeeked(callback : (result : any) => void) : void;
  /**
   * 背景音频播放进度更新事件
   * @uniPlatform
    {
          "app": {
              "android": {
                  "osVer": "5.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41"
              },
              "ios": {
                  "osVer": "12.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41",
                  "unixUtsPlugin": "4.41"
              },
              "harmony": {
                  "osVer": "5.0.0",
                  "uniVer": "4.31",
                  "unixVer": "4.61"
              }
          }
    }
   */
  onTimeUpdate(callback: (result: any) => void): void;
  /**
   * 用户在系统音乐播放面板点击上一曲事件
   * @uniPlatform
    {
          "app": {
              "android": {
                  "osVer": "5.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41"
              },
              "ios": {
                  "osVer": "12.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41",
                  "unixUtsPlugin": "4.41"
              },
              "harmony": {
                  "osVer": "5.0.0",
                  "uniVer": "4.61",
                  "unixVer": "4.61"
              }
          }
    }
   */
  onPrev(callback: (result: any) => void): void;
  /**
   * 用户在系统音乐播放面板点击下一曲事件
   * @uniPlatform
    {
          "app": {
              "android": {
                  "osVer": "5.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41"
              },
              "ios": {
                  "osVer": "12.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41",
                  "unixUtsPlugin": "4.41"
              },
              "harmony": {
                  "osVer": "5.0.0",
                  "uniVer": "4.61",
                  "unixVer": "4.61"
              }
          }
    }
   */
  onNext(callback: (result: any) => void): void;
  /**
   * 背景音频播放错误事件
   * @uniPlatform
    {
          "app": {
              "android": {
                  "osVer": "5.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41"
              },
              "ios": {
                  "osVer": "12.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41",
                  "unixUtsPlugin": "4.41"
              },
              "harmony": {
                  "osVer": "5.0.0",
                  "uniVer": "4.31",
                  "unixVer": "4.61"
              }
          }
    }
   */
  onError(callback : (result : ICreateBackgroundAudioFail) => void) : void;
  /**
   * 音频加载中事件，当音频因为数据不足，需要停下来加载时会触发
   * @uniPlatform
    {
          "app": {
              "android": {
                  "osVer": "5.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41"
              },
              "ios": {
                  "osVer": "12.0",
                  "uniVer": "√",
                  "uniUtsPlugin": "x",
                  "unixVer": "4.41",
                  "unixUtsPlugin": "4.41"
              },
              "harmony": {
                  "osVer": "x",
                  "uniVer": "x",
                  "unixVer": "x"
              }
          }
    }
   */
  onWaiting(callback: (result: any) => void): void;
    /**
     * 需要基础库： `3.4.8`
     *
     * 音频类型。可设置 "audio" 和 "music" 两种值，默认为 "audio"。不同音频类型对应的播放器样式不一样（实验特性，目前仅iOS和Android端支持）
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "3.4.8",
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
    audioType?: string | null;
    /**
     * 需要基础库： `3.4.8`
     *
     * 关联页面路径。设置后，当点击播放器上的小程序跳转链接时，将跳转到这个关联页面路径（实验特性，目前仅Android端支持）
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "3.4.8",
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
    referrerPath?: string | null;
    /**
     * 需要基础库： `2.13.0`
     *
     * `origin`: 发送完整的referrer; `no-referrer`: 不发送。格式固定为 `https://servicewechat.com/{appid}/{version}/page-frame.html`，其中 {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本；
     *
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "2.13.0",
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
    referrerPolicy?: string | null;
}
/**
 * 错误码
 */
export type CreateBackgroundAudioErrorCode =
	/**
	 * 系统错误
	 * @uniPlatform {
	      "app": {
	          "android": {
	              "osVer": "5.0",
	              "uniVer": "√",
	              "uniUtsPlugin": "x",
	              "unixVer": "4.41"
	          },
	          "ios": {
	              "osVer": "12.0",
	              "uniVer": "√",
	              "uniUtsPlugin": "x",
	              "unixVer": "4.41",
	              "unixUtsPlugin": "4.41"
	          }
	      },
	  }
	 */
	1107601 |
	/**
	 * 网络错误
	 * @uniPlatform {
	      "app": {
	          "android": {
	              "osVer": "5.0",
	              "uniVer": "√",
	              "uniUtsPlugin": "x",
	              "unixVer": "4.41"
	          },
	          "ios": {
	              "osVer": "12.0",
	              "uniVer": "√",
	              "uniUtsPlugin": "x",
	              "unixVer": "4.41",
	              "unixUtsPlugin": "4.41"
	          }
	      },
	  }
	 */
	1107602 |
	/**
	 * 文件错误
	 * @uniPlatform {
	      "app": {
	          "android": {
	              "osVer": "5.0",
	              "uniVer": "√",
	              "uniUtsPlugin": "x",
	              "unixVer": "4.41"
	          },
	          "ios": {
	              "osVer": "12.0",
	              "uniVer": "√",
	              "uniUtsPlugin": "x",
	              "unixVer": "4.41",
	              "unixUtsPlugin": "4.41"
	          }
	      },
	  }
	 */
	1107603 |
	/**
	 * 格式错误
	 * @uniPlatform {
	      "app": {
	          "android": {
	              "osVer": "5.0",
	              "uniVer": "√",
	              "uniUtsPlugin": "x",
	              "unixVer": "4.41"
	          },
	          "ios": {
	              "osVer": "12.0",
	              "uniVer": "√",
	              "uniUtsPlugin": "x",
	              "unixVer": "4.41",
	              "unixUtsPlugin": "4.41"
	          }
	      },
	  }
	 */
	1107604 |
	/**
	 * 未知错误
	 * @uniPlatform {
	      "app": {
	          "android": {
	              "osVer": "5.0",
	              "uniVer": "√",
	              "uniUtsPlugin": "x",
	              "unixVer": "4.41"
	          },
	          "ios": {
	              "osVer": "12.0",
	              "uniVer": "√",
	              "uniUtsPlugin": "x",
	              "unixVer": "4.41",
	              "unixUtsPlugin": "4.41"
	          }
	      },
	  }
	 */
	1107605 |
	/**
	 * 播放路径不能为空
	 * @uniPlatform {
	      "app": {
	          "android": {
	              "osVer": "5.0",
	              "uniVer": "√",
	              "uniUtsPlugin": "x",
	              "unixVer": "4.41"
	          },
	          "ios": {
	              "osVer": "12.0",
	              "uniVer": "√",
	              "uniUtsPlugin": "x",
	              "unixVer": "4.41",
	              "unixUtsPlugin": "4.41"
	          }
	      },
	  }
	 */
	1107609;

export interface ICreateBackgroundAudioFail extends IUniError {
	errCode : CreateBackgroundAudioErrorCode
};
