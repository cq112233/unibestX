export type LocationObject = {
	/**
	 * 纬度，浮点数，范围为-90~90，负数表示南纬
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	latitude : number;
	/**
	 * 经度，范围为-180~180，负数表示西经
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	longitude : number;
};

export type Marker = {
	/**
	 * 标记点id，marker点击事件回调会返回此id。建议为每个marker设置上Number类型id，保证更新marker时有更好的性能。最大限制9位数
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	id : number;
	/**
	 * 纬度，浮点数，范围 -90 ~ 90
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	latitude : number;
	/**
	 * 经度，浮点数，范围 -180 ~ 180
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	longitude : number;
	/**
	 * 显示的图标，项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对小程序根目录；也支持临时路径
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	iconPath : string;

	/**
	 * 标注点名，点击时显示，callout存在时将被忽略
	 * @defaultValue null
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	title ?: string | null;
	/**
	 * 旋转角度，顺时针旋转的角度，范围 0 ~ 360
	 * @defaultValue 0
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	rotate ?: number | null;
	/**
	 * 标注的透明度，范围 0 ~ 1
	 * @defaultValue 1
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	alpha ?: number | null;
	/**
	 * 标注图标宽度
	 * @defaultValue 默认为图片实际宽度
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	width ?: number | null;
	/**
	 * 标注图标高度
	 * @defaultValue 默认为图片实际高度
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	height ?: number | null;
	/**
	 * 无障碍访问，（属性）元素的额外描述
	 * @defaultValue null
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	ariaLabel ?: string | null;
	/**
	 * 经纬度在标注图标的锚点，默认底边中点	{x, y}，x表示横向(0-1)，y表示竖向(0-1)。{x: .5, y: 1} 表示底边中点
	 * @defaultValue [0.5, 1]
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	anchor ?: Anchor | null;
	/**
	 * 自定义标记点上方的气泡窗口
	 * @defaultValue null
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.51"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.51"
	 *     },
	 *     "harmony": {
	 *       "osVer": "x",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     }
	 *   },
	 * }
	 *
	 */
	callout ?: MapMarkerCallout | null

	/**
	 * 为标记点旁边增加标签
	 * @defaultValue null
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "√",
	 *       "unixVer": "x"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "√",
	 *       "unixVer": "x"
	 *     },
	 *     "harmony": {
	 *       "osVer": "x",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     }
	 *   },
	 * }
	 *
	 */
	label ?: MapMarkerLabel | null
	/**
	 * 自定义点聚合簇效果时使用
	 * @defaultValue null
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "√",
	 *       "unixVer": "x"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "√",
	 *       "unixVer": "x"
	 *     },
	 *     "harmony": {
	 *       "osVer": "x",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     }
	 *   },
	 * }
	 *
	 */
	clusterId ?: number | null;
	/**
	 * 自定义气泡窗口
	 * @defaultValue null
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "√",
	 *       "unixVer": "x"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "√",
	 *       "unixVer": "x"
	 *     },
	 *     "harmony": {
	 *       "osVer": "x",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     }
	 *   },
	 * }
	 *
	 */
	customCallout ?: MapMarkerCallout | null
	/**
	 * 是否参与点聚合
	 * @defaultValue null
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "√",
	 *       "unixVer": "x"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "√",
	 *       "unixVer": "x"
	 *     },
	 *     "harmony": {
	 *       "osVer": "x",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     }
	 *   },
	 * }
	 *
	 */
	joinCluster ?: boolean | null;
};


