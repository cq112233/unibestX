import { DrawableContext } from "./DrawableContext"
import { TakeSnapshotOptions } from "./SnapshotOptions"
import { UniEvent } from "./UniEvent"
import { CSSStyleDeclaration } from "./CSSStyleDeclaration"
import { DOMRect } from "./DOMRect"
import { UniCallbackWrapper } from "./UniCallbackWrapper"
import { CanvasRenderingContext2D } from "./CanvasRenderingContext2D"
import { UniAnimation } from "./UniAnimation"
import { UniPage } from "./UniPage"

export type GetBoundingClientRectAsyncSuccessCallback = (rect: DOMRect) => void
export type GetBoundingClientRectAsyncFailCallback = () => void
export type GetBoundingClientRectAsyncCompleteCallback = (rect: any | null) => void
export type GetBoundingClientRectAsyncOptions = {
  success?: GetBoundingClientRectAsyncSuccessCallback | null
  fail?: GetBoundingClientRectAsyncFailCallback | null
  complete?: GetBoundingClientRectAsyncCompleteCallback | null
}

/**
 * UVUE DOM 元素对象，描述了 UVUE DOM 元素所普通具有的属性和方法。
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.0"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.11"
 *   	  }
 *    }
 *    "web": {
 *        "uniVer": "x",
 *        "unixVer": "4.0"
 *    }
 * }
 */
export interface UniElement {
  /**
   * 只读属性 节点是否与 DOM 树连接
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
   *            "unixVer": "x"
   *            "unixUtsPlugin": "x"
   *   	  },
   *       "harmony": {
   *         "osVer": "12",
   *         "uniVer": "x",
   *         "unixVer": "4.61"
   *      }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  isConnected: boolean
  /**
   * 元素所属的页面对象
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
   *            "unixVer": "x"
   *            "unixUtsPlugin": "x"
   *   	  },
   *       "harmony": {
   *         "osVer": "12",
   *         "uniVer": "x",
   *         "unixVer": "4.61"
   *      }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  uniPage: UniPage
  /**
   * 只读属性 获取当前元素的的 class 属性的动态集合。
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "x"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  classList: string[]

  /**
   * 只读属性 获取当前元素的的第一个子元素，如果元素是无子元素，则返回 null。
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  readonly firstChild: UniElement | null

  /**
   * 只读属性 获取当前元素的最后一个子元素，如果没有子元素，则返回 null。
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  readonly lastChild: UniElement | null

  /**
   * 只读属性 获取当前元素在 DOM 树中的父元素，如果没有父元素（如未添加到DOM树中），则返回null。
   * @internal
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  readonly parentNode: UniElement | null

  /**
   * 只读属性 获取当前元素在 DOM 树中的父元素，如果没有父元素（如未添加到DOM树中），则返回null。
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  readonly parentElement: UniElement | null

  /**
   * 只读属性 获取当前元素的前一个同级元素，没有则返回null。
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  readonly previousSibling: UniElement | null

  /**
   * 只读属性 获取在 DOM 树中紧跟在其后面的同级元素，如果指定的元素为最后一个元素，则返回 null。
   * @internal
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  readonly nextSibling: UniElement | null

  /**
   * 只读属性 获取在 DOM 树中紧跟在其后面的同级元素，如果指定的元素为最后一个元素，则返回 null。
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  readonly nextElementSibling: UniElement | null

  /**
   * 只读属性 获取当前元素包含的子元素的集合
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  readonly children: UniElement[]

  /**
   * 只读属性 获取当前节点包含的子节点的集合
   * @internal
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  readonly childNodes: UniElement[]

  /**
   * 只读属性 获取当前元素的标签名
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "4.41"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  readonly tagName: string

  /**
   * 只读属性 获取当前元素的元素名称
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  readonly nodeName: string

  /**
   * 只读属性 获取元素上自定义数据属性（data-*）的集合
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "x"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "4.41 仅在event对象内的target上可用"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  readonly dataset: Map<string, any | null>

  /**
   * 只读属性 获取元素上所有属性元素的集合
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  readonly attributes: Map<string, any | null>

  /**
   * 只读属性 获取元素的CSS样式对象
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "4.41"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  readonly style: CSSStyleDeclaration

  /**
   * 只读属性 获取可滚动元素内容的总宽度，仅scroll-view、list-view组件支持，其他组件返回视图宽度
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  readonly scrollWidth: number

  /**
   * 只读属性 获取可滚动元素内容的总高度，仅scroll-view、list-view组件支持，其他组件返回视图高度
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  readonly scrollHeight: number

  /**
   * 获取或修改元素滚动条到元素左边的距离像素数，仅scroll-view、list-view组件支持。其他组件返回0
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  scrollLeft: number

  /**
   * 获取或修改元素滚动条到元素顶部的距离像素数，仅scroll-view、list-view组件支持。其他组件返回0
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  scrollTop: number

  /**
   * 只读属性 元素的左边界偏移值 单位px
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "4.41 仅在event对象内的target上可用"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  readonly offsetLeft: number

  /**
   * 只读属性 元素的顶部边界偏移值 单位px
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "4.41 仅在event对象内的target上可用"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  readonly offsetTop: number

  /**
   * 只读属性 元素的布局宽度，宽度包含border、padding的数据值 单位px
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11",
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  readonly offsetWidth: number

  /**
   * 只读属性 元素的布局高度，高度包含border、padding的数据值 单位px
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  readonly offsetHeight: number

  /**
   * 只读属性 扩展属性
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "x"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  readonly ext: Map<string, any | null>

  /**
   * 获取元素标识。
   * @internal
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  getNodeId(): string

  /**
   * 对当前组件进行截图，调用此方法会将当前组件（包含子节点）渲染结果导出成图片。
   * 成功会返回图片对应的临时文件路径，目前默认png格式
   *
   * @param options 组件截图的参数对象
   * @tutorial_uni_app_x https://doc.dcloud.net.cn/uni-app-x/dom/unielement.html#takesnapshot
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "3.93"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  takeSnapshot(options: TakeSnapshotOptions): void

  /**
   * 将一个元素添加到指定父元素的子元素列表的末尾处。如果将被插入的元素已经存在于当前文档的文档树中，那么将会它从原先的位置移动到新的位置。
   * @param {UniElement} aChild 插入子元素对象
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  appendChild(aChild: UniElement): void

  /**
   * 在参考元素之前插入一个拥有指定父元素的子元素。如果给定的子元素是对文档中现有元素的引用，insertBefore() 会将其从当前位置移动到新位置。
   * @param newChild 插入子元素对象
   * @param refChild 已存在父元素的子元素对象
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  insertBefore(newChild: UniElement, refChild?: UniElement | null): UniElement | null

  /**
   * 将一个元素添加到指定父元素的子元素列表的末尾处 功能等同于appendChild
   * @param newChild 插入子元素对象
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  insertBefore(newChild: UniElement): UniElement | null

  /**
   * 设置指定元素上的某个属性值。如果设置的属性已经存在，则更新该属性值；否则使用指定的名称和值添加一个新的属性。
   * @param {string} key 属性名称
   * @param {string} value 属性值域
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  setAttribute(key: string, value: string): void

  /**
   * 设置指定元素上的某个属性值。功能等同setAttribute value支持任意类型
   * @param {string} key 属性名称
   * @param {string} value 属性值域
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  setAnyAttribute(key: string, value: any): void

  /**
   * 获取元素指定的属性值，如果指定的属性不存在则返回null。
   * @param {string} key 属性名称
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "4.41"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  getAttribute(key: string): string | null

  /**
   * 返回元素上一个指定的属性值。如果指定的属性不存在，则返回 null
   * @param {string} key 属性名称
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  getAnyAttribute(key: string): any | null

  /**
   * 返回该元素是否包含有指定的属性，属性存在则返回true，否则返回false。
   * @param {string} key 属性名称
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  hasAttribute(key: string): boolean

  /**
   * 从元素中删除一个属性，如果指定的属性不存在，则不做任何操作，也不会产生错误。
   * @param {string} key 属性名称
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  removeAttribute(key: string): void

  /**
   * 更新元素的样式。
   * @internal
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  updateStyle(map: Map<string, any | null>): void

  /**
   * 获取元素的大小及其相对于窗口的位置信息。
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  getBoundingClientRect(): DOMRect


  /**
   * 获取元素的大小及其相对于窗口的位置信息 异步。
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.41"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.41"
   *            "unixUtsPlugin": "x"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "4.41"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.41"
   *    }
   * }
   */
  getBoundingClientRectAsync(options?: GetBoundingClientRectAsyncOptions | null): Promise<DOMRect> | null

