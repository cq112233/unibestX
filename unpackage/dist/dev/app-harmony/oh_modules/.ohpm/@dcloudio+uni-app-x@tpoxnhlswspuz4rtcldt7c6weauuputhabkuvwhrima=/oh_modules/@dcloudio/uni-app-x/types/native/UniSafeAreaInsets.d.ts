export type UniSafeAreaInsets = {
    /**
     * 安全区域左侧插入位置（距离左边边界距离）
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
     * 安全区域右侧插入位置（距离右边边界距离）
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
     * 安全区顶部插入位置（距离顶部边界距离）
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
     * 安全区域底部插入位置（距离底部边界距离）
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
}