export type MapMarkerCallout = {
	/**
	 * 文本
	 * @defaultValue ""
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.51"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.51"
	 *     },
	 *   },
	 * }
	 *
	 */
	content ?: string | null;
	/**
	 * 文本颜色
	 * @defaultValue "black"
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.51"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.51"
	 *     },
	 *   },
	 * }
	 *
	 */
	color ?: string.ColorString | null;
	/**
	 * 文字大小
	 * @defaultValue null
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.51"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.51"
	 *     },
	 *   },
	 * }
	 *
	 */
	fontSize ?: number | null;
	/**
	 * 边框圆角
	 * @defaultValue 0
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.51"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.51"
	 *     },
	 *   },
	 * }
	 *
	 */
	borderRadius ?: number | null;
	/**
	 * 边框宽度
	 * @defaultValue 0
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.51"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.51"
	 *     },
	 *   },
	 * }
	 *
	 */
	borderWidth ?: number | null;
	/**
	 * 边框颜色
	 * @defaultValue "transparent"
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.51"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.51"
	 *     },
	 *   },
	 * }
	 *
	 */
	borderColor ?: string.ColorString | null;
	/**
	 * 背景色
	 * @defaultValue "#fff"
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.51"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.51"
	 *     },
	 *   },
	 * }
	 *
	 */
	bgColor ?: string.ColorString | null;
	/**
	 * 文本边缘留白
	 * @defaultValue 0
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.51"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.51"
	 *     },
	 *   },
	 * }
	 *
	 */
	padding ?: number | null;
	/**
	 * 'BYCLICK':点击显示; 'ALWAYS':常显
	 * @defaultValue "BYCLICK"
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.51"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.51"
	 *     },
	 *   },
	 * }
	 *
	 */
	display ?: "BYCLICK" | "ALWAYS" | null;
	/**
	 * 文本对齐方式。
	 * @defaultValue "left"
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.51"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.51"
	 *     },
	 *   },
	 * }
	 *
	 */
	textAlign ?: "left" | "center" | "right" | null;
	/**
	 * 横向偏移量，向右为正数
	 * @defaultValue 0.5
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *   },
	 * }
	 *
	 */
	anchorX ?: number | null;
	/**
	 * 纵向偏移量，向下为正数
	 * @defaultValue 1
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *   },
	 * }
	 *
	 */
	anchorY ?: number | null;
}

export type MapMarkerLabel = {
	/**
	 * 文本
	 * @defaultValue 1
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *   },
	 * }
	 *
	 */
	content ?: string | null;
	/**
	 * 文本颜色
	 * @defaultValue 1
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *   },
	 * }
	 *
	 */
	color ?: string | null;
	/**
	 * 文字大小
	 * @defaultValue 1
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *   },
	 * }
	 *
	 */
	fontSize ?: number | null;
	/**
	 * label的坐标，原点是 marker 对应的经纬度
	 * @defaultValue 1
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *   },
	 * }
	 *
	 */
	x ?: number | null;
	/**
	 * label的坐标，原点是 marker 对应的经纬度
	 * @defaultValue 1
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *   },
	 * }
	 *
	 */
	y ?: number | null;
	/**
	 * label的坐标，原点是 marker 对应的经纬度
	 * @defaultValue 1
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *   },
	 * }
	 *
	 */
	anchorX ?: number | null;
	/**
	 * label的坐标，原点是 marker 对应的经纬度
	 * @defaultValue 1
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *   },
	 * }
	 *
	 */
	anchorY ?: number | null;
	/**
	 * 边框宽度
	 * @defaultValue 1
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *   },
	 * }
	 *
	 */
	borderWidth ?: number | null;
	/**
	 * 边框颜色
	 * @defaultValue 1
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *   },
	 * }
	 *
	 */
	borderColor ?: string | null;
	/**
	 * 边框圆角
	 * @defaultValue 1
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *   },
	 * }
	 *
	 */
	borderRadius ?: number | null;
	/**
	 * 背景色
	 * @defaultValue 1
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *   },
	 * }
	 *
	 */
	bgColor ?: string | null;
	/**
	 * 文本边缘留白
	 * @defaultValue 1
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *   },
	 * }
	 *
	 */
	padding ?: number | null;
	/**
	 * 文本对齐方式。
	 * @defaultValue 1
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *   },
	 * }
	 *
	 */
	textAlign ?: "left" | "center" | "right" | null;
	/**
	 * 无障碍访问，（属性）元素的额外描述
	 * @defaultValue 1
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *   },
	 * }
	 *
	 */
	ariaLabel ?: string | null;
}

export type Anchor = {
	x : number,
	y : number
}

