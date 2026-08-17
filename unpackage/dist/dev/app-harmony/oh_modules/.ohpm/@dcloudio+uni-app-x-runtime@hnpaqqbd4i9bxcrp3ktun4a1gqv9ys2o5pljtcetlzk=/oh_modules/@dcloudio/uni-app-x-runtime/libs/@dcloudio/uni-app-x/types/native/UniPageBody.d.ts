export type UniPageBody = {
    /**
     * 页面内容区域左上角横坐标
     * @uniPlatform {
     *    "app": {
     *        "android": {
     *            "osVer": "5.0",
     *            "uniVer": "x",
     *            "unixVer": "4.51"
     *        },
     *        "ios": {
     *            "osVer": "12.0",
     *            "uniVer": "x",
     *            "unixVer": "4.51"
     *   	    }
     *    }
     * }
     */
    readonly left: number
    /**
     * 页面内容区域右下角横坐标
     * @uniPlatform {
     *    "app": {
     *        "android": {
     *            "osVer": "5.0",
     *            "uniVer": "x",
     *            "unixVer": "4.51"
     *        },
     *        "ios": {
     *            "osVer": "12.0",
     *            "uniVer": "x",
     *            "unixVer": "4.51"
     *   	    }
     *    }
     * }
     */
    readonly right: number
    /**
     * 页面内容区域左上角纵坐标
     * @uniPlatform {
     *    "app": {
     *        "android": {
     *            "osVer": "5.0",
     *            "uniVer": "x",
     *            "unixVer": "4.51"
     *        },
     *        "ios": {
     *            "osVer": "12.0",
     *            "uniVer": "x",
     *            "unixVer": "4.51"
     *   	    }
     *    }
     * }
     */
    readonly top: number
    /**
     * 页面内容区域右下角纵坐标
     * @uniPlatform {
     *    "app": {
     *        "android": {
     *            "osVer": "5.0",
     *            "uniVer": "x",
     *            "unixVer": "4.51"
     *        },
     *        "ios": {
     *            "osVer": "12.0",
     *            "uniVer": "x",
     *            "unixVer": "4.51"
     *   	    }
     *    }
     * }
     */
    readonly bottom: number
    /**
     * 页面内容区域宽度
     * @uniPlatform {
     *    "app": {
     *        "android": {
     *            "osVer": "5.0",
     *            "uniVer": "x",
     *            "unixVer": "4.51"
     *        },
     *        "ios": {
     *            "osVer": "12.0",
     *            "uniVer": "x",
     *            "unixVer": "4.51"
     *   	    }
     *    }
     * }
     */
    readonly width: number
    /**
     * 页面内容区域高度
     * @uniPlatform {
     *    "app": {
     *        "android": {
     *            "osVer": "5.0",
     *            "uniVer": "x",
     *            "unixVer": "4.51"
     *        },
     *        "ios": {
     *            "osVer": "12.0",
     *            "uniVer": "x",
     *            "unixVer": "4.51"
     *   	    }
     *    }
     * }
     */
    readonly height: number
}