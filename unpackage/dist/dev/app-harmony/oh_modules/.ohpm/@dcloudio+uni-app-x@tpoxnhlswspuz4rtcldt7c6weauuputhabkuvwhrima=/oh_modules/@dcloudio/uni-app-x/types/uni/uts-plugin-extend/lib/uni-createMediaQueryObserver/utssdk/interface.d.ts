export type DescriptorOptions = {
  /**
   * 屏幕方向（ landscape 或 portrait ）
   * - landscape:
   * - portrait:
   */
  orientation: 'landscape' | 'portrait';
  /**
   * 页面宽度（ px 为单位）
   */
  width?: number;
  /**
   * 页面高度（ px 为单位）
   */
  height?: number;
  /**
   * 页面最小宽度（ px 为单位）
   */
  'min-width'?: number;
  /**
   * 页面最小高度（ px 为单位）
   */
  'min-height'?: number;
  /**
   * 页面最大宽度（ px 为单位）
   */
  'max-width'?: number;
  /**
   * 页面最大高度（ px 为单位）
   */
  'max-height'?: number;
}

export type MediaQueryObserveResult = {
  /**
   * 页面的当前状态是否满足所指定的 media query
   */
  matches: boolean;
}

export type MediaQueryObserver = {
  /**
   * 开始监听页面 media query 变化情况
   */
  observe(descriptor: DescriptorOptions, callback: (result: MediaQueryObserveResult) => void): void;
  /**
   * 停止监听，回调函数将不再触发
   */
  disconnect(): void;
}


export interface Uni {
  /**
   * 创建并返回一个 MediaQueryObserver 对象实例。context: 自定义组件实例。
   *
   * @tutorial http://uniapp.dcloud.io/api/ui/media-query-observer?id=createmediaqueryobserver
   * @tutorial_uni_app http://uniapp.dcloud.io/api/ui/media-query-observer?id=createmediaqueryobserver
   * @uniPlatform {
   *  "app": {
   *    "android": {
   *      "osVer": "5.0",
   *      "uniVer": "√",
   *      "unixVer": "x"
   *    },
   *    "ios": {
   *      "osVer": "12.0",
   *      "uniVer": "√",
   *      "unixVer": "x"
   *    },
   *    "harmony": {
   *      "osVer": "x",
   *      "uniVer": "x",
   *      "unixVer": "x"
   *    }
   *  },
   *  "mp": {
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
   *      "hostVer": "x",
   *      "uniVer": "x",
   *      "unixVer": "x"
   *    },
   *    "jd": {
   *      "hostVer": "x",
   *      "uniVer": "x",
   *      "unixVer": "x"
   *    }
   *  },
   *  "web": {
   *    "uniVer": "√",
   *    "unixVer": "4.0"
   *  }
   * }
   */
  createMediaQueryObserver(context?: any): MediaQueryObserver
}