export type Polyline = {
	/**
	 * 经纬度数组
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	points : LocationObject[];
	/**
	 * 线的颜色
	 * @defaultValue null
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	color ?: string.ColorString | null;
	/**
	 * 线的宽度
	 * @defaultValue 0
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	width ?: number | null;
	/**
	 * 是否虚线
	 * @defaultValue false
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	dottedLine ?: boolean | null;
	/**
	 * 带箭头的线
	 * @defaultValue false
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	arrowLine ?: boolean | null;
	/**
	 * 更换箭头图标
	 * @defaultValue null
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	arrowIconPath ?: string | null;
	/**
	 * 线的边框颜色
	 * @defaultValue null
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *   },
	 * }
	 *
	 */
	borderColor ?: string.ColorString | null;
	/**
	 * 线的厚度
	 * @defaultValue null
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *   },
	 * }
	 *
	 */
	borderWidth ?: number | null;
	/**
	 * 彩虹线
	 * @defaultValue null
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	colorList ?: string[] | null;
};

export type Polygon = {
	/**
	 * 经纬度数组
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	points : LocationObject[];
	/**
	 * 描边的宽度
	 * @defaultValue 0
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	strokeWidth ?: number | null;
	/**
	 * 描边的颜色
	 * @defaultValue null
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	strokeColor ?: string.ColorString | null;
	/**
	 * 填充颜色
	 * @defaultValue null
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	fillColor ?: string.ColorString | null;
	/**
	 * 设置多边形 Z 轴数值
	 * @defaultValue 0
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	zIndex ?: number | null;
};

export type Circle = {
	/**
	 * 纬度
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	latitude : number;
	/**
	 * 经度
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	longitude : number;
	/**
	 * 半径
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	radius : number;
	/**
	 * 描边的颜色
	 * @defaultValue null
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	color ?: string.ColorString | null;
	/**
	 * 填充颜色
	 * @defaultValue null
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	fillColor ?: string.ColorString | null;
	/**
	 * 描边的宽度
	 * @defaultValue 0
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	strokeWidth ?: number | null;
};

export type ControlPosition = {
	/**
	 * 距离地图的左边界多远
	 * @defaultValue 0
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	left ?: number | null;
	/**
	 * 距离地图的上边界多远
	 * @defaultValue 0
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	top ?: number | null;
	/**
	 * 控件宽度
	 * @defaultValue 0
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	width ?: number | null;
	/**
	 * 控件高度
	 * @defaultValue 0
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	height ?: number | null;
};

export type Control = {
	/**
	 * 控件相对地图位置
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "x",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     }
	 *   },
	 * }
	 *
	 */
	position : ControlPosition;
	/**
	 * 项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对项目根目录；也支持临时路径
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "x",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     }
	 *   },
	 * }
	 *
	 */
	iconPath : string;
	/**
	 * 在控件点击事件回调会返回此id
	 * @defaultValue null
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "x",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     }
	 *   },
	 * }
	 *
	 */
	id ?: number | null;
	/**
	 * 默认不可点击
	 * @defaultValue false
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "x",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     }
	 *   },
	 * }
	 *
	 */
	clickable ?: boolean | null;
};

export type Bounds = {
	/**
	 * 西南角的经纬度
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	southwest : LocationObject;
	/**
	 * 东北角的经纬度
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	northeast : LocationObject;
};

export type CreateMapContext = (
	mapId : string,
	component ?: ComponentPublicInstance | null
) => MapContext | null;

export type MapContextGetCenterLocationOptions = {
	/**
	 * 接口调用成功的回调函数
	 */
	success ?: ((result : LocationObject) => void) | null;
	/**
	 * 接口调用失败的回调函数
	 * @defaultValue null
	 */
	fail ?: ((result : MapContextFail) => void) | null;
	/**
	 * 接口调用结束的回调函数（调用成功、失败都会执行）
	 * @defaultValue null
	 */
	complete ?: ((result : any) => void) | null;
};

export type MapContextMoveToLocationOptions = {
	/**
	 * 纬度，浮点数，范围为-90~90，负数表示南纬
	 * @defaultValue null
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	latitude ?: number | null;
	/**
	 * 经度，范围为-180~180，负数表示西经
	 * @defaultValue null
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	longitude ?: number | null;
	/**
	 * 接口调用成功的回调函数
	 * @defaultValue null
	 */
	success ?: ((result : any) => void) | null;
	/**
	 * 接口调用失败的回调函数
	 * @defaultValue null
	 */
	fail ?: ((result : MapContextFail) => void) | null;
	/**
	 * 接口调用结束的回调函数（调用成功、失败都会执行）
	 * @defaultValue null
	 */
	complete ?: ((result : any) => void) | null;
};

