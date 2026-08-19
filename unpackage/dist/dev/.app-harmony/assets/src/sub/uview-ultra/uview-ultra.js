import { _ as __easycom_0 } from "../../components/NavBar/NavBar.js";
import { _ as __easycom_0$1 } from "../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import { _ as __easycom_1 } from "../../../uni_modules/uview-ultra/components/up-cell/up-cell.js";
import { _ as __easycom_2 } from "../../../uni_modules/uview-ultra/components/up-cell-group/up-cell-group.js";
import { A as AppKu } from "../../../App.ku.js";
import { L as LayoutComponent } from "../../layouts/default.js";
import "../../store/index.js";
import { u as useAppStore } from "../../store/app.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
import "../../utils/systemInfo.js";
import "../../utils/theme.js";
import "../../../theme.js";
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
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, toDisplayString: _toDisplayString, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraUviewUltra";
const { computed } = globalThis.Vue;
const demoCount = 73;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "227d1f65",
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
      const n237 = _createSharedDataComponent(AppKu, "078c97b3", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n236 = _createSharedDataComponent(LayoutComponent, "2bf342ba", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "uview-ultra 示例"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "56c57630", {
                title: "uview-ultra 组件演示",
                "auto-back": true,
                "safe-area-inset-top": true
              });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              _setSharedData(__sharedData, 151, _toDisplayString(demoCount));
              const n92 = _createSharedDataComponentWithFallback(_component_up_cell_group, "56c590d7", { border: false }, {
                "default": _withSharedDataVaporCtx(() => {
                  const _on_click = () => {
                    return goToDemo("button");
                  };
                  const n10 = _createSharedDataComponentWithFallback(_component_up_cell, "56c593de", {
                    title: "Button 按钮",
                    "is-link": "",
                    onClick: () => {
                      return _on_click;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n8 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2d8d48", {
                        name: "plus-circle",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 5, n8?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 4, n10?.sharedData);
                  const _on_click1 = () => {
                    return goToDemo("icon");
                  };
                  const n13 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2d8506", {
                    title: "Icon 图标",
                    "is-link": "",
                    onClick: () => {
                      return _on_click1;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n11 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2d7d86", {
                        name: "photo",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 7, n11?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 6, n13?.sharedData);
                  const _on_click2 = () => {
                    return goToDemo("text");
                  };
                  const n16 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2d703a", {
                    title: "Text 文本",
                    "is-link": "",
                    onClick: () => {
                      return _on_click2;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n14 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2d6dfa", {
                        name: "file-text",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 9, n14?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 8, n16?.sharedData);
                  const _on_click3 = () => {
                    return goToDemo("link");
                  };
                  const n19 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2d607c", {
                    title: "Link 超链接",
                    "is-link": "",
                    onClick: () => {
                      return _on_click3;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n17 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2d58fa", {
                        name: "attach",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 11, n17?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 10, n19?.sharedData);
                  const _on_click4 = () => {
                    return goToDemo("empty");
                  };
                  const n22 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2d50ec", {
                    title: "Empty 空白页",
                    "is-link": "",
                    onClick: () => {
                      return _on_click4;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n20 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2d493c", {
                        name: "info-circle",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 13, n20?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 12, n22?.sharedData);
                  const _on_click5 = () => {
                    return goToDemo("divider");
                  };
                  const n25 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2ca350", {
                    title: "Divider 分割线",
                    "is-link": "",
                    onClick: () => {
                      return _on_click5;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n23 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2c9bc2", {
                        name: "minus",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 15, n23?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 14, n25?.sharedData);
                  const _on_click6 = () => {
                    return goToDemo("loading-icon");
                  };
                  const n28 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2c8e76", {
                    title: "LoadingIcon 加载图标",
                    "is-link": "",
                    onClick: () => {
                      return _on_click6;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n26 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2c8680", {
                        name: "reload",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 17, n26?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 16, n28?.sharedData);
                  const _on_click7 = () => {
                    return goToDemo("skeleton");
                  };
                  const n31 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2c7e48", {
                    title: "Skeleton 骨架屏",
                    "is-link": "",
                    onClick: () => {
                      return _on_click7;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n29 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2c76b6", {
                        name: "list-dot",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 19, n29?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 18, n31?.sharedData);
                  const _on_click8 = () => {
                    return goToDemo("tag");
                  };
                  const n34 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2c6964", {
                    title: "Tag 标签",
                    "is-link": "",
                    onClick: () => {
                      return _on_click8;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n32 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2c61e8", {
                        name: "tags",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 21, n32?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 20, n34?.sharedData);
                  const _on_click9 = () => {
                    return goToDemo("badge");
                  };
                  const n37 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2bbc0a", {
                    title: "Badge 徽标",
                    "is-link": "",
                    onClick: () => {
                      return _on_click9;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n35 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2bb486", {
                        name: "info-circle",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 23, n35?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 22, n37?.sharedData);
                  const _on_click10 = () => {
                    return goToDemo("avatar");
                  };
                  const n40 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2bac44", {
                    title: "Avatar 头像",
                    "is-link": "",
                    onClick: () => {
                      return _on_click10;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n38 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2ba4bc", {
                        name: "account",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 25, n38?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 24, n40?.sharedData);
                  const _on_click11 = () => {
                    return goToDemo("card");
                  };
                  const n43 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2b9c82", {
                    title: "Card 卡片",
                    "is-link": "",
                    onClick: () => {
                      return _on_click11;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n41 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2b9502", {
                        name: "map",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 27, n41?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 26, n43?.sharedData);
                  const _on_click12 = () => {
                    return goToDemo("list");
                  };
                  const n46 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2b87ba", {
                    title: "List 列表",
                    "is-link": "",
                    onClick: () => {
                      return _on_click12;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n44 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2b803a", {
                        name: "list-dot",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 29, n44?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 28, n46?.sharedData);
                  const _on_click13 = () => {
                    return goToDemo("swiper");
                  };
                  const n49 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2b77fe", {
                    title: "Swiper 轮播图",
                    "is-link": "",
                    onClick: () => {
                      return _on_click13;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n47 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2ad2ca", {
                        name: "photo",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 31, n47?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 30, n49?.sharedData);
                  const _on_click14 = () => {
                    return goToDemo("image");
                  };
                  const n52 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2aca94", {
                    title: "Image 图片组件",
                    "is-link": "",
                    onClick: () => {
                      return _on_click14;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n50 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2ac30c", {
                        name: "photo",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 33, n50?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 32, n52?.sharedData);
                  const _on_click15 = () => {
                    return goToDemo("transition");
                  };
                  const n55 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2ab5c0", {
                    title: "Transition 动画过渡",
                    "is-link": "",
                    onClick: () => {
                      return _on_click15;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n53 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2aadfa", {
                        name: "play-circle",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 35, n53?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 34, n55?.sharedData);
                  const _on_click16 = () => {
                    return goToDemo("steps");
                  };
                  const n58 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2aa5b8", {
                    title: "Steps 步骤条",
                    "is-link": "",
                    onClick: () => {
                      return _on_click16;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n56 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2a9e32", {
                        name: "order",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 37, n56?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 36, n58?.sharedData);
                  const _on_click17 = () => {
                    return goToDemo("grid");
                  };
                  const n61 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2a95fa", {
                    title: "Grid 宫格",
                    "is-link": "",
                    onClick: () => {
                      return _on_click17;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n59 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2a8e46", {
                        name: () => {
                          return "grid";
                        },
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 39, n59?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 38, n61?.sharedData);
                  const _on_click18 = () => {
                    return goToDemo("line");
                  };
                  const n64 = _createSharedDataComponentWithFallback(_component_up_cell, "fc29e342", {
                    title: "Line 线条",
                    "is-link": "",
                    onClick: () => {
                      return _on_click18;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n62 = _createSharedDataComponentWithFallback(_component_up_icon, "fc29dbc2", {
                        name: "minus",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 41, n62?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 40, n64?.sharedData);
                  const _on_click19 = () => {
                    return goToDemo("album");
                  };
                  const n67 = _createSharedDataComponentWithFallback(_component_up_cell, "fc29d38c", {
                    title: "Album 相册",
                    "is-link": "",
                    onClick: () => {
                      return _on_click19;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n65 = _createSharedDataComponentWithFallback(_component_up_icon, "fc29cc08", {
                        name: "photo",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 43, n65?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 42, n67?.sharedData);
                  const _on_click20 = () => {
                    return goToDemo("gap");
                  };
                  const n70 = _createSharedDataComponentWithFallback(_component_up_cell, "fc29c3fc", {
                    title: "Gap 间隔槽",
                    "is-link": "",
                    onClick: () => {
                      return _on_click20;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n68 = _createSharedDataComponentWithFallback(_component_up_icon, "fc29bc7e", {
                        name: "minus",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 45, n68?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 44, n70?.sharedData);
                  const _on_click21 = () => {
                    return goToDemo("sticky");
                  };
                  const n73 = _createSharedDataComponentWithFallback(_component_up_cell, "fc29af32", {
                    title: "Sticky 吸顶",
                    "is-link": "",
                    onClick: () => {
                      return _on_click21;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n71 = _createSharedDataComponentWithFallback(_component_up_icon, "fc29a776", {
                        name: "arrow-up",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 47, n71?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 46, n73?.sharedData);
                  const _on_click22 = () => {
                    return goToDemo("table");
                  };
                  const n76 = _createSharedDataComponentWithFallback(_component_up_cell, "fc290190", {
                    title: "Table 表格",
                    "is-link": "",
                    onClick: () => {
                      return _on_click22;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n74 = _createSharedDataComponentWithFallback(_component_up_icon, "fc28fa02", {
                        name: () => {
                          return "grid";
                        },
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 49, n74?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 48, n76?.sharedData);
                  const _on_click23 = () => {
                    return goToDemo("lazy-load");
                  };
                  const n79 = _createSharedDataComponentWithFallback(_component_up_cell, "fc28f194", {
                    title: "LazyLoad 懒加载",
                    "is-link": "",
                    onClick: () => {
                      return _on_click23;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n77 = _createSharedDataComponentWithFallback(_component_up_icon, "fc28e9d6", {
                        name: "photo",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 51, n77?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 50, n79?.sharedData);
                  const _on_click24 = () => {
                    return goToDemo("loadmore");
                  };
                  const n82 = _createSharedDataComponentWithFallback(_component_up_cell, "fc28dcb4", {
                    title: "Loadmore 加载更多",
                    "is-link": "",
                    onClick: () => {
                      return _on_click24;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n80 = _createSharedDataComponentWithFallback(_component_up_icon, "fc28d4f6", {
                        name: "more-dot-fill",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 53, n80?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 52, n82?.sharedData);
                  const _on_click25 = () => {
                    return goToDemo("parse");
                  };
                  const n85 = _createSharedDataComponentWithFallback(_component_up_cell, "fc28cc86", {
                    title: "Parse 富文本解析",
                    "is-link": "",
                    onClick: () => {
                      return _on_click25;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n83 = _createSharedDataComponentWithFallback(_component_up_icon, "fc28c4fc", {
                        name: "file-text",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 55, n83?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 54, n85?.sharedData);
                  const _on_click26 = () => {
                    return goToDemo("qrcode");
                  };
                  const n88 = _createSharedDataComponentWithFallback(_component_up_cell, "fc28bcbe", {
                    title: "Qrcode 二维码",
                    "is-link": "",
                    onClick: () => {
                      return _on_click26;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n86 = _createSharedDataComponentWithFallback(_component_up_icon, "fc28124a", {
                        name: "scan",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 57, n86?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 56, n88?.sharedData);
                  const _on_click27 = () => {
                    return goToDemo("waterfall");
                  };
                  const n91 = _createSharedDataComponentWithFallback(_component_up_cell, "fc280a40", {
                    title: "Waterfall 瀑布流",
                    "is-link": "",
                    onClick: () => {
                      return _on_click27;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n89 = _createSharedDataComponentWithFallback(_component_up_icon, "fc280280", {
                        name: () => {
                          return "grid";
                        },
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 59, n89?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 58, n91?.sharedData);
                })
              });
              _setSharedData(__sharedData, 3, n92?.sharedData);
              const n146 = _createSharedDataComponentWithFallback(_component_up_cell_group, "fc27ec72", { border: false }, {
                "default": _withSharedDataVaporCtx(() => {
                  const _on_click28 = () => {
                    return goToDemo("input");
                  };
                  const n97 = _createSharedDataComponentWithFallback(_component_up_cell, "fc27eb7a", {
                    title: "Input 输入框",
                    "is-link": "",
                    onClick: () => {
                      return _on_click28;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n95 = _createSharedDataComponentWithFallback(_component_up_icon, "fc27e3ca", {
                        name: "edit-pen",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 62, n95?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 61, n97?.sharedData);
                  const _on_click29 = () => {
                    return goToDemo("checkbox");
                  };
                  const n100 = _createSharedDataComponentWithFallback(_component_up_cell, "fc27db8e", {
                    title: "Checkbox 复选框",
                    "is-link": "",
                    onClick: () => {
                      return _on_click29;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n98 = _createSharedDataComponentWithFallback(_component_up_icon, "fc27d3fc", {
                        name: "checkbox-mark",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 64, n98?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 63, n100?.sharedData);
                  const _on_click30 = () => {
                    return goToDemo("radio");
                  };
                  const n103 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2728cc", {
                    title: "Radio 单选框",
                    "is-link": "",
                    onClick: () => {
                      return _on_click30;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n101 = _createSharedDataComponentWithFallback(_component_up_icon, "fc272146", {
                        name: "checkmark-circle",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 66, n101?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 65, n103?.sharedData);
                  const _on_click31 = () => {
                    return goToDemo("switch");
                  };
                  const n106 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2718d0", {
                    title: "Switch 开关",
                    "is-link": "",
                    onClick: () => {
                      return _on_click31;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n104 = _createSharedDataComponentWithFallback(_component_up_icon, "fc271148", {
                        name: "more-circle",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 68, n104?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 67, n106?.sharedData);
                  const _on_click32 = () => {
                    return goToDemo("rate");
                  };
                  const n109 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2703c6", {
                    title: "Rate 评分",
                    "is-link": "",
                    onClick: () => {
                      return _on_click32;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n107 = _createSharedDataComponentWithFallback(_component_up_icon, "fc26fc70", {
                        name: "star",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 70, n107?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 69, n109?.sharedData);
                  const _on_click33 = () => {
                    return goToDemo("number-box");
                  };
                  const n112 = _createSharedDataComponentWithFallback(_component_up_cell, "fc26f43c", {
                    title: "NumberBox 步进器",
                    "is-link": "",
                    onClick: () => {
                      return _on_click33;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n110 = _createSharedDataComponentWithFallback(_component_up_icon, "fc26ec7a", {
                        name: "plus",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 72, n110?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 71, n112?.sharedData);
                  const _on_click34 = () => {
                    return goToDemo("slider");
                  };
                  const n115 = _createSharedDataComponentWithFallback(_component_up_cell, "fc26469c", {
                    title: "Slider 滑块",
                    "is-link": "",
                    onClick: () => {
                      return _on_click34;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n113 = _createSharedDataComponentWithFallback(_component_up_icon, "fc263f14", {
                        name: "minus",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 74, n113?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 73, n115?.sharedData);
                  const _on_click35 = () => {
                    return goToDemo("textarea");
                  };
                  const n118 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2631c8", {
                    title: "Textarea 多行文本",
                    "is-link": "",
                    onClick: () => {
                      return _on_click35;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n116 = _createSharedDataComponentWithFallback(_component_up_icon, "fc262a0a", {
                        name: "file-text",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 76, n116?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 75, n118?.sharedData);
                  const _on_click36 = () => {
                    return goToDemo("upload");
                  };
                  const n121 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2621cc", {
                    title: "Upload 上传",
                    "is-link": "",
                    onClick: () => {
                      return _on_click36;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n119 = _createSharedDataComponentWithFallback(_component_up_icon, "fc261a44", {
                        name: "arrow-up",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 78, n119?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 77, n121?.sharedData);
                  const _on_click37 = () => {
                    return goToDemo("search");
                  };
                  const n124 = _createSharedDataComponentWithFallback(_component_up_cell, "fc261208", {
                    title: "Search 搜索",
                    "is-link": "",
                    onClick: () => {
                      return _on_click37;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n122 = _createSharedDataComponentWithFallback(_component_up_icon, "fc260a80", {
                        name: "search",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 80, n122?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 79, n124?.sharedData);
                  const _on_click38 = () => {
                    return goToDemo("form");
                  };
                  const n127 = _createSharedDataComponentWithFallback(_component_up_cell, "89843992", {
                    title: "完整 Form 表单示例",
                    "is-link": "",
                    onClick: () => {
                      return _on_click38;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n125 = _createSharedDataComponentWithFallback(_component_up_icon, "898431de", {
                        name: "edit-pen",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 82, n125?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 81, n127?.sharedData);
                  const _on_click39 = () => {
                    return goToDemo("pagination");
                  };
                  const n130 = _createSharedDataComponentWithFallback(_component_up_cell, "898429a2", {
                    title: "Pagination 分页器",
                    "is-link": "",
                    onClick: () => {
                      return _on_click39;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n128 = _createSharedDataComponentWithFallback(_component_up_icon, "898421de", {
                        name: "more-circle",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 84, n128?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 83, n130?.sharedData);
                  const _on_click40 = () => {
                    return goToDemo("keyboard");
                  };
                  const n133 = _createSharedDataComponentWithFallback(_component_up_cell, "8984199a", {
                    title: "Keyboard 键盘",
                    "is-link": "",
                    onClick: () => {
                      return _on_click40;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n131 = _createSharedDataComponentWithFallback(_component_up_icon, "898411e0", {
                        name: "grid-fill",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 86, n131?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 85, n133?.sharedData);
                  const _on_click41 = () => {
                    return goToDemo("dropdown");
                  };
                  const n136 = _createSharedDataComponentWithFallback(_component_up_cell, "8984048c", {
                    title: "Dropdown 下拉菜单",
                    "is-link": "",
                    onClick: () => {
                      return _on_click41;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n134 = _createSharedDataComponentWithFallback(_component_up_icon, "8983fcce", {
                        name: "arrow-down-fill",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 88, n134?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 87, n136?.sharedData);
                  const _on_click42 = () => {
                    return goToDemo("swipe-action");
                  };
                  const n139 = _createSharedDataComponentWithFallback(_component_up_cell, "8983f45a", {
                    title: "SwipeAction 滑动操作",
                    "is-link": "",
                    onClick: () => {
                      return _on_click42;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n137 = _createSharedDataComponentWithFallback(_component_up_icon, "89834ee4", {
                        name: "list",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 90, n137?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 89, n139?.sharedData);
                  const _on_click43 = () => {
                    return goToDemo("code-input");
                  };
                  const n142 = _createSharedDataComponentWithFallback(_component_up_cell, "8983419a", {
                    title: "CodeInput 验证码输入",
                    "is-link": "",
                    onClick: () => {
                      return _on_click43;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n140 = _createSharedDataComponentWithFallback(_component_up_icon, "898339d4", {
                        name: "lock",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 92, n140?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 91, n142?.sharedData);
                  const _on_click44 = () => {
                    return goToDemo("code");
                  };
                  const n145 = _createSharedDataComponentWithFallback(_component_up_cell, "898331a0", {
                    title: "Code 验证码倒计时",
                    "is-link": "",
                    onClick: () => {
                      return _on_click44;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n143 = _createSharedDataComponentWithFallback(_component_up_icon, "89832a18", {
                        name: "clock",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 94, n143?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 93, n145?.sharedData);
                })
              });
              _setSharedData(__sharedData, 60, n146?.sharedData);
              const n206 = _createSharedDataComponentWithFallback(_component_up_cell_group, "89831442", { border: false }, {
                "default": _withSharedDataVaporCtx(() => {
                  const _on_click45 = () => {
                    return goToDemo("alert");
                  };
                  const n151 = _createSharedDataComponentWithFallback(_component_up_cell, "8983134a", {
                    title: "Alert 警告提示",
                    "is-link": "",
                    onClick: () => {
                      return _on_click45;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n149 = _createSharedDataComponentWithFallback(_component_up_icon, "89830b98", {
                        name: "info-circle",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 97, n149?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 96, n151?.sharedData);
                  const _on_click46 = () => {
                    return goToDemo("calendar");
                  };
                  const n154 = _createSharedDataComponentWithFallback(_component_up_cell, "89826096", {
                    title: "Calendar 日历",
                    "is-link": "",
                    onClick: () => {
                      return _on_click46;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n152 = _createSharedDataComponentWithFallback(_component_up_icon, "898258dc", {
                        name: "calendar",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 99, n152?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 98, n154?.sharedData);
                  const _on_click47 = () => {
                    return goToDemo("picker");
                  };
                  const n157 = _createSharedDataComponentWithFallback(_component_up_cell, "898250a0", {
                    title: "Picker 选择器",
                    "is-link": "",
                    onClick: () => {
                      return _on_click47;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n155 = _createSharedDataComponentWithFallback(_component_up_icon, "89824916", {
                        name: "list",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 101, n155?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 100, n157?.sharedData);
                  const _on_click48 = () => {
                    return goToDemo("datetime-picker");
                  };
                  const n160 = _createSharedDataComponentWithFallback(_component_up_cell, "898240e2", {
                    title: "DatetimePicker 时间选择",
                    "is-link": "",
                    onClick: () => {
                      return _on_click48;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n158 = _createSharedDataComponentWithFallback(_component_up_icon, "898238e0", {
                        name: "clock",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 103, n158?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 102, n160?.sharedData);
                  const _on_click49 = () => {
                    return goToDemo("action-sheet");
                  };
                  const n163 = _createSharedDataComponentWithFallback(_component_up_cell, "89822b94", {
                    title: "ActionSheet 动作面板",
                    "is-link": "",
                    onClick: () => {
                      return _on_click49;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n161 = _createSharedDataComponentWithFallback(_component_up_icon, "898223c8", {
                        name: "server-man",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 105, n161?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 104, n163?.sharedData);
                  const _on_click50 = () => {
                    return goToDemo("notice-bar");
                  };
                  const n166 = _createSharedDataComponentWithFallback(_component_up_cell, "89817dde", {
                    title: "NoticeBar 滚动通知",
                    "is-link": "",
                    onClick: () => {
                      return _on_click50;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n164 = _createSharedDataComponentWithFallback(_component_up_icon, "898175f0", {
                        name: "volume",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 107, n164?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 106, n166?.sharedData);
                  const _on_click51 = () => {
                    return goToDemo("collapse");
                  };
                  const n169 = _createSharedDataComponentWithFallback(_component_up_cell, "898168cc", {
                    title: "Collapse 折叠面板",
                    "is-link": "",
                    onClick: () => {
                      return _on_click51;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n167 = _createSharedDataComponentWithFallback(_component_up_icon, "8981610e", {
                        name: "arrow-down",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 109, n167?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 108, n169?.sharedData);
                  const _on_click52 = () => {
                    return goToDemo("toast");
                  };
                  const n172 = _createSharedDataComponentWithFallback(_component_up_cell, "898158a4", {
                    title: "Toast 消息提示",
                    "is-link": "",
                    onClick: () => {
                      return _on_click52;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n170 = _createSharedDataComponentWithFallback(_component_up_icon, "8981511c", {
                        name: "chat",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 111, n170?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 110, n172?.sharedData);
                  const _on_click53 = () => {
                    return goToDemo("notify");
                  };
                  const n175 = _createSharedDataComponentWithFallback(_component_up_cell, "89814912", {
                    title: "Notify 消息通知",
                    "is-link": "",
                    onClick: () => {
                      return _on_click53;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n173 = _createSharedDataComponentWithFallback(_component_up_icon, "8981415c", {
                        name: "bell",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 113, n173?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 112, n175?.sharedData);
                  const _on_click54 = () => {
                    return goToDemo("loading-page");
                  };
                  const n178 = _createSharedDataComponentWithFallback(_component_up_cell, "89809668", {
                    title: "LoadingPage 加载页",
                    "is-link": "",
                    onClick: () => {
                      return _on_click54;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n176 = _createSharedDataComponentWithFallback(_component_up_icon, "89808e9e", {
                        name: "more-dot-fill",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 115, n176?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 114, n178?.sharedData);
                  const _on_click55 = () => {
                    return goToDemo("overlay");
                  };
                  const n181 = _createSharedDataComponentWithFallback(_component_up_cell, "8980862e", {
                    title: "Overlay 遮罩层",
                    "is-link": "",
                    onClick: () => {
                      return _on_click55;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n179 = _createSharedDataComponentWithFallback(_component_up_icon, "89807ea0", {
                        name: "scan",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 117, n179?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 116, n181?.sharedData);
                  const _on_click56 = () => {
                    return goToDemo("modal");
                  };
                  const n184 = _createSharedDataComponentWithFallback(_component_up_cell, "8980766c", {
                    title: "Modal 模态框",
                    "is-link": "",
                    onClick: () => {
                      return _on_click56;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n182 = _createSharedDataComponentWithFallback(_component_up_icon, "89806ee6", {
                        name: "email",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 119, n182?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 118, n184?.sharedData);
                  const _on_click57 = () => {
                    return goToDemo("popup");
                  };
                  const n187 = _createSharedDataComponentWithFallback(_component_up_cell, "8980619a", {
                    title: "Popup 弹出层",
                    "is-link": "",
                    onClick: () => {
                      return _on_click57;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n185 = _createSharedDataComponentWithFallback(_component_up_icon, "89805a14", {
                        name: "server-man",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 121, n185?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 120, n187?.sharedData);
                  const _on_click58 = () => {
                    return goToDemo("no-network");
                  };
                  const n190 = _createSharedDataComponentWithFallback(_component_up_cell, "898051d4", {
                    title: "NoNetwork 无网络提示",
                    "is-link": "",
                    onClick: () => {
                      return _on_click58;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n188 = _createSharedDataComponentWithFallback(_component_up_icon, "897fac64", {
                        name: "wifi-off",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 123, n188?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 122, n190?.sharedData);
                  const _on_click59 = () => {
                    return goToDemo("line-progress");
                  };
                  const n193 = _createSharedDataComponentWithFallback(_component_up_cell, "897fa426", {
                    title: "LineProgress 线型进度",
                    "is-link": "",
                    onClick: () => {
                      return _on_click59;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n191 = _createSharedDataComponentWithFallback(_component_up_icon, "897f9716", {
                        name: "minus",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 125, n191?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 124, n193?.sharedData);
                  const _on_click60 = () => {
                    return goToDemo("circle-progress");
                  };
                  const n196 = _createSharedDataComponentWithFallback(_component_up_cell, "897f8ee0", {
                    title: "CircleProgress 圆形进度条",
                    "is-link": "",
                    onClick: () => {
                      return _on_click60;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n194 = _createSharedDataComponentWithFallback(_component_up_icon, "897f86dc", {
                        name: "reload",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 127, n194?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 126, n196?.sharedData);
                  const _on_click61 = () => {
                    return goToDemo("count-down");
                  };
                  const n199 = _createSharedDataComponentWithFallback(_component_up_cell, "897f7ea4", {
                    title: "CountDown 倒计时",
                    "is-link": "",
                    onClick: () => {
                      return _on_click61;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n197 = _createSharedDataComponentWithFallback(_component_up_icon, "897f71cc", {
                        name: "clock",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 129, n197?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 128, n199?.sharedData);
                  const _on_click62 = () => {
                    return goToDemo("count-to");
                  };
                  const n202 = _createSharedDataComponentWithFallback(_component_up_cell, "897f6996", {
                    title: "CountTo 数字滚动",
                    "is-link": "",
                    onClick: () => {
                      return _on_click62;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n200 = _createSharedDataComponentWithFallback(_component_up_icon, "897ec430", {
                        name: "play-right-fill",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 131, n200?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 130, n202?.sharedData);
                  const _on_click63 = () => {
                    return goToDemo("copy");
                  };
                  const n205 = _createSharedDataComponentWithFallback(_component_up_cell, "897ebbe6", {
                    title: "Copy 文本复制",
                    "is-link": "",
                    onClick: () => {
                      return _on_click63;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n203 = _createSharedDataComponentWithFallback(_component_up_icon, "897eb462", {
                        name: "file-text",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 133, n203?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 132, n205?.sharedData);
                })
              });
              _setSharedData(__sharedData, 95, n206?.sharedData);
              const n233 = _createSharedDataComponentWithFallback(_component_up_cell_group, "897e9e66", { border: false }, {
                "default": _withSharedDataVaporCtx(() => {
                  const _on_click64 = () => {
                    return goToDemo("navbar");
                  };
                  const n211 = _createSharedDataComponentWithFallback(_component_up_cell, "897e9d6e", {
                    title: "Navbar 导航栏",
                    "is-link": "",
                    onClick: () => {
                      return _on_click64;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n209 = _createSharedDataComponentWithFallback(_component_up_icon, "897e95e4", {
                        name: "arrow-left",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 136, n209?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 135, n211?.sharedData);
                  const _on_click65 = () => {
                    return goToDemo("navbar-mini");
                  };
                  const n214 = _createSharedDataComponentWithFallback(_component_up_cell, "897e888e", {
                    title: "NavbarMini 迷你导航",
                    "is-link": "",
                    onClick: () => {
                      return _on_click65;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n212 = _createSharedDataComponentWithFallback(_component_up_icon, "897e809c", {
                        name: "arrow-left",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 138, n212?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 137, n214?.sharedData);
                  const _on_click66 = () => {
                    return goToDemo("back-top");
                  };
                  const n217 = _createSharedDataComponentWithFallback(_component_up_cell, "897ddab2", {
                    title: "BackTop 返回顶部",
                    "is-link": "",
                    onClick: () => {
                      return _on_click66;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n215 = _createSharedDataComponentWithFallback(_component_up_icon, "897dd2f6", {
                        name: "arrow-upward",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 140, n215?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 139, n217?.sharedData);
                  const _on_click67 = () => {
                    return goToDemo("tabbar");
                  };
                  const n220 = _createSharedDataComponentWithFallback(_component_up_cell, "897dc59c", {
                    title: "Tabbar 底部导航",
                    "is-link": "",
                    onClick: () => {
                      return _on_click67;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n218 = _createSharedDataComponentWithFallback(_component_up_icon, "897dbde6", {
                        name: "list",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 142, n218?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 141, n220?.sharedData);
                  const _on_click68 = () => {
                    return goToDemo("tabs");
                  };
                  const n223 = _createSharedDataComponentWithFallback(_component_up_cell, "897db5dc", {
                    title: "Tabs 标签页",
                    "is-link": "",
                    onClick: () => {
                      return _on_click68;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n221 = _createSharedDataComponentWithFallback(_component_up_icon, "897dae5a", {
                        name: "list",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 144, n221?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 143, n223?.sharedData);
                  const _on_click69 = () => {
                    return goToDemo("subsection");
                  };
                  const n226 = _createSharedDataComponentWithFallback(_component_up_cell, "897da626", {
                    title: "Subsection 分段器",
                    "is-link": "",
                    onClick: () => {
                      return _on_click69;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n224 = _createSharedDataComponentWithFallback(_component_up_icon, "897d9e62", {
                        name: "list",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 146, n224?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 145, n226?.sharedData);
                  const _on_click70 = () => {
                    return goToDemo("index-list");
                  };
                  const n229 = _createSharedDataComponentWithFallback(_component_up_cell, "897cf36e", {
                    title: "IndexList 索引列表",
                    "is-link": "",
                    onClick: () => {
                      return _on_click70;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n227 = _createSharedDataComponentWithFallback(_component_up_icon, "897cebaa", {
                        name: "list",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 148, n227?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 147, n229?.sharedData);
                  const _on_click71 = () => {
                    return goToDemo("mp-html");
                  };
                  const n232 = _createSharedDataComponentWithFallback(_component_up_cell, "897ce3a0", {
                    title: "MpHtml 富文本组件",
                    "is-link": "",
                    onClick: () => {
                      return _on_click71;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n230 = _createSharedDataComponentWithFallback(_component_up_icon, "897cdbe6", {
                        name: "file-text",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-8px"
                      });
                      _setSharedData(__sharedData, 150, n230?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 149, n232?.sharedData);
                })
              });
              _setSharedData(__sharedData, 134, n233?.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n236.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n237.sharedData);
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