  /**
   * 获取组件的绘制对象，仅uvue页面中的 view 组件支持，其它组件不支持则返回null。
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "3.9+"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  getDrawableContext(): DrawableContext | null

  /**
   * 将指定的监听器注册到元素对象上，当该对象触发指定的事件时，指定的回调函数就会被执行。
   * @param {string} type 事件类型
   * @param {(event: T) => R} callback 事件监听器 T表示event类型，R表示返回值类型
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "x"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  addEventListener<T extends UniEvent, R>(type: string, callback: (event: T) => R): UniCallbackWrapper

  /**
   * 删除使用 addEventListener 方法添加的事件监听器。
   * @param type 事件类型
   * @param callbackWrapper 事件监听回调封装类
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  removeEventListener(type: string, callbackWrapper: UniCallbackWrapper): void

  /**
   * 从元素中删除一个子元素，返回删除的元素。
   * @param {UniElement} aChild 被删除子元素对象
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  removeChild(aChild: UniElement): UniElement | null

  /**
   * 把元素对象从它所属的 DOM 树中删除。
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  remove(): void

  /**
   * 向一个指定的事件目标派发一个 Event，并以合适的顺序（同步地）调用此事件的监听器回调函数。
   * @internal
   * @param {string} type 事件类型
   * @param {UniEvent} value 事件返回对象
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  dispatchEvent(type: string, value: UniEvent): void

  /**
   * 向一个指定的事件目标派发一个 Event，并以合适的顺序（同步地）调用此事件的监听器回调函数。
   * @param {UniEvent} value 事件返回对象
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.25"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  dispatchEvent(value: UniEvent): void

  /**
   * 使界面滚动到给定元素的指定坐标位置 仅scroll-view、list-view组件支持
   * @param {number} x x轴要滚动到坐标位置(单位px)
   * @param {number} y y轴要滚动到坐标位置(单位px)
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  scrollTo(x: number, y: number): void

  /**
   * 使得元素滚动一段特定距离 仅scroll-view、list-view组件支持
   * @param {number} x x轴要滚动的距离(单位px)
   * @param {number} y y轴要滚动的距离(单位px)
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  scrollBy(x: number, y: number): void

  /**
   * 返回文档中与指定选择器或选择器组匹配的第一个 Element对象。如果找不到匹配项，则返回null
   * @param {string.cssSelectorString}selector CSS 选择器字符串
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  querySelector(selector: string.cssSelectorString): UniElement | null

  /**
   * 返回与指定的选择器组匹配的文档中的元素列表
   * @param {string.cssSelectorString}selector CSS 选择器字符串
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  querySelectorAll(selector: string.cssSelectorString): UniElement[] | null

  /**
   * 使元素获取焦点 仅input、Textarea组件支持
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  focus(): void

  /**
   * 使元素丢失焦点 仅input、Textarea组件支持
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  blur(): void

  /**
   * 获取元素ios原生view
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "x",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *            "unixUtsPlugin": "x"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "x",
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  getIOSView(): UIView | null

  /**
   * 获取元素android原生view 可能返回null
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  getAndroidView(): View | null

  /**
   * 获取元素android原生view 通过泛型定义view类型 可能返回null
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  getAndroidView<T>(): T | null

  /**
   * 获取元素android原生activity 可能返回null
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  getAndroidActivity(): Activity | null
  /**
   * 获取元素所属的页面对象
   * @deprecated 请使用 uniPage 属性
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
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.31"
   *    }
   * }
   */
  getPage(): UniPage | null