export type MapContextTranslateMarkerOptions = {
	/**
	 * 指定marker
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	markerId : number;
	/**
	 * 指定marker移动到的目标点
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	destination : LocationObject;
	/**
	 * 移动过程中是否自动旋转marker
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     },
	 *   },
	 * }
	 *
	 */
	autoRotate ?: boolean | null;
	/**
	 * marker的旋转角度
	 * @defaultValue 0
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	rotate ?: number | null;
	/**
	 * 平移和旋转同时进行
	 * @defaultValue false
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	moveWithRotate ?: boolean | null;
	/**
	 * 动画持续时长，平移与旋转分别计算
	 * @defaultValue 1000
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	duration ?: number | null;
	/**
	 * 接口调用成功的回调函数
	 * @defaultValue null
	 */
	success ?: ((result : any) => void) | null;
	/**
	 * 接口调用失败的回调函数
	 * @defaultValue null
	 */
	fail ?: ((result : MapContextFail) => void) | null;
	/**
	 * 接口调用结束的回调函数（调用成功、失败都会执行）
	 * @defaultValue null
	 */
	complete ?: ((result : any) => void) | null;
};

export type MapContextIncludePointsOptions = {
	/**
	 * 要显示在可视区域内的坐标点列表，[{latitude, longitude}]
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	points : LocationObject[];
	/**
	 * 接口调用成功的回调函数
	 * @defaultValue null
	 */
	success ?: ((result : any) => void) | null;
	/**
	 * 接口调用失败的回调函数
	 * @defaultValue null
	 */
	fail ?: ((result : MapContextFail) => void) | null;
	/**
	 * 接口调用结束的回调函数（调用成功、失败都会执行）
	 * @defaultValue null
	 */
	complete ?: ((result : any) => void) | null;
};

export type MapContextGetRegionResult = {
	/**
	 * 西南角的经纬度
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	southwest : LocationObject;
	/**
	 * 东北角的经纬度
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	northeast : LocationObject;
};

export type MapContextGetRegionOptions = {
	/**
	 * 接口调用成功的回调函数
	 * @defaultValue null
	 */
	success ?: ((result : MapContextGetRegionResult) => void) | null;
	/**
	 * 接口调用失败的回调函数
	 * @defaultValue null
	 */
	fail ?: ((result : MapContextFail) => void) | null;
	/**
	 * 接口调用结束的回调函数（调用成功、失败都会执行）
	 * @defaultValue null
	 */
	complete ?: ((result : any) => void) | null;
};

export type MapContextGetScaleResult = {
	/**
	 * 地图缩放级别
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	scale : number;
};

export type MapContextGetScaleOptions = {
	/**
	 * 接口调用成功的回调函数
	 * @defaultValue null
	 */
	success ?: ((result : MapContextGetScaleResult) => void) | null;
	/**
	 * 接口调用失败的回调函数
	 * @defaultValue null
	 */
	fail ?: ((result : MapContextFail) => void) | null;
	/**
	 * 接口调用结束的回调函数（调用成功、失败都会执行）
	 * @defaultValue null
	 */
	complete ?: ((result : any) => void) | null;
};

export type MapContextAddGroundOverlayOptions = {
	/**
	 * 图片图层 id
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "x",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     }
	 *   },
	 * }
	 *
	 */
	id : string;
	/**
	 * 图片路径，支持网络图片、临时路径、代码包路径
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "x",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     }
	 *   },
	 * }
	 *
	 */
	src : string;
	/**
	 * 图片覆盖的经纬度范围
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "x",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     }
	 *   },
	 * }
	 *
	 */
	bounds : Bounds;
	/**
	 * 是否可见
	 * @defaultValue false
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "x",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     }
	 *   },
	 * }
	 *
	 */
	visible ?: boolean | null;
	/**
	 * 图层绘制顺序
	 * @defaultValue 0
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "x",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     }
	 *   },
	 * }
	 *
	 */
	zIndex ?: number | null;
	/**
	 * 图层透明度
	 * @defaultValue 1
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "x",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     }
	 *   },
	 * }
	 *
	 */
	opacity ?: number | null;

	/**
	 * 接口调用成功的回调函数
	 * @defaultValue null
	 */
	success ?: ((result : any) => void) | null;
	/**
	 * 接口调用失败的回调函数
	 * @defaultValue null
	 */
	fail ?: ((result : MapContextFail) => void) | null;
	/**
	 * 接口调用结束的回调函数（调用成功、失败都会执行）
	 * @defaultValue null
	 */
	complete ?: ((result : any) => void) | null;
};

