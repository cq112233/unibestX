

export type GetAccessibilityInfo = () => UTSJSONObject;

export interface Uni {
	/**
	 * 获取无障碍服务信息
	 * @uniPlatform
	 * {
	 * 	"app": {
	 * 		"android": {
	 * 			"osVer": "5.0",
	 * 			"uniVer": "x",
	 * 			"unixVer": "4.51"
	 * 		},
	 * 		"ios": {
	 * 			"osVer": "x",
	 * 			"uniVer": "x",
	 * 			"unixVer": "x"
	 * 		},
	 *    "harmony": {
	 *      "osVer": "x",
	 *      "uniVer": "x",
	 *      "unixVer": "x"
	 *    }
	 * 	}
	 * }
	 * @example
	 ```typescript
	  uni.getAccessibilityInfo()
	 ```
	 * @return {object}
	 */
	getAccessibilityInfo() : UTSJSONObject;
}