  /**
   * 创建一个新的动画并应用于元素，然后立即执行动画。
   * @param {any} keyframes 关键帧对象数组或一个关键帧对象。
   * @param {any} options 动画属性配置。
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "4.53"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  animate(keyframes : UniAnimationKeyframe|UniAnimationKeyframe[], options : UniAnimationOption|number) : UniAnimation | null

  /**
   * 鸿蒙原生组件控制器，可以控制组件的状态。可能返回null
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *          "osVer": "x",
   *          "uniVer": "x",
   *          "unixVer": "x"
   *        },
   *        "ios": {
   *          "osVer": "x",
   *          "uniVer": "x",
   *          "unixVer": "x"
   *   	    },
   *       "harmony": {
   *         "osVer": "5.0.0",
   *         "uniVer": "x",
   *         "unixVer": "4.61"
   *      }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  getHarmonyController(): any | null
  /**
   * 鸿蒙原生组件控制器，可以控制组件的状态。通过泛型定义view类型，可能返回null
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *          "osVer": "x",
   *          "uniVer": "x",
   *          "unixVer": "x"
   *        },
   *        "ios": {
   *          "osVer": "x",
   *          "uniVer": "x",
   *          "unixVer": "x"
   *   	    },
   *       "harmony": {
   *         "osVer": "5.0.0",
   *         "uniVer": "x",
   *         "unixVer": "4.61"
   *      }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  getHarmonyController<T>(): T | null

  /**
   * 控制元素进入全屏状态
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.61"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.61"
   *   	  },
   *       "harmony": {
   *         "osVer": "5.0.0",
   *         "uniVer": "x",
   *         "unixVer": "4.61"
   *      }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  requestFullscreen(options?: RequestFullscreenOptions|null) : void
}

export type RequestFullscreenOptions = {
  /**
   *全屏模式时导航栏状态
   */
 navigationUI?:
 /**
  * 隐藏所有系统状态栏和底部导航栏
  */
 "hide"|
 /**
  *隐藏顶部系统状态栏，显示底部系统导航栏
  */
 "show"|
 /**
  *系统默认行为
  */
 "auto"| null
 /**
  *全屏显示方向
  */
 orientation ?:
 /**
  *根据重力感应自动调整
  */
 "auto"|
 /**
  *固定为横屏，会根据重力调整方向
  */
 "landscape"|
 /**
  *固定为反向横屏
  */
 "landscape-secondary"|
 /**
  *固定为正向横屏
  */
 "landscape-primary"|
 /**
  *固定为竖屏
  */
 "portrait"| null
 /**
  *成功回调
  */
 success:RequestFullscreenSuccessCallback| null
 /**
  *失败回调
  */
 fail:RequestFullscreenFailCallback| null
 /**
  *完成回调
  */
 complete:RequestFullscreenCompleteCallback| null
}

/**
 * 错误码
 */
export type FullscreenErrorCode =
/**
 * 当前页面已经有element处于全屏状态
 */
106600|
/**
 * 当前element不支持全屏
 */
