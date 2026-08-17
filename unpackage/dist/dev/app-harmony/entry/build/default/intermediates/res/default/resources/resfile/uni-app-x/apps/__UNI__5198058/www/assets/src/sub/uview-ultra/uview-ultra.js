import { _ as __easycom_0 } from "../../components/NavBar/NavBar.js";
import { _ as __easycom_0$1 } from "../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import { _ as __easycom_1 } from "../../../uni_modules/uview-ultra/components/up-cell/up-cell.js";
import { _ as __easycom_2 } from "../../../uni_modules/uview-ultra/components/up-cell-group/up-cell-group.js";
import { _ as _sfc_main$1 } from "../../../App.ku.js";
import { L as LayoutComponent } from "../../layouts/default.js";
import "../../store/index.js";
import { u as useAppStore } from "../../store/app.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
import "../../utils/systemInfo.js";
import "../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../uni_modules/uview-ultra/components/up-line/up-line.js";
import "../../../uni_modules/uview-ultra/components/up-line/line.js";
import "../../../uni_modules/uview-ultra/components/up-cell/cell.js";
import "../../../uni_modules/uview-ultra/components/up-cell-group/cellGroup.js";
import "../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
import "../../../uni_modules/uview-ultra/libs/composable/useMp.js";
import "../../../uni_modules/uview-ultra/components/up-gap/gap.js";
import "../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../tabbar/index.js";
import "../../tabbar/store.js";
import "../../tabbar/types.js";
import "../../tabbar/config.js";
import "../../tabbar/TabbarItem.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../utils/i18n.js";
import "../../i18n/index.js";
import "../../../uni_modules/lime-i18n/common/index.js";
import "../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../uni_modules/lime-i18n/common/format.js";
import "../../../uni_modules/lime-i18n/common/util.js";
import "../../../uni_modules/lime-i18n/common/errors.js";
import "../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../uni_modules/lime-i18n/common/types.js";
import "../../i18n/locales/zh-CN.js";
import "../../i18n/locales/en-US.js";
import "../../utils/toast.js";
import "../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../store/token.js";
import "../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../store/user.js";
import "../../../uni_modules/uview-ultra/libs/i18n/index.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hans.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hant.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/en.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/es.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/fr.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/de.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ko.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ja.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ru.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraUviewUltra";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "0a798be2",
  __className,
  __filename: "src/sub/uview-ultra/uview-ultra.uvue",
  __name: "uview-ultra",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraUviewUltraSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraUviewUltraSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const appStore = useAppStore();
    const themeColor = computed(() => {
      return appStore.state.theme;
    });
    function goToDemo(page) {
      uni.navigateTo({
        url: `/src/sub/uview-ultra/demos/${page}/${page}`
      });
    }
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_up_icon = __easycom_0$1;
      const _component_up_cell = __easycom_1;
      const _component_up_cell_group = __easycom_2;
      const n233 = _createSharedDataComponent(_sfc_main$1, "078c97b3", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n232 = _createSharedDataComponent(LayoutComponent, "2bf342ba", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "uview-ultra 示例"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "56c57630", {
                title: "uview-ultra 组件演示",
                "auto-back": true,
                "safe-area-inset-top": true,
                "bg-color": "#ffffff"
              });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const n91 = _createSharedDataComponentWithFallback(_component_up_cell_group, "56c59018", { border: false }, {
                "default": _withSharedDataVaporCtx(() => {
                  const _on_click = () => {
                    return goToDemo("button");
                  };
                  const n9 = _createSharedDataComponentWithFallback(_component_up_cell, "56c59094", {
                    title: "Button 按钮",
                    "is-link": "",
                    onClick: () => {
                      return _on_click;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n7 = _createSharedDataComponentWithFallback(_component_up_icon, "56c59458", {
                        name: "plus-circle",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 5, n7?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 4, n9?.sharedData);
                  const _on_click1 = () => {
                    return goToDemo("icon");
                  };
                  const n12 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2d86ae", {
                    title: "Icon 图标",
                    "is-link": "",
                    onClick: () => {
                      return _on_click1;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n10 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2d7f2e", {
                        name: "photo",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 7, n10?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 6, n12?.sharedData);
                  const _on_click2 = () => {
                    return goToDemo("text");
                  };
                  const n15 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2d76f8", {
                    title: "Text 文本",
                    "is-link": "",
                    onClick: () => {
                      return _on_click2;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n13 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2d6f78", {
                        name: "file-text",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 9, n13?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 8, n15?.sharedData);
                  const _on_click3 = () => {
                    return goToDemo("link");
                  };
                  const n18 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2d673a", {
                    title: "Link 超链接",
                    "is-link": "",
                    onClick: () => {
                      return _on_click3;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n16 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2d5fb8", {
                        name: "attach",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 11, n16?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 10, n18?.sharedData);
                  const _on_click4 = () => {
                    return goToDemo("empty");
                  };
                  const n21 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2d5780", {
                    title: "Empty 空白页",
                    "is-link": "",
                    onClick: () => {
                      return _on_click4;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n19 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2d4ffa", {
                        name: "info-circle",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 13, n19?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 12, n21?.sharedData);
                  const _on_click5 = () => {
                    return goToDemo("divider");
                  };
                  const n24 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2ca4f8", {
                    title: "Divider 分割线",
                    "is-link": "",
                    onClick: () => {
                      return _on_click5;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n22 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2c9d40", {
                        name: "minus",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 15, n22?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 14, n24?.sharedData);
                  const _on_click6 = () => {
                    return goToDemo("loading-icon");
                  };
                  const n27 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2c950a", {
                    title: "LoadingIcon 加载图标",
                    "is-link": "",
                    onClick: () => {
                      return _on_click6;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n25 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2c8d3e", {
                        name: "reload",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 17, n25?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 16, n27?.sharedData);
                  const _on_click7 = () => {
                    return goToDemo("skeleton");
                  };
                  const n30 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2c7ff0", {
                    title: "Skeleton 骨架屏",
                    "is-link": "",
                    onClick: () => {
                      return _on_click7;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n28 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2c7834", {
                        name: "list-dot",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 19, n28?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 18, n30?.sharedData);
                  const _on_click8 = () => {
                    return goToDemo("tag");
                  };
                  const n33 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2c6ff8", {
                    title: "Tag 标签",
                    "is-link": "",
                    onClick: () => {
                      return _on_click8;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n31 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2c687c", {
                        name: "tags",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 21, n31?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 20, n33?.sharedData);
                  const _on_click9 = () => {
                    return goToDemo("badge");
                  };
                  const n36 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2c6072", {
                    title: "Badge 徽标",
                    "is-link": "",
                    onClick: () => {
                      return _on_click9;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n34 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2bbb44", {
                        name: "info-circle",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 23, n34?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 22, n36?.sharedData);
                  const _on_click10 = () => {
                    return goToDemo("avatar");
                  };
                  const n39 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2badc2", {
                    title: "Avatar 头像",
                    "is-link": "",
                    onClick: () => {
                      return _on_click10;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n37 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2ba63a", {
                        name: "account",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 25, n37?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 24, n39?.sharedData);
                  const _on_click11 = () => {
                    return goToDemo("card");
                  };
                  const n42 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2b9e00", {
                    title: "Card 卡片",
                    "is-link": "",
                    onClick: () => {
                      return _on_click11;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n40 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2b9680", {
                        name: "map",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 27, n40?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 26, n42?.sharedData);
                  const _on_click12 = () => {
                    return goToDemo("list");
                  };
                  const n45 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2b8e78", {
                    title: "List 列表",
                    "is-link": "",
                    onClick: () => {
                      return _on_click12;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n43 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2b86f8", {
                        name: "list-dot",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 29, n43?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 28, n45?.sharedData);
                  const _on_click13 = () => {
                    return goToDemo("swiper");
                  };
                  const n48 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2b7ebc", {
                    title: "Swiper 轮播图",
                    "is-link": "",
                    onClick: () => {
                      return _on_click13;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n46 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2b7732", {
                        name: "photo",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 31, n46?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 30, n48?.sharedData);
                  const _on_click14 = () => {
                    return goToDemo("image");
                  };
                  const n51 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2acc3c", {
                    title: "Image 图片组件",
                    "is-link": "",
                    onClick: () => {
                      return _on_click14;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n49 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2ac4b4", {
                        name: "photo",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 33, n49?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 32, n51?.sharedData);
                  const _on_click15 = () => {
                    return goToDemo("transition");
                  };
                  const n54 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2abc7e", {
                    title: "Transition 动画过渡",
                    "is-link": "",
                    onClick: () => {
                      return _on_click15;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n52 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2ab4b8", {
                        name: "play-circle",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 35, n52?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 34, n54?.sharedData);
                  const _on_click16 = () => {
                    return goToDemo("steps");
                  };
                  const n57 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2aac4c", {
                    title: "Steps 步骤条",
                    "is-link": "",
                    onClick: () => {
                      return _on_click16;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n55 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2aa4c6", {
                        name: "order",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 37, n55?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 36, n57?.sharedData);
                  const _on_click17 = () => {
                    return goToDemo("grid");
                  };
                  const n60 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2a9778", {
                    title: "Grid 宫格",
                    "is-link": "",
                    onClick: () => {
                      return _on_click17;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n58 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2a8fee", {
                        name: () => {
                          return "grid";
                        },
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 39, n58?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 38, n60?.sharedData);
                  const _on_click18 = () => {
                    return goToDemo("line");
                  };
                  const n63 = _createSharedDataComponentWithFallback(_component_up_cell, "fc29e9d6", {
                    title: "Line 线条",
                    "is-link": "",
                    onClick: () => {
                      return _on_click18;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n61 = _createSharedDataComponentWithFallback(_component_up_icon, "fc29e280", {
                        name: "minus",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 41, n61?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 40, n63?.sharedData);
                  const _on_click19 = () => {
                    return goToDemo("album");
                  };
                  const n66 = _createSharedDataComponentWithFallback(_component_up_cell, "fc29da4a", {
                    title: "Album 相册",
                    "is-link": "",
                    onClick: () => {
                      return _on_click19;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n64 = _createSharedDataComponentWithFallback(_component_up_icon, "fc29d2c6", {
                        name: "photo",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 43, n64?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 42, n66?.sharedData);
                  const _on_click20 = () => {
                    return goToDemo("gap");
                  };
                  const n69 = _createSharedDataComponentWithFallback(_component_up_cell, "fc29c57a", {
                    title: "Gap 间隔槽",
                    "is-link": "",
                    onClick: () => {
                      return _on_click20;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n67 = _createSharedDataComponentWithFallback(_component_up_icon, "fc29bdfc", {
                        name: "minus",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 45, n67?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 44, n69?.sharedData);
                  const _on_click21 = () => {
                    return goToDemo("sticky");
                  };
                  const n72 = _createSharedDataComponentWithFallback(_component_up_cell, "fc29b5f0", {
                    title: "Sticky 吸顶",
                    "is-link": "",
                    onClick: () => {
                      return _on_click21;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n70 = _createSharedDataComponentWithFallback(_component_up_icon, "fc29ae34", {
                        name: "arrow-up",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 47, n70?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 46, n72?.sharedData);
                  const _on_click22 = () => {
                    return goToDemo("table");
                  };
                  const n75 = _createSharedDataComponentWithFallback(_component_up_cell, "fc29a5f8", {
                    title: "Table 表格",
                    "is-link": "",
                    onClick: () => {
                      return _on_click22;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n73 = _createSharedDataComponentWithFallback(_component_up_icon, "fc290096", {
                        name: () => {
                          return "grid";
                        },
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 49, n73?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 48, n75?.sharedData);
                  const _on_click23 = () => {
                    return goToDemo("lazy-load");
                  };
                  const n78 = _createSharedDataComponentWithFallback(_component_up_cell, "fc28f33c", {
                    title: "LazyLoad 懒加载",
                    "is-link": "",
                    onClick: () => {
                      return _on_click23;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n76 = _createSharedDataComponentWithFallback(_component_up_icon, "fc28eb7e", {
                        name: "photo",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 51, n76?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 50, n78?.sharedData);
                  const _on_click24 = () => {
                    return goToDemo("loadmore");
                  };
                  const n81 = _createSharedDataComponentWithFallback(_component_up_cell, "fc28e348", {
                    title: "Loadmore 加载更多",
                    "is-link": "",
                    onClick: () => {
                      return _on_click24;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n79 = _createSharedDataComponentWithFallback(_component_up_icon, "fc28db8a", {
                        name: "more-dot-fill",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 53, n79?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 52, n81?.sharedData);
                  const _on_click25 = () => {
                    return goToDemo("parse");
                  };
                  const n84 = _createSharedDataComponentWithFallback(_component_up_cell, "fc28d344", {
                    title: "Parse 富文本解析",
                    "is-link": "",
                    onClick: () => {
                      return _on_click25;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n82 = _createSharedDataComponentWithFallback(_component_up_icon, "fc28c67a", {
                        name: "file-text",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 55, n82?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 54, n84?.sharedData);
                  const _on_click26 = () => {
                    return goToDemo("qrcode");
                  };
                  const n87 = _createSharedDataComponentWithFallback(_component_up_cell, "fc28be3c", {
                    title: "Qrcode 二维码",
                    "is-link": "",
                    onClick: () => {
                      return _on_click26;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n85 = _createSharedDataComponentWithFallback(_component_up_icon, "fc281908", {
                        name: "scan",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 57, n85?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 56, n87?.sharedData);
                  const _on_click27 = () => {
                    return goToDemo("waterfall");
                  };
                  const n90 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2810d4", {
                    title: "Waterfall 瀑布流",
                    "is-link": "",
                    onClick: () => {
                      return _on_click27;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n88 = _createSharedDataComponentWithFallback(_component_up_icon, "fc280914", {
                        name: () => {
                          return "grid";
                        },
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 59, n88?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 58, n90?.sharedData);
                })
              });
              _setSharedData(__sharedData, 3, n91?.sharedData);
              const n145 = _createSharedDataComponentWithFallback(_component_up_cell_group, "fc27f306", { border: false }, {
                "default": _withSharedDataVaporCtx(() => {
                  const _on_click28 = () => {
                    return goToDemo("input");
                  };
                  const n96 = _createSharedDataComponentWithFallback(_component_up_cell, "fc27f20e", {
                    title: "Input 输入框",
                    "is-link": "",
                    onClick: () => {
                      return _on_click28;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n94 = _createSharedDataComponentWithFallback(_component_up_icon, "fc27ea88", {
                        name: "edit-pen",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 62, n94?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 61, n96?.sharedData);
                  const _on_click29 = () => {
                    return goToDemo("checkbox");
                  };
                  const n99 = _createSharedDataComponentWithFallback(_component_up_cell, "fc27dd36", {
                    title: "Checkbox 复选框",
                    "is-link": "",
                    onClick: () => {
                      return _on_click29;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n97 = _createSharedDataComponentWithFallback(_component_up_icon, "fc27d57a", {
                        name: "checkbox-mark",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 64, n97?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 63, n99?.sharedData);
                  const _on_click30 = () => {
                    return goToDemo("radio");
                  };
                  const n102 = _createSharedDataComponentWithFallback(_component_up_cell, "fc272f8a", {
                    title: "Radio 单选框",
                    "is-link": "",
                    onClick: () => {
                      return _on_click30;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n100 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2727da", {
                        name: "checkmark-circle",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 66, n100?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 65, n102?.sharedData);
                  const _on_click31 = () => {
                    return goToDemo("switch");
                  };
                  const n105 = _createSharedDataComponentWithFallback(_component_up_cell, "fc271a78", {
                    title: "Switch 开关",
                    "is-link": "",
                    onClick: () => {
                      return _on_click31;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n103 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2712c6", {
                        name: "more-circle",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 68, n103?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 67, n105?.sharedData);
                  const _on_click32 = () => {
                    return goToDemo("rate");
                  };
                  const n108 = _createSharedDataComponentWithFallback(_component_up_cell, "fc270a84", {
                    title: "Rate 评分",
                    "is-link": "",
                    onClick: () => {
                      return _on_click32;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n106 = _createSharedDataComponentWithFallback(_component_up_icon, "fc270304", {
                        name: "star",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 70, n106?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 69, n108?.sharedData);
                  const _on_click33 = () => {
                    return goToDemo("number-box");
                  };
                  const n111 = _createSharedDataComponentWithFallback(_component_up_cell, "fc26fad0", {
                    title: "NumberBox 步进器",
                    "is-link": "",
                    onClick: () => {
                      return _on_click33;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n109 = _createSharedDataComponentWithFallback(_component_up_icon, "fc26f30e", {
                        name: "plus",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 72, n109?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 71, n111?.sharedData);
                  const _on_click34 = () => {
                    return goToDemo("slider");
                  };
                  const n114 = _createSharedDataComponentWithFallback(_component_up_cell, "fc264844", {
                    title: "Slider 滑块",
                    "is-link": "",
                    onClick: () => {
                      return _on_click34;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n112 = _createSharedDataComponentWithFallback(_component_up_icon, "fc264092", {
                        name: "minus",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 74, n112?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 73, n114?.sharedData);
                  const _on_click35 = () => {
                    return goToDemo("textarea");
                  };
                  const n117 = _createSharedDataComponentWithFallback(_component_up_cell, "fc263886", {
                    title: "Textarea 多行文本",
                    "is-link": "",
                    onClick: () => {
                      return _on_click35;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n115 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2630c8", {
                        name: "file-text",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 76, n115?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 75, n117?.sharedData);
                  const _on_click36 = () => {
                    return goToDemo("upload");
                  };
                  const n120 = _createSharedDataComponentWithFallback(_component_up_cell, "fc26288a", {
                    title: "Upload 上传",
                    "is-link": "",
                    onClick: () => {
                      return _on_click36;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n118 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2620d8", {
                        name: "arrow-up",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 78, n118?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 77, n120?.sharedData);
                  const _on_click37 = () => {
                    return goToDemo("search");
                  };
                  const n123 = _createSharedDataComponentWithFallback(_component_up_cell, "fc261386", {
                    title: "Search 搜索",
                    "is-link": "",
                    onClick: () => {
                      return _on_click37;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n121 = _createSharedDataComponentWithFallback(_component_up_icon, "fc260bfe", {
                        name: "search",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 80, n121?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 79, n123?.sharedData);
                  const _on_click38 = () => {
                    return goToDemo("form");
                  };
                  const n126 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2603c6", {
                    title: "完整 Form 表单示例",
                    "is-link": "",
                    onClick: () => {
                      return _on_click38;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n124 = _createSharedDataComponentWithFallback(_component_up_icon, "8984389c", {
                        name: "edit-pen",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 82, n124?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 81, n126?.sharedData);
                  const _on_click39 = () => {
                    return goToDemo("pagination");
                  };
                  const n129 = _createSharedDataComponentWithFallback(_component_up_cell, "89843060", {
                    title: "Pagination 分页器",
                    "is-link": "",
                    onClick: () => {
                      return _on_click39;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n127 = _createSharedDataComponentWithFallback(_component_up_icon, "8984289c", {
                        name: "more-circle",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 84, n127?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 83, n129?.sharedData);
                  const _on_click40 = () => {
                    return goToDemo("keyboard");
                  };
                  const n132 = _createSharedDataComponentWithFallback(_component_up_cell, "89841b18", {
                    title: "Keyboard 键盘",
                    "is-link": "",
                    onClick: () => {
                      return _on_click40;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n130 = _createSharedDataComponentWithFallback(_component_up_icon, "89841388", {
                        name: "grid-fill",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 86, n130?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 85, n132?.sharedData);
                  const _on_click41 = () => {
                    return goToDemo("dropdown");
                  };
                  const n135 = _createSharedDataComponentWithFallback(_component_up_cell, "89840b4a", {
                    title: "Dropdown 下拉菜单",
                    "is-link": "",
                    onClick: () => {
                      return _on_click41;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n133 = _createSharedDataComponentWithFallback(_component_up_icon, "8984038c", {
                        name: "arrow-down-fill",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 88, n133?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 87, n135?.sharedData);
                  const _on_click42 = () => {
                    return goToDemo("swipe-action");
                  };
                  const n138 = _createSharedDataComponentWithFallback(_component_up_cell, "8983f602", {
                    title: "SwipeAction 滑动操作",
                    "is-link": "",
                    onClick: () => {
                      return _on_click42;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n136 = _createSharedDataComponentWithFallback(_component_up_icon, "89835062", {
                        name: "list",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 90, n136?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 89, n138?.sharedData);
                  const _on_click43 = () => {
                    return goToDemo("code-input");
                  };
                  const n141 = _createSharedDataComponentWithFallback(_component_up_cell, "89834858", {
                    title: "CodeInput 验证码输入",
                    "is-link": "",
                    onClick: () => {
                      return _on_click43;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n139 = _createSharedDataComponentWithFallback(_component_up_icon, "89834068", {
                        name: "lock",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 92, n139?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 91, n141?.sharedData);
                  const _on_click44 = () => {
                    return goToDemo("code");
                  };
                  const n144 = _createSharedDataComponentWithFallback(_component_up_cell, "8983385e", {
                    title: "Code 验证码倒计时",
                    "is-link": "",
                    onClick: () => {
                      return _on_click44;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n142 = _createSharedDataComponentWithFallback(_component_up_icon, "898330d6", {
                        name: "clock",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 94, n142?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 93, n144?.sharedData);
                })
              });
              _setSharedData(__sharedData, 60, n145?.sharedData);
              const n202 = _createSharedDataComponentWithFallback(_component_up_cell_group, "89831ad6", { border: false }, {
                "default": _withSharedDataVaporCtx(() => {
                  const _on_click45 = () => {
                    return goToDemo("alert");
                  };
                  const n150 = _createSharedDataComponentWithFallback(_component_up_cell, "898314c8", {
                    title: "Alert 警告提示",
                    "is-link": "",
                    onClick: () => {
                      return _on_click45;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n148 = _createSharedDataComponentWithFallback(_component_up_icon, "89830d40", {
                        name: "info-circle",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 97, n148?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 96, n150?.sharedData);
                  const _on_click46 = () => {
                    return goToDemo("calendar");
                  };
                  const n153 = _createSharedDataComponentWithFallback(_component_up_cell, "8982672a", {
                    title: "Calendar 日历",
                    "is-link": "",
                    onClick: () => {
                      return _on_click46;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n151 = _createSharedDataComponentWithFallback(_component_up_icon, "89825f9a", {
                        name: "calendar",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 99, n151?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 98, n153?.sharedData);
                  const _on_click47 = () => {
                    return goToDemo("picker");
                  };
                  const n156 = _createSharedDataComponentWithFallback(_component_up_cell, "8982575e", {
                    title: "Picker 选择器",
                    "is-link": "",
                    onClick: () => {
                      return _on_click47;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n154 = _createSharedDataComponentWithFallback(_component_up_icon, "89824faa", {
                        name: "list",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 101, n154?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 100, n156?.sharedData);
                  const _on_click48 = () => {
                    return goToDemo("datetime-picker");
                  };
                  const n159 = _createSharedDataComponentWithFallback(_component_up_cell, "8982428a", {
                    title: "DatetimePicker 时间选择",
                    "is-link": "",
                    onClick: () => {
                      return _on_click48;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n157 = _createSharedDataComponentWithFallback(_component_up_icon, "89823a88", {
                        name: "clock",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 103, n157?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 102, n159?.sharedData);
                  const _on_click49 = () => {
                    return goToDemo("action-sheet");
                  };
                  const n162 = _createSharedDataComponentWithFallback(_component_up_cell, "89823252", {
                    title: "ActionSheet 动作面板",
                    "is-link": "",
                    onClick: () => {
                      return _on_click49;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n160 = _createSharedDataComponentWithFallback(_component_up_icon, "89822a5c", {
                        name: "server-man",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 105, n160?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 104, n162?.sharedData);
                  const _on_click50 = () => {
                    return goToDemo("notice-bar");
                  };
                  const n165 = _createSharedDataComponentWithFallback(_component_up_cell, "89817f5c", {
                    title: "NoticeBar 滚动通知",
                    "is-link": "",
                    onClick: () => {
                      return _on_click50;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n163 = _createSharedDataComponentWithFallback(_component_up_icon, "89817798", {
                        name: "volume",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 107, n163?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 106, n165?.sharedData);
                  const _on_click51 = () => {
                    return goToDemo("collapse");
                  };
                  const n168 = _createSharedDataComponentWithFallback(_component_up_cell, "89816f60", {
                    title: "Collapse 折叠面板",
                    "is-link": "",
                    onClick: () => {
                      return _on_click51;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n166 = _createSharedDataComponentWithFallback(_component_up_icon, "898167a2", {
                        name: "arrow-down",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 109, n166?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 108, n168?.sharedData);
                  const _on_click52 = () => {
                    return goToDemo("toast");
                  };
                  const n171 = _createSharedDataComponentWithFallback(_component_up_cell, "89815f62", {
                    title: "Toast 消息提示",
                    "is-link": "",
                    onClick: () => {
                      return _on_click52;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n169 = _createSharedDataComponentWithFallback(_component_up_icon, "898157da", {
                        name: "chat",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 111, n169?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 110, n171?.sharedData);
                  const _on_click53 = () => {
                    return goToDemo("notify");
                  };
                  const n174 = _createSharedDataComponentWithFallback(_component_up_cell, "89814a90", {
                    title: "Notify 消息通知",
                    "is-link": "",
                    onClick: () => {
                      return _on_click53;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n172 = _createSharedDataComponentWithFallback(_component_up_icon, "89814304", {
                        name: "bell",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 113, n172?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 112, n174?.sharedData);
                  const _on_click54 = () => {
                    return goToDemo("loading-page");
                  };
                  const n177 = _createSharedDataComponentWithFallback(_component_up_cell, "89813ad0", {
                    title: "LoadingPage 加载页",
                    "is-link": "",
                    onClick: () => {
                      return _on_click54;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n175 = _createSharedDataComponentWithFallback(_component_up_icon, "89809532", {
                        name: "more-dot-fill",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 115, n175?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 114, n177?.sharedData);
                  const _on_click55 = () => {
                    return goToDemo("overlay");
                  };
                  const n180 = _createSharedDataComponentWithFallback(_component_up_cell, "89808cec", {
                    title: "Overlay 遮罩层",
                    "is-link": "",
                    onClick: () => {
                      return _on_click55;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n178 = _createSharedDataComponentWithFallback(_component_up_icon, "8980801e", {
                        name: "scan",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 117, n178?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 116, n180?.sharedData);
                  const _on_click56 = () => {
                    return goToDemo("modal");
                  };
                  const n183 = _createSharedDataComponentWithFallback(_component_up_cell, "89807814", {
                    title: "Modal 模态框",
                    "is-link": "",
                    onClick: () => {
                      return _on_click56;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n181 = _createSharedDataComponentWithFallback(_component_up_icon, "8980708e", {
                        name: "email",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 119, n181?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 118, n183?.sharedData);
                  const _on_click57 = () => {
                    return goToDemo("popup");
                  };
                  const n186 = _createSharedDataComponentWithFallback(_component_up_cell, "89806858", {
                    title: "Popup 弹出层",
                    "is-link": "",
                    onClick: () => {
                      return _on_click57;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n184 = _createSharedDataComponentWithFallback(_component_up_icon, "898060d2", {
                        name: "server-man",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 121, n184?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 120, n186?.sharedData);
                  const _on_click58 = () => {
                    return goToDemo("no-network");
                  };
                  const n189 = _createSharedDataComponentWithFallback(_component_up_cell, "89805868", {
                    title: "NoNetwork 无网络提示",
                    "is-link": "",
                    onClick: () => {
                      return _on_click58;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n187 = _createSharedDataComponentWithFallback(_component_up_icon, "897fade2", {
                        name: "wifi-off",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 123, n187?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 122, n189?.sharedData);
                  const _on_click59 = () => {
                    return goToDemo("line-progress");
                  };
                  const n192 = _createSharedDataComponentWithFallback(_component_up_cell, "897fa5a4", {
                    title: "LineProgress 线型进度",
                    "is-link": "",
                    onClick: () => {
                      return _on_click59;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n190 = _createSharedDataComponentWithFallback(_component_up_icon, "897f9daa", {
                        name: "minus",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 125, n190?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 124, n192?.sharedData);
                  const _on_click60 = () => {
                    return goToDemo("count-down");
                  };
                  const n195 = _createSharedDataComponentWithFallback(_component_up_cell, "897f959e", {
                    title: "CountDown 倒计时",
                    "is-link": "",
                    onClick: () => {
                      return _on_click60;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n193 = _createSharedDataComponentWithFallback(_component_up_icon, "897f8db2", {
                        name: "clock",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 127, n193?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 126, n195?.sharedData);
                  const _on_click61 = () => {
                    return goToDemo("count-to");
                  };
                  const n198 = _createSharedDataComponentWithFallback(_component_up_cell, "897f8090", {
                    title: "CountTo 数字滚动",
                    "is-link": "",
                    onClick: () => {
                      return _on_click61;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n196 = _createSharedDataComponentWithFallback(_component_up_icon, "897f78d4", {
                        name: "play-right-fill",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 129, n196?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 128, n198?.sharedData);
                  const _on_click62 = () => {
                    return goToDemo("copy");
                  };
                  const n201 = _createSharedDataComponentWithFallback(_component_up_cell, "897f7060", {
                    title: "Copy 文本复制",
                    "is-link": "",
                    onClick: () => {
                      return _on_click62;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n199 = _createSharedDataComponentWithFallback(_component_up_icon, "897f68dc", {
                        name: "file-text",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 131, n199?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 130, n201?.sharedData);
                })
              });
              _setSharedData(__sharedData, 95, n202?.sharedData);
              const n229 = _createSharedDataComponentWithFallback(_component_up_cell_group, "897eb560", { border: false }, {
                "default": _withSharedDataVaporCtx(() => {
                  const _on_click63 = () => {
                    return goToDemo("navbar");
                  };
                  const n207 = _createSharedDataComponentWithFallback(_component_up_cell, "897eb468", {
                    title: "Navbar 导航栏",
                    "is-link": "",
                    onClick: () => {
                      return _on_click63;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n205 = _createSharedDataComponentWithFallback(_component_up_icon, "897eacb4", {
                        name: "arrow-left",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 134, n205?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 133, n207?.sharedData);
                  const _on_click64 = () => {
                    return goToDemo("navbar-mini");
                  };
                  const n210 = _createSharedDataComponentWithFallback(_component_up_cell, "897e9f5e", {
                    title: "NavbarMini 迷你导航",
                    "is-link": "",
                    onClick: () => {
                      return _on_click64;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n208 = _createSharedDataComponentWithFallback(_component_up_icon, "897e9796", {
                        name: "arrow-left",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 136, n208?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 135, n210?.sharedData);
                  const _on_click65 = () => {
                    return goToDemo("back-top");
                  };
                  const n213 = _createSharedDataComponentWithFallback(_component_up_cell, "897e8f56", {
                    title: "BackTop 返回顶部",
                    "is-link": "",
                    onClick: () => {
                      return _on_click65;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n211 = _createSharedDataComponentWithFallback(_component_up_icon, "897e879a", {
                        name: "arrow-upward",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 138, n211?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 137, n213?.sharedData);
                  const _on_click66 = () => {
                    return goToDemo("tabbar");
                  };
                  const n216 = _createSharedDataComponentWithFallback(_component_up_cell, "897ddc6c", {
                    title: "Tabbar 底部导航",
                    "is-link": "",
                    onClick: () => {
                      return _on_click66;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n214 = _createSharedDataComponentWithFallback(_component_up_icon, "897dd4e0", {
                        name: "list",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 140, n214?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 139, n216?.sharedData);
                  const _on_click67 = () => {
                    return goToDemo("tabs");
                  };
                  const n219 = _createSharedDataComponentWithFallback(_component_up_cell, "897dccac", {
                    title: "Tabs 标签页",
                    "is-link": "",
                    onClick: () => {
                      return _on_click67;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n217 = _createSharedDataComponentWithFallback(_component_up_icon, "897dc52a", {
                        name: "list",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 142, n217?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 141, n219?.sharedData);
                  const _on_click68 = () => {
                    return goToDemo("subsection");
                  };
                  const n222 = _createSharedDataComponentWithFallback(_component_up_cell, "897dbd20", {
                    title: "Subsection 分段器",
                    "is-link": "",
                    onClick: () => {
                      return _on_click68;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n220 = _createSharedDataComponentWithFallback(_component_up_icon, "897db55c", {
                        name: "list",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 144, n220?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 143, n222?.sharedData);
                  const _on_click69 = () => {
                    return goToDemo("index-list");
                  };
                  const n225 = _createSharedDataComponentWithFallback(_component_up_cell, "897dad28", {
                    title: "IndexList 索引列表",
                    "is-link": "",
                    onClick: () => {
                      return _on_click69;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n223 = _createSharedDataComponentWithFallback(_component_up_icon, "897da04e", {
                        name: "list",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 146, n223?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 145, n225?.sharedData);
                  const _on_click70 = () => {
                    return goToDemo("mp-html");
                  };
                  const n228 = _createSharedDataComponentWithFallback(_component_up_cell, "897d981a", {
                    title: "MpHtml 富文本组件",
                    "is-link": "",
                    onClick: () => {
                      return _on_click70;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n226 = _createSharedDataComponentWithFallback(_component_up_icon, "897cf2b6", {
                        name: "file-text",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 148, n226?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 147, n228?.sharedData);
                })
              });
              _setSharedData(__sharedData, 132, n229?.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n232.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n233.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const uviewUltra = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  uviewUltra as default
};
//# sourceMappingURL=uview-ultra.js.map