export type MapContextAddMarkersOptions = {
	/**
	 * 同传入 map 组件的 marker 属性
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	markers : Marker[];
	/**
	 * 是否先清空地图上所有 marker
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	clear : boolean;
	/**
	 * 接口调用成功的回调函数
	 * @defaultValue null
	 */
	success ?: ((result : any) => void) | null;
	/**
	 * 接口调用失败的回调函数
	 * @defaultValue null
	 */
	fail ?: ((result : MapContextFail) => void) | null;
	/**
	 * 接口调用结束的回调函数（调用成功、失败都会执行）
	 * @defaultValue null
	 */
	complete ?: ((result : any) => void) | null;
};

export type MapContextMoveAlongOptions = {
	/**
	 * 指定marker
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	markerId : number;
	/**
	 * 移动路径的坐标串，坐标点格式 {longitude, latitude}
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	path : LocationObject[];
	/**
	 * 平滑移动的时间
	 * @defaultValue 1000
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	duration ?: number | null;
	/**
	 * 接口调用成功的回调函数
	 * @defaultValue null
	 */
	success ?: ((result : any) => void) | null;
	/**
	 * 接口调用失败的回调函数
	 * @defaultValue null
	 */
	fail ?: ((result : MapContextFail) => void) | null;
	/**
	 * 接口调用结束的回调函数（调用成功、失败都会执行）
	 * @defaultValue null
	 */
	complete ?: ((result : any) => void) | null;
};

export type MapContextRemoveGroundOverlayOptions = {
	/**
	 * 图片图层 id
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	id : string;
	/**
	 * 接口调用成功的回调函数
	 * @defaultValue null
	 */
	success ?: ((result : any) => void) | null;
	/**
	 * 接口调用失败的回调函数
	 * @defaultValue null
	 */
	fail ?: ((result : MapContextFail) => void) | null;
	/**
	 * 接口调用结束的回调函数（调用成功、失败都会执行）
	 * @defaultValue null
	 */
	complete ?: ((result : any) => void) | null;
};

export type MapContextRemoveMarkersOptions = {
	/**
	 * 要被删除的marker的id属性组成的数组
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	markerIds : number[];
	/**
	 * 接口调用成功的回调函数
	 * @defaultValue null
	 */
	success ?: ((result : any) => void) | null;
	/**
	 * 接口调用失败的回调函数
	 * @defaultValue null
	 */
	fail ?: ((result : MapContextFail) => void) | null;
	/**
	 * 接口调用结束的回调函数（调用成功、失败都会执行）
	 * @defaultValue null
	 */
	complete ?: ((result : any) => void) | null;
};

export type MapContextUpdateGroundOverlayOptions = {
	/**
	 * 图片图层 id
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "x",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     }
	 *   },
	 * }
	 *
	 */
	id : string;
	/**
	 * 图片路径，支持网络图片、临时路径、代码包路径
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "x",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     }
	 *   },
	 * }
	 *
	 */
	src : string;
	/**
	 * 图片覆盖的经纬度范围
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "x",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     }
	 *   },
	 * }
	 *
	 */
	bounds : Bounds;
	/**
	 * 是否可见
	 * @defaultValue true
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "x",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     }
	 *   },
	 * }
	 *
	 */
	visible ?: boolean | null;
	/**
	 * 图层绘制顺序
	 * @defaultValue 0
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "x",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     }
	 *   },
	 * }
	 *
	 */
	zIndex ?: number | null;
	/**
	 * 图层透明度
	 * @defaultValue 1
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "x",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     }
	 *   },
	 * }
	 *
	 */
	opacity ?: number | null;

	/**
	 * 接口调用成功的回调函数
	 * @defaultValue null
	 */
	success ?: ((result : any) => void) | null;
	/**
	 * 接口调用失败的回调函数
	 * @defaultValue null
	 */
	fail ?: ((result : MapContextFail) => void) | null;
	/**
	 * 接口调用结束的回调函数（调用成功、失败都会执行）
	 * @defaultValue null
	 */
	complete ?: ((result : any) => void) | null;
};


/**
 * 错误码
 */
export type MapErrorCode =
	/**
	 * 获取当前地图中心的经纬度失败
	 */
	500001 |
	/**
	 * 未找到当前定位位置
	 */
	500002 |
	/**
	 * 未找到marker
	 */
	500003 |
	/**
	 * 创建自定义图片图层失败
	 */
	500004 |
	/**
	 * 未找到自定义图层id
	 */
	500005 |
	/**
	 * 网络图片加载失败
	 */
	500006 |
	/**
	 * 地图内部错误
	 */
	500012;

