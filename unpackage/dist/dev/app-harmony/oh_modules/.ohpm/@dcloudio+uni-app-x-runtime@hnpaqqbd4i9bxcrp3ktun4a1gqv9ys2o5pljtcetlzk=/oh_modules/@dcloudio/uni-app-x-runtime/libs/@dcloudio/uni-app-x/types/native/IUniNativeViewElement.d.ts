import { UniElement } from "./IUniElement"
import { UniCustomEvent } from "./UniCustomEvent"
/**
 * native-view 元素对象
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.31"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.31"
 *   	    },
 *        "harmony": {
 *          "osVer": "5.0.0",
 *          "uniVer": "x",
 *          "unixVer": "4.61",
 *          "unixvVer": "5.0"
 *        }
 *    }
 * }
 */
export interface UniNativeViewElement extends UniElement {
 /**
  * 绑定安卓平台原生view
  * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.31"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *   	    },
   *        "harmony": {
   *          "osVer": "x",
   *          "uniVer": "x",
   *          "unixVer": "x",
   *          "unixvVer": "x"
   *        }
   *    }
   * }
  */
 bindAndroidView(view: View): void
 /**
  * 绑定IOS平台原生view
  * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.31"
   *   	    },
   *        "harmony": {
   *          "osVer": "x",
   *          "uniVer": "x",
   *          "unixVer": "x",
   *          "unixvVer": "x"
   *        }
   *    }
   * }
  */
 bindIOSView(view: UIView): void
 /**
  * 绑定鸿蒙 FrameNode
  * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "x",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *        },
   *        "ios": {
   *            "osVer": "x",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *   	    },
   *        "harmony": {
   *          "osVer": "5.0.0",
   *          "uniVer": "x",
   *          "unixVer": "4.61",
   *          "unixvVer": "x"
   *        }
   *    }
   * }
  */
 bindHarmonyFrameNode(node: FrameNode): void
 /**
  * 绑定鸿蒙 wrapperBuilder
  * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "x",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *        },
   *        "ios": {
   *            "osVer": "x",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *   	    },
   *        "harmony": {
   *          "osVer": "5.0.0",
   *          "uniVer": "x",
   *          "unixVer": "4.61",
   *          "unixvVer": "5.0"
   *        }
   *    }
   * }
  */
 bindHarmonyWrappedBuilder<O extends Object>(builder: WrappedBuilder<[options: O]>, options?: ESObject): BuilderNode<[O]>
 /**
  * 获取鸿蒙 FrameNode
  * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "x",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *        },
   *        "ios": {
   *            "osVer": "x",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *   	    },
   *        "harmony": {
   *          "osVer": "5.0.0",
   *          "uniVer": "x",
   *          "unixVer": "4.61",
   *          "unixvVer": "x"
   *        }
   *    }
   * }
  */
 getHarmonyFrameNode(): FrameNode | null
 /**
  * 获取鸿蒙 BuilderNode
  * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "x",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *        },
   *        "ios": {
   *            "osVer": "x",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *   	    },
   *        "harmony": {
   *          "osVer": "5.0.0",
   *          "uniVer": "x",
   *          "unixVer": "4.61",
   *          "unixvVer": "x"
   *        }
   *    }
   * }
  */
 getHarmonyBuilderNode<O extends Object>(): BuilderNode<[O]>
 /**
  * 获取鸿蒙 ComponentContent
  * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "x",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *        },
   *        "ios": {
   *            "osVer": "x",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *   	    },
   *        "harmony": {
   *          "osVer": "5.0.0",
   *          "uniVer": "x",
   *          "unixVer": "4.91",
   *          "unixvVer": "5.0"
   *        }
   *    }
   * }
  */
 getHarmonyComponentContent<O extends Object>(): ComponentContent<[O]>
 /**
  * 绑定鸿蒙控制器
  * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "x",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *        },
   *        "ios": {
   *            "osVer": "x",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *   	    },
   *        "harmony": {
   *          "osVer": "5.0.0",
   *          "uniVer": "x",
   *          "unixVer": "4.61",
   *          "unixvVer": "5.0"
   *        }
   *    }
   * }
  */
 bindHarmonyController<T extends Object>(controller: T): void
}

export let UniNativeViewElement: {
 prototype: UniNativeViewElement;
 new(): UniNativeViewElement;
}

/**
 * native-view自定义事件
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.31"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.31"
 *   	    },
 *        "harmony": {
 *          "osVer": "5.0.0",
 *          "uniVer": "x",
 *          "unixVer": "4.61",
 *          "unixvVer": "5.0"
 *        }
 *    }
 * }
 */
export class UniNativeViewEvent extends UniCustomEvent<UTSJSONObject> {
 /**
  * 事件类型
  */
 type: string
 detail : UTSJSONObject

 constructor(type: string, detail: UTSJSONObject)
 constructor(type: string)
}

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniNativeViewInitEventDetail {
 readonly element : UniNativeViewElement
}

/**
 * native-view 组件 init事件event
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.31"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.31"
 *   	    },
 *        "harmony": {
 *          "osVer": "5.0.0",
 *          "uniVer": "x",
 *          "unixVer": "4.61",
 *          "unixvVer": "5.0"
 *        }
 *    }
 * }
 */
export class UniNativeViewInitEvent extends UniCustomEvent<UniNativeViewInitEventDetail> {
 constructor(type: string, detail: UniNativeViewInitEventDetail)
}

export class UniNativeViewReadyEventDetail {
 readonly element : UniNativeViewElement
}

/**
 * native-view 组件 ready事件event
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "x",
 *            "uniVer": "x",
 *            "unixVer": "x"
 *        },
 *        "ios": {
 *            "osVer": "x",
 *            "uniVer": "x",
 *            "unixVer": "x"
 *   	    },
 *        "harmony": {
 *          "osVer": "x",
 *          "uniVer": "x",
 *          "unixVer": "x",
 *          "unixvVer": "5.0"
 *        }
 *    }
 * }
 */
export class UniNativeViewReadyEvent extends UniCustomEvent<UniNativeViewReadyEventDetail> {
 constructor(type: string, detail: UniNativeViewReadyEventDetail)
}