106601|
/**
 * 当前页面没有element处于全屏状态
 */
106602|
/**
 * 页面已销毁或者尚未就绪
 */
106603 |
/**
 * 组件未就绪
 */
106604


export interface IFullscreenError extends IUniError {
	errCode: FullscreenErrorCode
}
export type FullscreenError = IFullscreenError

export type RequestFullscreenSuccessCallback = () => void

export type RequestFullscreenFailCallback = (error:FullscreenError) => void

export type RequestFullscreenCompleteCallback = (result:any|null) => void

export type UniAnimationKeyframe = {
  /**
   * 控制宽度属性的过渡效果
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  width?:string[]|string|null
  /**
   * 控制高度属性的过渡效果
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  height?:string[]|string|null
  /**
   * 控制外边距属性的过渡效果
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  margin?:string[]|string|null
  /**
   * 控制上外边距属性的过渡效果
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  marginTop?:string[]|string|null
  /**
   * 控制下外边距属性的过渡效果
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  marginBottom?:string[]|string|null
  /**
   * 控制左外边距属性的过渡效果
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  marginLeft?:string[]|string|null
  /**
   * 控制右外边距属性的过渡效果
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  marginRight?:string[]|string|null
  /**
   * 控制左侧位置属性的过渡效果
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  left?:string[]|string|null
  /**
   * 控制右侧位置属性的过渡效果
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  right?:string[]|string|null
  /**
   * 控制顶部位置属性的过渡效果
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  top?:string[]|string|null
  /**
   * 控制底部位置属性的过渡效果
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  bottom?:string[]|string|null
  /**
   * 控制内边距属性的过渡效果
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  padding?:string[]|string|null
  /**
   * 控制左内边距属性的过渡效果
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  paddingLeft?:string[]|string|null
  /**
   * 控制右内边距属性的过渡效果
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  paddingRight?:string[]|string|null
  /**
   * 控制上内边距属性的过渡效果
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  paddingTop?:string[]|string|null
  /**
   * 控制下内边距属性的过渡效果
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  paddingBottom?:string[]|string|null
  /**
   * 控制透明度属性的过渡效果
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  opacity?:string[]|string|null
  /**
   * 控制背景颜色属性的过渡效果
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  backgroundColor?:string[]|string|null
  /**
   * 控制边框颜色属性的过渡效果
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  borderColor?:string[]|string|null
  /**
   * 控制上边框颜色属性的过渡效果
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  borderTopColor?:string[]|string|null
  /**
   * 控制下边框颜色属性的过渡效果
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  borderBottomColor?:string[]|string|null
  /**
   * 控制左边框颜色属性的过渡效果
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  borderLeftColor?:string[]|string|null
  /**
   * 控制右边框颜色属性的过渡效果
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  borderRightColor?:string[]|string|null
  /**
   * 控制变换属性的过渡效果
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  transform?:string[]|string|null
  /**
   * 控制元素变形的原点的过渡效果
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  transformOrigin?:string[]|string|null
  /**
   * 关键帧的偏移量。为0.0和1.0之间的数字。如果此值缺失，则关键帧将在相邻关键帧之间均匀分布。
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  offset?:number|null
}

export type UniAnimationOptionDirection =
/**
 * 正向运行
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
 */
"normal"|
/**
 * 反向运行
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
   *            "unixVer": "x"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
 */
"reverse"|
/**
 * 每次迭代后切换方向
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
 */
"alternate"|
/**
 * 反向运行并在每次迭代后切换方向
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
   *            "unixVer": "x"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
 */
"alternate-reverse"

export type UniAnimationOptionEasing = "ease"|"ease-in"|"ease-out"|"ease-in-out"|"linear"|"cubic-bezier"

export type UniAnimationOptionFill=
/**
 * 动画播放完毕后恢复初始状态
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
   *            "unixVer": "x"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
 */
"backwards"|
/**
 * 动画播放完毕后保留状态
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
 */
"forwards"|
/**
 * 动画播放完毕后保留状态
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
   *            "unixVer": "x"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
 */
"both"|
/**
 * 动画播放完毕后恢复初始状态
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
   *            "unixVer": "x"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
 */
"none"
export type UniAnimationOption = {
  /**
   * 动画延迟的毫秒数
   * @defaultValue 0
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  delay?:number|null
  /**
   * 动画运行方向
   * @defaultValue normal
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  direction?:UniAnimationOptionDirection|null
  /**
   * 动画时长
   * @defaultValue 0
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  duration?:number|null
  /**
   * 动画曲线。
   * @defaultValue linear
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  easing?:UniAnimationOptionEasing|null
  /**
   * 决定动画效果是否应在播放前反映在元素中
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  fill?:UniAnimationOptionFill|null
  /**
   * 动画重复的次数。当设置为`Infinity`时，动画将一直重复执行。
   * @defaultValue 1
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
   *            "unixVer": "4.53"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "osVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "√"
   *    }
   * }
   */
  iterations?:number|null
}

export type INode = UniElement
export type Element = UniElement

/**
 * view元素对象
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.0"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.11"
 *            "unixUtsPlugin": "4.25"
 *   	  }
 *    },
 *    "mp": {
 *      "weixin": {
 *        "osVer": "x",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      }
 *    },
 *    "web": {
 *        "uniVer": "x",
 *        "unixVer": "4.0"
 *    }
 * }
 */
export interface UniViewElement extends UniElement { }

/**
 * scroll-view元素对象
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.0"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.11"
 *            "unixUtsPlugin": "4.25"
 *   	  }
 *    },
 *    "mp": {
 *      "weixin": {
 *        "osVer": "x",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      }
 *    },
 *    "web": {
 *        "uniVer": "x",
 *        "unixVer": "4.0"
 *    }
 * }
 */
export interface UniScrollViewElement extends UniElement { }

/**
 * list-view元素对象
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.0"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.11"
 *            "unixUtsPlugin": "4.25"
 *   	  }
 *    },
 *    "mp": {
 *      "weixin": {
 *        "osVer": "x",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      }
 *    },
 *    "web": {
 *        "uniVer": "x",
 *        "unixVer": "4.0"
 *    }
 * }
 */
export interface UniListViewElement extends UniScrollViewElement { }

/**
 * list-item元素对象
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.0"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.11"
 *            "unixUtsPlugin": "4.25"
 *   	  }
 *    },
 *    "mp": {
 *      "weixin": {
 *        "osVer": "x",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      }
 *    },
 *    "web": {
 *        "uniVer": "x",
 *        "unixVer": "4.0"
 *    }
 * }
 */
export interface UniListItemElement extends UniElement { }

/**
 * swiper元素对象
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.0"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.11"
 *            "unixUtsPlugin": "4.25"
 *   	  }
 *    },
 *    "mp": {
 *      "weixin": {
 *        "osVer": "x",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      }
 *    },
 *    "web": {
 *        "uniVer": "x",
 *        "unixVer": "4.0"
 *    }
 * }
 */
export interface UniSwiperElement extends UniElement { }

/**
 * swiper-item元素对象
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.0"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.11"
 *            "unixUtsPlugin": "4.25"
 *   	  }
 *    },
 *    "mp": {
 *      "weixin": {
 *        "osVer": "x",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      }
 *    },
 *    "web": {
 *        "uniVer": "x",
 *        "unixVer": "4.0"
 *    }
 * }
 */
export interface UniSwiperItemElement extends UniElement { }

/**
 * image元素对象
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.0"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.11"
 *            "unixUtsPlugin": "4.25"
 *   	  }
 *    },
 *    "mp": {
 *      "weixin": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "alipay": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "baidu": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "toutiao": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "lark": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "qq": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "kuaishou": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "jd": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      }
 *    },
 *    "web": {
 *        "uniVer": "x",
 *        "unixVer": "4.0"
 *    }
 * }
 */
export interface UniImageElement extends UniElement {
  /**
   * 图片url
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *            "unixUtsPlugin": "x"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "lark": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "qq": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "jd": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  src: string.ImageURIString
  /**
   * 图片加载完成事件
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *            "unixUtsPlugin": "x"
   *   	  },
   *    },
   *    "mp": {
   *      "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "lark": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "qq": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "jd": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  onload(): void | null
}
/**
 * image对象, 用于 canvas 绘制
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.25"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.25"
 *   	  }
 *    },
 *    "mp": {
 *      "weixin": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "alipay": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "baidu": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "toutiao": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "lark": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "qq": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "kuaishou": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "jd": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      }
 *    },
 *    "web": {
 *        "uniVer": "√",
 *        "unixVer": "4.0"
 *    }
 * }
 */
export interface Image extends UniImageElement {
  /**
   * 图片url
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.25"
   *            "unixUtsPlugin": "x"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "lark": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "qq": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "jd": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  src: string.ImageURIString
  /**
   * 图片加载完成事件
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.25"
   *            "unixUtsPlugin": "x"
   *   	  }
   *    },
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  onload(): void | null
}
/**
 * input元素对象
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.0"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.11"
 *            "unixUtsPlugin": "x"
 *   	  }
 *    },
 *    "mp": {
 *      "weixin": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "alipay": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "baidu": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "toutiao": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "lark": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "qq": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "kuaishou": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "jd": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      }
 *    },
 *    "web": {
 *        "uniVer": "x",
 *        "unixVer": "4.0"
 *    }
 * }
 */
export interface UniInputElement extends UniElement {
  /**
   * 表单的控件名称，作为键值对的一部分与表单(form组件)一同提交
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "lark": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "qq": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "jd": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   * }
   */
  name: string
  /**
   * input的类型
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "lark": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "qq": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "jd": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   * }
   */
  type: string
  /**
   * 是否禁用
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "lark": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "qq": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "jd": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   * }
   */
  disabled: boolean
  /**
   * 自动获取焦点
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "lark": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "qq": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "jd": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   * }
   */
  autofocus: boolean
  /**
   * 输入框的初始内容
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "lark": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "qq": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "jd": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   * }
   */
  value: string
}

/**
 * textarea元素对象
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.0"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.11"
 *            "unixUtsPlugin": "4.25"
 *   	  }
 *    },
 *    "mp": {
 *      "weixin": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "alipay": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "baidu": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "toutiao": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "lark": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "qq": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "kuaishou": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "jd": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      }
 *    },
 *    "web": {
 *        "uniVer": "x",
 *        "unixVer": "4.0"
 *    }
 * }
 */
export interface UniTextareaElement extends UniElement {
  /**
   * 表单的控件名称，作为键值对的一部分与表单(form组件)一同提交
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "lark": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "qq": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "jd": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   * }
   */
  name: string
  /**
   * input的类型
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "lark": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "qq": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "jd": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   * }
   */
  type: string
  /**
   * 是否禁用
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "lark": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "qq": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "jd": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   * }
   */
  disabled: boolean
  /**
   * 自动获取焦点
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "lark": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "qq": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "jd": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   * }
   */
  autofocus: boolean
  /**
   * 输入框的初始内容
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    }
   * }
   */
  value: string
}

/**
 * rich-text元素对象
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.0"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.11"
 *            "unixUtsPlugin": "4.25"
 *   	  }
 *    }
 *    "web": {
 *        "uniVer": "x",
 *        "unixVer": "4.0"
 *    }
 * }
 */
export interface UniRichTextElement extends UniElement { }

/**
 * sticky-header元素对象
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.0"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.11"
 *            "unixUtsPlugin": "4.25"
 *   	  }
 *    }
 *    "web": {
 *        "uniVer": "x",
 *        "unixVer": "4.0"
 *    }
 * }
 */
export interface UniStickyHeaderElement extends UniElement { }

/**
 * sticky-section元素对象
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.0"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.11"
 *            "unixUtsPlugin": "4.25"
 *   	  }
 *    }
 *    "web": {
 *        "uniVer": "x",
 *        "unixVer": "4.0"
 *    }
 * }
 */
export interface UniStickySectionElement extends UniElement { }

/**
 * tabs元素对象
 * @package io.dcloud.uniapp.runtime
 * @internal
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.0"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.11"
 *            "unixUtsPlugin": "4.25"
 *   	  }
 *    }
 *    "web": {
 *        "uniVer": "x",
 *        "unixVer": "x"
 *    }
 * }
 */
export interface UniTabsElement extends UniElement {
  /**
   * 添加item
   * @param pageId 页面id
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  appendItem(pageId: string): void

  /**
   * 添加item
   * @param itemElement item的元素对象
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  appendItem(itemElement: UniElement): void

  /**
   * 初始化tabBar
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  initTabBar(style: Map<string, any | null>): void

  /**
   * 添加自定义tabBar
   * @param tabBar tabBar元素
   * @param direction 排列方向
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  appendCustomTabBar(tabBar: UniElement, direction: string): void

  /**
   * item选中高亮
   * @param 被选中页面id
   * @index item下标
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  switchSelect(pageId: string, index: number): void

  /**
   * 隐藏TabBar
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  hideTabBar(op: Map<string, any | null>): void

  /**
   * 显示tabBar
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  showTabBar(op: Map<string, any | null>): void

  /**
   * 为 tabBar 某一项的右上角添加文本
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  setTabBarBadge(op: Map<string, any | null>): void

  /**
   * 移除 tabBar 某一项右上角的文本
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  removeTabBarBadge(op: Map<string, any | null>): void

  /**
   * 显示 tabBar 某一项的右上角的红点
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  showTabBarRedDot(op: Map<string, any | null>): void

  /**
   * 隐藏 tabBar 某一项的右上角的红点
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  hideTabBarRedDot(op: Map<string, any | null>): void

  /**
   * 动态设置 tabBar 的整体样式
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  setTabBarStyle(op: Map<string, any | null>): void

  /**
   * 动态设置 tabBar 某一项的内容
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  setTabBarItem(op: Map<string, any | null>): void

  /**
   * 获取tabbar高度
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  getTabBarHeight(): number

  /**
   * 只读属性 tabBar是否隐藏
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  isTabBarVisible: boolean
  /**
   * 只读属性 当前显示itemId
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  currentItemId: string | null
}

export type ITabsNode = UniTabsElement

/**
 * text元素对象
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.0"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.11"
 *            "unixUtsPlugin": "4.25"
 *   	  }
 *    },
 *    "mp": {
 *      "weixin": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "alipay": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "baidu": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "toutiao": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "lark": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "qq": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "kuaishou": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "jd": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      }
 *    },
 *    "web": {
 *        "uniVer": "x",
 *        "unixVer": "4.0"
 *    }
 * }
 */
export interface UniTextElement extends UniElement {
  /**
   * 只读属性 text元素的文案内容
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "lark": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "qq": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "jd": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  value: string
  /**
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "lark": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "qq": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "jd": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  getTextExtra(): any | null
}

export type TextElement = UniTextElement

/**
 * web-view UniWebViewElement loadData函数参数
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.65"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.65"
 *            "unixUtsPlugin": "4.65"
 *   	  }
 *    },
 *    "mp": {
 *      "weixin": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "alipay": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "baidu": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "toutiao": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "lark": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "qq": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "kuaishou": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "jd": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      }
 *    },
 *    "web": {
 *        "uniVer": "x",
 *        "unixVer": "4.65"
 *    }
 * }
 */
export type UniWebViewElementLoadDataOptions = {
  /**
   * 要加载的html字符串，注意：这里是编码过的字符串
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.65"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.65"
   *            "unixUtsPlugin": "4.65"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "lark": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "qq": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "jd": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.65"
   *    }
   * }
   */
  data: string,
  /**
   * 页面的基础URL, 可选
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.65"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.65"
   *            "unixUtsPlugin": "4.65"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "lark": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "qq": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "jd": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.65"
   *    }
   * }
   */
  baseURL?: string | null,
  /**
   * 加载的页面内容类型，默认值为"text/html"，可选
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.65"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.65"
   *            "unixUtsPlugin": "4.65"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "lark": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "qq": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "jd": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.65"
   *    }
   * }
   */
  mimeType?: string | null,
  /**
   * 页面内容的编码类型，默认值为"utf-8"，可选
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.65"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.65"
   *            "unixUtsPlugin": "4.65"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "lark": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "qq": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "jd": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.65"
   *    }
   * }
   */
  encoding?: string | null
}

/**
 * web-view元素对象
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.0"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.11"
 *            "unixUtsPlugin": "4.25"
 *   	  }
 *    },
 *    "mp": {
 *      "weixin": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "alipay": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "baidu": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "toutiao": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "lark": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "qq": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "kuaishou": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "jd": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      }
 *    },
 *    "web": {
 *        "uniVer": "x",
 *        "unixVer": "4.0"
 *    }
 * }
 */
export interface UniWebViewElement extends UniElement {
  /**
   * 后退
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "lark": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "qq": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "jd": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  back(): void
  /**
   * 前进
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "lark": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "qq": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "jd": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  forward(): void
  /**
   * 重新加载
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "lark": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "qq": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "jd": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  reload(): void
  /**
   * 停止加载
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "lark": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "qq": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "jd": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  stop(): void
  /**
   * 原生和WebView通信（执行JS脚本）
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.11"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "lark": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "qq": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "jd": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  evalJS(js: string): void
  /**
   * 获取webview内容高度
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.63"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.63"
   *            "unixUtsPlugin": "4.63"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "alipay": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "baidu": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "toutiao": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "lark": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "qq": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "kuaishou": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "jd": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  getContentHeight(): number
  /**
   * 加载页面内容
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.65"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.65"，
   *            "unixUtsPlugin": "4.65"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "alipay": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "baidu": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "toutiao": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "lark": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "qq": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "kuaishou": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "jd": {
   *        "hostVer": "x",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "x"
   *    }
   * }
   */
  loadData(options: UniWebViewElementLoadDataOptions): void
}

export type IWebViewNode = UniWebViewElement

/**
 * 注释节点
 * @internal
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.0"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "x"
 *            "unixUtsPlugin": "x"
 *   	  }
 *    }
 *    "web": {
 *        "uniVer": "x",
 *        "unixVer": "x"
 *    }
 * }
 */
export interface UniCommentElement extends UniElement {
  text: string
}

export type IComment = UniCommentElement

/**
 * button元素对象
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.0"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.11"
 *            "unixUtsPlugin": "4.25"
 *   	  }
 *    }
 *    "web": {
 *        "uniVer": "x",
 *        "unixVer": "4.0"
 *    }
 * }
 */
export interface UniButtonElement extends UniElement { }

/**
 * 嵌套 scroll-view 场景中属于外层 scroll-view 的节点
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.0"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.11"
 *            "unixUtsPlugin": "4.25"
 *   	  }
 *    }
 *    "web": {
 *        "uniVer": "x",
 *        "unixVer": "x"
 *    }
 * }
 */
export interface UniNestedScrollHeaderElement extends UniElement { }

/**
 * 嵌套 scroll-view 场景中属于里层 scroll-view 的节点
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.0"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.11"
 *   	  }
 *    }
 *    "web": {
 *        "uniVer": "x",
 *        "unixVer": "x"
 *    }
 * }
 */
export interface UniNestedScrollBodyElement extends UniElement { }

/**
 * canvas元素对象
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "√",
 *            "unixVer": "4.25"
 *            "unixUtsPlugin": "4.25"
 *   	  }
 *    },
 *    "mp": {
 *      "weixin": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "alipay": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "baidu": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "toutiao": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "lark": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "qq": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "kuaishou": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      },
 *      "jd": {
 *        "hostVer": "√",
 *        "uniVer": "x",
 *        "unixVer": "x"
 *      }
 *    },
 *    "web": {
 *        "uniVer": "√",
 *        "unixVer": "4.21"
 *    }
 * }
 */
export interface UniCanvasElement extends UniElement {
  /**
   * Canvas宽度(注意:App平台只读不支持设置)
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "lark": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "qq": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "jd": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.21"
   *    }
   * }
   */
  width: number
  /**
   * Canvas高度(注意:App平台只读不支持设置)
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "lark": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "qq": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "jd": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.21"
   *    }
   * }
   */
  height: number
  /**
   * 返回 Canvas 的绘图上下文
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *            "unixUtsPlugin": "4.25"
   *   	  }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "lark": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "qq": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "jd": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.21"
   *    }
   * }
   */
  getContext(contentType: string): CanvasRenderingContext2D | null
  /**
   * 创造 Blob 对象
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "x"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "x"
   *            "unixUtsPlugin": "x"
   *       }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "lark": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "qq": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "jd": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.21"
   *    }
   * }
   */
  toBlob(callback: BlobCallback): void
  toBlob(callback: BlobCallback, type: string): void
  toBlob(callback: BlobCallback, type: string, quality: number): void
  /**
   * 返回一个包含图片展示的 data URI (iOS平台不支持webp格式)
   * 如果画布的高度或宽度是 0，那么会返回字符串“data:,”。
   * 如果传入的类型非“image/png”，但是返回的值以“data:image/png”开头，那么该传入的类型是不支持的。
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "√",
   *            "unixVer": "4.25"
   *            "unixUtsPlugin": "x"
   *       }
   *    },
   *    "mp": {
   *      "weixin": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "alipay": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "baidu": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "toutiao": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "lark": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "qq": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "kuaishou": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      },
   *      "jd": {
   *        "hostVer": "√",
   *        "uniVer": "x",
   *        "unixVer": "x"
   *      }
   *    },
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.21"
   *    }
   * }
   */
  toDataURL(type?: string | null, encoderOptions?: any | null): string
}

/**
 * waterflow元素对象
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.41"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.41"
 *            "unixUtsPlugin": "4.41"
 *   	  }
 *    },
 *    "web": {
 *        "uniVer": "x",
 *        "unixVer": "x"
 *    }
 * }
 */
export interface UniWaterFlowElement extends UniListViewElement { }

/**
 * flow-item元素对象
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.41"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.41"
 *            "unixUtsPlugin": "4.41"
 *   	  }
 *    },
 *    "web": {
 *        "uniVer": "x",
 *        "unixVer": "x"
 *    }
 * }
 */
export interface UniFlowItemElement extends UniListItemElement { }

/**
 * 共享元素对象
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.44"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.44"
 *            "unixUtsPlugin": "4.44"
 *   	  }
 *    },
 *    "web": {
 *        "uniVer": "x",
 *        "unixVer": "x"
 *    }
 * }
 */
export interface UniShareElement extends UniElement { }


// 允许instanceof检查
export let UniElement: {
  prototype: UniElement
  new(): UniElement
}
export let UniButtonElement: {
  prototype: UniButtonElement
  new(): UniButtonElement
}
export let UniCanvasElement: {
  prototype: UniCanvasElement
  new(): UniCanvasElement
}
export let UniCommentElement: {
  prototype: UniCommentElement
  new(): UniCommentElement
}
export let UniImageElement: {
  prototype: UniImageElement
  new(): UniImageElement
}
export let Image: {
  prototype: Image
  new(width?: number, height?: number): Image
}
export let UniInputElement: {
  prototype: UniInputElement
  new(): UniInputElement
}
export let UniListItemElement: {
  prototype: UniListItemElement
  new(): UniListItemElement
}
export let UniListViewElement: {
  prototype: UniListViewElement
  new(): UniListViewElement
}
export let UniNestedScrollBodyElement: {
  prototype: UniNestedScrollBodyElement
  new(): UniNestedScrollBodyElement
}
export let UniNestedScrollHeaderElement: {
  prototype: UniNestedScrollHeaderElement
  new(): UniNestedScrollHeaderElement
}
export let UniRichTextElement: {
  prototype: UniRichTextElement
  new(): UniRichTextElement
}
export let UniScrollViewElement: {
  prototype: UniScrollViewElement
  new(): UniScrollViewElement
}
export let UniStickyHeaderElement: {
  prototype: UniStickyHeaderElement
  new(): UniStickyHeaderElement
}
export let UniStickySectionElement: {
  prototype: UniStickySectionElement
  new(): UniStickySectionElement
}
export let UniSwiperElement: {
  prototype: UniSwiperElement
  new(): UniSwiperElement
}
export let UniSwiperItemElement: {
  prototype: UniSwiperItemElement
  new(): UniSwiperItemElement
}
export let UniTabsElement: {
  prototype: UniTabsElement
  new(): UniTabsElement
}
export let UniTextElement: {
  prototype: UniTextElement
  new(): UniTextElement
}
export let UniTextareaElement: {
  prototype: UniTextareaElement
  new(): UniTextareaElement
}
export let UniViewElement: {
  prototype: UniViewElement
  new(): UniViewElement
}
export let UniWebViewElement: {
  prototype: UniWebViewElement
  new(): UniWebViewElement
}
export let UniWaterFlowElement: {
  prototype: UniWaterFlowElement
  new(): UniWaterFlowElement
}
export let UniFlowItemElement: {
  prototype: UniFlowItemElement
  new(): UniFlowItemElement
}

export let UniShareElement: {
  prototype: UniShareElement
  new(): UniShareElement
}