/**
 * MapContext API调用失败
 */
export interface MapContextFail extends IUniError {
	errCode : MapErrorCode
};

export interface MapContext {
	/**
	 * 获取当前地图中心的经纬度，返回的是 gcj02 坐标系，可以用于 uni.openLocation
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	getCenterLocation(options : MapContextGetCenterLocationOptions) : void;

	/**
	 * 将地图中心移动到当前定位点，需要配合map组件的show-location使用
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	moveToLocation(options : MapContextMoveToLocationOptions) : void;

	/**
	 * 平移marker，带动画
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	translateMarker(options : MapContextTranslateMarkerOptions) : void;

	/**
	 * 缩放视野展示所有经纬度
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	includePoints(options : MapContextIncludePointsOptions) : void;

	/**
	 * 获取当前地图的视野范围
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	getRegion(options : MapContextGetRegionOptions) : void;

	/**
	 * 获取当前地图的缩放级别
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	getScale(options : MapContextGetScaleOptions) : void;

	/**
	 * 创建自定义图片图层，图片会随着地图缩放而缩放
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "x",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     }
	 *   },
	 * }
	 *
	 */
	addGroundOverlay(options : MapContextAddGroundOverlayOptions) : void;

	/**
	 * 添加 marker
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	addMarkers(options : MapContextAddMarkersOptions) : void;

	// initMarkerCluster(options: MapContextInitMarkerClusterOptions): void;

	/**
	 * 沿指定路径移动 marker，用于轨迹回放等场景。动画完成时触发回调事件，若动画进行中，对同一 marker 再次调用 moveAlong 方法，前一次的动画将被打断。
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	moveAlong(options : MapContextMoveAlongOptions) : void;

	// openMapApp(options: MapContextOpenMapAppOptions): void;

	/**
	 * 移除自定义图片图层
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "x",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     }
	 *   },
	 * }
	 *
	 */
	removeGroundOverlay(options : MapContextRemoveGroundOverlayOptions) : void;

	/**
	 * 移除 marker
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "√",
	 *       "uniVer": "x",
	 *       "unixVer": "4.61"
	 *     }
	 *   },
	 * }
	 *
	 */
	removeMarkers(options : MapContextRemoveMarkersOptions) : void;

	/**
	 * 更新自定义图片图层。
	 * @uniPlatform {
	 *   "app": {
	 *     "android": {
	 *       "osVer": "4.4",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "ios": {
	 *       "osVer": "12.0",
	 *       "uniVer": "x",
	 *       "unixVer": "4.31"
	 *     },
	 *     "harmony": {
	 *       "osVer": "x",
	 *       "uniVer": "x",
	 *       "unixVer": "x"
	 *     }
	 *   },
	 * }
	 *
	 */
	updateGroundOverlay(options : MapContextUpdateGroundOverlayOptions) : void;

	// on(event: 'markerClusterCreate' | 'markerClusterClick', callback: (...args: any[]) => any): void;
}

export interface Uni {
	/**
	 * 创建并返回 map 上下文 mapContext 对象
	 * @uniPlatform {
     *   "app": {
     *     "android": {
     *       "osVer": "4.4",
     *       "uniVer": {
     *         "vue": "√",
     *         "nvue": "2.2.5"
     *       },
     *       "unixVer": "4.31"
     *     },
     *     "ios": {
     *       "osVer": "12.0",
     *       "uniVer": {
     *         "vue": "√",
     *         "nvue": "2.2.5"
     *       },
     *       "unixVer": "4.31"
     *     },
     *     "harmony": {
     *       "osVer": "√",
     *       "uniVer": "x",
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
     *       "hostVer": "1.9.0",
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
	 * @uniVueVersion 2,3
	 * @return {MapContext} map组件上下文对象
	 *
	 * @tutorial-uni-app https://uniapp.dcloud.net.cn/api/location/map.html#createmapcontext
	 * @tutorial-uni-app-x https://doc.dcloud.net.cn/uni-app-x/api/create-map-context.html
	 * @tutorial https://doc.dcloud.net.cn/uni-app-x/api/create-map-context.html
     * @tutorial_weixin https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.html
     */
	createMapContext: (mapId: string, component?: ComponentPublicInstance | null) => MapContext | null;
}
